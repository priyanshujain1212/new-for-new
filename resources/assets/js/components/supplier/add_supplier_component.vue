<template>
    <div class="row">
        <div class="col-md-12">
            <Form ref="form" @submit="submit_form" class="mb-3">
    <div class="d-flex flex-wrap mb-4">
      <div class="mr-auto">
        <span class="text-title">{{ supplier_slack ? "Edit Supplier" : "Add Supplier" }}</span>
      </div>
      <div>
        <button type="submit" class="btn btn-primary" :disabled="processing">
          <i class="fa fa-circle-notch fa-spin" v-if="processing"></i> Save
        </button>
      </div>
    </div>

    <p v-html="server_errors" :class="error_class"></p>

    <div class="form-row mb-2">
      <div class="form-group col-md-3">
        <label for="supplier_name">Supplier Name</label>
        <Field name="supplier_name" as="input" v-model="supplier_name" :rules="'required|max:250'" class="form-control form-control-custom" placeholder="Please enter supplier name" autocomplete="off" />
        <ErrorMessage name="supplier_name" class="error" />
      </div>
    </div>

    <div class="d-flex flex-wrap mb-1">
      <div class="mr-auto">
        <span class="text-subhead">Contact Information</span>
      </div>
    </div>

    <div class="form-row mb-2">
      <div class="form-group col-md-3">
        <label for="phone">Contact No.</label>
        <Field name="phone" as="input" v-model="phone" :rules="'min:10|max:15'" class="form-control form-control-custom" placeholder="Please enter contact number" autocomplete="off" />
        <ErrorMessage name="phone" class="error" />
      </div>
      <div class="form-group col-md-3">
        <label for="email">Email</label>
        <Field name="email" as="input" v-model="email" :rules="'email'" class="form-control form-control-custom" placeholder="Please enter contact email" autocomplete="off" />
        <ErrorMessage name="email" class="error" />
      </div>
    </div>

    <div class="form-row mb-2">
      <div class="form-group col-md-3">
        <label for="address">Address</label>
        <Field name="address" as="textarea" v-model="address" :rules="'max:65535'" class="form-control form-control-custom" rows="5" placeholder="Enter Address" />
        <ErrorMessage name="address" class="error" />
      </div>
      <div class="form-group col-md-3">
        <label for="pincode">Pincode</label>
        <Field name="pincode" as="input" v-model="pincode" :rules="'max:15'" class="form-control form-control-custom" placeholder="Enter Pincode" />
        <ErrorMessage name="pincode" class="error" />
      </div>
    </div>

    <div class="d-flex flex-wrap mb-1">
      <div class="mr-auto">
        <span class="text-subhead">Status Information</span>
      </div>
    </div>

    <div class="form-row mb-2">
      <div class="form-group col-md-3">
        <label for="status">Status</label>
        <Field name="status" as="select" v-model="status" :rules="'required|numeric'" class="form-control form-control-custom custom-select">
          <option value="">Choose Status..</option>
          <option v-for="(status, index) in statuses" :value="status.value" :key="index">{{ status.label }}</option>
        </Field>
        <ErrorMessage name="status" class="error" />
      </div>
    </div>
  </Form>
        </div>

        <modalcomponent v-if="show_modal" @close="show_modal = false">
            <template v-slot:modal-header>
                Confirm
            </template>
            <template v-slot:modal-body>
                <p v-if="status == 0">If supplier is inactive, all the products with this supplier will get affected.</p>
                Are you sure you want to proceed?
            </template>
            <template v-slot:modal-footer>
                <button type="button" class="btn btn-light" @click="show_modal = false">Cancel</button>
                <button type="button" class="btn btn-primary" @click="submit" :disabled="processing">
                    <i class="fa fa-circle-notch fa-spin" v-if="processing"></i> Continue
                </button>
            </template>
        </modalcomponent>
    </div>
</template>

<script>
'use strict';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { required, max, numeric,email, min} from '@vee-validate/rules'; // Import validation rules
import { defineRule } from 'vee-validate'; // Used to define rules globally
import axios from 'axios';

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
    data() {
        
        return {
            server_errors: "",
            error_class: "",
            processing: false,
            show_modal: false,
            api_link: this.supplier_data ? '/api/update_supplier/' + this.supplier_data.slack : '/api/add_supplier',

            supplier_slack: this.supplier_data ? this.supplier_data.slack : "",
            supplier_name: this.supplier_data ? this.supplier_data.name : "",
            status: this.supplier_data ? (this.supplier_data.status ? this.supplier_data.status.value : '') : "",
            address: this.supplier_data ? this.supplier_data.address : "",
            phone: this.supplier_data ? this.supplier_data.phone : "",
            email: this.supplier_data ? this.supplier_data.email : "",
            pincode: this.supplier_data ? this.supplier_data.pincode : "",
        }
    },
    props: {
        statuses: Array,
        supplier_data: [Array, Object]
    },
    created() {
        // Register rules globally in the component lifecycle
        defineRule('required', required);
        defineRule('email', email);
        defineRule('min', min);
        defineRule('max', max);
        defineRule('numeric', numeric);
    },
    mounted() {
        console.log('Add supplier page loaded');
    },
    methods: {
        submit_form() {
            this.$refs.form.validate().then((isValid) => {
                if (isValid) {
                    this.show_modal = true;
                } else {
                    console.log("Validation failed");
                }
            });
        },
        submit() {
            this.processing = true;
            const formData = new FormData();

            formData.append("access_token", window.settings.access_token);
            formData.append("supplier_name", this.supplier_name || '');
            formData.append("address", this.address || '');
            formData.append("phone", this.phone || '');
            formData.append("email", this.email || '');
            formData.append("pincode", this.pincode || '');
            formData.append("status", this.status || '');

            axios.post(this.api_link, formData).then((response) => {
                if (response.data.status_code == 200) {
                    this.show_response_message(response.data.msg, 'SUCCESS');
                    setTimeout(() => location.reload(), 1000);
                } else {
                    this.show_modal = false;
                    this.processing = false;
                    try {
                        const error_json = JSON.parse(response.data.msg);
                        this.loop_api_errors(error_json);
                    } catch (err) {
                        this.server_errors = response.data.msg;
                    }
                    this.error_class = 'error';
                }
            })
            .catch((error) => {
                console.log(error);
                this.processing = false;
            });
            this.show_modal = false;
        },
        show_response_message(message, type) {
        console.log(type + ': ' + message); // You can replace this with a UI toast notification
    },
        
    }
}
</script>
