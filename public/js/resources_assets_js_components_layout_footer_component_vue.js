"use strict";
(self["webpackChunkfinal_main"] = self["webpackChunkfinal_main"] || []).push([["resources_assets_js_components_layout_footer_component_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layout/footer_component.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layout/footer_component.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      store_slack: window.settings.logged_user_store_slack,
      user_slack: window.settings.logged_in_user
    };
  },
  props: {
    languages: [Array, Object],
    selected_language: String,
    fixed_footer: String,
    year: String,
    company: String,
    version: String
  },
  mounted: function mounted() {
    console.log('Footer loaded');
    this.listen_events();
  },
  methods: {
    listen_events: function listen_events() {
      var _this = this;
      if (true) {
        return;
      }
      Echo["private"]("new-order-chef.".concat(this.store_slack)).listen('NewOrderReceived', function (data) {
        if (typeof data.order_number == 'undefined') {
          return;
        }
        _this.play_notification();
        var title = "<i class=\"fas fa-bell\"></i> New Order Received!";
        var message = 'Order Number #' + data.order_number + ' [' + data.order_type + ']<br><small>' + data.created_at + '</small>';
        _this.show_response_message(message, title, -1);
      });
      Echo["private"]("new-order-waiter.".concat(this.store_slack, ".").concat(this.user_slack)).listen('NewOrderReceived', function (data) {
        if (typeof data.order_number == 'undefined') {
          return;
        }
        _this.play_notification();
        var title = "<i class=\"fas fa-bell\"></i> New Order Received!";
        var message = 'Order Number #' + data.order_number + ' [' + data.order_type + ']<br><small>' + data.created_at + '</small>';
        _this.show_response_message(message, title, -1);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layout/footer_component.vue?vue&type=template&id=76501ad7":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layout/footer_component.vue?vue&type=template&id=76501ad7 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_2 = {
  "class": "text-muted"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_languageswitchercomponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("languageswitchercomponent");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("footer", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["container-fluid p-3", $props.fixed_footer])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" © " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.year) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.company) + " · ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.version), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_languageswitchercomponent, {
    languages: $props.languages,
    selected_language: $props.selected_language
  }, null, 8 /* PROPS */, ["languages", "selected_language"])])], 2 /* CLASS */);
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

/***/ "./resources/assets/js/components/layout/footer_component.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/layout/footer_component.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_component_vue_vue_type_template_id_76501ad7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer_component.vue?vue&type=template&id=76501ad7 */ "./resources/assets/js/components/layout/footer_component.vue?vue&type=template&id=76501ad7");
/* harmony import */ var _footer_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer_component.vue?vue&type=script&lang=js */ "./resources/assets/js/components/layout/footer_component.vue?vue&type=script&lang=js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_footer_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_footer_component_vue_vue_type_template_id_76501ad7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/js/components/layout/footer_component.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/js/components/layout/footer_component.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/layout/footer_component.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./footer_component.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layout/footer_component.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/layout/footer_component.vue?vue&type=template&id=76501ad7":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/layout/footer_component.vue?vue&type=template&id=76501ad7 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_component_vue_vue_type_template_id_76501ad7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_component_vue_vue_type_template_id_76501ad7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./footer_component.vue?vue&type=template&id=76501ad7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layout/footer_component.vue?vue&type=template&id=76501ad7");


/***/ })

}]);