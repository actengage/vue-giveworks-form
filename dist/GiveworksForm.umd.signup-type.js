((typeof self !== 'undefined' ? self : this)["webpackJsonpGiveworksForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpGiveworksForm"] || []).push([[8],{

/***/ "0dce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"435ea22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Types/Signup.vue?vue&type=template&id=46c83313&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c(_vm.page.options.service.split('\\').pop(),{tag:"component",attrs:{"submitting":_vm.submitting,"page":_vm.page,"form":_vm.form,"errors":_vm.errors}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Types/Signup.vue?vue&type=template&id=46c83313&

// EXTERNAL MODULE: ./src/Mixins/PageType.js
var PageType = __webpack_require__("b791");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Types/Signup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var Signupvue_type_script_lang_js_ = ({
  name: 'page-type-signup',
  extends: PageType["a" /* default */],
  components: {
    GoToWebinar: __webpack_require__.e(/* import() | go-to-webinar */ 6).then(__webpack_require__.bind(null, "4898"))
  }
});
// CONCATENATED MODULE: ./src/Components/Types/Signup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_Signupvue_type_script_lang_js_ = (Signupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/Components/Types/Signup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Types_Signupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Signup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b236":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue_interface_src_Helpers_Functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ca14");

const EVENTS = ['submit', 'redirect', 'submit-enable', 'submit-disable', 'submit-show', 'submit-hide'];
/* harmony default export */ __webpack_exports__["a"] = ({
  directives: {
    bindEvents: {
      bind(el, binding, vnode) {
        const context = vnode.context;
        const subject = vnode.child || vnode.context;

        for (const i in EVENTS) {
          subject.$on(EVENTS[i], (...args) => {
            const method = Object(vue_interface_src_Helpers_Functions__WEBPACK_IMPORTED_MODULE_0__[/* camelCase */ "a"])('on-' + EVENTS[i]);

            if (subject !== context) {
              context.$emit(EVENTS[i], ...args);
            }

            if (context[method]) {
              context[method](...args);
            }
          });
        }
      }

    }
  }
});

/***/ }),

/***/ "b791":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Models_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("850f");
/* harmony import */ var _FormEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b236");
/* harmony import */ var vue_interface_src_Helpers_Functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ca14");



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    source: [String, Number],
    redirect: [Boolean, String],
    httpOptions: Object,
    page: {
      type: Object,
      required: true
    }
  },
  mixins: [_FormEvents__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]],
  computed: {
    buttonLabel() {
      return this.page.options.button;
    },

    shouldShowEmployment() {
      return this.page.site.type === 'PAC' || this.page.site.type === 'Campaign';
    }

  },
  methods: {
    submitButton() {
      return this.$refs.submit ? this.$refs.submit.$el : this.$el.querySelector('[type=submit]');
    },

    hideSubmitButton() {
      this.submitButton().style.display = 'none';
    },

    showSubmitButton() {
      this.submitButton().style.display = 'block';
    },

    disableSubmitButton() {
      this.submitButton().disabled = true;
    },

    enableSubmitButton() {
      this.submitButton().disabled = false;
    },

    handleRedirect(url) {
      setTimeout(() => {
        url = url || this.redirect || this.page.external_reply;

        if (!url && this.page.next_page) {
          url = this.page.next_page.url.replace(/\/$/, '') + (this.form.source ? '/' + this.form.source : '');
        }

        if (url) {
          window.location = url;
        }
      });
    },

    submit(success, failed) {
      if (this.$el.querySelector(':focus')) {
        this.$el.querySelector(':focus').blur();
      }

      return new Promise((resolve, reject) => {
        if (!this.submitting) {
          this.errors = {};
          this.submitting = true;
          this.$emit('submit');
          this.model.save(this.form, Object.assign({
            method: 'post'
          }, this.httpOptions)).then(response => {
            this.submitting = false;
            this.$emit('submit-complete', true, response);
            this.$emit('submit-success', response);

            if (Object(vue_interface_src_Helpers_Functions__WEBPACK_IMPORTED_MODULE_2__[/* isFunction */ "i"])(success)) {
              success(response);
            }

            resolve(response);
          }, response => {
            this.submitting = false;
            this.errors = response.data.errors;
            this.$emit('submit-complete', true, response);
            this.$emit('submit-success', response);

            if (Object(vue_interface_src_Helpers_Functions__WEBPACK_IMPORTED_MODULE_2__[/* isFunction */ "i"])(failed)) {
              failed(response);
            }

            reject(response);
          });
        } else {
          reject(new Error('The form is already submitting'));
        }
      });
    },

    onSubmitSuccess() {
      this.handleRedirect();
    },

    onSubmitError(e) {
      throw e;
    }

  },

  mounted() {
    this.loaded = true;
  },

  data() {
    const recurring = this.page.site.recurring ? this.page.options.recurring_only ? 1 : 0 : 0;
    return {
      form: {
        source: this.source,
        recurring: recurring
      },
      errors: {},
      loaded: false,
      submitting: false,
      model: new _Models_Page__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]({
        id: this.page.id
      })
    };
  }

});

/***/ })

}]);
//# sourceMappingURL=GiveworksForm.umd.signup-type.js.map