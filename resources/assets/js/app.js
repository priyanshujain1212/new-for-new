import { createApp } from 'vue';

// Import your components without VeeValidate and i18n
import signincomponent from './components/entry/sign_in_component.vue';
import topnavcomponent from './components/layout/top_nav_component.vue';
import footercomponent from './components/layout/footer_component.vue';
import dashboardcomponent from './components/dashboard/dashboard_component.vue';
import addrasidcomponent from './components/purchase_order/addrasid_component.vue';
import purchaseorderdetailcomponent from './components/purchase_order/purchase_order_detail_component.vue';
import addnotificationcomponent from './components/notification/add_notification_component.vue';
import notificationcomponent from './components/commons/notification_component.vue';
import notificationdetailcomponent from './components/notification/notification_detail_component.vue';
import addtrustcomponent from './components/store/addtrust_component.vue';
import seltrustcomponent from './components/store/seltrust_component.vue';
import storedetailcomponent from './components/store/store_detail_component.vue';
import modalcomponent from './components/commons/modal_component.vue';
import quickpanelcomponent from './components/commons/quickpanel_component.vue';
import storeselectorcomponent from './components/commons/store_selector_component.vue';
import searchcomponent from './components/search/search_component.vue';
import languageswitchercomponent from './components/commons/language_switcher_component.vue';
import qrcomponent from './components/commons/qr_component.vue';
import addbillingcountercomponent from './components/billing_counter/add_billing_counter_component.vue';
import billingcounterdetailcomponent from './components/billing_counter/billing_counter_detail_component.vue';
import addchallancomponent from './components/challan/add_challan_component.vue';
import challanorderdetailcomponent from './components/challan/challan_detail_component.vue';
import addcustomercomponent from './components/customer/add_customer_component.vue';
import customerdetailcomponent from './components/customer/customer_detail_component.vue';
import addrolecomponent from './components/role/add_role_component.vue';
import roledetailcomponent from './components/role/role_detail_component.vue';
import addsuppliercomponent from './components/supplier/add_supplier_component.vue';
import supplierdetailcomponent from './components/supplier/supplier_detail_component.vue';
import addusercomponent from './components/user/add_user_component.vue';
import userdetailcomponent from './components/user/user_detail_component.vue';

// Create the Vue app
const app = createApp({});

// Register other components globally
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
app.component('billingcounterdetailcomponent', billingcounterdetailcomponent);
app.component('addbillingcountercomponent', addbillingcountercomponent);
app.component('addchallancomponent', addchallancomponent);
app.component('challanorderdetailcomponent', challanorderdetailcomponent);
app.component('addcustomercomponent',addcustomercomponent);
app.component('customerdetailcomponent',customerdetailcomponent);
app.component('addrolecomponent',addrolecomponent);
app.component('roledetailcomponent',roledetailcomponent);
app.component('addsuppliercomponent',addsuppliercomponent);
app.component('supplierdetailcomponent',supplierdetailcomponent);
app.component('addusercomponent',addusercomponent);
app.component('userdetailcomponent',userdetailcomponent);

// Mount the app
app.mount('#app');
