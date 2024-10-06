<template>
    <div class="row">
        <div class="col-md-12">
            <Form @submit.prevent="submit_form" class="mb-3">
        <div class="d-flex flex-wrap mb-4">
            <div class="mr-auto">
                <span class="text-title" v-if="store_slack === ''">{{ ("Add Trust") }}</span>
                <span class="text-title" v-else>{{ ("Edit Store") }}</span>
            </div>
            <div>
                <button type="submit" class="btn btn-primary" :disabled="processing"> 
                    <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> {{ ("Save") }}
                </button>
            </div>
        </div>
        
        <p v-html="server_errors" :class="error_class"></p>

        <div class="form-row mb-2">
            <div class="form-group col-md-3">
                <label for="name">{{ ("Name") }}</label>
                <Field name="name" as="input" v-model="name" :rules="'required|max:250'" class="form-control form-control-custom" placeholder="Please enter store name" autocomplete="off" />
                <ErrorMessage name="name" class="error" />
            </div>
            <div class="form-group col-md-3">
                <label for="tax_number">{{ ("Tax Number or GST number") }}</label>
                <Field name="tax_number" as="input" v-model="tax_number" :rules="'max:50'" class="form-control form-control-custom" placeholder="Please enter tax number or GST number" autocomplete="off" />
                <ErrorMessage name="tax_number" class="error" />
            </div>
        </div>
        <hr>
        <div class="d-flex flex-wrap mb-1">
            <div class="mr-auto">
                <span class="text-subhead">{{ ("Contact Information") }}</span>
            </div>
        </div>

        <div class="form-row mb-2">
            <div class="form-group col-md-3">
                <label for="primary_contact">{{ ("Primary Contact No.") }}</label>
                <Field name="primary_contact" as="input" v-model="primary_contact" :rules="'min:10|max:15'" class="form-control form-control-custom" placeholder="Please enter primary contact number" autocomplete="off" />
                <ErrorMessage name="primary_contact" class="error" />
            </div>
            <div class="form-group col-md-3">
                <label for="secondary_contact">{{ ("Secondary Contact No.") }}</label>
                <Field name="secondary_contact" as="input" v-model="secondary_contact" :rules="'min:10|max:15'" class="form-control form-control-custom" placeholder="Please enter secondary contact number" autocomplete="off" />
                <ErrorMessage name="secondary_contact" class="error" />
            </div>
            <div class="form-group col-md-3">
                <label for="primary_email">{{ ("Primary Email") }}</label>
                <Field name="primary_email" as="input" v-model="primary_email" :rules="'email'" class="form-control form-control-custom" placeholder="Please enter primary email" autocomplete="off" />
                <ErrorMessage name="primary_email" class="error" />
            </div>
            <div class="form-group col-md-3">
                <label for="address">{{ ("Address") }}</label>
                <Field name="address" as="textarea" v-model="address" :rules="'required|max:65535'" class="form-control form-control-custom" rows="3" placeholder="Enter store address" />
                <ErrorMessage name="address" class="error" />
            </div>
            <div class="form-group col-md-3">
                <label for="country">{{ ("Country") }}</label>
                <Field name="country" as="select" v-model="country" :rules="'required'" class="form-control form-control-custom custom-select">
                    <option value="">Choose Country..</option>
                    <option v-for="(country_item, index) in country_list" :value="country_item.country_id" :key="index">
                        {{ country_item.code }} - {{ country_item.name }}
                    </option>
                </Field>
                <ErrorMessage name="country" class="error" />
            </div>
            <div class="form-group col-md-3">
                <label for="pincode">{{ ("Pincode") }}</label>
                <Field name="pincode" as="input" v-model="pincode" :rules="'max:15'" class="form-control form-control-custom" placeholder="Enter Pincode" />
                <ErrorMessage name="pincode" class="error" />
            </div>
            <div class="form-group col-md-3">
                <label for="status">{{ ("Status") }}</label>
                <Field name="status" as="select" v-model="status" :rules="'required|numeric'" class="form-control form-control-custom custom-select">
                    <option value="">Choose Status..</option>
                    <option v-for="(status, index) in statuses" :value="status.value" :key="index">
                        {{ status.label }}
                    </option>
                </Field>
                <ErrorMessage name="status" class="error" />
            </div>
        </div>
        <hr>
        <div class="d-flex flex-wrap mb-1">
            <div class="mr-auto">
                <span class="text-subhead">{{ ("Invoice Print & Currency Details") }}</span>
            </div>
        </div>

        <div class="form-row mb-2">
            <div class="form-group col-md-3">
                <label for="print_type">{{ ("Invoice Print Type") }}</label>
                <Field name="print_type" as="select" v-model="print_type" :rules="'required'" class="form-control form-control-custom custom-select">
                    <option value="">Choose Invoice Print Type..</option>
                    <option v-for="(invoice_print_type, index) in invoice_print_types" :value="invoice_print_type.print_type_value" :key="index">
                        {{ invoice_print_type.print_type_label }}
                    </option>
                </Field>
                <ErrorMessage name="print_type" class="error" />
            </div>
            <div class="form-group col-md-3">
                <label for="currency_code">{{ ("Currency") }}</label>
                <Field name="currency_code" as="select" v-model="currency_code" :rules="'required'" class="form-control form-control-custom custom-select">
                    <option value="">Choose Currency..</option>
                    <option v-for="(currency_item, index) in currency_list" :value="currency_item.currency_code" :key="index">
                        {{ currency_item.currency_code }} - {{ currency_item.currency_name }}
                    </option>
                </Field>
                <ErrorMessage name="currency_code" class="error" />
            </div>
            <div class="form-group col-md-3">
                <label for="online_payment">{{ ("Online Payment") }}</label>
                <Field name="online_payment" as="select" v-model="online_payment" :rules="'required|numeric'" class="form-control form-control-custom custom-select">
                    <option value="">Choose Status..</option>
                    <option v-for="(online_payment, index) in online_payments" :value="online_payment.value" :key="index">
                        {{ online_payment.label }}
                    </option>
                </Field>
                <ErrorMessage name="online_payment" class="error" />
            </div>
            <div class="col-md-3">
                <label for="payment">{{ ("Payment") }}</label>
                <input type="text" v-model="inputValue" @keyup.enter="addPayment" class="form-control form-control-custom" placeholder="Enter payment" autocomplete="off" />
                <ErrorMessage name="payment" class="error d-block mt-4" />
                <div v-for="(payment, index) in payments" :key="index" class="d-flex mb-2">
                    <input type="text" :value="payment" class="form-control form-control-custom" readonly />
                    <button type="button" class="btn btn-outline-danger ml-2" @click="removePayment(index)">
                        &times;
                    </button>
                </div>
            </div>
        </div>
    </Form>
    </div>

        <modalcomponent v-if="show_modal" @close="show_modal = false">
            <template v-slot:modal-header>
                Confirm
            </template>
            <template v-slot:modal-body>
                <p v-if="status === 0">You are making the trust inactive.</p>
                <p v-if="online_payment === 0">You are making the trust inactive.</p>
                Are you sure you want to proceed?
            </template>
            <template v-slot:modal-footer>
                <button type="button" class="btn btn-light" @click="show_modal = false">Cancel</button>
                <button type="button" class="btn btn-primary" @click="confirmSubmit" :disabled="processing"> 
                    <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> Continue
                </button>
            </template>
        </modalcomponent>
    </div>
</template>

<script>
    'use strict';
    import ModalComponent from '@components/commons/modal_component.vue';
    import { Field, Form, ErrorMessage } from 'vee-validate';
    import axios from 'axios';
    import { required, max, numeric, email, min} from '@vee-validate/rules'; // Import validation rules
    import { defineRule } from 'vee-validate'; // Used to define rules globally

    export default {
        components: {
        ModalComponent,
        Field,
        Form,
        ErrorMessage
    },

    data(){
            return{
                server_errors   : '',
                error_class     : '',
                processing      : false,
                modal           : false,
                show_modal      : false,
                api_link        : (this.store_data == null)?'/api/add_store':'/api/update_store/'+this.store_data.slack,

                store_slack     : (this.store_data == null)?'':this.store_data.slack,
                name            : (this.store_data == null)?'':this.store_data.name,
                store_code      : (this.store_data == null)?'':this.store_data.store_code,
                tax_number      : (this.store_data == null)?'':this.store_data.tax_number,
                primary_contact : (this.store_data == null)?'':this.store_data.primary_contact,
                secondary_contact : (this.store_data == null)?'':this.store_data.secondary_contact,
                primary_email   : (this.store_data === null)?'':this.store_data.primary_email,
                address         : (this.store_data == null)?'':this.store_data.address,
                country         : (this.store_data == null)?'':(this.store_data.country == null)?'':this.store_data.country.id,
                pincode         : (this.store_data == null)?'':this.store_data.pincode,
                print_type      : (this.store_data == null)?'':(this.store_data.invoice_type == null)?'':this.store_data.invoice_type.print_type_value,
                currency_code   : (this.store_data == null)?'':(this.store_data.currency_code == null)?'':this.store_data.currency_code,
                status          : (this.store_data == null)?'':this.store_data.status.value,

                payments          : (this.payment_types == null)?[]:this.payment_types,
         
                online_payment: '',
                inputValue: '',
                // payments: [],

            }
        },
        props: {
            statuses: Array,
            online_payments: Array,
            tax_codes: Array,
            invoice_print_types: Array,
            currency_list: Array,
            country_list: Array,
            accounts: Array,
            store_data: [Array, Object],
            payment_types: Array,
            languages: [Array, Object],
        },
       
        created() {
            defineRule('required', required);
        defineRule('max', max);
        defineRule('min', min);
        defineRule('numeric', numeric);
        defineRule('email', email);
        },
        mounted() {
            console.log('Add store page loaded');
        },
        methods: {
            addPayment() {
                const payment = this.inputValue.trim();
                if (payment) {
                    this.payments.push(payment);
                    this.inputValue = ''; // Clear the input field
                }
            },
            removePayment(index) {
                this.payments.splice(index, 1);
            },
            submit_form(){

                this.$off("submit");
                this.$off("close");
                
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.show_modal = true;
                        this.$on("submit",function () {
                            
                            this.processing = true;
                            var formData = new FormData();

                            formData.append("access_token", window.settings.access_token);
                            formData.append("name", (this.name == null)?'':this.name);
                            formData.append("store_code", (this.store_code == null)?'':this.store_code);
                            formData.append("tax_number", (this.tax_number == null)?'':this.tax_number);
                            formData.append("primary_contact", (this.primary_contact == null)?'':this.primary_contact);
                            formData.append("secondary_contact", (this.secondary_contact == null)?'':this.secondary_contact);
                            formData.append("primary_email", (this.primary_email == null)?'':this.primary_email);
                            formData.append("address", (this.address == null)?'':this.address);
                            formData.append("country", (this.country == null)?'':this.country);
                            formData.append("pincode", (this.pincode == null)?'':this.pincode);
                            formData.append("invoice_type", (this.print_type == null)?'':this.print_type);
                            formData.append("currency_code", (this.currency_code == null)?'':this.currency_code);
                            formData.append("status", (this.status == null)?'':this.status);

                            axios.post(this.api_link, formData).then((response) => {
                                if(response.data.status_code == 200) {
                                    this.show_response_message(response.data.msg, 'SUCCESS');
                                
                                    setTimeout(function(){
                                        location.reload();
                                    }, 1000);
                                }else{
                                    this.show_modal = false;
                                    this.processing = false;
                                    try{
                                        var error_json = JSON.parse(response.data.msg);
                                        this.loop_api_errors(error_json);
                                    }catch(err){
                                        this.server_errors = response.data.msg;
                                    }
                                    this.error_class = 'error';
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                        });
                        
                        this.$on("close",function () {
                            this.show_modal = false;
                        });
                    }
                });
            }
        }
    }
</script>
