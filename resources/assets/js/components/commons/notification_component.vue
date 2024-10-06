<template>
    <div class="dropdown">
        <a href="#" class="nav-link nav-link-dark dropdown-toggle text-bold" id="notification_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-on:click="load_notification(1)">
            <i class="fas fa-bell"></i>
            <span class="unread-notification-dot-position unread-notification-dot" v-if="unread_notifications.length > 0"></span>
        </a>
        <div class="dropdown-menu dropdown-menu-right notification-dropdown pt-3 pb-3" aria-labelledby="notification_dropdown">
            <span class="dropdown-item-text" v-if="processing"><i class='fa fa-circle-notch fa-spin'></i> Loading...</span>
            <span class="dropdown-item-text" v-show="notifications_list.length === 0">No Notifications</span>
            <a class="dropdown-item notification-dropdown-item border-bottom" v-for="(notifications_list_item, index) in notifications_list" :key="index" :href="notifications_list_item.detail_link" :class="{'notification-unread': notifications_list_item.read === 0}">
                <div class="media">
                    <img :src="notifications_list_item.created_by.profile_image" class="rounded-circle notification-dropdown-profile-image mt-1 mr-3" alt="Profile Image">
                    <div class="media-body">
                        {{ truncate(notifications_list_item.notification_text, 150) }}
                        <small class="d-block text-muted"><span v-if="notifications_list_item.store_code">{{ notifications_list_item.store_code+' - '+notifications_list_item.store_name }} &middot;</span> <span>{{ notifications_list_item.created_by.fullname }} &middot; {{ notifications_list_item.created_at_label }}</span></small>
                    </div>
                </div>
            </a>
            <div class="d-flex justify-content-between pl-4 pr-4">
                <span class="text-centered btn-label mt-2" v-if="has_more_items" v-on:click="load_notification(next_page)">
                    <span v-if="processing"><i class='fa fa-circle-notch fa-spin'></i></span>
                    {{ ("Load More") }}
                </span>
                <span class="text-centered btn-label mt-2" v-on:click="mark_as_read()" v-if="notifications_list.length > 0">
                    <span v-if="mark_as_read_processing"><i class='fa fa-circle-notch fa-spin'></i></span>
                    {{ ("Mark All as Read") }}
                </span>
                <span class="text-centered btn-label mt-2" v-on:click="remove_all_notifications()" v-if="notifications_list.length > 0">
                    <span v-if="remove_all_notifications_processing"><i class='fa fa-circle-notch fa-spin'></i></span>
                    {{ ("Remove All") }}
                </span>
                <a :href="all_notifications_link" class="text-centered btn-label mt-2" v-if="notifications_list.length > 0">{{ ("View All") }}</a>
            </div>
        </div>
    </div>
</template>

<script>
'use strict';
import axios from 'axios'; // Import axios here
export default {
    data() {
        return {
            server_errors: '',
            error_class: '',
            processing: false,
            mark_as_read_processing: false,
            remove_all_notifications_processing: false,
            notifications_list: [],
            has_more_items: false,
            current_page: '',
            next_page: 1,
        };
    },
    props: {
        unread_notifications: {
            type: Array,
            default: () => []
        },
        all_notifications_link: String
    },
    mounted() {
        console.log('Notifications loaded');
        this.load_notification(); // Load notifications on mount
        $('.dropdown-menu').click(function(e) {
            e.stopPropagation();
        });
    },
    filters: {
        truncate(value, limit) {
            if (!value) return '';
            return value.length > limit ? value.substring(0, limit - 3) + '...' : value;
        }
    },
    methods: {
        load_notification(page = 1) {
            this.processing = true;
            const formData = new FormData();
            formData.append("access_token", window.settings.access_token);

            axios.post(`/api/load_notification?page=${page}`, formData)
                .then((response) => {
                    this.processing = false;
                    if (response.data.status_code === 200) {
                        if (page === 1) {
                            this.notifications_list = [];
                        }
                        this.notifications_list.push(...response.data.data.data);
                        this.has_more_items = response.data.data.links.has_more_items || false;
                        this.next_page = this.has_more_items ? response.data.data.links.current_page + 1 : 1;
                    } else {
                        this.handleApiError(response);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.server_errors = 'An error occurred while loading notifications.';
                });
        },
        handleApiError(response) {
            this.processing = false;
            try {
                const error_json = JSON.parse(response.data.msg);
                this.loop_api_errors(error_json);
            } catch (err) {
                this.server_errors = response.data.msg;
            }
            this.error_class = 'error';
        },
        mark_as_read() {
            const formData = new FormData();
            formData.append("access_token", window.settings.access_token);
            this.mark_as_read_processing = true;

            axios.post('/api/mark_as_read', formData)
                .then((response) => {
                    if (response.data.status_code === 200) {
                        this.load_notification();
                    }
                    this.mark_as_read_processing = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        remove_all_notifications() {
            const formData = new FormData();
            formData.append("access_token", window.settings.access_token);
            this.remove_all_notifications_processing = true;

            axios.post('/api/remove_all_notifications', formData)
                .then((response) => {
                    if (response.data.status_code === 200) {
                        this.load_notification();
                    }
                    this.remove_all_notifications_processing = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
};
</script>
