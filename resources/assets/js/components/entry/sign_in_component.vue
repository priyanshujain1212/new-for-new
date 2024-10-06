<template>
    <div class="container pt-3 entry_form">
        <div class="d-flex justify-content-center pt-5">
            <div class="col-sm-12 col-md-6 col-lg-4">
                <img :src="company_logo" class="d-block mb-4 entry_logo" alt="appsthing">
                <span class="text-display-0 d-block mb-3">{{ ('Sign in') }}</span>
                <p v-html="server_errors" :class="error_class"></p>
                {{ message }}

                <Form @submit="submit_form" class="mb-3"> <!-- v-slot is used to access errors -->
                    <div class="form-group">
                        <label for="email">{{ ("Email") }}</label>
                        <Field 
                            name="email" 
                            type="email" 
                            v-model="email" 
                            class="form-control form-control-lg" 
                            :placeholder="('Please enter your registered email')" 
                            autocomplete="off"
                            rules="required|email" 
                        />
                        <ErrorMessage name="email" as="span" class="text-danger"/>
                    </div>
                    <div class="form-group">
                        <label for="password">{{ ("Password") }}</label>
                        <Field 
                            name="password" 
                            type="password" 
                            v-model="password" 
                            class="form-control form-control-lg" 
                            :placeholder="('Please enter your password')"
                            rules="required" 
                        />
                        <ErrorMessage name="password" as="span" class="text-danger"/>
                    </div>
                    <div class="form-group">
                        <a href="/forgot_password" class="btn-label">{{ ('Forgot Password') }}</a>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg" :disabled="processing"> 
                        <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> {{ ('Sign in') }}
                    </button>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { required, email } from '@vee-validate/rules'; // Import validation rules
import { defineRule } from 'vee-validate'; // Used to define rules globally
import axios from 'axios';

export default {
    components: {
        Field,
        Form,
        ErrorMessage
    },
    props: {
        prop_message: String,
        is_demo: Boolean,
        preview_mode: Boolean,
        company_logo: String
    },
    data() {
        return {
            server_errors: '',
            error_class: '',
            processing: false,
            email: this.is_demo && this.preview_mode ? 'admin@appsthing.com' : '',
            password: this.is_demo && this.preview_mode ? 'administrator' : '',
            message: this.prop_message
        };
    },
    created() {
        // Register rules globally in the component lifecycle
        defineRule('required', required);
        defineRule('email', email);
    },
    methods: {
        submit_form(values) {
            this.processing = true;
            const formData = new FormData();
            formData.append("email", values.email || '');
            formData.append("password", values.password || '');

            axios.post('/api/user/authenticate', formData)
            .then((response) => {
                this.processing = false;
                if (response.data.status_code === 200) {
                    window.location.assign(response.data.link);
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
                console.log('Full error:', error);
            });
        }
    }
};
</script>
