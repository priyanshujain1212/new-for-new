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
            <button type="submit" class="submit-button">Next</button>
            <p class="footer-text forgot-password" @click="showNewUserForm = true; showWelcome = false;">
                New User?
            </p>
          </div>
        </transition>

        <transition name="fade">
          <div v-if="showNewUserForm" class="new-user-container">
            <h3>Sign Up</h3>

            <!-- First Name and Last Name in the same row -->
            <div class="input-row">
              <div class="input-group">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  v-model="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              <div class="input-group">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  v-model="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <!-- Phone Number and Email in the same row -->
            <div class="input-row">
              <div class="input-group">
                <label for="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  v-model="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div class="input-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <!-- Other fields -->
            <div class="input-group">
              <label for="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                v-model="dob"
                placeholder="Date of Birth"
                required
              />
            </div>

            <div class="input-group">
              <label for="address">Address</label>
              <input
                type="text"
                id="address"
                v-model="address"
                placeholder="Address"
                required
              />
            </div>
            <!-- Store Selection -->
            <div class="form-group">
        <label for="trustSelect">Select Trust</label>
        <select id="trustSelect" v-model="selectedTrust" required class="form-control">
          <option value="" disabled>Select a trust</option>
          <option v-for="trust in trusts" :key="trust.slack" :value="trust.slack">
            {{ trust.name }}
          </option>
        </select>
        </div>
            <!-- Password and Confirm Password in the same row -->
            <div class="input-row">
              <div class="input-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="signuppassword"
                  v-model="signuppassword"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="input-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>

            <!-- Create Account Button -->
      <button @click="addCustomer" type="button" class="submit-button">Create Account</button>

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
              <p>Please enter your password to login</p>
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
              <p class="footer-text forgot-password" @click="triggerForgotPassword">
                Forgot Password?
              </p>
             
            </div>
          </transition>
      </form>
    
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from "moment";

export default {
  data() {
    return {
      emailOrPhone: '',
      password: '',
      selectedTrust: '',
      trusts: [],
      newPassword: '',
      otp: '',
      name: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      dob: '',
      address: '',
      signuppassword: '',
      confirmPassword: '',
      showWelcome: true,
      showNewUserForm: false,
      passwordMismatch: false,
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
  mounted() {
  this.loadTrusts(); // Ensure the trusts data is fetched on component mount
},
watch: {
  phone(phone) {
    if (phone.length >= 10) { // Trigger API call when phone number length reaches 10 digits
      this.loadTrusts();
    }
  },
  email(email) {
    if (this.validateEmail(email)) { // Trigger API call when email is valid
      this.loadTrusts();
    }
  }
},
  methods: {
    async loadTrusts() {
    if (!this.phone && !this.email) return; // Don't call API if both fields are empty

    try {
      const response = await axios.post('/api/findstore', {
        phone: this.phone,
        email: this.email
      });
      this.trusts = response.data.stores || [];
    } catch (error) {
      console.error('Error fetching trusts:', error);
    }
  },

  // Optional email validation helper function
  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

      async addCustomer() {
      console.error('signuppassword', this.signuppassword);
      console.error('confirm', this.confirmPassword);
      
      const passwordMismatch = this.signuppassword !== this.confirmPassword;
      if (passwordMismatch) {
          console.error('Passwords do not match');
          return; // Early return if passwords do not match
      }
      const formData = new FormData();
      formData.append("is_signup", true); 
      formData.append("name", `${this.firstName} ${this.lastName}`); // Updated to match your new format
      formData.append("email", this.email || '');
      formData.append("phone", this.phone || '');
      formData.append("dob", this.dob ? moment(this.dob).format('YYYY-MM-DD') : ''); // Assuming dob needs formatting
      formData.append("address", this.address || '');
      formData.append("password", this.signuppassword);
      formData.append("selectedTrust", this.selectedTrust);
      formData.append("status", 1); // Assuming status is always 1
      formData.append("role", 5); // Assuming role is always 5

      try {
        console.error('formData:', formData);
          const response = await axios.post('/api/add_new_customer', formData);
          this.processing = false; // Stop processing

          if (response.data.success) {
              this.showNewUserForm = false;
              this.showWelcome = true;
              this.name = this.firstName; // Assuming you still want to set the name
          } else {
              console.error('Error creating user:', response.data.message);
          }
      } catch (error) {
          this.processing = false; // Stop processing on error
          console.error('Error creating user:', error);
      }
  },
      triggerForgotPassword() {
        this.showPasswordInput = false;
        this.showOTPInput = true; // Show OTP input for password reset
        this.otpSent = false; // Ensure OTP is not yet sent
      },
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
.error-message {
  color: red;
  font-size: 12px;
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
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.input-group select {
  width: 100%; /* Ensures the select box stretches to fit */
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.input-group {
  margin-bottom: 1rem; /* Add space below each input group */
}

.custom-select {
  width: 100%;
  padding: 8px; /* Same padding as input fields */
  border: 1px solid #ddd; /* Same border style as input fields */
  border-radius: 4px; /* Same border-radius as input fields */
  appearance: none; /* Removes the default dropdown arrow */
  background: white; /* Ensure background matches input fields */
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
.forgot-password {
  text-align: right;
  color: #007bff;
  cursor: pointer;
  margin-top: 10px;
}
.sign-in-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}
.form-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  overflow-y: auto;
}
.scrollable-form {
  max-height: 80vh; /* Ensures that the form doesn't overflow */
  overflow-y: auto; /* Adds scroll for overflow */
}
.input-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.input-group {
  flex: 1;
  margin-bottom: 15px;
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
.forgot-password:hover {
  text-decoration: underline;
}
</style>
