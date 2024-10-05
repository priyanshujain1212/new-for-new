<template>
    <div class="row">
        <div class="col-md-12">
            <Form ref="form" @formSubmitted="submit_form" class="mb-3">
                <div class="d-flex flex-wrap mb-4">
                    <div class="mr-auto">
                        <span class="text-title">{{ !challan_order_slack ? "Add New Challan" : "Edit Challan" }}</span>
                    </div>
                    <div :style="{'background-color': update_stock ? '#ffcdd2' : '#c8e6c9', 'padding': '5px', 'border-radius': '5px', 'text-align': 'center', 'font-weight': 'bold', 'margin-right': '15px', 'width': '120px', 'height': '35px'}">
                        {{ update_stock ? 'Due' : 'Paid' }}
                    </div>
                    <div>
                        <button type="formSubmitted" class="btn btn-primary" :disabled="processing">
                            <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> {{ "Save" }}
                        </button>
                    </div>
                </div>
                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="po_number">{{ "Challan Number" }}</label>
                        <div v-if="!challan_order_slack">
                            <Field name="po_number" v-model="po_number" as="input" type="text" class="form-control form-control-custom" placeholder="Please enter Challan Number"  rules="required|max:50"  />
                            <ErrorMessage name="po_number" v-slot="{ message }">
                                <span class="error">{{ message }}</span>
                            </ErrorMessage>
                        </div>
                        <div v-else>
                            <div class="ml-2" style="font-size: 1.5rem">
                                <span for="po_number">{{ po_number }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="form-group col-md-3">
                        <label for="supplier">{{ "Supplier" }}</label>
                        <div v-if="!challan_order_slack">
                            <input type="text" v-model="supplierSearchQuery" @input="onSupplierSearch" class="form-control form-control-custom" placeholder="Search Supplier" />
                            <ul v-if="filteredSuppliers.length > 0" class="dropdown-suggestions">
                                <li v-for="(supplier, index) in filteredSuppliers" :key="index" @click="selectSupplier(supplier)">
                                    {{ supplier.name }} <!-- Ensure this is the correct property name -->
                                </li>
                            </ul>
                        </div>
                        <div v-else>
                            <div class="ml-2" style="font-size: 1.5rem">
                                <span>{{ supplier_name }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="form-group col-md-3">
                        <label for="po_reference">{{ "Reference Challan Number (if any)" }}</label>
                        <Field name="po_reference" v-model="po_reference"  as="input"  type="text"  class="form-control form-control-custom"  placeholder="Reference Challan Number"  rules="max:30" />
                        <ErrorMessage name="po_reference" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                    </div>
                </div>

                <div class="form-row mb-2">
                <div class="form-group col-md-3">
                        <label for="order_date">{{ "Challan Date" }}</label>
                        <Field  name="order_date"  v-model="order_date" as="input"  type="date" rules="required"  class="form-control form-control-custom" placeholder="Pick a date or type a date"  style="width: 275px;" />
                        <ErrorMessage name="order_date" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                </div>

                <div class="form-group col-md-3">
                        <label for="payment_type">{{ "Payment Type" }}</label>
                        <Field as="select" name="payment_type" v-model="selectedPaymentType" class="form-control form-control-custom" rules="required" @change="selectPaymentType">
                            <option value="" disabled>Select Payment Type</option> 
                            <option v-for="(type, index) in payment_types" :key="index" :value="type">{{ type }}</option> </Field>
                        <ErrorMessage name="payment_type" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                </div>
                <div class="form-group col-md-2">
                        <label for="name">{{ "Payment Status" }}</label>
                            <div class="d-flex align-items-center" style="position: relative; top: 7px; left: 15px; ">
                                <div class="custom-control custom-switch" style="position: relative; top: -17px;">
            <Field name="update_stock" as="input" type="checkbox" 
                   class="custom-control-input" 
                   id="update_stock_switch" 
                   v-model="update_stock" 
                   @change="toggleSwitch" 
                   style="transform: scale(1.3);" 
                   :value="true" 
                   :checked="update_stock" />
            <label class="custom-control-label" for="update_stock_switch"></label>
        </div>
        <span class="ml-2" style="font-size: 1rem; position: relative; top: -7px;">
            Payment is <b>{{ update_stock ? 'Due' : 'Paid' }}</b>.
        </span>
                            </div>
                </div>
                </div>

                <modalcomponent v-if="show_modal" @close="show_modal = false">
                    <template v-slot:modal-header>
                        Confirm
                    </template>
                    <template v-slot:modal-body>
                        Are you sure you want to proceed?
                    </template>
                    <template v-slot:modal-footer>
                        <button type="button" class="btn btn-light" @click="$emit('close')">Cancel</button>
                        <button type="button" class="btn btn-primary" @click="$emit('submit')" :disabled="processing">
                            <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> Continue
                        </button>
                    </template>
                </modalcomponent>
            </Form>
        </div>
    </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { required, max, numeric } from '@vee-validate/rules';
import { defineRule } from 'vee-validate'; 
import axios from 'axios';
import moment from 'moment';

export default {
    components: {
        Field,
        Form,
        ErrorMessage,
    },
    data() {
        return {
            server_errors: '',
            error_class: '',
            processing: false,
            show_modal: false,
            supplierSearchQuery: '', // For the supplier search input
            supplier_list: [],
            filteredSuppliers: [],
            selectedSupplier: null, // To hold selected supplier data

            update_stock: (this.challan_order_data == null) ? true : (this.challan_order_data.update_stock != null) ? ((this.challan_order_data.update_stock == 1) ? true : false) : true,
     
            // update_stock : (this.challan_order_data == null)?false:(this.challan_order_data.update_stock != null)?((this.challan_order_data.update_stock == 1)?true:false):false,
            supplier_name: (this.challan_order_data == null) ? '' : (this.challan_order_data.supplier_name)?this.challan_order_data.supplier_name:'',
            supplier_code:(this.challan_order_data ==null)? '' : (this.challan_order_data.supplier_code)?this.challan_order_data.supplier_code:'',
            po_number : (this.challan_order_data == null)?'':(this.challan_order_data.po_number)?this.challan_order_data.po_number:'',
            po_reference : (this.challan_order_data == null)?'':(this.challan_order_data.po_reference != null)?this.challan_order_data.po_reference:'',
            order_date : (this.challan_order_data == null)?'':(this.challan_order_data.order_date != null)?new Date(this.challan_order_data.order_date):'',
            challan_order_slack: this.challan_order_data ? this.challan_order_data.slack : '',
            payment_type: (this.challan_order_data == null)?'':(this.challan_order_data.payment_type != null)?this.challan_order_data.payment_type:'',
            
        };
    },


    props: {
        challan_order_data: [Array, Object],
        payment_types: {
            type: Array,
            default: () => [],
        }
    },

    created() {
        defineRule('required', required);
        defineRule('max', max);
        defineRule('numeric', numeric);
    },

    methods: {
        selectPaymentType() {
                if (this.selectedPaymentType) {
                    this.update_stock = false;
                }
            },


        toggleSwitch() {
            if (!this.update_stock) {
                this.update_stock = false; // Keep it closed
            } else {
                this.update_stock = true; // Allow it to become open
            }
        },
        onSupplierSearch() {
            if (this.supplierSearchQuery.length >= 2) {
                this.load_suppliers();
            } else {
                this.filteredSuppliers = [];
            }
        },

        load_suppliers() {
            const formData = new FormData();
            formData.append("access_token", window.settings.access_token);
            formData.append("keywords", this.supplierSearchQuery);

            axios.post('/api/load_suppliers', formData)
                .then((response) => {
                    if (response.data.status_code === 200) {
                        this.supplier_list = response.data.data;
                        this.filteredSuppliers = this.supplier_list;
                    }
                })
                .catch((error) => {
                    console.log('Error fetching suppliers:', error);
                });
        },

        selectSupplier(supplier) {
            this.supplierSearchQuery = supplier.name; // Set the selected supplier name
            this.selectedSupplier = supplier; // Save selected supplier's complete data
            this.filteredSuppliers = []; // Clear filtered list after selection
        },

        convert_date_format(date) {
            return (date !== '') ? moment(date).format("YYYY-MM-DD") : '';
        },


        submit_form() {
            this.processing = true;

            // Prepare data to be sent to the server
            const dataToSubmit = {
                po_number: this.po_number,
                po_reference: this.po_reference,
                order_date: this.convert_date_format(this.order_date),
                supplier_code: this.selectedSupplier ? this.selectedSupplier.supplier_code : this.supplier, // Use selected supplier code or existing
                supplier_name: this.selectedSupplier ? this.selectedSupplier.name : this.supplier_name, // Use selected supplier name or existing
                payment_type: this.selectedPaymentType ? this.selectedPaymentType : "Due payment",
                
                // Add other form fields as necessary
            };

            console.log('Submitting form with data:', dataToSubmit); // Debug log

            // Make the API call for submission (replace with your actual endpoint)
            axios.post('/api/submit_challan', dataToSubmit)
                .then(response => {
                    // Handle successful submission response
                    this.processing = false;
                    console.log('Form submitted successfully:', response.data);
                })
                .catch(error => {
                    this.processing = false;
                    console.log('Error submitting form:', error);
                });
        }
    },
};
</script>

<style scoped>
.error {
    color: red;
}

.dropdown-suggestions {
    border: 1px solid #ccc;
    max-height: 200px;
    overflow-y: auto;
    list-style-type: none;
    padding: 0;
    margin: 0;
    position: absolute;
    background-color: white;
    width: 100%;
    z-index: 1000;
}

.dropdown-suggestions li {
    padding: 8px;
    cursor: pointer;
}

.dropdown-suggestions li:hover {
    background-color: #f0f0f0;
}
</style>
