
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

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
                    const events = binding.value || vnode.context.bindEvents;

                    each(events, name => {
                        el.addEventListener(name, event => {
                            vnode.context.$emit(name, event);
                        });
                    });
                }
            }
        },

        methods: {

            isEmpty() {
                return !this.$el || !this.getInputField().value;
            },

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
                const classes = this.mergeClasses({
                    'is-empty': this.isEmpty()
                }, this.controlClasses, this.colorableClasses);

                return Object.keys(Object.keys(this.$attrs))
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

        },

        watch: {

            value(value) {
                const field = this.getInputField();

                if(field) {
                    if(value === '' || value === undefined) {
                        field.classList.add('is-empty');
                    }
                    else {
                        field.classList.remove('is-empty');
                    }
                }
            }

        },

        computed: {

            testValue() {
                return this.value;
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
              },
              blur: function($event) {
                _vm.$el.classList.remove("has-focus");
              },
              focus: function($event) {
                _vm.$el.classList.add("has-focus");
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

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLWdpdmV3b3Jrcy1mb3JtLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvSGVscGVycy9GdW5jdGlvbnMvY2h1bmsuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvSGVscGVycy9GdW5jdGlvbnMvZXh0ZW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2lzTnVsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9pc0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2lzT2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2lzTnVtYmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2lzTnVtZXJpYy5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9rZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvSGVscGVycy9GdW5jdGlvbnMvZWFjaC5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9pc0Z1bmN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2lzQm9vbGVhbi5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9rZWJhYkNhc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvSGVscGVycy9GdW5jdGlvbnMvbWFwS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9IZWxwZXJzL1ByZWZpeC9QcmVmaXguanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0NvbG9yYWJsZS9Db2xvcmFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL01lcmdlQ2xhc3Nlcy9NZXJnZUNsYXNzZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sLmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL1N1cnZleUZpZWxkLnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtcnVudGltZS1oZWxwZXJzL25vcm1hbGl6ZS1jb21wb25lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL1NjcmVlbnJlYWRlcnMvU2NyZWVucmVhZGVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0hlbHBUZXh0L0hlbHBUZXh0LnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0Zvcm1Hcm91cC9Gb3JtR3JvdXAudnVlIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvRm9ybUxhYmVsL0Zvcm1MYWJlbC52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbC52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9Gb3JtRmVlZGJhY2svRm9ybUZlZWRiYWNrLnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9IZWxwZXJzL1VuaXQvVW5pdC5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0FjdGl2aXR5SW5kaWNhdG9yL1R5cGVzL0Jhc2VUeXBlLnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0FjdGl2aXR5SW5kaWNhdG9yL1R5cGVzL0RvdHMudnVlIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvQWN0aXZpdHlJbmRpY2F0b3IvVHlwZXMvU3Bpbm5lci52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9BY3Rpdml0eUluZGljYXRvci9BY3Rpdml0eUluZGljYXRvci52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9JbnB1dEZpZWxkL0lucHV0RmllbGQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL0FsdEVtYWlsRmllbGQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL0FsdFBob25lRmllbGQudnVlIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvUmFkaW9GaWVsZC9SYWRpb0ZpZWxkLnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0NoZWNrYm94RmllbGQvQ2hlY2tib3hGaWVsZC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9GaWVsZHMvQ2hlY2tib3hGaWVsZC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9GaWVsZHMvQ2l0eUZpZWxkLnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9NaXhpbnMvSGFzU2xvdHMvSGFzU2xvdHMuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL1NpemVhYmxlL1NpemVhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvSW5wdXRHcm91cC9JbnB1dEdyb3VwVGV4dC52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9JbnB1dEdyb3VwL0lucHV0R3JvdXBBcHBlbmQudnVlIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvSW5wdXRHcm91cC9JbnB1dEdyb3VwUHJlcGVuZC52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9JbnB1dEdyb3VwL0lucHV0R3JvdXAudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL0RvbGxhckFtb3VudEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpZWxkcy9GaXJzdEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpZWxkcy9JbnB1dEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpZWxkcy9MYXN0RmllbGQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL1ByaW1hcnlFbWFpbEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpZWxkcy9QcmltYXJ5UGhvbmVGaWVsZC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9GaWVsZHMvUmFkaW9GaWVsZC52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9TZWxlY3RGaWVsZC9TZWxlY3RGaWVsZC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9GaWVsZHMvU2VsZWN0RmllbGQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL1N0YXRlRmllbGQudnVlIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1wbGFjZS1hdXRvY29tcGxldGUvZGlzdC92dWUtcGxhY2UtYXV0b2NvbXBsZXRlLmVzLmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL1N0cmVldEZpZWxkLnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9EaXJlY3RpdmVzL0F1dG9ncm93L0F1dG9ncm93LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvVGV4dGFyZWFGaWVsZC9UZXh0YXJlYUZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpZWxkcy9UZXh0YXJlYUZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpZWxkcy9aaXBGaWVsZC52dWUiLCIuLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaHVuayhhcnIsIGNodW5rU2l6ZSwgY2FjaGUgPSBbXSkge1xuICAgIGNvbnN0IHRtcCA9IFsuLi5hcnJdO1xuICAgIHdoaWxlKHRtcC5sZW5ndGgpIGNhY2hlLnB1c2godG1wLnNwbGljZSgwLCBjaHVua1NpemUpKTtcbiAgICByZXR1cm4gY2FjaGU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmQoLi4uYXJncykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKC4uLmFyZ3MpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cbiIsImltcG9ydCBpc051bGwgZnJvbSAnLi9pc051bGwnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpICYmICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB8fCAoXG4gICAgICAgIHZhbHVlID8gdmFsdWUudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgOiBmYWxzZVxuICAgICk7XG59XG4iLCJpbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXknO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXNOdW1iZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc051bWVyaWModmFsdWUpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodmFsdWUpIHx8IChcbiAgICAgICAgISF2YWx1ZSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgISF2YWx1ZS50b1N0cmluZygpLm1hdGNoKC9eLT9bXFxkLixdKyQvKVxuICAgICk7XG59XG4iLCJpbXBvcnQgaXNOdW1lcmljIGZyb20gJy4vaXNOdW1lcmljJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ga2V5KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzTnVtZXJpYyh2YWx1ZSkgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlO1xufVxuIiwiaW1wb3J0IGtleSBmcm9tICcuL2tleSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVhY2goc3ViamVjdCwgZm4pIHtcbiAgICBmb3IoY29uc3QgaSBpbiBzdWJqZWN0KSB7XG4gICAgICAgIGZuKHN1YmplY3RbaV0sIGtleShpKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtlYmFiQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL18vZywgJy0nKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn1cbiIsImltcG9ydCBlYWNoIGZyb20gJy4vZWFjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcEtleXMob2JqZWN0LCBmbikge1xuICAgIGNvbnN0IG1hcHBlZCA9IHt9O1xuXG4gICAgZWFjaChvYmplY3QsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIG1hcHBlZFtmbih2YWx1ZSwga2V5KV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXBwZWQ7XG59XG4iLCJpbXBvcnQge1xuICAgIG1hcEtleXMsXG4gICAgaXNPYmplY3QsXG4gICAgaXNCb29sZWFuXG59IGZyb20gJy4uL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZWZpeChzdWJqZWN0LCBwcmVmaXgsIGRlbGltZXRlciA9ICctJykge1xuICAgIGNvbnN0IHByZWZpeGVyID0gKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gKGtleSB8fCB2YWx1ZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke3ByZWZpeH0ke2RlbGltZXRlcn0/YCksICcnKTtcblxuICAgICAgICByZXR1cm4gW3ByZWZpeCwgc3RyaW5nXS5maWx0ZXIodmFsdWUgPT4gISF2YWx1ZSkuam9pbihkZWxpbWV0ZXIpO1xuICAgIH07XG5cbiAgICBpZihpc0Jvb2xlYW4oc3ViamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIHN1YmplY3Q7XG4gICAgfVxuXG4gICAgaWYoaXNPYmplY3Qoc3ViamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIG1hcEtleXMoc3ViamVjdCwgcHJlZml4ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhlcihzdWJqZWN0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgY29sb3JhYmxlQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSB7fTtcblxuICAgICAgICAgICAgZm9yKGxldCBpIGluIHRoaXMuJGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgaWYoaS5tYXRjaCgvXmJnfHRleHR8Ym9yZGVyfGJnLWdyYWRpZW50LS8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXNbaV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcbiIsImltcG9ydCB7IGVhY2gsIGV4dGVuZCwgaXNBcnJheSwgaXNPYmplY3QgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBtZXJnZUNsYXNzZXMoKSB7XG4gICAgICAgICAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgICAgICAgICBlYWNoKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSwgYXJnID0+IHtcbiAgICAgICAgICAgICAgICBpZihpc09iamVjdChhcmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuZChjbGFzc2VzLCBhcmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQoYXJnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlc1thcmddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcbiIsImltcG9ydCBwcmVmaXggZnJvbSAnLi4vLi4vSGVscGVycy9QcmVmaXgnO1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9NaXhpbnMvQ29sb3JhYmxlJztcbmltcG9ydCBNZXJnZUNsYXNzZXMgZnJvbSAnLi4vLi4vTWl4aW5zL01lcmdlQ2xhc3Nlcyc7XG5pbXBvcnQgeyBlYWNoLCBpc0FycmF5LCBpc09iamVjdCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIE1lcmdlQ2xhc3Nlc1xuICAgIF0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYXV0b2NvbXBsZXRlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgLy8gYXV0b2NvbXBsZXRlOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBmaWVsZCBpZCBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIC8vIGlkOiBbTnVtYmVyLCBTdHJpbmddLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgbGFiZWwgZWxlbWVudC4gSWYgbm8gdmFsdWUsIG5vIGxhYmVsIHdpbGwgYXBwZWFyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGZpZWxkIG5hbWUgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICAvLyBuYW1lOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBmaWVsZCBpZCBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwbGFjZWhvbGRlciBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIC8vIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBmaWVsZCByZXF1aXJlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgLy8gcmVxdWlyZWQ6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBmb3JtLWdyb3VwIHdyYXBwZXIgdG8gaW5wdXRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZ3JvdXA6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcmVnZXggcGF0dGVybiBmb3IgdmFsaWRhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgLy8gcGF0dGVybjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbmxpbmUgZmllbGQgdmFsaWRhdGlvbiBlcnJvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ3xCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBlcnJvcjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbmxpbmUgZmllbGQgdmFsaWRhdGlvbiBlcnJvcnMgcGFzc2VkIGFzIG9iamVjdCB3aXRoIGtleS92YWx1ZVxuICAgICAgICAgKiBwYWlycy4gSWYgZXJyb3JzIHBhc3NlZCBhcyBhbiBvYmplY3QsIHRoZSBmb3JtIG5hbWUgd2lsbCBiZSB1c2VkIGZvclxuICAgICAgICAgKiB0aGUga2V5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgT2JqZWN0fEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNvbWUgZmVlZGJhY2sgdG8gYWRkIHRvIHRoZSBmaWVsZCBvbmNlIHRoZSBmaWVsZCBpcyBzdWNjZXNzZnVsbHlcbiAgICAgICAgICogdmFsaWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGZlZWRiYWNrOiBbU3RyaW5nLCBBcnJheV0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIGV2ZW50IG5hbWVzIHRoYXQgY29ycmVsYXRlIHdpdGggY2FsbGJhY2sgZnVuY3Rpb25zXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBGdW5jdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgYmluZEV2ZW50czoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbJ2ZvY3VzJywgJ2JsdXInLCAnY2hhbmdlJywgJ2NsaWNrJywgJ2tleXVwJywgJ2tleWRvd24nLCAncHJvZ3Jlc3MnLCAncGFzdGUnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHQgY2xhc3MgbmFtZSBhc3NpZ25lZCB0byB0aGUgY29udHJvbCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRDb250cm9sQ2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdmb3JtLWNvbnRyb2wnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhpZGUgdGhlIGxhYmVsIGZvciBicm93c2VycywgYnV0IGxlYXZlIGl0IGZvciBzY3JlZW4gcmVhZGVycy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaGlkZUxhYmVsOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIG1hcmdpbi9wYWRkaW5nIGNsYXNzZXMgZm9yIGZpbmUgY29udHJvbCBvZiBzcGFjaW5nXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHNwYWNpbmc6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNpemUgb2YgdGhlIGZvcm0gY29udHJvbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgICAgICAgdmFsaWRhdGU6IHZhbHVlID0+IFsnc20nLCAnbWQnLCAnbGcnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSB0aGUgZm9ybSBmaWVsZCBpbmxpbmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaW5saW5lOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGUgZm9ybSBjb250cm9sIGlzIHJlYWRvbmx5LCBkaXNwbGF5IG9ubHkgYXMgdGV4dD9cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgLy8gcGxhaW50ZXh0OiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgZm9ybSBjb250cm9sIHJlYWRvbmx5P1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICAvLyByZWFkb25seTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIGZvcm0gY29udHJvbCBkaXNhYmxlZD9cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgLy8gZGlzYWJsZWQ6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNvbWUgaW5zdHJ1Y3Rpb25zIHRvIGFwcGVhciB1bmRlciB0aGUgZmllbGQgbGFiZWxcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaGVscFRleHQ6IFtOdW1iZXIsIFN0cmluZ10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXhsZW5ndGggYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG1heGxlbmd0aDogW051bWJlciwgU3RyaW5nXVxuXG4gICAgfSxcblxuICAgIGRpcmVjdGl2ZXM6IHtcbiAgICAgICAgYmluZEV2ZW50czoge1xuICAgICAgICAgICAgYmluZChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudHMgPSBiaW5kaW5nLnZhbHVlIHx8IHZub2RlLmNvbnRleHQuYmluZEV2ZW50cztcblxuICAgICAgICAgICAgICAgIGVhY2goZXZlbnRzLCBuYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bm9kZS5jb250ZXh0LiRlbWl0KG5hbWUsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIGlzRW1wdHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuJGVsIHx8ICF0aGlzLmdldElucHV0RmllbGQoKS52YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBibHVyKCkge1xuICAgICAgICAgICAgaWYodGhpcy5nZXRJbnB1dEZpZWxkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldElucHV0RmllbGQoKS5ibHVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm9jdXMoKSB7XG4gICAgICAgICAgICBpZih0aGlzLmdldElucHV0RmllbGQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRGaWVsZCgpLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0SW5wdXRGaWVsZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcuZm9ybS1jb250cm9sLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0RmllbGRFcnJvcnMoKSB7XG4gICAgICAgICAgICBsZXQgZXJyb3JzID0gdGhpcy5lcnJvciB8fCB0aGlzLmVycm9ycztcblxuICAgICAgICAgICAgaWYoaXNPYmplY3QodGhpcy5lcnJvcnMpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzID0gdGhpcy5lcnJvcnNbdGhpcy5uYW1lIHx8IHRoaXMuaWRdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gIWVycm9ycyB8fCBpc0FycmF5KGVycm9ycykgfHwgaXNPYmplY3QoZXJyb3JzKSA/IGVycm9ycyA6IFtlcnJvcnNdO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBpZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRhdHRycy5pZDtcbiAgICAgICAgfSxcblxuICAgICAgICBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGF0dHJzLm5hbWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29udHJvbEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5tZXJnZUNsYXNzZXMoe1xuICAgICAgICAgICAgICAgICdpcy1lbXB0eSc6IHRoaXMuaXNFbXB0eSgpXG4gICAgICAgICAgICB9LCB0aGlzLmNvbnRyb2xDbGFzc2VzLCB0aGlzLmNvbG9yYWJsZUNsYXNzZXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoT2JqZWN0LmtleXModGhpcy4kYXR0cnMpKVxuICAgICAgICAgICAgICAgIC5jb25jYXQoW1snY2xhc3MnLCBjbGFzc2VzXV0pXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoY2FycnksIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihpc0FycmF5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ5W2tleVswXV0gPSBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJyeVtrZXldID0gdGhpc1trZXldIHx8IHRoaXMuJGF0dHJzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2Fycnk7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbnRyb2xDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRDb250cm9sQ2xhc3MgKyAodGhpcy5wbGFpbnRleHQgPyAnLXBsYWludGV4dCcgOiAnJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29udHJvbFNpemVDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXgodGhpcy5zaXplLCB0aGlzLmNvbnRyb2xDbGFzcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29udHJvbENsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICh0aGlzLnNwYWNpbmcgfHwgJycpLFxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbENsYXNzLFxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbFNpemVDbGFzcyxcbiAgICAgICAgICAgICAgICAodGhpcy5pbnZhbGlkRmVlZGJhY2sgPyAnaXMtaW52YWxpZCcgOiAnJylcbiAgICAgICAgICAgIF0uam9pbignICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0RlZmF1bHRTbG90KCkge1xuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBpbnZhbGlkRmVlZGJhY2soKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmdldEZpZWxkRXJyb3JzKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yIHx8IChcbiAgICAgICAgICAgICAgICBpc0FycmF5KGVycm9ycykgPyBlcnJvcnMuam9pbignPGJyPicpIDogZXJyb3JzXG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHZhbGlkRmVlZGJhY2soKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLmZlZWRiYWNrKSA/IHRoaXMuZmVlZGJhY2suam9pbignPGJyPicpIDogdGhpcy5mZWVkYmFjaztcbiAgICAgICAgfVxuXG4gICAgfVxuXG59O1xuIiwiPHNjcmlwdD5cbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9NaXhpbnMvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIEZvcm1Db250cm9sXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICBwYWdlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIHF1ZXN0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGRpcmVjdGl2ZXM6IHtcblxuICAgICAgICBjaGFuZ2VkKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50LnRhcmdldC5jaGVja2VkICYmIGlzRnVuY3Rpb24oYmluZGluZy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy52YWx1ZShlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KGNvbXBpbGVkVGVtcGxhdGUsIGluamVjdFN0eWxlLCBkZWZhdWx0RXhwb3J0LCBzY29wZUlkLCBpc0Z1bmN0aW9uYWxUZW1wbGF0ZSwgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLywgaXNTaGFkb3dNb2RlLCBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1IsIGNyZWF0ZUluamVjdG9yU2hhZG93KSB7XG4gICAgaWYgKHR5cGVvZiBpc1NoYWRvd01vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3JTU1IgPSBjcmVhdGVJbmplY3RvcjtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3IgPSBpc1NoYWRvd01vZGU7XG4gICAgICAgIGlzU2hhZG93TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gICAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiBkZWZhdWx0RXhwb3J0ID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdEV4cG9ydC5vcHRpb25zIDogZGVmYXVsdEV4cG9ydDtcbiAgICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gICAgaWYgKGNvbXBpbGVkVGVtcGxhdGUgJiYgY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXIpIHtcbiAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlcjtcbiAgICAgICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlO1xuICAgICAgICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzY29wZWRJZFxuICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkO1xuICAgIH1cbiAgICBsZXQgaG9vaztcbiAgICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgICAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICAgICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICAgICAgICBjb250ZXh0ID1cbiAgICAgICAgICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KTsgLy8gZnVuY3Rpb25hbFxuICAgICAgICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX187XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgICAgICAgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNTUihjb250ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVyZW5jZVxuICAgICAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9vaztcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgaG9vayA9IGlzU2hhZG93TW9kZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNoYWRvdyh0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIGlmIChob29rKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICAgICAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBob29rLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRFeHBvcnQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgc2hvdyBvbmx5IGZvciBzY3JlZW5yZWFkZXJzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBzck9ubHk6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3VsZCBiZSBmb2N1c2FibGUgZm9yIHNjcmVlbnJlYWRlcnNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIHNyT25seUZvY3VzYWJsZTogQm9vbGVhblxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNjcmVlbnJlYWRlckNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdzci1vbmx5JzogdGhpcy5zck9ubHksXG4gICAgICAgICAgICAgICAgJ3NyLW9ubHktZm9jdXNhYmxlJzogdGhpcy5zck9ubHlGb2N1c2FibGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHRcIiA6Y2xhc3M9XCJjbGFzc2VzXCI+PHNsb3QgLz48L3NtYWxsPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9NaXhpbnMvQ29sb3JhYmxlL0NvbG9yYWJsZSc7XG5pbXBvcnQgU2NyZWVucmVhZGVycyBmcm9tICcuLi8uLi9NaXhpbnMvU2NyZWVucmVhZGVycy9TY3JlZW5yZWFkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2hlbHAtdGV4dCcsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBTY3JlZW5yZWFkZXJzXG4gICAgXSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLnNjcmVlbnJlYWRlckNsYXNzZXMsIHRoaXMuY29sb3JhYmxlQ2xhc3Nlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxzbG90Lz5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdmb3JtLWdyb3VwJ1xuXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmZvcm0tZ3JvdXAge1xuICAgICYsIC5mb3JtLWdyb3VwLWlubmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFyZW0sIC01MCUpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8bGFiZWwgOmNsYXNzPVwiY2xhc3Nlc1wiPjxzbG90Lz48L2xhYmVsPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9NaXhpbnMvQ29sb3JhYmxlL0NvbG9yYWJsZSc7XG5pbXBvcnQgU2NyZWVucmVhZGVycyBmcm9tICcuLi8uLi9NaXhpbnMvU2NyZWVucmVhZGVycy9TY3JlZW5yZWFkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2Zvcm0tbGFiZWwnLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIENvbG9yYWJsZSxcbiAgICAgICAgU2NyZWVucmVhZGVyc1xuICAgIF0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBjbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4dGVuZCh7fSwgdGhpcy5zY3JlZW5yZWFkZXJDbGFzc2VzLCB0aGlzLmNvbG9yYWJsZUNsYXNzZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGNvbXBvbmVudFxuICAgICAgICB2LW1vZGVsPVwidGVzdFZhbHVlXCJcbiAgICAgICAgOmlzPVwiZWxlbWVudFwiXG4gICAgICAgIDphcmlhLWxhYmVsPVwibGFiZWwgfHwgbmFtZSB8fCBpZFwiXG4gICAgICAgIDphcmlhLWRlc2NyaWJlZGJ5PVwiaWQgfHwgbmFtZVwiXG4gICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dCcsICRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgICAgQGJsdXI9XCIkZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJylcIlxuICAgICAgICBAZm9jdXM9XCIkZWwuY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJylcIlxuICAgICAgICB2LWJpbmQ9XCIkYXR0cnNcIj5cbiAgICAgICAgPHNsb3QvPlxuICAgIDwvY29tcG9uZW50PlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJy4uLy4uL01peGlucy9Gb3JtQ29udHJvbCc7XG4vLyBpbXBvcnQgeyBleHRlbmQsIG9taXRCeSwgaXNOdWxsLCBpc1VuZGVmaW5lZCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2Zvcm0tY29udHJvbCcsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuXG4gICAgICAgIHZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZ2V0SW5wdXRGaWVsZCgpO1xuXG4gICAgICAgICAgICBpZihmaWVsZCkge1xuICAgICAgICAgICAgICAgIGlmKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoJ2lzLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgdGVzdFZhbHVlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiA6Y2xhc3M9XCJ7J2ludmFsaWQtZmVlZGJhY2snOiBpbnZhbGlkLCAndmFsaWQtZmVlZGJhY2snOiB2YWxpZCAmJiAhaW52YWxpZH1cIj5cbiAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9NaXhpbnMvQ29sb3JhYmxlL0NvbG9yYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdmb3JtLWZlZWRiYWNrJyxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGVcbiAgICBdLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZhbHVlIG9mIGxhYmVsIGVsZW1lbnQuIElmIG5vIHZhbHVlLCBubyBsYWJlbCB3aWxsIGFwcGVhci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWw6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIHRoZSBmZWVkYmFjayBtYXJrZWQgYXMgaW52YWxpZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpbnZhbGlkOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgdGhlIGZlZWRiYWNrIG1hcmtlZCBhcyBpbnZhbGlkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHZhbGlkOiBCb29sZWFuXG5cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGhlaWdodCkge1xuICAgIHJldHVybiBpc0Zpbml0ZShoZWlnaHQpID8gaGVpZ2h0ICsgJ3B4JyA6IGhlaWdodDtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYWN0aXZpdHktaW5kaWNhdG9yXCIgOmNsYXNzPVwiY2xhc3Nlc1wiPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiaSBpbiBub2Rlc1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGVzOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAzXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHByZWZpeDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2FjdGl2aXR5LWluZGljYXRvci0nXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY2xhc3NlczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0ge307XG5cbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy4kb3B0aW9ucy5uYW1lXSA9ICEhdGhpcy4kb3B0aW9ucy5uYW1lO1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLnByZWZpeCArIHRoaXMuc2l6ZS5yZXBsYWNlKHRoaXMucHJlZml4LCAnJyldID0gISF0aGlzLnNpemU7XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCI8c2NyaXB0PlxuaW1wb3J0IEJhc2VUeXBlIGZyb20gJy4vQmFzZVR5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMnLFxuXG4gICAgZXh0ZW5kczogQmFzZVR5cGVcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMuc2Nzcyc7XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbiRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemU6IC42cmVtO1xuXG4uYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuXG4gICAgJiA+IGRpdiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktOTAwO1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplO1xuICAgICAgICBhbmltYXRpb246IGFjdGl2aXR5LWluZGljYXRvci1kb3RzIDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgICB9XG5cbiAgICAmID4gZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAuMzM7XG4gICAgfVxuXG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3IteHMgPiBkaXYge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIC41O1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAuNTtcbiAgICB9XG5cbiAgICAmLmFjdGl2aXR5LWluZGljYXRvci1zbSA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplICogLjc1O1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAuNzU7XG4gICAgfVxuXG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3ItbWQgPiBkaXYge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIDE7XG4gICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIDE7XG4gICAgfVxuXG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3ItbGcgPiBkaXYge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIDEuNTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplICogMS41O1xuICAgIH1cblxuICAgICYuYWN0aXZpdHktaW5kaWNhdG9yLXhsID4gZGl2IHtcbiAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAyO1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAyO1xuICAgIH1cblxuICAgIEBmb3IgJGkgZnJvbSAwIHRocm91Z2ggMTIge1xuICAgICAgICAmID4gZGl2Om50aC1jaGlsZCgjeyRpICsgMX0pIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogJGkgKiAuMTZzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBhY3Rpdml0eS1pbmRpY2F0b3ItZG90cyB7XG4gICAgICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgfSA0MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAmOm5vdCguYnRuLXdhcm5pbmcpIC5hY3Rpdml0eS1pbmRpY2F0b3ItZG90cyA+IGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cbn1cblxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG5pbXBvcnQgQmFzZVR5cGUgZnJvbSAnLi9CYXNlVHlwZSc7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lcicsXG5cbiAgICBleHRlbmRzOiBCYXNlVHlwZSxcblxuICAgIHByb3BzOiBleHRlbmQoe30sIEJhc2VUeXBlLnByb3BzLCB7XG4gICAgICAgIG5vZGVzOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAxMlxuICAgICAgICB9XG4gICAgfSlcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMuc2Nzcyc7XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbiRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyLjI1O1xuJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXdpZHRoOiAxMCU7XG4kYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItaGVpZ2h0OiAzMCU7XG4kYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItZGVsYXk6IDFzO1xuXG5AbWl4aW4gc3Bpbm5lci1yb3RhdGUtc2VsZWN0b3JzKCRzdGFydDoxLCAkZW5kOjE2LCAkZGVsYXk6MS4ycykge1xuICAgIEBmb3IgJGkgZnJvbSAkc3RhcnQgdGhyb3VnaCAkZW5kIHtcbiAgICAgICAgJiA+IGRpdjpmaXJzdC1jaGlsZDpudGgtbGFzdC1jaGlsZCgjeyRpfSksXG4gICAgICAgICYgPiBkaXY6Zmlyc3QtY2hpbGQ6bnRoLWxhc3QtY2hpbGQoI3skaX0pIH4gZGl2IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHNwaW5uZXItcm90YXRlLXRyYW5zZm9ybSgkaSwgJGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHNwaW5uZXItcm90YXRlLXRyYW5zZm9ybSgkdG90YWwsICRkZWxheToxLjJzKSB7XG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkdG90YWwge1xuICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoI3szNjAgLyAkdG90YWwgKiAkaX1kZWcpO1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtI3skZGVsYXkgLSAoJGRlbGF5IC8gJHRvdGFsICogKCRpIC0gMSkpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplO1xuICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemU7XG5cbiAgICAmID4gZGl2ICB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTkwMDtcbiAgICAgICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItd2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1oZWlnaHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBhbmltYXRpb246IGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1kZWxheSBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3IteHMge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAuNTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIC41O1xuICAgIH1cbiAgICAmLmFjdGl2aXR5LWluZGljYXRvci1zbSB7XG4gICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIC43NTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIC43NTtcbiAgICB9XG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3ItbWQge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAxO1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplICogMTtcbiAgICB9XG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3ItbGcge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAxLjU7XG4gICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAxLjU7XG4gICAgfVxuICAgICYuYWN0aXZpdHktaW5kaWNhdG9yLXhsIHtcbiAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplICogMjtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIDI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgc3Bpbm5lci1yb3RhdGUtc2VsZWN0b3JzKDEsIDEyLCAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItZGVsYXkpO1xuXG4gICAgQGtleWZyYW1lcyBhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgIDAlLCAzOSUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgICAgIDQwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICB9XG59XG5cbi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIge1xuICAgICY6bm90KC5idG4td2FybmluZykgLmFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyID4gZGl2OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJjZW50ZXJcIiBjbGFzcz1cImNlbnRlci13cmFwcGVyXCIgOmNsYXNzPVwieydwb3NpdGlvbi1yZWxhdGl2ZSc6IHJlbGF0aXZlLCAncG9zaXRpb24tZml4ZWQnOiBmaXhlZH1cIiA6c3R5bGU9XCJzdHlsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWNvbnRlbnQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJjb21wb25lbnRcIiA6c2l6ZT1cInNpemVcIiA6cHJlZml4PVwicHJlZml4XCIvPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwibGFiZWxcIiB2LWh0bWw9XCJsYWJlbFwiIGNsYXNzPVwiYWN0aXZpdHktaW5kaWNhdG9yLWxhYmVsXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIDpzdHlsZT1cInN0eWxlXCI+XG4gICAgICAgIDxjb21wb25lbnQgOmlzPVwiY29tcG9uZW50XCIgOnNpemU9XCJzaXplXCIgOnByZWZpeD1cInByZWZpeFwiLz5cbiAgICAgICAgPGRpdiB2LWlmPVwibGFiZWxcIiB2LWh0bWw9XCJsYWJlbFwiIGNsYXNzPVwiYWN0aXZpdHktaW5kaWNhdG9yLWxhYmVsXCIvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB1bml0IGZyb20gJy4uLy4uL0hlbHBlcnMvVW5pdCc7XG5pbXBvcnQgQmFzZVR5cGUgZnJvbSAnLi9UeXBlcy9CYXNlVHlwZSc7XG5pbXBvcnQgQWN0aXZpdHlJbmRpY2F0b3JEb3RzIGZyb20gJy4vVHlwZXMvRG90cyc7XG5pbXBvcnQgeyBrZWJhYkNhc2UgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgQWN0aXZpdHlJbmRpY2F0b3JTcGlubmVyIGZyb20gJy4vVHlwZXMvU3Bpbm5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdhY3Rpdml0eS1pbmRpY2F0b3InLFxuXG4gICAgZXh0ZW5kczogQmFzZVR5cGUsXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIGNlbnRlcjogQm9vbGVhbixcblxuICAgICAgICBmaXhlZDogQm9vbGVhbixcblxuICAgICAgICBsYWJlbDogU3RyaW5nLFxuXG4gICAgICAgIHJlbGF0aXZlOiBCb29sZWFuLFxuXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdkb3RzJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGhlaWdodDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICBtYXhIZWlnaHQ6IFtTdHJpbmcsIE51bWJlcl0sXG5cbiAgICAgICAgbWluSGVpZ2h0OiBbU3RyaW5nLCBOdW1iZXJdLFxuXG4gICAgICAgIHdpZHRoOiBbU3RyaW5nLCBOdW1iZXJdLFxuXG4gICAgICAgIG1heFdpZHRoOiBbU3RyaW5nLCBOdW1iZXJdLFxuXG4gICAgICAgIG1pbldpZHRoOiBbU3RyaW5nLCBOdW1iZXJdXG5cbiAgICB9LFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBY3Rpdml0eUluZGljYXRvckRvdHMsXG4gICAgICAgIEFjdGl2aXR5SW5kaWNhdG9yU3Bpbm5lclxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIHN0eWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogdW5pdCh0aGlzLndpZHRoKSxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogdW5pdCh0aGlzLm1heFdpZHRoKSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogdW5pdCh0aGlzLm1pbldpZHRoKSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHVuaXQodGhpcy5oZWlnaHQpLFxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogdW5pdCh0aGlzLm1heEhlaWdodCksXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB1bml0KHRoaXMubWluSGVpZ2h0KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb25lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4ga2ViYWJDYXNlKHRoaXMucHJlZml4ICsgdGhpcy50eXBlLnJlcGxhY2UodGhpcy5wcmVmaXgsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxmb3JtLWdyb3VwIDpjbGFzcz1cInsnaGFzLWFjdGl2aXR5JzogYWN0aXZpdHl9XCI+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+XG4gICAgICAgICAgICA8Zm9ybS1sYWJlbCByZWY9XCJsYWJlbFwiIHYtaWY9XCJsYWJlbCB8fCBoYXNEZWZhdWx0U2xvdFwiIDpmb3I9XCJpZFwiIHYtaHRtbD1cImxhYmVsXCIvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAtaW5uZXJcIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb250cm9sXCIgZGF0YS10ZXN0PVwidGVzdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQtZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImNvbnRyb2xBdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgnaW5wdXQnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc2xvdD5cblxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImFjdGl2aXR5XCI+XG4gICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRlLWZhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFjdGl2aXR5LWluZGljYXRvciBrZXk9XCJ0ZXN0XCIgdi1pZj1cImFjdGl2aXR5XCIgcmVmPVwiYWN0aXZpdHlcIiB0eXBlPVwiZG90c1wiIDpzaXplPVwic2l6ZVwiLz5cbiAgICAgICAgICAgICAgICA8L3RyYW5zaXRpb24+XG4gICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJ2YWxpZEZlZWRiYWNrXCIgcmVmPVwiZmVlZGJhY2tcIiB2LWh0bWw9XCJ2YWxpZEZlZWRiYWNrXCIgdmFsaWQgLz5cbiAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWVsc2UtaWY9XCJpbnZhbGlkRmVlZGJhY2tcIiByZWY9XCJmZWVkYmFja1wiIHYtaHRtbD1cImludmFsaWRGZWVkYmFja1wiIGludmFsaWQgLz5cbiAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgcmVmPVwiaGVscFwiIHYtaHRtbD1cImhlbHBUZXh0XCIgLz5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgPC9mb3JtLWdyb3VwPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEhlbHBUZXh0IGZyb20gJy4uL0hlbHBUZXh0JztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnLi4vRm9ybUdyb3VwJztcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnLi4vRm9ybUxhYmVsJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICcuLi9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgRm9ybUZlZWRiYWNrIGZyb20gJy4uL0Zvcm1GZWVkYmFjayc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUnO1xuaW1wb3J0IEFjdGl2aXR5SW5kaWNhdG9yIGZyb20gJy4uL0FjdGl2aXR5SW5kaWNhdG9yJztcbmltcG9ydCBGb3JtQ29udHJvbE1peGluIGZyb20gJy4uLy4uL01peGlucy9Gb3JtQ29udHJvbCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdpbnB1dC1maWVsZCcsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBGb3JtQ29udHJvbE1peGluXG4gICAgXSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSGVscFRleHQsXG4gICAgICAgIEZvcm1Db250cm9sLFxuICAgICAgICBGb3JtR3JvdXAsXG4gICAgICAgIEZvcm1MYWJlbCxcbiAgICAgICAgRm9ybUZlZWRiYWNrLFxuICAgICAgICBBY3Rpdml0eUluZGljYXRvclxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG93IHR5cGUgYWN0aXZpdHkgaW5kaWNhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdHk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3RleHQnXG4gICAgICAgIH1cblxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5pbnB1dC1maWVsZCB7XG4gICAgLnNsaWRlLWZhZGUtZW50ZXIsXG4gICAgLnNsaWRlLWZhZGUtbGVhdmUtdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNSUsIC01MCUpO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8aW5wdXQtZmllbGRcbiAgICAgICAgdi1tb2RlbD1cImZvcm1bbmFtZV1cIlxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICA6aWQ9XCJxdWVzdGlvbi5pZFwiXG4gICAgICAgIDpsYWJlbD1cImAke3F1ZXN0aW9uLnF1ZXN0aW9ufSR7cXVlc3Rpb24ucmVxdWlyZWQgPyAnKicgOiAnJ31gXCJcbiAgICAgICAgOnJlcXVpcmVkPVwicXVlc3Rpb24ucmVxdWlyZWRcIlxuICAgICAgICA6ZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgQGlucHV0PVwidXBkYXRlZFwiXG4gICAgLz5cblxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3VydmV5RmllbGQgZnJvbSAnLi9TdXJ2ZXlGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvSW5wdXRGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdhbHQtZW1haWwtZmllbGQnLFxuXG4gICAgZXh0ZW5kczogU3VydmV5RmllbGQsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgRm9ybUNvbnRyb2xcbiAgICBdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBJbnB1dEZpZWxkXG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8aW5wdXQtZmllbGRcbiAgICAgICAgdi1tb2RlbD1cImZvcm1bbmFtZV1cIlxuICAgICAgICB0eXBlPVwicGhvbmVcIlxuICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICA6aWQ9XCJxdWVzdGlvbi5pZFwiXG4gICAgICAgIDpsYWJlbD1cImAke3F1ZXN0aW9uLnF1ZXN0aW9ufSR7cXVlc3Rpb24ucmVxdWlyZWQgPyAnKicgOiAnJ31gXCJcbiAgICAgICAgOnJlcXVpcmVkPVwicXVlc3Rpb24ucmVxdWlyZWRcIlxuICAgICAgICA6ZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgQGlucHV0PVwidXBkYXRlZFwiXG4gICAgLz5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTdXJ2ZXlGaWVsZCBmcm9tICcuL1N1cnZleUZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9NaXhpbnMvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9JbnB1dEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2FsdC1waG9uZS1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBTdXJ2ZXlGaWVsZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIElucHV0RmllbGRcbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNvbnRyb2xDbGFzcywgY3VzdG9tQ29udHJvbENsYXNzLCBzaXplYWJsZUNsYXNzLCBpbmxpbmUgPyBpbmxpbmVDbGFzcyA6ICcnKVwiPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY3VzdG9tICYmIGlkXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB2LWJpbmQtZXZlbnRzXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgOnJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkIHx8IHJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgICAgOnBhdHRlcm49XCJwYXR0ZXJuXCJcbiAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cImNoZWNrZWRWYWx1ZSA9PT0gdmFsdWUgfHwgY2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGlucHV0Q2xhc3MsIChpbnZhbGlkRmVlZGJhY2sgPyAnaXMtaW52YWxpZCcgOiAnJykpXCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwiJGVtaXQoJ2NoYW5nZScsICRldmVudC50YXJnZXQudmFsdWUpXCI+XG5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiaWRcIiA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMobGFiZWxDbGFzcywgY29sb3JhYmxlQ2xhc3NlcylcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD57e2xhYmVsfX08L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJ2YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwidmFsaWRGZWVkYmFja1wiIHZhbGlkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJpbnZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJpbnZhbGlkRmVlZGJhY2tcIiBpbnZhbGlkIC8+XG4gICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJpZFwiIDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhsYWJlbENsYXNzLCBjb2xvcmFibGVDbGFzc2VzKVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQtZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICA6cmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkIHx8IHJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICA6cGF0dGVybj1cInBhdHRlcm5cIlxuICAgICAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cImNoZWNrZWRWYWx1ZSA9PT0gdmFsdWUgfHwgY2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhpbnB1dENsYXNzLCAoaW52YWxpZEZlZWRiYWNrID8gJ2lzLWludmFsaWQnIDogJycpKVwiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCIkZW1pdCgnY2hhbmdlJywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cblxuICAgICAgICAgICAgICAgIDxzbG90Pnt7bGFiZWx9fTwvc2xvdD5cblxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwidmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cInZhbGlkRmVlZGJhY2tcIiB2YWxpZCAvPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwiaW52YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgdi1odG1sPVwiaGVscFRleHRcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSGVscFRleHQgZnJvbSAnLi4vSGVscFRleHQnO1xuaW1wb3J0IEZvcm1GZWVkYmFjayBmcm9tICcuLi9Gb3JtRmVlZGJhY2snO1xuaW1wb3J0IHByZWZpeCBmcm9tICcuLi8uLi9IZWxwZXJzL1ByZWZpeCc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJy4uLy4uL01peGlucy9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgTWVyZ2VDbGFzc2VzIGZyb20gJy4uLy4uL01peGlucy9NZXJnZUNsYXNzZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAncmFkaW8tZmllbGQnLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBIZWxwVGV4dCxcbiAgICAgICAgRm9ybUZlZWRiYWNrXG4gICAgfSxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIEZvcm1Db250cm9sLFxuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdLFxuXG4gICAgbW9kZWw6IHtcbiAgICAgICAgZXZlbnQ6ICdjaGFuZ2UnLFxuICAgICAgICBwcm9wOiAnY2hlY2tlZFZhbHVlJ1xuICAgIH0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBldmVudCBuYW1lcyB0aGF0IGNvcnJlbGF0ZSB3aXRoIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgRnVuY3Rpb25cbiAgICAgICAgICovXG4gICAgICAgIGJpbmRFdmVudHM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWydmb2N1cycsICdibHVyJywgJ2lucHV0JywgJ2NsaWNrJywgJ2tleXVwJywgJ2tleWRvd24nLCAncHJvZ3Jlc3MnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhpcyBhIGN1c3RvbSBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGN1c3RvbTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSB0aGUgZm9ybSBmaWVsZCBhbmQgbGFiZWwgaW5saW5lXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBGdW5jdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgaW5saW5lOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2hlY2tlZCB2YWx1ZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgY2hlY2tlZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNoZWNrZWQgdmFsdWVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgY2hlY2tlZFZhbHVlOiBbQm9vbGVhbiwgTnVtYmVyLCBTdHJpbmcsIE9iamVjdF0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBuYW1lIGFzc2lnbmVkIHRvIHRoZSBjb250cm9sIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZGVmYXVsdENvbnRyb2xDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2Zvcm0tY2hlY2snXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGxhYmVsQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KCdsYWJlbCcsIHRoaXMuY29udHJvbENsYXNzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbnB1dENsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCgnaW5wdXQnLCB0aGlzLmNvbnRyb2xDbGFzcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5saW5lQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KCdpbmxpbmUnLCB0aGlzLmNvbnRyb2xDbGFzcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29udHJvbENsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tID8gJ2N1c3RvbS1jb250cm9sJyA6IHRoaXMuZGVmYXVsdENvbnRyb2xDbGFzcztcbiAgICAgICAgfSxcblxuICAgICAgICBjdXN0b21Db250cm9sQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b20gPyBwcmVmaXgodGhpcy4kb3B0aW9ucy5uYW1lLnJlcGxhY2UoJy1maWVsZCcsICcnKSwgJ2N1c3RvbScpIDogJyc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2l6ZWFibGVDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXgodGhpcy5zaXplLCAnZm9ybS1jb250cm9sJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMoY29udHJvbENsYXNzLCBjdXN0b21Db250cm9sQ2xhc3MsIHNpemVhYmxlQ2xhc3MsIGlubGluZSA/IGlubGluZUNsYXNzIDogJycpXCI+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjdXN0b20gJiYgaWRcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHYtYmluZC1ldmVudHNcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIDpuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgOmlkPVwiaWRcIlxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICA6cmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWQgfHwgcmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIDpyZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICA6cGF0dGVybj1cInBhdHRlcm5cIlxuICAgICAgICAgICAgICAgIDpjaGVja2VkPVwiY2hlY2tlZFZhbHVlcy5pbmRleE9mKHZhbHVlKSAhPT0gLTEgfHwgY2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGlucHV0Q2xhc3MsIChpbnZhbGlkRmVlZGJhY2sgPyAnaXMtaW52YWxpZCcgOiAnJykpXCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwidXBkYXRlKCRldmVudC50YXJnZXQudmFsdWUpXCI+XG5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiaWRcIiA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMobGFiZWxDbGFzcywgY29sb3JhYmxlQ2xhc3NlcylcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD57e2xhYmVsfX08L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJ2YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwidmFsaWRGZWVkYmFja1wiIHZhbGlkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJpbnZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJpbnZhbGlkRmVlZGJhY2tcIiBpbnZhbGlkIC8+XG4gICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImlkXCIgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGxhYmVsQ2xhc3MsIGNvbG9yYWJsZUNsYXNzZXMpXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHYtYmluZC1ldmVudHNcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgOmlkPVwiaWRcIlxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIDpyZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWQgfHwgcmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgIDpwYXR0ZXJuPVwicGF0dGVyblwiXG4gICAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVwiY2hlY2tlZFZhbHVlcy5pbmRleE9mKHZhbHVlKSAhPT0gLTEgfHwgY2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhpbnB1dENsYXNzLCAoaW52YWxpZEZlZWRiYWNrID8gJ2lzLWludmFsaWQnIDogJycpKVwiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ1cGRhdGUoJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cblxuICAgICAgICAgICAgICAgIDxzbG90Pnt7bGFiZWx9fTwvc2xvdD5cblxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwidmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cInZhbGlkRmVlZGJhY2tcIiB2YWxpZCAvPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwiaW52YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgdi1odG1sPVwiaGVscFRleHRcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFJhZGlvRmllbGQgZnJvbSAnLi4vUmFkaW9GaWVsZCc7XG5pbXBvcnQgTWVyZ2VDbGFzc2VzIGZyb20gJy4uLy4uL01peGlucy9NZXJnZUNsYXNzZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnY2hlY2tib3gtZmllbGQnLFxuXG4gICAgZXh0ZW5kczogUmFkaW9GaWVsZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdLFxuXG4gICAgbW9kZWw6IHtcbiAgICAgICAgZXZlbnQ6ICdjaGFuZ2UnLFxuICAgICAgICBwcm9wOiAnY2hlY2tlZFZhbHVlcydcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNoZWNrZWQgdmFsdWVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGNoZWNrZWRWYWx1ZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgdXBkYXRlKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdGhpcy5jaGVja2VkVmFsdWVzLnNsaWNlKDApO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNoZWNrZWRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGNoZWNrZWQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGNoZWNrZWQpO1xuICAgICAgICB9XG5cbiAgICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIDpjbGFzcz1cInsnaXMtaW52YWxpZCc6ICEhaW52YWxpZEZlZWRiYWNrfVwiPlxuXG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIHt7cXVlc3Rpb24ucXVlc3Rpb259fVxuICAgICAgICAgICAgPHN1cCB2LWlmPVwicXVlc3Rpb24ucmVxdWlyZWRcIj4qPC9zdXA+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGNoZWNrYm94LWZpZWxkXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybVtuYW1lXVwiXG4gICAgICAgICAgICB2LWZvcj1cIihhbnN3ZXIsIGtleSkgaW4gcXVlc3Rpb24uYW5zd2Vyc1wiXG4gICAgICAgICAgICA6a2V5PVwia2V5XCJcbiAgICAgICAgICAgIDpsYWJlbD1cImFuc3dlclwiXG4gICAgICAgICAgICA6dmFsdWU9XCJhbnN3ZXJcIlxuICAgICAgICAgICAgOmNoZWNrZWRWYWx1ZXM9XCJ2YWx1ZSB8fCBbXVwiXG4gICAgICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgOmlkPVwiYCR7bmFtZX1fJHtrZXl9YFwiXG4gICAgICAgICAgICBAY2hhbmdlPVwidXBkYXRlZFwiLz5cblxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInF1ZXN0aW9uLmFjY2VwdF9vdGhlclwiPlxuICAgICAgICAgICAgPGNoZWNrYm94LWZpZWxkIHYtbW9kZWw9XCJmb3JtW25hbWVdXCIgdi1jaGFuZ2VkIGxhYmVsPVwiT3RoZXI6XCIgdmFsdWU9XCJvdGhlclwiIDpuYW1lPVwibmFtZVwiIDppZD1cImAke25hbWV9XzUwYFwiIDpjaGVja2VkVmFsdWVzPVwidmFsdWUgfHwgW11cIiBAY2hhbmdlPVwidXBkYXRlZFwiLz5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybVtgJHtuYW1lfV9vdGhlcmBdXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpjbGFzcz1cInsnaXMtaW52YWxpZCc6IGVycm9yc1tuYW1lXX1cIiA6bmFtZT1cImAke25hbWV9X290aGVyYFwiIDppZD1cImAke25hbWV9X290aGVyYFwiIEBpbnB1dD1cInVwZGF0ZWQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiZmVlZGJhY2tcIj5cbiAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJ2YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwidmFsaWRGZWVkYmFja1wiIHZhbGlkIC8+XG4gICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwiaW52YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTdXJ2ZXlGaWVsZCBmcm9tICcuL1N1cnZleUZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9NaXhpbnMvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1GZWVkYmFjayBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0Zvcm1GZWVkYmFjayc7XG5pbXBvcnQgQ2hlY2tib3hGaWVsZCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0NoZWNrYm94RmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnY2hlY2tib3gtZmllbGQnLFxuXG4gICAgZXh0ZW5kczogU3VydmV5RmllbGQsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgRm9ybUNvbnRyb2xcbiAgICBdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBGb3JtRmVlZGJhY2ssXG4gICAgICAgIENoZWNrYm94RmllbGRcbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxpbnB1dC1maWVsZFxuICAgICAgICB2LW1vZGVsPVwiZm9ybS5jaXR5XCJcbiAgICAgICAgaWQ9XCJjaXR5XCJcbiAgICAgICAgbmFtZT1cImNpdHlcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNpdHlcIlxuICAgICAgICA6bGFiZWw9XCJgJHtxdWVzdGlvbi5xdWVzdGlvbn0ke3F1ZXN0aW9uLnJlcXVpcmVkID8gJyonIDogJyd9YFwiXG4gICAgICAgIDpyZXF1aXJlZD1cInF1ZXN0aW9uLnJlcXVpcmVkXCJcbiAgICAgICAgOmVycm9ycz1cImVycm9yc1wiXG4gICAgICAgIEBpbnB1dD1cInVwZGF0ZWRcIlxuICAgIC8+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3VydmV5RmllbGQgZnJvbSAnLi9TdXJ2ZXlGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvSW5wdXRGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdjaXR5LWZpZWxkJyxcblxuICAgIGV4dGVuZHM6IFN1cnZleUZpZWxkLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIEZvcm1Db250cm9sXG4gICAgXSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSW5wdXRGaWVsZFxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIGdldFNsb3Qoc2xvdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHNsb3RzW3Nsb3RdO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc1Nsb3Qoc2xvdCkge1xuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy4kc2xvdHNbc2xvdF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFzU2xvdHMoc2xvdHMpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiBzbG90cykge1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmhhc1Nsb3Qoc2xvdHNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGhhc0RlZmF1bHRTbG90KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFzU2xvdCgnZGVmYXVsdCcpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn07XG4iLCJpbXBvcnQgcHJlZml4IGZyb20gJy4uLy4uL0hlbHBlcnMvUHJlZml4L1ByZWZpeCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzaXplIG9mIHRoZSBmb3JtIGNvbnRyb2xcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ21kJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiB2YWx1ZSA9PiBbJ3NtJywgJ21kJywgJ2xnJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIHNpemVhYmxlQ2xhc3NQcmVmaXgoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kb3B0aW9ucy5uYW1lO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNpemVhYmxlQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KHRoaXMuc2l6ZSwgdGhpcy5zaXplYWJsZUNsYXNzUHJlZml4KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59O1xuIiwiPHRlbXBsYXRlPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgOmlkPVwiaWRcIj5cbiAgICAgICAgPHNsb3Q+e3sgdGV4dCB9fTwvc2xvdD5cbiAgICA8L3NwYW4+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnaW5wdXQtZ3JvdXAtdGV4dCcsXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWQgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGlkOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0OiBbQXJyYXksIE51bWJlciwgU3RyaW5nXVxuXG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgIDxpbnB1dC1ncm91cC10ZXh0IHYtaWY9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8c2xvdC8+XG4gICAgICAgIDwvaW5wdXQtZ3JvdXAtdGV4dD5cbiAgICAgICAgPHNsb3Qgdi1lbHNlLz5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdpbnB1dC1ncm91cC1hcHBlbmQnLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRleHQ6IEJvb2xlYW5cblxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgPGlucHV0LWdyb3VwLXRleHQgdi1pZj1cInRleHRcIj5cbiAgICAgICAgICAgIDxzbG90Lz5cbiAgICAgICAgPC9pbnB1dC1ncm91cC10ZXh0PlxuICAgICAgICA8c2xvdCB2LWVsc2UvPlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2lucHV0LWdyb3VwLXByZXBlbmQnLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRleHQ6IEJvb2xlYW5cblxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCIgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNvbG9yYWJsZUNsYXNzZXMsIHNpemVhYmxlQ2xhc3MpXCI+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cInByZXBlbmRcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwicHJlcGVuZCBpbnN0YW5jZW9mIEFycmF5XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0LWdyb3VwLXByZXBlbmQ+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dC1ncm91cC10ZXh0IHYtZm9yPVwidmFsdWUgaW4gcHJlcGVuZFwiIDprZXk9XCJ2YWx1ZVwiIDp0ZXh0PVwidmFsdWVcIi8+XG4gICAgICAgICAgICAgICAgPC9pbnB1dC1ncm91cC1wcmVwZW5kPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJwcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0LWdyb3VwLXByZXBlbmQgdGV4dD57e3ByZXBlbmR9fTwvaW5wdXQtZ3JvdXAtcHJlcGVuZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8c2xvdC8+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImFwcGVuZFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJhcHBlbmQgaW5zdGFuY2VvZiBBcnJheVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dC1ncm91cC1hcHBlbmQ+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dC1ncm91cC10ZXh0IHYtZm9yPVwidmFsdWUgaW4gYXBwZW5kXCIgOmtleT1cInZhbHVlXCIgOnRleHQ9XCJ2YWx1ZVwiLz5cbiAgICAgICAgICAgICAgICA8L2lucHV0LWdyb3VwLWFwcGVuZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0LWdyb3VwLWFwcGVuZCB0ZXh0Pnt7YXBwZW5kfX08L2lucHV0LWdyb3VwLWFwcGVuZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvc2xvdD5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBIYXNTbG90cyBmcm9tICcuLi8uLi9NaXhpbnMvSGFzU2xvdHMnO1xuaW1wb3J0IFNpemVhYmxlIGZyb20gJy4uLy4uL01peGlucy9TaXplYWJsZSc7XG5pbXBvcnQgSW5wdXRHcm91cFRleHQgZnJvbSAnLi9JbnB1dEdyb3VwVGV4dCc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUnO1xuaW1wb3J0IElucHV0R3JvdXBBcHBlbmQgZnJvbSAnLi9JbnB1dEdyb3VwQXBwZW5kJztcbmltcG9ydCBJbnB1dEdyb3VwUHJlcGVuZCBmcm9tICcuL0lucHV0R3JvdXBQcmVwZW5kJztcbmltcG9ydCBNZXJnZUNsYXNzZXMgZnJvbSAnLi4vLi4vTWl4aW5zL01lcmdlQ2xhc3Nlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdpbnB1dC1ncm91cCcsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIElucHV0R3JvdXBUZXh0LFxuICAgICAgICBJbnB1dEdyb3VwQXBwZW5kLFxuICAgICAgICBJbnB1dEdyb3VwUHJlcGVuZFxuICAgIH0sXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgSGFzU2xvdHMsXG4gICAgICAgIFNpemVhYmxlLFxuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIE1lcmdlQ2xhc3Nlc1xuICAgIF0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIGFwcGVuZDogW0FycmF5LCBOdW1iZXIsIFN0cmluZ10sXG5cbiAgICAgICAgcHJlcGVuZDogW0FycmF5LCBOdW1iZXIsIFN0cmluZ11cblxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblxuICAgICAgICA8ZmllbGRzZXQ+XG5cbiAgICAgICAgICAgIDxsZWdlbmQ+U2VsZWN0IGFuIGFtb3VudDwvbGVnZW5kPlxuXG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiY2h1bmsgaW4gYW1vdW50c1wiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImFtb3VudCBpbiBjaHVua1wiIGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHJhZGlvLWZpZWxkIHYtbW9kZWw9XCJmb3JtLmRvbmF0aW9uXCIgbmFtZT1cImRvbmF0aW9uXCIgOmxhYmVsPVwiYW1vdW50XCIgOnZhbHVlPVwiYW1vdW50XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJxdWVzdGlvbi5pZFwiIHYtaHRtbD1cInF1ZXN0aW9uLnF1ZXN0aW9uXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQtZ3JvdXAgcHJlcGVuZD1cIiRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydpcy1pbnZhbGlkJzogISFpbnZhbGlkRmVlZGJhY2t9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVxdWlyZWQ9XCJxdWVzdGlvbi5yZXF1aXJlZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9pbnB1dC1ncm91cD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZmllbGRzZXQ+XG5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTdXJ2ZXlGaWVsZCBmcm9tICcuL1N1cnZleUZpZWxkJztcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvSW5wdXRHcm91cCc7XG5pbXBvcnQgUmFkaW9GaWVsZCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL1JhZGlvRmllbGQnO1xuaW1wb3J0IHsgY2h1bmsgfSBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdkb2xsYXItYW1vdW50LWZpZWxkJyxcblxuICAgIGV4dGVuZHM6IFN1cnZleUZpZWxkLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBJbnB1dEdyb3VwLFxuICAgICAgICBSYWRpb0ZpZWxkXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgYW1vdW50cygpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMucXVlc3Rpb24uYW5zd2Vyc1xuICAgICAgICAgICAgICAgID8gdGhpcy5xdWVzdGlvbi5hbnN3ZXJzLnNwbGl0KCd8JylcbiAgICAgICAgICAgICAgICA6IHRoaXMucGFnZS5zaXRlLmNvbmZpZy5naXZld29ya3MuYXNrX2Ftb3VudHM7XG5cbiAgICAgICAgICAgIHJldHVybiBjaHVuayh2YWx1ZXMuZmlsdGVyKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPj0gKHBhcnNlRmxvYXQodGhpcy5wYWdlLm9wdGlvbnMubWluX2Ftb3VudCkgfHwgMCk7XG4gICAgICAgICAgICB9KSwgMik7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGlucHV0LWZpZWxkXG4gICAgICAgIHYtbW9kZWw9XCJmb3JtLmZpcnN0XCJcbiAgICAgICAgaWQ9XCJmaXJzdFwiXG4gICAgICAgIG5hbWU9XCJmaXJzdFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgIDpsYWJlbD1cImAke3F1ZXN0aW9uLnF1ZXN0aW9ufSR7cXVlc3Rpb24ucmVxdWlyZWQgPyAnKicgOiAnJ31gXCJcbiAgICAgICAgOnJlcXVpcmVkPVwicXVlc3Rpb24ucmVxdWlyZWRcIlxuICAgICAgICA6ZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgQGlucHV0PVwidXBkYXRlZFwiLz5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTdXJ2ZXlGaWVsZCBmcm9tICcuL1N1cnZleUZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9NaXhpbnMvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9JbnB1dEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2ZpcnN0LWZpZWxkJyxcblxuICAgIGV4dGVuZHM6IFN1cnZleUZpZWxkLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIEZvcm1Db250cm9sXG4gICAgXSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSW5wdXRGaWVsZFxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHNjcmlwdD5cbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvSW5wdXRGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdpbnB1dC1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBJbnB1dEZpZWxkXG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxpbnB1dC1maWVsZFxuICAgICAgICB2LW1vZGVsPVwiZm9ybS5sYXN0XCJcbiAgICAgICAgaWQ9XCJsYXN0XCJcbiAgICAgICAgbmFtZT1cImxhc3RcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXG4gICAgICAgIDpsYWJlbD1cImAke3F1ZXN0aW9uLnF1ZXN0aW9ufSR7cXVlc3Rpb24ucmVxdWlyZWQgPyAnKicgOiAnJ31gXCJcbiAgICAgICAgOnJlcXVpcmVkPVwicXVlc3Rpb24ucmVxdWlyZWRcIlxuICAgICAgICA6ZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgQGlucHV0PVwidXBkYXRlZFwiXG4gICAgLz5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTdXJ2ZXlGaWVsZCBmcm9tICcuL1N1cnZleUZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9NaXhpbnMvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9JbnB1dEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2xhc3QtZmllbGQnLFxuXG4gICAgZXh0ZW5kczogU3VydmV5RmllbGQsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgRm9ybUNvbnRyb2xcbiAgICBdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBJbnB1dEZpZWxkXG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8aW5wdXQtZmllbGRcbiAgICAgICAgdi1tb2RlbD1cImZvcm0uZW1haWxcIlxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgOmxhYmVsPVwiYCR7cXVlc3Rpb24ucXVlc3Rpb259JHtxdWVzdGlvbi5yZXF1aXJlZCA/ICcqJyA6ICcnfWBcIlxuICAgICAgICA6cmVxdWlyZWQ9XCJxdWVzdGlvbi5yZXF1aXJlZFwiXG4gICAgICAgIDplcnJvcnM9XCJlcnJvcnNcIlxuICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVkXCJcbiAgICAvPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFN1cnZleUZpZWxkIGZyb20gJy4vU3VydmV5RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL01peGlucy9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0lucHV0RmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAncHJpbWFyeS1lbWFpbC1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBTdXJ2ZXlGaWVsZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIElucHV0RmllbGRcbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxpbnB1dC1maWVsZFxuICAgICAgICB2LW1vZGVsPVwiZm9ybS5waG9uZVwiXG4gICAgICAgIHR5cGU9XCJwaG9uZVwiXG4gICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgIGlkPVwicGhvbmVcIlxuICAgICAgICA6bGFiZWw9XCJgJHtxdWVzdGlvbi5xdWVzdGlvbn0ke3F1ZXN0aW9uLnJlcXVpcmVkID8gJyonIDogJyd9YFwiXG4gICAgICAgIDpyZXF1aXJlZD1cInF1ZXN0aW9uLnJlcXVpcmVkXCJcbiAgICAgICAgOmVycm9ycz1cImVycm9yc1wiXG4gICAgICAgIEBpbnB1dD1cInVwZGF0ZWRcIlxuICAgIC8+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3VydmV5RmllbGQgZnJvbSAnLi9TdXJ2ZXlGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvSW5wdXRGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdwcmltYXJ5LXBob25lLWZpZWxkJyxcblxuICAgIGV4dGVuZHM6IFN1cnZleUZpZWxkLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIEZvcm1Db250cm9sXG4gICAgXSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSW5wdXRGaWVsZFxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGZvcm0tZ3JvdXAgOmNsYXNzPVwieydpcy1pbnZhbGlkJzogISFpbnZhbGlkRmVlZGJhY2t9XCI+XG5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAge3txdWVzdGlvbi5xdWVzdGlvbn19IDxzdXAgdi1pZj1cInF1ZXN0aW9uLnJlcXVpcmVkXCI+Kjwvc3VwPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxyYWRpby1maWVsZFxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1bbmFtZV1cIlxuICAgICAgICAgICAgdi1mb3I9XCIoYW5zd2VyLCBrZXkpIGluIHF1ZXN0aW9uLmFuc3dlcnNcIlxuICAgICAgICAgICAgOmtleT1cImtleVwiXG4gICAgICAgICAgICA6bGFiZWw9XCJhbnN3ZXJcIlxuICAgICAgICAgICAgOnZhbHVlPVwiYW5zd2VyXCJcbiAgICAgICAgICAgIDpjaGVja2VkVmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgOmlkPVwiYCR7bmFtZX1fJHtrZXl9YFwiXG4gICAgICAgICAgICBAY2hhbmdlPVwidXBkYXRlZFwiLz5cblxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInF1ZXN0aW9uLmFjY2VwdF9vdGhlclwiPlxuICAgICAgICAgICAgPHJhZGlvLWZpZWxkIHYtbW9kZWw9XCJmb3JtW25hbWVdXCIgdi1jaGFuZ2VkIHZhbHVlPVwib3RoZXJcIiBsYWJlbD1cIk90aGVyOlwiIDpuYW1lPVwibmFtZVwiIDppZD1cImAke25hbWV9XzUwYFwiIDpjaGVja2VkVmFsdWU9XCJ2YWx1ZVwiIEBjaGFuZ2U9XCJ1cGRhdGVkXCIvPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtW2Ake25hbWV9X290aGVyYF1cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgOmNsYXNzPVwieydpcy1pbnZhbGlkJzogZXJyb3JzW25hbWVdfVwiIDpuYW1lPVwiYCR7bmFtZX1fb3RoZXJgXCIgOmlkPVwiYCR7bmFtZX1fb3RoZXJgXCIgQGlucHV0PVwidXBkYXRlZCgkZXZlbnQudGFyZ2V0LnZhbHVlKTtcIi8+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImZlZWRiYWNrXCI+XG4gICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwidmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cInZhbGlkRmVlZGJhY2tcIiB2YWxpZCAvPlxuICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cImludmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cImludmFsaWRGZWVkYmFja1wiIGludmFsaWQgLz5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgPC9mb3JtLWdyb3VwPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFN1cnZleUZpZWxkIGZyb20gJy4vU3VydmV5RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL01peGlucy9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgUmFkaW9GaWVsZCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL1JhZGlvRmllbGQnO1xuaW1wb3J0IEZvcm1GZWVkYmFjayBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0Zvcm1GZWVkYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdyYWRpby1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBTdXJ2ZXlGaWVsZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFJhZGlvRmllbGQsXG4gICAgICAgIEZvcm1GZWVkYmFja1xuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGZvcm0tZ3JvdXAgOmNsYXNzPVwieydoYXMtYWN0aXZpdHknOiBhY3Rpdml0eX1cIj5cblxuICAgICAgICA8c2xvdCBuYW1lPVwibGFiZWxcIj5cbiAgICAgICAgICAgIDxmb3JtLWxhYmVsIHYtaWY9XCJsYWJlbFwiIDpmb3I9XCJpZFwiIHYtaHRtbD1cImxhYmVsXCIvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAtaW5uZXJcIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQtZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImNvbnRyb2xBdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgnaW5wdXQnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdC8+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJhY3Rpdml0eVwiPlxuICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZS1mYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhY3Rpdml0eS1pbmRpY2F0b3Iga2V5PVwidGVzdFwiIHYtaWY9XCJhY3Rpdml0eVwiIHJlZj1cImFjdGl2aXR5XCIgdHlwZT1cImRvdHNcIiA6c2l6ZT1cInNpemVcIi8+XG4gICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxuICAgICAgICAgICAgPC9zbG90PlxuXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwidmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cInZhbGlkRmVlZGJhY2tcIiB2YWxpZCAvPlxuICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJpbnZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJpbnZhbGlkRmVlZGJhY2tcIiBpbnZhbGlkIC8+XG4gICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJoZWxwXCI+XG4gICAgICAgICAgICA8aGVscC10ZXh0IHYtaWY9XCJoZWxwVGV4dFwiIHYtaHRtbD1cImhlbHBUZXh0XCIgLz5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgPC9mb3JtLWdyb3VwPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEhlbHBUZXh0IGZyb20gJy4uL0hlbHBUZXh0JztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnLi4vRm9ybUdyb3VwJztcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnLi4vRm9ybUxhYmVsJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICcuLi9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgRm9ybUZlZWRiYWNrIGZyb20gJy4uL0Zvcm1GZWVkYmFjayc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUnO1xuaW1wb3J0IEFjdGl2aXR5SW5kaWNhdG9yIGZyb20gJy4uL0FjdGl2aXR5SW5kaWNhdG9yJztcbmltcG9ydCBNZXJnZUNsYXNzZXMgZnJvbSAnLi4vLi4vTWl4aW5zL01lcmdlQ2xhc3Nlcyc7XG5pbXBvcnQgRm9ybUNvbnRyb2xNaXhpbiBmcm9tICcuLi8uLi9NaXhpbnMvRm9ybUNvbnRyb2wnO1xuXG5jb25zdCBDVVNUT01fU0VMRUNUX1BSRUZJWCA9ICdjdXN0b20tc2VsZWN0LSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdzZWxlY3QtZmllbGQnLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBY3Rpdml0eUluZGljYXRvcixcbiAgICAgICAgSGVscFRleHQsXG4gICAgICAgIEZvcm1Db250cm9sLFxuICAgICAgICBGb3JtR3JvdXAsXG4gICAgICAgIEZvcm1MYWJlbCxcbiAgICAgICAgRm9ybUZlZWRiYWNrXG4gICAgfSxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIE1lcmdlQ2xhc3NlcyxcbiAgICAgICAgRm9ybUNvbnRyb2xNaXhpblxuICAgIF0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG93IHR5cGUgYWN0aXZpdHkgaW5kaWNhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdHk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYGN1c3RvbS1zZWxlY3RgIHRvIHRoZSBmb3JtIGNvbnRyb2wgaWYgdHJ1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgY3VzdG9tOiBCb29sZWFuXG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBjb250cm9sQ2xhc3MoKSB7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sQ2xhc3MgPSB0aGlzLmN1c3RvbSA/ICdjdXN0b20tc2VsZWN0JyA6IHRoaXMuZGVmYXVsdENvbnRyb2xDbGFzcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWludGV4dCA/IGAke2NvbnRyb2xDbGFzc30tcGxhaW50ZXh0YCA6IGNvbnRyb2xDbGFzcztcbiAgICAgICAgfSxcblxuICAgICAgICBjdXN0b21TZWxlY3RDbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBDVVNUT01fU0VMRUNUX1BSRUZJWC5yZXBsYWNlKC8tJC8sICcnKSArICh0aGlzLnBsYWludGV4dCA/ICctcGxhaW50ZXh0JyA6ICcnKSxcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbVNlbGVjdFNpemVDbGFzcyxcbiAgICAgICAgICAgICAgICAodGhpcy5zcGFjaW5nIHx8ICcnKVxuICAgICAgICAgICAgXS5qb2luKCcgJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uaGFzLWFjdGl2aXR5IHtcbiAgICBzZWxlY3Qge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB9XG5cbiAgICAvKiBGb3IgSUUxMCAqL1xuICAgIHNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxzZWxlY3QtZmllbGRcbiAgICAgICAgdi1tb2RlbD1cImZvcm1bbmFtZV1cIlxuICAgICAgICA6bGFiZWw9XCJgJHtxdWVzdGlvbi5xdWVzdGlvbn0ke3F1ZXN0aW9uLnJlcXVpcmVkID8gJyonIDogJyd9YFwiXG4gICAgICAgIDpuYW1lPVwibmFtZVwiXG4gICAgICAgIDppZD1cInF1ZXN0aW9uLmlkXCJcbiAgICAgICAgOmVycm9ycz1cImVycm9yc1wiXG4gICAgICAgIDpyZXF1aXJlZD1cInF1ZXN0aW9uLnJlcXVpcmVkXCJcbiAgICAgICAgQGlucHV0PVwidXBkYXRlZFwiPlxuICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKHZhbHVlLCBrZXkpIGluIHF1ZXN0aW9uLmFuc3dlcnNcIiA6dmFsdWU9XCJ2YWx1ZVwiIHYtaHRtbD1cInZhbHVlXCIvPlxuICAgIDwvc2VsZWN0LWZpZWxkPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFN1cnZleUZpZWxkIGZyb20gJy4vU3VydmV5RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL01peGlucy9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9TZWxlY3RGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdzZWxlY3QtZmllbGQnLFxuXG4gICAgZXh0ZW5kczogU3VydmV5RmllbGQsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgRm9ybUNvbnRyb2xcbiAgICBdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBTZWxlY3RGaWVsZFxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPHNlbGVjdC1maWVsZFxuICAgICAgICB2LW1vZGVsPVwiZm9ybS5zdGF0ZVwiXG4gICAgICAgIG5hbWU9XCJzdGF0ZVwiXG4gICAgICAgIDppZD1cInF1ZXN0aW9uLmlkXCJcbiAgICAgICAgOmxhYmVsPVwiYCR7cXVlc3Rpb24ucXVlc3Rpb259JHtxdWVzdGlvbi5yZXF1aXJlZCA/ICcqJyA6ICcnfWBcIlxuICAgICAgICA6cmVxdWlyZWQ9XCJxdWVzdGlvbi5yZXF1aXJlZFwiXG4gICAgICAgIDplcnJvcnM9XCJlcnJvcnNcIlxuICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVkXCI+XG4gICAgICAgIDxvcHRpb24gdi1mb3I9XCIobGFiZWwsIHZhbHVlKSBpbiBwYWdlLnNpdGUuY29uZmlnLnN0YXRlc1wiIDp2YWx1ZT1cInZhbHVlXCIgdi1odG1sPVwibGFiZWxcIi8+XG4gICAgPC9zZWxlY3QtZmllbGQ+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3VydmV5RmllbGQgZnJvbSAnLi9TdXJ2ZXlGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCBTZWxlY3RGaWVsZCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL1NlbGVjdEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3N0YXRlLWZpZWxkJyxcblxuICAgIGV4dGVuZHM6IFN1cnZleUZpZWxkLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIEZvcm1Db250cm9sXG4gICAgXSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgU2VsZWN0RmllbGRcbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsImZ1bmN0aW9uIGNhbWVsQ2FzZShzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oPzooXi4pfChbLV9cXHNdKy4pKS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICByZXR1cm4gbWF0Y2guY2hhckF0KG1hdGNoLmxlbmd0aCAtIDEpLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3RyaW5nLnN1YnN0cmluZygxKTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbiguLi5hcmdzKTtcbn1cblxuZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgJiYgIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgfHwgKFxuICAgICAgICB2YWx1ZSA/IHZhbHVlLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE51bWJlcl0nIDogZmFsc2VcbiAgICApO1xufVxuXG5mdW5jdGlvbiBpc051bWVyaWModmFsdWUpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodmFsdWUpIHx8ICghIXZhbHVlICYmICEhdmFsdWUudG9TdHJpbmcoKS5tYXRjaCgvXi0/W1xcZC4sXSskLykpO1xufVxuXG5mdW5jdGlvbiBrZXkodmFsdWUpIHtcbiAgICByZXR1cm4gaXNOdW1lcmljKHZhbHVlKSA/IHBhcnNlRmxvYXQodmFsdWUpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGVhY2goc3ViamVjdCwgZm4pIHtcbiAgICBmb3IgKGNvbnN0IGkgaW4gc3ViamVjdCkge1xuICAgICAgICBmbihzdWJqZWN0W2ldLCBrZXkoaSkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIHN1YmplY3QgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gcHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YmplY3RbaV0gPyBtYXRjaGVzKHByb3BlcnRpZXNbaV0pKHN1YmplY3RbaV0pIDogZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghc3ViamVjdCB8fCBzdWJqZWN0W2ldICE9PSBwcm9wZXJ0aWVzW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCkge1xuICAgIHJldHVybiAoaXNTdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiAoIWlzQXJyYXkocGF0aCkgPyBbcGF0aF0gOiBwYXRoKSkucmVkdWNlKChhLCBiKSA9PiBhW2JdLCBvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PiB7XG4gICAgICAgIHJldHVybiBnZXQob2JqZWN0LCBwYXRoKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXNQcm9wZXJ0eShwYXRoLCB2YWx1ZSkge1xuICAgIHJldHVybiBzdWJqZWN0ID0+IHtcbiAgICAgICAgcmV0dXJuIGdldChzdWJqZWN0LCBwYXRoKSA9PT0gdmFsdWU7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcHJlZGljYXRlKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IG1hdGNoZXModmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IG1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pO1xuICAgIH1cbiAgICBlbHNlIGlmICghaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBwcm9wZXJ0eSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBrZWJhYkNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpXG4gICAgICAgIC5yZXBsYWNlKC9fL2csICctJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG1hcEtleXMob2JqZWN0LCBmbikge1xuICAgIGNvbnN0IG1hcHBlZCA9IHt9O1xuXG4gICAgZWFjaChvYmplY3QsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIG1hcHBlZFtmbih2YWx1ZSwga2V5KV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXBwZWQ7XG59XG5cbmZ1bmN0aW9uIG5lZ2F0ZShmbikge1xuICAgIHJldHVybiAoLi4uYXJncykgPT4gaXNGdW5jdGlvbihmbikgPyAhZm4oLi4uYXJncykgOiAhZm47XG59XG5cbmZ1bmN0aW9uIHBpY2tCeShvYmplY3QsIG1hdGNoKSB7XG4gICAgY29uc3Qgc3ViamVjdCA9IHt9O1xuXG4gICAgZWFjaChvYmplY3QsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUobWF0Y2gpKHZhbHVlKSkge1xuICAgICAgICAgICAgc3ViamVjdFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJqZWN0O1xufVxuXG5mdW5jdGlvbiBvbWl0Qnkob2JqZWN0LCBmbikge1xuICAgIHJldHVybiBwaWNrQnkob2JqZWN0LCBuZWdhdGUoZm4pKTtcbn1cblxudmFyIEFMSUFTRVMgPSB7XG4gICdzdHJlZXQnOiBbJ3N0cmVldF9udW1iZXInLCAncm91dGUnLCAnaW50ZXJzZWN0aW9uJ10sXG4gICdjaXR5JzogWydsb2NhbGl0eSddLFxuICAnc3RhdGUnOiBbJ2FkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMSddLFxuICAnemlwJzogWydwb3N0YWxfY29kZSddLFxuICAnemlwY29kZSc6IFsncG9zdGFsX2NvZGUnXSxcbiAgJ2NvdW50eSc6IFsnYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8yJ11cbn07XG5cbmZ1bmN0aW9uIGludGVyc2VjdGlvbihhLCBiKSB7XG4gIHJldHVybiBhLmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gYi5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoZSwgaSwgYykge1xuICAgIHJldHVybiBjLmluZGV4T2YoZSkgPT09IGk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0KHR5cGUsIG1vZGlmaWVycywgZ2VvY29kZXIpIHtcbiAgaWYgKGdlb2NvZGVyW3R5cGVdKSB7XG4gICAgcmV0dXJuIGdlb2NvZGVyW3R5cGVdO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsYXRpdHVkZScpIHtcbiAgICByZXR1cm4gZ2VvY29kZXIuZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xvbmdpdHVkZScpIHtcbiAgICByZXR1cm4gZ2VvY29kZXIuZ2VvbWV0cnkubG9jYXRpb24ubG5nKCk7XG4gIH1cblxuICB2YXIgYWxpYXNlcyA9IEFMSUFTRVNbdHlwZV0gfHwgKGlzQXJyYXkodHlwZSkgPyB0eXBlIDogW3R5cGVdKTtcbiAgdmFyIHZhbHVlcyA9IGdlb2NvZGVyLmFkZHJlc3NfY29tcG9uZW50cy5tYXAoZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgIGlmIChpbnRlcnNlY3Rpb24oY29tcG9uZW50LnR5cGVzLCBhbGlhc2VzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBjb21wb25lbnRbbW9kaWZpZXJzLnNob3J0ID8gJ3Nob3J0X25hbWUnIDogJ2xvbmdfbmFtZSddO1xuICAgIH1cbiAgfSkuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHZhbHVlcy5sZW5ndGggPyB2YWx1ZXMuam9pbignICcpIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKGJpbmRpbmcsIHZub2RlLCB2YWx1ZSkge1xuICB2YXIgcHJvcHMgPSBiaW5kaW5nLmV4cHJlc3Npb24uc3BsaXQoJy4nKTtcbiAgdmFyIHByb3AgPSBwcm9wcy5wb3AoKTtcbiAgdmFyIG1vZGVsID0gcHJvcHMucmVkdWNlKGZ1bmN0aW9uIChjYXJyeSwgaSkge1xuICAgIHJldHVybiBjYXJyeVtpXTtcbiAgfSwgdm5vZGUuY29udGV4dCk7XG4gIHZhbHVlID0gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcgJykgOiB2YWx1ZTtcblxuICBpZiAoYmluZGluZy5tb2RpZmllcnMucXVlcnkpIHtcbiAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZS5xdWVyeSA9IHZhbHVlO1xuICB9XG5cbiAgbW9kZWxbcHJvcF0gPSB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgUGxhY2VBdXRvZmlsbCA9IHtcbiAgYmluZDogZnVuY3Rpb24gYmluZChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZS4kb24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChwbGFjZSwgZ2VvY29kZXIpIHtcbiAgICAgIHZub2RlLmNvbnRleHQuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdXBkYXRlKGJpbmRpbmcsIHZub2RlLCBleHRyYWN0KGJpbmRpbmcuYXJnLCBiaW5kaW5nLm1vZGlmaWVycywgZ2VvY29kZXIpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZW9jb2RlKG9wdGlvbnMpIHtcbiAgdmFyIGdlb2NvZGVyID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICghb3B0aW9ucy5nZW9tZXRyeSkge1xuICAgICAgZ2VvY29kZXIuZ2VvY29kZShvcHRpb25zLCBmdW5jdGlvbiAocmVzdWx0cywgc3RhdHVzKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHdpbmRvdy5nb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKFtvcHRpb25zXSk7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgTE9BREVEX1NDUklQVFMgPSB7fTtcblxuZnVuY3Rpb24gZWxlbWVudCh1cmwpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnY2hhcnNldCcsICd1dGYtOCcpO1xuICAgIHJldHVybiBzY3JpcHQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZChzY3JpcHQpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjcmlwdDtcbn1cblxuZnVuY3Rpb24gc2NyaXB0KHVybCkge1xuICAgIGlmIChMT0FERURfU0NSSVBUU1t1cmxdIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gTE9BREVEX1NDUklQVFNbdXJsXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoTE9BREVEX1NDUklQVFNbdXJsXSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjPVwiJHt1cmx9XCJdYCkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoTE9BREVEX1NDUklQVFNbdXJsXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIExPQURFRF9TQ1JJUFRTW3VybF0gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhcHBlbmQoZWxlbWVudCh1cmwpKS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoTE9BREVEX1NDUklQVFNbdXJsXSA9IGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBMT0FERURfU0NSSVBUU1t1cmxdO1xufVxuXG52YXIgUGxhY2VBdXRvY29tcGxldGVMaXN0SXRlbSA9IHtyZW5kZXI6IGZ1bmN0aW9uKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdsaScse3N0YXRpY0NsYXNzOlwiYXV0b2NvbXBsZXRlLWxpc3QtaXRlbVwiLG9uOntcImZvY3VzXCI6X3ZtLm9uRm9jdXMsXCJvbkJsdXJcIjpfdm0ub25CbHVyfX0sW19jKCdhJyx7YXR0cnM6e1wiaHJlZlwiOlwiI1wifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnByZXZlbnREZWZhdWx0KCk7cmV0dXJuIF92bS5vbkNsaWNrKCRldmVudCl9LFwiZm9jdXNcIjpfdm0ub25Gb2N1cyxcImJsdXJcIjpfdm0ub25CbHVyfX0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJhdXRvY29tcGxldGUtbGlzdC1pdGVtLWljb25cIn0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImF1dG9jb21wbGV0ZS1saXN0LWl0ZW0tbGFiZWxcIn0sW192bS5fdChcImRlZmF1bHRcIildLDIpXSldKX0sc3RhdGljUmVuZGVyRm5zOiBbXSxcblxuICAgIG5hbWU6ICdwbGFjZS1hdXRvY29tcGxldGUtbGlzdC1pdGVtJyxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgaXRlbTogT2JqZWN0XG5cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIG9uQmx1cihldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicsIGV2ZW50LCB0aGlzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50LCB0aGlzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdmb2N1cycsIGV2ZW50LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59O1xuXG52YXIgUGxhY2VBdXRvY29tcGxldGVMaXN0ID0ge3JlbmRlcjogZnVuY3Rpb24oKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYXV0b2NvbXBsZXRlLWxpc3Qtd3JhcHBlclwifSxbX2MoJ3VsJyx7c3RhdGljQ2xhc3M6XCJhdXRvY29tcGxldGUtbGlzdFwifSxfdm0uX2woKF92bS5pdGVtcyksZnVuY3Rpb24oaXRlbSxpKXtyZXR1cm4gX2MoJ3BsYWNlLWF1dG9jb21wbGV0ZS1saXN0LWl0ZW0nLHtrZXk6aXRlbS5pZCxhdHRyczp7XCJpdGVtXCI6aXRlbX0sb246e1wiY2xpY2tcIjpfdm0ub25DbGljayxcImZvY3VzXCI6X3ZtLm9uRm9jdXMsXCJibHVyXCI6X3ZtLm9uQmx1cn19LFtfdm0uX3YoXCIgXCIrX3ZtLl9zKGl0ZW1bX3ZtLmRpc3BsYXldKStcIiBcIildKX0pKV0pfSxzdGF0aWNSZW5kZXJGbnM6IFtdLFxuXG4gICAgbmFtZTogJ3BsYWNlLWF1dG9jb21wbGV0ZS1saXN0JyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgUGxhY2VBdXRvY29tcGxldGVMaXN0SXRlbVxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgICdpdGVtcyc6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAnZGlzcGxheSc6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdkZXNjcmlwdGlvbidcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBvbkJsdXIoZXZlbnQsIGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2l0ZW06Ymx1cicsIGV2ZW50LCBpdGVtKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbkZvY3VzKGV2ZW50LCBpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpdGVtOmZvY3VzJywgZXZlbnQsIGl0ZW0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uQ2xpY2soZXZlbnQsIGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2l0ZW06Y2xpY2snLCBldmVudCwgaXRlbSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcblxuZnVuY3Rpb24gcHJlZml4KHN1YmplY3QsIHByZWZpeCwgZGVsaW1ldGVyID0gJy0nKSB7XG4gICAgY29uc3QgcHJlZml4ZXIgPSAodmFsdWUsIGtleSQkMSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSAoa2V5JCQxIHx8IHZhbHVlKVxuICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7cHJlZml4fSR7ZGVsaW1ldGVyfT9gKSwgJycpO1xuXG4gICAgICAgIHJldHVybiBbcHJlZml4LCBzdHJpbmddLmZpbHRlcih2YWx1ZSA9PiAhIXZhbHVlKS5qb2luKGRlbGltZXRlcik7XG4gICAgfTtcblxuICAgIGlmIChpc0Jvb2xlYW4oc3ViamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIHN1YmplY3Q7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHN1YmplY3QpKSB7XG4gICAgICAgIHJldHVybiBtYXBLZXlzKHN1YmplY3QsIHByZWZpeGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ZXIoc3ViamVjdCk7XG59XG5cbnZhciBGb3JtQ29udHJvbCA9IHtcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhdXRvY29tcGxldGUgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvY29tcGxldGU6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGZpZWxkIGlkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaWQ6IFtOdW1iZXIsIFN0cmluZ10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiBsYWJlbCBlbGVtZW50LiBJZiBubyB2YWx1ZSwgbm8gbGFiZWwgd2lsbCBhcHBlYXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsOiBbTnVtYmVyLCBTdHJpbmddLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZmllbGQgbmFtZSBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG5hbWU6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGZpZWxkIGlkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIGZpZWxkIHJlcXVpcmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICByZXF1aXJlZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGZvcm0tZ3JvdXAgd3JhcHBlciB0byBpbnB1dFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBncm91cDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByZWdleCBwYXR0ZXJuIGZvciB2YWxpZGF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBwYXR0ZXJuOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGlubGluZSBmaWVsZCB2YWxpZGF0aW9uIGVycm9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nfEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGVycm9yOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGlubGluZSBmaWVsZCB2YWxpZGF0aW9uIGVycm9ycyBwYXNzZWQgYXMgb2JqZWN0IHdpdGgga2V5L3ZhbHVlXG4gICAgICAgICAqIHBhaXJzLiBJZiBlcnJvcnMgcGFzc2VkIGFzIGFuIG9iamVjdCwgdGhlIGZvcm0gbmFtZSB3aWxsIGJlIHVzZWQgZm9yXG4gICAgICAgICAqIHRoZSBrZXkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3R8Qm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU29tZSBmZWVkYmFjayB0byBhZGQgdG8gdGhlIGZpZWxkIG9uY2UgdGhlIGZpZWxkIGlzIHN1Y2Nlc3NmdWxseVxuICAgICAgICAgKiB2YWxpZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZmVlZGJhY2s6IFtTdHJpbmcsIEFycmF5XSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb2YgZXZlbnQgbmFtZXMgdGhhdCBjb3JyZWxhdGUgd2l0aCBjYWxsYmFjayBmdW5jdGlvbnNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEZ1bmN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBiaW5kRXZlbnRzOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsnZm9jdXMnLCAnYmx1cicsICdjaGFuZ2UnLCAnY2xpY2snLCAna2V5dXAnLCAna2V5ZG93bicsICdwcm9ncmVzcycsICdwYXN0ZSddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVmYXVsdCBjbGFzcyBuYW1lIGFzc2lnbmVkIHRvIHRoZSBjb250cm9sIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZGVmYXVsdENvbnRyb2xDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2Zvcm0tY29udHJvbCdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGlkZSB0aGUgbGFiZWwgZm9yIGJyb3dzZXJzLCBidXQgbGVhdmUgaXQgZm9yIHNjcmVlbiByZWFkZXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBoaWRlTGFiZWw6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgbWFyZ2luL3BhZGRpbmcgY2xhc3NlcyBmb3IgZmluZSBjb250cm9sIG9mIHNwYWNpbmdcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgc3BhY2luZzogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgZm9ybSBjb250cm9sXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdtZCcsXG4gICAgICAgICAgICB2YWxpZGF0ZTogdmFsdWUgPT4gWydzbScsICdtZCcsICdsZyddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IHRoZSBmb3JtIGZpZWxkIGlubGluZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpbmxpbmU6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSBmb3JtIGNvbnRyb2wgaXMgcmVhZG9ubHksIGRpc3BsYXkgb25seSBhcyB0ZXh0P1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBwbGFpbnRleHQ6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBmb3JtIGNvbnRyb2wgcmVhZG9ubHk/XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgZm9ybSBjb250cm9sIGRpc2FibGVkP1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogU29tZSBpbnN0cnVjdGlvbnMgdG8gYXBwZWFyIHVuZGVyIHRoZSBmaWVsZCBsYWJlbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBoZWxwVGV4dDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heGxlbmd0aCBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbWF4bGVuZ3RoOiBbTnVtYmVyLCBTdHJpbmddXG5cbiAgICB9LFxuXG4gICAgZGlyZWN0aXZlczoge1xuICAgICAgICBiaW5kRXZlbnRzOiB7XG4gICAgICAgICAgICBiaW5kKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IGJpbmRpbmcudmFsdWUgfHwgdm5vZGUuY29udGV4dC5iaW5kRXZlbnRzO1xuXG4gICAgICAgICAgICAgICAgZWFjaChldmVudHMsIG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZub2RlLmNvbnRleHQuJGVtaXQobmFtZSwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgYmx1cigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldElucHV0RmllbGQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRGaWVsZCgpLmJsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBmb2N1cygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldElucHV0RmllbGQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRGaWVsZCgpLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0SW5wdXRGaWVsZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250cm9sLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEZpZWxkRXJyb3JzKCkge1xuICAgICAgICAgICAgbGV0IGVycm9ycyA9IHRoaXMuZXJyb3IgfHwgdGhpcy5lcnJvcnM7XG5cbiAgICAgICAgICAgIGlmIChpc09iamVjdCh0aGlzLmVycm9ycykpIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMgPSB0aGlzLmVycm9yc1t0aGlzLm5hbWUgfHwgdGhpcy5pZF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAhZXJyb3JzIHx8IGlzQXJyYXkoZXJyb3JzKSB8fCBpc09iamVjdChlcnJvcnMpID8gZXJyb3JzIDogW2Vycm9yc107XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGNhbGxiYWNrcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJpbmRFdmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXNbY2FtZWxDYXNlKFsnb24nLCBldmVudF0uam9pbignICcpKV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkuZmlsdGVyKGV2ZW50ID0+ICFpc1VuZGVmaW5lZChldmVudC5jYWxsYmFjaykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGludmFsaWRGZWVkYmFjaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuZ2V0RmllbGRFcnJvcnMoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkoZXJyb3JzKSA/IGVycm9ycy5qb2luKCc8YnI+JykgOiBlcnJvcnM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsaWRGZWVkYmFjaygpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuZmVlZGJhY2spID8gdGhpcy5mZWVkYmFjay5qb2luKCc8YnI+JykgOiB0aGlzLmZlZWRiYWNrO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbnRyb2xDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRDb250cm9sQ2xhc3MgKyAodGhpcy5wbGFpbnRleHQgPyAnLXBsYWludGV4dCcgOiAnJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29udHJvbFNpemVDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXgodGhpcy5zaXplLCB0aGlzLmNvbnRyb2xDbGFzcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29udHJvbENsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbENsYXNzLFxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbFNpemVDbGFzcyxcbiAgICAgICAgICAgICAgICAodGhpcy5zcGFjaW5nIHx8ICcnKSxcbiAgICAgICAgICAgICAgICAodGhpcy5pbnZhbGlkRmVlZGJhY2sgPyAnaXMtaW52YWxpZCcgOiAnJylcbiAgICAgICAgICAgIF0uam9pbignICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0RlZmF1bHRTbG90KCkge1xuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59O1xuXG52YXIgRm9ybUdyb3VwID0ge3JlbmRlcjogZnVuY3Rpb24oKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZm9ybS1ncm91cFwifSxbX3ZtLl90KFwiZGVmYXVsdFwiKV0sMil9LHN0YXRpY1JlbmRlckZuczogW10sXG5cbiAgICBuYW1lOiAnZm9ybS1ncm91cCdcblxufTtcblxuY29uc3QgVnVlSW5zdGFsbGVyID0ge1xuICAgIHVzZSxcbiAgICBzY3JpcHQsXG4gICAgcGx1Z2luLFxuICAgIHBsdWdpbnMsXG4gICAgZmlsdGVyLFxuICAgIGZpbHRlcnMsXG4gICAgY29tcG9uZW50LFxuICAgIGNvbXBvbmVudHMsXG4gICAgZGlyZWN0aXZlLFxuICAgIGRpcmVjdGl2ZXMsXG4gICAgJHBsdWdpbnM6IHt9LFxuICAgICRmaWx0ZXJzOiB7fSxcbiAgICAkZGlyZWN0aXZlczoge30sXG4gICAgJGNvbXBvbmVudHM6IHt9XG59O1xuXG5mdW5jdGlvbiB1c2UocGx1Z2luKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgICAgICAgd2luZG93LlZ1ZS51c2UocGx1Z2luKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGx1Z2luO1xufVxuXG5mdW5jdGlvbiBwbHVnaW4oVnVlLCBuYW1lLCBkZWYpIHtcbiAgICBpZiAoIVZ1ZUluc3RhbGxlci4kcGx1Z2luc1tuYW1lXSkge1xuICAgICAgICBWdWUudXNlKFZ1ZUluc3RhbGxlci4kcGx1Z2luc1tuYW1lXSA9IGRlZik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwbHVnaW5zKFZ1ZSwgcGx1Z2lucykge1xuICAgIGVhY2gocGx1Z2lucywgKGRlZiwgbmFtZSkgPT4ge1xuICAgICAgICBwbHVnaW4oVnVlLCBuYW1lLCBkZWYpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoVnVlLCBuYW1lLCBkZWYpIHtcbiAgICBpZiAoIVZ1ZUluc3RhbGxlci4kZmlsdGVyc1tuYW1lXSkge1xuICAgICAgICBWdWUudXNlKFZ1ZUluc3RhbGxlci4kZmlsdGVyc1tuYW1lXSA9IGRlZik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJzKFZ1ZSwgZmlsdGVycykge1xuICAgIGVhY2goZmlsdGVycywgKGRlZiwgbmFtZSkgPT4ge1xuICAgICAgICBmaWx0ZXIoVnVlLCBuYW1lLCBkZWYpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnQoVnVlLCBuYW1lLCBkZWYpIHtcbiAgICBpZiAoIVZ1ZUluc3RhbGxlci4kY29tcG9uZW50c1tuYW1lXSkge1xuICAgICAgICBWdWUuY29tcG9uZW50KG5hbWUsIFZ1ZUluc3RhbGxlci4kY29tcG9uZW50c1tuYW1lXSA9IGRlZik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21wb25lbnRzKFZ1ZSwgY29tcG9uZW50cykge1xuICAgIGVhY2goY29tcG9uZW50cywgKGRlZiwgbmFtZSkgPT4ge1xuICAgICAgICBjb21wb25lbnQoVnVlLCBuYW1lLCBkZWYpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RpdmUoVnVlLCBuYW1lLCBkZWYpIHtcbiAgICBpZiAoIVZ1ZUluc3RhbGxlci4kZGlyZWN0aXZlc1tuYW1lXSkge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihkZWYpKSB7XG4gICAgICAgICAgICBWdWUudXNlKFZ1ZUluc3RhbGxlci4kZGlyZWN0aXZlc1tuYW1lXSA9IGRlZik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBWdWUuZGlyZWN0aXZlKG5hbWUsIGRlZik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGl2ZXMoVnVlLCBkaXJlY3RpdmVzKSB7XG4gICAgZWFjaChkaXJlY3RpdmVzLCAoZGVmLCBuYW1lKSA9PiB7XG4gICAgICAgIGRpcmVjdGl2ZShWdWUsIG5hbWUsIGRlZik7XG4gICAgfSk7XG59XG5cblZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgRm9ybUdyb3VwXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmNvbnN0IENPTE9SUyA9IFtcbiAgICAncHJpbWFyeScsXG4gICAgJ3NlY29uZGFyeScsXG4gICAgJ3N1Y2Nlc3MnLFxuICAgICdkYW5nZXInLFxuICAgICd3YXJuaW5nJyxcbiAgICAnaW5mbycsXG4gICAgJ2xpZ2h0JyxcbiAgICAnZGFyaycsXG4gICAgJ3doaXRlJyxcbiAgICAnbXV0ZWQnXG5dO1xuXG5jb25zdCBwcm9wcyA9IHt9O1xuXG5lYWNoKFsnYm9yZGVyJywgJ3RleHQnLCAnYmcnLCAnYmctZ3JhZGllbnQnXSwgbmFtZXNwYWNlID0+IHtcbiAgICBlYWNoKENPTE9SUywgY29sb3IgPT4ge1xuICAgICAgICBwcm9wc1tjYW1lbENhc2UocHJlZml4KGNvbG9yLCBuYW1lc3BhY2UpKV0gPSBCb29sZWFuO1xuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGNsYXNzZXMoaW5zdGFuY2UsIG5hbWVzcGFjZSkge1xuICAgIHJldHVybiBDT0xPUlMubWFwKGNvbG9yID0+IHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlW2NhbWVsQ2FzZShjb2xvciA9IHByZWZpeChjb2xvciwgbmFtZXNwYWNlKSldID8gY29sb3IgOiBudWxsO1xuICAgIH0pXG4gICAgICAgIC5maWx0ZXIodmFsdWUgPT4gISF2YWx1ZSk7XG59XG5cbnZhciBDb2xvcmFibGUgPSB7XG5cbiAgICBwcm9wczogcHJvcHMsXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgdGV4dENvbG9yKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXModGhpcywgJ3RleHQnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBiZ0NvbG9yKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXModGhpcywgJ2JnJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYm9yZGVyQ29sb3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xhc3Nlcyh0aGlzLCAnYm9yZGVyJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmdHcmFkaWVudENvbG9yKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXModGhpcywgJ2JnLWdyYWRpZW50Jyk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIHRleHRDb2xvckNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0Q29sb3IoKS5qb2luKCcgJykudHJpbSgpIHx8IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYm9yZGVyQ29sb3JDbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9yZGVyQ29sb3IoKS5qb2luKCcgJykudHJpbSgpIHx8IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmdDb2xvckNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZ0NvbG9yKCkuam9pbignICcpLnRyaW0oKSB8fCBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJnR3JhZGllbnRDb2xvckNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZ0dyYWRpZW50Q29sb3IoKS5qb2luKCcgJykudHJpbSgpIHx8IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29sb3JhYmxlQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSB7fTtcblxuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLnRleHRDb2xvckNsYXNzZXNdID0gISF0aGlzLnRleHRDb2xvckNsYXNzZXM7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuYm9yZGVyQ29sb3JDbGFzc2VzXSA9ICEhdGhpcy5ib3JkZXJDb2xvckNsYXNzZXM7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuYmdDb2xvckNsYXNzZXNdID0gISF0aGlzLmJnQ29sb3JDbGFzc2VzO1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmJnR3JhZGllbnRDb2xvckNsYXNzZXNdID0gISF0aGlzLmJnR3JhZGllbnRDb2xvckNsYXNzZXM7XG5cbiAgICAgICAgICAgIHJldHVybiBvbWl0QnkoY2xhc3NlcywgKGtleSQkMSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWtleSQkMSB8fCAhdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59O1xuXG52YXIgU2NyZWVucmVhZGVycyA9IHtcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3VsZCBzaG93IG9ubHkgZm9yIHNjcmVlbnJlYWRlcnNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIHNyT25seTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIGJlIGZvY3VzYWJsZSBmb3Igc2NyZWVucmVhZGVyc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgc3JPbmx5Rm9jdXNhYmxlOiBCb29sZWFuXG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc2NyZWVucmVhZGVyQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ3NyLW9ubHknOiB0aGlzLnNyT25seSxcbiAgICAgICAgICAgICAgICAnc3Itb25seS1mb2N1c2FibGUnOiB0aGlzLnNyT25seUZvY3VzYWJsZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxudmFyIEhlbHBUZXh0ID0ge3JlbmRlcjogZnVuY3Rpb24oKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NtYWxsJyx7c3RhdGljQ2xhc3M6XCJmb3JtLXRleHRcIixjbGFzczpfdm0uY2xhc3Nlc30sW192bS5fdChcImRlZmF1bHRcIildLDIpfSxzdGF0aWNSZW5kZXJGbnM6IFtdLFxuXG4gICAgbmFtZTogJ2hlbHAtdGV4dCcsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBTY3JlZW5yZWFkZXJzXG4gICAgXSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLnNjcmVlbnJlYWRlckNsYXNzZXMsIHRoaXMuY29sb3JhYmxlQ2xhc3Nlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cblZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgSGVscFRleHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxudmFyIEZvcm1MYWJlbCA9IHtyZW5kZXI6IGZ1bmN0aW9uKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdsYWJlbCcse2NsYXNzOl92bS5jbGFzc2VzfSxbX3ZtLl90KFwiZGVmYXVsdFwiKV0sMil9LHN0YXRpY1JlbmRlckZuczogW10sXG5cbiAgICBuYW1lOiAnZm9ybS1sYWJlbCcsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBTY3JlZW5yZWFkZXJzXG4gICAgXSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLnNjcmVlbnJlYWRlckNsYXNzZXMsIHRoaXMuY29sb3JhYmxlQ2xhc3Nlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cblZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgRm9ybUxhYmVsXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbnZhciBGb3JtRmVlZGJhY2sgPSB7cmVuZGVyOiBmdW5jdGlvbigpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7Y2xhc3M6eydpbnZhbGlkLWZlZWRiYWNrJzogX3ZtLmludmFsaWQsICd2YWxpZC1mZWVkYmFjayc6IF92bS52YWxpZCAmJiAhX3ZtLmludmFsaWR9fSxbX3ZtLl90KFwiZGVmYXVsdFwiLFtfdm0uX3YoX3ZtLl9zKF92bS5sYWJlbCkpXSldLDIpfSxzdGF0aWNSZW5kZXJGbnM6IFtdLFxuXG4gICAgbmFtZTogJ2Zvcm0tZmVlZGJhY2snLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIENvbG9yYWJsZVxuICAgIF0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgbGFiZWwgZWxlbWVudC4gSWYgbm8gdmFsdWUsIG5vIGxhYmVsIHdpbGwgYXBwZWFyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgdGhlIGZlZWRiYWNrIG1hcmtlZCBhcyBpbnZhbGlkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGludmFsaWQ6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3VsZCB0aGUgZmVlZGJhY2sgbWFya2VkIGFzIGludmFsaWRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFsaWQ6IEJvb2xlYW5cblxuICAgIH1cblxufTtcblxuVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBGb3JtRmVlZGJhY2tcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxudmFyIE1lcmdlQ2xhc3NlcyA9IHtcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBtZXJnZUNsYXNzZXMoKSB7XG4gICAgICAgICAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgICAgICAgICBlYWNoKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSwgYXJnID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmplY3QoYXJnKSkge1xuICAgICAgICAgICAgICAgICAgICBleHRlbmQoY2xhc3NlcywgYXJnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJheShhcmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdChhcmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlc1thcmddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcblxuZnVuY3Rpb24gdW5pdChoZWlnaHQpIHtcbiAgICByZXR1cm4gaXNGaW5pdGUoaGVpZ2h0KSA/IGhlaWdodCArICdweCcgOiBoZWlnaHQ7XG59XG5cbnZhciBCYXNlVHlwZSA9IHtyZW5kZXI6IGZ1bmN0aW9uKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImFjdGl2aXR5LWluZGljYXRvclwiLGNsYXNzOl92bS5jbGFzc2VzfSxfdm0uX2woKF92bS5ub2RlcyksZnVuY3Rpb24oaSl7cmV0dXJuIF9jKCdkaXYnKX0pKX0sc3RhdGljUmVuZGVyRm5zOiBbXSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGVzOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAzXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHByZWZpeDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2FjdGl2aXR5LWluZGljYXRvci0nXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY2xhc3NlczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0ge307XG5cbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy4kb3B0aW9ucy5uYW1lXSA9ICEhdGhpcy4kb3B0aW9ucy5uYW1lO1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLnByZWZpeCArIHRoaXMuc2l6ZS5yZXBsYWNlKHRoaXMucHJlZml4LCAnJyldID0gISF0aGlzLnNpemU7XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG52YXIgQWN0aXZpdHlJbmRpY2F0b3JEb3RzID0ge1xuXG4gICAgbmFtZTogJ2FjdGl2aXR5LWluZGljYXRvci1kb3RzJyxcblxuICAgIGV4dGVuZHM6IEJhc2VUeXBlXG59O1xuXG52YXIgQWN0aXZpdHlJbmRpY2F0b3JTcGlubmVyID0ge1xuXG4gICAgbmFtZTogJ2FjdGl2aXR5LWluZGljYXRvci1zcGlubmVyJyxcblxuICAgIGV4dGVuZHM6IEJhc2VUeXBlLFxuXG4gICAgcHJvcHM6IGV4dGVuZCh7fSwgQmFzZVR5cGUucHJvcHMsIHtcbiAgICAgICAgbm9kZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEyXG4gICAgICAgIH1cbiAgICB9KVxufTtcblxudmFyIEFjdGl2aXR5SW5kaWNhdG9yID0ge3JlbmRlcjogZnVuY3Rpb24oKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5jZW50ZXIpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNlbnRlci13cmFwcGVyXCIsY2xhc3M6eydwb3NpdGlvbi1yZWxhdGl2ZSc6IF92bS5yZWxhdGl2ZSwgJ3Bvc2l0aW9uLWZpeGVkJzogX3ZtLmZpeGVkfSxzdHlsZTooX3ZtLnN0eWxlKX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNlbnRlci1jb250ZW50IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIn0sW19jKF92bS5jb21wb25lbnQse3RhZzpcImNvbXBvbmVudFwiLGF0dHJzOntcInNpemVcIjpfdm0uc2l6ZSxcInByZWZpeFwiOl92bS5wcmVmaXh9fSksX3ZtLl92KFwiIFwiKSwoX3ZtLmxhYmVsKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJhY3Rpdml0eS1pbmRpY2F0b3ItbGFiZWxcIixkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLmxhYmVsKX19KTpfdm0uX2UoKV0sMSldKTpfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIixzdHlsZTooX3ZtLnN0eWxlKX0sW19jKF92bS5jb21wb25lbnQse3RhZzpcImNvbXBvbmVudFwiLGF0dHJzOntcInNpemVcIjpfdm0uc2l6ZSxcInByZWZpeFwiOl92bS5wcmVmaXh9fSksX3ZtLl92KFwiIFwiKSwoX3ZtLmxhYmVsKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJhY3Rpdml0eS1pbmRpY2F0b3ItbGFiZWxcIixkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLmxhYmVsKX19KTpfdm0uX2UoKV0sMSl9LHN0YXRpY1JlbmRlckZuczogW10sXG5cbiAgICBuYW1lOiAnYWN0aXZpdHktaW5kaWNhdG9yJyxcblxuICAgIGV4dGVuZHM6IEJhc2VUeXBlLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICBjZW50ZXI6IEJvb2xlYW4sXG5cbiAgICAgICAgZml4ZWQ6IEJvb2xlYW4sXG5cbiAgICAgICAgbGFiZWw6IFN0cmluZyxcblxuICAgICAgICByZWxhdGl2ZTogQm9vbGVhbixcblxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnZG90cydcbiAgICAgICAgfSxcblxuICAgICAgICBoZWlnaHQ6IFtTdHJpbmcsIE51bWJlcl0sXG5cbiAgICAgICAgbWF4SGVpZ2h0OiBbU3RyaW5nLCBOdW1iZXJdLFxuXG4gICAgICAgIG1pbkhlaWdodDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICB3aWR0aDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICBtYXhXaWR0aDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICBtaW5XaWR0aDogW1N0cmluZywgTnVtYmVyXVxuXG4gICAgfSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQWN0aXZpdHlJbmRpY2F0b3JEb3RzLFxuICAgICAgICBBY3Rpdml0eUluZGljYXRvclNwaW5uZXJcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBzdHlsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHVuaXQodGhpcy53aWR0aCksXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IHVuaXQodGhpcy5tYXhXaWR0aCksXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IHVuaXQodGhpcy5taW5XaWR0aCksXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB1bml0KHRoaXMuaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IHVuaXQodGhpcy5tYXhIZWlnaHQpLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogdW5pdCh0aGlzLm1pbkhlaWdodClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIGtlYmFiQ2FzZSh0aGlzLnByZWZpeCArIHRoaXMudHlwZS5yZXBsYWNlKHRoaXMucHJlZml4LCAnJykpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5WdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbnZhciBJbnB1dEZpZWxkID0ge3JlbmRlcjogZnVuY3Rpb24oKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Zvcm0tZ3JvdXAnLHtzdGF0aWNDbGFzczpcImlucHV0LWZpZWxkXCIsY2xhc3M6eydoYXMtYWN0aXZpdHknOiBfdm0uYWN0aXZpdHl9fSxbX3ZtLl90KFwibGFiZWxcIixbKF92bS5sYWJlbCB8fCBfdm0uaGFzRGVmYXVsdFNsb3QpP19jKCdmb3JtLWxhYmVsJyx7cmVmOlwibGFiZWxcIixhdHRyczp7XCJmb3JcIjpfdm0uaWR9LGRvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0ubGFiZWwpfX0pOl92bS5fZSgpXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJwb3NpdGlvbi1yZWxhdGl2ZVwifSxbX3ZtLl90KFwiY29udHJvbFwiLFtfYygnaW5wdXQnLHtkaXJlY3RpdmVzOlt7bmFtZTpcImJpbmQtZXZlbnRzXCIscmF3TmFtZTpcInYtYmluZC1ldmVudHNcIix2YWx1ZTooX3ZtLmJpbmRFdmVudHMpLGV4cHJlc3Npb246XCJiaW5kRXZlbnRzXCJ9XSxyZWY6XCJjb250cm9sXCIsY2xhc3M6X3ZtLm1lcmdlQ2xhc3Nlcyhfdm0uY29udHJvbENsYXNzZXMsIF92bS5jb2xvcmFibGVDbGFzc2VzKSxhdHRyczp7XCJpZFwiOl92bS5pZCxcInR5cGVcIjpfdm0udHlwZSxcIm5hbWVcIjpfdm0ubmFtZSxcInBhdHRlcm5cIjpfdm0ucGF0dGVybixcInJlYWRvbmx5XCI6X3ZtLnJlYWRvbmx5LFwicmVxdWlyZWRcIjpfdm0ucmVxdWlyZWQsXCJtYXhsZW5ndGhcIjpfdm0ubWF4bGVuZ3RoLFwicGxhY2Vob2xkZXJcIjpfdm0ucGxhY2Vob2xkZXIsXCJkaXNhYmxlZFwiOl92bS5kaXNhYmxlZCB8fCBfdm0ucmVhZG9ubHksXCJhcmlhLWxhYmVsXCI6X3ZtLmxhYmVsLFwiYXJpYS1kZXNjcmliZWRieVwiOl92bS5pZCxcImF1dG9jb21wbGV0ZVwiOl92bS5hdXRvY29tcGxldGV9LGRvbVByb3BzOntcInZhbHVlXCI6X3ZtLnZhbHVlfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLiRlbWl0KCdpbnB1dCcsICRldmVudC50YXJnZXQudmFsdWUpO319fSldKSxfdm0uX3YoXCIgXCIpLF92bS5fdChcImFjdGl2aXR5XCIsW19jKCd0cmFuc2l0aW9uJyx7YXR0cnM6e1wibmFtZVwiOlwic2xpZGUtZmFkZVwifX0sWyhfdm0uYWN0aXZpdHkpP19jKCdhY3Rpdml0eS1pbmRpY2F0b3InLHtrZXk6XCJ0ZXN0XCIscmVmOlwiYWN0aXZpdHlcIixhdHRyczp7XCJ0eXBlXCI6XCJkb3RzXCIsXCJzaXplXCI6X3ZtLnNpemV9fSk6X3ZtLl9lKCldLDEpXSksX3ZtLl92KFwiIFwiKSxfdm0uX3QoXCJmZWVkYmFja1wiLFsoX3ZtLnZhbGlkRmVlZGJhY2spP19jKCdmb3JtLWZlZWRiYWNrJyx7cmVmOlwiZmVlZGJhY2tcIixhdHRyczp7XCJ2YWxpZFwiOlwiXCJ9LGRvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0udmFsaWRGZWVkYmFjayl9fSk6KF92bS5pbnZhbGlkRmVlZGJhY2spP19jKCdmb3JtLWZlZWRiYWNrJyx7cmVmOlwiZmVlZGJhY2tcIixhdHRyczp7XCJpbnZhbGlkXCI6XCJcIn0sZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5pbnZhbGlkRmVlZGJhY2spfX0pOl92bS5fZSgpXSldLDIpLF92bS5fdihcIiBcIiksX3ZtLl90KFwiaGVscFwiLFsoX3ZtLmhlbHBUZXh0KT9fYygnaGVscC10ZXh0Jyx7cmVmOlwiaGVscFwiLGRvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0uaGVscFRleHQpfX0pOl92bS5fZSgpXSldLDIpfSxzdGF0aWNSZW5kZXJGbnM6IFtdLFxuXG4gICAgbmFtZTogJ2lucHV0LWZpZWxkJyxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIEZvcm1Db250cm9sLFxuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBIZWxwVGV4dCxcbiAgICAgICAgRm9ybUdyb3VwLFxuICAgICAgICBGb3JtTGFiZWwsXG4gICAgICAgIEZvcm1GZWVkYmFjayxcbiAgICAgICAgQWN0aXZpdHlJbmRpY2F0b3JcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyB0eXBlIGFjdGl2aXR5IGluZGljYXRvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXR5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICd0ZXh0J1xuICAgICAgICB9XG5cbiAgICB9XG5cbn07XG5cblZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgSW5wdXRGaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5jb25zdCBLRVlDT0RFID0ge1xuICAgIEVTQzogMjcsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbiAgICBFTlRFUjogMTMsXG4gICAgU1BBQ0U6IDMyLFxuICAgIFRBQjogOVxufTtcblxuY29uc3QgQVBJX1JFUVVFU1RfT1BUSU9OUyA9IFtcbiAgICAnYm91bmRzJyxcbiAgICAnbG9jYXRpb24nLFxuICAgICdjb21wb25lbnQtcmVzdHJpY3Rpb25zJyxcbiAgICAnb2Zmc2V0JyxcbiAgICAncmFkaXVzJyxcbiAgICAndHlwZXMnXG5dO1xuXG52YXIgUGxhY2VBdXRvY29tcGxldGVGaWVsZCA9IHtyZW5kZXI6IGZ1bmN0aW9uKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImF1dG9jb21wbGV0ZS1maWVsZFwiLG9uOntcImtleWRvd25cIjpfdm0ub25LZXlkb3duLFwia2V5dXBcIjpfdm0ub25LZXl1cH19LFtfYygnaW5wdXQtZmllbGQnLHthdHRyczp7XCJuYW1lXCI6X3ZtLm5hbWUsXCJpZFwiOl92bS5pZCxcInR5cGVcIjpfdm0udHlwZSxcInBsYWNlaG9sZGVyXCI6X3ZtLnBsYWNlaG9sZGVyLFwicmVxdWlyZWRcIjpfdm0ucmVxdWlyZWQsXCJkaXNhYmxlZFwiOl92bS5kaXNhYmxlZCB8fCBfdm0ucmVhZG9ubHksXCJyZWFkb25seVwiOl92bS5yZWFkb25seSxcInBhdHRlcm5cIjpfdm0ucGF0dGVybixcImFyaWEtbGFiZWxcIjpfdm0ubGFiZWwsXCJhcmlhLWRlc2NyaWJlZGJ5XCI6X3ZtLmlkLFwibGFiZWxcIjpfdm0ubGFiZWwsXCJlcnJvcnNcIjpfdm0uZXJyb3JzLFwidmFsdWVcIjpfdm0udmFsdWUsXCJhdXRvY29tcGxldGVcIjpcIm5vXCJ9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uJGVtaXQoJ2lucHV0JywgX3ZtLnF1ZXJ5KTt9LFwiZm9jdXNcIjpfdm0ub25Gb2N1cyxcImJsdXJcIjpfdm0ub25CbHVyfSxtb2RlbDp7dmFsdWU6KF92bS5xdWVyeSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5xdWVyeT0kJHY7fSxleHByZXNzaW9uOlwicXVlcnlcIn19LFsoX3ZtLmFjdGl2aXR5KT9fYygnYWN0aXZpdHktaW5kaWNhdG9yJyx7YXR0cnM6e1wic2l6ZVwiOlwieHNcIixcInR5cGVcIjpcInNwaW5uZXJcIn19KTpfdm0uX2UoKV0sMSksX3ZtLl92KFwiIFwiKSwoX3ZtLnByZWRpY3Rpb25zICYmIF92bS5zaG93UHJlZGljdGlvbnMpP19jKCdwbGFjZS1hdXRvY29tcGxldGUtbGlzdCcse2F0dHJzOntcIml0ZW1zXCI6X3ZtLnByZWRpY3Rpb25zfSxvbjp7XCJpdGVtOmNsaWNrXCI6X3ZtLm9uSXRlbUNsaWNrLFwiaXRlbTpibHVyXCI6X3ZtLm9uSXRlbUJsdXJ9fSk6X3ZtLl9lKCldLDEpfSxzdGF0aWNSZW5kZXJGbnM6IFtdLFxuXG4gICAgbmFtZTogJ3BsYWNlLWF1dG9jb21wbGV0ZS1maWVsZCcsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgRm9ybUNvbnRyb2xcbiAgICBdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBGb3JtR3JvdXAsXG4gICAgICAgIElucHV0RmllbGQsXG4gICAgICAgIEFjdGl2aXR5SW5kaWNhdG9yLFxuICAgICAgICBQbGFjZUF1dG9jb21wbGV0ZUxpc3RcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAnYXBpLWtleSc6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgJ2Jhc2UtdXJpJzoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcydcbiAgICAgICAgfSxcblxuICAgICAgICAnbGlicmFyaWVzJzoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbJ2dlb21ldHJ5JywgJ3BsYWNlcyddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgICdib3VuZHMnOiB7XG4gICAgICAgICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0LCBTdHJpbmddLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAnbG9jYXRpb24nOiB7XG4gICAgICAgICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0LCBTdHJpbmddLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAnY29tcG9uZW50LXJlc3RyaWN0aW9ucyc6IHtcbiAgICAgICAgICAgIHR5cGU6IFtCb29sZWFuLCBPYmplY3QsIFN0cmluZ10sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgICdvZmZzZXQnOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAncmFkaXVzJzoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgJ3R5cGVzJzoge1xuICAgICAgICAgICAgdHlwZTogW0Jvb2xlYW4sIEFycmF5XSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0UmVxdWVzdE9wdGlvbnMoKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGlucHV0OiB0aGlzLmdldElucHV0RWxlbWVudCgpLnZhbHVlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIEFQSV9SRVFVRVNUX09QVElPTlMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1tpXSAhPT0gdW5kZWZpbmVkIHx8IHRoaXNbaV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tpXSA9IHRoaXNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgfSxcblxuICAgICAgICBzZWxlY3QocGxhY2UpIHtcbiAgICAgICAgICAgIGdlb2NvZGUoeyBwbGFjZUlkOiBwbGFjZS5wbGFjZV9pZCB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMucXVlcnkgPSByZXNwb25zZVswXS5mb3JtYXR0ZWRfYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0JywgcGxhY2UsIHJlc3BvbnNlWzBdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNlYXJjaCgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdldElucHV0RWxlbWVudCgpLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZGljdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UHJlZGljdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVqZWN0KG5ldyBFcnJvcignSW5wdXQgZW1wdHknKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXR5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXJ2aWNlLmdldFBsYWNlUHJlZGljdGlvbnModGhpcy5nZXRSZXF1ZXN0T3B0aW9ucygpLCAocmVzcG9uc2UsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpdml0eSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2VTdGF0dXMuT0s6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEVycm9yIHdpdGggc3RhdHVzOiAke3N0YXR1c31gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGUoKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcmVkaWN0aW9ucyA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNob3coKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcmVkaWN0aW9ucyA9IHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdXAoKSB7XG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignYTpmb2N1cycpO1xuXG4gICAgICAgICAgICBpZiAoZm9jdXNlZCAmJiBmb2N1c2VkLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgICAgIGZvY3VzZWQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG4gICAgICAgICAgICAgICAgbGlua3NbbGlua3MubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkb3duKCkge1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2E6Zm9jdXMnKTtcblxuICAgICAgICAgICAgaWYgKGZvY3VzZWQgJiYgZm9jdXNlZC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgICAgIGZvY3VzZWQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignYScpLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdhJykuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBvbktleWRvd24oZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdbdGFiaW5kZXhdJyk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGV2ZW50LmtleUNvZGUgPT09IEtFWUNPREUuVEFCKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKSAmJiBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25LZXl1cChldmVudCkge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREUuRU5URVI6XG4gICAgICAgICAgICBjYXNlIEtFWUNPREUuU1BBQ0U6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5pcy1mb2N1c2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZWwucXVlcnlTZWxlY3RvcignLmlzLWZvY3VzZWQgYScpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdtb3VzZWRvd24nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgS0VZQ09ERS5FU0M6XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbnB1dEVsZW1lbnQoKS5ibHVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFLlVQOlxuICAgICAgICAgICAgICAgIHRoaXMudXAoKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgS0VZQ09ERS5ET1dOOlxuICAgICAgICAgICAgICAgIHRoaXMuZG93bigpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlYXJjaCgpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlZGljdGlvbnMgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcmVkaWN0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZGljdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5xdWVyeSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcmVkaWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbktleXVwKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBvbkJsdXIoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy4kZWwuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBvbkl0ZW1CbHVyKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm9uQmx1cihldmVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25JdGVtQ2xpY2soZXZlbnQsIGNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdChjaGlsZC5pdGVtKTtcbiAgICAgICAgICAgIHRoaXMucHJlZGljdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHNjcmlwdChgJHt0aGlzLmJhc2VVcml9P2tleT0ke3RoaXMuYXBpS2V5fSZsaWJyYXJpZXM9JHt0aGlzLmxpYnJhcmllcy5qb2luKCcsJyl9YCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRnZW9jb2RlciA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgICAgICAgICAgIHRoaXMuJHNlcnZpY2UgPSBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGVTZXJ2aWNlKCk7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdsb2FkZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBxdWVyeTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIGFjdGl2aXR5OiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICBwcmVkaWN0aW9uczogZmFsc2UsXG4gICAgICAgICAgICBzaG93UHJlZGljdGlvbnM6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICB7XG4gICAgICAgIC8vIEFuIGFycmF5IG9mIHR5cGVzIHNwZWNpZmllcyBhbiBleHBsaWNpdCB0eXBlIG9yIGEgdHlwZSBjb2xsZWN0aW9uLCBhcyBsaXN0ZWQgaW4gdGhlIHN1cHBvcnRlZCB0eXBlcyBiZWxvdy4gSWYgbm90aGluZyBpcyBzcGVjaWZpZWQsIGFsbCB0eXBlcyBhcmUgcmV0dXJuZWQuIEluIGdlbmVyYWwgb25seSBhIHNpbmdsZSB0eXBlIGlzIGFsbG93ZWQuIFRoZSBleGNlcHRpb24gaXMgdGhhdCB5b3UgY2FuIHNhZmVseSBtaXggdGhlIGdlb2NvZGUgYW5kIGVzdGFibGlzaG1lbnQgdHlwZXMsIGJ1dCBub3RlIHRoYXQgdGhpcyB3aWxsIGhhdmUgdGhlIHNhbWUgZWZmZWN0IGFzIHNwZWNpZnlpbmcgbm8gdHlwZXMuIFRoZSBzdXBwb3J0ZWQgdHlwZXMgYXJlOiBnZW9jb2RlIGluc3RydWN0cyB0aGUgUGxhY2VzIHNlcnZpY2UgdG8gcmV0dXJuIG9ubHkgZ2VvY29kaW5nIHJlc3VsdHMsIHJhdGhlciB0aGFuIGJ1c2luZXNzIHJlc3VsdHMuIGFkZHJlc3MgaW5zdHJ1Y3RzIHRoZSBQbGFjZXMgc2VydmljZSB0byByZXR1cm4gb25seSBnZW9jb2RpbmcgcmVzdWx0cyB3aXRoIGEgcHJlY2lzZSBhZGRyZXNzLiBlc3RhYmxpc2htZW50IGluc3RydWN0cyB0aGUgUGxhY2VzIHNlcnZpY2UgdG8gcmV0dXJuIG9ubHkgYnVzaW5lc3MgcmVzdWx0cy4gdGhlIChyZWdpb25zKSB0eXBlIGNvbGxlY3Rpb24gaW5zdHJ1Y3RzIHRoZSBQbGFjZXMgc2VydmljZSB0byByZXR1cm4gYW55IHJlc3VsdCBtYXRjaGluZyB0aGUgZm9sbG93aW5nIHR5cGVzOiBsb2NhbGl0eSBzdWJsb2NhbGl0eSBwb3N0YWxfY29kZSBjb3VudHJ5IGFkbWluaXN0cmF0aXZlX2FyZWExIGFkbWluaXN0cmF0aXZlX2FyZWEyIHRoZSAoY2l0aWVzKSB0eXBlIGNvbGxlY3Rpb24gaW5zdHJ1Y3RzIHRoZSBQbGFjZXMgc2VydmljZSB0byByZXR1cm4gcmVzdWx0cyB0aGF0IG1hdGNoIGVpdGhlciBsb2NhbGl0eSBvciBhZG1pbmlzdHJhdGl2ZV9hcmVhMy5cbiAgICAgICAgLy8gUG9zc2libGUgdmFsdWVzOiBnZW9jb2RlLCBhZGRyZXNzLCBlc3RhYmxpc2htZW50LCBjaXRpZXMsIGxvY2FsaXR5LCBzdWJsb2NhbGl0eSwgcG9zdGFsX2NvZGUsIGNvdW50cnksIGFkbWluaXN0cmF0aXZlX2FyZWExLCBhZG1pbmlzdHJhdGl2ZV9hcmVhMlxuICAgICAgICB0eXBlOiB1bmRlZmluZWQsXG5cbiAgICAgICAgLy8gaXMgYSBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHN8Z29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzTGl0ZXJhbCBvYmplY3Qgc3BlY2lmeWluZyB0aGUgYXJlYSBpbiB3aGljaCB0byBzZWFyY2ggZm9yIHBsYWNlcy4gVGhlIHJlc3VsdHMgYXJlIGJpYXNlZCB0b3dhcmRzLCBidXQgbm90IHJlc3RyaWN0ZWQgdG8sIHBsYWNlcyBjb250YWluZWQgd2l0aGluIHRoZXNlIGJvdW5kcy5cbiAgICAgICAgYm91bmRzOiB1bmRlZmluZWQsXG5cbiAgICAgICAgLy8gaXMgYSBib29sZWFuIHNwZWNpZnlpbmcgd2hldGhlciB0aGUgQVBJIG11c3QgcmV0dXJuIG9ubHkgdGhvc2UgcGxhY2VzIHRoYXQgYXJlIHN0cmljdGx5IHdpdGhpbiB0aGUgcmVnaW9uIGRlZmluZWQgYnkgdGhlIGdpdmVuIGJvdW5kcy4gVGhlIEFQSSBkb2VzIG5vdCByZXR1cm4gcmVzdWx0cyBvdXRzaWRlIHRoaXMgcmVnaW9uIGV2ZW4gaWYgdGhleSBtYXRjaCB0aGUgdXNlciBpbnB1dC5cbiAgICAgICAgc3RyaWN0Qm91bmRzOiB0cnVlfGZhbHNlLFxuXG4gICAgICAgIC8vIGNhbiBiZSB1c2VkIHRvIHJlc3RyaWN0IHJlc3VsdHMgdG8gc3BlY2lmaWMgZ3JvdXBzLiBDdXJyZW50bHksIHlvdSBjYW4gdXNlIGNvbXBvbmVudFJlc3RyaWN0aW9ucyB0byBmaWx0ZXIgYnkgdXAgdG8gNSBjb3VudHJpZXMuIENvdW50cmllcyBtdXN0IGJlIHBhc3NlZCBhcyBhcyBhIHR3by1jaGFyYWN0ZXIsIElTTyAzMTY2LTEgQWxwaGEtMiBjb21wYXRpYmxlIGNvdW50cnkgY29kZS4gTXVsdGlwbGUgY291bnRyaWVzIG11c3QgYmUgcGFzc2VkIGFzIGEgbGlzdCBvZiBjb3VudHJ5IGNvZGVzLiB6XG4gICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczogdW5kZWZpbmVkLFxuXG4gICAgICAgIC8vIGNhbiBiZSB1c2VkIHRvIGluc3RydWN0IHRoZSBBdXRvY29tcGxldGUgd2lkZ2V0IHRvIHJldHJpZXZlIG9ubHkgUGxhY2UgSURzLiBPbiBjYWxsaW5nIGdldFBsYWNlKCkgb24gdGhlIEF1dG9jb21wbGV0ZSBvYmplY3QsIHRoZSBQbGFjZVJlc3VsdCBtYWRlIGF2YWlsYWJsZSB3aWxsIG9ubHkgaGF2ZSB0aGUgcGxhY2UgaWQsIHR5cGVzIGFuZCBuYW1lIHByb3BlcnRpZXMgc2V0LiBZb3UgY2FuIHVzZSB0aGUgcmV0dXJuZWQgcGxhY2UgSUQgd2l0aCBjYWxscyB0byB0aGUgUGxhY2VzLCBHZW9jb2RpbmcsIERpcmVjdGlvbnMgb3IgRGlzdGFuY2UgTWF0cml4IHNlcnZpY2VzLlxuICAgICAgICBwbGFjZUlkT25seTogdW5kZWZpbmVkLFxuXG4gICAgICAgIC8vIGlzIGEgZ29vZ2xlLm1hcHMuTGF0TG5nIGZvciBwcmVkaWN0aW9uIGJpYXNpbmcuIFByZWRpY3Rpb25zIHdpbGwgYmUgYmlhc2VkIHRvd2FyZHMgdGhlIGdpdmVuIGxvY2F0aW9uIGFuZCByYWRpdXMuIEFsdGVybmF0aXZlbHksIGJvdW5kcyBjYW4gYmUgdXNlZC5cbiAgICAgICAgbG9jYXRpb246IHVuZGVmaW5lZCxcblxuICAgICAgICAvLyBpcyBhIG51bWJlciB0byBkZXRlcm1pbmUgdGhlIGNoYXJhY3RlciBwb3NpdGlvbiBpbiB0aGUgaW5wdXQgdGVybSBhdCB3aGljaCB0aGUgc2VydmljZSB1c2VzIHRleHQgZm9yIHByZWRpY3Rpb25zICh0aGUgcG9zaXRpb24gb2YgdGhlIGN1cnNvciBpbiB0aGUgaW5wdXQgZmllbGQpLlxuICAgICAgICBvZmZzZXQ6IHVuZGVmaW5lZCxcblxuICAgICAgICAvLyBpcyBhIG51bWJlciB0byB0aGUgcmFkaXVzIG9mIHRoZSBhcmVhIHVzZWQgZm9yIHByZWRpY3Rpb24gYmlhc2luZy4gVGhlIHJhZGl1cyBpcyBzcGVjaWZpZWQgaW4gbWV0ZXJzLCBhbmQgbXVzdCBhbHdheXMgYmUgYWNjb21wYW5pZWQgYnkgYSBsb2NhdGlvbiBwcm9wZXJ0eS4gQWx0ZXJuYXRpdmVseSwgYm91bmRzIGNhbiBiZSB1c2VkLlxuICAgICAgICByYWRpdXM6IHVuZGVmaW5lZFxuICAgIH1cbiAgICAqL1xufTtcblxuZnVuY3Rpb24gaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgVnVlLmRpcmVjdGl2ZSgncGxhY2UtYXV0b2ZpbGwnLCBQbGFjZUF1dG9maWxsKTtcbiAgVnVlLmNvbXBvbmVudCgncGxhY2UtYXV0b2NvbXBsZXRlLWZpZWxkJywgUGxhY2VBdXRvY29tcGxldGVGaWVsZCk7XG4gIFZ1ZS5jb21wb25lbnQoJ3BsYWNlLWF1dG9jb21wbGV0ZS1saXN0JywgUGxhY2VBdXRvY29tcGxldGVMaXN0KTtcbiAgVnVlLmNvbXBvbmVudCgncGxhY2UtYXV0b2NvbXBsZXRlLWxpc3QtaXRlbScsIFBsYWNlQXV0b2NvbXBsZXRlTGlzdEl0ZW0pO1xufVxuXG5pZiAod2luZG93ICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2UoaW5zdGFsbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbGw7XG5leHBvcnQgeyBQbGFjZUF1dG9maWxsLCBQbGFjZUF1dG9jb21wbGV0ZUZpZWxkLCBQbGFjZUF1dG9jb21wbGV0ZUxpc3QsIFBsYWNlQXV0b2NvbXBsZXRlTGlzdEl0ZW0gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZS1wbGFjZS1hdXRvY29tcGxldGUuZXMuanMubWFwXG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8cGxhY2UtYXV0b2NvbXBsZXRlLWZpZWxkXG4gICAgICAgIHYtbW9kZWw9XCJmb3JtLnN0cmVldFwiXG4gICAgICAgIGlkPVwic3RyZWV0XCJcbiAgICAgICAgbmFtZT1cInN0cmVldFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIlxuICAgICAgICBhcGkta2V5PVwiQUl6YVN5QWhTdjl6V3Zpc2lUWFJQUnc2SzhBRTBEQ21yUk1wUWNVXCJcbiAgICAgICAgOmVycm9ycz1cImVycm9yc1wiXG4gICAgICAgIDpsYWJlbD1cImAke3F1ZXN0aW9uLnF1ZXN0aW9ufSR7cXVlc3Rpb24ucmVxdWlyZWQgPyAnKicgOiAnJ31gXCJcbiAgICAgICAgOnJlcXVpcmVkPVwicXVlc3Rpb24ucmVxdWlyZWRcIlxuICAgICAgICB2LXBsYWNlLWF1dG9maWxsOnN0cmVldD1cImZvcm0uc3RyZWV0XCJcbiAgICAgICAgdi1wbGFjZS1hdXRvZmlsbDpjaXR5PVwiZm9ybS5jaXR5XCJcbiAgICAgICAgdi1wbGFjZS1hdXRvZmlsbDpzdGF0ZT1cImZvcm0uc3RhdGVcIlxuICAgICAgICB2LXBsYWNlLWF1dG9maWxsOnppcD1cImZvcm0uemlwXCJcbiAgICAgICAgQGlucHV0PVwidXBkYXRlZFwiXG4gICAgLz5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTdXJ2ZXlGaWVsZCBmcm9tICcuL1N1cnZleUZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9NaXhpbnMvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHsgUGxhY2VBdXRvZmlsbCwgUGxhY2VBdXRvY29tcGxldGVGaWVsZCB9IGZyb20gJ3Z1ZS1wbGFjZS1hdXRvY29tcGxldGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnc3RyZWV0LWZpZWxkJyxcblxuICAgIGV4dGVuZHM6IFN1cnZleUZpZWxkLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIEZvcm1Db250cm9sXG4gICAgXSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgUGxhY2VBdXRvY29tcGxldGVGaWVsZFxuICAgIH0sXG5cbiAgICBkaXJlY3RpdmVzOiB7XG4gICAgICAgIFBsYWNlQXV0b2ZpbGxcbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsImNvbnN0IFNUWUxFX0FUVFJJQlVURVMgPSBbXG4gICAgJ2ZvbnQnLFxuICAgICdmb250RmFtaWx5JyxcbiAgICAnZm9udEtlcm5pbmcnLFxuICAgICdmb250U2l6ZScsXG4gICAgJ2ZvbnRTdHJldGNoJyxcbiAgICAnZm9udFN0eWxlJyxcbiAgICAnZm9udFZhcmlhbnQnLFxuICAgICdmb250VmFyaWFudExpZ2F0dXJlcycsXG4gICAgJ2ZvbnRWYXJpYW50Q2FwcycsXG4gICAgJ2ZvbnRWYXJpYW50TnVtZXJpYycsXG4gICAgJ2ZvbnRWYXJpYW50RWFzdEFzaWFuJyxcbiAgICAnZm9udFdlaWdodCcsXG4gICAgJ2xpbmVIZWlnaHQnLFxuICAgICdsZXR0ZXJTcGFjaW5nJyxcbiAgICAncGFkZGluZycsXG4gICAgJ21hcmdpbicsXG4gICAgJ3RleHRBbGlnbicsXG4gICAgJ3RleHRBbGlnbkxhc3QnLFxuICAgICd0ZXh0RGVjb3JhdGlvbicsXG4gICAgJ3RleHREZWNvcmF0aW9uTGluZScsXG4gICAgJ3RleHREZWNvcmF0aW9uU3R5bGUnLFxuICAgICd0ZXh0RGVjb3JhdGlvbkNvbG9yJyxcbiAgICAndGV4dERlY29yYXRpb25Ta2lwSW5rJyxcbiAgICAndGV4dERlY29yYXRpb25Qb3NpdGlvbicsXG4gICAgJ3RleHRJbmRlbnQnLFxuICAgICd0ZXh0UmVuZGVyaW5nJyxcbiAgICAndGV4dFNoYWRvdycsXG4gICAgJ3RleHRTaXplQWRqdXN0JyxcbiAgICAndGV4dE92ZXJmbG93JyxcbiAgICAndGV4dFRyYW5zZm9ybScsXG4gICAgJ3dpZHRoJyxcbiAgICAnd29yZEJyZWFrJyxcbiAgICAnd29yZFNwYWNpbmcnLFxuICAgICd3b3JkV3JhcCdcbl07XG5cbmZ1bmN0aW9uIGludChzdHIpIHtcbiAgICBpZih0eXBlb2Ygc3RyID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBlbHNlIGlmKCFzdHIgfHwgIXN0ci5yZXBsYWNlKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZUludChzdHIucmVwbGFjZSgvW15cXGQuXSsvZywgJycpKTtcbn1cblxuZnVuY3Rpb24gaW5wdXQoZGl2LCBlbCkge1xuICAgIGRpdi5pbm5lckhUTUwgPSBlbC52YWx1ZS5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZywgJzxiciAvPicpO1xufVxuXG5mdW5jdGlvbiBoZWlnaHQoZWwpIHtcbiAgICByZXR1cm4gaW50KGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIHN0eWxlKGVsLCBhdHRyKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVthdHRyXTtcbn1cblxuZnVuY3Rpb24gcmVzaXplKHRhcmdldCwgZGl2LCBtaW5IZWlnaHQsIG1heEhlaWdodCkge1xuICAgIGNvbnN0IGR5bmFtaWNIZWlnaHQgPSBNYXRoLm1heChoZWlnaHQoZGl2KSArIGludChzdHlsZShkaXYsICdsaW5lSGVpZ2h0JykpLCBtaW5IZWlnaHQpO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAoKCFtYXhIZWlnaHQgfHwgZHluYW1pY0hlaWdodCA8IG1heEhlaWdodCkgPyBkeW5hbWljSGVpZ2h0IDogbWF4SGVpZ2h0KSArICdweCc7XG59XG5cbi8qXG5mdW5jdGlvbiBzZXRNaW5IZWlnaHQoZGl2LCBlbCkge1xuICAgIGRpdi5zdHlsZS5taW5IZWlnaHQgPSBoZWlnaHQoZWwpICsgJ3B4Jztcbn1cbiovXG5cbmZ1bmN0aW9uIG1pbWljKGVsKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgZm9yKGxldCBpIGluIFNUWUxFX0FUVFJJQlVURVMpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gU1RZTEVfQVRUUklCVVRFU1tpXTtcblxuICAgICAgICBkaXYuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xuICAgIH1cblxuICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZGl2LnN0eWxlLmJvdHRvbSA9ICcxMDAlJztcbiAgICBkaXYuc3R5bGUuekluZGV4ID0gLTE7XG4gICAgZGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGluaXQoZWwsIG1heEhlaWdodCkge1xuICAgIGNvbnN0IGRpdiA9IG1pbWljKGVsKTtcbiAgICBjb25zdCBtaW5IZWlnaHQgPSBoZWlnaHQoZWwpO1xuXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICAgIGlucHV0KGRpdiwgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgcmVzaXplKGVsLCBkaXYsIG1pbkhlaWdodCwgbWF4SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIGlucHV0KGRpdiwgZWwpO1xuICAgIHJlc2l6ZShlbCwgZGl2LCBtaW5IZWlnaHQsIG1heEhlaWdodCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIGluc2VydGVkKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgICAgICBpZihlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgIGVsID0gZWwucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFlbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHRleHRhcmVhIGlzIHJlcXVpcmVkIGZvciB0aGUgdi1hdXRvZ3JvdyBkaXJlY3RpdmUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpbml0KGVsLCBiaW5kaW5nLnZhbHVlKTtcbiAgICB9XG5cbn07XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8Zm9ybS1ncm91cD5cblxuICAgICAgICA8c2xvdCBuYW1lPVwibGFiZWxcIj5cbiAgICAgICAgICAgIDxmb3JtLWxhYmVsIHYtaWY9XCJsYWJlbCB8fCBoYXNEZWZhdWx0U2xvdFwiIDpmb3I9XCJpZFwiPlxuICAgICAgICAgICAgICAgIDxzbG90Pnt7bGFiZWx9fTwvc2xvdD5cbiAgICAgICAgICAgIDwvZm9ybS1sYWJlbD5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgOmlkPVwiaWRcIlxuICAgICAgICAgICAgICAgICAgICA6cm93cz1cInJvd3NcIlxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIDplcnJvcnM9XCJlcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgICA6cGF0dGVybj1cInBhdHRlcm5cIlxuICAgICAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgIDpyZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgOm1heGxlbmd0aD1cIm1heGxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWQgfHwgcmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMoY29udHJvbENsYXNzZXMsIGNvbG9yYWJsZUNsYXNzZXMpXCJcbiAgICAgICAgICAgICAgICAgICAgdi1iaW5kLWV2ZW50cz1cImJpbmRFdmVudHNcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgnaW5wdXQnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cInZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJ2YWxpZEZlZWRiYWNrXCIgdmFsaWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cImludmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cImludmFsaWRGZWVkYmFja1wiIGludmFsaWQgLz5cbiAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJoZWxwXCI+XG4gICAgICAgICAgICA8aGVscC10ZXh0IHYtaWY9XCJoZWxwVGV4dFwiIHYtaHRtbD1cImhlbHBUZXh0XCIgLz5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgPC9mb3JtLWdyb3VwPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEhlbHBUZXh0IGZyb20gJy4uL0hlbHBUZXh0JztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnLi4vRm9ybUdyb3VwJztcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnLi4vRm9ybUxhYmVsJztcbmltcG9ydCBGb3JtRmVlZGJhY2sgZnJvbSAnLi4vRm9ybUZlZWRiYWNrJztcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vTWl4aW5zL0NvbG9yYWJsZSc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnLi4vLi4vTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCBNZXJnZUNsYXNzZXMgZnJvbSAnLi4vLi4vTWl4aW5zL01lcmdlQ2xhc3Nlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICd0ZXh0YXJlYS1maWVsZCcsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEhlbHBUZXh0LFxuICAgICAgICBGb3JtR3JvdXAsXG4gICAgICAgIEZvcm1MYWJlbCxcbiAgICAgICAgRm9ybUZlZWRiYWNrXG4gICAgfSxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIEZvcm1Db250cm9sLFxuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAndGV4dCdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJvd3MgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHJvd3M6IFtOdW1iZXIsIFN0cmluZ11cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDx0ZXh0YXJlYS1maWVsZFxuICAgICAgICB2LWF1dG9ncm93XG4gICAgICAgIHYtbW9kZWw9XCJmb3JtW25hbWVdXCJcbiAgICAgICAgOmxhYmVsPVwiYCR7cXVlc3Rpb24ucXVlc3Rpb259JHtxdWVzdGlvbi5yZXF1aXJlZCA/ICcqJyA6ICcnfWBcIlxuICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICA6cmVxdWlyZWQ9XCJxdWVzdGlvbi5yZXF1aXJlZFwiXG4gICAgICAgIDppZD1cInF1ZXN0aW9uLmlkXCJcbiAgICAgICAgOmVycm9ycz1cImVycm9yc1wiXG4gICAgICAgIEBpbnB1dD1cInVwZGF0ZWRcIlxuICAgIC8+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3VydmV5RmllbGQgZnJvbSAnLi9TdXJ2ZXlGaWVsZCc7XG5pbXBvcnQgQXV0b2dyb3cgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvRGlyZWN0aXZlcy9BdXRvZ3Jvdyc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCBUZXh0YXJlYUZpZWxkIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvVGV4dGFyZWFGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICd0ZXh0YXJlYS1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBTdXJ2ZXlGaWVsZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFRleHRhcmVhRmllbGRcbiAgICB9LFxuXG4gICAgZGlyZWN0aXZlczoge1xuICAgICAgICBBdXRvZ3Jvd1xuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGlucHV0LWZpZWxkXG4gICAgICAgIHYtbW9kZWw9XCJmb3JtLnppcFwiXG4gICAgICAgIGlkPVwiemlwXCJcbiAgICAgICAgbmFtZT1cInppcFwiXG4gICAgICAgIDpsYWJlbD1cImAke3F1ZXN0aW9uLnF1ZXN0aW9ufSR7cXVlc3Rpb24ucmVxdWlyZWQgPyAnKicgOiAnJ31gXCJcbiAgICAgICAgOnJlcXVpcmVkPVwicXVlc3Rpb24ucmVxdWlyZWRcIlxuICAgICAgICA6ZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgbWF4bGVuZ3RoPVwiOVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWmlwIENvZGUgKDUgZGlnaXRzKVwiXG4gICAgICAgIHhfYXV0b2NvbXBsZXRldHlwZT1cInBvc3RhbC1jb2RlXCJcbiAgICAgICAgQGlucHV0PVwidXBkYXRlZFwiXG4gICAgLz5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTdXJ2ZXlGaWVsZCBmcm9tICcuL1N1cnZleUZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9NaXhpbnMvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9JbnB1dEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3ppcC1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBTdXJ2ZXlGaWVsZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIElucHV0RmllbGRcbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCAnLi9zY3NzL21haW4uc2Nzcyc7XG5pbXBvcnQgKiBhcyBGaWVsZHMgZnJvbSAnLi9Db21wb25lbnRzL0ZpZWxkcyc7XG5cbi8vIGltcG9ydCAnZXM2LW9iamVjdC1hc3NpZ24nO1xuLy8gaW1wb3J0ICdwcm9taXNlLXBvbHlmaWxsL3NyYy9wb2x5ZmlsbCc7XG4vLyBpbXBvcnQgR2l2ZXdvcmtzRm9ybSBmcm9tICdAL1BsdWdpbnMvR2l2ZXdvcmtzRm9ybSc7XG5cbi8qXG5pbXBvcnQge1xuICAgIElucHV0RmllbGQsXG4gICAgU2VsZWN0RmllbGRcbn0gZnJvbSAnLi9Db21wb25lbnRzL0ZpZWxkcyc7XG5cbmV4cG9ydCB7XG4gICAgSW5wdXRGaWVsZCxcbiAgICBTZWxlY3RGaWVsZFxufTtcbiovXG5cbmlmKHdpbmRvdyAmJiB3aW5kb3cuVnVlKSB7XG4gICAgZm9yKGxldCBpIGluIEZpZWxkcykge1xuICAgICAgICBpZihGaWVsZHNbaV0ubmFtZSkge1xuICAgICAgICAgICAgd2luZG93LlZ1ZS5jb21wb25lbnQoRmllbGRzW2ldLm5hbWUsIEZpZWxkc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEdpdmV3b3Jrc0Zvcm07XG4iXSwibmFtZXMiOlsia2V5IiwiY2FtZWxDYXNlIiwiZXh0ZW5kIiwiaXNOdWxsIiwiaXNBcnJheSIsImlzT2JqZWN0IiwiaXNOdW1iZXIiLCJpc051bWVyaWMiLCJlYWNoIiwibWF0Y2hlcyIsImlzU3RyaW5nIiwiZ2V0IiwicHJvcGVydHkiLCJpc0Z1bmN0aW9uIiwibWF0Y2hlc1Byb3BlcnR5IiwicHJlZGljYXRlIiwiaXNCb29sZWFuIiwiaXNVbmRlZmluZWQiLCJrZWJhYkNhc2UiLCJtYXBLZXlzIiwibmVnYXRlIiwicGlja0J5Iiwib21pdEJ5Iiwic2NyaXB0IiwicHJlZml4IiwiRm9ybUNvbnRyb2wiLCJGb3JtR3JvdXAiLCJDb2xvcmFibGUiLCJTY3JlZW5yZWFkZXJzIiwiSGVscFRleHQiLCJGb3JtTGFiZWwiLCJGb3JtRmVlZGJhY2siLCJNZXJnZUNsYXNzZXMiLCJ1bml0IiwiQmFzZVR5cGUiLCJBY3Rpdml0eUluZGljYXRvckRvdHMiLCJBY3Rpdml0eUluZGljYXRvclNwaW5uZXIiLCJBY3Rpdml0eUluZGljYXRvciIsIklucHV0RmllbGQiLCJ3aW5kb3ciLCJWdWUiLCJpIiwiRmllbGRzIiwibmFt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Q0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTs7O0lBM0VBLFlBQVk7SUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzRDQTs7SUFFQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7O0lBRUE7OztJQXZGQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ21CQTs7Ozs7OztLQUFBOzs7SUFwQkEsWUFBWTtJQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0JBOzs7Ozs7O0tBQUE7OztJQWpCQSxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNnRUE7O0lBRUE7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7O0lBRUE7O0lBRUE7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7O0lBRUE7O0lBRUE7OztJQXZLQSxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNERBOztJQUVBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTs7SUFFQTtJQUNBOzs7SUE3R0EsWUFBWTtJQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvQ0E7Ozs7Ozs7O0tBQUE7OztJQXJDQSxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3FDQTs7Ozs7Ozs7Ozs7Ozs7OztLQUFBOzs7SUF0Q0EsWUFBWTtJQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2VBOzs7Ozs7O0tBQUE7OztJQWhCQSxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7OztLQUFBOzs7SUFBQSxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0JBOzs7Ozs7O0tBQUE7OztJQWpCQSxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2lCQTs7Ozs7OztLQUFBOzs7SUFsQkEsWUFBWTtJQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0JBOzs7Ozs7O0tBQUE7OztJQWpCQSxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ21DQTs7Ozs7Ozs7S0FBQTs7O0lBcENBLFlBQVk7SUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM4Q0E7O0FBRUE7O0lBRUE7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFD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bUJBQW1CLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLDhEQUE4RCxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLDBCQUEw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Q0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtB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QUFHLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENB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
