<template>
    <div class="row">
        <div class="col-md-12">

            <div class="d-flex flex-wrap mb-4">
                <div class="mr-auto">
                   <div class="d-flex">
                        <div>
                            <span class="text-title"> <span class='text-muted'>{{ $t("Store") }}</span> {{ store.name }} ({{ store.store_code }}) </span>
                        </div>
                    </div>
                </div>
                <div class="">
                    <span v-bind:class="store.status.color">{{ store.status.label }}</span>
                </div>
            </div>

            <div class="mb-2">
                <span class="text-subhead">{{ $t("Basic Information") }}</span>
            </div>
            <div class="form-row mb-2">
                <div class="form-group col-md-3">
                    <label for="store_code">{{ $t("Store Code") }}</label>
                    <p>{{ store.store_code }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="name">{{ $t("Name") }}</label>
                    <p>{{ store.name }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="tax_number">{{ $t("Tax Number or GST number") }}</label>
                    <p>{{ store.tax_number }}</p>
                </div>
            </div>
            <hr>

            <div class="mb-2">
                <span class="text-subhead">{{ $t("Contact Information") }}</span>
            </div>
            <div class="form-row mb-2">
                <div class="form-group col-md-3">
                    <label for="primary_contact">{{ $t("Primary Contact No.") }}</label>
                    <p>{{ (store.primary_contact != null)?store.primary_contact:'-' }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="secondary_contact">{{ $t("Secondary Contact No.") }}</label>
                    <p>{{  (store.secondary_contact != null)?store.secondary_contact:'-' }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="primary_email">{{ $t("Primary Email") }}</label>
                    <p>{{  (store.secondary_contact != null)?store.primary_email:'-' }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="address">{{ $t("Address") }}</label>
                    <p>{{ store.address }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="pincode">{{ $t("Pincode") }}</label>
                    <p>{{ (store.pincode != null)?store.pincode:'-' }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="pincode">{{ $t("Country") }}</label>
                    <p> {{ (store.country.code != null)?store.country.code:'-' }} - {{ (store.country.name != null)?store.country.name:'-' }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="pincode">{{ $t("Currency") }}</label>
                    <p> {{ (store.currency_code != null)?store.currency_code:'-' }} - {{ (store.currency_name != null)?store.currency_name:'-' }}</p>
                </div>
            </div>
            <hr>

            <div class="mb-3">
                <div class="form-row">
                    <!-- Tax Information Section -->
                    <div class="col-md-3">
                        <div class="mb-2">
                            <span class="text-subhead">{{ $t("Tax Information") }}</span>
                        </div>
                        <div class="form-row mb-2" v-if="store.tax_code != null">
                            <div class="form-group col-md-4">
                                <label for="tax_code">{{ $t("Tax Code") }}</label>
                                <p>{{ store.tax_code.tax_code }}</p>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="tax_percentage">{{ $t("Tax Percentage") }}</label>
                                <p>{{ store.tax_code.tax_percentage }}</p>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="tax_code_label">{{ $t("Tax Name") }}</label>
                                <p>{{ store.tax_code.label }}</p>
                            </div>
                        </div>

                        <div class="table-responsive" v-if="store.tax_code != null">
                            <table class="table display nowrap text-nowrap w-100">
                                <thead>
                                    <tr>
                                        <th scope="col">{{ $t("Tax Type") }}</th>
                                        <th scope="col">{{ $t("Tax Percentage") }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(tax_component, index) in store.tax_code.tax_components" v-bind:key="index">
                                        <td>{{ tax_component.tax_type }}</td>
                                        <td>{{ tax_component.tax_percentage }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <span class="mb-2" v-else>No Tax Components</span>
                    </div>

                    <!-- Payment Types Section -->
                    <div class="col-md-3">
                        <div class="mb-2">
                            <span class="text-subhead">{{ $t("Payment Types") }}</span>
                        </div>
                        <div class="table-responsive" v-if="store.payments_data != null">
                            <table class="table display nowrap text-nowrap w-100">
                                <tbody>
                                    <tr v-for="(payment, index) in store.payments_data" v-bind:key="index">
                                        <td><i class="fas fa-check-square text-success"></i> <span class="ml-2">{{ payment }}</span></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <span class="mb-2" v-else>No Payment Method</span>
                    </div>
                </div>
            </div>

            <hr>
            
            <div class="mb-3">
                <div class="mb-2">
                    <span class="text-subhead">{{ $t("Invoice Print Type Details") }}</span>
                </div>
                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="invoice_type">{{ $t("Invoice Print Type") }}</label>
                        <p>{{ store.invoice_type.print_type_label }}</p>
                    </div>
                </div>
            </div>
        <hr>
        <div class="form-row mb-2">
                <div class="form-group col-md-3">
                    <label for="created_by">{{ $t("Created By") }}</label>
                    <p>{{ (store.created_by == null)?'-':store.created_by['fullname']+' ('+store.created_by['user_code']+')' }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="updated_by">{{ $t("Updated By") }}</label>
                    <p>{{ (store.updated_by == null)?'-':store.updated_by['fullname']+' ('+store.updated_by['user_code']+')' }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="created_on">{{ $t("Created On") }}</label>
                    <p>{{ store.created_at_label }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="updated_on">{{ $t("Updated On") }}</label>
                    <p>{{ store.updated_at_label }}</p>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>  

<script>
    'use strict';
    
    export default {
        data(){
            return{
                store : this.store_data,
                restaurant_mode : (this.store_data.restaurant_mode == 1)?'Yes':'No',
                enable_customer_popup: (this.store_data.enable_customer_popup == 1)?'Yes':'No',
                enable_variants_popup: (this.store_data.enable_variants_popup == 1)?'Yes':'No',
            }
        },
        props: {
            store_data: [Array, Object]
        },
        mounted() {
            console.log('Store detail page loaded');
        },
        methods: {
           
        }
    }
</script>