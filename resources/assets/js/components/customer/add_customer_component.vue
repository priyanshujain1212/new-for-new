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

        <!-- Modal Components here -->
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

            formData.append("name", name || '');
            formData.append("email", email || '');
            formData.append("phone", phone || '');
            formData.append("role", role || '');
            formData.append("address", address || '');
            formData.append("dob", dob ? moment(dob).format('YYYY-MM-DD') : '');
            formData.append("status", status || '');

            axios.post(this.api_link, formData)
                .then(response => {
                    this.processing = false;
                    this.$emit("success", response.data);
                })
                .catch(error => {
                    this.processing = false;
                    this.errors = error.response.data.errors || {};  // Update errors object
                    this.server_errors = error.response.data.message || 'An error occurred.';
                    this.error_class = 'text-danger';
                });
        },
        reset_password() {
            this.reset_password_form.processing = true;

            axios.post(this.password_reset_api_link)
                .then(response => {
                    this.reset_password_form.processing = false;
                    this.new_password = response.data.password;
                    this.show_new_password = true;
                })
                .catch(error => {
                    this.reset_password_form.processing = false;
                    this.server_errors = error.response.data.message || 'An error occurred.';
                    this.error_class = 'text-danger';
                });
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
}
</style>
