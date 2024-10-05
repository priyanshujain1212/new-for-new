<template>
    <div class="row">
        <div class="col-md-12">
            <Form ref="form" @submit="submit_form" class="mb-3">
                <div class="d-flex flex-wrap mb-4">
                    <div class="mr-auto">
                        <span class="text-title" v-if="billing_counter_slack === ''">{{ ("Add Particular") }}</span>
                        <span class="text-title" v-else>{{ ("Edit Particular") }}</span>
                    </div>
                    <div class="">
                        <button type="submit" class="btn btn-primary" :disabled="processing">
                            <i class="fa fa-circle-notch fa-spin" v-if="processing"></i> {{ ("Save") }}
                        </button>
                    </div>
                </div>

                <p v-html="server_errors" :class="[error_class]"></p>

                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="billing_counter_name">{{ ("Particular Name") }}</label>
                        <Field name="billing_counter_name" v-model="billing_counter_name" 
                               rules="required|max:150" 
                               class="form-control form-control-custom" 
                               :placeholder="('Please enter particulars name')"  
                               autocomplete="off" />
                        <ErrorMessage name="billing_counter_name" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="status">{{ ("Status") }}</label>
                        <Field name="status" v-model="status" rules="required|numeric" as="select" 
                               class="form-control form-control-custom custom-select">
                            <option value="">Choose Status..</option>
                            <option v-for="(status, index) in statuses" :key="index" :value="status.value">
                                {{ status.label }}
                            </option>
                        </Field>
                        <ErrorMessage name="status" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="particular_to">{{ ("Particular for") }}</label>
                        <Field name="particular_to" v-model="particular_to" rules="required" as="select" 
                               class="form-control form-control-custom custom-select">
                            <option value="">Choose Particular for..</option>
                            <option v-for="(item, index) in particular_to_master_list" :key="index" :value="item">
                                {{ item }}
                            </option>
                        </Field>
                        <ErrorMessage name="particular_to" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                    </div>
                </div>

                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="description">{{ ("Description") }}</label>
                        <Field name="description" v-model="description" rules="max:65535" as="textarea" 
                               class="form-control form-control-custom" rows="5" 
                               :placeholder="('Enter description')"></Field>
                        <ErrorMessage name="description" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                    </div>
                </div>
            </Form>
        </div>

        <modalcomponent v-if="show_modal" @close="show_modal = false">
            <template v-slot:modal-header>
                Confirm
            </template>
            <template v-slot:modal-body>
                Are you sure you want to proceed?
            </template>
            <template v-slot:modal-footer>
                <button type="button" class="btn btn-light" @click="show_modal = false">Cancel</button>
                <button type="button" class="btn btn-primary" @click="submit" :disabled="processing">
                    <i class="fa fa-circle-notch fa-spin" v-if="processing"></i> Continue
                </button>
            </template>
        </modalcomponent>
    </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { required, max, numeric} from '@vee-validate/rules'; // Import validation rules
import { defineRule } from 'vee-validate'; // Used to define rules globally
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
            show_modal: false,
            particular_to_master_list: ['CHALLAN', 'RASID'],
            api_link: this.billing_counter_data ? `/api/update_billing_counter/${this.billing_counter_data.slack}` : '/api/addparticular',
            particular_to: this.billing_counter_data ? this.billing_counter_data.particular_to || '' : '',
            billing_counter_slack: this.billing_counter_data ? this.billing_counter_data.slack || '' : '',
            billing_counter_code: this.billing_counter_data ? this.billing_counter_data.billing_counter_code || '' : '',
            billing_counter_name: this.billing_counter_data ? this.billing_counter_data.counter_name || '' : '',
            description: this.billing_counter_data ? this.billing_counter_data.description || '' : '',
            status: this.billing_counter_data ? this.billing_counter_data.status?.value || '' : ''
        };
    },
    props: {
        statuses: Array,
        billing_counter_data: [Array, Object]
    },

    created() {
        // Register rules globally in the component lifecycle
        defineRule('required', required);
        defineRule('max', max);
        defineRule('numeric', numeric);
    },
    mounted() {
        console.log('Add billing counter page loaded');
        console.log('particular_to:', this.particular_to); // Debugging value
    },
    methods: {
        submit_form() {
            this.$refs.form.validate().then((isValid) => {
                if (isValid) {
                    this.show_modal = true;
                } else {
                    console.log("Validation failed");
                }
            });
        },

        submit() {
            this.processing = true;
            const formData = new FormData();
            formData.append("access_token", window.settings.access_token);
            formData.append("particular_to", this.particular_to || '');
            formData.append("billing_counter_code", this.billing_counter_code || '');
            formData.append("billing_counter_name", this.billing_counter_name || '');
            formData.append("description", this.description || '');
            formData.append("status", this.status || '');

            axios.post(this.api_link, formData).then((response) => {
                if (response.data.status_code === 200) {
                    this.show_response_message(response.data.msg, 'SUCCESS');
                    setTimeout(() => window.location.href = '/particulars', 1000);
                } else {
                    this.show_modal = false;
                    this.processing = false;
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
                console.log(error);
                this.processing = false; // Handle processing state on error
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
