(function (axios) {
    'use strict';

    axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

    function camelCase(string) {
        string = string.toLowerCase().replace(/(?:(^.)|([-_\s]+.))/g, function(match) {
            return match.charAt(match.length - 1).toUpperCase();
        });

        return string.charAt(0).toLowerCase() + string.substring(1);
    }

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

    /**
     * Deep merge two objects.
     * @param target
     * @param ...sources
    */
    function deepExtend(target, ...sources) {
        if(!sources.length) return target;

        const source = sources.shift();

        if(isObject(target) && isObject(source)) {
            for(const key in source) {
                if(isObject(source[key])) {
                    if(!target[key]) extend(target, { [key]: {} });
                    deepExtend(target[key], source[key]);
                }
                else {
                    extend(target, { [key]: source[key] });
                }
            }
        }

        return deepExtend(target, ...sources);
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

    function first(array) {
        return (array && array.length) ? array[0] : undefined;
    }

    function matches(properties) {
        return subject => {
            for(const i in properties) {
                if(isObject(properties[i])) {
                    return subject[i] ? matches(properties[i])(subject[i]) : false;
                }
                else if(!subject || subject[i] !== properties[i]) {
                    return false;
                }
            }

            return true;
        };
    }

    function isString(value) {
        return typeof value === 'string';
    }

    function get(object, path) {
        return (isString(path) ? path.split('.') : (!isArray(path) ? [path] : path)).reduce((a, b) => a[b], object);
    }

    function property(path) {
        return object => {
            return get(object, path);
        };
    }

    function isFunction(value) {
        return value instanceof Function;
    }

    function matchesProperty(path, value) {
        return subject => {
            return get(subject, path) === value;
        };
    }

    function predicate(value) {
        if(isObject(value)) {
            value = matches(value);
        }
        else if(isArray(value)) {
            value = matchesProperty(value[0], value[1]);
        }
        else if(!isFunction(value)) {
            value = property(value);
        }

        return value;
    }

    function findIndex$1(object, value) {
        return first(Object.keys(object).filter(
            key => predicate(value)(object[key])
        ));
    }

    function isBoolean(value) {
        return value === true || value === false;
    }

    function isUndefined(value) {
        return typeof value === 'undefined';
    }

    function isEmpty(value) {
        if(isArray(value)) {
            return value.length === 0;
        }
        else if(isObject(value)) {
            return Object.keys(value).length === 0;
        }

        return value === '' || isNull(value) || isUndefined(value);
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

    function pickBy(object, match) {
        const subject = {};

        each(object, (value, key) => {
            if(predicate(match)(value)) {
                subject[key] = value;
            }
        });

        return subject;
    }

    function wrap(subject, fn) {
        return value => {
            return isFunction(fn) ? fn(subject, value) : value;
        };
    }

    class BaseClass {
        constructor(attributes) {
            this.setAttribute(attributes);
        }

        getAttribute(key$$1) {
            return this.hasOwnProperty(key$$1) ? this[key$$1] : null;
        }

        getAttributes() {
            const attributes = {};

            Object.getOwnPropertyNames(this).forEach(key$$1 => {
                attributes[key$$1] = this.getAttribute(key$$1);
            });

            return attributes;
        }

        getPublicAttributes() {
            return Object.keys(this.getAttributes())
                .filter(key$$1 => {
                    return !key$$1.match(/^\$/);
                })
                .reduce((obj, key$$1) => {
                    obj[key$$1] = this.getAttribute(key$$1);

                    return obj;
                }, {});
        }

        setAttribute(key$$1, value) {
            if(isObject(key$$1)) {
                this.setAttributes(key$$1);
            }
            else {
                this[key$$1] = value;
            }
        }

        setAttributes(values) {
            for(const i in values) {
                this.setAttribute(i, values[i]);
            }
        }
    }

    class Response extends BaseClass {
        constructor(data) {
            super(extend({
                date: new Date()
            }, data));
        }

        get data() {
            return this.$data;
        }

        set data(value) {
            this.$data = value;
        }

        get error() {
            return this.$error;
        }

        set error(value) {
            this.$error = value;
        }

        get request() {
            return this.$request;
        }

        set request(value) {
            this.$request = value;
        }

        get date() {
            return this.$date;
        }

        set date(value) {
            this.$date = value;
        }

        get success() {
            return this.status >= 200 && this.status < 300;
        }

        get failed() {
            return !this.success;
        }
    }

    const DEFAULTS = {
        transformRequest: [],
        transformResponse: []
    };

    class Request extends BaseClass {
        constructor(method, url, attributes) {
            super({
                options: {},
                data: {},
                headers: {},
                params: {},
                url: url,
                method: method
            });

            if(isObject(attributes)) {
                this.setAttribute(attributes);
            }
        }

        send(attributes) {
            this.sentAt = new Date();
            this.setAttributes(attributes);

            return new Promise((resolve, reject) => {
                axios(this.options).then(
                    response => resolve(this.response = new Response(response)),
                    error => reject(this.response = new Response(error.response))
                );
            });
        }

        set cancel(value) {
            this.$cancel = value;
        }

        get cancel() {
            return this.$cancel || (() => {
                throw new Error('The request has not been sent yet.');
            });
        }

        get options() {
            return deepExtend({
                cancelToken: new axios.CancelToken(cancel => {
                    this.cancel = cancel;

                    return cancel;
                })
            }, DEFAULTS, this.getPublicAttributes());
        }

        set options(attributes) {
            this.setAttribute(attributes);
        }

        get response() {
            return this.$response;
        }

        set response(value) {
            this.$response = value;
        }

        get error() {
            return this.$error;
        }

        set error(value) {
            this.$error = value;
        }

        get passed() {
            return !!this.response && !this.error;
        }

        get failed() {
            return !!this.response && !!this.error;
        }

        static get transform() {
            return {
                request: this.transformRequest,
                response: this.transformResponse
            };
        }

        static get defaults() {
            return DEFAULTS;
        }

        static set defaults(value) {
            extend(DEFAULTS, value);
        }

        static transformRequest(fn) {
            DEFAULTS.transformRequest.push(fn);
        }

        static transformResponse(fn) {
            DEFAULTS.transformResponse.push(fn);
        }

        static get(url, attributes) {
            return this.make('get', url).send(attributes);
        }

        static post(url, attributes) {
            return this.make('post', url, attributes).send();
        }

        static put(url, attributes) {
            return this.make('put', url, attributes).send();
        }

        static patch(url, data, attributes) {
            return this.make('path', url, attributes).send();
        }

        static delete(url, attributes) {
            return this.make('delete', url, attributes).send();
        }

        static make(method, url, attributes) {
            return new this(method, url, attributes);
        }
    }

    class Model {
        /**
         * Construct the model instance
         *
         * @param data object
         * @return void
         */
        constructor(data = {}, params = {}) {
            this.$request = null;
            this.$key = this.key();
            this.$files = this.files();
            this.$properties = this.properties();

            each(params, (value, key$$1) => {
                this[key$$1] = value;
            });

            this.initialize(data);
        }

        /**
         * Initialize the model with the given data without considering the data
         * as "changed".
         *
         * @param data object
         * @return this
         */
        initialize(data) {
            this.$exists = false;
            this.$changed = {};
            this.$attributes = {};
            this.fill(data);
            this.$initialized = true;

            return this;
        }

        /**
         * Define the corresponding API endpoint slug
         *
         * @return string
         */
        endpoint() {
            //
        }

        /**
         * Define the corresponding uri schema.
         *
         * @return string
         */
        uri() {
            return [
                (this.endpoint() || ''),
                (this.exists() ? this.id() : null)
            ]
                .filter(value => !!value)
                .concat([].slice.call(arguments))
                .join('/');
        }

        /**
         * Return the primary key value for the model
         *
         * @return {Number}
         */
        id() {
            return this.get(this.key());
        }

        /**
         * Define a primary key. This is used to determine if the model exists and
         * which endpoint to use.
         *
         * @return string
         */
        key() {
            return 'id';
        }

        /**
         * Return an array of properties that are sent to the API. If no properties
         * are defined, then all the attributes will be included in the request.
         *
         * @return array
         */
        properties() {
            return [];
        }

        /**
         * Return an array of file properties that are sent to the API. If no fies
         * are defined, then request will always be sent with JSON vs. multipart.
         *
         * @return array
         */
        files() {
            return [];
        }

        /**
         * Set the attributes in the model with the data given.
         *
         * @param data object
         * @return this
         */
        fill(data) {
            this.setAttributes(data);

            return this;
        }

        /**
         * Get one or more attributes from the model.
         *
         * @param data string|array
         * @return array|mixed
         */
        get(key$$1) {
            if(isArray(key$$1)) {
                return this.getAttributes().filter((value, i) => {
                    return key$$1.indexOf(i) !== -1;
                });
            }
            else {
                return this.getAttribute(key$$1);
            }
        }

        /**
         * Alias for setAttributes() except this method returns `this`. This method
         * also accepts an array of values or key/value pair.
         *
         * @return this
         */
        set(key$$1, value = undefined) {
            if(isArray(key$$1) || isObject(key$$1)) {
                this.setAttributes(key$$1);
            }
            else {
                this.setAttribute(key$$1, value);
            }

            return this;
        }

        /**
         * Get all the defined attributes.
         *
         * @return array
         */
        getAttributes() {
            return this.$attributes;
        }

        /**
         * Get the changed attributes
         *
         * @return array
         */
        getChangedAttributes() {
            return Object.keys(this.$changed);
        }

        /**
         * Get the changed attributes
         *
         * @return array
         */
        getOriginalValue(key$$1) {
            return this.$changed[key$$1] || this.$attributes[key$$1];
        }

        /**
         * Get the Request object.
         *
         * @return {mixed}
         */
        getRequest() {
            return this.$request;
        }

        /**
         * Get the unchanged attributes
         *
         * @return array
         */
        getUnchangedAttributes() {
            return Object.keys(this.$attributes).filter(key$$1 => !(key$$1 in this.$changed));
        }

        /**
         * Get an attribute with a given key. If no key is defined
         *
         * @param key string
         * @param default undefined|mixed
         * @return array
         */
        getAttribute(key$$1, value = undefined) {
            return this.$attributes[key$$1] || value;
        }

        /**
         * Set an array or object of data as attributes.
         *
         * @param attributes array|object
         * @return void
         */
        setAttributes(data) {
            if(isArray(data) || isObject(data)) {
                each(data, (value, key$$1) => {
                    this.setAttribute(key$$1, value);
                });
            }
        }

        /**
         * Set an attribute with a given key/value pair. This will track the changes
         * in the model within the `this.$changed` property. If the primary key
         * is set, it will also change the `this.$exists` property.
         *
         * @param key string
         * @param value mixed
         * @return void
         */
        setAttribute(key$$1, value) {
            if(this.getAttribute(key$$1) !== value) {
                this.handleAttributeChange(key$$1, value);

                if(isUndefined(value)) {
                    delete this.$attributes[key$$1];
                }
                else {
                    this.$attributes[key$$1] = value;
                }
            }
        }

        /**
         * Revert the model to its original state.
         *
         * @return bool
         */
        revert() {
            each(this.$changed, (value, key$$1) => {
                if(!isUndefined(value)) {
                    this.$attributes[key$$1] = value;
                }
                else {
                    delete this.$attributes[key$$1];
                }
            });

            this.$changed = {};
        }

        /**
         * Returns if the model has a primary key set.
         *
         * @return bool
         */
        exists() {
            return !!this.$exists;
        }

        /**
         * Returns the model been changed or not.
         *
         * @return bool
         */
        hasChanged(key$$1) {
            return !key$$1 ? this.getChangedAttributes().length > 0 : !isUndefined(this.$changed[key$$1]);
        }

        /**
         * Does the model have any File objects. If so, need to send as multipart.
         *
         * @return bool
         */
        hasFiles() {
            function count(files, total = 0) {
                return Object.keys(files).reduce((carry, key$$1) => {
                    const value = files[key$$1];

                    if(isArray(value)) {
                        return carry + count(value, total);
                    }
                    else if(value instanceof File || value instanceof FileList) {
                        return carry + 1;
                    }
                    else {
                        return carry;
                    }
                }, total);
            }

            return count(this.toJSON()) !== 0;
        }

        /**
         * Handle settings the $changed attributes when an attribute value is set.
         *
         * @param key string
         * @param value mixed
         * @return void
         */
        handleAttributeChange(key$$1, value) {
            if(this.$initialized) {
                if(this.$changed[key$$1] === value) {
                    delete this.$changed[key$$1];
                }
                else if(!(key$$1 in this.$changed)) {
                    this.$changed[key$$1] = this.getAttribute(key$$1);
                }
            }

            this.handlePrimaryKeyChange(key$$1, value);
        }

        /**
         * Set an array or object of data as attributes.
         *
         * @param key string
         * @param value mixed
         * @return void
         */
        handlePrimaryKeyChange(key$$1, value) {
            if(this.$key === key$$1) {
                this.$exists = !isUndefined(value) && !isNull(value);
            }
        }

        /**
         * Save the model to the database
         *
         * @param data object
         * @return bool
         */
        save(data = {}, config = {}) {
            this.fill(data);

            return new Promise((resolve, reject) => {
                const data = !this.hasFiles() ? this.toJSON() : this.toFormData();
                const uri = config.uri || this.uri();
                const method = config.method || (
                    !this.exists() || this.hasFiles() ? 'post' : 'put'
                );

                this.$request = this.constructor.request(method, uri, config);
                this.$request.send({
                    data: data
                }).then(response => resolve(this.fill(response)), reject);
            });
        }

        /**
         * Delete an existing model
         *
         * @param  {object} config
         * @return {bool}
         */
        delete(config = {}) {
            return new Promise((resolve, reject) => {
                if(!this.exists()) {
                    reject(new Error('The model must have a primary key before it can be delete.'));
                }

                this.$request = this.constructor.request('delete', config.uri || this.uri(), config);
                this.$request.send().then(response => {
                    resolve(response);
                }, reject);
            });
        }

        /**
         * Cancel the current HTTP request if one exists.
         *
         * @return {self}
         */
        cancel() {
            if(this.$request) {
                this.$request.cancel();
            }

            return this;
        }

        /**
         * Convert the Model instance to a FormData instance
         *
         * @return Object
         */
        toFormData() {
            const form = new FormData();

            each(this.toJSON(), (value, key$$1) => {
                if(isArray(value)) {
                    each(value, item => {
                        if(!(item instanceof File) && (isObject(item) || isArray(item))) {
                            item = JSON.stringify(item);
                        }

                        form.append(key$$1.replace(/(.+)(\[.+\]?)$/, '$1') + '[]', item);
                    });
                }
                else if(!(value instanceof File) && isObject(value)) {
                    form.append(key$$1, JSON.stringify(value));
                }
                else if(!isNull(value)) {
                    form.append(key$$1, value);
                }
            });

            return form;
        }

        /**
         * Convert the instance to JSON payload
         *
         * @return Object
         */
        toJSON() {
            return pickBy(this.$attributes, (value, key$$1) => {
                return !this.$properties.length || (
                    key$$1 === this.key() || this.$properties.indexOf(key$$1) !== -1
                );
            });
        }

        /**
         * Convert the model to a string
         *
         * @return String
         */
        toString() {
            return JSON.stringify(this.toJSON());
        }

        /**
         * Alias for toJSON
         *
         * @return Object
         */
        toJson() {
            return this.toJSON();
        }

        /**
         * Search for a collection of models
         *
         * @param data object
         * @return bool
         */
        static search(params = {}, config = {}) {
            const model = new this();

            return new Promise((resolve, reject) => {
                model.$request = this.request('get', (config.uri || model.uri()), config);
                model.$request.send().then(response => {
                    resolve(response);
                }, errors => {
                    reject(errors);
                });
            });
        }

        /**
         * Find an existing model by id
         *
         * @param data object
         * @return bool
         */
        static find(id, config = {}) {
            return new Promise((resolve, reject) => {
                const model = new this();
                model.$request = this.request('get', (config.uri || model.uri(id)), config);
                model.$request.send().then(response => {
                    resolve(model.initialize(response.data));
                }, error => {
                    reject(error);
                });
            });
        }

        /**
         * Create a request from the model data
         *
         * @param data object
         * @return bool
         */
        static request(method, url, config = {}) {
            return Request.make(method, url, config);
        }
    }

    class Page extends Model {
      endpoint() {
        return 'page';
      }

    }

    let domain;

    switch (window.location.hostname) {
      case 'dev5.giveworks.net':
        domain = 'https://dev5.giveworks.net';
        break;

      case 'giveworks.net':
      case 'secure.giveworks.net':
        domain = 'https://secure.giveworks.net';
        break;

      default:
        domain = 'https://giveworks.test';
    }

    var HttpConfig = {
      baseURL: `${domain}/api/public/v1/`
    };

    const EVENTS = ['submit', 'redirect', 'submit-enable', 'submit-disable', 'submit-show', 'submit-hide'];
    var FormEvents = {
      directives: {
        bindEvents: {
          bind(el, binding, vnode) {
            const context = vnode.context;
            const subject = vnode.child || vnode.context;

            for (const i in EVENTS) {
              subject.$on(EVENTS[i], (...args) => {
                const method = camelCase('on-' + EVENTS[i]);

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
    };

    var PageType = {
      props: {
        page: {
          type: Object,
          required: true
        },
        redirect: [Boolean, String]
      },
      mixins: [FormEvents],
      computed: {
        shouldShowEmployment() {
          return this.page.site.type === 'PAC' || this.page.site.type === 'Campaign';
        }

      },
      methods: {
        submitButton() {
          return this.$refs.submit || this.$el.querySelector('[type=submit]');
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

        redirect(url) {
          setTimeout(() => {
            window.location = url || this.page.next_page.url;
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
              this.model.save(this.form, {
                method: 'post'
              }).then(response => {
                this.submitting = false;
                this.$emit('submit-complete', true, response);
                this.$emit('submit-success', response);

                if (isFunction(success)) {
                  success(response);
                }

                resolve(response);
              }, response => {
                this.submitting = false;
                this.errors = response.data.errors;
                this.$emit('submit-complete', true, response);
                this.$emit('submit-success', response);

                if (isFunction(failed)) {
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
          console.log('onSubmitSuccess');
          this.redirect();
        }

      },

      data() {
        return {
          form: {},
          errors: {},
          submitting: false,
          model: new Page({
            id: this.page.id
          })
        };
      }

    };

    class Gateway {
      constructor(options) {
        this.options = options;

        if (!this.options) {
          throw new Error('A gateway must have some options passed to it!');
        }
      }

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
        if(document.querySelector('head')) {
            document.querySelector('head').appendChild(script);
        }
        else {
            document.querySelector('body').appendChild(script);
        }

        return script;
    }

    function script(url) {
        if(LOADED_SCRIPTS[url] instanceof Promise) {
            return LOADED_SCRIPTS[url];
        }
        else if(LOADED_SCRIPTS[url] || document.querySelector(`script[src="${url}"]`)) {
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

    class Stripe extends Gateway {
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
        return this.elements().create('card', extend({
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
        script('https://js.stripe.com/v3/').then(success, error);
      }

    }

    var global$1 = (typeof global !== "undefined" ? global :
                typeof self !== "undefined" ? self :
                typeof window !== "undefined" ? window : {});

    if (typeof global$1.setTimeout === 'function') ;
    if (typeof global$1.clearTimeout === 'function') ;

    // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
    var performance$1 = global$1.performance || {};
    var performanceNow =
      performance$1.now        ||
      performance$1.mozNow     ||
      performance$1.msNow      ||
      performance$1.oNow       ||
      performance$1.webkitNow  ||
      function(){ return (new Date()).getTime() };

    class PayPal extends Gateway {
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
          env: 'sandbox',
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
        script('https://www.paypalobjects.com/api/checkout.js').then(success, error);
      }

    }

    class AuthorizetNet extends Gateway {
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
        const url = 'https://jstest.authorize.net/v1/Accept.js'; // Production;

        script(url).then(success, error);
      }

    }

    const Gateways = {
      'PayPal': PayPal,
      'Stripe': Stripe,
      'Authorize.Net': AuthorizetNet
    };
    const instances = {};
    function Gateway$1 (key, options) {
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

    var Variant = {

        props: {

            /**
             * The variant attribute
             *
             * @property String
             */
            variant: {
                type: String,
                default: 'primary'
            }

        },

        computed: {

            variantClassPrefix() {
                return this.$options.name;
            },

            variantClass() {
                return prefix(this.variant, this.variantClassPrefix);
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

    //

    var script$1 = {

        name: 'btn',

        mixins: [
            Variant,
            Sizeable,
            Colorable,
            MergeClasses
        ],

        props: {

            /**
             * Display button with active state
             *
             * @property String
             */
            active: Boolean,

            /**
             * Display button with blocked state
             *
             * @property String
             */
            block: Boolean,

            /**
             * Display button with disabled state
             *
             * @property String
             */
            disabled: Boolean,

            /**
             * If an href is passed, button is an router-link element
             *
             * @property Boolean
             */
            href: String,

            /**
             * Should use <label> as the element for the button. Used for inputs
             * wrappers (toggles).
             *
             * @property Boolean
             */
            label: Boolean,

            /**
             * Display as an outline button
             *
             * @property String
             */
            outline: Boolean,

            /**
             * If an to is passed, button is an router-link element
             *
             * @property Boolean
             */
            to: [Object, String],

            /**
             * The type attribute for the button. Not applied if an anchor
             *
             * @property String
             */
            type: String

        },

        methods: {

            onClick(event) {
                this.$emit('click', event);
            }

        },

        computed: {

            variantClassPrefix() {
                return this.$options.name + (this.outline ? '-outline' : '');
            },

            classes() {
                return this.mergeClasses(
                    'btn',
                    this.variantClass,
                    this.sizeableClass,
                    this.colorableClasses,
                    this.block ? 'btn-block' : '',
                    this.active ? 'active' : ''
                );
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
                const __vue_script__ = script$1;
    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _vm.to
        ? _c(
            "router-link",
            {
              class: _vm.classes,
              attrs: { to: _vm.to, disabled: _vm.disabled, role: "button" },
              on: { click: _vm.onClick }
            },
            [_vm._t("default")],
            2
          )
        : _vm.href
          ? _c(
              "a",
              {
                class: _vm.classes,
                attrs: { href: _vm.href, disabled: _vm.disabled, role: "button" },
                on: { click: _vm.onClick }
              },
              [_vm._t("default")],
              2
            )
          : _vm.label
            ? _c(
                "label",
                {
                  class: _vm.classes,
                  attrs: { disabled: _vm.disabled, role: "button" },
                  on: { click: _vm.onClick }
                },
                [_vm._t("default")],
                2
              )
            : _c(
                "button",
                {
                  class: _vm.classes,
                  attrs: { type: _vm.type, disabled: _vm.disabled },
                  on: { click: _vm.onClick }
                },
                [_vm._t("default")],
                2
              )
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      const __vue_inject_styles__ = undefined;
      /* scoped */
      const __vue_scope_id__ = undefined;
      /* module identifier */
      const __vue_module_identifier__ = undefined;
      /* functional template */
      const __vue_is_functional_template__ = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var Btn = normalizeComponent(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        undefined,
        undefined
      );

    //
    //
    //
    //
    //
    //

    var script$2 = {

        name: 'alert-close',

        methods: {

            onClick(event) {
                this.$emit('click', event);
            }

        }

    };

    /* script */
                const __vue_script__$1 = script$2;
                
    /* template */
    var __vue_render__$1 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "alert", "aria-label": "Close" },
          on: { click: _vm.onClick }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    };
    var __vue_staticRenderFns__$1 = [];
    __vue_render__$1._withStripped = true;

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
      

      
      var AlertClose = normalizeComponent(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
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

    var script$3 = {

        name: 'alert-heading'

    };

    /* script */
                const __vue_script__$2 = script$3;
                
    /* template */
    var __vue_render__$2 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("h4", { staticClass: "alert-heading" }, [_vm._t("default")], 2)
    };
    var __vue_staticRenderFns__$2 = [];
    __vue_render__$2._withStripped = true;

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
      

      
      var AlertHeading = normalizeComponent(
        { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
        __vue_inject_styles__$2,
        __vue_script__$2,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        undefined,
        undefined
      );

    function unit(height) {
        return isFinite(height) ? height + 'px' : height;
    }

    //

    var script$4 = {

        name: 'progress-bar',

        mixins: [
            Variant,
            MergeClasses
        ],

        props: {

            /**
             * A custom color to be applied inline in the styles vs a contextual
             * variant.
             *
             * @property String
             */
            color: String,

            /**
             * The progress bar percentage value
             *
             * @property String
             */
            value: {
                type: Number,
                required: true
            },

            /**
             * The height of the progress bar
             *
             * @property String
             */
            height: [Number, String],

            /**
             * Show the progress bar value as a label inside the bar
             *
             * @property String
             */
            label: [String, Boolean],

            /**
             * Should the progress bar appear with stripes
             *
             * @property String
             */
            striped: Boolean,

            /**
             * Should the progress bar appear with animated stripes
             *
             * @property String
             */
            animated: Boolean,

            /**
             * The minimum value
             *
             * @property String
             */
            min: {
                type: Number,
                default: 0
            },

            /**
             * The max value
             *
             * @property String
             */
            max: {
                type: Number,
                default: 100
            }

        },

        computed: {

            variantClassPrefix() {
                return 'bg';
            },

            offsetValue() {
                return this.value / this.max * 100;
            },

            formattedHeight() {
                return this.height ? unit(this.height) : null;
            },

            progressClasses() {
                return {
                    'progress-bar-striped': this.striped,
                    'progress-bar-animated': this.animated
                };
            },

            styles() {
                return {
                    width: `${this.offsetValue}%`,
                    background: `${this.color} !important`
                };
            }

        }

    };

    /* script */
                const __vue_script__$3 = script$4;
                
    /* template */
    var __vue_render__$3 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { staticClass: "progress", style: { height: _vm.formattedHeight } },
        [
          _c(
            "div",
            {
              staticClass: "progress-bar",
              class: _vm.mergeClasses(_vm.progressClasses, _vm.variantClass),
              style: _vm.styles,
              attrs: {
                role: "progressbar",
                "aria-valuenow": _vm.offsetValue,
                "aria-valuemin": _vm.min,
                "aria-valuemax": _vm.max
              }
            },
            [
              !!_vm.label
                ? _c(
                    "span",
                    [
                      _vm.label !== true ? [_vm._v(_vm._s(_vm.label))] : _vm._e(),
                      _vm._v(" " + _vm._s(_vm.offsetValue) + "%")
                    ],
                    2
                  )
                : _c("span", [_vm._t("default")], 2)
            ]
          )
        ]
      )
    };
    var __vue_staticRenderFns__$3 = [];
    __vue_render__$3._withStripped = true;

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
      

      
      var ProgressBar = normalizeComponent(
        { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
        __vue_inject_styles__$3,
        __vue_script__$3,
        __vue_scope_id__$3,
        __vue_is_functional_template__$3,
        __vue_module_identifier__$3,
        undefined,
        undefined
      );

    function duration(el) {
        const duration = getComputedStyle(el).transitionDuration;
        const numeric = parseFloat(duration, 10) || 0;
        const unit = duration.match(/m?s/);

        switch (unit[0]) {
        case 's':
            return numeric * 1000;
        case 'ms':
            return numeric;
        }
    }

    function transition(el) {
        return new Promise((resolve, reject) => {
            try {
                const delay = duration(el);

                setTimeout(() => {
                    resolve(delay);
                }, delay);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    //

    var script$5 = {

        name: 'alert',

        components: {
            AlertClose,
            AlertHeading,
            ProgressBar
        },

        mixins: [
            Variant,
            MergeClasses
        ],

        props: {

            /**
             * Is the alert dismissible
             *
             * @property Boolean
             */
            dismissible: Boolean,

            /**
             * The alert's title/heading
             *
             * @property Boolean
             */
            heading: String,

            /**
             * The alert's title/heading
             *
             * @property Boolean
             */
            title: String,

            /**
             * Should the alert fade when hidden
             *
             * @property Boolean
             */
            fade: {
                type: Boolean,
                default: true
            },

            /**
             * Should the alert be visible by default. If passed a number, alert
             * will be shown for the number of seconds that are passed.
             *
             * @property Boolean
             */
            show: {
                type: [Number, Boolean],
                default: true
            }

        },

        methods: {

            dismiss() {
                transition(this.$el).then(delay => {
                    this.$emit('dismissed');
                });

                this.$emit('update:visible', this.isVisible = false);
            }

        },

        mounted() {
            if(typeof this.show === 'number') {
                const el = this.$el.querySelector('.progress-bar');

                this.$emit('dismiss-countdown', this.dismissCount = this.show);

                const interval = setInterval(() => {
                    this.$emit('dismiss-countdown', this.dismissCount -= 1);

                    if(!this.dismissCount) {
                        clearInterval(interval);
                        transition(el).then(delay => this.dismiss());
                    }
                }, 1000);
            }
        },

        data() {
            return {
                dismissCount: this.show,
                isVisible: this.show
            };
        }

    };

    /* script */
                const __vue_script__$4 = script$5;
                
    /* template */
    var __vue_render__$4 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        {
          staticClass: "alert",
          class: _vm.mergeClasses(_vm.variantClass, {
            show: _vm.isVisible,
            fade: _vm.fade
          }),
          attrs: { role: "alert" }
        },
        [
          _vm.title || _vm.heading
            ? _c("alert-heading", [_vm._v(_vm._s(_vm.title || _vm.heading))])
            : _vm._e(),
          _vm._v(" "),
          _vm._t("default"),
          _vm._v(" "),
          _vm.dismissible
            ? _c("alert-close", {
                on: {
                  click: function($event) {
                    _vm.dismiss();
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          typeof _vm.show === "number"
            ? _c("progress-bar", {
                staticClass: "my-3",
                attrs: {
                  variant: _vm.variant,
                  height: 5,
                  value: _vm.dismissCount,
                  max: _vm.show
                }
              })
            : _vm._e()
        ],
        2
      )
    };
    var __vue_staticRenderFns__$4 = [];
    __vue_render__$4._withStripped = true;

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
      

      
      var Alert = normalizeComponent(
        { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
        __vue_inject_styles__$4,
        __vue_script__$4,
        __vue_scope_id__$4,
        __vue_is_functional_template__$4,
        __vue_module_identifier__$4,
        undefined,
        undefined
      );

    //
    //
    //
    //

    var script$6 = {

        name: 'alert-link'

    };

    /* script */
                const __vue_script__$5 = script$6;
                
    /* template */
    var __vue_render__$5 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("a", { staticClass: "alert-link" }, [_vm._t("default")], 2)
    };
    var __vue_staticRenderFns__$5 = [];
    __vue_render__$5._withStripped = true;

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
      

      
      normalizeComponent(
        { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
        __vue_inject_styles__$5,
        __vue_script__$5,
        __vue_scope_id__$5,
        __vue_is_functional_template__$5,
        __vue_module_identifier__$5,
        undefined,
        undefined
      );

    var FormComponent = {
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
      mixins: [FormEvents],
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
    };

    /*!
     * Font Awesome Free 5.5.0 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */
    var noop$2 = function noop() {};

    var _WINDOW = {};
    var _DOCUMENT = {};
    var _PERFORMANCE = { mark: noop$2, measure: noop$2 };

    try {
      if (typeof window !== 'undefined') _WINDOW = window;
      if (typeof document !== 'undefined') _DOCUMENT = document;
      if (typeof performance !== 'undefined') _PERFORMANCE = performance;
    } catch (e) {}

    var _ref = _WINDOW.navigator || {};
    var _ref$userAgent = _ref.userAgent;
    var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

    var WINDOW = _WINDOW;
    var DOCUMENT = _DOCUMENT;
    var PERFORMANCE = _PERFORMANCE;

    var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
    var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

    var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
    var DEFAULT_FAMILY_PREFIX = 'fa';
    var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
    var DATA_FA_I2SVG = 'data-fa-i2svg';

    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();



    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };



    var slicedToArray = function () {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      return function (arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();

    var initial = WINDOW.FontAwesomeConfig || {};

    function getAttrConfig(attr) {
      var element = DOCUMENT.querySelector('script[' + attr + ']');

      if (element) {
        return element.getAttribute(attr);
      }
    }

    function coerce(val) {
      // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
      // We'll assume that this is an indication that it should be toggled to true
      // For example <script data-search-pseudo-elements src="..."></script>
      if (val === '') return true;
      if (val === 'false') return false;
      if (val === 'true') return true;
      return val;
    }

    if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
      var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];

      attrs.forEach(function (_ref) {
        var _ref2 = slicedToArray(_ref, 2),
            attr = _ref2[0],
            key = _ref2[1];

        var val = coerce(getAttrConfig(attr));

        if (val !== undefined && val !== null) {
          initial[key] = val;
        }
      });
    }

    var _default = _extends({
      familyPrefix: DEFAULT_FAMILY_PREFIX,
      replacementClass: DEFAULT_REPLACEMENT_CLASS,
      autoReplaceSvg: true,
      autoAddCss: true,
      autoA11y: true,
      searchPseudoElements: false,
      observeMutations: true,
      keepOriginalSource: true,
      measurePerformance: false,
      showMissingIcons: true
    }, initial);

    if (!_default.autoReplaceSvg) _default.observeMutations = false;

    var config$1 = _extends({}, _default);

    WINDOW.FontAwesomeConfig = config$1;

    var w = WINDOW || {};

    if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
    if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
    if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
    if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

    var namespace = w[NAMESPACE_IDENTIFIER];

    var functions = [];
    var listener = function listener() {
      DOCUMENT.removeEventListener('DOMContentLoaded', listener);
      loaded = 1;
      functions.map(function (fn) {
        return fn();
      });
    };

    var loaded = false;

    if (IS_DOM) {
      loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

      if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
    }

    var meaninglessTransform = {
      size: 16,
      x: 0,
      y: 0,
      rotate: 0,
      flipX: false,
      flipY: false
    };



    function insertCss(css) {
      if (!css || !IS_DOM) {
        return;
      }

      var style = DOCUMENT.createElement('style');
      style.setAttribute('type', 'text/css');
      style.innerHTML = css;

      var headChildren = DOCUMENT.head.childNodes;
      var beforeChild = null;

      for (var i = headChildren.length - 1; i > -1; i--) {
        var child = headChildren[i];
        var tagName = (child.tagName || '').toUpperCase();
        if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
          beforeChild = child;
        }
      }

      DOCUMENT.head.insertBefore(style, beforeChild);

      return css;
    }

    var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function nextUniqueId() {
      var size = 12;
      var id = '';
      while (size-- > 0) {
        id += idPool[Math.random() * 62 | 0];
      }
      return id;
    }

    function htmlEscape(str) {
      return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function joinAttributes(attributes) {
      return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
        return acc + (attributeName + '="' + htmlEscape(attributes[attributeName]) + '" ');
      }, '').trim();
    }

    function joinStyles(styles) {
      return Object.keys(styles || {}).reduce(function (acc, styleName) {
        return acc + (styleName + ': ' + styles[styleName] + ';');
      }, '');
    }

    function transformIsMeaningful(transform) {
      return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
    }

    function transformForSvg(_ref) {
      var transform = _ref.transform,
          containerWidth = _ref.containerWidth,
          iconWidth = _ref.iconWidth;

      var outer = {
        transform: 'translate(' + containerWidth / 2 + ' 256)'
      };
      var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
      var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
      var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
      var inner = {
        transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
      };
      var path = {
        transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
      };
      return {
        outer: outer,
        inner: inner,
        path: path
      };
    }

    var ALL_SPACE = {
      x: 0,
      y: 0,
      width: '100%',
      height: '100%'
    };

    var makeIconMasking = function (_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          mask = _ref.mask,
          transform = _ref.transform;
      var mainWidth = main.width,
          mainPath = main.icon;
      var maskWidth = mask.width,
          maskPath = mask.icon;


      var trans = transformForSvg({ transform: transform, containerWidth: maskWidth, iconWidth: mainWidth });

      var maskRect = {
        tag: 'rect',
        attributes: _extends({}, ALL_SPACE, {
          fill: 'white'
        })
      };
      var maskInnerGroup = {
        tag: 'g',
        attributes: _extends({}, trans.inner),
        children: [{ tag: 'path', attributes: _extends({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
      };
      var maskOuterGroup = {
        tag: 'g',
        attributes: _extends({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = 'mask-' + nextUniqueId();
      var clipId = 'clip-' + nextUniqueId();
      var maskTag = {
        tag: 'mask',
        attributes: _extends({}, ALL_SPACE, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: 'defs',
        children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [maskPath] }, maskTag]
      };

      children.push(defs, { tag: 'rect', attributes: _extends({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE) });

      return {
        children: children,
        attributes: attributes
      };
    };

    var makeIconStandard = function (_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          transform = _ref.transform,
          styles = _ref.styles;

      var styleString = joinStyles(styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      if (transformIsMeaningful(transform)) {
        var trans = transformForSvg({ transform: transform, containerWidth: main.width, iconWidth: main.width });
        children.push({
          tag: 'g',
          attributes: _extends({}, trans.outer),
          children: [{
            tag: 'g',
            attributes: _extends({}, trans.inner),
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: _extends({}, main.icon.attributes, trans.path)
            }]
          }]
        });
      } else {
        children.push(main.icon);
      }

      return {
        children: children,
        attributes: attributes
      };
    };

    var asIcon = function (_ref) {
      var children = _ref.children,
          main = _ref.main,
          mask = _ref.mask,
          attributes = _ref.attributes,
          styles = _ref.styles,
          transform = _ref.transform;

      if (transformIsMeaningful(transform) && main.found && !mask.found) {
        var width = main.width,
            height = main.height;

        var offset = {
          x: width / height / 2,
          y: 0.5
        };
        attributes['style'] = joinStyles(_extends({}, styles, {
          'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
        }));
      }

      return [{
        tag: 'svg',
        attributes: attributes,
        children: children
      }];
    };

    var asSymbol = function (_ref) {
      var prefix = _ref.prefix,
          iconName = _ref.iconName,
          children = _ref.children,
          attributes = _ref.attributes,
          symbol = _ref.symbol;

      var id = symbol === true ? prefix + '-' + config$1.familyPrefix + '-' + iconName : symbol;

      return [{
        tag: 'svg',
        attributes: {
          style: 'display: none;'
        },
        children: [{
          tag: 'symbol',
          attributes: _extends({}, attributes, { id: id }),
          children: children
        }]
      }];
    };

    function makeInlineSvgAbstract(params) {
      var _params$icons = params.icons,
          main = _params$icons.main,
          mask = _params$icons.mask,
          prefix = params.prefix,
          iconName = params.iconName,
          transform = params.transform,
          symbol = params.symbol,
          title = params.title,
          extra = params.extra,
          _params$watchable = params.watchable,
          watchable = _params$watchable === undefined ? false : _params$watchable;

      var _ref = mask.found ? mask : main,
          width = _ref.width,
          height = _ref.height;

      var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
      var attrClass = [config$1.replacementClass, iconName ? config$1.familyPrefix + '-' + iconName : '', widthClass].filter(function (c) {
        return extra.classes.indexOf(c) === -1;
      }).concat(extra.classes).join(' ');

      var content = {
        children: [],
        attributes: _extends({}, extra.attributes, {
          'data-prefix': prefix,
          'data-icon': iconName,
          'class': attrClass,
          'role': 'img',
          'xmlns': 'http://www.w3.org/2000/svg',
          'viewBox': '0 0 ' + width + ' ' + height
        })
      };

      if (watchable) {
        content.attributes[DATA_FA_I2SVG] = '';
      }

      if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId() }, children: [title] });

      var args = _extends({}, content, {
        prefix: prefix,
        iconName: iconName,
        main: main,
        mask: mask,
        transform: transform,
        symbol: symbol,
        styles: extra.styles
      });

      var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
          children = _ref2.children,
          attributes = _ref2.attributes;

      args.children = children;
      args.attributes = attributes;

      if (symbol) {
        return asSymbol(args);
      } else {
        return asIcon(args);
      }
    }

    var noop$2$1 = function noop() {};
    var p = config$1.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : { mark: noop$2$1, measure: noop$2$1 };

    /**
     * Internal helper to bind a function known to have 4 arguments
     * to a given context.
     */
    var bindInternal4 = function bindInternal4 (func, thisContext) {
      return function (a, b, c, d) {
        return func.call(thisContext, a, b, c, d);
      };
    };



    /**
     * # Reduce
     *
     * A fast object `.reduce()` implementation.
     *
     * @param  {Object}   subject      The object to reduce over.
     * @param  {Function} fn           The reducer function.
     * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
     * @param  {Object}   thisContext  The context for the reducer.
     * @return {mixed}                 The final result.
     */
    var reduce = function fastReduceObject (subject, fn, initialValue, thisContext) {
      var keys = Object.keys(subject),
          length = keys.length,
          iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
          i, key, result;

      if (initialValue === undefined) {
        i = 1;
        result = subject[keys[0]];
      }
      else {
        i = 0;
        result = initialValue;
      }

      for (; i < length; i++) {
        key = keys[i];
        result = iterator(result, subject[key], key, subject);
      }

      return result;
    };

    var styles$2 = namespace.styles;
    var shims = namespace.shims;


    var _byUnicode = {};
    var _byLigature = {};
    var _byOldName = {};

    var build = function build() {
      var lookup = function lookup(reducer) {
        return reduce(styles$2, function (o, style, prefix) {
          o[prefix] = reduce(style, reducer, {});
          return o;
        }, {});
      };

      _byUnicode = lookup(function (acc, icon, iconName) {
        acc[icon[3]] = iconName;

        return acc;
      });

      _byLigature = lookup(function (acc, icon, iconName) {
        var ligatures = icon[2];

        acc[iconName] = iconName;

        ligatures.forEach(function (ligature) {
          acc[ligature] = iconName;
        });

        return acc;
      });

      var hasRegular = 'far' in styles$2;

      _byOldName = reduce(shims, function (acc, shim) {
        var oldName = shim[0];
        var prefix = shim[1];
        var iconName = shim[2];

        if (prefix === 'far' && !hasRegular) {
          prefix = 'fas';
        }

        acc[oldName] = { prefix: prefix, iconName: iconName };

        return acc;
      }, {});
    };

    build();

    var styles$1 = namespace.styles;

    function iconFromMapping(mapping, prefix, iconName) {
      if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
        return {
          prefix: prefix,
          iconName: iconName,
          icon: mapping[prefix][iconName]
        };
      }
    }

    function toHtml(abstractNodes) {
      var tag = abstractNodes.tag,
          _abstractNodes$attrib = abstractNodes.attributes,
          attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
          _abstractNodes$childr = abstractNodes.children,
          children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;


      if (typeof abstractNodes === 'string') {
        return htmlEscape(abstractNodes);
      } else {
        return '<' + tag + ' ' + joinAttributes(attributes) + '>' + children.map(toHtml).join('') + '</' + tag + '>';
      }
    }

    var parseTransformString = function parseTransformString(transformString) {
      var transform = {
        size: 16,
        x: 0,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 0
      };

      if (!transformString) {
        return transform;
      } else {
        return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
          var parts = n.toLowerCase().split('-');
          var first = parts[0];
          var rest = parts.slice(1).join('-');

          if (first && rest === 'h') {
            acc.flipX = true;
            return acc;
          }

          if (first && rest === 'v') {
            acc.flipY = true;
            return acc;
          }

          rest = parseFloat(rest);

          if (isNaN(rest)) {
            return acc;
          }

          switch (first) {
            case 'grow':
              acc.size = acc.size + rest;
              break;
            case 'shrink':
              acc.size = acc.size - rest;
              break;
            case 'left':
              acc.x = acc.x - rest;
              break;
            case 'right':
              acc.x = acc.x + rest;
              break;
            case 'up':
              acc.y = acc.y - rest;
              break;
            case 'down':
              acc.y = acc.y + rest;
              break;
            case 'rotate':
              acc.rotate = acc.rotate + rest;
              break;
          }

          return acc;
        }, transform);
      }
    };

    function MissingIcon(error) {
      this.name = 'MissingIcon';
      this.message = error || 'Icon unavailable';
      this.stack = new Error().stack;
    }

    MissingIcon.prototype = Object.create(Error.prototype);
    MissingIcon.prototype.constructor = MissingIcon;

    var FILL = { fill: 'currentColor' };
    var ANIMATION_BASE = {
      attributeType: 'XML',
      repeatCount: 'indefinite',
      dur: '2s'
    };
    var RING = {
      tag: 'path',
      attributes: _extends({}, FILL, {
        d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
      })
    };
    var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
      attributeName: 'opacity'
    });
    var DOT = {
      tag: 'circle',
      attributes: _extends({}, FILL, {
        cx: '256',
        cy: '364',
        r: '28'
      }),
      children: [{ tag: 'animate', attributes: _extends({}, ANIMATION_BASE, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }) }]
    };
    var QUESTION = {
      tag: 'path',
      attributes: _extends({}, FILL, {
        opacity: '1',
        d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
      }),
      children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }) }]
    };
    var EXCLAMATION = {
      tag: 'path',
      attributes: _extends({}, FILL, {
        opacity: '0',
        d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
      }),
      children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }) }]
    };

    var styles = namespace.styles;

    var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n";

    var css$1 = function () {
      var dfp = DEFAULT_FAMILY_PREFIX;
      var drc = DEFAULT_REPLACEMENT_CLASS;
      var fp = config$1.familyPrefix;
      var rc = config$1.replacementClass;
      var s = baseStyles;

      if (fp !== dfp || rc !== drc) {
        var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
        var rPatt = new RegExp('\\.' + drc, 'g');

        s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
      }

      return s;
    };

    function define(prefix, icons) {
      var normalized = Object.keys(icons).reduce(function (acc, iconName) {
        var icon = icons[iconName];
        var expanded = !!icon.icon;

        if (expanded) {
          acc[icon.iconName] = icon.icon;
        } else {
          acc[iconName] = icon;
        }
        return acc;
      }, {});

      if (typeof namespace.hooks.addPack === 'function') {
        namespace.hooks.addPack(prefix, normalized);
      } else {
        namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
      }

      /**
       * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
       * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
       * for `fas` so we'll easy the upgrade process for our users by automatically defining
       * this as well.
       */
      if (prefix === 'fas') {
        define('fa', icons);
      }
    }

    var Library = function () {
      function Library() {
        classCallCheck(this, Library);

        this.definitions = {};
      }

      createClass(Library, [{
        key: 'add',
        value: function add() {
          var _this = this;

          for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
            definitions[_key] = arguments[_key];
          }

          var additions = definitions.reduce(this._pullDefinitions, {});

          Object.keys(additions).forEach(function (key) {
            _this.definitions[key] = _extends({}, _this.definitions[key] || {}, additions[key]);
            define(key, additions[key]);
            build();
          });
        }
      }, {
        key: 'reset',
        value: function reset() {
          this.definitions = {};
        }
      }, {
        key: '_pullDefinitions',
        value: function _pullDefinitions(additions, definition) {
          var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;

          Object.keys(normalized).map(function (key) {
            var _normalized$key = normalized[key],
                prefix = _normalized$key.prefix,
                iconName = _normalized$key.iconName,
                icon = _normalized$key.icon;


            if (!additions[prefix]) additions[prefix] = {};

            additions[prefix][iconName] = icon;
          });

          return additions;
        }
      }]);
      return Library;
    }();

    function prepIcon(icon) {
      var width = icon[0];
      var height = icon[1];
      var vectorData = icon.slice(4);

      return {
        found: true,
        width: width,
        height: height,
        icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
      };
    }

    function ensureCss() {
      if (config$1.autoAddCss && !_cssInserted) {
        insertCss(css$1());
        _cssInserted = true;
      }
    }

    function apiObject(val, abstractCreator) {
      Object.defineProperty(val, 'abstract', {
        get: abstractCreator
      });

      Object.defineProperty(val, 'html', {
        get: function get() {
          return val.abstract.map(function (a) {
            return toHtml(a);
          });
        }
      });

      Object.defineProperty(val, 'node', {
        get: function get() {
          if (!IS_DOM) return;

          var container = DOCUMENT.createElement('div');
          container.innerHTML = val.html;
          return container.children;
        }
      });

      return val;
    }

    function findIconDefinition(params) {
      var _params$prefix = params.prefix,
          prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
          iconName = params.iconName;


      if (!iconName) return;

      return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
    }

    function resolveIcons(next) {
      return function (maybeIconDefinition) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});

        var mask = params.mask;


        if (mask) {
          mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
        }

        return next(iconDefinition, _extends({}, params, { mask: mask }));
      };
    }

    var library = new Library();

    var _cssInserted = false;

    var parse = {
      transform: function transform(transformString) {
        return parseTransformString(transformString);
      }
    };

    var icon = resolveIcons(function (iconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$transform = params.transform,
          transform = _params$transform === undefined ? meaninglessTransform : _params$transform,
          _params$symbol = params.symbol,
          symbol = _params$symbol === undefined ? false : _params$symbol,
          _params$mask = params.mask,
          mask = _params$mask === undefined ? null : _params$mask,
          _params$title = params.title,
          title = _params$title === undefined ? null : _params$title,
          _params$classes = params.classes,
          classes = _params$classes === undefined ? [] : _params$classes,
          _params$attributes = params.attributes,
          attributes = _params$attributes === undefined ? {} : _params$attributes,
          _params$styles = params.styles,
          styles = _params$styles === undefined ? {} : _params$styles;


      if (!iconDefinition) return;

      var prefix = iconDefinition.prefix,
          iconName = iconDefinition.iconName,
          icon = iconDefinition.icon;


      return apiObject(_extends({ type: 'icon' }, iconDefinition), function () {
        ensureCss();

        if (config$1.autoA11y) {
          if (title) {
            attributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
          } else {
            attributes['aria-hidden'] = 'true';
          }
        }

        return makeInlineSvgAbstract({
          icons: {
            main: prepIcon(icon),
            mask: mask ? prepIcon(mask.icon) : { found: false, width: null, height: null, icon: {} }
          },
          prefix: prefix,
          iconName: iconName,
          transform: _extends({}, meaninglessTransform, transform),
          symbol: symbol,
          title: title,
          extra: {
            attributes: attributes,
            styles: styles,
            classes: classes
          }
        });
      });
    });

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global$1 !== 'undefined' ? global$1 : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var humps = createCommonjsModule(function (module) {
    (function(global) {

      var _processKeys = function(convert, obj, options) {
        if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
          return obj;
        }

        var output,
            i = 0,
            l = 0;

        if(_isArray(obj)) {
          output = [];
          for(l=obj.length; i<l; i++) {
            output.push(_processKeys(convert, obj[i], options));
          }
        }
        else {
          output = {};
          for(var key in obj) {
            if(Object.prototype.hasOwnProperty.call(obj, key)) {
              output[convert(key, options)] = _processKeys(convert, obj[key], options);
            }
          }
        }
        return output;
      };

      // String conversion methods

      var separateWords = function(string, options) {
        options = options || {};
        var separator = options.separator || '_';
        var split = options.split || /(?=[A-Z])/;

        return string.split(split).join(separator);
      };

      var camelize = function(string) {
        if (_isNumerical(string)) {
          return string;
        }
        string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
          return chr ? chr.toUpperCase() : '';
        });
        // Ensure 1st char is always lowercase
        return string.substr(0, 1).toLowerCase() + string.substr(1);
      };

      var pascalize = function(string) {
        var camelized = camelize(string);
        // Ensure 1st char is always uppercase
        return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
      };

      var decamelize = function(string, options) {
        return separateWords(string, options).toLowerCase();
      };

      // Utilities
      // Taken from Underscore.js

      var toString = Object.prototype.toString;

      var _isFunction = function(obj) {
        return typeof(obj) === 'function';
      };
      var _isObject = function(obj) {
        return obj === Object(obj);
      };
      var _isArray = function(obj) {
        return toString.call(obj) == '[object Array]';
      };
      var _isDate = function(obj) {
        return toString.call(obj) == '[object Date]';
      };
      var _isRegExp = function(obj) {
        return toString.call(obj) == '[object RegExp]';
      };
      var _isBoolean = function(obj) {
        return toString.call(obj) == '[object Boolean]';
      };

      // Performant way to determine if obj coerces to a number
      var _isNumerical = function(obj) {
        obj = obj - 0;
        return obj === obj;
      };

      // Sets up function which handles processing keys
      // allowing the convert function to be modified by a callback
      var _processor = function(convert, options) {
        var callback = options && 'process' in options ? options.process : options;

        if(typeof(callback) !== 'function') {
          return convert;
        }

        return function(string, options) {
          return callback(string, convert, options);
        }
      };

      var humps = {
        camelize: camelize,
        decamelize: decamelize,
        pascalize: pascalize,
        depascalize: decamelize,
        camelizeKeys: function(object, options) {
          return _processKeys(_processor(camelize, options), object);
        },
        decamelizeKeys: function(object, options) {
          return _processKeys(_processor(decamelize, options), object, options);
        },
        pascalizeKeys: function(object, options) {
          return _processKeys(_processor(pascalize, options), object);
        },
        depascalizeKeys: function () {
          return this.decamelizeKeys.apply(this, arguments);
        }
      };

      if (module.exports) {
        module.exports = humps;
      } else {
        global.humps = humps;
      }

    })(commonjsGlobal);
    });

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var defineProperty = function (obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    };

    var _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    var objectWithoutProperties = function (obj, keys) {
      var target = {};

      for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
      }

      return target;
    };

    function styleToObject(style) {
      return style.split(';').map(function (s) {
        return s.trim();
      }).filter(function (s) {
        return s;
      }).reduce(function (acc, pair) {
        var i = pair.indexOf(':');
        var prop = humps.camelize(pair.slice(0, i));
        var value = pair.slice(i + 1).trim();

        acc[prop] = value;

        return acc;
      }, {});
    }

    function classToObject(cls) {
      return cls.split(/\s+/).reduce(function (acc, c) {
        acc[c] = true;

        return acc;
      }, {});
    }

    function combineClassObjects() {
      for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
        objs[_key] = arguments[_key];
      }

      return objs.reduce(function (acc, obj) {
        if (Array.isArray(obj)) {
          acc = acc.concat(obj);
        } else {
          acc.push(obj);
        }

        return acc;
      }, []);
    }

    function convert(h, element) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var children = (element.children || []).map(convert.bind(null, h));

      var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
        var val = element.attributes[key];

        switch (key) {
          case 'class':
            acc['class'] = classToObject(val);
            break;
          case 'style':
            acc['style'] = styleToObject(val);
            break;
          default:
            acc.attrs[key] = val;
        }

        return acc;
      }, { 'class': {}, style: {}, attrs: {} });

      var _data$class = data.class,
          dClass = _data$class === undefined ? {} : _data$class,
          _data$style = data.style,
          dStyle = _data$style === undefined ? {} : _data$style,
          _data$attrs = data.attrs,
          dAttrs = _data$attrs === undefined ? {} : _data$attrs,
          remainingData = objectWithoutProperties(data, ['class', 'style', 'attrs']);


      if (typeof element === 'string') {
        return element;
      } else {
        return h(element.tag, _extends$1({
          class: combineClassObjects(mixins.class, dClass),
          style: _extends$1({}, mixins.style, dStyle),
          attrs: _extends$1({}, mixins.attrs, dAttrs)
        }, remainingData, {
          props: props
        }), children);
      }
    }

    var PRODUCTION$1 = false;

    try {
      PRODUCTION$1 = "production" === 'production';
    } catch (e) {}

    function log () {
      if (!PRODUCTION$1 && console && typeof console.error === 'function') {
        var _console;

        (_console = console).error.apply(_console, arguments);
      }
    }

    function objectWithKey(key, value) {
      return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
    }

    function classList(props) {
      var _classes;

      var classes = (_classes = {
        'fa-spin': props.spin,
        'fa-pulse': props.pulse,
        'fa-fw': props.fixedWidth,
        'fa-border': props.border,
        'fa-li': props.listItem,
        'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
        'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
      }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), _classes);

      return Object.keys(classes).map(function (key) {
        return classes[key] ? key : null;
      }).filter(function (key) {
        return key;
      });
    }

    function normalizeIconArgs(icon$$1) {
      if (icon$$1 === null) {
        return null;
      }

      if ((typeof icon$$1 === 'undefined' ? 'undefined' : _typeof(icon$$1)) === 'object' && icon$$1.prefix && icon$$1.iconName) {
        return icon$$1;
      }

      if (Array.isArray(icon$$1) && icon$$1.length === 2) {
        return { prefix: icon$$1[0], iconName: icon$$1[1] };
      }

      if (typeof icon$$1 === 'string') {
        return { prefix: 'fas', iconName: icon$$1 };
      }
    }

    var FontAwesomeIcon = {
      name: 'FontAwesomeIcon',

      functional: true,

      props: {
        border: {
          type: Boolean,
          default: false
        },
        fixedWidth: {
          type: Boolean,
          default: false
        },
        flip: {
          type: String,
          default: null,
          validator: function validator(value) {
            return ['horizontal', 'vertical', 'both'].indexOf(value) > -1;
          }
        },
        icon: {
          type: [Object, Array, String],
          required: true
        },
        mask: {
          type: [Object, Array, String],
          default: null
        },
        listItem: {
          type: Boolean,
          default: false
        },
        pull: {
          type: String,
          default: null,
          validator: function validator(value) {
            return ['right', 'left'].indexOf(value) > -1;
          }
        },
        pulse: {
          type: Boolean,
          default: false
        },
        rotation: {
          type: Number,
          default: null,
          validator: function validator(value) {
            return [90, 180, 270].indexOf(value) > -1;
          }
        },
        size: {
          type: String,
          default: null,
          validator: function validator(value) {
            return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
          }
        },
        spin: {
          type: Boolean,
          default: false
        },
        transform: {
          type: [String, Object],
          default: null
        },
        symbol: {
          type: [Boolean, String],
          default: false
        }
      },

      render: function render(createElement, context) {
        var props = context.props;
        var iconArgs = props.icon,
            maskArgs = props.mask,
            symbol = props.symbol;

        var icon$$1 = normalizeIconArgs(iconArgs);
        var classes = objectWithKey('classes', classList(props));
        var transform = objectWithKey('transform', typeof props.transform === 'string' ? parse.transform(props.transform) : props.transform);
        var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));

        var renderedIcon = icon(icon$$1, _extends$1({}, classes, transform, mask, { symbol: symbol }));

        if (!renderedIcon) {
          return log('Could not find one or more icon(s)', icon$$1, mask);
        }

        var abstract = renderedIcon.abstract;

        var convertCurry = convert.bind(null, createElement);

        return convertCurry(abstract[0], {}, context.data);
      }
    };

    const CALLBACKS = {};

    function id(callback) {
        return findIndex$1(CALLBACKS, compare => {
            return callback.toString() === compare.toString();
        });
    }

    function restart(callback, milliseconds) {
        stop(id(callback));
        start(callback, milliseconds);
    }

    function stop(id) {
        clearTimeout(id);
        delete CALLBACKS[id];
    }

    function start(callback, milliseconds) {
        CALLBACKS[setTimeout(callback, milliseconds)] = callback;
    }

    function wait(milliseconds, callback) {
        return new Promise((resolve, reject) => {
            function resolver(resolver, response) {
                return resolver(response);
            }
            restart(wrap(callback, callback => {
                return callback(wrap(resolve, resolver), wrap(reject, resolver));
            }), milliseconds);
        });
    }

    function elapsed(milliseconds, callback, elapsedCallback) {
        let hasElapsed = false;

        function start() {
            return setTimeout(() => {
                hasElapsed = true;

                if(isFunction(elapsedCallback)) {
                    elapsedCallback();
                }
            }, milliseconds);
        }

        function stop() {
            clearTimeout(interval);
        }

        const interval = start(); const promise = new Promise((resolve, reject) => {
            function resolver(resolver, response) {
                return resolver(response || hasElapsed);
            }
            callback(wrap(resolve, resolver), wrap(reject, resolver));
        });

        return promise.finally(stop, stop);
    }

    var commonjsGlobal$1 = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
    }

    function createCommonjsModule$1(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var faCcJcb = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var prefix = 'fab';
    var iconName = 'cc-jcb';
    var width = 576;
    var height = 512;
    var ligatures = [];
    var unicode = 'f24b';
    var svgPathData = 'M431.5 244.3V212c41.2 0 38.5.2 38.5.2 7.3 1.3 13.3 7.3 13.3 16 0 8.8-6 14.5-13.3 15.8-1.2.4-3.3.3-38.5.3zm42.8 20.2c-2.8-.7-3.3-.5-42.8-.5v35c39.6 0 40 .2 42.8-.5 7.5-1.5 13.5-8 13.5-17 0-8.7-6-15.5-13.5-17zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM182 192.3h-57c0 67.1 10.7 109.7-35.8 109.7-19.5 0-38.8-5.7-57.2-14.8v28c30 8.3 68 8.3 68 8.3 97.9 0 82-47.7 82-131.2zm178.5 4.5c-63.4-16-165-14.9-165 59.3 0 77.1 108.2 73.6 165 59.2V287C312.9 311.7 253 309 253 256s59.8-55.6 107.5-31.2v-28zM544 286.5c0-18.5-16.5-30.5-38-32v-.8c19.5-2.7 30.3-15.5 30.3-30.2 0-19-15.7-30-37-31 0 0 6.3-.3-120.3-.3v127.5h122.7c24.3.1 42.3-12.9 42.3-33.2z';

    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]};

    exports.faCcJcb = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    });

    unwrapExports(faCcJcb);
    var faCcJcb_1 = faCcJcb.definition;
    var faCcJcb_2 = faCcJcb.faCcJcb;
    var faCcJcb_3 = faCcJcb.prefix;
    var faCcJcb_4 = faCcJcb.iconName;
    var faCcJcb_5 = faCcJcb.width;
    var faCcJcb_6 = faCcJcb.height;
    var faCcJcb_7 = faCcJcb.ligatures;
    var faCcJcb_8 = faCcJcb.unicode;
    var faCcJcb_9 = faCcJcb.svgPathData;

    var faCcVisa = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var prefix = 'fab';
    var iconName = 'cc-visa';
    var width = 576;
    var height = 512;
    var ligatures = [];
    var unicode = 'f1f0';
    var svgPathData = 'M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z';

    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]};

    exports.faCcVisa = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    });

    unwrapExports(faCcVisa);
    var faCcVisa_1 = faCcVisa.definition;
    var faCcVisa_2 = faCcVisa.faCcVisa;
    var faCcVisa_3 = faCcVisa.prefix;
    var faCcVisa_4 = faCcVisa.iconName;
    var faCcVisa_5 = faCcVisa.width;
    var faCcVisa_6 = faCcVisa.height;
    var faCcVisa_7 = faCcVisa.ligatures;
    var faCcVisa_8 = faCcVisa.unicode;
    var faCcVisa_9 = faCcVisa.svgPathData;

    var faCCAmex = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var prefix = 'fab';
    var iconName = 'cc-amex';
    var width = 576;
    var height = 512;
    var ligatures = [];
    var unicode = 'f1f3';
    var svgPathData = 'M576 255.4c-37.9-.2-44.2-.9-54.5 5v-5c-45.3 0-53.5-1.7-64.9 5.2v-5.2h-78.2v5.1c-11.4-6.5-21.4-5.1-75.7-5.1v5.6c-6.3-3.7-14.5-5.6-24.3-5.6h-58c-3.5 3.8-12.5 13.7-15.7 17.2-12.7-14.1-10.5-11.6-15.5-17.2h-83.1v92.3h82c3.3-3.5 12.9-13.9 16.1-17.4 12.7 14.3 10.3 11.7 15.4 17.4h48.9c0-14.7.1-8.3.1-23 11.5.2 24.3-.2 34.3-6.2 0 13.9-.1 17.1-.1 29.2h39.6c0-18.5.1-7.4.1-25.3 6.2 0 7.7 0 9.4.1.1 1.3 0 0 0 25.2 152.8 0 145.9 1.1 156.7-4.5v4.5c34.8 0 54.8 2.2 67.5-6.1V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V228.3h26.6c4.2-10.1 2.2-5.3 6.4-15.3h19.2c4.2 10 2.2 5.2 6.4 15.3h52.9v-11.4c2.2 5 1.1 2.5 5.1 11.4h29.5c2.4-5.5 2.6-5.8 5.1-11.4v11.4h135.5v-25.1c6.4 0 8-.1 9.8.2 0 0-.2 10.9.1 24.8h66.5v-8.9c7.4 5.9 17.4 8.9 29.7 8.9h26.8c4.2-10.1 2.2-5.3 6.4-15.3h19c6.5 15 .2.5 6.6 15.3h52.8v-21.9c11.8 19.7 7.8 12.9 13.2 21.9h41.6v-92h-39.9v18.4c-12.2-20.2-6.3-10.4-11.2-18.4h-43.3v20.6c-6.2-14.6-4.6-10.8-8.8-20.6h-32.4c-.4 0-2.3.2-2.3-.3h-27.6c-12.8 0-23.1 3.2-30.7 9.3v-9.3h-39.9v5.3c-10.8-6.1-20.7-5.1-64.4-5.3-.1 0-11.6-.1-11.6 0h-103c-2.5 6.1-6.8 16.4-12.6 30-2.8-6-11-23.8-13.9-30h-46V157c-7.4-17.4-4.7-11-9-21.1H22.9c-3.4 7.9-13.7 32-23.1 53.9V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48v175.4zm-186.6-80.6c-.3.2-1.4 2.2-1.4 7.6 0 6 .9 7.7 1.1 7.9.2.1 1.1.5 3.4.5l7.3-16.9c-1.1 0-2.1-.1-3.1-.1-5.6 0-7 .7-7.3 1zm-19.9 130.9c9.2 3.3 11 9.5 11 18.4l-.1 13.8h-16.6l.1-11.5c0-11.8-3.8-13.8-14.8-13.8h-17.6l-.1 25.3h-16.6l.1-69.3h39.4c13 0 27.1 2.3 27.1 18.7-.1 7.6-4.2 15.3-11.9 18.4zm-6.3-15.4c0-6.4-5.6-7.4-10.7-7.4h-21v15.6h20.7c5.6 0 11-1.3 11-8.2zm181.7-7.1H575v-14.6h-32.9c-12.8 0-23.8 6.6-23.8 20.7 0 33 42.7 12.8 42.7 27.4 0 5.1-4.3 6.4-8.4 6.4h-32l-.1 14.8h32c8.4 0 17.6-1.8 22.5-8.9v-25.8c-10.5-13.8-39.3-1.3-39.3-13.5 0-5.8 4.6-6.5 9.2-6.5zm-99.2-.3v-14.3h-55.2l-.1 69.3h55.2l.1-14.3-38.6-.3v-13.8H445v-14.1h-37.8v-12.5h38.5zm42.2 40.1h-32.2l-.1 14.8h32.2c14.8 0 26.2-5.6 26.2-22 0-33.2-42.9-11.2-42.9-26.3 0-5.6 4.9-6.4 9.2-6.4h30.4v-14.6h-33.2c-12.8 0-23.5 6.6-23.5 20.7 0 33 42.7 12.5 42.7 27.4-.1 5.4-4.7 6.4-8.8 6.4zm-78.1-158.7c-17.4-.3-33.2-4.1-33.2 19.7 0 11.8 2.8 19.9 16.1 19.9h7.4l23.5-54.5h24.8l27.9 65.4v-65.4h25.3l29.1 48.1v-48.1h16.9v69H524l-31.2-51.9v51.9h-33.7l-6.6-15.3h-34.3l-6.4 15.3h-19.2c-22.8 0-33-11.8-33-34 0-23.3 10.5-35.3 34-35.3h16.1v15.2zm14.3 24.5h22.8l-11.2-27.6-11.6 27.6zm-72.6-39.6h-16.9v69.3h16.9v-69.3zm-38.1 37.3c9.5 3.3 11 9.2 11 18.4v13.5h-16.6c-.3-14.8 3.6-25.1-14.8-25.1h-18v25.1h-16.4v-69.3l39.1.3c13.3 0 27.4 2 27.4 18.4.1 8-4.3 15.7-11.7 18.7zm-6.7-15.3c0-6.4-5.6-7.4-10.7-7.4h-21v15.3h20.7c5.7 0 11-1.3 11-7.9zm-59.5-7.4v-14.6h-55.5v69.3h55.5v-14.3h-38.9v-13.8h37.8v-14.1h-37.8v-12.5h38.9zm-84.6 54.7v-54.2l-24 54.2H124l-24-54.2v54.2H66.2l-6.4-15.3H25.3l-6.4 15.3H1l29.7-69.3h24.5l28.1 65.7v-65.7h27.1l21.7 47 19.7-47h27.6v69.3h-16.8zM53.9 188.8l-11.5-27.6-11.2 27.6h22.7zm253 102.5c0 27.9-30.4 23.3-49.3 23.3l-.1 23.3h-32.2l-20.4-23-21.3 23h-65.4l.1-69.3h66.5l20.5 22.8 21-22.8H279c15.6 0 27.9 5.4 27.9 22.7zm-112.7 11.8l-17.9-20.2h-41.7v12.5h36.3v14.1h-36.3v13.8h40.6l19-20.2zM241 276l-25.3 27.4 25.3 28.1V276zm48.3 15.3c0-6.1-4.6-8.4-10.2-8.4h-21.5v17.6h21.2c5.9 0 10.5-2.8 10.5-9.2z';

    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]};

    exports.faCcAmex = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    });

    unwrapExports(faCCAmex);
    var faCCAmex_1 = faCCAmex.definition;
    var faCCAmex_2 = faCCAmex.faCcAmex;
    var faCCAmex_3 = faCCAmex.prefix;
    var faCCAmex_4 = faCCAmex.iconName;
    var faCCAmex_5 = faCCAmex.width;
    var faCCAmex_6 = faCCAmex.height;
    var faCCAmex_7 = faCCAmex.ligatures;
    var faCCAmex_8 = faCCAmex.unicode;
    var faCCAmex_9 = faCCAmex.svgPathData;

    var faCcDiscover = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var prefix = 'fab';
    var iconName = 'cc-discover';
    var width = 576;
    var height = 512;
    var ligatures = [];
    var unicode = 'f1f2';
    var svgPathData = 'M83 212.1c0 7.9-3.2 15.5-8.9 20.7-4.9 4.4-11.6 6.4-21.9 6.4H48V185h4.2c10.3 0 16.7 1.7 21.9 6.6 5.7 5 8.9 12.6 8.9 20.5zM504.8 184h-4.9v24.9h4.7c10.3 0 15.8-4.4 15.8-12.8 0-7.9-5.5-12.1-15.6-12.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM428 253h45.3v-13.8H444V217h28.3v-13.8H444V185h29.3v-14H428v82zm-86.2-82l35 84.2h8.6l35.5-84.2h-17.5l-22.2 55.2-21.9-55.2h-17.5zm-83 41.6c0 24.6 19.9 44.6 44.6 44.6 24.6 0 44.6-19.9 44.6-44.6 0-24.6-19.9-44.6-44.6-44.6-24.6 0-44.6 19.9-44.6 44.6zm-68-.5c0 32.5 33.6 52.5 63.3 38.2v-19c-19.3 19.3-46.8 5.8-46.8-19.2 0-23.7 26.7-39.1 46.8-19v-19c-30.2-15-63.3 6.8-63.3 38zm-33.9 28.3c-7.6 0-13.8-3.7-17.5-10.8l-10.3 9.9c17.8 26.1 56.6 18.2 56.6-11.3 0-13.1-5.4-19-23.6-25.6-9.6-3.4-12.3-5.9-12.3-10.3 0-8.7 14.5-14.1 24.9-2.5l8.4-10.8c-19.1-17.1-49.7-8.9-49.7 14.3 0 11.3 5.2 17.2 20.2 22.7 25.7 9.1 14.7 24.4 3.3 24.4zm-57.4-28.3c0-24.1-18-41.1-44.1-41.1H32v82h23.4c30.9 0 44.1-22.4 44.1-40.9zm23.4-41.1h-16v82h16v-82zM544 288c-33.3 20.8-226.4 124.4-416 160h401c8.2 0 15-6.8 15-15V288zm0-35l-25.9-34.5c12.1-2.5 18.7-10.6 18.7-23.2 0-28.5-30.3-24.4-52.9-24.4v82h16v-32.8h2.2l22.2 32.8H544z';

    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]};

    exports.faCcDiscover = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    });

    unwrapExports(faCcDiscover);
    var faCcDiscover_1 = faCcDiscover.definition;
    var faCcDiscover_2 = faCcDiscover.faCcDiscover;
    var faCcDiscover_3 = faCcDiscover.prefix;
    var faCcDiscover_4 = faCcDiscover.iconName;
    var faCcDiscover_5 = faCcDiscover.width;
    var faCcDiscover_6 = faCcDiscover.height;
    var faCcDiscover_7 = faCcDiscover.ligatures;
    var faCcDiscover_8 = faCcDiscover.unicode;
    var faCcDiscover_9 = faCcDiscover.svgPathData;

    var faCcMastercard = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var prefix = 'fab';
    var iconName = 'cc-mastercard';
    var width = 576;
    var height = 512;
    var ligatures = [];
    var unicode = 'f1f1';
    var svgPathData = 'M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z';

    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]};

    exports.faCcMastercard = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    });

    unwrapExports(faCcMastercard);
    var faCcMastercard_1 = faCcMastercard.definition;
    var faCcMastercard_2 = faCcMastercard.faCcMastercard;
    var faCcMastercard_3 = faCcMastercard.prefix;
    var faCcMastercard_4 = faCcMastercard.iconName;
    var faCcMastercard_5 = faCcMastercard.width;
    var faCcMastercard_6 = faCcMastercard.height;
    var faCcMastercard_7 = faCcMastercard.ligatures;
    var faCcMastercard_8 = faCcMastercard.unicode;
    var faCcMastercard_9 = faCcMastercard.svgPathData;

    var faCcDinersClub = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var prefix = 'fab';
    var iconName = 'cc-diners-club';
    var width = 576;
    var height = 512;
    var ligatures = [];
    var unicode = 'f24c';
    var svgPathData = 'M239.7 79.9c-96.9 0-175.8 78.6-175.8 175.8 0 96.9 78.9 175.8 175.8 175.8 97.2 0 175.8-78.9 175.8-175.8 0-97.2-78.6-175.8-175.8-175.8zm-39.9 279.6c-41.7-15.9-71.4-56.4-71.4-103.8s29.7-87.9 71.4-104.1v207.9zm79.8.3V151.6c41.7 16.2 71.4 56.7 71.4 104.1s-29.7 87.9-71.4 104.1zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM329.7 448h-90.3c-106.2 0-193.8-85.5-193.8-190.2C45.6 143.2 133.2 64 239.4 64h90.3c105 0 200.7 79.2 200.7 193.8 0 104.7-95.7 190.2-200.7 190.2z';

    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]};

    exports.faCcDinersClub = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    });

    unwrapExports(faCcDinersClub);
    var faCcDinersClub_1 = faCcDinersClub.definition;
    var faCcDinersClub_2 = faCcDinersClub.faCcDinersClub;
    var faCcDinersClub_3 = faCcDinersClub.prefix;
    var faCcDinersClub_4 = faCcDinersClub.iconName;
    var faCcDinersClub_5 = faCcDinersClub.width;
    var faCcDinersClub_6 = faCcDinersClub.height;
    var faCcDinersClub_7 = faCcDinersClub.ligatures;
    var faCcDinersClub_8 = faCcDinersClub.unicode;
    var faCcDinersClub_9 = faCcDinersClub.svgPathData;

    var faExclamationTriangle = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var prefix = 'fas';
    var iconName = 'exclamation-triangle';
    var width = 576;
    var height = 512;
    var ligatures = [];
    var unicode = 'f071';
    var svgPathData = 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z';

    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]};

    exports.faExclamationTriangle = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    });

    unwrapExports(faExclamationTriangle);
    var faExclamationTriangle_1 = faExclamationTriangle.definition;
    var faExclamationTriangle_2 = faExclamationTriangle.faExclamationTriangle;
    var faExclamationTriangle_3 = faExclamationTriangle.prefix;
    var faExclamationTriangle_4 = faExclamationTriangle.iconName;
    var faExclamationTriangle_5 = faExclamationTriangle.width;
    var faExclamationTriangle_6 = faExclamationTriangle.height;
    var faExclamationTriangle_7 = faExclamationTriangle.ligatures;
    var faExclamationTriangle_8 = faExclamationTriangle.unicode;
    var faExclamationTriangle_9 = faExclamationTriangle.svgPathData;

    var faCreditCard = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var prefix = 'far';
    var iconName = 'credit-card';
    var width = 576;
    var height = 512;
    var ligatures = [];
    var unicode = 'f09d';
    var svgPathData = 'M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z';

    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]};

    exports.faCreditCard = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    });

    unwrapExports(faCreditCard);
    var faCreditCard_1 = faCreditCard.definition;
    var faCreditCard_2 = faCreditCard.faCreditCard;
    var faCreditCard_3 = faCreditCard.prefix;
    var faCreditCard_4 = faCreditCard.iconName;
    var faCreditCard_5 = faCreditCard.width;
    var faCreditCard_6 = faCreditCard.height;
    var faCreditCard_7 = faCreditCard.ligatures;
    var faCreditCard_8 = faCreditCard.unicode;
    var faCreditCard_9 = faCreditCard.svgPathData;

    var faCreditCard$2 = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var prefix = 'fas';
    var iconName = 'credit-card';
    var width = 576;
    var height = 512;
    var ligatures = [];
    var unicode = 'f09d';
    var svgPathData = 'M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z';

    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]};

    exports.faCreditCard = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    });

    unwrapExports(faCreditCard$2);
    var faCreditCard_1$1 = faCreditCard$2.definition;
    var faCreditCard_2$1 = faCreditCard$2.faCreditCard;
    var faCreditCard_3$1 = faCreditCard$2.prefix;
    var faCreditCard_4$1 = faCreditCard$2.iconName;
    var faCreditCard_5$1 = faCreditCard$2.width;
    var faCreditCard_6$1 = faCreditCard$2.height;
    var faCreditCard_7$1 = faCreditCard$2.ligatures;
    var faCreditCard_8$1 = faCreditCard$2.unicode;
    var faCreditCard_9$1 = faCreditCard$2.svgPathData;

    /*!
     * Font Awesome Free 5.5.0 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */
    var noop$3 = function noop() {};

    var _WINDOW$1 = {};
    var _DOCUMENT$1 = {};
    var _PERFORMANCE$1 = { mark: noop$3, measure: noop$3 };

    try {
      if (typeof window !== 'undefined') _WINDOW$1 = window;
      if (typeof document !== 'undefined') _DOCUMENT$1 = document;
      if (typeof performance !== 'undefined') _PERFORMANCE$1 = performance;
    } catch (e) {}

    var _ref$1 = _WINDOW$1.navigator || {};
    var _ref$userAgent$1 = _ref$1.userAgent;
    var userAgent$1 = _ref$userAgent$1 === undefined ? '' : _ref$userAgent$1;

    var WINDOW$1 = _WINDOW$1;
    var DOCUMENT$1 = _DOCUMENT$1;
    var PERFORMANCE$1 = _PERFORMANCE$1;

    var IS_DOM$1 = !!DOCUMENT$1.documentElement && !!DOCUMENT$1.head && typeof DOCUMENT$1.addEventListener === 'function' && typeof DOCUMENT$1.createElement === 'function';
    var IS_IE$1 = ~userAgent$1.indexOf('MSIE') || ~userAgent$1.indexOf('Trident/');

    var NAMESPACE_IDENTIFIER$1 = '___FONT_AWESOME___';
    var DEFAULT_FAMILY_PREFIX$1 = 'fa';
    var DEFAULT_REPLACEMENT_CLASS$1 = 'svg-inline--fa';
    var DATA_FA_I2SVG$1 = 'data-fa-i2svg';

    var classCallCheck$1 = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    var createClass$1 = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();



    var _extends$2 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };



    var slicedToArray$1 = function () {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      return function (arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();

    var initial$1 = WINDOW$1.FontAwesomeConfig || {};

    function getAttrConfig$1(attr) {
      var element = DOCUMENT$1.querySelector('script[' + attr + ']');

      if (element) {
        return element.getAttribute(attr);
      }
    }

    function coerce$1(val) {
      // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
      // We'll assume that this is an indication that it should be toggled to true
      // For example <script data-search-pseudo-elements src="..."></script>
      if (val === '') return true;
      if (val === 'false') return false;
      if (val === 'true') return true;
      return val;
    }

    if (DOCUMENT$1 && typeof DOCUMENT$1.querySelector === 'function') {
      var attrs$1 = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];

      attrs$1.forEach(function (_ref) {
        var _ref2 = slicedToArray$1(_ref, 2),
            attr = _ref2[0],
            key = _ref2[1];

        var val = coerce$1(getAttrConfig$1(attr));

        if (val !== undefined && val !== null) {
          initial$1[key] = val;
        }
      });
    }

    var _default$1 = _extends$2({
      familyPrefix: DEFAULT_FAMILY_PREFIX$1,
      replacementClass: DEFAULT_REPLACEMENT_CLASS$1,
      autoReplaceSvg: true,
      autoAddCss: true,
      autoA11y: true,
      searchPseudoElements: false,
      observeMutations: true,
      keepOriginalSource: true,
      measurePerformance: false,
      showMissingIcons: true
    }, initial$1);

    if (!_default$1.autoReplaceSvg) _default$1.observeMutations = false;

    var config$2 = _extends$2({}, _default$1);

    WINDOW$1.FontAwesomeConfig = config$2;

    var w$1 = WINDOW$1 || {};

    if (!w$1[NAMESPACE_IDENTIFIER$1]) w$1[NAMESPACE_IDENTIFIER$1] = {};
    if (!w$1[NAMESPACE_IDENTIFIER$1].styles) w$1[NAMESPACE_IDENTIFIER$1].styles = {};
    if (!w$1[NAMESPACE_IDENTIFIER$1].hooks) w$1[NAMESPACE_IDENTIFIER$1].hooks = {};
    if (!w$1[NAMESPACE_IDENTIFIER$1].shims) w$1[NAMESPACE_IDENTIFIER$1].shims = [];

    var namespace$1 = w$1[NAMESPACE_IDENTIFIER$1];

    var functions$1 = [];
    var listener$1 = function listener() {
      DOCUMENT$1.removeEventListener('DOMContentLoaded', listener);
      loaded$1 = 1;
      functions$1.map(function (fn) {
        return fn();
      });
    };

    var loaded$1 = false;

    if (IS_DOM$1) {
      loaded$1 = (DOCUMENT$1.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT$1.readyState);

      if (!loaded$1) DOCUMENT$1.addEventListener('DOMContentLoaded', listener$1);
    }

    var meaninglessTransform$1 = {
      size: 16,
      x: 0,
      y: 0,
      rotate: 0,
      flipX: false,
      flipY: false
    };



    function insertCss$1(css) {
      if (!css || !IS_DOM$1) {
        return;
      }

      var style = DOCUMENT$1.createElement('style');
      style.setAttribute('type', 'text/css');
      style.innerHTML = css;

      var headChildren = DOCUMENT$1.head.childNodes;
      var beforeChild = null;

      for (var i = headChildren.length - 1; i > -1; i--) {
        var child = headChildren[i];
        var tagName = (child.tagName || '').toUpperCase();
        if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
          beforeChild = child;
        }
      }

      DOCUMENT$1.head.insertBefore(style, beforeChild);

      return css;
    }

    var idPool$1 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function nextUniqueId$1() {
      var size = 12;
      var id = '';
      while (size-- > 0) {
        id += idPool$1[Math.random() * 62 | 0];
      }
      return id;
    }

    function htmlEscape$1(str) {
      return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function joinAttributes$1(attributes) {
      return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
        return acc + (attributeName + '="' + htmlEscape$1(attributes[attributeName]) + '" ');
      }, '').trim();
    }

    function joinStyles$1(styles) {
      return Object.keys(styles || {}).reduce(function (acc, styleName) {
        return acc + (styleName + ': ' + styles[styleName] + ';');
      }, '');
    }

    function transformIsMeaningful$1(transform) {
      return transform.size !== meaninglessTransform$1.size || transform.x !== meaninglessTransform$1.x || transform.y !== meaninglessTransform$1.y || transform.rotate !== meaninglessTransform$1.rotate || transform.flipX || transform.flipY;
    }

    function transformForSvg$1(_ref) {
      var transform = _ref.transform,
          containerWidth = _ref.containerWidth,
          iconWidth = _ref.iconWidth;

      var outer = {
        transform: 'translate(' + containerWidth / 2 + ' 256)'
      };
      var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
      var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
      var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
      var inner = {
        transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
      };
      var path = {
        transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
      };
      return {
        outer: outer,
        inner: inner,
        path: path
      };
    }

    var ALL_SPACE$1 = {
      x: 0,
      y: 0,
      width: '100%',
      height: '100%'
    };

    var makeIconMasking$1 = function (_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          mask = _ref.mask,
          transform = _ref.transform;
      var mainWidth = main.width,
          mainPath = main.icon;
      var maskWidth = mask.width,
          maskPath = mask.icon;


      var trans = transformForSvg$1({ transform: transform, containerWidth: maskWidth, iconWidth: mainWidth });

      var maskRect = {
        tag: 'rect',
        attributes: _extends$2({}, ALL_SPACE$1, {
          fill: 'white'
        })
      };
      var maskInnerGroup = {
        tag: 'g',
        attributes: _extends$2({}, trans.inner),
        children: [{ tag: 'path', attributes: _extends$2({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
      };
      var maskOuterGroup = {
        tag: 'g',
        attributes: _extends$2({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = 'mask-' + nextUniqueId$1();
      var clipId = 'clip-' + nextUniqueId$1();
      var maskTag = {
        tag: 'mask',
        attributes: _extends$2({}, ALL_SPACE$1, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: 'defs',
        children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [maskPath] }, maskTag]
      };

      children.push(defs, { tag: 'rect', attributes: _extends$2({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE$1) });

      return {
        children: children,
        attributes: attributes
      };
    };

    var makeIconStandard$1 = function (_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          transform = _ref.transform,
          styles = _ref.styles;

      var styleString = joinStyles$1(styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      if (transformIsMeaningful$1(transform)) {
        var trans = transformForSvg$1({ transform: transform, containerWidth: main.width, iconWidth: main.width });
        children.push({
          tag: 'g',
          attributes: _extends$2({}, trans.outer),
          children: [{
            tag: 'g',
            attributes: _extends$2({}, trans.inner),
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: _extends$2({}, main.icon.attributes, trans.path)
            }]
          }]
        });
      } else {
        children.push(main.icon);
      }

      return {
        children: children,
        attributes: attributes
      };
    };

    var asIcon$1 = function (_ref) {
      var children = _ref.children,
          main = _ref.main,
          mask = _ref.mask,
          attributes = _ref.attributes,
          styles = _ref.styles,
          transform = _ref.transform;

      if (transformIsMeaningful$1(transform) && main.found && !mask.found) {
        var width = main.width,
            height = main.height;

        var offset = {
          x: width / height / 2,
          y: 0.5
        };
        attributes['style'] = joinStyles$1(_extends$2({}, styles, {
          'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
        }));
      }

      return [{
        tag: 'svg',
        attributes: attributes,
        children: children
      }];
    };

    var asSymbol$1 = function (_ref) {
      var prefix = _ref.prefix,
          iconName = _ref.iconName,
          children = _ref.children,
          attributes = _ref.attributes,
          symbol = _ref.symbol;

      var id = symbol === true ? prefix + '-' + config$2.familyPrefix + '-' + iconName : symbol;

      return [{
        tag: 'svg',
        attributes: {
          style: 'display: none;'
        },
        children: [{
          tag: 'symbol',
          attributes: _extends$2({}, attributes, { id: id }),
          children: children
        }]
      }];
    };

    function makeInlineSvgAbstract$1(params) {
      var _params$icons = params.icons,
          main = _params$icons.main,
          mask = _params$icons.mask,
          prefix = params.prefix,
          iconName = params.iconName,
          transform = params.transform,
          symbol = params.symbol,
          title = params.title,
          extra = params.extra,
          _params$watchable = params.watchable,
          watchable = _params$watchable === undefined ? false : _params$watchable;

      var _ref = mask.found ? mask : main,
          width = _ref.width,
          height = _ref.height;

      var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
      var attrClass = [config$2.replacementClass, iconName ? config$2.familyPrefix + '-' + iconName : '', widthClass].filter(function (c) {
        return extra.classes.indexOf(c) === -1;
      }).concat(extra.classes).join(' ');

      var content = {
        children: [],
        attributes: _extends$2({}, extra.attributes, {
          'data-prefix': prefix,
          'data-icon': iconName,
          'class': attrClass,
          'role': 'img',
          'xmlns': 'http://www.w3.org/2000/svg',
          'viewBox': '0 0 ' + width + ' ' + height
        })
      };

      if (watchable) {
        content.attributes[DATA_FA_I2SVG$1] = '';
      }

      if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId$1() }, children: [title] });

      var args = _extends$2({}, content, {
        prefix: prefix,
        iconName: iconName,
        main: main,
        mask: mask,
        transform: transform,
        symbol: symbol,
        styles: extra.styles
      });

      var _ref2 = mask.found && main.found ? makeIconMasking$1(args) : makeIconStandard$1(args),
          children = _ref2.children,
          attributes = _ref2.attributes;

      args.children = children;
      args.attributes = attributes;

      if (symbol) {
        return asSymbol$1(args);
      } else {
        return asIcon$1(args);
      }
    }

    var noop$2$2 = function noop() {};
    var p$1 = config$2.measurePerformance && PERFORMANCE$1 && PERFORMANCE$1.mark && PERFORMANCE$1.measure ? PERFORMANCE$1 : { mark: noop$2$2, measure: noop$2$2 };

    /**
     * Internal helper to bind a function known to have 4 arguments
     * to a given context.
     */
    var bindInternal4$1 = function bindInternal4 (func, thisContext) {
      return function (a, b, c, d) {
        return func.call(thisContext, a, b, c, d);
      };
    };



    /**
     * # Reduce
     *
     * A fast object `.reduce()` implementation.
     *
     * @param  {Object}   subject      The object to reduce over.
     * @param  {Function} fn           The reducer function.
     * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
     * @param  {Object}   thisContext  The context for the reducer.
     * @return {mixed}                 The final result.
     */
    var reduce$1 = function fastReduceObject (subject, fn, initialValue, thisContext) {
      var keys = Object.keys(subject),
          length = keys.length,
          iterator = thisContext !== undefined ? bindInternal4$1(fn, thisContext) : fn,
          i, key, result;

      if (initialValue === undefined) {
        i = 1;
        result = subject[keys[0]];
      }
      else {
        i = 0;
        result = initialValue;
      }

      for (; i < length; i++) {
        key = keys[i];
        result = iterator(result, subject[key], key, subject);
      }

      return result;
    };

    var styles$2$1 = namespace$1.styles;
    var shims$1 = namespace$1.shims;


    var _byUnicode$1 = {};
    var _byLigature$1 = {};
    var _byOldName$1 = {};

    var build$1 = function build() {
      var lookup = function lookup(reducer) {
        return reduce$1(styles$2$1, function (o, style, prefix) {
          o[prefix] = reduce$1(style, reducer, {});
          return o;
        }, {});
      };

      _byUnicode$1 = lookup(function (acc, icon, iconName) {
        acc[icon[3]] = iconName;

        return acc;
      });

      _byLigature$1 = lookup(function (acc, icon, iconName) {
        var ligatures = icon[2];

        acc[iconName] = iconName;

        ligatures.forEach(function (ligature) {
          acc[ligature] = iconName;
        });

        return acc;
      });

      var hasRegular = 'far' in styles$2$1;

      _byOldName$1 = reduce$1(shims$1, function (acc, shim) {
        var oldName = shim[0];
        var prefix = shim[1];
        var iconName = shim[2];

        if (prefix === 'far' && !hasRegular) {
          prefix = 'fas';
        }

        acc[oldName] = { prefix: prefix, iconName: iconName };

        return acc;
      }, {});
    };

    build$1();

    var styles$1$1 = namespace$1.styles;

    function iconFromMapping$1(mapping, prefix, iconName) {
      if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
        return {
          prefix: prefix,
          iconName: iconName,
          icon: mapping[prefix][iconName]
        };
      }
    }

    function toHtml$1(abstractNodes) {
      var tag = abstractNodes.tag,
          _abstractNodes$attrib = abstractNodes.attributes,
          attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
          _abstractNodes$childr = abstractNodes.children,
          children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;


      if (typeof abstractNodes === 'string') {
        return htmlEscape$1(abstractNodes);
      } else {
        return '<' + tag + ' ' + joinAttributes$1(attributes) + '>' + children.map(toHtml$1).join('') + '</' + tag + '>';
      }
    }

    var parseTransformString$1 = function parseTransformString(transformString) {
      var transform = {
        size: 16,
        x: 0,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 0
      };

      if (!transformString) {
        return transform;
      } else {
        return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
          var parts = n.toLowerCase().split('-');
          var first = parts[0];
          var rest = parts.slice(1).join('-');

          if (first && rest === 'h') {
            acc.flipX = true;
            return acc;
          }

          if (first && rest === 'v') {
            acc.flipY = true;
            return acc;
          }

          rest = parseFloat(rest);

          if (isNaN(rest)) {
            return acc;
          }

          switch (first) {
            case 'grow':
              acc.size = acc.size + rest;
              break;
            case 'shrink':
              acc.size = acc.size - rest;
              break;
            case 'left':
              acc.x = acc.x - rest;
              break;
            case 'right':
              acc.x = acc.x + rest;
              break;
            case 'up':
              acc.y = acc.y - rest;
              break;
            case 'down':
              acc.y = acc.y + rest;
              break;
            case 'rotate':
              acc.rotate = acc.rotate + rest;
              break;
          }

          return acc;
        }, transform);
      }
    };

    function MissingIcon$1(error) {
      this.name = 'MissingIcon';
      this.message = error || 'Icon unavailable';
      this.stack = new Error().stack;
    }

    MissingIcon$1.prototype = Object.create(Error.prototype);
    MissingIcon$1.prototype.constructor = MissingIcon$1;

    var FILL$1 = { fill: 'currentColor' };
    var ANIMATION_BASE$1 = {
      attributeType: 'XML',
      repeatCount: 'indefinite',
      dur: '2s'
    };
    var RING$1 = {
      tag: 'path',
      attributes: _extends$2({}, FILL$1, {
        d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
      })
    };
    var OPACITY_ANIMATE$1 = _extends$2({}, ANIMATION_BASE$1, {
      attributeName: 'opacity'
    });
    var DOT$1 = {
      tag: 'circle',
      attributes: _extends$2({}, FILL$1, {
        cx: '256',
        cy: '364',
        r: '28'
      }),
      children: [{ tag: 'animate', attributes: _extends$2({}, ANIMATION_BASE$1, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends$2({}, OPACITY_ANIMATE$1, { values: '1;0;1;1;0;1;' }) }]
    };
    var QUESTION$1 = {
      tag: 'path',
      attributes: _extends$2({}, FILL$1, {
        opacity: '1',
        d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
      }),
      children: [{ tag: 'animate', attributes: _extends$2({}, OPACITY_ANIMATE$1, { values: '1;0;0;0;0;1;' }) }]
    };
    var EXCLAMATION$1 = {
      tag: 'path',
      attributes: _extends$2({}, FILL$1, {
        opacity: '0',
        d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
      }),
      children: [{ tag: 'animate', attributes: _extends$2({}, OPACITY_ANIMATE$1, { values: '0;0;1;1;0;0;' }) }]
    };

    var styles$3 = namespace$1.styles;

    var baseStyles$1 = "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n";

    var css$2 = function () {
      var dfp = DEFAULT_FAMILY_PREFIX$1;
      var drc = DEFAULT_REPLACEMENT_CLASS$1;
      var fp = config$2.familyPrefix;
      var rc = config$2.replacementClass;
      var s = baseStyles$1;

      if (fp !== dfp || rc !== drc) {
        var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
        var rPatt = new RegExp('\\.' + drc, 'g');

        s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
      }

      return s;
    };

    function define$1(prefix, icons) {
      var normalized = Object.keys(icons).reduce(function (acc, iconName) {
        var icon = icons[iconName];
        var expanded = !!icon.icon;

        if (expanded) {
          acc[icon.iconName] = icon.icon;
        } else {
          acc[iconName] = icon;
        }
        return acc;
      }, {});

      if (typeof namespace$1.hooks.addPack === 'function') {
        namespace$1.hooks.addPack(prefix, normalized);
      } else {
        namespace$1.styles[prefix] = _extends$2({}, namespace$1.styles[prefix] || {}, normalized);
      }

      /**
       * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
       * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
       * for `fas` so we'll easy the upgrade process for our users by automatically defining
       * this as well.
       */
      if (prefix === 'fas') {
        define$1('fa', icons);
      }
    }

    var Library$1 = function () {
      function Library() {
        classCallCheck$1(this, Library);

        this.definitions = {};
      }

      createClass$1(Library, [{
        key: 'add',
        value: function add() {
          var _this = this;

          for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
            definitions[_key] = arguments[_key];
          }

          var additions = definitions.reduce(this._pullDefinitions, {});

          Object.keys(additions).forEach(function (key) {
            _this.definitions[key] = _extends$2({}, _this.definitions[key] || {}, additions[key]);
            define$1(key, additions[key]);
            build$1();
          });
        }
      }, {
        key: 'reset',
        value: function reset() {
          this.definitions = {};
        }
      }, {
        key: '_pullDefinitions',
        value: function _pullDefinitions(additions, definition) {
          var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;

          Object.keys(normalized).map(function (key) {
            var _normalized$key = normalized[key],
                prefix = _normalized$key.prefix,
                iconName = _normalized$key.iconName,
                icon = _normalized$key.icon;


            if (!additions[prefix]) additions[prefix] = {};

            additions[prefix][iconName] = icon;
          });

          return additions;
        }
      }]);
      return Library;
    }();

    function prepIcon$1(icon) {
      var width = icon[0];
      var height = icon[1];
      var vectorData = icon.slice(4);

      return {
        found: true,
        width: width,
        height: height,
        icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
      };
    }

    function ensureCss$1() {
      if (config$2.autoAddCss && !_cssInserted$1) {
        insertCss$1(css$2());
        _cssInserted$1 = true;
      }
    }

    function apiObject$1(val, abstractCreator) {
      Object.defineProperty(val, 'abstract', {
        get: abstractCreator
      });

      Object.defineProperty(val, 'html', {
        get: function get() {
          return val.abstract.map(function (a) {
            return toHtml$1(a);
          });
        }
      });

      Object.defineProperty(val, 'node', {
        get: function get() {
          if (!IS_DOM$1) return;

          var container = DOCUMENT$1.createElement('div');
          container.innerHTML = val.html;
          return container.children;
        }
      });

      return val;
    }

    function findIconDefinition$1(params) {
      var _params$prefix = params.prefix,
          prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
          iconName = params.iconName;


      if (!iconName) return;

      return iconFromMapping$1(library$1.definitions, prefix, iconName) || iconFromMapping$1(namespace$1.styles, prefix, iconName);
    }

    function resolveIcons$1(next) {
      return function (maybeIconDefinition) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition$1(maybeIconDefinition || {});

        var mask = params.mask;


        if (mask) {
          mask = (mask || {}).icon ? mask : findIconDefinition$1(mask || {});
        }

        return next(iconDefinition, _extends$2({}, params, { mask: mask }));
      };
    }

    var library$1 = new Library$1();

    var _cssInserted$1 = false;

    var parse$1 = {
      transform: function transform(transformString) {
        return parseTransformString$1(transformString);
      }
    };

    var icon$1 = resolveIcons$1(function (iconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$transform = params.transform,
          transform = _params$transform === undefined ? meaninglessTransform$1 : _params$transform,
          _params$symbol = params.symbol,
          symbol = _params$symbol === undefined ? false : _params$symbol,
          _params$mask = params.mask,
          mask = _params$mask === undefined ? null : _params$mask,
          _params$title = params.title,
          title = _params$title === undefined ? null : _params$title,
          _params$classes = params.classes,
          classes = _params$classes === undefined ? [] : _params$classes,
          _params$attributes = params.attributes,
          attributes = _params$attributes === undefined ? {} : _params$attributes,
          _params$styles = params.styles,
          styles = _params$styles === undefined ? {} : _params$styles;


      if (!iconDefinition) return;

      var prefix = iconDefinition.prefix,
          iconName = iconDefinition.iconName,
          icon = iconDefinition.icon;


      return apiObject$1(_extends$2({ type: 'icon' }, iconDefinition), function () {
        ensureCss$1();

        if (config$2.autoA11y) {
          if (title) {
            attributes['aria-labelledby'] = config$2.replacementClass + '-title-' + nextUniqueId$1();
          } else {
            attributes['aria-hidden'] = 'true';
          }
        }

        return makeInlineSvgAbstract$1({
          icons: {
            main: prepIcon$1(icon),
            mask: mask ? prepIcon$1(mask.icon) : { found: false, width: null, height: null, icon: {} }
          },
          prefix: prefix,
          iconName: iconName,
          transform: _extends$2({}, meaninglessTransform$1, transform),
          symbol: symbol,
          title: title,
          extra: {
            attributes: attributes,
            styles: styles,
            classes: classes
          }
        });
      });
    });

    // Load the icons

    library$1.add(
        faCcJcb_2,
        faCcVisa_2,
        faCCAmex_2,
        faCcDiscover_2,
        faCcMastercard_2,
        faCcDinersClub_2,
        faCreditCard_2,
        faCreditCard_2$1,
        faExclamationTriangle_2
    );

    var faPaypal = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var prefix = 'fab';
    var iconName = 'paypal';
    var width = 384;
    var height = 512;
    var ligatures = [];
    var unicode = 'f1ed';
    var svgPathData = 'M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z';

    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]};

    exports.faPaypal = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    });

    unwrapExports(faPaypal);
    var faPaypal_1 = faPaypal.definition;
    var faPaypal_2 = faPaypal.faPaypal;
    var faPaypal_3 = faPaypal.prefix;
    var faPaypal_4 = faPaypal.iconName;
    var faPaypal_5 = faPaypal.width;
    var faPaypal_6 = faPaypal.height;
    var faPaypal_7 = faPaypal.ligatures;
    var faPaypal_8 = faPaypal.unicode;
    var faPaypal_9 = faPaypal.svgPathData;

    var faApplePay = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var prefix = 'fab';
    var iconName = 'apple-pay';
    var width = 640;
    var height = 512;
    var ligatures = [];
    var unicode = 'f415';
    var svgPathData = 'M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9.3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5.1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8.4 9.3.7 11.6.7z';

    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]};

    exports.faApplePay = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    });

    unwrapExports(faApplePay);
    var faApplePay_1 = faApplePay.definition;
    var faApplePay_2 = faApplePay.faApplePay;
    var faApplePay_3 = faApplePay.prefix;
    var faApplePay_4 = faApplePay.iconName;
    var faApplePay_5 = faApplePay.width;
    var faApplePay_6 = faApplePay.height;
    var faApplePay_7 = faApplePay.ligatures;
    var faApplePay_8 = faApplePay.unicode;
    var faApplePay_9 = faApplePay.svgPathData;

    var faCheckCircle = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var prefix = 'far';
    var iconName = 'check-circle';
    var width = 512;
    var height = 512;
    var ligatures = [];
    var unicode = 'f058';
    var svgPathData = 'M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z';

    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]};

    exports.faCheckCircle = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    });

    unwrapExports(faCheckCircle);
    var faCheckCircle_1 = faCheckCircle.definition;
    var faCheckCircle_2 = faCheckCircle.faCheckCircle;
    var faCheckCircle_3 = faCheckCircle.prefix;
    var faCheckCircle_4 = faCheckCircle.iconName;
    var faCheckCircle_5 = faCheckCircle.width;
    var faCheckCircle_6 = faCheckCircle.height;
    var faCheckCircle_7 = faCheckCircle.ligatures;
    var faCheckCircle_8 = faCheckCircle.unicode;
    var faCheckCircle_9 = faCheckCircle.svgPathData;

    var faGoogleWallet = createCommonjsModule$1(function (module, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    var prefix = 'fab';
    var iconName = 'google-wallet';
    var width = 448;
    var height = 512;
    var ligatures = [];
    var unicode = 'f1ee';
    var svgPathData = 'M156.8 126.8c37.6 60.6 64.2 113.1 84.3 162.5-8.3 33.8-18.8 66.5-31.3 98.3-13.2-52.3-26.5-101.3-56-148.5 6.5-36.4 2.3-73.6 3-112.3zM109.3 200H16.1c-6.5 0-10.5 7.5-6.5 12.7C51.8 267 81.3 330.5 101.3 400h103.5c-16.2-69.7-38.7-133.7-82.5-193.5-3-4-8-6.5-13-6.5zm47.8-88c68.5 108 130 234.5 138.2 368H409c-12-138-68.4-265-143.2-368H157.1zm251.8-68.5c-1.8-6.8-8.2-11.5-15.2-11.5h-88.3c-5.3 0-9 5-7.8 10.3 13.2 46.5 22.3 95.5 26.5 146 48.2 86.2 79.7 178.3 90.6 270.8 15.8-60.5 25.3-133.5 25.3-203 0-73.6-12.1-145.1-31.1-212.6z';

    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]};

    exports.faGoogleWallet = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    });

    unwrapExports(faGoogleWallet);
    var faGoogleWallet_1 = faGoogleWallet.definition;
    var faGoogleWallet_2 = faGoogleWallet.faGoogleWallet;
    var faGoogleWallet_3 = faGoogleWallet.prefix;
    var faGoogleWallet_4 = faGoogleWallet.iconName;
    var faGoogleWallet_5 = faGoogleWallet.width;
    var faGoogleWallet_6 = faGoogleWallet.height;
    var faGoogleWallet_7 = faGoogleWallet.ligatures;
    var faGoogleWallet_8 = faGoogleWallet.unicode;
    var faGoogleWallet_9 = faGoogleWallet.svgPathData;

    // Load the icons
    library.add(faPaypal_2, faApplePay_2, faCheckCircle_2, faGoogleWallet_2);

    //
    //
    //
    //
    //
    //

    var script$7 = {

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
                const __vue_script__$6 = script$7;
                
    /* template */
    var __vue_render__$6 = function() {
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
    var __vue_staticRenderFns__$6 = [];
    __vue_render__$6._withStripped = true;

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
        { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
        __vue_inject_styles__$6,
        __vue_script__$6,
        __vue_scope_id__$6,
        __vue_is_functional_template__$6,
        __vue_module_identifier__$6,
        undefined,
        undefined
      );

    var script$8 = {

        name: 'activity-indicator-dots',

        extends: BaseType
    };

    /* script */
                const __vue_script__$7 = script$8;
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

    var script$9 = {

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
                const __vue_script__$8 = script$9;
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

    var script$a = {

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
                const __vue_script__$9 = script$a;
                
    /* template */
    var __vue_render__$7 = function() {
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
    var __vue_staticRenderFns__$7 = [];
    __vue_render__$7._withStripped = true;

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
        { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
        __vue_inject_styles__$9,
        __vue_script__$9,
        __vue_scope_id__$9,
        __vue_is_functional_template__$9,
        __vue_module_identifier__$9,
        undefined,
        undefined
      );

    var PaymentGateway = {
      components: {
        Btn,
        Icon: FontAwesomeIcon,
        Alert,
        ActivityIndicator
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
    };

    //
    var script$b = {
      name: 'stripe-credit-card',
      mixins: [PaymentGateway],

      mounted() {
        const gateway = Gateway$1(this.gateway);
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
              elapsed(500, (resolve, reject) => {
                gateway.createToken(this.$card, {
                  currency: 'usd'
                }).then(result => {
                  wait(this.activity ? 750 : 0, (resolve, reject) => {
                    if (result.error) {
                      reject(this.errors.token = [event.error.message]);
                    } else {
                      this.form.token = result.token.id;
                      this.pageType.enableSubmitButton(); // this.$dispatch.request('submit:enable');

                      resolve(result);
                    }
                  }).then(resolve, reject);
                });
              }, () => {
                this.activity = true;
              }).then(() => {
                this.activity = false;
              }, () => {
                this.activity = false;
              });
            }
          });
          this.loaded = true;
          this.$nextTick(() => this.$card.mount(this.$refs.input));
        });
      },

      data() {
        return {
          activity: false,
          loaded: false
        };
      }

    };

    /* script */
                const __vue_script__$a = script$b;
    /* template */
    var __vue_render__$8 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        {
          staticClass: "form-group",
          class: { "was-validated": !!_vm.errors.token }
        },
        [
          !_vm.loaded
            ? _c("div", { staticClass: "row my-5 py-1" }, [
                _c(
                  "div",
                  { staticClass: "col-xs-12" },
                  [
                    _c("activity-indicator", {
                      attrs: { size: "sm", center: true }
                    })
                  ],
                  1
                )
              ])
            : _c("label", { staticClass: "d-block mt-3" }, [
                _c(
                  "div",
                  {
                    staticClass: "stripe-field",
                    class: { "has-activity": _vm.activity }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "form-control",
                        class: { "is-invalid": !!_vm.errors.token }
                      },
                      [
                        _c("div", {
                          ref: "input",
                          staticClass: "stripe-field-input"
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "stripe-field-activity" },
                      [
                        _c("activity-indicator", {
                          attrs: { size: "xs", center: "" }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.errors.token
                  ? _c("div", {
                      staticClass: "invalid-feedback",
                      domProps: { innerHTML: _vm._s(_vm.errors.token.join("<br>")) }
                    })
                  : _vm._e()
              ])
        ]
      )
    };
    var __vue_staticRenderFns__$8 = [];
    __vue_render__$8._withStripped = true;

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
      

      
      var StripeCreditCard = normalizeComponent(
        { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
        __vue_inject_styles__$a,
        __vue_script__$a,
        __vue_scope_id__$a,
        __vue_is_functional_template__$a,
        __vue_module_identifier__$a,
        undefined,
        undefined
      );

    //

    function handleDisabledState(disable) {
      if (this.actions && !!disable) {
        this.actions.disable();
      } else if (this.actions && !disable) {
        this.actions.enable();
      }
    }

    var script$c = {
      name: 'paypal-payment-button',
      mixins: [PaymentGateway],
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

      updated() {
        if (this.shouldMountButton()) {
          this.button = Gateway$1(this.gateway).button('.paypal-payment-button', this);
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

        Gateway$1(this.gateway).script(event => {
          this.loaded = true;
        });
      },

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
      }

    };

    /* script */
                const __vue_script__$b = script$c;
    /* template */
    var __vue_render__$9 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        !_vm.loaded || _vm.submitting
          ? _c("div", { staticClass: "row my-5 py-1" }, [
              _c(
                "div",
                { staticClass: "col-xs-12" },
                [_c("activity-indicator", { attrs: { size: "sm", center: true } })],
                1
              )
            ])
          : _c(
              "div",
              [
                _vm.error
                  ? _c(
                      "alert",
                      {
                        staticClass: "d-flex align-items-center",
                        attrs: { variant: "danger" }
                      },
                      [
                        _c("icon", {
                          staticClass: "mr-2",
                          attrs: { icon: "exclamation-triangle", size: "2x" }
                        }),
                        _vm._v(" "),
                        _c("div", { domProps: { innerHTML: _vm._s(_vm.error) } })
                      ],
                      1
                    )
                  : _vm.form.payerId && _vm.form.paymentId
                    ? _c(
                        "alert",
                        {
                          staticClass: "d-flex align-items-center",
                          attrs: { variant: "success" }
                        },
                        [
                          _c("icon", {
                            staticClass: "mr-2",
                            attrs: { icon: ["far", "check-circle"], size: "2x" }
                          }),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v(
                              "Your PayPal payment information has been collected and is ready to be processed. "
                            ),
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault();
                                    _vm.removePaymentInfo($event);
                                  }
                                }
                              },
                              [_vm._v("Cancel Payment")]
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e()
              ],
              1
            ),
        _vm._v(" "),
        _c("div", {
          staticClass: "paypal-payment-button mt-2 mb-4",
          class: { disabled: _vm.disabled, "d-none": _vm.submitting }
        })
      ])
    };
    var __vue_staticRenderFns__$9 = [];
    __vue_render__$9._withStripped = true;

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
      

      
      var PaypalPaymentButton = normalizeComponent(
        { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
        __vue_inject_styles__$b,
        __vue_script__$b,
        __vue_scope_id__$b,
        __vue_is_functional_template__$b,
        __vue_module_identifier__$b,
        undefined,
        undefined
      );

    //
    var script$d = {
      name: 'stripe-payment-button',
      mixins: [PaymentGateway],
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
        const gateway = Gateway$1(this.gateway);
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

      data() {
        return {
          card: false,
          error: false,
          loaded: false,
          submitting: false,
          changingCard: false
        };
      }

    };

    /* script */
                const __vue_script__$c = script$d;
                
    /* template */
    var __vue_render__$a = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        [
          !_vm.error
            ? _c("div", [
                _vm.card
                  ? _c("div", { staticClass: "my-3" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-xs-2" }, [
                          _c(
                            "div",
                            { staticClass: "mr-6" },
                            [
                              _vm.card.brand === "Visa"
                                ? _c("icon", {
                                    attrs: {
                                      icon: ["fab", "cc-visa"],
                                      scale: "3.5"
                                    }
                                  })
                                : _vm.card.brand === "MasterCard"
                                  ? _c("icon", {
                                      attrs: {
                                        icon: ["fab", "cc-mastercard"],
                                        scale: "3.5"
                                      }
                                    })
                                  : _vm.card.brand === "American Express"
                                    ? _c("icon", {
                                        attrs: {
                                          icon: ["fab", "cc-amex"],
                                          scale: "3.5"
                                        }
                                      })
                                    : _vm.card.brand === "Discover"
                                      ? _c("icon", {
                                          attrs: {
                                            icon: ["fab", "cc-discover"],
                                            scale: "3.5"
                                          }
                                        })
                                      : _vm.card.brand === "JCB"
                                        ? _c("icon", {
                                            attrs: {
                                              icon: ["fab", "cc-jcb"],
                                              scale: "3.5"
                                            }
                                          })
                                        : _vm.card.brand === "Diners Club"
                                          ? _c("icon", {
                                              attrs: {
                                                icon: ["fab", "cc-diners-club"],
                                                scale: "3.5"
                                              }
                                            })
                                          : _c("icon", {
                                              attrs: {
                                                icon: ["far", "credit-card"],
                                                scale: "3.5"
                                              }
                                            })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xs-10" }, [
                          _c(
                            "div",
                            { staticClass: "pl-2" },
                            [
                              _c(
                                "btn",
                                {
                                  staticClass: "float-right",
                                  attrs: {
                                    type: "button",
                                    variant: "warning",
                                    disabled: _vm.submitting
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.changeCard($event);
                                    }
                                  }
                                },
                                [_vm._v("Change Card")]
                              ),
                              _vm._v(" "),
                              _vm.card.name
                                ? _c("span", [
                                    _vm._v(_vm._s(_vm.card.name)),
                                    _c("br")
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("small", [
                                _vm._v("****" + _vm._s(_vm.card.last4) + " "),
                                _c("span", { staticClass: "pl-2" }, [
                                  _vm._v(
                                    _vm._s(_vm.card.exp_month) +
                                      "/" +
                                      _vm._s(_vm.card.exp_year)
                                  )
                                ])
                              ])
                            ],
                            1
                          )
                        ])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.loaded || _vm.submitting
                  ? _c("div", { staticClass: "row my-5 py-1" }, [
                      _c(
                        "div",
                        { staticClass: "col-xs-12" },
                        [
                          _c("activity-indicator", {
                            attrs: { size: "sm", center: true }
                          })
                        ],
                        1
                      )
                    ])
                  : _c("div", [
                      _c("div", { staticClass: "stripe-payment-button mt-2 mb-4" })
                    ])
              ])
            : _c(
                "alert",
                {
                  staticClass: "d-flex align-items-center",
                  attrs: { variant: "danger" }
                },
                [
                  _c("icon", {
                    staticClass: "mr-3",
                    attrs: { icon: "exclamation-triangle", size: "2x" }
                  }),
                  _vm._v(" "),
                  _c("div", { domProps: { innerHTML: _vm._s(_vm.error.message) } })
                ],
                1
              )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$a = [];
    __vue_render__$a._withStripped = true;

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
      

      
      var StripePaymentButton = normalizeComponent(
        { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
        __vue_inject_styles__$c,
        __vue_script__$c,
        __vue_scope_id__$c,
        __vue_is_functional_template__$c,
        __vue_module_identifier__$c,
        undefined,
        undefined
      );

    var lib = createCommonjsModule$1(function (module) {
    // Generated by CoffeeScript 1.10.0
    (function() {
      var QJ, rreturn, rtrim;

      QJ = function(selector) {
        if (QJ.isDOMElement(selector)) {
          return selector;
        }
        return document.querySelectorAll(selector);
      };

      QJ.isDOMElement = function(el) {
        return el && (el.nodeName != null);
      };

      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

      QJ.trim = function(text) {
        if (text === null) {
          return "";
        } else {
          return (text + "").replace(rtrim, "");
        }
      };

      rreturn = /\r/g;

      QJ.val = function(el, val) {
        var ret;
        if (arguments.length > 1) {
          return el.value = val;
        } else {
          ret = el.value;
          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } else {
            if (ret === null) {
              return "";
            } else {
              return ret;
            }
          }
        }
      };

      QJ.preventDefault = function(eventObject) {
        if (typeof eventObject.preventDefault === "function") {
          eventObject.preventDefault();
          return;
        }
        eventObject.returnValue = false;
        return false;
      };

      QJ.normalizeEvent = function(e) {
        var original;
        original = e;
        e = {
          which: original.which != null ? original.which : void 0,
          target: original.target || original.srcElement,
          preventDefault: function() {
            return QJ.preventDefault(original);
          },
          originalEvent: original,
          data: original.data || original.detail
        };
        if (e.which == null) {
          e.which = original.charCode != null ? original.charCode : original.keyCode;
        }
        return e;
      };

      QJ.on = function(element, eventName, callback) {
        var el, i, j, len, len1, multEventName, originalCallback, ref;
        if (element.length) {
          for (i = 0, len = element.length; i < len; i++) {
            el = element[i];
            QJ.on(el, eventName, callback);
          }
          return;
        }
        if (eventName.match(" ")) {
          ref = eventName.split(" ");
          for (j = 0, len1 = ref.length; j < len1; j++) {
            multEventName = ref[j];
            QJ.on(element, multEventName, callback);
          }
          return;
        }
        originalCallback = callback;
        callback = function(e) {
          e = QJ.normalizeEvent(e);
          return originalCallback(e);
        };
        if (element.addEventListener) {
          return element.addEventListener(eventName, callback, false);
        }
        if (element.attachEvent) {
          eventName = "on" + eventName;
          return element.attachEvent(eventName, callback);
        }
        element['on' + eventName] = callback;
      };

      QJ.addClass = function(el, className) {
        var e;
        if (el.length) {
          return (function() {
            var i, len, results;
            results = [];
            for (i = 0, len = el.length; i < len; i++) {
              e = el[i];
              results.push(QJ.addClass(e, className));
            }
            return results;
          })();
        }
        if (el.classList) {
          return el.classList.add(className);
        } else {
          return el.className += ' ' + className;
        }
      };

      QJ.hasClass = function(el, className) {
        var e, hasClass, i, len;
        if (el.length) {
          hasClass = true;
          for (i = 0, len = el.length; i < len; i++) {
            e = el[i];
            hasClass = hasClass && QJ.hasClass(e, className);
          }
          return hasClass;
        }
        if (el.classList) {
          return el.classList.contains(className);
        } else {
          return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
      };

      QJ.removeClass = function(el, className) {
        var cls, e, i, len, ref, results;
        if (el.length) {
          return (function() {
            var i, len, results;
            results = [];
            for (i = 0, len = el.length; i < len; i++) {
              e = el[i];
              results.push(QJ.removeClass(e, className));
            }
            return results;
          })();
        }
        if (el.classList) {
          ref = className.split(' ');
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            cls = ref[i];
            results.push(el.classList.remove(cls));
          }
          return results;
        } else {
          return el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      };

      QJ.toggleClass = function(el, className, bool) {
        var e;
        if (el.length) {
          return (function() {
            var i, len, results;
            results = [];
            for (i = 0, len = el.length; i < len; i++) {
              e = el[i];
              results.push(QJ.toggleClass(e, className, bool));
            }
            return results;
          })();
        }
        if (bool) {
          if (!QJ.hasClass(el, className)) {
            return QJ.addClass(el, className);
          }
        } else {
          return QJ.removeClass(el, className);
        }
      };

      QJ.append = function(el, toAppend) {
        var e;
        if (el.length) {
          return (function() {
            var i, len, results;
            results = [];
            for (i = 0, len = el.length; i < len; i++) {
              e = el[i];
              results.push(QJ.append(e, toAppend));
            }
            return results;
          })();
        }
        return el.insertAdjacentHTML('beforeend', toAppend);
      };

      QJ.find = function(el, selector) {
        if (el instanceof NodeList || el instanceof Array) {
          el = el[0];
        }
        return el.querySelectorAll(selector);
      };

      QJ.trigger = function(el, name, data) {
        var ev;
        try {
          ev = new CustomEvent(name, {
            detail: data
          });
        } catch (error) {
          ev = document.createEvent('CustomEvent');
          if (ev.initCustomEvent) {
            ev.initCustomEvent(name, true, true, data);
          } else {
            ev.initEvent(name, true, true, data);
          }
        }
        return el.dispatchEvent(ev);
      };

      module.exports = QJ;

    }).call(commonjsGlobal$1);
    });

    var lib$1 = createCommonjsModule$1(function (module) {
    // Generated by CoffeeScript 1.10.0
    (function() {
      var Payment, QJ, cardFromNumber, cardFromType, cards, defaultFormat, formatBackCardNumber, formatBackExpiry, formatCardNumber, formatExpiry, formatForwardExpiry, formatForwardSlash, formatMonthExpiry, hasTextSelected, luhnCheck, reFormatCardNumber, restrictCVC, restrictCardNumber, restrictCombinedExpiry, restrictExpiry, restrictMonthExpiry, restrictNumeric, restrictYearExpiry, setCardType,
        indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

      QJ = lib;

      defaultFormat = /(\d{1,4})/g;

      cards = [
        {
          type: 'amex',
          pattern: /^3[47]/,
          format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
          length: [15],
          cvcLength: [4],
          luhn: true
        }, {
          type: 'dankort',
          pattern: /^5019/,
          format: defaultFormat,
          length: [16],
          cvcLength: [3],
          luhn: true
        }, {
          type: 'hipercard',
          pattern: /^(384100|384140|384160|606282|637095|637568|60(?!11))/,
          format: defaultFormat,
          length: [14, 15, 16, 17, 18, 19],
          cvcLength: [3],
          luhn: true
        }, {
          type: 'dinersclub',
          pattern: /^(36|38|30[0-5])/,
          format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
          length: [14],
          cvcLength: [3],
          luhn: true
        }, {
          type: 'discover',
          pattern: /^(6011|65|64[4-9]|622)/,
          format: defaultFormat,
          length: [16],
          cvcLength: [3],
          luhn: true
        }, {
          type: 'jcb',
          pattern: /^35/,
          format: defaultFormat,
          length: [16],
          cvcLength: [3],
          luhn: true
        }, {
          type: 'laser',
          pattern: /^(6706|6771|6709)/,
          format: defaultFormat,
          length: [16, 17, 18, 19],
          cvcLength: [3],
          luhn: true
        }, {
          type: 'maestro',
          pattern: /^(5018|5020|5038|6304|6703|6708|6759|676[1-3])/,
          format: defaultFormat,
          length: [12, 13, 14, 15, 16, 17, 18, 19],
          cvcLength: [3],
          luhn: true
        }, {
          type: 'mastercard',
          pattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
          format: defaultFormat,
          length: [16],
          cvcLength: [3],
          luhn: true
        }, {
          type: 'unionpay',
          pattern: /^62/,
          format: defaultFormat,
          length: [16, 17, 18, 19],
          cvcLength: [3],
          luhn: false
        }, {
          type: 'visaelectron',
          pattern: /^4(026|17500|405|508|844|91[37])/,
          format: defaultFormat,
          length: [16],
          cvcLength: [3],
          luhn: true
        }, {
          type: 'elo',
          pattern: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/,
          format: defaultFormat,
          length: [16],
          cvcLength: [3],
          luhn: true
        }, {
          type: 'visa',
          pattern: /^4/,
          format: defaultFormat,
          length: [13, 16, 19],
          cvcLength: [3],
          luhn: true
        }
      ];

      cardFromNumber = function(num) {
        var card, j, len;
        num = (num + '').replace(/\D/g, '');
        for (j = 0, len = cards.length; j < len; j++) {
          card = cards[j];
          if (card.pattern.test(num)) {
            return card;
          }
        }
      };

      cardFromType = function(type) {
        var card, j, len;
        for (j = 0, len = cards.length; j < len; j++) {
          card = cards[j];
          if (card.type === type) {
            return card;
          }
        }
      };

      luhnCheck = function(num) {
        var digit, digits, j, len, odd, sum;
        odd = true;
        sum = 0;
        digits = (num + '').split('').reverse();
        for (j = 0, len = digits.length; j < len; j++) {
          digit = digits[j];
          digit = parseInt(digit, 10);
          if ((odd = !odd)) {
            digit *= 2;
          }
          if (digit > 9) {
            digit -= 9;
          }
          sum += digit;
        }
        return sum % 10 === 0;
      };

      hasTextSelected = function(target) {
        var ref;
        try {
          if ((target.selectionStart != null) && target.selectionStart !== target.selectionEnd) {
            return true;
          }
          if ((typeof document !== "undefined" && document !== null ? (ref = document.selection) != null ? ref.createRange : void 0 : void 0) != null) {
            if (document.selection.createRange().text) {
              return true;
            }
          }
        } catch (error) {
        }
        return false;
      };

      reFormatCardNumber = function(e) {
        return setTimeout((function(_this) {
          return function() {
            var target, value;
            target = e.target;
            value = QJ.val(target);
            value = Payment.fns.formatCardNumber(value);
            QJ.val(target, value);
            return QJ.trigger(target, 'change');
          };
        })(this));
      };

      formatCardNumber = function(maxLength) {
        return function(e) {
          var card, digit, i, j, len, length, re, target, upperLength, upperLengths, value;
          digit = String.fromCharCode(e.which);
          if (!/^\d+$/.test(digit)) {
            return;
          }
          target = e.target;
          value = QJ.val(target);
          card = cardFromNumber(value + digit);
          length = (value.replace(/\D/g, '') + digit).length;
          upperLengths = [16];
          if (card) {
            upperLengths = card.length;
          }
          if (maxLength) {
            upperLengths = upperLengths.filter(function(x) {
              return x <= maxLength;
            });
          }
          for (i = j = 0, len = upperLengths.length; j < len; i = ++j) {
            upperLength = upperLengths[i];
            if (length >= upperLength && upperLengths[i + 1]) {
              continue;
            }
            if (length >= upperLength) {
              return;
            }
          }
          if (hasTextSelected(target)) {
            return;
          }
          if (card && card.type === 'amex') {
            re = /^(\d{4}|\d{4}\s\d{6})$/;
          } else {
            re = /(?:^|\s)(\d{4})$/;
          }
          if (re.test(value)) {
            e.preventDefault();
            QJ.val(target, value + ' ' + digit);
            return QJ.trigger(target, 'change');
          }
        };
      };

      formatBackCardNumber = function(e) {
        var target, value;
        target = e.target;
        value = QJ.val(target);
        if (e.meta) {
          return;
        }
        if (e.which !== 8) {
          return;
        }
        if (hasTextSelected(target)) {
          return;
        }
        if (/\d\s$/.test(value)) {
          e.preventDefault();
          QJ.val(target, value.replace(/\d\s$/, ''));
          return QJ.trigger(target, 'change');
        } else if (/\s\d?$/.test(value)) {
          e.preventDefault();
          QJ.val(target, value.replace(/\s\d?$/, ''));
          return QJ.trigger(target, 'change');
        }
      };

      formatExpiry = function(e) {
        var digit, target, val;
        digit = String.fromCharCode(e.which);
        if (!/^\d+$/.test(digit)) {
          return;
        }
        target = e.target;
        val = QJ.val(target) + digit;
        if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
          e.preventDefault();
          QJ.val(target, "0" + val + " / ");
          return QJ.trigger(target, 'change');
        } else if (/^\d\d$/.test(val)) {
          e.preventDefault();
          QJ.val(target, val + " / ");
          return QJ.trigger(target, 'change');
        }
      };

      formatMonthExpiry = function(e) {
        var digit, target, val;
        digit = String.fromCharCode(e.which);
        if (!/^\d+$/.test(digit)) {
          return;
        }
        target = e.target;
        val = QJ.val(target) + digit;
        if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
          e.preventDefault();
          QJ.val(target, "0" + val);
          return QJ.trigger(target, 'change');
        } else if (/^\d\d$/.test(val)) {
          e.preventDefault();
          QJ.val(target, "" + val);
          return QJ.trigger(target, 'change');
        }
      };

      formatForwardExpiry = function(e) {
        var digit, target, val;
        digit = String.fromCharCode(e.which);
        if (!/^\d+$/.test(digit)) {
          return;
        }
        target = e.target;
        val = QJ.val(target);
        if (/^\d\d$/.test(val)) {
          QJ.val(target, val + " / ");
          return QJ.trigger(target, 'change');
        }
      };

      formatForwardSlash = function(e) {
        var slash, target, val;
        slash = String.fromCharCode(e.which);
        if (slash !== '/') {
          return;
        }
        target = e.target;
        val = QJ.val(target);
        if (/^\d$/.test(val) && val !== '0') {
          QJ.val(target, "0" + val + " / ");
          return QJ.trigger(target, 'change');
        }
      };

      formatBackExpiry = function(e) {
        var target, value;
        if (e.metaKey) {
          return;
        }
        target = e.target;
        value = QJ.val(target);
        if (e.which !== 8) {
          return;
        }
        if (hasTextSelected(target)) {
          return;
        }
        if (/\d(\s|\/)+$/.test(value)) {
          e.preventDefault();
          QJ.val(target, value.replace(/\d(\s|\/)*$/, ''));
          return QJ.trigger(target, 'change');
        } else if (/\s\/\s?\d?$/.test(value)) {
          e.preventDefault();
          QJ.val(target, value.replace(/\s\/\s?\d?$/, ''));
          return QJ.trigger(target, 'change');
        }
      };

      restrictNumeric = function(e) {
        var input;
        if (e.metaKey || e.ctrlKey) {
          return true;
        }
        if (e.which === 32) {
          return e.preventDefault();
        }
        if (e.which === 0) {
          return true;
        }
        if (e.which < 33) {
          return true;
        }
        input = String.fromCharCode(e.which);
        if (!/[\d\s]/.test(input)) {
          return e.preventDefault();
        }
      };

      restrictCardNumber = function(maxLength) {
        return function(e) {
          var card, digit, length, target, value;
          target = e.target;
          digit = String.fromCharCode(e.which);
          if (!/^\d+$/.test(digit)) {
            return;
          }
          if (hasTextSelected(target)) {
            return;
          }
          value = (QJ.val(target) + digit).replace(/\D/g, '');
          card = cardFromNumber(value);
          length = 16;
          if (card) {
            length = card.length[card.length.length - 1];
          }
          if (maxLength) {
            length = Math.min(length, maxLength);
          }
          if (!(value.length <= length)) {
            return e.preventDefault();
          }
        };
      };

      restrictExpiry = function(e, length) {
        var digit, target, value;
        target = e.target;
        digit = String.fromCharCode(e.which);
        if (!/^\d+$/.test(digit)) {
          return;
        }
        if (hasTextSelected(target)) {
          return;
        }
        value = QJ.val(target) + digit;
        value = value.replace(/\D/g, '');
        if (value.length > length) {
          return e.preventDefault();
        }
      };

      restrictCombinedExpiry = function(e) {
        return restrictExpiry(e, 6);
      };

      restrictMonthExpiry = function(e) {
        return restrictExpiry(e, 2);
      };

      restrictYearExpiry = function(e) {
        return restrictExpiry(e, 4);
      };

      restrictCVC = function(e) {
        var digit, target, val;
        target = e.target;
        digit = String.fromCharCode(e.which);
        if (!/^\d+$/.test(digit)) {
          return;
        }
        if (hasTextSelected(target)) {
          return;
        }
        val = QJ.val(target) + digit;
        if (!(val.length <= 4)) {
          return e.preventDefault();
        }
      };

      setCardType = function(e) {
        var allTypes, card, cardType, target, val;
        target = e.target;
        val = QJ.val(target);
        cardType = Payment.fns.cardType(val) || 'unknown';
        if (!QJ.hasClass(target, cardType)) {
          allTypes = (function() {
            var j, len, results;
            results = [];
            for (j = 0, len = cards.length; j < len; j++) {
              card = cards[j];
              results.push(card.type);
            }
            return results;
          })();
          QJ.removeClass(target, 'unknown');
          QJ.removeClass(target, allTypes.join(' '));
          QJ.addClass(target, cardType);
          QJ.toggleClass(target, 'identified', cardType !== 'unknown');
          return QJ.trigger(target, 'payment.cardType', cardType);
        }
      };

      Payment = (function() {
        function Payment() {}

        Payment.fns = {
          cardExpiryVal: function(value) {
            var month, prefix, ref, year;
            value = value.replace(/\s/g, '');
            ref = value.split('/', 2), month = ref[0], year = ref[1];
            if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
              prefix = (new Date).getFullYear();
              prefix = prefix.toString().slice(0, 2);
              year = prefix + year;
            }
            month = parseInt(month, 10);
            year = parseInt(year, 10);
            return {
              month: month,
              year: year
            };
          },
          validateCardNumber: function(num) {
            var card, ref;
            num = (num + '').replace(/\s+|-/g, '');
            if (!/^\d+$/.test(num)) {
              return false;
            }
            card = cardFromNumber(num);
            if (!card) {
              return false;
            }
            return (ref = num.length, indexOf.call(card.length, ref) >= 0) && (card.luhn === false || luhnCheck(num));
          },
          validateCardExpiry: function(month, year) {
            var currentTime, expiry, prefix, ref, ref1;
            if (typeof month === 'object' && 'month' in month) {
              ref = month, month = ref.month, year = ref.year;
            } else if (typeof month === 'string' && indexOf.call(month, '/') >= 0) {
              ref1 = Payment.fns.cardExpiryVal(month), month = ref1.month, year = ref1.year;
            }
            if (!(month && year)) {
              return false;
            }
            month = QJ.trim(month);
            year = QJ.trim(year);
            if (!/^\d+$/.test(month)) {
              return false;
            }
            if (!/^\d+$/.test(year)) {
              return false;
            }
            month = parseInt(month, 10);
            if (!(month && month <= 12)) {
              return false;
            }
            if (year.length === 2) {
              prefix = (new Date).getFullYear();
              prefix = prefix.toString().slice(0, 2);
              year = prefix + year;
            }
            expiry = new Date(year, month);
            currentTime = new Date;
            expiry.setMonth(expiry.getMonth() - 1);
            expiry.setMonth(expiry.getMonth() + 1, 1);
            return expiry > currentTime;
          },
          validateCardCVC: function(cvc, type) {
            var ref, ref1;
            cvc = QJ.trim(cvc);
            if (!/^\d+$/.test(cvc)) {
              return false;
            }
            if (type && cardFromType(type)) {
              return ref = cvc.length, indexOf.call((ref1 = cardFromType(type)) != null ? ref1.cvcLength : void 0, ref) >= 0;
            } else {
              return cvc.length >= 3 && cvc.length <= 4;
            }
          },
          cardType: function(num) {
            var ref;
            if (!num) {
              return null;
            }
            return ((ref = cardFromNumber(num)) != null ? ref.type : void 0) || null;
          },
          formatCardNumber: function(num) {
            var card, groups, ref, upperLength;
            card = cardFromNumber(num);
            if (!card) {
              return num;
            }
            upperLength = card.length[card.length.length - 1];
            num = num.replace(/\D/g, '');
            num = num.slice(0, upperLength);
            if (card.format.global) {
              return (ref = num.match(card.format)) != null ? ref.join(' ') : void 0;
            } else {
              groups = card.format.exec(num);
              if (groups == null) {
                return;
              }
              groups.shift();
              groups = groups.filter(function(n) {
                return n;
              });
              return groups.join(' ');
            }
          }
        };

        Payment.restrictNumeric = function(el) {
          return QJ.on(el, 'keypress', restrictNumeric);
        };

        Payment.cardExpiryVal = function(el) {
          return Payment.fns.cardExpiryVal(QJ.val(el));
        };

        Payment.formatCardCVC = function(el) {
          Payment.restrictNumeric(el);
          QJ.on(el, 'keypress', restrictCVC);
          return el;
        };

        Payment.formatCardExpiry = function(el) {
          var month, year;
          Payment.restrictNumeric(el);
          if (el.length && el.length === 2) {
            month = el[0], year = el[1];
            this.formatCardExpiryMultiple(month, year);
          } else {
            QJ.on(el, 'keypress', restrictCombinedExpiry);
            QJ.on(el, 'keypress', formatExpiry);
            QJ.on(el, 'keypress', formatForwardSlash);
            QJ.on(el, 'keypress', formatForwardExpiry);
            QJ.on(el, 'keydown', formatBackExpiry);
          }
          return el;
        };

        Payment.formatCardExpiryMultiple = function(month, year) {
          QJ.on(month, 'keypress', restrictMonthExpiry);
          QJ.on(month, 'keypress', formatMonthExpiry);
          return QJ.on(year, 'keypress', restrictYearExpiry);
        };

        Payment.formatCardNumber = function(el, maxLength) {
          Payment.restrictNumeric(el);
          QJ.on(el, 'keypress', restrictCardNumber(maxLength));
          QJ.on(el, 'keypress', formatCardNumber(maxLength));
          QJ.on(el, 'keydown', formatBackCardNumber);
          QJ.on(el, 'keyup blur', setCardType);
          QJ.on(el, 'paste', reFormatCardNumber);
          QJ.on(el, 'input', reFormatCardNumber);
          return el;
        };

        Payment.getCardArray = function() {
          return cards;
        };

        Payment.setCardArray = function(cardArray) {
          cards = cardArray;
          return true;
        };

        Payment.addToCardArray = function(cardObject) {
          return cards.push(cardObject);
        };

        Payment.removeFromCardArray = function(type) {
          var key, value;
          for (key in cards) {
            value = cards[key];
            if (value.type === type) {
              cards.splice(key, 1);
            }
          }
          return true;
        };

        return Payment;

      })();

      module.exports = Payment;

      commonjsGlobal$1.Payment = Payment;

    }).call(commonjsGlobal$1);
    });

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

    var script$e = {

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
                const __vue_script__$d = script$e;
                
    /* template */
    var __vue_render__$b = function() {
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
    var __vue_staticRenderFns__$b = [];
    __vue_render__$b._withStripped = true;

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
      

      
      var HelpText = normalizeComponent(
        { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
        __vue_inject_styles__$d,
        __vue_script__$d,
        __vue_scope_id__$d,
        __vue_is_functional_template__$d,
        __vue_module_identifier__$d,
        undefined,
        undefined
      );

    const emptyClass = 'is-empty';
    const focusClass = 'has-focus';
    const changedClass = 'has-changed';
    const customPrefix = 'custom';

    function addClass(el, vnode, css) {
        // el.classList.add(css);
        vnode.context.$el.classList.add(css);
    }

    function removeClass(el, vnode, css) {
        // el.classList.remove(css);
        vnode.context.$el.classList.remove(css);
    }

    function addEmptyClass(el, vnode) {
        if(isEmpty(el.value) || (el.tagName === 'SELECT' && el.selectedIndex === -1)) {
            addClass(el, vnode, emptyClass);
        }
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
             * The value of label element. If no value, no label will appear.
             *
             * @property String
             */
            label: [Number, String],

            /**
             * The field id attribute value.
             *
             * @property String
             */
            value: {
                default: null
            },

            /**
             * Add form-group wrapper to input
             *
             * @property String
             */
            group: {
                type: Boolean,
                default: true
            },

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
             * The invalid property
             *
             * @property String
             */
            invalid: Boolean,

            /**
             * The valid property
             *
             * @property String
             */
            valid: Boolean,

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

                        if(!isEmpty(el.value) || (el.tagName === 'SELECT' && el.selectedIndex > -1)) {
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
                    addEmptyClass(el, vnode);
                },
                update(el, binding, vnode) {
                    addEmptyClass(el, vnode);
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
                    errors = this.errors[this.$attrs.name || this.$attrs.id];
                }

                return !errors || isArray(errors) || isObject(errors) ? errors : [errors];
            }

        },

        computed: {

            controlAttributes() {
                return Object.keys(this.$attrs)
                    .concat([['class', this.controlClasses]])
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
                return this.custom ? this.customControlClass : (
                    this.defaultControlClass + (this.plaintext ? '-plaintext' : '')
                );
            },

            controlSizeClass() {
                return prefix(this.size, this.controlClass);
            },

            customControlClass() {
                return 'custom-control';
            },

            formGroupClasses() {
                const name = prefix(this.$options.name, this.custom ? customPrefix : '');

                return this.mergeClasses(name, prefix(this.size, name), {
                    'has-activity': this.activity,
                    'is-valid': !!(this.valid || this.validFeedback),
                    'is-invalid': !!(this.invalid || this.invalidFeedback)
                });
            },

            controlClasses() {
                return this.mergeClasses(
                    this.controlClass,
                    this.colorableClasses,
                    this.controlSizeClass,
                    (this.spacing || ''),
                    ((this.valid || this.validFeedback) ? 'is-valid' : ''),
                    ((this.invalid || this.invalidFeedback) ? 'is-invalid' : '')
                );
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

    //
    //
    //
    //
    //
    //
    //
    //

    var script$f = {

        name: 'form-group',

        props: {

            group: {
                type: Boolean,
                default: true
            }

        }

    };

    /* script */
                const __vue_script__$e = script$f;
    /* template */
    var __vue_render__$c = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { class: { "form-group": !!_vm.group } },
        [_vm._t("default")],
        2
      )
    };
    var __vue_staticRenderFns__$c = [];
    __vue_render__$c._withStripped = true;

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
      

      
      var FormGroup = normalizeComponent(
        { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
        __vue_inject_styles__$e,
        __vue_script__$e,
        __vue_scope_id__$e,
        __vue_is_functional_template__$e,
        __vue_module_identifier__$e,
        undefined,
        undefined
      );

    //

    var script$g = {

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
                const __vue_script__$f = script$g;
                
    /* template */
    var __vue_render__$d = function() {
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
    var __vue_staticRenderFns__$d = [];
    __vue_render__$d._withStripped = true;

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
      

      
      var FormFeedback = normalizeComponent(
        { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
        __vue_inject_styles__$f,
        __vue_script__$f,
        __vue_scope_id__$f,
        __vue_is_functional_template__$f,
        __vue_module_identifier__$f,
        undefined,
        undefined
      );

    var commonjsGlobal$2 = typeof window !== 'undefined' ? window : typeof global$1 !== 'undefined' ? global$1 : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule$2(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var humps$1 = createCommonjsModule$2(function (module) {
    (function(global) {

      var _processKeys = function(convert, obj, options) {
        if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
          return obj;
        }

        var output,
            i = 0,
            l = 0;

        if(_isArray(obj)) {
          output = [];
          for(l=obj.length; i<l; i++) {
            output.push(_processKeys(convert, obj[i], options));
          }
        }
        else {
          output = {};
          for(var key in obj) {
            if(Object.prototype.hasOwnProperty.call(obj, key)) {
              output[convert(key, options)] = _processKeys(convert, obj[key], options);
            }
          }
        }
        return output;
      };

      // String conversion methods

      var separateWords = function(string, options) {
        options = options || {};
        var separator = options.separator || '_';
        var split = options.split || /(?=[A-Z])/;

        return string.split(split).join(separator);
      };

      var camelize = function(string) {
        if (_isNumerical(string)) {
          return string;
        }
        string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
          return chr ? chr.toUpperCase() : '';
        });
        // Ensure 1st char is always lowercase
        return string.substr(0, 1).toLowerCase() + string.substr(1);
      };

      var pascalize = function(string) {
        var camelized = camelize(string);
        // Ensure 1st char is always uppercase
        return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
      };

      var decamelize = function(string, options) {
        return separateWords(string, options).toLowerCase();
      };

      // Utilities
      // Taken from Underscore.js

      var toString = Object.prototype.toString;

      var _isFunction = function(obj) {
        return typeof(obj) === 'function';
      };
      var _isObject = function(obj) {
        return obj === Object(obj);
      };
      var _isArray = function(obj) {
        return toString.call(obj) == '[object Array]';
      };
      var _isDate = function(obj) {
        return toString.call(obj) == '[object Date]';
      };
      var _isRegExp = function(obj) {
        return toString.call(obj) == '[object RegExp]';
      };
      var _isBoolean = function(obj) {
        return toString.call(obj) == '[object Boolean]';
      };

      // Performant way to determine if obj coerces to a number
      var _isNumerical = function(obj) {
        obj = obj - 0;
        return obj === obj;
      };

      // Sets up function which handles processing keys
      // allowing the convert function to be modified by a callback
      var _processor = function(convert, options) {
        var callback = options && 'process' in options ? options.process : options;

        if(typeof(callback) !== 'function') {
          return convert;
        }

        return function(string, options) {
          return callback(string, convert, options);
        }
      };

      var humps = {
        camelize: camelize,
        decamelize: decamelize,
        pascalize: pascalize,
        depascalize: decamelize,
        camelizeKeys: function(object, options) {
          return _processKeys(_processor(camelize, options), object);
        },
        decamelizeKeys: function(object, options) {
          return _processKeys(_processor(decamelize, options), object, options);
        },
        pascalizeKeys: function(object, options) {
          return _processKeys(_processor(pascalize, options), object);
        },
        depascalizeKeys: function () {
          return this.decamelizeKeys.apply(this, arguments);
        }
      };

      if (module.exports) {
        module.exports = humps;
      } else {
        global.humps = humps;
      }

    })(commonjsGlobal$2);
    });

    var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var defineProperty$1 = function (obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    };

    var _extends$3 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    var objectWithoutProperties$1 = function (obj, keys) {
      var target = {};

      for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
      }

      return target;
    };

    function styleToObject$1(style) {
      return style.split(';').map(function (s) {
        return s.trim();
      }).filter(function (s) {
        return s;
      }).reduce(function (acc, pair) {
        var i = pair.indexOf(':');
        var prop = humps$1.camelize(pair.slice(0, i));
        var value = pair.slice(i + 1).trim();

        acc[prop] = value;

        return acc;
      }, {});
    }

    function classToObject$1(cls) {
      return cls.split(/\s+/).reduce(function (acc, c) {
        acc[c] = true;

        return acc;
      }, {});
    }

    function combineClassObjects$1() {
      for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
        objs[_key] = arguments[_key];
      }

      return objs.reduce(function (acc, obj) {
        if (Array.isArray(obj)) {
          acc = acc.concat(obj);
        } else {
          acc.push(obj);
        }

        return acc;
      }, []);
    }

    function convert$1(h, element) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var children = (element.children || []).map(convert$1.bind(null, h));

      var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
        var val = element.attributes[key];

        switch (key) {
          case 'class':
            acc['class'] = classToObject$1(val);
            break;
          case 'style':
            acc['style'] = styleToObject$1(val);
            break;
          default:
            acc.attrs[key] = val;
        }

        return acc;
      }, { 'class': {}, style: {}, attrs: {} });

      var _data$class = data.class,
          dClass = _data$class === undefined ? {} : _data$class,
          _data$style = data.style,
          dStyle = _data$style === undefined ? {} : _data$style,
          _data$attrs = data.attrs,
          dAttrs = _data$attrs === undefined ? {} : _data$attrs,
          remainingData = objectWithoutProperties$1(data, ['class', 'style', 'attrs']);


      if (typeof element === 'string') {
        return element;
      } else {
        return h(element.tag, _extends$3({
          class: combineClassObjects$1(mixins.class, dClass),
          style: _extends$3({}, mixins.style, dStyle),
          attrs: _extends$3({}, mixins.attrs, dAttrs)
        }, remainingData, {
          props: props
        }), children);
      }
    }

    var PRODUCTION$3 = false;

    try {
      PRODUCTION$3 = "production" === 'production';
    } catch (e) {}

    function log$1 () {
      if (!PRODUCTION$3 && console && typeof console.error === 'function') {
        var _console;

        (_console = console).error.apply(_console, arguments);
      }
    }

    function objectWithKey$1(key, value) {
      return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty$1({}, key, value) : {};
    }

    function classList$1(props) {
      var _classes;

      var classes = (_classes = {
        'fa-spin': props.spin,
        'fa-pulse': props.pulse,
        'fa-fw': props.fixedWidth,
        'fa-border': props.border,
        'fa-li': props.listItem,
        'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
        'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
      }, defineProperty$1(_classes, 'fa-' + props.size, props.size !== null), defineProperty$1(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty$1(_classes, 'fa-pull-' + props.pull, props.pull !== null), _classes);

      return Object.keys(classes).map(function (key) {
        return classes[key] ? key : null;
      }).filter(function (key) {
        return key;
      });
    }

    function normalizeIconArgs$1(icon$$1) {
      if (icon$$1 === null) {
        return null;
      }

      if ((typeof icon$$1 === 'undefined' ? 'undefined' : _typeof$1(icon$$1)) === 'object' && icon$$1.prefix && icon$$1.iconName) {
        return icon$$1;
      }

      if (Array.isArray(icon$$1) && icon$$1.length === 2) {
        return { prefix: icon$$1[0], iconName: icon$$1[1] };
      }

      if (typeof icon$$1 === 'string') {
        return { prefix: 'fas', iconName: icon$$1 };
      }
    }

    var FontAwesomeIcon$1 = {
      name: 'FontAwesomeIcon',

      functional: true,

      props: {
        border: {
          type: Boolean,
          default: false
        },
        fixedWidth: {
          type: Boolean,
          default: false
        },
        flip: {
          type: String,
          default: null,
          validator: function validator(value) {
            return ['horizontal', 'vertical', 'both'].indexOf(value) > -1;
          }
        },
        icon: {
          type: [Object, Array, String],
          required: true
        },
        mask: {
          type: [Object, Array, String],
          default: null
        },
        listItem: {
          type: Boolean,
          default: false
        },
        pull: {
          type: String,
          default: null,
          validator: function validator(value) {
            return ['right', 'left'].indexOf(value) > -1;
          }
        },
        pulse: {
          type: Boolean,
          default: false
        },
        rotation: {
          type: Number,
          default: null,
          validator: function validator(value) {
            return [90, 180, 270].indexOf(value) > -1;
          }
        },
        size: {
          type: String,
          default: null,
          validator: function validator(value) {
            return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
          }
        },
        spin: {
          type: Boolean,
          default: false
        },
        transform: {
          type: [String, Object],
          default: null
        },
        symbol: {
          type: [Boolean, String],
          default: false
        }
      },

      render: function render(createElement, context) {
        var props = context.props;
        var iconArgs = props.icon,
            maskArgs = props.mask,
            symbol = props.symbol;

        var icon$$1 = normalizeIconArgs$1(iconArgs);
        var classes = objectWithKey$1('classes', classList$1(props));
        var transform = objectWithKey$1('transform', typeof props.transform === 'string' ? parse$1.transform(props.transform) : props.transform);
        var mask = objectWithKey$1('mask', normalizeIconArgs$1(maskArgs));

        var renderedIcon = icon$1(icon$$1, _extends$3({}, classes, transform, mask, { symbol: symbol }));

        if (!renderedIcon) {
          return log$1('Could not find one or more icon(s)', icon$$1, mask);
        }

        var abstract = renderedIcon.abstract;

        var convertCurry = convert$1.bind(null, createElement);

        return convertCurry(abstract[0], {}, context.data);
      }
    };

    //

    var script$h = {

        name: 'credit-card-field',

        mixins: [
            MergeClasses,
            Variant,
            FormControl
        ],

        components: {
            ActivityIndicator,
            FormGroup,
            FormFeedback,
            HelpText,
            Icon: FontAwesomeIcon$1
        },

        props: {

            activity: {
                type: Boolean,
                default: false
            }

        },

        watch: {
            'card.number': function(newVal, oldVal) {
                this.brand = this.card.brand = lib$1.fns.cardType(newVal) || 'unknown';
                this.validated.number = null;

                if (this.$el.querySelector('.credit-card-field-lg')) {
                    this.showSecurityFields = this.card.number.length >= 14;
                }
            },
            'card.expiration': function(newVal, oldVal) {
                this.validated.expiration = null;
            },
            'card.cvc': function(newVal, oldVal) {
                this.validated.cvc = null;
            },
            'card.postalCode': function(newVal, oldVal) {
                this.validated.postalCode = null;
            }
        },

        directives: {
            focus: {
                bind(el, binding, vnode) {
                    el.addEventListener('focus', event => {
                        el.style.transform = '';
                        el.classList.add('is-focused');
                        vnode.context.isFocused = true;
                        vnode.context.focusedElement = event.target;
                    });

                    el.addEventListener('blur', event => {
                        el.classList.remove('is-focused');
                        vnode.context.isFocused = false;

                        if (binding.modifiers.transform && vnode.context.shouldTransform(el)) {
                            vnode.context.addTransform(el);
                        }
                    });
                }
            },
            validate: {
                bind(el, binding, vnode) {
                    function validate(isValid) {
                        vnode.context.validated[binding.arg] = el.value === '' ? false : binding.value && binding.value(el.value);
                        vnode.context.$emit(isValid ? 'valid' : 'invalid', vnode.context.getEventPayload(el, isValid));

                        if (vnode.context.isComplete() &&
                            vnode.context.isValid() &&
                            vnode.context.hasChanged()) {
                            vnode.context.$emit('complete', vnode.context.getEventPayload(el, isValid));
                        }
                    }

                    function maxLength(isValid) {
                        return el.getAttribute('max') && el.value.length >= parseInt(el.getAttribute('max'));
                    }

                    el.addEventListener('keydown', event => {
                        const isValid = binding.value && binding.value(el.value);

                        if ((isValid || maxLength()) && vnode.context.isPrintableKeyCode(event)) {
                            event.preventDefault();
                        }
                        else if (!el.value && event.keyCode === 8) {
                            vnode.context.focusPrevElement(el);
                        }

                        vnode.context.previousValue = JSON.stringify(vnode.context.card);
                    });

                    el.addEventListener('keyup', event => {
                        if (vnode.context.isPrintableKeyCode(event)) {
                            const isValid = binding.value && binding.value(el.value);

                            if (maxLength()) {
                                validate(isValid);
                            }

                            if (isValid) {
                                vnode.context.focusNextElement(el);
                            }

                            vnode.context.$emit('input', vnode.context.card);

                            if (vnode.context.hasChanged()) {
                                vnode.context.$emit('change', vnode.context.getEventPayload(el, isValid));
                            }
                        }
                    });

                    el.addEventListener('blur', event => {
                        el.value !== '' && validate(binding.value && binding.value(el.value));
                    });
                }
            }
        },

        computed: {

            classes() {
                const classes = {
                    'show-security-fields': this.showSecurityFields,
                    'credit-card-field-sm': this.width < 300,
                    'credit-card-field-lg': this.width > 400,
                    'has-activity': this.activity,
                    'is-focused': this.isFocused,
                    'is-invalid': this.isInvalid()
                };

                classes[`brand-${this.brand || 'unknown'}`] = true;

                if (this.isFocused) {
                    classes[`is-focused-${this.getClassName(this.focusedElement)}`] = true;
                }
                else if (this.focusedElement) {
                    classes[`last-focused-${this.getClassName(this.focusedElement)}`] = true;
                }

                for (let i in this.validated) {
                    classes[`is-invalid-${i}`] = this.validated[i] === false;
                }

                return classes;
            }
        },

        methods: {

            addTransform(el) {
                const positionInfo = this.$el.querySelector('.credit-card-field-number-mask').getBoundingClientRect();
                const parts = el.value.split(' ');
                const totalWidth = positionInfo.width;
                const width = this.getTextWidth(parts[parts.length - 1].trim(), el);
                el.style.transform = 'translateX(' + ((totalWidth - width) * -1) + 'px)';
            },

            shouldTransform(el, offset = 1.25) {
                const totalWidth = el.offsetWidth - this.$el.querySelector('.credit-card-field-security-fields').offsetWidth;
                return totalWidth <= this.getTextWidth(el.value, el) * offset;
            },

            getDefaultCard() {
                return {
                    number: this.$attrs.number || '',
                    expiration: this.$attrs.expiration || '',
                    cvc: this.$attrs.cvc || '',
                    postalCode: this.$attrs.postalCode || ''
                };
            },

            getCardField() {
                return this.$el.querySelector('.credit-card-field');
            },

            getEventPayload(el, isValid) {
                const card = JSON.parse(JSON.stringify(this.card));
                const expiration = card.expiration.split('/');

                card.numberFormatted = card.number;
                card.number = card.number.replace(/\s/g, '');
                card.expMonth = expiration[0] ? expiration[0].trim() : null;
                card.expYear = expiration[1] ? expiration[1].trim() : null;

                return {
                    card: card,
                    brand: this.brand,
                    invalid: this.isInvalid(),
                    complete: this.isComplete(),
                    input: {
                        el: el,
                        valid: isValid
                    }
                };
            },

            getTextWidth(text, el) {
                const defaultView = (el.ownerDocument || document).defaultView;
                const computedStyle = defaultView.getComputedStyle(el);
                // re-use canvas object for better performance
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                context.margin = 0;
                context.font = computedStyle.font;
                var metrics = context.measureText(text);
                return metrics.width;
            },

            getClassName(el) {
                const classes = el.classList.item(1).split('-');
                return classes[classes.length - 1];
            },

            focusNextElement(el) {
                if (el.nextElementSibling && el.nextElementSibling.children[0]) {
                    el.nextElementSibling.children[0].focus();
                }
                else if (el.nextElementSibling) {
                    el.nextElementSibling.focus();
                }
            },

            focusPrevElement(el) {
                if (!el.value && el.previousElementSibling) {
                    el.previousElementSibling.focus();
                }
                else if (!el.value) {
                    this.$el.querySelector('.credit-card-field-number').focus();
                }
            },

            hasChanged() {
                return this.previousValue !== JSON.stringify(this.card);
            },

            validateCvc(value) {
                return lib$1.fns.validateCardCVC(value);
            },

            validateNumber(value) {
                return lib$1.fns.validateCardNumber(value);
            },

            validateExpiration(value) {
                return lib$1.fns.validateCardExpiry(value);
            },

            validatePostalCode(value) {
                return value.match(/^\d{5}(?:[-\s]\d{4})?$/) !== null;
            },

            isPrintableKeyCode(event) {
                const keycode = event.keyCode;

                return (
                    (keycode > 47 && keycode < 58) || // number keys
                    keycode === 32 || keycode === 13 || // spacebar & return key(s) (if you want to allow carriage returns)
                    (keycode > 64 && keycode < 91) || // letter keys
                    (keycode > 95 && keycode < 112) || // numpad keys
                    (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
                    (keycode > 218 && keycode < 223) // [\]' (in order)
                );
            },

            isValid() {
                for (let i in this.validated) {
                    if (this.validated[i] !== true) {
                        return false;
                    }
                }

                return true;
            },

            isInvalid() {
                for (let i in this.validated) {
                    if (this.validated[i] === false) {
                        return true;
                    }
                }

                return false;
            },

            isComplete() {
                return !!((
                    this.validated.number &&
                    this.validated.expiration &&
                    this.validated.cvc &&
                    this.validated.postalCode
                ));
            },

            onResize(event) {
                this.width = this.$el.offsetWidth;
                return this.onResize;
            },

            onClick(event) {
                if (!event.target.classList.contains('credit-card-field-field')) {
                    this.focusedElement ? this.focusedElement.focus() : this.$el.querySelector('.credit-card-field-field').focus();
                }
            }

        },

        created() {
            this.card = this.getDefaultCard();
        },

        mounted() {
            lib$1.formatCardCVC(this.$el.querySelector('.credit-card-field-cvc'));
            lib$1.restrictNumeric(this.$el.querySelector('.credit-card-field-postal'));
            lib$1.formatCardNumber(this.$el.querySelector('.credit-card-field-number'));
            lib$1.formatCardExpiry(this.$el.querySelector('.credit-card-field-expiration'));

            this.$emit('input', this.card);

            window.addEventListener('resize', this.onResize());
        },

        destroyed() {
            window.removeEventListener('resize', this.onResize);
        },

        data() {
            return {
                width: null,
                isFocused: false,
                focusedElement: null,
                previousValue: null,
                showSecurityFields: false,
                brand: null,
                validated: {
                    number: null,
                    expiration: null,
                    cvc: null,
                    postalCode: null
                },
                card: {
                    brand: null,
                    number: null,
                    expiration: null,
                    cvc: null,
                    postalCode: null
                }
            };
        }

    };

    /* script */
                const __vue_script__$g = script$h;
    /* template */
    var __vue_render__$e = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "form-group",
        { staticClass: "credit-card-field-wrapper", on: { click: _vm.onClick } },
        [
          _vm._t("control", [
            _c(
              "div",
              {
                staticClass: "credit-card-field",
                class: _vm.mergeClasses(
                  _vm.controlClasses,
                  _vm.variantClass,
                  _vm.classes
                )
              },
              [
                _c("div", { staticClass: "credit-card-field-icon-wrapper" }, [
                  _c("div", { staticClass: "credit-card-field-icon-card" }, [
                    _c(
                      "div",
                      { staticClass: "credit-card-field-icon-front" },
                      [
                        _c("icon", {
                          staticClass: "credit-card-field-icon",
                          attrs: { icon: ["fab", "cc-jcb"], "data-brand": "jcb" }
                        }),
                        _vm._v(" "),
                        _c("icon", {
                          staticClass: "credit-card-field-icon",
                          attrs: { icon: ["fab", "cc-visa"], "data-brand": "visa" }
                        }),
                        _vm._v(" "),
                        _c("icon", {
                          staticClass: "credit-card-field-icon",
                          attrs: { icon: ["fab", "cc-amex"], "data-brand": "amex" }
                        }),
                        _vm._v(" "),
                        _c("icon", {
                          staticClass: "credit-card-field-icon",
                          attrs: {
                            icon: ["fab", "cc-discover"],
                            "data-brand": "discover"
                          }
                        }),
                        _vm._v(" "),
                        _c("icon", {
                          staticClass: "credit-card-field-icon",
                          attrs: {
                            icon: ["fab", "cc-mastercard"],
                            "data-brand": "mastercard"
                          }
                        }),
                        _vm._v(" "),
                        _c("icon", {
                          staticClass: "credit-card-field-icon",
                          attrs: {
                            icon: ["fab", "cc-diners-club"],
                            "data-brand": "dinersclub"
                          }
                        }),
                        _vm._v(" "),
                        _c("icon", {
                          staticClass: "credit-card-field-icon",
                          attrs: {
                            icon: ["far", "credit-card"],
                            "data-brand": "unknown",
                            width: "20",
                            height: "18"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "credit-card-field-icon-back" },
                      [
                        _c("icon", {
                          staticClass: "credit-card-field-icon",
                          attrs: {
                            icon: ["fas", "credit-card"],
                            width: "23.33",
                            height: "20"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "credit-card-field-fields" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "focus",
                        rawName: "v-focus.transform",
                        modifiers: { transform: true }
                      },
                      {
                        name: "validate",
                        rawName: "v-validate:number",
                        value: _vm.validateNumber,
                        expression: "validateNumber",
                        arg: "number"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.card.number,
                        expression: "card.number"
                      }
                    ],
                    staticClass: "credit-card-field-field credit-card-field-number",
                    class: _vm.mergeClasses({
                      "is-empty": !_vm.card.number,
                      "is-invalid": _vm.validated.number === false
                    }),
                    attrs: { max: "19", type: "text", placeholder: "Card number" },
                    domProps: { value: _vm.card.number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.card, "number", $event.target.value);
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "credit-card-field-security-fields" }, [
                    _c("input", {
                      directives: [
                        { name: "focus", rawName: "v-focus" },
                        {
                          name: "validate",
                          rawName: "v-validate:expiration",
                          value: _vm.validateExpiration,
                          expression: "validateExpiration",
                          arg: "expiration"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.card.expiration,
                          expression: "card.expiration"
                        }
                      ],
                      staticClass:
                        "credit-card-field-field credit-card-field-expiration",
                      class: _vm.mergeClasses({
                        "is-empty": !_vm.card.expiration,
                        "is-invalid": _vm.validated.expiration === false
                      }),
                      attrs: {
                        type: "text",
                        placeholder: "MM / YY",
                        maxlength: "7"
                      },
                      domProps: { value: _vm.card.expiration },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.card, "expiration", $event.target.value);
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "focus",
                          rawName: "v-focus",
                          value: _vm.validateCvc,
                          expression: "validateCvc"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate:cvc",
                          value: _vm.validateCvc,
                          expression: "validateCvc",
                          arg: "cvc"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.card.cvc,
                          expression: "card.cvc"
                        }
                      ],
                      staticClass: "credit-card-field-field credit-card-field-cvc",
                      class: _vm.mergeClasses({
                        "is-empty": !_vm.card.cvc,
                        "is-invalid": _vm.validated.cvc === false
                      }),
                      attrs: {
                        type: "text",
                        placeholder: "CVC",
                        maxlength: "4",
                        autocomplete: "off"
                      },
                      domProps: { value: _vm.card.cvc },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.card, "cvc", $event.target.value);
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "focus",
                          rawName: "v-focus",
                          value: _vm.validatePostalCode,
                          expression: "validatePostalCode"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate:postalCode",
                          value: _vm.validatePostalCode,
                          expression: "validatePostalCode",
                          arg: "postalCode"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.card.postalCode,
                          expression: "card.postalCode"
                        }
                      ],
                      staticClass:
                        "credit-card-field-field credit-card-field-postal",
                      class: _vm.mergeClasses({
                        "is-empty": !_vm.card.postalCode,
                        "is-invalid": _vm.validated.postalCode === false
                      }),
                      attrs: {
                        max: "5",
                        type: "text",
                        placeholder: "Zip",
                        maxlength: "5"
                      },
                      domProps: { value: _vm.card.postalCode },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.card, "postalCode", $event.target.value);
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "credit-card-field-placeholder-mask" }, [
                    _vm._v("Number")
                  ]),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "credit-card-field-number-mask",
                    domProps: { innerHTML: _vm._s(_vm.card.number) }
                  })
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _vm._t("activity-indicator", [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.activity,
                    expression: "activity"
                  }
                ],
                staticClass: "credit-card-field-activity"
              },
              [
                _c("activity-indicator", {
                  attrs: { size: "sm", type: "dots", center: "" }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm._t("default"),
          _vm._v(" "),
          _vm._t("help", [
            _vm.helpText
              ? _c("help-text", { domProps: { innerHTML: _vm._s(_vm.helpText) } })
              : _vm._e()
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
      )
    };
    var __vue_staticRenderFns__$e = [];
    __vue_render__$e._withStripped = true;

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
      

      
      var CreditCardField = normalizeComponent(
        { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
        __vue_inject_styles__$g,
        __vue_script__$g,
        __vue_scope_id__$g,
        __vue_is_functional_template__$g,
        __vue_module_identifier__$g,
        undefined,
        undefined
      );

    //
    var script$i = {
      name: 'authorize-net-credit-card',
      components: {
        CreditCardField
      },
      mixins: [PaymentGateway],
      methods: {
        onChange: function (event) {
          if (!event || !event.complete) {
            this.pageType.disableSubmitButton(); // this.$dispatch.request('submit:disable');
          }
        },
        onComplete: function (event) {
          elapsed(500, (resolve, reject) => {
            Gateway$1(this.gateway).createToken({
              cardNumber: event.card.number,
              month: event.card.expMonth,
              year: event.card.expYear,
              cardCode: event.card.cvc
            }, event => {
              wait(this.activity ? 750 : 0, (resolve, reject) => {
                if (event.messages.resultCode === 'Ok') {
                  this.$set(this.form, 'token', event.opaqueData.dataValue);
                  this.$set(this.form, 'tokenDescriptor', event.opaqueData.dataDescriptor);
                  this.pageType.enableSubmitButton(); // this.$dispatch.request('submit:enable');

                  resolve(event);
                } else if (event.messages.resultCode === 'Error') {
                  this.error = event.messages.message[0].text;
                  this.pageType.disableSubmitButton(); // this.$dispatch.request('submit:disable');

                  reject(this.error);
                }
              }).then(resolve, reject);
            });
          }, () => {
            this.activity = true;
          }).then(() => {
            this.activity = false;
          }, () => {
            this.activity = false;
          });
        }
      },

      mounted() {
        this.pageType.disableSubmitButton(); // this.$dispatch.request('submit:disable');

        Gateway$1(this.gateway).script(event => {
          this.loaded = true;
        });
      },

      data() {
        return {
          error: false,
          loaded: false,
          activity: false
        };
      }

    };

    /* script */
                const __vue_script__$h = script$i;
                
    /* template */
    var __vue_render__$f = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return !_vm.loaded
        ? _c("div", { staticClass: "row my-5 py-1" }, [
            _c(
              "div",
              { staticClass: "col-xs-12" },
              [_c("activity-indicator", { attrs: { size: "sm", center: true } })],
              1
            )
          ])
        : _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("credit-card-field", {
                attrs: {
                  activity: _vm.activity,
                  error: _vm.error || _vm.errors.token
                },
                on: { change: _vm.onChange, complete: _vm.onComplete }
              })
            ],
            1
          )
    };
    var __vue_staticRenderFns__$f = [];
    __vue_render__$f._withStripped = true;

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
      

      
      var AuthorizeNetCreditCard = normalizeComponent(
        { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
        __vue_inject_styles__$h,
        __vue_script__$h,
        __vue_scope_id__$h,
        __vue_is_functional_template__$h,
        __vue_module_identifier__$h,
        undefined,
        undefined
      );

    //
    var script$j = {
      name: 'payment-gateways',
      components: {
        Btn,
        Icon: FontAwesomeIcon,
        Alert,
        StripeCreditCard,
        StripePaymentButton,
        PaypalPaymentButton,
        AuthorizeNetCreditCard
      },
      mixins: [FormComponent],
      props: {
        pageType: {
          type: Object,
          required: true
        }
      },
      methods: {
        activate(button) {
          this.deactivate();
          button.active = true;
          this.$set(this.form, 'gateway', Gateway$1(button.gateway).api());
        },

        deactivate() {
          this.buttons.forEach(button => {
            button.active = false;
          });
        },

        getButtons: function () {
          const buttons = [];
          this.page.site.gateways.forEach(gateway => {
            if (!Gateway$1(gateway).buttons) {
              throw new Error(Gateway$1(gateway).api() + ' doesn\'t have a required buttons() method.');
            }

            Gateway$1(gateway).buttons().forEach(button => {
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
        },

        onSubmit() {
          console.log('asd');
        }

      },
      computed: {
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
        }

        window.addEventListener('resize', this.onResize());
      },

      destroyed() {
        window.removeEventListener('resize', this.onResize);
      },

      data() {
        return {
          width: null,
          gateway: null,
          buttons: this.getButtons()
        };
      }

    };

    /* script */
                const __vue_script__$i = script$j;
                
    /* template */
    var __vue_render__$g = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        [
          _c(
            "div",
            { staticClass: "payment-gateway-buttons" },
            _vm._l(_vm.buttons, function(button, i) {
              return _c(
                "btn",
                {
                  key: i,
                  class: {
                    "btn-success": button.active,
                    "btn-secondary": !button.active
                  },
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      _vm.activate(button);
                    }
                  }
                },
                [
                  _c("icon", {
                    class: { "mt-2 mb-1": !button.label },
                    attrs: {
                      icon:
                        typeof button.icon === "string"
                          ? ["far", button.icon]
                          : button.icon,
                      size: button.size || "lg"
                    }
                  }),
                  _vm._v(" "),
                  button.label
                    ? _c("div", {
                        staticClass: "pb-1 small",
                        domProps: { innerHTML: _vm._s(button.label) }
                      })
                    : _vm._e()
                ],
                1
              )
            })
          ),
          _vm._v(" "),
          !_vm.buttons || !_vm.buttons.length
            ? _c(
                "alert",
                {
                  staticClass: "d-flex align-items-center",
                  attrs: { variant: "danger" }
                },
                [
                  _c("icon", {
                    staticClass: "mr-2",
                    attrs: { icon: "exclamation-triangle", size: "2x" }
                  }),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(
                      "There are not payment gateways configured for this site!"
                    )
                  ])
                ],
                1
              )
            : _c(
                "div",
                _vm._l(_vm.buttons, function(button) {
                  return button.active
                    ? _c(
                        "div",
                        [
                          _c(button.component, {
                            tag: "component",
                            attrs: {
                              "page-type": _vm.pageType,
                              form: _vm.form,
                              page: _vm.page,
                              errors: _vm.errors,
                              gateway: button.gateway
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                })
              )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$g = [];
    __vue_render__$g._withStripped = true;

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
      

      
      var PaymentGateways = normalizeComponent(
        { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
        __vue_inject_styles__$i,
        __vue_script__$i,
        __vue_scope_id__$i,
        __vue_is_functional_template__$i,
        __vue_module_identifier__$i,
        undefined,
        undefined
      );

    //

    const convertAnimationDelayToInt = function(delay) {
        const num = parseFloat(delay, 10);
        const matches = delay.match(/m?s/);
        const unit = matches ? matches[0] : false;

        let milliseconds;

        switch (unit) {
        case 's': // seconds
            milliseconds = num * 1000;
            break;
        case 'ms':
        default:
            milliseconds = num;
            break;
        }

        return milliseconds || 0;
    };

    const animated = function(el, callback) {
        const defaultView = (el.ownerDocument || document).defaultView;

        setTimeout(() => {
            callback.apply();
        }, convertAnimationDelayToInt(defaultView.getComputedStyle(el).animationDuration));
    };

    var script$k = {

        name: 'activity-button',

        components: {
            ActivityIndicator
        },

        props: {

            /**
             * Make the button appear with the active state.
             *
             * @property {Boolea}n}
             */
            active: Boolean,

            /**
             * Show the activity indicator inside the button.
             *
             * @property {Boolea}n}
             */
            activity: Boolean,

            /**
             * Display the button as block width.
             *
             * @property {Boolea}n}
             */
            block: Boolean,

            /**
             * Make the button appear with the disabled state.
             *
             * @property {Boolea}n}
             */
            disabled: Boolean,

            /**
             * The button label. If not passed as a property, label must be passed
             * inside the element's html.
             *
             * @property {String}
             */
            label: String,

            /**
             * The button icon
             *
             * @property {String}
             */
            icon: String,

            /**
             * The `type` attribute for the button element.
             *
             * @property {String}
             */
            type: String,

            /**
             * The size of the button.
             *
             * @property {String}
             */
            size: {
                type: String,
                default: 'md'
            },

            /**
             * The variant of the button.
             *
             * @property {String}
             */
            variant: {
                type: String,
                default: 'primary'
            },

            /**
             * The type of activity indicator inside the button.
             *
             * @property {String}
             */
            indicator: {
                type: String,
                default: 'spinner'
            },

            /**
             * The orientation of the activity button inside the button.
             *
             * @property {String}
             */
            orientation: {
                type: String,
                default: 'right'
            }
        },

        methods: {

            /**
             * Disable the button.
             *
             * @return void
             */
            disable() {
                this.$el.disabled = true;
            },

            /**
             * Enable the button.
             *
             * @return void
             */
            enable() {
                this.$el.disabled = false;
            },

            /**
             * Show the activity indicator inside the button.
             *
             * @return void
             */
            showActivity() {
                this.disable();

                animated(this.$el, () => {
                    this.$el.classList.add('btn-activity');
                    this.$emit('activity:show');
                });
            },

            /**
             * Hide the activity indicator inside the button.
             *
             * @return void
             */
            hideActivity() {
                this.$el.classList.add('btn-hide-activity');

                animated(this.$el, () => {
                    this.enable();
                    this.$el.classList.remove('btn-activity', 'btn-hide-activity');
                    this.$emit('activity:hide');
                });
            },

            /**
             * The click callback function
             *
             * @return void
             */
            onClick(event) {
                this.$emit('click', event);
            }

        },

        computed: {

            /**
             * An object of classes to append to the button.
             *
             * @return void
             */
            classes() {
                const classes = {
                    'disabled': this.disabled,
                    'active': this.active,
                    'btn-block': this.block,
                    'btn-activity': this.activity
                };

                classes['btn-' + this.size.replace('btn-', '')] = !!this.size;
                classes['btn-' + this.variant.replace('btn-', '')] = !!this.variant;
                classes['btn-activity-' + this.orientation.replace('btn-activity-', '')] = !!this.orientation;
                classes['btn-activity-indicator-' + this.indicator.replace('btn-activity-indicator-', '')] = !!this.indicator;

                return classes;
            }
        },

        watch: {

            activity(value) {
                if(value) {
                    this.showActivity();
                }
                else {
                    this.hideActivity();
                }
            }

        }

    };

    /* script */
                const __vue_script__$j = script$k;
    /* template */
    var __vue_render__$h = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "button",
        {
          staticClass: "btn",
          class: _vm.classes,
          attrs: { type: _vm.type },
          on: { click: _vm.onClick }
        },
        [
          _vm.icon ? _c("i", { class: _vm.icon }) : _vm._e(),
          _vm._v(" " + _vm._s(_vm.label) + "\n    "),
          _vm._t("default"),
          _vm._v(" "),
          _c("activity-indicator", { attrs: { type: _vm.indicator } })
        ],
        2
      )
    };
    var __vue_staticRenderFns__$h = [];
    __vue_render__$h._withStripped = true;

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
      

      
      var BtnActivity = normalizeComponent(
        { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
        __vue_inject_styles__$j,
        __vue_script__$j,
        __vue_scope_id__$j,
        __vue_is_functional_template__$j,
        __vue_module_identifier__$j,
        undefined,
        undefined
      );

    var States = {
      'AL': 'Alabama',
      'AK': 'Alaska',
      // 'AS': 'American Samoa',
      'AZ': 'Arizona',
      'AR': 'Arkansas',
      'CA': 'California',
      'CO': 'Colorado',
      'CT': 'Connecticut',
      'DE': 'Delaware',
      'DC': 'District Of Columbia',
      // 'FM': 'Federated States Of Micronesia',
      'FL': 'Florida',
      'GA': 'Georgia',
      // 'GU': 'Guam',
      'HI': 'Hawaii',
      'ID': 'Idaho',
      'IL': 'Illinois',
      'IN': 'Indiana',
      'IA': 'Iowa',
      'KS': 'Kansas',
      'KY': 'Kentucky',
      'LA': 'Louisiana',
      'ME': 'Maine',
      // 'MH': 'Marshall Islands',
      'MD': 'Maryland',
      'MA': 'Massachusetts',
      'MI': 'Michigan',
      'MN': 'Minnesota',
      'MS': 'Mississippi',
      'MO': 'Missouri',
      'MT': 'Montana',
      'NE': 'Nebraska',
      'NV': 'Nevada',
      'NH': 'New Hampshire',
      'NJ': 'New Jersey',
      'NM': 'New Mexico',
      'NY': 'New York',
      'NC': 'North Carolina',
      'ND': 'North Dakota',
      // 'MP': 'Northern Mariana Islands',
      'OH': 'Ohio',
      'OK': 'Oklahoma',
      'OR': 'Oregon',
      // 'PW': 'Palau',
      'PA': 'Pennsylvania',
      // 'PR': 'Puerto Rico',
      'RI': 'Rhode Island',
      'SC': 'South Carolina',
      'SD': 'South Dakota',
      'TN': 'Tennessee',
      'TX': 'Texas',
      'UT': 'Utah',
      'VT': 'Vermont',
      // 'VI': 'Virgin Islands',
      'VA': 'Virginia',
      'WA': 'Washington',
      'WV': 'West Virginia',
      'WI': 'Wisconsin',
      'WY': 'Wyoming'
    };

    //

    var script$l = {

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
                const __vue_script__$k = script$l;
                
    /* template */
    var __vue_render__$i = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("label", { class: _vm.classes }, [_vm._t("default")], 2)
    };
    var __vue_staticRenderFns__$i = [];
    __vue_render__$i._withStripped = true;

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
      

      
      var FormLabel = normalizeComponent(
        { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
        __vue_inject_styles__$k,
        __vue_script__$k,
        __vue_scope_id__$k,
        __vue_is_functional_template__$k,
        __vue_module_identifier__$k,
        undefined,
        undefined
      );

    //

    var script$m = {

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
                const __vue_script__$l = script$m;
                
    /* template */
    var __vue_render__$j = function() {
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
    var __vue_staticRenderFns__$j = [];
    __vue_render__$j._withStripped = true;

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
      

      
      var FormControl$1 = normalizeComponent(
        { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
        __vue_inject_styles__$l,
        __vue_script__$l,
        __vue_scope_id__$l,
        __vue_is_functional_template__$l,
        __vue_module_identifier__$l,
        undefined,
        undefined
      );

    //

    var script$n = {

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
                const __vue_script__$m = script$n;
    /* template */
    var __vue_render__$k = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "form-group",
        { class: _vm.formGroupClasses, attrs: { group: _vm.group } },
        [
          _vm._t("label", [
            _vm.label || _vm.hasDefaultSlot
              ? _c("form-label", {
                  ref: "label",
                  attrs: { for: _vm.$attrs.id },
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
    var __vue_staticRenderFns__$k = [];
    __vue_render__$k._withStripped = true;

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
      

      
      var InputField = normalizeComponent(
        { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
        __vue_inject_styles__$m,
        __vue_script__$m,
        __vue_scope_id__$m,
        __vue_is_functional_template__$m,
        __vue_module_identifier__$m,
        undefined,
        undefined
      );

    //

    const CUSTOM_SELECT_PREFIX = 'custom-select-';

    var script$o = {

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
                const __vue_script__$n = script$o;
    /* template */
    var __vue_render__$l = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "form-group",
        { class: _vm.formGroupClasses, attrs: { group: _vm.group } },
        [
          _vm._t("label", [
            _vm.label
              ? _c("form-label", {
                  attrs: { for: _vm.$attrs.id },
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
    var __vue_staticRenderFns__$l = [];
    __vue_render__$l._withStripped = true;

      /* style */
      const __vue_inject_styles__$n = undefined;
      /* scoped */
      const __vue_scope_id__$n = undefined;
      /* module identifier */
      const __vue_module_identifier__$n = undefined;
      /* functional template */
      const __vue_is_functional_template__$n = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var SelectField = normalizeComponent(
        { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
        __vue_inject_styles__$n,
        __vue_script__$n,
        __vue_scope_id__$n,
        __vue_is_functional_template__$n,
        __vue_module_identifier__$n,
        undefined,
        undefined
      );

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
        if (geocoder[type]) {
            return geocoder[type];
        }
        else if (type === 'latitude') {
            return geocoder.geometry.location.lat();
        }
        else if (type === 'longitude') {
            return geocoder.geometry.location.lng();
        }

        const aliases = ALIASES[type] || (isArray(type) ? type : [type]);

        const values = geocoder.address_components.map(component => {
            if (intersection(component.types, aliases).length) {
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

        value = isArray(value) ? value.join(' ') : value;

        if (binding.modifiers.query) {
            vnode.componentInstance.query = value;
        }

        model[prop] = value;

        return value;
    }

    var PlaceAutofill = {

        bind(el, binding, vnode) {
            vnode.componentInstance.$on('select', (place, geocoder) => {
                vnode.context.$nextTick(() => {
                    update(binding, vnode, extract(binding.arg, binding.modifiers, geocoder));
                });
            });
        }

    };

    function geocode(options) {
        const geocoder = new window.google.maps.Geocoder();

        return new Promise((resolve, reject) => {
            if (!options.geometry) {
                geocoder.geocode(options, (results, status) => {
                    if (status === window.google.maps.GeocoderStatus.OK) {
                        resolve(results);
                    }
                    else {
                        reject(status);
                    }
                });
            }
            else {
                resolve([options]);
            }
        });
    }

    //
    //
    //
    //
    //
    //
    //
    //
    //

    var script$p = {

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

    /* script */
                const __vue_script__$o = script$p;
    /* template */
    var __vue_render__$m = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "li",
        {
          staticClass: "autocomplete-list-item",
          on: { focus: _vm.onFocus, onBlur: _vm.onBlur }
        },
        [
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault();
                  return _vm.onClick($event)
                },
                focus: _vm.onFocus,
                blur: _vm.onBlur
              }
            },
            [
              _c("span", { staticClass: "autocomplete-list-item-icon" }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "autocomplete-list-item-label" },
                [_vm._t("default")],
                2
              )
            ]
          )
        ]
      )
    };
    var __vue_staticRenderFns__$m = [];
    __vue_render__$m._withStripped = true;

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
      

      
      var PlaceAutocompleteListItem = normalizeComponent(
        { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
        __vue_inject_styles__$o,
        __vue_script__$o,
        __vue_scope_id__$o,
        __vue_is_functional_template__$o,
        __vue_module_identifier__$o,
        undefined,
        undefined
      );

    //

    var script$q = {

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

    /* script */
                const __vue_script__$p = script$q;
                
    /* template */
    var __vue_render__$n = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "autocomplete-list-wrapper" }, [
        _c(
          "ul",
          { staticClass: "autocomplete-list" },
          _vm._l(_vm.items, function(item, i) {
            return _c(
              "place-autocomplete-list-item",
              {
                key: item.id,
                attrs: { item: item },
                on: { click: _vm.onClick, focus: _vm.onFocus, blur: _vm.onBlur }
              },
              [_vm._v("\n            " + _vm._s(item[_vm.display]) + "\n        ")]
            )
          })
        )
      ])
    };
    var __vue_staticRenderFns__$n = [];
    __vue_render__$n._withStripped = true;

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
      

      
      var PlaceAutocompleteList = normalizeComponent(
        { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
        __vue_inject_styles__$p,
        __vue_script__$p,
        __vue_scope_id__$p,
        __vue_is_functional_template__$p,
        __vue_module_identifier__$p,
        undefined,
        undefined
      );

    //

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

    var script$r = {

        name: 'place-autocomplete-field',

        mixins: [
            FormControl
        ],

        components: {
            FormGroup,
            InputField,
            ActivityIndicator,
            PlaceAutocompleteList
        },

        props: {

            apiKey: {
                type: String,
                required: true
            },

            baseUri: {
                type: String,
                default: 'https://maps.googleapis.com/maps/api/js'
            },

            componentRestrictions: {
                type: [Boolean, Object, String],
                default: false
            },

            custom: Boolean,

            libraries: {
                type: Array,
                default() {
                    return ['geometry', 'places'];
                }
            },

            bounds: {
                type: [Boolean, Object, String],
                default: false
            },

            location: {
                type: [Boolean, Object, String],
                default: false
            },

            offset: {
                type: Boolean,
                default: false
            },

            radius: {
                type: Boolean,
                default: false
            },

            types: {
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
            script(`${this.baseUri}?key=${this.apiKey}&libraries=${this.libraries.join(',')}`).then(() => {
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

    /* script */
                const __vue_script__$q = script$r;
    /* template */
    var __vue_render__$o = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        {
          staticClass: "autocomplete-field",
          on: { keydown: _vm.onKeydown, keyup: _vm.onKeyup }
        },
        [
          _c(
            "input-field",
            _vm._b(
              {
                directives: [{ name: "bind-events", rawName: "v-bind-events" }],
                attrs: {
                  label: _vm.label,
                  errors: _vm.errors,
                  value: _vm.value,
                  custom: _vm.custom,
                  autocomplete: "no"
                },
                on: {
                  blur: _vm.onBlur,
                  focus: _vm.onFocus,
                  input: function($event) {
                    _vm.$emit("input", _vm.query);
                  }
                },
                model: {
                  value: _vm.query,
                  callback: function($$v) {
                    _vm.query = $$v;
                  },
                  expression: "query"
                }
              },
              "input-field",
              _vm.$attrs,
              false
            ),
            [
              _vm.activity
                ? _c("activity-indicator", {
                    attrs: { size: "xs", type: "spinner" }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm.predictions && _vm.showPredictions
            ? _c("place-autocomplete-list", {
                attrs: { items: _vm.predictions },
                on: { "item:click": _vm.onItemClick, "item:blur": _vm.onItemBlur }
              })
            : _vm._e()
        ],
        1
      )
    };
    var __vue_staticRenderFns__$o = [];
    __vue_render__$o._withStripped = true;

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
      

      
      var PlaceAutocompleteField = normalizeComponent(
        { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
        __vue_inject_styles__$q,
        __vue_script__$q,
        __vue_scope_id__$q,
        __vue_is_functional_template__$q,
        __vue_module_identifier__$q,
        undefined,
        undefined
      );

    //
    var script$s = {
      name: 'contact-info-fieldset',
      mixins: [FormComponent],
      components: {
        InputField,
        SelectField,
        PlaceAutocompleteField
      },
      directives: {
        PlaceAutofill
      },
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
          return States;
        }

      }
    };

    /* script */
                const __vue_script__$r = script$s;
                
    /* template */
    var __vue_render__$p = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "fieldset",
        [
          _vm.page.options.add_title
            ? _c(
                "select-field",
                {
                  attrs: {
                    name: "title",
                    label: "Title",
                    placeholder: "Title",
                    errors: _vm.errors,
                    custom: ""
                  },
                  model: {
                    value: _vm.form.title,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "title", $$v);
                    },
                    expression: "form.title"
                  }
                },
                _vm._l(_vm.titles, function(value) {
                  return _c("option", {
                    domProps: { value: value, innerHTML: _vm._s(value) }
                  })
                })
              )
            : _vm._e(),
          _vm._v(" "),
          _c("input-field", {
            attrs: {
              name: "first",
              label: "First Name",
              placeholder: "First Name",
              errors: _vm.errors,
              custom: ""
            },
            model: {
              value: _vm.form.first,
              callback: function($$v) {
                _vm.$set(_vm.form, "first", $$v);
              },
              expression: "form.first"
            }
          }),
          _vm._v(" "),
          _c("input-field", {
            attrs: {
              name: "last",
              label: "Last Name",
              placeholder: "Last Name",
              errors: _vm.errors,
              custom: ""
            },
            model: {
              value: _vm.form.last,
              callback: function($$v) {
                _vm.$set(_vm.form, "last", $$v);
              },
              expression: "form.last"
            }
          }),
          _vm._v(" "),
          _c("input-field", {
            attrs: {
              type: "email",
              name: "email",
              label: "Email",
              placeholder: "you@example.com",
              errors: _vm.errors,
              custom: ""
            },
            model: {
              value: _vm.form.email,
              callback: function($$v) {
                _vm.$set(_vm.form, "email", $$v);
              },
              expression: "form.email"
            }
          }),
          _vm._v(" "),
          _vm.page.options.add_phone
            ? _c("input-field", {
                attrs: {
                  name: "phone",
                  label: "Phone Number",
                  placeholder: "Phone Number",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.phone,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "phone", $$v);
                  },
                  expression: "form.phone"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.address || _vm.page.options.add_street
            ? _c("place-autocomplete-field", {
                directives: [
                  {
                    name: "place-autofill",
                    rawName: "v-place-autofill:street.query",
                    value: _vm.form.street,
                    expression: "form.street",
                    arg: "street",
                    modifiers: { query: true }
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
                    rawName: "v-place-autofill:state.short",
                    value: _vm.form.state,
                    expression: "form.state",
                    arg: "state",
                    modifiers: { short: true }
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
                  name: "street",
                  label: "Address",
                  placeholder: "Address",
                  errors: _vm.errors,
                  "api-key": "AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU",
                  custom: ""
                },
                model: {
                  value: _vm.form.street,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "street", $$v);
                  },
                  expression: "form.street"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.address || _vm.page.options.add_city || _vm.page.options.add_zip
            ? _c("div", { staticClass: "row" }, [
                _vm.address || _vm.page.options.add_city
                  ? _c(
                      "div",
                      { staticClass: "col-sm-8" },
                      [
                        _c("input-field", {
                          attrs: {
                            name: "city",
                            label: "City",
                            placeholder: "City",
                            errors: _vm.errors,
                            custom: ""
                          },
                          model: {
                            value: _vm.form.city,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "city", $$v);
                            },
                            expression: "form.city"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.address || _vm.page.options.add_zip
                  ? _c(
                      "div",
                      {
                        class: {
                          "col-sm-4": _vm.address || _vm.page.options.add_city,
                          "col-sm-12": !_vm.address && !_vm.page.options.add_city
                        }
                      },
                      [
                        _c("input-field", {
                          attrs: {
                            name: "zip",
                            label: "Zip",
                            placeholder: "Zip",
                            errors: _vm.errors,
                            maxLength: "5",
                            custom: ""
                          },
                          model: {
                            value: _vm.form.zip,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "zip", $$v);
                            },
                            expression: "form.zip"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.address || _vm.page.options.add_state
            ? _c(
                "select-field",
                {
                  attrs: {
                    name: "state",
                    label: "State",
                    errors: _vm.errors,
                    custom: ""
                  },
                  model: {
                    value: _vm.form.state,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "state", $$v);
                    },
                    expression: "form.state"
                  }
                },
                _vm._l(_vm.states, function(label, value) {
                  return _c("option", {
                    domProps: { value: value, innerHTML: _vm._s(label) }
                  })
                })
              )
            : _vm._e()
        ],
        1
      )
    };
    var __vue_staticRenderFns__$p = [];
    __vue_render__$p._withStripped = true;

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
      

      
      var ContactInfoFieldset = normalizeComponent(
        { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
        __vue_inject_styles__$r,
        __vue_script__$r,
        __vue_scope_id__$r,
        __vue_is_functional_template__$r,
        __vue_module_identifier__$r,
        undefined,
        undefined
      );

    //

    var script$t = {

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
                const __vue_script__$s = script$t;
                
    /* template */
    var __vue_render__$q = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "form-group",
        { class: _vm.formGroupClasses, attrs: { group: _vm.group } },
        [
          _vm._t("label", [
            _vm.label || _vm.hasDefaultSlot
              ? _c(
                  "form-label",
                  { attrs: { for: _vm.$attrs.id } },
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
                _c(
                  "textarea",
                  _vm._b(
                    {
                      directives: [
                        { name: "bind-events", rawName: "v-bind-events" },
                        {
                          name: "autogrow",
                          rawName: "v-autogrow",
                          value: _vm.autogrow,
                          expression: "autogrow"
                        }
                      ],
                      domProps: { value: _vm.value },
                      on: {
                        input: function($event) {
                          _vm.$emit("input", $event.target.value);
                        }
                      }
                    },
                    "textarea",
                    _vm.controlAttributes,
                    false
                  )
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
    var __vue_staticRenderFns__$q = [];
    __vue_render__$q._withStripped = true;

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
      

      
      var TextareaField = normalizeComponent(
        { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
        __vue_inject_styles__$s,
        __vue_script__$s,
        __vue_scope_id__$s,
        __vue_is_functional_template__$s,
        __vue_module_identifier__$s,
        undefined,
        undefined
      );

    function hash(str) {
        let hash = 0;
        for(let i = 0; i < str.length; i++) {
            hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

    //

    var script$u = {

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
            prop: 'checkedValue',
            event: 'change'
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
            },

            /**
             * Display the form field and label inline
             *
             * @property Function
             */
            inline: Boolean

        },

        computed: {

            controlClasses() {
                return this.mergeClasses(
                    (this.spacing || ''),
                    this.inputClass,
                    ((this.valid || this.validFeedback) ? 'is-valid' : ''),
                    ((this.invalid || this.invalidFeedback) ? 'is-invalid' : '')
                );
            },

            hash() {
                return hash(this._uid.toString());
            },

            labelClass() {
                return prefix('label', this.controlClass);
            },

            inputClass() {
                return prefix('input', this.controlClass);
            },

            inlineClass() {
                return this.inline ? prefix('inline', this.controlClass) : '';
            }

        },

        methods: {

            update(event) {
                this.$emit('change', event.target.value);
                this.$emit('input', event);
            }

        }

    };

    /* script */
                const __vue_script__$t = script$u;
                
    /* template */
    var __vue_render__$r = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        {
          class: _vm.mergeClasses(
            this.custom ? "custom-radio" : "",
            _vm.controlClass,
            _vm.inline ? _vm.inlineClass : ""
          )
        },
        [
          _c(
            "input",
            _vm._b(
              {
                directives: [{ name: "bind-events", rawName: "v-bind-events" }],
                attrs: { type: "radio", id: _vm.$attrs.id || _vm.hash },
                domProps: {
                  value: _vm.value,
                  checked: _vm.checkedValue === _vm.value
                },
                on: { change: _vm.update }
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
              class: _vm.mergeClasses(_vm.labelClass),
              attrs: { for: _vm.$attrs.id || _vm.hash }
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
    var __vue_staticRenderFns__$r = [];
    __vue_render__$r._withStripped = true;

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
      

      
      var RadioField = normalizeComponent(
        { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
        __vue_inject_styles__$t,
        __vue_script__$t,
        __vue_scope_id__$t,
        __vue_is_functional_template__$t,
        __vue_module_identifier__$t,
        undefined,
        undefined
      );

    //

    var script$v = {

        name: 'checkbox-field',

        extends: RadioField,

        mixins: [
            MergeClasses
        ],

        model: {
            prop: 'checkedValues',
            event: 'change'
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

            update(event) {
                const value = event.target.value;
                const checked = this.checkedValues.slice(0);
                const index = this.checkedValues.indexOf(value);

                if(index === -1) {
                    checked.push(value);
                }
                else {
                    checked.splice(index, 1);
                }

                this.$emit('change', checked);
                this.$emit('input', event);
            }

        }
    };

    /* script */
                const __vue_script__$u = script$v;
                
    /* template */
    var __vue_render__$s = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        {
          class: _vm.mergeClasses(
            this.custom ? "custom-checkbox" : "",
            _vm.controlClass,
            _vm.inline ? _vm.inlineClass : ""
          )
        },
        [
          _c(
            "input",
            _vm._b(
              {
                directives: [{ name: "bind-events", rawName: "v-bind-events" }],
                attrs: { type: "checkbox", id: _vm.$attrs.id || _vm.hash },
                domProps: {
                  value: _vm.value,
                  checked: _vm.checkedValues.indexOf(_vm.value) !== -1
                },
                on: { input: _vm.update }
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
              class: _vm.mergeClasses(_vm.labelClass),
              attrs: { for: _vm.$attrs.id || _vm.hash }
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
    var __vue_staticRenderFns__$s = [];
    __vue_render__$s._withStripped = true;

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
      

      
      var CheckboxField = normalizeComponent(
        { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
        __vue_inject_styles__$u,
        __vue_script__$u,
        __vue_scope_id__$u,
        __vue_is_functional_template__$u,
        __vue_module_identifier__$u,
        undefined,
        undefined
      );

    //
    var script$w = {
      name: 'employment-info-fieldset',
      mixins: [FormComponent],
      props: {
        legends: {
          type: Boolean,
          default: true
        }
      },
      components: {
        InputField,
        CheckboxField
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
    };

    /* script */
                const __vue_script__$v = script$w;
                
    /* template */
    var __vue_render__$t = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "fieldset",
        [
          _vm.legends ? _c("h3", [_vm._v("Employment Information")]) : _vm._e(),
          _vm._v(" "),
          !_vm.recurring
            ? _c("p", [
                _c("small", {
                  staticClass: "text-muted",
                  domProps: { innerHTML: _vm._s(_vm.employmentOccurMessage) }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.isRetired
            ? _c("input-field", {
                ref: "employer",
                attrs: {
                  id: "employer",
                  name: "employer",
                  label: "Employer",
                  placeholder: "Employer",
                  disabled: _vm.isRetired,
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.employer,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "employer", $$v);
                  },
                  expression: "form.employer"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          !_vm.isRetired
            ? _c("input-field", {
                ref: "occupation",
                attrs: {
                  id: "occupation",
                  name: "occupation",
                  label: "Occupation",
                  placeholder: "Occupation",
                  disabled: _vm.isRetired,
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.occupation,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "occupation", $$v);
                  },
                  expression: "form.occupation"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("checkbox-field", {
            attrs: { label: "I'm retired", value: "1", custom: "" },
            model: {
              value: _vm.form.retired,
              callback: function($$v) {
                _vm.$set(_vm.form, "retired", $$v);
              },
              expression: "form.retired"
            }
          })
        ],
        1
      )
    };
    var __vue_staticRenderFns__$t = [];
    __vue_render__$t._withStripped = true;

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
      

      
      var EmploymentInfoFieldset = normalizeComponent(
        { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
        __vue_inject_styles__$v,
        __vue_script__$v,
        __vue_scope_id__$v,
        __vue_is_functional_template__$v,
        __vue_module_identifier__$v,
        undefined,
        undefined
      );

    //

    var script$x = {

        name: 'btn-group',

        components: {
            Btn
        },

        mixins: [
            Colorable,
            MergeClasses
        ],

        props: {

            /**
             * An array of buttons
             *
             * @type {Array}
             */
            buttons: Array,

            /**
             * Denote the button group as toggle buttons
             *
             * @type {Boolean}
             */
            toggle: Boolean,

            /**
             * Display the buttons vertically
             *
             * @type {Boolean}
             */
            vertical: Boolean

        },

        computed: {

            classes() {
                return this.mergeClasses(
                    this.colorableClasses, {
                        'btn-group': !this.vertical,
                        'btn-group-toggle': this.toggle,
                        'btn-group-vertical': this.vertical
                    }
                );
            }

        }

    };

    /* script */
                const __vue_script__$w = script$x;
                
    /* template */
    var __vue_render__$u = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        {
          class: _vm.classes,
          attrs: { "data-toggle": _vm.toggle ? "buttons" : false, role: "group" }
        },
        [
          _vm._l(_vm.buttons, function(button, i) {
            return _vm.buttons
              ? _c("btn", _vm._b({ key: i }, "btn", button, false))
              : _vm._e()
          }),
          _vm._v(" "),
          _vm._t("default")
        ],
        2
      )
    };
    var __vue_staticRenderFns__$u = [];
    __vue_render__$u._withStripped = true;

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
      

      
      var BtnGroup = normalizeComponent(
        { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
        __vue_inject_styles__$w,
        __vue_script__$w,
        __vue_scope_id__$w,
        __vue_is_functional_template__$w,
        __vue_module_identifier__$w,
        undefined,
        undefined
      );

    //
    //
    //
    //
    //
    //

    var script$y = {

        name: 'btn-group-toggle'

    };

    /* script */
                const __vue_script__$x = script$y;
                
    /* template */
    var __vue_render__$v = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { staticClass: "btn-group-toggle", attrs: { "data-toggle": "buttons" } },
        [_vm._t("default")],
        2
      )
    };
    var __vue_staticRenderFns__$v = [];
    __vue_render__$v._withStripped = true;

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
      

      
      normalizeComponent(
        { render: __vue_render__$v, staticRenderFns: __vue_staticRenderFns__$v },
        __vue_inject_styles__$x,
        __vue_script__$x,
        __vue_scope_id__$x,
        __vue_is_functional_template__$x,
        __vue_module_identifier__$x,
        undefined,
        undefined
      );

    //
    //
    //
    //
    //
    //

    var script$z = {

        name: 'btn-toolbar'

    };

    /* script */
                const __vue_script__$y = script$z;
                
    /* template */
    var __vue_render__$w = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { staticClass: "btn-toolbar", attrs: { role: "toolbar" } },
        [_vm._t("default")],
        2
      )
    };
    var __vue_staticRenderFns__$w = [];
    __vue_render__$w._withStripped = true;

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
      

      
      normalizeComponent(
        { render: __vue_render__$w, staticRenderFns: __vue_staticRenderFns__$w },
        __vue_inject_styles__$y,
        __vue_script__$y,
        __vue_scope_id__$y,
        __vue_is_functional_template__$y,
        __vue_module_identifier__$y,
        undefined,
        undefined
      );

    //
    var script$A = {
      name: 'toggle-button',
      inheritAttrs: false,
      mixins: [FormControl],
      components: {
        Btn,
        BtnGroup
      },
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
        this.$refs.buttons.map((vnode, i) => {
          if (vnode.$el.classList.contains('btn-success')) {
            this.$emit('input', Object.keys(this.buttons).find(key => this.buttons[key] === vnode.$el.innerHTML));
          }
        });
      }

    };

    /* script */
                const __vue_script__$z = script$A;
                
    /* template */
    var __vue_render__$x = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "btn-group",
        { staticClass: "toggle-button", attrs: { size: _vm.size } },
        [
          _vm._l(_vm.buttons, function(label, i) {
            return _c("btn", {
              key: i,
              ref: "buttons",
              refInFor: true,
              attrs: {
                outline: i !== _vm.value.toString(),
                variant: i === _vm.value.toString() ? "success" : "secondary",
                type: "button"
              },
              domProps: { innerHTML: _vm._s(label) },
              on: {
                click: function($event) {
                  _vm.$emit("input", i);
                }
              }
            })
          }),
          _vm._v(" "),
          _vm._t("default")
        ],
        2
      )
    };
    var __vue_staticRenderFns__$x = [];
    __vue_render__$x._withStripped = true;

      /* style */
      const __vue_inject_styles__$z = undefined;
      /* scoped */
      const __vue_scope_id__$z = undefined;
      /* module identifier */
      const __vue_module_identifier__$z = undefined;
      /* functional template */
      const __vue_is_functional_template__$z = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var ToggleButton = normalizeComponent(
        { render: __vue_render__$x, staticRenderFns: __vue_staticRenderFns__$x },
        __vue_inject_styles__$z,
        __vue_script__$z,
        __vue_scope_id__$z,
        __vue_is_functional_template__$z,
        __vue_module_identifier__$z,
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

    //
    //
    //
    //
    //
    //
    //
    //

    var script$B = {

        name: 'input-group-text'

    };

    /* script */
                const __vue_script__$A = script$B;
                
    /* template */
    var __vue_render__$y = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("span", { staticClass: "input-group-text" }, [_vm._t("default")], 2)
    };
    var __vue_staticRenderFns__$y = [];
    __vue_render__$y._withStripped = true;

      /* style */
      const __vue_inject_styles__$A = undefined;
      /* scoped */
      const __vue_scope_id__$A = undefined;
      /* module identifier */
      const __vue_module_identifier__$A = undefined;
      /* functional template */
      const __vue_is_functional_template__$A = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var InputGroupText = normalizeComponent(
        { render: __vue_render__$y, staticRenderFns: __vue_staticRenderFns__$y },
        __vue_inject_styles__$A,
        __vue_script__$A,
        __vue_scope_id__$A,
        __vue_is_functional_template__$A,
        __vue_module_identifier__$A,
        undefined,
        undefined
      );

    //

    var script$C = {

        name: 'input-group-append',

        components: {
            InputGroupText
        },

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
                const __vue_script__$B = script$C;
                
    /* template */
    var __vue_render__$z = function() {
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
    var __vue_staticRenderFns__$z = [];
    __vue_render__$z._withStripped = true;

      /* style */
      const __vue_inject_styles__$B = undefined;
      /* scoped */
      const __vue_scope_id__$B = undefined;
      /* module identifier */
      const __vue_module_identifier__$B = undefined;
      /* functional template */
      const __vue_is_functional_template__$B = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var InputGroupAppend = normalizeComponent(
        { render: __vue_render__$z, staticRenderFns: __vue_staticRenderFns__$z },
        __vue_inject_styles__$B,
        __vue_script__$B,
        __vue_scope_id__$B,
        __vue_is_functional_template__$B,
        __vue_module_identifier__$B,
        undefined,
        undefined
      );

    //

    var script$D = {

        name: 'input-group-prepend',

        components: {
            InputGroupText
        },

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
                const __vue_script__$C = script$D;
                
    /* template */
    var __vue_render__$A = function() {
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
    var __vue_staticRenderFns__$A = [];
    __vue_render__$A._withStripped = true;

      /* style */
      const __vue_inject_styles__$C = undefined;
      /* scoped */
      const __vue_scope_id__$C = undefined;
      /* module identifier */
      const __vue_module_identifier__$C = undefined;
      /* functional template */
      const __vue_is_functional_template__$C = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var InputGroupPrepend = normalizeComponent(
        { render: __vue_render__$A, staticRenderFns: __vue_staticRenderFns__$A },
        __vue_inject_styles__$C,
        __vue_script__$C,
        __vue_scope_id__$C,
        __vue_is_functional_template__$C,
        __vue_module_identifier__$C,
        undefined,
        undefined
      );

    //

    var script$E = {

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
                const __vue_script__$D = script$E;
    /* template */
    var __vue_render__$B = function() {
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
                        domProps: { innerHTML: _vm._s(value) }
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
                        domProps: { innerHTML: _vm._s(value) }
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
    var __vue_staticRenderFns__$B = [];
    __vue_render__$B._withStripped = true;

      /* style */
      const __vue_inject_styles__$D = undefined;
      /* scoped */
      const __vue_scope_id__$D = undefined;
      /* module identifier */
      const __vue_module_identifier__$D = undefined;
      /* functional template */
      const __vue_is_functional_template__$D = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var InputGroup = normalizeComponent(
        { render: __vue_render__$B, staticRenderFns: __vue_staticRenderFns__$B },
        __vue_inject_styles__$D,
        __vue_script__$D,
        __vue_scope_id__$D,
        __vue_is_functional_template__$D,
        __vue_module_identifier__$D,
        undefined,
        undefined
      );

    //
    var script$F = {
      name: 'payment-buttons',
      mixins: [FormControl],
      components: {
        Btn,
        InputField,
        InputGroup,
        FormFeedback
      },
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
        }

      }
    };

    /* script */
                const __vue_script__$E = script$F;
                
    /* template */
    var __vue_render__$C = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        {
          staticClass: "payment-buttons",
          class: { "was-validated": !!_vm.errors.amount }
        },
        [
          _c(
            "div",
            { staticClass: "payment-buttons-grid mb-2" },
            _vm._l(_vm.amounts, function(amount) {
              return _c("btn", {
                key: amount,
                attrs: {
                  type: "button",
                  outline: "",
                  variant: "success",
                  active: _vm.value
                    ? _vm.value.toString() === amount.toString()
                    : false
                },
                domProps: { innerHTML: _vm._s("$" + amount) },
                on: {
                  click: function($event) {
                    _vm.onClickButton(amount);
                  }
                }
              })
            })
          ),
          _vm._v(" "),
          _c(
            "input-group",
            {
              class: {
                "is-invalid": !!_vm.errors.amount,
                "mb-3": !_vm.page.site.recurring
              },
              attrs: { prepend: "$" }
            },
            [
              _c("input-field", {
                attrs: {
                  custom: "",
                  label: "Other Amount",
                  placeholder: "Other Amount",
                  group: false,
                  value: _vm.value
                },
                on: {
                  input: function(value) {
                    return _vm.$emit("input", value)
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm.errors.amount
            ? _c("form-feedback", {
                staticClass: "d-block",
                attrs: { invalid: "" },
                domProps: { innerHTML: _vm._s(_vm.errors.amount.join("<br>")) }
              })
            : _vm._e()
        ],
        1
      )
    };
    var __vue_staticRenderFns__$C = [];
    __vue_render__$C._withStripped = true;

      /* style */
      const __vue_inject_styles__$E = undefined;
      /* scoped */
      const __vue_scope_id__$E = undefined;
      /* module identifier */
      const __vue_module_identifier__$E = undefined;
      /* functional template */
      const __vue_is_functional_template__$E = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var PaymentButtons = normalizeComponent(
        { render: __vue_render__$C, staticRenderFns: __vue_staticRenderFns__$C },
        __vue_inject_styles__$E,
        __vue_script__$E,
        __vue_scope_id__$E,
        __vue_is_functional_template__$E,
        __vue_module_identifier__$E,
        undefined,
        undefined
      );

    //
    var script$G = {
      name: 'select-donation-fieldset',
      components: {
        Icon: FontAwesomeIcon,
        Alert,
        AlertHeading,
        ToggleButton,
        PaymentButtons
      },
      mixins: [FormComponent],
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
    };

    /* script */
                const __vue_script__$F = script$G;
                
    /* template */
    var __vue_render__$D = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "fieldset",
        [
          _vm.legends
            ? _c("h3", { class: { "mb-0": _vm.hasMinimumAmount } }, [
                _vm._v("Select your donation amount")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.hasMinimumAmount
            ? _c("div", { staticClass: "mb-2" }, [
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v(
                    "Minimum accepted amount is $" +
                      _vm._s(_vm.page.options.min_amount)
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("payment-buttons", {
            attrs: {
              name: "amount",
              amounts: _vm.amounts,
              errors: _vm.errors,
              page: _vm.page
            },
            model: {
              value: _vm.form.amount,
              callback: function($$v) {
                _vm.$set(_vm.form, "amount", $$v);
              },
              expression: "form.amount"
            }
          }),
          _vm._v(" "),
          _vm.page.site.recurring && !_vm.page.options.recurring_only
            ? _c(
                "div",
                { staticClass: "form-group mt-3" },
                [
                  _c("label", {
                    domProps: { innerHTML: _vm._s(_vm.recurringMessage) }
                  }),
                  _vm._v(" "),
                  _c("toggle-button", {
                    attrs: { size: "lg" },
                    model: {
                      value: _vm.form.recurring,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "recurring", _vm._n($$v));
                      },
                      expression: "form.recurring"
                    }
                  }),
                  _vm._v(" "),
                  !_vm.recurring
                    ? _c("small", { staticClass: "text-muted form-text" }, [
                        _vm._v(
                          "You are making a single donation of the amount entered above. Click the 'monthly' button to make your gift go further as an automatic monthly donation."
                        )
                      ])
                    : _c("small", { staticClass: "text-muted form-text" }, [
                        _vm._v(
                          "This amount will be charged automatically once each month, on or about the " +
                            _vm._s(_vm.chargeDate) +
                            ". You may cancel your donation at any time by contacting us."
                        )
                      ])
                ],
                1
              )
            : _vm.page.site.recurring && _vm.page.options.recurring_only
              ? _c(
                  "alert",
                  { staticClass: "mt-3", attrs: { variant: "warning" } },
                  [
                    _c(
                      "alert-heading",
                      { staticClass: "h3 d-flex align-items-center" },
                      [
                        _c("icon", {
                          staticClass: "mr-3",
                          attrs: { icon: "exclamation-triangle", size: "1.5x" }
                        }),
                        _vm._v(" Monthly Donation\n        ")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.page.options.recur_message
                      ? _c("p", {
                          staticClass: "font-weight-light",
                          domProps: {
                            innerHTML: _vm._s(_vm.page.options.recur_message)
                          }
                        })
                      : _c("p", [
                          _vm._v(
                            "\n            Please note that this will be a monthly recurring donation. The\n            amount you select will be charged automatically once each month\n            on or about "
                          ),
                          _c("em", [_vm._v(_vm._s(_vm.chargeDate))]),
                          _vm._v(
                            ".  You may cancel your donation\n            at any time by contacting us.\n        "
                          )
                        ])
                  ],
                  1
                )
              : _vm._e()
        ],
        1
      )
    };
    var __vue_staticRenderFns__$D = [];
    __vue_render__$D._withStripped = true;

      /* style */
      const __vue_inject_styles__$F = undefined;
      /* scoped */
      const __vue_scope_id__$F = undefined;
      /* module identifier */
      const __vue_module_identifier__$F = undefined;
      /* functional template */
      const __vue_is_functional_template__$F = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var SelectDonationFieldset = normalizeComponent(
        { render: __vue_render__$D, staticRenderFns: __vue_staticRenderFns__$D },
        __vue_inject_styles__$F,
        __vue_script__$F,
        __vue_scope_id__$F,
        __vue_is_functional_template__$F,
        __vue_module_identifier__$F,
        undefined,
        undefined
      );

    //
    var script$H = {
      name: 'page-type-donation',
      extends: PageType,
      components: {
        BtnActivity,
        TextareaField,
        PaymentGateways,
        ContactInfoFieldset,
        EmploymentInfoFieldset,
        SelectDonationFieldset
      }
    };

    /* script */
                const __vue_script__$G = script$H;
                
    /* template */
    var __vue_render__$E = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        [
          _c("select-donation-fieldset", {
            attrs: { form: _vm.form, errors: _vm.errors, page: _vm.page }
          }),
          _vm._v(" "),
          _c("contact-info-fieldset", {
            attrs: {
              form: _vm.form,
              errors: _vm.errors,
              page: _vm.page,
              address: ""
            }
          }),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.shouldShowEmployment
            ? [
                _c("employment-info-fieldset", {
                  attrs: { form: _vm.form, errors: _vm.errors, page: _vm.page }
                }),
                _vm._v(" "),
                _c("hr")
              ]
            : _vm._e(),
          _vm._v(" "),
          _c("payment-gateways", {
            attrs: {
              "page-type": this,
              form: _vm.form,
              errors: _vm.errors,
              page: _vm.page
            }
          }),
          _vm._v(" "),
          _vm.page.options.add_comment
            ? _c("textarea-field", {
                directives: [{ name: "autogrow", rawName: "v-autogrow" }],
                attrs: { id: "comment", label: _vm.commentMessage },
                model: {
                  value: _vm.form.comment,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "comment", $$v);
                  },
                  expression: "form.comment"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("btn-activity", {
            attrs: {
              type: "submit",
              size: "lg",
              activity: _vm.submitting,
              label:
                _vm.buttonLabel || _vm.page.site.config.giveworks.button.donate,
              block: ""
            }
          }),
          _vm._v(" "),
          _vm.page.options.add_optin
            ? _c("div", [
                _c("label", { staticClass: "custom-control custom-checkbox" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.optin,
                        expression: "form.optin"
                      }
                    ],
                    staticClass: "custom-control-input",
                    attrs: { type: "checkbox", checked: "" },
                    domProps: {
                      checked: Array.isArray(_vm.form.optin)
                        ? _vm._i(_vm.form.optin, null) > -1
                        : _vm.form.optin
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.form.optin,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false;
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v);
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(_vm.form, "optin", $$a.concat([$$v]));
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.form,
                                "optin",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              );
                          }
                        } else {
                          _vm.$set(_vm.form, "optin", $$c);
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "custom-control-indicator" }),
                  _vm._v(" "),
                  _c("small", {
                    staticClass: "custom-control-label text-muted form-text",
                    domProps: { innerHTML: _vm._s(_vm.optinMessage) }
                  })
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.page.site.disclaimer
            ? _c("div", { staticClass: "mt-3" }, [
                _c("small", {
                  staticClass: "text-muted",
                  domProps: { innerHTML: _vm._s(_vm.page.site.disclaimer) }
                })
              ])
            : _vm._e()
        ],
        2
      )
    };
    var __vue_staticRenderFns__$E = [];
    __vue_render__$E._withStripped = true;

      /* style */
      const __vue_inject_styles__$G = undefined;
      /* scoped */
      const __vue_scope_id__$G = undefined;
      /* module identifier */
      const __vue_module_identifier__$G = undefined;
      /* functional template */
      const __vue_is_functional_template__$G = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var Donation = normalizeComponent(
        { render: __vue_render__$E, staticRenderFns: __vue_staticRenderFns__$E },
        __vue_inject_styles__$G,
        __vue_script__$G,
        __vue_scope_id__$G,
        __vue_is_functional_template__$G,
        __vue_module_identifier__$G,
        undefined,
        undefined
      );

    //
    var script$I = {
      name: 'page-type-petition',
      extends: PageType,
      components: {
        BtnActivity,
        CheckboxField,
        ContactInfoFieldset,
        EmploymentInfoFieldset,
        SelectDonationFieldset
      }
    };

    /* script */
                const __vue_script__$H = script$I;
                
    /* template */
    var __vue_render__$F = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        [
          _c("contact-info-fieldset", {
            attrs: {
              legends: false,
              form: _vm.form,
              errors: _vm.errors,
              page: _vm.page
            }
          }),
          _vm._v(" "),
          _vm.shouldShowEmployment
            ? _c("employment-info-fieldset", {
                attrs: {
                  legends: false,
                  form: _vm.form,
                  errors: _vm.errors,
                  page: _vm.page
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.page.options.add_comment
            ? _c("textarea-field", {
                directives: [{ name: "autogrow", rawName: "v-autogrow" }],
                attrs: { id: "comment", label: _vm.commentMessage },
                model: {
                  value: _vm.form.comment,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "comment", $$v);
                  },
                  expression: "form.comment"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("btn-activity", {
            attrs: {
              size: "lg",
              type: "submit",
              orientation: "right",
              block: true,
              activity: _vm.submitting,
              label:
                _vm.buttonLabel || _vm.page.site.config.giveworks.button.petition
            }
          }),
          _vm._v(" "),
          _vm.page.options.add_optin
            ? _c("checkbox-field", {
                attrs: { label: _vm.optinMessage, value: "1", custom: "" }
              })
            : _vm._e()
        ],
        1
      )
    };
    var __vue_staticRenderFns__$F = [];
    __vue_render__$F._withStripped = true;

      /* style */
      const __vue_inject_styles__$H = undefined;
      /* scoped */
      const __vue_scope_id__$H = undefined;
      /* module identifier */
      const __vue_module_identifier__$H = undefined;
      /* functional template */
      const __vue_is_functional_template__$H = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var Petition = normalizeComponent(
        { render: __vue_render__$F, staticRenderFns: __vue_staticRenderFns__$F },
        __vue_inject_styles__$H,
        __vue_script__$H,
        __vue_scope_id__$H,
        __vue_is_functional_template__$H,
        __vue_module_identifier__$H,
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
            if(el.tagName !== 'TEXTAREA') {
                el = el.querySelector('textarea');
            }

            if(!el) {
                throw new Error('A textarea is required for the v-autogrow directive.');
            }

            init(el, binding.value);
        }

    };

    //
    var script$J = {
      name: 'go-to-webinar',
      mixins: [FormComponent],
      components: {
        BtnActivity,
        InputField,
        TextareaField,
        PlaceAutocompleteField
      },
      directives: {
        Autogrow,
        PlaceAutofill
      },
      props: {
        submitting: Boolean
      },
      computed: {
        orientation() {
          return this.$parent.$parent.orientation;
        }

      }
    };

    /* script */
                const __vue_script__$I = script$J;
                
    /* template */
    var __vue_render__$G = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "fieldset",
        [
          _c("legend", [_vm._v("Your information")]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("input-field", {
            attrs: {
              id: "first",
              label: "First Name*",
              placeholder: "First Name*",
              errors: _vm.errors,
              custom: ""
            },
            model: {
              value: _vm.form.first,
              callback: function($$v) {
                _vm.$set(_vm.form, "first", $$v);
              },
              expression: "form.first"
            }
          }),
          _vm._v(" "),
          _c("input-field", {
            attrs: {
              id: "last",
              label: "Last Name*",
              placeholder: "Last Name*",
              errors: _vm.errors,
              custom: ""
            },
            model: {
              value: _vm.form.last,
              callback: function($$v) {
                _vm.$set(_vm.form, "last", $$v);
              },
              expression: "form.last"
            }
          }),
          _vm._v(" "),
          _c("input-field", {
            attrs: {
              id: "email",
              label: "Email*",
              placeholder: "Email*",
              errors: _vm.errors,
              custom: ""
            },
            model: {
              value: _vm.form.email,
              callback: function($$v) {
                _vm.$set(_vm.form, "email", $$v);
              },
              expression: "form.email"
            }
          }),
          _vm._v(" "),
          _vm.page.options.show_source
            ? _c("input-field", {
                attrs: {
                  id: "source",
                  label: "Source",
                  placeholder: "Source",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.source,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "source", $$v);
                  },
                  expression: "form.source"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.address || _vm.page.options.show_address
            ? _c("place-autocomplete-field", {
                directives: [
                  {
                    name: "place-autofill",
                    rawName: "v-place-autofill:street.query",
                    value: _vm.form.address,
                    expression: "form.address",
                    arg: "street",
                    modifiers: { query: true }
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
                    rawName: "v-place-autofill:state.short",
                    value: _vm.form.state,
                    expression: "form.state",
                    arg: "state",
                    modifiers: { short: true }
                  },
                  {
                    name: "place-autofill",
                    rawName: "v-place-autofill:zip",
                    value: _vm.form.zip_code,
                    expression: "form.zip_code",
                    arg: "zip"
                  }
                ],
                attrs: {
                  name: "address",
                  label: "Address",
                  placeholder: "Address",
                  "api-key": "AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.address,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "address", $$v);
                  },
                  expression: "form.address"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.page.options.show_city
            ? _c("input-field", {
                attrs: {
                  id: "city",
                  label: "City",
                  placeholder: "City",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.city,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "city", $$v);
                  },
                  expression: "form.city"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.page.options.show_state
            ? _c("input-field", {
                attrs: {
                  id: "state",
                  label: "State",
                  placeholder: "State",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.state,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "state", $$v);
                  },
                  expression: "form.state"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.page.options.show_zip
            ? _c("input-field", {
                attrs: {
                  id: "zip_code",
                  label: "Zip Code",
                  placeholder: "Zip Code",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.zip_code,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "zip_code", $$v);
                  },
                  expression: "form.zip_code"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.page.options.show_country
            ? _c("input-field", {
                attrs: {
                  id: "country",
                  label: "Country",
                  placeholder: "Country",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.country,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "country", $$v);
                  },
                  expression: "form.country"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.page.options.show_phone
            ? _c("input-field", {
                attrs: {
                  id: "phone",
                  label: "Phone",
                  placeholder: "Phone",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.phone,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "phone", $$v);
                  },
                  expression: "form.phone"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.page.options.show_organization
            ? _c("input-field", {
                attrs: {
                  id: "organization",
                  label: "Organization",
                  placeholder: "Organization",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.organization,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "organization", $$v);
                  },
                  expression: "form.organization"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.page.options.show_job_title
            ? _c("input-field", {
                attrs: {
                  id: "job_title",
                  label: "Job Title",
                  placeholder: "Job Title",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.job_title,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "job_title", $$v);
                  },
                  expression: "form.job_title"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.page.options.show_questions
            ? _c("textarea-field", {
                directives: [{ name: "autogrow", rawName: "v-autogrow" }],
                attrs: {
                  id: "questions_comments",
                  label: "Questions and Comments",
                  placeholder: "Questions and Comments",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.questions_comments,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "questions_comments", $$v);
                  },
                  expression: "form.questions_comments"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.page.options.show_industry
            ? _c("input-field", {
                attrs: {
                  id: "industry",
                  label: "Industry",
                  placeholder: "Industry",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.industry,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "industry", $$v);
                  },
                  expression: "form.industry"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.page.options.show_employees
            ? _c("input-field", {
                attrs: {
                  id: "number_employees",
                  label: "Number of Employees",
                  placeholder: "Number of Employees",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.number_employees,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "number_employees", $$v);
                  },
                  expression: "form.number_employees"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.page.options.show_timeframe
            ? _c("input-field", {
                attrs: {
                  id: "purchasing_timeframe",
                  label: "Purchasing Timeframe",
                  placeholder: "Purchasing Timeframe",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.purchasing_timeframe,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "purchasing_timeframe", $$v);
                  },
                  expression: "form.purchasing_timeframe"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.page.options.show_role
            ? _c("input-field", {
                attrs: {
                  id: "purchasing_role",
                  label: "Purchasing Role",
                  placeholder: "Purchasing Role",
                  errors: _vm.errors,
                  custom: ""
                },
                model: {
                  value: _vm.form.purchasing_role,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "purchasing_role", $$v);
                  },
                  expression: "form.purchasing_role"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("btn-activity", {
            attrs: {
              size: "lg",
              type: "submit",
              orientation: "right",
              activity: _vm.submitting,
              block: true,
              label: _vm.buttonLabel || _vm.page.site.config.giveworks.button.signup
            }
          })
        ],
        1
      )
    };
    var __vue_staticRenderFns__$G = [
      function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("p", [_c("em", [_vm._v("* Indicates required fields")])])
      }
    ];
    __vue_render__$G._withStripped = true;

      /* style */
      const __vue_inject_styles__$I = undefined;
      /* scoped */
      const __vue_scope_id__$I = undefined;
      /* module identifier */
      const __vue_module_identifier__$I = undefined;
      /* functional template */
      const __vue_is_functional_template__$I = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var GoToWebinar = normalizeComponent(
        { render: __vue_render__$G, staticRenderFns: __vue_staticRenderFns__$G },
        __vue_inject_styles__$I,
        __vue_script__$I,
        __vue_scope_id__$I,
        __vue_is_functional_template__$I,
        __vue_module_identifier__$I,
        undefined,
        undefined
      );

    //
    var script$K = {
      name: 'page-type-signup',
      extends: PageType,
      components: {
        GoToWebinar
      }
    };

    /* script */
                const __vue_script__$J = script$K;
                
    /* template */
    var __vue_render__$H = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        [
          _c(_vm.page.options.service.split("\\").pop(), {
            tag: "component",
            attrs: {
              submitting: _vm.submitting,
              page: _vm.page,
              form: _vm.form,
              errors: _vm.errors
            }
          })
        ],
        1
      )
    };
    var __vue_staticRenderFns__$H = [];
    __vue_render__$H._withStripped = true;

      /* style */
      const __vue_inject_styles__$J = undefined;
      /* scoped */
      const __vue_scope_id__$J = undefined;
      /* module identifier */
      const __vue_module_identifier__$J = undefined;
      /* functional template */
      const __vue_is_functional_template__$J = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var Signup = normalizeComponent(
        { render: __vue_render__$H, staticRenderFns: __vue_staticRenderFns__$H },
        __vue_inject_styles__$J,
        __vue_script__$J,
        __vue_scope_id__$J,
        __vue_is_functional_template__$J,
        __vue_module_identifier__$J,
        undefined,
        undefined
      );

    var script$L = {
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

      },
      methods: {
        updated(value) {
          this.$emit('input', value);
        }

      }
    };

    /* script */
                const __vue_script__$K = script$L;
                
    /* template */

      /* style */
      const __vue_inject_styles__$K = undefined;
      /* scoped */
      const __vue_scope_id__$K = undefined;
      /* module identifier */
      const __vue_module_identifier__$K = undefined;
      /* functional template */
      const __vue_is_functional_template__$K = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var SurveyField = normalizeComponent(
        {},
        __vue_inject_styles__$K,
        __vue_script__$K,
        __vue_scope_id__$K,
        __vue_is_functional_template__$K,
        __vue_module_identifier__$K,
        undefined,
        undefined
      );

    var script$M = {
      name: 'input-field',
      extends: InputField
    };

    /* script */
                const __vue_script__$L = script$M;
                
    /* template */

      /* style */
      const __vue_inject_styles__$L = undefined;
      /* scoped */
      const __vue_scope_id__$L = undefined;
      /* module identifier */
      const __vue_module_identifier__$L = undefined;
      /* functional template */
      const __vue_is_functional_template__$L = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var InputField$1 = normalizeComponent(
        {},
        __vue_inject_styles__$L,
        __vue_script__$L,
        __vue_scope_id__$L,
        __vue_is_functional_template__$L,
        __vue_module_identifier__$L,
        undefined,
        undefined
      );

    //
    var script$N = {
      name: 'survey-alt-email-field',
      extends: SurveyField,
      components: {
        InputField: InputField$1
      }
    };

    /* script */
                const __vue_script__$M = script$N;
                
    /* template */
    var __vue_render__$I = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("input-field", {
        attrs: {
          type: "email",
          name: _vm.name,
          id: _vm.question.id,
          label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          placeholder:
            "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          required: _vm.question.required,
          errors: _vm.errors,
          custom: ""
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
    var __vue_staticRenderFns__$I = [];
    __vue_render__$I._withStripped = true;

      /* style */
      const __vue_inject_styles__$M = undefined;
      /* scoped */
      const __vue_scope_id__$M = undefined;
      /* module identifier */
      const __vue_module_identifier__$M = undefined;
      /* functional template */
      const __vue_is_functional_template__$M = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var AltEmailField = normalizeComponent(
        { render: __vue_render__$I, staticRenderFns: __vue_staticRenderFns__$I },
        __vue_inject_styles__$M,
        __vue_script__$M,
        __vue_scope_id__$M,
        __vue_is_functional_template__$M,
        __vue_module_identifier__$M,
        undefined,
        undefined
      );

    //
    var script$O = {
      name: 'survey-alt-phone-field',
      extends: SurveyField,
      components: {
        InputField: InputField$1
      }
    };

    /* script */
                const __vue_script__$N = script$O;
                
    /* template */
    var __vue_render__$J = function() {
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
          errors: _vm.errors,
          custom: ""
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
    var __vue_staticRenderFns__$J = [];
    __vue_render__$J._withStripped = true;

      /* style */
      const __vue_inject_styles__$N = undefined;
      /* scoped */
      const __vue_scope_id__$N = undefined;
      /* module identifier */
      const __vue_module_identifier__$N = undefined;
      /* functional template */
      const __vue_is_functional_template__$N = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var AltPhoneField = normalizeComponent(
        { render: __vue_render__$J, staticRenderFns: __vue_staticRenderFns__$J },
        __vue_inject_styles__$N,
        __vue_script__$N,
        __vue_scope_id__$N,
        __vue_is_functional_template__$N,
        __vue_module_identifier__$N,
        undefined,
        undefined
      );

    var script$P = {
      name: 'checkbox-field',
      extends: CheckboxField
    };

    /* script */
                const __vue_script__$O = script$P;
                
    /* template */

      /* style */
      const __vue_inject_styles__$O = undefined;
      /* scoped */
      const __vue_scope_id__$O = undefined;
      /* module identifier */
      const __vue_module_identifier__$O = undefined;
      /* functional template */
      const __vue_is_functional_template__$O = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var CheckboxField$1 = normalizeComponent(
        {},
        __vue_inject_styles__$O,
        __vue_script__$O,
        __vue_scope_id__$O,
        __vue_is_functional_template__$O,
        __vue_module_identifier__$O,
        undefined,
        undefined
      );

    //
    var script$Q = {
      name: 'survey-checkbox-field',
      extends: SurveyField,
      components: {
        CheckboxField: CheckboxField$1,
        FormFeedback,
        InputField: InputField$1
      }
    };

    /* script */
                const __vue_script__$P = script$Q;
                
    /* template */
    var __vue_render__$K = function() {
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
                id: _vm.name + "_" + key,
                custom: ""
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
                    checkedValues: _vm.value || [],
                    custom: ""
                  },
                  on: { input: _vm.updated },
                  model: {
                    value: _vm.form[_vm.name],
                    callback: function($$v) {
                      _vm.$set(_vm.form, _vm.name, $$v);
                    },
                    expression: "form[name]"
                  }
                }),
                _vm._v(" "),
                _c("input-field", {
                  staticClass: "mt-2",
                  class: { "is-invalid": _vm.errors[_vm.name] },
                  attrs: {
                    type: "text",
                    label: "Other",
                    placeholder: "Other",
                    name: _vm.name + "_other",
                    id: _vm.name + "_other",
                    custom: ""
                  },
                  on: { input: _vm.updated },
                  model: {
                    value: _vm.form[_vm.name + "_other"],
                    callback: function($$v) {
                      _vm.$set(_vm.form, _vm.name + "_other", $$v);
                    },
                    expression: "form[`${name}_other`]"
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
    var __vue_staticRenderFns__$K = [];
    __vue_render__$K._withStripped = true;

      /* style */
      const __vue_inject_styles__$P = undefined;
      /* scoped */
      const __vue_scope_id__$P = undefined;
      /* module identifier */
      const __vue_module_identifier__$P = undefined;
      /* functional template */
      const __vue_is_functional_template__$P = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var CheckboxField$2 = normalizeComponent(
        { render: __vue_render__$K, staticRenderFns: __vue_staticRenderFns__$K },
        __vue_inject_styles__$P,
        __vue_script__$P,
        __vue_scope_id__$P,
        __vue_is_functional_template__$P,
        __vue_module_identifier__$P,
        undefined,
        undefined
      );

    //
    var script$R = {
      name: 'survey-city-field',
      extends: SurveyField,
      components: {
        InputField: InputField$1
      }
    };

    /* script */
                const __vue_script__$Q = script$R;
                
    /* template */
    var __vue_render__$L = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("input-field", {
        attrs: {
          id: "city",
          name: "city",
          label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          placeholder:
            "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          required: _vm.question.required,
          errors: _vm.errors,
          custom: ""
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
    var __vue_staticRenderFns__$L = [];
    __vue_render__$L._withStripped = true;

      /* style */
      const __vue_inject_styles__$Q = undefined;
      /* scoped */
      const __vue_scope_id__$Q = undefined;
      /* module identifier */
      const __vue_module_identifier__$Q = undefined;
      /* functional template */
      const __vue_is_functional_template__$Q = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var CityField = normalizeComponent(
        { render: __vue_render__$L, staticRenderFns: __vue_staticRenderFns__$L },
        __vue_inject_styles__$Q,
        __vue_script__$Q,
        __vue_scope_id__$Q,
        __vue_is_functional_template__$Q,
        __vue_module_identifier__$Q,
        undefined,
        undefined
      );

    var script$S = {
      name: 'radio-field',
      extends: RadioField
    };

    /* script */
                const __vue_script__$R = script$S;
                
    /* template */

      /* style */
      const __vue_inject_styles__$R = undefined;
      /* scoped */
      const __vue_scope_id__$R = undefined;
      /* module identifier */
      const __vue_module_identifier__$R = undefined;
      /* functional template */
      const __vue_is_functional_template__$R = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var RadioField$1 = normalizeComponent(
        {},
        __vue_inject_styles__$R,
        __vue_script__$R,
        __vue_scope_id__$R,
        __vue_is_functional_template__$R,
        __vue_module_identifier__$R,
        undefined,
        undefined
      );

    //
    var script$T = {
      name: 'survey-dollar-amount-field',
      extends: SurveyField,
      components: {
        InputGroup,
        RadioField: RadioField$1
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
                const __vue_script__$S = script$T;
                
    /* template */
    var __vue_render__$M = function() {
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
                        attrs: {
                          name: "donation",
                          label: amount,
                          value: amount,
                          custom: ""
                        },
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
    var __vue_staticRenderFns__$M = [];
    __vue_render__$M._withStripped = true;

      /* style */
      const __vue_inject_styles__$S = undefined;
      /* scoped */
      const __vue_scope_id__$S = undefined;
      /* module identifier */
      const __vue_module_identifier__$S = undefined;
      /* functional template */
      const __vue_is_functional_template__$S = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var DollarAmountField = normalizeComponent(
        { render: __vue_render__$M, staticRenderFns: __vue_staticRenderFns__$M },
        __vue_inject_styles__$S,
        __vue_script__$S,
        __vue_scope_id__$S,
        __vue_is_functional_template__$S,
        __vue_module_identifier__$S,
        undefined,
        undefined
      );

    //
    var script$U = {
      name: 'survey-first-field',
      extends: SurveyField,
      components: {
        InputField: InputField$1
      }
    };

    /* script */
                const __vue_script__$T = script$U;
                
    /* template */
    var __vue_render__$N = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("input-field", {
        attrs: {
          id: "first",
          name: "first",
          label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          placeholder:
            "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          required: _vm.question.required,
          errors: _vm.errors,
          custom: ""
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
    var __vue_staticRenderFns__$N = [];
    __vue_render__$N._withStripped = true;

      /* style */
      const __vue_inject_styles__$T = undefined;
      /* scoped */
      const __vue_scope_id__$T = undefined;
      /* module identifier */
      const __vue_module_identifier__$T = undefined;
      /* functional template */
      const __vue_is_functional_template__$T = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var FirstField = normalizeComponent(
        { render: __vue_render__$N, staticRenderFns: __vue_staticRenderFns__$N },
        __vue_inject_styles__$T,
        __vue_script__$T,
        __vue_scope_id__$T,
        __vue_is_functional_template__$T,
        __vue_module_identifier__$T,
        undefined,
        undefined
      );

    //
    var script$V = {
      name: 'survey-input-field',
      extends: SurveyField,
      components: {
        InputField: InputField$1
      }
    };

    /* script */
                const __vue_script__$U = script$V;
                
    /* template */
    var __vue_render__$O = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("input-field", {
        attrs: {
          name: _vm.name,
          id: _vm.question.id,
          label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          placeholder:
            "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          required: _vm.question.required,
          errors: _vm.errors,
          custom: ""
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
    var __vue_staticRenderFns__$O = [];
    __vue_render__$O._withStripped = true;

      /* style */
      const __vue_inject_styles__$U = undefined;
      /* scoped */
      const __vue_scope_id__$U = undefined;
      /* module identifier */
      const __vue_module_identifier__$U = undefined;
      /* functional template */
      const __vue_is_functional_template__$U = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var InputField$2 = normalizeComponent(
        { render: __vue_render__$O, staticRenderFns: __vue_staticRenderFns__$O },
        __vue_inject_styles__$U,
        __vue_script__$U,
        __vue_scope_id__$U,
        __vue_is_functional_template__$U,
        __vue_module_identifier__$U,
        undefined,
        undefined
      );

    //
    var script$W = {
      name: 'survey-last-field',
      extends: SurveyField,
      components: {
        InputField: InputField$1
      }
    };

    /* script */
                const __vue_script__$V = script$W;
                
    /* template */
    var __vue_render__$P = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("input-field", {
        attrs: {
          id: "last",
          name: "last",
          label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          placeholder:
            "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          required: _vm.question.required,
          errors: _vm.errors,
          custom: ""
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
    var __vue_staticRenderFns__$P = [];
    __vue_render__$P._withStripped = true;

      /* style */
      const __vue_inject_styles__$V = undefined;
      /* scoped */
      const __vue_scope_id__$V = undefined;
      /* module identifier */
      const __vue_module_identifier__$V = undefined;
      /* functional template */
      const __vue_is_functional_template__$V = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var LastField = normalizeComponent(
        { render: __vue_render__$P, staticRenderFns: __vue_staticRenderFns__$P },
        __vue_inject_styles__$V,
        __vue_script__$V,
        __vue_scope_id__$V,
        __vue_is_functional_template__$V,
        __vue_module_identifier__$V,
        undefined,
        undefined
      );

    //
    var script$X = {
      name: 'survey-primary-email-field',
      extends: SurveyField,
      components: {
        InputField: InputField$1
      }
    };

    /* script */
                const __vue_script__$W = script$X;
                
    /* template */
    var __vue_render__$Q = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("input-field", {
        attrs: {
          type: "email",
          name: "email",
          id: "email",
          label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          placeholder:
            "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          required: _vm.question.required,
          errors: _vm.errors,
          custom: ""
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
    var __vue_staticRenderFns__$Q = [];
    __vue_render__$Q._withStripped = true;

      /* style */
      const __vue_inject_styles__$W = undefined;
      /* scoped */
      const __vue_scope_id__$W = undefined;
      /* module identifier */
      const __vue_module_identifier__$W = undefined;
      /* functional template */
      const __vue_is_functional_template__$W = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var PrimaryEmailField = normalizeComponent(
        { render: __vue_render__$Q, staticRenderFns: __vue_staticRenderFns__$Q },
        __vue_inject_styles__$W,
        __vue_script__$W,
        __vue_scope_id__$W,
        __vue_is_functional_template__$W,
        __vue_module_identifier__$W,
        undefined,
        undefined
      );

    //
    var script$Y = {
      name: 'survey-primary-phone-field',
      extends: SurveyField,
      components: {
        InputField: InputField$1
      }
    };

    /* script */
                const __vue_script__$X = script$Y;
                
    /* template */
    var __vue_render__$R = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("input-field", {
        attrs: {
          type: "phone",
          name: "phone",
          id: "phone",
          label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          placeholder:
            "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          required: _vm.question.required,
          errors: _vm.errors,
          custom: ""
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
    var __vue_staticRenderFns__$R = [];
    __vue_render__$R._withStripped = true;

      /* style */
      const __vue_inject_styles__$X = undefined;
      /* scoped */
      const __vue_scope_id__$X = undefined;
      /* module identifier */
      const __vue_module_identifier__$X = undefined;
      /* functional template */
      const __vue_is_functional_template__$X = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var PrimaryPhoneField = normalizeComponent(
        { render: __vue_render__$R, staticRenderFns: __vue_staticRenderFns__$R },
        __vue_inject_styles__$X,
        __vue_script__$X,
        __vue_scope_id__$X,
        __vue_is_functional_template__$X,
        __vue_module_identifier__$X,
        undefined,
        undefined
      );

    //
    var script$Z = {
      name: 'survey-radio-field',
      extends: SurveyField,
      components: {
        RadioField: RadioField$1,
        FormFeedback
      }
    };

    /* script */
                const __vue_script__$Y = script$Z;
                
    /* template */
    var __vue_render__$S = function() {
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
                id: _vm.name + "_" + key,
                custom: ""
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
    var __vue_staticRenderFns__$S = [];
    __vue_render__$S._withStripped = true;

      /* style */
      const __vue_inject_styles__$Y = undefined;
      /* scoped */
      const __vue_scope_id__$Y = undefined;
      /* module identifier */
      const __vue_module_identifier__$Y = undefined;
      /* functional template */
      const __vue_is_functional_template__$Y = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var RadioField$2 = normalizeComponent(
        { render: __vue_render__$S, staticRenderFns: __vue_staticRenderFns__$S },
        __vue_inject_styles__$Y,
        __vue_script__$Y,
        __vue_scope_id__$Y,
        __vue_is_functional_template__$Y,
        __vue_module_identifier__$Y,
        undefined,
        undefined
      );

    var script$_ = {
      name: 'select-field',
      extends: SelectField
    };

    /* script */
                const __vue_script__$Z = script$_;
                
    /* template */

      /* style */
      const __vue_inject_styles__$Z = undefined;
      /* scoped */
      const __vue_scope_id__$Z = undefined;
      /* module identifier */
      const __vue_module_identifier__$Z = undefined;
      /* functional template */
      const __vue_is_functional_template__$Z = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var SelectField$1 = normalizeComponent(
        {},
        __vue_inject_styles__$Z,
        __vue_script__$Z,
        __vue_scope_id__$Z,
        __vue_is_functional_template__$Z,
        __vue_module_identifier__$Z,
        undefined,
        undefined
      );

    //
    var script$10 = {
      name: 'survey-select-field',
      extends: SurveyField,
      components: {
        SelectField: SelectField$1
      }
    };

    /* script */
                const __vue_script__$_ = script$10;
                
    /* template */
    var __vue_render__$T = function() {
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
            required: _vm.question.required,
            custom: ""
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
    var __vue_staticRenderFns__$T = [];
    __vue_render__$T._withStripped = true;

      /* style */
      const __vue_inject_styles__$_ = undefined;
      /* scoped */
      const __vue_scope_id__$_ = undefined;
      /* module identifier */
      const __vue_module_identifier__$_ = undefined;
      /* functional template */
      const __vue_is_functional_template__$_ = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var SelectField$2 = normalizeComponent(
        { render: __vue_render__$T, staticRenderFns: __vue_staticRenderFns__$T },
        __vue_inject_styles__$_,
        __vue_script__$_,
        __vue_scope_id__$_,
        __vue_is_functional_template__$_,
        __vue_module_identifier__$_,
        undefined,
        undefined
      );

    //
    var script$11 = {
      name: 'survey-state-field',
      extends: SurveyField,
      components: {
        SelectField: SelectField$1
      }
    };

    /* script */
                const __vue_script__$10 = script$11;
                
    /* template */
    var __vue_render__$U = function() {
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
            errors: _vm.errors,
            custom: ""
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
    var __vue_staticRenderFns__$U = [];
    __vue_render__$U._withStripped = true;

      /* style */
      const __vue_inject_styles__$10 = undefined;
      /* scoped */
      const __vue_scope_id__$10 = undefined;
      /* module identifier */
      const __vue_module_identifier__$10 = undefined;
      /* functional template */
      const __vue_is_functional_template__$10 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var StateField = normalizeComponent(
        { render: __vue_render__$U, staticRenderFns: __vue_staticRenderFns__$U },
        __vue_inject_styles__$10,
        __vue_script__$10,
        __vue_scope_id__$10,
        __vue_is_functional_template__$10,
        __vue_module_identifier__$10,
        undefined,
        undefined
      );

    //
    var script$12 = {
      name: 'survey-street-field',
      extends: SurveyField,
      components: {
        PlaceAutocompleteField
      },
      directives: {
        PlaceAutofill
      }
    };

    /* script */
                const __vue_script__$11 = script$12;
                
    /* template */
    var __vue_render__$V = function() {
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
          "api-key": "AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU",
          errors: _vm.errors,
          label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          placeholder:
            "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          required: _vm.question.required,
          custom: ""
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
    var __vue_staticRenderFns__$V = [];
    __vue_render__$V._withStripped = true;

      /* style */
      const __vue_inject_styles__$11 = undefined;
      /* scoped */
      const __vue_scope_id__$11 = undefined;
      /* module identifier */
      const __vue_module_identifier__$11 = undefined;
      /* functional template */
      const __vue_is_functional_template__$11 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var StreetField = normalizeComponent(
        { render: __vue_render__$V, staticRenderFns: __vue_staticRenderFns__$V },
        __vue_inject_styles__$11,
        __vue_script__$11,
        __vue_scope_id__$11,
        __vue_is_functional_template__$11,
        __vue_module_identifier__$11,
        undefined,
        undefined
      );

    var script$13 = {
      name: 'textarea-field',
      extends: TextareaField
    };

    /* script */
                const __vue_script__$12 = script$13;
                
    /* template */

      /* style */
      const __vue_inject_styles__$12 = undefined;
      /* scoped */
      const __vue_scope_id__$12 = undefined;
      /* module identifier */
      const __vue_module_identifier__$12 = undefined;
      /* functional template */
      const __vue_is_functional_template__$12 = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var TextareaField$1 = normalizeComponent(
        {},
        __vue_inject_styles__$12,
        __vue_script__$12,
        __vue_scope_id__$12,
        __vue_is_functional_template__$12,
        __vue_module_identifier__$12,
        undefined,
        undefined
      );

    //
    var script$14 = {
      name: 'survey-textarea-field',
      extends: SurveyField,
      components: {
        TextareaField: TextareaField$1
      },
      directives: {// Autogrow
      }
    };

    /* script */
                const __vue_script__$13 = script$14;
                
    /* template */
    var __vue_render__$W = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("textarea-field", {
        attrs: {
          label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          placeholder:
            "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          name: _vm.name,
          required: _vm.question.required,
          id: _vm.question.id,
          errors: _vm.errors,
          custom: ""
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
    var __vue_staticRenderFns__$W = [];
    __vue_render__$W._withStripped = true;

      /* style */
      const __vue_inject_styles__$13 = undefined;
      /* scoped */
      const __vue_scope_id__$13 = undefined;
      /* module identifier */
      const __vue_module_identifier__$13 = undefined;
      /* functional template */
      const __vue_is_functional_template__$13 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var TextareaField$2 = normalizeComponent(
        { render: __vue_render__$W, staticRenderFns: __vue_staticRenderFns__$W },
        __vue_inject_styles__$13,
        __vue_script__$13,
        __vue_scope_id__$13,
        __vue_is_functional_template__$13,
        __vue_module_identifier__$13,
        undefined,
        undefined
      );

    //
    var script$15 = {
      name: 'survey-zip-field',
      extends: SurveyField,
      components: {
        InputField: InputField$1
      }
    };

    /* script */
                const __vue_script__$14 = script$15;
                
    /* template */
    var __vue_render__$X = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("input-field", {
        attrs: {
          label: "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          placeholder:
            "" + _vm.question.question + (_vm.question.required ? "*" : ""),
          required: _vm.question.required,
          errors: _vm.errors,
          id: "zip",
          name: "zip",
          maxlength: "9",
          x_autocompletetype: "postal-code",
          custom: ""
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
    var __vue_staticRenderFns__$X = [];
    __vue_render__$X._withStripped = true;

      /* style */
      const __vue_inject_styles__$14 = undefined;
      /* scoped */
      const __vue_scope_id__$14 = undefined;
      /* module identifier */
      const __vue_module_identifier__$14 = undefined;
      /* functional template */
      const __vue_is_functional_template__$14 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var ZipField = normalizeComponent(
        { render: __vue_render__$X, staticRenderFns: __vue_staticRenderFns__$X },
        __vue_inject_styles__$14,
        __vue_script__$14,
        __vue_scope_id__$14,
        __vue_is_functional_template__$14,
        __vue_module_identifier__$14,
        undefined,
        undefined
      );

    //
    const COMPONENTS = {
      1: 'RadioField',
      2: 'CheckboxField',
      3: 'InputField',
      4: 'TextareaField',
      10: 'AltEmailField',
      11: 'AltPhoneField',
      17: 'SelectField',
      18: 'DollarAmountField',
      'first': 'FirstField',
      'last': 'LastField',
      'email': 'PrimaryEmailField',
      'phone': 'PrimaryPhoneField',
      'street': 'StreetField',
      'city': 'CityField',
      'state': 'StateField',
      'zip': 'ZipField'
    };
    var script$16 = {
      name: 'page-type-survey',
      extends: PageType,
      components: {
        AltEmailField,
        AltPhoneField,
        BtnActivity,
        CheckboxField: CheckboxField$2,
        CityField,
        DollarAmountField,
        FirstField,
        InputField: InputField$2,
        LastField,
        PrimaryEmailField,
        PrimaryPhoneField,
        RadioField: RadioField$2,
        SelectField: SelectField$2,
        StateField,
        StreetField,
        TextareaField: TextareaField$2,
        ZipField
      },
      methods: {
        component(name) {
          return COMPONENTS[name] || name;
        }

      }
    };

    /* script */
                const __vue_script__$15 = script$16;
                
    /* template */
    var __vue_render__$Y = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        [
          _vm._l(_vm.page.questions, function(question) {
            return _c(
              "div",
              [
                _c(_vm.component(question.type), {
                  tag: "component",
                  attrs: {
                    value: _vm.form["field_" + question.id],
                    name: "field_" + question.id,
                    page: _vm.page,
                    form: _vm.form,
                    errors: _vm.errors,
                    question: question
                  }
                })
              ],
              1
            )
          }),
          _vm._v(" "),
          _c("btn-activity", {
            attrs: {
              size: "lg",
              type: "submit",
              block: true,
              orientation: "right",
              activity: _vm.submitting,
              label: _vm.buttonLabel || _vm.page.site.config.giveworks.button.survey
            }
          })
        ],
        2
      )
    };
    var __vue_staticRenderFns__$Y = [];
    __vue_render__$Y._withStripped = true;

      /* style */
      const __vue_inject_styles__$15 = undefined;
      /* scoped */
      const __vue_scope_id__$15 = undefined;
      /* module identifier */
      const __vue_module_identifier__$15 = undefined;
      /* functional template */
      const __vue_is_functional_template__$15 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var Survey = normalizeComponent(
        { render: __vue_render__$Y, staticRenderFns: __vue_staticRenderFns__$Y },
        __vue_inject_styles__$15,
        __vue_script__$15,
        __vue_scope_id__$15,
        __vue_is_functional_template__$15,
        __vue_module_identifier__$15,
        undefined,
        undefined
      );

    //
    var script$17 = {
      name: 'http-error-response',
      components: {
        Alert
      },
      props: {
        minWidth: String,
        maxWidth: String,
        width: String,
        error: {
          type: Error,
          required: true
        }
      },
      computed: {
        widthUnit() {
          return unit(this.width);
        },

        minWidthUnit() {
          return unit(this.minWidth);
        },

        maxWidthUnit() {
          return unit(this.maxWidth);
        },

        status() {
          return this.error.status || 400;
        },

        formattedMessage() {
          if (this.error.data && this.error.data.message) {
            return this.error.data.message;
          }

          return this.error.message;
        }

      }
    };

    /* script */
                const __vue_script__$16 = script$17;
                
    /* template */
    var __vue_render__$Z = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "alert",
        {
          style: {
            width: _vm.widthUnit,
            "min-width": _vm.minWidthUnit,
            "max-width": _vm.maxWidthUnit
          },
          attrs: { variant: "danger", heading: "Error: " + _vm.status }
        },
        [_vm._v("\n    " + _vm._s(_vm.formattedMessage) + "\n")]
      )
    };
    var __vue_staticRenderFns__$Z = [];
    __vue_render__$Z._withStripped = true;

      /* style */
      const __vue_inject_styles__$16 = undefined;
      /* scoped */
      const __vue_scope_id__$16 = undefined;
      /* module identifier */
      const __vue_module_identifier__$16 = undefined;
      /* functional template */
      const __vue_is_functional_template__$16 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var HttpErrorResponse = normalizeComponent(
        { render: __vue_render__$Z, staticRenderFns: __vue_staticRenderFns__$Z },
        __vue_inject_styles__$16,
        __vue_script__$16,
        __vue_scope_id__$16,
        __vue_is_functional_template__$16,
        __vue_module_identifier__$16,
        undefined,
        undefined
      );

    //
    var script$18 = {
      name: 'giveworks-form',
      components: {
        ActivityIndicator,
        HttpErrorResponse,
        Donation,
        Petition,
        Signup,
        Survey
      },
      props: {
        data: [Boolean, Object],
        pageId: [Number, String],
        redirect: [Boolean, String],
        apiKey: {
          type: String,
          required: true
        },
        orientation: {
          type: String,
          default: 'vertical',
          validator: value => {
            return ['vertical', 'horizontal'].indexOf(value) !== -1;
          }
        }
      },
      computed: {
        classes() {
          return {
            'text-sm': this.width
          };
        },

        pageTypeComponent() {
          return this.page.special;
        }

      },
      methods: {
        submit(e) {
          this.$refs.type.submit(e).then(this.pageType.onSubmitSuccess, this.pageType.onSubmitError);
        },

        onResize() {
          this.width = this.$el.offsetWidth;
          return this.onResize;
        },

        onError(error) {
          this.error = error;
        }

      },

      created() {
        Request.defaults = HttpConfig;
        Request.defaults.headers = {
          'Authorization': `Bearer ${this.apiKey}`
        };
      },

      mounted() {
        if (!this.page.id) {
          Page.find(this.pageId).then(model => {
            this.page = model.toJson();
          }, error => {
            this.error = error;
          });
        }

        window.addEventListener('resize', this.onResize());
      },

      destroyed() {
        window.removeEventListener('resize', this.onResize);
      },

      data() {
        return {
          error: null,
          page: this.data || {}
        };
      }

    };

    /* script */
                const __vue_script__$17 = script$18;
                
    /* template */
    var __vue_render__$_ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "giveworks-form" }, [
        _vm.error
          ? _c("div", [
              _c("div", { staticClass: "center-wrapper" }, [
                _c(
                  "div",
                  { staticClass: "center-content" },
                  [_c("http-error-response", { attrs: { error: _vm.error } })],
                  1
                )
              ])
            ])
          : _vm.page.id
            ? _c(
                "form",
                {
                  class: _vm.classes,
                  attrs: { novalidate: "novalidate" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault();
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c(_vm.pageTypeComponent, {
                    ref: "type",
                    tag: "component",
                    attrs: {
                      orientation: _vm.orientation,
                      page: _vm.page,
                      redirect: _vm.redirect
                    },
                    on: { error: _vm.onError }
                  })
                ],
                1
              )
            : _c(
                "div",
                [_c("activity-indicator", { attrs: { size: "lg", center: "" } })],
                1
              )
      ])
    };
    var __vue_staticRenderFns__$_ = [];
    __vue_render__$_._withStripped = true;

      /* style */
      const __vue_inject_styles__$17 = undefined;
      /* scoped */
      const __vue_scope_id__$17 = undefined;
      /* module identifier */
      const __vue_module_identifier__$17 = undefined;
      /* functional template */
      const __vue_is_functional_template__$17 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var GiveworksForm = normalizeComponent(
        { render: __vue_render__$_, staticRenderFns: __vue_staticRenderFns__$_ },
        __vue_inject_styles__$17,
        __vue_script__$17,
        __vue_scope_id__$17,
        __vue_is_functional_template__$17,
        __vue_module_identifier__$17,
        undefined,
        undefined
      );

    //
    var script$19 = {
      name: 'payment-info-fieldset',
      components: {
        TextareaField,
        PaymentGateways
      },
      props: {
        legends: {
          type: Boolean,
          default: true
        }
      },
      mixins: [FormComponent]
    };

    /* script */
                const __vue_script__$18 = script$19;
                
    /* template */
    var __vue_render__$10 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "fieldset",
        [
          _c("payment-gateways", {
            attrs: { form: _vm.form, errors: _vm.errors, page: _vm.page }
          }),
          _vm._v(" "),
          _vm.page.options.add_comment
            ? _c("textarea-field", {
                directives: [{ name: "autogrow", rawName: "v-autogrow" }],
                attrs: { id: "comment", label: _vm.commentMessage },
                model: {
                  value: _vm.form.comment,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "comment", $$v);
                  },
                  expression: "form.comment"
                }
              })
            : _vm._e()
        ],
        1
      )
    };
    var __vue_staticRenderFns__$10 = [];
    __vue_render__$10._withStripped = true;

      /* style */
      const __vue_inject_styles__$18 = undefined;
      /* scoped */
      const __vue_scope_id__$18 = undefined;
      /* module identifier */
      const __vue_module_identifier__$18 = undefined;
      /* functional template */
      const __vue_is_functional_template__$18 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var PaymentInfoFieldset = normalizeComponent(
        { render: __vue_render__$10, staticRenderFns: __vue_staticRenderFns__$10 },
        __vue_inject_styles__$18,
        __vue_script__$18,
        __vue_scope_id__$18,
        __vue_is_functional_template__$18,
        __vue_module_identifier__$18,
        undefined,
        undefined
      );



    var Components = /*#__PURE__*/Object.freeze({
        GiveworksForm: GiveworksForm,
        HttpErrorResponse: HttpErrorResponse,
        CheckboxField: CheckboxField$1,
        InputField: InputField$1,
        PaymentButtons: PaymentButtons,
        RadioField: RadioField$1,
        SelectField: SelectField$1,
        TextareaField: TextareaField$1,
        ToggleButton: ToggleButton,
        ContactInfoFieldset: ContactInfoFieldset,
        EmploymentInfoFieldset: EmploymentInfoFieldset,
        PaymentInfoFieldset: PaymentInfoFieldset,
        SelectDonationFieldset: SelectDonationFieldset,
        AuthorizeNetCreditCard: AuthorizeNetCreditCard,
        PaymentGateways: PaymentGateways,
        PayPalPaymentButton: PaypalPaymentButton,
        StripeCreditCard: StripeCreditCard,
        StripePaymentButton: StripePaymentButton,
        GoToWebinarSignup: GoToWebinar,
        SurveyAltEmailField: AltEmailField,
        SurveyAltPhoneField: AltPhoneField,
        SurveyCheckboxField: CheckboxField$2,
        SurveyCityField: CityField,
        SurveyDollarAmountField: DollarAmountField,
        SurveyFirstField: FirstField,
        SurveyInputField: InputField$2,
        SurveyLastField: LastField,
        SurveyPrimaryEmailField: PrimaryEmailField,
        SurveyPrimaryPhoneField: PrimaryPhoneField,
        SurveyRadioField: RadioField$2,
        SurveySelectField: SelectField$2,
        SurveyField: SurveyField,
        SurveyTextareaField: TextareaField$2,
        SurveyZipField: ZipField,
        DonationPageType: Donation,
        PetitionPageType: Petition,
        SignupPageType: Signup,
        SurveyPageType: Survey
    });

    if (!window || !window.Vue) {
      throw Error('You must include vue.js before vue-giveworks-forms.install.js');
    }

    for (const i in Components) {
      window.Vue.component(Components[i].name || kebabCase(i), Components[i]);
    }

}(axios));
//# sourceMappingURL=vue-giveworks-form.install.js.map
