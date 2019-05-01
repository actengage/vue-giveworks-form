module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		2: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "GiveworksForm.common." + ({"0":"vendors~vue-credit-card-field~vue-interface~vue-place-autocomplete","1":"vendors~vue-place-autocomplete","3":"contact-info-fieldset","4":"donation-type","5":"employment-info-fieldset","6":"go-to-webinar","7":"petition-type","8":"signup-type","9":"survey-type","10":"vendors~donation-type","11":"vendors~vue-credit-card-field","12":"vendors~vue-interface"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"0":1,"1":1,"4":1,"11":1,"12":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({"0":"vendors~vue-credit-card-field~vue-interface~vue-place-autocomplete","1":"vendors~vue-place-autocomplete","3":"contact-info-fieldset","4":"donation-type","5":"employment-info-fieldset","6":"go-to-webinar","7":"petition-type","8":"signup-type","9":"survey-type","10":"vendors~donation-type","11":"vendors~vue-credit-card-field","12":"vendors~vue-interface"}[chunkId]||chunkId) + "." + {"0":"5301e120","1":"f8bad505","3":"31d6cfe0","4":"5346b420","5":"31d6cfe0","6":"31d6cfe0","7":"31d6cfe0","8":"31d6cfe0","9":"31d6cfe0","10":"31d6cfe0","11":"f82e27b2","12":"9f6c11eb"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpGiveworksForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpGiveworksForm"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1757":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("cebe");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/index.js + 29 modules
var Functions = __webpack_require__("ca14");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Support/BaseClass.js


class BaseClass_BaseClass {
    constructor(attributes) {
        this.setAttribute(attributes);
    }

    getAttribute(key) {
        return this.hasOwnProperty(key) ? this[key] : null;
    }

    getAttributes() {
        const attributes = {};

        Object.getOwnPropertyNames(this).forEach(key => {
            attributes[key] = this.getAttribute(key);
        });

        return attributes;
    }

    getPublicAttributes() {
        return Object.keys(this.getAttributes())
            .filter(key => {
                return !key.match(/^\$/);
            })
            .reduce((obj, key) => {
                obj[key] = this.getAttribute(key);

                return obj;
            }, {});
    }

    setAttribute(key, value) {
        if(Object(Functions["k" /* isObject */])(key)) {
            this.setAttributes(key);
        }
        else {
            this[key] = value;
        }
    }

    setAttributes(values) {
        for(const i in values) {
            this.setAttribute(i, values[i]);
        }
    }
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Http/Request/Response.js



class Response_Response extends BaseClass_BaseClass {
    constructor(data) {
        super(Object(Functions["e" /* extend */])({
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

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Http/Request/Request.js





const DEFAULTS = {
    transformRequest: [],
    transformResponse: []
};

class Request_Request extends BaseClass_BaseClass {
    constructor(method, url, attributes) {
        super({
            options: {},
            data: {},
            headers: {},
            params: {},
            url: url,
            method: method
        });

        if(Object(Functions["k" /* isObject */])(attributes)) {
            this.setAttribute(attributes);
        }
    }

    send(attributes) {
        this.sentAt = new Date();
        this.setAttributes(attributes);

        return new Promise((resolve, reject) => {
            external_axios_default()(this.options).then(
                response => resolve(this.response = new Response_Response(response)),
                error => reject(this.response = new Response_Response(error.response))
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
        const merged = Object(Functions["c" /* deepExtend */])({
            cancelToken: new external_axios_default.a.CancelToken(cancel => {
                this.cancel = cancel;

                return cancel;
            })
        }, DEFAULTS, this.getPublicAttributes());

        if(this.data instanceof FormData) {
            merged.data = this.data;
        }

        return merged;
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
        Object.assign(DEFAULTS, value);
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

    static patch(url, attributes) {
        return this.make('path', url, attributes).send();
    }

    static delete(url, attributes) {
        return this.make('delete', url, attributes).send();
    }

    static make(method, url, attributes) {
        return new this(method, url, attributes);
    }
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Http/Request/index.js
/* unused concated harmony import Response */





/* harmony default export */ var Http_Request = __webpack_exports__["a"] = (Request_Request);


/***/ }),

/***/ "1a98":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNumber; });
function isNumber(value) {
    return (typeof value === 'number') || (
        value ? value.toString() === '[object Number]' : false
    );
}


/***/ }),

/***/ "2760":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GiveworksForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8b5b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GiveworksForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GiveworksForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GiveworksForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "5471":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return kebabCase; });
function kebabCase(str) {
    return str && str.replace ?
        str.replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/\s+/g, '-')
            .replace(/_/g, '-')
            .toLowerCase() : null;
}


/***/ }),

/***/ "650a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return key; });
/* harmony import */ var _isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ff01");


function key(value) {
    return Object(_isNumeric__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) ? parseFloat(value) : value;
}


/***/ }),

/***/ "6f37":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isUndefined; });
function isUndefined(value) {
    return typeof value === 'undefined';
}


/***/ }),

/***/ "850f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Http/Request/index.js + 3 modules
var Request = __webpack_require__("1757");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/index.js + 29 modules
var Functions = __webpack_require__("ca14");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Http/Model/Model.js



class Model_Model {
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

        Object(Functions["d" /* each */])(params, (value, key) => {
            this[key] = value;
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
    get(key) {
        if(Object(Functions["g" /* isArray */])(key)) {
            return this.getAttributes().filter((value, i) => {
                return key.indexOf(i) !== -1;
            });
        }
        else {
            return this.getAttribute(key);
        }
    }

    /**
     * Alias for setAttributes() except this method returns `this`. This method
     * also accepts an array of values or key/value pair.
     *
     * @return this
     */
    set(key, value = undefined) {
        if(Object(Functions["g" /* isArray */])(key) || Object(Functions["k" /* isObject */])(key)) {
            this.setAttributes(key);
        }
        else {
            this.setAttribute(key, value);
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
    getOriginalValue(key) {
        return this.$changed[key] || this.$attributes[key];
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
        return Object.keys(this.$attributes).filter(key => !(key in this.$changed));
    }

    /**
     * Get an attribute with a given key. If no key is defined
     *
     * @param key string
     * @param default undefined|mixed
     * @return array
     */
    getAttribute(key, value = undefined) {
        return this.$attributes[key] || value;
    }

    /**
     * Set an array or object of data as attributes.
     *
     * @param attributes array|object
     * @return void
     */
    setAttributes(data) {
        if(Object(Functions["g" /* isArray */])(data) || Object(Functions["k" /* isObject */])(data)) {
            Object(Functions["d" /* each */])(data, (value, key) => {
                this.setAttribute(key, value);
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
    setAttribute(key, value) {
        if(this.getAttribute(key) !== value) {
            this.handleAttributeChange(key, value);

            if(Object(Functions["m" /* isUndefined */])(value)) {
                delete this.$attributes[key];
            }
            else {
                this.$attributes[key] = value;
            }
        }
    }

    /**
     * Revert the model to its original state.
     *
     * @return bool
     */
    revert() {
        Object(Functions["d" /* each */])(this.$changed, (value, key) => {
            if(!Object(Functions["m" /* isUndefined */])(value)) {
                this.$attributes[key] = value;
            }
            else {
                delete this.$attributes[key];
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
    hasChanged(key) {
        return !key ? this.getChangedAttributes().length > 0 : !Object(Functions["m" /* isUndefined */])(this.$changed[key]);
    }

    /**
     * Does the model have any File objects. If so, need to send as multipart.
     *
     * @return bool
     */
    hasFiles() {
        function count(files, total = 0) {
            return Object.keys(files).reduce((carry, key) => {
                const value = files[key];

                if(Object(Functions["g" /* isArray */])(value)) {
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
    handleAttributeChange(key, value) {
        if(this.$initialized) {
            if(this.$changed[key] === value) {
                delete this.$changed[key];
            }
            else if(!(key in this.$changed)) {
                this.$changed[key] = this.getAttribute(key);
            }
        }

        this.handlePrimaryKeyChange(key, value);
    }

    /**
     * Set an array or object of data as attributes.
     *
     * @param key string
     * @param value mixed
     * @return void
     */
    handlePrimaryKeyChange(key, value) {
        if(this.$key === key) {
            this.$exists = !Object(Functions["m" /* isUndefined */])(value) && !Object(Functions["j" /* isNull */])(value);
        }
    }

    /**
     * Save the model to the database
     *
     * @param data object
     * @return bool
     */
    save(fill = {}, config = {}) {
        this.fill(fill);

        return new Promise((resolve, reject) => {
            const data = !this.hasFiles() ? this.toJSON() : this.toFormData();
            const uri = config.uri || this.uri();
            const method = config.method || (
                !this.exists() || this.hasFiles() ? 'post' : 'put'
            );

            this.$request = this.constructor.request(method, uri, config);

            if(this.hasFiles()) {
                this.$request.headers['Content-Type'] = 'multipart/form-data';
            }

            this.$request.send({
                data: data
            }).then(response => resolve(this.fill(response.data)), reject);
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

        Object(Functions["d" /* each */])(this.toJSON(), (value, key) => {
            if(Object(Functions["g" /* isArray */])(value)) {
                Object(Functions["d" /* each */])(value, item => {
                    if(!(item instanceof Blob) && (Object(Functions["k" /* isObject */])(item) || Object(Functions["g" /* isArray */])(item))) {
                        item = JSON.stringify(item);
                    }

                    form.append(key.replace(/(.+)(\[.+\]?)$/, '$1') + '[]', item);
                });
            }
            else if(!(value instanceof Blob) && Object(Functions["k" /* isObject */])(value)) {
                form.append(key, JSON.stringify(value));
            }
            else if(!Object(Functions["j" /* isNull */])(value)) {
                form.append(key, value);
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
        return Object(Functions["o" /* pickBy */])(this.$attributes, (value, key) => {
            return !this.$properties.length || (
                key === this.key() || this.$properties.indexOf(key) !== -1
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
    static search(query = {}, config = {}) {
        const model = new this();

        config = Object.assign({
            params: query,
        }, config);

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
        return Request["a" /* default */].make(method, url, config);
    }
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Http/Model/index.js

/* harmony default export */ var Http_Model = (Model_Model);

// CONCATENATED MODULE: ./src/Models/Page.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page_Page; });

class Page_Page extends Http_Model {
  endpoint() {
    return 'page';
  }

}

/***/ }),

/***/ "8b5b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "983f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Unit/Unit.js
/* harmony default export */ var Unit = (function(height) {
    return isFinite(height) ? height + 'px' : height;
});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Unit/index.js

/* harmony default export */ var Helpers_Unit = __webpack_exports__["a"] = (Unit);


/***/ }),

/***/ "b7b9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNull; });
function isNull(value) {
    return value === null;
}


/***/ }),

/***/ "c084":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isArray; });
function isArray(value) {
    return Array.isArray(value);
}


/***/ }),

/***/ "ca14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/camelCase.js
function camelCase(string) {
    string = string.toLowerCase().replace(/(?:(^.)|([-_\s]+.))/g, function(match) {
        return match.charAt(match.length - 1).toUpperCase();
    });

    return string.charAt(0).toLowerCase() + string.substring(1);
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/chunk.js
function chunk(arr, chunkSize, cache = []) {
    const tmp = [...arr];
    while(tmp.length) cache.push(tmp.splice(0, chunkSize));
    return cache;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/extend.js
function extend(...args) {
    return Object.assign(...args);
}

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isObject.js
var isObject = __webpack_require__("ef2b");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/deepExtend.js



/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
*/
function deepExtend(target, ...sources) {
    if(!sources.length) return target;

    const source = sources.shift();

    if(Object(isObject["a" /* default */])(target) && Object(isObject["a" /* default */])(source)) {
        for(const key in source) {
            if(Object(isObject["a" /* default */])(source[key])) {
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

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/cloneDeep.js


function cloneDeep(...args) {
    return deepExtend({}, ...args);
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/concatMap.js
function concatMap(fn) {
    return x => {
        return x.map(fn).reduce((x, y) => x.concat(y), []);
    };
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/debounce.js
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate) {
    let timeout, args, context, timestamp, result;
    if(null == wait) wait = 100;

    function later() {
        let last = Date.now() - timestamp;

        if(last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        }
        else {
            timeout = null;
            if(!immediate) {
                result = func.apply(context, args);
                context = args = null;
            }
        }
    };

    let debounced = function() {
        context = this;
        args = arguments;
        timestamp = Date.now();
        let callNow = immediate && !timeout;
        if(!timeout) timeout = setTimeout(later, wait);
        if(callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };

    debounced.clear = function() {
        if(timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
    };

    debounced.flush = function() {
        if(timeout) {
            result = func.apply(context, args);
            context = args = null;

            clearTimeout(timeout);
            timeout = null;
        }
    };

    return debounced;
};
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isArray.js
var isArray = __webpack_require__("c084");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/deepFlatten.js



function deepFlatten(x) {
    return concatMap(x => Object(isArray["a" /* default */])(x) ? deepFlatten(x) : x)(x);
}

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/each.js
var each = __webpack_require__("f924");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/first.js
function first(array) {
    return (array && array.length) ? array[0] : undefined;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/matches.js


function matches(properties) {
    return subject => {
        for(const i in properties) {
            if(Object(isObject["a" /* default */])(properties[i])) {
                return subject[i] ? matches(properties[i])(subject[i]) : false;
            }
            else if(!subject || subject[i] !== properties[i]) {
                return false;
            }
        }

        return true;
    };
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isString.js
function isString(value) {
    return typeof value === 'string';
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/get.js



function get(object, path) {
    return (isString(path) ? path.split('.') : (!Object(isArray["a" /* default */])(path) ? [path] : path)).reduce((a, b) => a[b], object);
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/property.js


function property(path) {
    return object => {
        return get(object, path);
    };
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isFunction.js
function isFunction(value) {
    return value instanceof Function;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/matchesProperty.js


function matchesProperty(path, value) {
    return subject => {
        return get(subject, path) === value;
    };
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/predicate.js







function predicate(value) {
    if(Object(isObject["a" /* default */])(value)) {
        value = matches(value);
    }
    else if(Object(isArray["a" /* default */])(value)) {
        value = matchesProperty(value[0], value[1]);
    }
    else if(!isFunction(value)) {
        value = property(value);
    }

    return value;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/find.js



function find(subject, value) {
    return first(subject.filter(object => predicate(value)(object)));
}

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/key.js
var Functions_key = __webpack_require__("650a");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/findIndex.js



function findIndex(subject, value) {
    for(const i in subject) {
        if(predicate(value)(subject[i])) {
            return Object(Functions_key["a" /* default */])(i);
        }
    }

    return -1;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/findKey.js



function findKey_findIndex(object, value) {
    return first(Object.keys(object).filter(
        key => predicate(value)(object[key])
    ));
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/flatten.js


function flatten(x) {
    return concatMap(x => x)(x);
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isBoolean.js
function isBoolean(value) {
    return value === true || value === false;
}

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isEmpty.js
var isEmpty = __webpack_require__("e5ce");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isNull.js
var isNull = __webpack_require__("b7b9");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isNumber.js
var isNumber = __webpack_require__("1a98");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isNumeric.js
var isNumeric = __webpack_require__("ff01");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isUndefined.js
var isUndefined = __webpack_require__("6f37");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/kebabCase.js
var kebabCase = __webpack_require__("5471");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/map.js


function map(object, fn) {
    const mapped = {};

    Object(each["a" /* default */])(object, (value, key) => {
        mapped[key] = fn(value, key);
    });

    return mapped;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/mapKeys.js


function mapKeys(object, fn) {
    const mapped = {};

    Object(each["a" /* default */])(object, (value, key) => {
        mapped[fn(value, key)] = value;
    });

    return mapped;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/negate.js


function negate(fn) {
    return (...args) => isFunction(fn) ? !fn(...args) : !fn;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/noop.js
function noop() {

}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/pickBy.js



function pickBy(object, match) {
    const subject = {};

    Object(each["a" /* default */])(object, (value, key) => {
        if(predicate(match)(value)) {
            subject[key] = value;
        }
    });

    return subject;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/omitBy.js



function omitBy(object, fn) {
    return pickBy(object, negate(fn));
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/remove.js



function remove(array, match) {
    const indexes = [];

    for(const i in array) {
        if(predicate(match)(array[i])) {
            indexes.push(Object(Functions_key["a" /* default */])(i));
        }
    }

    return array.filter((value, i) => {
        return indexes.indexOf(i) !== -1;
    });
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/wrap.js


function wrap(subject, fn) {
    return (...args) => {
        return isFunction(fn) ? fn(subject, ...args) : args;
    };
};

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/index.js
/* concated harmony reexport camelCase */__webpack_require__.d(__webpack_exports__, "a", function() { return camelCase; });
/* concated harmony reexport chunk */__webpack_require__.d(__webpack_exports__, "b", function() { return chunk; });
/* unused concated harmony import cloneDeep */
/* unused concated harmony import concatMap */
/* unused concated harmony import debounce */
/* concated harmony reexport deepExtend */__webpack_require__.d(__webpack_exports__, "c", function() { return deepExtend; });
/* unused concated harmony import deepFlatten */
/* concated harmony reexport each */__webpack_require__.d(__webpack_exports__, "d", function() { return each["a" /* default */]; });
/* concated harmony reexport extend */__webpack_require__.d(__webpack_exports__, "e", function() { return extend; });
/* unused concated harmony import find */
/* unused concated harmony import findIndex */
/* concated harmony reexport findKey */__webpack_require__.d(__webpack_exports__, "f", function() { return findKey_findIndex; });
/* unused concated harmony import first */
/* unused concated harmony import flatten */
/* unused concated harmony import get */
/* concated harmony reexport isArray */__webpack_require__.d(__webpack_exports__, "g", function() { return isArray["a" /* default */]; });
/* concated harmony reexport isBoolean */__webpack_require__.d(__webpack_exports__, "h", function() { return isBoolean; });
/* unused concated harmony import isEmpty */
/* concated harmony reexport isFunction */__webpack_require__.d(__webpack_exports__, "i", function() { return isFunction; });
/* concated harmony reexport isNull */__webpack_require__.d(__webpack_exports__, "j", function() { return isNull["a" /* default */]; });
/* unused concated harmony import isNumber */
/* unused concated harmony import isNumeric */
/* concated harmony reexport isObject */__webpack_require__.d(__webpack_exports__, "k", function() { return isObject["a" /* default */]; });
/* concated harmony reexport isString */__webpack_require__.d(__webpack_exports__, "l", function() { return isString; });
/* concated harmony reexport isUndefined */__webpack_require__.d(__webpack_exports__, "m", function() { return isUndefined["a" /* default */]; });
/* unused concated harmony import kebabCase */
/* unused concated harmony import key */
/* unused concated harmony import map */
/* concated harmony reexport mapKeys */__webpack_require__.d(__webpack_exports__, "n", function() { return mapKeys; });
/* unused concated harmony import matches */
/* unused concated harmony import matchesProperty */
/* unused concated harmony import negate */
/* unused concated harmony import noop */
/* unused concated harmony import omitBy */
/* concated harmony reexport pickBy */__webpack_require__.d(__webpack_exports__, "o", function() { return pickBy; });
/* unused concated harmony import property */
/* unused concated harmony import remove */
/* concated harmony reexport wrap */__webpack_require__.d(__webpack_exports__, "p", function() { return wrap; });










































/***/ }),

/***/ "cebe":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "e5ce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isEmpty; });
/* harmony import */ var _isNull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b7b9");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c084");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ef2b");
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6f37");





function isEmpty(value) {
    if(Object(_isArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value)) {
        return value.length === 0;
    }
    else if(Object(_isObject__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(value)) {
        return Object.keys(value).length === 0;
    }

    return value === '' || Object(_isNull__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) || Object(_isUndefined__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(value);
}


/***/ }),

/***/ "ef2b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isObject; });
/* harmony import */ var _isNull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b7b9");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c084");



function isObject(value) {
    return (typeof value === 'object') && !Object(_isNull__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) && !Object(_isArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value);
}


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f924":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return each; });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("650a");


function each(subject, fn) {
    for(const i in subject) {
        fn(subject[i], Object(_key__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(i));
    }
}


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"660aaeba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/GiveworksForm.vue?vue&type=template&id=030401a3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"giveworks-form"},[(_vm.error)?_c('div',[_c('div',{staticClass:"center-wrapper"},[_c('div',{staticClass:"center-content"},[_c('http-error-response',{attrs:{"error":_vm.error}})],1)])]):(_vm.page.id)?_c('form',{staticClass:"container",class:_vm.classes,attrs:{"novalidate":"novalidate"},on:{"submit":function($event){$event.preventDefault();return _vm.submit($event)}}},[_c(_vm.pageTypeComponent,{ref:"type",tag:"component",attrs:{"orientation":_vm.orientation,"page":_vm.page,"source":_vm.source,"redirect":_vm.redirect},on:{"error":_vm.onError}})],1):_c('div',[_c('activity-indicator',{attrs:{"size":"lg","center":""}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/GiveworksForm.vue?vue&type=template&id=030401a3&

// EXTERNAL MODULE: ./src/Models/Page.js + 2 modules
var Page = __webpack_require__("850f");

// CONCATENATED MODULE: ./src/Config/Http.js
/* harmony default export */ var Http = (function (env) {
  let domain;

  switch (env || window.location.hostname) {
    case 'staging':
    case 'dev5.giveworks.net':
      domain = 'https://dev5.giveworks.net';
      break;

    case 'production':
    case 'giveworks.net':
    case 'secure.giveworks.net':
      domain = 'https://secure.giveworks.net';
      break;

    default:
      domain = 'https://giveworks.test';
  }

  return {
    baseURL: `${domain}/api/public/v1/`
  };
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"660aaeba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/HttpErrorResponse.vue?vue&type=template&id=4f7f5891&
var HttpErrorResponsevue_type_template_id_4f7f5891_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-left"},[_c('alert',{style:({'width': _vm.widthUnit, 'min-width': _vm.minWidthUnit, 'max-width': _vm.maxWidthUnit}),attrs:{"variant":"danger","heading":("Error: " + _vm.status)}},[_vm._v("\n        "+_vm._s(_vm.formattedMessage)+"\n    ")])],1)}
var HttpErrorResponsevue_type_template_id_4f7f5891_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/HttpErrorResponse.vue?vue&type=template&id=4f7f5891&

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Unit/index.js + 1 modules
var Unit = __webpack_require__("983f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/HttpErrorResponse.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var HttpErrorResponsevue_type_script_lang_js_ = ({
  name: 'http-error-response',
  components: {
    Alert: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "3259"))
  },
  props: {
    minWidth: String,
    maxWidth: String,
    width: String,
    error: {
      type: [Object, Error],
      required: true
    }
  },
  computed: {
    widthUnit() {
      return Object(Unit["a" /* default */])(this.width);
    },

    minWidthUnit() {
      return Object(Unit["a" /* default */])(this.minWidth);
    },

    maxWidthUnit() {
      return Object(Unit["a" /* default */])(this.maxWidth);
    },

    status() {
      return this.error.status || 400;
    },

    formattedMessage() {
      if (this.error.data && this.error.data.errors) {
        return Object.keys(this.error.data.errors).reduce((carry, key) => {
          return carry.concat([this.error.data.errors[key]]);
        }, []).join('<br>');
      } else if (this.error.data && this.error.data.message) {
        return this.error.data.message;
      }

      return this.error.message;
    }

  }
});
// CONCATENATED MODULE: ./src/Components/HttpErrorResponse.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_HttpErrorResponsevue_type_script_lang_js_ = (HttpErrorResponsevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/Components/HttpErrorResponse.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Components_HttpErrorResponsevue_type_script_lang_js_,
  HttpErrorResponsevue_type_template_id_4f7f5891_render,
  HttpErrorResponsevue_type_template_id_4f7f5891_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HttpErrorResponse = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Http/Request/index.js + 3 modules
var Request = __webpack_require__("1757");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/GiveworksForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var GiveworksFormvue_type_script_lang_js_ = ({
  name: 'GiveworksForm',
  components: {
    HttpErrorResponse: HttpErrorResponse,
    Signup: () => __webpack_require__.e(/* import() | signup-type */ 8).then(__webpack_require__.bind(null, "0dce")),
    Survey: () => __webpack_require__.e(/* import() | survey-type */ 9).then(__webpack_require__.bind(null, "cc21")),
    Petition: () => __webpack_require__.e(/* import() | petition-type */ 7).then(__webpack_require__.bind(null, "4053")),
    Donation: () => Promise.all(/* import() | donation-type */[__webpack_require__.e(10), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "9ceb")),
    ActivityIndicator: () => Promise.all(/* import() | vue-interface */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "a633"))
  },
  props: {
    apiKey: {
      type: String,
      required: true
    },
    data: [Boolean, Object],
    mode: String,
    orientation: {
      type: String,
      default: 'vertical',
      validator: value => {
        return ['vertical', 'horizontal'].indexOf(value) !== -1;
      }
    },
    pageId: [Number, String],
    source: [String, Number],
    redirect: [Boolean, String]
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
      this.$refs.type.submit(e).then(this.$refs.type.onSubmitSuccess, this.$refs.type.onSubmitError);
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
    Request["a" /* default */].defaults = Http(this.mode);
    Request["a" /* default */].defaults.headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };
  },

  mounted() {
    /*
    bugsnag('e66068bbbefd6ad235c13b0c178480da').use(bugsnagVue, Vue);
     import bugsnag from '@bugsnag/js';
    import bugsnagVue from '@bugsnag/plugin-vue';
    */
    if (!this.page.id && this.apiKey) {
      Page["a" /* default */].find(this.pageId).then(model => {
        this.page = model.toJson();
      }, error => {
        this.error = error;
      });
    } else if (!this.apiKey) {
      this.error = new Error('Missing required prop: "api-key"');
      this.error.status = 500;
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

});
// CONCATENATED MODULE: ./src/Components/GiveworksForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_GiveworksFormvue_type_script_lang_js_ = (GiveworksFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/GiveworksForm.vue?vue&type=style&index=0&lang=scss&
var GiveworksFormvue_type_style_index_0_lang_scss_ = __webpack_require__("2760");

// CONCATENATED MODULE: ./src/Components/GiveworksForm.vue






/* normalize component */

var GiveworksForm_component = Object(componentNormalizer["a" /* default */])(
  Components_GiveworksFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GiveworksForm = (GiveworksForm_component.exports);
// CONCATENATED MODULE: ./src/export.js


/* harmony default export */ var src_export = (new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
  el: '#app',
  components: {
    GiveworksForm: GiveworksForm
  }
}));
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_export);



/***/ }),

/***/ "ff01":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNumeric; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c084");
/* harmony import */ var _isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1a98");



function isNumeric(value) {
    return Object(_isNumber__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value) || (
        !!value && !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) && !!value.toString().match(/^-?[\d.,]+$/)
    );
}


/***/ })

/******/ })["default"];
//# sourceMappingURL=GiveworksForm.common.js.map