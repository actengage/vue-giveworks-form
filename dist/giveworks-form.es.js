import Vue from 'vue';
import { each, extend, isArray, kebabCase, merge, trimEnd } from 'lodash-es';
import moment from 'moment';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











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









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Endpoint = function () {
    function Endpoint(api) {
        classCallCheck(this, Endpoint);

        this.api = api;
        this._ensureMethodExists('slug');
    }

    createClass(Endpoint, [{
        key: 'find',
        value: function find(id, options) {
            return this.api.get(this.api.url(this.slug(), id), options);
        }
    }, {
        key: '_ensureMethodExists',
        value: function _ensureMethodExists(method) {
            if (!this._doesMethodExists(method)) {
                throw new Error('The "slug" method must exist in all Http/Endpoints/Endpoint classes');
            }
        }
    }, {
        key: '_doesMethodExists',
        value: function _doesMethodExists(method) {
            return typeof this[method] === "function";
        }
    }]);
    return Endpoint;
}();

var Page = function (_Endpoint) {
    inherits(Page, _Endpoint);

    function Page() {
        classCallCheck(this, Page);
        return possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
    }

    createClass(Page, [{
        key: 'slug',
        value: function slug() {
            return 'page';
        }
    }, {
        key: 'submit',
        value: function submit(id, data, options) {
            return this.api.post(this.api.url(this.slug(), id), data, options);
        }
    }]);
    return Page;
}(Endpoint);

var HttpConfig = {

    baseUrl: 'https://giveworks.test/api/public/v1/',

    endpoints: {
        page: Page
    },

    defaultRequestOptions: {
        headers: {
            Authorization: false
        }
    }

};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var axios = createCommonjsModule(function (module, exports) {
/* axios v0.17.1 | (c) 2017 by Matt Zabriskie */
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory();
})(commonjsGlobal, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(2);
	var bind = __webpack_require__(3);
	var Axios = __webpack_require__(5);
	var defaults = __webpack_require__(6);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(23);
	axios.CancelToken = __webpack_require__(24);
	axios.isCancel = __webpack_require__(20);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(25);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var bind = __webpack_require__(3);
	var isBuffer = __webpack_require__(4);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray$$1(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray$$1(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge$$1(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge$$1(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend$$1(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray$$1,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge$$1,
	  extend: extend$$1,
	  trim: trim
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	};
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var defaults = __webpack_require__(6);
	var utils = __webpack_require__(2);
	var InterceptorManager = __webpack_require__(17);
	var dispatchRequest = __webpack_require__(18);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	  config.method = config.method.toLowerCase();
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(2);
	var normalizeHeaderName = __webpack_require__(7);
	
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(8);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(8);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(2);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(2);
	var settle = __webpack_require__(9);
	var buildURL = __webpack_require__(12);
	var parseHeaders = __webpack_require__(13);
	var isURLSameOrigin = __webpack_require__(14);
	var createError = __webpack_require__(10);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(15);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (("production") !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(16);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var createError = __webpack_require__(10);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var enhanceError = __webpack_require__(11);
	
	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  return error;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(2);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(2);
	
	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });
	
	  return parsed;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(2);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(2);
	var transformData = __webpack_require__(19);
	var isCancel = __webpack_require__(20);
	var defaults = __webpack_require__(6);
	var isAbsoluteURL = __webpack_require__(21);
	var combineURLs = __webpack_require__(22);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(2);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var Cancel = __webpack_require__(23);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ })
/******/ ])
});


});

var Api = function () {
    function Api() {
        classCallCheck(this, Api);

        this.config = HttpConfig;
        this.registerEndpoints(HttpConfig.endpoints);
    }

    createClass(Api, [{
        key: 'get',
        value: function get$$1(url, options) {
            return axios.get(url, extend(options, HttpConfig.defaultRequestOptions));
        }
    }, {
        key: 'post',
        value: function post(url, data, options) {
            return axios.post(url, data, extend(options, HttpConfig.defaultRequestOptions));
        }
    }, {
        key: 'put',
        value: function put(url, data, options) {
            return axios.put(url, data, extend(options, HttpConfig.defaultRequestOptions));
        }
    }, {
        key: 'delete',
        value: function _delete(url, options) {
            return axios.delete(url, extend(options, HttpConfig.defaultRequestOptions));
        }
    }, {
        key: 'baseUrl',
        value: function baseUrl() {
            return trimEnd(HttpConfig.baseUrl, '/');
        }
    }, {
        key: 'url',
        value: function url() {
            return [this.baseUrl()].concat([].slice.call(arguments)).join('/');
        }
    }, {
        key: 'registerEndpoints',
        value: function registerEndpoints(endpoints) {
            var _this = this;

            each(endpoints, function (endpoint, key) {
                _this.registerEndpoint(key, endpoint);
            }, this);
        }
    }, {
        key: 'registerEndpoint',
        value: function registerEndpoint(key, endpoint) {
            this[key] = new endpoint(this);
        }
    }]);
    return Api;
}();

var Api$1 = new Api();

var States = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    //'AS': 'American Samoa',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware',
    'DC': 'District Of Columbia',
    //'FM': 'Federated States Of Micronesia',
    'FL': 'Florida',
    'GA': 'Georgia',
    //'GU': 'Guam',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    //'MH': 'Marshall Islands',
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
    //'MP': 'Northern Mariana Islands',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    //'PW': 'Palau',
    'PA': 'Pennsylvania',
    //'PR': 'Puerto Rico',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VT': 'Vermont',
    //'VI': 'Virgin Islands',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming'
};

var BaseComponent = {

    props: {
        page: {
            type: Object,
            required: true
        },
        form: {
            type: Object,
            required: true
        },
        errors: {
            type: [Boolean, Object],
            required: true
        }
    }

};

var InputField = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "form-group", class: { 'was-validated': _vm.errors[_vm.name] } }, [_c('label', { staticClass: "text-bold", attrs: { "for": "{{name}}" } }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm.type === 'checkbox' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.form[_vm.name], expression: "form[name]" }], staticClass: "form-control", class: { 'is-invalid': _vm.errors[_vm.name] }, attrs: { "name": _vm.name, "id": _vm.name || _vm.id, "required": _vm.required, "placeholder": _vm.placeholder, "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.form[_vm.name]) ? _vm._i(_vm.form[_vm.name], null) > -1 : _vm.form[_vm.name] }, on: { "change": function change($event) {
                    var $$a = _vm.form[_vm.name],
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
                        var $$v = null,
                            $$i = _vm._i($$a, $$v);if ($$el.checked) {
                            $$i < 0 && (_vm.form[_vm.name] = $$a.concat([$$v]));
                        } else {
                            $$i > -1 && (_vm.form[_vm.name] = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                        }
                    } else {
                        _vm.$set(_vm.form, _vm.name, $$c);
                    }
                } } }) : _vm.type === 'radio' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.form[_vm.name], expression: "form[name]" }], staticClass: "form-control", class: { 'is-invalid': _vm.errors[_vm.name] }, attrs: { "name": _vm.name, "id": _vm.name || _vm.id, "required": _vm.required, "placeholder": _vm.placeholder, "type": "radio" }, domProps: { "checked": _vm._q(_vm.form[_vm.name], null) }, on: { "change": function change($event) {
                    _vm.$set(_vm.form, _vm.name, null);
                } } }) : _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.form[_vm.name], expression: "form[name]" }], staticClass: "form-control", class: { 'is-invalid': _vm.errors[_vm.name] }, attrs: { "name": _vm.name, "id": _vm.name || _vm.id, "required": _vm.required, "placeholder": _vm.placeholder, "type": _vm.type }, domProps: { "value": _vm.form[_vm.name] }, on: { "input": function input($event) {
                    if ($event.target.composing) {
                        return;
                    }_vm.$set(_vm.form, _vm.name, $event.target.value);
                } } }), _vm._v(" "), _vm.errors[_vm.name] ? _c('div', { staticClass: "invalid-feedback", domProps: { "innerHTML": _vm._s(_vm.errors[_vm.name].join('<br>')) } }) : _vm._e()]);
    }, staticRenderFns: [],

    props: {
        'form': {
            required: true,
            type: Object
        },
        'errors': {
            type: [Boolean, Object],
            required: true
        },
        'name': {
            required: true,
            type: String
        },
        'label': {
            required: true,
            type: String
        },
        'type': {
            type: String,
            default: 'text'
        },
        'id': {
            type: String
        },
        'placeholder': {
            type: String
        },
        'required': {
            type: Boolean,
            default: false
        },
        'mask': {
            type: String
        }
    }

};

var SelectField = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "form-group", class: { 'was-validated': _vm.errors[_vm.name] } }, [_c('label', { staticClass: "text-bold", attrs: { "for": "{{name}}" } }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('select', { directives: [{ name: "model", rawName: "v-model", value: _vm.form[_vm.name], expression: "form[name]" }], staticClass: "custom-select form-control", class: { 'is-invalid': _vm.errors[_vm.name] }, attrs: { "name": _vm.name, "id": _vm.name || _vm.id, "required": _vm.required }, on: { "change": function change($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                    }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;return val;
                    });_vm.$set(_vm.form, _vm.name, $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                } } }, _vm._l(_vm.selectOptions, function (option) {
            return _c('option', { domProps: { "value": option.value || option } }, [_vm._v(_vm._s(option.label || option))]);
        })), _vm._v(" "), _vm.errors[_vm.name] ? _c('div', { staticClass: "invalid-feedback", domProps: { "innerHTML": _vm._s(_vm.errors[_vm.name].join('<br>')) } }) : _vm._e()]);
    }, staticRenderFns: [],

    props: {
        'form': {
            required: true,
            type: Object
        },
        'errors': {
            type: [Boolean, Object],
            required: true
        },
        'name': {
            required: true,
            type: String
        },
        'label': {
            required: true,
            type: String
        },
        'options': {
            type: [Object, Array],
            required: true
        },
        'id': {
            type: String
        },
        'placeholder': {
            type: String
        },
        'required': {
            type: Boolean,
            default: false
        }
    },

    computed: {
        selectOptions: function selectOptions() {
            if (isArray(this.options)) {
                return this.options;
            }

            var options = [];

            for (var i in this.options) {
                options.push({
                    value: i,
                    label: this.options[i]
                });
            }

            return options;
        }
    }

};

var ContactInfoFieldset = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('fieldset', { staticClass: "mb-4" }, [_c('legend', [_vm._v("Your information")]), _vm._v(" "), _vm.page.options.add_title ? _c('select-field', { attrs: { "name": "title", "label": "Title", "options": _vm.titles, "form": _vm.form, "errors": _vm.errors } }) : _vm._e(), _vm._v(" "), _c('input-field', { attrs: { "name": "first", "label": "First Name", "form": _vm.form, "errors": _vm.errors } }), _vm._v(" "), _c('input-field', { attrs: { "name": "last", "label": "Last Name", "form": _vm.form, "errors": _vm.errors } }), _vm._v(" "), _c('input-field', { attrs: { "type": "email", "name": "email", "label": "Email", "placeholder": "you@example.com", "form": _vm.form, "errors": _vm.errors } }), _vm._v(" "), _c('input-field', { attrs: { "name": "street", "label": "Address", "form": _vm.form, "errors": _vm.errors } }), _vm._v(" "), _c('input-field', { attrs: { "name": "city", "label": "City", "form": _vm.form, "errors": _vm.errors } }), _vm._v(" "), _c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-sm-8" }, [_c('select-field', { attrs: { "name": "state", "label": "State", "options": _vm.states, "form": _vm.form, "errors": _vm.errors } })], 1), _vm._v(" "), _c('div', { staticClass: "col-sm-4" }, [_c('input-field', { attrs: { "name": "zip", "label": "Zip", "form": _vm.form, "errors": _vm.errors } })], 1)]), _vm._v(" "), _vm.page.options.add_phone ? _c('input-field', { attrs: { "name": "phone", "label": "Phone Number", "mask": "(999) 999-9999", "form": _vm.form, "errors": _vm.errors } }) : _vm._e()], 1), _vm._v(" "), _vm.shouldShowEmployment ? _c('fieldset', [_c('legend', [_vm._v("Employment Information")]), _vm._v(" "), !_vm.recurring ? _c('p', [_c('small', { staticClass: "text-muted", domProps: { "innerHTML": _vm._s(_vm.employmentOccurMessage) } })]) : _vm._e(), _vm._v(" "), !_vm.isRetired ? _c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-md-6" }, [_c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "text-bold", attrs: { "for": "employer" } }, [_vm._v("Employer")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.form.employer, expression: "form.employer" }], staticClass: "form-control", attrs: { "type": "text", "name": "employer", "id": "employer" }, domProps: { "value": _vm.form.employer }, on: { "input": function input($event) {
                    if ($event.target.composing) {
                        return;
                    }_vm.$set(_vm.form, "employer", $event.target.value);
                } } })])]), _vm._v(" "), _c('div', { staticClass: "col-md-6" }, [_c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "text-bold", attrs: { "for": "occupation" } }, [_vm._v("Occupation")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.form.occupation, expression: "form.occupation" }], staticClass: "form-control", attrs: { "type": "text", "name": "occupation", "id": "occupation" }, domProps: { "value": _vm.form.occupation }, on: { "input": function input($event) {
                    if ($event.target.composing) {
                        return;
                    }_vm.$set(_vm.form, "occupation", $event.target.value);
                } } })])])]) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "custom-control custom-checkbox" }, [_c('input', { staticClass: "custom-control-input", attrs: { "type": "checkbox", "name": "retired", "value": "1" }, on: { "change": function change($event) {
                    _vm.setRetired($event.target.checked);
                } } }), _vm._v(" "), _c('span', { staticClass: "custom-control-indicator" }), _vm._v(" "), _c('small', { staticClass: "custom-control-description text-muted form-text" }, [_vm._v("I'm retired")])])])]) : _vm._e()]);
    }, staticRenderFns: [],

    extends: BaseComponent,

    name: 'contact-info-fieldset',

    components: {
        InputField: InputField,
        SelectField: SelectField
    },

    computed: {
        isRetired: function isRetired() {
            return this.employer === 'Retired' && this.occupation === 'Retired';
        },
        shouldShowEmployment: function shouldShowEmployment() {
            return this.page.site.type === 'PAC' || this.page.site.type === 'Campaign';
        },
        employmentOccurMessage: function employmentOccurMessage() {
            return this.page.site.emp_occ_msg || this.page.site.config.giveworks.emp_occ_msg;
        },
        titles: function titles() {
            return this.page.site.config.giveworks.titles;
        },
        states: function states() {
            return States;

            var states = [];

            for (var i in States) {
                states.push({
                    value: i,
                    label: States[i]
                });
            }

            return states;
        }
    },

    methods: {
        setRetired: function setRetired(isChecked) {
            this.occupation = this.employer = isChecked ? 'Retired' : '';
        }
    }

};

var Gateway$1 = function Gateway(options) {
    classCallCheck(this, Gateway);

    this.options = options;

    if (!this.options) {
        throw new Error('A gateway must have some options passed to it!');
    }
};

let icons = {};

var Icon = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{class:_vm.klass,style:(_vm.style),attrs:{"version":"1.1","role":_vm.label ? 'img' : 'presentation',"aria-label":_vm.label,"x":_vm.x,"y":_vm.y,"width":_vm.width,"height":_vm.height,"viewBox":_vm.box}},[_vm._t("default",[(_vm.icon && _vm.icon.paths)?_vm._l((_vm.icon.paths),function(path,i){return _c('path',_vm._b({key:`path-${i}`},'path',path,false))}):_vm._e(),_vm._v(" "),(_vm.icon && _vm.icon.polygons)?_vm._l((_vm.icon.polygons),function(polygon,i){return _c('polygon',_vm._b({key:`polygon-${i}`},'polygon',polygon,false))}):_vm._e(),_vm._v("\b "),(_vm.icon && _vm.icon.raw)?[_c('g',{domProps:{"innerHTML":_vm._s(_vm.raw)}})]:_vm._e()])],2)},staticRenderFns: [],
  name: 'icon',
  props: {
    name: {
      type: String,
      validator (val) {
        if (val) {
          if (!(val in icons)) {
            console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${val}".` +
              `\nPlesase make sure you have imported this icon before using it.`);
            return false
          }
          return true
        }
        console.warn(`Invalid prop: prop "name" is required.`);
        return false
      }
    },
    scale: [Number, String],
    spin: Boolean,
    inverse: Boolean,
    pulse: Boolean,
    flip: {
      validator (val) {
        return val === 'horizontal' || val === 'vertical'
      }
    },
    label: String
  },
  data () {
    return {
      x: false,
      y: false,
      childrenWidth: 0,
      childrenHeight: 0,
      outerScale: 1
    }
  },
  computed: {
    normalizedScale () {
      let scale = this.scale;
      scale = typeof scale === 'undefined' ? 1 : Number(scale);
      if (isNaN(scale) || scale <= 0) {
        console.warn(`Invalid prop: prop "scale" should be a number over 0.`, this);
        return this.outerScale
      }
      return scale * this.outerScale
    },
    klass () {
      return {
        'fa-icon': true,
        'fa-spin': this.spin,
        'fa-flip-horizontal': this.flip === 'horizontal',
        'fa-flip-vertical': this.flip === 'vertical',
        'fa-inverse': this.inverse,
        'fa-pulse': this.pulse
      }
    },
    icon () {
      if (this.name) {
        return icons[this.name]
      }
      return null
    },
    box () {
      if (this.icon) {
        return `0 0 ${this.icon.width} ${this.icon.height}`
      }
      return `0 0 ${this.width} ${this.height}`
    },
    ratio () {
      if (!this.icon) {
        return 1
      }
      let { width, height } = this.icon;
      return Math.max(width, height) / 16
    },
    width () {
      return this.childrenWidth || this.icon && this.icon.width / this.ratio * this.normalizedScale || 0
    },
    height () {
      return this.childrenHeight || this.icon && this.icon.height / this.ratio * this.normalizedScale || 0
    },
    style () {
      if (this.normalizedScale === 1) {
        return false
      }
      return {
        fontSize: this.normalizedScale + 'em'
      }
    },
    raw () {
      // generate unique id for each icon's SVG element with ID
      if (!this.icon || !this.icon.raw) {
        return null
      }
      let raw = this.icon.raw;
      let ids = {};
      raw = raw.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
        let uniqueId = getId();
        ids[id] = uniqueId;
        return ` id="${uniqueId}"`
      });
      raw = raw.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
        let id = rawId || pointerId;
        if (!id || !ids[id]) {
          return match
        }

        return `#${ids[id]}`
      });

      return raw
    }
  },
  mounted () {
    if (this.icon) {
      return
    }
    this.$children.forEach(child => {
      child.outerScale = this.normalizedScale;
    });
    let width = 0;
    let height = 0;
    this.$children.forEach(child => {
      width = Math.max(width, child.width);
      height = Math.max(height, child.height);
    });
    this.childrenWidth = width;
    this.childrenHeight = height;
    this.$children.forEach(child => {
      child.x = (width - child.width) / 2;
      child.y = (height - child.height) / 2;
    });
  },
  register (data) {
    for (let name in data) {
      let icon = data[name];

      if (!icon.paths) {
        icon.paths = [];
      }
      if (icon.d) {
        icon.paths.push({ d: icon.d });
      }

      if (!icon.polygons) {
        icon.polygons = [];
      }
      if (icon.points) {
        icon.polygons.push({ points: icon.points });
      }

      icons[name] = icon;
    }
  },
  icons
};

let cursor = 0xd4937;
function getId () {
  return `fa-${(cursor++).toString(16)}`
}

var path = ["M93.6,27.1C87.6,34.2,78,39.8,68.4,39c-1.2-9.6,3.5-19.8,9-26.1c6-7.3,16.5-12.5,25-12.9", "C103.4,10,99.5,19.8,93.6,27.1 M102.3,40.9c-13.9-0.8-25.8,7.9-32.4,7.9c-6.7,0-16.8-7.5-27.8-7.3c-14.3,0.2-27.6,8.3-34.9,21.2", "c-15,25.8-3.9,64,10.6,85c7.1,10.4,15.6,21.8,26.8,21.4c10.6-0.4,14.8-6.9,27.6-6.9c12.9,0,16.6,6.9,27.8,6.7", "c11.6-0.2,18.9-10.4,26-20.8c8.1-11.8,11.4-23.3,11.6-23.9c-0.2-0.2-22.4-8.7-22.6-34.3c-0.2-21.4,17.5-31.6,18.3-32.2", "C123.3,42.9,107.7,41.3,102.3,40.9 M182.6,11.9v155.9h24.2v-53.3h33.5c30.6,0,52.1-21,52.1-51.4c0-30.4-21.1-51.2-51.3-51.2H182.6z", "M206.8,32.3h27.9c21,0,33,11.2,33,30.9c0,19.7-12,31-33.1,31h-27.8V32.3z M336.6,169c15.2,0,29.3-7.7,35.7-19.9h0.5v18.7h22.4V90.2", "c0-22.5-18-37-45.7-37c-25.7,0-44.7,14.7-45.4,34.9h21.8c1.8-9.6,10.7-15.9,22.9-15.9c14.8,0,23.1,6.9,23.1,19.6v8.6l-30.2,1.8", "c-28.1,1.7-43.3,13.2-43.3,33.2C298.4,155.6,314.1,169,336.6,169z M343.1,150.5c-12.9,0-21.1-6.2-21.1-15.7c0-9.8,7.9-15.5,23-16.4", "l26.9-1.7v8.8C371.9,140.1,359.5,150.5,343.1,150.5z M425.1,210.2c23.6,0,34.7-9,44.4-36.3L512,54.7h-24.6l-28.5,92.1h-0.5", "l-28.5-92.1h-25.3l41,113.5l-2.2,6.9c-3.7,11.7-9.7,16.2-20.4,16.2c-1.9,0-5.6-0.2-7.1-0.4v18.7C417.3,210,423.3,210.2,425.1,210.2z"].join("");

Icon.register({
	"apple-pay": {
		"width": 512,
		"height": 210.2,
		"paths": [{ "d": path }]
	}
});

function script(url, callback) {
    var lastEvent = void 0,
        script = document.querySelector("script[src*='" + url + "']");

    function handleCallback() {
        if (typeof callback === "function") {
            script.addEventListener('load', function (e) {
                callback(lastEvent = e);
            }, false);
        }
    }

    if (!script) {
        var heads = document.getElementsByTagName("head");
        if (heads && heads.length) {
            var head = heads[0];
            if (heads[0]) {
                script = document.createElement('script');
                script.setAttribute('src', url);
                script.setAttribute('type', 'text/javascript');
                heads[0].appendChild(script);
                handleCallback();
            }
        }
    } else {
        callback(lastEvent);
    }

    return script;
}

Icon.register({"credit-card":{"width":1920,"height":1792,"paths":[{"d":"M1760 128q66 0 113 47t47 113v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600zM160 256q-13 0-22.5 9.5t-9.5 22.5v224h1664v-224q0-13-9.5-22.5t-22.5-9.5h-1600zM1760 1536q13 0 22.5-9.5t9.5-22.5v-608h-1664v608q0 13 9.5 22.5t22.5 9.5h1600zM256 1408v-128h256v128h-256zM640 1408v-128h384v128h-384z"}]}});

Icon.register({"google-wallet":{"width":1792,"height":1792,"paths":[{"d":"M441 672q33 0 52 26 266 364 362 774h-446q-127-441-367-749-12-16-3-33.5t29-17.5h373zM1000 1029q-49 199-125 393-79-310-256-594 40-221 44-449 211 340 337 650zM1099 320q235 324 384.5 698.5t184.5 773.5h-451q-41-665-553-1472h435zM1792 896q0 424-101 812-67-560-359-1083-25-301-106-584-4-16 5.5-28.5t25.5-12.5h359q21 0 38.5 13t22.5 33q115 409 115 850z"}]}});

var Stripe = function (_Api) {
    inherits(Stripe, _Api);

    function Stripe() {
        classCallCheck(this, Stripe);
        return possibleConstructorReturn(this, (Stripe.__proto__ || Object.getPrototypeOf(Stripe)).apply(this, arguments));
    }

    createClass(Stripe, [{
        key: 'api',
        value: function api() {
            return 'App\\SiteApis\\Gateways\\Stripe';
        }
    }, {
        key: 'buttons',
        value: function buttons() {
            return [{
                icon: 'credit-card',
                label: 'Credit Card',
                component: 'stripe-credit-card'
            }, {
                icon: 'apple-pay',
                iconScale: 3,
                component: 'stripe-payment-button'
            }, {
                icon: 'google-wallet',
                iconScale: 1.5,
                label: 'Wallet',
                component: 'stripe-payment-button'
            }];

            /*
            //if(this.options.apple_pay) {
                buttons.push({
                    icon: 'apple-pay',
                    iconScale: 3,
                    component: 'stripe-payment-button'
                });
            //}
             //if(this.options.payment_stripe) {
                buttons.push({
                    icon: 'google-wallet',
                    iconScale: 1.5,
                    label: 'Wallet',
                    component: 'stripe-payment-button'
                });
            //}
             return buttons;
            */
        }
    }, {
        key: 'paymentRequest',
        value: function paymentRequest(amount, label) {
            return this.stripe().paymentRequest({
                country: 'US',
                currency: 'usd',
                total: {
                    label: label,
                    amount: amount
                }
            });
        }
    }, {
        key: 'createToken',
        value: function createToken(card, options) {
            return this.stripe().createToken(card, options);
        }
    }, {
        key: 'paymentRequestButton',
        value: function paymentRequestButton(paymentRequest) {
            var elements = this.elements();

            return elements.create('paymentRequestButton', {
                paymentRequest: paymentRequest
            });
        }
    }, {
        key: 'card',
        value: function card(options) {
            var style = {
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

            return this.elements().create('card', extend({ style: style }, options));
        }
    }, {
        key: 'elements',
        value: function elements() {
            return this.stripe().elements();
        }
    }, {
        key: 'stripe',
        value: function stripe() {
            // 4242 4242 4242 4242
            // pk_test_ETiEPWUdZbGK6GXNlmU7H4DK -- objectivehtml.com public_key
            // pk_test_Mb0QwaMGePjeORABK9f6BZ0W -- test account public_key
            // acct_1BcfrdH9HJpiOrw7 -- test account account_id

            if (!this._stripe) {
                this._stripe = new window.Stripe(this.options.publishable_key);
            }

            return this._stripe;
        }
    }, {
        key: 'script',
        value: function script$$1(callback) {
            script('https://js.stripe.com/v3/', callback);
        }
    }]);
    return Stripe;
}(Gateway$1);

var Gateways = {
    'Stripe': Stripe
};

var instances = {};

var Gateway = function (key, options) {
    if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
        options = key.options;
        key = key.name;
    }

    if (!instances[key]) {
        var Api = Gateways[key];

        if (!Api) {
            throw new Error('The "' + key + '" is not supported!');
        }

        instances[key] = new Api(options);
    }

    return instances[key];
};

///import Broadcast from 'broadcast';
//const dispatch = (new Broadcast).dispatch('app');

var StripeCreditCard = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "form-group", class: { 'was-validated': !!_vm.errors.token } }, [_c('label', { staticClass: "d-block mt-3" }, [_c('div', { staticClass: "text-bold mb-2" }, [_vm._v("Credit Card")]), _vm._v(" "), _c('div', { staticClass: "form-control p-2", class: { 'is-invalid': !!_vm.errors.token } }, [_c('div', { staticClass: "stripe-field" })]), _vm._v(" "), _vm.errors.token ? _c('div', { staticClass: "invalid-feedback", domProps: { "innerHTML": _vm._s(_vm.errors.token.join('<br>')) } }) : _vm._e()])]);
    }, staticRenderFns: [],

    name: 'stripe-credit-card',

    props: {
        page: {
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
        },
        hidePostalCode: {
            type: Boolean,
            default: false
        }
    },

    mounted: function mounted() {
        var _this = this;

        var gateway = Gateway(this.gateway);

        gateway.script(function (event) {
            var card = gateway.card({
                hidePostalCode: _this.hidePostalCode,
                value: {
                    postalCode: _this.form.zip
                }
            });

            card.addEventListener('change', function (event) {
                _this.$set(_this.errors, 'token', event.error ? [event.error.message] : null);

                if (event.complete) {
                    gateway.createToken(card, {
                        currency: 'usd'
                    }).then(function (result) {
                        if (result.error) {
                            _this.$set(_this.errors, 'token', [event.error.message]);
                        } else {
                            _this.$set(_this.form, 'token', result.token.id);
                        }
                    });
                }
            });

            card.mount(_this.$el.querySelector('.stripe-field'));
        });
    }
};

Icon.register({"warning":{"width":1792,"height":1792,"paths":[{"d":"M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zM1022 1001l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zM1008 67l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"}]}});

var StripePaymentButton = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [!_vm.error ? _c('div', [_c('div', { staticClass: "stripe-payment-button" })]) : _c('div', { staticClass: "alert alert-danger" }, [_c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-xs-3 text-center" }, [_c('icon', { staticClass: "mt-2", attrs: { "name": "warning", "scale": "2" } })], 1), _vm._v(" "), _c('div', { staticClass: "col-xs-9" }, [_vm._v(" " + _vm._s(_vm.error.message) + " ")])])])]);
    }, staticRenderFns: [],

    name: 'stripe-payment-button',

    components: {
        Icon: Icon
    },

    props: {
        page: {
            type: Object,
            required: true
        },
        gateway: {
            type: Object,
            required: true
        }
    },

    data: function data() {
        return {
            error: null
        };
    },
    mounted: function mounted() {
        var _this = this;

        var gateway = Gateway(this.gateway);

        gateway.script(function (event) {
            var paymentRequest = gateway.paymentRequest(1000, 'Test label...');
            var button = gateway.paymentRequestButton(paymentRequest);

            paymentRequest.canMakePayment().then(function (result) {
                button.mount(_this.$el.querySelector('.stripe-payment-button'));
            }).catch(function (error) {
                _this.error = error;
            });
        });
    }
};

var PaymentGateways = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('div', { staticClass: "row" }, _vm._l(_vm.buttons, function (button) {
            return _c('div', { staticClass: "col-md-6 col-lg-4" }, [_c('button', { staticClass: "btn btn-block payment-gateway-button", class: { 'btn-success': button.active, 'btn-secondary': !button.active }, attrs: { "type": "button" }, on: { "click": function click($event) {
                        _vm.activate(button);
                    } } }, [_c('icon', { class: { 'mt-2 mb-1': !button.label }, attrs: { "name": button.icon, "scale": button.iconScale || 2 } }), _vm._v(" "), button.label ? _c('div', { staticClass: "pt-1 small" }, [_vm._v(_vm._s(button.label))]) : _vm._e()], 1)]);
        })), _vm._v(" "), _vm._l(_vm.buttons, function (button) {
            return button.active ? _c('div', [_c(button.component, { tag: "component", attrs: { "form": _vm.form, "page": _vm.page, "errors": _vm.errors, "gateway": button.gateway } })], 1) : _vm._e();
        })], 2);
    }, staticRenderFns: [],

    extends: BaseComponent,

    name: 'payment-gateways',

    components: {
        Icon: Icon,
        StripeCreditCard: StripeCreditCard,
        StripePaymentButton: StripePaymentButton
    },

    data: function data() {
        var buttons = [];

        each(this.page.site.gateways, function (gateway) {
            var gatewayButtons = each(Gateway(gateway).buttons(), function (button) {
                button.active = false;
                button.gateway = gateway;
            });

            merge(buttons, gatewayButtons);
        });

        return {
            buttons: buttons,
            gateway: null
        };
    },


    methods: {
        deactivate: function deactivate() {
            each(this.buttons, function (button) {
                button.active = false;
            });
        },
        activate: function activate(button) {
            this.deactivate();

            button.active = true;

            this.$set(this.form, 'gateway', Gateway(button.gateway).api());
        }
    },

    created: function created() {
        this.activate(this.buttons[0]);
    }
};

var BaseType = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "activity-indicator", class: _vm.classes }, _vm._l(_vm.nodes, function (i) {
            return _c('div');
        }));
    }, staticRenderFns: [],

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
        classes: function classes() {
            var classes = {};

            classes[this.$options.name] = !!this.$options.name;
            classes[this.prefix + this.size.replace(this.prefix, '')] = !!this.size;

            return classes;
        }
    }

};

var ActivityIndicatorDots = {

    name: 'activity-indicator-dots',

    extends: BaseType
};

var ActivityIndicatorSpinner = {

    name: 'activity-indicator-spinner',

    extends: BaseType,

    props: extend({}, BaseType.props, {
        nodes: {
            type: Number,
            default: 12
        }
    })
};

var ActivityIndicator = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.center ? _c('div', { staticClass: "center-wrapper" }, [_c('div', { staticClass: "center-content" }, [_c(_vm.component, { tag: "component", attrs: { "size": _vm.size, "prefix": _vm.prefix } })], 1)]) : _c('div', [_c(_vm.component, { tag: "component", attrs: { "size": _vm.size, "prefix": _vm.prefix } })], 1);
    }, staticRenderFns: [],

    props: extend({}, BaseType.props, {
        center: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'dots'
        }
    }),

    components: {
        ActivityIndicatorDots: ActivityIndicatorDots,
        ActivityIndicatorSpinner: ActivityIndicatorSpinner
    },

    computed: {
        component: function component() {
            return kebabCase(this.prefix + this.type.replace(this.prefix, ''));
        }
    }

};

var convertAnimationDelayToInt = function convertAnimationDelayToInt(delay) {
    var num = parseFloat(delay, 10);
    var matches = delay.match(/m?s/);
    var unit = matches ? matches[0] : false;

    var milliseconds = void 0;

    switch (unit) {
        case "s":
            // seconds
            milliseconds = num * 1000;
            break;
        case "ms":
        default:
            milliseconds = num;
            break;
    }

    return milliseconds || 0;
};

var animated = function animated(el, callback) {
    var defaultView = (el.ownerDocument || document).defaultView;

    setTimeout(function () {
        callback.apply();
    }, convertAnimationDelayToInt(defaultView.getComputedStyle(el).animationDuration));
};

var ActivityButton = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('button', { staticClass: "btn", class: _vm.classes, attrs: { "type": _vm.type, "disabled": _vm.disabled } }, [_vm._v(" " + _vm._s(_vm.label) + " "), _c('activity-indicator', { attrs: { "type": _vm.indicator } })], 1);
    }, staticRenderFns: [],

    name: 'activity-button',

    props: {
        block: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'md'
        },
        color: {
            type: String,
            default: 'primary'
        },
        type: {
            type: String,
            default: 'button'
        },
        indicator: {
            type: String,
            default: 'spinner'
        },
        orientation: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    },

    components: {
        ActivityIndicator: ActivityIndicator
    },

    data: function data() {
        return {
            disabled: this.$props.disabled == 'true'
        };
    },

    beforeDestroy: function beforeDestroy() {
        this.$el.removeEventListener('activity:show');
        this.$el.removeEventListener('activity:hide');
    },

    mounted: function mounted() {
        var _this = this;

        this.$el.addEventListener('activity:show', function (event) {
            _this.showActivity();
        });

        this.$el.addEventListener('activity:hide', function (event) {
            _this.hideActivity();
        });
    },

    computed: {
        classes: function classes() {
            var classes = {};

            classes['btn-block'] = this.block;
            classes['btn-' + this.size.replace('btn-', '')] = !!this.size;
            classes['btn-' + this.color.replace('btn-', '')] = !!this.color;
            classes['btn-activity'] = this.activity;
            classes['btn-activity-' + this.orientation.replace('btn-activity-', '')] = !!this.orientation;
            classes['btn-activity-indicator-' + this.indicator.replace('btn-activity-indicator-', '')] = !!this.indicator;

            return classes;
        }
    },

    methods: {
        disable: function disable() {
            this.disabled = true;
        },
        enable: function enable() {
            this.disabled = false;
        },
        showActivity: function showActivity() {
            var _this2 = this;

            this.disable();
            this.$el.classList.add('btn-activity');

            animated(this.$el, function () {
                _this2.$el.dispatchEvent(new Event('activity:shown'));
            });
        },
        hideActivity: function hideActivity() {
            var _this3 = this;

            this.$el.classList.add('btn-hide-activity');

            animated(this.$el, function () {
                _this3.$el.classList.remove('btn-activity', 'btn-hide-activity');
                _this3.enable();
            });
        }
    }

};

var PaymentInfoFieldset = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('fieldset', [_c('legend', [_vm._v("Payment information")]), _vm._v(" "), _c('payment-gateways', { attrs: { "form": _vm.form, "errors": _vm.errors, "page": _vm.page } }), _vm._v(" "), _vm.page.options.add_comment ? _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "text-bold", attrs: { "for": "comment" }, domProps: { "innerHTML": _vm._s(_vm.commentMessage) } }), _vm._v(" "), _c('textarea', { directives: [{ name: "model", rawName: "v-model", value: _vm.form.comment, expression: "form.comment" }], staticClass: "form-control", attrs: { "id": "comment" }, domProps: { "value": _vm.form.comment }, on: { "input": function input($event) {
                    if ($event.target.composing) {
                        return;
                    }_vm.$set(_vm.form, "comment", $event.target.value);
                } } })]) : _vm._e(), _vm._v(" "), _c('activity-button', { attrs: { "type": "submit", "size": "lg", "orientation": "right", "block": true, "label": _vm.buttonLabel } }), _vm._v(" "), _vm.page.options.add_optin ? _c('div', [_c('label', { staticClass: "custom-control custom-checkbox" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.form.optin, expression: "form.optin" }], staticClass: "custom-control-input", attrs: { "type": "checkbox", "checked": "checked" }, domProps: { "checked": Array.isArray(_vm.form.optin) ? _vm._i(_vm.form.optin, null) > -1 : _vm.form.optin }, on: { "change": function change($event) {
                    var $$a = _vm.form.optin,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
                        var $$v = null,
                            $$i = _vm._i($$a, $$v);if ($$el.checked) {
                            $$i < 0 && (_vm.form.optin = $$a.concat([$$v]));
                        } else {
                            $$i > -1 && (_vm.form.optin = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                        }
                    } else {
                        _vm.$set(_vm.form, "optin", $$c);
                    }
                } } }), _vm._v(" "), _c('span', { staticClass: "custom-control-indicator" }), _vm._v(" "), _c('small', { staticClass: "custom-control-description text-muted form-text", domProps: { "innerHTML": _vm._s(_vm.optinMessage) } })])]) : _vm._e(), _vm._v(" "), _vm.page.site.disclaimer ? _c('div', { staticClass: "mt-3" }, [_c('small', { staticClass: "text-muted", domProps: { "innerHTML": _vm._s(_vm.page.site.disclaimer) } })]) : _vm._e()], 1);
    }, staticRenderFns: [],

    extends: BaseComponent,

    name: 'payment-info-fieldset',

    components: {
        ActivityButton: ActivityButton,
        PaymentGateways: PaymentGateways
    },

    computed: {
        commentMessage: function commentMessage() {
            return this.page.options.comment_message || this.page.site.config.giveworks.comment_mess;
        },
        optinMessage: function optinMessage() {
            return this.page.options.optin_message || this.page.site.config.giveworks.optin_mess;
        },
        buttonLabel: function buttonLabel() {
            return this.page.options.button || this.page.site.config.giveworks.button.donate;
        }
    }

};

// Icons that are used on this page
var SelectDonationFieldset = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('fieldset', [_c('legend', { class: { 'mb-0': _vm.hasMinimumAmount } }, [_vm._v("Select your donation amount")]), _vm._v(" "), _vm.hasMinimumAmount ? _c('div', { staticClass: "mb-2" }, [_c('small', { staticClass: "text-muted" }, [_vm._v("Minimum accepted amount is $" + _vm._s(_vm.page.options.min_amount))])]) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "row mb-2", class: { 'was-validated': _vm.errors.amount } }, [_c('div', { staticClass: "col-sm-6" }, _vm._l(_vm.amounts.slice(0, _vm.amounts.length / 2), function (value) {
            return _c('div', { staticClass: "custom-controls-stacked" }, [_c('label', { staticClass: "custom-control custom-radio" }, [_c('input', { directives: [{ name: "model", rawName: "v-model.number", value: _vm.form.amount, expression: "form.amount", modifiers: { "number": true } }], staticClass: "custom-control-input", class: { 'is-invalid': _vm.errors.amount }, attrs: { "type": "radio" }, domProps: { "value": value, "checked": _vm._q(_vm.form.amount, _vm._n(value)) }, on: { "change": function change($event) {
                        _vm.$set(_vm.form, "amount", _vm._n(value));
                    } } }), _vm._v(" "), _c('span', { staticClass: "custom-control-indicator" }), _vm._v(" "), _c('span', { staticClass: "custom-control-description" }, [_vm._v("$" + _vm._s(value))])])]);
        })), _vm._v(" "), _c('div', { staticClass: "col-sm-6" }, _vm._l(_vm.amounts.slice(_vm.amounts.length / 2), function (value) {
            return _c('div', { staticClass: "custom-controls-stacked" }, [_c('label', { staticClass: "custom-control custom-radio" }, [_c('input', { directives: [{ name: "model", rawName: "v-model.number", value: _vm.form.amount, expression: "form.amount", modifiers: { "number": true } }], staticClass: "custom-control-input", class: { 'is-invalid': _vm.errors.amount }, attrs: { "type": "radio" }, domProps: { "value": value, "checked": _vm._q(_vm.form.amount, _vm._n(value)) }, on: { "change": function change($event) {
                        _vm.$set(_vm.form, "amount", _vm._n(value));
                    } } }), _vm._v(" "), _c('span', { staticClass: "custom-control-indicator" }), _vm._v(" "), _c('span', { staticClass: "custom-control-description" }, [_vm._v("$" + _vm._s(value))])])]);
        }))]), _vm._v(" "), _c('div', { staticClass: "row", class: { 'was-validated': _vm.errors.amount } }, [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "col-sm-6" }, [_c('div', { staticClass: "input-group" }, [_vm._m(1), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model.number", value: _vm.form.amount, expression: "form.amount", modifiers: { "number": true } }], staticClass: "form-control", class: { 'is-invalid': _vm.errors.amount }, attrs: { "type": "text", "name": "amount", "id": "amount", "placeholder": "10.00" }, domProps: { "value": _vm.form.amount }, on: { "input": function input($event) {
                    if ($event.target.composing) {
                        return;
                    }_vm.$set(_vm.form, "amount", _vm._n($event.target.value));
                }, "blur": function blur($event) {
                    _vm.$forceUpdate();
                } } })])])]), _vm._v(" "), _vm.page.site.recurring && !_vm.page.options.recurring_only ? _c('div', { staticClass: "form-group mt-3" }, [_c('label', { domProps: { "innerHTML": _vm._s(_vm.recurringMessage) } }), _vm._v(" "), _c('div', { staticClass: "btn-group" }, [_c('button', { staticClass: "btn", class: { 'btn-success': !_vm.form.recurring, 'btn-secondary': !!_vm.form.recurring }, attrs: { "type": "button" }, on: { "click": function click($event) {
                    _vm.form.recurring = 0;
                } } }, [_vm._v("One-Time")]), _vm._v(" "), _c('button', { staticClass: "btn", class: { 'btn-success': !!_vm.form.recurring, 'btn-secondary': !_vm.form.recurring }, attrs: { "type": "button" }, on: { "click": function click($event) {
                    _vm.form.recurring = 1;
                } } }, [_vm._v("Monthly")])]), _vm._v(" "), !_vm.recurring ? _c('small', { staticClass: "text-muted form-text" }, [_vm._v("You are making a single donation of the amount entered above. Click the 'monthly' button to make your gift go further as an automatic monthly donation.")]) : _vm._e(), _vm._v(" "), !!_vm.recurring ? _c('small', { staticClass: "text-muted form-text" }, [_vm._v("This amount will be charged automatically once each month, on or about the " + _vm._s(_vm.chargeDate) + ". You may cancel your donation at any time by contacting us.")]) : _vm._e()]) : _vm.page.site.recurring && _vm.page.options.recurring_only ? _c('div', { staticClass: "alert alert-warning mt-3" }, [_c('h5', { staticClass: "alert-heading" }, [_c('icon', { attrs: { "name": "warning" } }), _vm._v(" Monthly Donation")], 1), _vm._v(" "), _vm.page.options.recur_message ? _c('div', { domProps: { "innerHTML": _vm._s(_vm.page.options.recur_message) } }) : _c('div', [_vm._v(" Please note that this will be a monthly recurring donation. The amount you select will be charged automatically once each month on or about the " + _vm._s(_vm.chargeDate) + ". You may cancel your donation at any time by contacting us. ")])]) : _vm._e()]);
    }, staticRenderFns: [function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { staticClass: "col-sm-6 col-form-label", attrs: { "for": "amount" } }, [_c('span', { staticClass: "text-bold" }, [_vm._v("Your Amount")])]);
    }, function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { staticClass: "input-group-prepend", attrs: { "for": "amount" } }, [_c('div', { staticClass: "input-group-text" }, [_vm._v("$")])]);
    }],

    extends: BaseComponent,

    name: 'select-donation-fieldset',

    components: {
        Icon: Icon
    },

    computed: {
        recurringMessage: function recurringMessage() {
            return this.page.options.recur_mess || this.page.site.config.giveworks.recur_mess;
        },
        chargeDate: function chargeDate() {
            return moment().format('do');
        },
        hasMinimumAmount: function hasMinimumAmount() {
            return this.page.options.min_amount && (parseFloat(this.page.options.min_amount) || 0) > 0;
        },
        amounts: function amounts() {
            var _this = this;

            var values = this.page.options.amounts ? this.page.options.amounts.split(',') : this.page.site.config.giveworks.ask_amounts;

            return values.filter(function (value) {
                return value >= (parseFloat(_this.page.options.min_amount) || 0);
            });
        }
    }

};

//import Broadcast from 'broadcast';
//const dispatch = (new Broadcast).dispatch('app');

var BaseDonationForm = {

    props: {
        page: {
            type: Object,
            required: true
        },
        form: {
            type: Object,
            required: true
        },
        errors: {
            type: [Boolean, Object],
            required: true
        }
    },

    components: {
        ContactInfoFieldset: ContactInfoFieldset,
        PaymentInfoFieldset: PaymentInfoFieldset,
        SelectDonationFieldset: SelectDonationFieldset
    }

};

var VerticalDonationForm = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-md-5 col-lg-4" }, [_c('select-donation-fieldset', { attrs: { "form": _vm.form, "errors": _vm.errors, "page": _vm.page } }), _vm._v(" "), _c('contact-info-fieldset', { attrs: { "form": _vm.form, "errors": _vm.errors, "page": _vm.page } }), _vm._v(" "), _c('payment-info-fieldset', { attrs: { "form": _vm.form, "errors": _vm.errors, "page": _vm.page } })], 1), _vm._v(" "), _c('div', { staticClass: "col-md-7 col-lg-8", domProps: { "innerHTML": _vm._s(_vm.page.body) } })]), _vm._v(" "), _c('div')]);
    }, staticRenderFns: [],

    extends: BaseDonationForm

};

var HorizontalDonationForm = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-sm-12", domProps: { "innerHTML": _vm._s(_vm.page.body) } })]), _vm._v(" "), _c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-md-4" }, [_c('select-donation-fieldset', { attrs: { "form": _vm.form, "errors": _vm.errors, "page": _vm.page } })], 1), _vm._v(" "), _c('div', { staticClass: "col-md-4" }, [_c('contact-info-fieldset', { attrs: { "form": _vm.form, "errors": _vm.errors, "page": _vm.page } })], 1), _vm._v(" "), _c('div', { staticClass: "col-md-4" }, [_c('payment-info-fieldset', { attrs: { "form": _vm.form, "errors": _vm.errors, "page": _vm.page } })], 1)])]);
    }, staticRenderFns: [],

    extends: BaseDonationForm

};

var PageType = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "container" }, [_c(_vm.componentName, { tag: "component", attrs: { "orientation": _vm.orientation, "form": _vm.form, "errors": _vm.errors, "page": _vm.page } })], 1);
    }, staticRenderFns: [],

    props: {
        page: {
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
        orientation: {
            type: String,
            default: 'vertical',
            validator: function validator(value) {
                return ['vertical', 'horizontal'].indexOf(value) !== -1;
            }
        }
    },

    computed: {
        componentName: function componentName() {
            return this.orientation + '-' + this.page.special + '-form';
        }
    },

    components: {
        VerticalDonationForm: VerticalDonationForm,
        HorizontalDonationForm: HorizontalDonationForm
    }

};

var HttpErrorResponse = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "gw-alert" }, [_c('h1', { staticClass: "gw-alert-header" }, [_vm._v(_vm._s(_vm.header))]), _vm._v(" "), _c('div', { staticClass: "gw-alert-body" }, [_vm._v(_vm._s(_vm.error.message))])]);
    }, staticRenderFns: [],

    props: {
        'error': {
            type: Error,
            default: function _default() {
                return {};
            }
        },
        'header': {
            type: String,
            default: 'Error!'
        }
    }

};

var GiveworksForm = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.page ? _c('div', [_c('form', { on: { "submit": _vm.onSubmit } }, [_c('page-type', { attrs: { "orientation": _vm.orientation, "form": _vm.form, "errors": _vm.errors, "page": _vm.page } })], 1)]) : _vm.error ? _c('div', [_c('http-error-response', { attrs: { "error": _vm.error } })], 1) : _c('div', [_c('activity-indicator', { attrs: { "center": true, "size": "xl" } })], 1);
    }, staticRenderFns: [],

    name: 'giveworks-form',

    props: {
        'api-key': {
            type: String,
            required: true
        },
        'page-id': {
            type: [Number, String],
            required: true
        },
        'orientation': {
            type: String,
            default: 'vertical'
        },
        'redirect': {
            type: [Boolean, String],
            default: false
        }
    },

    components: {
        'page-type': PageType,
        'activity-indicator': ActivityIndicator,
        'http-error-response': HttpErrorResponse
    },

    methods: {
        showActivity: function showActivity() {
            var el = this.$el.querySelector('[type=submit]');

            if (el) {
                el.dispatchEvent(new Event('activity:show'));
            }
        },
        hideActivity: function hideActivity() {
            var el = this.$el.querySelector('[type=submit]');

            if (el) {
                el.dispatchEvent(new Event('activity:hide'));
            }
        },
        disable: function disable() {
            this.$el.querySelector('[type=submit]').disabled = true;
        },
        enable: function enable() {
            this.$el.querySelector('[type=submit]').disabled = false;
        },
        onSubmit: function onSubmit(event) {
            var _this = this;

            if (!this.$submitting) {
                this.$submitting = true;
                this.showActivity();

                Api$1.page.submit(this.page.id, this.form).then(function (response) {
                    window.location = _this.redirect || _this.page.next_page.url;
                }, function (error) {
                    _this.$submitting = false;
                    _this.hideActivity();
                    _this.$set(_this, 'errors', error.response.data.errors || {});
                });
            }

            event.preventDefault();
        }
    },

    data: function data() {
        return {
            errors: {},
            page: this.$attrs.page,
            form: {
                recurring: 0,
                optin: 1
            }
        };
    },
    created: function created() {
        HttpConfig.defaultRequestOptions || (HttpConfig.defaultRequestOptions = {});
        HttpConfig.defaultRequestOptions.headers['Authorization'] = 'Bearer ' + this.apiKey;
    },
    mounted: function mounted() {
        var _this2 = this;

        if (!this.page) {
            Api$1.page.find(this.pageId).then(function (response) {
                _this2.page = response.data;
            }).catch(function (error) {
                _this2.error = error;
            });
        }
    }
};

var GiveworksVueApp = function () {
    function GiveworksVueApp(el, options) {
        classCallCheck(this, GiveworksVueApp);

        this.setApp(el);
    }

    createClass(GiveworksVueApp, [{
        key: 'setApp',
        value: function setApp(el, options) {
            this.app = new Vue({
                el: el,
                components: {
                    GiveworksForm: GiveworksForm
                }
            });
        }
    }]);
    return GiveworksVueApp;
}();

export default GiveworksVueApp;
//# sourceMappingURL=giveworks-form.es.js.map
