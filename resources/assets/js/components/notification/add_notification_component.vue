<template>
    <div class="row">
        <div class="col-md-12">
            
            <Form @submit.prevent="submit_form" class="mb-3">
    <div class="d-flex flex-wrap mb-4">
      <div class="mr-auto">
        <span class="text-title" v-if="notification_slack === ''">{{ 'Add Notification' }}</span>
        <span class="text-title" v-else>{{ 'Edit Notification' }}</span>
      </div>
      <div>
        <button type="submit" class="btn btn-primary" :disabled="processing">
          <i class="fa fa-circle-notch fa-spin" v-if="processing"></i> {{ 'Save' }}
        </button>
      </div>
    </div>

    <p v-html="server_errors" :class="[error_class]"></p>

    <div class="form-row mb-2">
      <div class="form-group col-md-3">
        <label for="role">{{ 'Role' }}</label>
        <Field name="role" as="select" v-model="role" class="form-control form-control-custom custom-select">
          <option value="">Choose Role..</option>
          <option v-for="(role, index) in roles" :value="role.slack" :key="index">
            {{ role.label }}
          </option>
        </Field>
        <ErrorMessage name="role" v-slot="{ message }">
          <span class="error">{{ message }}</span>
        </ErrorMessage>
      </div>

      <div class="form-group col-md-3">
    <label for="users">{{ 'Choose Users' }}</label>
    <multiselect
  v-model="search_user"
  :options="user_list"
  :multiple="false"
  :searchable="true"
  class="multiselect"
  @select="add_user_to_list"
  @search="load_users"
  label="fullname"
  track-by="slack"
  style="height: 50px"
>
</multiselect>
    <ErrorMessage name="users" v-slot="{ message }">
      <span class="error">{{ message }}</span>
    </ErrorMessage>
  </div>
    </div>

    <div class="form-row mb-2">
      <div class="d-flex flex-row flex-wrap p-1">
        <div class="text-center mr-2 mb-2" v-for="(user, index) in users" :key="index">
          <div>
            <img :src="user.profile_image" class="rounded-circle notification-profile" />
          </div>
          <div class="ml-3 align-self-center">
            <span>{{ truncateText(user.fullname, 15) }}</span>
            <button type="button" class="close ml-2 mt-1" aria-label="Close" @click="remove_user(index)">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="form-row mb-2">
      <div class="form-group col-md-6">
        <label for="notification">{{ 'Notification' }}</label>
        <Field
          name="notification"
          as="textarea"
          v-model="notification"
          class="form-control form-control-custom"
          rows="5"
          placeholder="Enter Notification"
          v-validate="'required|max:65535'"
        ></Field>
        <ErrorMessage name="notification" v-slot="{ message }">
          <span class="error">{{ message }}</span>
        </ErrorMessage>
      </div>
    </div>
  </Form>
                
        </div>

        <modalcomponent v-if="show_modal" v-on:close="show_modal = false">
            <template v-slot:modal-header>
                Confirm
            </template>
            <template v-slot:modal-body>
                <p class="display-block" v-show="role !='' && users.length == 0">Note : All the users with selected role will be notified</p>
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
/* Fix for the input shrinking issue */
.multiselect__input {
  width: 100% !important; /* Ensure it takes full width */
  position: relative !important; /* Ensure it maintains normal positioning */
  padding: 0 10px !important; /* Add padding to the input if necessary */
}
</style>


<script>


    'use strict';
    import ModalComponent from '@components/commons/modal_component.vue';
    import { Field, Form, ErrorMessage } from 'vee-validate';
import axios from 'axios';
import Multiselect from 'vue-multiselect';

import { required, max } from '@vee-validate/rules'; // Import validation rules

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
    ModalComponent,
    Multiselect,
  },

        data(){
            return{
                server_errors   : '',
                error_class     : '',
                processing      : false,
                modal           : false,
                show_modal      : false,
                api_link        : (this.notification_data == null)?'/api/add_notification':'/api/update_notification/'+this.notification_data.slack,
                search_user: null, // Ensure it's null initially
                user_list: [],

                notification_slack  : (this.notification_data == null)?'':this.notification_data.slack,
                role : '',
                notification   : (this.notification_data == null)?'':this.notification_data.notification_text,

                users : [],
           
            }
        },
        props: {
            statuses: Array,
            notification_data: [Array, Object],
            roles: [Array, Object],
        },
        filters: {
            truncate: function(value, limit) {
                if (!value) return '';
                if (value.length > limit) {
                    value = value.substring(0, (limit - 3)) + '...';
                }
                return value;
            }
        },
        mounted() {
            console.log('Add notification page loaded');
        },
        methods: {
            customLabel(option) {
    return `${option.fullname} - ${option.email}`;
  },
            truncateText(value, limit) {
        if (!value) return '';
        if (value.length > limit) {
            return value.substring(0, limit - 3) + '...';
        }
        return value;
    },
    load_users(keywords) {
  console.log("load_users called with keyword:", keywords); // Debugging
  if (typeof keywords != 'undefined' && keywords.length > 0) {
    const formData = new FormData();
    formData.append("access_token", window.settings.access_token);
    formData.append("keywords", keywords);
    formData.append("role", this.role);

    axios.post('/api/load_users', formData)
      .then((response) => {
        if (response.data.status_code === 200) {
          this.user_list = response.data.data;
          console.log("User list loaded successfully:", this.user_list); // Debugging
        } else {
          console.error("Error loading users:", response.data.msg);
          this.user_list = []; // Clear the list in case of error
        }
      })
      .catch((error) => {
        console.error("API request failed:", error);
        this.user_list = []; // Clear the list in case of error
      });
  }
},

            add_user_to_list(item) {
                if( item.slack != '' ){
                    var current_user = {
                        slack : item.slack,
                        fullname: item.fullname,
                        profile_image : item.profile_image
                    };
                }

                var item_found = false;
                for(var i = 0; i < this.users.length; i++){   
                    if(this.users[i].slack == item.slack){
                        item_found = true;
                    }
                }
                if(item_found == false){
                    this.users.push(current_user);
                }
                this.user_list = [];
            },

            remove_user(index) {
                this.users.splice(index, 1);
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
                            formData.append("notification_text", (this.notification == null)?'':this.notification);
                            formData.append("role", this.role);
                            formData.append("users", JSON.stringify(this.users));

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