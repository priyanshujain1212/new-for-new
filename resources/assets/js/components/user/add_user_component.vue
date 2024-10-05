<template>
    <div class="row">
        <div class="col-md-12">
            <Form ref="form" @submit="submit_form" class="mb-3">
                <div class="d-flex flex-wrap mb-4">
                    <div class="mr-auto">
                        <span class="text-title" v-if="user_slack == ''">{{ ("Add User") }}</span>
                        <span class="text-title" v-else>{{ ("Edit User") }}</span>
                    </div>
                    <div class="">
                        <button type="submit" class="btn btn-primary" v-bind:disabled="processing == true">
                            <i class='fa fa-circle-notch fa-spin' v-if="processing == true"></i> {{ ("Save") }}
                        </button>
                    </div>
                </div>

                <p v-html="server_errors" v-bind:class="[error_class]"></p>

                <div class="mb-2">
                    <span class="text-subhead">{{ ("Basic Information") }}</span>
                </div>
                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="email">{{ ("Email") }}</label>
                        <Field name="email" as="input" type="text" v-model="email" class="form-control form-control-custom" :placeholder="('Please enter email')" autocomplete="off" />
                        <ErrorMessage name="email" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="fullname">{{ ("Fullname") }}</label>
                        <Field name="fullname" as="input" type="text" v-model="fullname" class="form-control form-control-custom" :placeholder="('Please enter fullname')" autocomplete="off" />
                        <ErrorMessage name="fullname" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="phone">{{ ("Contact No.") }}</label>
                        <Field name="phone" as="input" type="text" v-model="phone" class="form-control form-control-custom" :placeholder="('Please enter Contact Number')" autocomplete="off" />
                        <ErrorMessage name="phone" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                    </div>
                </div>

                <div class="mb-2">
                    <span class="text-subhead">{{ ("Role Information") }}</span>
                </div>
                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="role">{{ ("Role") }}</label>
                        <Field name="role" as="select" v-model="role" class="form-control form-control-custom custom-select">
                            <option value="">Choose Role..</option>
                            <option v-for="(role, index) in roles" v-bind:value="role.slack" v-bind:key="index">
                                {{ role.label }}
                            </option>
                        </Field>
                        <ErrorMessage name="role" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="status">{{ ("Status") }}</label>
                        <Field name="status" as="select" v-model="status" class="form-control form-control-custom custom-select">
                            <option value="">Choose Status..</option>
                            <option v-for="(status, index) in statuses" v-bind:value="status.value" v-bind:key="index">
                                {{ status.label }}
                            </option>
                        </Field>
                        <ErrorMessage name="status" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                    </div>
                </div>

                <div class="mb-2" v-show="is_super_admin == true && user_slack != ''">
                    <div class="mb-2">
                        <span class="text-subhead">{{ ("Password Reset") }}</span>
                    </div>
                    <div class="mb-2">
                        <button type="button" class="btn btn-outline-primary" v-bind:disabled="reset_password_form.processing == true" v-on:click="reset_password">
                            <i class='fa fa-circle-notch fa-spin' v-if="reset_password_form.processing == true"></i> Reset Current Password
                        </button>
                    </div>
                </div>

                <div class="mb-2">
                    <span class="text-subhead">{{ ("Store Access") }}</span>
                </div>
                <div class="mb-2">
                    <div class="custom-control custom-checkbox mb-1" v-for="(store, index) in stores" v-bind:key="index">
                        <input class="custom-control-input" type="checkbox" v-model="stores_selected" v-bind:value="store.slack" v-bind:id="store.slack" />
                        <label class="custom-control-label" v-bind:for="store.slack">
                            <span class="text-bold">{{ store.store_code }}</span>, {{ store.name }}, {{ store.address }}
                        </label>
                    </div>
                </div>
            </Form>
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
import { Field, Form, ErrorMessage } from 'vee-validate';
import axios from 'axios';
export default {
    components: {
        Field,
        Form,
        ErrorMessage
    },
    data() {
        return {
            server_errors: '',
            error_class: '',
            processing: false,
            modal: false,
            show_modal: false,
            reset_password_form: {
                processing: false,
            },
            show_password_reset_confirm: false,
            show_new_password: false,
            new_password: '',
            api_link: (this.user_data == null) ? '/api/add_user' : '/api/update_user/' + this.user_data.slack,
            password_reset_api_link: (this.user_data == null) ? '' : '/api/reset_user_password/' + this.user_data.slack,
            user_slack: (this.user_data == null) ? '' : this.user_data.slack,
            email: (this.user_data == null) ? '' : this.user_data.email,
            fullname: (this.user_data == null) ? '' : this.user_data.fullname,
            phone: (this.user_data == null) ? '' : this.user_data.phone,
            role: (this.user_data == null) ? '' : (this.user_data.role == null) ? '' : this.user_data.role.slack,
            status: (this.user_data == null) ? '' : (this.user_data.status == null) ? '' : this.user_data.status.value,
            stores_selected: (this.user_data == null) ? [] : (this.user_data.selected_stores == null) ? [] : this.user_data.selected_stores,
        }
    },
    props: {
        roles: Array,
        statuses: Array,
        stores: Array,
        user_data: [Array, Object],
        is_super_admin: Boolean
    },
        mounted() {
            console.log('Add user page loaded');
        },
        methods: {
    submit_form() {
        this.show_modal = true; // Show modal confirmation
    },
    confirm_submit() {
        this.processing = true; // Start processing

        const formData = new FormData();
        formData.append("access_token", window.settings.access_token);
        formData.append("fullname", this.fullname || '');
        formData.append("email", this.email || '');
        formData.append("phone", this.phone || '');
        formData.append("role", this.role || '');
        formData.append("status", this.status || '');
        formData.append("user_stores", this.stores_selected);

        axios.post(this.api_link, formData)
            .then((response) => {
                this.processing = false; // Stop processing
                this.show_modal = false; // Close the modal

                if (response.data.status_code == 200) {
                    this.show_response_message(response.data.msg, 'SUCCESS');
                    setTimeout(() => window.location.href = '/users', 1000);
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
                this.processing = false; // Stop processing on error
                console.log(error);
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