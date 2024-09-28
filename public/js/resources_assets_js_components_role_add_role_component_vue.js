"use strict";
(self["webpackChunkfinal_main"] = self["webpackChunkfinal_main"] || []).push([["resources_assets_js_components_role_add_role_component_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/role/add_role_component.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/role/add_role_component.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
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
      modal: false,
      show_modal: false,
      api_link: this.role_data == null ? '/api/add_role' : '/api/update_role/' + this.role_data.slack,
      role_slack: this.role_data == null ? '' : this.role_data.slack,
      role: this.role_data == null ? '' : this.role_data.label,
      status: this.role_data == null ? '' : this.role_data.status.value,
      menu_selected: this.role_data == null ? [] : this.role_data.menus
    };
  },
  props: {
    statuses: Array,
    menus: [Array, Object],
    role_data: [Array, Object]
  },
  mounted: function mounted() {
    console.log('Add role page loaded');
  },
  methods: {
    array_remove: function array_remove(arr, value) {
      return arr.filter(function (ele) {
        return ele != value;
      });
    },
    menu_checker: function menu_checker(payload) {
      if (payload.event.target.checked == true) {
        if (payload.type == 'ACTIONS') {
          this.menu_selected.push(payload.current);
          this.menu_selected.push(payload.parent);
          this.menu_selected.push(payload.grand_parent);
        }
        if (payload.type == 'SUB_MENU') {
          this.menu_selected.push(payload.current);
          this.menu_selected.push(payload.parent);
          this.menu_selected = this.menu_selected.concat(payload.children);
        }
        if (payload.type == 'MAIN_MENU') {
          this.menu_selected.push(payload.current);
          this.menu_selected = this.menu_selected.concat(payload.children);
        }
      } else {
        if (payload.type == 'ACTIONS') {
          this.menu_selected = this.array_remove(this.menu_selected, payload.current);
          var sibling_count = 0;
          for (var i = 0; i < payload.siblings.length; i++) {
            if (this.menu_selected.includes(payload.siblings[i])) {
              sibling_count++;
            }
          }
          if (sibling_count == 0) {
            this.menu_selected = this.array_remove(this.menu_selected, payload.parent);
          }
          if (typeof this.menus[payload.grand_parent] != "undefined") {
            var children_selected_check_count = 0;
            var children = this.menus[payload.grand_parent]['childs'];
            for (var i = 0; i < children.length; i++) {
              if (this.menu_selected.includes(children[i])) {
                children_selected_check_count++;
              }
            }
            if (children_selected_check_count == 0) {
              this.menu_selected = this.array_remove(this.menu_selected, payload.grand_parent);
            }
          }
        }
        if (payload.type == 'SUB_MENU') {
          this.menu_selected = this.array_remove(this.menu_selected, payload.current);
          for (var i = 0; i < payload.children.length; i++) {
            this.menu_selected = this.array_remove(this.menu_selected, payload.children[i]);
          }
          var sibling_count = 0;
          for (var i = 0; i < payload.siblings.length; i++) {
            if (this.menu_selected.includes(payload.siblings[i])) {
              sibling_count++;
            }
          }
          if (sibling_count == 0) {
            this.menu_selected = this.array_remove(this.menu_selected, payload.parent);
          }
        }
        if (payload.type == 'MAIN_MENU') {
          this.menu_selected = this.array_remove(this.menu_selected, payload.current);
          for (var i = 0; i < payload.children.length; i++) {
            this.menu_selected = this.array_remove(this.menu_selected, payload.children[i]);
          }
        }
      }
    },
    submit_form: function submit_form() {
      var _this = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.show_modal = true;
          _this.$on("submit", function () {
            var _this2 = this;
            this.processing = true;
            var formData = new FormData();
            formData.append("access_token", window.settings.access_token);
            formData.append("role_label", this.role == null ? '' : this.role);
            formData.append("status", this.status == null ? '' : this.status);
            formData.append("role_menus", this.menu_selected);
            axios.post(this.api_link, formData).then(function (response) {
              if (response.data.status_code == 200) {
                _this2.show_response_message(response.data.msg, 'SUCCESS');
                setTimeout(function () {
                  location.reload();
                }, 1000);
              } else {
                _this2.show_modal = false;
                _this2.processing = false;
                try {
                  var error_json = JSON.parse(response.data.msg);
                  _this2.loop_api_errors(error_json);
                } catch (err) {
                  _this2.server_errors = response.data.msg;
                }
                _this2.error_class = 'error';
              }
            })["catch"](function (error) {
              console.log(error);
            });
            this.$off("submit");
          });
          _this.$on("close", function () {
            this.show_modal = false;
            this.$off("close");
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/role/add_role_component.vue?vue&type=template&id=5b16d2c4":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/role/add_role_component.vue?vue&type=template&id=5b16d2c4 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
  key: 0,
  "class": "text-title"
};
var _hoisted_6 = {
  key: 1,
  "class": "text-title"
};
var _hoisted_7 = {
  "class": ""
};
var _hoisted_8 = ["disabled"];
var _hoisted_9 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
var _hoisted_10 = ["innerHTML"];
var _hoisted_11 = {
  "class": "form-row mb-2"
};
var _hoisted_12 = {
  "class": "form-group col-md-3"
};
var _hoisted_13 = {
  "for": "role"
};
var _hoisted_14 = ["placeholder"];
var _hoisted_15 = {
  "class": "form-group col-md-3"
};
var _hoisted_16 = {
  "for": "status"
};
var _hoisted_17 = ["value"];
var _hoisted_18 = {
  "class": "mb-2"
};
var _hoisted_19 = {
  "class": "text-subhead"
};
var _hoisted_20 = {
  "class": "mb-2"
};
var _hoisted_21 = ["value", "id", "onClick"];
var _hoisted_22 = ["for"];
var _hoisted_23 = {
  "class": "mb-2"
};
var _hoisted_24 = ["value", "id", "onClick"];
var _hoisted_25 = ["for"];
var _hoisted_26 = {
  "class": "mb-2"
};
var _hoisted_27 = ["value", "id", "onClick"];
var _hoisted_28 = ["for"];
var _hoisted_29 = {
  key: 0
};
var _hoisted_30 = ["disabled"];
var _hoisted_31 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_modalcomponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modalcomponent");
  var _directive_validate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("validate");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submit_form && $options.submit_form.apply($options, arguments);
    }, ["prevent"])),
    "class": "mb-3"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$data.role_slack == '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Add Role")), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Edit Role")), 1 /* TEXT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn btn-primary",
    disabled: $data.processing == true
  }, [$data.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_9)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Save")), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_8)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    innerHTML: $data.server_errors,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.error_class])
  }, null, 10 /* CLASS, PROPS */, _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Role Name")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "role",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.role = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter role name'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_14), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.role], [_directive_validate, 'required|max:250']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('role')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('role')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Status")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
    name: "status",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.status = $event;
    }),
    "class": "form-control form-control-custom custom-select"
  }, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: ""
  }, "Choose Status..", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.statuses, function (status, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: status.value,
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(status.label), 9 /* TEXT, PROPS */, _hoisted_17);
  }), 128 /* KEYED_FRAGMENT */))])), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.status], [_directive_validate, 'required|numeric']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('status')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('status')), 3 /* TEXT, CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Access settings")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.menus, function (menu, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "custom-control custom-checkbox mb-3",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "custom-control-input",
      type: "checkbox",
      "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
        return $data.menu_selected = $event;
      }),
      value: menu.menu_key,
      id: menu.menu_key,
      onClick: function onClick($event) {
        return $options.menu_checker({
          'type': menu.type,
          'current': menu.menu_key,
          'parent': '',
          'grand_parent': '',
          'children': menu.childs,
          'siblings': menu.siblings,
          'event': $event
        });
      }
    }, null, 8 /* PROPS */, _hoisted_21), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.menu_selected]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "custom-control-label",
      "for": menu.menu_key
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(menu.label)), 9 /* TEXT, PROPS */, _hoisted_22), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(menu.sub_menu, function (submenu_item, index) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        "class": "custom-control custom-checkbox",
        key: index
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "custom-control-input",
        type: "checkbox",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.menu_selected = $event;
        }),
        value: submenu_item.menu_key,
        id: submenu_item.menu_key,
        onClick: function onClick($event) {
          return $options.menu_checker({
            'type': submenu_item.type,
            'current': submenu_item.menu_key,
            'parent': menu.menu_key,
            'grand_parent': '',
            'children': submenu_item.childs,
            'siblings': submenu_item.siblings,
            'event': $event
          });
        }
      }, null, 8 /* PROPS */, _hoisted_24), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.menu_selected]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "class": "custom-control-label",
        "for": submenu_item.menu_key
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(submenu_item.label)), 9 /* TEXT, PROPS */, _hoisted_25), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(submenu_item.actions, function (action_item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          "class": "custom-control custom-checkbox form-check-inline",
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "class": "custom-control-input",
          type: "checkbox",
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return $data.menu_selected = $event;
          }),
          value: action_item.menu_key,
          id: action_item.menu_key,
          onClick: function onClick($event) {
            return $options.menu_checker({
              'type': action_item.type,
              'current': action_item.menu_key,
              'parent': submenu_item.menu_key,
              'grand_parent': menu.menu_key,
              'children': '',
              'siblings': action_item.siblings,
              'event': $event
            });
          }
        }, null, 8 /* PROPS */, _hoisted_27), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.menu_selected]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
          "class": "custom-control-label",
          "for": action_item.menu_key
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(action_item.label)), 9 /* TEXT, PROPS */, _hoisted_28)]);
      }), 128 /* KEYED_FRAGMENT */))])]);
    }), 128 /* KEYED_FRAGMENT */))])]);
  }), 128 /* KEYED_FRAGMENT */))])], 32 /* NEED_HYDRATION */)]), $data.show_modal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_modalcomponent, {
    key: 0,
    onClose: _cache[8] || (_cache[8] = function ($event) {
      return $data.show_modal = false;
    })
  }, {
    "modal-header": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[10] || (_cache[10] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Confirm ")]);
    }),
    "modal-body": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.status == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_29, "If role is inactive all the users with this role will lose access to the system.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Are you sure you want to proceed? "))];
    }),
    "modal-footer": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-light",
        onClick: _cache[6] || (_cache[6] = function ($event) {
          return _ctx.$emit('close');
        })
      }, "Cancel"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-primary",
        onClick: _cache[7] || (_cache[7] = function ($event) {
          return _ctx.$emit('submit');
        }),
        disabled: $data.processing == true
      }, [$data.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_31)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Continue"))], 8 /* PROPS */, _hoisted_30)];
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

/***/ "./resources/assets/js/components/role/add_role_component.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/role/add_role_component.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_role_component_vue_vue_type_template_id_5b16d2c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_role_component.vue?vue&type=template&id=5b16d2c4 */ "./resources/assets/js/components/role/add_role_component.vue?vue&type=template&id=5b16d2c4");
/* harmony import */ var _add_role_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_role_component.vue?vue&type=script&lang=js */ "./resources/assets/js/components/role/add_role_component.vue?vue&type=script&lang=js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_add_role_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_add_role_component_vue_vue_type_template_id_5b16d2c4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/js/components/role/add_role_component.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/js/components/role/add_role_component.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/role/add_role_component.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_role_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_role_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./add_role_component.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/role/add_role_component.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/role/add_role_component.vue?vue&type=template&id=5b16d2c4":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/role/add_role_component.vue?vue&type=template&id=5b16d2c4 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_role_component_vue_vue_type_template_id_5b16d2c4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_role_component_vue_vue_type_template_id_5b16d2c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./add_role_component.vue?vue&type=template&id=5b16d2c4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/role/add_role_component.vue?vue&type=template&id=5b16d2c4");


/***/ })

}]);