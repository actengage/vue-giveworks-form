((typeof self !== 'undefined' ? self : this)["webpackJsonpGiveworksForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpGiveworksForm"] || []).push([[4],{

/***/ "0809":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPal; });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2953");
/* harmony import */ var vue_interface_src_Helpers_Script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cfc3");


class PayPal extends _Api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
  api() {
    return 'App\\SiteApis\\Gateways\\PayPal';
  }

  buttons() {
    return [{
      icon: ['fab', 'paypal'],
      label: 'PayPal',
      component: 'paypal-payment-button'
    }];
  }

  paypal() {
    if (!this._paypal) {
      this._paypal = window.paypal;
    }

    return this._paypal;
  }

  button(el, context) {
    return this.paypal().Button.render({
      env: process.ENV === 'production' ? 'production' : 'sandbox',
      locale: 'en_US',
      client: {
        sandbox: this.options.client_id
      },
      style: {
        shape: 'rect',
        size: 'responsive'
      },
      commit: false,
      payment: function (data, actions) {
        return actions.payment.create({
          payment: {
            transactions: [{
              amount: {
                total: context.form.amount,
                currency: 'USD'
              }
            }]
          },
          experience: {
            input_fields: {
              no_shipping: 1
            }
          }
        });
      },
      validate: context.onPaypalValidate,
      onRender: context.onPaypalRender,
      onClick: context.onPaypalClick,
      onCancel: context.onPaypalCancel,
      onError: context.onPaypalError,
      onAuthorize: context.onPaypalAuthorize
    }, el);
  }

  script(success, error) {
    Object(vue_interface_src_Helpers_Script__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('https://www.paypalobjects.com/api/checkout.js').then(success, error);
  }

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("f28c")))

/***/ }),

/***/ "1355":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2953":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gateway; });
class Gateway {
  constructor(options) {
    this.options = options;

    if (!this.options) {
      throw new Error('A gateway must have some options passed to it!');
    }
  }

}

/***/ }),

/***/ "9ceb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d45c8cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Types/Donation.vue?vue&type=template&id=02388d50&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('select-donation-fieldset',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page}}),_c('contact-info-fieldset',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page,"address":""}}),_c('hr'),(_vm.shouldShowEmployment)?[_c('employment-info-fieldset',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page}}),_c('hr')]:_vm._e(),(_vm.$refs.submit)?_c('payment-gateways',{attrs:{"page-type":this,"form":_vm.form,"errors":_vm.errors,"page":_vm.page}}):_vm._e(),(_vm.page.options.add_comment)?_c('textarea-field',{directives:[{name:"autogrow",rawName:"v-autogrow"}],attrs:{"id":"comment","label":_vm.commentMessage},model:{value:(_vm.form.comment),callback:function ($$v) {_vm.$set(_vm.form, "comment", $$v)},expression:"form.comment"}}):_vm._e(),_c('btn-activity',{ref:"submit",attrs:{"type":"submit","size":"lg","activity":_vm.submitting,"label":_vm.buttonLabel || _vm.page.site.config.giveworks.button.donate,"block":""}}),(_vm.page.options.add_optin)?_c('div',[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.optin),expression:"form.optin"}],staticClass:"custom-control-input",attrs:{"type":"checkbox","checked":""},domProps:{"checked":Array.isArray(_vm.form.optin)?_vm._i(_vm.form.optin,null)>-1:(_vm.form.optin)},on:{"change":function($event){var $$a=_vm.form.optin,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.form, "optin", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.form, "optin", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.form, "optin", $$c)}}}}),_c('span',{staticClass:"custom-control-indicator"}),_c('small',{staticClass:"custom-control-label text-muted form-text",domProps:{"innerHTML":_vm._s(_vm.optinMessage)}})])]):_vm._e(),(_vm.page.site.disclaimer)?_c('div',{staticClass:"mt-3"},[_c('small',{staticClass:"text-muted",domProps:{"innerHTML":_vm._s(_vm.page.site.disclaimer)}})]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Types/Donation.vue?vue&type=template&id=02388d50&

// EXTERNAL MODULE: ./src/Mixins/PageType.js
var PageType = __webpack_require__("b791");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d45c8cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/PaymentGateways.vue?vue&type=template&id=35582736&
var PaymentGatewaysvue_type_template_id_35582736_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.buttons.length > 1)?_c('div',{staticClass:"payment-gateway-buttons"},_vm._l((_vm.buttons),function(button,i){return _c('btn',{key:i,class:{'btn-success': button.active, 'btn-secondary': !button.active},attrs:{"type":"button"},on:{"click":function($event){return _vm.activate(button)}}},[_c('icon',{class:{'mt-2 mb-1': !button.label},attrs:{"icon":typeof button.icon === 'string' ? ['far', button.icon]: button.icon,"size":button.size || 'lg'}}),(button.label)?_c('div',{staticClass:"small",domProps:{"innerHTML":_vm._s(button.label)}}):_vm._e()],1)}),1):_vm._e(),(!_vm.buttons || !_vm.buttons.length)?_c('alert',{staticClass:"d-flex align-items-center",attrs:{"variant":"danger"}},[_c('icon',{staticClass:"mr-2",attrs:{"icon":"exclamation-triangle","size":"2x"}}),_c('div',[_vm._v("There are not payment gateways configured for this site!")])],1):_vm._e(),(_vm.activeButton)?_c(_vm.activeButton.component,{tag:"component",attrs:{"form":_vm.form,"page":_vm.page,"errors":_vm.errors,"page-type":_vm.pageType,"gateway":_vm.activeButton.gateway}}):_vm._e()],1)}
var PaymentGatewaysvue_type_template_id_35582736_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Gateways/PaymentGateways.vue?vue&type=template&id=35582736&

// EXTERNAL MODULE: ./src/Components/Gateways/Api.js
var Api = __webpack_require__("2953");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Script/index.js + 1 modules
var Script = __webpack_require__("cfc3");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/index.js + 32 modules
var Functions = __webpack_require__("ca14");

// CONCATENATED MODULE: ./src/Components/Gateways/Stripe/Stripe.js



class Stripe_Stripe extends Api["a" /* default */] {
  api() {
    return 'App\\SiteApis\\Gateways\\Stripe';
  }

  buttons() {
    return [{
      icon: ['far', 'credit-card'],
      label: 'Credit Card',
      size: '2x',
      component: 'stripe-credit-card'
      /*
      , {
         icon: ['fab', 'apple-pay'],
         size: '3x',
         component: 'stripe-payment-button'
      }, {
         icon: ['fab', 'google-wallet'],
         label: 'Wallet',
         size: '2x',
         component: 'stripe-payment-button'
      }
      */

    }];
  }

  paymentRequest(amount, label) {
    return this.stripe().paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: label,
        amount: amount
      }
    });
  }

  createToken(card, options) {
    return this.stripe().createToken(card, options);
  }

  paymentRequestButton(paymentRequest) {
    return this.elements().create('paymentRequestButton', {
      paymentRequest: paymentRequest,
      style: {
        paymentRequestButton: {
          type: 'donate',
          // 'default' | 'donate' | 'buy'
          theme: 'dark',
          // 'dark' | 'light' | 'light-outline'
          height: '51.60px' // default: '40px', the width is always '100%'

        }
      }
    });
  }

  card(options) {
    const style = {
      base: {
        color: '#32325d',
        lineHeight: '20px',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#b41327',
        iconColor: '#b41327'
      }
    };
    return this.elements().create('card', Object(Functions["e" /* extend */])({
      style: style
    }, options));
  }

  elements() {
    return this.stripe().elements();
  }

  stripe() {
    if (!this.options.publishable_key) {
      throw new Error('This site API was authenticated using an older version of Giveworks. To use new version of Giveworks you must setup your Stripe account again.');
    }

    return this._stripe || (this._stripe = new window.Stripe(this.options.publishable_key));
  }

  script(success, error) {
    Object(Script["a" /* default */])('https://js.stripe.com/v3/').then(success, error);
  }

}
// EXTERNAL MODULE: ./src/Components/Gateways/PayPal/PayPal.js
var PayPal = __webpack_require__("0809");

// CONCATENATED MODULE: ./src/Config/App.js
/* harmony default export */ var App = ({
  debug: "production" === 'development'
});
// CONCATENATED MODULE: ./src/Components/Gateways/AuthorizeNet/AuthorizeNet.js



class AuthorizeNet_AuthorizetNet extends Api["a" /* default */] {
  api() {
    return 'App\\SiteApis\\Gateways\\AuthorizeNet';
  }

  buttons() {
    return [{
      icon: ['far', 'credit-card'],
      label: 'Credit Card',
      component: 'authorize-net-credit-card'
    }];
  }

  createToken(card, callback) {
    return this.accept().dispatchData({
      cardData: card,
      authData: {
        apiLoginID: this.options.login_id,
        clientKey: this.options.public_key
      }
    }, callback);
  }

  accept() {
    if (!this._accept) {
      this._accept = window.Accept;
    }

    return this._accept;
  }

  script(success, error) {
    const url = App.debug // Is app in developer mode?
    ? 'https://jstest.authorize.net/v1/Accept.js' // Developer
    : 'https://js.authorize.net/v1/Accept.js'; // Production;

    Object(Script["a" /* default */])(url).then(success, error);
  }

}
// CONCATENATED MODULE: ./src/Components/Gateways/Gateway.js



const Gateways = {
  'PayPal': PayPal["a" /* default */],
  'Stripe': Stripe_Stripe,
  'Authorize.Net': AuthorizeNet_AuthorizetNet
};
const instances = {};
/* harmony default export */ var Gateway = (function (key, options) {
  if (typeof key === 'object') {
    options = key.options;
    key = key.name;
  }

  if (!instances[key]) {
    const Api = Gateways[key];

    if (!Api) {
      throw new Error('"' + key + '" is not in the list of supported gateways. Open /Gateways/Gateway.vue and add it to the list.');
    }

    instances[key] = new Api(options);
  }

  return instances[key];
});
// EXTERNAL MODULE: ./src/Mixins/FormComponent.js
var FormComponent = __webpack_require__("bb4b");

// EXTERNAL MODULE: ./node_modules/@fortawesome/vue-fontawesome/index.es.js
var index_es = __webpack_require__("ad3d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d45c8cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/Stripe/StripeCreditCard.vue?vue&type=template&id=c470c0ae&
var StripeCreditCardvue_type_template_id_c470c0ae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group",class:{'was-validated': !!_vm.error || !!_vm.errors.token}},[(!_vm.loaded)?_c('div',{staticClass:"row my-5 py-1"},[_c('div',{staticClass:"col-xs-12"},[_c('activity-indicator',{attrs:{"size":"sm","center":"","width":"100%"}})],1)]):_c('label',{staticClass:"d-block mt-3",class:{'has-activity': _vm.activity}},[_c('div',{staticClass:"stripe-field"},[_c('div',{staticClass:"form-control",class:{'is-invalid': !!_vm.error || !!_vm.errors.token}},[_c('div',{ref:"input",staticClass:"stripe-field-input"})]),(_vm.error || _vm.errors.token)?_c('div',{staticClass:"invalid-feedback",domProps:{"innerHTML":_vm._s(_vm.error || _vm.errors.token.join('<br>'))}}):_vm._e()]),_c('div',{staticClass:"stripe-field-activity"},[_c('activity-indicator',{attrs:{"size":"xs"}})],1)])])}
var StripeCreditCardvue_type_template_id_c470c0ae_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Gateways/Stripe/StripeCreditCard.vue?vue&type=template&id=c470c0ae&

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Wait/index.js + 1 modules
var Wait = __webpack_require__("7a4d");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Elapsed/index.js + 1 modules
var Elapsed = __webpack_require__("611e");

// EXTERNAL MODULE: ./node_modules/vue-credit-card-field/src/icons.js
var icons = __webpack_require__("6123");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faPaypal.js
var faPaypal = __webpack_require__("eb94");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faApplePay.js
var faApplePay = __webpack_require__("886b");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/faCheckCircle.js
var faCheckCircle = __webpack_require__("1698");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faGoogleWallet.js
var faGoogleWallet = __webpack_require__("859b");

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var fontawesome_svg_core_index_es = __webpack_require__("ecee");

// CONCATENATED MODULE: ./src/Config/Icons.js
// Load the icons




 // Load the font awesome library


fontawesome_svg_core_index_es["c" /* library */].add(faPaypal["faPaypal"], faApplePay["faApplePay"], faCheckCircle["faCheckCircle"], faGoogleWallet["faGoogleWallet"]);

// CONCATENATED MODULE: ./src/Mixins/PaymentGateway.js


/* harmony default export */ var PaymentGateway = ({
  components: {
    Icon: index_es["a" /* FontAwesomeIcon */],
    Btn: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "9719")),
    Alert: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "3259")),
    ActivityIndicator: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "a633"))
  },
  props: {
    page: {
      type: Object,
      required: true
    },
    pageType: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    errors: {
      type: Object,
      required: true
    },
    gateway: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/Stripe/StripeCreditCard.vue?vue&type=script&lang=js&
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
//
//
//
//




/* harmony default export */ var StripeCreditCardvue_type_script_lang_js_ = ({
  name: 'StripeCreditCard',
  mixins: [PaymentGateway],

  data() {
    return {
      error: null,
      loaded: false,
      activity: false
    };
  },

  mounted() {
    const gateway = Gateway(this.gateway);
    this.pageType.disableSubmitButton(); // this.$dispatch.request('submit:disable');

    gateway.script(event => {
      try {
        this.$card = gateway.card({
          hidePostalCode: this.hidePostalCode,
          value: {
            postalCode: this.form.zip
          }
        });
      } catch (e) {
        this.pageType.$emit('error', e);
      }

      this.$card.addEventListener('change', event => {
        this.errors.token = event.error ? [event.error.message] : null;

        if (event.complete) {
          // elapsed(500, (resolve, reject) => {
          gateway.createToken(this.$card, {
            currency: 'usd'
          }).then(result => {
            //wait(this.activity ? 750 : 0, (resolve, reject) => {
            if (result.error) {
              this.error = result.error.message; //reject(result.error.message);
            } else {
              this.form.token = result.token.id;
              this.pageType.enableSubmitButton(); //resolve(result);
            } //}).then(resolve, reject);

          });
          /*
          }, () => {
              this.activity = true;
          }).then(() => {
              this.activity = false;
          }, () => {
              this.activity = false;
          });
          */
        }
      });
      this.loaded = true;
      this.$nextTick(() => this.$card.mount(this.$refs.input));
    });
  }

});
// CONCATENATED MODULE: ./src/Components/Gateways/Stripe/StripeCreditCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Stripe_StripeCreditCardvue_type_script_lang_js_ = (StripeCreditCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/Components/Gateways/Stripe/StripeCreditCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Stripe_StripeCreditCardvue_type_script_lang_js_,
  StripeCreditCardvue_type_template_id_c470c0ae_render,
  StripeCreditCardvue_type_template_id_c470c0ae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StripeCreditCard = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d45c8cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/PayPal/PayPalPaymentButton.vue?vue&type=template&id=0da288bb&
var PayPalPaymentButtonvue_type_template_id_0da288bb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.loaded || _vm.submitting)?_c('div',{staticClass:"row my-5 py-1"},[_c('div',{staticClass:"col-xs-12"},[_c('activity-indicator',{attrs:{"size":"sm","center":true}})],1)]):_c('div',[(_vm.error)?_c('alert',{staticClass:"d-flex align-items-center",attrs:{"variant":"danger"}},[_c('icon',{staticClass:"mr-2",attrs:{"icon":"exclamation-triangle","size":"2x"}}),_c('div',{domProps:{"innerHTML":_vm._s(_vm.error)}})],1):(_vm.form.payerId && _vm.form.paymentId)?_c('alert',{staticClass:"d-flex align-items-center",attrs:{"variant":"success"}},[_c('icon',{staticClass:"mr-2",attrs:{"icon":['far', 'check-circle'],"size":"2x"}}),_c('div',[_vm._v("Your PayPal payment information has been collected and is ready to be processed. "),_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.removePaymentInfo($event)}}},[_vm._v("Cancel Payment")])])],1):_vm._e()],1),_c('div',{staticClass:"paypal-payment-button mt-2 mb-4",class:{'disabled': _vm.disabled, 'd-none': _vm.submitting}})])}
var PayPalPaymentButtonvue_type_template_id_0da288bb_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Gateways/PayPal/PayPalPaymentButton.vue?vue&type=template&id=0da288bb&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/PayPal/PayPalPaymentButton.vue?vue&type=script&lang=js&
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
//
//
//
//



function handleDisabledState(disable) {
  if (this.actions && !!disable) {
    this.actions.disable();
  } else if (this.actions && !disable) {
    this.actions.enable();
  }
}

/* harmony default export */ var PayPalPaymentButtonvue_type_script_lang_js_ = ({
  name: 'PaypalPaymentButton',
  mixins: [PaymentGateway],

  /*
  beforeDestroy() {
      if(this.$unwatchAmount) {
          this.$unwatchAmount();
      }
       if(this.$unwatchRecurring) {
          this.$unwatchRecurring();
      }
  },
  */
  data() {
    return {
      button: null,
      actions: null,
      loaded: false,
      submitting: false,
      disabled: !this.form.amount
    };
  },

  computed: {
    error: function () {
      const errors = [];

      if (this.errors.payerId) {
        errors.push(this.errors.payerId.join('<b>'));
      }

      if (this.errors.paymentId) {
        errors.push(this.errors.paymentId.join('<b>'));
      }

      return errors.length ? errors.join('<br>') : false;
    }
  },
  watch: {
    'form.recurring': function (value) {
      this.disabled =
      /*! !value || */
      !this.form.amount;
    },
    'form.amount': function (value) {
      this.disabled = !(this.button.amount = value); // || !!this.form.recurring;
    },
    'form.paymentId': function (value) {
      handleDisabledState.call(this, this.hasPaymentInfo());
    },
    'form.payerId': function (value) {
      handleDisabledState.call(this, this.hasPaymentInfo());
    },
    disabled: function (value) {
      handleDisabledState.call(this, !!value || this.hasPaymentInfo());
    }
  },

  updated() {
    if (this.shouldMountButton()) {
      this.button = Gateway(this.gateway).button('.paypal-payment-button', this);
      /*
      this.$dispatch.on('paypal:click', data => {
          if(this.hasPaymentInfo()) {
              this.$dispatch.request('form:submit');
          }
      });
       this.$dispatch.on('paypal:validate', actions => {
          if(this.form.recurring) {
              actions.disable();
          }
           if(this.$unwatchAmount) {
              this.$unwatchAmount();
          }
           this.$unwatchAmount = this.$watch('form.amount', value => {
              this.disabled = !(button.amount = value);
              actions[!this.form.recurring && value ? 'enable' : 'disable']();
          });
           if(this.$unwatchRecurring) {
              this.$unwatchRecurring();
          }
           this.$unwatchRecurring = this.$watch('form.recurring', value => {
              if(value) {
                  actions.disable();
              }
              else if(this.form.amount) {
                  actions.enable();
              }
          });
      });
       this.$dispatch.on('paypal:authorize', (data, actions) => {
          this.form.payerId = data.payerID;
          this.form.paymentId = data.paymentID;
          this.$dispatch.request('g');
          this.$dispatch.request('paypal:disable');
      });
      */
    }
  },

  beforeCreate() {// this.$prevFormSubmitReply = this.$dispatch.getReply('form:submit');

    /*
    this.$dispatch.reply('form:submit', (resolve, reject) => {
        if(this.hasPaymentInfo()) {
            this.$prevFormSubmitReply.handle(response => {
                if(response.data.recur) {
                    this.$dispatch.request('form:redirect', response.data.meta.redirect_url);
                }
                else {
                    resolve(response);
                }
            }, error => {
                reject(error);
            });
        }
    });
     this.$submitEvent = this.$dispatch.on('form:submit', data => {
        this.submitting = true;
    });
     this.$submitCompleteEvent = this.$dispatch.on('form:submit:error', response => {
        this.submitting = false;
    });
    */
  },

  mounted() {
    this.pageType.hideSubmitButton(); // this.$dispatch.request('submit:hide');

    Gateway(this.gateway).script(event => {
      this.loaded = true;
    });
  },

  methods: {
    hasError() {
      return this.errors.payerId || this.errors.paymentId;
    },

    hasPaymentInfo() {
      return !!this.form.amount && (this.form.recurring === 1 || !!(this.form.payerId && this.form.paymentId));
    },

    removePaymentInfo(event) {
      this.enable();
      this.$set(this.form, 'payerId', null);
      this.$set(this.form, 'paymentId', null);
      this.$set(this.errors, 'payerId', null);
      this.$set(this.errors, 'paymentId', null);
    },

    shouldMountButton() {
      return this.$el.querySelector('.paypal-payment-button') && !this.$el.querySelector('.paypal-payment-button iframe');
    },

    onSubmitError() {
      this.disabled = !this.form.amount;
    },

    onSubmitSuccess(model) {
      // this.disabled = false;
      if (model.get('recur')) {
        window.location = model.get('meta').redirect_url;
      }
    },

    onPaypalValidate(actions) {
      this.actions = actions;
      this.enable = actions.enable;
      this.disable = actions.disable;

      if (this.form.amount) {
        actions.enable();
      } else {
        actions.disable();
      }

      return !!this.form.amount;
    },

    onPaypalClick() {
      if (this.hasPaymentInfo()) {
        this.disabled = true;
        this.pageType.submit().then(this.pageType.onSubmitSuccess, this.pageType.onSubmitError).then(this.onSubmitSuccess, this.onSubmitError);
      }
    },

    onPaypalAuthorize(data) {
      if (!this.hasPaymentInfo()) {
        this.$set(this.form, 'payerId', data.payerID);
        this.$set(this.form, 'paymentId', data.paymentID);
        this.pageType.submit().then(this.pageType.onSubmitSuccess, this.pageType.onSubmitError).then(this.onSubmitSuccess, this.onSubmitError);
      }
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Gateways/PayPal/PayPalPaymentButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var PayPal_PayPalPaymentButtonvue_type_script_lang_js_ = (PayPalPaymentButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Gateways/PayPal/PayPalPaymentButton.vue?vue&type=style&index=0&lang=css&
var PayPalPaymentButtonvue_type_style_index_0_lang_css_ = __webpack_require__("ed48");

// CONCATENATED MODULE: ./src/Components/Gateways/PayPal/PayPalPaymentButton.vue






/* normalize component */

var PayPalPaymentButton_component = Object(componentNormalizer["a" /* default */])(
  PayPal_PayPalPaymentButtonvue_type_script_lang_js_,
  PayPalPaymentButtonvue_type_template_id_0da288bb_render,
  PayPalPaymentButtonvue_type_template_id_0da288bb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PayPalPaymentButton = (PayPalPaymentButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d45c8cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/Stripe/StripePaymentButton.vue?vue&type=template&id=0b41de22&
var StripePaymentButtonvue_type_template_id_0b41de22_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.error)?_c('div',[(_vm.card)?_c('div',{staticClass:"my-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-2"},[_c('div',{staticClass:"mr-6"},[(_vm.card.brand === 'Visa')?_c('icon',{attrs:{"icon":['fab', 'cc-visa'],"scale":"3.5"}}):(_vm.card.brand === 'MasterCard')?_c('icon',{attrs:{"icon":['fab', 'cc-mastercard'],"scale":"3.5"}}):(_vm.card.brand === 'American Express')?_c('icon',{attrs:{"icon":['fab', 'cc-amex'],"scale":"3.5"}}):(_vm.card.brand === 'Discover')?_c('icon',{attrs:{"icon":['fab', 'cc-discover'],"scale":"3.5"}}):(_vm.card.brand === 'JCB')?_c('icon',{attrs:{"icon":['fab', 'cc-jcb'],"scale":"3.5"}}):(_vm.card.brand === 'Diners Club')?_c('icon',{attrs:{"icon":['fab', 'cc-diners-club'],"scale":"3.5"}}):_c('icon',{attrs:{"icon":['far', 'credit-card'],"scale":"3.5"}})],1)]),_c('div',{staticClass:"col-xs-10"},[_c('div',{staticClass:"pl-2"},[_c('btn',{staticClass:"float-right",attrs:{"type":"button","variant":"warning","disabled":_vm.submitting},on:{"click":function($event){return _vm.changeCard($event)}}},[_vm._v("\n                            Change Card\n                        ")]),(_vm.card.name)?_c('span',[_vm._v(_vm._s(_vm.card.name)),_c('br')]):_vm._e(),_c('small',[_vm._v("****"+_vm._s(_vm.card.last4)+" "),_c('span',{staticClass:"pl-2"},[_vm._v(_vm._s(_vm.card.exp_month)+"/"+_vm._s(_vm.card.exp_year))])])],1)])])]):_vm._e(),(!_vm.loaded || _vm.submitting)?_c('div',{staticClass:"row my-5 py-1"},[_c('div',{staticClass:"col-xs-12"})]):_c('div',[_c('div',{staticClass:"stripe-payment-button mt-2 mb-4"})])]):_c('alert',{staticClass:"d-flex align-items-center",attrs:{"variant":"danger"}},[_c('icon',{staticClass:"mr-3",attrs:{"icon":"exclamation-triangle","size":"2x"}}),_c('div',{domProps:{"innerHTML":_vm._s(_vm.error.message)}})],1)],1)}
var StripePaymentButtonvue_type_template_id_0b41de22_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Gateways/Stripe/StripePaymentButton.vue?vue&type=template&id=0b41de22&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/Stripe/StripePaymentButton.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//


/* harmony default export */ var StripePaymentButtonvue_type_script_lang_js_ = ({
  name: 'StripePaymentButton',
  mixins: [PaymentGateway],

  data() {
    return {
      card: false,
      error: false,
      loaded: false,
      submitting: false,
      changingCard: false
    };
  },

  updated() {
    if (this.loaded && !this.submitting && !this.error) {
      try {
        this.$paymentRequestButton.mount(this.$el.querySelector('.stripe-payment-button'));
      } catch (error) {
        this.card = false;
        this.error = error;
        this.form.token = null;
      }
    }
  },

  beforeCreate() {
    this.pageType.$on('submit', this.onSubmit);
    this.pageType.$on('submit-complete', this.onSubmitComplete);
    /*
    this.$dispatch.request('form').then(form => {
        if(form.$card) {
            this.card = form.$card;
        }
    });
     this.$submitEvent = this.$dispatch.on('form:submit', (data) => {
        this.submitting = true;
    });
     this.$submitCompleteEvent = this.$dispatch.on('form:submit:complete', () => {
        this.submitting = false;
    });
    */
  },

  beforeDestroy() {
    this.pageType.$off('submit', this.onSubmit);
    this.pageType.$off('submit-complete', this.onSubmitComplete);
  },

  mounted() {
    const gateway = Gateway(this.gateway);
    this.pageType.hideSubmitButton(); // this.$dispatch.request('submit:hide');

    gateway.script(event => {
      this.$paymentRequest = gateway.paymentRequest(this.form.amount, this.getPaymentLabel());
      this.$paymentRequestButton = gateway.paymentRequestButton(this.$paymentRequest);
      this.$paymentRequestButton.on('click', event => {
        if (this.form.token) {
          this.pageType.submit(this.pageType.onSubmitSuccess, this.pageType.onSubmitError);
        }
      });
      this.$paymentRequest.on('cancel', event => {
        if (!this.changingCard) {
          this.card = false;
          this.form.token = null;
        } else {
          this.changingCard = false;
        }
      });
      this.$paymentRequest.on('token', event => {
        event.complete('success');
        this.card = event.token.card;
        this.form.token = event.token.id;

        if (!this.changingCard) {
          this.pageType.submit(this.pageType.onSubmitSuccess, this.pageType.onSubmitError); // this.$dispatch.request('form:submit');
        } else {
          this.changingCard = false;
        }
      });
      this.$paymentRequest.canMakePayment().then(api => {
        this.loaded = true;
      });
    });
  },

  methods: {
    changeCard: function (event) {
      this.changingCard = true;
      this.$paymentRequest.show();
    },
    getPaymentLabel: function () {
      return `Donation to ${this.page.site.name}`;
    },

    onSubmit() {
      this.submitting = true;
    },

    onSubmitComplete() {
      this.submitting = false;
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Gateways/Stripe/StripePaymentButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var Stripe_StripePaymentButtonvue_type_script_lang_js_ = (StripePaymentButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Gateways/Stripe/StripePaymentButton.vue





/* normalize component */

var StripePaymentButton_component = Object(componentNormalizer["a" /* default */])(
  Stripe_StripePaymentButtonvue_type_script_lang_js_,
  StripePaymentButtonvue_type_template_id_0b41de22_render,
  StripePaymentButtonvue_type_template_id_0b41de22_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StripePaymentButton = (StripePaymentButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d45c8cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/AuthorizeNet/AuthorizeNetCreditCard.vue?vue&type=template&id=147d4c0b&
var AuthorizeNetCreditCardvue_type_template_id_147d4c0b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.loaded)?_c('div',{staticClass:"row my-5 py-1"},[_c('div',{staticClass:"col-xs-12"},[_c('activity-indicator',{attrs:{"size":"sm","center":true}})],1)]):_c('div',{staticClass:"form-group"},[(!_vm.gateway.options.login_id || !_vm.gateway.options.public_key)?_c('alert',{staticClass:"d-flex align-items-center",attrs:{"variant":"danger"}},[_c('icon',{staticClass:"mr-2",attrs:{"icon":"exclamation-triangle","size":"2x"}}),_c('h6',{staticClass:"font-weight-light my-0"},[_vm._v("\n            This account has NOT been configured for the new Giveworks Forms."),_c('br'),_c('b',[_vm._v("Reason:")]),(!_vm.gateway.options.login_id)?[_vm._v("\n                The "),_c('em',[_vm._v("login_id")]),_vm._v(" is missing.\n            ")]:_vm._e(),(!_vm.gateway.options.public_key)?[_vm._v("\n                The "),_c('em',[_vm._v("public_key")]),_vm._v(" is missing.\n            ")]:_vm._e()],2)],1):_c('credit-card-field',{attrs:{"activity":_vm.activity,"error":_vm.error || _vm.errors.token},on:{"change":_vm.onChange,"valid":_vm.onValid}})],1)}
var AuthorizeNetCreditCardvue_type_template_id_147d4c0b_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Gateways/AuthorizeNet/AuthorizeNetCreditCard.vue?vue&type=template&id=147d4c0b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/AuthorizeNet/AuthorizeNetCreditCard.vue?vue&type=script&lang=js&
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
//
//
//
//
//



const throttled = Object(Functions["p" /* throttle */])(fn => {
  fn();
}, 1000);
/* harmony default export */ var AuthorizeNetCreditCardvue_type_script_lang_js_ = ({
  name: 'AuthorizeNetCreditCard',
  components: {
    Alert: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "3259")),
    CreditCardField: () => Promise.all(/* import() | vue-credit-card-field */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "6468"))
  },
  mixins: [PaymentGateway],

  data() {
    return {
      error: false,
      loaded: false,
      activity: false
    };
  },

  mounted() {
    this.pageType.disableSubmitButton(); // this.$dispatch.request('submit:disable');

    Gateway(this.gateway).script(event => {
      this.loaded = true;
    });
  },

  methods: {
    onChange: function (event) {
      if (!event || !event.complete) {
        this.pageType.disableSubmitButton();
      }
    },
    onValid: function (event) {
      throttled(() => {
        this.activity = true;
        Gateway(this.gateway).createToken({
          cardNumber: event.card.number,
          month: event.card.expMonth,
          year: event.card.expYear,
          cardCode: event.card.cvc
        }, event => {
          throttled(() => {
            this.activity = false;

            if (event.messages.resultCode === 'Ok') {
              this.$set(this.form, 'token', event.opaqueData.dataValue);
              this.$set(this.form, 'tokenDescriptor', event.opaqueData.dataDescriptor);
              this.pageType.enableSubmitButton();
            } else if (event.messages.resultCode === 'Error') {
              this.error = event.messages.message[0].text;
              this.pageType.disableSubmitButton();
            }
          });
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/Components/Gateways/AuthorizeNet/AuthorizeNetCreditCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var AuthorizeNet_AuthorizeNetCreditCardvue_type_script_lang_js_ = (AuthorizeNetCreditCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Gateways/AuthorizeNet/AuthorizeNetCreditCard.vue





/* normalize component */

var AuthorizeNetCreditCard_component = Object(componentNormalizer["a" /* default */])(
  AuthorizeNet_AuthorizeNetCreditCardvue_type_script_lang_js_,
  AuthorizeNetCreditCardvue_type_template_id_147d4c0b_render,
  AuthorizeNetCreditCardvue_type_template_id_147d4c0b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AuthorizeNetCreditCard = (AuthorizeNetCreditCard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/PaymentGateways.vue?vue&type=script&lang=js&
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







/* harmony default export */ var PaymentGatewaysvue_type_script_lang_js_ = ({
  name: 'PaymentGateways',
  components: {
    Icon: index_es["a" /* FontAwesomeIcon */],
    StripeCreditCard: StripeCreditCard,
    StripePaymentButton: StripePaymentButton,
    PaypalPaymentButton: PayPalPaymentButton,
    AuthorizeNetCreditCard: AuthorizeNetCreditCard,
    Btn: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "9719")),
    Alert: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "3259"))
  },
  mixins: [FormComponent["a" /* default */]],
  props: {
    pageType: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      width: null,
      gateway: null,
      buttons: this.getButtons()
    };
  },

  computed: {
    activeButton() {
      return this.buttons.filter(button => button.active).pop();
    },

    classes() {
      return {
        'col-sm-6': this.width < 310,
        'col-sm-6 col-lg-4': this.width >= 310
      };
    }

  },

  mounted() {
    if (this.buttons && this.buttons[0]) {
      this.activate(this.buttons[0]);
    } else {// this.$dispatch.request('submit:hide');
    }

    window.addEventListener('resize', this.onResize());
  },

  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    activate(button) {
      this.deactivate();
      button.active = true;
      this.$set(this.form, 'gateway', Gateway(button.gateway).api());
    },

    deactivate() {
      this.buttons.forEach(button => {
        button.active = false;
      });
    },

    getButtons: function () {
      const buttons = [];
      this.page.site.gateways.forEach(gateway => {
        if (!Gateway(gateway).buttons) {
          throw new Error(Gateway(gateway).api() + ' doesn\'t have a required buttons() method.');
        }

        Gateway(gateway).buttons().forEach(button => {
          button.active = false;
          button.gateway = gateway;
          buttons.push(button);
        });
      });
      return buttons;
    },

    onResize(event) {
      this.width = this.$el.offsetWidth;
      return this.onResize;
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Gateways/PaymentGateways.vue?vue&type=script&lang=js&
 /* harmony default export */ var Gateways_PaymentGatewaysvue_type_script_lang_js_ = (PaymentGatewaysvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Gateways/PaymentGateways.vue





/* normalize component */

var PaymentGateways_component = Object(componentNormalizer["a" /* default */])(
  Gateways_PaymentGatewaysvue_type_script_lang_js_,
  PaymentGatewaysvue_type_template_id_35582736_render,
  PaymentGatewaysvue_type_template_id_35582736_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PaymentGateways = (PaymentGateways_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d45c8cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fieldsets/SelectDonationFieldset.vue?vue&type=template&id=52ae68a2&
var SelectDonationFieldsetvue_type_template_id_52ae68a2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fieldset',[(_vm.legends)?_c('h3',{class:{'mb-0': _vm.hasMinimumAmount}},[_vm._v("\n        Donation amount\n    ")]):_vm._e(),(_vm.hasMinimumAmount)?_c('div',{staticClass:"mb-2"},[_c('small',{staticClass:"text-muted"},[_vm._v("Minimum accepted amount is $"+_vm._s(_vm.page.options.min_amount))])]):_vm._e(),_c('payment-buttons',{directives:[{name:"query",rawName:"v-query"}],attrs:{"name":"amount","amounts":_vm.amounts,"errors":_vm.errors,"page":_vm.page},model:{value:(_vm.form.amount),callback:function ($$v) {_vm.$set(_vm.form, "amount", $$v)},expression:"form.amount"}}),(_vm.page.site.recurring && !_vm.page.options.recurring_only)?_c('div',{staticClass:"form-group mt-3"},[_c('label',{domProps:{"innerHTML":_vm._s(_vm.recurringMessage)}}),_c('toggle-button',{attrs:{"size":"lg"},model:{value:(_vm.form.recurring),callback:function ($$v) {_vm.$set(_vm.form, "recurring", _vm._n($$v))},expression:"form.recurring"}}),(!_vm.form.recurring)?_c('small',{staticClass:"text-muted form-text"},[_vm._v("You are making a single donation of the amount entered above. Click the 'monthly' button to make your gift go further as an automatic monthly donation.")]):_c('small',{staticClass:"text-muted form-text"},[_vm._v("This amount will be charged automatically once each month, on or about the "+_vm._s(_vm.chargeDate)+". You may cancel your donation at any time by contacting us.")])],1):(_vm.page.site.recurring && _vm.page.options.recurring_only)?_c('alert',{staticClass:"mt-3",attrs:{"variant":"warning"}},[_c('alert-heading',{staticClass:"h3 d-flex align-items-center"},[_c('icon',{staticClass:"mr-3",attrs:{"icon":"exclamation-triangle"}}),_vm._v(" Monthly Donation\n        ")],1),(_vm.page.options.recur_message)?_c('p',{staticClass:"font-weight-light",domProps:{"innerHTML":_vm._s(_vm.page.options.recur_message)}}):_c('p',[_vm._v("\n            Please note that this will be a monthly recurring donation. The\n            amount you select will be charged automatically once each month\n            on or about "),_c('em',[_vm._v(_vm._s(_vm.chargeDate))]),_vm._v(".  You may cancel your donation\n            at any time by contacting us.\n        ")])],1):_vm._e()],1)}
var SelectDonationFieldsetvue_type_template_id_52ae68a2_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Fieldsets/SelectDonationFieldset.vue?vue&type=template&id=52ae68a2&

// EXTERNAL MODULE: ./src/Directives/Query.js
var Query = __webpack_require__("b4ea");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d45c8cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fields/ToggleButton.vue?vue&type=template&id=72383df2&
var ToggleButtonvue_type_template_id_72383df2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('btn-group',{staticClass:"toggle-button",attrs:{"size":_vm.size}},[_vm._l((_vm.buttons),function(label,i){return _c('btn',{key:i,ref:"buttons",refInFor:true,attrs:{"outline":i !== _vm.value.toString(),"variant":i === _vm.value.toString() ? 'success' : 'secondary',"type":"button"},domProps:{"innerHTML":_vm._s(label)},on:{"click":function($event){return _vm.$emit('input', i)}}})}),_vm._t("default")],2)}
var ToggleButtonvue_type_template_id_72383df2_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Fields/ToggleButton.vue?vue&type=template&id=72383df2&

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Mixins/FormControl/index.js + 1 modules
var FormControl = __webpack_require__("0ab3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fields/ToggleButton.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ToggleButtonvue_type_script_lang_js_ = ({
  name: 'ToggleButton',
  components: {
    Btn: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "9719")),
    BtnGroup: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "25bb"))
  },
  mixins: [FormControl["a" /* default */]],
  inheritAttrs: false,
  props: {
    value: {
      default: 0
    },
    buttons: {
      type: Object,

      default() {
        return {
          0: 'One-Time',
          1: 'Monthly Gift'
        };
      }

    }
  },

  mounted() {
    if (this.$refs.buttons) {
      this.$refs.buttons.map((vnode, i) => {
        if (vnode.$el.classList.contains('btn-success')) {
          this.$emit('input', Object.keys(this.buttons).find(key => this.buttons[key] === vnode.$el.innerHTML));
        }
      });
    }
  }

});
// CONCATENATED MODULE: ./src/Components/Fields/ToggleButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var Fields_ToggleButtonvue_type_script_lang_js_ = (ToggleButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Fields/ToggleButton.vue





/* normalize component */

var ToggleButton_component = Object(componentNormalizer["a" /* default */])(
  Fields_ToggleButtonvue_type_script_lang_js_,
  ToggleButtonvue_type_template_id_72383df2_render,
  ToggleButtonvue_type_template_id_72383df2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ToggleButton = (ToggleButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d45c8cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fields/PaymentButtons.vue?vue&type=template&id=8b022bea&
var PaymentButtonsvue_type_template_id_8b022bea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"payment-buttons",class:{'was-validated': !!_vm.errors.amount}},[_c('div',{staticClass:"payment-buttons-grid mb-2"},_vm._l((_vm.amounts),function(amount){return _c('btn',{key:amount,attrs:{"type":"button","outline":"","variant":"success","active":_vm.value ? _vm.value.toString() === amount.toString() : false},domProps:{"innerHTML":_vm._s(("$" + amount))},on:{"click":function($event){return _vm.onClickButton(amount)}}})}),1),_c('input-group',{class:{'is-invalid': !!_vm.errors.amount, 'mb-3': !_vm.page.site.recurring},attrs:{"prepend":"$"}},[_c('input-field',{attrs:{"custom":"","label":"Other Amount","placeholder":"Other Amount","group":false,"value":_vm.value},on:{"keydown":_vm.onKeyDown,"input":function (value) { return _vm.$emit('input', value); }}})],1),(_vm.errors.amount)?_c('form-feedback',{staticClass:"d-block",attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.errors.amount.join('<br>'))}}):_vm._e()],1)}
var PaymentButtonsvue_type_template_id_8b022bea_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Fields/PaymentButtons.vue?vue&type=template&id=8b022bea&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fields/PaymentButtons.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PaymentButtonsvue_type_script_lang_js_ = ({
  name: 'PaymentButtons',
  components: {
    Btn: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "9719")),
    InputField: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "46d8")),
    InputGroup: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "3588")),
    FormFeedback: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "a892"))
  },
  mixins: [FormControl["a" /* default */]],
  props: {
    page: {
      type: Object,
      required: true
    },
    amounts: {
      type: Array,
      required: true
    }
  },
  methods: {
    onClickButton(value) {
      this.$emit('input', parseFloat(this.value) !== (value = parseFloat(value)) ? value : null);
    },

    onKeyDown(e) {
      if ((e.keyCode < 48 || e.keyCode > 57 && e.keyCode !== 190) && !e.metaKey && e.key.length === 1) {
        e.preventDefault();
      }
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Fields/PaymentButtons.vue?vue&type=script&lang=js&
 /* harmony default export */ var Fields_PaymentButtonsvue_type_script_lang_js_ = (PaymentButtonsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Fields/PaymentButtons.vue





/* normalize component */

var PaymentButtons_component = Object(componentNormalizer["a" /* default */])(
  Fields_PaymentButtonsvue_type_script_lang_js_,
  PaymentButtonsvue_type_template_id_8b022bea_render,
  PaymentButtonsvue_type_template_id_8b022bea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PaymentButtons = (PaymentButtons_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fieldsets/SelectDonationFieldset.vue?vue&type=script&lang=js&
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
//
//






/* harmony default export */ var SelectDonationFieldsetvue_type_script_lang_js_ = ({
  name: 'SelectDonationFieldset',
  components: {
    Icon: index_es["a" /* FontAwesomeIcon */],
    ToggleButton: ToggleButton,
    PaymentButtons: PaymentButtons,
    Alert: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "3259")),
    AlertHeading: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "426a"))
  },
  directives: {
    Query: Query["a" /* default */]
  },
  mixins: [FormComponent["a" /* default */]],
  props: {
    legends: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    recurringMessage() {
      return this.page.options.recur_mess || this.page.site.config.giveworks.recur_mess;
    },

    chargeDate() {
      const now = new Date();
      return [now.getMonth() + 1, now.getDate(), now.getFullYear()].join('/');
    },

    hasMinimumAmount() {
      return this.page.options.min_amount && (parseFloat(this.page.options.min_amount) || 0) > 0;
    },

    amounts() {
      const values = this.page.options.amounts ? this.page.options.amounts.split(',') : this.page.site.config.giveworks.ask_amounts;
      return values.filter(value => {
        return value >= (parseFloat(this.page.options.min_amount) || 0);
      });
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Fieldsets/SelectDonationFieldset.vue?vue&type=script&lang=js&
 /* harmony default export */ var Fieldsets_SelectDonationFieldsetvue_type_script_lang_js_ = (SelectDonationFieldsetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Fieldsets/SelectDonationFieldset.vue





/* normalize component */

var SelectDonationFieldset_component = Object(componentNormalizer["a" /* default */])(
  Fieldsets_SelectDonationFieldsetvue_type_script_lang_js_,
  SelectDonationFieldsetvue_type_template_id_52ae68a2_render,
  SelectDonationFieldsetvue_type_template_id_52ae68a2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SelectDonationFieldset = (SelectDonationFieldset_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Types/Donation.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//



/* harmony default export */ var Donationvue_type_script_lang_js_ = ({
  name: 'PageTypeDonation',
  components: {
    PaymentGateways: PaymentGateways,
    SelectDonationFieldset: SelectDonationFieldset,
    BtnActivity: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "9863")),
    TextareaField: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "31e0")),
    ContactInfoFieldset: () => __webpack_require__.e(/* import() | contact-info-fieldset */ 3).then(__webpack_require__.bind(null, "e3c2")),
    EmploymentInfoFieldset: () => __webpack_require__.e(/* import() | employment-info-fieldset */ 5).then(__webpack_require__.bind(null, "33e3"))
  },
  extends: PageType["a" /* default */]
});
// CONCATENATED MODULE: ./src/Components/Types/Donation.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_Donationvue_type_script_lang_js_ = (Donationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Types/Donation.vue





/* normalize component */

var Donation_component = Object(componentNormalizer["a" /* default */])(
  Types_Donationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Donation = __webpack_exports__["default"] = (Donation_component.exports);

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

/***/ "b4ea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function input(el) {
  if (['input', 'textarea', 'select'].indexOf(el.tagName) !== -1) {
    return el;
  }

  return Array.from(el.querySelectorAll('input, textarea, select')).reverse().pop();
}

/* harmony default export */ __webpack_exports__["a"] = ({
  inserted(el, binding, vnode) {
    const field = input(el);
    const params = new URLSearchParams(location.search);
    const key = binding.value || field && field.getAttribute('name');
    const value = params.get(key);

    if (field && !field.value && !!value) {
      if (vnode.componentInstance) {
        vnode.componentInstance.$emit('input', value);
      } else {
        vnode.elm.value = value;
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

    handleRedirect(url, sessionid) {
      setTimeout(() => {
        if (!url && this.page.next_page) {
          url = this.page.next_page.url.replace(/\/$/, '') + (this.form.source ? '/' + this.form.source : '');
        }

        if (url) {
          window.location = url + (sessionid && (url.match(/\?/) ? '&' : '?') + `sessionid=${sessionid}`);
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

    onSubmitSuccess(page) {
      this.handleRedirect(this.redirect || this.page.external_reply, page.get('sessionid'));
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

/***/ }),

/***/ "ed48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayPalPaymentButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1355");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayPalPaymentButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayPalPaymentButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayPalPaymentButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=GiveworksForm.common.donation-type.js.map