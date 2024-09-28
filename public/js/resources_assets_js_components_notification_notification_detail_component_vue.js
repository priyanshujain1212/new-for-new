"use strict";
(self["webpackChunkfinal_main"] = self["webpackChunkfinal_main"] || []).push([["resources_assets_js_components_notification_notification_detail_component_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/notification/notification_detail_component.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/notification/notification_detail_component.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      show_modal: false,
      processing: false,
      delete_processing: false,
      delete_api_link: '/api/delete_notification/' + this.notification_data.slack,
      notification: this.notification_data
    };
  },
  props: {
    notification_data: [Array, Object],
    delete_notification_access: Boolean
  },
  mounted: function mounted() {
    console.log('Notification detail page loaded');
  },
  methods: {
    delete_notification: function delete_notification() {
      this.$off("submit");
      this.$off("close");
      this.show_modal = true;
      this.$on("submit", function () {
        var _this = this;
        this.processing = true;
        this.delete_processing = true;
        var formData = new FormData();
        formData.append("access_token", window.settings.access_token);
        axios.post(this.delete_api_link, formData).then(function (response) {
          if (response.data.status_code == 200) {
            if (typeof response.data.link != 'undefined' && response.data.link != "") {
              window.location.href = response.data.link;
            } else {
              location.reload();
            }
          } else {
            _this.show_modal = false;
            _this.processing = false;
            try {
              var error_json = JSON.parse(response.data.msg);
              _this.loop_api_errors(error_json);
            } catch (err) {
              _this.server_errors = response.data.msg;
            }
            _this.error_class = 'error';
          }
          _this.delete_processing = false;
        })["catch"](function (error) {
          console.log(error);
        });
      });
      this.$on("close", function () {
        this.show_modal = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/notification/notification_detail_component.vue?vue&type=template&id=4c8a1716":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/notification/notification_detail_component.vue?vue&type=template&id=4c8a1716 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "d-flex"
};
var _hoisted_6 = {
  "class": "text-title"
};
var _hoisted_7 = {
  "class": "text-muted"
};
var _hoisted_8 = {
  "class": ""
};
var _hoisted_9 = ["disabled"];
var _hoisted_10 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
var _hoisted_11 = {
  "class": "form-row mb-2"
};
var _hoisted_12 = {
  "class": "form-group col-md-6"
};
var _hoisted_13 = {
  "for": "notification"
};
var _hoisted_14 = {
  "class": "form-row mb-2"
};
var _hoisted_15 = {
  "class": "form-group col-md-3"
};
var _hoisted_16 = {
  "for": "created_by"
};
var _hoisted_17 = {
  "class": "form-group col-md-3"
};
var _hoisted_18 = {
  "for": "created_on"
};
var _hoisted_19 = ["disabled"];
var _hoisted_20 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_modalcomponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modalcomponent");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Notification")), 1 /* TEXT */)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [$props.delete_notification_access == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "submit",
    "class": "btn btn-danger mr-1",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.delete_notification();
    }),
    disabled: $data.delete_processing == true
  }, [$data.delete_processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Delete Notification")), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_9)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Notification")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.notification.notification_text ? $data.notification.notification_text : '-'), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Created By")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.notification.created_by == null ? '-' : $data.notification.created_by['fullname'] + ' (' + $data.notification.created_by['user_code'] + ')'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Created On")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.notification.created_at_label), 1 /* TEXT */)])])]), $data.show_modal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_modalcomponent, {
    key: 0,
    onClose: _cache[3] || (_cache[3] = function ($event) {
      return $data.show_modal = false;
    })
  }, {
    "modal-header": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[4] || (_cache[4] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Confirm ")]);
    }),
    "modal-body": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[5] || (_cache[5] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Are you sure you want to proceed? ")]);
    }),
    "modal-footer": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-light",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.$emit('close');
        })
      }, "Cancel"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-primary",
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.$emit('submit');
        }),
        disabled: $data.processing == true
      }, [$data.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_20)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Continue"))], 8 /* PROPS */, _hoisted_19)];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
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

/***/ "./resources/assets/js/components/notification/notification_detail_component.vue":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/notification/notification_detail_component.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notification_detail_component_vue_vue_type_template_id_4c8a1716__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification_detail_component.vue?vue&type=template&id=4c8a1716 */ "./resources/assets/js/components/notification/notification_detail_component.vue?vue&type=template&id=4c8a1716");
/* harmony import */ var _notification_detail_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification_detail_component.vue?vue&type=script&lang=js */ "./resources/assets/js/components/notification/notification_detail_component.vue?vue&type=script&lang=js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_notification_detail_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_notification_detail_component_vue_vue_type_template_id_4c8a1716__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/js/components/notification/notification_detail_component.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/js/components/notification/notification_detail_component.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/components/notification/notification_detail_component.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notification_detail_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notification_detail_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./notification_detail_component.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/notification/notification_detail_component.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/notification/notification_detail_component.vue?vue&type=template&id=4c8a1716":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/notification/notification_detail_component.vue?vue&type=template&id=4c8a1716 ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notification_detail_component_vue_vue_type_template_id_4c8a1716__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notification_detail_component_vue_vue_type_template_id_4c8a1716__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./notification_detail_component.vue?vue&type=template&id=4c8a1716 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/notification/notification_detail_component.vue?vue&type=template&id=4c8a1716");


/***/ })

}]);