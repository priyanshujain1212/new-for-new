"use strict";
(self["webpackChunkfinal_main"] = self["webpackChunkfinal_main"] || []).push([["resources_assets_js_components_setting_app_edit_app_setting_component_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/app/edit_app_setting_component.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/app/edit_app_setting_component.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      api_link: '/api/update_setting_app',
      company_name: this.setting_data.length == 0 ? '' : this.setting_data.company_name,
      app_title: this.setting_data.length == 0 ? '' : this.setting_data.app_title,
      app_timezone: this.setting_data.length == 0 ? '' : this.setting_data.timezone,
      app_date_time_format: this.setting_data.length == 0 ? '' : this.setting_data.app_date_time_format,
      app_date_format: this.setting_data.length == 0 ? '' : this.setting_data.app_date_format,
      company_logo: this.setting_data.length == 0 ? '-' : this.setting_data.company_logo_path,
      company_logo_exists: this.setting_data.length == 0 ? false : this.setting_data.company_logo != '' && this.setting_data.company_logo != null ? true : false,
      invoice_print_logo: this.setting_data.length == 0 ? '-' : this.setting_data.invoice_print_logo_path,
      invoice_print_logo_exists: this.setting_data.length == 0 ? false : this.setting_data.invoice_print_logo != '' && this.setting_data.invoice_print_logo != null ? true : false,
      navbar_logo: this.setting_data.length == 0 ? '-' : this.setting_data.navbar_logo_path,
      navbar_logo_exists: this.setting_data.length == 0 ? false : this.setting_data.navbar_logo != '' && this.setting_data.navbar_logo != null ? true : false,
      favicon: this.setting_data.length == 0 ? '-' : this.setting_data.favicon_path,
      favicon_exists: this.setting_data.length == 0 ? false : this.setting_data.favicon != '' && this.setting_data.favicon != null ? true : false,
      clear_cache_processing: false,
      clear_storage_processing: false,
      deactivate_api_link: '/api/deactivate',
      purchase_code_server_errors: '',
      purchase_code_error_class: '',
      purchase_code: '',
      show_deactivation_modal: false,
      deactivate_processing: false
    };
  },
  props: {
    setting_data: [Array, Object],
    date_time_formats: Array,
    date_formats: Array,
    timezones: [Array, Object],
    deactivation_eligible: Boolean,
    chost: String,
    cip: String
  },
  mounted: function mounted() {
    console.log('Edit App setting page loaded');
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
            var company_logo_file = this.$refs.company_logo.files.length > 0 ? this.$refs.company_logo.files[0] : '';
            var invoice_print_logo_file = this.$refs.invoice_print_logo.files.length > 0 ? this.$refs.invoice_print_logo.files[0] : '';
            var navbar_logo_file = this.$refs.navbar_logo.files.length > 0 ? this.$refs.navbar_logo.files[0] : '';
            var favicon_file = this.$refs.favicon.files.length > 0 ? this.$refs.favicon.files[0] : '';
            formData.append("access_token", window.settings.access_token);
            formData.append("company_name", this.company_name == null ? '' : this.company_name);
            formData.append("app_title", this.app_title == null ? '' : this.app_title);
            formData.append("timezone", this.app_timezone == null ? '' : this.app_timezone);
            formData.append("date_time_format", this.app_date_time_format == null ? '' : this.app_date_time_format);
            formData.append("date_format", this.app_date_format == null ? '' : this.app_date_format);
            formData.append("company_logo", company_logo_file);
            formData.append("invoice_print_logo", invoice_print_logo_file);
            formData.append("navbar_logo", navbar_logo_file);
            formData.append("favicon", favicon_file);
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
    remove_logo: function remove_logo(type) {
      var _this3 = this;
      var formData = new FormData();
      formData.append("access_token", window.settings.access_token);
      formData.append("type", type);
      axios.post('/api/remove_company_logo', formData).then(function (response) {
        _this3.processing = false;
        if (response.data.status_code == 200) {
          location.reload();
        } else {
          try {
            var error_json = JSON.parse(response.data.msg);
            _this3.server_errors = _this3.loop_api_errors(error_json);
          } catch (err) {
            _this3.server_errors = response.data.msg;
          }
          _this3.error_class = 'error';
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    clear_cache: function clear_cache() {
      var _this4 = this;
      this.clear_cache_processing = true;
      var formData = new FormData();
      formData.append("access_token", window.settings.access_token);
      axios.post('/api/clear_app_cache', formData).then(function (response) {
        if (response.data.status_code == 200) {
          location.reload();
        } else {
          _this4.clear_cache_processing = false;
          try {
            var error_json = JSON.parse(response.data.msg);
            _this4.server_errors = _this4.loop_api_errors(error_json);
          } catch (err) {
            _this4.server_errors = response.data.msg;
          }
          _this4.error_class = 'error';
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    clear_storage: function clear_storage() {
      var _this5 = this;
      this.clear_storage_processing = true;
      var formData = new FormData();
      formData.append("access_token", window.settings.access_token);
      axios.post('/api/clear_app_storage', formData).then(function (response) {
        if (response.data.status_code == 200) {
          location.reload();
        } else {
          _this5.clear_storage_processing = false;
          try {
            var error_json = JSON.parse(response.data.msg);
            _this5.server_errors = _this5.loop_api_errors(error_json);
          } catch (err) {
            _this5.server_errors = response.data.msg;
          }
          _this5.error_class = 'error';
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deactivate_product: function deactivate_product() {
      this.show_deactivation_modal = true;
    },
    deactivate_proceed: function deactivate_proceed() {
      var _this6 = this;
      this.$validator.validateAll('purchase_code_form').then(function (isValid) {
        if (isValid) {
          _this6.processing = true;
          var formData = new FormData();
          formData.append("access_token", window.settings.access_token);
          formData.append("pcode", _this6.purchase_code);
          formData.append("chost", _this6.chost);
          formData.append("cip", _this6.cip);
          axios.post(_this6.deactivate_api_link, formData).then(function (response) {
            if (response.data.status_code == 200) {
              _this6.show_response_message(response.data.msg, 'SUCCESS');
              _this6.processing = false;
              location.reload();
            } else {
              _this6.processing = false;
              try {
                var error_json = JSON.parse(response.data.msg);
                _this6.loop_api_errors(error_json);
              } catch (err) {
                _this6.purchase_code_server_errors = response.data.msg;
              }
              _this6.purchase_code_error_class = 'error';
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    deactivate_cancel: function deactivate_cancel() {
      this.purchase_code = '';
      this.show_deactivation_modal = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/app/edit_app_setting_component.vue?vue&type=template&id=2964c842":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/app/edit_app_setting_component.vue?vue&type=template&id=2964c842 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": ""
};
var _hoisted_7 = ["disabled"];
var _hoisted_8 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
var _hoisted_9 = ["innerHTML"];
var _hoisted_10 = {
  "class": "form-row mb-2"
};
var _hoisted_11 = {
  "class": "form-group col-md-3"
};
var _hoisted_12 = {
  "for": "company_name"
};
var _hoisted_13 = ["placeholder"];
var _hoisted_14 = {
  "class": "form-group col-md-3"
};
var _hoisted_15 = {
  "for": "app_title"
};
var _hoisted_16 = ["placeholder"];
var _hoisted_17 = {
  "class": "form-group col-md-3"
};
var _hoisted_18 = {
  "for": "app_timezone"
};
var _hoisted_19 = ["value"];
var _hoisted_20 = {
  "class": "form-group col-md-3"
};
var _hoisted_21 = {
  "for": "app_date_time_format"
};
var _hoisted_22 = ["value"];
var _hoisted_23 = {
  "class": "form-group col-md-3"
};
var _hoisted_24 = {
  "for": "app_date_format"
};
var _hoisted_25 = ["value"];
var _hoisted_26 = {
  "class": "form-row mb-2"
};
var _hoisted_27 = {
  "class": "form-group col-md-3"
};
var _hoisted_28 = {
  "for": "company_logo"
};
var _hoisted_29 = {
  type: "file",
  "class": "form-control-file form-control form-control-custom file-input",
  name: "company_logo",
  ref: "company_logo",
  accept: "image/x-png,image/jpeg"
};
var _hoisted_30 = {
  "class": "form-group col-md-3"
};
var _hoisted_31 = {
  "for": "company_logo"
};
var _hoisted_32 = {
  "class": "d-block"
};
var _hoisted_33 = ["src"];
var _hoisted_34 = {
  "class": "form-row mb-2"
};
var _hoisted_35 = {
  "class": "form-group col-md-3"
};
var _hoisted_36 = {
  "for": "invoice_print_logo"
};
var _hoisted_37 = {
  type: "file",
  "class": "form-control-file form-control form-control-custom file-input",
  name: "invoice_print_logo",
  ref: "invoice_print_logo",
  accept: "image/x-png,image/jpeg"
};
var _hoisted_38 = {
  "class": "form-group col-md-3"
};
var _hoisted_39 = {
  "for": "invoice_print_logo"
};
var _hoisted_40 = {
  "class": "d-block"
};
var _hoisted_41 = ["src"];
var _hoisted_42 = {
  "class": "form-row mb-2"
};
var _hoisted_43 = {
  "class": "form-group col-md-3"
};
var _hoisted_44 = {
  "for": "navbar_logo"
};
var _hoisted_45 = {
  type: "file",
  "class": "form-control-file form-control form-control-custom file-input",
  name: "navbar_logo",
  ref: "navbar_logo",
  accept: "image/x-png,image/jpeg"
};
var _hoisted_46 = {
  "class": "form-group col-md-3"
};
var _hoisted_47 = {
  "for": "navbar_logo"
};
var _hoisted_48 = {
  "class": "d-block"
};
var _hoisted_49 = ["src"];
var _hoisted_50 = {
  "class": "form-row mb-2"
};
var _hoisted_51 = {
  "class": "form-group col-md-3"
};
var _hoisted_52 = {
  "for": "favicon"
};
var _hoisted_53 = {
  type: "file",
  "class": "form-control-file form-control form-control-custom file-input",
  name: "favicon",
  ref: "favicon",
  accept: "image/x-png,image/jpeg"
};
var _hoisted_54 = {
  "class": "form-group col-md-3"
};
var _hoisted_55 = {
  "for": "favicon"
};
var _hoisted_56 = {
  "class": "d-block"
};
var _hoisted_57 = ["src"];
var _hoisted_58 = {
  "class": "d-flex flex-wrap mb-1"
};
var _hoisted_59 = {
  "class": "mr-auto"
};
var _hoisted_60 = {
  "class": "text-subhead"
};
var _hoisted_61 = {
  "class": "mb-2"
};
var _hoisted_62 = {
  "class": "mb-2"
};
var _hoisted_63 = {
  "for": "clear_cache"
};
var _hoisted_64 = {
  "class": "mb-2"
};
var _hoisted_65 = ["disabled"];
var _hoisted_66 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
var _hoisted_67 = {
  "class": "mb-2"
};
var _hoisted_68 = {
  "class": "mb-2"
};
var _hoisted_69 = {
  "for": "clear_old_files"
};
var _hoisted_70 = {
  "class": "mb-2"
};
var _hoisted_71 = ["disabled"];
var _hoisted_72 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
var _hoisted_73 = {
  "class": "form-text text-muted"
};
var _hoisted_74 = {
  key: 0,
  "class": "mb-2"
};
var _hoisted_75 = ["disabled"];
var _hoisted_76 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
var _hoisted_77 = ["disabled"];
var _hoisted_78 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
var _hoisted_79 = {
  "data-vv-scope": "purchase_code_form"
};
var _hoisted_80 = ["innerHTML"];
var _hoisted_81 = {
  "class": "form-group"
};
var _hoisted_82 = {
  "for": "purchase_code"
};
var _hoisted_83 = ["placeholder"];
var _hoisted_84 = ["disabled"];
var _hoisted_85 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_modalcomponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modalcomponent");
  var _directive_validate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("validate");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submit_form && $options.submit_form.apply($options, arguments);
    }, ["prevent"])),
    "class": "mb-3"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Edit App Setting")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn btn-primary",
    disabled: $data.processing == true
  }, [$data.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Save")), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_7)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    innerHTML: $data.server_errors,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.error_class])
  }, null, 10 /* CLASS, PROPS */, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Company Name")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "company_name",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.company_name = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.('Please enter Company Name'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_13), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.company_name], [_directive_validate, 'required|max:250']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('company_name')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('company_name')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("App Title")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "app_title",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.app_title = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.('Please enter App Title'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_16), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_title], [_directive_validate, 'required|max:250']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('app_title')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('app_title')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("App Timezone")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
    name: "app_timezone",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.app_timezone = $event;
    }),
    "class": "form-control form-control-custom custom-select"
  }, [_cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: ""
  }, "Choose App Timezone..", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.timezones, function (timezone, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: timezone,
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(timezone), 9 /* TEXT, PROPS */, _hoisted_19);
  }), 128 /* KEYED_FRAGMENT */))])), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.app_timezone], [_directive_validate, 'required']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('app_timezone')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('app_timezone')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Date Time format")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
    name: "app_date_time_format",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.app_date_time_format = $event;
    }),
    "class": "form-control form-control-custom custom-select"
  }, [_cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: ""
  }, "Choose Date Time format..", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.date_time_formats, function (date_time_format, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: date_time_format.date_format_value,
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(date_time_format.date_format_label), 9 /* TEXT, PROPS */, _hoisted_22);
  }), 128 /* KEYED_FRAGMENT */))])), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.app_date_time_format], [_directive_validate, 'required']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('app_date_time_format')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('app_date_time_format')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Date Format")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
    name: "app_date_format",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.app_date_format = $event;
    }),
    "class": "form-control form-control-custom custom-select"
  }, [_cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: ""
  }, "Choose Date Format..", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.date_formats, function (date_format, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: date_format.date_format_value,
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(date_format.date_format_label), 9 /* TEXT, PROPS */, _hoisted_25);
  }), 128 /* KEYED_FRAGMENT */))])), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.app_date_format], [_directive_validate, 'required']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('app_date_format')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('app_date_format')), 3 /* TEXT, CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Company Logo (jpeg, jpg, png)")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_29, null, 512 /* NEED_PATCH */), [[_directive_validate, 'ext:jpg,jpeg,png|size:150']]), _cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
    "class": "form-text text-muted"
  }, "Allowed file size is max 150KB", -1 /* HOISTED */)), _cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
    "class": "form-text text-muted"
  }, "Optional: Recommended image height is 40px", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('company_logo')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('company_logo')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Current Company Logo")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.company_logo,
    "class": "company-logo-image"
  }, null, 8 /* PROPS */, _hoisted_33), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "btn-label ml-3",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.remove_logo('company_logo');
    })
  }, "Remove", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.company_logo_exists == true]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Invoice Print Logo (jpeg, jpg, png)")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_37, null, 512 /* NEED_PATCH */), [[_directive_validate, 'ext:jpg,jpeg,png|dimensions:200,100|size:150']]), _cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
    "class": "form-text text-muted"
  }, "Allowed file size is max 150KB and dimensions must be 200px x 100px", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('invoice_print_logo')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('invoice_print_logo')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Current Invoice Print Logo")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.invoice_print_logo,
    "class": "company-logo-image"
  }, null, 8 /* PROPS */, _hoisted_41), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "btn-label ml-3",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.remove_logo('invoice_print_logo');
    })
  }, "Remove", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.invoice_print_logo_exists == true]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Top Navbar Logo (jpeg, jpg, png)")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_45, null, 512 /* NEED_PATCH */), [[_directive_validate, 'ext:jpg,jpeg,png|dimensions:30,30|size:50']]), _cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
    "class": "form-text text-muted"
  }, "Allowed file size is max 50KB and dimensions must be 30px x 30px", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('navbar_logo')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('navbar_logo')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Current Top Navbar Logo")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.navbar_logo,
    "class": "company-logo-image"
  }, null, 8 /* PROPS */, _hoisted_49), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "btn-label ml-3",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.remove_logo('navbar_logo');
    })
  }, "Remove", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.navbar_logo_exists == true]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Favicon (jpeg, jpg, png)")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_53, null, 512 /* NEED_PATCH */), [[_directive_validate, 'ext:jpg,jpeg,png|dimensions:30,30|size:10']]), _cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
    "class": "form-text text-muted"
  }, "Allowed file size is max 10KB and dimensions must be 30px x 30px", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('favicon')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('favicon')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Current Favicon")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.favicon,
    "class": "company-logo-image"
  }, null, 8 /* PROPS */, _hoisted_57), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "btn-label ml-3",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.remove_logo('favicon');
    })
  }, "Remove", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.favicon_exists == true]])])])]), _cache[32] || (_cache[32] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Cache and Storage")), 1 /* TEXT */)]), _cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": ""
  }, null, -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Clear Cache")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-outline-primary",
    disabled: $data.clear_cache_processing == true,
    onClick: _cache[9] || (_cache[9] = function () {
      return $options.clear_cache && $options.clear_cache.apply($options, arguments);
    })
  }, [$data.clear_cache_processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_66)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Clear App Cache"))], 8 /* PROPS */, _hoisted_65)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Clear Old Files From Storage")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-outline-primary",
    disabled: $data.clear_storage_processing == true,
    onClick: _cache[10] || (_cache[10] = function () {
      return $options.clear_storage && $options.clear_storage.apply($options, arguments);
    })
  }, [$data.clear_storage_processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_72)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Clear Old Files"))], 8 /* PROPS */, _hoisted_71)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", _hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("This option will delete files (older than 3 days) from reports and order stroage folder")), 1 /* TEXT */)]), _cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */)), $props.deactivation_eligible == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-outline-danger",
    disabled: $data.deactivate_processing == true,
    onClick: _cache[11] || (_cache[11] = function () {
      return $options.deactivate_product && $options.deactivate_product.apply($options, arguments);
    })
  }, [$data.deactivate_processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_76)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[31] || (_cache[31] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Deactivate Product"))], 8 /* PROPS */, _hoisted_75)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32 /* NEED_HYDRATION */)]), $data.show_modal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_modalcomponent, {
    key: 0,
    onClose: _cache[15] || (_cache[15] = function ($event) {
      return $data.show_modal = false;
    })
  }, {
    "modal-header": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[34] || (_cache[34] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Confirm ")]);
    }),
    "modal-body": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[35] || (_cache[35] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Are you sure you want to proceed? ")]);
    }),
    "modal-footer": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-light",
        onClick: _cache[13] || (_cache[13] = function ($event) {
          return _ctx.$emit('close');
        })
      }, "Cancel"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-primary",
        onClick: _cache[14] || (_cache[14] = function ($event) {
          return _ctx.$emit('submit');
        }),
        disabled: $data.processing == true
      }, [$data.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_78)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[36] || (_cache[36] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Continue"))], 8 /* PROPS */, _hoisted_77)];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.show_deactivation_modal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_modalcomponent, {
    key: 1,
    onClose: _cache[19] || (_cache[19] = function ($event) {
      return $data.show_deactivation_modal = false;
    })
  }, {
    "modal-header": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[37] || (_cache[37] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Deactivate Product ")]);
    }),
    "modal-body": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        innerHTML: $data.purchase_code_server_errors,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.purchase_code_error_class])
      }, null, 10 /* CLASS, PROPS */, _hoisted_80), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Purchase Code")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        name: "purchase_code",
        "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
          return $data.purchase_code = $event;
        }),
        "class": "form-control form-control-custom",
        placeholder: _ctx.('Please enter Purchase Code'),
        autocomplete: "off"
      }, null, 8 /* PROPS */, _hoisted_83), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.purchase_code], [_directive_validate, 'required|max:200']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'error': _ctx.errors.has('purchase_code_form.purchase_code')
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('purchase_code_form.purchase_code')), 3 /* TEXT, CLASS */)])])];
    }),
    "modal-footer": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-light",
        onClick: _cache[17] || (_cache[17] = function () {
          return $options.deactivate_cancel && $options.deactivate_cancel.apply($options, arguments);
        })
      }, "Cancel"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-primary",
        onClick: _cache[18] || (_cache[18] = function () {
          return $options.deactivate_proceed && $options.deactivate_proceed.apply($options, arguments);
        }),
        disabled: $data.processing == true
      }, [$data.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_85)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[38] || (_cache[38] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Continue"))], 8 /* PROPS */, _hoisted_84)];
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

/***/ "./resources/assets/js/components/setting/app/edit_app_setting_component.vue":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/setting/app/edit_app_setting_component.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_app_setting_component_vue_vue_type_template_id_2964c842__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_app_setting_component.vue?vue&type=template&id=2964c842 */ "./resources/assets/js/components/setting/app/edit_app_setting_component.vue?vue&type=template&id=2964c842");
/* harmony import */ var _edit_app_setting_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_app_setting_component.vue?vue&type=script&lang=js */ "./resources/assets/js/components/setting/app/edit_app_setting_component.vue?vue&type=script&lang=js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_edit_app_setting_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_edit_app_setting_component_vue_vue_type_template_id_2964c842__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/js/components/setting/app/edit_app_setting_component.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/js/components/setting/app/edit_app_setting_component.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/setting/app/edit_app_setting_component.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_app_setting_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_app_setting_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./edit_app_setting_component.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/app/edit_app_setting_component.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/setting/app/edit_app_setting_component.vue?vue&type=template&id=2964c842":
/*!*****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/setting/app/edit_app_setting_component.vue?vue&type=template&id=2964c842 ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_app_setting_component_vue_vue_type_template_id_2964c842__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_app_setting_component_vue_vue_type_template_id_2964c842__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./edit_app_setting_component.vue?vue&type=template&id=2964c842 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/setting/app/edit_app_setting_component.vue?vue&type=template&id=2964c842");


/***/ })

}]);