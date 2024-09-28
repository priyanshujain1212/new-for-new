<template>
    <div class="row">
        <div class="col-md-12">
            <form @submit.prevent="submit_form" class="mb-3">
                <div class="d-flex flex-wrap mb-4">
                    <div class="mr-auto">
                        <span class="text-title" v-if="customer_slack === ''">{{ $t("Add Customer") }}</span>
                        <span class="text-title" v-else>{{ $t("Edit Customer") }}</span>
                    </div>
                    <div class="">
                        <button type="submit" class="btn btn-primary" :disabled="processing">
                            <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> {{ $t("Save") }}
                        </button>
                    </div>
                </div>

                <p v-html="server_errors" :class="[error_class]"></p>

                <div class="mb-2">
                    <span class="text-subhead">Basic Information</span>
                </div>
                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="name">{{ $t("Fullname") }}</label>
                        <input type="text" name="name" v-model="name" v-validate="'required|max:250'" class="form-control form-control-custom" placeholder="$t('Please enter fullname')" autocomplete="off">
                        <span :class="{ 'error': errors.has('name') }">{{ errors.first('name') }}</span>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="email">{{ $t("Email") }}</label>
                        <input type="text" name="email" v-model="email" v-validate="{ required: email_required, email: true, max: 150 }" class="form-control form-control-custom" placeholder="$t('Please enter email')" autocomplete="off">
                        <span :class="{ 'error': errors.has('email') }">{{ errors.first('email') }}</span>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="phone">{{ $t("Contact No.") }}&nbsp;<small class="text-muted">(With Country Code)</small></label>
                        <input type="text" name="phone" v-model="phone" v-validate="{ required: phone_required, min: 10, max: 15 }" class="form-control form-control-custom" placeholder="$t('Please enter Contact Number')" autocomplete="off">
                        <span :class="{ 'error': errors.has('phone') }">{{ errors.first('phone') }}</span>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="dob">{{ $t("Date of Birth") }}</label>
                        <date-picker :format="date.format" :lang="date.lang" v-model="dob" v-validate="'date_format:yyyy-MM-dd'" input-class="form-control form-control-custom bg-white" ref="dob" name="dob" placeholder="$t('Please enter Date of Birth')" autocomplete="off"></date-picker>
                        <span :class="{ 'error': errors.has('dob') }">{{ errors.first('dob') }}</span>
                    </div>
                </div>

                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="address">{{ $t("Address") }}</label>
                        <textarea name="address" v-model="address" v-validate="'max:65535'" class="form-control form-control-custom" rows="5" placeholder="$t('Enter Address')"></textarea>
                        <span :class="{ 'error': errors.has('address') }">{{ errors.first('address') }}</span>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="status">{{ $t("Status") }}</label>
                        <select name="status" v-model="status" v-validate="'required|numeric'" class="form-control form-control-custom custom-select">
                            <option value="">Choose Status..</option>
                            <option v-for="(status, index) in statuses" :value="status.value" :key="index">{{ status.label }}</option>
                        </select>
                        <span :class="{ 'error': errors.has('status') }">{{ errors.first('status') }}</span>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="role">{{ $t("Role") }}</label>
                        <select name="role" v-model="role" v-validate="'required'" class="form-control form-control-custom custom-select">
                            <option value="">Choose Role..</option>
                            <option v-for="(role, index) in roles" :value="role.slack" :key="index">{{ role.label }}</option>
                        </select>
                        <span :class="{ 'error': errors.has('role') }">{{ errors.first('role') }}</span>
                    </div>
                    <div class="mb-2" v-if="customer_slack !== ''">
                        <div class="mb-2">
                            <span class="text-subhead">{{ $t("Password Reset") }}</span>
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
                <p v-if="status == 0">You are making the customer inactive.</p>
                Are you sure you want to proceed?
            </template>
            <template v-slot:modal-footer>
                <button type="button" class="btn btn-light" @click="$emit('close')">Cancel</button>
                <button type="button" class="btn btn-primary" @click="$emit('submit')" :disabled="processing">
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
                <button type="button" class="btn btn-light" @click="$emit('close')">Cancel</button>
                <button type="button" class="btn btn-primary" @click="$emit('submit')" :disabled="processing">
                    <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> Continue
                </button>
            </template>
        </modalcomponent>

        <modalcomponent v-if="show_new_password" @close="show_new_password = false">
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
 node_modules/vue3-DatePicker/dist/vue3-DatePicker.css
import DatePicker from 'vue3-datepicker';
import moment from "moment";
import VueSelect from 'vue3-select';
 node_modules/vue3-select/dist/vue3-select.css

export default {
    components: {
        VueSelect,
        DatePicker,
        modalcomponent,
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
            email: (this.customer_data == null) ? '' : this.customer_data.email,
            name: (this.customer_data == null) ? '' : this.customer_data.name,
            role: (this.customer_data == null) ? '' : (this.customer_data.role == null) ? '' : this.customer_data.role.slack,
            phone: (this.customer_data == null) ? '' : this.customer_data.phone,
            address: (this.customer_data == null) ? '' : this.customer_data.address,
            dob: (this.customer_data == null) ? '' : (this.customer_data.dob_raw != null) ? new Date(this.customer_data.dob_raw) : '',
            status: (this.customer_data == null) ? '' : (this.customer_data.active == 1) ? 1 : 0,
            email_required: true,
            phone_required: true,
            statuses: [
                { value: '1', label: this.$t('Active') },
                { value: '0', label: this.$t('Inactive') },
            ],
            roles: []
        }
    },
    mounted() {
        console.log('Add customer page loaded');
        
        this.$on("submit", this.handleSubmit);
        this.$on("close", this.handleClose);

        // Initialize roles and other data if needed
    },
    methods: {
        handleSubmit() {
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
        },
        handleClose() {
            this.show_modal = false;
            this.show_password_reset_confirm = false;
            this.show_new_password = false;
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
}
</style>
