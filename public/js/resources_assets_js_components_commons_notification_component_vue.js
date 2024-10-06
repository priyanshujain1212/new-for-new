"use strict";
(self["webpackChunkfinal_main"] = self["webpackChunkfinal_main"] || []).push([["resources_assets_js_components_commons_notification_component_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/commons/notification_component.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/commons/notification_component.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      server_errors: '',
      error_class: '',
      processing: false,
      mark_as_read_processing: false,
      remove_all_notifications_processing: false,
      notifications_list: [],
      has_more_items: false,
      current_page: '',
      next_page: 1
    };
  },
  props: {
    unread_notifications: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    all_notifications_link: String
  },
  mounted: function mounted() {
    console.log('Notifications loaded');
    this.load_notification(); // Load notifications on mount
    $('.dropdown-menu').click(function (e) {
      e.stopPropagation();
    });
  },
  filters: {
    truncate: function truncate(value, limit) {
      if (!value) return '';
      return value.length > limit ? value.substring(0, limit - 3) + '...' : value;
    }
  },
  methods: {
    load_notification: function load_notification() {
      var _this = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.processing = true;
      var formData = new FormData();
      formData.append("access_token", window.settings.access_token);
      axios.post("/api/load_notification?page=".concat(page), formData).then(function (response) {
        _this.processing = false;
        if (response.data.status_code === 200) {
          var _this$notifications_l;
          if (page === 1) {
            _this.notifications_list = [];
          }
          (_this$notifications_l = _this.notifications_list).push.apply(_this$notifications_l, _toConsumableArray(response.data.data.data));
          _this.has_more_items = response.data.data.links.has_more_items || false;
          _this.next_page = _this.has_more_items ? response.data.data.links.current_page + 1 : 1;
        } else {
          _this.handleApiError(response);
        }
      })["catch"](function (error) {
        console.log(error);
        _this.server_errors = 'An error occurred while loading notifications.';
      });
    },
    handleApiError: function handleApiError(response) {
      this.processing = false;
      try {
        var error_json = JSON.parse(response.data.msg);
        this.loop_api_errors(error_json);
      } catch (err) {
        this.server_errors = response.data.msg;
      }
      this.error_class = 'error';
    },
    mark_as_read: function mark_as_read() {
      var _this2 = this;
      var formData = new FormData();
      formData.append("access_token", window.settings.access_token);
      this.mark_as_read_processing = true;
      axios.post('/api/mark_as_read', formData).then(function (response) {
        if (response.data.status_code === 200) {
          _this2.load_notification();
        }
        _this2.mark_as_read_processing = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    remove_all_notifications: function remove_all_notifications() {
      var _this3 = this;
      var formData = new FormData();
      formData.append("access_token", window.settings.access_token);
      this.remove_all_notifications_processing = true;
      axios.post('/api/remove_all_notifications', formData).then(function (response) {
        if (response.data.status_code === 200) {
          _this3.load_notification();
        }
        _this3.remove_all_notifications_processing = false;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/commons/notification_component.vue?vue&type=template&id=1164b487":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/commons/notification_component.vue?vue&type=template&id=1164b487 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "dropdown"
};
var _hoisted_2 = {
  key: 0,
  "class": "unread-notification-dot-position unread-notification-dot"
};
var _hoisted_3 = {
  "class": "dropdown-menu dropdown-menu-right notification-dropdown pt-3 pb-3",
  "aria-labelledby": "notification_dropdown"
};
var _hoisted_4 = {
  key: 0,
  "class": "dropdown-item-text"
};
var _hoisted_5 = {
  "class": "dropdown-item-text"
};
var _hoisted_6 = ["href"];
var _hoisted_7 = {
  "class": "media"
};
var _hoisted_8 = ["src"];
var _hoisted_9 = {
  "class": "media-body"
};
var _hoisted_10 = {
  "class": "d-block text-muted"
};
var _hoisted_11 = {
  key: 0
};
var _hoisted_12 = {
  "class": "d-flex justify-content-between pl-4 pr-4"
};
var _hoisted_13 = {
  key: 0
};
var _hoisted_14 = {
  key: 0
};
var _hoisted_15 = {
  key: 0
};
var _hoisted_16 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    "class": "nav-link nav-link-dark dropdown-toggle text-bold",
    id: "notification_dropdown",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.load_notification(1);
    })
  }, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-bell"
  }, null, -1 /* HOISTED */)), $props.unread_notifications.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$data.processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, _cache[5] || (_cache[5] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-circle-notch fa-spin"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Loading...")]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, "No Notifications", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.notifications_list.length === 0]]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.notifications_list, function (notifications_list_item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dropdown-item notification-dropdown-item border-bottom", {
        'notification-unread': notifications_list_item.read === 0
      }]),
      key: index,
      href: notifications_list_item.detail_link
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: notifications_list_item.created_by.profile_image,
      "class": "rounded-circle notification-dropdown-profile-image mt-1 mr-3",
      alt: "Profile Image"
    }, null, 8 /* PROPS */, _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.truncate(notifications_list_item.notification_text, 150)) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", _hoisted_10, [notifications_list_item.store_code ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(notifications_list_item.store_code + ' - ' + notifications_list_item.store_name) + " ·", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(notifications_list_item.created_by.fullname) + " · " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(notifications_list_item.created_at_label), 1 /* TEXT */)])])])], 10 /* CLASS, PROPS */, _hoisted_6);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [$data.has_more_items ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    "class": "text-centered btn-label mt-2",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.load_notification($data.next_page);
    })
  }, [$data.processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, _cache[7] || (_cache[7] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-circle-notch fa-spin"
  }, null, -1 /* HOISTED */)]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Load More")), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.notifications_list.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": "text-centered btn-label mt-2",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.mark_as_read();
    })
  }, [$data.mark_as_read_processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_14, _cache[8] || (_cache[8] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-circle-notch fa-spin"
  }, null, -1 /* HOISTED */)]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Mark All as Read")), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.notifications_list.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 2,
    "class": "text-centered btn-label mt-2",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.remove_all_notifications();
    })
  }, [$data.remove_all_notifications_processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_15, _cache[9] || (_cache[9] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-circle-notch fa-spin"
  }, null, -1 /* HOISTED */)]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Remove All")), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.notifications_list.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 3,
    href: $props.all_notifications_link,
    "class": "text-centered btn-label mt-2"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("View All")), 9 /* TEXT, PROPS */, _hoisted_16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]);
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

/***/ "./resources/assets/js/components/commons/notification_component.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/commons/notification_component.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notification_component_vue_vue_type_template_id_1164b487__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification_component.vue?vue&type=template&id=1164b487 */ "./resources/assets/js/components/commons/notification_component.vue?vue&type=template&id=1164b487");
/* harmony import */ var _notification_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification_component.vue?vue&type=script&lang=js */ "./resources/assets/js/components/commons/notification_component.vue?vue&type=script&lang=js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_notification_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_notification_component_vue_vue_type_template_id_1164b487__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/js/components/commons/notification_component.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/js/components/commons/notification_component.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/commons/notification_component.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notification_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notification_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./notification_component.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/commons/notification_component.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/commons/notification_component.vue?vue&type=template&id=1164b487":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/commons/notification_component.vue?vue&type=template&id=1164b487 ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notification_component_vue_vue_type_template_id_1164b487__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notification_component_vue_vue_type_template_id_1164b487__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./notification_component.vue?vue&type=template&id=1164b487 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/commons/notification_component.vue?vue&type=template&id=1164b487");


/***/ })

}]);