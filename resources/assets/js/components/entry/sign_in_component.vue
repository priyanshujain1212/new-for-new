<template>
  <div class="sign-in-container">
    <div class="form-card">
      <form @submit.prevent="handleSubmit">
        <transition name="fade">
          <div v-if="showWelcome">
            <h3>Welcome</h3>
            <div class="input-group">
              <label for="emailOrPhone">Phone Number</label>
              <input
                type="text"
                id="emailOrPhone"
                v-model="emailOrPhone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <button type="submit" class="submit-button">Submit</button>
          </div>
        </transition>

        <transition name="fade">
          <div v-if="showOTPInput">
            <h3>Hello! {{ name }}</h3>
            <p>Please set a password by verifying OTP.</p>
            <div class="input-row">
              <div class="input-group">
                <label for="otp">Enter OTP</label>
                <input
                  type="text"
                  id="otp"
                  v-model="otp"
                  placeholder="Enter OTP"
                  required
                />
              </div>
              <div class="otp-actions">
                <button 
                  @click="sendOTP" 
                  class="send-otp-button" 
                  :disabled="otpSent && countdown > 0"
                >
                  {{ otpSent && countdown > 0 ? countdownText : 'Send OTP' }}
                </button>
              </div>
            </div>
            <div class="input-group">
              <label for="newPassword">Create a new password</label>
              <input
                type="password"
                id="newPassword"
                v-model="newPassword"
                placeholder="Create a new password"
                required
              />
            </div>
            <button @click="saveNewPassword" class="submit-button">Save</button>
          </div>
        </transition>

        <transition name="fade">
          <div v-if="showPasswordInput">
            <h3>Hello! {{ name }}</h3>
            <p>Please enter your password</p>
            <div class="input-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                v-model="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button @click="Authenticate" class="submit-button">Login</button>
          </div>
        </transition>
      </form>
      <p class="footer-text">
        Don't have an account? <router-link to="/register">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      emailOrPhone: '',
      password: '',
      newPassword: '',
      otp: '',
      name: '',
      showWelcome: true,
      showOTPInput: false,
      showPasswordInput: false,
      otpSent: false,
      countdown: 60,
      countdownInterval: null,
    };
  },
  computed: {
    countdownText() {
      return `Resend OTP (${this.countdown})`;
    },
  },
  methods: {
    async handleSubmit() {
      const response = await this.checkFirstLogin(this.emailOrPhone);
      this.name = response.name;

      if (response.isFirstLogin) {
        this.showWelcome = false;
        this.showOTPInput = true; // Show OTP input for first-time users
        this.startCountdown();
      } else {
        this.showWelcome = false;
        this.showPasswordInput = true; // Show password input for returning users
      }
    },
    async checkFirstLogin(contact) {
      try {
        const response = await axios.post('/api/user/checkFirstLogin', { contact });
        return {
          isFirstLogin: response.data.isFirstLogin === 1,
          name: response.data.name,
        };
      } catch (error) {
        console.error('Error checking first login:', error);
        return { isFirstLogin: false, name: '' };
      }
    },
    async sendOTP() {
      this.otpSent = true;
      this.countdown = 60;
      this.startCountdown();
      try {
        const response = await axios.post('/api/user/sendOtp', {
          contact: this.emailOrPhone,
          name: this.name,
        });

        if (response.data.success) {
          console.log('OTP sent successfully');
        } else {
          console.error('Failed to send OTP:', response.data.message);
        }
      } catch (error) {
        console.error('Error sending OTP:', error);
      }
    },
    startCountdown() {
      if (this.countdownInterval) clearInterval(this.countdownInterval);
      this.countdownInterval = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(this.countdownInterval);
        }
      }, 1000);
    },
    async saveNewPassword() {
      try {
        const response = await axios.post('/api/user/verifyOtp', {
          contact: this.emailOrPhone,
          otp: this.otp,
          newPassword: this.newPassword,
        });

        if (response.data.success) {
          this.showOTPInput = false; // Hide OTP input section
          this.showPasswordInput = true; // Show password input section
          // this.newPassword = ''; // Clear the new password field
          // this.otp = ''; // Clear the OTP field
        } else {
          console.error('Error updating password:', response.data.message);
        }
      } catch (error) {
        console.error('Error saving new password:', error);
      }
    },
    async Authenticate(){
      try{
        const response = await axios.post('/api/user/authenticate', {
          contact: this.emailOrPhone,
          password: this.password,
        });
        if(response.data.status_code === 200) {
            window.location.href = response.data.link;
            }else{
            try{
               var error_json = JSON.parse(response.data.msg);
               this.loop_api_errors(error_json);
              }catch(err){
              this.server_errors = response.data.msg;
             }
             this.error_class = 'error';
            }
      } catch (error) {
        console.error('Error login:', error);
      }
    }
  },
};
</script>


<style scoped>
.sign-in-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #4a90e2, #d9b7e1); /* Gradient color */
}

.form-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 450px;
}

.form-title {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-row {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.otp-actions {
  margin-left: 10px; /* Spacing between OTP field and buttons */
}

.send-otp-button {
  padding: 5px;
  background-color: #007bff;
  margin-top: 12;
  text-align: center;
  color: white;
  border: none;
  height: 60px;
  width: 100px;
  border-radius: 5px;
  cursor: pointer;
}

.send-otp-button:hover {
  background-color: #0056b3;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.footer-text {
  text-align: center;
  margin-top: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
