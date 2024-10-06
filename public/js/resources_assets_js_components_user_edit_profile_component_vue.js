"use strict";
(self["webpackChunkfinal_main"] = self["webpackChunkfinal_main"] || []).push([["resources_assets_js_components_user_edit_profile_component_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/user/edit_profile_component.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/user/edit_profile_component.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      basic_profile_form: {
        server_errors: '',
        error_class: '',
        processing: false
      },
      password_form: {
        server_errors: '',
        error_class: '',
        processing: false
      },
      slack: this.user.slack,
      email: this.user.email,
      fullname: this.user.fullname,
      phone: this.user.phone,
      current_password: '',
      new_password: '',
      new_password_confirmation: '',
      profile_image_exists: this.user.profile_image != null && this.user.profile_image != '' ? true : false,
      profile_image: this.user.profile_image_path
    };
  },
  props: {
    user: [Array, Object]
  },
  mounted: function mounted() {
    console.log('Edit profile page loaded');
  },
  methods: {
    update_basic_profile: function update_basic_profile(scope) {
      var _this = this;
      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          _this.basic_profile_form.processing = true;
          var formData = new FormData();
          formData.append("access_token", window.settings.access_token);
          formData.append("fullname", _this.fullname == null ? '' : _this.fullname);
          formData.append("email", _this.email == null ? '' : _this.email);
          formData.append("phone", _this.phone == null ? '' : _this.phone);
          axios.post('/api/update_basic_profile', formData).then(function (response) {
            if (response.data.status_code == 200) {
              _this.show_response_message(response.data.msg, 'SUCCESS');
              setTimeout(function () {
                location.reload();
              }, 1000);
            } else {
              _this.basic_profile_form.processing = false;
              try {
                var error_json = JSON.parse(response.data.msg);
                _this.basic_profile_form.server_errors = _this.loop_api_errors(error_json);
              } catch (err) {
                _this.basic_profile_form.server_errors = response.data.msg;
              }
              _this.basic_profile_form.error_class = 'error';
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    update_password: function update_password(scope) {
      var _this2 = this;
      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          _this2.password_form.processing = true;
          var formData = new FormData();
          formData.append("access_token", window.settings.access_token);
          formData.append("current_password", _this2.current_password == null ? '' : _this2.current_password);
          formData.append("new_password", _this2.new_password == null ? '' : _this2.new_password);
          formData.append("new_password_confirmation", _this2.new_password_confirmation == null ? '' : _this2.new_password_confirmation);
          axios.post('/api/update_password', formData).then(function (response) {
            if (response.data.status_code == 200) {
              _this2.show_response_message(response.data.msg, 'SUCCESS');
              setTimeout(function () {
                location.reload();
              }, 1000);
            } else {
              _this2.password_form.processing = false;
              try {
                var error_json = JSON.parse(response.data.msg);
                _this2.password_form.server_errors = _this2.loop_api_errors(error_json);
              } catch (err) {
                _this2.password_form.server_errors = response.data.msg;
              }
              _this2.password_form.error_class = 'error';
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    update_profile_image: function update_profile_image() {
      var _this3 = this;
      var file = this.$refs.file_selector.files[0];
      var formData = new FormData();
      formData.append("access_token", window.settings.access_token);
      formData.append("profile_photo", file);
      axios.post('/api/update_profile_image', formData).then(function (response) {
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
    remove_profile_image: function remove_profile_image() {
      var _this4 = this;
      var formData = new FormData();
      formData.append("access_token", window.settings.access_token);
      axios.post('/api/remove_profile_image', formData).then(function (response) {
        _this4.processing = false;
        if (response.data.status_code == 200) {
          location.reload();
        } else {
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/user/edit_profile_component.vue?vue&type=template&id=2436bc6f":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/user/edit_profile_component.vue?vue&type=template&id=2436bc6f ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "d-flex"
};
var _hoisted_7 = ["src"];
var _hoisted_8 = {
  "class": "ml-3 align-self-center"
};
var _hoisted_9 = {
  "class": "text-subhead-bold"
};
var _hoisted_10 = ["innerHTML"];
var _hoisted_11 = {
  "class": "d-flex flex-wrap mb-1"
};
var _hoisted_12 = {
  "class": "mr-auto"
};
var _hoisted_13 = {
  "class": "text-subhead"
};
var _hoisted_14 = {
  "class": ""
};
var _hoisted_15 = ["disabled"];
var _hoisted_16 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
var _hoisted_17 = ["innerHTML"];
var _hoisted_18 = {
  "class": "form-row mb-2"
};
var _hoisted_19 = {
  "class": "form-group col-md-3"
};
var _hoisted_20 = {
  "for": "fullname"
};
var _hoisted_21 = ["placeholder"];
var _hoisted_22 = {
  "class": "form-group col-md-3"
};
var _hoisted_23 = {
  "for": "email"
};
var _hoisted_24 = ["placeholder"];
var _hoisted_25 = {
  "class": "form-group col-md-3"
};
var _hoisted_26 = {
  "for": "phone"
};
var _hoisted_27 = ["placeholder"];
var _hoisted_28 = {
  "class": "d-flex flex-wrap mb-1"
};
var _hoisted_29 = {
  "class": "mr-auto"
};
var _hoisted_30 = {
  "class": "text-subhead"
};
var _hoisted_31 = {
  "class": ""
};
var _hoisted_32 = ["disabled"];
var _hoisted_33 = {
  key: 0,
  "class": "fa fa-circle-notch fa-spin"
};
var _hoisted_34 = ["innerHTML"];
var _hoisted_35 = {
  "class": "form-row mb-2"
};
var _hoisted_36 = {
  "class": "form-group col-md-3"
};
var _hoisted_37 = {
  "for": "password"
};
var _hoisted_38 = ["placeholder"];
var _hoisted_39 = {
  "class": "form-group col-md-3"
};
var _hoisted_40 = {
  "for": "password"
};
var _hoisted_41 = ["placeholder"];
var _hoisted_42 = {
  "class": "form-group col-md-3"
};
var _hoisted_43 = {
  "for": "password"
};
var _hoisted_44 = ["placeholder"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_validate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("validate");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Edit Profile")), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.update_profile_photo();
    }, ["prevent"])),
    "class": "mb-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.profile_image,
    "class": "rounded-circle profile-image-large"
  }, null, 8 /* PROPS */, _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    onChange: _cache[0] || (_cache[0] = function () {
      return $options.update_profile_image && $options.update_profile_image.apply($options, arguments);
    }),
    ref: "file_selector",
    accept: "image/x-png,image/jpeg",
    hidden: ""
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.fullname), 1 /* TEXT */), _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "btn-label",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$refs.file_selector.click();
    })
  }, "Change photo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "btn-label ml-3",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.remove_profile_image();
    })
  }, "Remove", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.profile_image_exists == true]])])])], 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    innerHTML: $data.server_errors,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.error_class])
  }, null, 10 /* CLASS, PROPS */, _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.update_basic_profile('basic_profile_form');
    }, ["prevent"])),
    "data-vv-scope": "basic_profile_form",
    "class": "mb-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Basic Information")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn btn-primary",
    disabled: $data.basic_profile_form.processing == true
  }, [$data.basic_profile_form.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Save")), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_15)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    innerHTML: $data.basic_profile_form.server_errors,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.basic_profile_form.error_class])
  }, null, 10 /* CLASS, PROPS */, _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Fullname")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "fullname",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.fullname = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.('Please enter fullname'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_21), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.fullname], [_directive_validate, 'required|max:250']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('basic_profile_form.fullname')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('basic_profile_form.fullname')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Email")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "email",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.email = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.('Please enter email'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_24), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email], [_directive_validate, 'required|email|max:150']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('basic_profile_form.email')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('basic_profile_form.email')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Contact No.")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "phone",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.phone = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.('Please enter Contact Number'),
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_27), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.phone], [_directive_validate, 'required|min:10|max:15']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('basic_profile_form.phone')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('basic_profile_form.phone')), 3 /* TEXT, CLASS */)])])], 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.update_password('password_form');
    }, ["prevent"])),
    "data-vv-scope": "password_form",
    "class": "mb-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Change Password")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn btn-primary",
    disabled: $data.password_form.processing == true
  }, [$data.password_form.processing == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_33)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Save")), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_32)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    innerHTML: $data.password_form.server_errors,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.password_form.error_class])
  }, null, 10 /* CLASS, PROPS */, _hoisted_34), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Current Password")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    name: "current_password",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.current_password = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.('Please enter your current password')
  }, null, 8 /* PROPS */, _hoisted_38), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.current_password], [_directive_validate, 'required|alpha_dash|min:6|max:100']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('password_form.current_password')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('password_form.current_password')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("New Password")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    name: "new_password",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.new_password = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.('Please enter your new password')
  }, null, 8 /* PROPS */, _hoisted_41), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.new_password], [_directive_validate, 'required|alpha_dash|min:6|max:100']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('password_form.new_password')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('password_form.new_password')), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.("Re Enter New Password")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    name: "new_password_confirmation",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.new_password_confirmation = $event;
    }),
    "class": "form-control form-control-custom",
    placeholder: _ctx.('Please re enter your new password')
  }, null, 8 /* PROPS */, _hoisted_44), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.new_password_confirmation], [_directive_validate, 'required|alpha_dash|min:6|max:100']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'error': _ctx.errors.has('password_form.new_password_confirmation')
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first('password_form.new_password_confirmation')), 3 /* TEXT, CLASS */)])])], 32 /* NEED_HYDRATION */)])]);
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

/***/ "./resources/assets/js/components/user/edit_profile_component.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/components/user/edit_profile_component.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_profile_component_vue_vue_type_template_id_2436bc6f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_profile_component.vue?vue&type=template&id=2436bc6f */ "./resources/assets/js/components/user/edit_profile_component.vue?vue&type=template&id=2436bc6f");
/* harmony import */ var _edit_profile_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_profile_component.vue?vue&type=script&lang=js */ "./resources/assets/js/components/user/edit_profile_component.vue?vue&type=script&lang=js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_final_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_edit_profile_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_edit_profile_component_vue_vue_type_template_id_2436bc6f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/assets/js/components/user/edit_profile_component.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/assets/js/components/user/edit_profile_component.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/user/edit_profile_component.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_profile_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_profile_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./edit_profile_component.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/user/edit_profile_component.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/user/edit_profile_component.vue?vue&type=template&id=2436bc6f":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/user/edit_profile_component.vue?vue&type=template&id=2436bc6f ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_profile_component_vue_vue_type_template_id_2436bc6f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_profile_component_vue_vue_type_template_id_2436bc6f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./edit_profile_component.vue?vue&type=template&id=2436bc6f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/user/edit_profile_component.vue?vue&type=template&id=2436bc6f");


/***/ })

}]);