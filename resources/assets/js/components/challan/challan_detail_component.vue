<template>
    <div class="row">
        <div class="col-md-12">

            <div class="d-flex flex-wrap mb-4">
                <div class="mr-auto">
                   <div class="d-flex">
                        <div>
                            <span class="text-title"> {{ ("Rasid") }} #{{ po_basic.po_number }} </span>
                        </div>
                    </div>
                </div>
                <div class="">
                    <button type="button" class="btn btn-outline-primary mr-1" v-if="update_stock === 'Due'" v-on:click="generate_invoice()">
                        {{ ("Payment") }}
                    </button>
                    <span v-bind:class="po_basic.status.color">{{ po_basic.status.label }}</span>
                </div>
                
            </div>

            <div class="d-flex flex-wrap mb-4" v-if="po_statuses != ''">
                <div class="form-group col-md-3">
                    <dev style="font-size: 1.5rem">{{ po_basic.supplier_code }}{{ " - " }}{{ po_basic.supplier_name }}</dev>
                    <dev class="ml-2">{{ po_basic.supplier_address }}</dev>
                </div>
                
               
                <p v-html="server_errors" v-bind:class="[error_class]"></p>

                <div class="ml-auto">
                    
                    <a class="btn btn-outline-primary mr-1" v-bind:href="'/print_purchase_order/'+slack" target="_blank">{{ ("Print") }}</a>
                

                
                    <button type="submit" class="btn btn-danger mr-1" v-show="!block_delete_po.includes(po_basic.status.constant)" v-if="delete_po_access == true" v-on:click="delete_po()" v-bind:disabled="po_delete_processing == true"> <i class='fa fa-circle-notch fa-spin'  v-if="po_delete_processing == true"></i> {{ ("Delete Purchase Order") }}</button>

                    <div class="dropdown d-inline">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="po_action" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ ("Change Status") }}
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="po_action">
                            <button class="dropdown-item" type="button" v-for="(po_status, key, index) in po_statuses" v-bind:value="po_status.value_constant" v-bind:key="index" v-on:click="change_po_status(po_status.value_constant)">Mark as {{ po_status.label }}</button>
                        </div>
                    </div>

                </div>

            </div>
            <hr>

            <div class="mb-2">
                <span class="text-subhead">{{ ("Basic Information") }}</span>
            </div>
            <div class="form-row mb-2">
                <div class="form-group col-md-3">
                    <label for="po_reference">{{ ("Reference Number") }}</label>
                    <p>{{ po_basic.po_reference }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="order_date">{{ ("Order Date") }}</label>
                    <p>{{ po_basic.order_date }}</p>
                </div>
               
                <div class="form-group col-md-3">
                    <label for="payment_type">{{ ("Payment Type") }}</label>
                    <p v-if="po_basic.payment_type">{{ po_basic.payment_type }}</p>
                    <p v-else>{{ ("No payment is selected") }}</p>
                </div>
                            
                <div class="form-group col-md-3">
                    <label for="updated_on">{{ ("Payment is ") }}</label>
                    <p>{{ update_stock }}</p>
                </div>
               
            </div>
            <hr>

       
            <div v-if="po_basic.invoices != null && po_basic.invoices.length != 0">
                <hr>
                <div class="mb-2">
                    <span class="text-subhead">{{ ("Invoices") }}</span>
                </div>
                <div class="d-flex flex-wrap mb-4">
                    <span v-for="(invoice, key, index) in po_basic.invoices" v-bind:value="invoice.slack" v-bind:key="index">
                        <span v-if="invoice.detail_link != ''"><a v-bind:href="invoice.detail_link" target="_blank">{{ invoice.invoice_number }}</a></span><span v-else>{{ invoice.invoice_number }}</span> &nbsp;&middot;&nbsp;
                    </span>
                </div>
            </div>
            
            <hr>

            <div class="mb-2">
                <span class="text-subhead">{{ ("Product Information") }}</span>
            </div>

            <div class="form-row">
       
                <div class="form-group col-md-6 mb-1">
                    <label for="name">{{ ("Particulars") }}</label>
                </div>
                <div class="form-group col-md-2 mb-1">
                    <label for="amount">{{ ("Amount") }}</label>
                </div>
                </div>
                <div class="form-row mb-2" v-for="(po_product,key, index) in products" v-bind:value="po_product.product_slack" v-bind:key="index">
                    <div class="form-group col-md-6">
                        <input
                            type="text" v-bind:name="'po_product_'+index" v-model="po_product.name" class="form-control form-control-custom" readonly />
                    </div>
                    
                    <div class="form-group col-md-2">
                        <input type="number"  v-bind:name="'po_product_'+index"  v-model="po_product.total_amount"  class="form-control form-control-custom" readonly />
                    </div>
                </div>
                <div class="form-row mb-3">
                    <div class="form-group col-md-5"></div>
                    <div class="form-group col-md-1 text-right">
                        <label for="grand_total" style="position: relative; top: 5px;">{{ ("Grand Total") }}</label>
                    </div>
                
                    <div class="form-group col-md-2">
                        <input type="text" name="grand_total" v-model="po_basic.total_order_amount" class="form-control form-control-custom" readonly />
                    </div>
                    <div class="mr">
                        <span class="text-subhead" style="font-size: 1.2rem;position: relative; top: 5px;">{{ po_basic.currency_code }}</span>
                    </div>
                </div>
                <hr>

            <div class="mb-2">
                <span class="text-subhead">{{ ("Terms") }}</span>
            </div>
            <div class="form-row mb-2">
                <div class="form-group col-md-6">
                    <p class='custom-pre'>{{ (po_basic.terms != null)?po_basic.terms:'-' }}</p>
                </div>
            </div>
            <div class="form-row mb-2">
                <div class="form-group col-md-3">
                    <label for="created_by">{{ ("Created By") }}</label>
                    <p>{{ (po_basic.created_by == null)?'-':po_basic.created_by['fullname']+' ('+po_basic.created_by['user_code']+')' }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="updated_by">{{ ("Updated By") }}</label>
                    <p>{{ (po_basic.updated_by == null)?'-':po_basic.updated_by['fullname']+' ('+po_basic.updated_by['user_code']+')' }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="created_on">{{ ("Created On") }}</label>
                    <p>{{ po_basic.created_at_label }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="updated_on">{{ ("Updated On") }}</label>
                    <p>{{ po_basic.updated_at_label }}</p>
                </div>
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
                <button type="button" class="btn btn-primary" @click="$emit('submit')" v-bind:disabled="processing == true"> <i class='fa fa-circle-notch fa-spin'  v-if="processing == true"></i> Continue</button>
            </template>
        </modalcomponent>

        <modalcomponent v-if="show_generate_invoice_modal" v-on:close="show_generate_invoice_modal = false">
            <template v-slot:modal-header>
                Confirm
            </template>
            <template v-slot:modal-body>
                <p>Invoice will be created from this purchase order.</p>
                Are you sure you want to proceed?
            </template>
            <template v-slot:modal-footer>
                <button type="button" class="btn btn-light" @click="$emit('close')">Cancel</button>
                <button type="button" class="btn btn-primary" @click="$emit('submit')" v-bind:disabled="processing == true"> <i class='fa fa-circle-notch fa-spin'  v-if="processing == true"></i> Continue</button>
            </template>
        </modalcomponent>

    </div>
</template>  
<style>
.bg-success {
    background-color: #ffffff; /* Light green */
}

.bg-danger {
    background-color: #ffe8e9; /* Light red */
}</style>

<script>
    'use strict';
    
    export default {
        data(){
            return{
                server_errors   : '',
                error_class     : '',
                processing      : false,
                show_modal      : false,
                show_generate_invoice_modal: false,
                po_delete_processing : false,
                generate_invoice_processing: false,
                
                change_po_link  : '/api/update_po_status/'+this.purchase_order_data.slack,
                delete_po_api_link : '/api/delete_purchase_order/'+this.purchase_order_data.slack,
                generate_invoice_from_po_api_link : '/api/generate_invoice_from_po/'+this.purchase_order_data.slack,

                slack           : this.purchase_order_data.slack,
                po_basic        : this.purchase_order_data,
                products        : this.purchase_order_data.products,

                tax_component_count  : (this.purchase_order_data.tax_option_data != null)?this.purchase_order_data.tax_option_data.component_count:0,
                tax_component_array  : (this.purchase_order_data.tax_option_data != null)?this.purchase_order_data.tax_option_data.component_array:[],
                table_colspan   : parseInt(8)+((this.purchase_order_data.tax_option_data != null)?parseInt(this.purchase_order_data.tax_option_data.component_count):1),
                
                update_stock    : (this.purchase_order_data.update_stock == 1)?'Due':'Paid',
                block_delete_po : ['CLOSED', 'RELEASED_TO_SUPPLIER']
            }
        },
        computed: {
            updateStockStatus() {
                return this.update_stock === 1
                    ? { color: 'bg-danger', label: 'Due' }
                    : { color: 'bg-success', label: 'Paid' };
            }
        },
        props: {
            purchase_order_data: [Array, Object],
            po_statuses: Array,
            delete_po_access: Boolean,
            create_invoice_from_po_access: Boolean
        },
        mounted() {
            console.log('PO detail page loaded');
        },
        methods: {
            change_po_status(po_status){
                this.processing = true;
                var formData = new FormData();

                formData.append("access_token", window.settings.access_token);
                formData.append("status", po_status);

                axios.post(this.change_po_link, formData).then((response) => {
                    
                    this.show_modal = false;
                    this.processing = false;

                    if(response.data.status_code == 200) {
                        location.reload();
                    }else{
                        try{
                            var error_json = JSON.parse(response.data.msg);
                            this.loop_api_errors(error_json);
                        }catch(err){
                            this.server_errors = response.data.msg;
                        }
                        this.error_class = 'error';
                        this.show_modal = false;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            },

            delete_po(){

                this.$off("submit");
                this.$off("close");
                this.show_modal = true;

                this.$on("submit",function () {       
                    this.processing = true;
                    this.po_delete_processing = true;

                    var formData = new FormData();
                    formData.append("access_token", window.settings.access_token);

                    axios.post(this.delete_po_api_link, formData).then((response) => {

                        if(response.data.status_code == 200) {
                            if(typeof response.data.link != 'undefined' && response.data.link != ""){
                                window.location.href = response.data.link;
                            }else{
                                location.reload();
                            }
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
                        this.po_delete_processing = false;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                });

                this.$on("close",function () {
                    this.show_modal = false;
                });
            },

            generate_invoice(){
                this.$off("submit");
                this.$off("close");
                this.show_generate_invoice_modal = true;

                this.$on("submit",function () {       
                    this.processing = true;
                    this.generate_invoice_processing = true;

                    var formData = new FormData();
                    formData.append("access_token", window.settings.access_token);

                    axios.post(this.generate_invoice_from_po_api_link, formData).then((response) => {

                        if(response.data.status_code == 200) {
                            this.show_response_message(response.data.msg, 'SUCCESS');
                            if(typeof response.data.link != 'undefined' && response.data.link != ""){

                                if(response.data.new_tab == true){
                                    window.open(response.data.link, '_blank');
                                }else{
                                    window.location.href = response.data.link;
                                }

                                setTimeout(function(){
                                    window.location.reload();
                                }, 1000);
                            }
                        }else{
                            this.show_generate_invoice_modal = false;
                            this.processing = false;
                            try{
                                var error_json = JSON.parse(response.data.msg);
                                this.loop_api_errors(error_json);
                            }catch(err){
                                this.server_errors = response.data.msg;
                            }
                            this.error_class = 'error';
                        }
                        this.generate_invoice_processing = false;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                });

                this.$on("close",function () {
                    this.show_generate_invoice_modal = false;
                });
            }
        }
    }
</script>