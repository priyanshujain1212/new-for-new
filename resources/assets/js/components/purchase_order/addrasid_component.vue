<template>
    <div class="row">
        <div class="col-md-12">
            <Form ref="form" @formSubmitted="submit_form" class="mb-3">
                <div class="d-flex flex-wrap mb-4">
                    <div class="mr-auto">
                        <span class="text-title">{{ !challan_order_slack ? "Add New Challan" : "Edit Challan" }}</span>
                    </div>
                    <div>
                        <button type="formSubmitted" class="btn btn-primary" :disabled="processing">
                            <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> {{ "Save" }}
                        </button>
                    </div>
                </div>
                <p v-html="server_errors" :class="[error_class]"></p>

                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="po_number">{{ "Challan Number" }}</label>
                        <div v-if="!challan_order_slack">
                            <Field name="po_number" v-model="po_number" as="input" type="text" class="form-control form-control-custom" placeholder="Please enter Challan Number" rules="required|max:50" />
                            <ErrorMessage name="po_number" v-slot="{ message }"><span class="error">{{ message }}</span></ErrorMessage>
                        </div>
                        <div v-else><div class="ml-2" style="font-size: 1.5rem"><span for="po_number">{{ po_number }}</span></div></div>
                    </div>

                    <div class="form-group col-md-3">
                        <label for="customer">{{ "Supplier" }}</label>
                        <div v-if="!challan_order_slack">
                            <Field name="customer" v-model="selectedcustomerslack" as="select" class="form-control form-control-custom custom-select" :placeholder="('Please choose customer')" rules="required|max:250" @search="load_customers" ref="customer">
                                <option v-for="(customer, index) in formattedSupplierList" :value="customer.supplier_code" :key="index">{{ customer.displayText }}</option>
                            </Field>
                            <ErrorMessage name="customer" v-slot="{ message }"><span class="error">{{ message }}</span></ErrorMessage>
                        </div>
                        <div v-else><div class="ml-2" style="font-size: 1.5rem"><span for="customer">{{ supplier_code }} - {{ supplier_name }}</span></div></div>
                    </div>

                    <div class="form-group col-md-3">
                        <label for="po_reference">{{ "Reference Challan Number (if any)" }}</label>
                        <Field name="po_reference" v-model="po_reference" as="input" type="text" class="form-control form-control-custom" :placeholder="('Reference Challan Number')" rules="max:30" />
                        <ErrorMessage name="po_reference" v-slot="{ message }"><span class="error">{{ message }}</span></ErrorMessage>
                    </div>
                </div>

                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="order_date">{{ "Date" }}</label>
                        <DatePicker name="order_date" v-model="order_date" as="DatePicker" :format="date.format" :lang="date.lang" input-class="form-control form-control-custom bg-white" ref="order_date" :placeholder="('Please enter rasid Date')" rules="date:yyyy-MM-dd" />
                        <ErrorMessage name="order_date" v-slot="{ message }"><span class="error">{{ message }}</span></ErrorMessage>
                    </div>

                    <div class="form-group col-md-3">
                        <label for="payment_type">{{ "Payment Type" }}</label>
                        <Field name="payment_type" v-model="payment_type" as="select" class="form-control form-control-custom custom-select" rules="">
                            <option value="">Choose Status..</option>
                            <option v-for="(payment_item, index) in payment_types" :value="payment_item" :key="index">{{ payment_item }}</option>
                        </Field>
                        <ErrorMessage name="payment_type" v-slot="{ message }"><span class="error">{{ message }}</span></ErrorMessage>
                    </div>
                </div>

                <div class="container">
                    <div class="d-flex flex-wrap mb-1">
                        <div class="mr-auto"><span class="text-subhead">{{ "Particulars" }}</span></div>
                    </div>

                    <div class="form-row mb-2">
                        <div class="form-group col-md-4">
                            <label for="search_particular">{{ "Search and Add Particulars" }}</label>
                            <div class="position-relative">
                                <input type="text" class="form-control" v-model="search_particular" @focus="showDropdown = true" @input="filterParticulars" placeholder="Start Typing..." @keydown.enter.prevent="addParticular(search_particular)" @blur="hideDropdown" />
                                <div v-if="showDropdown && filtered_particulars.length" class="dropdown-suggestions">
                                    <div v-for="(item, index) in filtered_particulars" :key="index" class="suggestion-item" @click="addParticular(item)">{{ item }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6 mb-1"><label>{{ "Particulars" }}</label></div>
                        <div class="form-group col-md-2 mb-1"><label>{{ "Amount" }}</label></div>
                    </div>

                    <div class="form-row mb-2" v-for="(particular, index) in selected_particulars" :key="index">
                        <div class="form-group col-md-6"><input type="text" class="form-control" :value="particular.name" readonly /></div>
                        <div class="form-group col-md-2"><input type="number" class="form-control" v-model="particular.amount" @input="calculateTotal" step="0.01" min="0" /></div>
                        <div class="form-group col-md-1">
                            <button type="button" class="btn btn-outline-danger" @click="removeParticular(index)"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                </div>

                <div class="form-row mb-3">
                    <div class="form-group col-md-5"></div>
                    <div class="form-group col-md-1 text-right">
                        <label for="grand_total" style="position: relative; top: 5px;">{{ "Grand Total" }}</label>
                    </div>
                    <div class="mr"><span class="text-subhead" style="font-size: 1.5rem;position: relative; top: 5px;">{{ currency_listString }}</span></div>
                    <div class="form-group col-md-2"><Field name="grand_total" v-model="grandTotal" as="input" type="text" class="form-control form-control-custom" readonly /></div>
                    <div class="form-group col-md-2" style="position: relative; top: -7px;">
                        <label for="name">{{ "Payment Status" }}</label>
                        <div class="d-flex align-items-center">
                            <div class="custom-control custom-switch" style="position: relative; top: -17px;">
                                <Field name="update_stock" as="input" type="checkbox" class="custom-control-input" id="update_stock_switch" v-model="update_stock" @change="toggleSwitch" style="transform: scale(1.3);" />
                                <label class="custom-control-label" for="update_stock_switch"></label>
                            </div>
                            <span class="ml-2" style="font-size: 1rem;position: relative; top: -7px;">
                                Payment is <b>{{ update_stock ? 'Due' : 'Cleared' }}</b>.
                            </span>
                        </div>
                    </div>
                </div>

                <div class="form-row mb-2">
                    <div class="form-group col-md-6">
                        <label for="terms">{{ "Terms" }}</label>
                        <Field name="terms" v-model="terms" as="textarea" class="form-control form-control-custom" rows="5" :placeholder="('Enter Terms')" rules="max:65535" />
                        <ErrorMessage name="terms" v-slot="{ message }"><span class="error">{{ message }}</span></ErrorMessage>
                    </div>
                </div>

                <modalcomponent v-if="show_modal" v-on:close="show_modal = false">
      <template v-slot:modal-header>
        Confirm
      </template>
      <template v-slot:modal-body>
        Are you sure you want to proceed?
      </template>
      <template v-slot:modal-footer>
        <button type="button" class="btn btn-light" @click="$emit('close')">Cancel</button>
        <button type="button" class="btn btn-primary" @click="$emit('submit')" v-bind:disabled="processing"> <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> Continue</button>
      </template>
    </modalcomponent>
            </Form>
        </div>
    </div>
</template>


<style scoped>
.error { color: red; }
.dropdown-suggestions { /* your styles */ }
</style>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { required, max, numeric } from '@vee-validate/rules'; 
import { setLocale } from 'vee-validate';

import { defineRule } from 'vee-validate'; // Used to define rules globally
import axios from 'axios';
import DatePicker from 'vue3-datepicker';
// Custom Date Validator
const isValidDate = (value) => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
    return datePattern.test(value) && !isNaN(new Date(value).getTime());
};


export default {
    components: {
        Field,
        DatePicker,
        Form,
        ErrorMessage
    },
        data(){
            return{
                date:{
                    lang : 'en',
                    format : "YYYY-MM-DD",
                },
                server_errors   : '',
                error_class     : '',
                processing      : false,
                modal           : false,
                show_modal      : false,
                api_link        : (this.challan_order_data == null)?'/api/addchallan':'/api/update_challan_order/'+this.challan_order_data.slack,
                showDropdown: false,
                selectedcustomerslack: null,
                supplier_list   : [],
                
                customer: (this.challan_order_data == null) ? '' : (this.challan_order_data.supplier_code)?this.challan_order_data.supplier_code:'', // Supplier slack
                supplier_name: (this.challan_order_data == null) ? '' : (this.challan_order_data.supplier_name)?this.challan_order_data.supplier_name:'',
                supplier_code:(this.challan_order_data ==null)? '' : (this.challan_order_data.supplier_code)?this.challan_order_data.supplier_code:'',

                challan_order_slack : (this.challan_order_data == null)?'':this.challan_order_data.slack,
                po_number : (this.challan_order_data == null)?'':(this.challan_order_data.po_number)?this.challan_order_data.po_number:'',
                po_reference : (this.challan_order_data == null)?'':(this.challan_order_data.po_reference != null)?this.challan_order_data.po_reference:'',
                order_date : (this.challan_order_data == null)?'':(this.challan_order_data.order_date_raw != null)?new Date(this.challan_order_data.order_date_raw):'',
                order_due_date : (this.challan_order_data == null)?'':(this.challan_order_data.order_due_date_raw != null)?new Date(this.challan_order_data.order_due_date_raw):'',
                currency : (this.challan_order_data == null)?'':(this.challan_order_data.currency_code != null)?this.challan_order_data.currency_code:'',
                update_stock : (this.challan_order_data == null)?false:(this.challan_order_data.update_stock != null)?((this.challan_order_data.update_stock == 1)?true:false):false,
                terms : (this.challan_order_data == null)?'':(this.challan_order_data.terms != null)?this.challan_order_data.terms:'',
                payment_type: (this.challan_order_data == null)?'':(this.challan_order_data.payment_type != null)?this.challan_order_data.payment_type:'',
                grand_total : 0,

                search_particular: '',
      filtered_particulars: [],
      selected_particulars: [],
               
                selected_particulars: [],
                grand_total: 0,

                particular_lists :(this.challan_order_data != null)?this.challan_order_data.products:[],
                particulars_template : {
                    name : '',
                    amount: 0
                },
                today : new Date(),
                
            }
        },

        props: {
            currency_list: Array,
            payment_types: Array,
            isEditMode: {
            type: Boolean,
            default: false
        },
        particulars: {
      type: Array,
      required: true,
    },
            challan_order_data: [Array, Object],
            tax_options: [Array, Object],
        },

        watch: {
           
        },

        computed: {
            grandTotal() {
      return this.selected_particulars.reduce((total, particular) => {
        return total + parseFloat(particular.amount || 0);
      }, 0).toFixed(2);
    },
        formattedSupplierList() {
            return this.supplier_list.map(customer => ({
                ...customer,
                displayText: `${customer.name}`  // For display purposes
            }));
        },
        currency_listString() {
            return this.currency_list.join(', '); // Customize the separator as needed
        }
        
    },


        mounted() {
            console.log('Add challan order page loaded');
            if (this.supplier_name) {
            this.$refs.customer.setSearchData(this.supplier_name);
        }
            this.load_customers('');
            this.filtered_particulars = this.particulars; // Initialize filtered list with all particulars

        },
        created() {
            defineRule('required', required);
        defineRule('max', max);
        defineRule('numeric', numeric);
        defineRule('date', isValidDate);
            if (this.challan_order_data) {
                this.update_particular_list(this.particular_lists);
            } else {
                this.selected_particulars = [];
                this.grand_total = 0;
            }
        },
        methods: {
            toggleDropdown() {
      this.showDropdown = !this.showDropdown; // Method to toggle dropdown visibility
    },
            toggleSwitch() {
            if (!this.update_stock) {
                this.update_stock = false; // Keep it closed
            } else {
                this.update_stock = true; // Allow it to become open
            }
        },
        load_customers(keywords) {
                    if (typeof keywords !== 'undefined') {
                        const formData = new FormData();
                        formData.append("access_token", window.settings.access_token);
                        formData.append("keywords", keywords);

                        axios.post('/api/load_customers', formData)
                        .then((response) => {
                            if (response.data.status_code === 200) {
                                this.supplier_list = response.data.data;
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    }
                },
            convert_date_format(date){
                return (date != '')?moment(date).format("YYYY-MM-DD"):'';
            },

            not_before_order_date(date) {
                return date < this.order_date;
            },

            load_particulars(searchTerm) {
            // You can optionally handle the search query here, if needed
        },
        
        filterParticulars() {
      const searchLower = this.search_particular.toLowerCase();
      this.filtered_particulars = this.particulars.filter(particular =>
        particular.toLowerCase().includes(searchLower)
      );
    },
    addParticular(particular) {
      // Check if particular is already selected to avoid duplicates
      const exists = this.selected_particulars.find(p => p.name === particular);
      if (!exists) {
        this.selected_particulars.push({ name: particular, amount: 0 });
      }
      this.search_particular = ''; // Clear search box after selection
      this.filtered_particulars = []; // Clear filtered results
    },
    removeParticular(index) {
      this.selected_particulars.splice(index, 1);
      this.calculateTotal();
    },
    calculateTotal() {
      // Calculate grand total based on amounts in selected_particulars
      this.grandTotal = this.selected_particulars.reduce((sum, p) => sum + Number(p.amount), 0);
    },
            update_particular_list(challan_order_products) {
                if(challan_order_products != null && challan_order_products.length > 0){
                    this.products = [];
                    for (let i = 0; i < challan_order_products.length; i++) {
                        var individual_product = {
                            name: challan_order_products[i].name,
                            amount: challan_order_products[i].total_amount
                        };
                        this.selected_particulars.push(individual_product);
                    }
                } else {
                    this.selected_particulars = [];
                    this.selected_particulars.push(this.particulars_template);
                }
                this.calculate_total();
            },
            convertFormDataToObject(formData) {
            const obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            return obj;
        },
        submit_form() {
    console.log('Submit button pressed');

    // Prepare form data
    const formData = new FormData();
    formData.append("access_token", window.settings.access_token);
    formData.append("customer", this.challan_order_data == null ? this.selectedcustomerslack : this.challan_order_data.supplier_code);
    formData.append("po_number", this.po_number || '');
    formData.append("po_reference", this.po_reference || '');
    formData.append("order_date", this.convert_date_format(this.order_date));
    formData.append("currency", this.currency_listString || '');
    formData.append("terms", this.terms);
    formData.append("update_stock", this.update_stock ? 1 : 0); // Adjust based on your needs
    formData.append("particulars", JSON.stringify(this.selected_particulars));

    this.processing = true;

    // Submit the form data
    axios.post(this.api_link, formData)
        .then(response => {
            // if (response.data.status_code === 200) {
            //     // Handle success
            //     this.$emit('formSubmitted', response.data); // Emit an event to notify parent component
            // } else {
            //     this.server_errors = response.data.message; // Handle errors
            // }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            this.server_errors = 'An error occurred while submitting the form.';
        })
        .finally(() => {
            this.processing = false;
        });
}
 } }
</script>