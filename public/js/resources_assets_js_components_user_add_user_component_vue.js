"use strict";
(self["webpackChunkfinal_main"] = self["webpackChunkfinal_main"] || []).push([["resources_assets_js_components_user_add_user_component_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/user/add_user_component.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/user/add_user_component.vue?vue&type=script&lang=js ***!
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
      reset_password_form: {
        processing: false
      },
      show_password_reset_confirm: false,
      show_new_password: false,
      new_password: '',
      api_link: this.user_data == null ? '/api/add_user' : '/api/update_user/' + this.user_data.slack,
      password_reset_api_link: this.user_data == null ? '' : '/api/reset_user_password/' + this.user_data.slack,
      user_slack: this.user_data == null ? '' : this.user_data.slack,
      email: this.user_data == null ? '' : this.user_data.email,
      fullname: this.user_data == null ? '' : this.user_data.fullname,
      phone: this.user_data == null ? '' : this.user_data.phone,
      role: this.user_data == null ? '' : this.user_data.role == null ? '' : this.user_data.role.slack,
      status: this.user_data == null ? '' : this.user_data.status == null ? '' : this.user_data.status.value,
      stores_selected: this.user_data == null ? [] : this.user_data.selected_stores == null ? [] : this.user_data.selected_stores
    };
  },
  props: {
    roles: Array,
    statuses: Array,
    stores: Array,
    user_data: [Array, Object],
    is_super_admin: Boolean
  },
  mounted: function mounted() {
    console.log('Add user page loaded');
  },
  methods: {
    submit_form: function submit_form() {
      var _this = this;
      this.$off("submit");
      this.$off("close");
      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.show_modal = true;
          _this.$on("submit", function () {
            var _this2 = this;
            this.processing = true;
            var formData = new FormData();
            formData.append("access_token", window.settings.access_token);
            formData.append("fullname", this.fullname == null ? '' : this.fullname);
            formData.append("email", this.email == null ? '' : this.email);
            formData.append("phone", this.phone == null ? '' : this.phone);
            formData.append("role", this.role == null ? '' : this.role);
            formData.append("status", this.status == null ? '' : this.status);
            formData.append("user_stores", this.stores_selected);
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
          });
          _this.$on("close", function () {
            this.show_modal = false;
          });
        }
      });
    },
    reset_password: function reset_password() {
      this.$off("submit");
      this.$off("close");
      this.show_password_reset_confirm = true;
      this.$on("submit", function () {
        var _this3 = this;
        this.reset_password_form.processing = true;
        var formData = new FormData();
        formData.append("access_token", window.settings.access_token);
        axios.post(this.password_reset_api_link, formData).then(function (response) {
          if (response.data.status_code == 200) {
            _this3.show_response_message(response.data.msg, 'SUCCESS');
            _this3.reset_password_form.processing = false;
            _this3.show_password_reset_confirm = false;
            _this3.new_password = response.data.data['secret'];
            _this3.show_new_password = true;
          } else {
            _this3.show_password_reset_confirm = false;
            _this3.reset_password_form.processing = false;
            try {
              var error_json = JSON.parse(response.data.msg);
              _this3.loop_api_errors(error_json);
            } catch (err) {
              _this3.server_errors = response.data.msg;
            }
            _this3.error_class = 'error';
          }
        })["catch"](function (error) {
          console.log(error);
        });
      });
      this.$on("close", function () {
        this.show_password_reset_confirm = false;
        this.show_new_password = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/user/add_user_component.vue?vue&type=template&id=32b5ea64":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/user/add_user_component.vue?vue&type=template&id=32b5ea64 ***!
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
  "class": "mb-2"
};
var _hoisted_12 = {
  "class": "text-subhead"
};
var _hoisted_13 = {
  "class": "form-row mb-2"
};
var _hoisted_14 = {
  "class": "form-group col-md-3"
};
var _hoisted_15 = {
  "for": "email"
};
var _hoisted_16 = ["placeholder"];
var _hoisted_17 = {
  "class": "form-group col-md-3"
};
var _hoisted_18 = {
  "for": "firstname"
};
var _hoisted_19 = ["placeholder"];
var _hoisted_20 = {
  "class": "form-group col-md-3"
};
var _hoisted_21 = {
  "for": "phone"
};
var _hoisted_22 = ["placeholder"];
var _hoisted_23 = {
  "class": "mb-2"
};
var _hoisted_24 = {
  "class": "text-subhead"
};
var _hoisted_25 = {
  "class": "form-row mb-2"
};
var _hoisted_26 = {
  "class": "form-group col-md-3"
};
var _hoisted_27 = {
  "for": "lastname"
};
var _hoisted_28 = ["value"];
var _hoisted_29 = {
  "class": "form-group col-md-3"
};
var _hoisted_30 = {
  "for": "status"
};
var _hoisted_31 = ["value"];
var _hoisted_32 = {
  "class": "mb-2"
};
var _hoisted_33 = {
  "class": "mb-2"
};
var _hoisted_34 = {
  "class": "text-subhead"
};
var _hoisted_35 = {
  "class": "mb-2"
};
var _hoisted_36 = ["disabled"];
var _hoisted_37 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
var _hoisted_38 = {
  "class": "mb-2"
};
var _hoisted_39 = {
  "class": "text-subhead"
};
var _hoisted_40 = {
  "class": "mb-2"
};
var _hoisted_41 = ["value", "id"];
var _hoisted_42 = ["for"];
var _hoisted_43 = {
  "class": "text-bold"
};
var _hoisted_44 = {
  key: 0
};
var _hoisted_45 = ["disabled"];
var _hoisted_46 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
var _hoisted_47 = ["disabled"];
var _hoisted_48 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_modalcomponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modalcomponent");
  var _directive_validate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("validate");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submit_form && $options.submit_form.apply($options, arguments);
    }, ["prevent"])),
    "class": "mb-3"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$data.user_slack == '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Add User")), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Edit User")), 1 /* TEXT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn btn-primary",
    disabled: $data.processing == true
  }, [$data.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_9)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Save")), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_8)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    innerHTML: $data.server_errors,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.error_class])
  }, null, 10 /* CLASS, PROPS */, _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Basic Information")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Email")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "email",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.email = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter email'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_16), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email], [_directive_validate, 'required|email|max:150']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('email')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('email')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Fullname")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "fullname",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.fullname = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter fullname'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_19), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.fullname], [_directive_validate, 'required|max:250']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('fullname')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('fullname')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Contact No.")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "phone",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.phone = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter Contact Number'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_22), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.phone], [_directive_validate, 'required|min:10|max:15']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('phone')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('phone')), 3 /* TEXT, CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Role Information")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Role")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
    name: "role",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.role = $event;
    }),
    "class": "form-control form-control-custom custom-select"
  }, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: ""
  }, "Choose Role..", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.roles, function (role, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: role.slack,
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(role.label), 9 /* TEXT, PROPS */, _hoisted_28);
  }), 128 /* KEYED_FRAGMENT */))])), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.role], [_directive_validate, 'required']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('role')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('role')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Status")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
    name: "status",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.status = $event;
    }),
    "class": "form-control form-control-custom custom-select"
  }, [_cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: ""
  }, "Choose Status..", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.statuses, function (status, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: status.value,
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(status.label), 9 /* TEXT, PROPS */, _hoisted_31);
  }), 128 /* KEYED_FRAGMENT */))])), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.status], [_directive_validate, 'required|numeric']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('status')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('status')), 3 /* TEXT, CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Password Reset")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-outline-primary",
    disabled: $data.reset_password_form.processing == true,
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.reset_password && $options.reset_password.apply($options, arguments);
    })
  }, [$data.reset_password_form.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_37)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reset Current Password"))], 8 /* PROPS */, _hoisted_36)])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.is_super_admin == true && $data.user_slack != '']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Store Access")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.stores, function (store, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "custom-control custom-checkbox mb-1",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "custom-control-input",
      type: "checkbox",
      "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
        return $data.stores_selected = $event;
      }),
      value: store.slack,
      id: store.slack
    }, null, 8 /* PROPS */, _hoisted_41), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.stores_selected]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "custom-control-label",
      "for": store.slack
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(store.store_code), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(", " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(store.name) + ", " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(store.address), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_42)]);
  }), 128 /* KEYED_FRAGMENT */))])], 32 /* NEED_HYDRATION */)]), $data.show_modal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_modalcomponent, {
    key: 0,
    onClose: _cache[10] || (_cache[10] = function ($event) {
      return $data.show_modal = false;
    })
  }, {
    "modal-header": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[19] || (_cache[19] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Confirm ")]);
    }),
    "modal-body": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.status == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_44, "You are making the user inactive.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Are you sure you want to proceed? "))];
    }),
    "modal-footer": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-light",
        onClick: _cache[8] || (_cache[8] = function ($event) {
          return _ctx.$emit('close');
        })
      }, "Cancel"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-primary",
        onClick: _cache[9] || (_cache[9] = function ($event) {
          return _ctx.$emit('submit');
        }),
        disabled: $data.processing == true
      }, [$data.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_46)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Continue"))], 8 /* PROPS */, _hoisted_45)];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.show_password_reset_confirm ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_modalcomponent, {
    key: 1,
    onClose: _cache[13] || (_cache[13] = function ($event) {
      return $data.show_password_reset_confirm = false;
    })
  }, {
    "modal-header": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[22] || (_cache[22] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Confirm ")]);
    }),
    "modal-body": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[23] || (_cache[23] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Are you sure you want to reset the password? ")]);
    }),
    "modal-footer": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-light",
        onClick: _cache[11] || (_cache[11] = function ($event) {
          return _ctx.$emit('close');
        })
      }, "Cancel"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-primary",
        onClick: _cache[12] || (_cache[12] = function ($event) {
          return _ctx.$emit('submit');
        }),
        disabled: $data.processing == true
      }, [$data.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_48)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Continue"))], 8 /* PROPS */, _hoisted_47)];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.show_new_password ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_modalcomponent, {
    key: 2,
    onClose: _cache[15] || (_cache[15] = function ($event) {
      return $data.show_new_password = false;
    })
  }, {
    "modal-header": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[25] || (_cache[25] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" New Password ")]);
    }),
    "modal-body": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" New password for the user : ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.new_password), 1 /* TEXT */)];
    }),
    "modal-footer": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-primary",
        onClick: _cache[14] || (_cache[14] = function ($event) {
          return _ctx.$emit('close');
        })
      }, "Ok")];
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

/***/ "./resources/assets/js/components/user/add_user_component.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/user/add_user_component.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_user_component_vue_vue_type_template_id_32b5ea64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_user_component.vue?vue&type=template&id=32b5ea64 */ "./resources/assets/js/components/user/add_user_component.vue?vue&type=template&id=32b5ea64");
/* harmony import */ var _add_user_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_user_component.vue?vue&type=script&lang=js */ "./resources/assets/js/components/user/add_user_component.vue?vue&type=script&lang=js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_add_user_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_add_user_component_vue_vue_type_template_id_32b5ea64__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/js/components/user/add_user_component.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/js/components/user/add_user_component.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/user/add_user_component.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_user_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_user_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./add_user_component.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/user/add_user_component.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/user/add_user_component.vue?vue&type=template&id=32b5ea64":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/user/add_user_component.vue?vue&type=template&id=32b5ea64 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_user_component_vue_vue_type_template_id_32b5ea64__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_user_component_vue_vue_type_template_id_32b5ea64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./add_user_component.vue?vue&type=template&id=32b5ea64 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/user/add_user_component.vue?vue&type=template&id=32b5ea64");


/***/ })

}]);