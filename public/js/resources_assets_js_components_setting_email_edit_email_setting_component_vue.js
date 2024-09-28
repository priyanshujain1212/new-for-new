"use strict";
(self["webpackChunkfinal_main"] = self["webpackChunkfinal_main"] || []).push([["resources_assets_js_components_setting_email_edit_email_setting_component_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/email/edit_email_setting_component.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/email/edit_email_setting_component.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
      api_link: this.setting_data.length == 0 ? '/api/add_setting_email' : '/api/update_setting_email/' + this.setting_data.slack,
      setting_slack: this.setting_data.length == 0 ? '' : this.setting_data.slack,
      driver: this.setting_data.length == 0 ? '' : this.setting_data.driver,
      host: this.setting_data.length == 0 ? '' : this.setting_data.host,
      port: this.setting_data.length == 0 ? '' : this.setting_data.port,
      username: this.setting_data.length == 0 ? '' : this.setting_data.username,
      password: this.setting_data.length == 0 ? '' : this.setting_data.password,
      encryption: this.setting_data.length == 0 ? '' : this.setting_data.encryption,
      from_email: this.setting_data.length == 0 ? '' : this.setting_data.from_email,
      from_email_name: this.setting_data.length == 0 ? '' : this.setting_data.from_email_name,
      status: this.setting_data.length == 0 ? '' : this.setting_data.status.value,
      test_email_processing: false,
      test_email_server_errors: '',
      test_email_error_class: '',
      email: ''
    };
  },
  props: {
    statuses: Array,
    setting_data: [Array, Object]
  },
  mounted: function mounted() {
    console.log('Edit Email setting page loaded');
  },
  methods: {
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
            formData.append("driver", this.driver == null ? '' : this.driver);
            formData.append("host", this.host == null ? '' : this.host);
            formData.append("port", this.port == null ? '' : this.port);
            formData.append("username", this.username == null ? '' : this.username);
            formData.append("password", this.password == null ? '' : this.password);
            formData.append("encryption", this.encryption == null ? '' : this.encryption);
            formData.append("from_email", this.from_email == null ? '' : this.from_email);
            formData.append("from_email_name", this.from_email_name == null ? '' : this.from_email_name);
            formData.append("status", this.status == null ? '' : this.status);
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
    },
    send_test_email: function send_test_email() {
      var _this3 = this;
      this.$validator.validateAll('test_email_form').then(function (result) {
        if (result) {
          _this3.test_email_processing = true;
          var formData = new FormData();
          formData.append("access_token", window.settings.access_token);
          formData.append("setting_slack", _this3.setting_slack);
          formData.append("email", _this3.email);
          axios.post('/api/send_test_email', formData).then(function (response) {
            if (response.data.status_code == 200) {
              _this3.show_response_message(response.data.msg, 'SUCCESS');
              _this3.test_email_processing = false;
            } else {
              _this3.test_email_processing = false;
              try {
                var error_json = JSON.parse(response.data.msg);
                _this3.test_email_server_errors = _this3.loop_api_errors(error_json);
              } catch (err) {
                _this3.test_email_server_errors = response.data.msg;
              }
              _this3.test_email_error_class = 'error';
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/email/edit_email_setting_component.vue?vue&type=template&id=60cf2082":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/email/edit_email_setting_component.vue?vue&type=template&id=60cf2082 ***!
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
  "for": "driver"
};
var _hoisted_14 = ["placeholder"];
var _hoisted_15 = {
  "class": "form-group col-md-3"
};
var _hoisted_16 = {
  "for": "encryption"
};
var _hoisted_17 = ["placeholder"];
var _hoisted_18 = {
  "class": "form-group col-md-3"
};
var _hoisted_19 = {
  "for": "host"
};
var _hoisted_20 = ["placeholder"];
var _hoisted_21 = {
  "class": "form-group col-md-3"
};
var _hoisted_22 = {
  "for": "port"
};
var _hoisted_23 = ["placeholder"];
var _hoisted_24 = {
  "class": "form-row mb-2"
};
var _hoisted_25 = {
  "class": "form-group col-md-3"
};
var _hoisted_26 = {
  "for": "username"
};
var _hoisted_27 = ["placeholder"];
var _hoisted_28 = {
  "class": "form-group col-md-3"
};
var _hoisted_29 = {
  "for": "password"
};
var _hoisted_30 = ["placeholder"];
var _hoisted_31 = {
  "class": "form-group col-md-3"
};
var _hoisted_32 = {
  "for": "from_email"
};
var _hoisted_33 = ["placeholder"];
var _hoisted_34 = {
  "class": "form-group col-md-3"
};
var _hoisted_35 = {
  "for": "from_email_name"
};
var _hoisted_36 = ["placeholder"];
var _hoisted_37 = {
  "class": "form-group col-md-3"
};
var _hoisted_38 = {
  "for": "status"
};
var _hoisted_39 = ["value"];
var _hoisted_40 = {
  "data-vv-scope": "test_email_form"
};
var _hoisted_41 = {
  "class": "mb-2"
};
var _hoisted_42 = {
  "class": "mb-2"
};
var _hoisted_43 = {
  "for": "test_email"
};
var _hoisted_44 = {
  "class": "form-row mb-2"
};
var _hoisted_45 = {
  "class": "form-group col-md-3"
};
var _hoisted_46 = ["placeholder"];
var _hoisted_47 = {
  "class": "form-group col-md-3"
};
var _hoisted_48 = ["disabled"];
var _hoisted_49 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
var _hoisted_50 = {
  "class": "form-text text-muted"
};
var _hoisted_51 = ["innerHTML"];
var _hoisted_52 = ["disabled"];
var _hoisted_53 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_modalcomponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modalcomponent");
  var _directive_validate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("validate");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submit_form && $options.submit_form.apply($options, arguments);
    }, ["prevent"])),
    "class": "mb-3"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$data.setting_slack == '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Add Email Setting")), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Edit Email Setting")), 1 /* TEXT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn btn-primary",
    disabled: $data.processing == true
  }, [$data.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_9)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Save")), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_8)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    innerHTML: $data.server_errors,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.error_class])
  }, null, 10 /* CLASS, PROPS */, _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Driver")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "driver",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.driver = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter Driver'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_14), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.driver], [_directive_validate, 'required|max:50']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('driver')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('driver')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Encryption")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "encryption",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.encryption = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter Encryption'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_17), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.encryption], [_directive_validate, 'required|max:50']]), _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
    "class": "form-text text-muted"
  }, "TLS, SSL etc.", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('encryption')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('encryption')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Host")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "host",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.host = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter Host'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_20), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.host], [_directive_validate, 'required|max:250']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('host')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('host')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Port")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "port",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.port = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter Port'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_23), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.port], [_directive_validate, 'required|max:50']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('port')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('port')), 3 /* TEXT, CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Username")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "username",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.username = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter Username'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_27), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.username], [_directive_validate, 'required|max:250']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('username')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('username')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Password")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "password",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.password = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter Password'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_30), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password], [_directive_validate, 'required|max:250']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('password')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('password')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("From Email")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "from_email",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.from_email = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter From email'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_33), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.from_email], [_directive_validate, 'required|max:250|email']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('from_email')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('from_email')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("From Email Name")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "from_email_name",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.from_email_name = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter From email name'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_36), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.from_email_name], [_directive_validate, 'required|max:250']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('from_email_name')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('from_email_name')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Status")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
    name: "status",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.status = $event;
    }),
    "class": "form-control form-control-custom custom-select"
  }, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: ""
  }, "Choose Status..", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.statuses, function (status, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: status.value,
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(status.label), 9 /* TEXT, PROPS */, _hoisted_39);
  }), 128 /* KEYED_FRAGMENT */))])), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.status], [_directive_validate, 'required|numeric']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('status')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('status')), 3 /* TEXT, CLASS */)])])], 32 /* NEED_HYDRATION */), _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Send Test Email")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "email",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.email = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.$t('Please enter email'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_46), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email], [_directive_validate, 'required|max:250|email']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('test_email_form.email')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('test_email_form.email')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-outline-primary",
    disabled: $data.test_email_processing == true,
    onClick: _cache[11] || (_cache[11] = function () {
      return $options.send_test_email && $options.send_test_email.apply($options, arguments);
    })
  }, [$data.test_email_processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_49)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Send Test Email")), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_48)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("Test email will be send to given mail address")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    innerHTML: $data.test_email_server_errors,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.test_email_error_class])
  }, null, 10 /* CLASS, PROPS */, _hoisted_51)])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.setting_slack != '']])]), $data.show_modal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_modalcomponent, {
    key: 0,
    onClose: _cache[14] || (_cache[14] = function ($event) {
      return $data.show_modal = false;
    })
  }, {
    "modal-header": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[18] || (_cache[18] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Confirm ")]);
    }),
    "modal-body": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[19] || (_cache[19] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Are you sure you want to proceed? ")]);
    }),
    "modal-footer": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-light",
        onClick: _cache[12] || (_cache[12] = function ($event) {
          return _ctx.$emit('close');
        })
      }, "Cancel"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-primary",
        onClick: _cache[13] || (_cache[13] = function ($event) {
          return _ctx.$emit('submit');
        }),
        disabled: $data.processing == true
      }, [$data.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_53)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Continue"))], 8 /* PROPS */, _hoisted_52)];
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

/***/ "./resources/assets/js/components/setting/email/edit_email_setting_component.vue":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/setting/email/edit_email_setting_component.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_email_setting_component_vue_vue_type_template_id_60cf2082__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_email_setting_component.vue?vue&type=template&id=60cf2082 */ "./resources/assets/js/components/setting/email/edit_email_setting_component.vue?vue&type=template&id=60cf2082");
/* harmony import */ var _edit_email_setting_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_email_setting_component.vue?vue&type=script&lang=js */ "./resources/assets/js/components/setting/email/edit_email_setting_component.vue?vue&type=script&lang=js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_edit_email_setting_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_edit_email_setting_component_vue_vue_type_template_id_60cf2082__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/js/components/setting/email/edit_email_setting_component.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/js/components/setting/email/edit_email_setting_component.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/components/setting/email/edit_email_setting_component.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_email_setting_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_email_setting_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./edit_email_setting_component.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/email/edit_email_setting_component.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/setting/email/edit_email_setting_component.vue?vue&type=template&id=60cf2082":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/setting/email/edit_email_setting_component.vue?vue&type=template&id=60cf2082 ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_email_setting_component_vue_vue_type_template_id_60cf2082__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_email_setting_component_vue_vue_type_template_id_60cf2082__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./edit_email_setting_component.vue?vue&type=template&id=60cf2082 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/email/edit_email_setting_component.vue?vue&type=template&id=60cf2082");


/***/ })

}]);