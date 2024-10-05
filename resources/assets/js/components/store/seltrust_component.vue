<template>
    <div class="container pt-3">
        <div class="d-flex justify-content-center pt-5">
            <div class="col-sm-12 col-md-8 col-lg-6 col-lg-6">
                <div class="d-flex flex-wrap mb-1">
                    <div class="mr-auto">
                        <span class="text-title">{{ ("Choose Trust") }}</span>
                    </div>
                    <div class="">
                        <a href="/addtrust" class="btn btn-primary" v-if="stores.length == 0 && is_super_admin"> {{ ("New Trust") }}</a>
                    </div>
                </div>
                <p v-html="server_errors" v-bind:class="[error_class]"></p>
                <div class="store-list border-top border-bottom">
                    <div v-if="stores.length>0">
                        <div class="d-flex flex-column p-3 border-bottom store-list-item" v-for="(store, index) in stores" v-bind:key="index"  v-on:click="seltrust(store.store_slack)">
                            <span class="mb-1 text-bold">{{ store.name }} - {{ store.store_code }} </span>
                            <p class="mb-1"> {{ store.address }} </p>
                        </div>
                    </div>
                    <div class="d-flex flex-column p-3" v-if="stores.length == 0 && is_super_admin == false">
                        <p class="mb-1">{{ ("Oh, currently you dont have any store access. Please contact your administartor for trust access.") }}</p>
                    </div>
                    <div class="d-flex flex-column p-3" v-if="stores.length == 0 && is_super_admin == true">
                        <p class="mb-1">{{ ("You can add a trust to get started.") }}</p>
                    </div>
                </div>
                <div class="mt-2">{{ ("You can choose from") }} {{ stores.length }} {{ ("trust(s)") }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    'use strict';
    import { Field, Form, ErrorMessage } from 'vee-validate';
import axios from 'axios'; // Import axios here

    export default {
        data(){
            return{
                server_errors   : '',
                error_class     : '',
                processing      : false,
            }
        },
        props: {
            stores: Array,
            is_super_admin : Boolean
        },
        mounted() {
            console.log('Store selector page loaded');
        },
        methods: {
            seltrust(store_slack){
                
                var formData = new FormData();
                formData.append("access_token", window.settings.access_token);
                formData.append("store", store_slack);
                
                axios.post('/api/update_profile_store', formData)
                .then((response) => {
                    this.processing = false;
                    if(response.data.status_code === 200) {
                        window.location.href = response.data.link;
                    }else{
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
            }
        }
    }
</script>
