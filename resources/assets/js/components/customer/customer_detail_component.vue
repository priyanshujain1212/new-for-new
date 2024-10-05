<template>
    <div class="row">
        <div class="col-md-12">

            <div class="d-flex flex-wrap mb-4">
                <div class="mr-auto">
                   <div class="d-flex">
                        <div>
                            <span class="text-title"> <span class='text-muted'>{{ ("Customer") }}</span> {{ customer.name }} </span>
                        </div>
                    </div>
                </div>
                <div class="">
                    <span v-bind:class="customer.status.color">{{ customer.status.label }}</span>
                </div>
            </div>

            <div class="mb-2">
                <span class="text-subhead">{{ ("Basic Information") }}</span>
            </div>
            <div class="form-row mb-2">
                <div class="form-group col-md-3">
                    <label for="fullname">{{ ("Fullname") }}</label>
                    <p>{{ (customer.name == '' || customer.name == null)?'-':customer.name }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="email">{{ ("Email") }}</label>
                    <p>{{ (customer.email == '' || customer.email == null)?'-':customer.email }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="phone">{{ ("Phone") }}</label>
                    <p>{{ (customer.phone == '' || customer.phone == null)?'-':customer.phone }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="dob">{{ ("Date of Birth") }}</label>
                    <p>{{ (customer.dob == '' || customer.dob == null)?'-':customer.dob }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="role">{{ ("Address") }}</label>
                    <p>{{ (customer.address == '' || customer.address == null)?'-':customer.address }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="created_by">{{ ("Created By") }}</label>
                    <p>{{ (customer.created_by == null)?'-':customer.created_by['fullname']+' ('+customer.created_by['customer_code']+')' }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="updated_by">{{ ("Updated By") }}</label>
                    <p>{{ (customer.updated_by == null)?'-':customer.updated_by['fullname']+' ('+customer.updated_by['customer_code']+')' }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="created_on">{{ ("Created On") }}</label>
                    <p>{{ customer.created_at_label }}</p>
                </div>
                <div class="form-group col-md-3">
                    <label for="updated_on">{{ ("Updated On") }}</label>
                    <p>{{ customer.updated_at_label }}</p>
                </div>
            </div>

        </div>
    </div>
</template>  

<script>
    'use strict';
    
    export default {
        data(){
            return{
                customer : this.customer_data,
            }
        },
        props: {
            customer_data: [Array, Object]
        },
        mounted() {
            console.log('Customer detail page loaded');
        },
        methods: {
           
        }
    }
</script>