function chunk(arr, chunkSize, cache = []) {
    const tmp = [...arr];
    while(tmp.length) cache.push(tmp.splice(0, chunkSize));
    return cache;
}

function extend(...args) {
    return Object.assign(...args);
}

function isNull(value) {
    return value === null;
}

function isArray(value) {
    return Array.isArray(value);
}

function isObject(value) {
    return (typeof value === 'object') && !isNull(value) && !isArray(value);
}

function isNumber(value) {
    return (typeof value === 'number') || (
        value ? value.toString() === '[object Number]' : false
    );
}

function isNumeric(value) {
    return isNumber(value) || (
        !!value && !isArray(value) && !!value.toString().match(/^-?[\d.,]+$/)
    );
}

function key(value) {
    return isNumeric(value) ? parseFloat(value) : value;
}

function each(subject, fn) {
    for(const i in subject) {
        fn(subject[i], key(i));
    }
}

function isFunction(value) {
    return value instanceof Function;
}

function isBoolean(value) {
    return value === true || value === false;
}

function kebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .replace(/_/g, '-')
        .toLowerCase();
}

function mapKeys(object, fn) {
    const mapped = {};

    each(object, (value, key) => {
        mapped[fn(value, key)] = value;
    });

    return mapped;
}

function prefix(subject, prefix, delimeter = '-') {
    const prefixer = (value, key$$1) => {
        const string = (key$$1 || value)
            .replace(new RegExp(`^${prefix}${delimeter}?`), '');

        return [prefix, string].filter(value => !!value).join(delimeter);
    };

    if(isBoolean(subject)) {
        return subject;
    }

    if(isObject(subject)) {
        return mapKeys(subject, prefixer);
    }

    return prefixer(subject);
}

var Colorable = {

    computed: {

        colorableClasses() {
            const classes = {};

            for(let i in this.$attrs) {
                if(i.match(/^bg|text|border|bg-gradient-/)) {
                    classes[i] = true;
                }
            }

            return classes;
        }

    }

};

var MergeClasses = {

    methods: {

        mergeClasses() {
            let classes = {};

            each([].slice.call(arguments), arg => {
                if(isObject(arg)) {
                    extend(classes, arg);
                }
                else if(isArray(arg)) {
                    classes = classes.concat(arg);
                }
                else if(arg) {
                    classes[arg] = true;
                }
            });

            return classes;
        }

    }

};

var FormControl = {

    inheritAttrs: false,

    mixins: [
        Colorable,
        MergeClasses
    ],

    props: {

        /**
         * The autocomplete attribute value.
         *
         * @property String
         */
        // autocomplete: String,

        /**
         * The field id attribute value.
         *
         * @property String
         */
        // id: [Number, String],

        /**
         * The value of label element. If no value, no label will appear.
         *
         * @property String
         */
        label: [Number, String],

        /**
         * The field name attribute value.
         *
         * @property String
         */
        // name: String,

        /**
         * The field id attribute value.
         *
         * @property String
         */
        value: {
            default: null
        },

        /**
         * The placeholder attribute value.
         *
         * @property String
         */
        // placeholder: String,

        /**
         * Is the field required.
         *
         * @property String
         */
        // required: Boolean,

        /**
         * Add form-group wrapper to input
         *
         * @property String
         */
        group: {
            type: Boolean,
            value: true
        },

        /**
         * The regex pattern for validation.
         *
         * @property String
         */
        // pattern: String,

        /**
         * An inline field validation error.
         *
         * @property String|Boolean
         */
        error: String,

        /**
         * An inline field validation errors passed as object with key/value
         * pairs. If errors passed as an object, the form name will be used for
         * the key.
         *
         * @property Object|Boolean
         */
        errors: {
            type: Object,
            default() {
                return {};
            }
        },

        /**
         * Some feedback to add to the field once the field is successfully
         * valid.
         *
         * @property String
         */
        feedback: [String, Array],

        /**
         * An array of event names that correlate with callback functions
         *
         * @property Function
         */
        bindEvents: {
            type: Array,
            default() {
                return ['focus', 'blur', 'change', 'click', 'keyup', 'keydown', 'progress', 'paste'];
            }
        },

        /**
         * The default class name assigned to the control element
         *
         * @property String
         */
        defaultControlClass: {
            type: String,
            default: 'form-control'
        },

        /**
         * Hide the label for browsers, but leave it for screen readers.
         *
         * @property String
         */
        hideLabel: Boolean,

        /**
         * Additional margin/padding classes for fine control of spacing
         *
         * @property String
         */
        spacing: String,

        /**
         * The size of the form control
         *
         * @property String
         */
        size: {
            type: String,
            default: 'md',
            validate: value => ['sm', 'md', 'lg'].indexOf(value) !== -1
        },

        /**
         * Display the form field inline
         *
         * @property String
         */
        inline: Boolean,

        /**
         * If the form control is readonly, display only as text?
         *
         * @property String
         */
        // plaintext: Boolean,

        /**
         * Is the form control readonly?
         *
         * @property String
         */
        // readonly: Boolean,

        /**
         * Is the form control disabled?
         *
         * @property String
         */
        // disabled: Boolean,

        /**
         * Some instructions to appear under the field label
         *
         * @property String
         */
        helpText: [Number, String],

        /**
         * The maxlength attribute
         *
         * @property String
         */
        maxlength: [Number, String]

    },

    directives: {
        bindEvents: {
            bind(el, binding, vnode) {
                const emptyClass = 'is-empty';

                // Add/remove the has-focus class from the form control
                el.addEventListener('focus', event => event.target.classList.add('has-focus'));
                el.addEventListener('blur', event => event.target.classList.remove('has-focus'));
                el.addEventListener('input', e => {
                    el.classList[!el.value ? 'add' : 'remove'](emptyClass);
                });

                if(!el.value) {
                    el.classList.add(emptyClass);
                }

                // Bubble the native events up to the vue component.
                each(vnode.context.bindEvents, name => {
                    el.addEventListener(name, event => {
                        vnode.context.$emit(name, event);
                    });
                });
            }
        }
    },

    methods: {

        blur() {
            if(this.getInputField()) {
                this.getInputField().blur();
            }
        },

        focus() {
            if(this.getInputField()) {
                this.getInputField().focus();
            }
        },

        getInputField() {
            return this.$el.querySelector(
                '.form-control, input, select, textarea'
            );
        },

        getFieldErrors() {
            let errors = this.error || this.errors;

            if(isObject(this.errors)) {
                errors = this.errors[this.name || this.id];
            }

            return !errors || isArray(errors) || isObject(errors) ? errors : [errors];
        }

    },

    computed: {

        id() {
            return this.$attrs.id;
        },

        name() {
            return this.$attrs.name;
        },

        controlAttributes() {
            const classes = this.mergeClasses(
                this.controlClasses, this.colorableClasses
            );

            return Object.keys(this.$attrs)
                .concat([['class', classes]])
                .reduce((carry, key$$1) => {
                    if(isArray(key$$1)) {
                        carry[key$$1[0]] = key$$1[1];
                    }
                    else {
                        carry[key$$1] = this[key$$1] || this.$attrs[key$$1];
                    }

                    return carry;
                }, {});
        },

        controlClass() {
            return this.defaultControlClass + (this.plaintext ? '-plaintext' : '');
        },

        controlSizeClass() {
            return prefix(this.size, this.controlClass);
        },

        controlClasses() {
            return [
                (this.spacing || ''),
                this.controlClass,
                this.controlSizeClass,
                (this.invalidFeedback ? 'is-invalid' : '')
            ].join(' ');
        },

        hasDefaultSlot() {
            return !!this.$slots.default;
        },

        invalidFeedback() {
            const errors = this.getFieldErrors();

            return this.error || (
                isArray(errors) ? errors.join('<br>') : errors
            );
        },

        validFeedback() {
            return isArray(this.feedback) ? this.feedback.join('<br>') : this.feedback;
        }

    }

};

var script = {
  mixins: [FormControl],
  props: {
    form: {
      type: Object,
      required: true
    },
    page: {
      type: Object,
      required: true
    },
    question: {
      type: Object,
      required: true
    },
    errors: {
      type: Object,
      required: true
    }
  },
  directives: {
    changed(el, binding, vnode) {
      el.addEventListener('change', event => {
        if (event.target.checked && isFunction(binding.value)) {
          binding.value(el);
        }
      });
    }

  }
};

function normalizeComponent(compiledTemplate, injectStyle, defaultExport, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, isShadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof isShadowMode === 'function') {
        createInjectorSSR = createInjector;
        createInjector = isShadowMode;
        isShadowMode = false;
    }
    // Vue.extend constructor export interop
    const options = typeof defaultExport === 'function' ? defaultExport.options : defaultExport;
    // render functions
    if (compiledTemplate && compiledTemplate.render) {
        options.render = compiledTemplate.render;
        options.staticRenderFns = compiledTemplate.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyle) {
                injectStyle.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (injectStyle) {
        hook = isShadowMode
            ? function () {
                injectStyle.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
            }
            : function (context) {
                injectStyle.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return defaultExport;
}

/* script */
            const __vue_script__ = script;
            
/* template */

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  

  
  var SurveyField = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var Screenreaders = {

    props: {

        /**
         * Should show only for screenreaders
         *
         * @property Boolean
         */
        srOnly: Boolean,

        /**
         * Should be focusable for screenreaders
         *
         * @property Boolean
         */
        srOnlyFocusable: Boolean

    },

    computed: {
        screenreaderClasses() {
            return {
                'sr-only': this.srOnly,
                'sr-only-focusable': this.srOnlyFocusable
            };
        }
    }

};

//

var script$1 = {

    name: 'help-text',

    mixins: [
        Colorable,
        Screenreaders
    ],

    computed: {
        classes() {
            return extend({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

};

/* script */
            const __vue_script__$1 = script$1;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "small",
    { staticClass: "form-text", class: _vm.classes },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var HelpText = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//

var script$2 = {

    name: 'form-group'

};

/* script */
            const __vue_script__$2 = script$2;
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "form-group" }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var FormGroup = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//

var script$3 = {

    name: 'form-label',

    mixins: [
        Colorable,
        Screenreaders
    ],

    computed: {
        classes() {
            return extend({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

};

/* script */
            const __vue_script__$3 = script$3;
            
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("label", { class: _vm.classes }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var FormLabel = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

//
// import { extend, omitBy, isNull, isUndefined } from '../../Helpers/Functions';

var script$4 = {

    name: 'form-control',

    mixins: [
        Colorable,
        FormControl
    ],

    props: {

        element: {
            type: String,
            required: true
        }

    }

};

/* script */
            const __vue_script__$4 = script$4;
            
/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    _vm.element,
    _vm._b(
      {
        tag: "component",
        attrs: {
          "aria-label": _vm.label || _vm.name || _vm.id,
          "aria-describedby": _vm.id || _vm.name
        },
        on: {
          input: function($event) {
            _vm.$emit("input", $event.target.value);
          }
        },
        model: {
          value: _vm.testValue,
          callback: function($$v) {
            _vm.testValue = $$v;
          },
          expression: "testValue"
        }
      },
      "component",
      _vm.$attrs,
      false
    ),
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var FormControl$1 = normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

//

var script$5 = {

    name: 'form-feedback',

    mixins: [
        Colorable
    ],

    props: {

        /**
         * The value of label element. If no value, no label will appear.
         *
         * @property String
         */
        label: String,

        /**
         * Should the feedback marked as invalid
         *
         * @property String
         */
        invalid: Boolean,

        /**
         * Should the feedback marked as invalid
         *
         * @property String
         */
        valid: Boolean

    }

};

/* script */
            const __vue_script__$5 = script$5;
            
/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: {
        "invalid-feedback": _vm.invalid,
        "valid-feedback": _vm.valid && !_vm.invalid
      }
    },
    [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
    2
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var FormFeedback = normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

function unit(height) {
    return isFinite(height) ? height + 'px' : height;
}

//
//
//
//
//
//

var script$6 = {

    props: {
        nodes: {
            type: Number,
            default: 3
        },
        size: {
            type: String,
            default: ''
        },
        prefix: {
            type: String,
            default: 'activity-indicator-'
        }
    },

    computed: {
        classes: function() {
            const classes = {};

            classes[this.$options.name] = !!this.$options.name;
            classes[this.prefix + this.size.replace(this.prefix, '')] = !!this.size;

            return classes;
        }
    }

};

/* script */
            const __vue_script__$6 = script$6;
            
/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "activity-indicator", class: _vm.classes },
    _vm._l(_vm.nodes, function(i) {
      return _c("div")
    })
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var BaseType = normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  );

var script$7 = {

    name: 'activity-indicator-dots',

    extends: BaseType
};

/* script */
            const __vue_script__$7 = script$7;
/* template */

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = undefined;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ActivityIndicatorDots = normalizeComponent(
    {},
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  );

var script$8 = {

    name: 'activity-indicator-spinner',

    extends: BaseType,

    props: extend({}, BaseType.props, {
        nodes: {
            type: Number,
            default: 12
        }
    })
};

/* script */
            const __vue_script__$8 = script$8;
/* template */

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = undefined;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ActivityIndicatorSpinner = normalizeComponent(
    {},
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    undefined
  );

//

var script$9 = {

    name: 'activity-indicator',

    extends: BaseType,

    props: {

        center: Boolean,

        fixed: Boolean,

        label: String,

        relative: Boolean,

        type: {
            type: String,
            default: 'dots'
        },

        height: [String, Number],

        maxHeight: [String, Number],

        minHeight: [String, Number],

        width: [String, Number],

        maxWidth: [String, Number],

        minWidth: [String, Number]

    },

    components: {
        ActivityIndicatorDots,
        ActivityIndicatorSpinner
    },

    computed: {

        style() {
            return {
                width: unit(this.width),
                maxWidth: unit(this.maxWidth),
                minWidth: unit(this.minWidth),
                height: unit(this.height),
                maxHeight: unit(this.maxHeight),
                minHeight: unit(this.minHeight)
            };
        },

        component() {
            return kebabCase(this.prefix + this.type.replace(this.prefix, ''));
        }
    }

};

/* script */
            const __vue_script__$9 = script$9;
            
/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.center
    ? _c(
        "div",
        {
          staticClass: "center-wrapper",
          class: {
            "position-relative": _vm.relative,
            "position-fixed": _vm.fixed
          },
          style: _vm.style
        },
        [
          _c(
            "div",
            {
              staticClass:
                "center-content d-flex flex-column align-items-center"
            },
            [
              _c(_vm.component, {
                tag: "component",
                attrs: { size: _vm.size, prefix: _vm.prefix }
              }),
              _vm._v(" "),
              _vm.label
                ? _c("div", {
                    staticClass: "activity-indicator-label",
                    domProps: { innerHTML: _vm._s(_vm.label) }
                  })
                : _vm._e()
            ],
            1
          )
        ]
      )
    : _c(
        "div",
        {
          staticClass:
            "d-flex flex-column justify-content-center align-items-center",
          style: _vm.style
        },
        [
          _c(_vm.component, {
            tag: "component",
            attrs: { size: _vm.size, prefix: _vm.prefix }
          }),
          _vm._v(" "),
          _vm.label
            ? _c("div", {
                staticClass: "activity-indicator-label",
                domProps: { innerHTML: _vm._s(_vm.label) }
              })
            : _vm._e()
        ],
        1
      )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ActivityIndicator = normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    undefined,
    undefined
  );

//

var script$a = {

    name: 'input-field',

    mixins: [
        Colorable,
        FormControl
    ],

    components: {
        HelpText,
        FormControl: FormControl$1,
        FormGroup,
        FormLabel,
        FormFeedback,
        ActivityIndicator
    },

    props: {

        /**
         * Show type activity indicator.
         *
         * @property Boolean
         */
        activity: {
            type: Boolean,
            default: false
        },

        /**
         * The type attribute
         *
         * @property String
         */
        type: {
            type: String,
            default: 'text'
        }

    }

};

/* script */
            const __vue_script__$a = script$a;
/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form-group",
    { class: { "has-activity": _vm.activity } },
    [
      _vm._t("label", [
        _vm.label || _vm.hasDefaultSlot
          ? _c("form-label", {
              ref: "label",
              attrs: { for: _vm.id },
              domProps: { innerHTML: _vm._s(_vm.label) }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group-inner" },
        [
          _vm._t(
            "control",
            [
              _c(
                "input",
                _vm._b(
                  {
                    directives: [
                      { name: "bind-events", rawName: "v-bind-events" }
                    ],
                    domProps: { value: _vm.value },
                    on: {
                      input: function($event) {
                        _vm.$emit("input", $event.target.value);
                      }
                    }
                  },
                  "input",
                  _vm.controlAttributes,
                  false
                )
              )
            ],
            { dataTest: "test" }
          ),
          _vm._v(" "),
          _vm._t("activity", [
            _c(
              "transition",
              { attrs: { name: "slide-fade" } },
              [
                _vm.activity
                  ? _c("activity-indicator", {
                      key: "test",
                      ref: "activity",
                      attrs: { type: "dots", size: _vm.size }
                    })
                  : _vm._e()
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm._t("feedback", [
            _vm.validFeedback
              ? _c("form-feedback", {
                  ref: "feedback",
                  attrs: { valid: "" },
                  domProps: { innerHTML: _vm._s(_vm.validFeedback) }
                })
              : _vm.invalidFeedback
                ? _c("form-feedback", {
                    ref: "feedback",
                    attrs: { invalid: "" },
                    domProps: { innerHTML: _vm._s(_vm.invalidFeedback) }
                  })
                : _vm._e()
          ])
        ],
        2
      ),
      _vm._v(" "),
      _vm._t("help", [
        _vm.helpText
          ? _c("help-text", {
              ref: "help",
              domProps: { innerHTML: _vm._s(_vm.helpText) }
            })
          : _vm._e()
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$a = undefined;
  /* scoped */
  const __vue_scope_id__$a = undefined;
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var InputField = normalizeComponent(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    undefined,
    undefined
  );

//
var script$b = {
  name: 'alt-email-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    InputField
  }
};

/* script */
            const __vue_script__$b = script$b;
            
/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("input-field", {
    attrs: {
      type: "email",
      placeholder: "Email Address",
      name: _vm.name,
      id: _vm.question.id,
      label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
      required: _vm.question.required,
      errors: _vm.errors
    },
    on: { input: _vm.updated },
    model: {
      value: _vm.form[_vm.name],
      callback: function($$v) {
        _vm.$set(_vm.form, _vm.name, $$v);
      },
      expression: "form[name]"
    }
  })
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$b = undefined;
  /* scoped */
  const __vue_scope_id__$b = undefined;
  /* module identifier */
  const __vue_module_identifier__$b = undefined;
  /* functional template */
  const __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var AltEmailField = normalizeComponent(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    undefined,
    undefined
  );

//
var script$c = {
  name: 'alt-phone-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    InputField
  }
};

/* script */
            const __vue_script__$c = script$c;
            
/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("input-field", {
    attrs: {
      type: "phone",
      name: _vm.name,
      id: _vm.question.id,
      label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
      required: _vm.question.required,
      errors: _vm.errors
    },
    on: { input: _vm.updated },
    model: {
      value: _vm.form[_vm.name],
      callback: function($$v) {
        _vm.$set(_vm.form, _vm.name, $$v);
      },
      expression: "form[name]"
    }
  })
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$c = undefined;
  /* scoped */
  const __vue_scope_id__$c = undefined;
  /* module identifier */
  const __vue_module_identifier__$c = undefined;
  /* functional template */
  const __vue_is_functional_template__$c = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var AltPhoneField = normalizeComponent(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    undefined,
    undefined
  );

//

var script$d = {

    name: 'radio-field',

    components: {
        HelpText,
        FormFeedback
    },

    mixins: [
        Colorable,
        FormControl,
        MergeClasses
    ],

    model: {
        event: 'change',
        prop: 'checkedValue'
    },

    props: {

        /**
         * An array of event names that correlate with callback functions
         *
         * @property Function
         */
        bindEvents: {
            type: Array,
            default() {
                return ['focus', 'blur', 'input', 'click', 'keyup', 'keydown', 'progress'];
            }
        },

        /**
         * Is this a custom element
         *
         * @property String
         */
        custom: Boolean,

        /**
         * Display the form field and label inline
         *
         * @property Function
         */
        inline: Boolean,

        /**
         * The checked values
         *
         * @property String
         */
        checked: Boolean,

        /**
         * The checked value
         *
         * @property String
         */
        checkedValue: [Boolean, Number, String, Object],

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        defaultControlClass: {
            type: String,
            default: 'form-check'
        }

    },

    computed: {

        labelClass() {
            return prefix('label', this.controlClass);
        },

        inputClass() {
            return prefix('input', this.controlClass);
        },

        inlineClass() {
            return prefix('inline', this.controlClass);
        },

        controlClass() {
            return this.custom ? 'custom-control' : this.defaultControlClass;
        },

        customControlClass() {
            return this.custom ? prefix(this.$options.name.replace('-field', ''), 'custom') : '';
        },

        sizeableClass() {
            return prefix(this.size, 'form-control');
        }

    }

};

/* script */
            const __vue_script__$d = script$d;
            
/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: _vm.mergeClasses(
        _vm.controlClass,
        _vm.customControlClass,
        _vm.sizeableClass,
        _vm.inline ? _vm.inlineClass : ""
      )
    },
    [
      _vm.custom && _vm.id
        ? [
            _c("input", {
              directives: [{ name: "bind-events", rawName: "v-bind-events" }],
              class: _vm.mergeClasses(
                _vm.inputClass,
                _vm.invalidFeedback ? "is-invalid" : ""
              ),
              attrs: {
                type: "radio",
                name: _vm.name,
                id: _vm.id,
                required: _vm.required,
                disabled: _vm.disabled || _vm.readonly,
                readonly: _vm.readonly,
                pattern: _vm.pattern
              },
              domProps: {
                value: _vm.value,
                checked: _vm.checkedValue === _vm.value || _vm.checked
              },
              on: {
                change: function($event) {
                  _vm.$emit("change", $event.target.value);
                }
              }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                class: _vm.mergeClasses(_vm.labelClass, _vm.colorableClasses),
                attrs: { for: _vm.id }
              },
              [
                _vm._t("default", [_vm._v(_vm._s(_vm.label))]),
                _vm._v(" "),
                _vm._t("feedback", [
                  _vm.validFeedback
                    ? _c("form-feedback", {
                        attrs: { valid: "" },
                        domProps: { innerHTML: _vm._s(_vm.validFeedback) }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.invalidFeedback
                    ? _c("form-feedback", {
                        attrs: { invalid: "" },
                        domProps: { innerHTML: _vm._s(_vm.invalidFeedback) }
                      })
                    : _vm._e()
                ])
              ],
              2
            )
          ]
        : [
            _c(
              "label",
              {
                class: _vm.mergeClasses(_vm.labelClass, _vm.colorableClasses),
                attrs: { for: _vm.id }
              },
              [
                _c("input", {
                  directives: [
                    { name: "bind-events", rawName: "v-bind-events" }
                  ],
                  class: _vm.mergeClasses(
                    _vm.inputClass,
                    _vm.invalidFeedback ? "is-invalid" : ""
                  ),
                  attrs: {
                    type: "radio",
                    name: _vm.name,
                    id: _vm.id,
                    required: _vm.required,
                    disabled: _vm.disabled || _vm.readonly,
                    readonly: _vm.readonly,
                    pattern: _vm.pattern
                  },
                  domProps: {
                    value: _vm.value,
                    checked: _vm.checkedValue === _vm.value || _vm.checked
                  },
                  on: {
                    change: function($event) {
                      _vm.$emit("change", $event.target.value);
                    }
                  }
                }),
                _vm._v(" "),
                _vm._t("default", [_vm._v(_vm._s(_vm.label))]),
                _vm._v(" "),
                _vm._t("feedback", [
                  _vm.validFeedback
                    ? _c("form-feedback", {
                        attrs: { valid: "" },
                        domProps: { innerHTML: _vm._s(_vm.validFeedback) }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.invalidFeedback
                    ? _c("form-feedback", {
                        attrs: { invalid: "" },
                        domProps: { innerHTML: _vm._s(_vm.invalidFeedback) }
                      })
                    : _vm._e()
                ])
              ],
              2
            )
          ],
      _vm._v(" "),
      _vm._t("help", [
        _vm.helpText
          ? _c("help-text", { domProps: { innerHTML: _vm._s(_vm.helpText) } })
          : _vm._e()
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  const __vue_inject_styles__$d = undefined;
  /* scoped */
  const __vue_scope_id__$d = undefined;
  /* module identifier */
  const __vue_module_identifier__$d = undefined;
  /* functional template */
  const __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var RadioField = normalizeComponent(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    undefined,
    undefined
  );

//

var script$e = {

    name: 'checkbox-field',

    extends: RadioField,

    mixins: [
        MergeClasses
    ],

    model: {
        event: 'change',
        prop: 'checkedValues'
    },

    props: {

        /**
         * The checked values
         *
         * @property String
         */
        checkedValues: {
            type: Array,
            default() {
                return [];
            }
        }

    },

    methods: {

        update(value) {
            const checked = this.checkedValues.slice(0);
            const index = this.checkedValues.indexOf(value);

            if(index === -1) {
                checked.push(value);
            }
            else {
                checked.splice(index, 1);
            }

            this.$emit('change', checked);
        }

    }
};

/* script */
            const __vue_script__$e = script$e;
            
/* template */
var __vue_render__$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: _vm.mergeClasses(
        _vm.controlClass,
        _vm.customControlClass,
        _vm.sizeableClass,
        _vm.inline ? _vm.inlineClass : ""
      )
    },
    [
      _vm.custom && _vm.id
        ? [
            _c("input", {
              directives: [{ name: "bind-events", rawName: "v-bind-events" }],
              class: _vm.mergeClasses(
                _vm.inputClass,
                _vm.invalidFeedback ? "is-invalid" : ""
              ),
              attrs: {
                type: "checkbox",
                name: _vm.name,
                id: _vm.id,
                required: _vm.required,
                disabled: _vm.disabled || _vm.readonly,
                readonly: _vm.readonly,
                pattern: _vm.pattern
              },
              domProps: {
                value: _vm.value,
                checked:
                  _vm.checkedValues.indexOf(_vm.value) !== -1 || _vm.checked
              },
              on: {
                change: function($event) {
                  _vm.update($event.target.value);
                }
              }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                class: _vm.mergeClasses(_vm.labelClass, _vm.colorableClasses),
                attrs: { for: _vm.id }
              },
              [
                _vm._t("default", [_vm._v(_vm._s(_vm.label))]),
                _vm._v(" "),
                _vm._t("feedback", [
                  _vm.validFeedback
                    ? _c("form-feedback", {
                        attrs: { valid: "" },
                        domProps: { innerHTML: _vm._s(_vm.validFeedback) }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.invalidFeedback
                    ? _c("form-feedback", {
                        attrs: { invalid: "" },
                        domProps: { innerHTML: _vm._s(_vm.invalidFeedback) }
                      })
                    : _vm._e()
                ])
              ],
              2
            )
          ]
        : [
            _c(
              "label",
              {
                class: _vm.mergeClasses(_vm.labelClass, _vm.colorableClasses),
                attrs: { for: _vm.id }
              },
              [
                _c("input", {
                  directives: [
                    { name: "bind-events", rawName: "v-bind-events" }
                  ],
                  class: _vm.mergeClasses(
                    _vm.inputClass,
                    _vm.invalidFeedback ? "is-invalid" : ""
                  ),
                  attrs: {
                    type: "checkbox",
                    name: _vm.name,
                    id: _vm.id,
                    required: _vm.required,
                    disabled: _vm.disabled || _vm.readonly,
                    readonly: _vm.readonly,
                    pattern: _vm.pattern
                  },
                  domProps: {
                    value: _vm.value,
                    checked:
                      _vm.checkedValues.indexOf(_vm.value) !== -1 || _vm.checked
                  },
                  on: {
                    change: function($event) {
                      _vm.update($event.target.value);
                    }
                  }
                }),
                _vm._v(" "),
                _vm._t("default", [_vm._v(_vm._s(_vm.label))]),
                _vm._v(" "),
                _vm._t("feedback", [
                  _vm.validFeedback
                    ? _c("form-feedback", {
                        attrs: { valid: "" },
                        domProps: { innerHTML: _vm._s(_vm.validFeedback) }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.invalidFeedback
                    ? _c("form-feedback", {
                        attrs: { invalid: "" },
                        domProps: { innerHTML: _vm._s(_vm.invalidFeedback) }
                      })
                    : _vm._e()
                ])
              ],
              2
            )
          ],
      _vm._v(" "),
      _vm._t("help", [
        _vm.helpText
          ? _c("help-text", { domProps: { innerHTML: _vm._s(_vm.helpText) } })
          : _vm._e()
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

  /* style */
  const __vue_inject_styles__$e = undefined;
  /* scoped */
  const __vue_scope_id__$e = undefined;
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var CheckboxField = normalizeComponent(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    undefined,
    undefined
  );

//
var script$f = {
  name: 'checkbox-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    FormFeedback,
    CheckboxField
  }
};

/* script */
            const __vue_script__$f = script$f;
            
/* template */
var __vue_render__$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "form-group",
      class: { "is-invalid": !!_vm.invalidFeedback }
    },
    [
      _c("label", [
        _vm._v("\n        " + _vm._s(_vm.question.question) + "\n        "),
        _vm.question.required ? _c("sup", [_vm._v("*")]) : _vm._e()
      ]),
      _vm._v(" "),
      _vm._l(_vm.question.answers, function(answer, key) {
        return _c("checkbox-field", {
          key: key,
          attrs: {
            label: answer,
            value: answer,
            checkedValues: _vm.value || [],
            name: _vm.name,
            id: _vm.name + "_" + key
          },
          on: { change: _vm.updated },
          model: {
            value: _vm.form[_vm.name],
            callback: function($$v) {
              _vm.$set(_vm.form, _vm.name, $$v);
            },
            expression: "form[name]"
          }
        })
      }),
      _vm._v(" "),
      _vm.question.accept_other
        ? [
            _c("checkbox-field", {
              directives: [{ name: "changed", rawName: "v-changed" }],
              attrs: {
                label: "Other:",
                value: "other",
                name: _vm.name,
                id: _vm.name + "_50",
                checkedValues: _vm.value || []
              },
              on: { change: _vm.updated },
              model: {
                value: _vm.form[_vm.name],
                callback: function($$v) {
                  _vm.$set(_vm.form, _vm.name, $$v);
                },
                expression: "form[name]"
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form[_vm.name + "_other"],
                  expression: "form[`${name}_other`]"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.errors[_vm.name] },
              attrs: {
                type: "text",
                name: _vm.name + "_other",
                id: _vm.name + "_other"
              },
              domProps: { value: _vm.form[_vm.name + "_other"] },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, _vm.name + "_other", $event.target.value);
                  },
                  function($event) {
                    _vm.updated($event.target.value);
                  }
                ]
              }
            })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm._t("feedback", [
        _vm.validFeedback
          ? _c("form-feedback", {
              attrs: { valid: "" },
              domProps: { innerHTML: _vm._s(_vm.validFeedback) }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.invalidFeedback
          ? _c("form-feedback", {
              attrs: { invalid: "" },
              domProps: { innerHTML: _vm._s(_vm.invalidFeedback) }
            })
          : _vm._e()
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

  /* style */
  const __vue_inject_styles__$f = undefined;
  /* scoped */
  const __vue_scope_id__$f = undefined;
  /* module identifier */
  const __vue_module_identifier__$f = undefined;
  /* functional template */
  const __vue_is_functional_template__$f = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var CheckboxField$1 = normalizeComponent(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$f,
    __vue_script__$f,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    undefined,
    undefined
  );

//
var script$g = {
  name: 'city-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    InputField
  }
};

/* script */
            const __vue_script__$g = script$g;
            
/* template */
var __vue_render__$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("input-field", {
    attrs: {
      id: "city",
      name: "city",
      placeholder: "City",
      label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
      required: _vm.question.required,
      errors: _vm.errors
    },
    on: { input: _vm.updated },
    model: {
      value: _vm.form.city,
      callback: function($$v) {
        _vm.$set(_vm.form, "city", $$v);
      },
      expression: "form.city"
    }
  })
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

  /* style */
  const __vue_inject_styles__$g = undefined;
  /* scoped */
  const __vue_scope_id__$g = undefined;
  /* module identifier */
  const __vue_module_identifier__$g = undefined;
  /* functional template */
  const __vue_is_functional_template__$g = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var CityField = normalizeComponent(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$g,
    __vue_script__$g,
    __vue_scope_id__$g,
    __vue_is_functional_template__$g,
    __vue_module_identifier__$g,
    undefined,
    undefined
  );

var HasSlots = {

    methods: {

        getSlot(slot) {
            return this.$slots[slot];
        },

        hasSlot(slot) {
            return !!this.$slots[slot];
        },

        hasSlots(slots) {
            for(let i in slots) {
                if(!this.hasSlot(slots[i])) {
                    return false;
                }
            }
        }

    },

    computed: {

        hasDefaultSlot() {
            return this.hasSlot('default');
        }

    }

};

var Sizeable = {

    props: {

        /**
         * The size of the form control
         *
         * @property String
         */
        size: {
            type: String,
            default: 'md',
            validate: value => ['sm', 'md', 'lg'].indexOf(value) !== -1
        }

    },

    computed: {

        sizeableClassPrefix() {
            return this.$options.name;
        },

        sizeableClass() {
            return prefix(this.size, this.sizeableClassPrefix);
        }

    }

};

//
//
//
//
//
//
//
//

var script$h = {

    name: 'input-group-text',

    props: {

        /**
         * The id attribute
         *
         * @property String
         */
        id: String,

        /**
         * The type attribute
         *
         * @property String
         */
        text: [Array, Number, String]

    }

};

/* script */
            const __vue_script__$h = script$h;
            
/* template */
var __vue_render__$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    { staticClass: "input-group-text", attrs: { id: _vm.id } },
    [_vm._t("default", [_vm._v(_vm._s(_vm.text))])],
    2
  )
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  const __vue_inject_styles__$h = undefined;
  /* scoped */
  const __vue_scope_id__$h = undefined;
  /* module identifier */
  const __vue_module_identifier__$h = undefined;
  /* functional template */
  const __vue_is_functional_template__$h = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var InputGroupText = normalizeComponent(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$h,
    __vue_script__$h,
    __vue_scope_id__$h,
    __vue_is_functional_template__$h,
    __vue_module_identifier__$h,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//

var script$i = {

    name: 'input-group-append',

    props: {

        /**
         * The type attribute
         *
         * @property String
         */
        text: Boolean

    }

};

/* script */
            const __vue_script__$i = script$i;
            
/* template */
var __vue_render__$f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "input-group-append" },
    [
      _vm.text
        ? _c("input-group-text", [_vm._t("default")], 2)
        : _vm._t("default")
    ],
    2
  )
};
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

  /* style */
  const __vue_inject_styles__$i = undefined;
  /* scoped */
  const __vue_scope_id__$i = undefined;
  /* module identifier */
  const __vue_module_identifier__$i = undefined;
  /* functional template */
  const __vue_is_functional_template__$i = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var InputGroupAppend = normalizeComponent(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$i,
    __vue_script__$i,
    __vue_scope_id__$i,
    __vue_is_functional_template__$i,
    __vue_module_identifier__$i,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//

var script$j = {

    name: 'input-group-prepend',

    props: {

        /**
         * The type attribute
         *
         * @property String
         */
        text: Boolean

    }

};

/* script */
            const __vue_script__$j = script$j;
            
/* template */
var __vue_render__$g = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "input-group-prepend" },
    [
      _vm.text
        ? _c("input-group-text", [_vm._t("default")], 2)
        : _vm._t("default")
    ],
    2
  )
};
var __vue_staticRenderFns__$g = [];
__vue_render__$g._withStripped = true;

  /* style */
  const __vue_inject_styles__$j = undefined;
  /* scoped */
  const __vue_scope_id__$j = undefined;
  /* module identifier */
  const __vue_module_identifier__$j = undefined;
  /* functional template */
  const __vue_is_functional_template__$j = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var InputGroupPrepend = normalizeComponent(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$j,
    __vue_script__$j,
    __vue_scope_id__$j,
    __vue_is_functional_template__$j,
    __vue_module_identifier__$j,
    undefined,
    undefined
  );

//

var script$k = {

    name: 'input-group',

    components: {
        InputGroupText,
        InputGroupAppend,
        InputGroupPrepend
    },

    mixins: [
        HasSlots,
        Sizeable,
        Colorable,
        MergeClasses
    ],

    props: {

        append: [Array, Number, String],

        prepend: [Array, Number, String]

    }

};

/* script */
            const __vue_script__$k = script$k;
            
/* template */
var __vue_render__$h = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "input-group",
      class: _vm.mergeClasses(_vm.colorableClasses, _vm.sizeableClass)
    },
    [
      _vm._t("prepend", [
        _vm.prepend instanceof Array
          ? [
              _c(
                "input-group-prepend",
                _vm._l(_vm.prepend, function(value) {
                  return _c("input-group-text", {
                    key: value,
                    attrs: { text: value }
                  })
                })
              )
            ]
          : _vm.prepend
            ? [
                _c("input-group-prepend", { attrs: { text: "" } }, [
                  _vm._v(_vm._s(_vm.prepend))
                ])
              ]
            : _vm._e()
      ]),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _vm._t("append", [
        _vm.append instanceof Array
          ? [
              _c(
                "input-group-append",
                _vm._l(_vm.append, function(value) {
                  return _c("input-group-text", {
                    key: value,
                    attrs: { text: value }
                  })
                })
              )
            ]
          : _vm.append
            ? [
                _c("input-group-append", { attrs: { text: "" } }, [
                  _vm._v(_vm._s(_vm.append))
                ])
              ]
            : _vm._e()
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$h = [];
__vue_render__$h._withStripped = true;

  /* style */
  const __vue_inject_styles__$k = undefined;
  /* scoped */
  const __vue_scope_id__$k = undefined;
  /* module identifier */
  const __vue_module_identifier__$k = undefined;
  /* functional template */
  const __vue_is_functional_template__$k = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var InputGroup = normalizeComponent(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$k,
    __vue_script__$k,
    __vue_scope_id__$k,
    __vue_is_functional_template__$k,
    __vue_module_identifier__$k,
    undefined,
    undefined
  );

//
var script$l = {
  name: 'dollar-amount-field',
  extends: SurveyField,
  components: {
    InputGroup,
    RadioField
  },
  computed: {
    amounts() {
      const values = this.question.answers ? this.question.answers.split('|') : this.page.site.config.giveworks.ask_amounts;
      return chunk(values.filter(value => {
        return value >= (parseFloat(this.page.options.min_amount) || 0);
      }), 2);
    }

  }
};

/* script */
            const __vue_script__$l = script$l;
            
/* template */
var __vue_render__$i = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "form-group" }, [
    _c(
      "fieldset",
      [
        _c("legend", [_vm._v("Select an amount")]),
        _vm._v(" "),
        _vm._l(_vm.amounts, function(chunk) {
          return _c(
            "div",
            { staticClass: "row" },
            _vm._l(chunk, function(amount) {
              return _c(
                "div",
                { staticClass: "col-sm-6" },
                [
                  _c("radio-field", {
                    attrs: { name: "donation", label: amount, value: amount },
                    model: {
                      value: _vm.form.donation,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "donation", $$v);
                      },
                      expression: "form.donation"
                    }
                  })
                ],
                1
              )
            })
          )
        }),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("label", {
                attrs: { for: _vm.question.id },
                domProps: { innerHTML: _vm._s(_vm.question.question) }
              }),
              _vm._v(" "),
              _c("input-group", { attrs: { prepend: "$" } }, [
                _c("input", {
                  staticClass: "form-control",
                  class: { "is-invalid": !!_vm.invalidFeedback },
                  attrs: {
                    type: "text",
                    name: _vm.name,
                    required: _vm.question.required
                  },
                  domProps: { value: _vm.value }
                })
              ])
            ],
            1
          )
        ])
      ],
      2
    )
  ])
};
var __vue_staticRenderFns__$i = [];
__vue_render__$i._withStripped = true;

  /* style */
  const __vue_inject_styles__$l = undefined;
  /* scoped */
  const __vue_scope_id__$l = undefined;
  /* module identifier */
  const __vue_module_identifier__$l = undefined;
  /* functional template */
  const __vue_is_functional_template__$l = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var DollarAmountField = normalizeComponent(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$l,
    __vue_script__$l,
    __vue_scope_id__$l,
    __vue_is_functional_template__$l,
    __vue_module_identifier__$l,
    undefined,
    undefined
  );

//
var script$m = {
  name: 'first-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    InputField
  }
};

/* script */
            const __vue_script__$m = script$m;
            
/* template */
var __vue_render__$j = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("input-field", {
    attrs: {
      id: "first",
      name: "first",
      placeholder: "First Name",
      label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
      required: _vm.question.required,
      errors: _vm.errors
    },
    on: { input: _vm.updated },
    model: {
      value: _vm.form.first,
      callback: function($$v) {
        _vm.$set(_vm.form, "first", $$v);
      },
      expression: "form.first"
    }
  })
};
var __vue_staticRenderFns__$j = [];
__vue_render__$j._withStripped = true;

  /* style */
  const __vue_inject_styles__$m = undefined;
  /* scoped */
  const __vue_scope_id__$m = undefined;
  /* module identifier */
  const __vue_module_identifier__$m = undefined;
  /* functional template */
  const __vue_is_functional_template__$m = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var FirstField = normalizeComponent(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$m,
    __vue_script__$m,
    __vue_scope_id__$m,
    __vue_is_functional_template__$m,
    __vue_module_identifier__$m,
    undefined,
    undefined
  );

var script$n = {
  name: 'input-field',
  extends: InputField
};

/* script */
            const __vue_script__$n = script$n;
            
/* template */

  /* style */
  const __vue_inject_styles__$n = undefined;
  /* scoped */
  const __vue_scope_id__$n = undefined;
  /* module identifier */
  const __vue_module_identifier__$n = undefined;
  /* functional template */
  const __vue_is_functional_template__$n = undefined;
  /* style inject */
  
  /* style inject SSR */
  

  
  var InputField$1 = normalizeComponent(
    {},
    __vue_inject_styles__$n,
    __vue_script__$n,
    __vue_scope_id__$n,
    __vue_is_functional_template__$n,
    __vue_module_identifier__$n,
    undefined,
    undefined
  );

//
var script$o = {
  name: 'last-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    InputField
  }
};

/* script */
            const __vue_script__$o = script$o;
            
/* template */
var __vue_render__$k = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("input-field", {
    attrs: {
      id: "last",
      name: "last",
      placeholder: "Last Name",
      label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
      required: _vm.question.required,
      errors: _vm.errors
    },
    on: { input: _vm.updated },
    model: {
      value: _vm.form.last,
      callback: function($$v) {
        _vm.$set(_vm.form, "last", $$v);
      },
      expression: "form.last"
    }
  })
};
var __vue_staticRenderFns__$k = [];
__vue_render__$k._withStripped = true;

  /* style */
  const __vue_inject_styles__$o = undefined;
  /* scoped */
  const __vue_scope_id__$o = undefined;
  /* module identifier */
  const __vue_module_identifier__$o = undefined;
  /* functional template */
  const __vue_is_functional_template__$o = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var LastField = normalizeComponent(
    { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
    __vue_inject_styles__$o,
    __vue_script__$o,
    __vue_scope_id__$o,
    __vue_is_functional_template__$o,
    __vue_module_identifier__$o,
    undefined,
    undefined
  );

//
var script$p = {
  name: 'primary-email-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    InputField
  }
};

/* script */
            const __vue_script__$p = script$p;
            
/* template */
var __vue_render__$l = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("input-field", {
    attrs: {
      type: "email",
      name: "email",
      placeholder: "Email Address",
      id: "email",
      label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
      required: _vm.question.required,
      errors: _vm.errors
    },
    on: { input: _vm.updated },
    model: {
      value: _vm.form.email,
      callback: function($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })
};
var __vue_staticRenderFns__$l = [];
__vue_render__$l._withStripped = true;

  /* style */
  const __vue_inject_styles__$p = undefined;
  /* scoped */
  const __vue_scope_id__$p = undefined;
  /* module identifier */
  const __vue_module_identifier__$p = undefined;
  /* functional template */
  const __vue_is_functional_template__$p = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PrimaryEmailField = normalizeComponent(
    { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
    __vue_inject_styles__$p,
    __vue_script__$p,
    __vue_scope_id__$p,
    __vue_is_functional_template__$p,
    __vue_module_identifier__$p,
    undefined,
    undefined
  );

//
var script$q = {
  name: 'primary-phone-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    InputField
  }
};

/* script */
            const __vue_script__$q = script$q;
            
/* template */
var __vue_render__$m = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("input-field", {
    attrs: {
      type: "phone",
      name: "phone",
      id: "phone",
      label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
      required: _vm.question.required,
      errors: _vm.errors
    },
    on: { input: _vm.updated },
    model: {
      value: _vm.form.phone,
      callback: function($$v) {
        _vm.$set(_vm.form, "phone", $$v);
      },
      expression: "form.phone"
    }
  })
};
var __vue_staticRenderFns__$m = [];
__vue_render__$m._withStripped = true;

  /* style */
  const __vue_inject_styles__$q = undefined;
  /* scoped */
  const __vue_scope_id__$q = undefined;
  /* module identifier */
  const __vue_module_identifier__$q = undefined;
  /* functional template */
  const __vue_is_functional_template__$q = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PrimaryPhoneField = normalizeComponent(
    { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
    __vue_inject_styles__$q,
    __vue_script__$q,
    __vue_scope_id__$q,
    __vue_is_functional_template__$q,
    __vue_module_identifier__$q,
    undefined,
    undefined
  );

//
var script$r = {
  name: 'radio-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    RadioField,
    FormFeedback
  }
};

/* script */
            const __vue_script__$r = script$r;
            
/* template */
var __vue_render__$n = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form-group",
    { class: { "is-invalid": !!_vm.invalidFeedback } },
    [
      _c("label", [
        _vm._v("\n        " + _vm._s(_vm.question.question) + " "),
        _vm.question.required ? _c("sup", [_vm._v("*")]) : _vm._e()
      ]),
      _vm._v(" "),
      _vm._l(_vm.question.answers, function(answer, key) {
        return _c("radio-field", {
          key: key,
          attrs: {
            label: answer,
            value: answer,
            checkedValue: _vm.value,
            name: _vm.name,
            id: _vm.name + "_" + key
          },
          on: { change: _vm.updated },
          model: {
            value: _vm.form[_vm.name],
            callback: function($$v) {
              _vm.$set(_vm.form, _vm.name, $$v);
            },
            expression: "form[name]"
          }
        })
      }),
      _vm._v(" "),
      _vm.question.accept_other
        ? [
            _c("radio-field", {
              directives: [{ name: "changed", rawName: "v-changed" }],
              attrs: {
                value: "other",
                label: "Other:",
                name: _vm.name,
                id: _vm.name + "_50",
                checkedValue: _vm.value
              },
              on: { change: _vm.updated },
              model: {
                value: _vm.form[_vm.name],
                callback: function($$v) {
                  _vm.$set(_vm.form, _vm.name, $$v);
                },
                expression: "form[name]"
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form[_vm.name + "_other"],
                  expression: "form[`${name}_other`]"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.errors[_vm.name] },
              attrs: {
                type: "text",
                name: _vm.name + "_other",
                id: _vm.name + "_other"
              },
              domProps: { value: _vm.form[_vm.name + "_other"] },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, _vm.name + "_other", $event.target.value);
                  },
                  function($event) {
                    _vm.updated($event.target.value);
                  }
                ]
              }
            })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm._t("feedback", [
        _vm.validFeedback
          ? _c("form-feedback", {
              attrs: { valid: "" },
              domProps: { innerHTML: _vm._s(_vm.validFeedback) }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.invalidFeedback
          ? _c("form-feedback", {
              attrs: { invalid: "" },
              domProps: { innerHTML: _vm._s(_vm.invalidFeedback) }
            })
          : _vm._e()
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$n = [];
__vue_render__$n._withStripped = true;

  /* style */
  const __vue_inject_styles__$r = undefined;
  /* scoped */
  const __vue_scope_id__$r = undefined;
  /* module identifier */
  const __vue_module_identifier__$r = undefined;
  /* functional template */
  const __vue_is_functional_template__$r = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var RadioField$1 = normalizeComponent(
    { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
    __vue_inject_styles__$r,
    __vue_script__$r,
    __vue_scope_id__$r,
    __vue_is_functional_template__$r,
    __vue_module_identifier__$r,
    undefined,
    undefined
  );

//

const CUSTOM_SELECT_PREFIX = 'custom-select-';

var script$s = {

    name: 'select-field',

    components: {
        ActivityIndicator,
        HelpText,
        FormControl: FormControl$1,
        FormGroup,
        FormLabel,
        FormFeedback
    },

    mixins: [
        Colorable,
        MergeClasses,
        FormControl
    ],

    props: {

        /**
         * Show type activity indicator.
         *
         * @property Boolean
         */
        activity: {
            type: Boolean,
            default: false
        },

        /**
         * Add `custom-select` to the form control if true.
         *
         * @property String
         */
        custom: Boolean

    },

    computed: {

        controlClass() {
            const controlClass = this.custom ? 'custom-select' : this.defaultControlClass;
            return this.plaintext ? `${controlClass}-plaintext` : controlClass;
        },

        customSelectClasses() {
            return [
                CUSTOM_SELECT_PREFIX.replace(/-$/, '') + (this.plaintext ? '-plaintext' : ''),
                this.customSelectSizeClass,
                (this.spacing || '')
            ].join(' ');
        }
    }

};

/* script */
            const __vue_script__$s = script$s;
/* template */
var __vue_render__$o = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form-group",
    { class: { "has-activity": _vm.activity } },
    [
      _vm._t("label", [
        _vm.label
          ? _c("form-label", {
              attrs: { for: _vm.id },
              domProps: { innerHTML: _vm._s(_vm.label) }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group-inner" },
        [
          _vm._t("control", [
            _c(
              "select",
              _vm._b(
                {
                  directives: [
                    { name: "bind-events", rawName: "v-bind-events" }
                  ],
                  domProps: { value: _vm.value },
                  on: {
                    input: function($event) {
                      _vm.$emit("input", $event.target.value);
                    }
                  }
                },
                "select",
                _vm.controlAttributes,
                false
              ),
              [_vm._t("default")],
              2
            )
          ]),
          _vm._v(" "),
          _vm._t("activity", [
            _c(
              "transition",
              { attrs: { name: "slide-fade" } },
              [
                _vm.activity
                  ? _c("activity-indicator", {
                      key: "test",
                      ref: "activity",
                      attrs: { type: "dots", size: _vm.size }
                    })
                  : _vm._e()
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm._t("feedback", [
            _vm.validFeedback
              ? _c("form-feedback", {
                  attrs: { valid: "" },
                  domProps: { innerHTML: _vm._s(_vm.validFeedback) }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.invalidFeedback
              ? _c("form-feedback", {
                  attrs: { invalid: "" },
                  domProps: { innerHTML: _vm._s(_vm.invalidFeedback) }
                })
              : _vm._e()
          ])
        ],
        2
      ),
      _vm._v(" "),
      _vm._t("help", [
        _vm.helpText
          ? _c("help-text", { domProps: { innerHTML: _vm._s(_vm.helpText) } })
          : _vm._e()
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$o = [];
__vue_render__$o._withStripped = true;

  /* style */
  const __vue_inject_styles__$s = undefined;
  /* scoped */
  const __vue_scope_id__$s = undefined;
  /* module identifier */
  const __vue_module_identifier__$s = undefined;
  /* functional template */
  const __vue_is_functional_template__$s = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var SelectField = normalizeComponent(
    { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
    __vue_inject_styles__$s,
    __vue_script__$s,
    __vue_scope_id__$s,
    __vue_is_functional_template__$s,
    __vue_module_identifier__$s,
    undefined,
    undefined
  );

//
var script$t = {
  name: 'select-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    SelectField
  }
};

/* script */
            const __vue_script__$t = script$t;
            
/* template */
var __vue_render__$p = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "select-field",
    {
      attrs: {
        label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
        name: _vm.name,
        id: _vm.question.id,
        errors: _vm.errors,
        required: _vm.question.required
      },
      on: { input: _vm.updated },
      model: {
        value: _vm.form[_vm.name],
        callback: function($$v) {
          _vm.$set(_vm.form, _vm.name, $$v);
        },
        expression: "form[name]"
      }
    },
    _vm._l(_vm.question.answers, function(value, key) {
      return _c("option", {
        domProps: { value: value, innerHTML: _vm._s(value) }
      })
    })
  )
};
var __vue_staticRenderFns__$p = [];
__vue_render__$p._withStripped = true;

  /* style */
  const __vue_inject_styles__$t = undefined;
  /* scoped */
  const __vue_scope_id__$t = undefined;
  /* module identifier */
  const __vue_module_identifier__$t = undefined;
  /* functional template */
  const __vue_is_functional_template__$t = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var SelectField$1 = normalizeComponent(
    { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
    __vue_inject_styles__$t,
    __vue_script__$t,
    __vue_scope_id__$t,
    __vue_is_functional_template__$t,
    __vue_module_identifier__$t,
    undefined,
    undefined
  );

//
var script$u = {
  name: 'state-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    SelectField
  }
};

/* script */
            const __vue_script__$u = script$u;
            
/* template */
var __vue_render__$q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "select-field",
    {
      attrs: {
        name: "state",
        id: _vm.question.id,
        label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
        required: _vm.question.required,
        errors: _vm.errors
      },
      on: { input: _vm.updated },
      model: {
        value: _vm.form.state,
        callback: function($$v) {
          _vm.$set(_vm.form, "state", $$v);
        },
        expression: "form.state"
      }
    },
    _vm._l(_vm.page.site.config.states, function(label, value) {
      return _c("option", {
        domProps: { value: value, innerHTML: _vm._s(label) }
      })
    })
  )
};
var __vue_staticRenderFns__$q = [];
__vue_render__$q._withStripped = true;

  /* style */
  const __vue_inject_styles__$u = undefined;
  /* scoped */
  const __vue_scope_id__$u = undefined;
  /* module identifier */
  const __vue_module_identifier__$u = undefined;
  /* functional template */
  const __vue_is_functional_template__$u = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var StateField = normalizeComponent(
    { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
    __vue_inject_styles__$u,
    __vue_script__$u,
    __vue_scope_id__$u,
    __vue_is_functional_template__$u,
    __vue_module_identifier__$u,
    undefined,
    undefined
  );

function camelCase$1(string) {
    string = string.toLowerCase().replace(/(?:(^.)|([-_\s]+.))/g, function(match) {
        return match.charAt(match.length - 1).toUpperCase();
    });

    return string.charAt(0).toLowerCase() + string.substring(1);
}

function extend$1(...args) {
    return Object.assign(...args);
}

function isNull$1(value) {
    return value === null;
}

function isArray$1(value) {
    return Array.isArray(value);
}

function isObject$1(value) {
    return (typeof value === 'object') && !isNull$1(value) && !isArray$1(value);
}

function isNumber$1(value) {
    return (typeof value === 'number') || (
        value ? value.toString() === '[object Number]' : false
    );
}

function isNumeric$1(value) {
    return isNumber$1(value) || (!!value && !!value.toString().match(/^-?[\d.,]+$/));
}

function key$1(value) {
    return isNumeric$1(value) ? parseFloat(value) : value;
}

function each$1(subject, fn) {
    for (const i in subject) {
        fn(subject[i], key$1(i));
    }
}

function matches$1(properties) {
    return subject => {
        for (const i in properties) {
            if (isObject$1(properties[i])) {
                return subject[i] ? matches$1(properties[i])(subject[i]) : false;
            }
            else if (!subject || subject[i] !== properties[i]) {
                return false;
            }
        }

        return true;
    };
}

function isString$1(value) {
    return typeof value === 'string';
}

function get$1(object, path) {
    return (isString$1(path) ? path.split('.') : (!isArray$1(path) ? [path] : path)).reduce((a, b) => a[b], object);
}

function property$1(path) {
    return object => {
        return get$1(object, path);
    };
}

function isFunction$1(value) {
    return value instanceof Function;
}

function matchesProperty$1(path, value) {
    return subject => {
        return get$1(subject, path) === value;
    };
}

function predicate$1(value) {
    if (isObject$1(value)) {
        value = matches$1(value);
    }
    else if (isArray$1(value)) {
        value = matchesProperty$1(value[0], value[1]);
    }
    else if (!isFunction$1(value)) {
        value = property$1(value);
    }

    return value;
}

function isBoolean$1(value) {
    return value === true || value === false;
}

function isUndefined$1(value) {
    return typeof value === 'undefined';
}

function kebabCase$1(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .replace(/_/g, '-')
        .toLowerCase();
}

function mapKeys$1(object, fn) {
    const mapped = {};

    each$1(object, (value, key) => {
        mapped[fn(value, key)] = value;
    });

    return mapped;
}

function negate$1(fn) {
    return (...args) => isFunction$1(fn) ? !fn(...args) : !fn;
}

function pickBy$1(object, match) {
    const subject = {};

    each$1(object, (value, key) => {
        if (predicate$1(match)(value)) {
            subject[key] = value;
        }
    });

    return subject;
}

function omitBy$1(object, fn) {
    return pickBy$1(object, negate$1(fn));
}

var ALIASES = {
  'street': ['street_number', 'route', 'intersection'],
  'city': ['locality'],
  'state': ['administrative_area_level_1'],
  'zip': ['postal_code'],
  'zipcode': ['postal_code'],
  'county': ['administrative_area_level_2']
};

function intersection(a, b) {
  return a.filter(function (value) {
    return b.indexOf(value) !== -1;
  }).filter(function (e, i, c) {
    return c.indexOf(e) === i;
  });
}

function extract(type, modifiers, geocoder) {
  if (geocoder[type]) {
    return geocoder[type];
  } else if (type === 'latitude') {
    return geocoder.geometry.location.lat();
  } else if (type === 'longitude') {
    return geocoder.geometry.location.lng();
  }

  var aliases = ALIASES[type] || (isArray$1(type) ? type : [type]);
  var values = geocoder.address_components.map(function (component) {
    if (intersection(component.types, aliases).length) {
      return component[modifiers.short ? 'short_name' : 'long_name'];
    }
  }).filter(function (value) {
    return !!value;
  });
  return values.length ? values.join(' ') : null;
}

function update(binding, vnode, value) {
  var props = binding.expression.split('.');
  var prop = props.pop();
  var model = props.reduce(function (carry, i) {
    return carry[i];
  }, vnode.context);
  value = isArray$1(value) ? value.join(' ') : value;

  if (binding.modifiers.query) {
    vnode.componentInstance.query = value;
  }

  model[prop] = value;
  return value;
}

var PlaceAutofill = {
  bind: function bind(el, binding, vnode) {
    vnode.componentInstance.$on('select', function (place, geocoder) {
      vnode.context.$nextTick(function () {
        update(binding, vnode, extract(binding.arg, binding.modifiers, geocoder));
      });
    });
  }
};

function geocode(options) {
  var geocoder = new window.google.maps.Geocoder();
  return new Promise(function (resolve, reject) {
    if (!options.geometry) {
      geocoder.geocode(options, function (results, status) {
        if (status === window.google.maps.GeocoderStatus.OK) {
          resolve(results);
        } else {
          reject(status);
        }
      });
    } else {
      resolve([options]);
    }
  });
}

const LOADED_SCRIPTS = {};

function element(url) {
    const script = document.createElement('script');
    script.setAttribute('src', url);
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'utf-8');
    return script;
}

function append(script) {
    if (document.querySelector('head')) {
        document.querySelector('head').appendChild(script);
    }
    else {
        document.querySelector('body').appendChild(script);
    }

    return script;
}

function script$v(url) {
    if (LOADED_SCRIPTS[url] instanceof Promise) {
        return LOADED_SCRIPTS[url];
    }
    else if (LOADED_SCRIPTS[url] || document.querySelector(`script[src="${url}"]`)) {
        return new Promise((resolve, reject) => {
            resolve(LOADED_SCRIPTS[url]);
        });
    }

    LOADED_SCRIPTS[url] = new Promise((resolve, reject) => {
        try {
            append(element(url)).addEventListener('load', event => {
                resolve(LOADED_SCRIPTS[url] = event);
            });
        }
        catch (e) {
            reject(e);
        }
    });

    return LOADED_SCRIPTS[url];
}

var PlaceAutocompleteListItem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"autocomplete-list-item",on:{"focus":_vm.onFocus,"onBlur":_vm.onBlur}},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.onClick($event)},"focus":_vm.onFocus,"blur":_vm.onBlur}},[_c('span',{staticClass:"autocomplete-list-item-icon"}),_vm._v(" "),_c('span',{staticClass:"autocomplete-list-item-label"},[_vm._t("default")],2)])])},staticRenderFns: [],

    name: 'place-autocomplete-list-item',

    props: {

        item: Object

    },

    methods: {

        onBlur(event) {
            this.$emit('blur', event, this);
        },

        onClick(event) {
            this.$emit('click', event, this);
        },

        onFocus(event) {
            this.$emit('focus', event, this);
        }

    }

};

var PlaceAutocompleteList = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"autocomplete-list-wrapper"},[_c('ul',{staticClass:"autocomplete-list"},_vm._l((_vm.items),function(item,i){return _c('place-autocomplete-list-item',{key:item.id,attrs:{"item":item},on:{"click":_vm.onClick,"focus":_vm.onFocus,"blur":_vm.onBlur}},[_vm._v(" "+_vm._s(item[_vm.display])+" ")])}))])},staticRenderFns: [],

    name: 'place-autocomplete-list',

    components: {
        PlaceAutocompleteListItem
    },

    props: {

        'items': {
            type: Array,
            default: () => {
                return [];
            }
        },

        'display': {
            type: String,
            default: 'description'
        }

    },

    methods: {

        onBlur(event, item) {
            this.$emit('item:blur', event, item);
        },

        onFocus(event, item) {
            this.$emit('item:focus', event, item);
        },

        onClick(event, item) {
            this.$emit('item:click', event, item);
        }

    }

};

function prefix$1(subject, prefix, delimeter = '-') {
    const prefixer = (value, key$$1) => {
        const string = (key$$1 || value)
            .replace(new RegExp(`^${prefix}${delimeter}?`), '');

        return [prefix, string].filter(value => !!value).join(delimeter);
    };

    if (isBoolean$1(subject)) {
        return subject;
    }

    if (isObject$1(subject)) {
        return mapKeys$1(subject, prefixer);
    }

    return prefixer(subject);
}

var FormControl$2 = {

    props: {

        /**
         * The autocomplete attribute value.
         *
         * @property String
         */
        autocomplete: String,

        /**
         * The field id attribute value.
         *
         * @property String
         */
        id: [Number, String],

        /**
         * The value of label element. If no value, no label will appear.
         *
         * @property String
         */
        label: [Number, String],

        /**
         * The field name attribute value.
         *
         * @property String
         */
        name: String,

        /**
         * The field id attribute value.
         *
         * @property String
         */
        value: {
            default: null
        },

        /**
         * The placeholder attribute value.
         *
         * @property String
         */
        placeholder: String,

        /**
         * Is the field required.
         *
         * @property String
         */
        required: Boolean,

        /**
         * Add form-group wrapper to input
         *
         * @property String
         */
        group: {
            type: Boolean,
            value: true
        },

        /**
         * The regex pattern for validation.
         *
         * @property String
         */
        pattern: String,

        /**
         * An inline field validation error.
         *
         * @property String|Boolean
         */
        error: String,

        /**
         * An inline field validation errors passed as object with key/value
         * pairs. If errors passed as an object, the form name will be used for
         * the key.
         *
         * @property Object|Boolean
         */
        errors: {
            type: Object,
            default() {
                return {};
            }
        },

        /**
         * Some feedback to add to the field once the field is successfully
         * valid.
         *
         * @property String
         */
        feedback: [String, Array],

        /**
         * An array of event names that correlate with callback functions
         *
         * @property Function
         */
        bindEvents: {
            type: Array,
            default() {
                return ['focus', 'blur', 'change', 'click', 'keyup', 'keydown', 'progress', 'paste'];
            }
        },

        /**
         * The default class name assigned to the control element
         *
         * @property String
         */
        defaultControlClass: {
            type: String,
            default: 'form-control'
        },

        /**
         * Hide the label for browsers, but leave it for screen readers.
         *
         * @property String
         */
        hideLabel: Boolean,

        /**
         * Additional margin/padding classes for fine control of spacing
         *
         * @property String
         */
        spacing: String,

        /**
         * The size of the form control
         *
         * @property String
         */
        size: {
            type: String,
            default: 'md',
            validate: value => ['sm', 'md', 'lg'].indexOf(value) !== -1
        },

        /**
         * Display the form field inline
         *
         * @property String
         */
        inline: Boolean,

        /**
         * If the form control is readonly, display only as text?
         *
         * @property String
         */
        plaintext: Boolean,

        /**
         * Is the form control readonly?
         *
         * @property String
         */
        readonly: Boolean,

        /**
         * Is the form control disabled?
         *
         * @property String
         */
        disabled: Boolean,

        /**
         * Some instructions to appear under the field label
         *
         * @property String
         */
        helpText: [Number, String],

        /**
         * The maxlength attribute
         *
         * @property String
         */
        maxlength: [Number, String]

    },

    directives: {
        bindEvents: {
            bind(el, binding, vnode) {
                const events = binding.value || vnode.context.bindEvents;

                each$1(events, name => {
                    el.addEventListener(name, event => {
                        vnode.context.$emit(name, event);
                    });
                });
            }
        }
    },

    methods: {

        blur() {
            if (this.getInputField()) {
                this.getInputField().blur();
            }
        },

        focus() {
            if (this.getInputField()) {
                this.getInputField().focus();
            }
        },

        getInputField() {
            return this.$el.querySelector('.form-control, input, select, textarea');
        },

        getFieldErrors() {
            let errors = this.error || this.errors;

            if (isObject$1(this.errors)) {
                errors = this.errors[this.name || this.id];
            }

            return !errors || isArray$1(errors) || isObject$1(errors) ? errors : [errors];
        }

    },

    computed: {

        callbacks() {
            return this.bindEvents.map(event => {
                return {
                    name: event,
                    callback: this[camelCase$1(['on', event].join(' '))]
                };
            }).filter(event => !isUndefined$1(event.callback));
        },

        invalidFeedback() {
            if (this.error) {
                return this.error;
            }

            const errors = this.getFieldErrors();

            return isArray$1(errors) ? errors.join('<br>') : errors;
        },

        validFeedback() {
            return isArray$1(this.feedback) ? this.feedback.join('<br>') : this.feedback;
        },

        controlClass() {
            return this.defaultControlClass + (this.plaintext ? '-plaintext' : '');
        },

        controlSizeClass() {
            return prefix$1(this.size, this.controlClass);
        },

        controlClasses() {
            return [
                this.controlClass,
                this.controlSizeClass,
                (this.spacing || ''),
                (this.invalidFeedback ? 'is-invalid' : '')
            ].join(' ');
        },

        hasDefaultSlot() {
            return !!this.$slots.default;
        }

    }

};

var FormGroup$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'form-group'

};

const VueInstaller = {
    use,
    script: script$v,
    plugin,
    plugins,
    filter,
    filters,
    component,
    components,
    directive,
    directives,
    $plugins: {},
    $filters: {},
    $directives: {},
    $components: {}
};

function use(plugin) {
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(plugin);
    }

    return plugin;
}

function plugin(Vue, name, def) {
    if (!VueInstaller.$plugins[name]) {
        Vue.use(VueInstaller.$plugins[name] = def);
    }
}

function plugins(Vue, plugins) {
    each$1(plugins, (def, name) => {
        plugin(Vue, name, def);
    });
}

function filter(Vue, name, def) {
    if (!VueInstaller.$filters[name]) {
        Vue.use(VueInstaller.$filters[name] = def);
    }
}

function filters(Vue, filters) {
    each$1(filters, (def, name) => {
        filter(Vue, name, def);
    });
}

function component(Vue, name, def) {
    if (!VueInstaller.$components[name]) {
        Vue.component(name, VueInstaller.$components[name] = def);
    }
}

function components(Vue, components) {
    each$1(components, (def, name) => {
        component(Vue, name, def);
    });
}

function directive(Vue, name, def) {
    if (!VueInstaller.$directives[name]) {
        if (isFunction$1(def)) {
            Vue.use(VueInstaller.$directives[name] = def);
        }
        else {
            Vue.directive(name, def);
        }
    }
}

function directives(Vue, directives) {
    each$1(directives, (def, name) => {
        directive(Vue, name, def);
    });
}

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FormGroup: FormGroup$1
        });
    }

});

const COLORS = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'white',
    'muted'
];

const props = {};

each$1(['border', 'text', 'bg', 'bg-gradient'], namespace => {
    each$1(COLORS, color => {
        props[camelCase$1(prefix$1(color, namespace))] = Boolean;
    });
});

function classes(instance, namespace) {
    return COLORS.map(color => {
        return instance[camelCase$1(color = prefix$1(color, namespace))] ? color : null;
    })
        .filter(value => !!value);
}

var Colorable$1 = {

    props: props,

    methods: {

        textColor() {
            return classes(this, 'text');
        },

        bgColor() {
            return classes(this, 'bg');
        },

        borderColor() {
            return classes(this, 'border');
        },

        bgGradientColor() {
            return classes(this, 'bg-gradient');
        }

    },

    computed: {

        textColorClasses() {
            return this.textColor().join(' ').trim() || null;
        },

        borderColorClasses() {
            return this.borderColor().join(' ').trim() || null;
        },

        bgColorClasses() {
            return this.bgColor().join(' ').trim() || null;
        },

        bgGradientColorClasses() {
            return this.bgGradientColor().join(' ').trim() || null;
        },

        colorableClasses() {
            const classes = {};

            classes[this.textColorClasses] = !!this.textColorClasses;
            classes[this.borderColorClasses] = !!this.borderColorClasses;
            classes[this.bgColorClasses] = !!this.bgColorClasses;
            classes[this.bgGradientColorClasses] = !!this.bgGradientColorClasses;

            return omitBy$1(classes, (key$$1, value) => {
                return !key$$1 || !value;
            });
        }

    }

};

var Screenreaders$1 = {

    props: {

        /**
         * Should show only for screenreaders
         *
         * @property Boolean
         */
        srOnly: Boolean,

        /**
         * Should be focusable for screenreaders
         *
         * @property Boolean
         */
        srOnlyFocusable: Boolean

    },

    computed: {
        screenreaderClasses() {
            return {
                'sr-only': this.srOnly,
                'sr-only-focusable': this.srOnlyFocusable
            };
        }
    }

};

var HelpText$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('small',{staticClass:"form-text",class:_vm.classes},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'help-text',

    mixins: [
        Colorable$1,
        Screenreaders$1
    ],

    computed: {
        classes() {
            return extend$1({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

};

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            HelpText: HelpText$1
        });
    }

});

var FormLabel$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.classes},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'form-label',

    mixins: [
        Colorable$1,
        Screenreaders$1
    ],

    computed: {
        classes() {
            return extend$1({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

};

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FormLabel: FormLabel$1
        });
    }

});

var FormFeedback$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'invalid-feedback': _vm.invalid, 'valid-feedback': _vm.valid && !_vm.invalid}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2)},staticRenderFns: [],

    name: 'form-feedback',

    mixins: [
        Colorable$1
    ],

    props: {

        /**
         * The value of label element. If no value, no label will appear.
         *
         * @property String
         */
        label: String,

        /**
         * Should the feedback marked as invalid
         *
         * @property String
         */
        invalid: Boolean,

        /**
         * Should the feedback marked as invalid
         *
         * @property String
         */
        valid: Boolean

    }

};

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FormFeedback: FormFeedback$1
        });
    }

});

var MergeClasses$1 = {

    methods: {

        mergeClasses() {
            let classes = {};

            each$1([].slice.call(arguments), arg => {
                if (isObject$1(arg)) {
                    extend$1(classes, arg);
                }
                else if (isArray$1(arg)) {
                    classes = classes.concat(arg);
                }
                else if (arg) {
                    classes[arg] = true;
                }
            });

            return classes;
        }

    }

};

function unit$1(height) {
    return isFinite(height) ? height + 'px' : height;
}

var BaseType$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"activity-indicator",class:_vm.classes},_vm._l((_vm.nodes),function(i){return _c('div')}))},staticRenderFns: [],

    props: {
        nodes: {
            type: Number,
            default: 3
        },
        size: {
            type: String,
            default: ''
        },
        prefix: {
            type: String,
            default: 'activity-indicator-'
        }
    },

    computed: {
        classes: function() {
            const classes = {};

            classes[this.$options.name] = !!this.$options.name;
            classes[this.prefix + this.size.replace(this.prefix, '')] = !!this.size;

            return classes;
        }
    }

};

var ActivityIndicatorDots$1 = {

    name: 'activity-indicator-dots',

    extends: BaseType$1
};

var ActivityIndicatorSpinner$1 = {

    name: 'activity-indicator-spinner',

    extends: BaseType$1,

    props: extend$1({}, BaseType$1.props, {
        nodes: {
            type: Number,
            default: 12
        }
    })
};

var ActivityIndicator$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.center)?_c('div',{staticClass:"center-wrapper",class:{'position-relative': _vm.relative, 'position-fixed': _vm.fixed},style:(_vm.style)},[_c('div',{staticClass:"center-content d-flex flex-column align-items-center"},[_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}}),_vm._v(" "),(_vm.label)?_c('div',{staticClass:"activity-indicator-label",domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()],1)]):_c('div',{staticClass:"d-flex flex-column justify-content-center align-items-center",style:(_vm.style)},[_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}}),_vm._v(" "),(_vm.label)?_c('div',{staticClass:"activity-indicator-label",domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()],1)},staticRenderFns: [],

    name: 'activity-indicator',

    extends: BaseType$1,

    props: {

        center: Boolean,

        fixed: Boolean,

        label: String,

        relative: Boolean,

        type: {
            type: String,
            default: 'dots'
        },

        height: [String, Number],

        maxHeight: [String, Number],

        minHeight: [String, Number],

        width: [String, Number],

        maxWidth: [String, Number],

        minWidth: [String, Number]

    },

    components: {
        ActivityIndicatorDots: ActivityIndicatorDots$1,
        ActivityIndicatorSpinner: ActivityIndicatorSpinner$1
    },

    computed: {

        style() {
            return {
                width: unit$1(this.width),
                maxWidth: unit$1(this.maxWidth),
                minWidth: unit$1(this.minWidth),
                height: unit$1(this.height),
                maxHeight: unit$1(this.maxHeight),
                minHeight: unit$1(this.minHeight)
            };
        },

        component() {
            return kebabCase$1(this.prefix + this.type.replace(this.prefix, ''));
        }
    }

};

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            ActivityIndicator: ActivityIndicator$1
        });
    }

});

var InputField$2 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{staticClass:"input-field",class:{'has-activity': _vm.activity}},[_vm._t("label",[(_vm.label || _vm.hasDefaultSlot)?_c('form-label',{ref:"label",attrs:{"for":_vm.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"position-relative"},[_vm._t("control",[_c('input',{directives:[{name:"bind-events",rawName:"v-bind-events",value:(_vm.bindEvents),expression:"bindEvents"}],ref:"control",class:_vm.mergeClasses(_vm.controlClasses, _vm.colorableClasses),attrs:{"id":_vm.id,"type":_vm.type,"name":_vm.name,"pattern":_vm.pattern,"readonly":_vm.readonly,"required":_vm.required,"maxlength":_vm.maxlength,"placeholder":_vm.placeholder,"disabled":_vm.disabled || _vm.readonly,"aria-label":_vm.label,"aria-describedby":_vm.id,"autocomplete":_vm.autocomplete},domProps:{"value":_vm.value},on:{"input":function($event){_vm.$emit('input', $event.target.value);}}})]),_vm._v(" "),_vm._t("activity",[_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.activity)?_c('activity-indicator',{key:"test",ref:"activity",attrs:{"type":"dots","size":_vm.size}}):_vm._e()],1)]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{ref:"feedback",attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):(_vm.invalidFeedback)?_c('form-feedback',{ref:"feedback",attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2),_vm._v(" "),_vm._t("help",[(_vm.helpText)?_c('help-text',{ref:"help",domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'input-field',

    mixins: [
        Colorable$1,
        FormControl$2,
        MergeClasses$1
    ],

    components: {
        HelpText: HelpText$1,
        FormGroup: FormGroup$1,
        FormLabel: FormLabel$1,
        FormFeedback: FormFeedback$1,
        ActivityIndicator: ActivityIndicator$1
    },

    props: {

        /**
         * Show type activity indicator.
         *
         * @property Boolean
         */
        activity: {
            type: Boolean,
            default: false
        },

        /**
         * The type attribute
         *
         * @property String
         */
        type: {
            type: String,
            default: 'text'
        }

    }

};

VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            InputField: InputField$2
        });
    }

});

const KEYCODE = {
    ESC: 27,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13,
    SPACE: 32,
    TAB: 9
};

const API_REQUEST_OPTIONS = [
    'bounds',
    'location',
    'component-restrictions',
    'offset',
    'radius',
    'types'
];

var PlaceAutocompleteField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"autocomplete-field",on:{"keydown":_vm.onKeydown,"keyup":_vm.onKeyup}},[_c('input-field',{attrs:{"name":_vm.name,"id":_vm.id,"type":_vm.type,"placeholder":_vm.placeholder,"required":_vm.required,"disabled":_vm.disabled || _vm.readonly,"readonly":_vm.readonly,"pattern":_vm.pattern,"aria-label":_vm.label,"aria-describedby":_vm.id,"label":_vm.label,"errors":_vm.errors,"value":_vm.value,"autocomplete":"no"},on:{"input":function($event){_vm.$emit('input', _vm.query);},"focus":_vm.onFocus,"blur":_vm.onBlur},model:{value:(_vm.query),callback:function ($$v) {_vm.query=$$v;},expression:"query"}},[(_vm.activity)?_c('activity-indicator',{attrs:{"size":"xs","type":"spinner"}}):_vm._e()],1),_vm._v(" "),(_vm.predictions && _vm.showPredictions)?_c('place-autocomplete-list',{attrs:{"items":_vm.predictions},on:{"item:click":_vm.onItemClick,"item:blur":_vm.onItemBlur}}):_vm._e()],1)},staticRenderFns: [],

    name: 'place-autocomplete-field',

    mixins: [
        FormControl$2
    ],

    components: {
        FormGroup: FormGroup$1,
        InputField: InputField$2,
        ActivityIndicator: ActivityIndicator$1,
        PlaceAutocompleteList
    },

    props: {

        'api-key': {
            type: String,
            required: true
        },

        'base-uri': {
            type: String,
            default: 'https://maps.googleapis.com/maps/api/js'
        },

        'libraries': {
            type: Array,
            default() {
                return ['geometry', 'places'];
            }
        },

        'bounds': {
            type: [Boolean, Object, String],
            default: false
        },

        'location': {
            type: [Boolean, Object, String],
            default: false
        },

        'component-restrictions': {
            type: [Boolean, Object, String],
            default: false
        },

        'offset': {
            type: Boolean,
            default: false
        },

        'radius': {
            type: Boolean,
            default: false
        },

        'types': {
            type: [Boolean, Array],
            default: false
        }

    },

    methods: {

        getInputElement() {
            return this.$el.querySelector('input');
        },

        getRequestOptions() {
            const options = {
                input: this.getInputElement().value
            };

            for (let i in API_REQUEST_OPTIONS) {
                if (this[i] !== undefined || this[i] !== null) {
                    options[i] = this[i];
                }
            }

            return options;
        },

        select(place) {
            geocode({ placeId: place.place_id }).then(response => {
                this.hide();
                this.$emit('input', this.query = response[0].formatted_address);
                this.$emit('select', place, response[0]);
            });
        },

        search() {
            return new Promise((resolve, reject) => {
                if (!this.getInputElement().value) {
                    this.predictions = false;
                    this.showPredictions = false;
                    // reject(new Error('Input empty'));
                }
                else {
                    this.activity = true;

                    this.$service.getPlacePredictions(this.getRequestOptions(), (response, status) => {
                        this.activity = false;

                        switch (status) {
                        case window.google.maps.places.PlacesServiceStatus.OK:
                            resolve(response);
                            break;
                        default:
                            reject(new Error(`Error with status: ${status}`));
                        }
                    });
                }
            });
        },

        hide() {
            this.showPredictions = false;
        },

        show() {
            this.showPredictions = true;
        },

        up() {
            const focused = this.$el.querySelector('a:focus');

            if (focused && focused.parentElement.previousElementSibling) {
                focused.parentElement.previousElementSibling.querySelector('a').focus();
            }
            else {
                const links = this.$el.querySelectorAll('a');
                links[links.length - 1].focus();
            }
        },

        down() {
            const focused = this.$el.querySelector('a:focus');

            if (focused && focused.parentElement.nextElementSibling) {
                focused.parentElement.nextElementSibling.querySelector('a').focus();
            }
            else {
                this.$el.querySelector('a').focus();
            }
        },

        onKeydown(event) {
            const element = this.$el.querySelector('[tabindex]');

            if (element && event.keyCode === KEYCODE.TAB) {
                event.preventDefault() && element.focus();
            }
        },

        onKeyup(event) {
            switch (event.keyCode) {
            case KEYCODE.ENTER:
            case KEYCODE.SPACE:
                if (this.$el.querySelector('.is-focused')) {
                    this.$el.querySelector('.is-focused a').dispatchEvent(new Event('mousedown'));
                }
                return;
            case KEYCODE.ESC:
                this.hide();
                this.getInputElement().blur();
                return;
            case KEYCODE.UP:
                this.up();
                event.preventDefault();
                return;
            case KEYCODE.DOWN:
                this.down();
                event.preventDefault();
                return;
            }

            this.search().then(response => {
                this.predictions = response;
                this.showPredictions = true;
            }, error => {
                if (error) {
                    this.predictions = false;
                }
            });
        },

        onFocus(event) {
            if (this.query) {
                if (!this.predictions.length) {
                    this.onKeyup(event);
                }

                this.show();
            }
        },

        onBlur(event) {
            if (!this.$el.contains(event.relatedTarget)) {
                this.hide();
            }
        },

        onItemBlur(event) {
            this.onBlur(event);
        },

        onItemClick(event, child) {
            this.select(child.item);
            this.predictions = false;
        }

    },

    mounted() {
        script$v(`${this.baseUri}?key=${this.apiKey}&libraries=${this.libraries.join(',')}`).then(() => {
            this.$geocoder = new window.google.maps.Geocoder();
            this.$service = new window.google.maps.places.AutocompleteService();
            this.loaded = true;
            this.$emit('loaded');
        });
    },

    data() {
        return {
            query: this.value,
            activity: false,
            loaded: false,
            predictions: false,
            showPredictions: false
        };
    }

    /*
    {
        // An array of types specifies an explicit type or a type collection, as listed in the supported types below. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the geocode and establishment types, but note that this will have the same effect as specifying no types. The supported types are: geocode instructs the Places service to return only geocoding results, rather than business results. address instructs the Places service to return only geocoding results with a precise address. establishment instructs the Places service to return only business results. the (regions) type collection instructs the Places service to return any result matching the following types: locality sublocality postal_code country administrative_area1 administrative_area2 the (cities) type collection instructs the Places service to return results that match either locality or administrative_area3.
        // Possible values: geocode, address, establishment, cities, locality, sublocality, postal_code, country, administrative_area1, administrative_area2
        type: undefined,

        // is a google.maps.LatLngBounds|google.maps.LatLngBoundsLiteral object specifying the area in which to search for places. The results are biased towards, but not restricted to, places contained within these bounds.
        bounds: undefined,

        // is a boolean specifying whether the API must return only those places that are strictly within the region defined by the given bounds. The API does not return results outside this region even if they match the user input.
        strictBounds: true|false,

        // can be used to restrict results to specific groups. Currently, you can use componentRestrictions to filter by up to 5 countries. Countries must be passed as as a two-character, ISO 3166-1 Alpha-2 compatible country code. Multiple countries must be passed as a list of country codes. z
        componentRestrictions: undefined,

        // can be used to instruct the Autocomplete widget to retrieve only Place IDs. On calling getPlace() on the Autocomplete object, the PlaceResult made available will only have the place id, types and name properties set. You can use the returned place ID with calls to the Places, Geocoding, Directions or Distance Matrix services.
        placeIdOnly: undefined,

        // is a google.maps.LatLng for prediction biasing. Predictions will be biased towards the given location and radius. Alternatively, bounds can be used.
        location: undefined,

        // is a number to determine the character position in the input term at which the service uses text for predictions (the position of the cursor in the input field).
        offset: undefined,

        // is a number to the radius of the area used for prediction biasing. The radius is specified in meters, and must always be accompanied by a location property. Alternatively, bounds can be used.
        radius: undefined
    }
    */
};

function install(Vue, options) {
  Vue.directive('place-autofill', PlaceAutofill);
  Vue.component('place-autocomplete-field', PlaceAutocompleteField);
  Vue.component('place-autocomplete-list', PlaceAutocompleteList);
  Vue.component('place-autocomplete-list-item', PlaceAutocompleteListItem);
}

if (window && window.Vue) {
  window.Vue.use(install);
}

//
var script$w = {
  name: 'street-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    PlaceAutocompleteField
  },
  directives: {
    PlaceAutofill
  }
};

/* script */
            const __vue_script__$v = script$w;
            
/* template */
var __vue_render__$r = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("place-autocomplete-field", {
    directives: [
      {
        name: "place-autofill",
        rawName: "v-place-autofill:street",
        value: _vm.form.street,
        expression: "form.street",
        arg: "street"
      },
      {
        name: "place-autofill",
        rawName: "v-place-autofill:city",
        value: _vm.form.city,
        expression: "form.city",
        arg: "city"
      },
      {
        name: "place-autofill",
        rawName: "v-place-autofill:state",
        value: _vm.form.state,
        expression: "form.state",
        arg: "state"
      },
      {
        name: "place-autofill",
        rawName: "v-place-autofill:zip",
        value: _vm.form.zip,
        expression: "form.zip",
        arg: "zip"
      }
    ],
    attrs: {
      id: "street",
      name: "street",
      placeholder: "Street Address",
      "api-key": "AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU",
      errors: _vm.errors,
      label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
      required: _vm.question.required
    },
    on: { input: _vm.updated },
    model: {
      value: _vm.form.street,
      callback: function($$v) {
        _vm.$set(_vm.form, "street", $$v);
      },
      expression: "form.street"
    }
  })
};
var __vue_staticRenderFns__$r = [];
__vue_render__$r._withStripped = true;

  /* style */
  const __vue_inject_styles__$v = undefined;
  /* scoped */
  const __vue_scope_id__$v = undefined;
  /* module identifier */
  const __vue_module_identifier__$v = undefined;
  /* functional template */
  const __vue_is_functional_template__$v = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var StreetField = normalizeComponent(
    { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
    __vue_inject_styles__$v,
    __vue_script__$v,
    __vue_scope_id__$v,
    __vue_is_functional_template__$v,
    __vue_module_identifier__$v,
    undefined,
    undefined
  );

const STYLE_ATTRIBUTES = [
    'font',
    'fontFamily',
    'fontKerning',
    'fontSize',
    'fontStretch',
    'fontStyle',
    'fontVariant',
    'fontVariantLigatures',
    'fontVariantCaps',
    'fontVariantNumeric',
    'fontVariantEastAsian',
    'fontWeight',
    'lineHeight',
    'letterSpacing',
    'padding',
    'margin',
    'textAlign',
    'textAlignLast',
    'textDecoration',
    'textDecorationLine',
    'textDecorationStyle',
    'textDecorationColor',
    'textDecorationSkipInk',
    'textDecorationPosition',
    'textIndent',
    'textRendering',
    'textShadow',
    'textSizeAdjust',
    'textOverflow',
    'textTransform',
    'width',
    'wordBreak',
    'wordSpacing',
    'wordWrap'
];

function int(str) {
    if(typeof str === 'number') {
        return str;
    }
    else if(!str || !str.replace) {
        return 0;
    }

    return parseInt(str.replace(/[^\d.]+/g, ''));
}

function input(div, el) {
    div.innerHTML = el.value.replace(/(?:\r\n|\r|\n)/g, '<br />');
}

function height(el) {
    return int(el.getBoundingClientRect().height);
}

function style(el, attr) {
    return window.getComputedStyle(el)[attr];
}

function resize(target, div, minHeight, maxHeight) {
    const dynamicHeight = Math.max(height(div) + int(style(div, 'lineHeight')), minHeight);
    target.style.height = ((!maxHeight || dynamicHeight < maxHeight) ? dynamicHeight : maxHeight) + 'px';
}

/*
function setMinHeight(div, el) {
    div.style.minHeight = height(el) + 'px';
}
*/

function mimic(el) {
    const div = document.createElement('div');
    const styles = window.getComputedStyle(el);

    for(let i in STYLE_ATTRIBUTES) {
        const key = STYLE_ATTRIBUTES[i];

        div.style[key] = styles[key];
    }

    div.style.position = 'absolute';
    div.style.bottom = '100%';
    div.style.zIndex = -1;
    div.style.visibility = 'hidden';

    return div;
}

function init(el, maxHeight) {
    const div = mimic(el);
    const minHeight = height(el);

    el.addEventListener('input', event => {
        input(div, event.target);
        resize(el, div, minHeight, maxHeight);
    });

    document.body.appendChild(div);

    input(div, el);
    resize(el, div, minHeight, maxHeight);
}

var Autogrow = {

    inserted(el, binding, vnode) {
        if(el.tagName.toLowerCase() !== 'textarea') {
            el = el.querySelector('textarea');
        }

        if(!el) {
            throw new Error('A textarea is required for the v-autogrow directive.');
        }

        init(el, binding.value);
    }

};

//

var script$x = {

    name: 'textarea-field',

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormFeedback
    },

    mixins: [
        Colorable,
        FormControl,
        MergeClasses
    ],

    props: {
        /**
         * The type attribute
         *
         * @property String
         */
        type: {
            type: String,
            default: 'text'
        },

        /**
         * The rows attribute
         *
         * @property String
         */
        rows: [Number, String]
    }

};

/* script */
            const __vue_script__$w = script$x;
            
/* template */
var __vue_render__$s = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form-group",
    [
      _vm._t("label", [
        _vm.label || _vm.hasDefaultSlot
          ? _c(
              "form-label",
              { attrs: { for: _vm.id } },
              [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
              2
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm._t("control", [
        _c(
          "div",
          { staticClass: "position-relative" },
          [
            _c("textarea", {
              directives: [
                {
                  name: "bind-events",
                  rawName: "v-bind-events",
                  value: _vm.bindEvents,
                  expression: "bindEvents"
                }
              ],
              class: _vm.mergeClasses(_vm.controlClasses, _vm.colorableClasses),
              attrs: {
                id: _vm.id,
                rows: _vm.rows,
                errors: _vm.errors,
                pattern: _vm.pattern,
                readonly: _vm.readonly,
                required: _vm.required,
                maxlength: _vm.maxlength,
                placeholder: _vm.placeholder,
                disabled: _vm.disabled || _vm.readonly
              },
              domProps: { value: _vm.value },
              on: {
                input: function($event) {
                  _vm.$emit("input", $event.target.value);
                }
              }
            }),
            _vm._v(" "),
            _vm._t("feedback", [
              _vm.validFeedback
                ? _c("form-feedback", {
                    attrs: { valid: "" },
                    domProps: { innerHTML: _vm._s(_vm.validFeedback) }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.invalidFeedback
                ? _c("form-feedback", {
                    attrs: { invalid: "" },
                    domProps: { innerHTML: _vm._s(_vm.invalidFeedback) }
                  })
                : _vm._e()
            ])
          ],
          2
        )
      ]),
      _vm._v(" "),
      _vm._t("help", [
        _vm.helpText
          ? _c("help-text", { domProps: { innerHTML: _vm._s(_vm.helpText) } })
          : _vm._e()
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$s = [];
__vue_render__$s._withStripped = true;

  /* style */
  const __vue_inject_styles__$w = undefined;
  /* scoped */
  const __vue_scope_id__$w = undefined;
  /* module identifier */
  const __vue_module_identifier__$w = undefined;
  /* functional template */
  const __vue_is_functional_template__$w = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TextareaField = normalizeComponent(
    { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
    __vue_inject_styles__$w,
    __vue_script__$w,
    __vue_scope_id__$w,
    __vue_is_functional_template__$w,
    __vue_module_identifier__$w,
    undefined,
    undefined
  );

//
var script$y = {
  name: 'textarea-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    TextareaField
  },
  directives: {
    Autogrow
  }
};

/* script */
            const __vue_script__$x = script$y;
            
/* template */
var __vue_render__$t = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("textarea-field", {
    directives: [{ name: "autogrow", rawName: "v-autogrow" }],
    attrs: {
      label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
      name: _vm.name,
      required: _vm.question.required,
      id: _vm.question.id,
      errors: _vm.errors
    },
    on: { input: _vm.updated },
    model: {
      value: _vm.form[_vm.name],
      callback: function($$v) {
        _vm.$set(_vm.form, _vm.name, $$v);
      },
      expression: "form[name]"
    }
  })
};
var __vue_staticRenderFns__$t = [];
__vue_render__$t._withStripped = true;

  /* style */
  const __vue_inject_styles__$x = undefined;
  /* scoped */
  const __vue_scope_id__$x = undefined;
  /* module identifier */
  const __vue_module_identifier__$x = undefined;
  /* functional template */
  const __vue_is_functional_template__$x = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TextareaField$1 = normalizeComponent(
    { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
    __vue_inject_styles__$x,
    __vue_script__$x,
    __vue_scope_id__$x,
    __vue_is_functional_template__$x,
    __vue_module_identifier__$x,
    undefined,
    undefined
  );

//
var script$z = {
  name: 'zip-field',
  extends: SurveyField,
  mixins: [FormControl],
  components: {
    InputField
  }
};

/* script */
            const __vue_script__$y = script$z;
            
/* template */
var __vue_render__$u = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("input-field", {
    attrs: {
      id: "zip",
      name: "zip",
      label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
      required: _vm.question.required,
      errors: _vm.errors,
      maxlength: "9",
      placeholder: "Zip Code (5 digits)",
      x_autocompletetype: "postal-code"
    },
    on: { input: _vm.updated },
    model: {
      value: _vm.form.zip,
      callback: function($$v) {
        _vm.$set(_vm.form, "zip", $$v);
      },
      expression: "form.zip"
    }
  })
};
var __vue_staticRenderFns__$u = [];
__vue_render__$u._withStripped = true;

  /* style */
  const __vue_inject_styles__$y = undefined;
  /* scoped */
  const __vue_scope_id__$y = undefined;
  /* module identifier */
  const __vue_module_identifier__$y = undefined;
  /* functional template */
  const __vue_is_functional_template__$y = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ZipField = normalizeComponent(
    { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
    __vue_inject_styles__$y,
    __vue_script__$y,
    __vue_scope_id__$y,
    __vue_is_functional_template__$y,
    __vue_module_identifier__$y,
    undefined,
    undefined
  );



var Fields = /*#__PURE__*/Object.freeze({
    AltEmailField: AltEmailField,
    AltPhoneField: AltPhoneField,
    CheckboxField: CheckboxField$1,
    CityField: CityField,
    DollarAmountField: DollarAmountField,
    FirstField: FirstField,
    InputField: InputField$1,
    LastField: LastField,
    PrimaryEmailField: PrimaryEmailField,
    PrimaryPhoneField: PrimaryPhoneField,
    RadioField: RadioField$1,
    SelectField: SelectField$1,
    StateField: StateField,
    StreetField: StreetField,
    SurveyField: SurveyField,
    TextareaField: TextareaField$1,
    ZipField: ZipField
});

// import 'promise-polyfill/src/polyfill';
// import GiveworksForm from '@/Plugins/GiveworksForm';

/*
import {
    InputField,
    SelectField
} from './Components/Fields';

export {
    InputField,
    SelectField
};
*/

if (window && window.Vue) {
  for (let i in Fields) {
    if (Fields[i].name) {
      window.Vue.component(Fields[i].name, Fields[i]);
    }
  }
} // export default GiveworksForm;
//# sourceMappingURL=vue-giveworks-form.es.js.map
