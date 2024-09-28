"use strict";
(self["webpackChunkfinal_main"] = self["webpackChunkfinal_main"] || []).push([["resources_assets_js_components_entry_reset_password_component_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/entry/reset_password_component.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/entry/reset_password_component.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      new_password: '',
      new_password_confirmation: '',
      password_reset_response: false
    };
  },
  props: {
    user_slack: String,
    password_reset_token: String,
    company_logo: String
  },
  mounted: function mounted() {
    console.log('Reset password page loaded');
  },
  methods: {
    submit_form: function submit_form() {
      var _this = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.processing = true;
          var formData = new FormData();
          formData.append("user_slack", _this.user_slack == null ? '' : _this.user_slack);
          formData.append("password_reset_token", _this.password_reset_token == null ? '' : _this.password_reset_token);
          formData.append("new_password", _this.new_password == null ? '' : _this.new_password);
          formData.append("new_password_confirmation", _this.new_password_confirmation == null ? '' : _this.new_password_confirmation);
          axios.post('/api/user/reset_password', formData).then(function (response) {
            _this.processing = false;
            if (response.data.status_code === 200) {
              _this.password_reset_response = true;
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
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/entry/reset_password_component.vue?vue&type=template&id=4bd1f51d":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/entry/reset_password_component.vue?vue&type=template&id=4bd1f51d ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container pt-3 entry_form"
};
var _hoisted_2 = {
  "class": "d-flex justify-content-center pt-5"
};
var _hoisted_3 = {
  "class": "col-sm-12 col-md-6 col-lg-4 col-lg-4"
};
var _hoisted_4 = ["src"];
var _hoisted_5 = ["innerHTML"];
var _hoisted_6 = {
  "class": "form-group"
};
var _hoisted_7 = {
  "for": "password"
};
var _hoisted_8 = ["placeholder"];
var _hoisted_9 = {
  "class": "form-group"
};
var _hoisted_10 = {
  "for": "password"
};
var _hoisted_11 = ["placeholder"];
var _hoisted_12 = ["disabled"];
var _hoisted_13 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
var _hoisted_14 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_validate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("validate");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.company_logo,
    "class": "d-block mb-4 entry_logo",
    alt: "appsthing"
  }, null, 8 /* PROPS */, _hoisted_4), _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-display-0 d-block mb-3"
  }, "Reset Password", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    innerHTML: $data.server_errors,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.error_class])
  }, null, 10 /* CLASS, PROPS */, _hoisted_5), $data.password_reset_response == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    key: 0,
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submit_form && $options.submit_form.apply($options, arguments);
    }, ["prevent"])),
    "class": "mb-3"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("New Password")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    name: "new_password",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.new_password = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter your new password')
  }, null, 8 /* PROPS */, _hoisted_8), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.new_password], [_directive_validate, 'required|alpha_dash|min:6|max:100']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('new_password')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('new_password')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Re Enter New Password")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    name: "new_password_confirmation",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.new_password_confirmation = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please re enter your new password')
  }, null, 8 /* PROPS */, _hoisted_11), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.new_password_confirmation], [_directive_validate, 'required|alpha_dash|min:6|max:100']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('new_password_confirmation')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('new_password_confirmation')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn btn-primary btn-lg",
    disabled: $data.processing == true
  }, [$data.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Forgot Password"))], 8 /* PROPS */, _hoisted_12)], 32 /* NEED_HYDRATION */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_14, " Successfully reset your password! Try signing in. "))])])]);
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

/***/ "./resources/assets/js/components/entry/reset_password_component.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/entry/reset_password_component.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reset_password_component_vue_vue_type_template_id_4bd1f51d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset_password_component.vue?vue&type=template&id=4bd1f51d */ "./resources/assets/js/components/entry/reset_password_component.vue?vue&type=template&id=4bd1f51d");
/* harmony import */ var _reset_password_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset_password_component.vue?vue&type=script&lang=js */ "./resources/assets/js/components/entry/reset_password_component.vue?vue&type=script&lang=js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_reset_password_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_reset_password_component_vue_vue_type_template_id_4bd1f51d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/js/components/entry/reset_password_component.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/js/components/entry/reset_password_component.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/entry/reset_password_component.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./reset_password_component.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/entry/reset_password_component.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/entry/reset_password_component.vue?vue&type=template&id=4bd1f51d":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/entry/reset_password_component.vue?vue&type=template&id=4bd1f51d ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_component_vue_vue_type_template_id_4bd1f51d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_component_vue_vue_type_template_id_4bd1f51d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./reset_password_component.vue?vue&type=template&id=4bd1f51d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/entry/reset_password_component.vue?vue&type=template&id=4bd1f51d");


/***/ })

}]);