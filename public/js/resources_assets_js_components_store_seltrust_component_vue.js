"use strict";
(self["webpackChunkfinal_main"] = self["webpackChunkfinal_main"] || []).push([["resources_assets_js_components_store_seltrust_component_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/store/seltrust_component.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/store/seltrust_component.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      processing: false
    };
  },
  props: {
    stores: Array,
    is_super_admin: Boolean
  },
  mounted: function mounted() {
    console.log('Store selector page loaded');
  },
  methods: {
    seltrust: function seltrust(store_slack) {
      var _this = this;
      var formData = new FormData();
      formData.append("access_token", window.settings.access_token);
      formData.append("store", store_slack);
      axios.post('/api/update_profile_store', formData).then(function (response) {
        _this.processing = false;
        if (response.data.status_code === 200) {
          window.location.href = response.data.link;
        } else {
          try {
            var error_json = JSON.parse(response.data.msg);
            _this.loop_api_errors(error_json);
          } catch (err) {
            _this.server_errors = response.data.msg;
          }
          _this.error_class = 'error';
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/store/seltrust_component.vue?vue&type=template&id=e92edb7e":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/store/seltrust_component.vue?vue&type=template&id=e92edb7e ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container pt-3"
};
var _hoisted_2 = {
  "class": "d-flex justify-content-center pt-5"
};
var _hoisted_3 = {
  "class": "col-sm-12 col-md-8 col-lg-6 col-lg-6"
};
var _hoisted_4 = {
  "class": "d-flex flex-wrap mb-1"
};
var _hoisted_5 = {
  "class": "mr-auto"
};
var _hoisted_6 = {
  "class": "text-title"
};
var _hoisted_7 = {
  "class": ""
};
var _hoisted_8 = {
  key: 0,
  href: "/addtrust",
  "class": "btn btn-primary"
};
var _hoisted_9 = ["innerHTML"];
var _hoisted_10 = {
  "class": "store-list border-top border-bottom"
};
var _hoisted_11 = {
  key: 0
};
var _hoisted_12 = ["onClick"];
var _hoisted_13 = {
  "class": "mb-1 text-bold"
};
var _hoisted_14 = {
  "class": "mb-1"
};
var _hoisted_15 = {
  key: 1,
  "class": "d-flex flex-column p-3"
};
var _hoisted_16 = {
  "class": "mb-1"
};
var _hoisted_17 = {
  key: 2,
  "class": "d-flex flex-column p-3"
};
var _hoisted_18 = {
  "class": "mb-1"
};
var _hoisted_19 = {
  "class": "mt-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Choose Trust")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [$props.stores.length == 0 && $props.is_super_admin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("New Trust")), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    innerHTML: $data.server_errors,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.error_class])
  }, null, 10 /* CLASS, PROPS */, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [$props.stores.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.stores, function (store, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "d-flex flex-column p-3 border-bottom store-list-item",
      key: index,
      onClick: function onClick($event) {
        return $options.seltrust(store.store_slack);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(store.name) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(store.store_code), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(store.address), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_12);
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.stores.length == 0 && $props.is_super_admin == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Oh, currently you dont have any store access. Please contact your administartor for trust access.")), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.stores.length == 0 && $props.is_super_admin == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("You can add a trust to get started.")), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("You can choose from")) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.stores.length) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("trust(s)")), 1 /* TEXT */)])])]);
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

/***/ "./resources/assets/js/components/store/seltrust_component.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/store/seltrust_component.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _seltrust_component_vue_vue_type_template_id_e92edb7e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seltrust_component.vue?vue&type=template&id=e92edb7e */ "./resources/assets/js/components/store/seltrust_component.vue?vue&type=template&id=e92edb7e");
/* harmony import */ var _seltrust_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seltrust_component.vue?vue&type=script&lang=js */ "./resources/assets/js/components/store/seltrust_component.vue?vue&type=script&lang=js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_seltrust_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_seltrust_component_vue_vue_type_template_id_e92edb7e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/js/components/store/seltrust_component.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/js/components/store/seltrust_component.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/store/seltrust_component.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_seltrust_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_seltrust_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./seltrust_component.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/store/seltrust_component.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/store/seltrust_component.vue?vue&type=template&id=e92edb7e":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/store/seltrust_component.vue?vue&type=template&id=e92edb7e ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_seltrust_component_vue_vue_type_template_id_e92edb7e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_seltrust_component_vue_vue_type_template_id_e92edb7e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./seltrust_component.vue?vue&type=template&id=e92edb7e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/store/seltrust_component.vue?vue&type=template&id=e92edb7e");


/***/ })

}]);