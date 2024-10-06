<template>
    <div class="row">
        <div class="col-md-12">
            <Form ref="form" @submit.prevent="submit_form" class="mb-3">
                <div class="d-flex flex-wrap mb-4 p-3 align-items-center" :style="{'background-color': update_stock ? '#c8e6c9' : '#ffcdd2', 'border-radius': '8px'}">
                    <!-- Title on the left side -->
                    <div class="mr-auto">
                        <span class="text-title">{{ !purchase_order_slack ? "Add New Raisd" : "Edit Raisd" }}</span>
                    </div>

                    <!-- Right side: Payment Status Switch and Save Button grouped together -->
                    <div class="d-flex align-items-center">
                        <!-- Payment Status Switch -->
                        <div class="form-group mb-0 mr-3">
                            <label for="name">{{ "Payment Status" }}</label>
                            <div class="d-flex align-items-center" style="position: relative; top: -4px;">
                                <div class="custom-control custom-switch" style="position: relative; top: -17px;">
                                    <Field name="update_stock" as="input" type="checkbox" class="custom-control-input" id="update_stock_switch" v-model="update_stock" @change="toggleSwitch" style="transform: scale(1.3);" :value="true" :checked="update_stock" />
                                    <label class="custom-control-label" for="update_stock_switch"></label>
                                </div>
                                <span class="ml-2" style="font-size: 1rem; position: relative; top: -7px;">
                                    Payment is <b>{{ update_stock ? 'Paid' : 'Due' }}</b>.
                                </span>
                            </div>
                        </div>

                        <!-- Save Button next to the switch -->
                        <div>
                            <button type="button" @click="show_modal = true" class="btn btn-primary" :disabled="processing">
                                <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> {{ "Save" }}
                            </button>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="po_number">{{ "Raisd Number" }}</label>
                        <div v-if="!purchase_order_slack">
                            <Field name="po_number" v-model="po_number" as="input" type="text" class="form-control form-control-custom" placeholder="Please enter Raisd Number"  rules="required|max:50"  />
                            <ErrorMessage name="po_number" v-slot="{ message }">
                                <span class="error">{{ message }}</span>
                            </ErrorMessage>
                        </div>
                        <div v-else>
                            <div class="ml-2" style="font-size: 1.2rem">
                                <span for="po_number">{{ po_number }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="form-group col-md-3">
                        <label for="customer">{{ "Customer" }}</label>
                        <div v-if="!purchase_order_slack">
                            <input type="text" v-model="customerSearchQuery" @input="onCustomerSearch" class="form-control form-control-custom" placeholder="Search Customer" />
                            <ul v-if="filteredCustomers.length > 0" class="dropdown-suggestions">
                                <li v-for="(customer, index) in filteredCustomers" :key="index" @click="selectCustomer(customer)">
                                    {{ customer.name }} <!-- Ensure this is the correct property name -->
                                </li>
                            </ul>
                        </div>
                        <div v-else>
                            <div class="ml-2" style="font-size: 1.2rem">
                                <span>{{ customer_name }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="form-group col-md-3">
                       
                        <div v-if="!purchase_order_slack">
                            <label for="order_date">{{ "Raisd Date" }}</label>
                        <Field  name="order_date"  v-model="order_date" as="input"  type="date" rules="required"  class="form-control form-control-custom" placeholder="Pick a date or type a date"  style="width: 275px;" />
                        <ErrorMessage name="order_date" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                        </div>
                        <div v-else>
                            <div class="ml-2" style="font-size: 1.2rem">
                                <span for="po_number">{{ order_date }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="form-group col-md-3">
                    
                    </div>

                    <div class="form-group col-md-3">
                        <label for="po_reference">{{ "Reference Raisd Number (if any)" }}</label>
                        <Field name="po_reference" v-model="po_reference"  as="input"  type="text"  class="form-control form-control-custom"  placeholder="Reference Raisd Number"  rules="max:30" />
                        <ErrorMessage name="po_reference" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                    </div>
                </div>

                <hr>

                <div class="form-row mb-2">
                <div class="form-group col-md-3">
                        <label for="payment_type">{{ "Payment Type" }}</label>
                        <Field as="select" name="payment_type" v-model="selectedPaymentType" class="form-control form-control-custom" rules="required" @change="selectPaymentType">
                            <option value="" disabled>Select Payment Type</option> 
                            <option v-for="(type, index) in payment_types" :key="index" :value="type">{{ type }}</option> </Field>
                </div>

                <div class="form-group col-md-3" v-if="selectedPaymentType">
                    <label for="payment_date">{{ "Payment Date" }}</label>
                    <Field name="payment_date" v-model="payment_date" as="input" type="date" class="form-control form-control-custom" rules="required" />
                    <ErrorMessage name="payment_date" v-slot="{ message }">
                        <span class="error">{{ message }}</span>
                    </ErrorMessage>
                </div>
              
                </div>

                <hr>

                <div class="form-row">
    <div class="form-group col-md-6 mb-1">
        <label>{{ "Particulars" }}</label>
        <input 
            type="text" 
            v-model="particularSearchQuery" 
            @input="onParticularSearch" 
            class="form-control" 
            placeholder="Search Particular" 
        />
        <ul v-if="filteredParticulars.length > 0" class="dropdown-suggestions">
            <li 
                v-for="(particular, index) in filteredParticulars" 
                :key="index" 
                @click="selectParticular(particular)"
            >
                {{ particular }} <!-- Make sure this is the correct property name -->
            </li>
        </ul>
    </div>
 
</div>
<div class="form-row">
                        <div class="form-group col-md-6 mb-1"><label>{{ "Particulars" }}</label></div>
                        <div class="form-group col-md-2 mb-1"><label>{{ "Amount" }}</label></div>
                    </div>
<div class="form-row mb-10" style=" top: 7px" v-for="(particular, index) in selected_particulars" :key="index" >
    <div class="form-group col-md-6" >
        <input type="text" class="form-control" :value="particular.name" readonly />
    </div>
    <div class="form-group col-md-2">
        <input 
            type="number" 
            class="form-control" 
            v-model="particular.amount" 
            @input="calculateTotal" 
            step="0.00" 
            min="0" 
        />
    </div>
    <div class="form-group col-md-1">
        <button 
            type="button" 
            class="btn btn-outline-danger" 
            @click="removeParticular(index)"
        >
            <i class="fas fa-times"></i>
        </button>
    </div>
</div>

<div class="form-row mb-3">
    <div class="form-group col-md-5"></div>
    <div class="form-group col-md-1 text-right">
        <label for="grand_total" style="position: relative; top: 5px;">{{ "Grand Total" }}</label>
    </div>
    <div class="mr">
    <span class="text-subhead" style="font-size: 1.5rem; position: relative; top: 5px;">{{ currency_list[0] }}</span>
</div>


    <div class="form-group col-md-2">
        <Field 
            name="grand_total" 
            v-model="grandTotal" 
            as="input" 
            type="text" 
            class="form-control form-control-custom" 
            readonly 
        />
    </div>
</div>
<div class="form-row mb-2">
                    <div class="form-group col-md-6">
                        <label for="terms">{{ "Terms" }}</label>
                        <Field name="terms" v-model="terms" as="textarea" class="form-control form-control-custom" rows="5" :placeholder="('Enter Terms')" rules="max:65535" />
                        <ErrorMessage name="terms" v-slot="{ message }"><span class="error">{{ message }}</span></ErrorMessage>
                    </div>
                </div>
                <modalcomponent v-if="show_modal" @close="show_modal = false">
                    <template v-slot:modal-header>
                        Confirm
                    </template>
                    <template v-slot:modal-body>
                        Are you sure you want to proceed with the following data?
                        <!-- <pre>{{ formData }}</pre> This shows the data to be sent -->
                    </template>
                    <template v-slot:modal-footer>
                        <button type="button" class="btn btn-light" @click="show_modal = false">Cancel</button>
                        <button type="button" class="btn btn-primary" @click="submit_form" :disabled="processing">
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
import { toRaw } from '@vue/reactivity';

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
            customerSearchQuery: '', // For the customer search input
            customer_list: [],
            filteredCustomers: [],
            selectedCustomer: null, // To hold selected customer data
            grandTotal: 0,
            update_stock: (this.purchase_order_data == null) ? '' : (this.purchase_order_data.update_stock != null) ? ((this.purchase_order_data.update_stock == 1) ? false : true) : true,
            products: [],
            api_link: (this.purchase_order_data == null)?'/api/addrasid':'/api/update_purchase_order/'+this.purchase_order_data.slack,

            // selectedPaymentType: (this.purchase_order_data == null)?'':(this.purchase_order_data.payment_type != null)?this.purchase_order_data.payment_type:'',
            // update_stock : (this.purchase_order_data == null)?false:(this.purchase_order_data.update_stock != null)?((this.purchase_order_data.update_stock == 1)?true:false):false,
            customer_name: (this.purchase_order_data == null) ? '' : (this.purchase_order_data.customer_name)?this.purchase_order_data.customer_name:'',
            customer_code:(this.purchase_order_data ==null)? '' : (this.purchase_order_data.customer_code)?this.purchase_order_data.customer_code:'',
            po_number : (this.purchase_order_data == null)?'':(this.purchase_order_data.po_number)?this.purchase_order_data.po_number:'',
            po_reference : (this.purchase_order_data == null)?'':(this.purchase_order_data.po_reference != null)?this.purchase_order_data.po_reference:'',
            order_date: this.purchase_order_data?.order_date_raw || '',
            selectedPaymentType: this.purchase_order_data?.payment_type || '',
          payment_date: (this.purchase_order_data == null)?'':(this.purchase_order_data.payment_date != null)?new Date(this.purchase_order_data.payment_date):'',
            purchase_order_slack: (this.purchase_order_data == null)?'':this.purchase_order_data.slack,
            payment_type: (this.purchase_order_data == null)?'':(this.purchase_order_data.payment_type != null)?this.purchase_order_data.payment_type:'',
            particularSearchQuery: '',
            filteredParticulars: [],
            selected_particulars: [], // to hold selected particulars with amounts
            terms : (this.purchase_order_data == null)?'':(this.purchase_order_data.terms != null)?this.purchase_order_data.terms:'',
               
        particulars: this.purchase_order_data ? this.purchase_order_data.products : this.particulars,
        };
    },


    props: {
        purchase_order_data: [Array, Object],
        currency_list: [Array],
        payment_types: {
            type: Array,
            default: () => [],
        },
        particulars: {
        type: Array,
        default: () => [],
    },
    },

    created() {
        defineRule('required', required);
        defineRule('max', max);
        defineRule('numeric', numeric);
        if (this.purchase_order_data && this.purchase_order_data.products) {
            this.selected_particulars = this.purchase_order_data.products.map(product => ({ name: product.name, amount: product.total_amount }));
            this.calculateTotal(); // Calculate the grand total
        } else {
            this.selected_particulars = [];
            this.grandTotal = 0;
        }
        console.log('Raisd Order Data:', this.purchase_order_data);
    },
    computed: {
        formData() {
            // Compile form data to display in the modal
            return {
                po_number: this.po_number,
                customer: this.selectedCustomer,
                order_date: this.order_date,
                payment_type: this.selectedPaymentType,
                particulars: this.selected_particulars,
                grand_total: this.grandTotal,
                terms: this.terms,
                // Include other fields as needed
            };
        }
    },
    methods: {
            onParticularSearch() {
                    if (this.particularSearchQuery.length >= 2) {
                        this.filteredParticulars = this.particulars.filter(particular =>
                            particular.toLowerCase().includes(this.particularSearchQuery.toLowerCase())
                        );
                    } else {
                        this.filteredParticulars = [];
                    }
            },
            selectParticular(particular) {
                    if (!this.selected_particulars.some(p => p.name === particular)) {
                        this.selected_particulars.push({ name: particular, amount: 0 });
                    }
                    this.particularSearchQuery = ''; // Reset the search field
                    this.filteredParticulars = []; // Clear filtered list after selection
            },
            removeParticular(index) {
                    this.selected_particulars.splice(index, 1);
                    this.calculateTotal(); // Recalculate total after removal
            },
            calculateTotal() {
            this.grandTotal = this.selected_particulars.reduce((total, p) => total + parseFloat(p.amount || 0), 0);
        },
            selectPaymentType() {
                if (this.selectedPaymentType) {
                    this.update_stock = true; // Turn the switch on when a payment type is selected
                }
            },

            toggleSwitch() {
                if (!this.update_stock) {
                    // this.update_stock = 1; // Keep it closed
                    this.selectedPaymentType = ''; // Reset selected payment type when switch is turned off
                } else {
                    // this.update_stock = 0; // Allow it to become open
                }
            },
         onCustomerSearch() {
            if (this.customerSearchQuery.length >= 2) {
                this.load_customers();
            } else {
                this.filteredCustomers = [];
            }
        },

        load_customers() {
            const formData = new FormData();
            formData.append("access_token", window.settings.access_token);
            formData.append("keywords", this.customerSearchQuery);

            axios.post('/api/load_customers', formData)
                .then((response) => {
                    if (response.data.status_code === 200) {
                        this.customer_list = response.data.data;
                        this.filteredCustomers = this.customer_list;
                    }
                })
                .catch((error) => {
                    console.log('Error fetching customers:', error);
                });
        },

        selectCustomer(customer) {
            this.customerSearchQuery = customer.name; // Set the selected customer name
            this.selectedCustomer = customer; // Save selected customer's complete data
            this.filteredCustomers = []; // Clear filtered list after selection
        },

        convert_date_format(date) {
            return (date !== '') ? moment(date).format("YYYY-MM-DD") : '';
        },


        submit_form() {
    this.processing = true;
    this.show_modal = true;

    // Prepare data to be sent to the server
    const dataToSubmit = {
        access_token: window.settings.access_token,
        po_number: this.po_number,
        po_reference: this.po_reference,
        order_date: this.convert_date_format(this.order_date),
        payment_data: this.convert_date_format(this.payment_date),
        customer_code: this.selectedCustomer ? this.selectedCustomer.customer_code : this.customer_code,
        customer_name: this.selectedCustomer ? this.selectedCustomer.name : this.customer_name,
        payment_type: this.selectedPaymentType ? this.selectedPaymentType : "Due payment",
        particulars: toRaw(this.selected_particulars), // Convert to raw to avoid reactive issues
        update_stock: (this.update_stock ? 0 : 1),
        grand_total: this.grandTotal,
        terms: this.terms,
    };

    console.log('Submitting form with data:', dataToSubmit); // Debug log


    axios.post(this.api_link, dataToSubmit, {
        headers: {
            'Content-Type': 'application/json',
            'access_token': `Bearer ${window.settings.access_token}`, // Optional: if you need to pass a token
        }
    }).then((response) => {
        if (response.data.status_code == 200) {
            this.show_response_message( 'SUCCESS');

            setTimeout(() => {
              window.location.href = '/rasids'; // Update the URL as per your route path
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
    }).catch((error) => {
        console.error('Error submitting form:', error);
        this.processing = false;
        this.show_modal = false;
    });
},

show_response_message(message) {
        
    },

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
