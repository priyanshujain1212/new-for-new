import { createApp } from 'vue';
import { Field, Form, ErrorMessage, defineRule } from 'vee-validate'; // Import necessary functions
import { all as rules } from '@vee-validate/rules';

import signincomponent from './components/entry/sign_in_component.vue';
import topnavcomponent from './components/layout/top_nav_component.vue';
import footercomponent from './components/layout/footer_component.vue';
import dashboardcomponent from './components/dashboard/dashboard_component.vue';
import addrasidcomponent from'./components/purchase_order/addrasid_component.vue';
import purchaseorderdetailcomponent from'./components/purchase_order/purchase_order_detail_component.vue';
import addnotificationcomponent from './components/notification/add_notification_component.vue';
import notificationcomponent  from './components/commons/notification_component.vue';
import notificationdetailcomponent from './components/notification/notification_detail_component.vue';
import addtrustcomponent from './components/store/addtrust_component.vue';
import seltrustcomponent from './components/store/seltrust_component.vue';
import storedetailcomponent from './components/store/store_detail_component.vue';
import modalcomponent  from './components/commons/modal_component.vue';
import quickpanelcomponent  from './components/commons/quickpanel_component.vue';
import storeselectorcomponent  from './components/commons/store_selector_component.vue';
import searchcomponent  from './components/search/search_component.vue';
import languageswitchercomponent  from './components/commons/language_switcher_component.vue';
import qrcomponent  from './components/commons/qr_component.vue';

import { initializeI18n } from './localization.js';

        /**
         * Registration of all global validators.
         */
        Object.keys(rules).forEach(rule => {
            console.warn(`Skipping invalid rule: ${rules}`); 
            if (rule !== 'default' && typeof rules[rule] === 'function') {
                defineRule(rule, rules[rule]);
            }else {
                console.warn(`Skipping invalid rule: ${rule}`);  // Log invalid rules
            }
        });
        
const app = createApp({});

app.config.compilerOptions.isCustomElement = (tag) => {
    return tag === 'date-picker'; // or any custom elements you wish to exclude
};


// Register VeeValidate components globally
app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);

// Register other components
app.component('signincomponent', signincomponent);
app.component('topnavcomponent', topnavcomponent);
app.component('footercomponent', footercomponent);
app.component('dashboardcomponent', dashboardcomponent);
app.component('addrasidcomponent', addrasidcomponent);
app.component('purchaseorderdetailcomponent', purchaseorderdetailcomponent);
app.component('addnotificationcomponent', addnotificationcomponent);
app.component('notificationcomponent', notificationcomponent);
app.component('notificationdetailcomponent', notificationdetailcomponent);
app.component('addtrustcomponent', addtrustcomponent);
app.component('seltrustcomponent', seltrustcomponent);
app.component('storedetailcomponent', storedetailcomponent);

app.component('modalcomponent', modalcomponent);
app.component('quickpanelcomponent', quickpanelcomponent);
app.component('storeselectorcomponent', storeselectorcomponent);
app.component('searchcomponent', searchcomponent);
app.component('languageswitchercomponent', languageswitchercomponent);
app.component('qrcomponent', qrcomponent);


// Initialize i18n and mount the app
initializeI18n().then((i18n) => {
    if (i18n) {
        app.use(i18n);
        app.mount('#app'); // Mount the app after all components and plugins have been registered
    } else {
        console.error('i18n initialization failed: i18n is undefined.');
    }
}).catch((error) => {
    console.error("Failed to initialize i18n:", error);
});
