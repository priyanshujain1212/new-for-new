"use strict";
(self["webpackChunkfinal_main"] = self["webpackChunkfinal_main"] || []).push([["resources_assets_js_components_layout_top_nav_component_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layout/top_nav_component.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layout/top_nav_component.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      quick_link_array: [],
      unread_notifications_data: [],
      all_notifications_link_data: '',
      profile_link: '',
      logout_link: '',
      user_fullname: '',
      customer_fullname: ''
    };
  },
  props: {
    user_slack: String,
    customer_slack: String,
    logged_user_data: {
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    logged_customer_data: {
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    navbar_logo: String,
    unread_notifications: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    all_notifications_link: String
  },
  computed: {
    profileImage: function profileImage() {
      return this.logged_user_data.profile_image || this.logged_customer_data.profile_image || 'path_to_default_image.png';
    },
    stores: function stores() {
      return this.user_slack ? this.logged_user_data.user_stores : this.logged_customer_data.customer_stores;
    },
    selected_store: function selected_store() {
      // Check if user or customer is logged in and return the selected store
      return this.user_slack ? this.logged_user_data.selected_store : this.logged_customer_data.selected_store;
    }
  },
  mounted: function mounted() {
    this.profile_link = this.logged_user_data.profile_link || this.logged_customer_data.profile_link || '';
    this.logout_link = this.logged_user_data.logout_link || this.logged_customer_data.logout_link || '';
    this.user_fullname = this.logged_user_data.fullname || '';
    this.customer_fullname = this.logged_customer_data.fullname || '';
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layout/top_nav_component.vue?vue&type=template&id=f08c3c2e":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layout/top_nav_component.vue?vue&type=template&id=f08c3c2e ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "navbar navbar-expand-lg top-nav p-2"
};
var _hoisted_2 = {
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "navbar-brand",
  href: "/"
};
var _hoisted_4 = ["src"];
var _hoisted_5 = {
  "class": "navbar-toggler dropdown-toggle",
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#small_menu_toogler",
  "aria-controls": "small_menu_toogler",
  "aria-expanded": "false",
  "aria-label": "Toggle actions"
};
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  "class": "collapse navbar-collapse",
  id: "small_menu_toogler"
};
var _hoisted_8 = {
  key: 0,
  "class": "navbar-nav mt-lg-0 ml-md-5 pt-1"
};
var _hoisted_9 = {
  key: 0,
  "class": "nav-item text-right"
};
var _hoisted_10 = {
  key: 1,
  "class": "nav-item text-right"
};
var _hoisted_11 = {
  key: 1,
  "class": "navbar-nav ml-auto mt-lg-0 pt-1"
};
var _hoisted_12 = {
  "class": "nav-item text-right pl-md-4 pl-lg-4 pl-xl-4"
};
var _hoisted_13 = {
  href: "/search",
  "class": "nav-link nav-link-dark text-bold"
};
var _hoisted_14 = {
  "class": "nav-item text-right pl-md-4 pl-lg-4 pl-xl-4"
};
var _hoisted_15 = {
  "class": "nav-item text-right pl-md-4 pl-lg-4 pl-xl-4"
};
var _hoisted_16 = {
  "class": "dropdown"
};
var _hoisted_17 = {
  href: "#",
  "class": "nav-link nav-link-dark dropdown-toggle text-bold",
  id: "user_menu_dropdown",
  "data-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
var _hoisted_18 = ["src"];
var _hoisted_19 = {
  "class": "dropdown-menu dropdown-menu-right",
  "aria-labelledby": "user_menu_dropdown"
};
var _hoisted_20 = ["href"];
var _hoisted_21 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_seltrustcomponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("seltrustcomponent");
  var _component_notificationcomponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("notificationcomponent");
  var _component_notifications = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("notifications");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.navbar_logo,
    "class": "d-inline-block align-top top-nav-logo ml-lg-1 ml-sm-4",
    alt: "appsthing"
  }, null, 8 /* PROPS */, _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $options.profileImage,
    "class": "d-inline-block rounded-circle mr-2 top-nav-profile",
    alt: "Profile Image"
  }, null, 8 /* PROPS */, _hoisted_6)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [$props.user_slack || $props.customer_slack ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_8, [$props.user_slack && Array.isArray($props.logged_user_data.user_stores) && $props.logged_user_data.user_stores.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_seltrustcomponent, {
    stores: $props.logged_user_data.user_stores,
    selected_store: $props.logged_user_data.selected_store
  }, null, 8 /* PROPS */, ["stores", "selected_store"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.customer_slack && Array.isArray($props.logged_customer_data.customer_stores) && $props.logged_customer_data.customer_stores.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_seltrustcomponent, {
    stores: $props.logged_customer_data.customer_stores,
    selected_store: $props.logged_customer_data.selected_store
  }, null, 8 /* PROPS */, ["stores", "selected_store"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.user_slack || $props.customer_slack ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_13, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-search search-icon"
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Search")), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_notificationcomponent, {
    unread_notifications: $data.unread_notifications_data,
    all_notifications_link: $data.all_notifications_link_data
  }, null, 8 /* PROPS */, ["unread_notifications", "all_notifications_link"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $options.profileImage,
    "class": "d-inline-block rounded-circle mr-2 top-nav-profile",
    alt: ""
  }, null, 8 /* PROPS */, _hoisted_18), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user_fullname || $data.customer_fullname), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-item",
    href: $data.profile_link
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Profile")), 9 /* TEXT, PROPS */, _hoisted_20), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-item",
    href: $data.logout_link
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Logout")), 9 /* TEXT, PROPS */, _hoisted_21)])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_notifications, {
    group: "notification_bar",
    classes: "n-light",
    duration: 55000,
    width: 500,
    position: "top right"
  })])]);
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/assets/js/components/layout/top_nav_component.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/layout/top_nav_component.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _top_nav_component_vue_vue_type_template_id_f08c3c2e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top_nav_component.vue?vue&type=template&id=f08c3c2e */ "./resources/assets/js/components/layout/top_nav_component.vue?vue&type=template&id=f08c3c2e");
/* harmony import */ var _top_nav_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top_nav_component.vue?vue&type=script&lang=js */ "./resources/assets/js/components/layout/top_nav_component.vue?vue&type=script&lang=js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_top_nav_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_top_nav_component_vue_vue_type_template_id_f08c3c2e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/js/components/layout/top_nav_component.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/js/components/layout/top_nav_component.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/layout/top_nav_component.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_top_nav_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_top_nav_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./top_nav_component.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layout/top_nav_component.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/layout/top_nav_component.vue?vue&type=template&id=f08c3c2e":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/layout/top_nav_component.vue?vue&type=template&id=f08c3c2e ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_top_nav_component_vue_vue_type_template_id_f08c3c2e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_top_nav_component_vue_vue_type_template_id_f08c3c2e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./top_nav_component.vue?vue&type=template&id=f08c3c2e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layout/top_nav_component.vue?vue&type=template&id=f08c3c2e");


/***/ })

}]);