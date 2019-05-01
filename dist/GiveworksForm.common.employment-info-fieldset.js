((typeof self !== 'undefined' ? self : this)["webpackJsonpGiveworksForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpGiveworksForm"] || []).push([[5],{

/***/ "33e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"00845329-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fieldsets/EmploymentInfoFieldset.vue?vue&type=template&id=40813e6e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fieldset',[(!_vm.form.recurring)?_c('p',[_c('small',{staticClass:"text-muted",domProps:{"innerHTML":_vm._s(_vm.employmentOccurMessage)}})]):_vm._e(),(!_vm.isRetired)?_c('input-field',{ref:"employer",attrs:{"id":"employer","name":"employer","label":"Employer","placeholder":"Employer","disabled":_vm.isRetired,"errors":_vm.errors,"custom":""},model:{value:(_vm.form.employer),callback:function ($$v) {_vm.$set(_vm.form, "employer", $$v)},expression:"form.employer"}}):_vm._e(),(!_vm.isRetired)?_c('input-field',{ref:"occupation",attrs:{"id":"occupation","name":"occupation","label":"Occupation","placeholder":"Occupation","disabled":_vm.isRetired,"errors":_vm.errors,"custom":""},model:{value:(_vm.form.occupation),callback:function ($$v) {_vm.$set(_vm.form, "occupation", $$v)},expression:"form.occupation"}}):_vm._e(),_c('checkbox-field',{attrs:{"label":"I'm retired","value":"1","custom":""},model:{value:(_vm.form.retired),callback:function ($$v) {_vm.$set(_vm.form, "retired", $$v)},expression:"form.retired"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Fieldsets/EmploymentInfoFieldset.vue?vue&type=template&id=40813e6e&

// EXTERNAL MODULE: ./src/Mixins/FormComponent.js
var FormComponent = __webpack_require__("bb4b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fieldsets/EmploymentInfoFieldset.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var EmploymentInfoFieldsetvue_type_script_lang_js_ = ({
  name: 'employment-info-fieldset',
  mixins: [FormComponent["a" /* default */]],
  props: {
    legends: {
      type: Boolean,
      default: true
    }
  },
  components: {
    InputField: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "46d8")),
    CheckboxField: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "e067"))
  },
  watch: {
    'form.retired': function (value) {
      if (value && value.length) {
        this.form.employer = this.form.occupation = 'Retired';
      } else {
        this.form.employer = this.form.occupation = '';
      }
    }
  },
  computed: {
    isRetired() {
      return !!(this.form.retired && this.form.retired.length);
    },

    employmentOccurMessage() {
      return this.page.site.emp_occ_msg || this.page.site.config.giveworks.emp_occ_msg;
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Fieldsets/EmploymentInfoFieldset.vue?vue&type=script&lang=js&
 /* harmony default export */ var Fieldsets_EmploymentInfoFieldsetvue_type_script_lang_js_ = (EmploymentInfoFieldsetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/Components/Fieldsets/EmploymentInfoFieldset.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Fieldsets_EmploymentInfoFieldsetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EmploymentInfoFieldset = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "bb4b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _FormEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b236");

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    page: {
      type: Object,
      required: true
    },
    form: {
      type: Object
    },
    errors: {
      type: [Boolean, Object],
      required: true
    }
  },
  mixins: [_FormEvents__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]],
  computed: {
    commentMessage() {
      return this.page.options.comment_message || this.page.site.config.giveworks.comment_mess;
    },

    optinMessage() {
      return this.page.options.optin_message || this.page.site.config.giveworks.optin_mess;
    },

    buttonLabel() {
      return this.page.options.button;
    }

  }
});

/***/ })

}]);
//# sourceMappingURL=GiveworksForm.common.employment-info-fieldset.js.map