<template>
    <div class="row">
        <div class="col-md-12">
            <form @submit.prevent="submit_form" class="mb-3">
                <div class="d-flex flex-wrap mb-4">
                    <div class="mr-auto">
                        <span class="text-title" v-if="customer_slack === ''">{{ ("Add Customer") }}</span>
                        <span class="text-title" v-else>{{ ("Edit Customer") }}</span>
                    </div>
                    <div class="">
                        <button type="submit" class="btn btn-primary" :disabled="processing">
                            <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> {{ ("Save") }}
                        </button>
                    </div>
                </div>

                <p v-html="server_errors" :class="[error_class]"></p>

                <div class="mb-2">
                    <span class="text-subhead">Basic Information</span>
                </div>
                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="name">{{ ("Fullname") }}</label>
                        <input type="text" name="name" v-model="name" class="form-control form-control-custom" placeholder="Please enter fullname" autocomplete="off">
                        <span class="error" v-if="errors && errors.name">{{ errors.name }}</span>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="email">{{ ("Email") }}</label>
                        <input type="text" name="email" v-model="email" class="form-control form-control-custom" placeholder="Please enter email" autocomplete="off">
                        <span class="error" v-if="errors && errors.email">{{ errors.email }}</span>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="phone">{{ ("Contact No.") }}&nbsp;<small class="text-muted">(With Country Code)</small></label>
                        <input type="text" name="phone" v-model="phone" class="form-control form-control-custom" placeholder="Please enter Contact Number" autocomplete="off">
                        <span class="error" v-if="errors && errors.phone">{{ errors.phone }}</span>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="dob">{{ ("Date of Birth") }}</label>
                        <date-picker :format="date.format" :lang="date.lang" v-model="dob" input-class="form-control form-control-custom bg-white" name="dob" placeholder="Please enter Date of Birth" autocomplete="off"></date-picker>
                        <span class="error" v-if="errors && errors.dob">{{ errors.dob }}</span>
                    </div>
                </div>

                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="address">{{ ("Address") }}</label>
                        <textarea name="address" v-model="address" class="form-control form-control-custom" rows="5" placeholder="Enter Address"></textarea>
                        <span class="error" v-if="errors && errors.address">{{ errors.address }}</span>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="status">{{ ("Status") }}</label>
                        <select name="status" v-model="status" class="form-control form-control-custom custom-select">
                            <option value="">Choose Status..</option>
                            <option v-for="(status, index) in statuses" :value="status.value" :key="index">{{ status.label }}</option>
                        </select>
                        <span class="error" v-if="errors && errors.status">{{ errors.status }}</span>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="role">{{ ("Role") }}</label>
                        <select name="role" v-model="role" class="form-control form-control-custom custom-select">
                            <option value="">Choose Role..</option>
                            <option v-for="(role, index) in roles" :value="role.slack" :key="index">{{ role.label }}</option>
                        </select>
                        <span class="error" v-if="errors && errors.role">{{ errors.role }}</span>
                    </div>
                    <div class="mb-2" v-if="customer_slack !== ''">
                        <div class="mb-2">
                            <span class="text-subhead">{{ ("Password Reset") }}</span>
                        </div>
                        <div class="mb-2">
                            <button type="button" class="btn btn-outline-primary" :disabled="reset_password_form.processing" @click="reset_password">
                                <i class='fa fa-circle-notch fa-spin' v-if="reset_password_form.processing"></i> Reset Current Password
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <modalcomponent v-if="show_modal" @close="show_modal = false">
    <template v-slot:modal-header>
        Confirm
    </template>
    <template v-slot:modal-body>
        <p v-if="status == 0">You are making the user inactive.</p>
        Are you sure you want to proceed?
    </template>
    <template v-slot:modal-footer>
        <button type="button" class="btn btn-light" @click="show_modal = false">Cancel</button>
        <button type="button" class="btn btn-primary" @click="confirm_submit" v-bind:disabled="processing">
            <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> Continue
        </button>
    </template>
</modalcomponent>

<modalcomponent v-if="show_password_reset_confirm" @close="show_password_reset_confirm = false">
    <template v-slot:modal-header>
        Confirm
    </template>
    <template v-slot:modal-body>
        Are you sure you want to reset the password?
    </template>
    <template v-slot:modal-footer>
        <button type="button" class="btn btn-light" @click="show_password_reset_confirm = false">Cancel</button>
        <button type="button" class="btn btn-primary" @click="confirm_password_reset" v-bind:disabled="reset_password_form.processing">
            <i class='fa fa-circle-notch fa-spin' v-if="reset_password_form.processing"></i> Continue
        </button>
    </template>
</modalcomponent>


        <modalcomponent v-if="show_new_password" v-on:close="show_new_password = false">
            <template v-slot:modal-header>
                New Password
            </template>
            <template v-slot:modal-body>
                New password for the user: <code>{{ new_password }}</code>
            </template>
            <template v-slot:modal-footer>
                <button type="button" class="btn btn-primary" @click="$emit('close')">Ok</button>
            </template>
        </modalcomponent>
    </div>
</template>

<script>
import DatePicker from 'vue3-datepicker';
import moment from "moment";
import axios from 'axios';

export default {
    components: {
        DatePicker,
    },
    data() {
    return {
        date: {
            lang: 'en',
            format: "YYYY-MM-DD",
        },
        server_errors: '',
        error_class: '',
        processing: false,
        errors: {},  // Initialized errors object
        modal: false,
        show_modal: false,
        reset_password_form: {
            processing: false,
        },
        show_password_reset_confirm: false,
        show_new_password: false,
        new_password: '',
        api_link: (this.customer_data == null) ? '/api/add_customer' : '/api/update_customer/' + this.customer_data.slack,
        password_reset_api_link: (this.customer_data == null) ? '' : '/api/reset_customer_password/' + this.customer_data.slack,
        customer_slack: (this.customer_data == null) ? '' : this.customer_data.slack,
        email: (this.customer_data && this.customer_data.email) || '',
        name: (this.customer_data && this.customer_data.name) || '',
        role: (this.customer_data && this.customer_data.role && this.customer_data.role.slack) || '',
        phone: (this.customer_data && this.customer_data.phone) || '',
        address: (this.customer_data && this.customer_data.address) || '',
        dob: (this.customer_data && this.customer_data.dob_raw) ? new Date(this.customer_data.dob_raw) : null,
        status: (this.customer_data && this.customer_data.active == 1) ? 1 : 0,
        email_required: true,
        phone_required: true,
        statuses: [
            { value: 1, label: 'Active' },
            { value: 0, label: 'Inactive' },
        ],
        roles: []
    }
},


    mounted() {
        console.log('Add customer page loaded');
        // Fetch roles or other initialization if needed
    },

  props: {
            statuses: Array,
            roles: [Array, Object],
            customer_data: [Array, Object]
        },
        mounted() {
            console.log('Add customer page loaded');
        },
        computed: {
            email_required(){
                if(this.phone === '')
                    return true;
                return false;
            },
            phone_required(){
                if(this.email === '')
                    return true;
                return false;
            }
        },
    methods: {
        submit_form() {
            this.processing = true;
            const formData = new FormData();
            const { name, email, phone, role, address, dob, status } = this;
            formData.append("access_token", window.settings.access_token);
            formData.append("name", name || '');
            formData.append("email", email || '');
            formData.append("phone", phone || '');
            formData.append("role", role || '');
            formData.append("address", address || '');
            formData.append("dob", dob ? moment(dob).format('YYYY-MM-DD') : '');
            formData.append("status", status || '');

            axios.post(this.api_link, formData)
            .then((response) => {
        if (response.data.status_code == 200) {
            this.show_response_message( 'SUCCESS');

            setTimeout(() => {
              window.location.href = '/customers'; // Update the URL as per your route path
            }, 1000);
        } else {
            this.show_modal = false;
            this.processing = false;
            try {
                var error_json = JSON.parse(response.data.msg);
                this.loop_api_errors(error_json);
            } catch (err) {
                this.server_errors = response.data.msg;
            }
            this.error_class = 'error';
        }
    }).catch(error => {
                    this.processing = false;
                    this.errors = error.response.data.errors || {};  // Update errors object
                    this.server_errors = error.response.data.message || 'An error occurred.';
                    this.error_class = 'text-danger';
                });
        },
        reset_password() {
        this.show_password_reset_confirm = true; // Show reset confirmation modal
    },
    confirm_password_reset() {
        this.reset_password_form.processing = true; // Start processing

        const formData = new FormData();
        formData.append("access_token", window.settings.access_token);

        axios.post(this.password_reset_api_link, formData)
            .then((response) => {
                this.reset_password_form.processing = false; // Stop processing
                this.show_password_reset_confirm = false; // Close the modal

                if (response.data.status_code == 200) {
                    this.show_response_message(response.data.msg, 'SUCCESS');
                    this.new_password = response.data.data['secret'];
                    this.show_new_password = true; // Show new password modal
                } else {
                    try {
                        const error_json = JSON.parse(response.data.msg);
                        this.loop_api_errors(error_json);
                    } catch (err) {
                        this.server_errors = response.data.msg;
                    }
                    this.error_class = 'error';
                }
            })
            .catch((error) => {
                this.reset_password_form.processing = false; // Stop processing on error
                console.log(error);
            });
    },
    show_response_message(message, type) {
        console.log(type + ': ' + message); // You can replace this with a UI toast notification
    },
    }
}
</script>

<style scoped>
.error {
    color: red;
}
</style>
