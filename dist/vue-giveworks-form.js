
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35731/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
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

    const emptyClass = 'is-empty';
    const focusClass = 'has-focus';
    const changedClass = 'has-changed';
    const customPrefix = 'custom';

    function addClass(el, vnode, css) {
        el.classList.add(css);
        vnode.context.$el.classList.add(css);
    }

    function removeClass(el, vnode, css) {
        el.classList.remove(css);
        vnode.context.$el.classList.remove(css);
    }

    var FormControl = {

        inheritAttrs: false,

        mixins: [
            Colorable,
            MergeClasses
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
             * Is the form control a custom styled component.
             *
             * @property Boolean
             */
            custom: {
                type: Boolean,
                default: false
            },

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
                    // Add/remove the has-focus class from the form control
                    el.addEventListener('focus', event => {
                        addClass(el, vnode, focusClass);
                    });

                    el.addEventListener('blur', event => {
                        if(el.classList.contains(emptyClass)) {
                            removeClass(el, vnode, changedClass);
                        }

                        removeClass(el, vnode, focusClass);
                    });

                    el.addEventListener('input', e => {
                        addClass(el, vnode, changedClass);

                        if(el.value || (el.tagName === 'SELECT' && el.selectedIndex > -1)) {
                            removeClass(el, vnode, emptyClass);
                        }
                        else {
                            addClass(el, vnode, emptyClass);
                        }
                    });

                    // Bubble the native events up to the vue component.
                    each(vnode.context.bindEvents, name => {
                        el.addEventListener(name, event => {
                            vnode.context.$emit(name, event);
                        });
                    });
                },
                inserted(el, binding, vnode) {
                    if((el.tagName !== 'SELECT' && el.value === '') ||
                       (el.tagName === 'SELECT' && el.selectedIndex === -1)) {
                        addClass(el, vnode, emptyClass);
                    }
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
                return this.custom ? 'custom-control' : (
                    this.defaultControlClass + (this.plaintext ? '-plaintext' : '')
                );
            },

            controlSizeClass() {
                return prefix(this.size, this.controlClass);
            },

            formGroupClasses() {
                const string = this.custom ? customPrefix : '';
                const name = prefix(this.$options.name, string);
                const size = prefix(this.size, name);

                return this.mergeClasses(name, size, {
                    'is-invalid': !!this.invalidFeedback,
                    'has-activity': this.activity
                });
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
        { class: _vm.formGroupClasses },
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
              _vm._t("control", [
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
              ])
            ],
            2
          ),
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
          ]),
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
                _c(
                  "input",
                  _vm._b(
                    {
                      directives: [
                        { name: "bind-events", rawName: "v-bind-events" }
                      ],
                      attrs: { type: "radio" },
                      domProps: { value: _vm.value },
                      on: {
                        change: function($event) {
                          _vm.$emit("input", $event.target.value);
                        }
                      }
                    },
                    "input",
                    _vm.controlAttributes,
                    false
                  )
                ),
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
                    _c(
                      "input",
                      _vm._b(
                        {
                          directives: [
                            { name: "bind-events", rawName: "v-bind-events" }
                          ],
                          attrs: { type: "radio" },
                          domProps: { value: _vm.value },
                          on: {
                            change: function($event) {
                              _vm.$emit("input", $event.target.value);
                            }
                          }
                        },
                        "input",
                        _vm.controlAttributes,
                        false
                      )
                    ),
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
        { class: _vm.formGroupClasses },
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
              ])
            ],
            2
          ),
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

    var script$t = {
      name: 'select-field',
      extends: SelectField
    };

    /* script */
                const __vue_script__$t = script$t;
                
    /* template */

      /* style */
      const __vue_inject_styles__$t = undefined;
      /* scoped */
      const __vue_scope_id__$t = undefined;
      /* module identifier */
      const __vue_module_identifier__$t = undefined;
      /* functional template */
      const __vue_is_functional_template__$t = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var SelectField$1 = normalizeComponent(
        {},
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
    var __vue_render__$p = function() {
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
    var __vue_staticRenderFns__$p = [];
    __vue_render__$p._withStripped = true;

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
        { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
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
    //# sourceMappingURL=vue-place-autocomplete.es.js.map

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
    var __vue_render__$q = function() {
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
    var __vue_staticRenderFns__$q = [];
    __vue_render__$q._withStripped = true;

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
        { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
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
    var __vue_render__$r = function() {
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
    var __vue_staticRenderFns__$r = [];
    __vue_render__$r._withStripped = true;

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
        { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
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
    var __vue_render__$s = function() {
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
    var __vue_staticRenderFns__$s = [];
    __vue_render__$s._withStripped = true;

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
        { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
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
    var __vue_render__$t = function() {
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
    var __vue_staticRenderFns__$t = [];
    __vue_render__$t._withStripped = true;

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
        { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLWdpdmV3b3Jrcy1mb3JtLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvSGVscGVycy9GdW5jdGlvbnMvY2h1bmsuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvSGVscGVycy9GdW5jdGlvbnMvZXh0ZW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2lzTnVsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9pc0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2lzT2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2lzTnVtYmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2lzTnVtZXJpYy5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9rZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvSGVscGVycy9GdW5jdGlvbnMvZWFjaC5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9pc0Z1bmN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2lzQm9vbGVhbi5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9rZWJhYkNhc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvSGVscGVycy9GdW5jdGlvbnMvbWFwS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9IZWxwZXJzL1ByZWZpeC9QcmVmaXguanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0NvbG9yYWJsZS9Db2xvcmFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL01lcmdlQ2xhc3Nlcy9NZXJnZUNsYXNzZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sLmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL1N1cnZleUZpZWxkLnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtcnVudGltZS1oZWxwZXJzL25vcm1hbGl6ZS1jb21wb25lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL1NjcmVlbnJlYWRlcnMvU2NyZWVucmVhZGVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0hlbHBUZXh0L0hlbHBUZXh0LnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0Zvcm1Hcm91cC9Gb3JtR3JvdXAudnVlIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvRm9ybUxhYmVsL0Zvcm1MYWJlbC52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbC52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9Gb3JtRmVlZGJhY2svRm9ybUZlZWRiYWNrLnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9IZWxwZXJzL1VuaXQvVW5pdC5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0FjdGl2aXR5SW5kaWNhdG9yL1R5cGVzL0Jhc2VUeXBlLnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0FjdGl2aXR5SW5kaWNhdG9yL1R5cGVzL0RvdHMudnVlIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvQWN0aXZpdHlJbmRpY2F0b3IvVHlwZXMvU3Bpbm5lci52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9BY3Rpdml0eUluZGljYXRvci9BY3Rpdml0eUluZGljYXRvci52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9JbnB1dEZpZWxkL0lucHV0RmllbGQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL0FsdEVtYWlsRmllbGQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL0FsdFBob25lRmllbGQudnVlIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvUmFkaW9GaWVsZC9SYWRpb0ZpZWxkLnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0NoZWNrYm94RmllbGQvQ2hlY2tib3hGaWVsZC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9GaWVsZHMvQ2hlY2tib3hGaWVsZC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9GaWVsZHMvQ2l0eUZpZWxkLnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9NaXhpbnMvSGFzU2xvdHMvSGFzU2xvdHMuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL1NpemVhYmxlL1NpemVhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvSW5wdXRHcm91cC9JbnB1dEdyb3VwVGV4dC52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9JbnB1dEdyb3VwL0lucHV0R3JvdXBBcHBlbmQudnVlIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvSW5wdXRHcm91cC9JbnB1dEdyb3VwUHJlcGVuZC52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9JbnB1dEdyb3VwL0lucHV0R3JvdXAudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL0RvbGxhckFtb3VudEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpZWxkcy9GaXJzdEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpZWxkcy9JbnB1dEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpZWxkcy9MYXN0RmllbGQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL1ByaW1hcnlFbWFpbEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpZWxkcy9QcmltYXJ5UGhvbmVGaWVsZC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9GaWVsZHMvUmFkaW9GaWVsZC52dWUiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9TZWxlY3RGaWVsZC9TZWxlY3RGaWVsZC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9GaWVsZHMvU2VsZWN0RmllbGQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL1N0YXRlRmllbGQudnVlIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1wbGFjZS1hdXRvY29tcGxldGUvZGlzdC92dWUtcGxhY2UtYXV0b2NvbXBsZXRlLmVzLmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvRmllbGRzL1N0cmVldEZpZWxkLnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy92dWUtaW50ZXJmYWNlL3NyYy9EaXJlY3RpdmVzL0F1dG9ncm93L0F1dG9ncm93LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvVGV4dGFyZWFGaWVsZC9UZXh0YXJlYUZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpZWxkcy9UZXh0YXJlYUZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpZWxkcy9aaXBGaWVsZC52dWUiLCIuLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaHVuayhhcnIsIGNodW5rU2l6ZSwgY2FjaGUgPSBbXSkge1xuICAgIGNvbnN0IHRtcCA9IFsuLi5hcnJdO1xuICAgIHdoaWxlKHRtcC5sZW5ndGgpIGNhY2hlLnB1c2godG1wLnNwbGljZSgwLCBjaHVua1NpemUpKTtcbiAgICByZXR1cm4gY2FjaGU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmQoLi4uYXJncykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKC4uLmFyZ3MpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cbiIsImltcG9ydCBpc051bGwgZnJvbSAnLi9pc051bGwnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpICYmICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB8fCAoXG4gICAgICAgIHZhbHVlID8gdmFsdWUudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgOiBmYWxzZVxuICAgICk7XG59XG4iLCJpbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXknO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXNOdW1iZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc051bWVyaWModmFsdWUpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodmFsdWUpIHx8IChcbiAgICAgICAgISF2YWx1ZSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgISF2YWx1ZS50b1N0cmluZygpLm1hdGNoKC9eLT9bXFxkLixdKyQvKVxuICAgICk7XG59XG4iLCJpbXBvcnQgaXNOdW1lcmljIGZyb20gJy4vaXNOdW1lcmljJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ga2V5KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzTnVtZXJpYyh2YWx1ZSkgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlO1xufVxuIiwiaW1wb3J0IGtleSBmcm9tICcuL2tleSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVhY2goc3ViamVjdCwgZm4pIHtcbiAgICBmb3IoY29uc3QgaSBpbiBzdWJqZWN0KSB7XG4gICAgICAgIGZuKHN1YmplY3RbaV0sIGtleShpKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtlYmFiQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL18vZywgJy0nKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn1cbiIsImltcG9ydCBlYWNoIGZyb20gJy4vZWFjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcEtleXMob2JqZWN0LCBmbikge1xuICAgIGNvbnN0IG1hcHBlZCA9IHt9O1xuXG4gICAgZWFjaChvYmplY3QsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIG1hcHBlZFtmbih2YWx1ZSwga2V5KV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXBwZWQ7XG59XG4iLCJpbXBvcnQge1xuICAgIG1hcEtleXMsXG4gICAgaXNPYmplY3QsXG4gICAgaXNCb29sZWFuXG59IGZyb20gJy4uL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZWZpeChzdWJqZWN0LCBwcmVmaXgsIGRlbGltZXRlciA9ICctJykge1xuICAgIGNvbnN0IHByZWZpeGVyID0gKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gKGtleSB8fCB2YWx1ZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke3ByZWZpeH0ke2RlbGltZXRlcn0/YCksICcnKTtcblxuICAgICAgICByZXR1cm4gW3ByZWZpeCwgc3RyaW5nXS5maWx0ZXIodmFsdWUgPT4gISF2YWx1ZSkuam9pbihkZWxpbWV0ZXIpO1xuICAgIH07XG5cbiAgICBpZihpc0Jvb2xlYW4oc3ViamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIHN1YmplY3Q7XG4gICAgfVxuXG4gICAgaWYoaXNPYmplY3Qoc3ViamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIG1hcEtleXMoc3ViamVjdCwgcHJlZml4ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhlcihzdWJqZWN0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgY29sb3JhYmxlQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSB7fTtcblxuICAgICAgICAgICAgZm9yKGxldCBpIGluIHRoaXMuJGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgaWYoaS5tYXRjaCgvXmJnfHRleHR8Ym9yZGVyfGJnLWdyYWRpZW50LS8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXNbaV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcbiIsImltcG9ydCB7IGVhY2gsIGV4dGVuZCwgaXNBcnJheSwgaXNPYmplY3QgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBtZXJnZUNsYXNzZXMoKSB7XG4gICAgICAgICAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgICAgICAgICBlYWNoKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSwgYXJnID0+IHtcbiAgICAgICAgICAgICAgICBpZihpc09iamVjdChhcmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuZChjbGFzc2VzLCBhcmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQoYXJnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlc1thcmddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcbiIsImltcG9ydCBwcmVmaXggZnJvbSAnLi4vLi4vSGVscGVycy9QcmVmaXgnO1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9NaXhpbnMvQ29sb3JhYmxlJztcbmltcG9ydCBNZXJnZUNsYXNzZXMgZnJvbSAnLi4vLi4vTWl4aW5zL01lcmdlQ2xhc3Nlcyc7XG5pbXBvcnQgeyBlYWNoLCBpc0FycmF5LCBpc09iamVjdCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuY29uc3QgZW1wdHlDbGFzcyA9ICdpcy1lbXB0eSc7XG5jb25zdCBmb2N1c0NsYXNzID0gJ2hhcy1mb2N1cyc7XG5jb25zdCBjaGFuZ2VkQ2xhc3MgPSAnaGFzLWNoYW5nZWQnO1xuY29uc3QgY3VzdG9tUHJlZml4ID0gJ2N1c3RvbSc7XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsLCB2bm9kZSwgY3NzKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjc3MpO1xuICAgIHZub2RlLmNvbnRleHQuJGVsLmNsYXNzTGlzdC5hZGQoY3NzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIHZub2RlLCBjc3MpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNzcyk7XG4gICAgdm5vZGUuY29udGV4dC4kZWwuY2xhc3NMaXN0LnJlbW92ZShjc3MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIENvbG9yYWJsZSxcbiAgICAgICAgTWVyZ2VDbGFzc2VzXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgdHlwZSBhY3Rpdml0eSBpbmRpY2F0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0eToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBmb3JtIGNvbnRyb2wgYSBjdXN0b20gc3R5bGVkIGNvbXBvbmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGN1c3RvbToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhdXRvY29tcGxldGUgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICAvLyBhdXRvY29tcGxldGU6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGZpZWxkIGlkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgLy8gaWQ6IFtOdW1iZXIsIFN0cmluZ10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiBsYWJlbCBlbGVtZW50LiBJZiBubyB2YWx1ZSwgbm8gbGFiZWwgd2lsbCBhcHBlYXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsOiBbTnVtYmVyLCBTdHJpbmddLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZmllbGQgbmFtZSBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIC8vIG5hbWU6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGZpZWxkIGlkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgLy8gcGxhY2Vob2xkZXI6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIGZpZWxkIHJlcXVpcmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICAvLyByZXF1aXJlZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGZvcm0tZ3JvdXAgd3JhcHBlciB0byBpbnB1dFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBncm91cDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByZWdleCBwYXR0ZXJuIGZvciB2YWxpZGF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICAvLyBwYXR0ZXJuOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGlubGluZSBmaWVsZCB2YWxpZGF0aW9uIGVycm9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nfEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGVycm9yOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGlubGluZSBmaWVsZCB2YWxpZGF0aW9uIGVycm9ycyBwYXNzZWQgYXMgb2JqZWN0IHdpdGgga2V5L3ZhbHVlXG4gICAgICAgICAqIHBhaXJzLiBJZiBlcnJvcnMgcGFzc2VkIGFzIGFuIG9iamVjdCwgdGhlIGZvcm0gbmFtZSB3aWxsIGJlIHVzZWQgZm9yXG4gICAgICAgICAqIHRoZSBrZXkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3R8Qm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU29tZSBmZWVkYmFjayB0byBhZGQgdG8gdGhlIGZpZWxkIG9uY2UgdGhlIGZpZWxkIGlzIHN1Y2Nlc3NmdWxseVxuICAgICAgICAgKiB2YWxpZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZmVlZGJhY2s6IFtTdHJpbmcsIEFycmF5XSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb2YgZXZlbnQgbmFtZXMgdGhhdCBjb3JyZWxhdGUgd2l0aCBjYWxsYmFjayBmdW5jdGlvbnNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEZ1bmN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBiaW5kRXZlbnRzOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsnZm9jdXMnLCAnYmx1cicsICdjaGFuZ2UnLCAnY2xpY2snLCAna2V5dXAnLCAna2V5ZG93bicsICdwcm9ncmVzcycsICdwYXN0ZSddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVmYXVsdCBjbGFzcyBuYW1lIGFzc2lnbmVkIHRvIHRoZSBjb250cm9sIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZGVmYXVsdENvbnRyb2xDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2Zvcm0tY29udHJvbCdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGlkZSB0aGUgbGFiZWwgZm9yIGJyb3dzZXJzLCBidXQgbGVhdmUgaXQgZm9yIHNjcmVlbiByZWFkZXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBoaWRlTGFiZWw6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgbWFyZ2luL3BhZGRpbmcgY2xhc3NlcyBmb3IgZmluZSBjb250cm9sIG9mIHNwYWNpbmdcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgc3BhY2luZzogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgZm9ybSBjb250cm9sXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdtZCcsXG4gICAgICAgICAgICB2YWxpZGF0ZTogdmFsdWUgPT4gWydzbScsICdtZCcsICdsZyddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IHRoZSBmb3JtIGZpZWxkIGlubGluZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpbmxpbmU6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSBmb3JtIGNvbnRyb2wgaXMgcmVhZG9ubHksIGRpc3BsYXkgb25seSBhcyB0ZXh0P1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICAvLyBwbGFpbnRleHQ6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBmb3JtIGNvbnRyb2wgcmVhZG9ubHk/XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIC8vIHJlYWRvbmx5OiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgZm9ybSBjb250cm9sIGRpc2FibGVkP1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICAvLyBkaXNhYmxlZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogU29tZSBpbnN0cnVjdGlvbnMgdG8gYXBwZWFyIHVuZGVyIHRoZSBmaWVsZCBsYWJlbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBoZWxwVGV4dDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heGxlbmd0aCBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbWF4bGVuZ3RoOiBbTnVtYmVyLCBTdHJpbmddXG5cbiAgICB9LFxuXG4gICAgZGlyZWN0aXZlczoge1xuICAgICAgICBiaW5kRXZlbnRzOiB7XG4gICAgICAgICAgICBiaW5kKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgICAgICAgICAgICAgIC8vIEFkZC9yZW1vdmUgdGhlIGhhcy1mb2N1cyBjbGFzcyBmcm9tIHRoZSBmb3JtIGNvbnRyb2xcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3MoZWwsIHZub2RlLCBmb2N1c0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucyhlbXB0eUNsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZWwsIHZub2RlLCBjaGFuZ2VkQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZWwsIHZub2RlLCBmb2N1c0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKGVsLCB2bm9kZSwgY2hhbmdlZENsYXNzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZihlbC52YWx1ZSB8fCAoZWwudGFnTmFtZSA9PT0gJ1NFTEVDVCcgJiYgZWwuc2VsZWN0ZWRJbmRleCA+IC0xKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZWwsIHZub2RlLCBlbXB0eUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKGVsLCB2bm9kZSwgZW1wdHlDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIEJ1YmJsZSB0aGUgbmF0aXZlIGV2ZW50cyB1cCB0byB0aGUgdnVlIGNvbXBvbmVudC5cbiAgICAgICAgICAgICAgICBlYWNoKHZub2RlLmNvbnRleHQuYmluZEV2ZW50cywgbmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm5vZGUuY29udGV4dC4kZW1pdChuYW1lLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluc2VydGVkKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgICAgICAgICAgICAgIGlmKChlbC50YWdOYW1lICE9PSAnU0VMRUNUJyAmJiBlbC52YWx1ZSA9PT0gJycpIHx8XG4gICAgICAgICAgICAgICAgICAgKGVsLnRhZ05hbWUgPT09ICdTRUxFQ1QnICYmIGVsLnNlbGVjdGVkSW5kZXggPT09IC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhlbCwgdm5vZGUsIGVtcHR5Q2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgYmx1cigpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0SW5wdXRGaWVsZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbnB1dEZpZWxkKCkuYmx1cigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGZvY3VzKCkge1xuICAgICAgICAgICAgaWYodGhpcy5nZXRJbnB1dEZpZWxkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldElucHV0RmllbGQoKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldElucHV0RmllbGQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmZvcm0tY29udHJvbCwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnXG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEZpZWxkRXJyb3JzKCkge1xuICAgICAgICAgICAgbGV0IGVycm9ycyA9IHRoaXMuZXJyb3IgfHwgdGhpcy5lcnJvcnM7XG5cbiAgICAgICAgICAgIGlmKGlzT2JqZWN0KHRoaXMuZXJyb3JzKSkge1xuICAgICAgICAgICAgICAgIGVycm9ycyA9IHRoaXMuZXJyb3JzW3RoaXMubmFtZSB8fCB0aGlzLmlkXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICFlcnJvcnMgfHwgaXNBcnJheShlcnJvcnMpIHx8IGlzT2JqZWN0KGVycm9ycykgPyBlcnJvcnMgOiBbZXJyb3JzXTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgaWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kYXR0cnMuaWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRhdHRycy5uYW1lO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbnRyb2xBdHRyaWJ1dGVzKCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMubWVyZ2VDbGFzc2VzKFxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbENsYXNzZXMsIHRoaXMuY29sb3JhYmxlQ2xhc3Nlc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuJGF0dHJzKVxuICAgICAgICAgICAgICAgIC5jb25jYXQoW1snY2xhc3MnLCBjbGFzc2VzXV0pXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoY2FycnksIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihpc0FycmF5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ5W2tleVswXV0gPSBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJyeVtrZXldID0gdGhpc1trZXldIHx8IHRoaXMuJGF0dHJzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2Fycnk7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbnRyb2xDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbSA/ICdjdXN0b20tY29udHJvbCcgOiAoXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q29udHJvbENsYXNzICsgKHRoaXMucGxhaW50ZXh0ID8gJy1wbGFpbnRleHQnIDogJycpXG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbnRyb2xTaXplQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KHRoaXMuc2l6ZSwgdGhpcy5jb250cm9sQ2xhc3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZvcm1Hcm91cENsYXNzZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmN1c3RvbSA/IGN1c3RvbVByZWZpeCA6ICcnO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHByZWZpeCh0aGlzLiRvcHRpb25zLm5hbWUsIHN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gcHJlZml4KHRoaXMuc2l6ZSwgbmFtZSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lcmdlQ2xhc3NlcyhuYW1lLCBzaXplLCB7XG4gICAgICAgICAgICAgICAgJ2lzLWludmFsaWQnOiAhIXRoaXMuaW52YWxpZEZlZWRiYWNrLFxuICAgICAgICAgICAgICAgICdoYXMtYWN0aXZpdHknOiB0aGlzLmFjdGl2aXR5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb250cm9sQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgKHRoaXMuc3BhY2luZyB8fCAnJyksXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sQ2xhc3MsXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sU2l6ZUNsYXNzLFxuICAgICAgICAgICAgICAgICh0aGlzLmludmFsaWRGZWVkYmFjayA/ICdpcy1pbnZhbGlkJyA6ICcnKVxuICAgICAgICAgICAgXS5qb2luKCcgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFzRGVmYXVsdFNsb3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLiRzbG90cy5kZWZhdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGludmFsaWRGZWVkYmFjaygpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuZ2V0RmllbGRFcnJvcnMoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IgfHwgKFxuICAgICAgICAgICAgICAgIGlzQXJyYXkoZXJyb3JzKSA/IGVycm9ycy5qb2luKCc8YnI+JykgOiBlcnJvcnNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsaWRGZWVkYmFjaygpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuZmVlZGJhY2spID8gdGhpcy5mZWVkYmFjay5qb2luKCc8YnI+JykgOiB0aGlzLmZlZWRiYWNrO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn07XG4iLCI8c2NyaXB0PlxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL01peGlucy9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAndnVlLWludGVyZmFjZS9zcmMvSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgRm9ybUNvbnRyb2xcbiAgICBdLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIHBhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgcXVlc3Rpb246IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgZGlyZWN0aXZlczoge1xuXG4gICAgICAgIGNoYW5nZWQoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNoZWNrZWQgJiYgaXNGdW5jdGlvbihiaW5kaW5nLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLnZhbHVlKGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoY29tcGlsZWRUZW1wbGF0ZSwgaW5qZWN0U3R5bGUsIGRlZmF1bHRFeHBvcnQsIHNjb3BlSWQsIGlzRnVuY3Rpb25hbFRlbXBsYXRlLCBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLCBpc1NoYWRvd01vZGUsIGNyZWF0ZUluamVjdG9yLCBjcmVhdGVJbmplY3RvclNTUiwgY3JlYXRlSW5qZWN0b3JTaGFkb3cpIHtcbiAgICBpZiAodHlwZW9mIGlzU2hhZG93TW9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjcmVhdGVJbmplY3RvclNTUiA9IGNyZWF0ZUluamVjdG9yO1xuICAgICAgICBjcmVhdGVJbmplY3RvciA9IGlzU2hhZG93TW9kZTtcbiAgICAgICAgaXNTaGFkb3dNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgICBjb25zdCBvcHRpb25zID0gdHlwZW9mIGRlZmF1bHRFeHBvcnQgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0RXhwb3J0Lm9wdGlvbnMgOiBkZWZhdWx0RXhwb3J0O1xuICAgIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgICBpZiAoY29tcGlsZWRUZW1wbGF0ZSAmJiBjb21waWxlZFRlbXBsYXRlLnJlbmRlcikge1xuICAgICAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyO1xuICAgICAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICAgICAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWU7XG4gICAgICAgIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgICAgICAgaWYgKGlzRnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNjb3BlZElkXG4gICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWQ7XG4gICAgfVxuICAgIGxldCBob29rO1xuICAgIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIHNlcnZlciBidWlsZFxuICAgICAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgICAgICAgIGNvbnRleHQgPVxuICAgICAgICAgICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpOyAvLyBmdW5jdGlvbmFsXG4gICAgICAgICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgICAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfXztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICAgICAgICBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU1NSKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJlbmNlXG4gICAgICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAgICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICAgICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmplY3RTdHlsZSkge1xuICAgICAgICBob29rID0gaXNTaGFkb3dNb2RlXG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU2hhZG93KHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3IoY29udGV4dCkpO1xuICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGhvb2spIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgICAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGhvb2suY2FsbChjb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGU7XG4gICAgICAgICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdEV4cG9ydDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3VsZCBzaG93IG9ubHkgZm9yIHNjcmVlbnJlYWRlcnNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIHNyT25seTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIGJlIGZvY3VzYWJsZSBmb3Igc2NyZWVucmVhZGVyc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgc3JPbmx5Rm9jdXNhYmxlOiBCb29sZWFuXG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc2NyZWVucmVhZGVyQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ3NyLW9ubHknOiB0aGlzLnNyT25seSxcbiAgICAgICAgICAgICAgICAnc3Itb25seS1mb2N1c2FibGUnOiB0aGlzLnNyT25seUZvY3VzYWJsZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxufTtcbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dFwiIDpjbGFzcz1cImNsYXNzZXNcIj48c2xvdCAvPjwvc21hbGw+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUvQ29sb3JhYmxlJztcbmltcG9ydCBTY3JlZW5yZWFkZXJzIGZyb20gJy4uLy4uL01peGlucy9TY3JlZW5yZWFkZXJzL1NjcmVlbnJlYWRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnaGVscC10ZXh0JyxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIFNjcmVlbnJlYWRlcnNcbiAgICBdLFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBleHRlbmQoe30sIHRoaXMuc2NyZWVucmVhZGVyQ2xhc3NlcywgdGhpcy5jb2xvcmFibGVDbGFzc2VzKTtcbiAgICAgICAgfVxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPHNsb3QvPlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2Zvcm0tZ3JvdXAnXG5cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uZm9ybS1ncm91cCB7XG4gICAgJiwgLmZvcm0tZ3JvdXAtaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXJlbSwgLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW47XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxsYWJlbCA6Y2xhc3M9XCJjbGFzc2VzXCI+PHNsb3QvPjwvbGFiZWw+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUvQ29sb3JhYmxlJztcbmltcG9ydCBTY3JlZW5yZWFkZXJzIGZyb20gJy4uLy4uL01peGlucy9TY3JlZW5yZWFkZXJzL1NjcmVlbnJlYWRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnZm9ybS1sYWJlbCcsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBTY3JlZW5yZWFkZXJzXG4gICAgXSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLnNjcmVlbnJlYWRlckNsYXNzZXMsIHRoaXMuY29sb3JhYmxlQ2xhc3Nlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8Y29tcG9uZW50XG4gICAgICAgIHYtYmluZD1cIiRhdHRyc1wiXG4gICAgICAgIHYtbW9kZWw9XCJ0ZXN0VmFsdWVcIlxuICAgICAgICA6aXM9XCJlbGVtZW50XCJcbiAgICAgICAgOmFyaWEtbGFiZWw9XCJsYWJlbCB8fCBuYW1lIHx8IGlkXCJcbiAgICAgICAgOmFyaWEtZGVzY3JpYmVkYnk9XCJpZCB8fCBuYW1lXCJcbiAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cbiAgICAgICAgPHNsb3QvPlxuICAgIDwvY29tcG9uZW50PlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJy4uLy4uL01peGlucy9Gb3JtQ29udHJvbCc7XG4vLyBpbXBvcnQgeyBleHRlbmQsIG9taXRCeSwgaXNOdWxsLCBpc1VuZGVmaW5lZCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2Zvcm0tY29udHJvbCcsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH1cblxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiA6Y2xhc3M9XCJ7J2ludmFsaWQtZmVlZGJhY2snOiBpbnZhbGlkLCAndmFsaWQtZmVlZGJhY2snOiB2YWxpZCAmJiAhaW52YWxpZH1cIj5cbiAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9NaXhpbnMvQ29sb3JhYmxlL0NvbG9yYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdmb3JtLWZlZWRiYWNrJyxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGVcbiAgICBdLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZhbHVlIG9mIGxhYmVsIGVsZW1lbnQuIElmIG5vIHZhbHVlLCBubyBsYWJlbCB3aWxsIGFwcGVhci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWw6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIHRoZSBmZWVkYmFjayBtYXJrZWQgYXMgaW52YWxpZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpbnZhbGlkOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgdGhlIGZlZWRiYWNrIG1hcmtlZCBhcyBpbnZhbGlkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHZhbGlkOiBCb29sZWFuXG5cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGhlaWdodCkge1xuICAgIHJldHVybiBpc0Zpbml0ZShoZWlnaHQpID8gaGVpZ2h0ICsgJ3B4JyA6IGhlaWdodDtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYWN0aXZpdHktaW5kaWNhdG9yXCIgOmNsYXNzPVwiY2xhc3Nlc1wiPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiaSBpbiBub2Rlc1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGVzOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAzXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHByZWZpeDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2FjdGl2aXR5LWluZGljYXRvci0nXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY2xhc3NlczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0ge307XG5cbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy4kb3B0aW9ucy5uYW1lXSA9ICEhdGhpcy4kb3B0aW9ucy5uYW1lO1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLnByZWZpeCArIHRoaXMuc2l6ZS5yZXBsYWNlKHRoaXMucHJlZml4LCAnJyldID0gISF0aGlzLnNpemU7XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCI8c2NyaXB0PlxuaW1wb3J0IEJhc2VUeXBlIGZyb20gJy4vQmFzZVR5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMnLFxuXG4gICAgZXh0ZW5kczogQmFzZVR5cGVcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMuc2Nzcyc7XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbiRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemU6IC42cmVtO1xuXG4uYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuXG4gICAgJiA+IGRpdiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktOTAwO1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplO1xuICAgICAgICBhbmltYXRpb246IGFjdGl2aXR5LWluZGljYXRvci1kb3RzIDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgICB9XG5cbiAgICAmID4gZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAuMzM7XG4gICAgfVxuXG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3IteHMgPiBkaXYge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIC41O1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAuNTtcbiAgICB9XG5cbiAgICAmLmFjdGl2aXR5LWluZGljYXRvci1zbSA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplICogLjc1O1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAuNzU7XG4gICAgfVxuXG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3ItbWQgPiBkaXYge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIDE7XG4gICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIDE7XG4gICAgfVxuXG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3ItbGcgPiBkaXYge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIDEuNTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplICogMS41O1xuICAgIH1cblxuICAgICYuYWN0aXZpdHktaW5kaWNhdG9yLXhsID4gZGl2IHtcbiAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAyO1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAyO1xuICAgIH1cblxuICAgIEBmb3IgJGkgZnJvbSAwIHRocm91Z2ggMTIge1xuICAgICAgICAmID4gZGl2Om50aC1jaGlsZCgjeyRpICsgMX0pIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogJGkgKiAuMTZzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBhY3Rpdml0eS1pbmRpY2F0b3ItZG90cyB7XG4gICAgICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgfSA0MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAmOm5vdCguYnRuLXdhcm5pbmcpIC5hY3Rpdml0eS1pbmRpY2F0b3ItZG90cyA+IGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cbn1cblxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG5pbXBvcnQgQmFzZVR5cGUgZnJvbSAnLi9CYXNlVHlwZSc7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lcicsXG5cbiAgICBleHRlbmRzOiBCYXNlVHlwZSxcblxuICAgIHByb3BzOiBleHRlbmQoe30sIEJhc2VUeXBlLnByb3BzLCB7XG4gICAgICAgIG5vZGVzOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAxMlxuICAgICAgICB9XG4gICAgfSlcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMuc2Nzcyc7XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbiRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyLjI1O1xuJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXdpZHRoOiAxMCU7XG4kYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItaGVpZ2h0OiAzMCU7XG4kYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItZGVsYXk6IDFzO1xuXG5AbWl4aW4gc3Bpbm5lci1yb3RhdGUtc2VsZWN0b3JzKCRzdGFydDoxLCAkZW5kOjE2LCAkZGVsYXk6MS4ycykge1xuICAgIEBmb3IgJGkgZnJvbSAkc3RhcnQgdGhyb3VnaCAkZW5kIHtcbiAgICAgICAgJiA+IGRpdjpmaXJzdC1jaGlsZDpudGgtbGFzdC1jaGlsZCgjeyRpfSksXG4gICAgICAgICYgPiBkaXY6Zmlyc3QtY2hpbGQ6bnRoLWxhc3QtY2hpbGQoI3skaX0pIH4gZGl2IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHNwaW5uZXItcm90YXRlLXRyYW5zZm9ybSgkaSwgJGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHNwaW5uZXItcm90YXRlLXRyYW5zZm9ybSgkdG90YWwsICRkZWxheToxLjJzKSB7XG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkdG90YWwge1xuICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoI3szNjAgLyAkdG90YWwgKiAkaX1kZWcpO1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtI3skZGVsYXkgLSAoJGRlbGF5IC8gJHRvdGFsICogKCRpIC0gMSkpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplO1xuICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemU7XG5cbiAgICAmID4gZGl2ICB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTkwMDtcbiAgICAgICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItd2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1oZWlnaHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBhbmltYXRpb246IGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1kZWxheSBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3IteHMge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAuNTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIC41O1xuICAgIH1cbiAgICAmLmFjdGl2aXR5LWluZGljYXRvci1zbSB7XG4gICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIC43NTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIC43NTtcbiAgICB9XG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3ItbWQge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAxO1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplICogMTtcbiAgICB9XG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3ItbGcge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAxLjU7XG4gICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAxLjU7XG4gICAgfVxuICAgICYuYWN0aXZpdHktaW5kaWNhdG9yLXhsIHtcbiAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplICogMjtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIDI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgc3Bpbm5lci1yb3RhdGUtc2VsZWN0b3JzKDEsIDEyLCAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItZGVsYXkpO1xuXG4gICAgQGtleWZyYW1lcyBhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgIDAlLCAzOSUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgICAgIDQwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICB9XG59XG5cbi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIge1xuICAgICY6bm90KC5idG4td2FybmluZykgLmFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyID4gZGl2OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJjZW50ZXJcIiBjbGFzcz1cImNlbnRlci13cmFwcGVyXCIgOmNsYXNzPVwieydwb3NpdGlvbi1yZWxhdGl2ZSc6IHJlbGF0aXZlLCAncG9zaXRpb24tZml4ZWQnOiBmaXhlZH1cIiA6c3R5bGU9XCJzdHlsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWNvbnRlbnQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJjb21wb25lbnRcIiA6c2l6ZT1cInNpemVcIiA6cHJlZml4PVwicHJlZml4XCIvPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwibGFiZWxcIiB2LWh0bWw9XCJsYWJlbFwiIGNsYXNzPVwiYWN0aXZpdHktaW5kaWNhdG9yLWxhYmVsXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIDpzdHlsZT1cInN0eWxlXCI+XG4gICAgICAgIDxjb21wb25lbnQgOmlzPVwiY29tcG9uZW50XCIgOnNpemU9XCJzaXplXCIgOnByZWZpeD1cInByZWZpeFwiLz5cbiAgICAgICAgPGRpdiB2LWlmPVwibGFiZWxcIiB2LWh0bWw9XCJsYWJlbFwiIGNsYXNzPVwiYWN0aXZpdHktaW5kaWNhdG9yLWxhYmVsXCIvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB1bml0IGZyb20gJy4uLy4uL0hlbHBlcnMvVW5pdCc7XG5pbXBvcnQgQmFzZVR5cGUgZnJvbSAnLi9UeXBlcy9CYXNlVHlwZSc7XG5pbXBvcnQgQWN0aXZpdHlJbmRpY2F0b3JEb3RzIGZyb20gJy4vVHlwZXMvRG90cyc7XG5pbXBvcnQgeyBrZWJhYkNhc2UgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgQWN0aXZpdHlJbmRpY2F0b3JTcGlubmVyIGZyb20gJy4vVHlwZXMvU3Bpbm5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdhY3Rpdml0eS1pbmRpY2F0b3InLFxuXG4gICAgZXh0ZW5kczogQmFzZVR5cGUsXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIGNlbnRlcjogQm9vbGVhbixcblxuICAgICAgICBmaXhlZDogQm9vbGVhbixcblxuICAgICAgICBsYWJlbDogU3RyaW5nLFxuXG4gICAgICAgIHJlbGF0aXZlOiBCb29sZWFuLFxuXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdkb3RzJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGhlaWdodDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICBtYXhIZWlnaHQ6IFtTdHJpbmcsIE51bWJlcl0sXG5cbiAgICAgICAgbWluSGVpZ2h0OiBbU3RyaW5nLCBOdW1iZXJdLFxuXG4gICAgICAgIHdpZHRoOiBbU3RyaW5nLCBOdW1iZXJdLFxuXG4gICAgICAgIG1heFdpZHRoOiBbU3RyaW5nLCBOdW1iZXJdLFxuXG4gICAgICAgIG1pbldpZHRoOiBbU3RyaW5nLCBOdW1iZXJdXG5cbiAgICB9LFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBY3Rpdml0eUluZGljYXRvckRvdHMsXG4gICAgICAgIEFjdGl2aXR5SW5kaWNhdG9yU3Bpbm5lclxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIHN0eWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogdW5pdCh0aGlzLndpZHRoKSxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogdW5pdCh0aGlzLm1heFdpZHRoKSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogdW5pdCh0aGlzLm1pbldpZHRoKSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHVuaXQodGhpcy5oZWlnaHQpLFxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogdW5pdCh0aGlzLm1heEhlaWdodCksXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB1bml0KHRoaXMubWluSGVpZ2h0KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb25lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4ga2ViYWJDYXNlKHRoaXMucHJlZml4ICsgdGhpcy50eXBlLnJlcGxhY2UodGhpcy5wcmVmaXgsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxmb3JtLWdyb3VwIDpjbGFzcz1cImZvcm1Hcm91cENsYXNzZXNcIj5cblxuICAgICAgICA8c2xvdCBuYW1lPVwibGFiZWxcIj5cbiAgICAgICAgICAgIDxmb3JtLWxhYmVsIHJlZj1cImxhYmVsXCIgdi1pZj1cImxhYmVsIHx8IGhhc0RlZmF1bHRTbG90XCIgOmZvcj1cImlkXCIgdi1odG1sPVwibGFiZWxcIi8+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cC1pbm5lclwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdi1iaW5kLWV2ZW50c1xuICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJjb250cm9sQXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJhY3Rpdml0eVwiPlxuICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZS1mYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhY3Rpdml0eS1pbmRpY2F0b3Iga2V5PVwidGVzdFwiIHYtaWY9XCJhY3Rpdml0eVwiIHJlZj1cImFjdGl2aXR5XCIgdHlwZT1cImRvdHNcIiA6c2l6ZT1cInNpemVcIi8+XG4gICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiZmVlZGJhY2tcIj5cbiAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJ2YWxpZEZlZWRiYWNrXCIgcmVmPVwiZmVlZGJhY2tcIiB2LWh0bWw9XCJ2YWxpZEZlZWRiYWNrXCIgdmFsaWQgLz5cbiAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtZWxzZS1pZj1cImludmFsaWRGZWVkYmFja1wiIHJlZj1cImZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgcmVmPVwiaGVscFwiIHYtaHRtbD1cImhlbHBUZXh0XCIgLz5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgPC9mb3JtLWdyb3VwPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEhlbHBUZXh0IGZyb20gJy4uL0hlbHBUZXh0JztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnLi4vRm9ybUdyb3VwJztcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnLi4vRm9ybUxhYmVsJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICcuLi9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgRm9ybUZlZWRiYWNrIGZyb20gJy4uL0Zvcm1GZWVkYmFjayc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUnO1xuaW1wb3J0IEFjdGl2aXR5SW5kaWNhdG9yIGZyb20gJy4uL0FjdGl2aXR5SW5kaWNhdG9yJztcbmltcG9ydCBGb3JtQ29udHJvbE1peGluIGZyb20gJy4uLy4uL01peGlucy9Gb3JtQ29udHJvbCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdpbnB1dC1maWVsZCcsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBGb3JtQ29udHJvbE1peGluXG4gICAgXSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSGVscFRleHQsXG4gICAgICAgIEZvcm1Db250cm9sLFxuICAgICAgICBGb3JtR3JvdXAsXG4gICAgICAgIEZvcm1MYWJlbCxcbiAgICAgICAgRm9ybUZlZWRiYWNrLFxuICAgICAgICBBY3Rpdml0eUluZGljYXRvclxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5pbnB1dC1maWVsZCB7XG4gICAgLnNsaWRlLWZhZGUtZW50ZXIsXG4gICAgLnNsaWRlLWZhZGUtbGVhdmUtdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNSUsIC01MCUpO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8aW5wdXQtZmllbGRcbiAgICAgICAgdi1tb2RlbD1cImZvcm1bbmFtZV1cIlxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICA6aWQ9XCJxdWVzdGlvbi5pZFwiXG4gICAgICAgIDpsYWJlbD1cImAke3F1ZXN0aW9uLnF1ZXN0aW9ufSR7cXVlc3Rpb24ucmVxdWlyZWQgPyAnKicgOiAnJ31gXCJcbiAgICAgICAgOnJlcXVpcmVkPVwicXVlc3Rpb24ucmVxdWlyZWRcIlxuICAgICAgICA6ZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgQGlucHV0PVwidXBkYXRlZFwiXG4gICAgLz5cblxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3VydmV5RmllbGQgZnJvbSAnLi9TdXJ2ZXlGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvSW5wdXRGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdhbHQtZW1haWwtZmllbGQnLFxuXG4gICAgZXh0ZW5kczogU3VydmV5RmllbGQsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgRm9ybUNvbnRyb2xcbiAgICBdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBJbnB1dEZpZWxkXG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8aW5wdXQtZmllbGRcbiAgICAgICAgdi1tb2RlbD1cImZvcm1bbmFtZV1cIlxuICAgICAgICB0eXBlPVwicGhvbmVcIlxuICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICA6aWQ9XCJxdWVzdGlvbi5pZFwiXG4gICAgICAgIDpsYWJlbD1cImAke3F1ZXN0aW9uLnF1ZXN0aW9ufSR7cXVlc3Rpb24ucmVxdWlyZWQgPyAnKicgOiAnJ31gXCJcbiAgICAgICAgOnJlcXVpcmVkPVwicXVlc3Rpb24ucmVxdWlyZWRcIlxuICAgICAgICA6ZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgQGlucHV0PVwidXBkYXRlZFwiXG4gICAgLz5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTdXJ2ZXlGaWVsZCBmcm9tICcuL1N1cnZleUZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9NaXhpbnMvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9JbnB1dEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2FsdC1waG9uZS1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBTdXJ2ZXlGaWVsZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIElucHV0RmllbGRcbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNvbnRyb2xDbGFzcywgY3VzdG9tQ29udHJvbENsYXNzLCBzaXplYWJsZUNsYXNzLCBpbmxpbmUgPyBpbmxpbmVDbGFzcyA6ICcnKVwiPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY3VzdG9tICYmIGlkXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB2LWJpbmQtZXZlbnRzXG4gICAgICAgICAgICAgICAgdi1iaW5kPVwiY29udHJvbEF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCIkZW1pdCgnaW5wdXQnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJpZFwiIDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhsYWJlbENsYXNzLCBjb2xvcmFibGVDbGFzc2VzKVwiPlxuICAgICAgICAgICAgICAgIDxzbG90Pnt7bGFiZWx9fTwvc2xvdD5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cInZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJ2YWxpZEZlZWRiYWNrXCIgdmFsaWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cImludmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cImludmFsaWRGZWVkYmFja1wiIGludmFsaWQgLz5cbiAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJpZFwiIDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhsYWJlbENsYXNzLCBjb2xvcmFibGVDbGFzc2VzKVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQtZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImNvbnRyb2xBdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwidmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cInZhbGlkRmVlZGJhY2tcIiB2YWxpZCAvPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwiaW52YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgdi1odG1sPVwiaGVscFRleHRcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSGVscFRleHQgZnJvbSAnLi4vSGVscFRleHQnO1xuaW1wb3J0IEZvcm1GZWVkYmFjayBmcm9tICcuLi9Gb3JtRmVlZGJhY2snO1xuaW1wb3J0IHByZWZpeCBmcm9tICcuLi8uLi9IZWxwZXJzL1ByZWZpeCc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJy4uLy4uL01peGlucy9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgTWVyZ2VDbGFzc2VzIGZyb20gJy4uLy4uL01peGlucy9NZXJnZUNsYXNzZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAncmFkaW8tZmllbGQnLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBIZWxwVGV4dCxcbiAgICAgICAgRm9ybUZlZWRiYWNrXG4gICAgfSxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIEZvcm1Db250cm9sLFxuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdLFxuXG4gICAgbW9kZWw6IHtcbiAgICAgICAgZXZlbnQ6ICdjaGFuZ2UnLFxuICAgICAgICBwcm9wOiAnY2hlY2tlZFZhbHVlJ1xuICAgIH0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBldmVudCBuYW1lcyB0aGF0IGNvcnJlbGF0ZSB3aXRoIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgRnVuY3Rpb25cbiAgICAgICAgICovXG4gICAgICAgIGJpbmRFdmVudHM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWydmb2N1cycsICdibHVyJywgJ2lucHV0JywgJ2NsaWNrJywgJ2tleXVwJywgJ2tleWRvd24nLCAncHJvZ3Jlc3MnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSB0aGUgZm9ybSBmaWVsZCBhbmQgbGFiZWwgaW5saW5lXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBGdW5jdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgaW5saW5lOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2hlY2tlZCB2YWx1ZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgY2hlY2tlZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNoZWNrZWQgdmFsdWVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgY2hlY2tlZFZhbHVlOiBbQm9vbGVhbiwgTnVtYmVyLCBTdHJpbmcsIE9iamVjdF0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBuYW1lIGFzc2lnbmVkIHRvIHRoZSBjb250cm9sIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZGVmYXVsdENvbnRyb2xDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2Zvcm0tY2hlY2snXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGxhYmVsQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KCdsYWJlbCcsIHRoaXMuY29udHJvbENsYXNzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbnB1dENsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCgnaW5wdXQnLCB0aGlzLmNvbnRyb2xDbGFzcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5saW5lQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KCdpbmxpbmUnLCB0aGlzLmNvbnRyb2xDbGFzcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3VzdG9tQ29udHJvbENsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tID8gcHJlZml4KHRoaXMuJG9wdGlvbnMubmFtZS5yZXBsYWNlKCctZmllbGQnLCAnJyksICdjdXN0b20nKSA6ICcnO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNpemVhYmxlQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KHRoaXMuc2l6ZSwgJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNvbnRyb2xDbGFzcywgY3VzdG9tQ29udHJvbENsYXNzLCBzaXplYWJsZUNsYXNzLCBpbmxpbmUgPyBpbmxpbmVDbGFzcyA6ICcnKVwiPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY3VzdG9tICYmIGlkXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB2LWJpbmQtZXZlbnRzXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgOnJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkIHx8IHJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgICAgOnBhdHRlcm49XCJwYXR0ZXJuXCJcbiAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cImNoZWNrZWRWYWx1ZXMuaW5kZXhPZih2YWx1ZSkgIT09IC0xIHx8IGNoZWNrZWRcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhpbnB1dENsYXNzLCAoaW52YWxpZEZlZWRiYWNrID8gJ2lzLWludmFsaWQnIDogJycpKVwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cInVwZGF0ZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxuXG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImlkXCIgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGxhYmVsQ2xhc3MsIGNvbG9yYWJsZUNsYXNzZXMpXCI+XG4gICAgICAgICAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwidmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cInZhbGlkRmVlZGJhY2tcIiB2YWxpZCAvPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwiaW52YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJpZFwiIDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhsYWJlbENsYXNzLCBjb2xvcmFibGVDbGFzc2VzKVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQtZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICA6cmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkIHx8IHJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICA6cGF0dGVybj1cInBhdHRlcm5cIlxuICAgICAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cImNoZWNrZWRWYWx1ZXMuaW5kZXhPZih2YWx1ZSkgIT09IC0xIHx8IGNoZWNrZWRcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMoaW5wdXRDbGFzcywgKGludmFsaWRGZWVkYmFjayA/ICdpcy1pbnZhbGlkJyA6ICcnKSlcIlxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwidXBkYXRlKCRldmVudC50YXJnZXQudmFsdWUpXCI+XG5cbiAgICAgICAgICAgICAgICA8c2xvdD57e2xhYmVsfX08L3Nsb3Q+XG5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cInZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJ2YWxpZEZlZWRiYWNrXCIgdmFsaWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cImludmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cImludmFsaWRGZWVkYmFja1wiIGludmFsaWQgLz5cbiAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJoZWxwXCI+XG4gICAgICAgICAgICA8aGVscC10ZXh0IHYtaWY9XCJoZWxwVGV4dFwiIHYtaHRtbD1cImhlbHBUZXh0XCIgLz5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBSYWRpb0ZpZWxkIGZyb20gJy4uL1JhZGlvRmllbGQnO1xuaW1wb3J0IE1lcmdlQ2xhc3NlcyBmcm9tICcuLi8uLi9NaXhpbnMvTWVyZ2VDbGFzc2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2NoZWNrYm94LWZpZWxkJyxcblxuICAgIGV4dGVuZHM6IFJhZGlvRmllbGQsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgTWVyZ2VDbGFzc2VzXG4gICAgXSxcblxuICAgIG1vZGVsOiB7XG4gICAgICAgIGV2ZW50OiAnY2hhbmdlJyxcbiAgICAgICAgcHJvcDogJ2NoZWNrZWRWYWx1ZXMnXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjaGVja2VkIHZhbHVlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBjaGVja2VkVmFsdWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIHVwZGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuY2hlY2tlZFZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja2VkVmFsdWVzLmluZGV4T2YodmFsdWUpO1xuXG4gICAgICAgICAgICBpZihpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBjaGVja2VkKTtcbiAgICAgICAgfVxuXG4gICAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJ7J2lzLWludmFsaWQnOiAhIWludmFsaWRGZWVkYmFja31cIj5cblxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICB7e3F1ZXN0aW9uLnF1ZXN0aW9ufX1cbiAgICAgICAgICAgIDxzdXAgdi1pZj1cInF1ZXN0aW9uLnJlcXVpcmVkXCI+Kjwvc3VwPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxjaGVja2JveC1maWVsZFxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1bbmFtZV1cIlxuICAgICAgICAgICAgdi1mb3I9XCIoYW5zd2VyLCBrZXkpIGluIHF1ZXN0aW9uLmFuc3dlcnNcIlxuICAgICAgICAgICAgOmtleT1cImtleVwiXG4gICAgICAgICAgICA6bGFiZWw9XCJhbnN3ZXJcIlxuICAgICAgICAgICAgOnZhbHVlPVwiYW5zd2VyXCJcbiAgICAgICAgICAgIDpjaGVja2VkVmFsdWVzPVwidmFsdWUgfHwgW11cIlxuICAgICAgICAgICAgOm5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIDppZD1cImAke25hbWV9XyR7a2V5fWBcIlxuICAgICAgICAgICAgQGNoYW5nZT1cInVwZGF0ZWRcIi8+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJxdWVzdGlvbi5hY2NlcHRfb3RoZXJcIj5cbiAgICAgICAgICAgIDxjaGVja2JveC1maWVsZCB2LW1vZGVsPVwiZm9ybVtuYW1lXVwiIHYtY2hhbmdlZCBsYWJlbD1cIk90aGVyOlwiIHZhbHVlPVwib3RoZXJcIiA6bmFtZT1cIm5hbWVcIiA6aWQ9XCJgJHtuYW1lfV81MGBcIiA6Y2hlY2tlZFZhbHVlcz1cInZhbHVlIHx8IFtdXCIgQGNoYW5nZT1cInVwZGF0ZWRcIi8+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm1bYCR7bmFtZX1fb3RoZXJgXVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7J2lzLWludmFsaWQnOiBlcnJvcnNbbmFtZV19XCIgOm5hbWU9XCJgJHtuYW1lfV9vdGhlcmBcIiA6aWQ9XCJgJHtuYW1lfV9vdGhlcmBcIiBAaW5wdXQ9XCJ1cGRhdGVkKCRldmVudC50YXJnZXQudmFsdWUpXCI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImZlZWRiYWNrXCI+XG4gICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwidmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cInZhbGlkRmVlZGJhY2tcIiB2YWxpZCAvPlxuICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cImludmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cImludmFsaWRGZWVkYmFja1wiIGludmFsaWQgLz5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3VydmV5RmllbGQgZnJvbSAnLi9TdXJ2ZXlGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCBGb3JtRmVlZGJhY2sgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9Gb3JtRmVlZGJhY2snO1xuaW1wb3J0IENoZWNrYm94RmllbGQgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9DaGVja2JveEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2NoZWNrYm94LWZpZWxkJyxcblxuICAgIGV4dGVuZHM6IFN1cnZleUZpZWxkLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIEZvcm1Db250cm9sXG4gICAgXSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRm9ybUZlZWRiYWNrLFxuICAgICAgICBDaGVja2JveEZpZWxkXG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8aW5wdXQtZmllbGRcbiAgICAgICAgdi1tb2RlbD1cImZvcm0uY2l0eVwiXG4gICAgICAgIGlkPVwiY2l0eVwiXG4gICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDaXR5XCJcbiAgICAgICAgOmxhYmVsPVwiYCR7cXVlc3Rpb24ucXVlc3Rpb259JHtxdWVzdGlvbi5yZXF1aXJlZCA/ICcqJyA6ICcnfWBcIlxuICAgICAgICA6cmVxdWlyZWQ9XCJxdWVzdGlvbi5yZXF1aXJlZFwiXG4gICAgICAgIDplcnJvcnM9XCJlcnJvcnNcIlxuICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVkXCJcbiAgICAvPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFN1cnZleUZpZWxkIGZyb20gJy4vU3VydmV5RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL01peGlucy9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0lucHV0RmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnY2l0eS1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBTdXJ2ZXlGaWVsZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIElucHV0RmllbGRcbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsImV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBnZXRTbG90KHNsb3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzbG90c1tzbG90XTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYXNTbG90KHNsb3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhIXRoaXMuJHNsb3RzW3Nsb3RdO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc1Nsb3RzKHNsb3RzKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgaW4gc2xvdHMpIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5oYXNTbG90KHNsb3RzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBoYXNEZWZhdWx0U2xvdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhc1Nsb3QoJ2RlZmF1bHQnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59O1xuIiwiaW1wb3J0IHByZWZpeCBmcm9tICcuLi8uLi9IZWxwZXJzL1ByZWZpeC9QcmVmaXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgZm9ybSBjb250cm9sXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdtZCcsXG4gICAgICAgICAgICB2YWxpZGF0ZTogdmFsdWUgPT4gWydzbScsICdtZCcsICdsZyddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBzaXplYWJsZUNsYXNzUHJlZml4KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG9wdGlvbnMubmFtZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzaXplYWJsZUNsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCh0aGlzLnNpemUsIHRoaXMuc2l6ZWFibGVDbGFzc1ByZWZpeCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIDppZD1cImlkXCI+XG4gICAgICAgIDxzbG90Pnt7IHRleHQgfX08L3Nsb3Q+XG4gICAgPC9zcGFuPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2lucHV0LWdyb3VwLXRleHQnLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGlkIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpZDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGV4dDogW0FycmF5LCBOdW1iZXIsIFN0cmluZ11cblxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICA8aW5wdXQtZ3JvdXAtdGV4dCB2LWlmPVwidGV4dFwiPlxuICAgICAgICAgICAgPHNsb3QvPlxuICAgICAgICA8L2lucHV0LWdyb3VwLXRleHQ+XG4gICAgICAgIDxzbG90IHYtZWxzZS8+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnaW5wdXQtZ3JvdXAtYXBwZW5kJyxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0OiBCb29sZWFuXG5cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgIDxpbnB1dC1ncm91cC10ZXh0IHYtaWY9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8c2xvdC8+XG4gICAgICAgIDwvaW5wdXQtZ3JvdXAtdGV4dD5cbiAgICAgICAgPHNsb3Qgdi1lbHNlLz5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdpbnB1dC1ncm91cC1wcmVwZW5kJyxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0OiBCb29sZWFuXG5cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiIDpjbGFzcz1cIm1lcmdlQ2xhc3Nlcyhjb2xvcmFibGVDbGFzc2VzLCBzaXplYWJsZUNsYXNzKVwiPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJwcmVwZW5kXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInByZXBlbmQgaW5zdGFuY2VvZiBBcnJheVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dC1ncm91cC1wcmVwZW5kPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQtZ3JvdXAtdGV4dCB2LWZvcj1cInZhbHVlIGluIHByZXBlbmRcIiA6a2V5PVwidmFsdWVcIiA6dGV4dD1cInZhbHVlXCIvPlxuICAgICAgICAgICAgICAgIDwvaW5wdXQtZ3JvdXAtcHJlcGVuZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwicHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dC1ncm91cC1wcmVwZW5kIHRleHQ+e3twcmVwZW5kfX08L2lucHV0LWdyb3VwLXByZXBlbmQ+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QvPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJhcHBlbmRcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiYXBwZW5kIGluc3RhbmNlb2YgQXJyYXlcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQtZ3JvdXAtYXBwZW5kPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQtZ3JvdXAtdGV4dCB2LWZvcj1cInZhbHVlIGluIGFwcGVuZFwiIDprZXk9XCJ2YWx1ZVwiIDp0ZXh0PVwidmFsdWVcIi8+XG4gICAgICAgICAgICAgICAgPC9pbnB1dC1ncm91cC1hcHBlbmQ+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImFwcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dC1ncm91cC1hcHBlbmQgdGV4dD57e2FwcGVuZH19PC9pbnB1dC1ncm91cC1hcHBlbmQ+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSGFzU2xvdHMgZnJvbSAnLi4vLi4vTWl4aW5zL0hhc1Nsb3RzJztcbmltcG9ydCBTaXplYWJsZSBmcm9tICcuLi8uLi9NaXhpbnMvU2l6ZWFibGUnO1xuaW1wb3J0IElucHV0R3JvdXBUZXh0IGZyb20gJy4vSW5wdXRHcm91cFRleHQnO1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9NaXhpbnMvQ29sb3JhYmxlJztcbmltcG9ydCBJbnB1dEdyb3VwQXBwZW5kIGZyb20gJy4vSW5wdXRHcm91cEFwcGVuZCc7XG5pbXBvcnQgSW5wdXRHcm91cFByZXBlbmQgZnJvbSAnLi9JbnB1dEdyb3VwUHJlcGVuZCc7XG5pbXBvcnQgTWVyZ2VDbGFzc2VzIGZyb20gJy4uLy4uL01peGlucy9NZXJnZUNsYXNzZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnaW5wdXQtZ3JvdXAnLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBJbnB1dEdyb3VwVGV4dCxcbiAgICAgICAgSW5wdXRHcm91cEFwcGVuZCxcbiAgICAgICAgSW5wdXRHcm91cFByZXBlbmRcbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIEhhc1Nsb3RzLFxuICAgICAgICBTaXplYWJsZSxcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICBhcHBlbmQ6IFtBcnJheSwgTnVtYmVyLCBTdHJpbmddLFxuXG4gICAgICAgIHByZXBlbmQ6IFtBcnJheSwgTnVtYmVyLCBTdHJpbmddXG5cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cbiAgICAgICAgPGZpZWxkc2V0PlxuXG4gICAgICAgICAgICA8bGVnZW5kPlNlbGVjdCBhbiBhbW91bnQ8L2xlZ2VuZD5cblxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cImNodW5rIGluIGFtb3VudHNcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJhbW91bnQgaW4gY2h1bmtcIiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxyYWRpby1maWVsZCB2LW1vZGVsPVwiZm9ybS5kb25hdGlvblwiIG5hbWU9XCJkb25hdGlvblwiIDpsYWJlbD1cImFtb3VudFwiIDp2YWx1ZT1cImFtb3VudFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwicXVlc3Rpb24uaWRcIiB2LWh0bWw9XCJxdWVzdGlvbi5xdWVzdGlvblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0LWdyb3VwIHByZXBlbmQ9XCIkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaXMtaW52YWxpZCc6ICEhaW52YWxpZEZlZWRiYWNrfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlcXVpcmVkPVwicXVlc3Rpb24ucmVxdWlyZWRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2ZpZWxkc2V0PlxuXG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3VydmV5RmllbGQgZnJvbSAnLi9TdXJ2ZXlGaWVsZCc7XG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0lucHV0R3JvdXAnO1xuaW1wb3J0IFJhZGlvRmllbGQgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9SYWRpb0ZpZWxkJztcbmltcG9ydCB7IGNodW5rIH0gZnJvbSAndnVlLWludGVyZmFjZS9zcmMvSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnZG9sbGFyLWFtb3VudC1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBTdXJ2ZXlGaWVsZCxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSW5wdXRHcm91cCxcbiAgICAgICAgUmFkaW9GaWVsZFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGFtb3VudHMoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnF1ZXN0aW9uLmFuc3dlcnNcbiAgICAgICAgICAgICAgICA/IHRoaXMucXVlc3Rpb24uYW5zd2Vycy5zcGxpdCgnfCcpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnBhZ2Uuc2l0ZS5jb25maWcuZ2l2ZXdvcmtzLmFza19hbW91bnRzO1xuXG4gICAgICAgICAgICByZXR1cm4gY2h1bmsodmFsdWVzLmZpbHRlcih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID49IChwYXJzZUZsb2F0KHRoaXMucGFnZS5vcHRpb25zLm1pbl9hbW91bnQpIHx8IDApO1xuICAgICAgICAgICAgfSksIDIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxpbnB1dC1maWVsZFxuICAgICAgICB2LW1vZGVsPVwiZm9ybS5maXJzdFwiXG4gICAgICAgIGlkPVwiZmlyc3RcIlxuICAgICAgICBuYW1lPVwiZmlyc3RcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxuICAgICAgICA6bGFiZWw9XCJgJHtxdWVzdGlvbi5xdWVzdGlvbn0ke3F1ZXN0aW9uLnJlcXVpcmVkID8gJyonIDogJyd9YFwiXG4gICAgICAgIDpyZXF1aXJlZD1cInF1ZXN0aW9uLnJlcXVpcmVkXCJcbiAgICAgICAgOmVycm9ycz1cImVycm9yc1wiXG4gICAgICAgIEBpbnB1dD1cInVwZGF0ZWRcIi8+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3VydmV5RmllbGQgZnJvbSAnLi9TdXJ2ZXlGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvSW5wdXRGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdmaXJzdC1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBTdXJ2ZXlGaWVsZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIElucHV0RmllbGRcbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjxzY3JpcHQ+XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0lucHV0RmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnaW5wdXQtZmllbGQnLFxuXG4gICAgZXh0ZW5kczogSW5wdXRGaWVsZFxuXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8aW5wdXQtZmllbGRcbiAgICAgICAgdi1tb2RlbD1cImZvcm0ubGFzdFwiXG4gICAgICAgIGlkPVwibGFzdFwiXG4gICAgICAgIG5hbWU9XCJsYXN0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICA6bGFiZWw9XCJgJHtxdWVzdGlvbi5xdWVzdGlvbn0ke3F1ZXN0aW9uLnJlcXVpcmVkID8gJyonIDogJyd9YFwiXG4gICAgICAgIDpyZXF1aXJlZD1cInF1ZXN0aW9uLnJlcXVpcmVkXCJcbiAgICAgICAgOmVycm9ycz1cImVycm9yc1wiXG4gICAgICAgIEBpbnB1dD1cInVwZGF0ZWRcIlxuICAgIC8+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3VydmV5RmllbGQgZnJvbSAnLi9TdXJ2ZXlGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvSW5wdXRGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdsYXN0LWZpZWxkJyxcblxuICAgIGV4dGVuZHM6IFN1cnZleUZpZWxkLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIEZvcm1Db250cm9sXG4gICAgXSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSW5wdXRGaWVsZFxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGlucHV0LWZpZWxkXG4gICAgICAgIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgIDpsYWJlbD1cImAke3F1ZXN0aW9uLnF1ZXN0aW9ufSR7cXVlc3Rpb24ucmVxdWlyZWQgPyAnKicgOiAnJ31gXCJcbiAgICAgICAgOnJlcXVpcmVkPVwicXVlc3Rpb24ucmVxdWlyZWRcIlxuICAgICAgICA6ZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgQGlucHV0PVwidXBkYXRlZFwiXG4gICAgLz5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTdXJ2ZXlGaWVsZCBmcm9tICcuL1N1cnZleUZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9NaXhpbnMvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9JbnB1dEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3ByaW1hcnktZW1haWwtZmllbGQnLFxuXG4gICAgZXh0ZW5kczogU3VydmV5RmllbGQsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgRm9ybUNvbnRyb2xcbiAgICBdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBJbnB1dEZpZWxkXG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8aW5wdXQtZmllbGRcbiAgICAgICAgdi1tb2RlbD1cImZvcm0ucGhvbmVcIlxuICAgICAgICB0eXBlPVwicGhvbmVcIlxuICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICBpZD1cInBob25lXCJcbiAgICAgICAgOmxhYmVsPVwiYCR7cXVlc3Rpb24ucXVlc3Rpb259JHtxdWVzdGlvbi5yZXF1aXJlZCA/ICcqJyA6ICcnfWBcIlxuICAgICAgICA6cmVxdWlyZWQ9XCJxdWVzdGlvbi5yZXF1aXJlZFwiXG4gICAgICAgIDplcnJvcnM9XCJlcnJvcnNcIlxuICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVkXCJcbiAgICAvPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFN1cnZleUZpZWxkIGZyb20gJy4vU3VydmV5RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL01peGlucy9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL0lucHV0RmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAncHJpbWFyeS1waG9uZS1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBTdXJ2ZXlGaWVsZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIElucHV0RmllbGRcbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxmb3JtLWdyb3VwIDpjbGFzcz1cInsnaXMtaW52YWxpZCc6ICEhaW52YWxpZEZlZWRiYWNrfVwiPlxuXG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIHt7cXVlc3Rpb24ucXVlc3Rpb259fSA8c3VwIHYtaWY9XCJxdWVzdGlvbi5yZXF1aXJlZFwiPio8L3N1cD5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8cmFkaW8tZmllbGRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtW25hbWVdXCJcbiAgICAgICAgICAgIHYtZm9yPVwiKGFuc3dlciwga2V5KSBpbiBxdWVzdGlvbi5hbnN3ZXJzXCJcbiAgICAgICAgICAgIDprZXk9XCJrZXlcIlxuICAgICAgICAgICAgOmxhYmVsPVwiYW5zd2VyXCJcbiAgICAgICAgICAgIDp2YWx1ZT1cImFuc3dlclwiXG4gICAgICAgICAgICA6Y2hlY2tlZFZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgOm5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIDppZD1cImAke25hbWV9XyR7a2V5fWBcIlxuICAgICAgICAgICAgQGNoYW5nZT1cInVwZGF0ZWRcIi8+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJxdWVzdGlvbi5hY2NlcHRfb3RoZXJcIj5cbiAgICAgICAgICAgIDxyYWRpby1maWVsZCB2LW1vZGVsPVwiZm9ybVtuYW1lXVwiIHYtY2hhbmdlZCB2YWx1ZT1cIm90aGVyXCIgbGFiZWw9XCJPdGhlcjpcIiA6bmFtZT1cIm5hbWVcIiA6aWQ9XCJgJHtuYW1lfV81MGBcIiA6Y2hlY2tlZFZhbHVlPVwidmFsdWVcIiBAY2hhbmdlPVwidXBkYXRlZFwiLz5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybVtgJHtuYW1lfV9vdGhlcmBdXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpjbGFzcz1cInsnaXMtaW52YWxpZCc6IGVycm9yc1tuYW1lXX1cIiA6bmFtZT1cImAke25hbWV9X290aGVyYFwiIDppZD1cImAke25hbWV9X290aGVyYFwiIEBpbnB1dD1cInVwZGF0ZWQoJGV2ZW50LnRhcmdldC52YWx1ZSk7XCIvPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJmZWVkYmFja1wiPlxuICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cInZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJ2YWxpZEZlZWRiYWNrXCIgdmFsaWQgLz5cbiAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJpbnZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJpbnZhbGlkRmVlZGJhY2tcIiBpbnZhbGlkIC8+XG4gICAgICAgIDwvc2xvdD5cblxuICAgIDwvZm9ybS1ncm91cD5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTdXJ2ZXlGaWVsZCBmcm9tICcuL1N1cnZleUZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9NaXhpbnMvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IFJhZGlvRmllbGQgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9SYWRpb0ZpZWxkJztcbmltcG9ydCBGb3JtRmVlZGJhY2sgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9Gb3JtRmVlZGJhY2snO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAncmFkaW8tZmllbGQnLFxuXG4gICAgZXh0ZW5kczogU3VydmV5RmllbGQsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgRm9ybUNvbnRyb2xcbiAgICBdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBSYWRpb0ZpZWxkLFxuICAgICAgICBGb3JtRmVlZGJhY2tcbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxmb3JtLWdyb3VwIDpjbGFzcz1cImZvcm1Hcm91cENsYXNzZXNcIj5cblxuICAgICAgICA8c2xvdCBuYW1lPVwibGFiZWxcIj5cbiAgICAgICAgICAgIDxmb3JtLWxhYmVsIHYtaWY9XCJsYWJlbFwiIDpmb3I9XCJpZFwiIHYtaHRtbD1cImxhYmVsXCIvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAtaW5uZXJcIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQtZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImNvbnRyb2xBdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgnaW5wdXQnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdC8+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJhY3Rpdml0eVwiPlxuICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZS1mYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhY3Rpdml0eS1pbmRpY2F0b3Iga2V5PVwidGVzdFwiIHYtaWY9XCJhY3Rpdml0eVwiIHJlZj1cImFjdGl2aXR5XCIgdHlwZT1cImRvdHNcIiA6c2l6ZT1cInNpemVcIi8+XG4gICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiZmVlZGJhY2tcIj5cbiAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJ2YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwidmFsaWRGZWVkYmFja1wiIHZhbGlkIC8+XG4gICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwiaW52YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgdi1odG1sPVwiaGVscFRleHRcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICA8L2Zvcm0tZ3JvdXA+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSGVscFRleHQgZnJvbSAnLi4vSGVscFRleHQnO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICcuLi9Gb3JtR3JvdXAnO1xuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICcuLi9Gb3JtTGFiZWwnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sJztcbmltcG9ydCBGb3JtRmVlZGJhY2sgZnJvbSAnLi4vRm9ybUZlZWRiYWNrJztcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vTWl4aW5zL0NvbG9yYWJsZSc7XG5pbXBvcnQgQWN0aXZpdHlJbmRpY2F0b3IgZnJvbSAnLi4vQWN0aXZpdHlJbmRpY2F0b3InO1xuaW1wb3J0IE1lcmdlQ2xhc3NlcyBmcm9tICcuLi8uLi9NaXhpbnMvTWVyZ2VDbGFzc2VzJztcbmltcG9ydCBGb3JtQ29udHJvbE1peGluIGZyb20gJy4uLy4uL01peGlucy9Gb3JtQ29udHJvbCc7XG5cbmNvbnN0IENVU1RPTV9TRUxFQ1RfUFJFRklYID0gJ2N1c3RvbS1zZWxlY3QtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3NlbGVjdC1maWVsZCcsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFjdGl2aXR5SW5kaWNhdG9yLFxuICAgICAgICBIZWxwVGV4dCxcbiAgICAgICAgRm9ybUNvbnRyb2wsXG4gICAgICAgIEZvcm1Hcm91cCxcbiAgICAgICAgRm9ybUxhYmVsLFxuICAgICAgICBGb3JtRmVlZGJhY2tcbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIENvbG9yYWJsZSxcbiAgICAgICAgTWVyZ2VDbGFzc2VzLFxuICAgICAgICBGb3JtQ29udHJvbE1peGluXG4gICAgXSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgY29udHJvbENsYXNzKCkge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbENsYXNzID0gdGhpcy5jdXN0b20gPyAnY3VzdG9tLXNlbGVjdCcgOiB0aGlzLmRlZmF1bHRDb250cm9sQ2xhc3M7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGFpbnRleHQgPyBgJHtjb250cm9sQ2xhc3N9LXBsYWludGV4dGAgOiBjb250cm9sQ2xhc3M7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3VzdG9tU2VsZWN0Q2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgQ1VTVE9NX1NFTEVDVF9QUkVGSVgucmVwbGFjZSgvLSQvLCAnJykgKyAodGhpcy5wbGFpbnRleHQgPyAnLXBsYWludGV4dCcgOiAnJyksXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21TZWxlY3RTaXplQ2xhc3MsXG4gICAgICAgICAgICAgICAgKHRoaXMuc3BhY2luZyB8fCAnJylcbiAgICAgICAgICAgIF0uam9pbignICcpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmhhcy1hY3Rpdml0eSB7XG4gICAgc2VsZWN0IHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgfVxuXG4gICAgLyogRm9yIElFMTAgKi9cbiAgICBzZWxlY3Q6Oi1tcy1leHBhbmQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxuaW1wb3J0IFNlbGVjdEZpZWxkIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvU2VsZWN0RmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnc2VsZWN0LWZpZWxkJyxcblxuICAgIGV4dGVuZHM6IFNlbGVjdEZpZWxkXG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxzZWxlY3QtZmllbGRcbiAgICAgICAgdi1tb2RlbD1cImZvcm0uc3RhdGVcIlxuICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICA6aWQ9XCJxdWVzdGlvbi5pZFwiXG4gICAgICAgIDpsYWJlbD1cImAke3F1ZXN0aW9uLnF1ZXN0aW9ufSR7cXVlc3Rpb24ucmVxdWlyZWQgPyAnKicgOiAnJ31gXCJcbiAgICAgICAgOnJlcXVpcmVkPVwicXVlc3Rpb24ucmVxdWlyZWRcIlxuICAgICAgICA6ZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgQGlucHV0PVwidXBkYXRlZFwiPlxuICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKGxhYmVsLCB2YWx1ZSkgaW4gcGFnZS5zaXRlLmNvbmZpZy5zdGF0ZXNcIiA6dmFsdWU9XCJ2YWx1ZVwiIHYtaHRtbD1cImxhYmVsXCIvPlxuICAgIDwvc2VsZWN0LWZpZWxkPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFN1cnZleUZpZWxkIGZyb20gJy4vU3VydmV5RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL01peGlucy9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvQ29tcG9uZW50cy9TZWxlY3RGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdzdGF0ZS1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBTdXJ2ZXlGaWVsZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFNlbGVjdEZpZWxkXG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCJmdW5jdGlvbiBjYW1lbENhc2Uoc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvKD86KF4uKXwoWy1fXFxzXSsuKSkvZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoLmNoYXJBdChtYXRjaC5sZW5ndGggLSAxKS50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHN0cmluZy5zdWJzdHJpbmcoMSk7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oLi4uYXJncyk7XG59XG5cbmZ1bmN0aW9uIGlzTnVsbCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpICYmICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHx8IChcbiAgICAgICAgdmFsdWUgPyB2YWx1ZS50b1N0cmluZygpID09PSAnW29iamVjdCBOdW1iZXJdJyA6IGZhbHNlXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gaXNOdW1lcmljKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSB8fCAoISF2YWx1ZSAmJiAhIXZhbHVlLnRvU3RyaW5nKCkubWF0Y2goL14tP1tcXGQuLF0rJC8pKTtcbn1cblxuZnVuY3Rpb24ga2V5KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzTnVtZXJpYyh2YWx1ZSkgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBlYWNoKHN1YmplY3QsIGZuKSB7XG4gICAgZm9yIChjb25zdCBpIGluIHN1YmplY3QpIHtcbiAgICAgICAgZm4oc3ViamVjdFtpXSwga2V5KGkpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBzdWJqZWN0ID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChwcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJqZWN0W2ldID8gbWF0Y2hlcyhwcm9wZXJ0aWVzW2ldKShzdWJqZWN0W2ldKSA6IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIXN1YmplY3QgfHwgc3ViamVjdFtpXSAhPT0gcHJvcGVydGllc1tpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgpIHtcbiAgICByZXR1cm4gKGlzU3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogKCFpc0FycmF5KHBhdGgpID8gW3BhdGhdIDogcGF0aCkpLnJlZHVjZSgoYSwgYikgPT4gYVtiXSwgb2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICAgIHJldHVybiBvYmplY3QgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVzUHJvcGVydHkocGF0aCwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3ViamVjdCA9PiB7XG4gICAgICAgIHJldHVybiBnZXQoc3ViamVjdCwgcGF0aCkgPT09IHZhbHVlO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHByZWRpY2F0ZSh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBtYXRjaGVzKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBtYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gcHJvcGVydHkodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24ga2ViYWJDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJylcbiAgICAgICAgLnJlcGxhY2UoL1xccysvZywgJy0nKVxuICAgICAgICAucmVwbGFjZSgvXy9nLCAnLScpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBtYXBLZXlzKG9iamVjdCwgZm4pIHtcbiAgICBjb25zdCBtYXBwZWQgPSB7fTtcblxuICAgIGVhY2gob2JqZWN0LCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBtYXBwZWRbZm4odmFsdWUsIGtleSldID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFwcGVkO1xufVxuXG5mdW5jdGlvbiBuZWdhdGUoZm4pIHtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IGlzRnVuY3Rpb24oZm4pID8gIWZuKC4uLmFyZ3MpIDogIWZuO1xufVxuXG5mdW5jdGlvbiBwaWNrQnkob2JqZWN0LCBtYXRjaCkge1xuICAgIGNvbnN0IHN1YmplY3QgPSB7fTtcblxuICAgIGVhY2gob2JqZWN0LCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBpZiAocHJlZGljYXRlKG1hdGNoKSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHN1YmplY3Rba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViamVjdDtcbn1cblxuZnVuY3Rpb24gb21pdEJ5KG9iamVjdCwgZm4pIHtcbiAgICByZXR1cm4gcGlja0J5KG9iamVjdCwgbmVnYXRlKGZuKSk7XG59XG5cbnZhciBBTElBU0VTID0ge1xuICAnc3RyZWV0JzogWydzdHJlZXRfbnVtYmVyJywgJ3JvdXRlJywgJ2ludGVyc2VjdGlvbiddLFxuICAnY2l0eSc6IFsnbG9jYWxpdHknXSxcbiAgJ3N0YXRlJzogWydhZG1pbmlzdHJhdGl2ZV9hcmVhX2xldmVsXzEnXSxcbiAgJ3ppcCc6IFsncG9zdGFsX2NvZGUnXSxcbiAgJ3ppcGNvZGUnOiBbJ3Bvc3RhbF9jb2RlJ10sXG4gICdjb3VudHknOiBbJ2FkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMiddXG59O1xuXG5mdW5jdGlvbiBpbnRlcnNlY3Rpb24oYSwgYikge1xuICByZXR1cm4gYS5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGIuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKGUsIGksIGMpIHtcbiAgICByZXR1cm4gYy5pbmRleE9mKGUpID09PSBpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdCh0eXBlLCBtb2RpZmllcnMsIGdlb2NvZGVyKSB7XG4gIGlmIChnZW9jb2Rlclt0eXBlXSkge1xuICAgIHJldHVybiBnZW9jb2Rlclt0eXBlXTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbGF0aXR1ZGUnKSB7XG4gICAgcmV0dXJuIGdlb2NvZGVyLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsb25naXR1ZGUnKSB7XG4gICAgcmV0dXJuIGdlb2NvZGVyLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xuICB9XG5cbiAgdmFyIGFsaWFzZXMgPSBBTElBU0VTW3R5cGVdIHx8IChpc0FycmF5KHR5cGUpID8gdHlwZSA6IFt0eXBlXSk7XG4gIHZhciB2YWx1ZXMgPSBnZW9jb2Rlci5hZGRyZXNzX2NvbXBvbmVudHMubWFwKGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICBpZiAoaW50ZXJzZWN0aW9uKGNvbXBvbmVudC50eXBlcywgYWxpYXNlcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gY29tcG9uZW50W21vZGlmaWVycy5zaG9ydCA/ICdzaG9ydF9uYW1lJyA6ICdsb25nX25hbWUnXTtcbiAgICB9XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISF2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiB2YWx1ZXMubGVuZ3RoID8gdmFsdWVzLmpvaW4oJyAnKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShiaW5kaW5nLCB2bm9kZSwgdmFsdWUpIHtcbiAgdmFyIHByb3BzID0gYmluZGluZy5leHByZXNzaW9uLnNwbGl0KCcuJyk7XG4gIHZhciBwcm9wID0gcHJvcHMucG9wKCk7XG4gIHZhciBtb2RlbCA9IHByb3BzLnJlZHVjZShmdW5jdGlvbiAoY2FycnksIGkpIHtcbiAgICByZXR1cm4gY2FycnlbaV07XG4gIH0sIHZub2RlLmNvbnRleHQpO1xuICB2YWx1ZSA9IGlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignICcpIDogdmFsdWU7XG5cbiAgaWYgKGJpbmRpbmcubW9kaWZpZXJzLnF1ZXJ5KSB7XG4gICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UucXVlcnkgPSB2YWx1ZTtcbiAgfVxuXG4gIG1vZGVsW3Byb3BdID0gdmFsdWU7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIFBsYWNlQXV0b2ZpbGwgPSB7XG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuJG9uKCdzZWxlY3QnLCBmdW5jdGlvbiAocGxhY2UsIGdlb2NvZGVyKSB7XG4gICAgICB2bm9kZS5jb250ZXh0LiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVwZGF0ZShiaW5kaW5nLCB2bm9kZSwgZXh0cmFjdChiaW5kaW5nLmFyZywgYmluZGluZy5tb2RpZmllcnMsIGdlb2NvZGVyKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2VvY29kZShvcHRpb25zKSB7XG4gIHZhciBnZW9jb2RlciA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIW9wdGlvbnMuZ2VvbWV0cnkpIHtcbiAgICAgIGdlb2NvZGVyLmdlb2NvZGUob3B0aW9ucywgZnVuY3Rpb24gKHJlc3VsdHMsIHN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09PSB3aW5kb3cuZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0spIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChzdGF0dXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShbb3B0aW9uc10pO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IExPQURFRF9TQ1JJUFRTID0ge307XG5cbmZ1bmN0aW9uIGVsZW1lbnQodXJsKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCcpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2NoYXJzZXQnLCAndXRmLTgnKTtcbiAgICByZXR1cm4gc2NyaXB0O1xufVxuXG5mdW5jdGlvbiBhcHBlbmQoc2NyaXB0KSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzY3JpcHQ7XG59XG5cbmZ1bmN0aW9uIHNjcmlwdCh1cmwpIHtcbiAgICBpZiAoTE9BREVEX1NDUklQVFNbdXJsXSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIExPQURFRF9TQ1JJUFRTW3VybF07XG4gICAgfVxuICAgIGVsc2UgaWYgKExPQURFRF9TQ1JJUFRTW3VybF0gfHwgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyYz1cIiR7dXJsfVwiXWApKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKExPQURFRF9TQ1JJUFRTW3VybF0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBMT0FERURfU0NSSVBUU1t1cmxdID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXBwZW5kKGVsZW1lbnQodXJsKSkuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKExPQURFRF9TQ1JJUFRTW3VybF0gPSBldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gTE9BREVEX1NDUklQVFNbdXJsXTtcbn1cblxudmFyIFBsYWNlQXV0b2NvbXBsZXRlTGlzdEl0ZW0gPSB7cmVuZGVyOiBmdW5jdGlvbigpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnbGknLHtzdGF0aWNDbGFzczpcImF1dG9jb21wbGV0ZS1saXN0LWl0ZW1cIixvbjp7XCJmb2N1c1wiOl92bS5vbkZvY3VzLFwib25CbHVyXCI6X3ZtLm9uQmx1cn19LFtfYygnYScse2F0dHJzOntcImhyZWZcIjpcIiNcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5wcmV2ZW50RGVmYXVsdCgpO3JldHVybiBfdm0ub25DbGljaygkZXZlbnQpfSxcImZvY3VzXCI6X3ZtLm9uRm9jdXMsXCJibHVyXCI6X3ZtLm9uQmx1cn19LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiYXV0b2NvbXBsZXRlLWxpc3QtaXRlbS1pY29uXCJ9KSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJhdXRvY29tcGxldGUtbGlzdC1pdGVtLWxhYmVsXCJ9LFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwyKV0pXSl9LHN0YXRpY1JlbmRlckZuczogW10sXG5cbiAgICBuYW1lOiAncGxhY2UtYXV0b2NvbXBsZXRlLWxpc3QtaXRlbScsXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIGl0ZW06IE9iamVjdFxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBvbkJsdXIoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2JsdXInLCBldmVudCwgdGhpcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25DbGljayhldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudCwgdGhpcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25Gb2N1cyhldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZm9jdXMnLCBldmVudCwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcblxudmFyIFBsYWNlQXV0b2NvbXBsZXRlTGlzdCA9IHtyZW5kZXI6IGZ1bmN0aW9uKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImF1dG9jb21wbGV0ZS1saXN0LXdyYXBwZXJcIn0sW19jKCd1bCcse3N0YXRpY0NsYXNzOlwiYXV0b2NvbXBsZXRlLWxpc3RcIn0sX3ZtLl9sKChfdm0uaXRlbXMpLGZ1bmN0aW9uKGl0ZW0saSl7cmV0dXJuIF9jKCdwbGFjZS1hdXRvY29tcGxldGUtbGlzdC1pdGVtJyx7a2V5Oml0ZW0uaWQsYXR0cnM6e1wiaXRlbVwiOml0ZW19LG9uOntcImNsaWNrXCI6X3ZtLm9uQ2xpY2ssXCJmb2N1c1wiOl92bS5vbkZvY3VzLFwiYmx1clwiOl92bS5vbkJsdXJ9fSxbX3ZtLl92KFwiIFwiK192bS5fcyhpdGVtW192bS5kaXNwbGF5XSkrXCIgXCIpXSl9KSldKX0sc3RhdGljUmVuZGVyRm5zOiBbXSxcblxuICAgIG5hbWU6ICdwbGFjZS1hdXRvY29tcGxldGUtbGlzdCcsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFBsYWNlQXV0b2NvbXBsZXRlTGlzdEl0ZW1cbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAnaXRlbXMnOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJ2Rpc3BsYXknOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnZGVzY3JpcHRpb24nXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgb25CbHVyKGV2ZW50LCBpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpdGVtOmJsdXInLCBldmVudCwgaXRlbSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25Gb2N1cyhldmVudCwgaXRlbSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaXRlbTpmb2N1cycsIGV2ZW50LCBpdGVtKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbkNsaWNrKGV2ZW50LCBpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpdGVtOmNsaWNrJywgZXZlbnQsIGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn07XG5cbmZ1bmN0aW9uIHByZWZpeChzdWJqZWN0LCBwcmVmaXgsIGRlbGltZXRlciA9ICctJykge1xuICAgIGNvbnN0IHByZWZpeGVyID0gKHZhbHVlLCBrZXkkJDEpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gKGtleSQkMSB8fCB2YWx1ZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke3ByZWZpeH0ke2RlbGltZXRlcn0/YCksICcnKTtcblxuICAgICAgICByZXR1cm4gW3ByZWZpeCwgc3RyaW5nXS5maWx0ZXIodmFsdWUgPT4gISF2YWx1ZSkuam9pbihkZWxpbWV0ZXIpO1xuICAgIH07XG5cbiAgICBpZiAoaXNCb29sZWFuKHN1YmplY3QpKSB7XG4gICAgICAgIHJldHVybiBzdWJqZWN0O1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdChzdWJqZWN0KSkge1xuICAgICAgICByZXR1cm4gbWFwS2V5cyhzdWJqZWN0LCBwcmVmaXhlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeGVyKHN1YmplY3QpO1xufVxuXG52YXIgRm9ybUNvbnRyb2wgPSB7XG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYXV0b2NvbXBsZXRlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgYXV0b2NvbXBsZXRlOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBmaWVsZCBpZCBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGlkOiBbTnVtYmVyLCBTdHJpbmddLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgbGFiZWwgZWxlbWVudC4gSWYgbm8gdmFsdWUsIG5vIGxhYmVsIHdpbGwgYXBwZWFyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGZpZWxkIG5hbWUgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBuYW1lOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBmaWVsZCBpZCBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwbGFjZWhvbGRlciBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBmaWVsZCByZXF1aXJlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcmVxdWlyZWQ6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBmb3JtLWdyb3VwIHdyYXBwZXIgdG8gaW5wdXRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZ3JvdXA6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcmVnZXggcGF0dGVybiBmb3IgdmFsaWRhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcGF0dGVybjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbmxpbmUgZmllbGQgdmFsaWRhdGlvbiBlcnJvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ3xCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBlcnJvcjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbmxpbmUgZmllbGQgdmFsaWRhdGlvbiBlcnJvcnMgcGFzc2VkIGFzIG9iamVjdCB3aXRoIGtleS92YWx1ZVxuICAgICAgICAgKiBwYWlycy4gSWYgZXJyb3JzIHBhc3NlZCBhcyBhbiBvYmplY3QsIHRoZSBmb3JtIG5hbWUgd2lsbCBiZSB1c2VkIGZvclxuICAgICAgICAgKiB0aGUga2V5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgT2JqZWN0fEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNvbWUgZmVlZGJhY2sgdG8gYWRkIHRvIHRoZSBmaWVsZCBvbmNlIHRoZSBmaWVsZCBpcyBzdWNjZXNzZnVsbHlcbiAgICAgICAgICogdmFsaWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGZlZWRiYWNrOiBbU3RyaW5nLCBBcnJheV0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIGV2ZW50IG5hbWVzIHRoYXQgY29ycmVsYXRlIHdpdGggY2FsbGJhY2sgZnVuY3Rpb25zXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBGdW5jdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgYmluZEV2ZW50czoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbJ2ZvY3VzJywgJ2JsdXInLCAnY2hhbmdlJywgJ2NsaWNrJywgJ2tleXVwJywgJ2tleWRvd24nLCAncHJvZ3Jlc3MnLCAncGFzdGUnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHQgY2xhc3MgbmFtZSBhc3NpZ25lZCB0byB0aGUgY29udHJvbCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRDb250cm9sQ2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdmb3JtLWNvbnRyb2wnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhpZGUgdGhlIGxhYmVsIGZvciBicm93c2VycywgYnV0IGxlYXZlIGl0IGZvciBzY3JlZW4gcmVhZGVycy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaGlkZUxhYmVsOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIG1hcmdpbi9wYWRkaW5nIGNsYXNzZXMgZm9yIGZpbmUgY29udHJvbCBvZiBzcGFjaW5nXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHNwYWNpbmc6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNpemUgb2YgdGhlIGZvcm0gY29udHJvbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgICAgICAgdmFsaWRhdGU6IHZhbHVlID0+IFsnc20nLCAnbWQnLCAnbGcnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSB0aGUgZm9ybSBmaWVsZCBpbmxpbmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaW5saW5lOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGUgZm9ybSBjb250cm9sIGlzIHJlYWRvbmx5LCBkaXNwbGF5IG9ubHkgYXMgdGV4dD9cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcGxhaW50ZXh0OiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgZm9ybSBjb250cm9sIHJlYWRvbmx5P1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIGZvcm0gY29udHJvbCBkaXNhYmxlZD9cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNvbWUgaW5zdHJ1Y3Rpb25zIHRvIGFwcGVhciB1bmRlciB0aGUgZmllbGQgbGFiZWxcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaGVscFRleHQ6IFtOdW1iZXIsIFN0cmluZ10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXhsZW5ndGggYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG1heGxlbmd0aDogW051bWJlciwgU3RyaW5nXVxuXG4gICAgfSxcblxuICAgIGRpcmVjdGl2ZXM6IHtcbiAgICAgICAgYmluZEV2ZW50czoge1xuICAgICAgICAgICAgYmluZChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudHMgPSBiaW5kaW5nLnZhbHVlIHx8IHZub2RlLmNvbnRleHQuYmluZEV2ZW50cztcblxuICAgICAgICAgICAgICAgIGVhY2goZXZlbnRzLCBuYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bm9kZS5jb250ZXh0LiRlbWl0KG5hbWUsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIGJsdXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRJbnB1dEZpZWxkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldElucHV0RmllbGQoKS5ibHVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm9jdXMoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRJbnB1dEZpZWxkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldElucHV0RmllbGQoKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldElucHV0RmllbGQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignLmZvcm0tY29udHJvbCwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRGaWVsZEVycm9ycygpIHtcbiAgICAgICAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmVycm9yIHx8IHRoaXMuZXJyb3JzO1xuXG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGhpcy5lcnJvcnMpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzID0gdGhpcy5lcnJvcnNbdGhpcy5uYW1lIHx8IHRoaXMuaWRdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gIWVycm9ycyB8fCBpc0FycmF5KGVycm9ycykgfHwgaXNPYmplY3QoZXJyb3JzKSA/IGVycm9ycyA6IFtlcnJvcnNdO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBjYWxsYmFja3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iaW5kRXZlbnRzLm1hcChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzW2NhbWVsQ2FzZShbJ29uJywgZXZlbnRdLmpvaW4oJyAnKSldXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLmZpbHRlcihldmVudCA9PiAhaXNVbmRlZmluZWQoZXZlbnQuY2FsbGJhY2spKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbnZhbGlkRmVlZGJhY2soKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmdldEZpZWxkRXJyb3JzKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KGVycm9ycykgPyBlcnJvcnMuam9pbignPGJyPicpIDogZXJyb3JzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHZhbGlkRmVlZGJhY2soKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLmZlZWRiYWNrKSA/IHRoaXMuZmVlZGJhY2suam9pbignPGJyPicpIDogdGhpcy5mZWVkYmFjaztcbiAgICAgICAgfSxcblxuICAgICAgICBjb250cm9sQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q29udHJvbENsYXNzICsgKHRoaXMucGxhaW50ZXh0ID8gJy1wbGFpbnRleHQnIDogJycpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbnRyb2xTaXplQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KHRoaXMuc2l6ZSwgdGhpcy5jb250cm9sQ2xhc3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbnRyb2xDbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xDbGFzcyxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xTaXplQ2xhc3MsXG4gICAgICAgICAgICAgICAgKHRoaXMuc3BhY2luZyB8fCAnJyksXG4gICAgICAgICAgICAgICAgKHRoaXMuaW52YWxpZEZlZWRiYWNrID8gJ2lzLWludmFsaWQnIDogJycpXG4gICAgICAgICAgICBdLmpvaW4oJyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYXNEZWZhdWx0U2xvdCgpIHtcbiAgICAgICAgICAgIHJldHVybiAhIXRoaXMuJHNsb3RzLmRlZmF1bHQ7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcblxudmFyIEZvcm1Hcm91cCA9IHtyZW5kZXI6IGZ1bmN0aW9uKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImZvcm0tZ3JvdXBcIn0sW192bS5fdChcImRlZmF1bHRcIildLDIpfSxzdGF0aWNSZW5kZXJGbnM6IFtdLFxuXG4gICAgbmFtZTogJ2Zvcm0tZ3JvdXAnXG5cbn07XG5cbmNvbnN0IFZ1ZUluc3RhbGxlciA9IHtcbiAgICB1c2UsXG4gICAgc2NyaXB0LFxuICAgIHBsdWdpbixcbiAgICBwbHVnaW5zLFxuICAgIGZpbHRlcixcbiAgICBmaWx0ZXJzLFxuICAgIGNvbXBvbmVudCxcbiAgICBjb21wb25lbnRzLFxuICAgIGRpcmVjdGl2ZSxcbiAgICBkaXJlY3RpdmVzLFxuICAgICRwbHVnaW5zOiB7fSxcbiAgICAkZmlsdGVyczoge30sXG4gICAgJGRpcmVjdGl2ZXM6IHt9LFxuICAgICRjb21wb25lbnRzOiB7fVxufTtcblxuZnVuY3Rpb24gdXNlKHBsdWdpbikge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gICAgICAgIHdpbmRvdy5WdWUudXNlKHBsdWdpbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsdWdpbjtcbn1cblxuZnVuY3Rpb24gcGx1Z2luKFZ1ZSwgbmFtZSwgZGVmKSB7XG4gICAgaWYgKCFWdWVJbnN0YWxsZXIuJHBsdWdpbnNbbmFtZV0pIHtcbiAgICAgICAgVnVlLnVzZShWdWVJbnN0YWxsZXIuJHBsdWdpbnNbbmFtZV0gPSBkZWYpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcGx1Z2lucyhWdWUsIHBsdWdpbnMpIHtcbiAgICBlYWNoKHBsdWdpbnMsIChkZWYsIG5hbWUpID0+IHtcbiAgICAgICAgcGx1Z2luKFZ1ZSwgbmFtZSwgZGVmKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKFZ1ZSwgbmFtZSwgZGVmKSB7XG4gICAgaWYgKCFWdWVJbnN0YWxsZXIuJGZpbHRlcnNbbmFtZV0pIHtcbiAgICAgICAgVnVlLnVzZShWdWVJbnN0YWxsZXIuJGZpbHRlcnNbbmFtZV0gPSBkZWYpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVycyhWdWUsIGZpbHRlcnMpIHtcbiAgICBlYWNoKGZpbHRlcnMsIChkZWYsIG5hbWUpID0+IHtcbiAgICAgICAgZmlsdGVyKFZ1ZSwgbmFtZSwgZGVmKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KFZ1ZSwgbmFtZSwgZGVmKSB7XG4gICAgaWYgKCFWdWVJbnN0YWxsZXIuJGNvbXBvbmVudHNbbmFtZV0pIHtcbiAgICAgICAgVnVlLmNvbXBvbmVudChuYW1lLCBWdWVJbnN0YWxsZXIuJGNvbXBvbmVudHNbbmFtZV0gPSBkZWYpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcG9uZW50cyhWdWUsIGNvbXBvbmVudHMpIHtcbiAgICBlYWNoKGNvbXBvbmVudHMsIChkZWYsIG5hbWUpID0+IHtcbiAgICAgICAgY29tcG9uZW50KFZ1ZSwgbmFtZSwgZGVmKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlyZWN0aXZlKFZ1ZSwgbmFtZSwgZGVmKSB7XG4gICAgaWYgKCFWdWVJbnN0YWxsZXIuJGRpcmVjdGl2ZXNbbmFtZV0pIHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oZGVmKSkge1xuICAgICAgICAgICAgVnVlLnVzZShWdWVJbnN0YWxsZXIuJGRpcmVjdGl2ZXNbbmFtZV0gPSBkZWYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgVnVlLmRpcmVjdGl2ZShuYW1lLCBkZWYpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXJlY3RpdmVzKFZ1ZSwgZGlyZWN0aXZlcykge1xuICAgIGVhY2goZGlyZWN0aXZlcywgKGRlZiwgbmFtZSkgPT4ge1xuICAgICAgICBkaXJlY3RpdmUoVnVlLCBuYW1lLCBkZWYpO1xuICAgIH0pO1xufVxuXG5WdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEZvcm1Hcm91cFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5jb25zdCBDT0xPUlMgPSBbXG4gICAgJ3ByaW1hcnknLFxuICAgICdzZWNvbmRhcnknLFxuICAgICdzdWNjZXNzJyxcbiAgICAnZGFuZ2VyJyxcbiAgICAnd2FybmluZycsXG4gICAgJ2luZm8nLFxuICAgICdsaWdodCcsXG4gICAgJ2RhcmsnLFxuICAgICd3aGl0ZScsXG4gICAgJ211dGVkJ1xuXTtcblxuY29uc3QgcHJvcHMgPSB7fTtcblxuZWFjaChbJ2JvcmRlcicsICd0ZXh0JywgJ2JnJywgJ2JnLWdyYWRpZW50J10sIG5hbWVzcGFjZSA9PiB7XG4gICAgZWFjaChDT0xPUlMsIGNvbG9yID0+IHtcbiAgICAgICAgcHJvcHNbY2FtZWxDYXNlKHByZWZpeChjb2xvciwgbmFtZXNwYWNlKSldID0gQm9vbGVhbjtcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBjbGFzc2VzKGluc3RhbmNlLCBuYW1lc3BhY2UpIHtcbiAgICByZXR1cm4gQ09MT1JTLm1hcChjb2xvciA9PiB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZVtjYW1lbENhc2UoY29sb3IgPSBwcmVmaXgoY29sb3IsIG5hbWVzcGFjZSkpXSA/IGNvbG9yIDogbnVsbDtcbiAgICB9KVxuICAgICAgICAuZmlsdGVyKHZhbHVlID0+ICEhdmFsdWUpO1xufVxuXG52YXIgQ29sb3JhYmxlID0ge1xuXG4gICAgcHJvcHM6IHByb3BzLFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIHRleHRDb2xvcigpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGFzc2VzKHRoaXMsICd0ZXh0Jyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmdDb2xvcigpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGFzc2VzKHRoaXMsICdiZycpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJvcmRlckNvbG9yKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXModGhpcywgJ2JvcmRlcicpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJnR3JhZGllbnRDb2xvcigpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGFzc2VzKHRoaXMsICdiZy1ncmFkaWVudCcpO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICB0ZXh0Q29sb3JDbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dENvbG9yKCkuam9pbignICcpLnRyaW0oKSB8fCBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJvcmRlckNvbG9yQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvcmRlckNvbG9yKCkuam9pbignICcpLnRyaW0oKSB8fCBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJnQ29sb3JDbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmdDb2xvcigpLmpvaW4oJyAnKS50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBiZ0dyYWRpZW50Q29sb3JDbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmdHcmFkaWVudENvbG9yKCkuam9pbignICcpLnRyaW0oKSB8fCBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbG9yYWJsZUNsYXNzZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0ge307XG5cbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy50ZXh0Q29sb3JDbGFzc2VzXSA9ICEhdGhpcy50ZXh0Q29sb3JDbGFzc2VzO1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmJvcmRlckNvbG9yQ2xhc3Nlc10gPSAhIXRoaXMuYm9yZGVyQ29sb3JDbGFzc2VzO1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmJnQ29sb3JDbGFzc2VzXSA9ICEhdGhpcy5iZ0NvbG9yQ2xhc3NlcztcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5iZ0dyYWRpZW50Q29sb3JDbGFzc2VzXSA9ICEhdGhpcy5iZ0dyYWRpZW50Q29sb3JDbGFzc2VzO1xuXG4gICAgICAgICAgICByZXR1cm4gb21pdEJ5KGNsYXNzZXMsIChrZXkkJDEsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFrZXkkJDEgfHwgIXZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufTtcblxudmFyIFNjcmVlbnJlYWRlcnMgPSB7XG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgc2hvdyBvbmx5IGZvciBzY3JlZW5yZWFkZXJzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBzck9ubHk6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3VsZCBiZSBmb2N1c2FibGUgZm9yIHNjcmVlbnJlYWRlcnNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIHNyT25seUZvY3VzYWJsZTogQm9vbGVhblxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNjcmVlbnJlYWRlckNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdzci1vbmx5JzogdGhpcy5zck9ubHksXG4gICAgICAgICAgICAgICAgJ3NyLW9ubHktZm9jdXNhYmxlJzogdGhpcy5zck9ubHlGb2N1c2FibGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbnZhciBIZWxwVGV4dCA9IHtyZW5kZXI6IGZ1bmN0aW9uKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzbWFsbCcse3N0YXRpY0NsYXNzOlwiZm9ybS10ZXh0XCIsY2xhc3M6X3ZtLmNsYXNzZXN9LFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwyKX0sc3RhdGljUmVuZGVyRm5zOiBbXSxcblxuICAgIG5hbWU6ICdoZWxwLXRleHQnLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIENvbG9yYWJsZSxcbiAgICAgICAgU2NyZWVucmVhZGVyc1xuICAgIF0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBjbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4dGVuZCh7fSwgdGhpcy5zY3JlZW5yZWFkZXJDbGFzc2VzLCB0aGlzLmNvbG9yYWJsZUNsYXNzZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5WdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEhlbHBUZXh0XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbnZhciBGb3JtTGFiZWwgPSB7cmVuZGVyOiBmdW5jdGlvbigpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnbGFiZWwnLHtjbGFzczpfdm0uY2xhc3Nlc30sW192bS5fdChcImRlZmF1bHRcIildLDIpfSxzdGF0aWNSZW5kZXJGbnM6IFtdLFxuXG4gICAgbmFtZTogJ2Zvcm0tbGFiZWwnLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIENvbG9yYWJsZSxcbiAgICAgICAgU2NyZWVucmVhZGVyc1xuICAgIF0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBjbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4dGVuZCh7fSwgdGhpcy5zY3JlZW5yZWFkZXJDbGFzc2VzLCB0aGlzLmNvbG9yYWJsZUNsYXNzZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5WdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEZvcm1MYWJlbFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG52YXIgRm9ybUZlZWRiYWNrID0ge3JlbmRlcjogZnVuY3Rpb24oKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse2NsYXNzOnsnaW52YWxpZC1mZWVkYmFjayc6IF92bS5pbnZhbGlkLCAndmFsaWQtZmVlZGJhY2snOiBfdm0udmFsaWQgJiYgIV92bS5pbnZhbGlkfX0sW192bS5fdChcImRlZmF1bHRcIixbX3ZtLl92KF92bS5fcyhfdm0ubGFiZWwpKV0pXSwyKX0sc3RhdGljUmVuZGVyRm5zOiBbXSxcblxuICAgIG5hbWU6ICdmb3JtLWZlZWRiYWNrJyxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGVcbiAgICBdLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZhbHVlIG9mIGxhYmVsIGVsZW1lbnQuIElmIG5vIHZhbHVlLCBubyBsYWJlbCB3aWxsIGFwcGVhci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWw6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIHRoZSBmZWVkYmFjayBtYXJrZWQgYXMgaW52YWxpZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpbnZhbGlkOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgdGhlIGZlZWRiYWNrIG1hcmtlZCBhcyBpbnZhbGlkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHZhbGlkOiBCb29sZWFuXG5cbiAgICB9XG5cbn07XG5cblZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgRm9ybUZlZWRiYWNrXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbnZhciBNZXJnZUNsYXNzZXMgPSB7XG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgbWVyZ2VDbGFzc2VzKCkge1xuICAgICAgICAgICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgICAgICAgICAgZWFjaChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyksIGFyZyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0KGFyZykpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kKGNsYXNzZXMsIGFyZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQoYXJnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXNbYXJnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn07XG5cbmZ1bmN0aW9uIHVuaXQoaGVpZ2h0KSB7XG4gICAgcmV0dXJuIGlzRmluaXRlKGhlaWdodCkgPyBoZWlnaHQgKyAncHgnIDogaGVpZ2h0O1xufVxuXG52YXIgQmFzZVR5cGUgPSB7cmVuZGVyOiBmdW5jdGlvbigpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJhY3Rpdml0eS1pbmRpY2F0b3JcIixjbGFzczpfdm0uY2xhc3Nlc30sX3ZtLl9sKChfdm0ubm9kZXMpLGZ1bmN0aW9uKGkpe3JldHVybiBfYygnZGl2Jyl9KSl9LHN0YXRpY1JlbmRlckZuczogW10sXG5cbiAgICBwcm9wczoge1xuICAgICAgICBub2Rlczoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogM1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBwcmVmaXg6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdhY3Rpdml0eS1pbmRpY2F0b3ItJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNsYXNzZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHt9O1xuXG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuJG9wdGlvbnMubmFtZV0gPSAhIXRoaXMuJG9wdGlvbnMubmFtZTtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5wcmVmaXggKyB0aGlzLnNpemUucmVwbGFjZSh0aGlzLnByZWZpeCwgJycpXSA9ICEhdGhpcy5zaXplO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxudmFyIEFjdGl2aXR5SW5kaWNhdG9yRG90cyA9IHtcblxuICAgIG5hbWU6ICdhY3Rpdml0eS1pbmRpY2F0b3ItZG90cycsXG5cbiAgICBleHRlbmRzOiBCYXNlVHlwZVxufTtcblxudmFyIEFjdGl2aXR5SW5kaWNhdG9yU3Bpbm5lciA9IHtcblxuICAgIG5hbWU6ICdhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lcicsXG5cbiAgICBleHRlbmRzOiBCYXNlVHlwZSxcblxuICAgIHByb3BzOiBleHRlbmQoe30sIEJhc2VUeXBlLnByb3BzLCB7XG4gICAgICAgIG5vZGVzOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAxMlxuICAgICAgICB9XG4gICAgfSlcbn07XG5cbnZhciBBY3Rpdml0eUluZGljYXRvciA9IHtyZW5kZXI6IGZ1bmN0aW9uKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIChfdm0uY2VudGVyKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjZW50ZXItd3JhcHBlclwiLGNsYXNzOnsncG9zaXRpb24tcmVsYXRpdmUnOiBfdm0ucmVsYXRpdmUsICdwb3NpdGlvbi1maXhlZCc6IF92bS5maXhlZH0sc3R5bGU6KF92bS5zdHlsZSl9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjZW50ZXItY29udGVudCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyXCJ9LFtfYyhfdm0uY29tcG9uZW50LHt0YWc6XCJjb21wb25lbnRcIixhdHRyczp7XCJzaXplXCI6X3ZtLnNpemUsXCJwcmVmaXhcIjpfdm0ucHJlZml4fX0pLF92bS5fdihcIiBcIiksKF92bS5sYWJlbCk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYWN0aXZpdHktaW5kaWNhdG9yLWxhYmVsXCIsZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5sYWJlbCl9fSk6X3ZtLl9lKCldLDEpXSk6X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIsc3R5bGU6KF92bS5zdHlsZSl9LFtfYyhfdm0uY29tcG9uZW50LHt0YWc6XCJjb21wb25lbnRcIixhdHRyczp7XCJzaXplXCI6X3ZtLnNpemUsXCJwcmVmaXhcIjpfdm0ucHJlZml4fX0pLF92bS5fdihcIiBcIiksKF92bS5sYWJlbCk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYWN0aXZpdHktaW5kaWNhdG9yLWxhYmVsXCIsZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5sYWJlbCl9fSk6X3ZtLl9lKCldLDEpfSxzdGF0aWNSZW5kZXJGbnM6IFtdLFxuXG4gICAgbmFtZTogJ2FjdGl2aXR5LWluZGljYXRvcicsXG5cbiAgICBleHRlbmRzOiBCYXNlVHlwZSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgY2VudGVyOiBCb29sZWFuLFxuXG4gICAgICAgIGZpeGVkOiBCb29sZWFuLFxuXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG5cbiAgICAgICAgcmVsYXRpdmU6IEJvb2xlYW4sXG5cbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2RvdHMnXG4gICAgICAgIH0sXG5cbiAgICAgICAgaGVpZ2h0OiBbU3RyaW5nLCBOdW1iZXJdLFxuXG4gICAgICAgIG1heEhlaWdodDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICBtaW5IZWlnaHQ6IFtTdHJpbmcsIE51bWJlcl0sXG5cbiAgICAgICAgd2lkdGg6IFtTdHJpbmcsIE51bWJlcl0sXG5cbiAgICAgICAgbWF4V2lkdGg6IFtTdHJpbmcsIE51bWJlcl0sXG5cbiAgICAgICAgbWluV2lkdGg6IFtTdHJpbmcsIE51bWJlcl1cblxuICAgIH0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFjdGl2aXR5SW5kaWNhdG9yRG90cyxcbiAgICAgICAgQWN0aXZpdHlJbmRpY2F0b3JTcGlubmVyXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgc3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB1bml0KHRoaXMud2lkdGgpLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiB1bml0KHRoaXMubWF4V2lkdGgpLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiB1bml0KHRoaXMubWluV2lkdGgpLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdW5pdCh0aGlzLmhlaWdodCksXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiB1bml0KHRoaXMubWF4SGVpZ2h0KSxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHVuaXQodGhpcy5taW5IZWlnaHQpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBvbmVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiBrZWJhYkNhc2UodGhpcy5wcmVmaXggKyB0aGlzLnR5cGUucmVwbGFjZSh0aGlzLnByZWZpeCwgJycpKTtcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxuVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBBY3Rpdml0eUluZGljYXRvclxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG52YXIgSW5wdXRGaWVsZCA9IHtyZW5kZXI6IGZ1bmN0aW9uKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdmb3JtLWdyb3VwJyx7c3RhdGljQ2xhc3M6XCJpbnB1dC1maWVsZFwiLGNsYXNzOnsnaGFzLWFjdGl2aXR5JzogX3ZtLmFjdGl2aXR5fX0sW192bS5fdChcImxhYmVsXCIsWyhfdm0ubGFiZWwgfHwgX3ZtLmhhc0RlZmF1bHRTbG90KT9fYygnZm9ybS1sYWJlbCcse3JlZjpcImxhYmVsXCIsYXR0cnM6e1wiZm9yXCI6X3ZtLmlkfSxkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLmxhYmVsKX19KTpfdm0uX2UoKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwicG9zaXRpb24tcmVsYXRpdmVcIn0sW192bS5fdChcImNvbnRyb2xcIixbX2MoJ2lucHV0Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJiaW5kLWV2ZW50c1wiLHJhd05hbWU6XCJ2LWJpbmQtZXZlbnRzXCIsdmFsdWU6KF92bS5iaW5kRXZlbnRzKSxleHByZXNzaW9uOlwiYmluZEV2ZW50c1wifV0scmVmOlwiY29udHJvbFwiLGNsYXNzOl92bS5tZXJnZUNsYXNzZXMoX3ZtLmNvbnRyb2xDbGFzc2VzLCBfdm0uY29sb3JhYmxlQ2xhc3NlcyksYXR0cnM6e1wiaWRcIjpfdm0uaWQsXCJ0eXBlXCI6X3ZtLnR5cGUsXCJuYW1lXCI6X3ZtLm5hbWUsXCJwYXR0ZXJuXCI6X3ZtLnBhdHRlcm4sXCJyZWFkb25seVwiOl92bS5yZWFkb25seSxcInJlcXVpcmVkXCI6X3ZtLnJlcXVpcmVkLFwibWF4bGVuZ3RoXCI6X3ZtLm1heGxlbmd0aCxcInBsYWNlaG9sZGVyXCI6X3ZtLnBsYWNlaG9sZGVyLFwiZGlzYWJsZWRcIjpfdm0uZGlzYWJsZWQgfHwgX3ZtLnJlYWRvbmx5LFwiYXJpYS1sYWJlbFwiOl92bS5sYWJlbCxcImFyaWEtZGVzY3JpYmVkYnlcIjpfdm0uaWQsXCJhdXRvY29tcGxldGVcIjpfdm0uYXV0b2NvbXBsZXRlfSxkb21Qcm9wczp7XCJ2YWx1ZVwiOl92bS52YWx1ZX0sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe192bS4kZW1pdCgnaW5wdXQnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKTt9fX0pXSksX3ZtLl92KFwiIFwiKSxfdm0uX3QoXCJhY3Rpdml0eVwiLFtfYygndHJhbnNpdGlvbicse2F0dHJzOntcIm5hbWVcIjpcInNsaWRlLWZhZGVcIn19LFsoX3ZtLmFjdGl2aXR5KT9fYygnYWN0aXZpdHktaW5kaWNhdG9yJyx7a2V5OlwidGVzdFwiLHJlZjpcImFjdGl2aXR5XCIsYXR0cnM6e1widHlwZVwiOlwiZG90c1wiLFwic2l6ZVwiOl92bS5zaXplfX0pOl92bS5fZSgpXSwxKV0pLF92bS5fdihcIiBcIiksX3ZtLl90KFwiZmVlZGJhY2tcIixbKF92bS52YWxpZEZlZWRiYWNrKT9fYygnZm9ybS1mZWVkYmFjaycse3JlZjpcImZlZWRiYWNrXCIsYXR0cnM6e1widmFsaWRcIjpcIlwifSxkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLnZhbGlkRmVlZGJhY2spfX0pOihfdm0uaW52YWxpZEZlZWRiYWNrKT9fYygnZm9ybS1mZWVkYmFjaycse3JlZjpcImZlZWRiYWNrXCIsYXR0cnM6e1wiaW52YWxpZFwiOlwiXCJ9LGRvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0uaW52YWxpZEZlZWRiYWNrKX19KTpfdm0uX2UoKV0pXSwyKSxfdm0uX3YoXCIgXCIpLF92bS5fdChcImhlbHBcIixbKF92bS5oZWxwVGV4dCk/X2MoJ2hlbHAtdGV4dCcse3JlZjpcImhlbHBcIixkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLmhlbHBUZXh0KX19KTpfdm0uX2UoKV0pXSwyKX0sc3RhdGljUmVuZGVyRm5zOiBbXSxcblxuICAgIG5hbWU6ICdpbnB1dC1maWVsZCcsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBGb3JtQ29udHJvbCxcbiAgICAgICAgTWVyZ2VDbGFzc2VzXG4gICAgXSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSGVscFRleHQsXG4gICAgICAgIEZvcm1Hcm91cCxcbiAgICAgICAgRm9ybUxhYmVsLFxuICAgICAgICBGb3JtRmVlZGJhY2ssXG4gICAgICAgIEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgdHlwZSBhY3Rpdml0eSBpbmRpY2F0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0eToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAndGV4dCdcbiAgICAgICAgfVxuXG4gICAgfVxuXG59O1xuXG5WdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIElucHV0RmllbGRcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuY29uc3QgS0VZQ09ERSA9IHtcbiAgICBFU0M6IDI3LFxuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG4gICAgRU5URVI6IDEzLFxuICAgIFNQQUNFOiAzMixcbiAgICBUQUI6IDlcbn07XG5cbmNvbnN0IEFQSV9SRVFVRVNUX09QVElPTlMgPSBbXG4gICAgJ2JvdW5kcycsXG4gICAgJ2xvY2F0aW9uJyxcbiAgICAnY29tcG9uZW50LXJlc3RyaWN0aW9ucycsXG4gICAgJ29mZnNldCcsXG4gICAgJ3JhZGl1cycsXG4gICAgJ3R5cGVzJ1xuXTtcblxudmFyIFBsYWNlQXV0b2NvbXBsZXRlRmllbGQgPSB7cmVuZGVyOiBmdW5jdGlvbigpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJhdXRvY29tcGxldGUtZmllbGRcIixvbjp7XCJrZXlkb3duXCI6X3ZtLm9uS2V5ZG93bixcImtleXVwXCI6X3ZtLm9uS2V5dXB9fSxbX2MoJ2lucHV0LWZpZWxkJyx7YXR0cnM6e1wibmFtZVwiOl92bS5uYW1lLFwiaWRcIjpfdm0uaWQsXCJ0eXBlXCI6X3ZtLnR5cGUsXCJwbGFjZWhvbGRlclwiOl92bS5wbGFjZWhvbGRlcixcInJlcXVpcmVkXCI6X3ZtLnJlcXVpcmVkLFwiZGlzYWJsZWRcIjpfdm0uZGlzYWJsZWQgfHwgX3ZtLnJlYWRvbmx5LFwicmVhZG9ubHlcIjpfdm0ucmVhZG9ubHksXCJwYXR0ZXJuXCI6X3ZtLnBhdHRlcm4sXCJhcmlhLWxhYmVsXCI6X3ZtLmxhYmVsLFwiYXJpYS1kZXNjcmliZWRieVwiOl92bS5pZCxcImxhYmVsXCI6X3ZtLmxhYmVsLFwiZXJyb3JzXCI6X3ZtLmVycm9ycyxcInZhbHVlXCI6X3ZtLnZhbHVlLFwiYXV0b2NvbXBsZXRlXCI6XCJub1wifSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLiRlbWl0KCdpbnB1dCcsIF92bS5xdWVyeSk7fSxcImZvY3VzXCI6X3ZtLm9uRm9jdXMsXCJibHVyXCI6X3ZtLm9uQmx1cn0sbW9kZWw6e3ZhbHVlOihfdm0ucXVlcnkpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0ucXVlcnk9JCR2O30sZXhwcmVzc2lvbjpcInF1ZXJ5XCJ9fSxbKF92bS5hY3Rpdml0eSk/X2MoJ2FjdGl2aXR5LWluZGljYXRvcicse2F0dHJzOntcInNpemVcIjpcInhzXCIsXCJ0eXBlXCI6XCJzcGlubmVyXCJ9fSk6X3ZtLl9lKCldLDEpLF92bS5fdihcIiBcIiksKF92bS5wcmVkaWN0aW9ucyAmJiBfdm0uc2hvd1ByZWRpY3Rpb25zKT9fYygncGxhY2UtYXV0b2NvbXBsZXRlLWxpc3QnLHthdHRyczp7XCJpdGVtc1wiOl92bS5wcmVkaWN0aW9uc30sb246e1wiaXRlbTpjbGlja1wiOl92bS5vbkl0ZW1DbGljayxcIml0ZW06Ymx1clwiOl92bS5vbkl0ZW1CbHVyfX0pOl92bS5fZSgpXSwxKX0sc3RhdGljUmVuZGVyRm5zOiBbXSxcblxuICAgIG5hbWU6ICdwbGFjZS1hdXRvY29tcGxldGUtZmllbGQnLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIEZvcm1Db250cm9sXG4gICAgXSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRm9ybUdyb3VwLFxuICAgICAgICBJbnB1dEZpZWxkLFxuICAgICAgICBBY3Rpdml0eUluZGljYXRvcixcbiAgICAgICAgUGxhY2VBdXRvY29tcGxldGVMaXN0XG4gICAgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgJ2FwaS1rZXknOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgICdiYXNlLXVyaSc6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanMnXG4gICAgICAgIH0sXG5cbiAgICAgICAgJ2xpYnJhcmllcyc6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWydnZW9tZXRyeScsICdwbGFjZXMnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAnYm91bmRzJzoge1xuICAgICAgICAgICAgdHlwZTogW0Jvb2xlYW4sIE9iamVjdCwgU3RyaW5nXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgJ2xvY2F0aW9uJzoge1xuICAgICAgICAgICAgdHlwZTogW0Jvb2xlYW4sIE9iamVjdCwgU3RyaW5nXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgJ2NvbXBvbmVudC1yZXN0cmljdGlvbnMnOiB7XG4gICAgICAgICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0LCBTdHJpbmddLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAnb2Zmc2V0Jzoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgJ3JhZGl1cyc6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgICd0eXBlcyc6IHtcbiAgICAgICAgICAgIHR5cGU6IFtCb29sZWFuLCBBcnJheV0sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIGdldElucHV0RWxlbWVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFJlcXVlc3RPcHRpb25zKCkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogdGhpcy5nZXRJbnB1dEVsZW1lbnQoKS52YWx1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBBUElfUkVRVUVTVF9PUFRJT05TKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbaV0gIT09IHVuZGVmaW5lZCB8fCB0aGlzW2ldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbaV0gPSB0aGlzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2VsZWN0KHBsYWNlKSB7XG4gICAgICAgICAgICBnZW9jb2RlKHsgcGxhY2VJZDogcGxhY2UucGxhY2VfaWQgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLnF1ZXJ5ID0gcmVzcG9uc2VbMF0uZm9ybWF0dGVkX2FkZHJlc3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIHBsYWNlLCByZXNwb25zZVswXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZWFyY2goKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRJbnB1dEVsZW1lbnQoKS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWRpY3Rpb25zID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ByZWRpY3Rpb25zID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlamVjdChuZXcgRXJyb3IoJ0lucHV0IGVtcHR5JykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpdml0eSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2VydmljZS5nZXRQbGFjZVByZWRpY3Rpb25zKHRoaXMuZ2V0UmVxdWVzdE9wdGlvbnMoKSwgKHJlc3BvbnNlLCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZpdHkgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93Lmdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlU3RhdHVzLk9LOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBFcnJvciB3aXRoIHN0YXR1czogJHtzdGF0dXN9YCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlKCkge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJlZGljdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzaG93KCkge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJlZGljdGlvbnMgPSB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVwKCkge1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2E6Zm9jdXMnKTtcblxuICAgICAgICAgICAgaWYgKGZvY3VzZWQgJiYgZm9jdXNlZC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICBmb2N1c2VkLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCdhJykuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuICAgICAgICAgICAgICAgIGxpbmtzW2xpbmtzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZG93bigpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWQgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdhOmZvY3VzJyk7XG5cbiAgICAgICAgICAgIGlmIChmb2N1c2VkICYmIGZvY3VzZWQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICBmb2N1c2VkLnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWwucXVlcnlTZWxlY3RvcignYScpLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignW3RhYmluZGV4XScpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBldmVudC5rZXlDb2RlID09PSBLRVlDT0RFLlRBQikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgJiYgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG9uS2V5dXAoZXZlbnQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFLkVOVEVSOlxuICAgICAgICAgICAgY2FzZSBLRVlDT0RFLlNQQUNFOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuaXMtZm9jdXNlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5pcy1mb2N1c2VkIGEnKS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbW91c2Vkb3duJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIEtFWUNPREUuRVNDOlxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRFbGVtZW50KCkuYmx1cigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgS0VZQ09ERS5VUDpcbiAgICAgICAgICAgICAgICB0aGlzLnVwKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIEtFWUNPREUuRE9XTjpcbiAgICAgICAgICAgICAgICB0aGlzLmRvd24oKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZWFyY2goKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZWRpY3Rpb25zID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJlZGljdGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWRpY3Rpb25zID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25Gb2N1cyhldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucXVlcnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJlZGljdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25LZXl1cChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25CbHVyKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuJGVsLmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25JdGVtQmx1cihldmVudCkge1xuICAgICAgICAgICAgdGhpcy5vbkJsdXIoZXZlbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uSXRlbUNsaWNrKGV2ZW50LCBjaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QoY2hpbGQuaXRlbSk7XG4gICAgICAgICAgICB0aGlzLnByZWRpY3Rpb25zID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICBzY3JpcHQoYCR7dGhpcy5iYXNlVXJpfT9rZXk9JHt0aGlzLmFwaUtleX0mbGlicmFyaWVzPSR7dGhpcy5saWJyYXJpZXMuam9pbignLCcpfWApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kZ2VvY29kZXIgPSBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gICAgICAgICAgICB0aGlzLiRzZXJ2aWNlID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlU2VydmljZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnbG9hZGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcXVlcnk6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBhY3Rpdml0eTogZmFsc2UsXG4gICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcHJlZGljdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1ByZWRpY3Rpb25zOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAge1xuICAgICAgICAvLyBBbiBhcnJheSBvZiB0eXBlcyBzcGVjaWZpZXMgYW4gZXhwbGljaXQgdHlwZSBvciBhIHR5cGUgY29sbGVjdGlvbiwgYXMgbGlzdGVkIGluIHRoZSBzdXBwb3J0ZWQgdHlwZXMgYmVsb3cuIElmIG5vdGhpbmcgaXMgc3BlY2lmaWVkLCBhbGwgdHlwZXMgYXJlIHJldHVybmVkLiBJbiBnZW5lcmFsIG9ubHkgYSBzaW5nbGUgdHlwZSBpcyBhbGxvd2VkLiBUaGUgZXhjZXB0aW9uIGlzIHRoYXQgeW91IGNhbiBzYWZlbHkgbWl4IHRoZSBnZW9jb2RlIGFuZCBlc3RhYmxpc2htZW50IHR5cGVzLCBidXQgbm90ZSB0aGF0IHRoaXMgd2lsbCBoYXZlIHRoZSBzYW1lIGVmZmVjdCBhcyBzcGVjaWZ5aW5nIG5vIHR5cGVzLiBUaGUgc3VwcG9ydGVkIHR5cGVzIGFyZTogZ2VvY29kZSBpbnN0cnVjdHMgdGhlIFBsYWNlcyBzZXJ2aWNlIHRvIHJldHVybiBvbmx5IGdlb2NvZGluZyByZXN1bHRzLCByYXRoZXIgdGhhbiBidXNpbmVzcyByZXN1bHRzLiBhZGRyZXNzIGluc3RydWN0cyB0aGUgUGxhY2VzIHNlcnZpY2UgdG8gcmV0dXJuIG9ubHkgZ2VvY29kaW5nIHJlc3VsdHMgd2l0aCBhIHByZWNpc2UgYWRkcmVzcy4gZXN0YWJsaXNobWVudCBpbnN0cnVjdHMgdGhlIFBsYWNlcyBzZXJ2aWNlIHRvIHJldHVybiBvbmx5IGJ1c2luZXNzIHJlc3VsdHMuIHRoZSAocmVnaW9ucykgdHlwZSBjb2xsZWN0aW9uIGluc3RydWN0cyB0aGUgUGxhY2VzIHNlcnZpY2UgdG8gcmV0dXJuIGFueSByZXN1bHQgbWF0Y2hpbmcgdGhlIGZvbGxvd2luZyB0eXBlczogbG9jYWxpdHkgc3VibG9jYWxpdHkgcG9zdGFsX2NvZGUgY291bnRyeSBhZG1pbmlzdHJhdGl2ZV9hcmVhMSBhZG1pbmlzdHJhdGl2ZV9hcmVhMiB0aGUgKGNpdGllcykgdHlwZSBjb2xsZWN0aW9uIGluc3RydWN0cyB0aGUgUGxhY2VzIHNlcnZpY2UgdG8gcmV0dXJuIHJlc3VsdHMgdGhhdCBtYXRjaCBlaXRoZXIgbG9jYWxpdHkgb3IgYWRtaW5pc3RyYXRpdmVfYXJlYTMuXG4gICAgICAgIC8vIFBvc3NpYmxlIHZhbHVlczogZ2VvY29kZSwgYWRkcmVzcywgZXN0YWJsaXNobWVudCwgY2l0aWVzLCBsb2NhbGl0eSwgc3VibG9jYWxpdHksIHBvc3RhbF9jb2RlLCBjb3VudHJ5LCBhZG1pbmlzdHJhdGl2ZV9hcmVhMSwgYWRtaW5pc3RyYXRpdmVfYXJlYTJcbiAgICAgICAgdHlwZTogdW5kZWZpbmVkLFxuXG4gICAgICAgIC8vIGlzIGEgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzfGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kc0xpdGVyYWwgb2JqZWN0IHNwZWNpZnlpbmcgdGhlIGFyZWEgaW4gd2hpY2ggdG8gc2VhcmNoIGZvciBwbGFjZXMuIFRoZSByZXN1bHRzIGFyZSBiaWFzZWQgdG93YXJkcywgYnV0IG5vdCByZXN0cmljdGVkIHRvLCBwbGFjZXMgY29udGFpbmVkIHdpdGhpbiB0aGVzZSBib3VuZHMuXG4gICAgICAgIGJvdW5kczogdW5kZWZpbmVkLFxuXG4gICAgICAgIC8vIGlzIGEgYm9vbGVhbiBzcGVjaWZ5aW5nIHdoZXRoZXIgdGhlIEFQSSBtdXN0IHJldHVybiBvbmx5IHRob3NlIHBsYWNlcyB0aGF0IGFyZSBzdHJpY3RseSB3aXRoaW4gdGhlIHJlZ2lvbiBkZWZpbmVkIGJ5IHRoZSBnaXZlbiBib3VuZHMuIFRoZSBBUEkgZG9lcyBub3QgcmV0dXJuIHJlc3VsdHMgb3V0c2lkZSB0aGlzIHJlZ2lvbiBldmVuIGlmIHRoZXkgbWF0Y2ggdGhlIHVzZXIgaW5wdXQuXG4gICAgICAgIHN0cmljdEJvdW5kczogdHJ1ZXxmYWxzZSxcblxuICAgICAgICAvLyBjYW4gYmUgdXNlZCB0byByZXN0cmljdCByZXN1bHRzIHRvIHNwZWNpZmljIGdyb3Vwcy4gQ3VycmVudGx5LCB5b3UgY2FuIHVzZSBjb21wb25lbnRSZXN0cmljdGlvbnMgdG8gZmlsdGVyIGJ5IHVwIHRvIDUgY291bnRyaWVzLiBDb3VudHJpZXMgbXVzdCBiZSBwYXNzZWQgYXMgYXMgYSB0d28tY2hhcmFjdGVyLCBJU08gMzE2Ni0xIEFscGhhLTIgY29tcGF0aWJsZSBjb3VudHJ5IGNvZGUuIE11bHRpcGxlIGNvdW50cmllcyBtdXN0IGJlIHBhc3NlZCBhcyBhIGxpc3Qgb2YgY291bnRyeSBjb2Rlcy4gelxuICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHVuZGVmaW5lZCxcblxuICAgICAgICAvLyBjYW4gYmUgdXNlZCB0byBpbnN0cnVjdCB0aGUgQXV0b2NvbXBsZXRlIHdpZGdldCB0byByZXRyaWV2ZSBvbmx5IFBsYWNlIElEcy4gT24gY2FsbGluZyBnZXRQbGFjZSgpIG9uIHRoZSBBdXRvY29tcGxldGUgb2JqZWN0LCB0aGUgUGxhY2VSZXN1bHQgbWFkZSBhdmFpbGFibGUgd2lsbCBvbmx5IGhhdmUgdGhlIHBsYWNlIGlkLCB0eXBlcyBhbmQgbmFtZSBwcm9wZXJ0aWVzIHNldC4gWW91IGNhbiB1c2UgdGhlIHJldHVybmVkIHBsYWNlIElEIHdpdGggY2FsbHMgdG8gdGhlIFBsYWNlcywgR2VvY29kaW5nLCBEaXJlY3Rpb25zIG9yIERpc3RhbmNlIE1hdHJpeCBzZXJ2aWNlcy5cbiAgICAgICAgcGxhY2VJZE9ubHk6IHVuZGVmaW5lZCxcblxuICAgICAgICAvLyBpcyBhIGdvb2dsZS5tYXBzLkxhdExuZyBmb3IgcHJlZGljdGlvbiBiaWFzaW5nLiBQcmVkaWN0aW9ucyB3aWxsIGJlIGJpYXNlZCB0b3dhcmRzIHRoZSBnaXZlbiBsb2NhdGlvbiBhbmQgcmFkaXVzLiBBbHRlcm5hdGl2ZWx5LCBib3VuZHMgY2FuIGJlIHVzZWQuXG4gICAgICAgIGxvY2F0aW9uOiB1bmRlZmluZWQsXG5cbiAgICAgICAgLy8gaXMgYSBudW1iZXIgdG8gZGV0ZXJtaW5lIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gaW4gdGhlIGlucHV0IHRlcm0gYXQgd2hpY2ggdGhlIHNlcnZpY2UgdXNlcyB0ZXh0IGZvciBwcmVkaWN0aW9ucyAodGhlIHBvc2l0aW9uIG9mIHRoZSBjdXJzb3IgaW4gdGhlIGlucHV0IGZpZWxkKS5cbiAgICAgICAgb2Zmc2V0OiB1bmRlZmluZWQsXG5cbiAgICAgICAgLy8gaXMgYSBudW1iZXIgdG8gdGhlIHJhZGl1cyBvZiB0aGUgYXJlYSB1c2VkIGZvciBwcmVkaWN0aW9uIGJpYXNpbmcuIFRoZSByYWRpdXMgaXMgc3BlY2lmaWVkIGluIG1ldGVycywgYW5kIG11c3QgYWx3YXlzIGJlIGFjY29tcGFuaWVkIGJ5IGEgbG9jYXRpb24gcHJvcGVydHkuIEFsdGVybmF0aXZlbHksIGJvdW5kcyBjYW4gYmUgdXNlZC5cbiAgICAgICAgcmFkaXVzOiB1bmRlZmluZWRcbiAgICB9XG4gICAgKi9cbn07XG5cbmZ1bmN0aW9uIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gIFZ1ZS5kaXJlY3RpdmUoJ3BsYWNlLWF1dG9maWxsJywgUGxhY2VBdXRvZmlsbCk7XG4gIFZ1ZS5jb21wb25lbnQoJ3BsYWNlLWF1dG9jb21wbGV0ZS1maWVsZCcsIFBsYWNlQXV0b2NvbXBsZXRlRmllbGQpO1xuICBWdWUuY29tcG9uZW50KCdwbGFjZS1hdXRvY29tcGxldGUtbGlzdCcsIFBsYWNlQXV0b2NvbXBsZXRlTGlzdCk7XG4gIFZ1ZS5jb21wb25lbnQoJ3BsYWNlLWF1dG9jb21wbGV0ZS1saXN0LWl0ZW0nLCBQbGFjZUF1dG9jb21wbGV0ZUxpc3RJdGVtKTtcbn1cblxuaWYgKHdpbmRvdyAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWUudXNlKGluc3RhbGwpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbnN0YWxsO1xuZXhwb3J0IHsgUGxhY2VBdXRvZmlsbCwgUGxhY2VBdXRvY29tcGxldGVGaWVsZCwgUGxhY2VBdXRvY29tcGxldGVMaXN0LCBQbGFjZUF1dG9jb21wbGV0ZUxpc3RJdGVtIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD12dWUtcGxhY2UtYXV0b2NvbXBsZXRlLmVzLmpzLm1hcFxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPHBsYWNlLWF1dG9jb21wbGV0ZS1maWVsZFxuICAgICAgICB2LW1vZGVsPVwiZm9ybS5zdHJlZXRcIlxuICAgICAgICBpZD1cInN0cmVldFwiXG4gICAgICAgIG5hbWU9XCJzdHJlZXRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlN0cmVldCBBZGRyZXNzXCJcbiAgICAgICAgYXBpLWtleT1cIkFJemFTeUFoU3Y5eld2aXNpVFhSUFJ3Nks4QUUwRENtclJNcFFjVVwiXG4gICAgICAgIDplcnJvcnM9XCJlcnJvcnNcIlxuICAgICAgICA6bGFiZWw9XCJgJHtxdWVzdGlvbi5xdWVzdGlvbn0ke3F1ZXN0aW9uLnJlcXVpcmVkID8gJyonIDogJyd9YFwiXG4gICAgICAgIDpyZXF1aXJlZD1cInF1ZXN0aW9uLnJlcXVpcmVkXCJcbiAgICAgICAgdi1wbGFjZS1hdXRvZmlsbDpzdHJlZXQ9XCJmb3JtLnN0cmVldFwiXG4gICAgICAgIHYtcGxhY2UtYXV0b2ZpbGw6Y2l0eT1cImZvcm0uY2l0eVwiXG4gICAgICAgIHYtcGxhY2UtYXV0b2ZpbGw6c3RhdGU9XCJmb3JtLnN0YXRlXCJcbiAgICAgICAgdi1wbGFjZS1hdXRvZmlsbDp6aXA9XCJmb3JtLnppcFwiXG4gICAgICAgIEBpbnB1dD1cInVwZGF0ZWRcIlxuICAgIC8+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3VydmV5RmllbGQgZnJvbSAnLi9TdXJ2ZXlGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCB7IFBsYWNlQXV0b2ZpbGwsIFBsYWNlQXV0b2NvbXBsZXRlRmllbGQgfSBmcm9tICd2dWUtcGxhY2UtYXV0b2NvbXBsZXRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3N0cmVldC1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBTdXJ2ZXlGaWVsZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFBsYWNlQXV0b2NvbXBsZXRlRmllbGRcbiAgICB9LFxuXG4gICAgZGlyZWN0aXZlczoge1xuICAgICAgICBQbGFjZUF1dG9maWxsXG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCJjb25zdCBTVFlMRV9BVFRSSUJVVEVTID0gW1xuICAgICdmb250JyxcbiAgICAnZm9udEZhbWlseScsXG4gICAgJ2ZvbnRLZXJuaW5nJyxcbiAgICAnZm9udFNpemUnLFxuICAgICdmb250U3RyZXRjaCcsXG4gICAgJ2ZvbnRTdHlsZScsXG4gICAgJ2ZvbnRWYXJpYW50JyxcbiAgICAnZm9udFZhcmlhbnRMaWdhdHVyZXMnLFxuICAgICdmb250VmFyaWFudENhcHMnLFxuICAgICdmb250VmFyaWFudE51bWVyaWMnLFxuICAgICdmb250VmFyaWFudEVhc3RBc2lhbicsXG4gICAgJ2ZvbnRXZWlnaHQnLFxuICAgICdsaW5lSGVpZ2h0JyxcbiAgICAnbGV0dGVyU3BhY2luZycsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdtYXJnaW4nLFxuICAgICd0ZXh0QWxpZ24nLFxuICAgICd0ZXh0QWxpZ25MYXN0JyxcbiAgICAndGV4dERlY29yYXRpb24nLFxuICAgICd0ZXh0RGVjb3JhdGlvbkxpbmUnLFxuICAgICd0ZXh0RGVjb3JhdGlvblN0eWxlJyxcbiAgICAndGV4dERlY29yYXRpb25Db2xvcicsXG4gICAgJ3RleHREZWNvcmF0aW9uU2tpcEluaycsXG4gICAgJ3RleHREZWNvcmF0aW9uUG9zaXRpb24nLFxuICAgICd0ZXh0SW5kZW50JyxcbiAgICAndGV4dFJlbmRlcmluZycsXG4gICAgJ3RleHRTaGFkb3cnLFxuICAgICd0ZXh0U2l6ZUFkanVzdCcsXG4gICAgJ3RleHRPdmVyZmxvdycsXG4gICAgJ3RleHRUcmFuc2Zvcm0nLFxuICAgICd3aWR0aCcsXG4gICAgJ3dvcmRCcmVhaycsXG4gICAgJ3dvcmRTcGFjaW5nJyxcbiAgICAnd29yZFdyYXAnXG5dO1xuXG5mdW5jdGlvbiBpbnQoc3RyKSB7XG4gICAgaWYodHlwZW9mIHN0ciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgZWxzZSBpZighc3RyIHx8ICFzdHIucmVwbGFjZSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VJbnQoc3RyLnJlcGxhY2UoL1teXFxkLl0rL2csICcnKSk7XG59XG5cbmZ1bmN0aW9uIGlucHV0KGRpdiwgZWwpIHtcbiAgICBkaXYuaW5uZXJIVE1MID0gZWwudmFsdWUucmVwbGFjZSgvKD86XFxyXFxufFxccnxcXG4pL2csICc8YnIgLz4nKTtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0KGVsKSB7XG4gICAgcmV0dXJuIGludChlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpO1xufVxuXG5mdW5jdGlvbiBzdHlsZShlbCwgYXR0cikge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbYXR0cl07XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZSh0YXJnZXQsIGRpdiwgbWluSGVpZ2h0LCBtYXhIZWlnaHQpIHtcbiAgICBjb25zdCBkeW5hbWljSGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0KGRpdikgKyBpbnQoc3R5bGUoZGl2LCAnbGluZUhlaWdodCcpKSwgbWluSGVpZ2h0KTtcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gKCghbWF4SGVpZ2h0IHx8IGR5bmFtaWNIZWlnaHQgPCBtYXhIZWlnaHQpID8gZHluYW1pY0hlaWdodCA6IG1heEhlaWdodCkgKyAncHgnO1xufVxuXG4vKlxuZnVuY3Rpb24gc2V0TWluSGVpZ2h0KGRpdiwgZWwpIHtcbiAgICBkaXYuc3R5bGUubWluSGVpZ2h0ID0gaGVpZ2h0KGVsKSArICdweCc7XG59XG4qL1xuXG5mdW5jdGlvbiBtaW1pYyhlbCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcblxuICAgIGZvcihsZXQgaSBpbiBTVFlMRV9BVFRSSUJVVEVTKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IFNUWUxFX0FUVFJJQlVURVNbaV07XG5cbiAgICAgICAgZGl2LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcbiAgICB9XG5cbiAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGRpdi5zdHlsZS5ib3R0b20gPSAnMTAwJSc7XG4gICAgZGl2LnN0eWxlLnpJbmRleCA9IC0xO1xuICAgIGRpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBpbml0KGVsLCBtYXhIZWlnaHQpIHtcbiAgICBjb25zdCBkaXYgPSBtaW1pYyhlbCk7XG4gICAgY29uc3QgbWluSGVpZ2h0ID0gaGVpZ2h0KGVsKTtcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuICAgICAgICBpbnB1dChkaXYsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgIHJlc2l6ZShlbCwgZGl2LCBtaW5IZWlnaHQsIG1heEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBpbnB1dChkaXYsIGVsKTtcbiAgICByZXNpemUoZWwsIGRpdiwgbWluSGVpZ2h0LCBtYXhIZWlnaHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBpbnNlcnRlZChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgICAgaWYoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgICBlbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighZWwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0ZXh0YXJlYSBpcyByZXF1aXJlZCBmb3IgdGhlIHYtYXV0b2dyb3cgZGlyZWN0aXZlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdChlbCwgYmluZGluZy52YWx1ZSk7XG4gICAgfVxuXG59O1xuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGZvcm0tZ3JvdXA+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+XG4gICAgICAgICAgICA8Zm9ybS1sYWJlbCB2LWlmPVwibGFiZWwgfHwgaGFzRGVmYXVsdFNsb3RcIiA6Zm9yPVwiaWRcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD57e2xhYmVsfX08L3Nsb3Q+XG4gICAgICAgICAgICA8L2Zvcm0tbGFiZWw+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgICAgICAgICAgOnJvd3M9XCJyb3dzXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICA6ZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgOnBhdHRlcm49XCJwYXR0ZXJuXCJcbiAgICAgICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICA6cmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgIDptYXhsZW5ndGg9XCJtYXhsZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkIHx8IHJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNvbnRyb2xDbGFzc2VzLCBjb2xvcmFibGVDbGFzc2VzKVwiXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZC1ldmVudHM9XCJiaW5kRXZlbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuXG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJ2YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwidmFsaWRGZWVkYmFja1wiIHZhbGlkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJpbnZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJpbnZhbGlkRmVlZGJhY2tcIiBpbnZhbGlkIC8+XG4gICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiaGVscFwiPlxuICAgICAgICAgICAgPGhlbHAtdGV4dCB2LWlmPVwiaGVscFRleHRcIiB2LWh0bWw9XCJoZWxwVGV4dFwiIC8+XG4gICAgICAgIDwvc2xvdD5cblxuICAgIDwvZm9ybS1ncm91cD5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBIZWxwVGV4dCBmcm9tICcuLi9IZWxwVGV4dCc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJy4uL0Zvcm1Hcm91cCc7XG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJy4uL0Zvcm1MYWJlbCc7XG5pbXBvcnQgRm9ybUZlZWRiYWNrIGZyb20gJy4uL0Zvcm1GZWVkYmFjayc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJy4uLy4uL01peGlucy9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgTWVyZ2VDbGFzc2VzIGZyb20gJy4uLy4uL01peGlucy9NZXJnZUNsYXNzZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAndGV4dGFyZWEtZmllbGQnLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBIZWxwVGV4dCxcbiAgICAgICAgRm9ybUdyb3VwLFxuICAgICAgICBGb3JtTGFiZWwsXG4gICAgICAgIEZvcm1GZWVkYmFja1xuICAgIH0sXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBGb3JtQ29udHJvbCxcbiAgICAgICAgTWVyZ2VDbGFzc2VzXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3RleHQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByb3dzIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICByb3dzOiBbTnVtYmVyLCBTdHJpbmddXG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8dGV4dGFyZWEtZmllbGRcbiAgICAgICAgdi1hdXRvZ3Jvd1xuICAgICAgICB2LW1vZGVsPVwiZm9ybVtuYW1lXVwiXG4gICAgICAgIDpsYWJlbD1cImAke3F1ZXN0aW9uLnF1ZXN0aW9ufSR7cXVlc3Rpb24ucmVxdWlyZWQgPyAnKicgOiAnJ31gXCJcbiAgICAgICAgOm5hbWU9XCJuYW1lXCJcbiAgICAgICAgOnJlcXVpcmVkPVwicXVlc3Rpb24ucmVxdWlyZWRcIlxuICAgICAgICA6aWQ9XCJxdWVzdGlvbi5pZFwiXG4gICAgICAgIDplcnJvcnM9XCJlcnJvcnNcIlxuICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVkXCJcbiAgICAvPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFN1cnZleUZpZWxkIGZyb20gJy4vU3VydmV5RmllbGQnO1xuaW1wb3J0IEF1dG9ncm93IGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL0RpcmVjdGl2ZXMvQXV0b2dyb3cnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL01peGlucy9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgVGV4dGFyZWFGaWVsZCBmcm9tICd2dWUtaW50ZXJmYWNlL3NyYy9Db21wb25lbnRzL1RleHRhcmVhRmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAndGV4dGFyZWEtZmllbGQnLFxuXG4gICAgZXh0ZW5kczogU3VydmV5RmllbGQsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgRm9ybUNvbnRyb2xcbiAgICBdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBUZXh0YXJlYUZpZWxkXG4gICAgfSxcblxuICAgIGRpcmVjdGl2ZXM6IHtcbiAgICAgICAgQXV0b2dyb3dcbiAgICB9XG5cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxpbnB1dC1maWVsZFxuICAgICAgICB2LW1vZGVsPVwiZm9ybS56aXBcIlxuICAgICAgICBpZD1cInppcFwiXG4gICAgICAgIG5hbWU9XCJ6aXBcIlxuICAgICAgICA6bGFiZWw9XCJgJHtxdWVzdGlvbi5xdWVzdGlvbn0ke3F1ZXN0aW9uLnJlcXVpcmVkID8gJyonIDogJyd9YFwiXG4gICAgICAgIDpyZXF1aXJlZD1cInF1ZXN0aW9uLnJlcXVpcmVkXCJcbiAgICAgICAgOmVycm9ycz1cImVycm9yc1wiXG4gICAgICAgIG1heGxlbmd0aD1cIjlcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlppcCBDb2RlICg1IGRpZ2l0cylcIlxuICAgICAgICB4X2F1dG9jb21wbGV0ZXR5cGU9XCJwb3N0YWwtY29kZVwiXG4gICAgICAgIEBpbnB1dD1cInVwZGF0ZWRcIlxuICAgIC8+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3VydmV5RmllbGQgZnJvbSAnLi9TdXJ2ZXlGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAndnVlLWludGVyZmFjZS9zcmMvTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3Z1ZS1pbnRlcmZhY2Uvc3JjL0NvbXBvbmVudHMvSW5wdXRGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICd6aXAtZmllbGQnLFxuXG4gICAgZXh0ZW5kczogU3VydmV5RmllbGQsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgRm9ybUNvbnRyb2xcbiAgICBdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBJbnB1dEZpZWxkXG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgJy4vc2Nzcy9fdmFyaWFibGVzLnNjc3MnO1xuaW1wb3J0ICcuL3Njc3MvX2Zvcm1zLnNjc3MnO1xuaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcblxuaW1wb3J0ICogYXMgRmllbGRzIGZyb20gJy4vQ29tcG9uZW50cy9GaWVsZHMnO1xuXG4vLyBpbXBvcnQgJ2VzNi1vYmplY3QtYXNzaWduJztcbi8vIGltcG9ydCAncHJvbWlzZS1wb2x5ZmlsbC9zcmMvcG9seWZpbGwnO1xuLy8gaW1wb3J0IEdpdmV3b3Jrc0Zvcm0gZnJvbSAnQC9QbHVnaW5zL0dpdmV3b3Jrc0Zvcm0nO1xuXG4vKlxuaW1wb3J0IHtcbiAgICBJbnB1dEZpZWxkLFxuICAgIFNlbGVjdEZpZWxkXG59IGZyb20gJy4vQ29tcG9uZW50cy9GaWVsZHMnO1xuXG5leHBvcnQge1xuICAgIElucHV0RmllbGQsXG4gICAgU2VsZWN0RmllbGRcbn07XG4qL1xuXG5pZih3aW5kb3cgJiYgd2luZG93LlZ1ZSkge1xuICAgIGZvcihsZXQgaSBpbiBGaWVsZHMpIHtcbiAgICAgICAgaWYoRmllbGRzW2ldLm5hbWUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5WdWUuY29tcG9uZW50KEZpZWxkc1tpXS5uYW1lLCBGaWVsZHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBHaXZld29ya3NGb3JtO1xuIl0sIm5hbWVzIjpbImtleSIsImNhbWVsQ2FzZSIsImV4dGVuZCIsImlzTnVsbCIsImlzQXJyYXkiLCJpc09iamVjdCIsImlzTnVtYmVyIiwiaXNOdW1lcmljIiwiZWFjaCIsIm1hdGNoZXMiLCJpc1N0cmluZyIsImdldCIsInByb3BlcnR5IiwiaXNGdW5jdGlvbiIsIm1hdGNoZXNQcm9wZXJ0eSIsInByZWRpY2F0ZSIsImlzQm9vbGVhbiIsImlzVW5kZWZpbmVkIiwia2ViYWJDYXNlIiwibWFwS2V5cyIsIm5lZ2F0ZSIsInBpY2tCeSIsIm9taXRCeSIsInNjcmlwdCIsInByZWZpeCIsIkZvcm1Db250cm9sIiwiRm9ybUdyb3VwIiwiQ29sb3JhYmxlIiwiU2NyZWVucmVhZGVycyIsIkhlbHBUZXh0IiwiRm9ybUxhYmVsIiwiRm9ybUZlZWRiYWNrIiwiTWVyZ2VDbGFzc2VzIiwidW5pdCIsIkJhc2VUeXBlIiwiQWN0aXZpdHlJbmRpY2F0b3JEb3RzIiwiQWN0aXZpdHlJbmRpY2F0b3JTcGlubmVyIiwiQWN0aXZpdHlJbmRpY2F0b3IiLCJJbnB1dEZpZWxkIiwid2luZG93IiwiVnVlIiwiaSIsIkZpZWxkcyIsIm5hbWUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQWUsU0FBUyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFO0lBQzFELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLElBQUksTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMzRCxJQUFJLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7O0lDSmMsU0FBUyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUU7SUFDeEMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOztJQ0ZjLFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUN0QyxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQztJQUMxQixDQUFDOztJQ0ZjLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRTtJQUN2QyxJQUFJLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOztJQ0NjLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtJQUN4QyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLEtBQUssQ0FB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RUE7SUFDQTtJQUNBOztJQUVBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBOztJQUVBOzs7SUFoQ0EsWUFBWTtJQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7SUFFQTs7SUFFQTtJQUNBOzs7SUFMQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztJQUVBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOzs7SUFiQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0JBOztJQUVBOztJQUVBOztJQUVBOztJQUVBOztJQUVBOztJQUVBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTtJQUNBOztJQUVBOztJQUVBOztJQUVBOztJQUVBOztJQUVBOztJQUVBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTtJQUNBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBOztJQUVBOzs7SUEzRUEsWUFBWTtJQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNENBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7OztJQS9EQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbUJBOzs7Ozs7O0tBQUE7OztJQXBCQSxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNnQkE7Ozs7Ozs7S0FBQTs7O0lBakJBLFlBQVk7SUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2dEQTs7SUFFQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7O0lBRUE7O0lBRUE7OztJQTVJQSxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNERBOztJQUVBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTs7SUFFQTtJQUNBOzs7SUE3R0EsWUFBWTtJQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBOztJQUVBOzs7SUF4QkEsWUFBWTtJQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29DQTs7SUFFQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTs7SUFFQTs7SUFFQTs7SUFFQTs7SUFFQTs7O0lBOURBLFlBQVk7SUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3FDQTs7Ozs7Ozs7Ozs7Ozs7OztLQUFBOzs7SUF0Q0EsWUFBWTtJQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2VBOzs7Ozs7O0tBQUE7OztJQWhCQSxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7OztLQUFBOzs7SUFBQSxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0JBOzs7Ozs7O0tBQUE7OztJQWpCQSxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2lCQTs7Ozs7OztLQUFBOzs7SUFsQkEsWUFBWTtJQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0JBOzs7Ozs7O0tBQUE7OztJQWpCQSxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ21DQTs7Ozs7Ozs7S0FBQTs7O0lBcENBLFlBQVk7SUFDWjs7Ozs7Ozs7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QyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsc0RBQXNELENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyw4REFBOEQsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxN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QUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FB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UUFBUTtJQUNaLElBQUksT0FBTztJQUNYLENBQUMsQ0FBQzs7SUFFRixJQUFJLHNCQUFzQixHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FB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
