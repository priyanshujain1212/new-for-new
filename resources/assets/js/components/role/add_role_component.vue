<template>
    <div class="row">
        <div class="col-md-12">
            <Form @submit="submit_form" class="mb-3">
                <div class="d-flex flex-wrap mb-4">
                    <div class="mr-auto">
                        <span class="text-title" v-if="role_slack == ''">{{ ("Add Role") }}</span>
                        <span class="text-title" v-else>{{ ("Edit Role") }}</span>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary" :disabled="processing">
                            <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> {{ ("Save") }}
                        </button>
                    </div>
                </div>

                <p v-html="server_errors" :class="[error_class]"></p>

                <div class="form-row mb-2">
                    <div class="form-group col-md-3">
                        <label for="role">{{ ("Role Name") }}</label>
                        <Field name="role" as="input" type="text" class="form-control form-control-custom" :placeholder="('Please enter role name')" autocomplete="off" rules="required|max:250" v-model="role" />
                        <ErrorMessage name="role" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="status">{{ ("Status") }}</label>
                        <Field name="status" as="select" class="form-control form-control-custom custom-select" v-model="status" rules="required|numeric">
                            <option value="">Choose Status..</option>
                            <option v-for="(status, index) in statuses" :value="status.value" :key="index">
                                {{ status.label }}
                            </option>
                        </Field>
                        <ErrorMessage name="status" v-slot="{ message }">
                            <span class="error">{{ message }}</span>
                        </ErrorMessage>
                    </div>
                </div>

                <div class="mb-2">
                    <span class="text-subhead">{{ ("Access settings") }}</span>
                </div>
                <div class="mb-2">
                    <div class="custom-control custom-checkbox mb-3" v-for="(menu, index) in menus" :key="index">
                        <input class="custom-control-input" type="checkbox" v-model="menu_selected" :value="menu.menu_key" :id="menu.menu_key" @click="menu_checker({ 'type': menu.type, 'current': menu.menu_key, 'parent': '', 'grand_parent': '', 'children': menu.childs, 'siblings': menu.siblings, 'event': $event })">
                        <label class="custom-control-label" :for="menu.menu_key">
                            {{ (menu.label) }}
                        </label>
                        <div class="mb-2">
                            <div class="custom-control custom-checkbox" v-for="(submenu_item, index) in menu.sub_menu" :key="index">
                                <input class="custom-control-input" type="checkbox" v-model="menu_selected" :value="submenu_item.menu_key" :id="submenu_item.menu_key" @click="menu_checker({ 'type': submenu_item.type, 'current': submenu_item.menu_key, 'parent': menu.menu_key, 'grand_parent': '', 'children': submenu_item.childs, 'siblings': submenu_item.siblings, 'event': $event })">
                                <label class="custom-control-label" :for="submenu_item.menu_key">
                                    {{ (submenu_item.label) }}
                                </label>
                                <div class="mb-2">
                                    <div class="custom-control custom-checkbox form-check-inline" v-for="(action_item, index) in submenu_item.actions" :key="index">
                                        <input class="custom-control-input" type="checkbox" v-model="menu_selected" :value="action_item.menu_key" :id="action_item.menu_key" @click="menu_checker({ 'type': action_item.type, 'current': action_item.menu_key, 'parent': submenu_item.menu_key, 'grand_parent': menu.menu_key, 'children': '', 'siblings': action_item.siblings, 'event': $event })">
                                        <label class="custom-control-label" :for="action_item.menu_key">
                                            {{ (action_item.label) }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </div>

        <modalcomponent v-if="show_modal" v-on:close="show_modal = false">
            <template v-slot:modal-header>
                Confirm
            </template>
            <template v-slot:modal-body>
                <p v-if="status == 0">If role is inactive, all users with this role will lose access to the system.</p>
                Are you sure you want to proceed?
            </template>
            <template v-slot:modal-footer>
                <button type="button" class="btn btn-light" @click="$emit('close')">Cancel</button>
                <button type="button" class="btn btn-primary" @click="$emit('submit')" v-bind:disabled="processing">
                    <i class='fa fa-circle-notch fa-spin' v-if="processing"></i> Continue
                </button>
            </template>
        </modalcomponent>
    </div>
</template>

<script>
'use strict';
import ModalComponent from '@components/commons/modal_component.vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import axios from 'axios';
import { required, max, numeric} from '@vee-validate/rules'; // Import validation rules
import { defineRule } from 'vee-validate'; // Used to define rules globally

export default {
    components: {
        ModalComponent,
        Field,
        Form,
        ErrorMessage
    },
    data() {
        return {
            server_errors: '',
            error_class: '',
            processing: false,
            show_modal: false,
            api_link: this.role_data ? `/api/update_role/${this.role_data.slack}` : '/api/add_role',
            role_slack: this.role_data ? this.role_data.slack : '',
            role: this.role_data ? this.role_data.label : '',
            status: this.role_data ? this.role_data.status.value : '',
            menu_selected: this.role_data ? this.role_data.menus : [],
        }
    },
    props: {
        statuses: Array,
        menus: [Array, Object],
        role_data: [Array, Object]
    },
    created() {
        // Register rules globally in the component lifecycle
        defineRule('required', required);
        defineRule('max', max);
        defineRule('numeric', numeric);
    },
    mounted() {
        console.log('Add role page loaded');
    },
    methods: {
        array_remove(arr, value) {
            return arr.filter(ele => ele != value);
        },
        menu_checker(payload) {
            const { current, type, parent, grand_parent, children, siblings, event } = payload;

            if (event.target.checked) {
                this.menu_selected.push(current);
                if (type === 'ACTIONS') {
                    this.menu_selected.push(parent, grand_parent);
                }
                if (type === 'SUB_MENU') {
                    this.menu_selected.push(parent);
                    this.menu_selected.push(...children);
                }
                if (type === 'MAIN_MENU') {
                    this.menu_selected.push(...children);
                }
            } else {
                this.menu_selected = this.array_remove(this.menu_selected, current);
                if (type === 'ACTIONS') {
                    if (!siblings.some(sibling => this.menu_selected.includes(sibling))) {
                        this.menu_selected = this.array_remove(this.menu_selected, parent);
                    }
                    if (grand_parent && typeof this.menus[grand_parent] !== "undefined") {
                        const grandchildren = this.menus[grand_parent]['childs'];
                        if (!grandchildren.some(child => this.menu_selected.includes(child))) {
                            this.menu_selected = this.array_remove(this.menu_selected, grand_parent);
                        }
                    }
                }
                if (type === 'SUB_MENU') {
                    for (const child of children) {
                        this.menu_selected = this.array_remove(this.menu_selected, child);
                    }
                    if (!siblings.some(sibling => this.menu_selected.includes(sibling))) {
                        this.menu_selected = this.array_remove(this.menu_selected, parent);
                    }
                }
                if (type === 'MAIN_MENU') {
                    for (const child of children) {
                        this.menu_selected = this.array_remove(this.menu_selected, child);
                    }
                }
            }
        },
        submit_form() {
                    this.show_modal = true;
                        this.processing = true;
                        const formData = new FormData();

                        formData.append("access_token", window.settings.access_token);
                        formData.append("role_label", this.role || '');
                        formData.append("status", this.status || '');
                        formData.append("role_menus", this.menu_selected);

                        axios.post(this.api_link, formData)
                            .then((response) => {
                                if (response.data.status_code === 200) {
                                    this.show_response_message(response.data.msg, 'SUCCESS');
                                    setTimeout(() => window.location.href = '/roles', 1000);
                                } else {
                                    this.show_modal = false;
                                    this.processing = false;
                                    try {
                                        const error_json = JSON.parse(response.data.error);
                                        this.server_errors = error_json.message;
                                        this.error_class = 'alert alert-danger';
                                    } catch (e) {
                                        this.server_errors = response.data.error;
                                        this.error_class = 'alert alert-danger';
                                    }
                                }
                            })
                            .catch((error) => {
                                this.show_modal = false;
                                this.processing = false;
                                this.server_errors = error.response?.data?.error || 'An unexpected error occurred';
                                this.error_class = 'alert alert-danger';
                            });
        },
        show_response_message(message, type) {
        console.log(type + ': ' + message); // You can replace this with a UI toast notification
    },
    },
};
</script>

<style scoped>
.error {
    color: red;
}
.text-title {
    font-size: 1.5rem;
    font-weight: bold;
}
.text-subhead {
    font-size: 1.2rem;
    font-weight: bold;
}
</style>
