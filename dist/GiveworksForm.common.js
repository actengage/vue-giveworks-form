module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cdf6");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "012c":
/***/ (function(module, exports, __webpack_require__) {

(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;
// minimal implementations of useful ES functionality
// all we really need for arrays is reduce – everything else is just sugar!
// Array#reduce
var reduce = function (arr, fn, accum) {
  var val = accum;

  for (var i = 0, len = arr.length; i < len; i++) {
    val = fn(val, arr[i], i, arr);
  }

  return val;
}; // Array#filter


var filter = function (arr, fn) {
  return reduce(arr, function (accum, item, i, arr) {
    return !fn(item, i, arr) ? accum : accum.concat(item);
  }, []);
}; // Array#map


var map = function (arr, fn) {
  return reduce(arr, function (accum, item, i, arr) {
    return accum.concat(fn(item, i, arr));
  }, []);
}; // Array#includes


var includes = function (arr, x) {
  return reduce(arr, function (accum, item, i, arr) {
    return accum === true || item === x;
  }, false);
};

var _hasDontEnumBug = !{
  toString: null
}.propertyIsEnumerable('toString');

var _dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor']; // Object#keys

var keys = function (obj) {
  // stripped down version of
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Keys
  var result = [];
  var prop;

  for (prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) result.push(prop);
  }

  if (!_hasDontEnumBug) return result;

  for (var i = 0, len = _dontEnums.length; i < len; i++) {
    if (Object.prototype.hasOwnProperty.call(obj, _dontEnums[i])) result.push(_dontEnums[i]);
  }

  return result;
}; // Array#isArray


var isArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

var _pad = function (n) {
  return n < 10 ? "0" + n : n;
}; // Date#toISOString


var isoDate = function () {
  // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
  var d = new Date();
  return d.getUTCFullYear() + '-' + _pad(d.getUTCMonth() + 1) + '-' + _pad(d.getUTCDate()) + 'T' + _pad(d.getUTCHours()) + ':' + _pad(d.getUTCMinutes()) + ':' + _pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

var _$esUtils_7 = {
  map: map,
  reduce: reduce,
  filter: filter,
  includes: includes,
  keys: keys,
  isArray: isArray,
  isoDate: isoDate
};

var _$validators_12 = {};
_$validators_12.intRange = function (min, max) {
  if (min === void 0) {
    min = 1;
  }

  if (max === void 0) {
    max = Infinity;
  }

  return function (value) {
    return typeof value === 'number' && parseInt('' + value, 10) === value && value >= min && value <= max;
  };
};

_$validators_12.stringWithLength = function (value) {
  return typeof value === 'string' && !!value.length;
};

var _$config_5 = {};
var __filter_5 = _$esUtils_7.filter,
    __reduce_5 = _$esUtils_7.reduce,
    __keys_5 = _$esUtils_7.keys,
    __isArray_5 = _$esUtils_7.isArray,
    __includes_5 = _$esUtils_7.includes;

var intRange = _$validators_12.intRange,
    stringWithLength = _$validators_12.stringWithLength;

_$config_5.schema = {
  apiKey: {
    defaultValue: function () {
      return null;
    },
    message: 'is required',
    validate: stringWithLength
  },
  appVersion: {
    defaultValue: function () {
      return null;
    },
    message: 'should be a string',
    validate: function (value) {
      return value === null || stringWithLength(value);
    }
  },
  appType: {
    defaultValue: function () {
      return null;
    },
    message: 'should be a string',
    validate: function (value) {
      return value === null || stringWithLength(value);
    }
  },
  autoNotify: {
    defaultValue: function () {
      return true;
    },
    message: 'should be true|false',
    validate: function (value) {
      return value === true || value === false;
    }
  },
  beforeSend: {
    defaultValue: function () {
      return [];
    },
    message: 'should be a function or array of functions',
    validate: function (value) {
      return typeof value === 'function' || __isArray_5(value) && __filter_5(value, function (f) {
        return typeof f === 'function';
      }).length === value.length;
    }
  },
  endpoints: {
    defaultValue: function () {
      return {
        notify: 'https://notify.bugsnag.com',
        sessions: 'https://sessions.bugsnag.com'
      };
    },
    message: 'should be an object containing endpoint URLs { notify, sessions }. sessions is optional if autoCaptureSessions=false',
    validate: function (val, obj) {
      return (// first, ensure it's an object
        val && typeof val === 'object' && // endpoints.notify must always be set
        stringWithLength(val.notify) && ( // endpoints.sessions must be set unless session tracking is explicitly off
        obj.autoCaptureSessions === false || stringWithLength(val.sessions)) && // ensure no keys other than notify/session are set on endpoints object
        __filter_5(__keys_5(val), function (k) {
          return !__includes_5(['notify', 'sessions'], k);
        }).length === 0
      );
    }
  },
  autoCaptureSessions: {
    defaultValue: function (val, opts) {
      return opts.endpoints === undefined || !!opts.endpoints && !!opts.endpoints.sessions;
    },
    message: 'should be true|false',
    validate: function (val) {
      return val === true || val === false;
    }
  },
  notifyReleaseStages: {
    defaultValue: function () {
      return null;
    },
    message: 'should be an array of strings',
    validate: function (value) {
      return value === null || __isArray_5(value) && __filter_5(value, function (f) {
        return typeof f === 'string';
      }).length === value.length;
    }
  },
  releaseStage: {
    defaultValue: function () {
      return 'production';
    },
    message: 'should be a string',
    validate: function (value) {
      return typeof value === 'string' && value.length;
    }
  },
  maxBreadcrumbs: {
    defaultValue: function () {
      return 20;
    },
    message: 'should be a number ≤40',
    validate: function (value) {
      return intRange(0, 40)(value);
    }
  },
  autoBreadcrumbs: {
    defaultValue: function () {
      return true;
    },
    message: 'should be true|false',
    validate: function (value) {
      return typeof value === 'boolean';
    }
  },
  user: {
    defaultValue: function () {
      return null;
    },
    message: '(object) user should be an object',
    validate: function (value) {
      return typeof value === 'object';
    }
  },
  metaData: {
    defaultValue: function () {
      return null;
    },
    message: 'should be an object',
    validate: function (value) {
      return typeof value === 'object';
    }
  },
  logger: {
    defaultValue: function () {
      return undefined;
    },
    message: 'should be null or an object with methods { debug, info, warn, error }',
    validate: function (value) {
      return !value || value && __reduce_5(['debug', 'info', 'warn', 'error'], function (accum, method) {
        return accum && typeof value[method] === 'function';
      }, true);
    }
  },
  filters: {
    defaultValue: function () {
      return ['password'];
    },
    message: 'should be an array of strings|regexes',
    validate: function (value) {
      return __isArray_5(value) && value.length === __filter_5(value, function (s) {
        return typeof s === 'string' || s && typeof s.test === 'function';
      }).length;
    }
  }
};

_$config_5.mergeDefaults = function (opts, schema) {
  if (!opts || !schema) throw new Error('opts and schema objects are required');
  return __reduce_5(__keys_5(schema), function (accum, key) {
    accum[key] = opts[key] !== undefined ? opts[key] : schema[key].defaultValue(opts[key], opts);
    return accum;
  }, {});
};

_$config_5.validate = function (opts, schema) {
  if (!opts || !schema) throw new Error('opts and schema objects are required');
  var errors = __reduce_5(__keys_5(schema), function (accum, key) {
    if (schema[key].validate(opts[key], opts)) return accum;
    return accum.concat({
      key: key,
      message: schema[key].message,
      value: opts[key]
    });
  }, []);
  return {
    valid: !errors.length,
    errors: errors
  };
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var schema = _$config_5.schema;

var __map_1 = _$esUtils_7.map;

var __stringWithLength_1 = _$validators_12.stringWithLength;

var _$config_1 = {
  releaseStage: {
    defaultValue: function () {
      if (/^localhost(:\d+)?$/.test(window.location.host)) return 'development';
      return 'production';
    },
    message: 'should be set',
    validate: __stringWithLength_1
  },
  logger: _extends({}, schema.logger, {
    defaultValue: function () {
      return (// set logger based on browser capability
        typeof console !== 'undefined' && typeof console.debug === 'function' ? getPrefixedConsole() : undefined
      );
    }
  })
};

var getPrefixedConsole = function () {
  var logger = {};
  var consoleLog = console['log'];
  __map_1(['debug', 'info', 'warn', 'error'], function (method) {
    var consoleMethod = console[method];
    logger[method] = typeof consoleMethod === 'function' ? consoleMethod.bind(console, '[bugsnag]') : consoleLog.bind(console, '[bugsnag]');
  });
  return logger;
};

var __isoDate_3 = _$esUtils_7.isoDate;

var BugsnagBreadcrumb =
/*#__PURE__*/
function () {
  function BugsnagBreadcrumb(name, metaData, type, timestamp) {
    if (name === void 0) {
      name = '[anonymous]';
    }

    if (metaData === void 0) {
      metaData = {};
    }

    if (type === void 0) {
      type = 'manual';
    }

    if (timestamp === void 0) {
      timestamp = __isoDate_3();
    }

    this.type = type;
    this.name = name;
    this.metaData = metaData;
    this.timestamp = timestamp;
  }

  var _proto = BugsnagBreadcrumb.prototype;

  _proto.toJSON = function toJSON() {
    return {
      type: this.type,
      name: this.name,
      timestamp: this.timestamp,
      metaData: this.metaData
    };
  };

  return BugsnagBreadcrumb;
}();

var _$BugsnagBreadcrumb_3 = BugsnagBreadcrumb;

// This is a heavily modified/simplified version of
//   https://github.com/othiym23/async-some
//
// We can't use that because:
//   a) it inflates the bundle size to over 10kB
//   b) it depends on a module that uses Object.keys()
//      (which we can't use due to ie8 support)
// run the asynchronous test function (fn) over each item in the array (arr)
// in series until:
//   - fn(item, cb) => calls cb(null, true)
//   - or the end of the array is reached
// the callback (cb) will be passed true if any of the items resulted in a true
// callback, otherwise false
var _$asyncSome_6 = function (arr, fn, cb) {
  var length = arr.length;
  var index = 0;

  var next = function () {
    if (index >= length) return cb(null, false);
    fn(arr[index], function (err, result) {
      if (err) return cb(err, false);
      if (result === true) return cb(null, true);
      index++;
      next();
    });
  };

  next();
};

var _$inferReleaseStage_9 = function (client) {
  return client.app && typeof client.app.releaseStage === 'string' ? client.app.releaseStage : client.config.releaseStage;
};

var _$runBeforeSend_11 = function (report, onError) {
  return function (fn, cb) {
    if (typeof fn !== 'function') return cb(null, false);

    try {
      // if function appears sync…
      if (fn.length !== 2) {
        var ret = fn(report); // check if it returned a "thenable" (promise)

        if (ret && typeof ret.then === 'function') {
          return ret.then( // resolve
          function (val) {
            return setTimeout(function () {
              return cb(null, shouldPreventSend(report, val));
            }, 0);
          }, // reject
          function (err) {
            setTimeout(function () {
              onError(err);
              return cb(null, false);
            });
          });
        }

        return cb(null, shouldPreventSend(report, ret));
      } // if function is async…


      fn(report, function (err, result) {
        if (err) {
          onError(err);
          return cb(null, false);
        }

        cb(null, shouldPreventSend(report, result));
      });
    } catch (e) {
      onError(e);
      cb(null, false);
    }
  };
};

var shouldPreventSend = function (report, value) {
  return report.isIgnored() || value === false;
};

/**
 * Expose `isError`.
 */
var _$isError_18 = isError;
/**
 * Test whether `value` is error object.
 *
 * @param {*} value
 * @returns {boolean}
 */

function isError(value) {
  switch (Object.prototype.toString.call(value)) {
    case '[object Error]':
      return true;

    case '[object Exception]':
      return true;

    case '[object DOMException]':
      return true;

    default:
      return value instanceof Error;
  }
}

// Given `err` which may be an error, does it have a stack property which is a string?
var _$hasStack_8 = function (err) {
  return !!err && (!!err.stack || !!err.stacktrace || !!err['opera#sourceloc']) && typeof (err.stack || err.stacktrace || err['opera#sourceloc']) === 'string' && err.stack !== err.name + ": " + err.message;
};

var _$stackframe_20 = {};
(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (typeof define === 'function' && define.amd) {
    define('stackframe', [], factory);
  } else if (typeof _$stackframe_20 === 'object') {
    _$stackframe_20 = factory();
  } else {
    root.StackFrame = factory();
  }
})(this, function () {
  'use strict';

  function _isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  function _getter(p) {
    return function () {
      return this[p];
    };
  }

  var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
  var numericProps = ['columnNumber', 'lineNumber'];
  var stringProps = ['fileName', 'functionName', 'source'];
  var arrayProps = ['args'];
  var props = booleanProps.concat(numericProps, stringProps, arrayProps);

  function StackFrame(obj) {
    if (obj instanceof Object) {
      for (var i = 0; i < props.length; i++) {
        if (obj.hasOwnProperty(props[i]) && obj[props[i]] !== undefined) {
          this['set' + _capitalize(props[i])](obj[props[i]]);
        }
      }
    }
  }

  StackFrame.prototype = {
    getArgs: function () {
      return this.args;
    },
    setArgs: function (v) {
      if (Object.prototype.toString.call(v) !== '[object Array]') {
        throw new TypeError('Args must be an Array');
      }

      this.args = v;
    },
    getEvalOrigin: function () {
      return this.evalOrigin;
    },
    setEvalOrigin: function (v) {
      if (v instanceof StackFrame) {
        this.evalOrigin = v;
      } else if (v instanceof Object) {
        this.evalOrigin = new StackFrame(v);
      } else {
        throw new TypeError('Eval Origin must be an Object or StackFrame');
      }
    },
    toString: function () {
      var functionName = this.getFunctionName() || '{anonymous}';
      var args = '(' + (this.getArgs() || []).join(',') + ')';
      var fileName = this.getFileName() ? '@' + this.getFileName() : '';
      var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
      var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
      return functionName + args + fileName + lineNumber + columnNumber;
    }
  };

  for (var i = 0; i < booleanProps.length; i++) {
    StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);

    StackFrame.prototype['set' + _capitalize(booleanProps[i])] = function (p) {
      return function (v) {
        this[p] = Boolean(v);
      };
    }(booleanProps[i]);
  }

  for (var j = 0; j < numericProps.length; j++) {
    StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);

    StackFrame.prototype['set' + _capitalize(numericProps[j])] = function (p) {
      return function (v) {
        if (!_isNumber(v)) {
          throw new TypeError(p + ' must be a Number');
        }

        this[p] = Number(v);
      };
    }(numericProps[j]);
  }

  for (var k = 0; k < stringProps.length; k++) {
    StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);

    StackFrame.prototype['set' + _capitalize(stringProps[k])] = function (p) {
      return function (v) {
        this[p] = String(v);
      };
    }(stringProps[k]);
  }

  return StackFrame;
});

var _$errorStackParser_17 = {};
(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (typeof define === 'function' && define.amd) {
    define('error-stack-parser', ['stackframe'], factory);
  } else if (typeof _$errorStackParser_17 === 'object') {
    _$errorStackParser_17 = factory(_$stackframe_20);
  } else {
    root.ErrorStackParser = factory(root.StackFrame);
  }
})(this, function ErrorStackParser(StackFrame) {
  'use strict';

  var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
  var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
  var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
  return {
    /**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
    parse: function ErrorStackParser$$parse(error) {
      if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
        return this.parseOpera(error);
      } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
        return this.parseV8OrIE(error);
      } else if (error.stack) {
        return this.parseFFOrSafari(error);
      } else {
        throw new Error('Cannot parse given Error object');
      }
    },
    // Separate line and column numbers from a string of the form: (URI:Line:Column)
    extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
      // Fail-fast but return locations like "(native)"
      if (urlLike.indexOf(':') === -1) {
        return [urlLike];
      }

      var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
      var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
      return [parts[1], parts[2] || undefined, parts[3] || undefined];
    },
    parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !!line.match(CHROME_IE_STACK_REGEXP);
      }, this);
      return filtered.map(function (line) {
        if (line.indexOf('(eval ') > -1) {
          // Throw away eval information until we implement stacktrace.js/stackframe#8
          line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
        }

        var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
        var locationParts = this.extractLocation(tokens.pop());
        var functionName = tokens.join(' ') || undefined;
        var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
        return new StackFrame({
          functionName: functionName,
          fileName: fileName,
          lineNumber: locationParts[1],
          columnNumber: locationParts[2],
          source: line
        });
      }, this);
    },
    parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !line.match(SAFARI_NATIVE_CODE_REGEXP);
      }, this);
      return filtered.map(function (line) {
        // Throw away eval information until we implement stacktrace.js/stackframe#8
        if (line.indexOf(' > eval') > -1) {
          line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
        }

        if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
          // Safari eval frames only have function names and nothing else
          return new StackFrame({
            functionName: line
          });
        } else {
          var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
          var matches = line.match(functionNameRegex);
          var functionName = matches && matches[1] ? matches[1] : undefined;
          var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
          return new StackFrame({
            functionName: functionName,
            fileName: locationParts[0],
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }
      }, this);
    },
    parseOpera: function ErrorStackParser$$parseOpera(e) {
      if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
        return this.parseOpera9(e);
      } else if (!e.stack) {
        return this.parseOpera10(e);
      } else {
        return this.parseOpera11(e);
      }
    },
    parseOpera9: function ErrorStackParser$$parseOpera9(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
      var lines = e.message.split('\n');
      var result = [];

      for (var i = 2, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame({
            fileName: match[2],
            lineNumber: match[1],
            source: lines[i]
          }));
        }
      }

      return result;
    },
    parseOpera10: function ErrorStackParser$$parseOpera10(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
      var lines = e.stacktrace.split('\n');
      var result = [];

      for (var i = 0, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame({
            functionName: match[3] || undefined,
            fileName: match[2],
            lineNumber: match[1],
            source: lines[i]
          }));
        }
      }

      return result;
    },
    // Opera 10.65+ Error.stack very similar to FF/Safari
    parseOpera11: function ErrorStackParser$$parseOpera11(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
      }, this);
      return filtered.map(function (line) {
        var tokens = line.split('@');
        var locationParts = this.extractLocation(tokens.pop());
        var functionCall = tokens.shift() || '';
        var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
        var argsRaw;

        if (functionCall.match(/\(([^\)]*)\)/)) {
          argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
        }

        var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
        return new StackFrame({
          functionName: functionName,
          args: args,
          fileName: locationParts[0],
          lineNumber: locationParts[1],
          columnNumber: locationParts[2],
          source: line
        });
      }, this);
    }
  };
});

var _$stackGenerator_19 = {};
(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (typeof define === 'function' && define.amd) {
    define('stack-generator', ['stackframe'], factory);
  } else if (typeof _$stackGenerator_19 === 'object') {
    _$stackGenerator_19 = factory(_$stackframe_20);
  } else {
    root.StackGenerator = factory(root.StackFrame);
  }
})(this, function (StackFrame) {
  return {
    backtrace: function StackGenerator$$backtrace(opts) {
      var stack = [];
      var maxStackSize = 10;

      if (typeof opts === 'object' && typeof opts.maxStackSize === 'number') {
        maxStackSize = opts.maxStackSize;
      }

      var curr = arguments.callee;

      while (curr && stack.length < maxStackSize && curr['arguments']) {
        // Allow V8 optimizations
        var args = new Array(curr['arguments'].length);

        for (var i = 0; i < args.length; ++i) {
          args[i] = curr['arguments'][i];
        }

        if (/function(?:\s+([\w$]+))+\s*\(/.test(curr.toString())) {
          stack.push(new StackFrame({
            functionName: RegExp.$1 || undefined,
            args: args
          }));
        } else {
          stack.push(new StackFrame({
            args: args
          }));
        }

        try {
          curr = curr.caller;
        } catch (e) {
          break;
        }
      }

      return stack;
    }
  };
});

function ___extends_21() { ___extends_21 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_21.apply(this, arguments); }

/* removed: var _$errorStackParser_17 = require('error-stack-parser'); */;

/* removed: var _$stackGenerator_19 = require('stack-generator'); */;

/* removed: var _$hasStack_8 = require('./lib/has-stack'); */;

var __reduce_21 = _$esUtils_7.reduce,
    __filter_21 = _$esUtils_7.filter;

var BugsnagReport =
/*#__PURE__*/
function () {
  function BugsnagReport(errorClass, errorMessage, stacktrace, handledState) {
    if (stacktrace === void 0) {
      stacktrace = [];
    }

    if (handledState === void 0) {
      handledState = defaultHandledState();
    }

    // duck-typing ftw >_<
    this.__isBugsnagReport = true;
    this._ignored = false; // private (un)handled state

    this._handledState = handledState; // setable props

    this.app = undefined;
    this.apiKey = undefined;
    this.breadcrumbs = [];
    this.context = undefined;
    this.device = undefined;
    this.errorClass = stringOrFallback(errorClass, '[no error class]');
    this.errorMessage = stringOrFallback(errorMessage, '[no error message]');
    this.groupingHash = undefined;
    this.metaData = {};
    this.request = undefined;
    this.severity = this._handledState.severity;
    this.stacktrace = __reduce_21(stacktrace, function (accum, frame) {
      var f = formatStackframe(frame); // don't include a stackframe if none of its properties are defined

      try {
        if (JSON.stringify(f) === '{}') return accum;
        return accum.concat(f);
      } catch (e) {
        return accum;
      }
    }, []);
    this.user = undefined;
    this.session = undefined;
  }

  var _proto = BugsnagReport.prototype;

  _proto.ignore = function ignore() {
    this._ignored = true;
  };

  _proto.isIgnored = function isIgnored() {
    return this._ignored;
  };

  _proto.updateMetaData = function updateMetaData(section) {
    var _updates;

    if (!section) return this;
    var updates; // updateMetaData("section", null) -> removes section

    if ((arguments.length <= 1 ? undefined : arguments[1]) === null) return this.removeMetaData(section); // updateMetaData("section", "property", null) -> removes property from section

    if ((arguments.length <= 2 ? undefined : arguments[2]) === null) return this.removeMetaData(section, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]); // normalise the two supported input types into object form

    if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'object') updates = arguments.length <= 1 ? undefined : arguments[1];
    if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'string') updates = (_updates = {}, _updates[arguments.length <= 1 ? undefined : arguments[1]] = arguments.length <= 2 ? undefined : arguments[2], _updates); // exit if we don't have an updates object at this point

    if (!updates) return this; // ensure a section with this name exists

    if (!this.metaData[section]) this.metaData[section] = {}; // merge the updates with the existing section

    this.metaData[section] = ___extends_21({}, this.metaData[section], updates);
    return this;
  };

  _proto.removeMetaData = function removeMetaData(section, property) {
    if (typeof section !== 'string') return this; // remove an entire section

    if (!property) {
      delete this.metaData[section];
      return this;
    } // remove a single property from a section


    if (this.metaData[section]) {
      delete this.metaData[section][property];
      return this;
    }

    return this;
  };

  _proto.toJSON = function toJSON() {
    return {
      payloadVersion: '4',
      exceptions: [{
        errorClass: this.errorClass,
        message: this.errorMessage,
        stacktrace: this.stacktrace,
        type: "yes" ? 'browserjs' : undefined
      }],
      severity: this.severity,
      unhandled: this._handledState.unhandled,
      severityReason: this._handledState.severityReason,
      app: this.app,
      device: this.device,
      breadcrumbs: this.breadcrumbs,
      context: this.context,
      user: this.user,
      metaData: this.metaData,
      groupingHash: this.groupingHash,
      request: this.request,
      session: this.session
    };
  };

  return BugsnagReport;
}(); // takes a stacktrace.js style stackframe (https://github.com/stacktracejs/stackframe)
// and returns a Bugsnag compatible stackframe (https://docs.bugsnag.com/api/error-reporting/#json-payload)


var formatStackframe = function (frame) {
  var f = {
    file: frame.fileName,
    method: normaliseFunctionName(frame.functionName),
    lineNumber: frame.lineNumber,
    columnNumber: frame.columnNumber,
    code: undefined,
    inProject: undefined // Some instances result in no file:
    // - calling notify() from chrome's terminal results in no file/method.
    // - non-error exception thrown from global code in FF
    // This adds one.

  };

  if (f.lineNumber > -1 && !f.file && !f.method) {
    f.file = 'global code';
  }

  return f;
};

var normaliseFunctionName = function (name) {
  return /^global code$/i.test(name) ? 'global code' : name;
};

var defaultHandledState = function () {
  return {
    unhandled: false,
    severity: 'warning',
    severityReason: {
      type: 'handledException'
    }
  };
};

var stringOrFallback = function (str, fallback) {
  return typeof str === 'string' && str ? str : fallback;
}; // Helpers


BugsnagReport.getStacktrace = function (error, errorFramesToSkip, generatedFramesToSkip) {
  if (errorFramesToSkip === void 0) {
    errorFramesToSkip = 0;
  }

  if (generatedFramesToSkip === void 0) {
    generatedFramesToSkip = 0;
  }

  if (_$hasStack_8(error)) return _$errorStackParser_17.parse(error).slice(errorFramesToSkip); // error wasn't provided or didn't have a stacktrace so try to walk the callstack

  return __filter_21(_$stackGenerator_19.backtrace(), function (frame) {
    return (frame.functionName || '').indexOf('StackGenerator$$') === -1;
  }).slice(1 + generatedFramesToSkip);
};

BugsnagReport.ensureReport = function (reportOrError, errorFramesToSkip, generatedFramesToSkip) {
  if (errorFramesToSkip === void 0) {
    errorFramesToSkip = 0;
  }

  if (generatedFramesToSkip === void 0) {
    generatedFramesToSkip = 0;
  }

  // notify() can be called with a Report object. In this case no action is required
  if (reportOrError.__isBugsnagReport) return reportOrError;

  try {
    var stacktrace = BugsnagReport.getStacktrace(reportOrError, errorFramesToSkip, 1 + generatedFramesToSkip);
    return new BugsnagReport(reportOrError.name, reportOrError.message, stacktrace);
  } catch (e) {
    return new BugsnagReport(reportOrError.name, reportOrError.message, []);
  }
};

var _$BugsnagReport_21 = BugsnagReport;

var _$pad_15 = function pad(num, size) {
  var s = '000000000' + num;
  return s.substr(s.length - size);
};

/* removed: var _$pad_15 = require('./pad.js'); */;

var env = typeof window === 'object' ? window : self;
var globalCount = 0;

for (var prop in env) {
  if (Object.hasOwnProperty.call(env, prop)) globalCount++;
}

var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
var clientId = _$pad_15((mimeTypesLength + navigator.userAgent.length).toString(36) + globalCount.toString(36), 4);

var _$fingerprint_14 = function fingerprint() {
  return clientId;
};

/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */
/* removed: var _$fingerprint_14 = require('./lib/fingerprint.js'); */;

/* removed: var _$pad_15 = require('./lib/pad.js'); */;

var c = 0,
    blockSize = 4,
    base = 36,
    discreteValues = Math.pow(base, blockSize);

function randomBlock() {
  return _$pad_15((Math.random() * discreteValues << 0).toString(base), blockSize);
}

function safeCounter() {
  c = c < discreteValues ? c : 0;
  c++; // this is not subliminal

  return c - 1;
}

function cuid() {
  // Starting with a lowercase letter makes
  // it HTML element ID friendly.
  var letter = 'c',
      // hard-coded allows for sequential access
  // timestamp
  // warning: this exposes the exact date and time
  // that the uid was created.
  timestamp = new Date().getTime().toString(base),
      // Prevent same-machine collisions.
  counter = _$pad_15(safeCounter().toString(base), blockSize),
      // A few chars to generate distinct ids for different
  // clients (so different computers are far less
  // likely to generate the same id)
  print = _$fingerprint_14(),
      // Grab some more chars from Math.random()
  random = randomBlock() + randomBlock();
  return letter + timestamp + counter + print + random;
}

cuid.fingerprint = _$fingerprint_14;
var _$cuid_13 = cuid;

var __isoDate_22 = _$esUtils_7.isoDate;

/* removed: var _$cuid_13 = require('@bugsnag/cuid'); */;

var Session =
/*#__PURE__*/
function () {
  function Session() {
    this.id = _$cuid_13();
    this.startedAt = __isoDate_22();
    this._handled = 0;
    this._unhandled = 0;
  }

  var _proto = Session.prototype;

  _proto.toJSON = function toJSON() {
    return {
      id: this.id,
      startedAt: this.startedAt,
      events: {
        handled: this._handled,
        unhandled: this._unhandled
      }
    };
  };

  _proto.trackError = function trackError(report) {
    this[report._handledState.unhandled ? '_unhandled' : '_handled'] += 1;
  };

  return Session;
}();

var _$Session_22 = Session;

function ___extends_4() { ___extends_4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_4.apply(this, arguments); }

/* removed: var _$config_5 = require('./config'); */;

/* removed: var _$BugsnagReport_21 = require('./report'); */;

/* removed: var _$BugsnagBreadcrumb_3 = require('./breadcrumb'); */;

/* removed: var _$Session_22 = require('./session'); */;

var __map_4 = _$esUtils_7.map,
    __includes_4 = _$esUtils_7.includes,
    __isArray_4 = _$esUtils_7.isArray;

/* removed: var _$inferReleaseStage_9 = require('./lib/infer-release-stage'); */;

/* removed: var _$isError_18 = require('iserror'); */;

/* removed: var _$asyncSome_6 = require('./lib/async-some'); */;

/* removed: var _$runBeforeSend_11 = require('./lib/run-before-send'); */;

var LOG_USAGE_ERR_PREFIX = "Usage error.";
var REPORT_USAGE_ERR_PREFIX = "Bugsnag usage error.";

var BugsnagClient =
/*#__PURE__*/
function () {
  function BugsnagClient(notifier) {
    if (!notifier || !notifier.name || !notifier.version || !notifier.url) {
      throw new Error('`notifier` argument is required');
    } // notifier id


    this.notifier = notifier; // configure() should be called before notify()

    this._configured = false; // intialise opts and config

    this._opts = {};
    this.config = {}; // // i/o

    this._delivery = {
      sendSession: function () {},
      sendReport: function () {}
    };
    this._logger = {
      debug: function () {},
      info: function () {},
      warn: function () {},
      error: function () {} // plugins

    };
    this._plugins = {};
    this._session = null;
    this.breadcrumbs = []; // setable props

    this.app = {};
    this.context = undefined;
    this.device = undefined;
    this.metaData = undefined;
    this.request = undefined;
    this.user = {}; // expose internal constructors

    this.BugsnagClient = BugsnagClient;
    this.BugsnagReport = _$BugsnagReport_21;
    this.BugsnagBreadcrumb = _$BugsnagBreadcrumb_3;
    this.BugsnagSession = _$Session_22;
    var self = this;
    var notify = this.notify;

    this.notify = function () {
      return notify.apply(self, arguments);
    };
  }

  var _proto = BugsnagClient.prototype;

  _proto.setOptions = function setOptions(opts) {
    this._opts = ___extends_4({}, this._opts, opts);
  };

  _proto.configure = function configure(partialSchema) {
    if (partialSchema === void 0) {
      partialSchema = _$config_5.schema;
    }

    var conf = _$config_5.mergeDefaults(this._opts, partialSchema);
    var validity = _$config_5.validate(conf, partialSchema);
    if (!validity.valid === true) throw new Error(generateConfigErrorMessage(validity.errors)); // update and elevate some special options if they were passed in at this point

    if (typeof conf.beforeSend === 'function') conf.beforeSend = [conf.beforeSend];
    if (conf.appVersion) this.app.version = conf.appVersion;
    if (conf.appType) this.app.type = conf.appType;
    if (conf.metaData) this.metaData = conf.metaData;
    if (conf.user) this.user = conf.user;
    if (conf.logger) this.logger(conf.logger); // merge with existing config

    this.config = ___extends_4({}, this.config, conf);
    this._configured = true;
    return this;
  };

  _proto.use = function use(plugin) {
    if (!this._configured) throw new Error('client not configured');
    if (plugin.configSchema) this.configure(plugin.configSchema);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var result = plugin.init.apply(plugin, [this].concat(args)); // JS objects are not the safest way to store arbitrarily keyed values,
    // so bookend the key with some characters that prevent tampering with
    // stuff like __proto__ etc. (only store the result if the plugin had a
    // name)

    if (plugin.name) this._plugins["~" + plugin.name + "~"] = result;
    return this;
  };

  _proto.getPlugin = function getPlugin(name) {
    return this._plugins["~" + name + "~"];
  };

  _proto.delivery = function delivery(d) {
    this._delivery = d;
    return this;
  };

  _proto.logger = function logger(l, sid) {
    this._logger = l;
    return this;
  };

  _proto.sessionDelegate = function sessionDelegate(s) {
    this._sessionDelegate = s;
    return this;
  };

  _proto.startSession = function startSession() {
    if (!this._sessionDelegate) {
      this._logger.warn('No session implementation is installed');

      return this;
    }

    return this._sessionDelegate.startSession(this);
  };

  _proto.leaveBreadcrumb = function leaveBreadcrumb(name, metaData, type, timestamp) {
    if (!this._configured) throw new Error('client not configured'); // coerce bad values so that the defaults get set

    name = name || undefined;
    type = typeof type === 'string' ? type : undefined;
    timestamp = typeof timestamp === 'string' ? timestamp : undefined;
    metaData = typeof metaData === 'object' && metaData !== null ? metaData : undefined; // if no name and no metaData, usefulness of this crumb is questionable at best so discard

    if (typeof name !== 'string' && !metaData) return;
    var crumb = new _$BugsnagBreadcrumb_3(name, metaData, type, timestamp); // push the valid crumb onto the queue and maintain the length

    this.breadcrumbs.push(crumb);

    if (this.breadcrumbs.length > this.config.maxBreadcrumbs) {
      this.breadcrumbs = this.breadcrumbs.slice(this.breadcrumbs.length - this.config.maxBreadcrumbs);
    }

    return this;
  };

  _proto.notify = function notify(error, opts, cb) {
    var _this = this;

    if (opts === void 0) {
      opts = {};
    }

    if (cb === void 0) {
      cb = function () {};
    }

    if (!this._configured) throw new Error('client not configured'); // releaseStage can be set via config.releaseStage or client.app.releaseStage

    var releaseStage = _$inferReleaseStage_9(this); // ensure we have an error (or a reasonable object representation of an error)

    var _normaliseError = normaliseError(error, opts, this._logger),
        err = _normaliseError.err,
        errorFramesToSkip = _normaliseError.errorFramesToSkip,
        _opts = _normaliseError._opts;

    if (_opts) opts = _opts; // if we have something falsey at this point, report usage error

    if (!err) {
      var msg = generateNotifyUsageMessage('nothing');

      this._logger.warn(LOG_USAGE_ERR_PREFIX + " " + msg);

      err = new Error(REPORT_USAGE_ERR_PREFIX + " " + msg);
    } // ensure opts is an object


    if (typeof opts !== 'object' || opts === null) opts = {}; // create a report from the error, if it isn't one already

    var report = _$BugsnagReport_21.ensureReport(err, errorFramesToSkip, 1);
    report.app = ___extends_4({}, {
      releaseStage: releaseStage
    }, report.app, this.app);
    report.context = report.context || opts.context || this.context || undefined;
    report.device = ___extends_4({}, report.device, this.device, opts.device);
    report.request = ___extends_4({}, report.request, this.request, opts.request);
    report.user = ___extends_4({}, report.user, this.user, opts.user);
    report.metaData = ___extends_4({}, report.metaData, this.metaData, opts.metaData);
    report.breadcrumbs = this.breadcrumbs.slice(0);

    if (this._session) {
      this._session.trackError(report);

      report.session = this._session;
    } // set severity if supplied


    if (opts.severity !== undefined) {
      report.severity = opts.severity;
      report._handledState.severityReason = {
        type: 'userSpecifiedSeverity'
      };
    } // exit early if the reports should not be sent on the current releaseStage


    if (__isArray_4(this.config.notifyReleaseStages) && !__includes_4(this.config.notifyReleaseStages, releaseStage)) {
      this._logger.warn("Report not sent due to releaseStage/notifyReleaseStages configuration");

      return false;
    }

    var originalSeverity = report.severity;
    var beforeSend = [].concat(opts.beforeSend).concat(this.config.beforeSend);

    var onBeforeSendErr = function (err) {
      _this._logger.error("Error occurred in beforeSend callback, continuing anyway\u2026");

      _this._logger.error(err);
    };

    _$asyncSome_6(beforeSend, _$runBeforeSend_11(report, onBeforeSendErr), function (err, preventSend) {
      if (err) onBeforeSendErr(err);

      if (preventSend) {
        _this._logger.debug("Report not sent due to beforeSend callback");

        return false;
      } // only leave a crumb for the error if actually got sent


      if (_this.config.autoBreadcrumbs) {
        _this.leaveBreadcrumb(report.errorClass, {
          errorClass: report.errorClass,
          errorMessage: report.errorMessage,
          severity: report.severity,
          stacktrace: report.stacktrace
        }, 'error');
      }

      if (originalSeverity !== report.severity) {
        report._handledState.severityReason = {
          type: 'userCallbackSetSeverity'
        };
      }

      _this._delivery.sendReport(_this._logger, _this.config, {
        apiKey: report.apiKey || _this.config.apiKey,
        notifier: _this.notifier,
        events: [report]
      }, function (err) {
        return cb(err, report);
      });
    });
  };

  return BugsnagClient;
}();

var normaliseError = function (error, opts, logger) {
  var err;
  var errorFramesToSkip = 0;

  var _opts;

  switch (typeof error) {
    case 'string':
      if (typeof opts === 'string') {
        // ≤v3 used to have a notify('ErrorName', 'Error message') interface
        // report usage/deprecation errors if this function is called like that
        var _msg = generateNotifyUsageMessage('string/string');

        logger.warn(LOG_USAGE_ERR_PREFIX + " " + _msg);
        err = new Error(REPORT_USAGE_ERR_PREFIX + " " + _msg);
        _opts = {
          metaData: {
            notifier: {
              notifyArgs: [error, opts]
            }
          }
        };
      } else {
        err = new Error(String(error));
        errorFramesToSkip += 2;
      }

      break;

    case 'number':
    case 'boolean':
      err = new Error(String(error));
      break;

    case 'function':
      var msg = generateNotifyUsageMessage('function');
      logger.warn(LOG_USAGE_ERR_PREFIX + " " + msg);
      err = new Error(REPORT_USAGE_ERR_PREFIX + " " + msg);
      break;

    case 'object':
      if (error !== null && (_$isError_18(error) || error.__isBugsnagReport)) {
        err = error;
      } else if (error !== null && hasNecessaryFields(error)) {
        err = new Error(error.message || error.errorMessage);
        err.name = error.name || error.errorClass;
        errorFramesToSkip += 2;
      } else {
        var _msg2 = generateNotifyUsageMessage('unsupported object');

        logger.warn(LOG_USAGE_ERR_PREFIX + " " + _msg2);
        err = new Error(REPORT_USAGE_ERR_PREFIX + " " + _msg2);
      }

      break;
  }

  return {
    err: err,
    errorFramesToSkip: errorFramesToSkip,
    _opts: _opts
  };
};

var hasNecessaryFields = function (error) {
  return (typeof error.name === 'string' || typeof error.errorClass === 'string') && (typeof error.message === 'string' || typeof error.errorMessage === 'string');
};

var generateConfigErrorMessage = function (errors) {
  return "Bugsnag configuration error\n" + __map_4(errors, function (err) {
    return "\"" + err.key + "\" " + err.message + " \n    got " + stringify(err.value);
  }).join('\n\n');
};

var generateNotifyUsageMessage = function (actual) {
  return "notify() expected error/opts parameters, got " + actual;
};

var stringify = function (val) {
  return typeof val === 'object' ? JSON.stringify(val) : String(val);
};

var _$BugsnagClient_4 = BugsnagClient;

var _$safeJsonStringify_16 = function (data, replacer, space, opts) {
  var filterKeys = opts && opts.filterKeys ? opts.filterKeys : [];
  var filterPaths = opts && opts.filterPaths ? opts.filterPaths : [];
  return JSON.stringify(prepareObjForSerialization(data, filterKeys, filterPaths), replacer, space);
};

var MAX_DEPTH = 20;
var MAX_EDGES = 25000;
var MIN_PRESERVED_DEPTH = 8;
var REPLACEMENT_NODE = '...';

function __isError_16(o) {
  return o instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(o));
}

function throwsMessage(err) {
  return '[Throws: ' + (err ? err.message : '?') + ']';
}

function find(haystack, needle) {
  for (var i = 0, len = haystack.length; i < len; i++) {
    if (haystack[i] === needle) return true;
  }

  return false;
} // returns true if the string `path` starts with any of the provided `paths`


function isDescendent(paths, path) {
  for (var i = 0, len = paths.length; i < len; i++) {
    if (path.indexOf(paths[i]) === 0) return true;
  }

  return false;
}

function shouldFilter(patterns, key) {
  for (var i = 0, len = patterns.length; i < len; i++) {
    if (typeof patterns[i] === 'string' && patterns[i] === key) return true;
    if (patterns[i] && typeof patterns[i].test === 'function' && patterns[i].test(key)) return true;
  }

  return false;
}

function __isArray_16(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function safelyGetProp(obj, prop) {
  try {
    return obj[prop];
  } catch (err) {
    return throwsMessage(err);
  }
}

function prepareObjForSerialization(obj, filterKeys, filterPaths) {
  var seen = []; // store references to objects we have seen before

  var edges = 0;

  function visit(obj, path) {
    function edgesExceeded() {
      return path.length > MIN_PRESERVED_DEPTH && edges > MAX_EDGES;
    }

    edges++;
    if (path.length > MAX_DEPTH) return REPLACEMENT_NODE;
    if (edgesExceeded()) return REPLACEMENT_NODE;
    if (obj === null || typeof obj !== 'object') return obj;
    if (find(seen, obj)) return '[Circular]';
    seen.push(obj);

    if (typeof obj.toJSON === 'function') {
      try {
        // we're not going to count this as an edge because it
        // replaces the value of the currently visited object
        edges--;
        var fResult = visit(obj.toJSON(), path);
        seen.pop();
        return fResult;
      } catch (err) {
        return throwsMessage(err);
      }
    }

    var er = __isError_16(obj);

    if (er) {
      edges--;
      var eResult = visit({
        name: obj.name,
        message: obj.message
      }, path);
      seen.pop();
      return eResult;
    }

    if (__isArray_16(obj)) {
      var aResult = [];

      for (var i = 0, len = obj.length; i < len; i++) {
        if (edgesExceeded()) {
          aResult.push(REPLACEMENT_NODE);
          break;
        }

        aResult.push(visit(obj[i], path.concat('[]')));
      }

      seen.pop();
      return aResult;
    }

    var result = {};

    try {
      for (var prop in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) continue;

        if (isDescendent(filterPaths, path.join('.')) && shouldFilter(filterKeys, prop)) {
          result[prop] = '[Filtered]';
          continue;
        }

        if (edgesExceeded()) {
          result[prop] = REPLACEMENT_NODE;
          break;
        }

        result[prop] = visit(safelyGetProp(obj, prop), path.concat(prop));
      }
    } catch (e) {}

    seen.pop();
    return result;
  }

  return visit(obj, []);
}

var _$jsonPayload_10 = {};
/* removed: var _$safeJsonStringify_16 = require('@bugsnag/safe-json-stringify'); */;

var REPORT_FILTER_PATHS = ['events.[].app', 'events.[].metaData', 'events.[].user', 'events.[].breadcrumbs', 'events.[].request', 'events.[].device'];
var SESSION_FILTER_PATHS = ['device', 'app', 'user'];

_$jsonPayload_10.report = function (report, filterKeys) {
  var payload = _$safeJsonStringify_16(report, null, null, {
    filterPaths: REPORT_FILTER_PATHS,
    filterKeys: filterKeys
  });

  if (payload.length > 10e5) {
    delete report.events[0].metaData;
    report.events[0].metaData = {
      notifier: "WARNING!\nSerialized payload was " + payload.length / 10e5 + "MB (limit = 1MB)\nmetaData was removed"
    };
    payload = _$safeJsonStringify_16(report, null, null, {
      filterPaths: REPORT_FILTER_PATHS,
      filterKeys: filterKeys
    });
    if (payload.length > 10e5) throw new Error('payload exceeded 1MB limit');
  }

  return payload;
};

_$jsonPayload_10.session = function (report, filterKeys) {
  var payload = _$safeJsonStringify_16(report, null, null, {
    filterPaths: SESSION_FILTER_PATHS,
    filterKeys: filterKeys
  });
  if (payload.length > 10e5) throw new Error('payload exceeded 1MB limit');
  return payload;
};

var _$delivery_23 = {};
/* removed: var _$jsonPayload_10 = require('@bugsnag/core/lib/json-payload'); */;

var __isoDate_23 = _$esUtils_7.isoDate;

_$delivery_23 = function (win) {
  if (win === void 0) {
    win = window;
  }

  return {
    sendReport: function (logger, config, report, cb) {
      if (cb === void 0) {
        cb = function () {};
      }

      var url = getApiUrl(config, 'notify', '4.0', win);
      var req = new win.XDomainRequest();

      req.onload = function () {
        cb(null);
      };

      req.open('POST', url);
      setTimeout(function () {
        try {
          req.send(_$jsonPayload_10.report(report, config.filters));
        } catch (e) {
          logger.error(e);
          cb(e);
        }
      }, 0);
    },
    sendSession: function (logger, config, session, cb) {
      if (cb === void 0) {
        cb = function () {};
      }

      var url = getApiUrl(config, 'sessions', '1.0', win);
      var req = new win.XDomainRequest();

      req.onload = function () {
        cb(null);
      };

      req.open('POST', url);
      setTimeout(function () {
        try {
          req.send(_$jsonPayload_10.session(session, config.filters));
        } catch (e) {
          logger.error(e);
          cb(e);
        }
      }, 0);
    }
  };
};

var getApiUrl = function (config, endpoint, version, win) {
  return matchPageProtocol(config.endpoints[endpoint], win.location.protocol) + "?apiKey=" + encodeURIComponent(config.apiKey) + "&payloadVersion=" + version + "&sentAt=" + encodeURIComponent(__isoDate_23());
};

var matchPageProtocol = _$delivery_23._matchPageProtocol = function (endpoint, pageProtocol) {
  return pageProtocol === 'http:' ? endpoint.replace(/^https:/, 'http:') : endpoint;
};

/* removed: var _$jsonPayload_10 = require('@bugsnag/core/lib/json-payload'); */;

var __isoDate_24 = _$esUtils_7.isoDate;

var _$delivery_24 = function (win) {
  if (win === void 0) {
    win = window;
  }

  return {
    sendReport: function (logger, config, report, cb) {
      if (cb === void 0) {
        cb = function () {};
      }

      try {
        var url = config.endpoints.notify;
        var req = new win.XMLHttpRequest();

        req.onreadystatechange = function () {
          if (req.readyState === win.XMLHttpRequest.DONE) cb(null);
        };

        req.open('POST', url);
        req.setRequestHeader('Content-Type', 'application/json');
        req.setRequestHeader('Bugsnag-Api-Key', report.apiKey || config.apiKey);
        req.setRequestHeader('Bugsnag-Payload-Version', '4.0');
        req.setRequestHeader('Bugsnag-Sent-At', __isoDate_24());
        req.send(_$jsonPayload_10.report(report, config.filters));
      } catch (e) {
        logger.error(e);
      }
    },
    sendSession: function (logger, config, session, cb) {
      if (cb === void 0) {
        cb = function () {};
      }

      try {
        var url = config.endpoints.sessions;
        var req = new win.XMLHttpRequest();

        req.onreadystatechange = function () {
          if (req.readyState === win.XMLHttpRequest.DONE) cb(null);
        };

        req.open('POST', url);
        req.setRequestHeader('Content-Type', 'application/json');
        req.setRequestHeader('Bugsnag-Api-Key', config.apiKey);
        req.setRequestHeader('Bugsnag-Payload-Version', '1.0');
        req.setRequestHeader('Bugsnag-Sent-At', __isoDate_24());
        req.send(_$jsonPayload_10.session(session, config.filters));
      } catch (e) {
        logger.error(e);
      }
    }
  };
};

/*
 * Sets the default context to be the current URL
 */
var _$context_25 = {
  init: function (client, win) {
    if (win === void 0) {
      win = window;
    }

    client.config.beforeSend.unshift(function (report) {
      if (report.context) return;
      report.context = win.location.pathname;
    });
  }
};

function ___extends_26() { ___extends_26 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_26.apply(this, arguments); }

var __isoDate_26 = _$esUtils_7.isoDate;
/*
 * Automatically detects browser device details
 */


var _$device_26 = {
  init: function (client, nav) {
    if (nav === void 0) {
      nav = navigator;
    }

    var device = {
      locale: nav.browserLanguage || nav.systemLanguage || nav.userLanguage || nav.language,
      userAgent: nav.userAgent // merge with anything already set on the client

    };
    client.device = ___extends_26({}, device, client.device); // add time just as the report is sent

    client.config.beforeSend.unshift(function (report) {
      report.device = ___extends_26({}, report.device, {
        time: __isoDate_26()
      });
    });
  }
};

function ___extends_27() { ___extends_27 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_27.apply(this, arguments); }

/*
 * Sets the report request: { url } to be the current href
 */
var _$request_27 = {
  init: function (client, win) {
    if (win === void 0) {
      win = window;
    }

    client.config.beforeSend.unshift(function (report) {
      if (report.request && report.request.url) return;
      report.request = ___extends_27({}, report.request, {
        url: win.location.href
      });
    });
  }
};

function ___extends_28() { ___extends_28 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_28.apply(this, arguments); }

var __isArray_28 = _$esUtils_7.isArray,
    __includes_28 = _$esUtils_7.includes;

/* removed: var _$inferReleaseStage_9 = require('@bugsnag/core/lib/infer-release-stage'); */;

var _$session_28 = {
  init: function (client) {
    return client.sessionDelegate(sessionDelegate);
  }
};
var sessionDelegate = {
  startSession: function (client) {
    var sessionClient = client;
    sessionClient._session = new client.BugsnagSession();
    var releaseStage = _$inferReleaseStage_9(sessionClient); // exit early if the reports should not be sent on the current releaseStage

    if (__isArray_28(sessionClient.config.notifyReleaseStages) && !__includes_28(sessionClient.config.notifyReleaseStages, releaseStage)) {
      sessionClient._logger.warn("Session not sent due to releaseStage/notifyReleaseStages configuration");

      return sessionClient;
    }

    if (!sessionClient.config.endpoints.sessions) {
      sessionClient._logger.warn("Session not sent due to missing endpoints.sessions configuration");

      return sessionClient;
    }

    sessionClient._delivery.sendSession(sessionClient._logger, sessionClient.config, {
      notifier: sessionClient.notifier,
      device: sessionClient.device,
      app: ___extends_28({}, {
        releaseStage: releaseStage
      }, sessionClient.app),
      sessions: [{
        id: sessionClient._session.id,
        startedAt: sessionClient._session.startedAt,
        user: sessionClient.user
      }]
    });

    return sessionClient;
  }
};

function ___extends_29() { ___extends_29 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_29.apply(this, arguments); }

/*
 * Prevent collection of user IPs
 */
var _$clientIp_29 = {
  init: function (client) {
    if (client.config.collectUserIp) return;
    client.config.beforeSend.push(function (report) {
      // If user.id is explicitly undefined, it will be missing from the payload. It needs
      // removing so that the following line replaces it
      if (report.user && typeof report.user.id === 'undefined') delete report.user.id;
      report.user = ___extends_29({
        id: '[NOT COLLECTED]'
      }, report.user);
      report.request = ___extends_29({
        clientIp: '[NOT COLLECTED]'
      }, report.request);
    });
  },
  configSchema: {
    collectUserIp: {
      defaultValue: function () {
        return true;
      },
      message: 'should be true|false',
      validate: function (value) {
        return value === true || value === false;
      }
    }
  }
};

var _$consoleBreadcrumbs_30 = {};
var __map_30 = _$esUtils_7.map,
    __reduce_30 = _$esUtils_7.reduce,
    __filter_30 = _$esUtils_7.filter;
/*
 * Leaves breadcrumbs when console log methods are called
 */


_$consoleBreadcrumbs_30.init = function (client) {
  var isDev = /^dev(elopment)?$/.test(client.config.releaseStage);
  var explicitlyDisabled = client.config.consoleBreadcrumbsEnabled === false;
  var implicitlyDisabled = (client.config.autoBreadcrumbs === false || isDev) && client.config.consoleBreadcrumbsEnabled !== true;
  if (explicitlyDisabled || implicitlyDisabled) return;
  __map_30(CONSOLE_LOG_METHODS, function (method) {
    var original = console[method];

    console[method] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      client.leaveBreadcrumb('Console output', __reduce_30(args, function (accum, arg, i) {
        // do the best/simplest stringification of each argument
        var stringified = '[Unknown value]'; // this may fail if the input is:
        // - an object whose [[Prototype]] is null (no toString)
        // - an object with a broken toString or @@toPrimitive implementation

        try {
          stringified = String(arg);
        } catch (e) {} // if it stringifies to [object Object] attempt to JSON stringify


        if (stringified === '[object Object]') {
          // catch stringify errors and fallback to [object Object]
          try {
            stringified = JSON.stringify(arg);
          } catch (e) {}
        }

        accum["[" + i + "]"] = stringified;
        return accum;
      }, {
        severity: method.indexOf('group') === 0 ? 'log' : method
      }), 'log');
      original.apply(console, args);
    };

    console[method]._restore = function () {
      console[method] = original;
    };
  });
};

_$consoleBreadcrumbs_30.configSchema = {
  consoleBreadcrumbsEnabled: {
    defaultValue: function () {
      return undefined;
    },
    validate: function (value) {
      return value === true || value === false || value === undefined;
    },
    message: 'should be true|false'
  }
};

if (false) {}

var CONSOLE_LOG_METHODS = __filter_30(['log', 'debug', 'info', 'warn', 'error'], function (method) {
  return typeof console !== 'undefined' && typeof console[method] === 'function';
});

var _$inlineScriptContent_31 = {};
var __reduce_31 = _$esUtils_7.reduce;

_$inlineScriptContent_31 = {
  init: function (client, doc, win) {
    if (doc === void 0) {
      doc = document;
    }

    if (win === void 0) {
      win = window;
    }

    var html = '';
    var DOMContentLoaded = false;

    var getHtml = function () {
      return doc.documentElement.outerHTML;
    };

    var originalLocation = win.location.href;

    var addInlineContent = function (report) {
      var frame = report.stacktrace[0];
      if (!frame || !frame.file || !frame.lineNumber) return frame;
      if (frame.file.replace(/#.*$/, '') !== originalLocation.replace(/#.*$/, '')) return frame;
      if (!DOMContentLoaded || !html) html = getHtml();
      var htmlLines = ['<!-- DOC START -->'].concat(html.split('\n'));

      var _extractScriptContent = extractScriptContent(htmlLines, frame.lineNumber - 1),
          script = _extractScriptContent.script,
          start = _extractScriptContent.start;

      var code = __reduce_31(script, function (accum, line, i) {
        if (Math.abs(start + i + 1 - frame.lineNumber) > 10) return accum;
        accum["" + (start + i + 1)] = line;
        return accum;
      }, {});
      frame.code = code;
      report.updateMetaData('script', {
        content: script.join('\n')
      });
    }; // get whatever HTML exists at this point in time


    html = getHtml();
    var prev = doc.onreadystatechange; // then update it when the DOM content has loaded

    doc.onreadystatechange = function () {
      // IE8 compatible alternative to document#DOMContentLoaded
      if (doc.readyState === 'interactive') {
        html = getHtml();
        DOMContentLoaded = true;
      }

      if (typeof prev === 'function') prev.apply(this, arguments);
    };

    client.config.beforeSend.unshift(addInlineContent);
  }
};
var scriptStartRe = /^.*<script.*?>/;
var scriptEndRe = /<\/script>.*$/;

var extractScriptContent = _$inlineScriptContent_31.extractScriptContent = function (lines, startLine) {
  // search down for </script>
  var line = startLine;

  while (line < lines.length && !scriptEndRe.test(lines[line])) {
    line++;
  } // search up for <script>


  var end = line;

  while (line > 0 && !scriptStartRe.test(lines[line])) {
    line--;
  }

  var start = line; // strip <script> tags so that lines just contain js content

  var script = lines.slice(start, end + 1);
  script[0] = script[0].replace(scriptStartRe, '');
  script[script.length - 1] = script[script.length - 1].replace(scriptEndRe, ''); // return the array of lines, and the line number the script started at

  return {
    script: script,
    start: start
  };
};

/*
 * Leaves breadcrumbs when the user interacts with the DOM
 */
var _$interactionBreadcrumbs_32 = {
  init: function (client, win) {
    if (win === void 0) {
      win = window;
    }

    if (!('addEventListener' in win)) return;
    var explicitlyDisabled = client.config.interactionBreadcrumbsEnabled === false;
    var implicitlyDisabled = client.config.autoBreadcrumbs === false && client.config.interactionBreadcrumbsEnabled !== true;
    if (explicitlyDisabled || implicitlyDisabled) return;
    win.addEventListener('click', function (event) {
      var targetText, targetSelector;

      try {
        targetText = getNodeText(event.target);
        targetSelector = getNodeSelector(event.target, win);
      } catch (e) {
        targetText = '[hidden]';
        targetSelector = '[hidden]';

        client._logger.error('Cross domain error when tracking click event. See docs: https://tinyurl.com/y94fq5zm');
      }

      client.leaveBreadcrumb('UI click', {
        targetText: targetText,
        targetSelector: targetSelector
      }, 'user');
    }, true);
  },
  configSchema: {
    interactionBreadcrumbsEnabled: {
      defaultValue: function () {
        return undefined;
      },
      validate: function (value) {
        return value === true || value === false || value === undefined;
      },
      message: 'should be true|false'
    }
  } // extract text content from a element

};

var getNodeText = function (el) {
  var text = el.textContent || el.innerText || '';
  if (!text && (el.type === 'submit' || el.type === 'button')) text = el.value;
  text = text.replace(/^\s+|\s+$/g, ''); // trim whitespace

  return truncate(text, 140);
}; // Create a label from tagname, id and css class of the element


function getNodeSelector(el, win) {
  var parts = [el.tagName];
  if (el.id) parts.push('#' + el.id);
  if (el.className && el.className.length) parts.push("." + el.className.split(' ').join('.')); // Can't get much more advanced with the current browser

  if (!win.document.querySelectorAll || !Array.prototype.indexOf) return parts.join('');

  try {
    if (win.document.querySelectorAll(parts.join('')).length === 1) return parts.join('');
  } catch (e) {
    // Sometimes the query selector can be invalid just return it as-is
    return parts.join('');
  } // try to get a more specific selector if this one matches more than one element


  if (el.parentNode.childNodes.length > 1) {
    var index = Array.prototype.indexOf.call(el.parentNode.childNodes, el) + 1;
    parts.push(":nth-child(" + index + ")");
  }

  if (win.document.querySelectorAll(parts.join('')).length === 1) return parts.join(''); // try prepending the parent node selector

  if (el.parentNode) return getNodeSelector(el.parentNode, win) + " > " + parts.join('');
  return parts.join('');
}

function truncate(value, length) {
  var ommision = '(...)';
  if (value && value.length <= length) return value;
  return value.slice(0, length - ommision.length) + ommision;
}

var _$navigationBreadcrumbs_33 = {};
/*
 * Leaves breadcrumbs when navigation methods are called or events are emitted
 */
_$navigationBreadcrumbs_33.init = function (client, win) {
  if (win === void 0) {
    win = window;
  }

  if (!('addEventListener' in win)) return;
  var explicitlyDisabled = client.config.navigationBreadcrumbsEnabled === false;
  var implicitlyDisabled = client.config.autoBreadcrumbs === false && client.config.navigationBreadcrumbsEnabled !== true;
  if (explicitlyDisabled || implicitlyDisabled) return; // returns a function that will drop a breadcrumb with a given name

  var drop = function (name) {
    return function () {
      return client.leaveBreadcrumb(name, {}, 'navigation');
    };
  }; // simple drops – just names, no meta


  win.addEventListener('pagehide', drop('Page hidden'), true);
  win.addEventListener('pageshow', drop('Page shown'), true);
  win.addEventListener('load', drop('Page loaded'), true);
  win.document.addEventListener('DOMContentLoaded', drop('DOMContentLoaded'), true); // some browsers like to emit popstate when the page loads, so only add the popstate listener after that

  win.addEventListener('load', function () {
    return win.addEventListener('popstate', drop('Navigated back'), true);
  }); // hashchange has some metaData that we care about

  win.addEventListener('hashchange', function (event) {
    var metaData = event.oldURL ? {
      from: relativeLocation(event.oldURL, win),
      to: relativeLocation(event.newURL, win),
      state: getCurrentState(win)
    } : {
      to: relativeLocation(win.location.href, win)
    };
    client.leaveBreadcrumb('Hash changed', metaData, 'navigation');
  }, true); // the only way to know about replaceState/pushState is to wrap them… >_<

  if (win.history.replaceState) wrapHistoryFn(client, win.history, 'replaceState', win);
  if (win.history.pushState) wrapHistoryFn(client, win.history, 'pushState', win);
  client.leaveBreadcrumb('Bugsnag loaded', {}, 'navigation');
};

_$navigationBreadcrumbs_33.configSchema = {
  navigationBreadcrumbsEnabled: {
    defaultValue: function () {
      return undefined;
    },
    validate: function (value) {
      return value === true || value === false || value === undefined;
    },
    message: 'should be true|false'
  }
};

if (false) {} // takes a full url like http://foo.com:1234/pages/01.html?yes=no#section-2 and returns
// just the path and hash parts, e.g. /pages/01.html?yes=no#section-2


var relativeLocation = function (url, win) {
  var a = win.document.createElement('A');
  a.href = url;
  return "" + a.pathname + a.search + a.hash;
};

var stateChangeToMetaData = function (win, state, title, url) {
  var currentPath = relativeLocation(win.location.href, win);
  return {
    title: title,
    state: state,
    prevState: getCurrentState(win),
    to: url || currentPath,
    from: currentPath
  };
};

var wrapHistoryFn = function (client, target, fn, win) {
  var orig = target[fn];

  target[fn] = function (state, title, url) {
    client.leaveBreadcrumb("History " + fn, stateChangeToMetaData(win, state, title, url), 'navigation'); // if throttle plugin is in use, refresh the event sent count

    if (typeof client.refresh === 'function') client.refresh(); // if the client is operating in session-mode, a new route should trigger a new session

    if (client.session) client.startSession(); // Internet Explorer will convert `undefined` to a string when passed, causing an unintended redirect
    // to '/undefined'. therefore we only pass the url if it's not undefined.

    orig.apply(target, [state, title].concat(url !== undefined ? url : []));
  };

  target[fn]._restore = function () {
    target[fn] = orig;
  };
};

var getCurrentState = function (win) {
  try {
    return win.history.state;
  } catch (e) {}
};

var _$networkBreadcrumbs_34 = {};
var BREADCRUMB_TYPE = 'request'; // keys to safely store metadata on the request object

var REQUEST_SETUP_KEY = 'BS~~S';
var REQUEST_URL_KEY = 'BS~~U';
var REQUEST_METHOD_KEY = 'BS~~M';

var __includes_34 = _$esUtils_7.includes;

var restoreFunctions = [];
var client;
var win;

var getEndpoints = function () {
  return [client.config.endpoints.notify, client.config.endpoints.sessions];
};
/*
 * Leaves breadcrumbs when network requests occur
 */


_$networkBreadcrumbs_34.init = function (_client, _win) {
  if (_win === void 0) {
    _win = window;
  }

  var explicitlyDisabled = _client.config.networkBreadcrumbsEnabled === false;
  var implicitlyDisabled = _client.config.autoBreadcrumbs === false && _client.config.networkBreadcrumbsEnabled !== true;
  if (explicitlyDisabled || implicitlyDisabled) return;
  client = _client;
  win = _win;
  monkeyPatchXMLHttpRequest();
  monkeyPatchFetch();
};

_$networkBreadcrumbs_34.configSchema = {
  networkBreadcrumbsEnabled: {
    defaultValue: function () {
      return undefined;
    },
    validate: function (value) {
      return value === true || value === false || value === undefined;
    },
    message: 'should be true|false'
  }
};

if (false) {} // XMLHttpRequest monkey patch


var monkeyPatchXMLHttpRequest = function () {
  if (!('addEventListener' in win.XMLHttpRequest.prototype)) return;
  var nativeOpen = win.XMLHttpRequest.prototype.open; // override native open()

  win.XMLHttpRequest.prototype.open = function open(method, url) {
    // store url and HTTP method for later
    this[REQUEST_URL_KEY] = url;
    this[REQUEST_METHOD_KEY] = method; // if we have already setup listeners, it means open() was called twice, we need to remove
    // the listeners and recreate them

    if (this[REQUEST_SETUP_KEY]) {
      this.removeEventListener('load', handleXHRLoad);
      this.removeEventListener('error', handleXHRError);
    } // attach load event listener


    this.addEventListener('load', handleXHRLoad); // attach error event listener

    this.addEventListener('error', handleXHRError);
    this[REQUEST_SETUP_KEY] = true;
    nativeOpen.apply(this, arguments);
  };

  if (false) {}
};

function handleXHRLoad() {
  if (__includes_34(getEndpoints(), this[REQUEST_URL_KEY])) {
    // don't leave a network breadcrumb from bugsnag notify calls
    return;
  }

  var metaData = {
    status: this.status,
    request: this[REQUEST_METHOD_KEY] + " " + this[REQUEST_URL_KEY]
  };

  if (this.status >= 400) {
    // contacted server but got an error response
    client.leaveBreadcrumb('XMLHttpRequest failed', metaData, BREADCRUMB_TYPE);
  } else {
    client.leaveBreadcrumb('XMLHttpRequest succeeded', metaData, BREADCRUMB_TYPE);
  }
}

function handleXHRError() {
  if (__includes_34(getEndpoints(), this[REQUEST_URL_KEY])) {
    // don't leave a network breadcrumb from bugsnag notify calls
    return;
  } // failed to contact server


  client.leaveBreadcrumb('XMLHttpRequest error', {
    request: this[REQUEST_METHOD_KEY] + " " + this[REQUEST_URL_KEY]
  }, BREADCRUMB_TYPE);
} // window.fetch monkey patch


var monkeyPatchFetch = function () {
  if (!('fetch' in win)) return;
  var oldFetch = win.fetch;

  win.fetch = function fetch() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var url = args[0],
        options = args[1];
    var method = 'GET';

    if (options && options.method) {
      method = options.method;
    }

    return new Promise(function (resolve, reject) {
      // pass through to native fetch
      oldFetch.apply(void 0, args).then(function (response) {
        handleFetchSuccess(response, method, url);
        resolve(response);
      })["catch"](function (error) {
        handleFetchError(method, url);
        reject(error);
      });
    });
  };

  if (false) {}
};

var handleFetchSuccess = function (response, method, url) {
  var metaData = {
    status: response.status,
    request: method + " " + url
  };

  if (response.status >= 400) {
    // when the request comes back with a 4xx or 5xx status it does not reject the fetch promise,
    client.leaveBreadcrumb('fetch() failed', metaData, BREADCRUMB_TYPE);
  } else {
    client.leaveBreadcrumb('fetch() succeeded', metaData, BREADCRUMB_TYPE);
  }
};

var handleFetchError = function (method, url) {
  client.leaveBreadcrumb('fetch() error', {
    request: method + " " + url
  }, BREADCRUMB_TYPE);
};

var __intRange_35 = _$validators_12.intRange;
/*
 * Throttles and dedupes error reports
 */


var _$throttle_35 = {
  init: function (client) {
    // track sent events for each init of the plugin
    var n = 0; // add beforeSend hook

    client.config.beforeSend.push(function (report) {
      // have max events been sent already?
      if (n >= client.config.maxEvents) return report.ignore();
      n++;
    });

    client.refresh = function () {
      n = 0;
    };
  },
  configSchema: {
    maxEvents: {
      defaultValue: function () {
        return 10;
      },
      message: 'should be a positive integer ≤100',
      validate: function (val) {
        return __intRange_35(1, 100)(val);
      }
    }
  }
};

var _$stripQueryString_36 = {};
function ___extends_36() { ___extends_36 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_36.apply(this, arguments); }

/*
 * Remove query strings (and fragments) from stacktraces
 */
var __map_36 = _$esUtils_7.map;

_$stripQueryString_36 = {
  init: function (client) {
    client.config.beforeSend.push(function (report) {
      report.stacktrace = __map_36(report.stacktrace, function (frame) {
        return ___extends_36({}, frame, {
          file: strip(frame.file)
        });
      });
    });
  }
};

var strip = _$stripQueryString_36._strip = function (str) {
  return typeof str === 'string' ? str.replace(/\?.*$/, '').replace(/#.*$/, '') : str;
};

/*
 * Automatically notifies Bugsnag when window.onerror is called
 */
var _$onerror_37 = {
  init: function (client, win) {
    if (win === void 0) {
      win = window;
    }

    function onerror(messageOrEvent, url, lineNo, charNo, error) {
      // Ignore errors with no info due to CORS settings
      if (lineNo === 0 && /Script error\.?/.test(messageOrEvent)) {
        client._logger.warn('Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/y94fq5zm');
      } else {
        // any error sent to window.onerror is unhandled and has severity=error
        var handledState = {
          severity: 'error',
          unhandled: true,
          severityReason: {
            type: 'unhandledException'
          }
        };
        var report; // window.onerror can be called in a number of ways. This big if-else is how we
        // figure out which arguments were supplied, and what kind of values it received.

        if (error) {
          // if the last parameter (error) was supplied, this is a modern browser's
          // way of saying "this value was thrown and not caught"
          if (error.name && error.message) {
            // if it looks like an error, construct a report object using its stack
            report = new client.BugsnagReport(error.name, error.message, decorateStack(client.BugsnagReport.getStacktrace(error), url, lineNo, charNo), handledState);
          } else {
            // otherwise, for non error values that were thrown, stringify it for
            // use as the error message and get/generate a stacktrace
            report = new client.BugsnagReport('window.onerror', String(error), decorateStack(client.BugsnagReport.getStacktrace(error, 1), url, lineNo, charNo), handledState); // include the raw input as metadata

            report.updateMetaData('window onerror', {
              error: error
            });
          }
        } else if ( // This complex case detects "error" events that are typically synthesised
        // by jquery's trigger method (although can be created in other ways). In
        // order to detect this:
        // - the first argument (message) must exist and be an object (most likely it's a jQuery event)
        // - the second argument (url) must either not exist or be something other than a string (if it
        //    exists and is not a string, it'll be the extraParameters argument from jQuery's trigger()
        //    function)
        // - the third, fourth and fifth arguments must not exist (lineNo, charNo and error)
        typeof messageOrEvent === 'object' && messageOrEvent !== null && (!url || typeof url !== 'string') && !lineNo && !charNo && !error) {
          // The jQuery event may have a "type" property, if so use it as part of the error message
          var name = messageOrEvent.type ? "Event: " + messageOrEvent.type : 'window.onerror'; // attempt to find a message from one of the conventional properties, but
          // default to empty string (the report will fill it with a placeholder)

          var message = messageOrEvent.message || messageOrEvent.detail || '';
          report = new client.BugsnagReport(name, message, client.BugsnagReport.getStacktrace(new Error(), 1).slice(1), handledState); // include the raw input as metadata – it might contain more info than we extracted

          report.updateMetaData('window onerror', {
            event: messageOrEvent,
            extraParameters: url
          });
        } else {
          // Lastly, if there was no "error" parameter this event was probably from an old
          // browser that doesn't support that. Instead we need to generate a stacktrace.
          report = new client.BugsnagReport('window.onerror', String(messageOrEvent), decorateStack(client.BugsnagReport.getStacktrace(error, 1), url, lineNo, charNo), handledState); // include the raw input as metadata – it might contain more info than we extracted

          report.updateMetaData('window onerror', {
            event: messageOrEvent
          });
        }

        client.notify(report);
      }

      if (typeof prevOnError === 'function') prevOnError.apply(this, arguments);
    }

    var prevOnError = win.onerror;
    win.onerror = onerror;
  } // Sometimes the stacktrace has less information than was passed to window.onerror.
  // This function will augment the first stackframe with any useful info that was
  // received as arguments to the onerror callback.

};

var decorateStack = function (stack, url, lineNo, charNo) {
  var culprit = stack[0];
  if (!culprit) return stack;
  if (!culprit.fileName && typeof url === 'string') culprit.setFileName(url);
  if (!culprit.lineNumber && isActualNumber(lineNo)) culprit.setLineNumber(lineNo);

  if (!culprit.columnNumber) {
    if (isActualNumber(charNo)) {
      culprit.setColumnNumber(charNo);
    } else if (window.event && isActualNumber(window.event.errorCharacter)) {
      culprit.setColumnNumber(window.event.errorCharacter);
    }
  }

  return stack;
};

var isActualNumber = function (n) {
  return typeof n === 'number' && String.call(n) !== 'NaN';
};

var _$stackframe_40 = {};
(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (typeof define === 'function' && define.amd) {
    define('stackframe', [], factory);
  } else if (typeof _$stackframe_40 === 'object') {
    _$stackframe_40 = factory();
  } else {
    root.StackFrame = factory();
  }
})(this, function () {
  'use strict';

  function _isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  function _getter(p) {
    return function () {
      return this[p];
    };
  }

  var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
  var numericProps = ['columnNumber', 'lineNumber'];
  var stringProps = ['fileName', 'functionName', 'source'];
  var arrayProps = ['args'];
  var props = booleanProps.concat(numericProps, stringProps, arrayProps);

  function StackFrame(obj) {
    if (obj instanceof Object) {
      for (var i = 0; i < props.length; i++) {
        if (obj.hasOwnProperty(props[i]) && obj[props[i]] !== undefined) {
          this['set' + _capitalize(props[i])](obj[props[i]]);
        }
      }
    }
  }

  StackFrame.prototype = {
    getArgs: function () {
      return this.args;
    },
    setArgs: function (v) {
      if (Object.prototype.toString.call(v) !== '[object Array]') {
        throw new TypeError('Args must be an Array');
      }

      this.args = v;
    },
    getEvalOrigin: function () {
      return this.evalOrigin;
    },
    setEvalOrigin: function (v) {
      if (v instanceof StackFrame) {
        this.evalOrigin = v;
      } else if (v instanceof Object) {
        this.evalOrigin = new StackFrame(v);
      } else {
        throw new TypeError('Eval Origin must be an Object or StackFrame');
      }
    },
    toString: function () {
      var functionName = this.getFunctionName() || '{anonymous}';
      var args = '(' + (this.getArgs() || []).join(',') + ')';
      var fileName = this.getFileName() ? '@' + this.getFileName() : '';
      var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
      var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
      return functionName + args + fileName + lineNumber + columnNumber;
    }
  };

  for (var i = 0; i < booleanProps.length; i++) {
    StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);

    StackFrame.prototype['set' + _capitalize(booleanProps[i])] = function (p) {
      return function (v) {
        this[p] = Boolean(v);
      };
    }(booleanProps[i]);
  }

  for (var j = 0; j < numericProps.length; j++) {
    StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);

    StackFrame.prototype['set' + _capitalize(numericProps[j])] = function (p) {
      return function (v) {
        if (!_isNumber(v)) {
          throw new TypeError(p + ' must be a Number');
        }

        this[p] = Number(v);
      };
    }(numericProps[j]);
  }

  for (var k = 0; k < stringProps.length; k++) {
    StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);

    StackFrame.prototype['set' + _capitalize(stringProps[k])] = function (p) {
      return function (v) {
        this[p] = String(v);
      };
    }(stringProps[k]);
  }

  return StackFrame;
});

var _$errorStackParser_38 = {};
(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (typeof define === 'function' && define.amd) {
    define('error-stack-parser', ['stackframe'], factory);
  } else if (typeof _$errorStackParser_38 === 'object') {
    _$errorStackParser_38 = factory(_$stackframe_40);
  } else {
    root.ErrorStackParser = factory(root.StackFrame);
  }
})(this, function ErrorStackParser(StackFrame) {
  'use strict';

  var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
  var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
  var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
  return {
    /**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
    parse: function ErrorStackParser$$parse(error) {
      if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
        return this.parseOpera(error);
      } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
        return this.parseV8OrIE(error);
      } else if (error.stack) {
        return this.parseFFOrSafari(error);
      } else {
        throw new Error('Cannot parse given Error object');
      }
    },
    // Separate line and column numbers from a string of the form: (URI:Line:Column)
    extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
      // Fail-fast but return locations like "(native)"
      if (urlLike.indexOf(':') === -1) {
        return [urlLike];
      }

      var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
      var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
      return [parts[1], parts[2] || undefined, parts[3] || undefined];
    },
    parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !!line.match(CHROME_IE_STACK_REGEXP);
      }, this);
      return filtered.map(function (line) {
        if (line.indexOf('(eval ') > -1) {
          // Throw away eval information until we implement stacktrace.js/stackframe#8
          line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
        }

        var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
        var locationParts = this.extractLocation(tokens.pop());
        var functionName = tokens.join(' ') || undefined;
        var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
        return new StackFrame({
          functionName: functionName,
          fileName: fileName,
          lineNumber: locationParts[1],
          columnNumber: locationParts[2],
          source: line
        });
      }, this);
    },
    parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !line.match(SAFARI_NATIVE_CODE_REGEXP);
      }, this);
      return filtered.map(function (line) {
        // Throw away eval information until we implement stacktrace.js/stackframe#8
        if (line.indexOf(' > eval') > -1) {
          line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
        }

        if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
          // Safari eval frames only have function names and nothing else
          return new StackFrame({
            functionName: line
          });
        } else {
          var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
          var matches = line.match(functionNameRegex);
          var functionName = matches && matches[1] ? matches[1] : undefined;
          var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
          return new StackFrame({
            functionName: functionName,
            fileName: locationParts[0],
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }
      }, this);
    },
    parseOpera: function ErrorStackParser$$parseOpera(e) {
      if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
        return this.parseOpera9(e);
      } else if (!e.stack) {
        return this.parseOpera10(e);
      } else {
        return this.parseOpera11(e);
      }
    },
    parseOpera9: function ErrorStackParser$$parseOpera9(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
      var lines = e.message.split('\n');
      var result = [];

      for (var i = 2, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame({
            fileName: match[2],
            lineNumber: match[1],
            source: lines[i]
          }));
        }
      }

      return result;
    },
    parseOpera10: function ErrorStackParser$$parseOpera10(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
      var lines = e.stacktrace.split('\n');
      var result = [];

      for (var i = 0, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame({
            functionName: match[3] || undefined,
            fileName: match[2],
            lineNumber: match[1],
            source: lines[i]
          }));
        }
      }

      return result;
    },
    // Opera 10.65+ Error.stack very similar to FF/Safari
    parseOpera11: function ErrorStackParser$$parseOpera11(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
      }, this);
      return filtered.map(function (line) {
        var tokens = line.split('@');
        var locationParts = this.extractLocation(tokens.pop());
        var functionCall = tokens.shift() || '';
        var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
        var argsRaw;

        if (functionCall.match(/\(([^\)]*)\)/)) {
          argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
        }

        var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
        return new StackFrame({
          functionName: functionName,
          args: args,
          fileName: locationParts[0],
          lineNumber: locationParts[1],
          columnNumber: locationParts[2],
          source: line
        });
      }, this);
    }
  };
});

/**
 * Expose `isError`.
 */
var _$isError_39 = __isError_39;
/**
 * Test whether `value` is error object.
 *
 * @param {*} value
 * @returns {boolean}
 */

function __isError_39(value) {
  switch (Object.prototype.toString.call(value)) {
    case '[object Error]':
      return true;

    case '[object Exception]':
      return true;

    case '[object DOMException]':
      return true;

    default:
      return value instanceof Error;
  }
}

var _$unhandledRejection_41 = {};
/* removed: var _$hasStack_8 = require('@bugsnag/core/lib/has-stack'); */;

var __reduce_41 = _$esUtils_7.reduce;

/* removed: var _$errorStackParser_38 = require('error-stack-parser'); */;

/* removed: var _$isError_39 = require('iserror'); */;
/*
 * Automatically notifies Bugsnag when window.onunhandledrejection is called
 */


var _listener;

_$unhandledRejection_41.init = function (client, win) {
  if (win === void 0) {
    win = window;
  }

  var listener = function (event) {
    var error = event.reason;
    var isBluebird = false; // accessing properties on event.detail can throw errors (see #394)

    try {
      if (event.detail && event.detail.reason) {
        error = event.detail.reason;
        isBluebird = true;
      }
    } catch (e) {}

    var handledState = {
      severity: 'error',
      unhandled: true,
      severityReason: {
        type: 'unhandledPromiseRejection'
      }
    };
    var report;

    if (error && _$hasStack_8(error)) {
      // if it quacks like an Error…
      report = new client.BugsnagReport(error.name, error.message, _$errorStackParser_38.parse(error), handledState);

      if (isBluebird) {
        report.stacktrace = __reduce_41(report.stacktrace, fixBluebirdStacktrace(error), []);
      }
    } else {
      // if it doesn't…
      var msg = 'Rejection reason was not an Error. See "Promise" tab for more detail.';
      report = new client.BugsnagReport(error && error.name ? error.name : 'UnhandledRejection', error && error.message ? error.message : msg, [], handledState); // stuff the rejection reason into metaData, it could be useful

      report.updateMetaData('promise', 'rejection reason', serializableReason(error));
    }

    client.notify(report);
  };

  if ('addEventListener' in win) {
    win.addEventListener('unhandledrejection', listener);
  } else {
    win.onunhandledrejection = function (reason, promise) {
      listener({
        detail: {
          reason: reason,
          promise: promise
        }
      });
    };
  }

  _listener = listener;
};

if (false) {}

var serializableReason = function (err) {
  if (err === null || err === undefined) {
    return 'undefined (or null)';
  } else if (_$isError_39(err)) {
    var _ref;

    return _ref = {}, _ref[Object.prototype.toString.call(err)] = {
      name: err.name,
      message: err.message,
      code: err.code,
      stack: err.stack
    }, _ref;
  } else {
    return err;
  }
}; // The stack parser on bluebird stacks in FF get a suprious first frame:
//
// Error: derp
//   b@http://localhost:5000/bluebird.html:22:24
//   a@http://localhost:5000/bluebird.html:18:9
//   @http://localhost:5000/bluebird.html:14:9
//
// results in
//   […]
//     0: Object { file: "Error: derp", method: undefined, lineNumber: undefined, … }
//     1: Object { file: "http://localhost:5000/bluebird.html", method: "b", lineNumber: 22, … }
//     2: Object { file: "http://localhost:5000/bluebird.html", method: "a", lineNumber: 18, … }
//     3: Object { file: "http://localhost:5000/bluebird.html", lineNumber: 14, columnNumber: 9, … }
//
// so the following reduce/accumulator function removes such frames
//
// Bluebird pads method names with spaces so trim that too…
// https://github.com/petkaantonov/bluebird/blob/b7f21399816d02f979fe434585334ce901dcaf44/src/debuggability.js#L568-L571


var fixBluebirdStacktrace = function (error) {
  return function (accum, frame) {
    if (frame.file === error.toString()) return accum;

    if (frame.method) {
      frame.method = frame.method.replace(/^\s+/, '');
    }

    return accum.concat(frame);
  };
};

var _$notifier_2 = {};
function ___extends_2() { ___extends_2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_2.apply(this, arguments); }

var name = 'Bugsnag JavaScript';
var version = '5.2.0';
var url = 'https://github.com/bugsnag/bugsnag-js';

/* removed: var _$BugsnagClient_4 = require('@bugsnag/core/client'); */;

/* removed: var _$BugsnagReport_21 = require('@bugsnag/core/report'); */;

/* removed: var _$Session_22 = require('@bugsnag/core/session'); */;

/* removed: var _$BugsnagBreadcrumb_3 = require('@bugsnag/core/breadcrumb'); */;

var __map_2 = _$esUtils_7.map; // extend the base config schema with some browser-specific options


var __schema_2 = ___extends_2({}, _$config_5.schema, _$config_1);

/* removed: var _$onerror_37 = require('@bugsnag/plugin-window-onerror'); */;

/* removed: var _$unhandledRejection_41 = require('@bugsnag/plugin-window-unhandled-rejection'); */;

/* removed: var _$device_26 = require('@bugsnag/plugin-browser-device'); */;

/* removed: var _$context_25 = require('@bugsnag/plugin-browser-context'); */;

/* removed: var _$request_27 = require('@bugsnag/plugin-browser-request'); */;

/* removed: var _$throttle_35 = require('@bugsnag/plugin-simple-throttle'); */;

/* removed: var _$consoleBreadcrumbs_30 = require('@bugsnag/plugin-console-breadcrumbs'); */;

/* removed: var _$networkBreadcrumbs_34 = require('@bugsnag/plugin-network-breadcrumbs'); */;

/* removed: var _$navigationBreadcrumbs_33 = require('@bugsnag/plugin-navigation-breadcrumbs'); */;

/* removed: var _$interactionBreadcrumbs_32 = require('@bugsnag/plugin-interaction-breadcrumbs'); */;

/* removed: var _$inlineScriptContent_31 = require('@bugsnag/plugin-inline-script-content'); */;

/* removed: var _$session_28 = require('@bugsnag/plugin-browser-session'); */;

/* removed: var _$clientIp_29 = require('@bugsnag/plugin-client-ip'); */;

/* removed: var _$stripQueryString_36 = require('@bugsnag/plugin-strip-query-string'); */; // delivery mechanisms


/* removed: var _$delivery_23 = require('@bugsnag/delivery-x-domain-request'); */;

/* removed: var _$delivery_24 = require('@bugsnag/delivery-xml-http-request'); */;

_$notifier_2 = function (opts) {
  // handle very simple use case where user supplies just the api key as a string
  if (typeof opts === 'string') opts = {
    apiKey: opts // support renamed/deprecated options

  };
  var warnings = [];

  if (opts.sessionTrackingEnabled) {
    warnings.push('deprecated option sessionTrackingEnabled is now called autoCaptureSessions');
    opts.autoCaptureSessions = opts.sessionTrackingEnabled;
  }

  if ((opts.endpoint || opts.sessionEndpoint) && !opts.endpoints) {
    warnings.push('deprecated options endpoint/sessionEndpoint are now configured in the endpoints object');
    opts.endpoints = {
      notify: opts.endpoint,
      sessions: opts.sessionEndpoint
    };
  }

  if (opts.endpoints && opts.endpoints.notify && !opts.endpoints.sessions) {
    warnings.push('notify endpoint is set but sessions endpoint is not. No sessions will be sent.');
  }

  var bugsnag = new _$BugsnagClient_4({
    name: name,
    version: version,
    url: url
  });
  bugsnag.setOptions(opts); // set delivery based on browser capability (IE 8+9 have an XDomainRequest object)

  bugsnag.delivery(window.XDomainRequest ? _$delivery_23() : _$delivery_24()); // configure with user supplied options
  // errors can be thrown here that prevent the lib from being in a useable state

  bugsnag.configure(__schema_2);
  __map_2(warnings, function (w) {
    return bugsnag._logger.warn(w);
  }); // always-on browser-specific plugins

  bugsnag.use(_$device_26);
  bugsnag.use(_$context_25);
  bugsnag.use(_$request_27);
  bugsnag.use(_$inlineScriptContent_31);
  bugsnag.use(_$throttle_35);
  bugsnag.use(_$session_28);
  bugsnag.use(_$clientIp_29);
  bugsnag.use(_$stripQueryString_36); // optional browser-specific plugins

  if (bugsnag.config.autoNotify !== false) {
    bugsnag.use(_$onerror_37);
    bugsnag.use(_$unhandledRejection_41);
  }

  bugsnag.use(_$navigationBreadcrumbs_33);
  bugsnag.use(_$interactionBreadcrumbs_32);
  bugsnag.use(_$networkBreadcrumbs_34);
  bugsnag.use(_$consoleBreadcrumbs_30);

  bugsnag._logger.debug("Loaded!");

  return bugsnag.config.autoCaptureSessions ? bugsnag.startSession() : bugsnag;
}; // Stub this value because this is what the type interface looks like
// (types/bugsnag.d.ts). This is only an issue in Angular's development
// mode as its TS/DI thingy attempts to use this value at runtime.
// In most other situations, TS only uses the types at compile time.


_$notifier_2.Bugsnag = {
  Client: _$BugsnagClient_4,
  Report: _$BugsnagReport_21,
  Session: _$Session_22,
  Breadcrumb: _$BugsnagBreadcrumb_3 // Export a "default" property for compatibility with ESM imports

};
_$notifier_2['default'] = _$notifier_2;

return _$notifier_2;

});
//# sourceMappingURL=bugsnag.js.map


/***/ }),

/***/ "02e4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "044b":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "04b4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "0a06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("2444");
var utils = __webpack_require__("c532");
var InterceptorManager = __webpack_require__("f6b4");
var dispatchRequest = __webpack_require__("5270");

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

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
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

/***/ "0a90":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
var $parseFloat = __webpack_require__("10ff");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "0df6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "10ff":
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__("e53d").parseFloat;
var $trim = __webpack_require__("a1ce").trim;

module.exports = 1 / $parseFloat(__webpack_require__("e692") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "1173":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "1355":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1698":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1d2b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23f7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2413":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2a29");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "2444":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("c532");
var normalizeHeaderName = __webpack_require__("c8af");

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
    adapter = __webpack_require__("b50d");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("b50d");
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

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "24c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var global = __webpack_require__("e53d");
var ctx = __webpack_require__("d864");
var classof = __webpack_require__("40c3");
var $export = __webpack_require__("63b6");
var isObject = __webpack_require__("f772");
var aFunction = __webpack_require__("79aa");
var anInstance = __webpack_require__("1173");
var forOf = __webpack_require__("a22a");
var speciesConstructor = __webpack_require__("f201");
var task = __webpack_require__("4178").set;
var microtask = __webpack_require__("aba2")();
var newPromiseCapabilityModule = __webpack_require__("656e");
var perform = __webpack_require__("4439");
var userAgent = __webpack_require__("bc13");
var promiseResolve = __webpack_require__("cd78");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("5168")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("5c95")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("45f2")($Promise, PROMISE);
__webpack_require__("4c95")(PROMISE);
Wrapper = __webpack_require__("584a")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("4ee1")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "263e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ }),

/***/ "280f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BtnActivity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("76fc");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BtnActivity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BtnActivity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BtnActivity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


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

/***/ "2a29":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2d83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("387f");

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

/***/ "2e67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "3024":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "3039":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "30b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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
      } else {
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

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "3181":
/***/ (function(module, exports, __webpack_require__) {

(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;
var _$src_1 = {};
var _this = this;

_$src_1 = {
  name: 'vue',
  init: function (client, Vue) {
    if (Vue === void 0) {
      Vue = window.Vue;
    }

    if (!Vue) throw new Error('cannot find Vue');
    var prev = Vue.config.errorHandler;

    var handler = function (err, vm, info) {
      var handledState = {
        severity: 'error',
        unhandled: true,
        severityReason: {
          type: 'unhandledException'
        }
      };
      var report = new client.BugsnagReport(err.name, err.message, client.BugsnagReport.getStacktrace(err), handledState);
      report.updateMetaData('vue', {
        errorInfo: info,
        component: vm ? formatComponentName(vm, true) : undefined,
        props: vm ? vm.$options.propsData : undefined
      });
      client.notify(report);
      if (typeof console !== 'undefined' && typeof console.error === 'function') console.error(err);
      if (typeof prev === 'function') prev.call(_this, err, vm, info);
    };

    Vue.config.errorHandler = handler;
    return null;
  } // taken and reworked from Vue.js source

};

var formatComponentName = function (vm, includeFile) {
  if (vm.$root === vm) return '<Root>';
  var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
  var name = options.name || options._componentTag;
  var file = options.__file;

  if (!name && file) {
    var match = file.match(/([^/\\]+)\.vue$/);
    name = match && match[1];
  }

  return (name ? '<' + classify(name) + '>' : '<Anonymous>') + (file && includeFile !== false ? ' at ' + file : '');
}; // taken and reworked from Vue.js source


var classify = _$src_1.classify = function (str) {
  return str.replace(/(?:^|[-_])(\w)/g, function (c) {
    return c.toUpperCase();
  }).replace(/[-_]/g, '');
};

return _$src_1;

});
//# sourceMappingURL=bugsnag-vue.js.map


/***/ }),

/***/ "32a6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("241e");
var $keys = __webpack_require__("c3a1");

__webpack_require__("ce7e")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "32ca":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "3508":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "353a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("012c")


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3702":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("481b");
var ITERATOR = __webpack_require__("5168")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "387f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
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

/***/ "3934":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3c11":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var speciesConstructor = __webpack_require__("f201");
var promiseResolve = __webpack_require__("cd78");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "3f1c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9cdb");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "40c3":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6b4c");
var TAG = __webpack_require__("5168")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "40c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("95a2");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4178":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("d864");
var invoke = __webpack_require__("3024");
var html = __webpack_require__("32fc");
var cel = __webpack_require__("1ec9");
var global = __webpack_require__("e53d");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("6b4c")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "4382":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PlaceAutocompleteListItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("02e4");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PlaceAutocompleteListItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PlaceAutocompleteListItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PlaceAutocompleteListItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "43fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("63b6");
var newPromiseCapability = __webpack_require__("656e");
var perform = __webpack_require__("4439");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "4439":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "467f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("2d83");

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

/***/ "4805":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("32ca");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4c95":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var dP = __webpack_require__("d9f6");
var DESCRIPTORS = __webpack_require__("8e60");
var SPECIES = __webpack_require__("5168")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "4ee1":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("5168")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "5176":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("51b6");

/***/ }),

/***/ "51b6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a3c3");
module.exports = __webpack_require__("584a").Object.assign;


/***/ }),

/***/ "5270":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var transformData = __webpack_require__("c401");
var isCancel = __webpack_require__("2e67");
var defaults = __webpack_require__("2444");
var isAbsoluteURL = __webpack_require__("d925");
var combineURLs = __webpack_require__("e683");

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

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "540a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Generated by CoffeeScript 1.10.0
(function() {
  var Payment, QJ, cardFromNumber, cardFromType, cards, defaultFormat, formatBackCardNumber, formatBackExpiry, formatCardNumber, formatExpiry, formatForwardExpiry, formatForwardSlash, formatMonthExpiry, hasTextSelected, luhnCheck, reFormatCardNumber, restrictCVC, restrictCardNumber, restrictCombinedExpiry, restrictExpiry, restrictMonthExpiry, restrictNumeric, restrictYearExpiry, setCardType,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  QJ = __webpack_require__("5d3e");

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
    var e, error, ref;
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
      e = error;
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

  global.Payment = Payment;

}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "59ad":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7be7");

/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5c95":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("35e8");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "5d3e":
/***/ (function(module, exports) {

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
    var e, error, ev;
    try {
      ev = new CustomEvent(name, {
        detail: data
      });
    } catch (error) {
      e = error;
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

}).call(this);


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "656e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("79aa");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "68db":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "696e":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c207");
__webpack_require__("1654");
__webpack_require__("6c1c");
__webpack_require__("24c5");
__webpack_require__("3c11");
__webpack_require__("43fc");
module.exports = __webpack_require__("584a").Promise;


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "76fc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "795b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("696e");

/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "7a77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "7aa6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("68db");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7aac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "7be7":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0a90");
module.exports = __webpack_require__("584a").parseFloat;


/***/ }),

/***/ "7c5d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("04b4");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7cd6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "8560":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ }),

/***/ "859b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ }),

/***/ "8769":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "87f6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "886b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ }),

/***/ "8953":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ }),

/***/ "8aae":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("32a6");
module.exports = __webpack_require__("584a").Object.keys;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8c85":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("7a77");

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

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "913a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9306":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
var toObject = __webpack_require__("241e");
var IObject = __webpack_require__("335c");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("294c")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "95a2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9c69":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ }),

/***/ "9cdb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9cdbb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9d01":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("87f6");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9fa6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

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

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a1ce":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
var defined = __webpack_require__("25eb");
var fails = __webpack_require__("294c");
var spaces = __webpack_require__("e692");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "a1de":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ }),

/***/ "a22a":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("d864");
var call = __webpack_require__("b0dc");
var isArrayIter = __webpack_require__("3702");
var anObject = __webpack_require__("e4ae");
var toLength = __webpack_require__("b447");
var getIterFn = __webpack_require__("7cd6");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "a3c3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("63b6");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("9306") });


/***/ }),

/***/ "a4bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8aae");

/***/ }),

/***/ "aba2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var macrotask = __webpack_require__("4178").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("6b4c")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "ac67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fab';
var iconName = 'cc-amex';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f1f3';
var svgPathData = 'M325.1 167.8c0-16.4-14.1-18.4-27.4-18.4l-39.1-.3v69.3H275v-25.1h18c18.4 0 14.5 10.3 14.8 25.1h16.6v-13.5c0-9.2-1.5-15.1-11-18.4 7.4-3 11.8-10.7 11.7-18.7zm-29.4 11.3H275v-15.3h21c5.1 0 10.7 1 10.7 7.4 0 6.6-5.3 7.9-11 7.9zM279 268.6h-52.7l-21 22.8-20.5-22.8h-66.5l-.1 69.3h65.4l21.3-23 20.4 23h32.2l.1-23.3c18.9 0 49.3 4.6 49.3-23.3 0-17.3-12.3-22.7-27.9-22.7zm-103.8 54.7h-40.6v-13.8h36.3v-14.1h-36.3v-12.5h41.7l17.9 20.2zm65.8 8.2l-25.3-28.1L241 276zm37.8-31h-21.2v-17.6h21.5c5.6 0 10.2 2.3 10.2 8.4 0 6.4-4.6 9.2-10.5 9.2zm-31.6-136.7v-14.6h-55.5v69.3h55.5v-14.3h-38.9v-13.8h37.8v-14.1h-37.8v-12.5zM576 255.4h-.2zm-194.6 31.9c0-16.4-14.1-18.7-27.1-18.7h-39.4l-.1 69.3h16.6l.1-25.3h17.6c11 0 14.8 2 14.8 13.8l-.1 11.5h16.6l.1-13.8c0-8.9-1.8-15.1-11-18.4 7.7-3.1 11.8-10.8 11.9-18.4zm-29.2 11.2h-20.7v-15.6h21c5.1 0 10.7 1 10.7 7.4 0 6.9-5.4 8.2-11 8.2zm-172.8-80v-69.3h-27.6l-19.7 47-21.7-47H83.3v65.7l-28.1-65.7H30.7L1 218.5h17.9l6.4-15.3h34.5l6.4 15.3H100v-54.2l24 54.2h14.6l24-54.2v54.2zM31.2 188.8l11.2-27.6 11.5 27.6zm477.4 158.9v-4.5c-10.8 5.6-3.9 4.5-156.7 4.5 0-25.2.1-23.9 0-25.2-1.7-.1-3.2-.1-9.4-.1 0 17.9-.1 6.8-.1 25.3h-39.6c0-12.1.1-15.3.1-29.2-10 6-22.8 6.4-34.3 6.2 0 14.7-.1 8.3-.1 23h-48.9c-5.1-5.7-2.7-3.1-15.4-17.4-3.2 3.5-12.8 13.9-16.1 17.4h-82v-92.3h83.1c5 5.6 2.8 3.1 15.5 17.2 3.2-3.5 12.2-13.4 15.7-17.2h58c9.8 0 18 1.9 24.3 5.6v-5.6c54.3 0 64.3-1.4 75.7 5.1v-5.1h78.2v5.2c11.4-6.9 19.6-5.2 64.9-5.2v5c10.3-5.9 16.6-5.2 54.3-5V80c0-26.5-21.5-48-48-48h-480c-26.5 0-48 21.5-48 48v109.8c9.4-21.9 19.7-46 23.1-53.9h39.7c4.3 10.1 1.6 3.7 9 21.1v-21.1h46c2.9 6.2 11.1 24 13.9 30 5.8-13.6 10.1-23.9 12.6-30h103c0-.1 11.5 0 11.6 0 43.7.2 53.6-.8 64.4 5.3v-5.3H363v9.3c7.6-6.1 17.9-9.3 30.7-9.3h27.6c0 .5 1.9.3 2.3.3H456c4.2 9.8 2.6 6 8.8 20.6v-20.6h43.3c4.9 8-1-1.8 11.2 18.4v-18.4h39.9v92h-41.6c-5.4-9-1.4-2.2-13.2-21.9v21.9h-52.8c-6.4-14.8-.1-.3-6.6-15.3h-19c-4.2 10-2.2 5.2-6.4 15.3h-26.8c-12.3 0-22.3-3-29.7-8.9v8.9h-66.5c-.3-13.9-.1-24.8-.1-24.8-1.8-.3-3.4-.2-9.8-.2v25.1H151.2v-11.4c-2.5 5.6-2.7 5.9-5.1 11.4h-29.5c-4-8.9-2.9-6.4-5.1-11.4v11.4H58.6c-4.2-10.1-2.2-5.3-6.4-15.3H33c-4.2 10-2.2 5.2-6.4 15.3H0V432c0 26.5 21.5 48 48 48h480.1c26.5 0 48-21.5 48-48v-90.4c-12.7 8.3-32.7 6.1-67.5 6.1zm36.3-64.5H575v-14.6h-32.9c-12.8 0-23.8 6.6-23.8 20.7 0 33 42.7 12.8 42.7 27.4 0 5.1-4.3 6.4-8.4 6.4h-32l-.1 14.8h32c8.4 0 17.6-1.8 22.5-8.9v-25.8c-10.5-13.8-39.3-1.3-39.3-13.5 0-5.8 4.6-6.5 9.2-6.5zm-57 39.8h-32.2l-.1 14.8h32.2c14.8 0 26.2-5.6 26.2-22 0-33.2-42.9-11.2-42.9-26.3 0-5.6 4.9-6.4 9.2-6.4h30.4v-14.6h-33.2c-12.8 0-23.5 6.6-23.5 20.7 0 33 42.7 12.5 42.7 27.4-.1 5.4-4.7 6.4-8.8 6.4zm-42.2-40.1v-14.3h-55.2l-.1 69.3h55.2l.1-14.3-38.6-.3v-13.8H445v-14.1h-37.8v-12.5zm-56.3-108.1c-.3.2-1.4 2.2-1.4 7.6 0 6 .9 7.7 1.1 7.9.2.1 1.1.5 3.4.5l7.3-16.9c-1.1 0-2.1-.1-3.1-.1-5.6 0-7 .7-7.3 1zm20.4-10.5h-.1zm-16.2-15.2c-23.5 0-34 12-34 35.3 0 22.2 10.2 34 33 34h19.2l6.4-15.3h34.3l6.6 15.3h33.7v-51.9l31.2 51.9h23.6v-69h-16.9v48.1l-29.1-48.1h-25.3v65.4l-27.9-65.4h-24.8l-23.5 54.5h-7.4c-13.3 0-16.1-8.1-16.1-19.9 0-23.8 15.7-20 33.1-19.7v-15.2zm42.1 12.1l11.2 27.6h-22.8zm-101.1-12v69.3h16.9v-69.3z';

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

/***/ }),

/***/ "ad3d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontAwesomeIcon; });
/* unused harmony export FontAwesomeLayers */
/* unused harmony export FontAwesomeLayersText */
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ecee");


var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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

  if (false) {} else if ( true && module.exports) {
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

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
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
    return h(element.tag, _extends({
      class: combineClassObjects(mixins.class, dClass),
      style: _extends({}, mixins.style, dStyle),
      attrs: _extends({}, mixins.attrs, dAttrs)
    }, remainingData, {
      props: props
    }), children);
  }
}

var PRODUCTION = false;

try {
  PRODUCTION = "production" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
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

function addStaticClass(to, what) {
  var val = (to || '').length === 0 ? [] : [to];

  return val.concat(what).join(' ');
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
      type: [String, Number],
      default: null,
      validator: function validator(value) {
        return [90, 180, 270].indexOf(parseInt(value, 10)) > -1;
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
    },
    title: {
      type: String,
      default: null
    }
  },

  render: function render(createElement, context) {
    var props = context.props;
    var iconArgs = props.icon,
        maskArgs = props.mask,
        symbol = props.symbol,
        title = props.title;

    var icon$$1 = normalizeIconArgs(iconArgs);
    var classes = objectWithKey('classes', classList(props));
    var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[/* parse */ "d"].transform(props.transform) : props.transform);
    var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));

    var renderedIcon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[/* icon */ "b"])(icon$$1, _extends({}, classes, transform, mask, { symbol: symbol, title: title }));

    if (!renderedIcon) {
      return log('Could not find one or more icon(s)', icon$$1, mask);
    }

    var abstract = renderedIcon.abstract;

    var convertCurry = convert.bind(null, createElement);

    return convertCurry(abstract[0], {}, context.data);
  }
};

var FontAwesomeLayers = {
  name: 'FontAwesomeLayers',

  functional: true,

  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },

  render: function render(createElement, context) {
    var familyPrefix = _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].familyPrefix;
    var staticClass = context.data.staticClass;


    var classes = [familyPrefix + '-layers'].concat(toConsumableArray(context.props.fixedWidth ? [familyPrefix + '-fw'] : []));

    return createElement('div', _extends({}, context.data, {
      staticClass: addStaticClass(staticClass, classes)
    }), context.children);
  }
};

var FontAwesomeLayersText = {
  name: 'FontAwesomeLayersText',

  functional: true,

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    transform: {
      type: [String, Object],
      default: null
    }
  },

  render: function render(createElement, context) {
    var props = context.props;

    var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[/* parse */ "d"].transform(props.transform) : props.transform);

    var renderedText = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[/* text */ "e"])(props.value.toString(), _extends({}, transform));

    var abstract = renderedText.abstract;


    var convertCurry = convert.bind(null, createElement);

    return convertCurry(abstract[0], {}, context.data);
  }
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0dc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("e4ae");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b50d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var settle = __webpack_require__("467f");
var buildURL = __webpack_require__("30b5");
var parseHeaders = __webpack_require__("c345");
var isURLSameOrigin = __webpack_require__("3934");
var createError = __webpack_require__("2d83");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__("9fa6");

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
    if ( true &&
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
      var cookies = __webpack_require__("7aac");

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

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "bc13":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "bc3a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cee4");

/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c345":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c401":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "c532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("1d2b");
var isBuffer = __webpack_require__("044b");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
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

  if (isArray(obj)) {
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
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
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
function extend(a, b, thisArg) {
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
  isArray: isArray,
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
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "c581":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c8af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c97a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CreditCardField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c581");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CreditCardField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CreditCardField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CreditCardField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cada":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ }),

/***/ "cd78":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var newPromiseCapability = __webpack_require__("656e");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "cdf6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ce7e":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var fails = __webpack_require__("294c");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "cee4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var bind = __webpack_require__("1d2b");
var Axios = __webpack_require__("0a06");
var defaults = __webpack_require__("2444");

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
axios.Cancel = __webpack_require__("7a77");
axios.CancelToken = __webpack_require__("8df4");
axios.isCancel = __webpack_require__("2e67");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("0df6");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "cfc3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Script/Script.js
const LOADED_SCRIPTS = {};

function Script_element(url) {
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
            append(Script_element(url)).addEventListener('load', event => {
                resolve(LOADED_SCRIPTS[url] = event);
            });
        }
        catch (e) {
            reject(e);
        }
    });

    return LOADED_SCRIPTS[url];
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Script/index.js

/* harmony default export */ var Script = __webpack_exports__["a"] = (script);


/***/ }),

/***/ "d482":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d86b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PlaceAutocompleteField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d966");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PlaceAutocompleteField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PlaceAutocompleteField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PlaceAutocompleteField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d925":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "d966":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e683":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "e692":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e73a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fab';
var iconName = 'cc-discover';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f1f2';
var svgPathData = 'M520.4 196.1c0-7.9-5.5-12.1-15.6-12.1h-4.9v24.9h4.7c10.3 0 15.8-4.4 15.8-12.8zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-44.1 138.9c22.6 0 52.9-4.1 52.9 24.4 0 12.6-6.6 20.7-18.7 23.2l25.8 34.4h-19.6l-22.2-32.8h-2.2v32.8h-16zm-55.9.1h45.3v14H444v18.2h28.3V217H444v22.2h29.3V253H428zm-68.7 0l21.9 55.2 22.2-55.2h17.5l-35.5 84.2h-8.6l-35-84.2zm-55.9-3c24.7 0 44.6 20 44.6 44.6 0 24.7-20 44.6-44.6 44.6-24.7 0-44.6-20-44.6-44.6 0-24.7 20-44.6 44.6-44.6zm-49.3 6.1v19c-20.1-20.1-46.8-4.7-46.8 19 0 25 27.5 38.5 46.8 19.2v19c-29.7 14.3-63.3-5.7-63.3-38.2 0-31.2 33.1-53 63.3-38zm-97.2 66.3c11.4 0 22.4-15.3-3.3-24.4-15-5.5-20.2-11.4-20.2-22.7 0-23.2 30.6-31.4 49.7-14.3l-8.4 10.8c-10.4-11.6-24.9-6.2-24.9 2.5 0 4.4 2.7 6.9 12.3 10.3 18.2 6.6 23.6 12.5 23.6 25.6 0 29.5-38.8 37.4-56.6 11.3l10.3-9.9c3.7 7.1 9.9 10.8 17.5 10.8zM55.4 253H32v-82h23.4c26.1 0 44.1 17 44.1 41.1 0 18.5-13.2 40.9-44.1 40.9zm67.5 0h-16v-82h16zM544 433c0 8.2-6.8 15-15 15H128c189.6-35.6 382.7-139.2 416-160zM74.1 191.6c-5.2-4.9-11.6-6.6-21.9-6.6H48v54.2h4.2c10.3 0 17-2 21.9-6.4 5.7-5.2 8.9-12.8 8.9-20.7s-3.2-15.5-8.9-20.5z';

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

/***/ }),

/***/ "e75e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3508");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e9fc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8769");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "eb94":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ }),

/***/ "ecee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return icon; });
/* unused harmony export noAuto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/* unused harmony export toHtml */
/* unused harmony export layer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return text; });
/* unused harmony export counter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return library; });
/* unused harmony export dom */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parse; });
/* unused harmony export findIconDefinition */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
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
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
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
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "production" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fab': 'brands',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'brands': 'fab'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/;
var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

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
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
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
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

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

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
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
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
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
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};
function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [{
      tag: 'path',
      attributes: _objectSpread({}, mainPath.attributes, trans.path, {
        fill: 'black'
      })
    }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(nextUniqueId());
  var clipId = "clip-".concat(nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: [maskPath]
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
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
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
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
}

function asIcon (_ref) {
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
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

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
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
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
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.7.2\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
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


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
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

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

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
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return _byUnicode[prefix][unicode];
}
function byLigature(prefix, ligature) {
  return _byLigature[prefix][ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fab', 'fa'].indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
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
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};
function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = WINDOW.requestAnimationFrame || function (op) {
      return op();
    };

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
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
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      var width = icon[0];
      var height = icon[1];
      var vectorData = icon.slice(4);
      val = {
        found: true,
        width: width,
        height: height,
        icon: {
          tag: 'path',
          attributes: {
            fill: 'currentColor',
            d: vectorData[0]
          }
        }
      };
      return resolve(val);
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        title: title,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = toArray(root.querySelectorAll(prefixesDomQuery));

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily) {
      var content = styles.getPropertyValue('content');
      var prefix = ~['Light', 'Regular', 'Solid', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var iconName = byUnicode(prefix, toHex(content.length === 3 ? content.substr(1, 1) : content)); // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconName) {
        node.setAttribute(pendingAttribute, iconName);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconName,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
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
    icon: {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData[0]
      }
    }
  };
}

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

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

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
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

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
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
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: "".concat(config.familyPrefix, "-layers")
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ed48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayPalPaymentButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1355");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayPalPaymentButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayPalPaymentButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayPalPaymentButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ee4a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ }),

/***/ "f17f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d482");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f201":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("e4ae");
var aFunction = __webpack_require__("79aa");
var SPECIES = __webpack_require__("5168")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "f294":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8c85");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/@bugsnag/js/browser/notifier.js
var notifier = __webpack_require__("353a");
var notifier_default = /*#__PURE__*/__webpack_require__.n(notifier);

// EXTERNAL MODULE: ./node_modules/@bugsnag/plugin-vue/dist/bugsnag-vue.js
var bugsnag_vue = __webpack_require__("3181");
var bugsnag_vue_default = /*#__PURE__*/__webpack_require__.n(bugsnag_vue);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/GiveworksForm.vue?vue&type=template&id=69302ba0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"giveworks-form"},[(_vm.error)?_c('div',[_c('div',{staticClass:"center-wrapper"},[_c('div',{staticClass:"center-content"},[_c('http-error-response',{attrs:{"error":_vm.error}})],1)])]):(_vm.page.id)?_c('form',{class:_vm.classes,attrs:{"novalidate":"novalidate"},on:{"submit":function($event){$event.preventDefault();return _vm.submit($event)}}},[_c(_vm.pageTypeComponent,{ref:"type",tag:"component",attrs:{"orientation":_vm.orientation,"page":_vm.page,"redirect":_vm.redirect},on:{"error":_vm.onError}})],1):_c('div',[_c('activity-indicator',{attrs:{"size":"lg","center":""}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/GiveworksForm.vue?vue&type=template&id=69302ba0&

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

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

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isNull.js
function isNull(value) {
    return value === null;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isArray.js
function isArray(value) {
    return Array.isArray(value);
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isObject.js



function isObject(value) {
    return (typeof value === 'object') && !isNull(value) && !isArray(value);
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/deepExtend.js



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
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/deepFlatten.js



function deepFlatten(x) {
    return concatMap(x => isArray(x) ? deepFlatten(x) : x)(x);
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isNumber.js
function isNumber(value) {
    return (typeof value === 'number') || (
        value ? value.toString() === '[object Number]' : false
    );
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isNumeric.js



function isNumeric(value) {
    return isNumber(value) || (
        !!value && !isArray(value) && !!value.toString().match(/^-?[\d.,]+$/)
    );
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/key.js


function key_key(value) {
    return isNumeric(value) ? parseFloat(value) : value;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/each.js


function each(subject, fn) {
    for(const i in subject) {
        fn(subject[i], key_key(i));
    }
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/first.js
function first(array) {
    return (array && array.length) ? array[0] : undefined;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/matches.js


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

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isString.js
function isString(value) {
    return typeof value === 'string';
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/get.js



function get(object, path) {
    return (isString(path) ? path.split('.') : (!isArray(path) ? [path] : path)).reduce((a, b) => a[b], object);
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

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/find.js



function find(subject, value) {
    return first(subject.filter(object => predicate(value)(object)));
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/findIndex.js



function findIndex(subject, value) {
    for(const i in subject) {
        if(predicate(value)(subject[i])) {
            return key_key(i);
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

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isUndefined.js
function isUndefined(value) {
    return typeof value === 'undefined';
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isEmpty.js





function isEmpty(value) {
    if(isArray(value)) {
        return value.length === 0;
    }
    else if(isObject(value)) {
        return Object.keys(value).length === 0;
    }

    return value === '' || isNull(value) || isUndefined(value);
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/kebabCase.js
function kebabCase(str) {
    return str && str.replace ?
        str.replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/\s+/g, '-')
            .replace(/_/g, '-')
            .toLowerCase() : null;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/map.js


function map(object, fn) {
    const mapped = {};

    each(object, (value, key) => {
        mapped[key] = fn(value, key);
    });

    return mapped;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Functions/mapKeys.js


function mapKeys(object, fn) {
    const mapped = {};

    each(object, (value, key) => {
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

    each(object, (value, key) => {
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
            indexes.push(key_key(i));
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
        if(isObject(key)) {
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

        if(isObject(attributes)) {
            this.setAttribute(attributes);
        }
    }

    send(attributes) {
        this.sentAt = new Date();
        this.setAttributes(attributes);

        return new Promise((resolve, reject) => {
            axios_default()(this.options).then(
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
        const merged = deepExtend({
            cancelToken: new axios_default.a.CancelToken(cancel => {
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





/* harmony default export */ var Http_Request = (Request_Request);

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

        each(params, (value, key) => {
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
        if(isArray(key)) {
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
        if(isArray(key) || isObject(key)) {
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
        if(isArray(data) || isObject(data)) {
            each(data, (value, key) => {
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

            if(isUndefined(value)) {
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
        each(this.$changed, (value, key) => {
            if(!isUndefined(value)) {
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
        return !key ? this.getChangedAttributes().length > 0 : !isUndefined(this.$changed[key]);
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
            this.$exists = !isUndefined(value) && !isNull(value);
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

        each(this.toJSON(), (value, key) => {
            if(isArray(value)) {
                each(value, item => {
                    if(!(item instanceof Blob) && (isObject(item) || isArray(item))) {
                        item = JSON.stringify(item);
                    }

                    form.append(key.replace(/(.+)(\[.+\]?)$/, '$1') + '[]', item);
                });
            }
            else if(!(value instanceof Blob) && isObject(value)) {
                form.append(key, JSON.stringify(value));
            }
            else if(!isNull(value)) {
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
        return pickBy(this.$attributes, (value, key) => {
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
        return Http_Request.make(method, url, config);
    }
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Http/Model/index.js

/* harmony default export */ var Http_Model = (Model_Model);

// CONCATENATED MODULE: ./src/Models/Page.js

class Page_Page extends Http_Model {
  endpoint() {
    return 'page';
  }

}
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Types/Donation.vue?vue&type=template&id=4acf2962&
var Donationvue_type_template_id_4acf2962_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('select-donation-fieldset',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page}}),_c('contact-info-fieldset',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page,"address":""}}),_c('hr'),(_vm.shouldShowEmployment)?[_c('employment-info-fieldset',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page}}),_c('hr')]:_vm._e(),_c('payment-gateways',{attrs:{"page-type":this,"form":_vm.form,"errors":_vm.errors,"page":_vm.page}}),(_vm.page.options.add_comment)?_c('textarea-field',{directives:[{name:"autogrow",rawName:"v-autogrow"}],attrs:{"id":"comment","label":_vm.commentMessage},model:{value:(_vm.form.comment),callback:function ($$v) {_vm.$set(_vm.form, "comment", $$v)},expression:"form.comment"}}):_vm._e(),_c('btn-activity',{attrs:{"type":"submit","size":"lg","activity":_vm.submitting,"label":_vm.buttonLabel || _vm.page.site.config.giveworks.button.donate,"block":""}}),(_vm.page.options.add_optin)?_c('div',[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.optin),expression:"form.optin"}],staticClass:"custom-control-input",attrs:{"type":"checkbox","checked":""},domProps:{"checked":Array.isArray(_vm.form.optin)?_vm._i(_vm.form.optin,null)>-1:(_vm.form.optin)},on:{"change":function($event){var $$a=_vm.form.optin,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.form, "optin", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.form, "optin", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.form, "optin", $$c)}}}}),_c('span',{staticClass:"custom-control-indicator"}),_c('small',{staticClass:"custom-control-label text-muted form-text",domProps:{"innerHTML":_vm._s(_vm.optinMessage)}})])]):_vm._e(),(_vm.page.site.disclaimer)?_c('div',{staticClass:"mt-3"},[_c('small',{staticClass:"text-muted",domProps:{"innerHTML":_vm._s(_vm.page.site.disclaimer)}})]):_vm._e()],2)}
var Donationvue_type_template_id_4acf2962_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Types/Donation.vue?vue&type=template&id=4acf2962&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var core_js_promise = __webpack_require__("795b");
var promise_default = /*#__PURE__*/__webpack_require__.n(core_js_promise);

// CONCATENATED MODULE: ./src/Mixins/FormEvents.js

const EVENTS = ['submit', 'redirect', 'submit-enable', 'submit-disable', 'submit-show', 'submit-hide'];
/* harmony default export */ var FormEvents = ({
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
});
// CONCATENATED MODULE: ./src/Mixins/PageType.js




/* harmony default export */ var PageType = ({
  props: {
    page: {
      type: Object,
      required: true
    },
    redirect: [Boolean, String]
  },
  mixins: [FormEvents],
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

    handleRedirect(url) {
      setTimeout(() => {
        window.location = url || this.redirect || this.page.next_page.url;
      });
    },

    submit(success, failed) {
      if (this.$el.querySelector(':focus')) {
        this.$el.querySelector(':focus').blur();
      }

      return new promise_default.a((resolve, reject) => {
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
      this.handleRedirect();
    },

    onSubmitError(e) {
      throw e;
    }

  },

  data() {
    return {
      form: {
        recurring: this.page.site.recurring ? this.page.options.recurring_only ? 1 : 0 : 0
      },
      errors: {},
      submitting: false,
      model: new Page_Page({
        id: this.page.id
      })
    };
  }

});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/PaymentGateways.vue?vue&type=template&id=3c6014d4&
var PaymentGatewaysvue_type_template_id_3c6014d4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"payment-gateway-buttons"},_vm._l((_vm.buttons),function(button,i){return _c('btn',{key:i,class:{'btn-success': button.active, 'btn-secondary': !button.active},attrs:{"type":"button"},on:{"click":function($event){return _vm.activate(button)}}},[_c('icon',{class:{'mt-2 mb-1': !button.label},attrs:{"icon":typeof button.icon === 'string' ? ['far', button.icon]: button.icon,"size":button.size || 'lg'}}),(button.label)?_c('div',{staticClass:"small",domProps:{"innerHTML":_vm._s(button.label)}}):_vm._e()],1)}),1),(!_vm.buttons || !_vm.buttons.length)?_c('alert',{staticClass:"d-flex align-items-center",attrs:{"variant":"danger"}},[_c('icon',{staticClass:"mr-2",attrs:{"icon":"exclamation-triangle","size":"2x"}}),_c('div',[_vm._v("There are not payment gateways configured for this site!")])],1):_c('div',_vm._l((_vm.buttons),function(button){return (button.active)?_c('div',{key:button.component},[_c(button.component,{tag:"component",attrs:{"page-type":_vm.pageType,"form":_vm.form,"page":_vm.page,"errors":_vm.errors,"gateway":button.gateway}})],1):_vm._e()}),0)],1)}
var PaymentGatewaysvue_type_template_id_3c6014d4_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Gateways/PaymentGateways.vue?vue&type=template&id=3c6014d4&

// EXTERNAL MODULE: ./src/Components/Gateways/Api.js
var Api = __webpack_require__("2953");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Script/index.js + 1 modules
var Script = __webpack_require__("cfc3");

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
    Object(Script["a" /* default */])('https://js.stripe.com/v3/').then(success, error);
  }

}
// EXTERNAL MODULE: ./src/Components/Gateways/PayPal/PayPal.js
var PayPal = __webpack_require__("0809");

// CONCATENATED MODULE: ./src/Config/App.js
/* harmony default export */ var App = ({
  debug: true
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/Btn/Btn.vue?vue&type=template&id=a34137ac&
var Btnvue_type_template_id_a34137ac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.to)?_c('router-link',{class:_vm.classes,attrs:{"to":_vm.to,"disabled":_vm.disabled,"role":"button"},on:{"click":_vm.onClick}},[_vm._t("default")],2):(_vm.href)?_c('a',{class:_vm.classes,attrs:{"href":_vm.href,"disabled":_vm.disabled,"role":"button"},on:{"click":_vm.onClick}},[_vm._t("default")],2):(_vm.label)?_c('label',{class:_vm.classes,attrs:{"disabled":_vm.disabled,"role":"button"},on:{"click":_vm.onClick}},[_vm._t("default")],2):_c('button',{class:_vm.classes,attrs:{"type":_vm.type,"disabled":_vm.disabled},on:{"click":_vm.onClick}},[_vm._t("default")],2)}
var Btnvue_type_template_id_a34137ac_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Btn/Btn.vue?vue&type=template&id=a34137ac&

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Prefix/Prefix.js


function Prefix_prefix(subject, prefix, delimeter = '-') {
    const prefixer = (value, key) => {
        const string = (key || value)
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

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/Variant/Variant.js



/* harmony default export */ var Variant = ({

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
            return kebabCase(this.$options.name);
        },

        variantClass() {
            return Prefix_prefix(this.variant, this.variantClassPrefix);
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/Variant/index.js

/* harmony default export */ var Mixins_Variant = (Variant);

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/Sizeable/Sizeable.js



/* harmony default export */ var Sizeable = ({

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
            return kebabCase(this.$options.name);
        },

        sizeableClass() {
            return Prefix_prefix(this.size, this.sizeableClassPrefix);
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/Sizeable/index.js

/* harmony default export */ var Mixins_Sizeable = (Sizeable);

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/Colorable/Colorable.js
/* harmony default export */ var Colorable = ({

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

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/Colorable/index.js

/* harmony default export */ var Mixins_Colorable = (Colorable);

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/MergeClasses/MergeClasses.js


/* harmony default export */ var MergeClasses = ({

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

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/MergeClasses/index.js

/* harmony default export */ var Mixins_MergeClasses = (MergeClasses);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/Btn/Btn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Btnvue_type_script_lang_js_ = ({

    name: 'Btn',

    mixins: [
        Mixins_Variant,
        Mixins_Sizeable,
        Mixins_Colorable,
        Mixins_MergeClasses
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

    computed: {

        variantClassPrefix() {
            return kebabCase(this.$options.name) + (this.outline ? '-outline' : '');
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

    },

    methods: {

        onClick(event) {
            this.$emit('click', event);
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Btn/Btn.vue?vue&type=script&lang=js&
 /* harmony default export */ var Btn_Btnvue_type_script_lang_js_ = (Btnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/Btn/Btn.vue?vue&type=style&index=0&lang=scss&
var Btnvue_type_style_index_0_lang_scss_ = __webpack_require__("3f1c");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Btn/Btn.vue






/* normalize component */

var component = normalizeComponent(
  Btn_Btnvue_type_script_lang_js_,
  Btnvue_type_template_id_a34137ac_render,
  Btnvue_type_template_id_a34137ac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Btn = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Btn/index.js

/* harmony default export */ var Components_Btn = (Btn);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/Alert/Alert.vue?vue&type=template&id=1c8b270c&
var Alertvue_type_template_id_1c8b270c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alert",class:_vm.mergeClasses(_vm.variantClass, {show: _vm.isVisible, fade: _vm.fade}),attrs:{"role":"alert"}},[(_vm.title || _vm.heading)?_c('alert-heading',[_vm._v("\n        "+_vm._s(_vm.title || _vm.heading)+"\n    ")]):_vm._e(),_vm._t("default"),(_vm.dismissible)?_c('alert-close',{on:{"click":function($event){return _vm.dismiss()}}}):_vm._e(),(typeof _vm.show === 'number')?_c('progress-bar',{staticClass:"my-3",attrs:{"variant":_vm.variant,"height":5,"value":_vm.dismissCount,"max":_vm.show}}):_vm._e()],2)}
var Alertvue_type_template_id_1c8b270c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Alert/Alert.vue?vue&type=template&id=1c8b270c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/Alert/AlertClose.vue?vue&type=template&id=09567316&
var AlertClosevue_type_template_id_09567316_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"alert","aria-label":"Close"},on:{"click":_vm.onClick}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("\n        ×\n    ")])])}
var AlertClosevue_type_template_id_09567316_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Alert/AlertClose.vue?vue&type=template&id=09567316&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/Alert/AlertClose.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var AlertClosevue_type_script_lang_js_ = ({

    name: 'AlertClose',

    methods: {

        onClick(event) {
            this.$emit('click', event);
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Alert/AlertClose.vue?vue&type=script&lang=js&
 /* harmony default export */ var Alert_AlertClosevue_type_script_lang_js_ = (AlertClosevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Alert/AlertClose.vue





/* normalize component */

var AlertClose_component = normalizeComponent(
  Alert_AlertClosevue_type_script_lang_js_,
  AlertClosevue_type_template_id_09567316_render,
  AlertClosevue_type_template_id_09567316_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AlertClose = (AlertClose_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/Alert/AlertHeading.vue?vue&type=template&id=78ba96e0&
var AlertHeadingvue_type_template_id_78ba96e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h4',{staticClass:"alert-heading"},[_vm._t("default")],2)}
var AlertHeadingvue_type_template_id_78ba96e0_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Alert/AlertHeading.vue?vue&type=template&id=78ba96e0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/Alert/AlertHeading.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var AlertHeadingvue_type_script_lang_js_ = ({

    name: 'AlertHeading'

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Alert/AlertHeading.vue?vue&type=script&lang=js&
 /* harmony default export */ var Alert_AlertHeadingvue_type_script_lang_js_ = (AlertHeadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Alert/AlertHeading.vue





/* normalize component */

var AlertHeading_component = normalizeComponent(
  Alert_AlertHeadingvue_type_script_lang_js_,
  AlertHeadingvue_type_template_id_78ba96e0_render,
  AlertHeadingvue_type_template_id_78ba96e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AlertHeading = (AlertHeading_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ProgressBar/ProgressBar.vue?vue&type=template&id=26febd84&
var ProgressBarvue_type_template_id_26febd84_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress",style:({'height': _vm.formattedHeight})},[_c('div',{staticClass:"progress-bar",class:_vm.mergeClasses(_vm.progressClasses, _vm.variantClass),style:(_vm.styles),attrs:{"role":"progressbar","aria-valuenow":_vm.offsetValue,"aria-valuemin":_vm.min,"aria-valuemax":_vm.max}},[(!!_vm.label)?_c('span',[(_vm.label !== true)?[_vm._v("\n                "+_vm._s(_vm.label)+"\n            ")]:_vm._e(),_vm._v(" "+_vm._s(_vm.offsetValue)+"%\n        ")],2):_c('span',[_vm._t("default")],2)])])}
var ProgressBarvue_type_template_id_26febd84_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ProgressBar/ProgressBar.vue?vue&type=template&id=26febd84&

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Unit/Unit.js
/* harmony default export */ var Unit = (function(height) {
    return isFinite(height) ? height + 'px' : height;
});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Unit/index.js

/* harmony default export */ var Helpers_Unit = (Unit);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ProgressBar/ProgressBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var ProgressBarvue_type_script_lang_js_ = ({

    name: 'ProgressBar',

    mixins: [
        Mixins_Variant,
        Mixins_MergeClasses
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
            return this.height ? Helpers_Unit(this.height) : null;
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

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ProgressBar/ProgressBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var ProgressBar_ProgressBarvue_type_script_lang_js_ = (ProgressBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ProgressBar/ProgressBar.vue





/* normalize component */

var ProgressBar_component = normalizeComponent(
  ProgressBar_ProgressBarvue_type_script_lang_js_,
  ProgressBarvue_type_template_id_26febd84_render,
  ProgressBarvue_type_template_id_26febd84_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProgressBar = (ProgressBar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ProgressBar/index.js

/* harmony default export */ var Components_ProgressBar = (ProgressBar);

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Transition/Transition.js
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

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Transition/index.js

/* harmony default export */ var Transition = (transition);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/Alert/Alert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var Alertvue_type_script_lang_js_ = ({

    name: 'Alert',

    components: {
        AlertClose: AlertClose,
        AlertHeading: AlertHeading,
        ProgressBar: Components_ProgressBar
    },

    mixins: [
        Mixins_Variant,
        Mixins_MergeClasses
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

    data() {
        return {
            dismissCount: this.show,
            isVisible: this.show
        };
    },

    mounted() {
        if(typeof this.show === 'number') {
            const el = this.$el.querySelector('.progress-bar');

            this.$emit('dismiss-countdown', this.dismissCount = this.show);

            const interval = setInterval(() => {
                this.$emit('dismiss-countdown', this.dismissCount -= 1);

                if(!this.dismissCount) {
                    clearInterval(interval);
                    Transition(el).then(delay => this.dismiss());
                }
            }, 1000);
        }
    },

    methods: {

        dismiss() {
            this.isVisible = false;

            Transition(this.$el).then(delay => {
                this.$emit('dismissed');
            });
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Alert/Alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var Alert_Alertvue_type_script_lang_js_ = (Alertvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Alert/Alert.vue





/* normalize component */

var Alert_component = normalizeComponent(
  Alert_Alertvue_type_script_lang_js_,
  Alertvue_type_template_id_1c8b270c_render,
  Alertvue_type_template_id_1c8b270c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Alert = (Alert_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/Alert/AlertLink.vue?vue&type=template&id=31ebd2b6&
var AlertLinkvue_type_template_id_31ebd2b6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"alert-link"},[_vm._t("default")],2)}
var AlertLinkvue_type_template_id_31ebd2b6_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Alert/AlertLink.vue?vue&type=template&id=31ebd2b6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/Alert/AlertLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var AlertLinkvue_type_script_lang_js_ = ({

    name: 'AlertLink'

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Alert/AlertLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var Alert_AlertLinkvue_type_script_lang_js_ = (AlertLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Alert/AlertLink.vue





/* normalize component */

var AlertLink_component = normalizeComponent(
  Alert_AlertLinkvue_type_script_lang_js_,
  AlertLinkvue_type_template_id_31ebd2b6_render,
  AlertLinkvue_type_template_id_31ebd2b6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AlertLink = (AlertLink_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/Alert/index.js







/* harmony default export */ var Components_Alert = (Alert);

// CONCATENATED MODULE: ./src/Mixins/FormComponent.js

/* harmony default export */ var FormComponent = ({
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
});
// EXTERNAL MODULE: ./node_modules/@fortawesome/vue-fontawesome/index.es.js
var index_es = __webpack_require__("ad3d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/Stripe/StripeCreditCard.vue?vue&type=template&id=1b129096&
var StripeCreditCardvue_type_template_id_1b129096_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group",class:{'was-validated': !!_vm.error || !!_vm.errors.token}},[(!_vm.loaded)?_c('div',{staticClass:"row my-5 py-1"},[_c('div',{staticClass:"col-xs-12"},[_c('activity-indicator',{attrs:{"size":"sm","center":true}})],1)]):_c('label',{staticClass:"d-block mt-3",class:{'has-activity': _vm.activity}},[_c('div',{staticClass:"stripe-field"},[_c('div',{staticClass:"form-control",class:{'is-invalid': !!_vm.error || !!_vm.errors.token}},[_c('div',{ref:"input",staticClass:"stripe-field-input"})]),(_vm.error || _vm.errors.token)?_c('div',{staticClass:"invalid-feedback",domProps:{"innerHTML":_vm._s(_vm.error || _vm.errors.token.join('<br>'))}}):_vm._e()]),_c('div',{staticClass:"stripe-field-activity"},[_c('activity-indicator',{attrs:{"size":"xs"}})],1)])])}
var StripeCreditCardvue_type_template_id_1b129096_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Gateways/Stripe/StripeCreditCard.vue?vue&type=template&id=1b129096&

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Wait/Wait.js


const CALLBACKS = {};

function id(callback) {
    return findKey_findIndex(CALLBACKS, compare => {
        return callback.toString() === compare.toString();
    });
}

function restart(callback, milliseconds) {
    Wait_stop(id(callback));
    Wait_start(callback, milliseconds);
}

function Wait_stop(id) {
    clearTimeout(id);
    delete CALLBACKS[id];
}

function Wait_start(callback, milliseconds) {
    CALLBACKS[setTimeout(callback, milliseconds)] = callback;
}

function wait(milliseconds, callback) {
    return new Promise((resolve, reject) => {
        function resolver(resolver, response) {
            return resolver(response);
        };

        restart(wrap(callback, callback => {
            return callback(wrap(resolve, resolver), wrap(reject, resolver));
        }), milliseconds);
    });
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Wait/index.js

/* harmony default export */ var Wait = (wait);

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Elapsed/Elapsed.js


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
        };

        callback(wrap(resolve, resolver), wrap(reject, resolver));
    });

    return promise.finally(stop, stop);
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Elapsed/index.js

/* harmony default export */ var Elapsed = (elapsed);

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faCcJcb.js
var faCcJcb = __webpack_require__("ee4a");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faCcVisa.js
var faCcVisa = __webpack_require__("cada");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faCcAmex.js
var faCcAmex = __webpack_require__("ac67");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faCcDiscover.js
var faCcDiscover = __webpack_require__("e73a");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faCcMastercard.js
var faCcMastercard = __webpack_require__("8953");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faCcDinersClub.js
var faCcDinersClub = __webpack_require__("9c69");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faExclamationTriangle.js
var faExclamationTriangle = __webpack_require__("8560");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faCreditCard.js
var faCreditCard = __webpack_require__("a1de");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/faCreditCard.js
var free_regular_svg_icons_faCreditCard = __webpack_require__("263e");

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var fontawesome_svg_core_index_es = __webpack_require__("ecee");

// CONCATENATED MODULE: ./node_modules/vue-credit-card-field/src/icons.js
// Load the icons










// Load the font awesome library


fontawesome_svg_core_index_es["c" /* library */].add(
    faCcJcb["faCcJcb"],
    faCcVisa["faCcVisa"],
    faCcAmex["faCcAmex"],
    faCcDiscover["faCcDiscover"],
    faCcMastercard["faCcMastercard"],
    faCcDinersClub["faCcDinersClub"],
    free_regular_svg_icons_faCreditCard["faCreditCard"],
    faCreditCard["faCreditCard"],
    faExclamationTriangle["faExclamationTriangle"]
);



// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faPaypal.js
var faPaypal = __webpack_require__("eb94");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faApplePay.js
var faApplePay = __webpack_require__("886b");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/faCheckCircle.js
var faCheckCircle = __webpack_require__("1698");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faGoogleWallet.js
var faGoogleWallet = __webpack_require__("859b");

// CONCATENATED MODULE: ./src/Config/Icons.js
// Load the icons




 // Load the font awesome library


fontawesome_svg_core_index_es["c" /* library */].add(faPaypal["faPaypal"], faApplePay["faApplePay"], faCheckCircle["faCheckCircle"], faGoogleWallet["faGoogleWallet"]);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=template&id=c8495a50&
var ActivityIndicatorvue_type_template_id_c8495a50_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.center)?_c('div',{staticClass:"center-wrapper",class:{'position-relative': _vm.relative, 'position-fixed': _vm.fixed},style:(_vm.style)},[_c('div',{staticClass:"center-content d-flex flex-column align-items-center"},[_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}}),(_vm.label)?_c('div',{staticClass:"activity-indicator-label",domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()],1)]):_c('div',{staticClass:"d-flex flex-column justify-content-center align-items-center",style:(_vm.style)},[_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}}),(_vm.label)?_c('div',{staticClass:"activity-indicator-label",domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()],1)}
var ActivityIndicatorvue_type_template_id_c8495a50_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=template&id=c8495a50&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=template&id=004e82ac&
var BaseTypevue_type_template_id_004e82ac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"activity-indicator",class:_vm.classes},_vm._l((_vm.nodes),function(i){return _c('div',{key:i})}),0)}
var BaseTypevue_type_template_id_004e82ac_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=template&id=004e82ac&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var BaseTypevue_type_script_lang_js_ = ({

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
            const name = kebabCase(this.$options.name);

            classes[name] = !!name;
            classes[this.prefix + this.size.replace(this.prefix, '')] = !!this.size;

            return classes;
        }
    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_BaseTypevue_type_script_lang_js_ = (BaseTypevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue





/* normalize component */

var BaseType_component = normalizeComponent(
  Types_BaseTypevue_type_script_lang_js_,
  BaseTypevue_type_template_id_004e82ac_render,
  BaseTypevue_type_template_id_004e82ac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BaseType = (BaseType_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Dots.vue?vue&type=script&lang=js&



/* harmony default export */ var Dotsvue_type_script_lang_js_ = ({

    name: 'ActivityIndicatorDots',

    extends: BaseType
});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Dots.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_Dotsvue_type_script_lang_js_ = (Dotsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Dots.vue?vue&type=style&index=0&lang=scss&
var Dotsvue_type_style_index_0_lang_scss_ = __webpack_require__("e75e");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Dots.vue
var Dots_render, Dots_staticRenderFns





/* normalize component */

var Dots_component = normalizeComponent(
  Types_Dotsvue_type_script_lang_js_,
  Dots_render,
  Dots_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Dots = (Dots_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Spinner.vue?vue&type=script&lang=js&




/* harmony default export */ var Spinnervue_type_script_lang_js_ = ({

    name: 'ActivityIndicatorSpinner',

    extends: BaseType,

    props: extend({}, BaseType.props, {
        nodes: {
            type: Number,
            default: 12
        }
    })
});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_Spinnervue_type_script_lang_js_ = (Spinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Spinner.vue?vue&type=style&index=0&lang=scss&
var Spinnervue_type_style_index_0_lang_scss_ = __webpack_require__("9d01");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Spinner.vue
var Spinner_render, Spinner_staticRenderFns





/* normalize component */

var Spinner_component = normalizeComponent(
  Types_Spinnervue_type_script_lang_js_,
  Spinner_render,
  Spinner_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Spinner = (Spinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var ActivityIndicatorvue_type_script_lang_js_ = ({

    name: 'ActivityIndicator',

    components: {
        ActivityIndicatorDots: Dots,
        ActivityIndicatorSpinner: Spinner
    },

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

    computed: {

        style() {
            return {
                width: Helpers_Unit(this.width),
                maxWidth: Helpers_Unit(this.maxWidth),
                minWidth: Helpers_Unit(this.minWidth),
                height: Helpers_Unit(this.height),
                maxHeight: Helpers_Unit(this.maxHeight),
                minHeight: Helpers_Unit(this.minHeight)
            };
        },

        component() {
            return kebabCase(this.prefix + this.type.replace(this.prefix, ''));
        }
    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=script&lang=js&
 /* harmony default export */ var ActivityIndicator_ActivityIndicatorvue_type_script_lang_js_ = (ActivityIndicatorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=style&index=0&lang=scss&
var ActivityIndicatorvue_type_style_index_0_lang_scss_ = __webpack_require__("00c4");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue






/* normalize component */

var ActivityIndicator_component = normalizeComponent(
  ActivityIndicator_ActivityIndicatorvue_type_script_lang_js_,
  ActivityIndicatorvue_type_template_id_c8495a50_render,
  ActivityIndicatorvue_type_template_id_c8495a50_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ActivityIndicator = (ActivityIndicator_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/index.js

/* harmony default export */ var Components_ActivityIndicator = (ActivityIndicator);

// CONCATENATED MODULE: ./src/Mixins/PaymentGateway.js





/* harmony default export */ var PaymentGateway = ({
  components: {
    Btn: Components_Btn,
    Icon: index_es["a" /* FontAwesomeIcon */],
    Alert: Components_Alert,
    ActivityIndicator: Components_ActivityIndicator
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
//
//
//




/* harmony default export */ var StripeCreditCardvue_type_script_lang_js_ = ({
  name: 'stripe-credit-card',
  mixins: [PaymentGateway],

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
          Elapsed(500, (resolve, reject) => {
            gateway.createToken(this.$card, {
              currency: 'usd'
            }).then(result => {
              Wait(this.activity ? 750 : 0, (resolve, reject) => {
                if (result.error) {
                  this.error = result.error.message;
                  reject(result.error.message);
                } else {
                  this.form.token = result.token.id;
                  this.pageType.enableSubmitButton();
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
      error: null,
      loaded: false,
      activity: false
    };
  }

});
// CONCATENATED MODULE: ./src/Components/Gateways/Stripe/StripeCreditCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Stripe_StripeCreditCardvue_type_script_lang_js_ = (StripeCreditCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Gateways/Stripe/StripeCreditCard.vue





/* normalize component */

var StripeCreditCard_component = normalizeComponent(
  Stripe_StripeCreditCardvue_type_script_lang_js_,
  StripeCreditCardvue_type_template_id_1b129096_render,
  StripeCreditCardvue_type_template_id_1b129096_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StripeCreditCard = (StripeCreditCard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/PayPal/PayPalPaymentButton.vue?vue&type=template&id=396dcf2e&
var PayPalPaymentButtonvue_type_template_id_396dcf2e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.loaded || _vm.submitting)?_c('div',{staticClass:"row my-5 py-1"},[_c('div',{staticClass:"col-xs-12"},[_c('activity-indicator',{attrs:{"size":"sm","center":true}})],1)]):_c('div',[(_vm.error)?_c('alert',{staticClass:"d-flex align-items-center",attrs:{"variant":"danger"}},[_c('icon',{staticClass:"mr-2",attrs:{"icon":"exclamation-triangle","size":"2x"}}),_c('div',{domProps:{"innerHTML":_vm._s(_vm.error)}})],1):(_vm.form.payerId && _vm.form.paymentId)?_c('alert',{staticClass:"d-flex align-items-center",attrs:{"variant":"success"}},[_c('icon',{staticClass:"mr-2",attrs:{"icon":['far', 'check-circle'],"size":"2x"}}),_c('div',[_vm._v("Your PayPal payment information has been collected and is ready to be processed. "),_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.removePaymentInfo($event)}}},[_vm._v("Cancel Payment")])])],1):_vm._e()],1),_c('div',{staticClass:"paypal-payment-button mt-2 mb-4",class:{'disabled': _vm.disabled, 'd-none': _vm.submitting}})])}
var PayPalPaymentButtonvue_type_template_id_396dcf2e_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Gateways/PayPal/PayPalPaymentButton.vue?vue&type=template&id=396dcf2e&

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

});
// CONCATENATED MODULE: ./src/Components/Gateways/PayPal/PayPalPaymentButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var PayPal_PayPalPaymentButtonvue_type_script_lang_js_ = (PayPalPaymentButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Gateways/PayPal/PayPalPaymentButton.vue?vue&type=style&index=0&lang=css&
var PayPalPaymentButtonvue_type_style_index_0_lang_css_ = __webpack_require__("ed48");

// CONCATENATED MODULE: ./src/Components/Gateways/PayPal/PayPalPaymentButton.vue






/* normalize component */

var PayPalPaymentButton_component = normalizeComponent(
  PayPal_PayPalPaymentButtonvue_type_script_lang_js_,
  PayPalPaymentButtonvue_type_template_id_396dcf2e_render,
  PayPalPaymentButtonvue_type_template_id_396dcf2e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PayPalPaymentButton = (PayPalPaymentButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/Stripe/StripePaymentButton.vue?vue&type=template&id=3d51c5fd&
var StripePaymentButtonvue_type_template_id_3d51c5fd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.error)?_c('div',[(_vm.card)?_c('div',{staticClass:"my-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-2"},[_c('div',{staticClass:"mr-6"},[(_vm.card.brand === 'Visa')?_c('icon',{attrs:{"icon":['fab', 'cc-visa'],"scale":"3.5"}}):(_vm.card.brand === 'MasterCard')?_c('icon',{attrs:{"icon":['fab', 'cc-mastercard'],"scale":"3.5"}}):(_vm.card.brand === 'American Express')?_c('icon',{attrs:{"icon":['fab', 'cc-amex'],"scale":"3.5"}}):(_vm.card.brand === 'Discover')?_c('icon',{attrs:{"icon":['fab', 'cc-discover'],"scale":"3.5"}}):(_vm.card.brand === 'JCB')?_c('icon',{attrs:{"icon":['fab', 'cc-jcb'],"scale":"3.5"}}):(_vm.card.brand === 'Diners Club')?_c('icon',{attrs:{"icon":['fab', 'cc-diners-club'],"scale":"3.5"}}):_c('icon',{attrs:{"icon":['far', 'credit-card'],"scale":"3.5"}})],1)]),_c('div',{staticClass:"col-xs-10"},[_c('div',{staticClass:"pl-2"},[_c('btn',{staticClass:"float-right",attrs:{"type":"button","variant":"warning","disabled":_vm.submitting},on:{"click":function($event){return _vm.changeCard($event)}}},[_vm._v("Change Card")]),(_vm.card.name)?_c('span',[_vm._v(_vm._s(_vm.card.name)),_c('br')]):_vm._e(),_c('small',[_vm._v("****"+_vm._s(_vm.card.last4)+" "),_c('span',{staticClass:"pl-2"},[_vm._v(_vm._s(_vm.card.exp_month)+"/"+_vm._s(_vm.card.exp_year))])])],1)])])]):_vm._e(),(!_vm.loaded || _vm.submitting)?_c('div',{staticClass:"row my-5 py-1"},[_c('div',{staticClass:"col-xs-12"},[_c('activity-indicator',{attrs:{"size":"sm","center":true}})],1)]):_c('div',[_c('div',{staticClass:"stripe-payment-button mt-2 mb-4"})])]):_c('alert',{staticClass:"d-flex align-items-center",attrs:{"variant":"danger"}},[_c('icon',{staticClass:"mr-3",attrs:{"icon":"exclamation-triangle","size":"2x"}}),_c('div',{domProps:{"innerHTML":_vm._s(_vm.error.message)}})],1)],1)}
var StripePaymentButtonvue_type_template_id_3d51c5fd_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Gateways/Stripe/StripePaymentButton.vue?vue&type=template&id=3d51c5fd&

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
//
//
//


/* harmony default export */ var StripePaymentButtonvue_type_script_lang_js_ = ({
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

  data() {
    return {
      card: false,
      error: false,
      loaded: false,
      submitting: false,
      changingCard: false
    };
  }

});
// CONCATENATED MODULE: ./src/Components/Gateways/Stripe/StripePaymentButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var Stripe_StripePaymentButtonvue_type_script_lang_js_ = (StripePaymentButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Gateways/Stripe/StripePaymentButton.vue





/* normalize component */

var StripePaymentButton_component = normalizeComponent(
  Stripe_StripePaymentButtonvue_type_script_lang_js_,
  StripePaymentButtonvue_type_template_id_3d51c5fd_render,
  StripePaymentButtonvue_type_template_id_3d51c5fd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StripePaymentButton = (StripePaymentButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Gateways/AuthorizeNet/AuthorizeNetCreditCard.vue?vue&type=template&id=136e7ba8&
var AuthorizeNetCreditCardvue_type_template_id_136e7ba8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.loaded)?_c('div',{staticClass:"row my-5 py-1"},[_c('div',{staticClass:"col-xs-12"},[_c('activity-indicator',{attrs:{"size":"sm","center":true}})],1)]):_c('div',{staticClass:"form-group"},[(!_vm.gateway.options.login_id || !_vm.gateway.options.public_key)?_c('alert',{staticClass:"d-flex align-items-center",attrs:{"variant":"danger"}},[_c('icon',{staticClass:"mr-2",attrs:{"icon":"exclamation-triangle","size":"2x"}}),_c('h6',{staticClass:"font-weight-light my-0"},[_vm._v("\n            This account has NOT been configured for the new Giveworks Forms."),_c('br'),_c('b',[_vm._v("Reason:")]),(!_vm.gateway.options.login_id)?[_vm._v("The "),_c('em',[_vm._v("login_id")]),_vm._v(" is missing.")]:_vm._e(),(!_vm.gateway.options.public_key)?[_vm._v("The "),_c('em',[_vm._v("public_key")]),_vm._v(" is missing.")]:_vm._e()],2)],1):_c('credit-card-field',{attrs:{"activity":_vm.activity,"error":_vm.error || _vm.errors.token},on:{"change":_vm.onChange,"complete":_vm.onComplete}})],1)}
var AuthorizeNetCreditCardvue_type_template_id_136e7ba8_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Gateways/AuthorizeNet/AuthorizeNetCreditCard.vue?vue&type=template&id=136e7ba8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-credit-card-field/src/CreditCardField.vue?vue&type=template&id=62478938&
var CreditCardFieldvue_type_template_id_62478938_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{staticClass:"credit-card-field-wrapper",on:{"click":_vm.onClick}},[_vm._t("control",[_c('div',{staticClass:"credit-card-field",class:_vm.mergeClasses(_vm.controlClasses, _vm.variantClass, _vm.classes)},[_c('div',{staticClass:"credit-card-field-icon-wrapper"},[_c('div',{staticClass:"credit-card-field-icon-card"},[_c('div',{staticClass:"credit-card-field-icon-front"},[_c('icon',{staticClass:"credit-card-field-icon",attrs:{"icon":['fab', 'cc-jcb'],"data-brand":"jcb"}}),_c('icon',{staticClass:"credit-card-field-icon",attrs:{"icon":['fab', 'cc-visa'],"data-brand":"visa"}}),_c('icon',{staticClass:"credit-card-field-icon",attrs:{"icon":['fab', 'cc-amex'],"data-brand":"amex"}}),_c('icon',{staticClass:"credit-card-field-icon",attrs:{"icon":['fab', 'cc-discover'],"data-brand":"discover"}}),_c('icon',{staticClass:"credit-card-field-icon",attrs:{"icon":['fab', 'cc-mastercard'],"data-brand":"mastercard"}}),_c('icon',{staticClass:"credit-card-field-icon",attrs:{"icon":['fab', 'cc-diners-club'],"data-brand":"dinersclub"}}),_c('icon',{staticClass:"credit-card-field-icon",attrs:{"icon":['far', 'credit-card'],"data-brand":"unknown","width":"20","height":"18"}})],1),_c('div',{staticClass:"credit-card-field-icon-back"},[_c('icon',{staticClass:"credit-card-field-icon",attrs:{"icon":['fas', 'credit-card'],"width":"23.33","height":"20"}})],1)])]),_c('div',{staticClass:"credit-card-field-fields"},[_c('input',{directives:[{name:"focus",rawName:"v-focus.transform",modifiers:{"transform":true}},{name:"validate",rawName:"v-validate:number",value:(_vm.validateNumber),expression:"validateNumber",arg:"number"},{name:"model",rawName:"v-model",value:(_vm.card.number),expression:"card.number"}],staticClass:"credit-card-field-field credit-card-field-number",class:_vm.mergeClasses({'is-empty': !_vm.card.number, 'is-invalid': _vm.validated.number === false}),attrs:{"max":"19","type":"text","placeholder":"Card number"},domProps:{"value":(_vm.card.number)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.card, "number", $event.target.value)}}}),_c('div',{staticClass:"credit-card-field-security-fields"},[_c('input',{directives:[{name:"focus",rawName:"v-focus"},{name:"validate",rawName:"v-validate:expiration",value:(_vm.validateExpiration),expression:"validateExpiration",arg:"expiration"},{name:"model",rawName:"v-model",value:(_vm.card.expiration),expression:"card.expiration"}],staticClass:"credit-card-field-field credit-card-field-expiration",class:_vm.mergeClasses({'is-empty': !_vm.card.expiration, 'is-invalid': _vm.validated.expiration === false}),attrs:{"type":"text","placeholder":"MM / YY","maxlength":"7"},domProps:{"value":(_vm.card.expiration)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.card, "expiration", $event.target.value)}}}),_c('input',{directives:[{name:"focus",rawName:"v-focus",value:(_vm.validateCvc),expression:"validateCvc"},{name:"validate",rawName:"v-validate:cvc",value:(_vm.validateCvc),expression:"validateCvc",arg:"cvc"},{name:"model",rawName:"v-model",value:(_vm.card.cvc),expression:"card.cvc"}],staticClass:"credit-card-field-field credit-card-field-cvc",class:_vm.mergeClasses({'is-empty': !_vm.card.cvc, 'is-invalid': _vm.validated.cvc === false}),attrs:{"type":"text","placeholder":"CVC","maxlength":"4","autocomplete":"off"},domProps:{"value":(_vm.card.cvc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.card, "cvc", $event.target.value)}}}),_c('input',{directives:[{name:"focus",rawName:"v-focus",value:(_vm.validatePostalCode),expression:"validatePostalCode"},{name:"validate",rawName:"v-validate:postalCode",value:(_vm.validatePostalCode),expression:"validatePostalCode",arg:"postalCode"},{name:"model",rawName:"v-model",value:(_vm.card.postalCode),expression:"card.postalCode"}],staticClass:"credit-card-field-field credit-card-field-postal",class:_vm.mergeClasses({'is-empty': !_vm.card.postalCode, 'is-invalid': _vm.validated.postalCode === false}),attrs:{"max":"5","type":"text","placeholder":"Zip","maxlength":"5"},domProps:{"value":(_vm.card.postalCode)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.card, "postalCode", $event.target.value)}}})]),_c('div',{staticClass:"credit-card-field-placeholder-mask"},[_vm._v("Number")]),_c('div',{staticClass:"credit-card-field-number-mask",domProps:{"innerHTML":_vm._s(_vm.card.number)}})])])]),_vm._t("activity-indicator",[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activity),expression:"activity"}],staticClass:"credit-card-field-activity"},[_c('activity-indicator',{attrs:{"size":"sm","type":"dots","center":""}})],1)]),_vm._t("default"),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()]),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)}
var CreditCardFieldvue_type_template_id_62478938_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-credit-card-field/src/CreditCardField.vue?vue&type=template&id=62478938&

// EXTERNAL MODULE: ./node_modules/payment/lib/index.js
var lib = __webpack_require__("540a");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/HelpText/HelpText.vue?vue&type=template&id=a1476532&
var HelpTextvue_type_template_id_a1476532_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('small',{staticClass:"form-text",class:_vm.classes},[_vm._t("default")],2)}
var HelpTextvue_type_template_id_a1476532_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/HelpText/HelpText.vue?vue&type=template&id=a1476532&

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/Screenreaders/Screenreaders.js
/* harmony default export */ var Screenreaders = ({

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

});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/HelpText/HelpText.vue?vue&type=script&lang=js&
//
//
//
//
//
//





/* harmony default export */ var HelpTextvue_type_script_lang_js_ = ({

    name: 'HelpText',

    mixins: [
        Colorable,
        Screenreaders
    ],

    computed: {
        classes() {
            return extend({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/HelpText/HelpText.vue?vue&type=script&lang=js&
 /* harmony default export */ var HelpText_HelpTextvue_type_script_lang_js_ = (HelpTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/HelpText/HelpText.vue





/* normalize component */

var HelpText_component = normalizeComponent(
  HelpText_HelpTextvue_type_script_lang_js_,
  HelpTextvue_type_template_id_a1476532_render,
  HelpTextvue_type_template_id_a1476532_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HelpText = (HelpText_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/HelpText/index.js

/* harmony default export */ var Components_HelpText = (HelpText);

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Prefix/index.js

/* harmony default export */ var Prefix = (Prefix_prefix);

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/FormControl/FormControl.js









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

/* harmony default export */ var FormControl = ({

    inheritAttrs: false,

    mixins: [
        Mixins_Colorable,
        Mixins_MergeClasses
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
                return ['focus', 'blur', 'change', 'click', 'keypress', 'keyup', 'keydown', 'progress', 'paste'];
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
                function changedValue(el, value) {
                    addClass(el, vnode, changedClass);

                    if(!isEmpty(value) || (el.selectedIndex && el.selectedIndex > -1)) {
                        removeClass(el, vnode, emptyClass);
                    }
                    else if(!el.classList.contains(changedClass)) {
                        addClass(el, vnode, emptyClass);
                    }

                    if(el.tagName === 'SELECT' && el.querySelector('[value=""]')) {
                        el.querySelector('[value=""]').selected = !value;
                    }
                }

                vnode.context.$watch('value', (value) => {
                    changedValue(vnode.context.$el, value);
                });

                el.addEventListener('blur', event => {
                    if(el.classList.contains(emptyClass)) {
                        removeClass(el, vnode, changedClass);
                    }

                    removeClass(el, vnode, focusClass);
                });

                el.addEventListener('input', event => {
                    changedValue(event.target, event.target.value);
                });

                // Add/remove the has-focus class from the form control
                el.addEventListener('focus', event => {
                    addClass(el, vnode, focusClass);
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

                if(el.selectedIndex > -1) {
                    addClass(el, vnode, changedClass);
                }
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
                .reduce((carry, key) => {
                    if(isArray(key)) {
                        carry[key[0]] = key[1];
                    }
                    else {
                        carry[key] = this[key] || this.$attrs[key];
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
            return Prefix(this.size, this.controlClass);
        },

        customControlClass() {
            return 'custom-control';
        },

        formGroupClasses() {
            const name = Prefix(kebabCase(this.$options.name), this.custom ? customPrefix : '');

            return this.mergeClasses(name, Prefix(this.size, name), {
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

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/FormControl/index.js

/* harmony default export */ var Mixins_FormControl = (FormControl);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=template&id=7253de15&
var FormGroupvue_type_template_id_7253de15_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'form-group': !!_vm.group}},[_vm._t("default")],2)}
var FormGroupvue_type_template_id_7253de15_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=template&id=7253de15&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var FormGroupvue_type_script_lang_js_ = ({

    name: 'FormGroup',

    props: {

        group: {
            type: Boolean,
            default: true
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormGroup_FormGroupvue_type_script_lang_js_ = (FormGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=style&index=0&lang=scss&
var FormGroupvue_type_style_index_0_lang_scss_ = __webpack_require__("7c5d");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue






/* normalize component */

var FormGroup_component = normalizeComponent(
  FormGroup_FormGroupvue_type_script_lang_js_,
  FormGroupvue_type_template_id_7253de15_render,
  FormGroupvue_type_template_id_7253de15_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormGroup = (FormGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormGroup/index.js

/* harmony default export */ var Components_FormGroup = (FormGroup);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue?vue&type=template&id=77352d9c&
var FormFeedbackvue_type_template_id_77352d9c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'invalid-feedback': _vm.invalid, 'valid-feedback': _vm.valid && !_vm.invalid}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2)}
var FormFeedbackvue_type_template_id_77352d9c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue?vue&type=template&id=77352d9c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var FormFeedbackvue_type_script_lang_js_ = ({

    name: 'FormFeedback',

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

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormFeedback_FormFeedbackvue_type_script_lang_js_ = (FormFeedbackvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue





/* normalize component */

var FormFeedback_component = normalizeComponent(
  FormFeedback_FormFeedbackvue_type_script_lang_js_,
  FormFeedbackvue_type_template_id_77352d9c_render,
  FormFeedbackvue_type_template_id_77352d9c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormFeedback = (FormFeedback_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormFeedback/index.js

/* harmony default export */ var Components_FormFeedback = (FormFeedback);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-credit-card-field/src/CreditCardField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var CreditCardFieldvue_type_script_lang_js_ = ({

    name: 'credit-card-field',

    mixins: [
        Mixins_MergeClasses,
        Mixins_Variant,
        Mixins_FormControl
    ],

    components: {
        ActivityIndicator: Components_ActivityIndicator,
        FormGroup: Components_FormGroup,
        FormFeedback: Components_FormFeedback,
        HelpText: Components_HelpText,
        Icon: index_es["a" /* FontAwesomeIcon */]
    },

    props: {

        activity: {
            type: Boolean,
            default: false
        }

    },

    watch: {
        'card.number': function(newVal, oldVal) {
            this.brand = this.card.brand = lib_default.a.fns.cardType(newVal) || 'unknown';
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
            return lib_default.a.fns.validateCardCVC(value);
        },

        validateNumber(value) {
            return lib_default.a.fns.validateCardNumber(value);
        },

        validateExpiration(value) {
            return lib_default.a.fns.validateCardExpiry(value);
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
        lib_default.a.formatCardCVC(this.$el.querySelector('.credit-card-field-cvc'));
        lib_default.a.restrictNumeric(this.$el.querySelector('.credit-card-field-postal'));
        lib_default.a.formatCardNumber(this.$el.querySelector('.credit-card-field-number'));
        lib_default.a.formatCardExpiry(this.$el.querySelector('.credit-card-field-expiration'));

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

});

// CONCATENATED MODULE: ./node_modules/vue-credit-card-field/src/CreditCardField.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_CreditCardFieldvue_type_script_lang_js_ = (CreditCardFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-credit-card-field/src/CreditCardField.vue?vue&type=style&index=0&lang=scss&
var CreditCardFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("c97a");

// CONCATENATED MODULE: ./node_modules/vue-credit-card-field/src/CreditCardField.vue






/* normalize component */

var CreditCardField_component = normalizeComponent(
  src_CreditCardFieldvue_type_script_lang_js_,
  CreditCardFieldvue_type_template_id_62478938_render,
  CreditCardFieldvue_type_template_id_62478938_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CreditCardField = (CreditCardField_component.exports);
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






/* harmony default export */ var AuthorizeNetCreditCardvue_type_script_lang_js_ = ({
  name: 'authorize-net-credit-card',
  components: {
    Alert: Components_Alert,
    CreditCardField: CreditCardField
  },
  mixins: [PaymentGateway],
  methods: {
    onChange: function (event) {
      if (!event || !event.complete) {
        this.pageType.disableSubmitButton(); // this.$dispatch.request('submit:disable');
      }
    },
    onComplete: function (event) {
      Elapsed(500, (resolve, reject) => {
        Gateway(this.gateway).createToken({
          cardNumber: event.card.number,
          month: event.card.expMonth,
          year: event.card.expYear,
          cardCode: event.card.cvc
        }, event => {
          Wait(this.activity ? 750 : 0, (resolve, reject) => {
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

    Gateway(this.gateway).script(event => {
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

});
// CONCATENATED MODULE: ./src/Components/Gateways/AuthorizeNet/AuthorizeNetCreditCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var AuthorizeNet_AuthorizeNetCreditCardvue_type_script_lang_js_ = (AuthorizeNetCreditCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Gateways/AuthorizeNet/AuthorizeNetCreditCard.vue





/* normalize component */

var AuthorizeNetCreditCard_component = normalizeComponent(
  AuthorizeNet_AuthorizeNetCreditCardvue_type_script_lang_js_,
  AuthorizeNetCreditCardvue_type_template_id_136e7ba8_render,
  AuthorizeNetCreditCardvue_type_template_id_136e7ba8_staticRenderFns,
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
//









/* harmony default export */ var PaymentGatewaysvue_type_script_lang_js_ = ({
  name: 'payment-gateways',
  components: {
    Btn: Components_Btn,
    Icon: index_es["a" /* FontAwesomeIcon */],
    Alert: Components_Alert,
    StripeCreditCard: StripeCreditCard,
    StripePaymentButton: StripePaymentButton,
    PaypalPaymentButton: PayPalPaymentButton,
    AuthorizeNetCreditCard: AuthorizeNetCreditCard
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
    } else {// this.$dispatch.request('submit:hide');
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

});
// CONCATENATED MODULE: ./src/Components/Gateways/PaymentGateways.vue?vue&type=script&lang=js&
 /* harmony default export */ var Gateways_PaymentGatewaysvue_type_script_lang_js_ = (PaymentGatewaysvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Gateways/PaymentGateways.vue





/* normalize component */

var PaymentGateways_component = normalizeComponent(
  Gateways_PaymentGatewaysvue_type_script_lang_js_,
  PaymentGatewaysvue_type_template_id_3c6014d4_render,
  PaymentGatewaysvue_type_template_id_3c6014d4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PaymentGateways = (PaymentGateways_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/BtnActivity/BtnActivity.vue?vue&type=template&id=215181e6&
var BtnActivityvue_type_template_id_215181e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn",class:_vm.classes,attrs:{"type":_vm.type},on:{"click":_vm.onClick}},[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._v(" "+_vm._s(_vm.label)+"\n    "),_vm._t("default"),_c('activity-indicator',_vm._b({},'activity-indicator',_vm.indicatorProps,false))],2)}
var BtnActivityvue_type_template_id_215181e6_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnActivity/BtnActivity.vue?vue&type=template&id=215181e6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/BtnActivity/BtnActivity.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
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

/* harmony default export */ var BtnActivityvue_type_script_lang_js_ = ({

    name: 'BtnActivity',

    components: {
        ActivityIndicator: Components_ActivityIndicator
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
            type: [Object, String],
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
            classes['btn-activity-indicator-' + this.indicatorProps.type.replace('btn-activity-indicator-', '')] = !!this.indicatorProps.type;

            return classes;
        },

        indicatorProps() {
            return Object.assign({
                type: 'spinner'
            }, (isString(this.indicator) ? {
                type: this.indicator
            } : this.indicator) || {});
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
                this.$emit('show-activity');
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
                this.$emit('hide-activity');
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

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnActivity/BtnActivity.vue?vue&type=script&lang=js&
 /* harmony default export */ var BtnActivity_BtnActivityvue_type_script_lang_js_ = (BtnActivityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/BtnActivity/BtnActivity.vue?vue&type=style&index=0&lang=scss&
var BtnActivityvue_type_style_index_0_lang_scss_ = __webpack_require__("280f");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnActivity/BtnActivity.vue






/* normalize component */

var BtnActivity_component = normalizeComponent(
  BtnActivity_BtnActivityvue_type_script_lang_js_,
  BtnActivityvue_type_template_id_215181e6_render,
  BtnActivityvue_type_template_id_215181e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BtnActivity = (BtnActivity_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnActivity/index.js

/* harmony default export */ var Components_BtnActivity = (BtnActivity);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fieldsets/ContactInfoFieldset.vue?vue&type=template&id=74efe4e3&
var ContactInfoFieldsetvue_type_template_id_74efe4e3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fieldset',[(_vm.page.options.add_title)?_c('select-field',{attrs:{"name":"title","label":"Title","placeholder":"Title","errors":_vm.errors,"custom":""},model:{value:(_vm.form.title),callback:function ($$v) {_vm.$set(_vm.form, "title", $$v)},expression:"form.title"}},_vm._l((_vm.titles),function(value){return _c('option',{domProps:{"value":value,"innerHTML":_vm._s(value)}})}),0):_vm._e(),_c('input-field',{attrs:{"name":"first","label":"First Name","placeholder":"First Name","errors":_vm.errors,"custom":""},model:{value:(_vm.form.first),callback:function ($$v) {_vm.$set(_vm.form, "first", $$v)},expression:"form.first"}}),_c('input-field',{attrs:{"name":"last","label":"Last Name","placeholder":"Last Name","errors":_vm.errors,"custom":""},model:{value:(_vm.form.last),callback:function ($$v) {_vm.$set(_vm.form, "last", $$v)},expression:"form.last"}}),_c('input-field',{attrs:{"type":"email","name":"email","label":"Email","placeholder":"you@example.com","errors":_vm.errors,"custom":""},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}}),(_vm.page.options.add_phone)?_c('input-field',{attrs:{"name":"phone","label":"Phone Number","placeholder":"Phone Number","errors":_vm.errors,"custom":""},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}}):_vm._e(),(_vm.address || _vm.page.options.add_street)?_c('place-autocomplete-field',{directives:[{name:"place-autofill",rawName:"v-place-autofill:street.query",value:(_vm.form.street),expression:"form.street",arg:"street",modifiers:{"query":true}},{name:"place-autofill",rawName:"v-place-autofill:city",value:(_vm.form.city),expression:"form.city",arg:"city"},{name:"place-autofill",rawName:"v-place-autofill:state.short",value:(_vm.form.state),expression:"form.state",arg:"state",modifiers:{"short":true}},{name:"place-autofill",rawName:"v-place-autofill:zip",value:(_vm.form.zip),expression:"form.zip",arg:"zip"}],attrs:{"name":"street","label":"Address","placeholder":"Address","errors":_vm.errors,"api-key":"AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU","custom":""},model:{value:(_vm.form.street),callback:function ($$v) {_vm.$set(_vm.form, "street", $$v)},expression:"form.street"}}):_vm._e(),(_vm.address || _vm.page.options.add_city || _vm.page.options.add_zip)?_c('div',{staticClass:"row"},[(_vm.address || _vm.page.options.add_city)?_c('div',{staticClass:"col-sm-8"},[_c('input-field',{attrs:{"name":"city","label":"City","placeholder":"City","errors":_vm.errors,"custom":""},model:{value:(_vm.form.city),callback:function ($$v) {_vm.$set(_vm.form, "city", $$v)},expression:"form.city"}})],1):_vm._e(),(_vm.address || _vm.page.options.add_zip)?_c('div',{class:{'col-sm-4': _vm.address || _vm.page.options.add_city, 'col-sm-12': !_vm.address && !_vm.page.options.add_city}},[_c('input-field',{attrs:{"name":"zip","label":"Zip","placeholder":"Zip","errors":_vm.errors,"maxLength":"5","custom":""},model:{value:(_vm.form.zip),callback:function ($$v) {_vm.$set(_vm.form, "zip", $$v)},expression:"form.zip"}})],1):_vm._e()]):_vm._e(),(_vm.address || _vm.page.options.add_state)?_c('select-field',{attrs:{"name":"state","label":"State","errors":_vm.errors,"custom":""},model:{value:(_vm.form.state),callback:function ($$v) {_vm.$set(_vm.form, "state", $$v)},expression:"form.state"}},_vm._l((_vm.states),function(label,value){return _c('option',{domProps:{"value":value,"innerHTML":_vm._s(label)}})}),0):_vm._e()],1)}
var ContactInfoFieldsetvue_type_template_id_74efe4e3_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Fieldsets/ContactInfoFieldset.vue?vue&type=template&id=74efe4e3&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("5176");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=template&id=5215ae3a&
var InputFieldvue_type_template_id_5215ae3a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:_vm.formGroupClasses,attrs:{"group":_vm.group}},[_vm._t("label",[(_vm.label)?_c('form-label',{ref:"label",attrs:{"for":_vm.$attrs.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_c('div',{staticClass:"form-group-inner"},[_vm._t("control",[_c('input',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}},'input',_vm.controlAttributes,false))]),_vm._t("activity",[_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.activity)?_c('activity-indicator',{key:"test",ref:"activity",attrs:{"type":"dots","size":_vm.size}}):_vm._e()],1)])],2),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{ref:"feedback",attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):(_vm.invalidFeedback)?_c('form-feedback',{ref:"feedback",attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()]),_vm._t("help",[(_vm.helpText)?_c('help-text',{ref:"help",domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var InputFieldvue_type_template_id_5215ae3a_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=template&id=5215ae3a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue?vue&type=template&id=eee24d34&
var FormLabelvue_type_template_id_eee24d34_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.classes},[_vm._t("default")],2)}
var FormLabelvue_type_template_id_eee24d34_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue?vue&type=template&id=eee24d34&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue?vue&type=script&lang=js&
//
//
//
//
//
//





/* harmony default export */ var FormLabelvue_type_script_lang_js_ = ({

    name: 'FormLabel',

    mixins: [
        Colorable,
        Screenreaders
    ],

    computed: {
        classes() {
            return extend({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormLabel_FormLabelvue_type_script_lang_js_ = (FormLabelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue





/* normalize component */

var FormLabel_component = normalizeComponent(
  FormLabel_FormLabelvue_type_script_lang_js_,
  FormLabelvue_type_template_id_eee24d34_render,
  FormLabelvue_type_template_id_eee24d34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormLabel = (FormLabel_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormLabel/index.js

/* harmony default export */ var Components_FormLabel = (FormLabel);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var InputFieldvue_type_script_lang_js_ = ({

    name: 'InputField',

    components: {
        HelpText: Components_HelpText,
        FormGroup: Components_FormGroup,
        FormLabel: Components_FormLabel,
        FormFeedback: Components_FormFeedback,
        ActivityIndicator: Components_ActivityIndicator
    },

    mixins: [
        Mixins_Colorable,
        Mixins_FormControl
    ]

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputField_InputFieldvue_type_script_lang_js_ = (InputFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=style&index=0&lang=scss&
var InputFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("7aa6");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputField/InputField.vue






/* normalize component */

var InputField_component = normalizeComponent(
  InputField_InputFieldvue_type_script_lang_js_,
  InputFieldvue_type_template_id_5215ae3a_render,
  InputFieldvue_type_template_id_5215ae3a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputField = (InputField_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputField/index.js

/* harmony default export */ var Components_InputField = (InputField);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/SelectField/SelectField.vue?vue&type=template&id=1afb7aa5&
var SelectFieldvue_type_template_id_1afb7aa5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:_vm.formGroupClasses,attrs:{"group":_vm.group}},[_vm._t("label",[(_vm.label)?_c('form-label',{attrs:{"for":_vm.$attrs.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_c('div',{staticClass:"form-group-inner"},[_vm._t("control",[_c('select',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}},'select',_vm.controlAttributes,false),[_vm._t("default")],2)]),_vm._t("activity",[_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.activity)?_c('activity-indicator',{key:"test",ref:"activity",attrs:{"type":"dots","size":_vm.size}}):_vm._e()],1)])],2),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()]),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var SelectFieldvue_type_template_id_1afb7aa5_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/SelectField/SelectField.vue?vue&type=template&id=1afb7aa5&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/SelectField/SelectField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










const CUSTOM_SELECT_PREFIX = 'custom-select-';

/* harmony default export */ var SelectFieldvue_type_script_lang_js_ = ({

    name: 'SelectField',

    components: {
        ActivityIndicator: Components_ActivityIndicator,
        HelpText: Components_HelpText,
        FormGroup: Components_FormGroup,
        FormLabel: Components_FormLabel,
        FormFeedback: Components_FormFeedback
    },

    mixins: [
        Mixins_Colorable,
        Mixins_MergeClasses,
        Mixins_FormControl
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

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/SelectField/SelectField.vue?vue&type=script&lang=js&
 /* harmony default export */ var SelectField_SelectFieldvue_type_script_lang_js_ = (SelectFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/SelectField/SelectField.vue?vue&type=style&index=0&lang=scss&
var SelectFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("f17f");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/SelectField/SelectField.vue






/* normalize component */

var SelectField_component = normalizeComponent(
  SelectField_SelectFieldvue_type_script_lang_js_,
  SelectFieldvue_type_template_id_1afb7aa5_render,
  SelectFieldvue_type_template_id_1afb7aa5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SelectField = (SelectField_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/SelectField/index.js

/* harmony default export */ var Components_SelectField = (SelectField);

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/camelCase.js
function camelCase_camelCase(string) {
    string = string.toLowerCase().replace(/(?:(^.)|([-_\s]+.))/g, function(match) {
        return match.charAt(match.length - 1).toUpperCase();
    });

    return string.charAt(0).toLowerCase() + string.substring(1);
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/chunk.js
function chunk_chunk(arr, chunkSize, cache = []) {
    const tmp = [...arr];
    while(tmp.length) cache.push(tmp.splice(0, chunkSize));
    return cache;
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/extend.js
function extend_extend(...args) {
    return Object.assign(...args);
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/isNull.js
function isNull_isNull(value) {
    return value === null;
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/isArray.js
function isArray_isArray(value) {
    return Array.isArray(value);
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/isObject.js



function isObject_isObject(value) {
    return (typeof value === 'object') && !isNull_isNull(value) && !isArray_isArray(value);
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/deepExtend.js



/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
*/
function deepExtend_deepExtend(target, ...sources) {
    if(!sources.length) return target;

    const source = sources.shift();

    if(isObject_isObject(target) && isObject_isObject(source)) {
        for(const key in source) {
            if(isObject_isObject(source[key])) {
                if(!target[key]) extend_extend(target, { [key]: {} });
                deepExtend_deepExtend(target[key], source[key]);
            }
            else {
                extend_extend(target, { [key]: source[key] });
            }
        }
    }

    return deepExtend_deepExtend(target, ...sources);
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/cloneDeep.js


function cloneDeep_cloneDeep(...args) {
    return deepExtend_deepExtend({}, ...args);
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/concatMap.js
function concatMap_concatMap(fn) {
    return x => {
        return x.map(fn).reduce((x, y) => x.concat(y), []);
    };
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/deepFlatten.js



function deepFlatten_deepFlatten(x) {
    return concatMap_concatMap(x => isArray_isArray(x) ? deepFlatten_deepFlatten(x) : x)(x);
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/isNumber.js
function isNumber_isNumber(value) {
    return (typeof value === 'number') || (
        value ? value.toString() === '[object Number]' : false
    );
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/isNumeric.js



function isNumeric_isNumeric(value) {
    return isNumber_isNumber(value) || (
        !!value && !isArray_isArray(value) && !!value.toString().match(/^-?[\d.,]+$/)
    );
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/key.js


function Functions_key_key(value) {
    return isNumeric_isNumeric(value) ? parseFloat(value) : value;
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/each.js


function each_each(subject, fn) {
    for(const i in subject) {
        fn(subject[i], Functions_key_key(i));
    }
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/first.js
function first_first(array) {
    return (array && array.length) ? array[0] : undefined;
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/matches.js


function matches_matches(properties) {
    return subject => {
        for(const i in properties) {
            if(isObject_isObject(properties[i])) {
                return subject[i] ? matches_matches(properties[i])(subject[i]) : false;
            }
            else if(!subject || subject[i] !== properties[i]) {
                return false;
            }
        }

        return true;
    };
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/isString.js
function isString_isString(value) {
    return typeof value === 'string';
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/get.js



function get_get(object, path) {
    return (isString_isString(path) ? path.split('.') : (!isArray_isArray(path) ? [path] : path)).reduce((a, b) => a[b], object);
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/property.js


function property_property(path) {
    return object => {
        return get_get(object, path);
    };
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/isFunction.js
function isFunction_isFunction(value) {
    return value instanceof Function;
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/matchesProperty.js


function matchesProperty_matchesProperty(path, value) {
    return subject => {
        return get_get(subject, path) === value;
    };
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/predicate.js







function predicate_predicate(value) {
    if(isObject_isObject(value)) {
        value = matches_matches(value);
    }
    else if(isArray_isArray(value)) {
        value = matchesProperty_matchesProperty(value[0], value[1]);
    }
    else if(!isFunction_isFunction(value)) {
        value = property_property(value);
    }

    return value;
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/find.js



function find_find(subject, value) {
    return first_first(subject.filter(object => predicate_predicate(value)(object)));
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/findIndex.js



function findIndex_findIndex(subject, value) {
    for(const i in subject) {
        if(predicate_predicate(value)(subject[i])) {
            return Functions_key_key(i);
        }
    }

    return -1;
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/findKey.js



function Functions_findKey_findIndex(object, value) {
    return first_first(Object.keys(object).filter(
        key => predicate_predicate(value)(object[key])
    ));
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/flatten.js


function flatten_flatten(x) {
    return concatMap_concatMap(x => x)(x);
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/isBoolean.js
function isBoolean_isBoolean(value) {
    return value === true || value === false;
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/isUndefined.js
function isUndefined_isUndefined(value) {
    return typeof value === 'undefined';
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/isEmpty.js





function isEmpty_isEmpty(value) {
    if(isArray_isArray(value)) {
        return value.length === 0;
    }
    else if(isObject_isObject(value)) {
        return Object.keys(value).length === 0;
    }

    return value === '' || isNull_isNull(value) || isUndefined_isUndefined(value);
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/kebabCase.js
function kebabCase_kebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .replace(/_/g, '-')
        .toLowerCase();
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/map.js


function map_map(object, fn) {
    const mapped = {};

    each_each(object, (value, key) => {
        mapped[key] = fn(value, key);
    });

    return mapped;
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/mapKeys.js


function mapKeys_mapKeys(object, fn) {
    const mapped = {};

    each_each(object, (value, key) => {
        mapped[fn(value, key)] = value;
    });

    return mapped;
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/negate.js


function negate_negate(fn) {
    return (...args) => isFunction_isFunction(fn) ? !fn(...args) : !fn;
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/noop.js
function noop_noop() {

}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/pickBy.js



function pickBy_pickBy(object, match) {
    const subject = {};

    each_each(object, (value, key) => {
        if(predicate_predicate(match)(value)) {
            subject[key] = value;
        }
    });

    return subject;
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/omitBy.js



function omitBy_omitBy(object, fn) {
    return pickBy_pickBy(object, negate_negate(fn));
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/remove.js



function remove_remove(array, match) {
    const indexes = [];

    for(const i in array) {
        if(predicate_predicate(match)(array[i])) {
            indexes.push(Functions_key_key(i));
        }
    }

    return array.filter((value, i) => {
        return indexes.indexOf(i) !== -1;
    });
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/wrap.js


function wrap_wrap(subject, fn) {
    return value => {
        return isFunction_isFunction(fn) ? fn(subject, value) : value;
    };
};

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Functions/index.js








































// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/src/PlaceAutofill.js


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

    const aliases = ALIASES[type] || (isArray_isArray(type) ? type : [type]);

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

    value = isArray_isArray(value) ? value.join(' ') : value;

    if (binding.modifiers.query) {
        vnode.componentInstance.query = value;
    }

    model[prop] = value;

    return value;
}

/* harmony default export */ var PlaceAutofill = ({

    bind(el, binding, vnode) {
        vnode.componentInstance.$on('select', (place, geocoder) => {
            vnode.context.$nextTick(() => {
                update(binding, vnode, extract(binding.arg, binding.modifiers, geocoder));
            });
        });
    }

});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/src/PlaceAutocompleteField.vue?vue&type=template&id=0c9821e9&
var PlaceAutocompleteFieldvue_type_template_id_0c9821e9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"autocomplete-field",on:{"keydown":_vm.onKeydown,"keyup":_vm.onKeyup}},[_c('input-field',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],attrs:{"label":_vm.label,"errors":_vm.errors,"value":_vm.value,"custom":_vm.custom,"autocomplete":"no"},on:{"blur":_vm.onBlur,"focus":_vm.onFocus,"input":function($event){return _vm.$emit('input', _vm.query)}},model:{value:(_vm.query),callback:function ($$v) {_vm.query=$$v},expression:"query"}},'input-field',_vm.$attrs,false),[(_vm.showActivityIndicator)?_c('activity-indicator',{attrs:{"size":"xs","type":"spinner"}}):_vm._e()],1),(_vm.predictions && _vm.showPredictions)?_c('place-autocomplete-list',{attrs:{"items":_vm.predictions},on:{"item:click":_vm.onItemClick,"item:blur":_vm.onItemBlur}}):_vm._e()],1)}
var PlaceAutocompleteFieldvue_type_template_id_0c9821e9_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/src/PlaceAutocompleteField.vue?vue&type=template&id=0c9821e9&

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/src/Helpers/Geocode.js
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
};

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Script/Script.js
const LOADED_SCRIPTS = {};

function Script_element(url) {
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
            append(Script_element(url)).addEventListener('load', event => {
                resolve(LOADED_SCRIPTS[url] = event);
            });
        }
        catch (e) {
            reject(e);
        }
    });

    return LOADED_SCRIPTS[url];
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Script/index.js

/* harmony default export */ var Helpers_Script = (script);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/src/PlaceAutocompleteList.vue?vue&type=template&id=6bef404f&
var PlaceAutocompleteListvue_type_template_id_6bef404f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"autocomplete-list-wrapper"},[_c('ul',{staticClass:"autocomplete-list"},_vm._l((_vm.items),function(item,i){return _c('place-autocomplete-list-item',{key:item.id,attrs:{"item":item},on:{"click":_vm.onClick,"focus":_vm.onFocus,"blur":_vm.onBlur}},[_vm._v("\n            "+_vm._s(item[_vm.display])+"\n        ")])}),1)])}
var PlaceAutocompleteListvue_type_template_id_6bef404f_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/src/PlaceAutocompleteList.vue?vue&type=template&id=6bef404f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/src/PlaceAutocompleteListItem.vue?vue&type=template&id=61caeee3&
var PlaceAutocompleteListItemvue_type_template_id_61caeee3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"autocomplete-list-item",on:{"focus":_vm.onFocus,"onBlur":_vm.onBlur}},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.onClick($event)},"focus":_vm.onFocus,"blur":_vm.onBlur}},[_c('span',{staticClass:"autocomplete-list-item-icon"}),_c('span',{staticClass:"autocomplete-list-item-label"},[_vm._t("default")],2)])])}
var PlaceAutocompleteListItemvue_type_template_id_61caeee3_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/src/PlaceAutocompleteListItem.vue?vue&type=template&id=61caeee3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/src/PlaceAutocompleteListItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PlaceAutocompleteListItemvue_type_script_lang_js_ = ({

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

});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/src/PlaceAutocompleteListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_PlaceAutocompleteListItemvue_type_script_lang_js_ = (PlaceAutocompleteListItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-place-autocomplete/src/PlaceAutocompleteListItem.vue?vue&type=style&index=0&lang=scss&
var PlaceAutocompleteListItemvue_type_style_index_0_lang_scss_ = __webpack_require__("4382");

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/src/PlaceAutocompleteListItem.vue






/* normalize component */

var PlaceAutocompleteListItem_component = normalizeComponent(
  src_PlaceAutocompleteListItemvue_type_script_lang_js_,
  PlaceAutocompleteListItemvue_type_template_id_61caeee3_render,
  PlaceAutocompleteListItemvue_type_template_id_61caeee3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PlaceAutocompleteListItem = (PlaceAutocompleteListItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/src/PlaceAutocompleteList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var PlaceAutocompleteListvue_type_script_lang_js_ = ({

    name: 'place-autocomplete-list',

    components: {
        PlaceAutocompleteListItem: PlaceAutocompleteListItem
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

});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/src/PlaceAutocompleteList.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_PlaceAutocompleteListvue_type_script_lang_js_ = (PlaceAutocompleteListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/src/PlaceAutocompleteList.vue





/* normalize component */

var PlaceAutocompleteList_component = normalizeComponent(
  src_PlaceAutocompleteListvue_type_script_lang_js_,
  PlaceAutocompleteListvue_type_template_id_6bef404f_render,
  PlaceAutocompleteListvue_type_template_id_6bef404f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PlaceAutocompleteList = (PlaceAutocompleteList_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Prefix/Prefix.js


function Prefix_Prefix_prefix(subject, prefix, delimeter = '-') {
    const prefixer = (value, key) => {
        const string = (key || value)
            .replace(new RegExp(`^${prefix}${delimeter}?`), '');

        return [prefix, string].filter(value => !!value).join(delimeter);
    };

    if(isBoolean_isBoolean(subject)) {
        return subject;
    }

    if(isObject_isObject(subject)) {
        return mapKeys_mapKeys(subject, prefixer);
    }

    return prefixer(subject);
}

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Prefix/index.js

/* harmony default export */ var Helpers_Prefix = (Prefix_Prefix_prefix);

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Mixins/Colorable/Colorable.js
/* harmony default export */ var Colorable_Colorable = ({

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

});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Mixins/Colorable/index.js

/* harmony default export */ var src_Mixins_Colorable = (Colorable_Colorable);

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Mixins/MergeClasses/MergeClasses.js


/* harmony default export */ var MergeClasses_MergeClasses = ({

    methods: {

        mergeClasses() {
            let classes = {};

            each_each([].slice.call(arguments), arg => {
                if(isObject_isObject(arg)) {
                    extend_extend(classes, arg);
                }
                else if(isArray_isArray(arg)) {
                    classes = classes.concat(arg);
                }
                else if(arg) {
                    classes[arg] = true;
                }
            });

            return classes;
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Mixins/MergeClasses/index.js

/* harmony default export */ var src_Mixins_MergeClasses = (MergeClasses_MergeClasses);

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Mixins/FormControl/FormControl.js





const FormControl_emptyClass = 'is-empty';
const FormControl_focusClass = 'has-focus';
const FormControl_changedClass = 'has-changed';
const FormControl_customPrefix = 'custom';

function FormControl_addClass(el, vnode, css) {
    // el.classList.add(css);
    vnode.context.$el.classList.add(css);
}

function FormControl_removeClass(el, vnode, css) {
    // el.classList.remove(css);
    vnode.context.$el.classList.remove(css);
}

function FormControl_addEmptyClass(el, vnode) {
    if(isEmpty_isEmpty(el.value) || (el.tagName === 'SELECT' && el.selectedIndex === -1)) {
        FormControl_addClass(el, vnode, FormControl_emptyClass);
    }
}

/* harmony default export */ var FormControl_FormControl = ({

    inheritAttrs: false,

    mixins: [
        src_Mixins_Colorable,
        src_Mixins_MergeClasses
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
                return ['focus', 'blur', 'change', 'click', 'keypress', 'keyup', 'keydown', 'progress', 'paste'];
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
                function changedValue(el, value) {
                    FormControl_addClass(el, vnode, FormControl_changedClass);

                    if(!isEmpty_isEmpty(value) || (el.selectedIndex && el.selectedIndex > -1)) {
                        FormControl_removeClass(el, vnode, FormControl_emptyClass);
                    }
                    else if(!el.classList.contains(FormControl_changedClass)) {
                        FormControl_addClass(el, vnode, FormControl_emptyClass);
                    }

                    if(el.tagName === 'SELECT' && el.querySelector('[value=""]')) {
                        el.querySelector('[value=""]').selected = !value;
                    }
                }

                vnode.context.$watch('value', (value) => {
                    changedValue(vnode.context.$el, value);
                });

                el.addEventListener('blur', event => {
                    if(el.classList.contains(FormControl_emptyClass)) {
                        FormControl_removeClass(el, vnode, FormControl_changedClass);
                    }

                    FormControl_removeClass(el, vnode, FormControl_focusClass);
                });

                el.addEventListener('input', event => {
                    changedValue(event.target, event.target.value);
                });

                // Add/remove the has-focus class from the form control
                el.addEventListener('focus', event => {
                    FormControl_addClass(el, vnode, FormControl_focusClass);
                });

                // Bubble the native events up to the vue component.
                each_each(vnode.context.bindEvents, name => {
                    el.addEventListener(name, event => {
                        vnode.context.$emit(name, event);
                    });
                });
            },
            inserted(el, binding, vnode) {
                FormControl_addEmptyClass(el, vnode);

                if(el.selectedIndex > -1) {
                    FormControl_addClass(el, vnode, FormControl_changedClass);
                }
            },
            update(el, binding, vnode) {
                FormControl_addEmptyClass(el, vnode);
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

            if(isObject_isObject(this.errors)) {
                errors = this.errors[this.$attrs.name || this.$attrs.id];
            }

            return !errors || isArray_isArray(errors) || isObject_isObject(errors) ? errors : [errors];
        }

    },

    computed: {

        controlAttributes() {
            return Object.keys(this.$attrs)
                .concat([['class', this.controlClasses]])
                .reduce((carry, key) => {
                    if(isArray_isArray(key)) {
                        carry[key[0]] = key[1];
                    }
                    else {
                        carry[key] = this[key] || this.$attrs[key];
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
            return Helpers_Prefix(this.size, this.controlClass);
        },

        customControlClass() {
            return 'custom-control';
        },

        formGroupClasses() {
            const name = Helpers_Prefix(this.$options.name, this.custom ? FormControl_customPrefix : '');

            return this.mergeClasses(name, Helpers_Prefix(this.size, name), {
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
                isArray_isArray(errors) ? errors.join('<br>') : errors
            );
        },

        validFeedback() {
            return isArray_isArray(this.feedback) ? this.feedback.join('<br>') : this.feedback;
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Mixins/FormControl/index.js

/* harmony default export */ var src_Mixins_FormControl = (FormControl_FormControl);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=template&id=46fe50ca&
var FormGroupvue_type_template_id_46fe50ca_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'form-group': !!_vm.group}},[_vm._t("default")],2)}
var FormGroupvue_type_template_id_46fe50ca_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=template&id=46fe50ca&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var Components_FormGroup_FormGroupvue_type_script_lang_js_ = ({

    name: 'form-group',

    props: {

        group: {
            type: Boolean,
            default: true
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Components_FormGroup_FormGroupvue_type_script_lang_js_ = (Components_FormGroup_FormGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=style&index=0&lang=scss&
var FormGroup_FormGroupvue_type_style_index_0_lang_scss_ = __webpack_require__("fd8c");

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue






/* normalize component */

var FormGroup_FormGroup_component = normalizeComponent(
  src_Components_FormGroup_FormGroupvue_type_script_lang_js_,
  FormGroupvue_type_template_id_46fe50ca_render,
  FormGroupvue_type_template_id_46fe50ca_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormGroup_FormGroup = (FormGroup_FormGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormGroup/index.js

/* harmony default export */ var src_Components_FormGroup = (FormGroup_FormGroup);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=template&id=10c10a09&
var InputFieldvue_type_template_id_10c10a09_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:_vm.formGroupClasses,attrs:{"group":_vm.group}},[_vm._t("label",[(_vm.label || _vm.hasDefaultSlot)?_c('form-label',{ref:"label",attrs:{"for":_vm.$attrs.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_c('div',{staticClass:"form-group-inner"},[_vm._t("control",[_c('input',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}},'input',_vm.controlAttributes,false))]),_vm._t("activity",[_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.activity)?_c('activity-indicator',{key:"test",ref:"activity",attrs:{"type":"dots","size":_vm.size}}):_vm._e()],1)])],2),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{ref:"feedback",attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):(_vm.invalidFeedback)?_c('form-feedback',{ref:"feedback",attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()]),_vm._t("help",[(_vm.helpText)?_c('help-text',{ref:"help",domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var InputFieldvue_type_template_id_10c10a09_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=template&id=10c10a09&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/HelpText/HelpText.vue?vue&type=template&id=2a2548c5&
var HelpTextvue_type_template_id_2a2548c5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('small',{staticClass:"form-text",class:_vm.classes},[_vm._t("default")],2)}
var HelpTextvue_type_template_id_2a2548c5_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/HelpText/HelpText.vue?vue&type=template&id=2a2548c5&

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Mixins/Screenreaders/Screenreaders.js
/* harmony default export */ var Screenreaders_Screenreaders = ({

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

});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/HelpText/HelpText.vue?vue&type=script&lang=js&
//
//
//
//
//
//





/* harmony default export */ var Components_HelpText_HelpTextvue_type_script_lang_js_ = ({

    name: 'help-text',

    mixins: [
        Colorable_Colorable,
        Screenreaders_Screenreaders
    ],

    computed: {
        classes() {
            return extend_extend({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/HelpText/HelpText.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Components_HelpText_HelpTextvue_type_script_lang_js_ = (Components_HelpText_HelpTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/HelpText/HelpText.vue





/* normalize component */

var HelpText_HelpText_component = normalizeComponent(
  src_Components_HelpText_HelpTextvue_type_script_lang_js_,
  HelpTextvue_type_template_id_2a2548c5_render,
  HelpTextvue_type_template_id_2a2548c5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HelpText_HelpText = (HelpText_HelpText_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/HelpText/index.js

/* harmony default export */ var src_Components_HelpText = (HelpText_HelpText);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue?vue&type=template&id=64d8a1a0&
var FormLabelvue_type_template_id_64d8a1a0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.classes},[_vm._t("default")],2)}
var FormLabelvue_type_template_id_64d8a1a0_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue?vue&type=template&id=64d8a1a0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue?vue&type=script&lang=js&
//
//
//
//
//
//





/* harmony default export */ var Components_FormLabel_FormLabelvue_type_script_lang_js_ = ({

    name: 'form-label',

    mixins: [
        Colorable_Colorable,
        Screenreaders_Screenreaders
    ],

    computed: {
        classes() {
            return extend_extend({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Components_FormLabel_FormLabelvue_type_script_lang_js_ = (Components_FormLabel_FormLabelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue





/* normalize component */

var FormLabel_FormLabel_component = normalizeComponent(
  src_Components_FormLabel_FormLabelvue_type_script_lang_js_,
  FormLabelvue_type_template_id_64d8a1a0_render,
  FormLabelvue_type_template_id_64d8a1a0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormLabel_FormLabel = (FormLabel_FormLabel_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormLabel/index.js

/* harmony default export */ var src_Components_FormLabel = (FormLabel_FormLabel);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormControl/FormControl.vue?vue&type=template&id=bb1e4b30&
var FormControlvue_type_template_id_bb1e4b30_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.element,_vm._b({tag:"component",attrs:{"aria-label":_vm.label || _vm.name || _vm.id,"aria-describedby":_vm.id || _vm.name},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}},'component',_vm.$attrs,false),[_vm._t("default")],2)}
var FormControlvue_type_template_id_bb1e4b30_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormControl/FormControl.vue?vue&type=template&id=bb1e4b30&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormControl/FormControl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var FormControlvue_type_script_lang_js_ = ({

    name: 'form-control',

    mixins: [
        src_Mixins_Colorable,
        src_Mixins_FormControl
    ],

    props: {

        element: {
            type: String,
            required: true
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormControl/FormControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormControl_FormControlvue_type_script_lang_js_ = (FormControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormControl/FormControl.vue





/* normalize component */

var FormControl_component = normalizeComponent(
  FormControl_FormControlvue_type_script_lang_js_,
  FormControlvue_type_template_id_bb1e4b30_render,
  FormControlvue_type_template_id_bb1e4b30_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_FormControl_FormControl = (FormControl_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormControl/index.js

/* harmony default export */ var Components_FormControl = (Components_FormControl_FormControl);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue?vue&type=template&id=57b34334&
var FormFeedbackvue_type_template_id_57b34334_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'invalid-feedback': _vm.invalid, 'valid-feedback': _vm.valid && !_vm.invalid}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2)}
var FormFeedbackvue_type_template_id_57b34334_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue?vue&type=template&id=57b34334&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var Components_FormFeedback_FormFeedbackvue_type_script_lang_js_ = ({

    name: 'form-feedback',

    mixins: [
        Colorable_Colorable
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

});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Components_FormFeedback_FormFeedbackvue_type_script_lang_js_ = (Components_FormFeedback_FormFeedbackvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue





/* normalize component */

var FormFeedback_FormFeedback_component = normalizeComponent(
  src_Components_FormFeedback_FormFeedbackvue_type_script_lang_js_,
  FormFeedbackvue_type_template_id_57b34334_render,
  FormFeedbackvue_type_template_id_57b34334_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormFeedback_FormFeedback = (FormFeedback_FormFeedback_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/FormFeedback/index.js

/* harmony default export */ var src_Components_FormFeedback = (FormFeedback_FormFeedback);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=template&id=1005d054&
var ActivityIndicatorvue_type_template_id_1005d054_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.center)?_c('div',{staticClass:"center-wrapper",class:{'position-relative': _vm.relative, 'position-fixed': _vm.fixed},style:(_vm.style)},[_c('div',{staticClass:"center-content d-flex flex-column align-items-center"},[_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}}),(_vm.label)?_c('div',{staticClass:"activity-indicator-label",domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()],1)]):_c('div',{staticClass:"d-flex flex-column justify-content-center align-items-center",style:(_vm.style)},[_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}}),(_vm.label)?_c('div',{staticClass:"activity-indicator-label",domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()],1)}
var ActivityIndicatorvue_type_template_id_1005d054_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=template&id=1005d054&

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Unit/Unit.js
/* harmony default export */ var Unit_Unit = (function(height) {
    return isFinite(height) ? height + 'px' : height;
});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Helpers/Unit/index.js

/* harmony default export */ var src_Helpers_Unit = (Unit_Unit);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=template&id=85a5e6be&
var BaseTypevue_type_template_id_85a5e6be_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"activity-indicator",class:_vm.classes},_vm._l((_vm.nodes),function(i){return _c('div')}),0)}
var BaseTypevue_type_template_id_85a5e6be_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=template&id=85a5e6be&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var ActivityIndicator_Types_BaseTypevue_type_script_lang_js_ = ({

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

});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_ActivityIndicator_Types_BaseTypevue_type_script_lang_js_ = (ActivityIndicator_Types_BaseTypevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue





/* normalize component */

var Types_BaseType_component = normalizeComponent(
  Components_ActivityIndicator_Types_BaseTypevue_type_script_lang_js_,
  BaseTypevue_type_template_id_85a5e6be_render,
  BaseTypevue_type_template_id_85a5e6be_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Types_BaseType = (Types_BaseType_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/Types/Dots.vue?vue&type=script&lang=js&



/* harmony default export */ var ActivityIndicator_Types_Dotsvue_type_script_lang_js_ = ({

    name: 'activity-indicator-dots',

    extends: Types_BaseType
});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/Types/Dots.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_ActivityIndicator_Types_Dotsvue_type_script_lang_js_ = (ActivityIndicator_Types_Dotsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/Types/Dots.vue?vue&type=style&index=0&lang=scss&
var Types_Dotsvue_type_style_index_0_lang_scss_ = __webpack_require__("4805");

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/Types/Dots.vue
var Types_Dots_render, Types_Dots_staticRenderFns





/* normalize component */

var Types_Dots_component = normalizeComponent(
  Components_ActivityIndicator_Types_Dotsvue_type_script_lang_js_,
  Types_Dots_render,
  Types_Dots_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Types_Dots = (Types_Dots_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/Types/Spinner.vue?vue&type=script&lang=js&




/* harmony default export */ var ActivityIndicator_Types_Spinnervue_type_script_lang_js_ = ({

    name: 'activity-indicator-spinner',

    extends: Types_BaseType,

    props: extend_extend({}, Types_BaseType.props, {
        nodes: {
            type: Number,
            default: 12
        }
    })
});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/Types/Spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_ActivityIndicator_Types_Spinnervue_type_script_lang_js_ = (ActivityIndicator_Types_Spinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/Types/Spinner.vue?vue&type=style&index=0&lang=scss&
var Types_Spinnervue_type_style_index_0_lang_scss_ = __webpack_require__("40c9");

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/Types/Spinner.vue
var Types_Spinner_render, Types_Spinner_staticRenderFns





/* normalize component */

var Types_Spinner_component = normalizeComponent(
  Components_ActivityIndicator_Types_Spinnervue_type_script_lang_js_,
  Types_Spinner_render,
  Types_Spinner_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Types_Spinner = (Types_Spinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Components_ActivityIndicator_ActivityIndicatorvue_type_script_lang_js_ = ({

    name: 'activity-indicator',

    extends: Types_BaseType,

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
        ActivityIndicatorDots: Types_Dots,
        ActivityIndicatorSpinner: Types_Spinner
    },

    computed: {

        style() {
            return {
                width: src_Helpers_Unit(this.width),
                maxWidth: src_Helpers_Unit(this.maxWidth),
                minWidth: src_Helpers_Unit(this.minWidth),
                height: src_Helpers_Unit(this.height),
                maxHeight: src_Helpers_Unit(this.maxHeight),
                minHeight: src_Helpers_Unit(this.minHeight)
            };
        },

        component() {
            return kebabCase_kebabCase(this.prefix + this.type.replace(this.prefix, ''));
        }
    }

});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Components_ActivityIndicator_ActivityIndicatorvue_type_script_lang_js_ = (Components_ActivityIndicator_ActivityIndicatorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=style&index=0&lang=scss&
var ActivityIndicator_ActivityIndicatorvue_type_style_index_0_lang_scss_ = __webpack_require__("2413");

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue






/* normalize component */

var ActivityIndicator_ActivityIndicator_component = normalizeComponent(
  src_Components_ActivityIndicator_ActivityIndicatorvue_type_script_lang_js_,
  ActivityIndicatorvue_type_template_id_1005d054_render,
  ActivityIndicatorvue_type_template_id_1005d054_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ActivityIndicator_ActivityIndicator = (ActivityIndicator_ActivityIndicator_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/ActivityIndicator/index.js

/* harmony default export */ var src_Components_ActivityIndicator = (ActivityIndicator_ActivityIndicator);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var Components_InputField_InputFieldvue_type_script_lang_js_ = ({

    name: 'input-field',

    mixins: [
        src_Mixins_Colorable,
        src_Mixins_FormControl
    ],

    components: {
        HelpText: src_Components_HelpText,
        FormControl: Components_FormControl,
        FormGroup: src_Components_FormGroup,
        FormLabel: src_Components_FormLabel,
        FormFeedback: src_Components_FormFeedback,
        ActivityIndicator: src_Components_ActivityIndicator
    }

});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Components_InputField_InputFieldvue_type_script_lang_js_ = (Components_InputField_InputFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=style&index=0&lang=scss&
var InputField_InputFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("e9fc");

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/InputField/InputField.vue






/* normalize component */

var InputField_InputField_component = normalizeComponent(
  src_Components_InputField_InputFieldvue_type_script_lang_js_,
  InputFieldvue_type_template_id_10c10a09_render,
  InputFieldvue_type_template_id_10c10a09_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputField_InputField = (InputField_InputField_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/node_modules/vue-interface/src/Components/InputField/index.js

/* harmony default export */ var src_Components_InputField = (InputField_InputField);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-place-autocomplete/src/PlaceAutocompleteField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ var PlaceAutocompleteFieldvue_type_script_lang_js_ = ({

    name: 'place-autocomplete-field',

    mixins: [
        src_Mixins_FormControl
    ],

    components: {
        FormGroup: src_Components_FormGroup,
        InputField: src_Components_InputField,
        ActivityIndicator: src_Components_ActivityIndicator,
        PlaceAutocompleteList: PlaceAutocompleteList
    },

    watch: {
        value(value) {
            this.query = value;
        }
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
                    this.showActivityIndicator = true;

                    this.$service.getPlacePredictions(this.getRequestOptions(), (response, status) => {
                        this.showActivityIndicator = false;

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
        Helpers_Script(`${this.baseUri}?key=${this.apiKey}&libraries=${this.libraries.join(',')}`).then(() => {
            this.$geocoder = new window.google.maps.Geocoder();
            this.$service = new window.google.maps.places.AutocompleteService();
            this.loaded = true;
            this.$emit('loaded');
        });
    },

    data() {
        return {
            loaded: false,
            predictions: false,
            query: this.value,
            showPredictions: false,
            showActivityIndicator: this.activity
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
});

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/src/PlaceAutocompleteField.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_PlaceAutocompleteFieldvue_type_script_lang_js_ = (PlaceAutocompleteFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-place-autocomplete/src/PlaceAutocompleteField.vue?vue&type=style&index=0&lang=scss&
var PlaceAutocompleteFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("d86b");

// CONCATENATED MODULE: ./node_modules/vue-place-autocomplete/src/PlaceAutocompleteField.vue






/* normalize component */

var PlaceAutocompleteField_component = normalizeComponent(
  src_PlaceAutocompleteFieldvue_type_script_lang_js_,
  PlaceAutocompleteFieldvue_type_template_id_0c9821e9_render,
  PlaceAutocompleteFieldvue_type_template_id_0c9821e9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PlaceAutocompleteField = (PlaceAutocompleteField_component.exports);
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





/* harmony default export */ var ContactInfoFieldsetvue_type_script_lang_js_ = ({
  name: 'contact-info-fieldset',
  mixins: [FormComponent],
  components: {
    InputField: Components_InputField,
    SelectField: Components_SelectField,
    PlaceAutocompleteField: PlaceAutocompleteField
  },
  directives: {
    PlaceAutofill: PlaceAutofill
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
      const states = assign_default()({}, this.page.site.config.states);

      delete states[''];
      delete states[' '];
      return states;
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Fieldsets/ContactInfoFieldset.vue?vue&type=script&lang=js&
 /* harmony default export */ var Fieldsets_ContactInfoFieldsetvue_type_script_lang_js_ = (ContactInfoFieldsetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Fieldsets/ContactInfoFieldset.vue





/* normalize component */

var ContactInfoFieldset_component = normalizeComponent(
  Fieldsets_ContactInfoFieldsetvue_type_script_lang_js_,
  ContactInfoFieldsetvue_type_template_id_74efe4e3_render,
  ContactInfoFieldsetvue_type_template_id_74efe4e3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ContactInfoFieldset = (ContactInfoFieldset_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/TextareaField/TextareaField.vue?vue&type=template&id=29796699&
var TextareaFieldvue_type_template_id_29796699_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:_vm.formGroupClasses,attrs:{"group":_vm.group}},[_vm._t("label",[(_vm.label)?_c('form-label',{ref:"label",attrs:{"for":_vm.$attrs.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_vm._t("control",[_c('div',{staticClass:"position-relative"},[_c('textarea',_vm._b({directives:[{name:"autogrow",rawName:"v-autogrow",value:(_vm.autogrow),expression:"autogrow"},{name:"bind-events",rawName:"v-bind-events"}],domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}},'textarea',_vm.controlAttributes,false)),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)]),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var TextareaFieldvue_type_template_id_29796699_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/TextareaField/TextareaField.vue?vue&type=template&id=29796699&

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Directives/Autogrow/Autogrow.js
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

function Autogrow_int(str) {
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
    return Autogrow_int(el.getBoundingClientRect().height);
}

function Autogrow_style(el, attr) {
    return window.getComputedStyle(el)[attr];
}

function resize(target, div, minHeight, maxHeight) {
    const dynamicHeight = Math.max(height(div) + Autogrow_int(Autogrow_style(div, 'lineHeight')), minHeight);
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

/* harmony default export */ var Autogrow = ({

    inserted(el, binding, vnode) {
        if(el.tagName !== 'TEXTAREA') {
            el = el.querySelector('textarea');
        }

        if(!el) {
            throw new Error('A textarea is required for the v-autogrow directive.');
        }

        if(binding.value === true) {
            init(el);
        }
        else if(binding.value !== false) {
            init(el, binding.value);
        }
    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Directives/Autogrow/index.js

/* harmony default export */ var Directives_Autogrow = (Autogrow);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/TextareaField/TextareaField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var TextareaFieldvue_type_script_lang_js_ = ({

    name: 'TextareaField',

    components: {
        HelpText: Components_HelpText,
        FormGroup: Components_FormGroup,
        FormLabel: Components_FormLabel,
        FormFeedback: Components_FormFeedback
    },

    directives: {
        autogrow: Directives_Autogrow
    },

    mixins: [
        Mixins_Colorable,
        Mixins_FormControl,
        Mixins_MergeClasses
    ],

    props: {
        
        /**
         * The autogrow attribute
         *
         * @property Boolean
         */
        autogrow: [Number, String, Boolean]

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/TextareaField/TextareaField.vue?vue&type=script&lang=js&
 /* harmony default export */ var TextareaField_TextareaFieldvue_type_script_lang_js_ = (TextareaFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/TextareaField/TextareaField.vue





/* normalize component */

var TextareaField_component = normalizeComponent(
  TextareaField_TextareaFieldvue_type_script_lang_js_,
  TextareaFieldvue_type_template_id_29796699_render,
  TextareaFieldvue_type_template_id_29796699_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TextareaField = (TextareaField_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/TextareaField/index.js

/* harmony default export */ var Components_TextareaField = (TextareaField);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fieldsets/EmploymentInfoFieldset.vue?vue&type=template&id=883a14ce&
var EmploymentInfoFieldsetvue_type_template_id_883a14ce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fieldset',[(!_vm.form.recurring)?_c('p',[_c('small',{staticClass:"text-muted",domProps:{"innerHTML":_vm._s(_vm.employmentOccurMessage)}})]):_vm._e(),(!_vm.isRetired)?_c('input-field',{ref:"employer",attrs:{"id":"employer","name":"employer","label":"Employer","placeholder":"Employer","disabled":_vm.isRetired,"errors":_vm.errors,"custom":""},model:{value:(_vm.form.employer),callback:function ($$v) {_vm.$set(_vm.form, "employer", $$v)},expression:"form.employer"}}):_vm._e(),(!_vm.isRetired)?_c('input-field',{ref:"occupation",attrs:{"id":"occupation","name":"occupation","label":"Occupation","placeholder":"Occupation","disabled":_vm.isRetired,"errors":_vm.errors,"custom":""},model:{value:(_vm.form.occupation),callback:function ($$v) {_vm.$set(_vm.form, "occupation", $$v)},expression:"form.occupation"}}):_vm._e(),_c('checkbox-field',{attrs:{"label":"I'm retired","value":"1","custom":""},model:{value:(_vm.form.retired),callback:function ($$v) {_vm.$set(_vm.form, "retired", $$v)},expression:"form.retired"}})],1)}
var EmploymentInfoFieldsetvue_type_template_id_883a14ce_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Fieldsets/EmploymentInfoFieldset.vue?vue&type=template&id=883a14ce&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/CheckboxField/CheckboxField.vue?vue&type=template&id=4fbb7b61&
var CheckboxFieldvue_type_template_id_4fbb7b61_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mergeClasses(_vm.custom ? 'custom-checkbox' : '', _vm.controlClass, _vm.inline ? _vm.inlineClass : '')},[_c('input',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],attrs:{"id":_vm.$attrs.id || _vm.hash,"type":"checkbox"},domProps:{"value":_vm.value,"checked":_vm.checkedValues.indexOf(_vm.value) !== -1},on:{"input":_vm.update}},'input',_vm.controlAttributes,false)),_c('label',{class:_vm.mergeClasses(_vm.labelClass),attrs:{"for":_vm.$attrs.id || _vm.hash}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var CheckboxFieldvue_type_template_id_4fbb7b61_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/CheckboxField/CheckboxField.vue?vue&type=template&id=4fbb7b61&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/RadioField/RadioField.vue?vue&type=template&id=4e6b3560&
var RadioFieldvue_type_template_id_4e6b3560_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mergeClasses(_vm.custom ? 'custom-radio' : '', _vm.controlClass, _vm.inline ? _vm.inlineClass : '')},[_c('input',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],attrs:{"id":_vm.$attrs.id || _vm.hash,"type":"radio"},domProps:{"value":_vm.value,"checked":_vm.checkedValue === _vm.value},on:{"change":_vm.update}},'input',_vm.controlAttributes,false)),_c('label',{class:_vm.mergeClasses(_vm.labelClass),attrs:{"for":_vm.$attrs.id || _vm.hash}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var RadioFieldvue_type_template_id_4e6b3560_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/RadioField/RadioField.vue?vue&type=template&id=4e6b3560&

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Hash/Hash.js
function hash(str) {
    let hash = 0;
    for(let i = 0; i < str.length; i++) {
        hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Helpers/Hash/index.js

/* harmony default export */ var Hash = (hash);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/RadioField/RadioField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var RadioFieldvue_type_script_lang_js_ = ({

    name: 'RadioField',

    components: {
        HelpText: Components_HelpText,
        FormFeedback: Components_FormFeedback
    },

    mixins: [
        Mixins_Colorable,
        Mixins_FormControl,
        Mixins_MergeClasses
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
            return Hash(this._uid.toString());
        },

        labelClass() {
            return Prefix('label', this.controlClass);
        },

        inputClass() {
            return Prefix('input', this.controlClass);
        },

        inlineClass() {
            return this.inline ? Prefix('inline', this.controlClass) : '';
        }

    },

    methods: {

        update(event) {
            this.$emit('change', event.target.value);
            this.$emit('input', event);
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/RadioField/RadioField.vue?vue&type=script&lang=js&
 /* harmony default export */ var RadioField_RadioFieldvue_type_script_lang_js_ = (RadioFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/RadioField/RadioField.vue





/* normalize component */

var RadioField_component = normalizeComponent(
  RadioField_RadioFieldvue_type_script_lang_js_,
  RadioFieldvue_type_template_id_4e6b3560_render,
  RadioFieldvue_type_template_id_4e6b3560_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RadioField = (RadioField_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/RadioField/index.js

/* harmony default export */ var Components_RadioField = (RadioField);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/CheckboxField/CheckboxField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var CheckboxFieldvue_type_script_lang_js_ = ({

    name: 'CheckboxField',

    extends: Components_RadioField,

    mixins: [
        Mixins_MergeClasses
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
});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/CheckboxField/CheckboxField.vue?vue&type=script&lang=js&
 /* harmony default export */ var CheckboxField_CheckboxFieldvue_type_script_lang_js_ = (CheckboxFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/CheckboxField/CheckboxField.vue





/* normalize component */

var CheckboxField_component = normalizeComponent(
  CheckboxField_CheckboxFieldvue_type_script_lang_js_,
  CheckboxFieldvue_type_template_id_4fbb7b61_render,
  CheckboxFieldvue_type_template_id_4fbb7b61_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CheckboxField = (CheckboxField_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/CheckboxField/index.js

/* harmony default export */ var Components_CheckboxField = (CheckboxField);

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
  mixins: [FormComponent],
  props: {
    legends: {
      type: Boolean,
      default: true
    }
  },
  components: {
    InputField: Components_InputField,
    CheckboxField: Components_CheckboxField
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
// CONCATENATED MODULE: ./src/Components/Fieldsets/EmploymentInfoFieldset.vue





/* normalize component */

var EmploymentInfoFieldset_component = normalizeComponent(
  Fieldsets_EmploymentInfoFieldsetvue_type_script_lang_js_,
  EmploymentInfoFieldsetvue_type_template_id_883a14ce_render,
  EmploymentInfoFieldsetvue_type_template_id_883a14ce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EmploymentInfoFieldset = (EmploymentInfoFieldset_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fieldsets/SelectDonationFieldset.vue?vue&type=template&id=04a98db9&
var SelectDonationFieldsetvue_type_template_id_04a98db9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fieldset',[(_vm.legends)?_c('h3',{class:{'mb-0': _vm.hasMinimumAmount}},[_vm._v("Donation amount")]):_vm._e(),(_vm.hasMinimumAmount)?_c('div',{staticClass:"mb-2"},[_c('small',{staticClass:"text-muted"},[_vm._v("Minimum accepted amount is $"+_vm._s(_vm.page.options.min_amount))])]):_vm._e(),_c('payment-buttons',{attrs:{"name":"amount","amounts":_vm.amounts,"errors":_vm.errors,"page":_vm.page},model:{value:(_vm.form.amount),callback:function ($$v) {_vm.$set(_vm.form, "amount", $$v)},expression:"form.amount"}}),(_vm.page.site.recurring && !_vm.page.options.recurring_only)?_c('div',{staticClass:"form-group mt-3"},[_c('label',{domProps:{"innerHTML":_vm._s(_vm.recurringMessage)}}),_c('toggle-button',{attrs:{"size":"lg"},model:{value:(_vm.form.recurring),callback:function ($$v) {_vm.$set(_vm.form, "recurring", _vm._n($$v))},expression:"form.recurring"}}),(!_vm.form.recurring)?_c('small',{staticClass:"text-muted form-text"},[_vm._v("You are making a single donation of the amount entered above. Click the 'monthly' button to make your gift go further as an automatic monthly donation.")]):_c('small',{staticClass:"text-muted form-text"},[_vm._v("This amount will be charged automatically once each month, on or about the "+_vm._s(_vm.chargeDate)+". You may cancel your donation at any time by contacting us.")])],1):(_vm.page.site.recurring && _vm.page.options.recurring_only)?_c('alert',{staticClass:"mt-3",attrs:{"variant":"warning"}},[_c('alert-heading',{staticClass:"h3 d-flex align-items-center"},[_c('icon',{staticClass:"mr-3",attrs:{"icon":"exclamation-triangle","size":"1.5x"}}),_vm._v(" Monthly Donation\n        ")],1),(_vm.page.options.recur_message)?_c('p',{staticClass:"font-weight-light",domProps:{"innerHTML":_vm._s(_vm.page.options.recur_message)}}):_c('p',[_vm._v("\n            Please note that this will be a monthly recurring donation. The\n            amount you select will be charged automatically once each month\n            on or about "),_c('em',[_vm._v(_vm._s(_vm.chargeDate))]),_vm._v(".  You may cancel your donation\n            at any time by contacting us.\n        ")])],1):_vm._e()],1)}
var SelectDonationFieldsetvue_type_template_id_04a98db9_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Fieldsets/SelectDonationFieldset.vue?vue&type=template&id=04a98db9&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js
var parse_float = __webpack_require__("59ad");
var parse_float_default = /*#__PURE__*/__webpack_require__.n(parse_float);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fields/ToggleButton.vue?vue&type=template&id=7c65a3b5&
var ToggleButtonvue_type_template_id_7c65a3b5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('btn-group',{staticClass:"toggle-button",attrs:{"size":_vm.size}},[_vm._l((_vm.buttons),function(label,i){return _c('btn',{key:i,ref:"buttons",refInFor:true,attrs:{"outline":i !== _vm.value.toString(),"variant":i === _vm.value.toString() ? 'success' : 'secondary',"type":"button"},domProps:{"innerHTML":_vm._s(label)},on:{"click":function($event){return _vm.$emit('input', i)}}})}),_vm._t("default")],2)}
var ToggleButtonvue_type_template_id_7c65a3b5_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Fields/ToggleButton.vue?vue&type=template&id=7c65a3b5&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("a4bb");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/BtnGroup/BtnGroup.vue?vue&type=template&id=262772d8&
var BtnGroupvue_type_template_id_262772d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,attrs:{"data-toggle":_vm.toggle ? 'buttons' : false,"role":"group"}},[(_vm.buttons)?_vm._l((_vm.buttons),function(button,i){return _c('btn',_vm._b({key:i},'btn',button,false))}):_vm._e(),_vm._t("default")],2)}
var BtnGroupvue_type_template_id_262772d8_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnGroup/BtnGroup.vue?vue&type=template&id=262772d8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/BtnGroup/BtnGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//






/* harmony default export */ var BtnGroupvue_type_script_lang_js_ = ({

    name: 'BtnGroup',

    components: {
        Btn: Components_Btn
    },

    mixins: [
        Mixins_Sizeable,
        Mixins_Colorable,
        Mixins_MergeClasses
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

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnGroup/BtnGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var BtnGroup_BtnGroupvue_type_script_lang_js_ = (BtnGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnGroup/BtnGroup.vue





/* normalize component */

var BtnGroup_component = normalizeComponent(
  BtnGroup_BtnGroupvue_type_script_lang_js_,
  BtnGroupvue_type_template_id_262772d8_render,
  BtnGroupvue_type_template_id_262772d8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BtnGroup = (BtnGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/BtnGroup/BtnGroupToggle.vue?vue&type=template&id=8b2ad400&
var BtnGroupTogglevue_type_template_id_8b2ad400_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn-group-toggle",attrs:{"data-toggle":"buttons"}},[_vm._t("default")],2)}
var BtnGroupTogglevue_type_template_id_8b2ad400_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnGroup/BtnGroupToggle.vue?vue&type=template&id=8b2ad400&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/BtnGroup/BtnGroupToggle.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var BtnGroupTogglevue_type_script_lang_js_ = ({

    name: 'BtnGroupToggle'

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnGroup/BtnGroupToggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var BtnGroup_BtnGroupTogglevue_type_script_lang_js_ = (BtnGroupTogglevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnGroup/BtnGroupToggle.vue





/* normalize component */

var BtnGroupToggle_component = normalizeComponent(
  BtnGroup_BtnGroupTogglevue_type_script_lang_js_,
  BtnGroupTogglevue_type_template_id_8b2ad400_render,
  BtnGroupTogglevue_type_template_id_8b2ad400_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BtnGroupToggle = (BtnGroupToggle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/BtnGroup/BtnToolbar.vue?vue&type=template&id=6ca26552&
var BtnToolbarvue_type_template_id_6ca26552_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn-toolbar",attrs:{"role":"toolbar"}},[_vm._t("default")],2)}
var BtnToolbarvue_type_template_id_6ca26552_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnGroup/BtnToolbar.vue?vue&type=template&id=6ca26552&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/BtnGroup/BtnToolbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var BtnToolbarvue_type_script_lang_js_ = ({

    name: 'BtnToolbar'

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnGroup/BtnToolbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var BtnGroup_BtnToolbarvue_type_script_lang_js_ = (BtnToolbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnGroup/BtnToolbar.vue





/* normalize component */

var BtnToolbar_component = normalizeComponent(
  BtnGroup_BtnToolbarvue_type_script_lang_js_,
  BtnToolbarvue_type_template_id_6ca26552_render,
  BtnToolbarvue_type_template_id_6ca26552_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BtnToolbar = (BtnToolbar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnGroup/index.js






/* harmony default export */ var Components_BtnGroup = (BtnGroup);

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
//



/* harmony default export */ var ToggleButtonvue_type_script_lang_js_ = ({
  name: 'toggle-button',
  inheritAttrs: false,
  mixins: [Mixins_FormControl],
  components: {
    Btn: Components_Btn,
    BtnGroup: Components_BtnGroup
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
        this.$emit('input', keys_default()(this.buttons).find(key => this.buttons[key] === vnode.$el.innerHTML));
      }
    });
  }

});
// CONCATENATED MODULE: ./src/Components/Fields/ToggleButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var Fields_ToggleButtonvue_type_script_lang_js_ = (ToggleButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Fields/ToggleButton.vue





/* normalize component */

var ToggleButton_component = normalizeComponent(
  Fields_ToggleButtonvue_type_script_lang_js_,
  ToggleButtonvue_type_template_id_7c65a3b5_render,
  ToggleButtonvue_type_template_id_7c65a3b5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ToggleButton = (ToggleButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fields/PaymentButtons.vue?vue&type=template&id=2a614228&
var PaymentButtonsvue_type_template_id_2a614228_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"payment-buttons",class:{'was-validated': !!_vm.errors.amount}},[_c('div',{staticClass:"payment-buttons-grid mb-2"},_vm._l((_vm.amounts),function(amount){return _c('btn',{key:amount,attrs:{"type":"button","outline":"","variant":"success","active":_vm.value ? _vm.value.toString() === amount.toString() : false},domProps:{"innerHTML":_vm._s(("$" + amount))},on:{"click":function($event){return _vm.onClickButton(amount)}}})}),1),_c('input-group',{class:{'is-invalid': !!_vm.errors.amount, 'mb-3': !_vm.page.site.recurring},attrs:{"prepend":"$"}},[_c('input-field',{attrs:{"custom":"","label":"Other Amount","placeholder":"Other Amount","group":false,"value":_vm.value},on:{"keydown":_vm.onKeyDown,"input":function (value) { return _vm.$emit('input', value); }}})],1),(_vm.errors.amount)?_c('form-feedback',{staticClass:"d-block",attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.errors.amount.join('<br>'))}}):_vm._e()],1)}
var PaymentButtonsvue_type_template_id_2a614228_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Fields/PaymentButtons.vue?vue&type=template&id=2a614228&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/InputGroup/InputGroup.vue?vue&type=template&id=7ec52572&
var InputGroupvue_type_template_id_7ec52572_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group",class:_vm.mergeClasses(_vm.colorableClasses, _vm.sizeableClass)},[_vm._t("prepend",[(_vm.prepend instanceof Array)?[_c('input-group-prepend',_vm._l((_vm.prepend),function(value){return _c('input-group-text',{key:value,domProps:{"innerHTML":_vm._s(value)}})}),1)]:(_vm.prepend)?[_c('input-group-prepend',{attrs:{"text":""}},[_vm._v("\n                "+_vm._s(_vm.prepend)+"\n            ")])]:_vm._e()]),_vm._t("default"),_vm._t("append",[(_vm.append instanceof Array)?[_c('input-group-append',_vm._l((_vm.append),function(value){return _c('input-group-text',{key:value,domProps:{"innerHTML":_vm._s(value)}})}),1)]:(_vm.append)?[_c('input-group-append',{attrs:{"text":""}},[_vm._v("\n                "+_vm._s(_vm.append)+"\n            ")])]:_vm._e()])],2)}
var InputGroupvue_type_template_id_7ec52572_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputGroup/InputGroup.vue?vue&type=template&id=7ec52572&

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/HasSlots/HasSlots.js
/* harmony default export */ var HasSlots = ({

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

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/HasSlots/index.js

/* harmony default export */ var Mixins_HasSlots = (HasSlots);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/InputGroup/InputGroupText.vue?vue&type=template&id=3eafdae4&
var InputGroupTextvue_type_template_id_3eafdae4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"input-group-text"},[_vm._t("default")],2)}
var InputGroupTextvue_type_template_id_3eafdae4_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputGroup/InputGroupText.vue?vue&type=template&id=3eafdae4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/InputGroup/InputGroupText.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var InputGroupTextvue_type_script_lang_js_ = ({

    name: 'InputGroupText'

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputGroup/InputGroupText.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputGroup_InputGroupTextvue_type_script_lang_js_ = (InputGroupTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputGroup/InputGroupText.vue





/* normalize component */

var InputGroupText_component = normalizeComponent(
  InputGroup_InputGroupTextvue_type_script_lang_js_,
  InputGroupTextvue_type_template_id_3eafdae4_render,
  InputGroupTextvue_type_template_id_3eafdae4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputGroupText = (InputGroupText_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/InputGroup/InputGroupAppend.vue?vue&type=template&id=76b6978e&
var InputGroupAppendvue_type_template_id_76b6978e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group-append"},[(_vm.text)?_c('input-group-text',[_vm._t("default")],2):_vm._t("default")],2)}
var InputGroupAppendvue_type_template_id_76b6978e_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputGroup/InputGroupAppend.vue?vue&type=template&id=76b6978e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/InputGroup/InputGroupAppend.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



/* harmony default export */ var InputGroupAppendvue_type_script_lang_js_ = ({

    name: 'InputGroupAppend',

    components: {
        InputGroupText: InputGroupText
    },

    props: {

        /**
         * The type attribute
         *
         * @property String
         */
        text: Boolean

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputGroup/InputGroupAppend.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputGroup_InputGroupAppendvue_type_script_lang_js_ = (InputGroupAppendvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputGroup/InputGroupAppend.vue





/* normalize component */

var InputGroupAppend_component = normalizeComponent(
  InputGroup_InputGroupAppendvue_type_script_lang_js_,
  InputGroupAppendvue_type_template_id_76b6978e_render,
  InputGroupAppendvue_type_template_id_76b6978e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputGroupAppend = (InputGroupAppend_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/InputGroup/InputGroupPrepend.vue?vue&type=template&id=5c7b6c72&
var InputGroupPrependvue_type_template_id_5c7b6c72_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group-prepend"},[(_vm.text)?_c('input-group-text',[_vm._t("default")],2):_vm._t("default")],2)}
var InputGroupPrependvue_type_template_id_5c7b6c72_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputGroup/InputGroupPrepend.vue?vue&type=template&id=5c7b6c72&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/InputGroup/InputGroupPrepend.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



/* harmony default export */ var InputGroupPrependvue_type_script_lang_js_ = ({

    name: 'InputGroupPrepend',

    components: {
        InputGroupText: InputGroupText
    },

    props: {

        /**
         * The type attribute
         *
         * @property String
         */
        text: Boolean

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputGroup/InputGroupPrepend.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputGroup_InputGroupPrependvue_type_script_lang_js_ = (InputGroupPrependvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputGroup/InputGroupPrepend.vue





/* normalize component */

var InputGroupPrepend_component = normalizeComponent(
  InputGroup_InputGroupPrependvue_type_script_lang_js_,
  InputGroupPrependvue_type_template_id_5c7b6c72_render,
  InputGroupPrependvue_type_template_id_5c7b6c72_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputGroupPrepend = (InputGroupPrepend_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/InputGroup/InputGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var InputGroupvue_type_script_lang_js_ = ({

    name: 'InputGroup',

    components: {
        InputGroupText: InputGroupText,
        InputGroupAppend: InputGroupAppend,
        InputGroupPrepend: InputGroupPrepend
    },

    mixins: [
        Mixins_HasSlots,
        Mixins_Sizeable,
        Mixins_Colorable,
        Mixins_MergeClasses
    ],

    props: {

        append: [Array, Number, String],

        prepend: [Array, Number, String]

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputGroup/InputGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputGroup_InputGroupvue_type_script_lang_js_ = (InputGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/InputGroup/InputGroup.vue?vue&type=style&index=0&lang=scss&
var InputGroupvue_type_style_index_0_lang_scss_ = __webpack_require__("f294");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputGroup/InputGroup.vue






/* normalize component */

var InputGroup_component = normalizeComponent(
  InputGroup_InputGroupvue_type_script_lang_js_,
  InputGroupvue_type_template_id_7ec52572_render,
  InputGroupvue_type_template_id_7ec52572_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputGroup = (InputGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputGroup/index.js







/* harmony default export */ var Components_InputGroup = (InputGroup);

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
//





/* harmony default export */ var PaymentButtonsvue_type_script_lang_js_ = ({
  name: 'payment-buttons',
  mixins: [Mixins_FormControl],
  components: {
    Btn: Components_Btn,
    InputField: Components_InputField,
    InputGroup: Components_InputGroup,
    FormFeedback: Components_FormFeedback
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
      this.$emit('input', parse_float_default()(this.value) !== (value = parse_float_default()(value)) ? value : null);
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

var PaymentButtons_component = normalizeComponent(
  Fields_PaymentButtonsvue_type_script_lang_js_,
  PaymentButtonsvue_type_template_id_2a614228_render,
  PaymentButtonsvue_type_template_id_2a614228_staticRenderFns,
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







/* harmony default export */ var SelectDonationFieldsetvue_type_script_lang_js_ = ({
  name: 'select-donation-fieldset',
  components: {
    Icon: index_es["a" /* FontAwesomeIcon */],
    Alert: Components_Alert,
    AlertHeading: AlertHeading,
    ToggleButton: ToggleButton,
    PaymentButtons: PaymentButtons
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
      return this.page.options.min_amount && (parse_float_default()(this.page.options.min_amount) || 0) > 0;
    },

    amounts() {
      const values = this.page.options.amounts ? this.page.options.amounts.split(',') : this.page.site.config.giveworks.ask_amounts;
      return values.filter(value => {
        return value >= (parse_float_default()(this.page.options.min_amount) || 0);
      });
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Fieldsets/SelectDonationFieldset.vue?vue&type=script&lang=js&
 /* harmony default export */ var Fieldsets_SelectDonationFieldsetvue_type_script_lang_js_ = (SelectDonationFieldsetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Fieldsets/SelectDonationFieldset.vue





/* normalize component */

var SelectDonationFieldset_component = normalizeComponent(
  Fieldsets_SelectDonationFieldsetvue_type_script_lang_js_,
  SelectDonationFieldsetvue_type_template_id_04a98db9_render,
  SelectDonationFieldsetvue_type_template_id_04a98db9_staticRenderFns,
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







/* harmony default export */ var Donationvue_type_script_lang_js_ = ({
  name: 'page-type-donation',
  extends: PageType,
  components: {
    BtnActivity: Components_BtnActivity,
    TextareaField: Components_TextareaField,
    PaymentGateways: PaymentGateways,
    ContactInfoFieldset: ContactInfoFieldset,
    EmploymentInfoFieldset: EmploymentInfoFieldset,
    SelectDonationFieldset: SelectDonationFieldset
  }
});
// CONCATENATED MODULE: ./src/Components/Types/Donation.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_Donationvue_type_script_lang_js_ = (Donationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Types/Donation.vue





/* normalize component */

var Donation_component = normalizeComponent(
  Types_Donationvue_type_script_lang_js_,
  Donationvue_type_template_id_4acf2962_render,
  Donationvue_type_template_id_4acf2962_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Donation = (Donation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Types/Petition.vue?vue&type=template&id=06721f59&
var Petitionvue_type_template_id_06721f59_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('contact-info-fieldset',{attrs:{"legends":false,"form":_vm.form,"errors":_vm.errors,"page":_vm.page}}),(_vm.shouldShowEmployment)?_c('employment-info-fieldset',{attrs:{"legends":false,"form":_vm.form,"errors":_vm.errors,"page":_vm.page}}):_vm._e(),(_vm.page.options.add_comment)?_c('textarea-field',{directives:[{name:"autogrow",rawName:"v-autogrow"}],attrs:{"id":"comment","label":_vm.commentMessage},model:{value:(_vm.form.comment),callback:function ($$v) {_vm.$set(_vm.form, "comment", $$v)},expression:"form.comment"}}):_vm._e(),_c('btn-activity',{attrs:{"size":"lg","type":"submit","orientation":"right","block":true,"activity":_vm.submitting,"label":_vm.buttonLabel || _vm.page.site.config.giveworks.button.petition}}),(_vm.page.options.add_optin)?_c('checkbox-field',{attrs:{"label":_vm.optinMessage,"value":"1","custom":""}}):_vm._e()],1)}
var Petitionvue_type_template_id_06721f59_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Types/Petition.vue?vue&type=template&id=06721f59&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Types/Petition.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var Petitionvue_type_script_lang_js_ = ({
  name: 'page-type-petition',
  extends: PageType,
  components: {
    BtnActivity: Components_BtnActivity,
    CheckboxField: Components_CheckboxField,
    ContactInfoFieldset: ContactInfoFieldset,
    EmploymentInfoFieldset: EmploymentInfoFieldset,
    SelectDonationFieldset: SelectDonationFieldset
  }
});
// CONCATENATED MODULE: ./src/Components/Types/Petition.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_Petitionvue_type_script_lang_js_ = (Petitionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Types/Petition.vue





/* normalize component */

var Petition_component = normalizeComponent(
  Types_Petitionvue_type_script_lang_js_,
  Petitionvue_type_template_id_06721f59_render,
  Petitionvue_type_template_id_06721f59_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Petition = (Petition_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Types/Signup.vue?vue&type=template&id=11b5dd68&
var Signupvue_type_template_id_11b5dd68_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c(_vm.page.options.service.split('\\').pop(),{tag:"component",attrs:{"submitting":_vm.submitting,"page":_vm.page,"form":_vm.form,"errors":_vm.errors}})],1)}
var Signupvue_type_template_id_11b5dd68_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Types/Signup.vue?vue&type=template&id=11b5dd68&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Signups/GoToWebinar.vue?vue&type=template&id=6e7f45e8&
var GoToWebinarvue_type_template_id_6e7f45e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fieldset',[_c('legend',[_vm._v("Your information")]),_vm._m(0),_c('input-field',{attrs:{"id":"first","label":"First Name*","placeholder":"First Name*","errors":_vm.errors,"custom":""},model:{value:(_vm.form.first),callback:function ($$v) {_vm.$set(_vm.form, "first", $$v)},expression:"form.first"}}),_c('input-field',{attrs:{"id":"last","label":"Last Name*","placeholder":"Last Name*","errors":_vm.errors,"custom":""},model:{value:(_vm.form.last),callback:function ($$v) {_vm.$set(_vm.form, "last", $$v)},expression:"form.last"}}),_c('input-field',{attrs:{"id":"email","label":"Email*","placeholder":"Email*","errors":_vm.errors,"custom":""},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}}),(_vm.page.options.show_source)?_c('input-field',{attrs:{"id":"source","label":"Source","placeholder":"Source","errors":_vm.errors,"custom":""},model:{value:(_vm.form.source),callback:function ($$v) {_vm.$set(_vm.form, "source", $$v)},expression:"form.source"}}):_vm._e(),(_vm.address || _vm.page.options.show_address)?_c('place-autocomplete-field',{directives:[{name:"place-autofill",rawName:"v-place-autofill:street.query",value:(_vm.form.address),expression:"form.address",arg:"street",modifiers:{"query":true}},{name:"place-autofill",rawName:"v-place-autofill:city",value:(_vm.form.city),expression:"form.city",arg:"city"},{name:"place-autofill",rawName:"v-place-autofill:state.short",value:(_vm.form.state),expression:"form.state",arg:"state",modifiers:{"short":true}},{name:"place-autofill",rawName:"v-place-autofill:zip",value:(_vm.form.zip_code),expression:"form.zip_code",arg:"zip"}],attrs:{"name":"address","label":"Address","placeholder":"Address","api-key":"AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU","errors":_vm.errors,"custom":""},model:{value:(_vm.form.address),callback:function ($$v) {_vm.$set(_vm.form, "address", $$v)},expression:"form.address"}}):_vm._e(),(_vm.page.options.show_city)?_c('input-field',{attrs:{"id":"city","label":"City","placeholder":"City","errors":_vm.errors,"custom":""},model:{value:(_vm.form.city),callback:function ($$v) {_vm.$set(_vm.form, "city", $$v)},expression:"form.city"}}):_vm._e(),(_vm.page.options.show_state)?_c('input-field',{attrs:{"id":"state","label":"State","placeholder":"State","errors":_vm.errors,"custom":""},model:{value:(_vm.form.state),callback:function ($$v) {_vm.$set(_vm.form, "state", $$v)},expression:"form.state"}}):_vm._e(),(_vm.page.options.show_zip)?_c('input-field',{attrs:{"id":"zip_code","label":"Zip Code","placeholder":"Zip Code","errors":_vm.errors,"custom":""},model:{value:(_vm.form.zip_code),callback:function ($$v) {_vm.$set(_vm.form, "zip_code", $$v)},expression:"form.zip_code"}}):_vm._e(),(_vm.page.options.show_country)?_c('input-field',{attrs:{"id":"country","label":"Country","placeholder":"Country","errors":_vm.errors,"custom":""},model:{value:(_vm.form.country),callback:function ($$v) {_vm.$set(_vm.form, "country", $$v)},expression:"form.country"}}):_vm._e(),(_vm.page.options.show_phone)?_c('input-field',{attrs:{"id":"phone","label":"Phone","placeholder":"Phone","errors":_vm.errors,"custom":""},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}}):_vm._e(),(_vm.page.options.show_organization)?_c('input-field',{attrs:{"id":"organization","label":"Organization","placeholder":"Organization","errors":_vm.errors,"custom":""},model:{value:(_vm.form.organization),callback:function ($$v) {_vm.$set(_vm.form, "organization", $$v)},expression:"form.organization"}}):_vm._e(),(_vm.page.options.show_job_title)?_c('input-field',{attrs:{"id":"job_title","label":"Job Title","placeholder":"Job Title","errors":_vm.errors,"custom":""},model:{value:(_vm.form.job_title),callback:function ($$v) {_vm.$set(_vm.form, "job_title", $$v)},expression:"form.job_title"}}):_vm._e(),(_vm.page.options.show_questions)?_c('textarea-field',{directives:[{name:"autogrow",rawName:"v-autogrow"}],attrs:{"id":"questions_comments","label":"Questions and Comments","placeholder":"Questions and Comments","errors":_vm.errors,"custom":""},model:{value:(_vm.form.questions_comments),callback:function ($$v) {_vm.$set(_vm.form, "questions_comments", $$v)},expression:"form.questions_comments"}}):_vm._e(),(_vm.page.options.show_industry)?_c('input-field',{attrs:{"id":"industry","label":"Industry","placeholder":"Industry","errors":_vm.errors,"custom":""},model:{value:(_vm.form.industry),callback:function ($$v) {_vm.$set(_vm.form, "industry", $$v)},expression:"form.industry"}}):_vm._e(),(_vm.page.options.show_employees)?_c('input-field',{attrs:{"id":"number_employees","label":"Number of Employees","placeholder":"Number of Employees","errors":_vm.errors,"custom":""},model:{value:(_vm.form.number_employees),callback:function ($$v) {_vm.$set(_vm.form, "number_employees", $$v)},expression:"form.number_employees"}}):_vm._e(),(_vm.page.options.show_timeframe)?_c('input-field',{attrs:{"id":"purchasing_timeframe","label":"Purchasing Timeframe","placeholder":"Purchasing Timeframe","errors":_vm.errors,"custom":""},model:{value:(_vm.form.purchasing_timeframe),callback:function ($$v) {_vm.$set(_vm.form, "purchasing_timeframe", $$v)},expression:"form.purchasing_timeframe"}}):_vm._e(),(_vm.page.options.show_role)?_c('input-field',{attrs:{"id":"purchasing_role","label":"Purchasing Role","placeholder":"Purchasing Role","errors":_vm.errors,"custom":""},model:{value:(_vm.form.purchasing_role),callback:function ($$v) {_vm.$set(_vm.form, "purchasing_role", $$v)},expression:"form.purchasing_role"}}):_vm._e(),_c('btn-activity',{attrs:{"size":"lg","type":"submit","orientation":"right","activity":_vm.submitting,"block":true,"label":_vm.buttonLabel || _vm.page.site.config.giveworks.button.signup}})],1)}
var GoToWebinarvue_type_template_id_6e7f45e8_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('em',[_vm._v("* Indicates required fields")])])}]


// CONCATENATED MODULE: ./src/Components/Signups/GoToWebinar.vue?vue&type=template&id=6e7f45e8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Signups/GoToWebinar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var GoToWebinarvue_type_script_lang_js_ = ({
  name: 'go-to-webinar',
  mixins: [FormComponent],
  components: {
    BtnActivity: Components_BtnActivity,
    InputField: Components_InputField,
    TextareaField: Components_TextareaField,
    PlaceAutocompleteField: PlaceAutocompleteField
  },
  directives: {
    Autogrow: Directives_Autogrow,
    PlaceAutofill: PlaceAutofill
  },
  props: {
    submitting: Boolean
  },
  computed: {
    orientation() {
      return this.$parent.$parent.orientation;
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Signups/GoToWebinar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Signups_GoToWebinarvue_type_script_lang_js_ = (GoToWebinarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Signups/GoToWebinar.vue





/* normalize component */

var GoToWebinar_component = normalizeComponent(
  Signups_GoToWebinarvue_type_script_lang_js_,
  GoToWebinarvue_type_template_id_6e7f45e8_render,
  GoToWebinarvue_type_template_id_6e7f45e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GoToWebinar = (GoToWebinar_component.exports);
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
  extends: PageType,
  components: {
    GoToWebinar: GoToWebinar
  }
});
// CONCATENATED MODULE: ./src/Components/Types/Signup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_Signupvue_type_script_lang_js_ = (Signupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Types/Signup.vue





/* normalize component */

var Signup_component = normalizeComponent(
  Types_Signupvue_type_script_lang_js_,
  Signupvue_type_template_id_11b5dd68_render,
  Signupvue_type_template_id_11b5dd68_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Signup = (Signup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Types/Survey.vue?vue&type=template&id=8cab133e&
var Surveyvue_type_template_id_8cab133e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.page.questions),function(question){return _c('div',[_c(_vm.component(question.type),{tag:"component",attrs:{"value":_vm.form[("field_" + (question.id))],"name":("field_" + (question.id)),"page":_vm.page,"form":_vm.form,"errors":_vm.errors,"question":question}})],1)}),_c('btn-activity',{attrs:{"size":"lg","type":"submit","block":true,"orientation":"right","activity":_vm.submitting,"label":_vm.buttonLabel || _vm.page.site.config.giveworks.button.survey}})],2)}
var Surveyvue_type_template_id_8cab133e_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Types/Survey.vue?vue&type=template&id=8cab133e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/AltEmailField.vue?vue&type=template&id=5af72923&
var AltEmailFieldvue_type_template_id_5af72923_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"type":"email","name":_vm.name,"id":_vm.question.id,"label":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"placeholder":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"required":_vm.question.required,"errors":_vm.errors,"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form[_vm.name]),callback:function ($$v) {_vm.$set(_vm.form, _vm.name, $$v)},expression:"form[name]"}})}
var AltEmailFieldvue_type_template_id_5af72923_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/AltEmailField.vue?vue&type=template&id=5af72923&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/SurveyField.vue?vue&type=script&lang=js&


/* harmony default export */ var SurveyFieldvue_type_script_lang_js_ = ({
  mixins: [Mixins_FormControl],
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
});
// CONCATENATED MODULE: ./src/Components/Survey/SurveyField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Survey_SurveyFieldvue_type_script_lang_js_ = (SurveyFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/SurveyField.vue
var SurveyField_render, SurveyField_staticRenderFns




/* normalize component */

var SurveyField_component = normalizeComponent(
  Survey_SurveyFieldvue_type_script_lang_js_,
  SurveyField_render,
  SurveyField_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SurveyField = (SurveyField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fields/InputField.vue?vue&type=script&lang=js&

/* harmony default export */ var Fields_InputFieldvue_type_script_lang_js_ = ({
  name: 'input-field',
  extends: Components_InputField
});
// CONCATENATED MODULE: ./src/Components/Fields/InputField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_Fields_InputFieldvue_type_script_lang_js_ = (Fields_InputFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Fields/InputField.vue
var InputField_render, InputField_staticRenderFns




/* normalize component */

var Fields_InputField_component = normalizeComponent(
  Components_Fields_InputFieldvue_type_script_lang_js_,
  InputField_render,
  InputField_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Fields_InputField = (Fields_InputField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/AltEmailField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AltEmailFieldvue_type_script_lang_js_ = ({
  name: 'survey-alt-email-field',
  extends: SurveyField,
  components: {
    InputField: Fields_InputField
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/AltEmailField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Survey_AltEmailFieldvue_type_script_lang_js_ = (AltEmailFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/AltEmailField.vue





/* normalize component */

var AltEmailField_component = normalizeComponent(
  Survey_AltEmailFieldvue_type_script_lang_js_,
  AltEmailFieldvue_type_template_id_5af72923_render,
  AltEmailFieldvue_type_template_id_5af72923_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AltEmailField = (AltEmailField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/AltPhoneField.vue?vue&type=template&id=6a698c79&
var AltPhoneFieldvue_type_template_id_6a698c79_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"type":"phone","name":_vm.name,"id":_vm.question.id,"label":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"required":_vm.question.required,"errors":_vm.errors,"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form[_vm.name]),callback:function ($$v) {_vm.$set(_vm.form, _vm.name, $$v)},expression:"form[name]"}})}
var AltPhoneFieldvue_type_template_id_6a698c79_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/AltPhoneField.vue?vue&type=template&id=6a698c79&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/AltPhoneField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AltPhoneFieldvue_type_script_lang_js_ = ({
  name: 'survey-alt-phone-field',
  extends: SurveyField,
  components: {
    InputField: Fields_InputField
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/AltPhoneField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Survey_AltPhoneFieldvue_type_script_lang_js_ = (AltPhoneFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/AltPhoneField.vue





/* normalize component */

var AltPhoneField_component = normalizeComponent(
  Survey_AltPhoneFieldvue_type_script_lang_js_,
  AltPhoneFieldvue_type_template_id_6a698c79_render,
  AltPhoneFieldvue_type_template_id_6a698c79_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AltPhoneField = (AltPhoneField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/CheckboxField.vue?vue&type=template&id=78b2d774&
var CheckboxFieldvue_type_template_id_78b2d774_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group",class:{'is-invalid': !!_vm.invalidFeedback}},[_c('label',[_vm._v("\n        "+_vm._s(_vm.question.question)+"\n        "),(_vm.question.required)?_c('sup',[_vm._v("*")]):_vm._e()]),_vm._l((_vm.question.answers),function(answer,key){return _c('checkbox-field',{key:key,attrs:{"label":answer,"value":answer,"checkedValues":_vm.value || [],"name":_vm.name,"id":(_vm.name + "_" + key),"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form[_vm.name]),callback:function ($$v) {_vm.$set(_vm.form, _vm.name, $$v)},expression:"form[name]"}})}),(_vm.question.accept_other)?[_c('checkbox-field',{directives:[{name:"changed",rawName:"v-changed"}],attrs:{"label":"Other:","value":"other","name":_vm.name,"id":(_vm.name + "_50"),"checkedValues":_vm.value || [],"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form[_vm.name]),callback:function ($$v) {_vm.$set(_vm.form, _vm.name, $$v)},expression:"form[name]"}}),_c('input-field',{staticClass:"mt-2",class:{'is-invalid': _vm.errors[_vm.name]},attrs:{"type":"text","label":"Other","placeholder":"Other","name":(_vm.name + "_other"),"id":(_vm.name + "_other"),"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form[(_vm.name + "_other")]),callback:function ($$v) {_vm.$set(_vm.form, (_vm.name + "_other"), $$v)},expression:"form[`${name}_other`]"}})]:_vm._e(),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)}
var CheckboxFieldvue_type_template_id_78b2d774_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/CheckboxField.vue?vue&type=template&id=78b2d774&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fields/CheckboxField.vue?vue&type=script&lang=js&

/* harmony default export */ var Fields_CheckboxFieldvue_type_script_lang_js_ = ({
  name: 'checkbox-field',
  extends: Components_CheckboxField
});
// CONCATENATED MODULE: ./src/Components/Fields/CheckboxField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_Fields_CheckboxFieldvue_type_script_lang_js_ = (Fields_CheckboxFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Fields/CheckboxField.vue
var CheckboxField_render, CheckboxField_staticRenderFns




/* normalize component */

var Fields_CheckboxField_component = normalizeComponent(
  Components_Fields_CheckboxFieldvue_type_script_lang_js_,
  CheckboxField_render,
  CheckboxField_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Fields_CheckboxField = (Fields_CheckboxField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/CheckboxField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Survey_CheckboxFieldvue_type_script_lang_js_ = ({
  name: 'survey-checkbox-field',
  extends: SurveyField,
  components: {
    CheckboxField: Fields_CheckboxField,
    FormFeedback: Components_FormFeedback,
    InputField: Fields_InputField
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/CheckboxField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_Survey_CheckboxFieldvue_type_script_lang_js_ = (Survey_CheckboxFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/CheckboxField.vue





/* normalize component */

var Survey_CheckboxField_component = normalizeComponent(
  Components_Survey_CheckboxFieldvue_type_script_lang_js_,
  CheckboxFieldvue_type_template_id_78b2d774_render,
  CheckboxFieldvue_type_template_id_78b2d774_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Survey_CheckboxField = (Survey_CheckboxField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/CityField.vue?vue&type=template&id=73e2cabd&
var CityFieldvue_type_template_id_73e2cabd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"id":"city","name":"city","label":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"placeholder":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"required":_vm.question.required,"errors":_vm.errors,"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form.city),callback:function ($$v) {_vm.$set(_vm.form, "city", $$v)},expression:"form.city"}})}
var CityFieldvue_type_template_id_73e2cabd_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/CityField.vue?vue&type=template&id=73e2cabd&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/CityField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CityFieldvue_type_script_lang_js_ = ({
  name: 'survey-city-field',
  extends: SurveyField,
  components: {
    InputField: Fields_InputField
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/CityField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Survey_CityFieldvue_type_script_lang_js_ = (CityFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/CityField.vue





/* normalize component */

var CityField_component = normalizeComponent(
  Survey_CityFieldvue_type_script_lang_js_,
  CityFieldvue_type_template_id_73e2cabd_render,
  CityFieldvue_type_template_id_73e2cabd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CityField = (CityField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/DollarAmountField.vue?vue&type=template&id=245fb031&
var DollarAmountFieldvue_type_template_id_245fb031_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group"},[_c('fieldset',[_c('legend',[_vm._v("Select an amount")]),_vm._l((_vm.amounts),function(chunk){return _c('div',{staticClass:"row"},_vm._l((chunk),function(amount){return _c('div',{staticClass:"col-sm-6"},[_c('radio-field',{attrs:{"name":"donation","label":amount,"value":amount,"custom":""},model:{value:(_vm.form.donation),callback:function ($$v) {_vm.$set(_vm.form, "donation", $$v)},expression:"form.donation"}})],1)}),0)}),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('label',{attrs:{"for":_vm.question.id},domProps:{"innerHTML":_vm._s(_vm.question.question)}}),_c('input-group',{attrs:{"prepend":"$"}},[_c('input',{staticClass:"form-control",class:{'is-invalid': !!_vm.invalidFeedback},attrs:{"type":"text","name":_vm.name,"required":_vm.question.required},domProps:{"value":_vm.value}})])],1)])],2)])}
var DollarAmountFieldvue_type_template_id_245fb031_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/DollarAmountField.vue?vue&type=template&id=245fb031&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fields/RadioField.vue?vue&type=script&lang=js&

/* harmony default export */ var Fields_RadioFieldvue_type_script_lang_js_ = ({
  name: 'radio-field',
  extends: Components_RadioField
});
// CONCATENATED MODULE: ./src/Components/Fields/RadioField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_Fields_RadioFieldvue_type_script_lang_js_ = (Fields_RadioFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Fields/RadioField.vue
var RadioField_render, RadioField_staticRenderFns




/* normalize component */

var Fields_RadioField_component = normalizeComponent(
  Components_Fields_RadioFieldvue_type_script_lang_js_,
  RadioField_render,
  RadioField_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Fields_RadioField = (Fields_RadioField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/DollarAmountField.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var DollarAmountFieldvue_type_script_lang_js_ = ({
  name: 'survey-dollar-amount-field',
  extends: SurveyField,
  components: {
    InputGroup: Components_InputGroup,
    RadioField: Fields_RadioField
  },
  computed: {
    amounts() {
      const values = this.question.answers ? this.question.answers.split('|') : this.page.site.config.giveworks.ask_amounts;
      return chunk(values.filter(value => {
        return value >= (parse_float_default()(this.page.options.min_amount) || 0);
      }), 2);
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Survey/DollarAmountField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Survey_DollarAmountFieldvue_type_script_lang_js_ = (DollarAmountFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/DollarAmountField.vue





/* normalize component */

var DollarAmountField_component = normalizeComponent(
  Survey_DollarAmountFieldvue_type_script_lang_js_,
  DollarAmountFieldvue_type_template_id_245fb031_render,
  DollarAmountFieldvue_type_template_id_245fb031_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DollarAmountField = (DollarAmountField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/FirstField.vue?vue&type=template&id=8c2ec134&
var FirstFieldvue_type_template_id_8c2ec134_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"id":"first","name":"first","label":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"placeholder":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"required":_vm.question.required,"errors":_vm.errors,"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form.first),callback:function ($$v) {_vm.$set(_vm.form, "first", $$v)},expression:"form.first"}})}
var FirstFieldvue_type_template_id_8c2ec134_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/FirstField.vue?vue&type=template&id=8c2ec134&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/FirstField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var FirstFieldvue_type_script_lang_js_ = ({
  name: 'survey-first-field',
  extends: SurveyField,
  components: {
    InputField: Fields_InputField
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/FirstField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Survey_FirstFieldvue_type_script_lang_js_ = (FirstFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/FirstField.vue





/* normalize component */

var FirstField_component = normalizeComponent(
  Survey_FirstFieldvue_type_script_lang_js_,
  FirstFieldvue_type_template_id_8c2ec134_render,
  FirstFieldvue_type_template_id_8c2ec134_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FirstField = (FirstField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/InputField.vue?vue&type=template&id=9cb94e3a&
var InputFieldvue_type_template_id_9cb94e3a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"name":_vm.name,"id":_vm.question.id,"label":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"placeholder":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"required":_vm.question.required,"errors":_vm.errors,"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form[_vm.name]),callback:function ($$v) {_vm.$set(_vm.form, _vm.name, $$v)},expression:"form[name]"}})}
var InputFieldvue_type_template_id_9cb94e3a_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/InputField.vue?vue&type=template&id=9cb94e3a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/InputField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Survey_InputFieldvue_type_script_lang_js_ = ({
  name: 'survey-input-field',
  extends: SurveyField,
  components: {
    InputField: Fields_InputField
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/InputField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_Survey_InputFieldvue_type_script_lang_js_ = (Survey_InputFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/InputField.vue





/* normalize component */

var Survey_InputField_component = normalizeComponent(
  Components_Survey_InputFieldvue_type_script_lang_js_,
  InputFieldvue_type_template_id_9cb94e3a_render,
  InputFieldvue_type_template_id_9cb94e3a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Survey_InputField = (Survey_InputField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/LastField.vue?vue&type=template&id=7b6dd35e&
var LastFieldvue_type_template_id_7b6dd35e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"id":"last","name":"last","label":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"placeholder":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"required":_vm.question.required,"errors":_vm.errors,"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form.last),callback:function ($$v) {_vm.$set(_vm.form, "last", $$v)},expression:"form.last"}})}
var LastFieldvue_type_template_id_7b6dd35e_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/LastField.vue?vue&type=template&id=7b6dd35e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/LastField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var LastFieldvue_type_script_lang_js_ = ({
  name: 'survey-last-field',
  extends: SurveyField,
  components: {
    InputField: Fields_InputField
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/LastField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Survey_LastFieldvue_type_script_lang_js_ = (LastFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/LastField.vue





/* normalize component */

var LastField_component = normalizeComponent(
  Survey_LastFieldvue_type_script_lang_js_,
  LastFieldvue_type_template_id_7b6dd35e_render,
  LastFieldvue_type_template_id_7b6dd35e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LastField = (LastField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/PrimaryEmailField.vue?vue&type=template&id=a0381838&
var PrimaryEmailFieldvue_type_template_id_a0381838_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"type":"email","name":"email","id":"email","label":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"placeholder":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"required":_vm.question.required,"errors":_vm.errors,"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})}
var PrimaryEmailFieldvue_type_template_id_a0381838_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/PrimaryEmailField.vue?vue&type=template&id=a0381838&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/PrimaryEmailField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var PrimaryEmailFieldvue_type_script_lang_js_ = ({
  name: 'survey-primary-email-field',
  extends: SurveyField,
  components: {
    InputField: Fields_InputField
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/PrimaryEmailField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Survey_PrimaryEmailFieldvue_type_script_lang_js_ = (PrimaryEmailFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/PrimaryEmailField.vue





/* normalize component */

var PrimaryEmailField_component = normalizeComponent(
  Survey_PrimaryEmailFieldvue_type_script_lang_js_,
  PrimaryEmailFieldvue_type_template_id_a0381838_render,
  PrimaryEmailFieldvue_type_template_id_a0381838_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PrimaryEmailField = (PrimaryEmailField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/PrimaryPhoneField.vue?vue&type=template&id=52870d88&
var PrimaryPhoneFieldvue_type_template_id_52870d88_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"type":"phone","name":"phone","id":"phone","label":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"placeholder":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"required":_vm.question.required,"errors":_vm.errors,"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}})}
var PrimaryPhoneFieldvue_type_template_id_52870d88_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/PrimaryPhoneField.vue?vue&type=template&id=52870d88&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/PrimaryPhoneField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var PrimaryPhoneFieldvue_type_script_lang_js_ = ({
  name: 'survey-primary-phone-field',
  extends: SurveyField,
  components: {
    InputField: Fields_InputField
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/PrimaryPhoneField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Survey_PrimaryPhoneFieldvue_type_script_lang_js_ = (PrimaryPhoneFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/PrimaryPhoneField.vue





/* normalize component */

var PrimaryPhoneField_component = normalizeComponent(
  Survey_PrimaryPhoneFieldvue_type_script_lang_js_,
  PrimaryPhoneFieldvue_type_template_id_52870d88_render,
  PrimaryPhoneFieldvue_type_template_id_52870d88_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PrimaryPhoneField = (PrimaryPhoneField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/RadioField.vue?vue&type=template&id=7b7442e6&
var RadioFieldvue_type_template_id_7b7442e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:{'is-invalid': !!_vm.invalidFeedback}},[_c('label',[_vm._v("\n        "+_vm._s(_vm.question.question)+" "),(_vm.question.required)?_c('sup',[_vm._v("*")]):_vm._e()]),_vm._l((_vm.question.answers),function(answer,key){return _c('radio-field',{key:key,attrs:{"label":answer,"value":answer,"checkedValue":_vm.value,"name":_vm.name,"id":(_vm.name + "_" + key),"custom":""},on:{"change":_vm.updated},model:{value:(_vm.form[_vm.name]),callback:function ($$v) {_vm.$set(_vm.form, _vm.name, $$v)},expression:"form[name]"}})}),(_vm.question.accept_other)?[_c('radio-field',{directives:[{name:"changed",rawName:"v-changed"}],attrs:{"value":"other","label":"Other:","name":_vm.name,"id":(_vm.name + "_50"),"checkedValue":_vm.value},on:{"change":_vm.updated},model:{value:(_vm.form[_vm.name]),callback:function ($$v) {_vm.$set(_vm.form, _vm.name, $$v)},expression:"form[name]"}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form[(_vm.name + "_other")]),expression:"form[`${name}_other`]"}],staticClass:"form-control",class:{'is-invalid': _vm.errors[_vm.name]},attrs:{"type":"text","name":(_vm.name + "_other"),"id":(_vm.name + "_other")},domProps:{"value":(_vm.form[(_vm.name + "_other")])},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, (_vm.name + "_other"), $event.target.value)},function($event){return _vm.updated($event.target.value);}]}})]:_vm._e(),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)}
var RadioFieldvue_type_template_id_7b7442e6_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/RadioField.vue?vue&type=template&id=7b7442e6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/RadioField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Survey_RadioFieldvue_type_script_lang_js_ = ({
  name: 'survey-radio-field',
  extends: SurveyField,
  components: {
    RadioField: Fields_RadioField,
    FormFeedback: Components_FormFeedback
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/RadioField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_Survey_RadioFieldvue_type_script_lang_js_ = (Survey_RadioFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/RadioField.vue





/* normalize component */

var Survey_RadioField_component = normalizeComponent(
  Components_Survey_RadioFieldvue_type_script_lang_js_,
  RadioFieldvue_type_template_id_7b7442e6_render,
  RadioFieldvue_type_template_id_7b7442e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Survey_RadioField = (Survey_RadioField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/SelectField.vue?vue&type=template&id=e532c0b2&
var SelectFieldvue_type_template_id_e532c0b2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('select-field',{attrs:{"label":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"name":_vm.name,"id":_vm.question.id,"errors":_vm.errors,"required":_vm.question.required,"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form[_vm.name]),callback:function ($$v) {_vm.$set(_vm.form, _vm.name, $$v)},expression:"form[name]"}},_vm._l((_vm.question.answers),function(value,key){return _c('option',{domProps:{"value":value,"innerHTML":_vm._s(value)}})}),0)}
var SelectFieldvue_type_template_id_e532c0b2_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/SelectField.vue?vue&type=template&id=e532c0b2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fields/SelectField.vue?vue&type=script&lang=js&

/* harmony default export */ var Fields_SelectFieldvue_type_script_lang_js_ = ({
  name: 'select-field',
  extends: Components_SelectField
});
// CONCATENATED MODULE: ./src/Components/Fields/SelectField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_Fields_SelectFieldvue_type_script_lang_js_ = (Fields_SelectFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Fields/SelectField.vue
var SelectField_render, SelectField_staticRenderFns




/* normalize component */

var Fields_SelectField_component = normalizeComponent(
  Components_Fields_SelectFieldvue_type_script_lang_js_,
  SelectField_render,
  SelectField_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Fields_SelectField = (Fields_SelectField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/SelectField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Survey_SelectFieldvue_type_script_lang_js_ = ({
  name: 'survey-select-field',
  extends: SurveyField,
  components: {
    SelectField: Fields_SelectField
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/SelectField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_Survey_SelectFieldvue_type_script_lang_js_ = (Survey_SelectFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/SelectField.vue





/* normalize component */

var Survey_SelectField_component = normalizeComponent(
  Components_Survey_SelectFieldvue_type_script_lang_js_,
  SelectFieldvue_type_template_id_e532c0b2_render,
  SelectFieldvue_type_template_id_e532c0b2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Survey_SelectField = (Survey_SelectField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/StateField.vue?vue&type=template&id=68857fba&
var StateFieldvue_type_template_id_68857fba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('select-field',{attrs:{"name":"state","id":_vm.question.id,"label":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"required":_vm.question.required,"errors":_vm.errors,"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form.state),callback:function ($$v) {_vm.$set(_vm.form, "state", $$v)},expression:"form.state"}},_vm._l((_vm.page.site.config.states),function(label,value){return _c('option',{domProps:{"value":value,"innerHTML":_vm._s(label)}})}),0)}
var StateFieldvue_type_template_id_68857fba_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/StateField.vue?vue&type=template&id=68857fba&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/StateField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var StateFieldvue_type_script_lang_js_ = ({
  name: 'survey-state-field',
  extends: SurveyField,
  components: {
    SelectField: Fields_SelectField
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/StateField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Survey_StateFieldvue_type_script_lang_js_ = (StateFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/StateField.vue





/* normalize component */

var StateField_component = normalizeComponent(
  Survey_StateFieldvue_type_script_lang_js_,
  StateFieldvue_type_template_id_68857fba_render,
  StateFieldvue_type_template_id_68857fba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StateField = (StateField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/StreetField.vue?vue&type=template&id=513825de&
var StreetFieldvue_type_template_id_513825de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('place-autocomplete-field',{directives:[{name:"place-autofill",rawName:"v-place-autofill:street",value:(_vm.form.street),expression:"form.street",arg:"street"},{name:"place-autofill",rawName:"v-place-autofill:city",value:(_vm.form.city),expression:"form.city",arg:"city"},{name:"place-autofill",rawName:"v-place-autofill:state",value:(_vm.form.state),expression:"form.state",arg:"state"},{name:"place-autofill",rawName:"v-place-autofill:zip",value:(_vm.form.zip),expression:"form.zip",arg:"zip"}],attrs:{"id":"street","name":"street","api-key":"AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU","errors":_vm.errors,"label":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"placeholder":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"required":_vm.question.required,"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form.street),callback:function ($$v) {_vm.$set(_vm.form, "street", $$v)},expression:"form.street"}})}
var StreetFieldvue_type_template_id_513825de_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/StreetField.vue?vue&type=template&id=513825de&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/StreetField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var StreetFieldvue_type_script_lang_js_ = ({
  name: 'survey-street-field',
  extends: SurveyField,
  components: {
    PlaceAutocompleteField: PlaceAutocompleteField
  },
  directives: {
    PlaceAutofill: PlaceAutofill
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/StreetField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Survey_StreetFieldvue_type_script_lang_js_ = (StreetFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/StreetField.vue





/* normalize component */

var StreetField_component = normalizeComponent(
  Survey_StreetFieldvue_type_script_lang_js_,
  StreetFieldvue_type_template_id_513825de_render,
  StreetFieldvue_type_template_id_513825de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StreetField = (StreetField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/TextareaField.vue?vue&type=template&id=71bd1d1c&
var TextareaFieldvue_type_template_id_71bd1d1c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea-field',{attrs:{"label":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"placeholder":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"name":_vm.name,"required":_vm.question.required,"id":_vm.question.id,"errors":_vm.errors,"custom":""},on:{"input":_vm.updated},model:{value:(_vm.form[_vm.name]),callback:function ($$v) {_vm.$set(_vm.form, _vm.name, $$v)},expression:"form[name]"}})}
var TextareaFieldvue_type_template_id_71bd1d1c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/TextareaField.vue?vue&type=template&id=71bd1d1c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Fields/TextareaField.vue?vue&type=script&lang=js&

/* harmony default export */ var Fields_TextareaFieldvue_type_script_lang_js_ = ({
  name: 'textarea-field',
  extends: Components_TextareaField
});
// CONCATENATED MODULE: ./src/Components/Fields/TextareaField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_Fields_TextareaFieldvue_type_script_lang_js_ = (Fields_TextareaFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Fields/TextareaField.vue
var TextareaField_render, TextareaField_staticRenderFns




/* normalize component */

var Fields_TextareaField_component = normalizeComponent(
  Components_Fields_TextareaFieldvue_type_script_lang_js_,
  TextareaField_render,
  TextareaField_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Fields_TextareaField = (Fields_TextareaField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/TextareaField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import Autogrow from 'vue-interface/src/Directives/Autogrow';


/* harmony default export */ var Survey_TextareaFieldvue_type_script_lang_js_ = ({
  name: 'survey-textarea-field',
  extends: SurveyField,
  components: {
    TextareaField: Fields_TextareaField
  },
  directives: {// Autogrow
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/TextareaField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_Survey_TextareaFieldvue_type_script_lang_js_ = (Survey_TextareaFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/TextareaField.vue





/* normalize component */

var Survey_TextareaField_component = normalizeComponent(
  Components_Survey_TextareaFieldvue_type_script_lang_js_,
  TextareaFieldvue_type_template_id_71bd1d1c_render,
  TextareaFieldvue_type_template_id_71bd1d1c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Survey_TextareaField = (Survey_TextareaField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/ZipField.vue?vue&type=template&id=c8a7cd28&
var ZipFieldvue_type_template_id_c8a7cd28_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"label":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"placeholder":("" + (_vm.question.question) + (_vm.question.required ? '*' : '')),"required":_vm.question.required,"errors":_vm.errors,"id":"zip","name":"zip","maxlength":"9","x_autocompletetype":"postal-code","custom":""},on:{"input":_vm.updated},model:{value:(_vm.form.zip),callback:function ($$v) {_vm.$set(_vm.form, "zip", $$v)},expression:"form.zip"}})}
var ZipFieldvue_type_template_id_c8a7cd28_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Survey/ZipField.vue?vue&type=template&id=c8a7cd28&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Survey/ZipField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ZipFieldvue_type_script_lang_js_ = ({
  name: 'survey-zip-field',
  extends: SurveyField,
  components: {
    InputField: Fields_InputField
  }
});
// CONCATENATED MODULE: ./src/Components/Survey/ZipField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Survey_ZipFieldvue_type_script_lang_js_ = (ZipFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Survey/ZipField.vue





/* normalize component */

var ZipField_component = normalizeComponent(
  Survey_ZipFieldvue_type_script_lang_js_,
  ZipFieldvue_type_template_id_c8a7cd28_render,
  ZipFieldvue_type_template_id_c8a7cd28_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ZipField = (ZipField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Types/Survey.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var Surveyvue_type_script_lang_js_ = ({
  name: 'page-type-survey',
  extends: PageType,
  components: {
    AltEmailField: AltEmailField,
    AltPhoneField: AltPhoneField,
    BtnActivity: Components_BtnActivity,
    CheckboxField: Survey_CheckboxField,
    CityField: CityField,
    DollarAmountField: DollarAmountField,
    FirstField: FirstField,
    InputField: Survey_InputField,
    LastField: LastField,
    PrimaryEmailField: PrimaryEmailField,
    PrimaryPhoneField: PrimaryPhoneField,
    RadioField: Survey_RadioField,
    SelectField: Survey_SelectField,
    StateField: StateField,
    StreetField: StreetField,
    TextareaField: Survey_TextareaField,
    ZipField: ZipField
  },
  methods: {
    component(name) {
      return COMPONENTS[name] || name;
    }

  }
});
// CONCATENATED MODULE: ./src/Components/Types/Survey.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_Surveyvue_type_script_lang_js_ = (Surveyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Components/Types/Survey.vue





/* normalize component */

var Survey_component = normalizeComponent(
  Types_Surveyvue_type_script_lang_js_,
  Surveyvue_type_template_id_8cab133e_render,
  Surveyvue_type_template_id_8cab133e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Survey = (Survey_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30ebeb8c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/HttpErrorResponse.vue?vue&type=template&id=5531948c&
var HttpErrorResponsevue_type_template_id_5531948c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-left"},[_c('alert',{style:({'width': _vm.widthUnit, 'min-width': _vm.minWidthUnit, 'max-width': _vm.maxWidthUnit}),attrs:{"variant":"danger","heading":("Error: " + _vm.status)}},[_vm._v("\n        "+_vm._s(_vm.formattedMessage)+"\n    ")])],1)}
var HttpErrorResponsevue_type_template_id_5531948c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/HttpErrorResponse.vue?vue&type=template&id=5531948c&

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
    Alert: Components_Alert
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
      return Helpers_Unit(this.width);
    },

    minWidthUnit() {
      return Helpers_Unit(this.minWidth);
    },

    maxWidthUnit() {
      return Helpers_Unit(this.maxWidth);
    },

    status() {
      return this.error.status || 400;
    },

    formattedMessage() {
      if (this.error.data && this.error.data.errors) {
        return keys_default()(this.error.data.errors).reduce((carry, key) => {
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
// CONCATENATED MODULE: ./src/Components/HttpErrorResponse.vue





/* normalize component */

var HttpErrorResponse_component = normalizeComponent(
  Components_HttpErrorResponsevue_type_script_lang_js_,
  HttpErrorResponsevue_type_template_id_5531948c_render,
  HttpErrorResponsevue_type_template_id_5531948c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HttpErrorResponse = (HttpErrorResponse_component.exports);
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









/* harmony default export */ var GiveworksFormvue_type_script_lang_js_ = ({
  name: 'GiveworksForm',
  components: {
    ActivityIndicator: Components_ActivityIndicator,
    HttpErrorResponse: HttpErrorResponse,
    Donation: Donation,
    Petition: Petition,
    Signup: Signup,
    Survey: Survey
  },
  props: {
    env: String,
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
    Http_Request.defaults = Http(this.env);
    Http_Request.defaults.headers = {
      'Authorization': `Bearer ${this.apiKey}`
    };
  },

  mounted() {
    if (!this.page.id && this.apiKey) {
      Page_Page.find(this.pageId).then(model => {
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
// CONCATENATED MODULE: ./src/Components/GiveworksForm.vue





/* normalize component */

var GiveworksForm_component = normalizeComponent(
  Components_GiveworksFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GiveworksForm = (GiveworksForm_component.exports);
// EXTERNAL MODULE: ./src/scss/_global.scss
var _global = __webpack_require__("913a");

// EXTERNAL MODULE: ./src/scss/_buttons.scss
var _buttons = __webpack_require__("9cdbb");

// EXTERNAL MODULE: ./src/scss/_forms.scss
var _forms = __webpack_require__("23f7");

// CONCATENATED MODULE: ./src/export.js



 // import './registerServiceWorker';




external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.productionTip = false;
notifier_default()('e66068bbbefd6ad235c13b0c178480da').use(bugsnag_vue_default.a, external_commonjs_vue_commonjs2_vue_root_Vue_default.a);
/* harmony default export */ var src_export = (new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
  el: '#app',
  components: {
    GiveworksForm: GiveworksForm
  }
}));
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_export);



/***/ }),

/***/ "fd8c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3039");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ })["default"];
//# sourceMappingURL=GiveworksForm.common.js.map