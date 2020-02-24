((typeof self !== 'undefined' ? self : this)["webpackJsonpGiveworksForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpGiveworksForm"] || []).push([[3],{

/***/ "8541":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue_interface_src_Helpers_Functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ca14");


const ALIASES = {
    'street': ['street_number', 'route', 'intersection'],
    'city': ['locality'],
    'state': ['administrative_area_level_1'],
    'zip': ['postal_code'],
    'zipcode': ['postal_code'],
    'county': ['administrative_area_level_2']
};

function intersection(a, b) {
    return a
        .filter(value => b.indexOf(value) !== -1)
        .filter((e, i, c) => {
            return c.indexOf(e) === i;
        });
}

function extract(type, modifiers, geocoder) {
    if(geocoder[type]) {
        return geocoder[type];
    }
    else if(type === 'latitude') {
        return geocoder.geometry.location.lat();
    }
    else if(type === 'longitude') {
        return geocoder.geometry.location.lng();
    }

    const aliases = ALIASES[type] || (Object(vue_interface_src_Helpers_Functions__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "g"])(type) ? type : [type]);

    const values = geocoder.address_components
        .map(component => {
            if(intersection(component.types, aliases).length) {
                return component[modifiers.short ? 'short_name' : 'long_name'];
            }
        })
        .filter(value => !!value);

    return values.length ? values.join(' ') : null;
}

function update(binding, vnode, value) {
    const props = binding.expression.split('.');
    const prop = props.pop();
    const model = props.reduce((carry, i) => carry[i], vnode.context);

    value = Object(vue_interface_src_Helpers_Functions__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "g"])(value) ? value.join(' ') : value;

    if(binding.modifiers.query) {
        vnode.componentInstance.query = value;
    }

    model[prop] = value;

    return value;
}

/* harmony default export */ __webpack_exports__["a"] = ({

    bind(el, binding, vnode) {
        vnode.componentInstance.$on('autocomplete-select', (place, geocoder) => {
            vnode.context.$nextTick(() => {
                update(binding, vnode, extract(binding.arg, binding.modifiers, geocoder));
            });
        });
    }

});


/***/ }),

/***/ "add3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    mapApiKey() {
      return "AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU";
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

/***/ "e3c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c77d2f2c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fieldsets/ContactInfoFieldset.vue?vue&type=template&id=5c132578&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fieldset',[(_vm.page.options.add_title)?_c('select-field',{attrs:{"name":"title","label":"Title","placeholder":"Title","errors":_vm.errors,"custom":""},model:{value:(_vm.form.title),callback:function ($$v) {_vm.$set(_vm.form, "title", $$v)},expression:"form.title"}},_vm._l((_vm.titles),function(value){return _c('option',{key:value,domProps:{"value":value,"innerHTML":_vm._s(value)}})}),0):_vm._e(),_c('input-field',{directives:[{name:"query",rawName:"v-query"}],attrs:{"name":"first","label":"First Name","placeholder":"First Name","errors":_vm.errors,"custom":""},model:{value:(_vm.form.first),callback:function ($$v) {_vm.$set(_vm.form, "first", $$v)},expression:"form.first"}}),_c('input-field',{directives:[{name:"query",rawName:"v-query"}],attrs:{"name":"last","label":"Last Name","placeholder":"Last Name","errors":_vm.errors,"custom":""},model:{value:(_vm.form.last),callback:function ($$v) {_vm.$set(_vm.form, "last", $$v)},expression:"form.last"}}),_c('input-field',{directives:[{name:"query",rawName:"v-query"}],attrs:{"type":"email","name":"email","label":"Email","placeholder":"you@example.com","errors":_vm.errors,"custom":""},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}}),(_vm.page.options.add_phone)?_c('input-field',{directives:[{name:"query",rawName:"v-query"}],attrs:{"name":"phone","label":"Phone Number","placeholder":"Phone Number","errors":_vm.errors,"custom":""},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}}):_vm._e(),(_vm.address || _vm.page.options.add_street)?_c('place-autocomplete-field',{directives:[{name:"query",rawName:"v-query"},{name:"place-autofill",rawName:"v-place-autofill:street.query",value:(_vm.form.street),expression:"form.street",arg:"street",modifiers:{"query":true}},{name:"place-autofill",rawName:"v-place-autofill:city",value:(_vm.form.city),expression:"form.city",arg:"city"},{name:"place-autofill",rawName:"v-place-autofill:state.short",value:(_vm.form.state),expression:"form.state",arg:"state",modifiers:{"short":true}},{name:"place-autofill",rawName:"v-place-autofill:zip",value:(_vm.form.zip),expression:"form.zip",arg:"zip"}],attrs:{"name":"street","label":"Address","placeholder":"Address","errors":_vm.errors,"api-key":_vm.mapApiKey,"custom":""},model:{value:(_vm.form.street),callback:function ($$v) {_vm.$set(_vm.form, "street", $$v)},expression:"form.street"}}):_vm._e(),(_vm.address || _vm.page.options.add_city || _vm.page.options.add_zip)?_c('div',{staticClass:"row"},[(_vm.address || _vm.page.options.add_city)?_c('div',{staticClass:"col-sm-8"},[_c('input-field',{directives:[{name:"query",rawName:"v-query"}],attrs:{"name":"city","label":"City","placeholder":"City","errors":_vm.errors,"custom":""},model:{value:(_vm.form.city),callback:function ($$v) {_vm.$set(_vm.form, "city", $$v)},expression:"form.city"}})],1):_vm._e(),(_vm.address || _vm.page.options.add_zip)?_c('div',{class:{'col-sm-4': _vm.address || _vm.page.options.add_city, 'col-sm-12': !_vm.address && !_vm.page.options.add_city}},[_c('input-field',{directives:[{name:"query",rawName:"v-query"}],attrs:{"name":"zip","label":"Zip","placeholder":"Zip","errors":_vm.errors,"max-length":"5","custom":""},model:{value:(_vm.form.zip),callback:function ($$v) {_vm.$set(_vm.form, "zip", $$v)},expression:"form.zip"}})],1):_vm._e()]):_vm._e(),(_vm.address || _vm.page.options.add_state)?_c('select-field',{directives:[{name:"query",rawName:"v-query"}],attrs:{"name":"state","label":"State","errors":_vm.errors,"custom":""},model:{value:(_vm.form.state),callback:function ($$v) {_vm.$set(_vm.form, "state", $$v)},expression:"form.state"}},_vm._l((_vm.states),function(label,value){return _c('option',{key:value,domProps:{"value":value,"innerHTML":_vm._s(label)}})}),0):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Fieldsets/ContactInfoFieldset.vue?vue&type=template&id=5c132578&

// EXTERNAL MODULE: ./src/Directives/Query.js
var Query = __webpack_require__("b4ea");

// EXTERNAL MODULE: ./src/Mixins/FormComponent.js
var FormComponent = __webpack_require__("bb4b");

// EXTERNAL MODULE: ./src/Mixins/GoogleMapsApiKey.js
var GoogleMapsApiKey = __webpack_require__("add3");

// EXTERNAL MODULE: ./node_modules/vue-place-autocomplete/src/Directives/PlaceAutofill.js
var PlaceAutofill = __webpack_require__("8541");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fieldsets/ContactInfoFieldset.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//




/* harmony default export */ var ContactInfoFieldsetvue_type_script_lang_js_ = ({
  name: 'ContactInfoFieldset',
  components: {
    InputField: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "46d8")),
    SelectField: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "8cec")),
    PlaceAutocompleteField: () => Promise.all(/* import() | place-autocomplete-field */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "c182"))
  },
  directives: {
    Query: Query["a" /* default */],
    PlaceAutofill: PlaceAutofill["a" /* default */]
  },
  mixins: [FormComponent["a" /* default */], GoogleMapsApiKey["a" /* default */]],
  props: {
    address: Boolean,
    legends: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    titles() {
      return this.page.site.config.giveworks.titles;
    },

    states() {
      const states = Object.assign({}, this.page.site.config.states);
      delete states[''];
      delete states[' '];
      return states;
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Fieldsets/ContactInfoFieldset.vue?vue&type=script&lang=js&
 /* harmony default export */ var Fieldsets_ContactInfoFieldsetvue_type_script_lang_js_ = (ContactInfoFieldsetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/Components/Fieldsets/ContactInfoFieldset.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Fieldsets_ContactInfoFieldsetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ContactInfoFieldset = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=GiveworksForm.umd.contact-info-fieldset.js.map