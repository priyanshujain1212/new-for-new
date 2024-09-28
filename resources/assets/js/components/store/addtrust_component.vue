<template>
    <div class="row">
        <div class="col-md-12">
            <form @submit.prevent="submit_form" class="mb-3">
                <div class="d-flex flex-wrap mb-4">
                    <div class="mr-auto">
                        <span class="text-title" v-if="store_slack === ''">{{ $t("Add Trust") }}</span>
                        <span class="text-title" v-else>{{ $t("Edit Store") }}</span>
                        <!-- <div class="form-row-md-3">
                    <label for="store_code">{{ $t("Store Code - ") }}<span class="ml-1">{{ store_data.store_code }}</span></label>
                    </div> -->
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary" :disabled="processing"> 
                            <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> {{ $t("Save") }}
                        </button>
                    </div>
                </div>
                
                <p v-html="server_errors" :class="error_class"></p>

                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="name">{{ $t("Name") }}</label>
                        <input type="text" name="name" v-model="name" v-validate="'required|max:250'" class="form-control form-control-custom" :placeholder="$t('Please enter store name')" autocomplete="off">
                        <span :class="{ 'error': errors.has('name') }">{{ errors.first('name') }}</span> 
                    </div>
                    <div class="form-group col-md-3">
                        <label for="tax_number">{{ $t("Tax Number or GST number") }}</label>
                        <input type="text" name="tax_number" v-model="tax_number" v-validate="'max:50'" class="form-control form-control-custom" :placeholder="$t('Please enter tax number or GST number')" autocomplete="off">
                        <span :class="{ 'error': errors.has('tax_number') }">{{ errors.first('tax_number') }}</span> 
                    </div>
                
                </div>
                <hr>
                <div class="d-flex flex-wrap mb-1">
                    <div class="mr-auto">
                        <span class="text-subhead">{{ $t("Contact Information") }}</span>
                    </div>
                </div>

                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="primary_contact">{{ $t("Primary Contact No.") }}</label>
                        <input type="text" name="primary_contact" v-model="primary_contact" v-validate="'min:10|max:15'" class="form-control form-control-custom" :placeholder="$t('Please enter primary contact number')" autocomplete="off">
                        <span :class="{ 'error': errors.has('primary_contact') }">{{ errors.first('primary_contact') }}</span> 
                    </div>
                    <div class="form-group col-md-3">
                        <label for="secondary_contact">{{ $t("Secondary Contact No.") }}</label>
                        <input type="text" name="secondary_contact" v-model="secondary_contact" v-validate="'min:10|max:15'" class="form-control form-control-custom" :placeholder="$t('Please enter secondary contact number')" autocomplete="off">
                        <span :class="{ 'error': errors.has('secondary_contact') }">{{ errors.first('secondary_contact') }}</span> 
                    </div>
                    <div class="form-group col-md-3">
                        <label for="primary_email">{{ $t("Primary Email") }}</label>
                        <input type="text" name="primary_email" v-model="primary_email" v-validate="'email'" class="form-control form-control-custom" :placeholder="$t('Please enter primary email')" autocomplete="off">
                        <span :class="{ 'error': errors.has('primary_email') }">{{ errors.first('primary_email') }}</span> 
                    </div>
                    <div class="form-group col-md-3">
                        <label for="address">{{ $t("Address") }}</label>
                        <textarea name="address" v-model="address" v-validate="'required|max:65535'" class="form-control form-control-custom" rows="3" :placeholder="$t('Enter store address')"></textarea>
                        <span :class="{ 'error': errors.has('address') }">{{ errors.first('address') }}</span>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="country">{{ $t("Country") }}</label>
                        <select name="country" v-model="country" v-validate="'required'" class="form-control form-control-custom custom-select">
                            <option value="">Choose Country..</option>
                            <option v-for="(country_item, index) in country_list" :value="country_item.country_id" :key="index">
                                {{ country_item.code }} - {{ country_item.name }}
                            </option>
                        </select>
                        <span :class="{ 'error': errors.has('country') }">{{ errors.first('country') }}</span> 
                    </div>
                    <div class="form-group col-md-3">
                        <label for="pincode">{{ $t("Pincode") }}</label>
                        <input type="text" name="pincode" v-model="pincode" v-validate="'max:15'" class="form-control form-control-custom" :placeholder="$t('Enter Pincode')">
                        <span :class="{ 'error': errors.has('pincode') }">{{ errors.first('pincode') }}</span>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="status">{{ $t("Status") }}</label>
                        <select name="status" v-model="status" v-validate="'required|numeric'" class="form-control form-control-custom custom-select">
                            <option value="">Choose Status..</option>
                            <option v-for="(status, index) in statuses" :value="status.value" :key="index">
                                {{ status.label }}
                            </option>
                        </select>
                        <span :class="{ 'error': errors.has('status') }">{{ errors.first('status') }}</span> 
                    </div>
                </div>
                <hr>
                <div class="d-flex flex-wrap mb-1">
                    <div class="mr-auto">
                        <span class="text-subhead">{{ $t("Invoice Print & Currency Details") }}</span>
                    </div>
                </div>

                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="print_type">{{ $t("Invoice Print Type") }}</label>
                        <select name="print_type" v-model="print_type" v-validate="'required'" class="form-control form-control-custom custom-select">
                            <option value="">Choose Invoice Print Type..</option>
                            <option v-for="(invoice_print_type, index) in invoice_print_types" :value="invoice_print_type.print_type_value" :key="index">
                                {{ invoice_print_type.print_type_label }}
                            </option>
                        </select>
                        <span :class="{ 'error': errors.has('print_type') }">{{ errors.first('print_type') }}</span> 
                    </div>
                    <div class="form-group col-md-3">
                        <label for="currency_code">{{ $t("Currency") }}</label>
                        <select name="currency_code" v-model="currency_code" v-validate="'required'" class="form-control form-control-custom custom-select">
                            <option value="">Choose Currency..</option>
                            <option v-for="(currency_item, index) in currency_list" :value="currency_item.currency_code" :key="index">
                                {{ currency_item.currency_code }} - {{ currency_item.currency_name }}
                            </option>
                        </select>
                        <span :class="{ 'error': errors.has('currency_code') }">{{ errors.first('currency_code') }}</span> 
                    </div>
                    <div class="form-group col-md-3">
                        <label for="online_payment">{{ $t("Online Payment") }}</label>
                        <select name="online_payment" v-model="online_payment" v-validate="'required|numeric'" class="form-control form-control-custom custom-select">
                            <option value="">Choose Status..</option>
                            <option v-for="(online_payment, index) in online_payments" :value="online_payment.value" :key="index">
                                {{ online_payment.label }}
                            </option>
                        </select>
                        <span :class="{ 'error': errors.has('online_payment') }">{{ errors.first('online_payment') }}</span> 
                    </div>
                    <!-- <div class="form-row mb-5 ml-5">
                    <div class="form-row-md-6">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="update_stock_switch" v-model="" >
                            <label class="custom-control-label" for="update_stock_switch">{{ $t("Online Payment") }}</label>
                            <small class="form-text text-muted">Online Payment"<b>On</b>".</small>
                        </div>
                    </div>
                </div> -->
                    <div class="col-md-3">
                        <label for="payment">{{ $t("Payment") }}</label>
                        <input type="text" v-model="inputValue" @keyup.enter="addPayment" class="form-control form-control-custom" :placeholder="$t('Enter payment')" autocomplete="off" />
                        <span :class="{ error: errors.has('payment') }" class="d-block mt-4">{{ errors.first('payment') }}</span>
                        <!-- Adding 'mt-2' to create space between the span and the next element -->
                        <div v-for="(payment, index) in payments" :key="index" class="d-flex mb-2">
                            <input type="text" :value="payment" class="form-control form-control-custom" readonly />
                            <button type="button" class="btn btn-outline-danger ml-2" @click="removePayment(index)">
                                &times;
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
    import { Field, Form, ErrorMessage } from 'vee-validate';
import axios from 'axios'; // Import axios here
    export default { 
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
        data() {
            return {
                server_errors: '',
                error_class: '',
                processing: false,
                show_modal: false,
                api_link        : (this.store_data == null)?'/api/addtrust':'/api/update_store/'+this.store_data.slack,

                inputValue: '',
                payments: [],

                store_slack: '',
                name: '',
                store_code: '',
                tax_number: '',
                primary_contact: '',
                secondary_contact: '',
                primary_email: '',
                address: '',
                country: '',
                pincode: '',
                print_type: '',
                currency_code: '',
                status: '',
                online_payment: '',
            }
        },
        created() {
            this.initializeData();
        },
        methods: {
            initializeData() {
                if (this.store_data) {
                    // this.api_link = this.store_data.slack ? `/api/update_store/${this.store_data.slack}` : '/api/addtrust';
                    
                    this.store_slack = this.store_data.slack || '';
                    this.name = this.store_data.name || '';
                    this.store_code = (this.store_data == null)?'':this.store_data.store_code,
                    this.tax_number = this.store_data.tax_number || '';
                    this.primary_contact = this.store_data.primary_contact || '';
                    this.secondary_contact = this.store_data.secondary_contact || '';
                    this.primary_email = this.store_data.primary_email || '';
                    this.address = this.store_data.address || '';
                    this.country = this.store_data.country ? this.store_data.country.id : '';
                    this.pincode = this.store_data.pincode || '';
                    this.print_type = this.store_data.invoice_type ? this.store_data.invoice_type.print_type_value : '';
                    this.currency_code = this.store_data.currency_code || '';
                    this.status = this.store_data.status ? this.store_data.status.value : '';
                    this.online_payment = this.store_data.online_payment ? this.store_data.online_payment.value : '';
                }
                
                this.payments = this.payment_types || [];
            },
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
            submit_form() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.show_modal = true;
                    }
                });
            },   convertFormDataToObject(formData) {
            const obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            return obj;
        },

            confirmSubmit() {
                this.processing = true;
                let formData = new FormData();
                formData.append("access_token", window.settings.access_token);
                formData.append("name", this.name || '');
                formData.append("tax_number", this.tax_number || '');
                formData.append("primary_contact", this.primary_contact || '');
                formData.append("secondary_contact", this.secondary_contact || '');
                formData.append("primary_email", this.primary_email || '');
                formData.append("address", this.address || '');
                formData.append("country", this.country || '');
                formData.append("pincode", this.pincode || '');
                formData.append("invoice_type", this.print_type || '');
                formData.append("currency_code", this.currency_code || '');
                formData.append("payment_types", this.payments || '');
                formData.append("status", this.status || '');
                formData.append("online_payment", this.online_payment || '');
                console.log('Form Data:', this.convertFormDataToObject(formData));
                axios.post(this.api_link, formData)
                    .then(response => {
                        if(response.data.status_code === 200) {
                            this.show_response_message(response.data.msg, 'SUCCESS');
                            setTimeout(() => window.location.href = '/trusts', 1000);
                        } else {
                            this.show_modal = false;
                            this.processing = false;
                            try {
                                let error_json = JSON.parse(response.data.msg);
                                this.loop_api_errors(error_json);
                            } catch(err) {
                                this.server_errors = response.data.msg;
                            }
                            this.error_class = 'error';
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
</script>
