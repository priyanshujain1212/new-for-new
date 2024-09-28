"use strict";
(self["webpackChunkfinal_main"] = self["webpackChunkfinal_main"] || []).push([["resources_assets_js_components_setting_sms_sms_setting_component_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/sms/sms_setting_component.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/sms/sms_setting_component.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      server_errors: '',
      error_class: '',
      processing: false,
      account_sid: this.sms_setting_data.length == 0 ? '-' : this.sms_setting_data.account_sid,
      auth_token: this.sms_setting_data.length == 0 ? '-' : this.sms_setting_data.token,
      twilio_number: this.sms_setting_data.length == 0 ? '-' : this.sms_setting_data.twilio_number,
      auth_key: this.sms_setting_data.length == 0 ? '' : this.sms_setting_data.auth_key,
      sender_id: this.sms_setting_data.length == 0 ? '' : this.sms_setting_data.sender_id,
      api_key: this.sms_setting_data.length == 0 ? '' : this.sms_setting_data.auth_key,
      status_label: this.sms_setting_data.length == 0 ? '-' : this.sms_setting_data.status.label,
      status_color: this.sms_setting_data.length == 0 ? '' : this.sms_setting_data.status.color,
      gateway_type: this.sms_setting_data.length == 0 ? '' : this.sms_setting_data.gateway_type
    };
  },
  props: {
    sms_setting_data: [Array, Object]
  },
  mounted: function mounted() {
    console.log('SMS setting page loaded');
  },
  filters: {
    hide_sensitive_info: function hide_sensitive_info(value, limit) {
      if (!value) return '';
      if (value.length > limit) {
        value = value.substring(0, limit - 3) + '***';
      }
      return value;
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/sms/sms_setting_component.vue?vue&type=template&id=828b36a8":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/sms/sms_setting_component.vue?vue&type=template&id=828b36a8 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-md-12"
};
var _hoisted_3 = {
  "class": "d-flex flex-wrap mb-4"
};
var _hoisted_4 = {
  "class": "mr-auto"
};
var _hoisted_5 = {
  "class": "text-title"
};
var _hoisted_6 = {
  key: 0,
  "class": "form-row mb-2"
};
var _hoisted_7 = {
  "class": "form-group col-md-3"
};
var _hoisted_8 = {
  "for": "account_sid"
};
var _hoisted_9 = {
  "class": "text-truncate"
};
var _hoisted_10 = {
  "class": "form-group col-md-3"
};
var _hoisted_11 = {
  "for": "auth_token"
};
var _hoisted_12 = {
  "class": "text-truncate"
};
var _hoisted_13 = {
  "class": "form-group col-md-3"
};
var _hoisted_14 = {
  "for": "twilio_number"
};
var _hoisted_15 = {
  "class": "form-group col-md-3"
};
var _hoisted_16 = {
  "for": "status"
};
var _hoisted_17 = {
  key: 1,
  "class": "form-row mb-2"
};
var _hoisted_18 = {
  "class": "form-group col-md-3"
};
var _hoisted_19 = {
  "for": "account_sid"
};
var _hoisted_20 = {
  "class": "text-truncate"
};
var _hoisted_21 = {
  "class": "form-group col-md-3"
};
var _hoisted_22 = {
  "for": "auth_token"
};
var _hoisted_23 = {
  "class": "text-truncate"
};
var _hoisted_24 = {
  "class": "form-group col-md-3"
};
var _hoisted_25 = {
  "for": "status"
};
var _hoisted_26 = {
  key: 2,
  "class": "form-row mb-2"
};
var _hoisted_27 = {
  "class": "form-group col-md-3"
};
var _hoisted_28 = {
  "for": "account_sid"
};
var _hoisted_29 = {
  "class": "text-truncate"
};
var _hoisted_30 = {
  "class": "form-group col-md-3"
};
var _hoisted_31 = {
  "for": "auth_token"
};
var _hoisted_32 = {
  "class": "text-truncate"
};
var _hoisted_33 = {
  "class": "form-group col-md-3"
};
var _hoisted_34 = {
  "for": "status"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.gateway_type) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("SMS Settings")), 1 /* TEXT */)]), _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": ""
  }, null, -1 /* HOISTED */))]), $data.gateway_type == 'TWILIO' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Account SID")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.account_sid), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Auth Token")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.auth_token | _ctx.hide_sensitive_info(10)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_14, "Twilio " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Number")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.twilio_number), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Status")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($data.status_color)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.status_label), 3 /* TEXT, CLASS */)])])])) : $data.gateway_type == 'MSG91' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Auth Key")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.auth_key | _ctx.hide_sensitive_info(10)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Sender ID")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sender_id), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Status")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($data.status_color)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.status_label), 3 /* TEXT, CLASS */)])])])) : $data.gateway_type == 'TEXTLOCAL' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("API Key")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.api_key | _ctx.hide_sensitive_info(10)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Sender ID")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sender_id), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Status")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($data.status_color)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.status_label), 3 /* TEXT, CLASS */)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
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

/***/ "./resources/assets/js/components/setting/sms/sms_setting_component.vue":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/setting/sms/sms_setting_component.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sms_setting_component_vue_vue_type_template_id_828b36a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sms_setting_component.vue?vue&type=template&id=828b36a8 */ "./resources/assets/js/components/setting/sms/sms_setting_component.vue?vue&type=template&id=828b36a8");
/* harmony import */ var _sms_setting_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sms_setting_component.vue?vue&type=script&lang=js */ "./resources/assets/js/components/setting/sms/sms_setting_component.vue?vue&type=script&lang=js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_sms_setting_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sms_setting_component_vue_vue_type_template_id_828b36a8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/js/components/setting/sms/sms_setting_component.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/js/components/setting/sms/sms_setting_component.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/setting/sms/sms_setting_component.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sms_setting_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sms_setting_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sms_setting_component.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/sms/sms_setting_component.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/setting/sms/sms_setting_component.vue?vue&type=template&id=828b36a8":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/components/setting/sms/sms_setting_component.vue?vue&type=template&id=828b36a8 ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sms_setting_component_vue_vue_type_template_id_828b36a8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sms_setting_component_vue_vue_type_template_id_828b36a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sms_setting_component.vue?vue&type=template&id=828b36a8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/sms/sms_setting_component.vue?vue&type=template&id=828b36a8");


/***/ })

}]);