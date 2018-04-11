import moment from 'moment';
import 'vue-awesome/icons/google-wallet';
import 'vue-awesome/icons/paypal';
import 'vue-awesome/icons/warning';
import 'vue-awesome/icons/cc-jcb';
import 'vue-awesome/icons/cc-visa';
import 'vue-awesome/icons/cc-amex';
import 'vue-awesome/icons/cc-discover';
import 'vue-awesome/icons/cc-mastercard';
import 'vue-awesome/icons/cc-diners-club';
import 'vue-awesome/icons/credit-card-alt';

var global$1 = typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
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
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function DateFilter(value, format) {
  if (value) {
    return moment(String(value)).format(format);
  }

  return '';
}

function MomentFilter(value, format) {
  if (value) {
    return moment(String(value)).format(format);
  }

  return '';
}

function index(Vue, options) {
  Vue.filter('date', DateFilter);
  Vue.filter('moment', MomentFilter);
}

var filters =
/*#__PURE__*/
Object.freeze({
  DateFilter: index,
  MomentFilter: index
});
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
var isArray_1 = isArray;
var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global$1 !== 'undefined' ? global$1 : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}
/** Detect free variable `global` from Node.js. */


var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;
/** Built-in value references. */

var Symbol$1 = _root.Symbol;
var _Symbol = Symbol$1;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _getRawTag = getRawTag;
/** Used for built-in method references. */

var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;
/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;
/** `Object#toString` result references. */

var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = _baseGetTag(value);

  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;
/** Used to detect overreaching core-js shims. */

var coreJsData = _root['__core-js_shared__'];
var _coreJsData = coreJsData;
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

var _isMasked = isMasked;
/** Used for built-in method references. */

var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

var _toSource = toSource;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }

  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = _getValue(object, key);

  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

var defineProperty = function () {
  try {
    var func = _getNative(Object, 'defineProperty');

    func({}, '', {});
    return func;
  } catch (e) {}
}();

var _defineProperty$1 = defineProperty;
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty$1) {
    _defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var eq_1 = eq;
/** Used for built-in method references. */

var objectProto$3 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty$2.call(object, key) && eq_1(objValue, value)) || value === undefined && !(key in object)) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */

function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }

  return object;
}

var _copyObject = copyObject;
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */

function identity(value) {
  return value;
}

var identity_1 = identity;
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */

function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

var _apply = apply;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */

function constant(value) {
  return function () {
    return value;
  };
}

var constant_1 = constant;
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var baseSetToString = !_defineProperty$1 ? identity_1 : function (func, string) {
  return _defineProperty$1(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};
var _baseSetToString = baseSetToString;
/** Used to detect hot functions by number of calls within a span of milliseconds. */

var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */

function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$1 = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

var _isIndex = isIndex;
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */

function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }

  var type = _typeof(index);

  if (type == 'number' ? isArrayLike_1(object) && _isIndex(index, object.length) : type == 'string' && index in object) {
    return eq_1(object[index], value);
  }

  return false;
}

var _isIterateeCall = isIterateeCall;
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */

function createAssigner(assigner) {
  return _baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}

var _createAssigner = createAssigner;
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */

function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

var _baseTimes = baseTimes;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

var isObjectLike_1 = isObjectLike;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;
/** Used for built-in method references. */

var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = _baseIsArguments(function () {
  return arguments;
}()) ? _baseIsArguments : function (value) {
  return isObjectLike_1(value) && hasOwnProperty$3.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
var isArguments_1 = isArguments;
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;
var isBuffer_1 = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Built-in value references. */

  var Buffer = moduleExports ? _root.Buffer : undefined;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */

  var isBuffer = nativeIsBuffer || stubFalse_1;
  module.exports = isBuffer;
});
/** `Object#toString` result references. */

var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Detect free variable `process` from Node.js. */

  var freeProcess = moduleExports && _freeGlobal.process;
  /** Used to access faster Node.js helpers. */

  var nodeUtil = function () {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();

  module.exports = nodeUtil;
});
/* Node.js helper references. */


var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
var isTypedArray_1 = isTypedArray;
/** Used for built-in method references. */

var objectProto$5 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    _isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

var _arrayLikeKeys = arrayLikeKeys;
/** Used for built-in method references. */

var objectProto$6 = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$6;
  return value === proto;
}

var _isPrototype = isPrototype;
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

var _nativeKeysIn = nativeKeysIn;
/** Used for built-in method references. */

var objectProto$7 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }

  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$5.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

var _baseKeysIn = baseKeysIn;
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */

function keysIn$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn$1;
/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */

var assignIn = _createAssigner(function (object, source) {
  _copyObject(source, keysIn_1(source), object);
});

var assignIn_1 = assignIn;
var extend = assignIn_1;
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

var _assocIndexOf = assocIndexOf;
/** Used for built-in method references. */

var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */

function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

var _listCacheSet = listCacheSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;
var _ListCache = ListCache;
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */

function stackClear() {
  this.__data__ = new _ListCache();
  this.size = 0;
}

var _stackClear = stackClear;
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;
/* Built-in method references that are verified to be native. */

var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;
/* Built-in method references that are verified to be native. */

var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto$8 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;
/** Used for built-in method references. */

var objectProto$9 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? data[key] !== undefined : hasOwnProperty$7.call(data, key);
}

var _hashHas = hashHas;
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;
var _Hash = Hash;
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash(),
    'map': new (_Map || _ListCache)(),
    'string': new _Hash()
  };
}

var _mapCacheClear = mapCacheClear;
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

var _isKeyable = isKeyable;
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */

function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

var _getMapData = getMapData;
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);

  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */

function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;
var _MapCache = MapCache;
/** Used as the size to enable large array optimizations. */

var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof _ListCache) {
    var pairs = data.__data__;

    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new _MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;
var _Stack = Stack;
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq_1(object[key], value) || value === undefined && !(key in object)) {
    _baseAssignValue(object, key, value);
  }
}

var _assignMergeValue = assignMergeValue;
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */

function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

var _createBaseFor = createBaseFor;
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */

var baseFor = _createBaseFor();

var _baseFor = baseFor;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Built-in value references. */

  var Buffer = moduleExports ? _root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */

  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }

    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }

  module.exports = cloneBuffer;
});
/** Built-in value references. */


var Uint8Array = _root.Uint8Array;
var _Uint8Array = Uint8Array;
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */

function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */

function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */

function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

var _copyArray = copyArray;
/** Built-in value references. */

var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject_1(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

var _baseCreate = baseCreate;
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;
/** Built-in value references. */

var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneObject(object) {
  return typeof object.constructor == 'function' && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
}

var _initCloneObject = initCloneObject;
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */

function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;
/** `Object#toString` result references. */

var objectTag$1 = '[object Object]';
/** Used for built-in method references. */

var funcProto$2 = Function.prototype,
    objectProto$10 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$2 = funcProto$2.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$8 = objectProto$10.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString$2.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$1) {
    return false;
  }

  var proto = _getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty$8.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;
/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function safeGet(object, key) {
  return key == '__proto__' ? undefined : object[key];
}

var _safeGet = safeGet;
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */

function toPlainObject(value) {
  return _copyObject(value, keysIn_1(value));
}

var toPlainObject_1 = toPlainObject;
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */

function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key),
      srcValue = _safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);

    return;
  }

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray_1(srcValue),
        isBuff = !isArr && isBuffer_1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (isArray_1(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject_1(objValue)) {
        newValue = _copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = _cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
      newValue = objValue;

      if (isArguments_1(objValue)) {
        newValue = toPlainObject_1(objValue);
      } else if (!isObject_1(objValue) || srcIndex && isFunction_1(objValue)) {
        newValue = _initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }

  _assignMergeValue(object, key, newValue);
}

var _baseMergeDeep = baseMergeDeep;
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */

function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }

  _baseFor(source, function (srcValue, key) {
    if (isObject_1(srcValue)) {
      stack || (stack = new _Stack());

      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(_safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      _assignMergeValue(object, key, newValue);
    }
  }, keysIn_1);
}

var _baseMerge = baseMerge;
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */

var merge = _createAssigner(function (object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});

var merge_1 = merge;
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */

function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

var _arrayEach = arrayEach;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;
/** Used for built-in method references. */

var objectProto$11 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$9 = objectProto$11.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty$9.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

var _baseKeys = baseKeys;
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */

function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;
/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */

function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;
/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */

function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }

    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }

    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }

    return collection;
  };
}

var _createBaseEach = createBaseEach;
/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */

var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;
/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */

function castFunction(value) {
  return typeof value == 'function' ? value : identity_1;
}

var _castFunction = castFunction;
/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */

function forEach(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayEach : _baseEach;
  return func(collection, _castFunction(iteratee));
}

var forEach_1 = forEach;
var each = forEach_1;

function MergeClasses(Vue, options) {
  Vue.prototype.$mergeClasses = function () {
    var classes = {};
    each([].slice.call(arguments), function (arg) {
      if (isObject_1(arg)) {
        extend(classes, arg);
      } else if (isArray_1(arg)) {
        merge_1(classes, arg);
      } else if (arg) {
        classes[arg] = true;
      }
    });
    return classes;
  };
}

var Overlay = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "overlay",
      class: {
        'show': _vm.isVisible
      },
      style: {
        background: _vm.background
      },
      on: {
        "keyup": function keyup($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key, "Escape")) {
            return null;
          }

          return _vm.hide($event);
        }
      }
    }, [_vm.closeButton ? _c('button', {
      staticClass: "btn btn-link overlay-close",
      attrs: {
        "type": "button"
      },
      on: {
        "click": _vm.onClickClose
      }
    }, [_c('i', {
      staticClass: "fa fa-times-circle"
    })]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "overlay-content container",
      class: {
        'fixed': _vm.fixedContent
      },
      style: {
        minHeight: _vm.minHeight
      }
    }, [_vm._t("default")], 2)]);
  },
  staticRenderFns: [],
  name: 'overlay',
  props: {
    /**
     * The overlay background color.
     *
     * @property String
     */
    background: {
      type: String,
      default: 'rgba(255, 255, 255, .925)'
    },

    /**
     * Is the overlay showing.
     *
     * @property Boolean
     */
    visible: Boolean,

    /**
     * Is the overlay content fixed position
     *
     * @property Boolean
     */
    fixedContent: Boolean,

    /**
     * Is the overlay content fixed position
     *
     * @property Boolean
     */
    closeButton: {
      type: Boolean,
      default: true
    },

    /**
     * Is the overlay content minimum height.
     *
     * @property Boolean
     */
    minHeight: [String, Number]
  },
  watch: {
    visible: function visible(value) {
      (this.isVisible = value) && this.focus();
    }
  },
  methods: {
    focus: function focus() {
      var el = this.$el.querySelector('.form-control, input, select, textarea');

      if (el) {
        el.focus();
      }
    },

    /**
     * Show the overlay
     *
     * @return void
     */
    show: function show(contents, options) {
      this.$mount(document.body.appendChild(document.createElement('div')));

      if (contents.$mount) {
        contents.$parent = this;
        contents.$mount(this.$el.querySelector('.overlay-content').appendChild(document.createElement('div')));
      }

      this.focus();
      this.$emit('show');
      this.$emit('update:visible', this.isVisible = true);
    },

    /**
     * Hide the overlay
     *
     * @return void
     */
    hide: function hide() {
      this.$emit('hide');
      this.$emit('update:visible', this.isVisible = false);
    },

    /**
     * The callback for the `click` event on the close button.
     *
     * @return void
     */
    onClickClose: function onClickClose() {
      this.$emit('click:close');
      this.hide();
    }
  },
  mounted: function mounted() {
    this.visible && this.focus();
  },
  data: function data() {
    return {
      isVisible: this.visible
    };
  }
};

function overlay(Vue, options) {
  Vue.prototype.$overlay = function (ContentComponent, options, overlayOptions, OverlayComponent) {
    var _this = this;

    var component = function component(vue, options) {
      if (!(vue instanceof Vue) && isObject_1(vue)) {
        vue = Vue.extend(vue);
        vue.options.route = _this.$route;
        vue.options.router = _this.$router;
      }

      return isFunction_1(vue) ? new vue(options) : vue;
    };

    var overlay = component(OverlayComponent || Overlay, overlayOptions);
    overlay.$content = component(ContentComponent, options);
    overlay.show(overlay.$content);
    return overlay;
  };
}

var plugins =
/*#__PURE__*/
Object.freeze({
  mergeClasses: MergeClasses,
  overlay: overlay
});
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */

function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }

  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }

  return accumulator;
}

var _arrayReduce = arrayReduce;
/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */

function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}

var _basePropertyOf = basePropertyOf;
/** Used to map Latin Unicode letters to basic Latin letters. */

var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',
  '\xc1': 'A',
  '\xc2': 'A',
  '\xc3': 'A',
  '\xc4': 'A',
  '\xc5': 'A',
  '\xe0': 'a',
  '\xe1': 'a',
  '\xe2': 'a',
  '\xe3': 'a',
  '\xe4': 'a',
  '\xe5': 'a',
  '\xc7': 'C',
  '\xe7': 'c',
  '\xd0': 'D',
  '\xf0': 'd',
  '\xc8': 'E',
  '\xc9': 'E',
  '\xca': 'E',
  '\xcb': 'E',
  '\xe8': 'e',
  '\xe9': 'e',
  '\xea': 'e',
  '\xeb': 'e',
  '\xcc': 'I',
  '\xcd': 'I',
  '\xce': 'I',
  '\xcf': 'I',
  '\xec': 'i',
  '\xed': 'i',
  '\xee': 'i',
  '\xef': 'i',
  '\xd1': 'N',
  '\xf1': 'n',
  '\xd2': 'O',
  '\xd3': 'O',
  '\xd4': 'O',
  '\xd5': 'O',
  '\xd6': 'O',
  '\xd8': 'O',
  '\xf2': 'o',
  '\xf3': 'o',
  '\xf4': 'o',
  '\xf5': 'o',
  '\xf6': 'o',
  '\xf8': 'o',
  '\xd9': 'U',
  '\xda': 'U',
  '\xdb': 'U',
  '\xdc': 'U',
  '\xf9': 'u',
  '\xfa': 'u',
  '\xfb': 'u',
  '\xfc': 'u',
  '\xdd': 'Y',
  '\xfd': 'y',
  '\xff': 'y',
  '\xc6': 'Ae',
  '\xe6': 'ae',
  '\xde': 'Th',
  '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  "\u0100": 'A',
  "\u0102": 'A',
  "\u0104": 'A',
  "\u0101": 'a',
  "\u0103": 'a',
  "\u0105": 'a',
  "\u0106": 'C',
  "\u0108": 'C',
  "\u010A": 'C',
  "\u010C": 'C',
  "\u0107": 'c',
  "\u0109": 'c',
  "\u010B": 'c',
  "\u010D": 'c',
  "\u010E": 'D',
  "\u0110": 'D',
  "\u010F": 'd',
  "\u0111": 'd',
  "\u0112": 'E',
  "\u0114": 'E',
  "\u0116": 'E',
  "\u0118": 'E',
  "\u011A": 'E',
  "\u0113": 'e',
  "\u0115": 'e',
  "\u0117": 'e',
  "\u0119": 'e',
  "\u011B": 'e',
  "\u011C": 'G',
  "\u011E": 'G',
  "\u0120": 'G',
  "\u0122": 'G',
  "\u011D": 'g',
  "\u011F": 'g',
  "\u0121": 'g',
  "\u0123": 'g',
  "\u0124": 'H',
  "\u0126": 'H',
  "\u0125": 'h',
  "\u0127": 'h',
  "\u0128": 'I',
  "\u012A": 'I',
  "\u012C": 'I',
  "\u012E": 'I',
  "\u0130": 'I',
  "\u0129": 'i',
  "\u012B": 'i',
  "\u012D": 'i',
  "\u012F": 'i',
  "\u0131": 'i',
  "\u0134": 'J',
  "\u0135": 'j',
  "\u0136": 'K',
  "\u0137": 'k',
  "\u0138": 'k',
  "\u0139": 'L',
  "\u013B": 'L',
  "\u013D": 'L',
  "\u013F": 'L',
  "\u0141": 'L',
  "\u013A": 'l',
  "\u013C": 'l',
  "\u013E": 'l',
  "\u0140": 'l',
  "\u0142": 'l',
  "\u0143": 'N',
  "\u0145": 'N',
  "\u0147": 'N',
  "\u014A": 'N',
  "\u0144": 'n',
  "\u0146": 'n',
  "\u0148": 'n',
  "\u014B": 'n',
  "\u014C": 'O',
  "\u014E": 'O',
  "\u0150": 'O',
  "\u014D": 'o',
  "\u014F": 'o',
  "\u0151": 'o',
  "\u0154": 'R',
  "\u0156": 'R',
  "\u0158": 'R',
  "\u0155": 'r',
  "\u0157": 'r',
  "\u0159": 'r',
  "\u015A": 'S',
  "\u015C": 'S',
  "\u015E": 'S',
  "\u0160": 'S',
  "\u015B": 's',
  "\u015D": 's',
  "\u015F": 's',
  "\u0161": 's',
  "\u0162": 'T',
  "\u0164": 'T',
  "\u0166": 'T',
  "\u0163": 't',
  "\u0165": 't',
  "\u0167": 't',
  "\u0168": 'U',
  "\u016A": 'U',
  "\u016C": 'U',
  "\u016E": 'U',
  "\u0170": 'U',
  "\u0172": 'U',
  "\u0169": 'u',
  "\u016B": 'u',
  "\u016D": 'u',
  "\u016F": 'u',
  "\u0171": 'u',
  "\u0173": 'u',
  "\u0174": 'W',
  "\u0175": 'w',
  "\u0176": 'Y',
  "\u0177": 'y',
  "\u0178": 'Y',
  "\u0179": 'Z',
  "\u017B": 'Z',
  "\u017D": 'Z',
  "\u017A": 'z',
  "\u017C": 'z',
  "\u017E": 'z',
  "\u0132": 'IJ',
  "\u0133": 'ij',
  "\u0152": 'Oe',
  "\u0153": 'oe',
  "\u0149": "'n",
  "\u017F": 's'
};
/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */

var deburrLetter = _basePropertyOf(deburredLetters);

var _deburrLetter = deburrLetter;
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

var _arrayMap = arrayMap;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
}

var isSymbol_1 = isSymbol;
/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }

  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

var _baseToString = baseToString;
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;
/** Used to match Latin Unicode letters (excluding mathematical operators). */

var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
/** Used to compose unicode character classes. */

var rsComboMarksRange = "\\u0300-\\u036f",
    reComboHalfMarksRange = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange = "\\u20d0-\\u20ff",
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
/** Used to compose unicode capture groups. */

var rsCombo = '[' + rsComboRange + ']';
/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */

var reComboMark = RegExp(rsCombo, 'g');
/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */

function deburr(string) {
  string = toString_1(string);
  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
}

var deburr_1 = deburr;
/** Used to match words composed of alphanumeric characters. */

var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */

function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

var _asciiWords = asciiWords;
/** Used to detect strings that need a more robust regexp to match words. */

var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */

function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

var _hasUnicodeWord = hasUnicodeWord;
/** Used to compose unicode character classes. */

var rsAstralRange = "\\ud800-\\udfff",
    rsComboMarksRange$1 = "\\u0300-\\u036f",
    reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange$1 = "\\u20d0-\\u20ff",
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsDingbatRange = "\\u2700-\\u27bf",
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = "\\u2000-\\u206f",
    rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = "\\ufe0e\\ufe0f",
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
/** Used to compose unicode capture groups. */

var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo$1 = '[' + rsComboRange$1 + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = "\\ud83c[\\udffb-\\udfff]",
    rsModifier = '(?:' + rsCombo$1 + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */

var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;
/** Used to match complex or compound words. */

var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');
/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */

function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

var _unicodeWords = unicodeWords;
/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */

function words(string, pattern, guard) {
  string = toString_1(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
  }

  return string.match(pattern) || [];
}

var words_1 = words;
/** Used to compose unicode capture groups. */

var rsApos$1 = "['\u2019]";
/** Used to match apostrophes. */

var reApos = RegExp(rsApos$1, 'g');
/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */

function createCompounder(callback) {
  return function (string) {
    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
  };
}

var _createCompounder = createCompounder;
/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */

var kebabCase = _createCompounder(function (result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

var kebabCase_1 = kebabCase;
var BaseType = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "activity-indicator",
      class: _vm.classes
    }, _vm._l(_vm.nodes, function (i) {
      return _c('div');
    }));
  },
  staticRenderFns: [],
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
var ActivityIndicator = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.center ? _c('div', {
      staticClass: "center-wrapper"
    }, [_c('div', {
      staticClass: "center-content"
    }, [_c(_vm.component, {
      tag: "component",
      attrs: {
        "size": _vm.size,
        "prefix": _vm.prefix
      }
    })], 1)]) : _c(_vm.component, {
      tag: "component",
      attrs: {
        "size": _vm.size,
        "prefix": _vm.prefix
      }
    });
  },
  staticRenderFns: [],
  name: 'activity-indicator',
  extends: BaseType,
  props: {
    center: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'dots'
    }
  },
  components: {
    ActivityIndicatorDots: ActivityIndicatorDots,
    ActivityIndicatorSpinner: ActivityIndicatorSpinner
  },
  computed: {
    component: function component() {
      return kebabCase_1(this.prefix + this.type.replace(this.prefix, ''));
    }
  }
};
var loaded = {};

function element(url) {
  var script = document.createElement('script');
  script.setAttribute('src', url);
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('charset', 'utf-8');
  return script;
}

function append(script) {
  if (document.querySelector('head')) {
    document.querySelector('head').appendChild(script);
  } else {
    document.querySelector('body').appendChild(script);
  }

  return script;
}

function script(url) {
  return new Promise(function (resolve, reject) {
    try {
      if (!loaded[url]) {
        append(element(url)).addEventListener('load', function (e) {
          resolve(loaded[url] = e);
        });
      } else {
        resolve(loaded[url]);
      }
    } catch (e) {
      reject(e);
    }
  });
}

var VueInstaller = {
  use: use,
  script: script,
  plugin: plugin,
  plugins: plugins$1,
  filter: filter,
  filters: filters$1,
  component: component,
  components: components,
  directive: directive,
  directives: directives,
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

function plugins$1(Vue, plugins) {
  each(plugins, function (def, name) {
    plugin(Vue, name, def);
  });
}

function filter(Vue, name, def) {
  if (!VueInstaller.$filters[name]) {
    Vue.use(VueInstaller.$filters[name] = def);
  }
}

function filters$1(Vue, filters) {
  each(filters, function (def, name) {
    filter(Vue, name, def);
  });
}

function component(Vue, name, def) {
  if (!VueInstaller.$components[name]) {
    Vue.component(name, VueInstaller.$components[name] = def);
  }
}

function components(Vue, components) {
  each(components, function (def, name) {
    component(Vue, name, def);
  });
}

function directive(Vue, name, def) {
  if (!VueInstaller.$directives[name]) {
    Vue.directive(name, VueInstaller.$directives[name] = def);
  }
}

function directives(Vue, directives) {
  each(directives, function (def, name) {
    directive(Vue, name, def);
  });
}

var plugin$1 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      ActivityIndicator: ActivityIndicator
    });
  }
});

var convertAnimationDelayToInt = function convertAnimationDelayToInt(delay) {
  var num = parseFloat(delay, 10);
  var matches = delay.match(/m?s/);
  var unit = matches ? matches[0] : false;
  var milliseconds;

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

var ActivityButton = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('button', {
      staticClass: "btn",
      class: _vm.classes,
      attrs: {
        "type": _vm.type
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("default", [_vm.icon ? _c('i', {
      class: _vm.icon
    }) : _vm._e(), _vm._v(" " + _vm._s(_vm.label))]), _vm._v(" "), _c('activity-indicator', {
      attrs: {
        "type": _vm.indicator
      }
    })], 2);
  },
  staticRenderFns: [],
  name: 'activity-button',
  components: {
    ActivityIndicator: ActivityIndicator
  },
  props: {
    /**
     * Should show the activity indicator inside the button.
     *
     * @property Boolean
     */
    activity: Boolean,

    /**
     * Should show the button as disabled.
     *
     * @property Boolean
     */
    disabled: Boolean,

    /**
     * Display the button as block width.
     *
     * @property Boolean
     */
    block: Boolean,

    /**
     * The button label. If not passed as a property, label must be passed
     * inside the element's html.
     *
     * @property String
     */
    label: String,

    /**
     * The button icon
     *
     * @property String
     */
    icon: String,

    /**
     * The size of the button.
     *
     * @property String
     */
    size: {
      type: String,
      default: 'md'
    },

    /**
     * The bootstrap variant of the button.
     *
     * @property String
     */
    variant: {
      type: String,
      default: 'primary'
    },

    /**
     * The `type` attribute for the button.
     *
     * @property String
     */
    type: {
      type: String,
      default: 'button'
    },

    /**
     * The type of activity indicator inside the button.
     *
     * @property String
     */
    indicator: {
      type: String,
      default: 'spinner'
    },

    /**
     * The orientation of the activity button inside the button.
     *
     * @property String
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
    disable: function disable() {
      this.$el.disabled = true;
    },

    /**
     * Enable the button.
     *
     * @return void
     */
    enable: function enable() {
      this.$el.disabled = false;
    },

    /**
     * Show the activity indicator inside the button.
     *
     * @return void
     */
    showActivity: function showActivity() {
      var _this = this;

      this.disable();
      animated(this.$el, function () {
        _this.$el.classList.add('btn-activity');

        _this.$emit('activity:show');
      });
    },

    /**
     * Hide the activity indicator inside the button.
     *
     * @return void
     */
    hideActivity: function hideActivity() {
      var _this2 = this;

      this.$el.classList.add('btn-hide-activity');
      animated(this.$el, function () {
        _this2.enable();

        _this2.$el.classList.remove('btn-activity', 'btn-hide-activity');

        _this2.$emit('activity:hide');
      });
    },

    /**
     * Disable the button.
     *
     * @return void
     */
    onClick: function onClick(event) {
      this.$emit('click', event, this);
    }
  },
  computed: {
    /**
     * An object of classes to append to the button.
     *
     * @return void
     */
    classes: function classes() {
      var classes = {
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
    activity: function activity(value) {
      if (value) {
        this.showActivity();
      } else {
        this.hideActivity();
      }
    }
  }
};
var plugin$2 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      ActivityButton: ActivityButton
    });
  }
});
/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */

function isUndefined(value) {
  return value === undefined;
}

var isUndefined_1 = isUndefined;
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */

function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);

  return this;
}

var _setCacheAdd = setCacheAdd;
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */

function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new _MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;
var _SetCache = SetCache;
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */

function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}

var _arraySome = arraySome;
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;
/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Assume cyclic values are equal.


  var stacked = stack.get(array);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!_arraySome(other, function (othValue, othIndex) {
        if (!_cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */

function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */

function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;
/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;
/** `Object#toString` result references. */

var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]';
var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]';
/** Used to convert symbols to primitives and strings. */

var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag$1:
      var convert = _mapToArray;

    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG$1; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);

      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);

      stack['delete'](object);
      return result;

    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}

var _equalByTag = equalByTag;
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

var _arrayPush = arrayPush;
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */

function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

var _arrayFilter = arrayFilter;
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */

function stubArray() {
  return [];
}

var stubArray_1 = stubArray;
/** Used for built-in method references. */

var objectProto$12 = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable$1 = objectProto$12.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray_1 : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};
var _getSymbols = getSymbols;
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */

function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;
/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$2 = 1;
/** Used for built-in method references. */

var objectProto$13 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$10 = objectProto$13.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty$10.call(other, key))) {
      return false;
    }
  } // Assume cyclic values are equal.


  var stacked = stack.get(object);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;
/* Built-in method references that are verified to be native. */

var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;
/* Built-in method references that are verified to be native. */

var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;
/* Built-in method references that are verified to be native. */

var Set = _getNative(_root, 'Set');

var _Set = Set;
/* Built-in method references that are verified to be native. */

var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;
/** `Object#toString` result references. */

var mapTag$2 = '[object Map]',
    objectTag$2 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';
var dataViewTag$2 = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */


var getTag = _baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2 || _Map && getTag(new _Map()) != mapTag$2 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag$2 || _WeakMap && getTag(new _WeakMap()) != weakMapTag$1) {
  getTag = function getTag(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;

        case mapCtorString:
          return mapTag$2;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag$2;

        case weakMapCtorString:
          return weakMapTag$1;
      }
    }

    return result;
  };
}

var _getTag = getTag;
/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$3 = 1;
/** `Object#toString` result references. */

var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$3 = '[object Object]';
/** Used for built-in method references. */

var objectProto$14 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$11 = objectProto$14.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);
  objTag = objTag == argsTag$2 ? objectTag$3 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$3 : othTag;
  var objIsObj = objTag == objectTag$3,
      othIsObj = othTag == objectTag$3,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack());
    return objIsArr || isTypedArray_1(object) ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack) : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$11.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$11.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new _Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new _Stack());
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */

function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike_1(value) && !isObjectLike_1(other)) {
    return value !== value && other !== other;
  }

  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;
/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;
/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */

function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }

  object = Object(object);

  while (index--) {
    var data = matchData[index];

    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }

  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack();

      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }

      if (!(result === undefined ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack) : result)) {
        return false;
      }
    }
  }

  return true;
}

var _baseIsMatch = baseIsMatch;
/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */

function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;
/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */

function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];
    result[length] = [key, value, _isStrictComparable(value)];
  }

  return result;
}

var _getMatchData = getMatchData;
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */

function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }

    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

var _matchesStrictComparable = matchesStrictComparable;
/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */

function baseMatches(source) {
  var matchData = _getMatchData(source);

  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }

  return function (object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;
/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol_1(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

var _isKey = isKey;
/** Error message constants. */

var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || _MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = _MapCache;
var memoize_1 = memoize;
/** Used as the maximum memoize cache size. */

var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize_1(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;
/** Used to match property names within property paths. */

var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = _memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

var _stringToPath = stringToPath;
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */

function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }

  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;
/** Used as references for various `Number` constants. */

var INFINITY$1 = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

var _toKey = toKey;
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */

function baseGet(object, path) {
  path = _castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

var _baseGet = baseGet;
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */

function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */

function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */

function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);
  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);

    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }

    object = object[key];
  }

  if (result || ++index != length) {
    return result;
  }

  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) && (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;
/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */

function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;
/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;
/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */

function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }

  return function (object) {
    var objValue = get_1(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn_1(object, path) : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty;
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */

function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;
/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */

function basePropertyDeep(path) {
  return function (object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;
/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */

function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;
/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */

function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }

  if (value == null) {
    return identity_1;
  }

  if (_typeof(value) == 'object') {
    return isArray_1(value) ? _baseMatchesProperty(value[0], value[1]) : _baseMatches(value);
  }

  return property_1(value);
}

var _baseIteratee = baseIteratee;
/**
 * The opposite of `_.mapValues`; this method creates an object with the
 * same values as `object` and keys generated by running each own enumerable
 * string keyed property of `object` thru `iteratee`. The iteratee is invoked
 * with three arguments: (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapValues
 * @example
 *
 * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
 *   return key + value;
 * });
 * // => { 'a1': 1, 'b2': 2 }
 */

function mapKeys(object, iteratee) {
  var result = {};
  iteratee = _baseIteratee(iteratee, 3);

  _baseForOwn(object, function (value, key, object) {
    _baseAssignValue(result, iteratee(value, key, object), value);
  });

  return result;
}

var mapKeys_1 = mapKeys;
/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */

function isNull(value) {
  return value === null;
}

var isNull_1 = isNull;

function prefix(subject, prefix) {
  var delimeter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-';

  var prefixer = function prefixer(value, key) {
    var string = key || value;
    return [prefix, string.replace(new RegExp("^".concat(prefix).concat(delimeter, "?")), '')].join(delimeter);
  };

  if (isNull_1(subject) || isUndefined_1(subject)) {
    return subject;
  }

  if (isObject_1(subject)) {
    return mapKeys_1(subject, prefixer);
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
    variantClassPrefix: function variantClassPrefix() {
      return this.$options.name;
    },
    variantClass: function variantClass() {
      return prefix(this.variant, this.variantClassPrefix);
    }
  }
};

function duration(el) {
  var duration = getComputedStyle(el).transitionDuration;
  var numeric = parseFloat(duration, 10) || 0;
  var unit = duration.match(/m?s/);

  switch (unit[0]) {
    case 's':
      return numeric * 1000;

    case 'ms':
      return numeric;
  }
}

function transition(el) {
  return new Promise(function (resolve, reject) {
    try {
      var delay = duration(el);
      setTimeout(function () {
        return resolve(delay);
      }, delay);
    } catch (e) {
      reject(e);
    }
  });
}

var Alert = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "alert",
      class: _vm.$mergeClasses(_vm.variantClass, {
        show: _vm.isVisible,
        fade: _vm.fade
      }),
      attrs: {
        "role": "alert"
      }
    }, [_vm._t("default"), _vm._v(" "), _vm.dismissible ? _c('alert-close', {
      on: {
        "click": function click($event) {
          _vm.dismiss();
        }
      }
    }) : _vm._e(), _vm._v(" "), typeof _vm.show === 'number' ? _c('progress-bar', {
      staticClass: "my-3",
      attrs: {
        "variant": _vm.variant,
        "height": 5,
        "value": _vm.dismissCount,
        "max": _vm.show
      }
    }) : _vm._e()], 2);
  },
  staticRenderFns: [],
  name: 'alert',
  mixins: [Variant],
  props: {
    /**
     * Is the alert dismissible
     *
     * @property Boolean
     */
    dismissible: Boolean,

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
    dismiss: function dismiss() {
      var _this = this;

      transition(this.$el).then(function (delay) {
        _this.$emit('dismissed');
      });
      this.$emit('update:visible', this.isVisible = false);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (typeof this.show === 'number') {
      var el = this.$el.querySelector('.progress-bar');
      this.$emit('dismiss-countdown', this.dismissCount = this.show);
      var interval = setInterval(function () {
        _this2.$emit('dismiss-countdown', _this2.dismissCount -= 1);

        if (!_this2.dismissCount) {
          clearInterval(interval);
          transition(el).then(function (delay) {
            return _this2.dismiss();
          });
        }
      }, 1000);
    }
  },
  data: function data() {
    return {
      dismissCount: this.show,
      isVisible: this.show
    };
  }
};
var AlertLink = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a', {
      staticClass: "alert-link"
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'alert-link'
};
var AlertClose = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('button', {
      staticClass: "close",
      attrs: {
        "type": "button",
        "data-dismiss": "alert",
        "aria-label": "Close"
      },
      on: {
        "click": _vm.onClick
      }
    }, [_c('span', {
      attrs: {
        "aria-hidden": "true"
      }
    }, [_vm._v("×")])]);
  },
  staticRenderFns: [],
  name: 'alert-close',
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
};
var AlertHeading = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('h4', {
      staticClass: "alert-heading"
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'alert-heading'
};
var plugin$3 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Alert: Alert,
      AlertLink: AlertLink,
      AlertClose: AlertClose,
      AlertHeading: AlertHeading
    });
  }
});
var Badge = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.href ? _c('a', {
      staticClass: "badge",
      class: _vm.$mergeClasses(_vm.classes, _vm.variantClass),
      attrs: {
        "href": _vm.href
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('span', {
      staticClass: "sr-only",
      domProps: {
        "innerHTML": _vm._s(_vm.accessibility)
      }
    })], 2) : _c('span', {
      staticClass: "badge",
      class: _vm.$mergeClasses(_vm.classes, _vm.variantClass)
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('span', {
      staticClass: "sr-only",
      domProps: {
        "innerHTML": _vm._s(_vm.accessibility)
      }
    })], 2);
  },
  staticRenderFns: [],
  name: 'badge',
  mixins: [Variant],
  props: {
    /**
     * The screen reader accessibility label.
     *
     * @property String
     */
    accessibility: String,

    /**
     * If an href attribute is passed, the badge becomes an anchor.
     *
     * @property String
     */
    href: String,

    /**
     * The badge appear as pill shaped.
     *
     * @property String
     */
    pill: Boolean,

    /**
     * The badge label.
     *
     * @property String
     */
    label: [Number, String],

    /**
     * The badge appear as secondary in size to the parent element.
     *
     * @property String
     */
    secondary: Boolean
  },
  computed: {
    classes: function classes() {
      return prefix({
        'pill': this.pill,
        'secondary': this.secondary
      }, this.$options.name);
    }
  }
};
var plugin$4 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Badge: Badge
    });
  }
});

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
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
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}
/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */


function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function (value, index, collection) {
    accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

var _baseReduce = baseReduce;
/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */

function reduce(collection, iteratee, accumulator) {
  var func = isArray_1(collection) ? _arrayReduce : _baseReduce,
      initAccum = arguments.length < 3;
  return func(collection, _baseIteratee(iteratee, 4), accumulator, initAccum, _baseEach);
}

var reduce_1 = reduce;
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */

function baseSet(object, path, value, customizer) {
  if (!isObject_1(object)) {
    return object;
  }

  path = _castPath(path, object);
  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject_1(objValue) ? objValue : _isIndex(path[index + 1]) ? [] : {};
      }
    }

    _assignValue(nested, key, newValue);

    nested = nested[key];
  }

  return object;
}

var _baseSet = baseSet;
/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */

function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = _baseGet(object, path);

    if (predicate(value, path)) {
      _baseSet(result, _castPath(path, object), value);
    }
  }

  return result;
}

var _basePickBy = basePickBy;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function (object) {
  var result = [];

  while (object) {
    _arrayPush(result, _getSymbols(object));

    object = _getPrototype(object);
  }

  return result;
};
var _getSymbolsIn = getSymbolsIn;
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */

function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;
/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */

function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }

  var props = _arrayMap(_getAllKeysIn(object), function (prop) {
    return [prop];
  });

  predicate = _baseIteratee(predicate);
  return _basePickBy(object, props, function (value, path) {
    return predicate(value, path[0]);
  });
}

var pickBy_1 = pickBy;
/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function baseFilter(collection, predicate) {
  var result = [];

  _baseEach(collection, function (value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });

  return result;
}

var _baseFilter = baseFilter;
/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */

function filter$1(collection, predicate) {
  var func = isArray_1(collection) ? _arrayFilter : _baseFilter;
  return func(collection, _baseIteratee(predicate, 3));
}

var filter_1 = filter$1;
/** `Object#toString` result references. */

var stringTag$2 = '[object String]';
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */

function isString(value) {
  return typeof value == 'string' || !isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag$2;
}

var isString_1 = isString;
/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */

var asciiSize = _baseProperty('length');

var _asciiSize = asciiSize;
/** Used to compose unicode character classes. */

var rsAstralRange$1 = "\\ud800-\\udfff",
    rsComboMarksRange$2 = "\\u0300-\\u036f",
    reComboHalfMarksRange$2 = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange$2 = "\\u20d0-\\u20ff",
    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
    rsVarRange$1 = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */

var rsZWJ$1 = "\\u200d";
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */

var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1 + rsComboRange$2 + rsVarRange$1 + ']');
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */

function hasUnicode(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode;
/** Used to compose unicode character classes. */

var rsAstralRange$2 = "\\ud800-\\udfff",
    rsComboMarksRange$3 = "\\u0300-\\u036f",
    reComboHalfMarksRange$3 = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange$3 = "\\u20d0-\\u20ff",
    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
    rsVarRange$2 = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */

var rsAstral = '[' + rsAstralRange$2 + ']',
    rsCombo$2 = '[' + rsComboRange$3 + ']',
    rsFitz$1 = "\\ud83c[\\udffb-\\udfff]",
    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
    rsRegional$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    rsSurrPair$1 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    rsZWJ$2 = "\\u200d";
/** Used to compose unicode regexes. */

var reOptMod$1 = rsModifier$1 + '?',
    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
    rsSymbol = '(?:' + [rsNonAstral$1 + rsCombo$2 + '?', rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join('|') + ')';
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */

var reUnicode = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol + rsSeq$1, 'g');
/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */

function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;

  while (reUnicode.test(string)) {
    ++result;
  }

  return result;
}

var _unicodeSize = unicodeSize;
/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */

function stringSize(string) {
  return _hasUnicode(string) ? _unicodeSize(string) : _asciiSize(string);
}

var _stringSize = stringSize;
/** `Object#toString` result references. */

var mapTag$3 = '[object Map]',
    setTag$3 = '[object Set]';
/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */

function size(collection) {
  if (collection == null) {
    return 0;
  }

  if (isArrayLike_1(collection)) {
    return isString_1(collection) ? _stringSize(collection) : collection.length;
  }

  var tag = _getTag(collection);

  if (tag == mapTag$3 || tag == setTag$3) {
    return collection.size;
  }

  return _baseKeys(collection).length;
}

var size_1 = size;
/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike_1(collection) ? Array(collection.length) : [];

  _baseEach(collection, function (value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });

  return result;
}

var _baseMap = baseMap;
/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */

function map(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayMap : _baseMap;
  return func(collection, _baseIteratee(iteratee, 3));
}

var map_1 = map;
/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */

var mergeWith = _createAssigner(function (object, source, srcIndex, customizer) {
  _baseMerge(object, source, srcIndex, customizer);
});

var mergeWith_1 = mergeWith;
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */

function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

var _baseSlice = baseSlice;
/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */

function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : _baseSlice(array, start, end);
}

var _castSlice = castSlice;
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */

function asciiToArray(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray;
/** Used to compose unicode character classes. */

var rsAstralRange$3 = "\\ud800-\\udfff",
    rsComboMarksRange$4 = "\\u0300-\\u036f",
    reComboHalfMarksRange$4 = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange$4 = "\\u20d0-\\u20ff",
    rsComboRange$4 = rsComboMarksRange$4 + reComboHalfMarksRange$4 + rsComboSymbolsRange$4,
    rsVarRange$3 = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */

var rsAstral$1 = '[' + rsAstralRange$3 + ']',
    rsCombo$3 = '[' + rsComboRange$4 + ']',
    rsFitz$2 = "\\ud83c[\\udffb-\\udfff]",
    rsModifier$2 = '(?:' + rsCombo$3 + '|' + rsFitz$2 + ')',
    rsNonAstral$2 = '[^' + rsAstralRange$3 + ']',
    rsRegional$2 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    rsSurrPair$2 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    rsZWJ$3 = "\\u200d";
/** Used to compose unicode regexes. */

var reOptMod$2 = rsModifier$2 + '?',
    rsOptVar$2 = '[' + rsVarRange$3 + ']?',
    rsOptJoin$2 = '(?:' + rsZWJ$3 + '(?:' + [rsNonAstral$2, rsRegional$2, rsSurrPair$2].join('|') + ')' + rsOptVar$2 + reOptMod$2 + ')*',
    rsSeq$2 = rsOptVar$2 + reOptMod$2 + rsOptJoin$2,
    rsSymbol$1 = '(?:' + [rsNonAstral$2 + rsCombo$3 + '?', rsCombo$3, rsRegional$2, rsSurrPair$2, rsAstral$1].join('|') + ')';
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */

var reUnicode$1 = RegExp(rsFitz$2 + '(?=' + rsFitz$2 + ')|' + rsSymbol$1 + rsSeq$2, 'g');
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */

function unicodeToArray(string) {
  return string.match(reUnicode$1) || [];
}

var _unicodeToArray = unicodeToArray;
/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */

function stringToArray(string) {
  return _hasUnicode(string) ? _unicodeToArray(string) : _asciiToArray(string);
}

var _stringToArray = stringToArray;
/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */

function createCaseFirst(methodName) {
  return function (string) {
    string = toString_1(string);
    var strSymbols = _hasUnicode(string) ? _stringToArray(string) : undefined;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? _castSlice(strSymbols, 1).join('') : string.slice(1);
    return chr[methodName]() + trailing;
  };
}

var _createCaseFirst = createCaseFirst;
/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */

var upperFirst = _createCaseFirst('toUpperCase');

var upperFirst_1 = upperFirst;
/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */

function capitalize(string) {
  return upperFirst_1(toString_1(string).toLowerCase());
}

var capitalize_1 = capitalize;
/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */

var camelCase = _createCompounder(function (result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize_1(word) : word);
});

var camelCase_1 = camelCase;
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */

function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}

var _baseAssign = baseAssign;
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */

function baseAssignIn(object, source) {
  return object && _copyObject(source, keysIn_1(source), object);
}

var _baseAssignIn = baseAssignIn;
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */

function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

var _copySymbols = copySymbols;
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */

function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

var _copySymbolsIn = copySymbolsIn;
/** Used for built-in method references. */

var objectProto$15 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$12 = objectProto$15.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */

function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

  if (length && typeof array[0] == 'string' && hasOwnProperty$12.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }

  return result;
}

var _initCloneArray = initCloneArray;
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */

function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView;
/** Used to match `RegExp` flags from their coerced string values. */

var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */

function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp;
/** Used to convert symbols to primitives and strings. */

var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */

function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol;
/** `Object#toString` result references. */

var boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    regexpTag$2 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$3 = '[object String]',
    symbolTag$2 = '[object Symbol]';
var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;

  switch (tag) {
    case arrayBufferTag$2:
      return _cloneArrayBuffer(object);

    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);

    case dataViewTag$3:
      return _cloneDataView(object, isDeep);

    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return _cloneTypedArray(object, isDeep);

    case mapTag$4:
      return new Ctor();

    case numberTag$2:
    case stringTag$3:
      return new Ctor(object);

    case regexpTag$2:
      return _cloneRegExp(object);

    case setTag$4:
      return new Ctor();

    case symbolTag$2:
      return _cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag;
/** `Object#toString` result references. */

var mapTag$5 = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */

function baseIsMap(value) {
  return isObjectLike_1(value) && _getTag(value) == mapTag$5;
}

var _baseIsMap = baseIsMap;
/* Node.js helper references. */

var nodeIsMap = _nodeUtil && _nodeUtil.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */

var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;
var isMap_1 = isMap;
/** `Object#toString` result references. */

var setTag$5 = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */

function baseIsSet(value) {
  return isObjectLike_1(value) && _getTag(value) == setTag$5;
}

var _baseIsSet = baseIsSet;
/* Node.js helper references. */

var nodeIsSet = _nodeUtil && _nodeUtil.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */

var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;
var isSet_1 = isSet;
/** Used to compose bitmasks for cloning. */

var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */

var argsTag$3 = '[object Arguments]',
    arrayTag$2 = '[object Array]',
    boolTag$3 = '[object Boolean]',
    dateTag$3 = '[object Date]',
    errorTag$2 = '[object Error]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    mapTag$6 = '[object Map]',
    numberTag$3 = '[object Number]',
    objectTag$4 = '[object Object]',
    regexpTag$3 = '[object RegExp]',
    setTag$6 = '[object Set]',
    stringTag$4 = '[object String]',
    symbolTag$3 = '[object Symbol]',
    weakMapTag$2 = '[object WeakMap]';
var arrayBufferTag$3 = '[object ArrayBuffer]',
    dataViewTag$4 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */

var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] = cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] = cloneableTags[boolTag$3] = cloneableTags[dateTag$3] = cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] = cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] = cloneableTags[int32Tag$2] = cloneableTags[mapTag$6] = cloneableTags[numberTag$3] = cloneableTags[objectTag$4] = cloneableTags[regexpTag$3] = cloneableTags[setTag$6] = cloneableTags[stringTag$4] = cloneableTags[symbolTag$3] = cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] = cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }

  if (result !== undefined) {
    return result;
  }

  if (!isObject_1(value)) {
    return value;
  }

  var isArr = isArray_1(value);

  if (isArr) {
    result = _initCloneArray(value);

    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer_1(value)) {
      return _cloneBuffer(value, isDeep);
    }

    if (tag == objectTag$4 || tag == argsTag$3 || isFunc && !object) {
      result = isFlat || isFunc ? {} : _initCloneObject(value);

      if (!isDeep) {
        return isFlat ? _copySymbolsIn(value, _baseAssignIn(result, value)) : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }

      result = _initCloneByTag(value, tag, isDeep);
    }
  } // Check for circular references and return its corresponding clone.


  stack || (stack = new _Stack());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);

  if (isSet_1(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
    return result;
  }

  if (isMap_1(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  var keysFunc = isFull ? isFlat ? _getAllKeysIn : _getAllKeys : isFlat ? keysIn : keys_1;
  var props = isArr ? undefined : keysFunc(value);

  _arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).


    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });

  return result;
}

var _baseClone = baseClone;
/** Used to compose bitmasks for cloning. */

var CLONE_DEEP_FLAG$1 = 1,
    CLONE_SYMBOLS_FLAG$1 = 4;
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */

function cloneDeep(value) {
  return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
}

var cloneDeep_1 = cloneDeep;
/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */

function head(array) {
  return array && array.length ? array[0] : undefined;
}

var head_1 = head;
var first = head_1;
/** Used to store function metadata. */

var metaMap = _WeakMap && new _WeakMap();
var _metaMap = metaMap;
/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */

var baseSetData = !_metaMap ? identity_1 : function (func, data) {
  _metaMap.set(func, data);

  return func;
};
var _baseSetData = baseSetData;
/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */

function createCtor(Ctor) {
  return function () {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;

    switch (args.length) {
      case 0:
        return new Ctor();

      case 1:
        return new Ctor(args[0]);

      case 2:
        return new Ctor(args[0], args[1]);

      case 3:
        return new Ctor(args[0], args[1], args[2]);

      case 4:
        return new Ctor(args[0], args[1], args[2], args[3]);

      case 5:
        return new Ctor(args[0], args[1], args[2], args[3], args[4]);

      case 6:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);

      case 7:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }

    var thisBinding = _baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args); // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.


    return isObject_1(result) ? result : thisBinding;
  };
}

var _createCtor = createCtor;
/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG = 1;
/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */

function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = _createCtor(func);

  function wrapper() {
    var fn = this && this !== _root && this instanceof wrapper ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }

  return wrapper;
}

var _createBind = createBind;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax$1 = Math.max;
/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */

function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax$1(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }

  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }

  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }

  return result;
}

var _composeArgs = composeArgs;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax$2 = Math.max;
/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */

function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax$2(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }

  var offset = argsIndex;

  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }

  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }

  return result;
}

var _composeArgsRight = composeArgsRight;
/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */

function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }

  return result;
}

var _countHolders = countHolders;
/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */

function baseLodash() {// No operation performed.
}

var _baseLodash = baseLodash;
/** Used as references for the maximum length and index of an array. */

var MAX_ARRAY_LENGTH = 4294967295;
/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */

function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
} // Ensure `LazyWrapper` is an instance of `baseLodash`.


LazyWrapper.prototype = _baseCreate(_baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
var _LazyWrapper = LazyWrapper;
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */

function noop() {// No operation performed.
}

var noop_1 = noop;
/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */

var getData = !_metaMap ? noop_1 : function (func) {
  return _metaMap.get(func);
};
var _getData = getData;
/** Used to lookup unminified function names. */

var realNames = {};
var _realNames = realNames;
/** Used for built-in method references. */

var objectProto$16 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$13 = objectProto$16.hasOwnProperty;
/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */

function getFuncName(func) {
  var result = func.name + '',
      array = _realNames[result],
      length = hasOwnProperty$13.call(_realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;

    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }

  return result;
}

var _getFuncName = getFuncName;
/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */

function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = _baseCreate(_baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
var _LodashWrapper = LodashWrapper;
/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */

function wrapperClone(wrapper) {
  if (wrapper instanceof _LazyWrapper) {
    return wrapper.clone();
  }

  var result = new _LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = _copyArray(wrapper.__actions__);
  result.__index__ = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

var _wrapperClone = wrapperClone;
/** Used for built-in method references. */

var objectProto$17 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$14 = objectProto$17.hasOwnProperty;
/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */

function lodash(value) {
  if (isObjectLike_1(value) && !isArray_1(value) && !(value instanceof _LazyWrapper)) {
    if (value instanceof _LodashWrapper) {
      return value;
    }

    if (hasOwnProperty$14.call(value, '__wrapped__')) {
      return _wrapperClone(value);
    }
  }

  return new _LodashWrapper(value);
} // Ensure wrappers are instances of `baseLodash`.


lodash.prototype = _baseLodash.prototype;
lodash.prototype.constructor = lodash;
var wrapperLodash = lodash;
/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */

function isLaziable(func) {
  var funcName = _getFuncName(func),
      other = wrapperLodash[funcName];

  if (typeof other != 'function' || !(funcName in _LazyWrapper.prototype)) {
    return false;
  }

  if (func === other) {
    return true;
  }

  var data = _getData(other);

  return !!data && func === data[0];
}

var _isLaziable = isLaziable;
/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */

var setData = _shortOut(_baseSetData);

var _setData = setData;
/** Used to match wrap detail comments. */

var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;
/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */

function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

var _getWrapDetails = getWrapDetails;
/** Used to match wrap detail comments. */

var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */

function insertWrapDetails(source, details) {
  var length = details.length;

  if (!length) {
    return source;
  }

  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

var _insertWrapDetails = insertWrapDetails;
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}

var _baseFindIndex = baseFindIndex;
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */

function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}

var _strictIndexOf = strictIndexOf;
/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function baseIndexOf(array, value, fromIndex) {
  return value === value ? _strictIndexOf(array, value, fromIndex) : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;
/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */

function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes;
/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG$1 = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;
/** Used to associate wrap methods with their bit flags. */

var wrapFlags = [['ary', WRAP_ARY_FLAG], ['bind', WRAP_BIND_FLAG$1], ['bindKey', WRAP_BIND_KEY_FLAG], ['curry', WRAP_CURRY_FLAG], ['curryRight', WRAP_CURRY_RIGHT_FLAG], ['flip', WRAP_FLIP_FLAG], ['partial', WRAP_PARTIAL_FLAG], ['partialRight', WRAP_PARTIAL_RIGHT_FLAG], ['rearg', WRAP_REARG_FLAG]];
/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */

function updateWrapDetails(details, bitmask) {
  _arrayEach(wrapFlags, function (pair) {
    var value = '_.' + pair[0];

    if (bitmask & pair[1] && !_arrayIncludes(details, value)) {
      details.push(value);
    }
  });

  return details.sort();
}

var _updateWrapDetails = updateWrapDetails;
/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */

function setWrapToString(wrapper, reference, bitmask) {
  var source = reference + '';
  return _setToString(wrapper, _insertWrapDetails(source, _updateWrapDetails(_getWrapDetails(source), bitmask)));
}

var _setWrapToString = setWrapToString;
/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG$2 = 1,
    WRAP_BIND_KEY_FLAG$1 = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG$1 = 8,
    WRAP_PARTIAL_FLAG$1 = 32,
    WRAP_PARTIAL_RIGHT_FLAG$1 = 64;
/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */

function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG$1,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;
  bitmask |= isCurry ? WRAP_PARTIAL_FLAG$1 : WRAP_PARTIAL_RIGHT_FLAG$1;
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG$1 : WRAP_PARTIAL_FLAG$1);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG$2 | WRAP_BIND_KEY_FLAG$1);
  }

  var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];
  var result = wrapFunc.apply(undefined, newData);

  if (_isLaziable(func)) {
    _setData(result, newData);
  }

  result.placeholder = placeholder;
  return _setWrapToString(result, func, bitmask);
}

var _createRecurry = createRecurry;
/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */

function getHolder(func) {
  var object = func;
  return object.placeholder;
}

var _getHolder = getHolder;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMin = Math.min;
/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */

function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = _copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = _isIndex(index, arrLength) ? oldArray[index] : undefined;
  }

  return array;
}

var _reorder = reorder;
/** Used as the internal argument placeholder. */

var PLACEHOLDER = '__lodash_placeholder__';
/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */

function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }

  return result;
}

var _replaceHolders = replaceHolders;
/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG$3 = 1,
    WRAP_BIND_KEY_FLAG$2 = 2,
    WRAP_CURRY_FLAG$2 = 8,
    WRAP_CURRY_RIGHT_FLAG$1 = 16,
    WRAP_ARY_FLAG$1 = 128,
    WRAP_FLIP_FLAG$1 = 512;
/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */

function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG$1,
      isBind = bitmask & WRAP_BIND_FLAG$3,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG$2,
      isCurried = bitmask & (WRAP_CURRY_FLAG$2 | WRAP_CURRY_RIGHT_FLAG$1),
      isFlip = bitmask & WRAP_FLIP_FLAG$1,
      Ctor = isBindKey ? undefined : _createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }

    if (isCurried) {
      var placeholder = _getHolder(wrapper),
          holdersCount = _countHolders(args, placeholder);
    }

    if (partials) {
      args = _composeArgs(args, partials, holders, isCurried);
    }

    if (partialsRight) {
      args = _composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }

    length -= holdersCount;

    if (isCurried && length < arity) {
      var newHolders = _replaceHolders(args, placeholder);

      return _createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
    }

    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;
    length = args.length;

    if (argPos) {
      args = _reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }

    if (isAry && ary < length) {
      args.length = ary;
    }

    if (this && this !== _root && this instanceof wrapper) {
      fn = Ctor || _createCtor(fn);
    }

    return fn.apply(thisBinding, args);
  }

  return wrapper;
}

var _createHybrid = createHybrid;
/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */

function createCurry(func, bitmask, arity) {
  var Ctor = _createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = _getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }

    var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : _replaceHolders(args, placeholder);
    length -= holders.length;

    if (length < arity) {
      return _createRecurry(func, bitmask, _createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
    }

    var fn = this && this !== _root && this instanceof wrapper ? Ctor : func;
    return _apply(fn, this, args);
  }

  return wrapper;
}

var _createCurry = createCurry;
/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG$4 = 1;
/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */

function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG$4,
      Ctor = _createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = this && this !== _root && this instanceof wrapper ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }

    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }

    return _apply(fn, isBind ? thisArg : this, args);
  }

  return wrapper;
}

var _createPartial = createPartial;
/** Used as the internal argument placeholder. */

var PLACEHOLDER$1 = '__lodash_placeholder__';
/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG$5 = 1,
    WRAP_BIND_KEY_FLAG$3 = 2,
    WRAP_CURRY_BOUND_FLAG$1 = 4,
    WRAP_CURRY_FLAG$3 = 8,
    WRAP_ARY_FLAG$2 = 128,
    WRAP_REARG_FLAG$1 = 256;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMin$1 = Math.min;
/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */

function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG$5 | WRAP_BIND_KEY_FLAG$3 | WRAP_ARY_FLAG$2);
  var isCombo = srcBitmask == WRAP_ARY_FLAG$2 && bitmask == WRAP_CURRY_FLAG$3 || srcBitmask == WRAP_ARY_FLAG$2 && bitmask == WRAP_REARG_FLAG$1 && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG$2 | WRAP_REARG_FLAG$1) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG$3; // Exit early if metadata can't be merged.

  if (!(isCommon || isCombo)) {
    return data;
  } // Use source `thisArg` if available.


  if (srcBitmask & WRAP_BIND_FLAG$5) {
    data[2] = source[2]; // Set when currying a bound function.

    newBitmask |= bitmask & WRAP_BIND_FLAG$5 ? 0 : WRAP_CURRY_BOUND_FLAG$1;
  } // Compose partial arguments.


  var value = source[3];

  if (value) {
    var partials = data[3];
    data[3] = partials ? _composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? _replaceHolders(data[3], PLACEHOLDER$1) : source[4];
  } // Compose partial right arguments.


  value = source[5];

  if (value) {
    partials = data[5];
    data[5] = partials ? _composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? _replaceHolders(data[5], PLACEHOLDER$1) : source[6];
  } // Use source `argPos` if available.


  value = source[7];

  if (value) {
    data[7] = value;
  } // Use source `ary` if it's smaller.


  if (srcBitmask & WRAP_ARY_FLAG$2) {
    data[8] = data[8] == null ? source[8] : nativeMin$1(data[8], source[8]);
  } // Use source `arity` if one is not provided.


  if (data[9] == null) {
    data[9] = source[9];
  } // Use source `func` and merge bitmasks.


  data[0] = source[0];
  data[1] = newBitmask;
  return data;
}

var _mergeData = mergeData;
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */

function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol_1(value)) {
    return NAN;
  }

  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

var toNumber_1 = toNumber;
/** Used as references for various `Number` constants. */

var INFINITY$2 = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */

function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }

  value = toNumber_1(value);

  if (value === INFINITY$2 || value === -INFINITY$2) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }

  return value === value ? value : 0;
}

var toFinite_1 = toFinite;
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */

function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}

var toInteger_1 = toInteger;
/** Error message constants. */

var FUNC_ERROR_TEXT$1 = 'Expected a function';
/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG$6 = 1,
    WRAP_BIND_KEY_FLAG$4 = 2,
    WRAP_CURRY_FLAG$4 = 8,
    WRAP_CURRY_RIGHT_FLAG$2 = 16,
    WRAP_PARTIAL_FLAG$2 = 32,
    WRAP_PARTIAL_RIGHT_FLAG$2 = 64;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax$3 = Math.max;
/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */

function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG$4;

  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }

  var length = partials ? partials.length : 0;

  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG$2 | WRAP_PARTIAL_RIGHT_FLAG$2);
    partials = holders = undefined;
  }

  ary = ary === undefined ? ary : nativeMax$3(toInteger_1(ary), 0);
  arity = arity === undefined ? arity : toInteger_1(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG$2) {
    var partialsRight = partials,
        holdersRight = holders;
    partials = holders = undefined;
  }

  var data = isBindKey ? undefined : _getData(func);
  var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

  if (data) {
    _mergeData(newData, data);
  }

  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax$3(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2)) {
    bitmask &= ~(WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2);
  }

  if (!bitmask || bitmask == WRAP_BIND_FLAG$6) {
    var result = _createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG$4 || bitmask == WRAP_CURRY_RIGHT_FLAG$2) {
    result = _createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG$2 || bitmask == (WRAP_BIND_FLAG$6 | WRAP_PARTIAL_FLAG$2)) && !holders.length) {
    result = _createPartial(func, bitmask, thisArg, partials);
  } else {
    result = _createHybrid.apply(undefined, newData);
  }

  var setter = data ? _baseSetData : _setData;
  return _setWrapToString(setter(result, newData), func, bitmask);
}

var _createWrap = createWrap;
/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG$7 = 1,
    WRAP_PARTIAL_FLAG$3 = 32;
/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */

var bind = _baseRest(function (func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG$7;

  if (partials.length) {
    var holders = _replaceHolders(partials, _getHolder(bind));

    bitmask |= WRAP_PARTIAL_FLAG$3;
  }

  return _createWrap(func, bitmask, thisArg, partials, holders);
}); // Assign default placeholders.


bind.placeholder = {};
var bind_1 = bind;
var global$1$1 = typeof global$1 !== "undefined" ? global$1 : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}; // shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;

if (typeof global$1$1.setTimeout === 'function') {
  cachedSetTimeout = setTimeout;
}

if (typeof global$1$1.clearTimeout === 'function') {
  cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

function nextTick(fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
} // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues

var versions = {};
var release = {};
var config = {};

function noop$1() {}

var on = noop$1;
var addListener = noop$1;
var once = noop$1;
var off = noop$1;
var removeListener = noop$1;
var removeAllListeners = noop$1;
var emit = noop$1;

function binding(name) {
  throw new Error('process.binding is not supported');
}

function cwd() {
  return '/';
}

function chdir(dir) {
  throw new Error('process.chdir is not supported');
}

function umask() {
  return 0;
} // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js


var performance = global$1$1.performance || {};

var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
  return new Date().getTime();
}; // generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime


function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);

  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];

    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }

  return [seconds, nanoseconds];
}

var startTime = new Date();

function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};
var axios = createCommonjsModule(function (module, exports) {
  /* axios v0.18.0 | (c) 2018 by Matt Zabriskie */
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(commonjsGlobal, function () {
    return (
      /******/
      function (modules) {
        // webpackBootstrap

        /******/
        // The module cache

        /******/
        var installedModules = {};
        /******/

        /******/
        // The require function

        /******/

        function __webpack_require__(moduleId) {
          /******/

          /******/
          // Check if module is in cache

          /******/
          if (installedModules[moduleId])
            /******/
            return installedModules[moduleId].exports;
          /******/

          /******/
          // Create a new module (and put it into the cache)

          /******/

          var module = installedModules[moduleId] = {
            /******/
            exports: {},

            /******/
            id: moduleId,

            /******/
            loaded: false
            /******/

          };
          /******/

          /******/
          // Execute the module function

          /******/

          modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          /******/

          /******/
          // Flag the module as loaded

          /******/

          module.loaded = true;
          /******/

          /******/
          // Return the exports of the module

          /******/

          return module.exports;
          /******/
        }
        /******/

        /******/

        /******/
        // expose the modules object (__webpack_modules__)

        /******/


        __webpack_require__.m = modules;
        /******/

        /******/
        // expose the module cache

        /******/

        __webpack_require__.c = installedModules;
        /******/

        /******/
        // __webpack_public_path__

        /******/

        __webpack_require__.p = "";
        /******/

        /******/
        // Load entry module and return exports

        /******/

        return __webpack_require__(0);
        /******/
      }(
      /************************************************************************/

      /******/
      [
      /* 0 */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(1);
        /***/
      },
      /* 1 */

      /***/
      function (module, exports, __webpack_require__) {
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
          var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

          utils.extend(instance, Axios.prototype, context); // Copy context to instance

          utils.extend(instance, context);
          return instance;
        } // Create the default instance to be exported


        var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

        axios.Axios = Axios; // Factory for creating new instances

        axios.create = function create(instanceConfig) {
          return createInstance(utils.merge(defaults, instanceConfig));
        }; // Expose Cancel & CancelToken


        axios.Cancel = __webpack_require__(23);
        axios.CancelToken = __webpack_require__(24);
        axios.isCancel = __webpack_require__(20); // Expose all/spread

        axios.all = function all(promises) {
          return Promise.all(promises);
        };

        axios.spread = __webpack_require__(25);
        module.exports = axios; // Allow use of default import syntax in TypeScript

        module.exports.default = axios;
        /***/
      },
      /* 2 */

      /***/
      function (module, exports, __webpack_require__) {
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
          return typeof FormData !== 'undefined' && val instanceof FormData;
        }
        /**
         * Determine if a value is a view on an ArrayBuffer
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
         */


        function isArrayBufferView(val) {
          var result;

          if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
            result = ArrayBuffer.isView(val);
          } else {
            result = val && val.buffer && val.buffer instanceof ArrayBuffer;
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
          return val !== null && _typeof(val) === 'object';
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

          return typeof window !== 'undefined' && typeof document !== 'undefined';
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
          } // Force an array if not already something iterable


          if (_typeof(obj) !== 'object') {
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


        function merge()
        /* obj1, obj2, obj3, ... */
        {
          var result = {};

          function assignValue(val, key) {
            if (_typeof(result[key]) === 'object' && _typeof(val) === 'object') {
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
        /***/
      },
      /* 3 */

      /***/
      function (module, exports) {
        module.exports = function bind(fn, thisArg) {
          return function wrap() {
            var args = new Array(arguments.length);

            for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i];
            }

            return fn.apply(thisArg, args);
          };
        };
        /***/

      },
      /* 4 */

      /***/
      function (module, exports) {
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        // The _isBuffer check is for Safari 5-7 support, because it's missing
        // Object.prototype.constructor. Remove this eventually
        module.exports = function (obj) {
          return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
        };

        function isBuffer(obj) {
          return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
        } // For Node v0.10 support. Remove this eventually.


        function isSlowBuffer(obj) {
          return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
        }
        /***/

      },
      /* 5 */

      /***/
      function (module, exports, __webpack_require__) {
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


        Axios.prototype.request = function request(config$$1) {
          /*eslint no-param-reassign:0*/
          // Allow for axios('example/url'[, config]) a la fetch API
          if (typeof config$$1 === 'string') {
            config$$1 = utils.merge({
              url: arguments[0]
            }, arguments[1]);
          }

          config$$1 = utils.merge(defaults, {
            method: 'get'
          }, this.defaults, config$$1);
          config$$1.method = config$$1.method.toLowerCase(); // Hook up interceptors middleware

          var chain = [dispatchRequest, undefined];
          var promise = Promise.resolve(config$$1);
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
        }; // Provide aliases for supported request methods


        utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
          /*eslint func-names:0*/
          Axios.prototype[method] = function (url, config$$1) {
            return this.request(utils.merge(config$$1 || {}, {
              method: method,
              url: url
            }));
          };
        });
        utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
          /*eslint func-names:0*/
          Axios.prototype[method] = function (url, data, config$$1) {
            return this.request(utils.merge(config$$1 || {}, {
              method: method,
              url: url,
              data: data
            }));
          };
        });
        module.exports = Axios;
        /***/
      },
      /* 6 */

      /***/
      function (module, exports, __webpack_require__) {
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

            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
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
              } catch (e) {
                /* Ignore */
              }
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
        /***/
      },
      /* 7 */

      /***/
      function (module, exports, __webpack_require__) {
        var utils = __webpack_require__(2);

        module.exports = function normalizeHeaderName(headers, normalizedName) {
          utils.forEach(headers, function processHeader(value, name) {
            if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
              headers[normalizedName] = value;
              delete headers[name];
            }
          });
        };
        /***/

      },
      /* 8 */

      /***/
      function (module, exports, __webpack_require__) {
        var utils = __webpack_require__(2);

        var settle = __webpack_require__(9);

        var buildURL = __webpack_require__(12);

        var parseHeaders = __webpack_require__(13);

        var isURLSameOrigin = __webpack_require__(14);

        var createError = __webpack_require__(10);

        var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(15);

        module.exports = function xhrAdapter(config$$1) {
          return new Promise(function dispatchXhrRequest(resolve, reject) {
            var requestData = config$$1.data;
            var requestHeaders = config$$1.headers;

            if (utils.isFormData(requestData)) {
              delete requestHeaders['Content-Type']; // Let the browser set it
            }

            var request = new XMLHttpRequest();
            var loadEvent = 'onreadystatechange';
            var xDomain = false; // For IE 8/9 CORS support
            // Only supports POST and GET calls and doesn't returns the response headers.
            // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.

            if ("production" !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config$$1.url)) {
              request = new window.XDomainRequest();
              loadEvent = 'onload';
              xDomain = true;

              request.onprogress = function handleProgress() {};

              request.ontimeout = function handleTimeout() {};
            } // HTTP basic authentication


            if (config$$1.auth) {
              var username = config$$1.auth.username || '';
              var password = config$$1.auth.password || '';
              requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
            }

            request.open(config$$1.method.toUpperCase(), buildURL(config$$1.url, config$$1.params, config$$1.paramsSerializer), true); // Set the request timeout in MS

            request.timeout = config$$1.timeout; // Listen for ready state

            request[loadEvent] = function handleLoad() {
              if (!request || request.readyState !== 4 && !xDomain) {
                return;
              } // The request errored out and we didn't get a response, this will be
              // handled by onerror instead
              // With one exception: request that using file: protocol, most browsers
              // will return status as 0 even though it's a successful request


              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                return;
              } // Prepare the response


              var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
              var responseData = !config$$1.responseType || config$$1.responseType === 'text' ? request.responseText : request.response;
              var response = {
                data: responseData,
                // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
                status: request.status === 1223 ? 204 : request.status,
                statusText: request.status === 1223 ? 'No Content' : request.statusText,
                headers: responseHeaders,
                config: config$$1,
                request: request
              };
              settle(resolve, reject, response); // Clean up request

              request = null;
            }; // Handle low level network errors


            request.onerror = function handleError() {
              // Real errors are hidden from us by the browser
              // onerror should only fire if it's a network error
              reject(createError('Network Error', config$$1, null, request)); // Clean up request

              request = null;
            }; // Handle timeout


            request.ontimeout = function handleTimeout() {
              reject(createError('timeout of ' + config$$1.timeout + 'ms exceeded', config$$1, 'ECONNABORTED', request)); // Clean up request

              request = null;
            }; // Add xsrf header
            // This is only done if running in a standard browser environment.
            // Specifically not if we're in a web worker, or react-native.


            if (utils.isStandardBrowserEnv()) {
              var cookies = __webpack_require__(16); // Add xsrf header


              var xsrfValue = (config$$1.withCredentials || isURLSameOrigin(config$$1.url)) && config$$1.xsrfCookieName ? cookies.read(config$$1.xsrfCookieName) : undefined;

              if (xsrfValue) {
                requestHeaders[config$$1.xsrfHeaderName] = xsrfValue;
              }
            } // Add headers to the request


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
            } // Add withCredentials to request if needed


            if (config$$1.withCredentials) {
              request.withCredentials = true;
            } // Add responseType to request if needed


            if (config$$1.responseType) {
              try {
                request.responseType = config$$1.responseType;
              } catch (e) {
                // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                if (config$$1.responseType !== 'json') {
                  throw e;
                }
              }
            } // Handle progress if needed


            if (typeof config$$1.onDownloadProgress === 'function') {
              request.addEventListener('progress', config$$1.onDownloadProgress);
            } // Not all browsers support upload events


            if (typeof config$$1.onUploadProgress === 'function' && request.upload) {
              request.upload.addEventListener('progress', config$$1.onUploadProgress);
            }

            if (config$$1.cancelToken) {
              // Handle cancellation
              config$$1.cancelToken.promise.then(function onCanceled(cancel) {
                if (!request) {
                  return;
                }

                request.abort();
                reject(cancel); // Clean up request

                request = null;
              });
            }

            if (requestData === undefined) {
              requestData = null;
            } // Send the request


            request.send(requestData);
          });
        };
        /***/

      },
      /* 9 */

      /***/
      function (module, exports, __webpack_require__) {
        var createError = __webpack_require__(10);
        /**
         * Resolve or reject a Promise based on response status.
         *
         * @param {Function} resolve A function that resolves the promise.
         * @param {Function} reject A function that rejects the promise.
         * @param {object} response The response.
         */


        module.exports = function settle(resolve, reject, response) {
          var validateStatus = response.config.validateStatus; // Note: status is not exposed by XDomainRequest

          if (!response.status || !validateStatus || validateStatus(response.status)) {
            resolve(response);
          } else {
            reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
          }
        };
        /***/

      },
      /* 10 */

      /***/
      function (module, exports, __webpack_require__) {
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


        module.exports = function createError(message, config$$1, code, request, response) {
          var error = new Error(message);
          return enhanceError(error, config$$1, code, request, response);
        };
        /***/

      },
      /* 11 */

      /***/
      function (module, exports) {
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
        module.exports = function enhanceError(error, config$$1, code, request, response) {
          error.config = config$$1;

          if (code) {
            error.code = code;
          }

          error.request = request;
          error.response = response;
          return error;
        };
        /***/

      },
      /* 12 */

      /***/
      function (module, exports, __webpack_require__) {
        var utils = __webpack_require__(2);

        function encode(val) {
          return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
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
        /***/

      },
      /* 13 */

      /***/
      function (module, exports, __webpack_require__) {
        var utils = __webpack_require__(2); // Headers whose duplicates are ignored by node
        // c.f. https://nodejs.org/api/http.html#http_message_headers


        var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
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

          if (!headers) {
            return parsed;
          }

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
        /***/

      },
      /* 14 */

      /***/
      function (module, exports, __webpack_require__) {
        var utils = __webpack_require__(2);

        module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        function standardBrowserEnv() {
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

            urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
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
            var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
          };
        }() : // Non standard browser envs (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true;
          };
        }();
        /***/
      },
      /* 15 */

      /***/
      function (module, exports) {
        // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        function E() {
          this.message = 'String contains an invalid character';
        }

        E.prototype = new Error();
        E.prototype.code = 5;
        E.prototype.name = 'InvalidCharacterError';

        function btoa(input) {
          var str = String(input);
          var output = '';

          for ( // initialize result and counter
          var block, charCode, idx = 0, map = chars; // if the next str index does not exist:
          //   change the mapping table to "="
          //   check if d has no fractional digits
          str.charAt(idx | 0) || (map = '=', idx % 1); // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
          output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
            charCode = str.charCodeAt(idx += 3 / 4);

            if (charCode > 0xFF) {
              throw new E();
            }

            block = block << 8 | charCode;
          }

          return output;
        }

        module.exports = btoa;
        /***/
      },
      /* 16 */

      /***/
      function (module, exports, __webpack_require__) {
        var utils = __webpack_require__(2);

        module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
        function standardBrowserEnv() {
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
              return match ? decodeURIComponent(match[3]) : null;
            },
            remove: function remove(name) {
              this.write(name, '', Date.now() - 86400000);
            }
          };
        }() : // Non standard browser env (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return {
            write: function write() {},
            read: function read() {
              return null;
            },
            remove: function remove() {}
          };
        }();
        /***/
      },
      /* 17 */

      /***/
      function (module, exports, __webpack_require__) {
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
        /***/
      },
      /* 18 */

      /***/
      function (module, exports, __webpack_require__) {
        var utils = __webpack_require__(2);

        var transformData = __webpack_require__(19);

        var isCancel = __webpack_require__(20);

        var defaults = __webpack_require__(6);

        var isAbsoluteURL = __webpack_require__(21);

        var combineURLs = __webpack_require__(22);
        /**
         * Throws a `Cancel` if cancellation has been requested.
         */


        function throwIfCancellationRequested(config$$1) {
          if (config$$1.cancelToken) {
            config$$1.cancelToken.throwIfRequested();
          }
        }
        /**
         * Dispatch a request to the server using the configured adapter.
         *
         * @param {object} config The config that is to be used for the request
         * @returns {Promise} The Promise to be fulfilled
         */


        module.exports = function dispatchRequest(config$$1) {
          throwIfCancellationRequested(config$$1); // Support baseURL config

          if (config$$1.baseURL && !isAbsoluteURL(config$$1.url)) {
            config$$1.url = combineURLs(config$$1.baseURL, config$$1.url);
          } // Ensure headers exist


          config$$1.headers = config$$1.headers || {}; // Transform request data

          config$$1.data = transformData(config$$1.data, config$$1.headers, config$$1.transformRequest); // Flatten headers

          config$$1.headers = utils.merge(config$$1.headers.common || {}, config$$1.headers[config$$1.method] || {}, config$$1.headers || {});
          utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
            delete config$$1.headers[method];
          });
          var adapter = config$$1.adapter || defaults.adapter;
          return adapter(config$$1).then(function onAdapterResolution(response) {
            throwIfCancellationRequested(config$$1); // Transform response data

            response.data = transformData(response.data, response.headers, config$$1.transformResponse);
            return response;
          }, function onAdapterRejection(reason) {
            if (!isCancel(reason)) {
              throwIfCancellationRequested(config$$1); // Transform response data

              if (reason && reason.response) {
                reason.response.data = transformData(reason.response.data, reason.response.headers, config$$1.transformResponse);
              }
            }

            return Promise.reject(reason);
          });
        };
        /***/

      },
      /* 19 */

      /***/
      function (module, exports, __webpack_require__) {
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
        /***/

      },
      /* 20 */

      /***/
      function (module, exports) {
        module.exports = function isCancel(value) {
          return !!(value && value.__CANCEL__);
        };
        /***/

      },
      /* 21 */

      /***/
      function (module, exports) {
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
        /***/

      },
      /* 22 */

      /***/
      function (module, exports) {
        /**
         * Creates a new URL by combining the specified URLs
         *
         * @param {string} baseURL The base URL
         * @param {string} relativeURL The relative URL
         * @returns {string} The combined URL
         */
        module.exports = function combineURLs(baseURL, relativeURL) {
          return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
        };
        /***/

      },
      /* 23 */

      /***/
      function (module, exports) {
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
        /***/
      },
      /* 24 */

      /***/
      function (module, exports, __webpack_require__) {
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
        /***/
      },
      /* 25 */

      /***/
      function (module, exports) {
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
        /***/

      }]
      /******/
      )
    );
  }); 

});
var RequestOptions = {
  // `responseType` indicates the type of data that the server will respond with
  // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json',
  // default
  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [],
  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: []
  /*
  // `url` is the server URL that will be used for the request
    // `method` is the request method to be used when making the request
  method: 'get', // default
   // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/api/',
   // `headers` are custom headers to be sent
  headers: {'X-Requested-With': 'XMLHttpRequest'},
   // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  params: {
      ID: 12345
  },
   // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
  },
   // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer
  data: {
      firstName: 'Fred'
  },
   // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000,
   // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default
   // `adapter` allows custom handling of requests which makes testing easier.
  // Return a promise and supply a valid response (see lib/adapters/README.md).
  adapter: function (config) {
      //
  },
   // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  auth: {
      username: 'janedoe',
      password: 's00pers3cret'
  },
   // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default
   // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default
   // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default
   // `onUploadProgress` allows handling of progress events for uploads
  onUploadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
  },
   // `onDownloadProgress` allows handling of progress events for downloads
  onDownloadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
  },
   // `maxContentLength` defines the max size of the http response content in bytes allowed
  maxContentLength: 2000,
   // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: function (status) {
      return status >= 200 && status < 300; // default
  },
   // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 5, // default
   // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default
   // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
   // 'proxy' defines the hostname and port of the proxy server
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` custom headers you have set using `headers`.
  proxy: {
      host: '127.0.0.1',
      port: 9000,
      auth: {
          username: 'mikeymike',
          password: 'rapunz3l'
      }
  },
   // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  cancelToken: new CancelToken(function (cancel) {
   })
  */

};

function requestTranformer(transformer, context) {
  if (!isFunction_1(transformer)) {
    throw new Error('The transformer must be a defined as a function with two arguments: [data, headers].');
  }

  (context || RequestOptions.transformRequest).push(transformer);
}

function responseTranformer(transformer, context) {
  if (!isFunction_1(transformer)) {
    throw new Error('The transformer must be a defined as a function with one arguments: [data].');
  }

  (context || RequestOptions.transformResponse).push(transformer);
}

var PROXY_OPTION_PROPERTIES = ['headers', 'params', 'data'];
var PROXY_OPTION_METHODS = {
  get: function get(prop, context) {
    return function () {
      return context[prop];
    };
  },
  set: function set(prop, context) {
    return function (value) {
      context[prop] = value;
    };
  },
  add: function add(prop, context) {
    return function (key, value) {
      context[prop][key] = value;
    };
  },
  remove: function remove(prop, context) {
    return function (key) {
      delete context[prop][key];
    };
  },
  merge: function merge(prop, context) {
    return function (key, values) {
      extend(context[prop], key);
    };
  }
};

var method = function method(action, prop) {
  return camelCase_1([action, prop].join(' '));
};

var chainable = function chainable(prop) {
  var _this = this;

  return function (key, value) {
    if (key instanceof FormData) {
      _this[method('set', prop)](key);
    } else if (isObject_1(key)) {
      _this[method('merge', prop)](key);
    } else {
      _this[method('add', prop)](key, value);
    }

    return _this;
  };
};

function merge$1() {
  var args = [].slice.call(arguments);
  var items = args.splice(1);
  var subject = first(args);

  for (var i in items) {
    subject = mergeWith_1(subject, items[i], function (subject, value) {
      if (isArray_1(subject)) {
        return subject.concat(value);
      } else if (isObject_1(subject)) {
        return extend(subject, value);
      }

      return value;
    });
  }

  return subject;
}

var Request =
/*#__PURE__*/
function () {
  function Request(url) {
    var _this2 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$1(this, Request);

    this.$options = merge$1({
      url: url,
      data: {},
      headers: {},
      params: {}
    }, cloneDeep_1(RequestOptions), options);
    each(PROXY_OPTION_METHODS, function (callback, key) {
      _this2[method(key, 'option')] = bind_1(callback)('$options', _this2);
    });
    each(PROXY_OPTION_PROPERTIES, function (prop) {
      each(PROXY_OPTION_METHODS, function (callback, key) {
        _this2[method(key, prop)] = bind_1(callback)(prop, _this2.$options);
      });
      _this2[prop] = bind_1(chainable, _this2)(prop);
    });
    this.reset();
  }

  _createClass$1(Request, [{
    key: "reset",
    value: function reset() {
      this.$error = null;
      this.$status = null;
      this.$statusText = null;
      this.$response = null;
      this.$requestSentAt = null;
      this.$responseReceivedAt = null;
    }
  }, {
    key: "hasSent",
    value: function hasSent() {
      return !!this.$requestSentAt;
    }
  }, {
    key: "hasResponse",
    value: function hasResponse() {
      return !!this.$responseReceivedAt;
    }
  }, {
    key: "passed",
    value: function passed() {
      return this.hasResponse() && !this.$error;
    }
  }, {
    key: "failed",
    value: function failed() {
      return this.hasResponse() && !!this.$error;
    }
  }, {
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.params(params).headers(headers).request('get');
    }
  }, {
    key: "post",
    value: function post() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.data(data).headers(headers).request('post');
    }
  }, {
    key: "put",
    value: function put() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.data(data).headers(headers).request('put');
    }
  }, {
    key: "delete",
    value: function _delete() {
      var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.headers(headers).request('delete');
    }
  }, {
    key: "request",
    value: function request(method) {
      var _this3 = this;

      this.reset();
      this.$requestSentAt = moment();
      this.addOption('method', method);
      var promise = new Promise(function (resolve, reject) {
        axios(_this3.$options).then(function (response) {
          _this3.$response = response;
          _this3.$responseReceivedAt = moment();
          _this3.$status = response.status;
          _this3.$statusText = response.statusText;
          resolve(response.data);
        }, function (error) {
          _this3.$error = error;
          _this3.$response = error.response;
          _this3.$responseReceivedAt = moment();
          _this3.$status = error.response.status;
          _this3.$statusText = error.response.statusText;
          reject(error.response ? error.response.data : error);
        });
      });
      return promise;
    }
  }, {
    key: "requestTranformer",
    value: function requestTranformer$$1(transformer) {
      if (!this.$options.transformRequest) {
        this.$options.transformRequest = [];
      }

      requestTranformer(transformer, this.$options.transformRequest);
    }
  }, {
    key: "responseTransformer",
    value: function responseTransformer(transformer) {
      if (this.$options.transformResponse) {
        this.$options.transformResponse = [];
      }

      responseTranformer(transformer, this.$options.transformResponse);
    }
  }], [{
    key: "option",
    value: function option(key, value) {
      if (isObject_1(key)) {
        merge$1(RequestOptions, key);
      } else {
        var option = {};
        option[key] = value;
        merge$1(RequestOptions, option);
      }
    }
  }, {
    key: "make",
    value: function make(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Request(url, params);
    }
  }]);

  return Request;
}();

var Model =
/*#__PURE__*/
function () {
  /**
   * Initialize the model instance
   *
   * @param data object
   * @return void
   */
  function Model() {
    var _this = this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$1(this, Model);

    this.$changed = {};
    this.$exists = false;
    this.$attributes = {};
    this.$key = this.key();
    this.initialize(data);
    this.$files = this.files();
    this.$properties = this.properties();
    each(params, function (value, key) {
      _this[key] = value;
    });
    this.$initialized = true;
  }
  /**
   * Initialize the model with the given data without considering the data
   * as "changed".
   *
   * @param data object
   * @return this
   */


  _createClass$1(Model, [{
    key: "initialize",
    value: function initialize(data) {
      this.$initialized = false;
      this.fill(data);
      this.$initialized = true;
      return this;
    }
    /**
     * Define the corresponding API endpoint slug
     *
     * @return string
     */

  }, {
    key: "endpoint",
    value: function endpoint() {} //

    /**
     * Define the corresponding uri schema.
     *
     * @return string
     */

  }, {
    key: "uri",
    value: function uri(method) {
      return [this.endpoint() || '', this.exists() ? "/".concat(this.get(this.key())) : ''].join('/').replace(/^\//, '');
    }
    /**
     * Define a primary key. This is used to determine if the model exists and
     * which endpoint to use.
     *
     * @return string
     */

  }, {
    key: "key",
    value: function key() {
      return 'id';
    }
    /**
     * Return an array of properties that are sent to the API. If no properties
     * are defined, then all the attributes will be included in the request.
     *
     * @return array
     */

  }, {
    key: "properties",
    value: function properties() {
      return [];
    }
    /**
     * Return an array of file properties that are sent to the API. If no fies
     * are defined, then request will always be sent with JSON vs. multipart.
     *
     * @return array
     */

  }, {
    key: "files",
    value: function files() {
      return [];
    }
    /**
     * Set the attributes in the model with the data given.
     *
     * @param data object
     * @return this
     */

  }, {
    key: "fill",
    value: function fill(data) {
      this.setAttributes(data);
      return this;
    }
    /**
     * Get one or more attributes from the model.
     *
     * @param data string|array
     * @return array|mixed
     */

  }, {
    key: "get",
    value: function get(key) {
      if (isArray_1(key) || isObject_1(key)) {
        return this.getAttributes().filter(function (value) {
          return data.indexOf(value) !== -1;
        });
      } else {
        return this.getAttribute(key);
      }
    }
    /**
     * Alias for setAttributes() except this method returns `this`. This method
     * also accepts an array of values or key/value pair.
     *
     * @return this
     */

  }, {
    key: "set",
    value: function set(key) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (isArray_1(key) || isObject_1(key)) {
        this.setAttributes(key);
      } else {
        this.setAttribute(key, value);
      }

      return this;
    }
    /**
     * Get all the defined attributes.
     *
     * @return array
     */

  }, {
    key: "getAttributes",
    value: function getAttributes() {
      return this.$attributes;
    }
    /**
     * Get the changed attributes
     *
     * @return array
     */

  }, {
    key: "getChangedAttributes",
    value: function getChangedAttributes() {
      return keys_1(this.$changed);
    }
    /**
     * Get the changed attributes
     *
     * @return array
     */

  }, {
    key: "getOriginalValue",
    value: function getOriginalValue(key) {
      return this.$changed[key] || this.$attributes[key];
    }
    /**
     * Get the unchanged attributes
     *
     * @return array
     */

  }, {
    key: "getUnchangedAttributes",
    value: function getUnchangedAttributes() {
      var _this2 = this;

      return filter_1(keys_1(this.$attributes), function (key) {
        return !(key in _this2.$changed);
      });
    }
    /**
     * Get an attribute with a given key. If no key is defined
     *
     * @param key string
     * @param default undefined|mixed
     * @return array
     */

  }, {
    key: "getAttribute",
    value: function getAttribute(key) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      return this.$attributes[key] || value;
    }
    /**
     * Set an array or object of data as attributes.
     *
     * @param attributes array|object
     * @return void
     */

  }, {
    key: "setAttributes",
    value: function setAttributes(data) {
      var _this3 = this;

      if (!isArray_1(data) && !isObject_1(data)) {
        throw new Error('Attributes must be set with an array or object.');
      }

      each(data, function (value, key) {
        _this3.setAttribute(key, value);
      });
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

  }, {
    key: "setAttribute",
    value: function setAttribute(key, value) {
      if (this.getAttribute(key) !== value) {
        this.handleAttributeChange(key, value);

        if (isUndefined_1(value)) {
          delete this.$attributes[key];
        } else {
          this.$attributes[key] = value;
        }
      }
    }
    /**
     * Revert the model to its original state.
     *
     * @return bool
     */

  }, {
    key: "revert",
    value: function revert() {
      var _this4 = this;

      each(this.$changed, function (value, key) {
        if (!isUndefined_1(value)) {
          _this4.$attributes[key] = value;
        } else {
          delete _this4.$attributes[key];
        }
      });
      this.$changed = {};
    }
    /**
     * Returns if the model has a primary key set.
     *
     * @return bool
     */

  }, {
    key: "exists",
    value: function exists() {
      return !!this.$exists;
    }
    /**
     * Returns the model been changed or not.
     *
     * @return bool
     */

  }, {
    key: "hasChanged",
    value: function hasChanged(key) {
      return !key ? size_1(this.$changed) > 0 : !isUndefined_1(this.$changed[key]);
    }
    /**
     * Does the model have any File objects. If so, need to send as multipart.
     *
     * @return bool
     */

  }, {
    key: "hasFiles",
    value: function hasFiles() {
      function count(files) {
        var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return reduce_1(files, function (carry, value) {
          if (isArray_1(value)) {
            return carry + count(value, total);
          } else if (value instanceof File || value instanceof FileList) {
            return carry + 1;
          } else {
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

  }, {
    key: "handleAttributeChange",
    value: function handleAttributeChange(key, value) {
      if (this.$initialized) {
        if (this.$changed[key] === value) {
          delete this.$changed[key];
        } else if (!(key in this.$changed)) {
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

  }, {
    key: "handlePrimaryKeyChange",
    value: function handlePrimaryKeyChange(key, value) {
      if (this.$key === key) {
        this.$exists = !isUndefined_1(value) && !isNull_1(value);
      }
    }
    /**
     * Save the model to the database
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "save",
    value: function save() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.exists() ? this.create(data, config) : this.update(data, config);
    }
    /**
     * Create a new model
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "create",
    value: function create() {
      var _this5 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.fill(data);
      var request = this.request(this.uri('create'), extend({
        data: !this.hasFiles() ? this.toJson() : this.toFormData()
      }, config));
      return request.post().then(function (response) {
        return _this5.fill(response);
      });
    }
    /**
     * Update an existing model
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "update",
    value: function update() {
      var _this6 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.fill(data);
      var request = this.request("".concat(this.uri('update')), extend({
        data: !this.hasFiles() ? this.toJson() : this.toFormData()
      }, config));
      return request[this.hasFiles() ? 'post' : 'put']().then(function (response) {
        return _this6.fill(response);
      });
    }
    /**
     * Delete an existing model
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "delete",
    value: function _delete() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.exists()) {
        throw new Error('The model must have a primary key before it can be delete.');
      }

      this.fill(data);
      return this.request("".concat(this.uri('delete')), config).delete();
    }
    /**
     * Find an existing model by id
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "search",
    value: function search() {
      var _this7 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve, reject) {
        _this7.request("".concat(_this7.uri('search')), extend({
          params: params
        }, config)).get().then(function (response) {
          resolve(map_1(response.data, function (data) {
            return new _this7.constructor(data);
          }));
        }, function (errors) {
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

  }, {
    key: "find",
    value: function find(id) {
      var _this8 = this;

      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.set(this.key(), id);
      return new Promise(function (resolve, reject) {
        _this8.request("".concat(_this8.uri('find')), config).get().then(function (response) {
          resolve(_this8.initialize(response));
        }, function (errors) {
          reject(errors);
        });
      });
    }
    /**
     * Create a request from the model data
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "request",
    value: function request(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Request(url, config);
    }
    /**
     * Convert the Model instance to a FormData instance
     *
     * @return object
     */

  }, {
    key: "toFormData",
    value: function toFormData() {
      var form = new FormData();
      each(this.toJSON(), function (value, key) {
        if (isArray_1(value)) {
          each(value, function (item) {
            if (!(item instanceof File) && (isObject_1(item) || isArray_1(item))) {
              item = JSON.stringify(item);
            }

            form.append(key.replace(/(.+)(\[.+\]?)$/, '$1') + '[]', item);
          });
        } else if (!(value instanceof File) && isObject_1(value)) {
          form.append(key, JSON.stringify(value));
        } else if (!isNull_1(value)) {
          form.append(key, value);
        }
      });
      return form;
    }
    /**
     * Convert the instance to JSON payload
     *
     * @return object
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var _this9 = this;

      return pickBy_1(this.$attributes, function (value, key) {
        return !_this9.$properties.length || key === _this9.key() || _this9.$properties.indexOf(key) !== -1;
      });
    }
    /**
     * Alias for toJSON
     *
     * @return object
     */

  }, {
    key: "toJson",
    value: function toJson() {
      return this.toJSON();
    }
  }]);

  return Model;
}();

var BaseForm = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form', {
      class: {
        'form-inline': _vm.inline
      },
      attrs: {
        "novalidate": _vm.novalidate
      },
      on: {
        "submit": function submit($event) {
          $event.preventDefault();
          return _vm.onSubmit($event);
        }
      }
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    /**
     * The Model method used to send the request.
     *
     * @property Boolean
     */
    method: {
      type: String,
      default: 'save',
      validate: function validate(value) {
        return this.model && isFunction_1(this.model[value]);
      }
    },

    /**
     * An object of form data
     *
     * @property Object
     */
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    /**
     * Display the form fields inline
     *
     * @property Object
     */
    model: {
      type: Object,
      validate: function validate(value) {
        return value instanceof Model;
      }
    },

    /**
     * Display the form fields inline
     *
     * @property Boolean
     */
    inline: Boolean,

    /**
     * A callback function for the `submit` event
     *
     * @property Boolean
     */
    novalidate: {
      type: Boolean,
      default: true
    },

    /**
     * A URI or URL used to redirect user after form submits successfully.
     *
     * @property Function|String
     */
    redirect: [Object, String, Function],

    /**
     * A callback function for the `submit` event
     *
     * @property Function
     */
    onSubmit: {
      type: Function,
      default: function _default(event) {
        this.model && this.submit(event);
      }
    },

    /**
     * A callback function for the `submit:success` event
     *
     * @property Function
     */
    onSubmitSuccess: {
      type: Function,
      default: function _default(event, data) {
        this.$emit('submit:success', event, data);
        this.$emit('submit:complete', event, true, data);

        if (this.redirect && isFunction_1(this.redirect)) {
          this.redirect(this);
        } else if (this.redirect) {
          this.$router.push(this.redirect);
        }
      }
    },

    /**
     * A callback function for the `submit:success` event
     *
     * @property Function
     */
    onSubmitFailed: {
      type: Function,
      default: function _default(event, errors) {
        this.$emit('submit:failed', event, errors);
        this.$emit('submit:complete', event, false, errors);
      }
    }
  },
  methods: {
    submit: function submit(event) {
      var _this = this;

      this.$emit('submit', event);
      return this.model[this.method](this.data, {
        onUploadProgress: function onUploadProgress(event) {
          _this.$emit('submit:progress', event);
        }
      }).then(function (data) {
        _this.onSubmitSuccess(event, data);
      }, function (errors) {
        _this.onSubmitFailed(event, errors);
      });
    }
  },
  data: function data() {
    return {
      errors: {}
    };
  }
};
var plugin$5 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      BaseForm: BaseForm
    });
  }
});
var Breadcrumb = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('nav', {
      attrs: {
        "aria-label": "breadcrumb"
      }
    }, [_c('ol', {
      staticClass: "breadcrumb"
    }, [_vm._l(_vm.items, function (item, i) {
      return _vm.items.length ? _c('breadcrumb-item', _vm._b({
        key: i,
        attrs: {
          "current": i === item.length - 1
        }
      }, 'breadcrumb-item', item, false)) : _vm._e();
    }), _vm._v(" "), _vm._t("default")], 2)]);
  },
  staticRenderFns: [],
  name: 'breadcrumb',
  props: {
    /**
     * An array of breadcrumbs
     *
     * @prop {Array}
     */
    items: Array
  }
};
var BreadcrumbItem = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('li', {
      staticClass: "breadcrumb-item",
      class: {
        'active': _vm.active
      },
      attrs: {
        "aria-current": _vm.active ? 'page' : false
      }
    }, [!_vm.active && _vm.href ? _c('a', {
      attrs: {
        "href": _vm.href
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : [_vm._t("default", [_vm._v(_vm._s(_vm.label))])]], 2);
  },
  staticRenderFns: [],
  name: 'breadcrumb-item',
  props: {
    /**
     * Is the item active?
     *
     * @prop {Boolean}
     */
    active: Boolean,

    /**
     * An href attribute
     *
     * @prop {String}
     */
    href: String,

    /**
     * An breadcrumb label
     *
     * @prop {String}
     */
    label: String
  }
};
var plugin$6 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Breadcrumb: Breadcrumb,
      BreadcrumbItem: BreadcrumbItem
    });
  }
});
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
      validate: function validate(value) {
        return ['sm', 'md', 'lg'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    sizeableClass: function sizeableClass() {
      return prefix(this.size, this.$options.name);
    }
  }
};
var Btn = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.label ? _c('label', {
      staticClass: "btn",
      class: _vm.classes,
      attrs: {
        "disabled": _vm.disabled
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("default")], 2) : _vm.href ? _c('a', {
      staticClass: "btn",
      class: _vm.classes,
      attrs: {
        "href": _vm.href,
        "disabled": _vm.disabled
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("default")], 2) : _c('button', {
      staticClass: "btn",
      class: _vm.classes,
      attrs: {
        "type": _vm.type,
        "disabled": _vm.disabled
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'btn',
  mixins: [Variant, Sizeable],
  props: {
    /**
     * Should use <label> as the element for the button. Used for inputs
     * wrappers (toggles).
     *
     * @property Boolean
     */
    label: Boolean,

    /**
     * If an href is passed, button is an anchor element
     *
     * @property Boolean
     */
    href: String,

    /**
     * The type attribute for the button. Not applied if an anchor
     *
     * @property String
     */
    type: {
      type: String,
      default: 'submit'
    },

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
     * Display as an outline button
     *
     * @property String
     */
    outline: Boolean
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event, this);
    }
  },
  computed: {
    variantClassPrefix: function variantClassPrefix() {
      return this.$options.name + (this.outline ? '-outline' : '');
    },
    classes: function classes() {
      return this.$mergeClasses(this.variantClass, this.sizeableClass, this.block ? 'btn-block' : '', this.active ? 'active' : '');
    }
  }
};
var plugin$7 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Btn: Btn
    });
  }
});
/** Error message constants. */

var FUNC_ERROR_TEXT$2 = 'Expected a function';
/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */

function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }

  return function () {
    var args = arguments;

    switch (args.length) {
      case 0:
        return !predicate.call(this);

      case 1:
        return !predicate.call(this, args[0]);

      case 2:
        return !predicate.call(this, args[0], args[1]);

      case 3:
        return !predicate.call(this, args[0], args[1], args[2]);
    }

    return !predicate.apply(this, args);
  };
}

var negate_1 = negate;
/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */

function omitBy(object, predicate) {
  return pickBy_1(object, negate_1(_baseIteratee(predicate)));
}

var omitBy_1 = omitBy;
var COLORS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'muted'];
var props = {};
each(['border', 'text', 'bg', 'bg-gradient'], function (namespace) {
  each(COLORS, function (color) {
    props[camelCase_1(prefix(color, namespace))] = Boolean;
  });
});

function classes(instance, namespace) {
  return filter_1(map_1(COLORS, function (color) {
    return instance[camelCase_1(color = prefix(color, namespace))] ? color : null;
  }));
}

var Colorable = {
  props: props,
  methods: {
    textColor: function textColor() {
      return classes(this, 'text');
    },
    bgColor: function bgColor() {
      return classes(this, 'bg');
    },
    borderColor: function borderColor() {
      return classes(this, 'border');
    },
    bgGradientColor: function bgGradientColor() {
      return classes(this, 'bg-gradient');
    }
  },
  computed: {
    textColorClasses: function textColorClasses() {
      return this.textColor().join(' ').trim() || null;
    },
    borderColorClasses: function borderColorClasses() {
      return this.borderColor().join(' ').trim() || null;
    },
    bgColorClasses: function bgColorClasses() {
      return this.bgColor().join(' ').trim() || null;
    },
    bgGradientColorClasses: function bgGradientColorClasses() {
      return this.bgGradientColor().join(' ').trim() || null;
    },
    colorableClasses: function colorableClasses() {
      var classes = {};
      classes[this.textColorClasses] = !!this.textColorClasses;
      classes[this.borderColorClasses] = !!this.borderColorClasses;
      classes[this.bgColorClasses] = !!this.bgColorClasses;
      classes[this.bgGradientColorClasses] = !!this.bgGradientColorClasses;
      return omitBy_1(classes, function (key, value) {
        return !key || !value;
      });
    }
  }
};
var BtnGroup = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.classes,
      attrs: {
        "role": "group"
      }
    }, [_vm._l(_vm.buttons, function (button, i) {
      return _vm.buttons ? _c('btn', _vm._b({
        key: i
      }, 'btn', button, false)) : _vm._e();
    }), _vm._v(" "), _vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'btn-group',
  mixins: [Colorable, Sizeable],
  props: {
    /**
     * An array of buttons
     *
     * @prop {Array}
     */
    buttons: Array,

    /**
     * Display the buttons vertically
     *
     * @prop {Boolean}
     */
    vertical: Boolean
  },
  computed: {
    classes: function classes() {
      return this.$mergeClasses(this.sizeableClass, this.colorableClasses, {
        'btn-group': !this.vertical,
        'btn-group-vertical': this.vertical
      });
    }
  }
};
var BtnToolbar = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "btn-toolbar",
      attrs: {
        "role": "toolbar"
      }
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'btn-toolbar'
};
var plugin$8 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      BtnGroup: BtnGroup,
      BtnToolbar: BtnToolbar
    });
  }
});

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

var Proxy = {
  methods: {
    proxy: function proxy(callback, event) {
      if (isFunction_1(callback)) {
        callback.apply(this, [].slice.call(arguments).splice(1));
        event.preventDefault();
      }
    }
  }
};
var DropdownMenuItem = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a', {
      staticClass: "dropdown-item",
      class: {
        'active': _vm.active
      },
      attrs: {
        "href": _vm.href || '#'
      },
      on: {
        "click": function click($event) {
          _vm.proxy(_vm.onClick, $event);

          _vm.onClicked($event);
        }
      }
    }, [_vm.icon ? _c('i', {
      class: _vm.icon
    }) : _vm._e(), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2);
  },
  staticRenderFns: [],
  mixins: [Proxy],
  props: {
    /**
     * Is the menu item active.
     *
     * @property Object
     */
    active: Boolean,

    /**
     * The `href` attribute.
     *
     * @property Object
     */
    href: String,

    /**
     * The label of the dropdown menu item.
     *
     * @property Object
     */
    label: String,

    /**
     * The icon of the dropdown menu item.
     *
     * @property Object
     */
    icon: String,

    /**
     * A callback function for the `click` event.
     *
     * @property Object
     */
    onClick: Function
  },
  methods: {
    /**
     * A callback function for the `click` event.
     *
     * @property Object
     */
    onClicked: function onClicked(event) {
      if (!this.href) {
        event.preventDefault();
      }

      this.$emit('click', event);
    }
  }
};
var DropdownMenuHeader = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('h5', {
      staticClass: "dropdown-header"
    }, [_vm._v(" " + _vm._s(_vm.header) + " "), _vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'dropdown-menu-header',
  props: {
    /**
     * The value of the header
     *
     * @property Object
     */
    header: String
  }
};
var DropdownMenuDivider = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "dropdown-divider"
    });
  },
  staticRenderFns: [],
  name: 'dropdown-menu-divider'
};
var DropdownMenu = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "dropdown-menu",
      class: {
        'dropdown-menu-right': _vm.align === 'right',
        'show': _vm.show
      },
      attrs: {
        "aria-labelledby": _vm.id
      }
    }, [_vm._t("default", [_vm._l(_vm.items, function (item) {
      return [_c(_vm.prefix(item.type || 'item', 'dropdown-menu'), _vm._b({
        tag: "component",
        on: {
          "click": function click($event) {
            _vm.onClick($event, item);
          }
        }
      }, 'component', item, false))];
    })])], 2);
  },
  staticRenderFns: [],
  components: {
    DropdownMenuItem: DropdownMenuItem,
    DropdownMenuHeader: DropdownMenuHeader,
    DropdownMenuDivider: DropdownMenuDivider
  },
  props: {
    /**
     * The `id` attribute on the toggle button and aria label. If no `id` is
     * defined, then a UUID will be generated instead.
     *
     * @property Object
     */
    id: {
      type: String,
      default: uuid
    },

    /**
     * Display the dropdown menu aligned left or right
     *
     * @property String
     */
    align: {
      type: String,
      default: 'left',
      validate: function validate(value) {
        return ['left', 'right'].indexOf(value.toLowerCase()) !== -1;
      }
    },

    /**
     * The default visibility of the dropdown menu.
     *
     * @property Object
     */
    show: Boolean,

    /**
     * An array of dropdown items. If an key/value pair isn't defined, the
     * default value will be used. If no items are defined, then the slot
     * named "items" can be used to define the options with HTML.
     *
     * [{
     *      type: 'item', // String [item|header|divider]
     *      href: '#', // String
     *      label: 'Some label', // String
     *      onClick: (event) => {} // Function
     * }]
     *
     * @property Array
     */
    items: Array
  },
  methods: {
    prefix: prefix,

    /**
     * A callback function for the `click` event.
     *
     * @param Object event
     * @param Object item
     * @return void
     */
    onClick: function onClick(event, item) {
      this.$emit('item:click', event, item);
      this.$emit('update:show', false);
    }
  }
};
var plugin$9 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      DropdownMenu: DropdownMenu,
      DropdownMenuDivider: DropdownMenuDivider,
      DropdownMenuHeader: DropdownMenuHeader,
      DropdownMenuItem: DropdownMenuItem
    });
  }
});
var ButtonDropdown = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "btn-group",
      class: {
        'dropup': _vm.dropup,
        'dropright': _vm.dropright,
        'dropleft': _vm.dropleft
      }
    }, [_vm._t("toggle-button", [_vm.split ? [_vm.href ? _c('a', {
      class: _vm.actionClasses,
      attrs: {
        "href": _vm.href
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("label-wrapper", [_vm.icon ? _c('i', {
      class: _vm.icon
    }) : _vm._e(), _vm._v(" "), _vm._t("label", [_vm._v(_vm._s(_vm.label))])])], 2) : _c('button', {
      class: _vm.actionClasses,
      attrs: {
        "type": _vm.type
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("label-wrapper", [_vm.icon ? _c('i', {
      class: _vm.icon
    }) : _vm._e(), _vm._v(" "), _vm._t("label", [_vm._v(_vm._s(_vm.label))])])], 2), _vm._v(" "), _c('button', {
      class: _vm.toggleClasses,
      attrs: {
        "type": "button",
        "aria-haspopup": "true",
        "aria-expanded": _vm.isDropdownShowing,
        "id": _vm.id
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          !_vm.isDropdownShowing ? _vm.show() : _vm.hide();
        },
        "blur": _vm.onBlur
      }
    })] : [_c('button', {
      class: _vm.toggleClasses,
      attrs: {
        "aria-haspopup": "true",
        "aria-expanded": _vm.isDropdownShowing,
        "type": _vm.type,
        "id": _vm.id
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          !_vm.isDropdownShowing ? _vm.show() : _vm.hide();
        },
        "blur": _vm.onBlur
      }
    }, [_vm._t("label-wrapper", [_vm.icon ? _c('i', {
      class: _vm.icon
    }) : _vm._e(), _vm._v(" "), _vm._t("label", [_vm._v(_vm._s(_vm.label))])])], 2)]]), _vm._v(" "), _vm._t("dropdown-menu", [_c('dropdown-menu', {
      attrs: {
        "id": _vm.id,
        "items": _vm.items,
        "align": _vm.align,
        "show": _vm.isDropdownShowing
      },
      on: {
        "update:show": function updateShow($event) {
          _vm.isDropdownShowing = $event;
        },
        "item:click": _vm.onItemClick
      }
    }, [_vm._t("default")], 2)])], 2);
  },
  staticRenderFns: [],
  name: 'button-dropdown',
  components: {
    DropdownMenu: DropdownMenu
  },
  props: {
    /**
     * An array of dropdown items. If an key/value pair isn't defined, the
     * default value will be used. If no items are defined, then the slot
     * named "items" can be used to define the options with HTML.
     *
     * [{
     *      type: 'item', // String [item|header|divider]
     *      href: '#', // String
     *      label: 'Some label', // String
     *      onClick: (event) => {} // Function
     * }]
     *
     * @property Array
     */
    items: Array,

    /**
     * The `href` attribute on the action button (if a split button).
     *
     * @property String
     */
    href: String,

    /**
     * The button icon that appears before the label.
     *
     * @property String
     */
    icon: String,

    /**
     * The toggle button's label. If not defined as an attribute,
     * you can override with the component's slot (inner html).
     *
     * @property String
     */
    label: String,

    /**
     * The `id` attribute on the toggle button and aria label. If no `id` is
     * defined, then a UUID will be generated instead.
     *
     * @property String
     */
    id: {
      type: String,
      default: uuid
    },

    /**
     * The `type` attribute on the toggle button
     *
     * @property String
     */
    type: {
      type: String,
      default: 'button'
    },

    /**
     * The size class of the toggle button
     *
     * @property String
     */
    size: {
      type: String,
      default: 'md'
    },

    /**
     * The toggle button's variant class.
     *
     * @property String
     */
    variant: {
      type: String,
      default: 'primary'
    },

    /**
     * Display the dropdown menu aligned left or right
     *
     * @property String
     */
    align: {
      type: String,
      default: 'left',
      validate: function validate(value) {
        return ['left', 'right'].indexOf(value.toLowerCase()) !== -1;
      }
    },

    /**
     * Display the dropdown button with a split toggle button.
     *
     * @property Boolean
     */
    split: {
      type: Boolean,
      default: false
    },

    /**
     * Display as a dropup instead of a dropdown.
     *
     * @property Boolean
     */
    dropup: {
      type: Boolean,
      default: false
    },

    /**
     * Display as a dropright instead of a dropdown.
     *
     * @property Boolean
     */
    dropright: {
      type: Boolean,
      default: false
    },

    /**
     * Display as a dropleft instead of a dropdown.
     *
     * @property Boolean
     */
    dropleft: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
     * Toggle the dropdown menu
     *
     * @return void
     */
    toggle: function toggle() {
      !this.isDropdownShowing ? this.show() : this.hide();
    },

    /**
     * Show the dropdown menu
     *
     * @return void
     */
    show: function show() {
      this.$emit('toggle', this.isDropdownShowing = true);
      this.$emit('show');
    },

    /**
     * Hide the dropdown menu
     *
     * @return void
     */
    hide: function hide() {
      this.$emit('toggle', this.isDropdownShowing = false);
      this.$emit('hide');
    },

    /**
     * A callback function for the `click` event for the action button
     *
     * @return void
     */
    onClick: function onClick(event) {
      this.hide();
      this.$emit('click', event);
    },

    /**
     * A callback function for the `blur` event for the action button
     *
     * @return void
     */
    onBlur: function onBlur(event) {
      if (!this.$el.contains(event.relatedTarget)) {
        this.hide();
      }
    },

    /**
     * A callback function for the `item:click` event for the action button
     *
     * @return void
     */
    onItemClick: function onItemClick(event, child) {
      this.$emit('item:click', event, child);
    }
  },
  computed: {
    actionClasses: function actionClasses() {
      return ['btn', prefix(this.size, 'btn'), prefix(this.variant, 'btn')].join(' ');
    },
    toggleClasses: function toggleClasses() {
      return ['btn', 'dropdown-toggle', prefix(this.size, 'btn'), prefix(this.variant, 'btn'), this.split ? 'dropdown-toggle-split' : ''].join(' ');
    }
  },
  data: function data() {
    return {
      isDropdownShowing: false
    };
  }
};
var plugin$10 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      ButtonDropdown: ButtonDropdown
    });
  }
});
var HasSlots = {
  methods: {
    getSlot: function getSlot(slot) {
      return this.$slots[slot];
    },
    hasSlot: function hasSlot(slot) {
      return !!this.$slots[slot];
    },
    hasSlots: function hasSlots(slots) {
      for (var i in slots) {
        if (!this.hasSlot(slots[i])) {
          return false;
        }
      }
    }
  },
  computed: {
    hasDefaultSlot: function hasDefaultSlot() {
      return this.hasSlot('default');
    }
  }
};
var Card = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.$mergeClasses(_vm.className, _vm.colorableClasses)
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'card',
  mixins: [HasSlots, Colorable],
  computed: {
    className: function className() {
      return this.$options.name;
    }
  }
};
var CardBody = {
  name: 'card-body',
  extends: Card
};
var CardHeader = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.element, {
      tag: "component",
      class: _vm.$mergeClasses(_vm.className, _vm.colorableClasses)
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'card-header',
  extends: Card,
  props: {
    /**
     * The alt attribute
     *
     * @property String
     */
    element: {
      type: String,
      default: 'div'
    }
  }
};
var CardFooter = {
  name: 'card-footer',
  extends: CardHeader
};
var CardImg = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return !_vm.hasDefaultSlot ? _c('img', {
      class: _vm.className,
      attrs: {
        "src": _vm.src,
        "alt": _vm.alt
      }
    }) : _c('div', {
      class: _vm.className
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'card-img',
  extends: Card,
  props: {
    /**
     * The alt attribute
     *
     * @property String
     */
    alt: String,

    /**
     * The src attribute
     *
     * @property String
     */
    src: String
  }
};
var CardImgTop = {
  name: 'card-img-top',
  extends: CardImg
};
var CardImgBottom = {
  name: 'card-img-bottom',
  extends: CardImg
};
var CardImgOverlay = {
  name: 'card-img-overlay',
  extends: Card
};
var CardLink = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a', {
      class: _vm.$mergeClasses(_vm.className, _vm.colorableClasses),
      attrs: {
        "href": _vm.href
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'card-title',
  extends: Card,
  props: {
    /**
     * The alt attribute
     *
     * @property String
     */
    alt: String,

    /**
     * The src attribute
     *
     * @property String
     */
    href: String
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event, this);
    }
  }
};
var CardSubtitle = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('h6', {
      class: _vm.$mergeClasses(_vm.className, _vm.colorableClasses)
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'card-subtitle',
  extends: Card
};
var CardTitle = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('h5', {
      class: _vm.$mergeClasses(_vm.className, _vm.colorableClasses)
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'card-title',
  mixins: [Card]
};
var plugin$11 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Card: Card,
      CardBody: CardBody,
      CardFooter: CardFooter,
      CardHeader: CardHeader,
      CardImg: CardImg,
      CardImgTop: CardImgTop,
      CardImgBottom: CardImgBottom,
      CardImgOverlay: CardImgOverlay,
      CardLink: CardLink,
      CardSubtitle: CardSubtitle,
      CardTitle: CardTitle
    });
  }
});
var FormControl = {
  props: {
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
    errors: [Object, Array],

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
      default: function _default() {
        return ['focus', 'blur', 'change', 'click', 'keyup', 'keydown', 'progress'];
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
      validate: function validate(value) {
        return ['sm', 'md', 'lg'].indexOf(value) !== -1;
      }
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
    helpText: String
  },
  directives: {
    bindEvents: {
      bind: function bind(el, binding, vnode) {
        var events = binding.value || vnode.context.bindEvents;
        each(events, function (name) {
          el.addEventListener(name, function (event) {
            vnode.context.$emit(name, event);
          });
        });
      }
    }
  },
  methods: {
    getInputField: function getInputField() {
      return this.$el.querySelector('.form-control, input, select, textarea');
    },
    getFieldErrors: function getFieldErrors() {
      var errors = this.error || this.errors;

      if (isObject_1(this.errors)) {
        errors = this.errors[this.name || this.id];
      }

      return !errors || isArray_1(errors) || isObject_1(errors) ? errors : [errors];
    },
    updated: function updated(value, event) {
      this.$emit(event || 'input', value);
    }
  },
  computed: {
    callbacks: function callbacks() {
      var _this = this;

      return this.bindEvents.map(function (event) {
        return {
          name: event,
          callback: _this[camelCase_1(['on', event].join(' '))]
        };
      }).filter(function (event) {
        return !isUndefined_1(event.callback);
      });
    },
    invalidFeedback: function invalidFeedback() {
      if (this.error) {
        return this.error;
      }

      var errors = this.getFieldErrors();
      return isArray_1(errors) ? errors.join('<br>') : errors;
    },
    validFeedback: function validFeedback() {
      return isArray_1(this.feedback) ? this.feedback.join('<br>') : this.feedback;
    },
    controlClass: function controlClass() {
      return this.defaultControlClass + (this.plaintext ? '-plaintext' : '');
    },
    controlSizeClass: function controlSizeClass() {
      return prefix(this.size, this.controlClass);
    },
    controlClasses: function controlClasses() {
      return [this.controlClass, this.controlSizeClass, this.spacing || '', this.invalidFeedback ? 'is-invalid' : ''].join(' ');
    },
    hasDefaultSlot: function hasDefaultSlot() {
      return !!this.$slots.default;
    }
  }
};
var RadioField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.$mergeClasses(_vm.controlClass, _vm.customControlClass, _vm.sizeableClass, _vm.inline ? _vm.inlineClass : '')
    }, [_vm.custom && _vm.id ? [_c('input', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events"
      }],
      class: _vm.$mergeClasses(_vm.inputClass, _vm.invalidFeedback ? 'is-invalid' : ''),
      attrs: {
        "type": "radio",
        "name": _vm.name,
        "id": _vm.id,
        "required": _vm.required,
        "disabled": _vm.disabled || _vm.readonly,
        "readonly": _vm.readonly,
        "pattern": _vm.pattern
      },
      domProps: {
        "value": _vm.value,
        "checked": _vm.checkedValue === _vm.value || _vm.checked
      },
      on: {
        "change": function change($event) {
          _vm.updated($event.target.value, 'change');
        }
      }
    }), _vm._v(" "), _c('label', {
      class: _vm.$mergeClasses(_vm.labelClass, _vm.colorableClasses),
      attrs: {
        "for": _vm.id
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2)] : [_c('label', {
      class: _vm.$mergeClasses(_vm.labelClass, _vm.colorableClasses),
      attrs: {
        "for": _vm.id
      }
    }, [_c('input', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events"
      }],
      class: _vm.$mergeClasses(_vm.inputClass, _vm.invalidFeedback ? 'is-invalid' : ''),
      attrs: {
        "type": "radio",
        "name": _vm.name,
        "id": _vm.id,
        "required": _vm.required,
        "disabled": _vm.disabled || _vm.readonly,
        "readonly": _vm.readonly,
        "pattern": _vm.pattern
      },
      domProps: {
        "value": _vm.value,
        "checked": _vm.checkedValue === _vm.value || _vm.checked
      },
      on: {
        "change": function change($event) {
          _vm.updated($event.target.value, 'change');
        }
      }
    }), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2)], _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'radio-field',
  mixins: [Colorable, FormControl],
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
      default: function _default() {
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
    labelClass: function labelClass() {
      return prefix('label', this.controlClass);
    },
    inputClass: function inputClass() {
      return prefix('input', this.controlClass);
    },
    inlineClass: function inlineClass() {
      return prefix('inline', this.controlClass);
    },
    controlClass: function controlClass() {
      return this.custom ? 'custom-control' : this.defaultControlClass;
    },
    customControlClass: function customControlClass() {
      return this.custom ? prefix(this.$options.name.replace('-field', ''), 'custom') : '';
    },
    sizeableClass: function sizeableClass() {
      return prefix(this.size, 'form-control');
    }
  }
};
var CheckboxField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.$mergeClasses(_vm.controlClass, _vm.customControlClass, _vm.sizeableClass, _vm.inline ? _vm.inlineClass : '')
    }, [_vm.custom && _vm.id ? [_c('input', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events"
      }],
      class: _vm.$mergeClasses(_vm.inputClass, _vm.invalidFeedback ? 'is-invalid' : ''),
      attrs: {
        "type": "checkbox",
        "name": _vm.name,
        "id": _vm.id,
        "required": _vm.required,
        "disabled": _vm.disabled || _vm.readonly,
        "readonly": _vm.readonly,
        "pattern": _vm.pattern
      },
      domProps: {
        "value": _vm.value,
        "checked": _vm.checkedValues.indexOf(_vm.value) !== -1 || _vm.checked
      },
      on: {
        "change": function change($event) {
          _vm.updated($event.target.value, 'change');
        }
      }
    }), _vm._v(" "), _c('label', {
      class: _vm.$mergeClasses(_vm.labelClass, _vm.colorableClasses),
      attrs: {
        "for": _vm.id
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2)] : [_c('label', {
      class: _vm.$mergeClasses(_vm.labelClass, _vm.colorableClasses),
      attrs: {
        "for": _vm.id
      }
    }, [_c('input', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events"
      }],
      class: _vm.$mergeClasses(_vm.inputClass, _vm.invalidFeedback ? 'is-invalid' : ''),
      attrs: {
        "type": "checkbox",
        "name": _vm.name,
        "id": _vm.id,
        "required": _vm.required,
        "disabled": _vm.disabled || _vm.readonly,
        "readonly": _vm.readonly,
        "pattern": _vm.pattern
      },
      domProps: {
        "value": _vm.value,
        "checked": _vm.checkedValues.indexOf(_vm.value) !== -1 || _vm.checked
      },
      on: {
        "change": function change($event) {
          _vm.updated($event.target.value, 'change');
        }
      }
    }), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2)], _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'checkbox-field',
  extends: RadioField,
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
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    updated: function updated(value) {
      var checked = this.checkedValues.slice(0);
      var index = this.checkedValues.indexOf(value);

      if (index === -1) {
        checked.push(value);
      } else {
        checked.splice(index, 1);
      }

      this.$emit('change', checked);
    }
  }
};
var plugin$12 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      CheckboxField: CheckboxField
    });
  }
});
var Container = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "container"
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'container'
};
var plugin$13 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Container: Container
    });
  }
});
var InputField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', [_vm._t("label", [_vm.label || _vm.hasDefaultSlot ? _c('form-label', {
      attrs: {
        "for": _vm.id
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e()]), _vm._v(" "), _vm._t("control", [_c('form-control', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events",
        value: _vm.bindEvents,
        expression: "bindEvents"
      }],
      class: _vm.$mergeClasses(_vm.controlClasses, _vm.colorableClasses),
      attrs: {
        "id": _vm.id,
        "type": _vm.type,
        "value": _vm.value,
        "errors": _vm.errors,
        "placeholder": _vm.placeholder,
        "required": _vm.required,
        "disabled": _vm.disabled || _vm.readonly,
        "readonly": _vm.readonly,
        "pattern": _vm.pattern,
        "aria-label": _vm.label,
        "aria-describedby": _vm.id
      },
      on: {
        "input": function input($event) {
          _vm.updated($event.target.value);
        }
      }
    })]), _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'input-field',
  mixins: [Colorable, FormControl],
  props: {
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
var FileField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', [_vm._t("label", [_vm.label || _vm.hasDefaultSlot ? _c('form-label', {
      attrs: {
        "for": _vm.id
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "custom-file"
    }, [_vm._t("placeholder", [_c('form-label', {
      class: _vm.$mergeClasses(_vm.colorableClasses, 'custom-file-label'),
      attrs: {
        "for": _vm.id
      },
      domProps: {
        "innerHTML": _vm._s(_vm.placeholder || 'Choose file')
      }
    })]), _vm._v(" "), _c('input', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events"
      }],
      class: _vm.controlClasses,
      attrs: {
        "type": "file",
        "id": _vm.id,
        "width": _vm.width,
        "height": _vm.height,
        "required": _vm.required,
        "multiple": _vm.multiple,
        "readonly": _vm.readonly
      },
      on: {
        "change": function change($event) {
          _vm.updated($event.target.files, 'change');
        }
      }
    }), _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2)], 2);
  },
  staticRenderFns: [],
  name: 'file-field',
  extends: InputField,
  model: {
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
      default: function _default() {
        return ['focus', 'blur', 'input', 'click', 'keyup', 'keydown', 'progress'];
      }
    },

    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    defaultControlClass: {
      type: String,
      default: 'custom-file-input'
    },

    /**
     * An array of valid extensions
     *
     * @property String
     */
    extensions: Array,

    /**
     * The type attribute
     *
     * @property String
     */
    multiple: Boolean,

    /**
     * The height attribute for the control element
     *
     * @property String
     */
    height: [Number, String],

    /**
     * The width attribute for the control element
     *
     * @property String
     */
    width: [Number, String]
  }
};
var FileButton = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('btn', {
      staticClass: "btn-file",
      attrs: {
        "type": _vm.type,
        "variant": _vm.variant,
        "block": _vm.block,
        "size": _vm.size,
        "disabled": _vm.disabled,
        "active": _vm.active
      }
    }, [_vm._t("default"), _vm._v(" "), _c('input', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events"
      }],
      class: _vm.controlClasses,
      attrs: {
        "type": "file",
        "id": _vm.id,
        "width": _vm.width,
        "height": _vm.height,
        "required": _vm.required,
        "multiple": _vm.multiple,
        "readonly": _vm.readonly
      },
      on: {
        "change": function change($event) {
          _vm.updated($event.target.files, 'change');
        }
      }
    })], 2);
  },
  staticRenderFns: [],
  name: 'file-field',
  mixins: [Btn, FileField],
  model: {
    event: 'change'
  },
  props: {
    /**
     * The type attribute for the button. Not applied if an anchor
     *
     * @property String
     */
    type: {
      type: String,
      default: 'button'
    }
  }
};
var plugin$14 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FileButton: FileButton
    });
  }
});
var plugin$15 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FileField: FileField
    });
  }
});

function readFile(file, progress) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function (e) {
      return resolve(e);
    };

    reader.onerror = function (e) {
      return reject(e);
    };

    reader.onabort = function (e) {
      return reject(e);
    };

    reader.onprogress = function (e) {
      return progress(e, reader);
    };

    reader.readAsDataURL(file);
  });
}
/** `Object#toString` result references. */


var numberTag$4 = '[object Number]';
/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */

function isNumber(value) {
  return typeof value == 'number' || isObjectLike_1(value) && _baseGetTag(value) == numberTag$4;
}

var isNumber_1 = isNumber;
var ProgressBar = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "progress",
      style: {
        'height': _vm.formattedHeight
      }
    }, [_c('div', {
      staticClass: "progress-bar",
      class: _vm.$mergeClasses(_vm.progressClasses, _vm.variantClass),
      style: {
        'width': _vm.offsetValue + '%'
      },
      attrs: {
        "role": "progressbar",
        "aria-valuenow": _vm.offsetValue,
        "aria-valuemin": _vm.min,
        "aria-valuemax": _vm.max
      }
    }, [_vm.label ? _c('span', [_vm._v(_vm._s(_vm.offsetValue) + "%")]) : _vm._e()])]);
  },
  staticRenderFns: [],
  name: 'progress-bar',
  mixins: [Variant],
  props: {
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
    label: Boolean,

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
    variantClassPrefix: function variantClassPrefix() {
      return 'bg';
    },
    offsetValue: function offsetValue() {
      return this.value / this.max * 100;
    },
    formattedHeight: function formattedHeight() {
      return !this.height ? null : isNumber_1(this.height) ? this.height + 'px' : this.height;
    },
    progressClasses: function progressClasses() {
      return {
        'progress-bar-striped': this.striped,
        'progress-bar-animated': this.animated
      };
    }
  }
};
var FilePreview = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "file-preview",
      class: {
        'is-image': _vm.isImage
      }
    }, [_c('div', {
      staticClass: "file-preview-inner"
    }, [!_vm.hideClose && (!_vm.isImage || _vm.image) ? _c('a', {
      staticClass: "file-preview-close",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();

          _vm.$emit('close', _vm.file);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-times-circle"
    })]) : _vm._e(), _vm._v(" "), _vm.isImage ? _c('div', {
      staticClass: "file-preview-image"
    }, [_vm.image ? _c('img', {
      staticClass: "file-preview-thumbnail",
      attrs: {
        "src": _vm.image
      }
    }) : _c('progress-bar', {
      directives: [{
        name: "ready",
        rawName: "v-ready",
        value: _vm.readFile,
        expression: "readFile"
      }],
      attrs: {
        "value": _vm.loaded,
        "height": 10
      }
    })], 1) : _c('div', {
      staticClass: "file-preview-icon"
    }, [_c('i', {
      staticClass: "fa fa-file-o"
    })]), _vm._v(" "), _c('div', {
      staticClass: "file-preview-filename",
      domProps: {
        "innerHTML": _vm._s(_vm.name)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "file-preview-filesize"
    }, [_vm._v("(" + _vm._s(_vm.size) + ")")]), _vm._v(" "), _c('div')])]);
  },
  staticRenderFns: [],
  name: 'file-preview',
  components: {
    ProgressBar: ProgressBar
  },
  directives: {
    ready: {
      inserted: function inserted(el, binding) {
        setTimeout(function () {
          if (isFunction_1(binding.value)) {
            binding.value();
          }
        }, 50);
      }
    }
  },
  props: {
    /**
     * Hide the close button for the preview
     *
     * @property Object
     */
    hideClose: Boolean,

    /**
     * The uploaded File object
     *
     * @property Object
     */
    file: {
      type: [Object, File],
      required: true
    },

    /**
     * An array of mime types that should be used to determine if the
     * file is an image.
     *
     * @property Array
     */
    imageMimes: {
      type: Array,
      default: function _default() {
        return ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'];
      }
    }
  },
  computed: {
    /**
     * Get the file name
     *
     * @property String
     */
    name: function name() {
      return this.file instanceof File ? this.file.name : this.file.orig_filename;
    },

    /**
     * Get the file extension
     *
     * @property String
     */
    extension: function extension() {
      return this.file instanceof File ? this.file.name.split('.').pop().toLowerCase() : this.file.extension;
    },

    /**
     * Get the file formatted size
     *
     * @property String
     */
    size: function size() {
      return this.bytesToSize(this.file instanceof File ? this.file.size : this.file.bytes);
    },

    /**
     * Get the file type
     *
     * @property String
     */
    type: function type() {
      return this.file instanceof File ? this.file.type : this.file.mime;
    },

    /**
     * If the file an image?
     *
     * @property String
     */
    isImage: function isImage() {
      return this.imageMimes.indexOf(this.type) !== -1;
    },

    /**
     * Get the last time the file was modified (as timestamp)
     *
     * @property String
     */
    lastModified: function lastModified() {
      return this.file instanceof File ? this.file.lastModified : null;
    },

    /**
     * Get the last time the file was modified (as Date)
     *
     * @property String
     */
    lastModifiedDate: function lastModifiedDate() {
      return this.file instanceof File ? this.file.lastModifiedDate : null;
    }
  },
  methods: {
    readFile: function readFile$$1() {
      var _this = this;

      if (this.file instanceof File) {
        var start = moment();
        readFile(this.file, function (e) {
          if (e.lengthComputable) {
            _this.loaded = parseInt(e.loaded / e.total * 100, 10);
          }
        }).then(function (event) {
          setTimeout(function () {
            _this.image = event.target.result;

            _this.$emit('loaded', event, _this);
          }, 600 - moment().diff(start));
        }, function (error) {
          _this.$emit('error', error);
        });
      }
    },
    bytesToSize: function bytesToSize(bytes) {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes == 0) return '0 Byte';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }
  },
  data: function data() {
    return {
      loaded: 0,
      image: this.file.url
    };
  }
};
var plugin$16 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FilePreview: FilePreview
    });
  }
});
var FormControl$1 = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(!_vm.select ? 'input' : 'select', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events",
        value: _vm.bindEvents,
        expression: "bindEvents"
      }],
      tag: "component",
      class: _vm.$mergeClasses(_vm.controlClasses, _vm.colorableClasses),
      attrs: {
        "id": _vm.id,
        "type": !_vm.select ? _vm.type : false,
        "value": _vm.value,
        "pattern": _vm.pattern,
        "required": _vm.required,
        "readonly": _vm.readonly,
        "placeholder": _vm.placeholder,
        "disabled": _vm.disabled || _vm.readonly,
        "aria-label": _vm.label,
        "aria-describedby": _vm.id
      },
      on: {
        "input": _vm.updated
      }
    }, [_vm.select ? _vm._t("default") : _vm._e()], 2);
  },
  staticRenderFns: [],
  name: 'form-control',
  mixins: [Colorable, FormControl],
  props: {
    /**
     * Is the element a select?
     *
     * @property String
     */
    select: Boolean,

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
var plugin$17 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FormControl: FormControl$1
    });
  }
});
var FormFeedback = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: {
        'invalid-feedback': _vm.invalid,
        'valid-feedback': _vm.valid && !_vm.invalid
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2);
  },
  staticRenderFns: [],
  name: 'form-feedback',
  mixins: [Colorable],
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
var plugin$18 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FormFeedback: FormFeedback
    });
  }
});
var FormGroup = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "form-group"
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'form-group'
};
var plugin$19 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FormGroup: FormGroup
    });
  }
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
    screenreaderClasses: function screenreaderClasses() {
      return {
        'sr-only': this.srOnly,
        'sr-only-focusable': this.srOnlyFocusable
      };
    }
  }
};
var FormLabel = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('label', {
      class: _vm.classes
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'form-label',
  mixins: [Colorable, Screenreaders],
  computed: {
    classes: function classes() {
      return extend({}, this.screenreaderClasses, this.colorableClasses);
    }
  }
};
var plugin$20 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FormLabel: FormLabel
    });
  }
});
var HelpText = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('small', {
      staticClass: "form-text",
      class: _vm.classes
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'help-text',
  mixins: [Colorable, Screenreaders],
  computed: {
    classes: function classes() {
      return extend({}, this.screenreaderClasses, this.colorableClasses);
    }
  }
};
var plugin$21 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      HelpText: HelpText
    });
  }
});
var plugin$22 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      InputField: InputField
    });
  }
});
var InputGroup = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "input-group",
      class: _vm.$mergeClasses(_vm.colorableClasses, _vm.sizeableClass)
    }, [_vm._t("prepend", [_vm.prepend instanceof Array ? [_c('input-group-prepend', _vm._l(_vm.prepend, function (value) {
      return _c('input-group-text', {
        attrs: {
          "text": value
        }
      });
    }))] : _vm.prepend ? [_c('input-group-prepend', {
      attrs: {
        "text": ""
      }
    }, [_vm._v(_vm._s(_vm.prepend))])] : _vm._e()]), _vm._v(" "), _vm._t("default"), _vm._v(" "), _vm._t("append", [_vm.append instanceof Array ? [_c('input-group-append', _vm._l(_vm.append, function (value) {
      return _c('input-group-text', {
        attrs: {
          "text": value
        }
      });
    }))] : _vm.append ? [_c('input-group-append', {
      attrs: {
        "text": ""
      }
    }, [_vm._v(_vm._s(_vm.append))])] : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'input-group',
  mixins: [HasSlots, Sizeable, Colorable],
  props: {
    append: [Array, Number, String],
    prepend: [Array, Number, String]
  }
};
var InputGroupAppend = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "input-group-append"
    }, [_vm.text ? _c('input-group-text', [_vm._t("default")], 2) : _vm._t("default")], 2);
  },
  staticRenderFns: [],
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
var InputGroupPrepend = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "input-group-prepend"
    }, [_vm.text ? _c('input-group-text', [_vm._t("default")], 2) : _vm._t("default")], 2);
  },
  staticRenderFns: [],
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
var InputGroupText = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('span', {
      staticClass: "input-group-text",
      attrs: {
        "id": _vm.id
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2);
  },
  staticRenderFns: [],
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
var plugin$23 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      InputGroup: InputGroup,
      InputGroupAppend: InputGroupAppend,
      InputGroupPrepend: InputGroupPrepend,
      InputGroupText: InputGroupText
    });
  }
});
var LightSwitchField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', [_vm._t("label", [_vm.label ? _c('form-label', {
      attrs: {
        "for": _vm.id
      },
      domProps: {
        "innerHTML": _vm._s(_vm.label)
      }
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      class: _vm.controlClasses,
      attrs: {
        "tabindex": "0"
      },
      on: {
        "click": function click($event) {
          _vm.toggle();
        },
        "keyup": [function ($event) {
          if (!('button' in $event) && $event.keyCode !== 32) {
            return null;
          }

          _vm.toggle();
        }, function ($event) {
          if (!('button' in $event) && $event.keyCode !== 37) {
            return null;
          }

          _vm.toggle(_vm.offValue);
        }, function ($event) {
          if (!('button' in $event) && $event.keyCode !== 39) {
            return null;
          }

          _vm.toggle(_vm.onValue);
        }]
      }
    }, [_c('div', {
      staticClass: "light-switch-handle"
    }), _vm._v(" "), _c('div', {
      staticClass: "light-switch-container"
    }, [_c('div', {
      staticClass: "light-switch-label on-value"
    }), _vm._v(" "), _c('div', {
      staticClass: "light-switch-label off-value"
    })])]), _vm._v(" "), _c('form-control', {
      staticClass: "d-none",
      attrs: {
        "name": _vm.name,
        "value": _vm.value,
        "id": _vm.id
      }
    }), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'light-switch-field',
  mixins: [FormControl],
  props: {
    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    defaultControlClass: {
      type: String,
      default: 'form-control light-switch'
    },

    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    activeClass: {
      type: String,
      default: 'on'
    },

    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    onValue: {
      default: 1
    },

    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    offValue: {
      default: 0
    }
  },
  computed: {
    isActive: function isActive() {
      return this.value === this.onValue;
    },
    controlClasses: function controlClasses() {
      return [this.controlClass, this.controlSizeClass, this.spacing || '', this.invalidFeedback ? 'is-invalid' : '', this.dragging ? 'is-dragging' : '', this.isActive ? 'is-active' : ''].join(' ');
    }
  },
  methods: {
    getTransitionInMilliseconds: function getTransitionInMilliseconds() {
      var duration = getComputedStyle(this.$el.querySelector('.light-switch-handle')).transitionDuration;
      var numeric = parseFloat(duration, 10);
      var unit = duration.match(/m?s/);

      switch (unit[0]) {
        case 's':
          return numeric * 1000;

        case 'ms':
          return numeric;
      }

      throw new Error("\"".concat(unit[0], "\" is not a valid unit of measure. Unit must be \"s\" (seconds) or \"ms\" (milliseconds)."));
    },
    toggle: function toggle(value) {
      this.$emit('input', !isUndefined_1(value) ? value : this.isActive ? this.offValue : this.onValue);
    }
  },
  watch: {
    value: function value() {
      var _this = this;

      this.dragging = true;
      setTimeout(function () {
        _this.dragging = false;
      }, this.getTransitionInMilliseconds());
    }
  },
  data: function data() {
    return {
      dragging: false
    };
  }
};
var plugin$24 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      LightSwitchField: LightSwitchField
    });
  }
});
var ListGroupItem = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.href ? _c('a', {
      staticClass: "list-group-item",
      class: _vm.classes,
      attrs: {
        "href": _vm.href
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm.badge ? _c('badge', _vm._b({}, 'badge', _vm.badgeOptions, false)) : _vm._e()], 2) : _vm.action ? _c('a', {
      staticClass: "list-group-item",
      class: _vm.classes,
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.onClick($event);
        }
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm.badge ? _c('badge', _vm._b({}, 'badge', _vm.badgeOptions, false)) : _vm._e()], 2) : _c('div', {
      staticClass: "list-group-item",
      class: _vm.classes,
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm.badge ? _c('badge', _vm._b({}, 'badge', _vm.badgeOptions, false)) : _vm._e()], 2);
  },
  staticRenderFns: [],
  components: {
    Badge: Badge
  },
  props: {
    /**
     * The list item label.
     *
     * @property Object
     */
    label: {
      type: [Number, String],
      value: null
    },

    /**
     * The list group item an action, or clickable item.
     *
     * @property Boolean
     */
    action: {
      type: Boolean,
      default: false
    },

    /**
     * The list group item active.
     *
     * @property Boolean
     */
    active: {
      type: Boolean,
      default: false
    },

    /**
     * The list group item disabled.
     *
     * @property Boolean
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * The list group item variant.
     *
     * @property String
     */
    variant: String,

    /**
     * The list group item href attribute.
     *
     * @property String
     */
    href: String,

    /**
     * The badge label (if number or string) or object of options to pass to
     * the component.
     *
     * @property String|Object
     */
    badge: [Number, String, Object]
  },
  computed: {
    classes: function classes() {
      var classes = prefix({
        'action': this.action
      }, 'list-group-item');
      classes['active'] = this.isActive;
      classes['disabled'] = this.isDisabled;

      if (this.variant) {
        classes[prefix(this.variant, 'list-group-item')] = true;
      }

      return classes;
    },
    badgeOptions: function badgeOptions() {
      return isObject_1(this.badge) ? this.badge : {
        label: this.badge
      };
    }
  },
  methods: {
    /**
     * Toggle the list item's active class.
     *
     * @return void
     */
    toggle: function toggle() {
      this.isActive = !this.isActive;
    },

    /**
     * Activate the list item.
     *
     * @return void
     */
    activate: function activate() {
      this.isActive = true;
    },

    /**
     * Deactivate the list item.
     *
     * @return void
     */
    deactivate: function deactivate() {
      this.isActive = false;
    },

    /**
     * Activate the list item.
     *
     * @return void
     */
    disable: function disable() {
      this.isDisabled = false;
    },

    /**
     * Deactivate the list item.
     *
     * @return void
     */
    enable: function enable() {
      this.isDisabled = false;
    },

    /**
     * The callback function for the `click` event.
     *
     * @return void
     */
    onClick: function onClick(event) {
      this.$emit('click', event, this);
    }
  },
  watch: {
    isActive: function isActive(value, prevValue) {
      this.$emit('update:active', this.isActive);
      this.$emit('toggle', this.isActive, this);
      this.$emit(value ? 'activate' : 'deactivate', this);
    }
  },
  data: function data() {
    return {
      isActive: this.active,
      isDisabled: this.disabled
    };
  }
};
var ListGroup = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "list-group",
      class: _vm.classes
    }, [_vm._t("default", _vm._l(_vm.items, function (item, key) {
      return _c('list-group-item', _vm._b({
        key: key
      }, 'list-group-item', item, false));
    }))], 2);
  },
  staticRenderFns: [],
  components: {
    ListGroupItem: ListGroupItem
  },
  props: {
    /**
     * An array of list item objects.
     *
     * [{label: 'Some Label', badge: 1}]
     *
     * @property Object
     */
    items: Array,

    /**
     * Can the list items be activated.
     *
     * @property Boolean
     */
    activateable: {
      type: Boolean,
      default: false
    },

    /**
     * The list group appear flush (without some borders).
     *
     * @property Boolean
     */
    flush: {
      type: Boolean,
      default: false
    },

    /**
     * Can activate multiple list items
     *
     * @property Boolean
     */
    multiple: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes: function classes() {
      return prefix({
        'flush': this.flush
      }, 'list-group');
    }
  },
  methods: {
    bindEventsToChildren: function bindEventsToChildren() {
      var _this = this;

      each(this.$children, function (child) {
        child.$off('click', _this.onClickChild);
        child.$on('click', _this.onClickChild);
        child.$off('activate', _this.onActivate);
        child.$on('activate', _this.onActivate);
        child.$off('deactivate', _this.onDeactivate);
        child.$on('deactivate', _this.onDeactivate);
      });
    },
    onClickChild: function onClickChild(event, child) {
      if (this.activateable) {
        child.toggle();
      }

      this.$emit('click:child', event, child);
    },
    onActivate: function onActivate(item) {
      if (!this.multiple && this.activeItem !== item) {
        if (this.activeItem) {
          this.activeItem.deactivate();
        }

        this.activeItem = item;
      }
    },
    onDeactivate: function onDeactivate(item) {
      if (!this.multiple && this.activeItem === item) {
        this.activeItem = null;
      }
    }
  },
  data: function data() {
    return {
      activeItem: null
    };
  },
  mounted: function mounted() {
    this.bindEventsToChildren();
  },
  updated: function updated() {
    this.bindEventsToChildren();
  }
};
var plugin$25 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      ListGroup: ListGroup
    });
  }
});
var Navigation = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('nav', {
      staticClass: "nav",
      class: _vm.classes,
      attrs: {
        "role": _vm.role
      }
    }, [_vm._l(_vm.items, function (item, i) {
      return _vm.items ? _c('navigation-item', _vm._b({
        key: i
      }, 'navigation-item', item, false)) : _vm._e();
    }), _vm._v(" "), _vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'navigation',
  mixins: [Colorable],
  props: {
    /**
     * Helper to add the justify-content-X class.
     *
     * @prop {Array}
     */
    align: String,

    /**
     * An array of buttons
     *
     * @prop {Array}
     */
    buttons: Array,

    /**
     * The navigation inside a card
     *
     * @prop {Boolean}
     */
    card: Boolean,

    /**
     * Justify nav items to fill the width equally (using flex).
     *
     * @prop {Array}
     */
    fill: Boolean,

    /**
     * Add `nav-justified` class to the component.
     *
     * @prop {Array}
     */
    justified: Boolean,

    /**
     * Display items as pill shapes
     *
     * @prop {Array}
     */
    pills: Boolean,

    /**
     * Display items as tab shapes
     *
     * @prop {Array}
     */
    tabs: Boolean,

    /**
     * Display the buttons vertically
     *
     * @prop {Boolean}
     */
    vertical: Boolean,

    /**
     * The role attribute
     *
     * @prop {String}
     */
    role: String
  },
  computed: {
    classes: function classes() {
      var _this = this;

      this.$nextTick(function () {
        if (!_this.isCard) {
          _this.isCard = _this.$parent.$el.classList.contains('card-header');
        }
      });
      return this.$mergeClasses(prefix(this.align, 'justify-content'), this.colorableClasses, {
        'card-header-tabs': this.isCard && this.tabs,
        'card-header-pills': this.isCard && this.pills,
        'nav-justified': this.justified,
        'nav-fill': this.fill,
        'nav-pills': this.pills,
        'nav-tabs': this.tabs,
        'flex-column': this.vertical
      });
    }
  },
  data: function data() {
    return {
      isCard: this.card
    };
  }
};
var NavigationLink = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a', {
      class: _vm.classes,
      attrs: {
        "href": _vm.href
      }
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'navigation-link',
  props: {
    /**
     * Is the navigation item active
     *
     * @prop {Boolean}
     */
    active: Boolean,

    /**
     * Is the navigation item disabled
     *
     * @prop {Boolean}
     */
    disabled: Boolean,

    /**
     * The href attribute
     *
     * @prop {String}
     */
    href: String,

    /**
     * Add the nav-item class to the link
     *
     * @prop {Boolean}
     */
    item: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes: function classes() {
      var _this = this;

      this.$nextTick(function () {
        if (!_this.isItem) {
          _this.isItem = !_this.$parent.$el.classList.contains('nav-item');
        }
      });
      return {
        'nav-link': this.href,
        'nav-item': this.isItem,
        'active': this.active,
        'disabled': this.disabled
      };
    }
  },
  data: function data() {
    return {
      isItem: this.item
    };
  }
};
var NavigationItem = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.component, {
      tag: "component",
      class: _vm.classes
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'navigation-item',
  extends: NavigationLink,
  props: {
    /**
     * The HTML element
     *
     * @prop {String}
     */
    element: String,

    /**
     * Is the component a list element
     *
     * @prop {Boolean}
     */
    list: Boolean,

    /**
     * Add the nav-item class to the link
     *
     * @prop {Boolean}
     */
    item: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    component: function component() {
      if (this.element) {
        return this.element;
      } else if (this.href) {
        return 'a';
      } else if (this.list) {
        return 'li';
      }

      return 'div';
    }
  }
};
var NavigationDropdown = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('navigation-item', {
      staticClass: "dropdown"
    }, [_vm._t("toggle-button", [_c('navigation-link', {
      staticClass: "dropdown-toggle",
      attrs: {
        "href": "#",
        "data-toggle": "dropdown",
        "role": "button",
        "aria-haspopup": "true",
        "aria-expanded": _vm.isDropdownShowing
      },
      on: {
        "blur": _vm.onBlur
      },
      nativeOn: {
        "click": function click($event) {
          $event.preventDefault();

          _vm.toggle();
        }
      }
    }, [_vm._v(" " + _vm._s(_vm.label) + " ")])]), _vm._v(" "), _vm._t("dropdown-menu", [_c('dropdown-menu', {
      attrs: {
        "id": _vm.id,
        "items": _vm.items,
        "align": _vm.align,
        "show": _vm.isDropdownShowing
      },
      on: {
        "update:show": function updateShow($event) {
          _vm.isDropdownShowing = $event;
        },
        "item:click": _vm.onItemClick
      }
    }, [_vm._t("default")], 2)])], 2);
  },
  staticRenderFns: [],
  name: 'navigation-dropdown',
  extends: ButtonDropdown
};
var plugin$26 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Navigation: Navigation,
      NavigationItem: NavigationItem,
      NavigationLink: NavigationLink,
      NavigationDropdown: NavigationDropdown
    });
  }
});
var plugin$27 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Overlay: Overlay
    });
  }
});
var Pagination = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('nav', {
      attrs: {
        "aria-label": "Page navigation example"
      }
    }, [_c('ul', {
      staticClass: "pagination",
      class: _vm.classes
    }, [_c('li', {
      staticClass: "page-item",
      class: {
        'disabled': _vm.currentPage === 1
      }
    }, [_c('a', {
      staticClass: "page-link",
      attrs: {
        "href": "#",
        "aria-label": "Previous"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();

          _vm.prev($event);
        }
      }
    }, [_c('span', {
      attrs: {
        "aria-hidden": "true"
      }
    }, [_vm._v("«")])])]), _vm._v(" "), _vm._l(_vm.pages, function (item) {
      return _c('li', {
        staticClass: "page-item",
        class: {
          'active': item.page === _vm.currentPage,
          'disabled': !!item.divider
        },
        attrs: {
          "data-page": item.page
        }
      }, [_vm._t("default", [item.divider ? _c('a', {
        staticClass: "page-link"
      }, [_vm._v("…")]) : _c('a', {
        staticClass: "page-link",
        class: item.class,
        attrs: {
          "href": "#",
          "data-label": item.label
        },
        on: {
          "click": function click($event) {
            $event.preventDefault();

            _vm.paginate(item.page, $event);
          }
        }
      }, [item.label ? _c('span', {
        attrs: {
          "aria-hidden": "true"
        },
        domProps: {
          "innerHTML": _vm._s(item.label)
        }
      }) : _vm._e(), _vm._v(" "), item.page ? _c('span', {
        attrs: {
          "aria-hidden": "true"
        },
        domProps: {
          "innerHTML": _vm._s(item.page)
        }
      }) : _vm._e()])], {
        item: item
      })], 2);
    }), _vm._v(" "), _c('li', {
      staticClass: "page-item",
      class: {
        'disabled': _vm.currentPage >= _vm.totalPages
      }
    }, [_c('a', {
      staticClass: "page-link",
      attrs: {
        "href": "#",
        "aria-label": "Next"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();

          _vm.next($event);
        }
      }
    }, [_c('span', {
      attrs: {
        "aria-hidden": "true"
      }
    }, [_vm._v("»")])])])], 2)]);
  },
  staticRenderFns: [],
  name: 'pagination',
  props: {
    /**
     * The alignment of the pagination component.
     *
     * @prop String
     */
    align: {
      type: String,
      validate: function validate(value) {
        return ['start', 'end', 'center'].indexOf(value) !== -1;
      }
    },

    /**
     * The page on which the paginator should start.
     *
     * @prop String
     */
    page: {
      type: Number,
      default: 1
    },

    /**
     * The total number of pages in the paginator.
     *
     * @prop String
     */
    totalPages: {
      type: Number,
      default: 1
    },

    /**
     * The number of pages to show when the total number of pages is
     * greater than the number of pages that should be shown.
     *
     * @prop String
     */
    showPages: {
      type: Number,
      default: 6
    },
    onPaginate: Function
  },
  methods: {
    next: function next(event) {
      this.paginate(this.currentPage >= this.totalPages ? this.currentPage : this.currentPage + 1, event);
    },
    prev: function prev(event) {
      this.paginate(this.currentPage <= 1 ? this.currentPage : this.currentPage - 1, event);
    },
    paginate: function paginate(page, event) {
      if (event.currentTarget.parentNode.classList.contains('disabled')) {
        return;
      }

      this.setActivePage(page);

      if (this.onPaginate) {
        this.onPaginate(page, event);
      }

      this.$emit('paginate', page, event);
    },
    setActivePage: function setActivePage(page) {
      if (this.currentPage !== page) {
        this.currentPage = page;
      }
    },
    generate: function generate() {
      var pages = [];
      var showPages = this.showPages % 2 ? this.showPages + 1 : this.showPages;
      var startPage = this.currentPage >= showPages ? this.currentPage - showPages / 2 : 1;
      var startOffset = showPages + startPage;
      var endPage = this.totalPages < startOffset ? this.totalPages : startOffset;
      var diff = startPage - endPage + showPages;
      startPage -= startPage - diff > 0 ? diff : 0;

      if (startPage > 1) {
        pages.push({
          page: 1
        });
      }

      if (startPage > 2) {
        pages.push({
          divider: true
        });
      }

      for (var i = startPage; i < endPage; i++) {
        pages.push({
          page: i
        });
      }

      if (endPage <= this.totalPages) {
        if (this.totalPages - 1 > endPage) {
          pages.push({
            divider: true
          });
        }

        pages.push({
          page: this.totalPages
        });
      }

      return pages;
    }
  },
  computed: {
    pages: function pages() {
      return this.generate();
    },
    classes: function classes() {
      var classes = {};
      classes['justify-content-' + this.align] = true;
      return classes;
    }
  },
  data: function data() {
    return {
      currentPage: this.page
    };
  }
};
var plugin$28 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Pagination: Pagination
    });
  }
});
var plugin$29 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      ProgressBar: ProgressBar
    });
  }
});
var plugin$30 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      RadioField: RadioField
    });
  }
}); //import BaseField from './BaseField';

var CUSTOM_SELECT_PREFIX = 'custom-select-';
var SelectField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', [_vm._t("label", [_vm.label ? _c('form-label', {
      attrs: {
        "for": _vm.id
      },
      domProps: {
        "innerHTML": _vm._s(_vm.label)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("control", [_c('select', {
      class: _vm.$mergeClasses(_vm.controlClasses, _vm.colorableClasses),
      attrs: {
        "id": _vm.id,
        "required": _vm.required,
        "disabled": _vm.disabled || _vm.readonly,
        "readonly": _vm.readonly,
        "pattern": _vm.pattern
      },
      domProps: {
        "value": _vm.value
      },
      on: {
        "input": function input($event) {
          _vm.updated($event.target.value);
        }
      }
    }, [_vm._t("default")], 2)]), _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'select-field',
  extends: FormControl,
  mixins: [FormControl, Colorable],
  props: {
    /**
     * Add `custom-select` to the form control if true.
     *
     * @property String
     */
    custom: Boolean
  },
  computed: {
    controlClass: function controlClass() {
      var controlClass = this.custom ? 'custom-select' : this.defaultControlClass;
      return this.plaintext ? "".concat(controlClass, "-plaintext") : controlClass;
    },
    customSelectClasses: function customSelectClasses() {
      return [CUSTOM_SELECT_PREFIX.replace(/\-$/, '') + (this.plaintext ? '-plaintext' : ''), this.customSelectSizeClass, this.spacing || ''].join(' ');
    }
  }
};
var plugin$31 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      SelectField: SelectField
    });
  }
});

var Transformer =
/*#__PURE__*/
function () {
  /**
   * Initialize the transformer instance using an HTTP response object.
   *
   * @param data object
   * @return void
   */
  function Transformer(response) {
    _classCallCheck$1(this, Transformer);

    if (!isObject_1(this.$originalResponse = response)) {
      throw new Error('The transformer must be instantiated with a response object.');
    }

    if (!isArray_1(this.$required = this.required()) || !this.$required.length) {
      throw new Error('A transformer must have at least one required property.');
    }

    this.$transformedResponse = this.transform(response);
    this.validate();
    this.initialize();
  }
  /**
   * A method to override to perform logic to finished initializing.
   *
   * @return void
   */


  _createClass$1(Transformer, [{
    key: "initialize",
    value: function initialize() {} //

    /**
     * Define an array of required properties with at least one value.
     *
     * @return void
     */

  }, {
    key: "required",
    value: function required() {} //

    /**
     * Tranform the response object
     *
     * @property String
     */

  }, {
    key: "transform",
    value: function transform(response) {
      return response;
    }
    /**
     * Get the tranformed response
     *
     * @property String
     */

  }, {
    key: "response",
    value: function response() {
      return this.$transformedResponse;
    }
    /**
     * Validate the tranformed response.
     *
     * @return void
     */

  }, {
    key: "validate",
    value: function validate() {
      var _this = this;

      if (!isObject_1(this.$transformedResponse)) {
        throw new Error('The transformed response must be an object.');
      }

      each(this.$required, function (key) {
        if (!(key in _this.$transformedResponse)) {
          throw new Error("\"".concat(key, "\" is a required property and does not exist in the tranformed response."));
        }
      });
    }
  }]);

  return Transformer;
}();

var TableViewTransformer =
/*#__PURE__*/
function (_Transformer) {
  _inherits$1(TableViewTransformer, _Transformer);

  function TableViewTransformer() {
    _classCallCheck$1(this, TableViewTransformer);

    return _possibleConstructorReturn$1(this, (TableViewTransformer.__proto__ || Object.getPrototypeOf(TableViewTransformer)).apply(this, arguments));
  }

  _createClass$1(TableViewTransformer, [{
    key: "required",
    value: function required() {
      return [// The end of the count of the paginated list.
      'to', // The start of the count of the paginated list.
      'from', // The total number of items (not just included in the pagination)
      'total', // The number of items per page
      'per_page', // The last page number (or total pages)
      'last_page', // The current page number
      'current_page', // The actual response data to appear in the table
      'data'];
    }
  }, {
    key: "data",
    value: function data() {
      return this.$transformedResponse.data;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      if (!isArray_1(this.data())) {
        throw new Error('The data property must be an array.');
      }
    }
  }]);

  return TableViewTransformer;
}(Transformer);

var TableView = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "table-view"
    }, [_c('div', {
      staticClass: "d-flex justify-content-between align-items-center"
    }, [_vm._t("header", [_c('div', {
      staticClass: "table-view-header"
    }, [_vm._t("heading", [_vm.heading ? _c('h3', {
      domProps: {
        "innerHTML": _vm._s(_vm.heading)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("description", [_vm.description ? _c('p', {
      domProps: {
        "innerHTML": _vm._s(_vm.description)
      }
    }) : _vm._e()])], 2)]), _vm._v(" "), _vm._t("buttons", [_vm.buttons.length ? _c('div', {
      staticClass: "buttons-wrapper my-3"
    }, [_c('span', _vm._l(_vm.buttons, function (button, key) {
      return _c('a', {
        class: button.className || 'btn btn-primary',
        attrs: {
          "href": button.href || '#'
        },
        on: {
          "click": function click($event) {
            _vm.proxy(button.onClick, $event);
          }
        }
      }, [button.icon ? _c('i', {
        class: button.icon
      }) : _vm._e(), _vm._v(" "), _c('span', {
        domProps: {
          "innerHTML": _vm._s(button.label)
        }
      })]);
    }))]) : _vm._e()])], 2), _vm._v(" "), _c('table', {
      staticClass: "table",
      class: {
        'table-hover': _vm.hover && !_vm.loading && _vm.data.length
      }
    }, [_vm._t("thead", [_c('thead', [_c('tr', _vm._l(_vm.tableColumns, function (column) {
      return _c('th', {
        attrs: {
          "scope": "col",
          "width": column.width
        }
      }, [column.id ? _c('div', [_c('a', {
        staticClass: "sort",
        attrs: {
          "href": "#",
          "data-id": column.id
        },
        domProps: {
          "innerHTML": _vm._s(column.name || column.id)
        },
        on: {
          "click": function click($event) {
            $event.preventDefault();

            _vm.orderBy(column.id);
          }
        }
      }), _vm._v(" "), _vm.request.params.order === column.id && _vm.request.params.sort === 'asc' ? _c('i', {
        staticClass: "sort-icon fa fa-sort-asc"
      }) : _vm._e(), _vm._v(" "), _vm.request.params.order === column.id && _vm.request.params.sort === 'desc' ? _c('i', {
        staticClass: "sort-icon fa fa-sort-desc"
      }) : _vm._e()]) : _c('div', {
        domProps: {
          "innerHTML": _vm._s(column.name)
        }
      })]);
    }))])]), _vm._v(" "), _vm._t("tbody", [_c('tbody', [_vm.loading ? _c('tr', [_c('td', {
      staticClass: "position-relative",
      style: {
        'height': _vm.height(_vm.minHeight)
      },
      attrs: {
        "colspan": _vm.tableColumns.length
      }
    }, [_c('activity-indicator', {
      attrs: {
        "center": true
      }
    })], 1)]) : !_vm.data.length ? _c('tr', [_c('td', {
      staticClass: "position-relative",
      attrs: {
        "colspan": _vm.tableColumns.length
      }
    }, [_c('alert', {
      staticClass: "my-3",
      attrs: {
        "variant": "warning"
      }
    }, [_c('i', {
      staticClass: "fa fa-warning"
    }), _vm._v(" There are no results found. ")])], 1)]) : _vm._t("default", _vm._l(_vm.data, function (row, i) {
      return _c('tr', _vm._l(_vm.tableColumns, function (column) {
        return _c('td', {
          domProps: {
            "innerHTML": _vm._s(row[column.id] || row[column.name])
          }
        });
      }));
    }), {
      data: _vm.data,
      columns: _vm.tableColumns
    })], 2)]), _vm._v(" "), _vm._t("tfoot", [_c('tfoot', [_c('td', {
      staticClass: "table-view-footer",
      attrs: {
        "colspan": _vm.tableColumns.length
      }
    }, [_vm._t("pagination", [_vm.paginate && _vm.response ? _c('pagination', {
      attrs: {
        "align": "center",
        "page": _vm.response.current_page,
        "total-pages": _vm.response.last_page,
        "on-paginate": _vm.onPaginate
      }
    }) : _vm._e()])], 2)])])], 2)]);
  },
  staticRenderFns: [],
  name: 'table-view',
  mixins: [Proxy],
  components: {
    Pagination: Pagination,
    ActivityIndicator: ActivityIndicator
  },
  props: {
    // (string) A relative or absolute endpoint URL used to fetch data
    url: {
      type: String,
      required: true
    },
    // (integer) The starting page of the table
    page: {
      type: Number,
      default: 1
    },
    // (integer) The total number of results per page
    limit: {
      type: Number,
      default: 20
    },
    // (string) The column used to order the data
    order: String,
    // (string) The sort direction (asc|desc)
    sort: {
      type: String,
      validate: function validate(value) {
        return ['asc', 'desc'].indexOf(value) !== -1;
      }
    },
    // (integer) The minimum height of the row when loading data
    minHeight: {
      type: Number,
      default: 400
    },
    // (array) An array of button objects
    // [{href: 'test-123', label: 'Test 123'}]
    buttons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // (array) An array of table column
    // [{id: 'database_id', name: 'Database id', width: '20%'}]
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // (string) The table heading
    heading: String,
    // (string) Add table-hover to the table element
    hover: {
      type: Boolean,
      default: true
    },
    // (string) The table description
    description: String,
    // (bool) Should show the pagination for this table
    paginate: {
      type: Boolean,
      default: true
    },
    // (object) The HTTP response transformer instance
    transformer: {
      type: Object,
      validate: function validate(value) {
        return value instanceof TableViewTransformer;
      }
    }
  },
  computed: {
    tableColumns: function tableColumns() {
      var columns = this.columns;

      if (!columns || !columns.length) {
        columns = keys_1(this.data[0]);
      }

      return columns.map(function (column) {
        return isObject_1(column) ? column : {
          name: column
        };
      });
    }
  },
  methods: {
    orderBy: function orderBy(order) {
      var defaultSort = 'desc';
      var currentSort = this.getRequestParam('sort');
      var currentOrder = this.getRequestParam('order');
      this.addRequestParam('order', order);
      this.addRequestParam('sort', currentOrder !== order || !currentSort ? defaultSort : currentSort === defaultSort ? 'asc' : null);
      this.fetch();
    },
    getRequestHeader: function getRequestHeader(key, value) {
      return this.request.headers[key] || value;
    },
    addRequestHeader: function addRequestHeader(key, value) {
      if (!this.request.headers) {
        this.request.headers = {};
      }

      this.request.headers[key] = value;
    },
    getRequestParam: function getRequestParam(key, value) {
      return this.request.params[key] || value;
    },
    addRequestParam: function addRequestParam(key, value) {
      if (!this.request.params) {
        this.request.params = {};
      }

      this.request.params[key] = value;
    },
    fetch: function fetch() {
      var _this = this;

      var request = new Request(this.url, this.request);
      this.loading = true;
      return request.get().then(function (response) {
        var transformer = _this.transformer || new TableViewTransformer(response);
        _this.response = transformer.response();
        _this.data = transformer.data();
        _this.loading = false;
      }, function (errors) {
        _this.loading = false;
      });
    },
    height: function height(min) {
      var elements = [// this.$el.querySelector('thead'),
      this.$el.querySelector('tbody')];
      var height = 0;
      each(elements, function (el) {
        height += el.getBoundingClientRect().height;
      });
      return Math.max(min, height) + 'px';
    },
    onPaginate: function onPaginate(page, event) {
      if (!this.request.params) {
        this.request.params = {};
      }

      this.request.params.page = page;
      this.fetch();
    }
  },
  data: function data() {
    return {
      // (array) The dataset for the table
      data: this.$attrs.data || [],
      // (bool) Is the table currently loading data
      loading: false,
      // (null|object) The response object
      response: null,
      // (object) The HTTP request object
      request: extend({
        headers: {},
        params: {
          page: this.page,
          limit: this.limit,
          order: this.order,
          sort: this.sort
        }
      }, this.$attrs.request)
    };
  },
  mounted: function mounted() {
    this.fetch();
  },

  /*
  data() {
      return extend({
          buttons: [],
           columns: [],
           header: false,
           description: false,
           // (bool) Should show the pagination for this table
          paginate: true,
           // (bool) Is the table currently loading data
          loading: false,
           // (object) An object with key/value pairs for components used in the template
          components: {
              // (string) The name of the component used for the table header
              header: 'table-view-header',
               // (string) The name of the component used for the table row
              row: 'table-view-row',
               // (string) The name of the component used for the table row
              footer: 'table-view-footer'
          },
           // (int) The starting page
          // page: 1,
           // (string) The order of the date being returned
          // order: null,
           // (string) Either asc or desc sorting order
          // sort: null,
           // (int) The numbers of rows per page
          // limit: 20,
           // (bool) Fetch the data when table is shown
          // fetchOnRender: true,
           // (array) An array of headers appended to the request
          // requestHeaders: [],
           // (array) The default options used to generate the query string
          // defaultRequestDataOptions: [
          //    'page',
          //    'limit',
          //    'order',
          //    'sort'
          // ],
           // (object) An option to pass an object with request data
          // requestData: {},
           // (array) Additional options used to generate the query string
          // requestDataOptions: [],
           // (object) The body view options object
          // bodyViewOptions: false,
           // (object) The pagination view class
          // footerView: 'pagination',
           // (object) The pagination view options object
          // footerViewOptions: false,
           // (string) The table footer class name
          // footerClassName: 'table-header',
           // (string) The table header
          // header: false,
           // (string) The table header tag name
          // headerTagName: 'h3',
           // (string) The table header class name
          // headerClassName: 'table-header',
           // (object) The header view class
          // headerView: false,
           // (object) The header view options object
          // headerViewOptions: false,
           // (string) The table description
          // description: false,
           // (string) The table description tag
          // descriptionTag: 'p',
           // (string) The table description tag
          // descriptionClassName: 'description row col-sm-6',
           // (string) The table class name
          // tableClassName: 'table',
           // (string) The loading class name
          // loadingClassName: 'loading',
           // (string) The name of the property in the model storing the columns
          // childViewColumnsProperty: 'columns',
           // (object) The activity indicator options
          // indicatorOptions: {
          //     indicator: 'small'
          // },
           // (string) The message to display if there are no table rows
          // emptyMessage: 'No rows found',
           // (string) The name of the class appended to the buttons
          // buttonClassName: 'btn btn-default',
      }, this.$attrs);
  },
  */
  beforeDestroy: function beforeDestroy() {
    this.$off();
  }
};
var plugin$32 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      TableView: TableView
    });
  }
});
var TextareaField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', [_vm._t("label", [_vm.label || _vm.hasDefaultSlot ? _c('form-label', {
      attrs: {
        "for": _vm.id
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e()]), _vm._v(" "), _vm._t("control", [_c('textarea', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events",
        value: _vm.bindEvents,
        expression: "bindEvents"
      }],
      class: _vm.$mergeClasses(_vm.controlClasses, _vm.colorableClasses),
      attrs: {
        "id": _vm.id,
        "errors": _vm.errors,
        "placeholder": _vm.placeholder,
        "required": _vm.required,
        "disabled": _vm.disabled || _vm.readonly,
        "readonly": _vm.readonly,
        "pattern": _vm.pattern
      },
      domProps: {
        "value": _vm.value
      },
      on: {
        "input": function input($event) {
          _vm.updated($event.target.value);
        }
      }
    })]), _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'textarea-field',
  mixins: [Colorable, FormControl],
  props: {
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
var plugin$33 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      TextareaField: TextareaField
    });
  }
});
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax$4 = Math.max;
/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */

function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;

  if (!length) {
    return -1;
  }

  var index = fromIndex == null ? 0 : toInteger_1(fromIndex);

  if (index < 0) {
    index = nativeMax$4(length + index, 0);
  }

  return _baseFindIndex(array, _baseIteratee(predicate, 3), index);
}

var findIndex_1 = findIndex;
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */

function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

var last_1 = last;
/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */

function parent(object, path) {
  return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
}

var _parent = parent;
/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */

function baseUnset(object, path) {
  path = _castPath(path, object);
  object = _parent(object, path);
  return object == null || delete object[_toKey(last_1(path))];
}

var _baseUnset = baseUnset;
/** Used for built-in method references. */

var arrayProto$1 = Array.prototype;
/** Built-in value references. */

var splice$1 = arrayProto$1.splice;
/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */

function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;

  while (length--) {
    var index = indexes[length];

    if (length == lastIndex || index !== previous) {
      var previous = index;

      if (_isIndex(index)) {
        splice$1.call(array, index, 1);
      } else {
        _baseUnset(array, index);
      }
    }
  }

  return array;
}

var _basePullAt = basePullAt;
/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *
 * console.log(array);
 * // => [1, 3]
 *
 * console.log(evens);
 * // => [2, 4]
 */

function remove(array, predicate) {
  var result = [];

  if (!(array && array.length)) {
    return result;
  }

  var index = -1,
      indexes = [],
      length = array.length;
  predicate = _baseIteratee(predicate, 3);

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }

  _basePullAt(array, indexes);

  return result;
}

var remove_1 = remove;
var UploadField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', {
      staticClass: "upload-field",
      class: {
        'enable-dropzone': _vm.dropzone,
        'enable-multiple': _vm.multiple
      },
      on: {
        "dragenter": function dragenter($event) {
          $event.preventDefault();
          return _vm.onDragEnter($event);
        },
        "dragover": function dragover($event) {
          $event.preventDefault();
          return _vm.onDragOver($event);
        },
        "dragleave": function dragleave($event) {
          $event.preventDefault();
          return _vm.onDragLeave($event);
        }
      }
    }, [_vm.multiple && (!_vm.maxUploads || _vm.maxUploads > _vm.value.length) || !_vm.multiple && !_vm.value ? _c('file-field', {
      attrs: {
        "name": _vm.name,
        "label": _vm.label,
        "placeholder": _vm.placeholder,
        "help-text": _vm.helpText,
        "multiple": _vm.multiple,
        "width": _vm.width,
        "height": _vm.height,
        "errors": _vm.errors
      },
      on: {
        "change": _vm.onChange
      }
    }) : _vm._e(), _vm._v(" "), _vm.multiple && _vm.value && _vm.value.length ? _c('div', {
      staticClass: "upload-field-preview mt-4"
    }, _vm._l(_vm.value, function (file, key) {
      return _c('file-preview', {
        key: file.id || key,
        attrs: {
          "file": file
        },
        on: {
          "close": function close($event) {
            _vm.removeFile(file);
          }
        }
      });
    })) : !_vm.multiple && _vm.value ? _c('div', {
      staticClass: "upload-field-preview mt-4"
    }, [_c('file-preview', {
      attrs: {
        "file": _vm.value
      },
      on: {
        "close": function close($event) {
          _vm.removeFile(_vm.value);
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm.showDropElement ? _c('div', {
      staticClass: "upload-field-dropzone",
      style: {
        'min-height': _vm.dropzoneMinHeight
      },
      on: {
        "drop": function drop($event) {
          $event.preventDefault();
          return _vm.onDrop($event);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-cloud-upload"
    }), _vm._v(" "), _c('div', [_vm._v("Drag and drop files to upload")])]) : _vm._e()], 1);
  },
  staticRenderFns: [],
  name: 'upload-field',
  mixins: [FormControl],
  components: {
    FileField: FileField,
    FilePreview: FilePreview
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    /**
     * Can user upload multiple files
     *
     * @property String
     */
    multiple: Boolean,

    /**
     * The maximum number of files that a user can upload
     *
     * @property String
     */
    maxUploads: Number,

    /**
     * The height attribute for the control element
     *
     * @property String
     */
    height: [Number, String],

    /**
     * The width attribute for the control element
     *
     * @property String
     */
    width: [Number, String],

    /**
     * Can user drag/drop files into browser to upload them.
     *
     * @property String
     */
    dropzoneMinHeight: [Number, String],

    /**
     * Is the user dragging a file over the dropzone
     *
     * @property String
     */
    dragging: {
      type: [String, Boolean],
      default: function _default() {
        return undefined;
      }
    },

    /**
     * Can user drag/drop files into browser to upload them.
     *
     * @property String
     */
    dropzone: {
      type: Boolean,
      default: true
    },

    /**
     * The data attribute
     *
     * @property File|FileList|Array
     */
    value: {
      type: [Object, File, FileList, Array],
      default: function _default() {
        return !this.multiple ? null : [];
      }
    }
  },
  methods: {
    removeFile: function removeFile(data) {
      if (this.multiple) {
        var files = isArray_1(this.value) ? this.value.slice(0) : [];

        if (data instanceof File) {
          remove_1(files, {
            name: data.name,
            size: data.size,
            lastModified: data.lastModified
          });
        } else {
          remove_1(files, data);
        }

        this.$emit('change', files);
      } else {
        this.$emit('change', null);
      }
    },
    addFile: function addFile(file, subject) {
      var data = {
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        size: file.size,
        type: file.type
      };

      if (this.multiple) {
        var files = subject || (isArray_1(this.value) ? this.value.slice(0) : []);

        if (!this.maxUploads || this.maxUploads > files.length) {
          if (findIndex_1(files, data) === -1) {
            files.push(file);
          }

          this.$emit('change', files);
        }
      } else {
        this.$emit('change', file);
      }
    },
    addFiles: function addFiles(files) {
      var _this = this;

      var subject = isArray_1(this.value) ? this.value.slice(0) : [];
      each(files, function (file) {
        _this.addFile(file, subject);
      });
      event.target.value = null;
    },
    onChange: function onChange(files) {
      if (files instanceof FileList) {
        this.addFiles(files);
      } else {
        this.addFile(files);
      }
    },

    /**
     * The `dragover` event callback.
     *
     * @property String
     */
    onDragOver: function onDragOver(event) {
      this.isDraggingInside = true;
      this.$emit('update:dragging', true);
      this.$emit('drag:over', event);
    },

    /**
     * The `dragover` event callback.
     *
     * @property String
     */
    onDragEnter: function onDragEnter(event) {
      this.isDraggingInside = true;
      this.$emit('update:dragging', true);
      this.$emit('drag:enter', event);
    },

    /**
     * The `dragleave` event callback.
     *
     * @property String
     */
    onDragLeave: function onDragLeave(event) {
      this.isDraggingInside = false;
      this.$emit('update:dragging', false);
      this.$emit('drag:leave', event);
    },

    /**
     * The `drop` event callback.
     *
     * @property String
     */
    onDrop: function onDrop(event) {
      this.isDraggingInside = false;
      this.addFiles(event.dataTransfer.files);
      this.$emit('update:dragging', false);
      this.$emit('drop', event);
    }
  },
  computed: {
    showDropElement: function showDropElement() {
      return !isUndefined_1(this.dragging) ? this.dragging : this.isDraggingInside;
    }
  },
  data: function data() {
    return {
      isDraggingInside: false
    };
  }
};
var plugin$34 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      UploadField: UploadField
    });
  }
});
var components$1 =
/*#__PURE__*/
Object.freeze({
  ActivityButton: ActivityButton,
  ActivityIndicator: ActivityIndicator,
  Alert: Alert,
  AlertClose: AlertClose,
  AlertHeading: AlertHeading,
  AlertLink: AlertLink,
  Badge: Badge,
  BaseForm: BaseForm,
  Breadcrumb: Breadcrumb,
  BreadcrumbItem: BreadcrumbItem,
  Btn: Btn,
  BtnGroup: BtnGroup,
  BtnToolbar: BtnToolbar,
  ButtonDropdown: ButtonDropdown,
  Card: Card,
  CardBody: CardBody,
  CardFooter: CardFooter,
  CardHeader: CardHeader,
  CardImg: CardImg,
  CardImgTop: CardImgTop,
  CardImgBottom: CardImgBottom,
  CardImgOverlay: CardImgOverlay,
  CardLink: CardLink,
  CardSubtitle: CardSubtitle,
  CardTitle: CardTitle,
  CheckboxField: CheckboxField,
  Container: Container,
  DropdownMenu: DropdownMenu,
  DropdownMenuItem: DropdownMenuItem,
  DropdownMenuHeader: DropdownMenuHeader,
  DropdownMenuDivider: DropdownMenuDivider,
  FileButton: FileButton,
  FileField: FileField,
  FilePreview: FilePreview,
  FormControl: FormControl$1,
  FormFeedback: FormFeedback,
  FormGroup: FormGroup,
  FormLabel: FormLabel,
  HelpText: HelpText,
  InputField: InputField,
  InputGroup: InputGroup,
  InputGroupAppend: InputGroupAppend,
  InputGroupPrepend: InputGroupPrepend,
  InputGroupText: InputGroupText,
  LightSwitchField: LightSwitchField,
  ListGroup: ListGroup,
  ListGroupItem: ListGroupItem,
  Navigation: Navigation,
  NavigationItem: NavigationItem,
  NavigationLink: NavigationLink,
  NavigationDropdown: NavigationDropdown,
  Overlay: Overlay,
  Pagination: Pagination,
  ProgressBar: ProgressBar,
  RadioField: RadioField,
  SelectField: SelectField,
  TableView: TableView,
  TextareaField: TextareaField,
  UploadField: UploadField
});

var main = VueInstaller.use({
  install: function install(Vue) {
    {
      var domain = (location.host || 'localhost').split(':')[0];
      var port = {
        "watch": "/Users/justinkimbrell/Github/vue-toolbox/src/",
        "port": 35730
      } && {
        "watch": "/Users/justinkimbrell/Github/vue-toolbox/src/",
        "port": 35730
      }.port;
      VueInstaller.script("http://".concat(domain, ":").concat(port, "/livereload.js?snipver=1"));
    }
    VueInstaller.plugins(Vue, plugins);
    VueInstaller.components(Vue, components$1);
    VueInstaller.filters(Vue, filters);
  }
});

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach$1 = arrayEach$1;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor$1 = createBaseFor$1;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor$1 = _createBaseFor$1();

var _baseFor$1 = baseFor$1;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes$1 = baseTimes$1;

var commonjsGlobal$1 = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;

var _freeGlobal$1 = freeGlobal$1;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = _freeGlobal$1 || freeSelf$1 || Function('return this')();

var _root$1 = root$1;

/** Built-in value references. */
var Symbol$2 = _root$1.Symbol;

var _Symbol$1 = Symbol$2;

/** Used for built-in method references. */
var objectProto$18 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$15 = objectProto$18.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$2 = objectProto$18.toString;

/** Built-in value references. */
var symToStringTag$2 = _Symbol$1 ? _Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$15.call(value, symToStringTag$2),
      tag = value[symToStringTag$2];

  try {
    value[symToStringTag$2] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$2.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$2] = tag;
    } else {
      delete value[symToStringTag$2];
    }
  }
  return result;
}

var _getRawTag$1 = getRawTag$1;

/** Used for built-in method references. */
var objectProto$19 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$3 = objectProto$19.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString$3.call(value);
}

var _objectToString$1 = objectToString$1;

/** `Object#toString` result references. */
var nullTag$1 = '[object Null]',
    undefinedTag$1 = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$3 = _Symbol$1 ? _Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  if (value == null) {
    return value === undefined ? undefinedTag$1 : nullTag$1;
  }
  return (symToStringTag$3 && symToStringTag$3 in Object(value))
    ? _getRawTag$1(value)
    : _objectToString$1(value);
}

var _baseGetTag$1 = baseGetTag$1;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1$1 = isObjectLike$1;

/** `Object#toString` result references. */
var argsTag$4 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike_1$1(value) && _baseGetTag$1(value) == argsTag$4;
}

var _baseIsArguments$1 = baseIsArguments$1;

/** Used for built-in method references. */
var objectProto$20 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$16 = objectProto$20.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$2 = objectProto$20.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$1 = _baseIsArguments$1(function() { return arguments; }()) ? _baseIsArguments$1 : function(value) {
  return isObjectLike_1$1(value) && hasOwnProperty$16.call(value, 'callee') &&
    !propertyIsEnumerable$2.call(value, 'callee');
};

var isArguments_1$1 = isArguments$1;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

var isArray_1$1 = isArray$1;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse$1() {
  return false;
}

var stubFalse_1$1 = stubFalse$1;

var isBuffer_1$1 = createCommonjsModule$1(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root$1.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1$1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$2 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint$1 = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$1(value, length) {
  length = length == null ? MAX_SAFE_INTEGER$2 : length;
  return !!length &&
    (typeof value == 'number' || reIsUint$1.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex$1 = isIndex$1;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$3 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$1(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$3;
}

var isLength_1$1 = isLength$1;

/** `Object#toString` result references. */
var argsTag$5 = '[object Arguments]',
    arrayTag$3 = '[object Array]',
    boolTag$4 = '[object Boolean]',
    dateTag$4 = '[object Date]',
    errorTag$3 = '[object Error]',
    funcTag$3 = '[object Function]',
    mapTag$7 = '[object Map]',
    numberTag$5 = '[object Number]',
    objectTag$5 = '[object Object]',
    regexpTag$4 = '[object RegExp]',
    setTag$7 = '[object Set]',
    stringTag$5 = '[object String]',
    weakMapTag$3 = '[object WeakMap]';

var arrayBufferTag$4 = '[object ArrayBuffer]',
    dataViewTag$5 = '[object DataView]',
    float32Tag$3 = '[object Float32Array]',
    float64Tag$3 = '[object Float64Array]',
    int8Tag$3 = '[object Int8Array]',
    int16Tag$3 = '[object Int16Array]',
    int32Tag$3 = '[object Int32Array]',
    uint8Tag$3 = '[object Uint8Array]',
    uint8ClampedTag$3 = '[object Uint8ClampedArray]',
    uint16Tag$3 = '[object Uint16Array]',
    uint32Tag$3 = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags$1 = {};
typedArrayTags$1[float32Tag$3] = typedArrayTags$1[float64Tag$3] =
typedArrayTags$1[int8Tag$3] = typedArrayTags$1[int16Tag$3] =
typedArrayTags$1[int32Tag$3] = typedArrayTags$1[uint8Tag$3] =
typedArrayTags$1[uint8ClampedTag$3] = typedArrayTags$1[uint16Tag$3] =
typedArrayTags$1[uint32Tag$3] = true;
typedArrayTags$1[argsTag$5] = typedArrayTags$1[arrayTag$3] =
typedArrayTags$1[arrayBufferTag$4] = typedArrayTags$1[boolTag$4] =
typedArrayTags$1[dataViewTag$5] = typedArrayTags$1[dateTag$4] =
typedArrayTags$1[errorTag$3] = typedArrayTags$1[funcTag$3] =
typedArrayTags$1[mapTag$7] = typedArrayTags$1[numberTag$5] =
typedArrayTags$1[objectTag$5] = typedArrayTags$1[regexpTag$4] =
typedArrayTags$1[setTag$7] = typedArrayTags$1[stringTag$5] =
typedArrayTags$1[weakMapTag$3] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike_1$1(value) &&
    isLength_1$1(value.length) && !!typedArrayTags$1[_baseGetTag$1(value)];
}

var _baseIsTypedArray$1 = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary$1 = baseUnary$1;

var _nodeUtil$1 = createCommonjsModule$1(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal$1.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray$1 = _nodeUtil$1 && _nodeUtil$1.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$1 = nodeIsTypedArray$1 ? _baseUnary$1(nodeIsTypedArray$1) : _baseIsTypedArray$1;

var isTypedArray_1$1 = isTypedArray$1;

/** Used for built-in method references. */
var objectProto$21 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$17 = objectProto$21.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray_1$1(value),
      isArg = !isArr && isArguments_1$1(value),
      isBuff = !isArr && !isArg && isBuffer_1$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes$1(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$17.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex$1(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys$1 = arrayLikeKeys$1;

/** Used for built-in method references. */
var objectProto$22 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$22;

  return value === proto;
}

var _isPrototype$1 = isPrototype$1;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg$1 = overArg$1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = _overArg$1(Object.keys, Object);

var _nativeKeys$1 = nativeKeys$1;

/** Used for built-in method references. */
var objectProto$23 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$18 = objectProto$23.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!_isPrototype$1(object)) {
    return _nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$18.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys$1 = baseKeys$1;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1$1 = isObject$1;

/** `Object#toString` result references. */
var asyncTag$1 = '[object AsyncFunction]',
    funcTag$4 = '[object Function]',
    genTag$2 = '[object GeneratorFunction]',
    proxyTag$1 = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject_1$1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag$1(value);
  return tag == funcTag$4 || tag == genTag$2 || tag == asyncTag$1 || tag == proxyTag$1;
}

var isFunction_1$1 = isFunction$1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$1(value) {
  return value != null && isLength_1$1(value.length) && !isFunction_1$1(value);
}

var isArrayLike_1$1 = isArrayLike$1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$1(object) {
  return isArrayLike_1$1(object) ? _arrayLikeKeys$1(object) : _baseKeys$1(object);
}

var keys_1$1 = keys$1;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn$1(object, iteratee) {
  return object && _baseFor$1(object, iteratee, keys_1$1);
}

var _baseForOwn$1 = baseForOwn$1;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1$1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach$1 = createBaseEach$1;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach$1 = _createBaseEach$1(_baseForOwn$1);

var _baseEach$1 = baseEach$1;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity$1(value) {
  return value;
}

var identity_1$1 = identity$1;

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction$1(value) {
  return typeof value == 'function' ? value : identity_1$1;
}

var _castFunction$1 = castFunction$1;

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach$1(collection, iteratee) {
  var func = isArray_1$1(collection) ? _arrayEach$1 : _baseEach$1;
  return func(collection, _castFunction$1(iteratee));
}

var forEach_1$1 = forEach$1;

var each$1 = forEach_1$1;

var Page =
/*#__PURE__*/
function (_Model) {
  _inherits(Page, _Model);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "endpoint",
    value: function endpoint() {
      return 'page';
    }
  }, {
    key: "uri",
    value: function uri(method) {
      return "".concat(this.endpoint(), "/").concat(this.get('id'));
    }
  }]);

  return Page;
}(Model);

var HttpConfig = {
  baseURL: 'https://giveworks.test/api/public/v1/'
};

var HttpErrorResponse = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "alert alert-danger",
      style: {
        'width': _vm.width,
        'min-width': _vm.minWidth,
        'max-width': _vm.maxWidth
      }
    }, [_c('h2', {
      staticClass: "alert-header"
    }, [_vm._v(_vm._s(_vm.header))]), _vm._v(" "), _c('div', {
      staticClass: "alert-body"
    }, [_vm._v(" " + _vm._s(_vm.error.message)), _c('br'), _vm._v(" " + _vm._s(_vm.error.response.data.message) + " ")])]);
  },
  staticRenderFns: [],
  name: 'http-error-response',
  props: {
    'width': String,
    'min-width': String,
    'max-width': String,
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

var FormComponent = {
  props: {
    submitting: Boolean,
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
  computed: {
    commentMessage: function commentMessage() {
      return this.page.options.comment_message || this.page.site.config.giveworks.comment_mess;
    },
    optinMessage: function optinMessage() {
      return this.page.options.optin_message || this.page.site.config.giveworks.optin_mess;
    },
    buttonLabel: function buttonLabel() {
      return this.page.options.button;
    }
  }
};

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex$1 = baseFindIndex$1;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear$1 = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq$1(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1$1 = eq$1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$1(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf$1 = assocIndexOf$1;

/** Used for built-in method references. */
var arrayProto$2 = Array.prototype;

/** Built-in value references. */
var splice$2 = arrayProto$2.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = _assocIndexOf$1(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice$2.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete$1 = listCacheDelete$1;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = _assocIndexOf$1(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet$1 = listCacheGet$1;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return _assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas$1 = listCacheHas$1;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = _assocIndexOf$1(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet$1 = listCacheSet$1;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$1.prototype.clear = _listCacheClear$1;
ListCache$1.prototype['delete'] = _listCacheDelete$1;
ListCache$1.prototype.get = _listCacheGet$1;
ListCache$1.prototype.has = _listCacheHas$1;
ListCache$1.prototype.set = _listCacheSet$1;

var _ListCache$1 = ListCache$1;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new _ListCache$1;
  this.size = 0;
}

var _stackClear$1 = stackClear$1;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete$1 = stackDelete$1;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet$1 = stackGet$1;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas$1 = stackHas$1;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = _root$1['__core-js_shared__'];

var _coreJsData$1 = coreJsData$1;

/** Used to detect methods masquerading as native. */
var maskSrcKey$1 = (function() {
  var uid = /[^.]+$/.exec(_coreJsData$1 && _coreJsData$1.keys && _coreJsData$1.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey$1 && (maskSrcKey$1 in func);
}

var _isMasked$1 = isMasked$1;

/** Used for built-in method references. */
var funcProto$3 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$3 = funcProto$3.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$3.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource$1 = toSource$1;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$4 = Function.prototype,
    objectProto$24 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$4 = funcProto$4.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$19 = objectProto$24.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative$1 = RegExp('^' +
  funcToString$4.call(hasOwnProperty$19).replace(reRegExpChar$1, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject_1$1(value) || _isMasked$1(value)) {
    return false;
  }
  var pattern = isFunction_1$1(value) ? reIsNative$1 : reIsHostCtor$1;
  return pattern.test(_toSource$1(value));
}

var _baseIsNative$1 = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue$1 = getValue$1;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$1(object, key) {
  var value = _getValue$1(object, key);
  return _baseIsNative$1(value) ? value : undefined;
}

var _getNative$1 = getNative$1;

/* Built-in method references that are verified to be native. */
var Map$2 = _getNative$1(_root$1, 'Map');

var _Map$1 = Map$2;

/* Built-in method references that are verified to be native. */
var nativeCreate$1 = _getNative$1(Object, 'create');

var _nativeCreate$1 = nativeCreate$1;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = _nativeCreate$1 ? _nativeCreate$1(null) : {};
  this.size = 0;
}

var _hashClear$1 = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete$1 = hashDelete$1;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$3 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$25 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$20 = objectProto$25.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (_nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$3 ? undefined : result;
  }
  return hasOwnProperty$20.call(data, key) ? data[key] : undefined;
}

var _hashGet$1 = hashGet$1;

/** Used for built-in method references. */
var objectProto$26 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$21 = objectProto$26.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return _nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$21.call(data, key);
}

var _hashHas$1 = hashHas$1;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$4 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate$1 && value === undefined) ? HASH_UNDEFINED$4 : value;
  return this;
}

var _hashSet$1 = hashSet$1;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = _hashClear$1;
Hash$1.prototype['delete'] = _hashDelete$1;
Hash$1.prototype.get = _hashGet$1;
Hash$1.prototype.has = _hashHas$1;
Hash$1.prototype.set = _hashSet$1;

var _Hash$1 = Hash$1;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash$1,
    'map': new (_Map$1 || _ListCache$1),
    'string': new _Hash$1
  };
}

var _mapCacheClear$1 = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable$1 = isKeyable$1;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$1(map, key) {
  var data = map.__data__;
  return _isKeyable$1(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData$1 = getMapData$1;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = _getMapData$1(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete$1 = mapCacheDelete$1;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return _getMapData$1(this, key).get(key);
}

var _mapCacheGet$1 = mapCacheGet$1;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return _getMapData$1(this, key).has(key);
}

var _mapCacheHas$1 = mapCacheHas$1;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = _getMapData$1(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet$1 = mapCacheSet$1;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$1.prototype.clear = _mapCacheClear$1;
MapCache$1.prototype['delete'] = _mapCacheDelete$1;
MapCache$1.prototype.get = _mapCacheGet$1;
MapCache$1.prototype.has = _mapCacheHas$1;
MapCache$1.prototype.set = _mapCacheSet$1;

var _MapCache$1 = MapCache$1;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache$1) {
    var pairs = data.__data__;
    if (!_Map$1 || (pairs.length < LARGE_ARRAY_SIZE$1 - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet$1 = stackSet$1;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$1(entries) {
  var data = this.__data__ = new _ListCache$1(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$1.prototype.clear = _stackClear$1;
Stack$1.prototype['delete'] = _stackDelete$1;
Stack$1.prototype.get = _stackGet$1;
Stack$1.prototype.has = _stackHas$1;
Stack$1.prototype.set = _stackSet$1;

var _Stack$1 = Stack$1;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$5 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED$5);
  return this;
}

var _setCacheAdd$1 = setCacheAdd$1;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas$1(value) {
  return this.__data__.has(value);
}

var _setCacheHas$1 = setCacheHas$1;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$1(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache$1;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$1.prototype.add = SetCache$1.prototype.push = _setCacheAdd$1;
SetCache$1.prototype.has = _setCacheHas$1;

var _SetCache$1 = SetCache$1;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome$1 = arraySome$1;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas$1(cache, key) {
  return cache.has(key);
}

var _cacheHas$1 = cacheHas$1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$6 = 1,
    COMPARE_UNORDERED_FLAG$4 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$1(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$6,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$4) ? new _SetCache$1 : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome$1(other, function(othValue, othIndex) {
            if (!_cacheHas$1(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays$1 = equalArrays$1;

/** Built-in value references. */
var Uint8Array$1 = _root$1.Uint8Array;

var _Uint8Array$1 = Uint8Array$1;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray$1 = mapToArray$1;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray$1(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray$1 = setToArray$1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$7 = 1,
    COMPARE_UNORDERED_FLAG$5 = 2;

/** `Object#toString` result references. */
var boolTag$5 = '[object Boolean]',
    dateTag$5 = '[object Date]',
    errorTag$4 = '[object Error]',
    mapTag$8 = '[object Map]',
    numberTag$6 = '[object Number]',
    regexpTag$5 = '[object RegExp]',
    setTag$8 = '[object Set]',
    stringTag$6 = '[object String]',
    symbolTag$4 = '[object Symbol]';

var arrayBufferTag$5 = '[object ArrayBuffer]',
    dataViewTag$6 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$3 = _Symbol$1 ? _Symbol$1.prototype : undefined,
    symbolValueOf$2 = symbolProto$3 ? symbolProto$3.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$6:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$5:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array$1(object), new _Uint8Array$1(other))) {
        return false;
      }
      return true;

    case boolTag$5:
    case dateTag$5:
    case numberTag$6:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1$1(+object, +other);

    case errorTag$4:
      return object.name == other.name && object.message == other.message;

    case regexpTag$5:
    case stringTag$6:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$8:
      var convert = _mapToArray$1;

    case setTag$8:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$7;
      convert || (convert = _setToArray$1);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$5;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$4:
      if (symbolValueOf$2) {
        return symbolValueOf$2.call(object) == symbolValueOf$2.call(other);
      }
  }
  return false;
}

var _equalByTag$1 = equalByTag$1;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush$1(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush$1 = arrayPush$1;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1$1(object) ? result : _arrayPush$1(result, symbolsFunc(object));
}

var _baseGetAllKeys$1 = baseGetAllKeys$1;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter$1 = arrayFilter$1;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray$1() {
  return [];
}

var stubArray_1$1 = stubArray$1;

/** Used for built-in method references. */
var objectProto$27 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$3 = objectProto$27.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$2 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$1 = !nativeGetSymbols$2 ? stubArray_1$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter$1(nativeGetSymbols$2(object), function(symbol) {
    return propertyIsEnumerable$3.call(object, symbol);
  });
};

var _getSymbols$1 = getSymbols$1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$1(object) {
  return _baseGetAllKeys$1(object, keys_1$1, _getSymbols$1);
}

var _getAllKeys$1 = getAllKeys$1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$8 = 1;

/** Used for built-in method references. */
var objectProto$28 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$22 = objectProto$28.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$8,
      objProps = _getAllKeys$1(object),
      objLength = objProps.length,
      othProps = _getAllKeys$1(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$22.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects$1 = equalObjects$1;

/* Built-in method references that are verified to be native. */
var DataView$1 = _getNative$1(_root$1, 'DataView');

var _DataView$1 = DataView$1;

/* Built-in method references that are verified to be native. */
var Promise$2 = _getNative$1(_root$1, 'Promise');

var _Promise$1 = Promise$2;

/* Built-in method references that are verified to be native. */
var Set$1 = _getNative$1(_root$1, 'Set');

var _Set$1 = Set$1;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = _getNative$1(_root$1, 'WeakMap');

var _WeakMap$1 = WeakMap$1;

/** `Object#toString` result references. */
var mapTag$9 = '[object Map]',
    objectTag$6 = '[object Object]',
    promiseTag$1 = '[object Promise]',
    setTag$9 = '[object Set]',
    weakMapTag$4 = '[object WeakMap]';

var dataViewTag$7 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString$1 = _toSource$1(_DataView$1),
    mapCtorString$1 = _toSource$1(_Map$1),
    promiseCtorString$1 = _toSource$1(_Promise$1),
    setCtorString$1 = _toSource$1(_Set$1),
    weakMapCtorString$1 = _toSource$1(_WeakMap$1);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = _baseGetTag$1;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView$1 && getTag$1(new _DataView$1(new ArrayBuffer(1))) != dataViewTag$7) ||
    (_Map$1 && getTag$1(new _Map$1) != mapTag$9) ||
    (_Promise$1 && getTag$1(_Promise$1.resolve()) != promiseTag$1) ||
    (_Set$1 && getTag$1(new _Set$1) != setTag$9) ||
    (_WeakMap$1 && getTag$1(new _WeakMap$1) != weakMapTag$4)) {
  getTag$1 = function(value) {
    var result = _baseGetTag$1(value),
        Ctor = result == objectTag$6 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource$1(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString$1: return dataViewTag$7;
        case mapCtorString$1: return mapTag$9;
        case promiseCtorString$1: return promiseTag$1;
        case setCtorString$1: return setTag$9;
        case weakMapCtorString$1: return weakMapTag$4;
      }
    }
    return result;
  };
}

var _getTag$1 = getTag$1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$9 = 1;

/** `Object#toString` result references. */
var argsTag$6 = '[object Arguments]',
    arrayTag$4 = '[object Array]',
    objectTag$7 = '[object Object]';

/** Used for built-in method references. */
var objectProto$29 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$23 = objectProto$29.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1$1(object),
      othIsArr = isArray_1$1(other),
      objTag = objIsArr ? arrayTag$4 : _getTag$1(object),
      othTag = othIsArr ? arrayTag$4 : _getTag$1(other);

  objTag = objTag == argsTag$6 ? objectTag$7 : objTag;
  othTag = othTag == argsTag$6 ? objectTag$7 : othTag;

  var objIsObj = objTag == objectTag$7,
      othIsObj = othTag == objectTag$7,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1$1(object)) {
    if (!isBuffer_1$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack$1);
    return (objIsArr || isTypedArray_1$1(object))
      ? _equalArrays$1(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag$1(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$9)) {
    var objIsWrapped = objIsObj && hasOwnProperty$23.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$23.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack$1);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack$1);
  return _equalObjects$1(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep$1 = baseIsEqualDeep$1;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$1(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1$1(value) && !isObjectLike_1$1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep$1(value, other, bitmask, customizer, baseIsEqual$1, stack);
}

var _baseIsEqual$1 = baseIsEqual$1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$10 = 1,
    COMPARE_UNORDERED_FLAG$6 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack$1;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$10 | COMPARE_UNORDERED_FLAG$6, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch$1 = baseIsMatch$1;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable$1(value) {
  return value === value && !isObject_1$1(value);
}

var _isStrictComparable$1 = isStrictComparable$1;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData$1(object) {
  var result = keys_1$1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable$1(value)];
  }
  return result;
}

var _getMatchData$1 = getMatchData$1;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable$1(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable$1 = matchesStrictComparable$1;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches$1(source) {
  var matchData = _getMatchData$1(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch$1(object, source, matchData);
  };
}

var _baseMatches$1 = baseMatches$1;

/** `Object#toString` result references. */
var symbolTag$5 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1$1(value) && _baseGetTag$1(value) == symbolTag$5);
}

var isSymbol_1$1 = isSymbol$1;

/** Used to match property names within property paths. */
var reIsDeepProp$1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp$1 = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$1(value, object) {
  if (isArray_1$1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1$1(value)) {
    return true;
  }
  return reIsPlainProp$1.test(value) || !reIsDeepProp$1.test(value) ||
    (object != null && value in Object(object));
}

var _isKey$1 = isKey$1;

/** Error message constants. */
var FUNC_ERROR_TEXT$3 = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT$3);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || _MapCache$1);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = _MapCache$1;

var memoize_1$1 = memoize$1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE$1 = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize_1$1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE$1) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped$1 = memoizeCapped$1;

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar$1 = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = _memoizeCapped$1(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName$1, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar$1, '$1') : (number || match));
  });
  return result;
});

var _stringToPath$1 = stringToPath$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap$1 = arrayMap$1;

/** Used as references for various `Number` constants. */
var INFINITY$3 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$4 = _Symbol$1 ? _Symbol$1.prototype : undefined,
    symbolToString$1 = symbolProto$4 ? symbolProto$4.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1$1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap$1(value, baseToString$1) + '';
  }
  if (isSymbol_1$1(value)) {
    return symbolToString$1 ? symbolToString$1.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$3) ? '-0' : result;
}

var _baseToString$1 = baseToString$1;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : _baseToString$1(value);
}

var toString_1$1 = toString$1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$1(value, object) {
  if (isArray_1$1(value)) {
    return value;
  }
  return _isKey$1(value, object) ? [value] : _stringToPath$1(toString_1$1(value));
}

var _castPath$1 = castPath$1;

/** Used as references for various `Number` constants. */
var INFINITY$4 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$1(value) {
  if (typeof value == 'string' || isSymbol_1$1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$4) ? '-0' : result;
}

var _toKey$1 = toKey$1;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$1(object, path) {
  path = _castPath$1(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey$1(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet$1 = baseGet$1;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$1(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet$1(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1$1 = get$1;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn$1 = baseHasIn$1;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath$1(object, path, hasFunc) {
  path = _castPath$1(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey$1(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1$1(length) && _isIndex$1(key, length) &&
    (isArray_1$1(object) || isArguments_1$1(object));
}

var _hasPath$1 = hasPath$1;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn$1(object, path) {
  return object != null && _hasPath$1(object, path, _baseHasIn$1);
}

var hasIn_1$1 = hasIn$1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$11 = 1,
    COMPARE_UNORDERED_FLAG$7 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty$1(path, srcValue) {
  if (_isKey$1(path) && _isStrictComparable$1(srcValue)) {
    return _matchesStrictComparable$1(_toKey$1(path), srcValue);
  }
  return function(object) {
    var objValue = get_1$1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1$1(object, path)
      : _baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$11 | COMPARE_UNORDERED_FLAG$7);
  };
}

var _baseMatchesProperty$1 = baseMatchesProperty$1;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty$1(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty$1 = baseProperty$1;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep$1(path) {
  return function(object) {
    return _baseGet$1(object, path);
  };
}

var _basePropertyDeep$1 = basePropertyDeep$1;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property$1(path) {
  return _isKey$1(path) ? _baseProperty$1(_toKey$1(path)) : _basePropertyDeep$1(path);
}

var property_1$1 = property$1;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee$1(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1$1;
  }
  if (typeof value == 'object') {
    return isArray_1$1(value)
      ? _baseMatchesProperty$1(value[0], value[1])
      : _baseMatches$1(value);
  }
  return property_1$1(value);
}

var _baseIteratee$1 = baseIteratee$1;

/** Used as references for various `Number` constants. */
var NAN$1 = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim$1 = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$1 = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal$1 = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt$1 = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1$1(value)) {
    return NAN$1;
  }
  if (isObject_1$1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1$1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim$1, '');
  var isBinary = reIsBinary$1.test(value);
  return (isBinary || reIsOctal$1.test(value))
    ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$1.test(value) ? NAN$1 : +value);
}

var toNumber_1$1 = toNumber$1;

/** Used as references for various `Number` constants. */
var INFINITY$5 = 1 / 0,
    MAX_INTEGER$1 = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1$1(value);
  if (value === INFINITY$5 || value === -INFINITY$5) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER$1;
  }
  return value === value ? value : 0;
}

var toFinite_1$1 = toFinite$1;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger$1(value) {
  var result = toFinite_1$1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1$1 = toInteger$1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$5 = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex$1(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger_1$1(fromIndex);
  if (index < 0) {
    index = nativeMax$5(length + index, 0);
  }
  return _baseFindIndex$1(array, _baseIteratee$1(predicate, 3), index);
}

var findIndex_1$1 = findIndex$1;

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var compact_1 = compact;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap$1(collection, iteratee) {
  var index = -1,
      result = isArrayLike_1$1(collection) ? Array(collection.length) : [];

  _baseEach$1(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap$1 = baseMap$1;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map$1(collection, iteratee) {
  var func = isArray_1$1(collection) ? _arrayMap$1 : _baseMap$1;
  return func(collection, _baseIteratee$1(iteratee, 3));
}

var map_1$1 = map$1;

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

/** `Object#toString` result references. */
var mapTag$10 = '[object Map]',
    setTag$10 = '[object Set]';

/** Used for built-in method references. */
var objectProto$30 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$24 = objectProto$30.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_1$1(value) &&
      (isArray_1$1(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer_1$1(value) || isTypedArray_1$1(value) || isArguments_1$1(value))) {
    return !value.length;
  }
  var tag = _getTag$1(value);
  if (tag == mapTag$10 || tag == setTag$10) {
    return !value.size;
  }
  if (_isPrototype$1(value)) {
    return !_baseKeys$1(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty$24.call(value, key)) {
      return false;
    }
  }
  return true;
}

var isEmpty_1 = isEmpty;

/** Error message constants. */
var FUNC_ERROR_TEXT$4 = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate$1(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$4);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

var negate_1$1 = negate$1;

var defineProperty$1 = (function() {
  try {
    var func = _getNative$1(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty$2 = defineProperty$1;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue$1(object, key, value) {
  if (key == '__proto__' && _defineProperty$2) {
    _defineProperty$2(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue$1 = baseAssignValue$1;

/** Used for built-in method references. */
var objectProto$31 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$25 = objectProto$31.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$25.call(object, key) && eq_1$1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue$1(object, key, value);
  }
}

var _assignValue$1 = assignValue$1;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet$1(object, path, value, customizer) {
  if (!isObject_1$1(object)) {
    return object;
  }
  path = _castPath$1(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey$1(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject_1$1(objValue)
          ? objValue
          : (_isIndex$1(path[index + 1]) ? [] : {});
      }
    }
    _assignValue$1(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet$1 = baseSet$1;

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy$1(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = _baseGet$1(object, path);

    if (predicate(value, path)) {
      _baseSet$1(result, _castPath$1(path, object), value);
    }
  }
  return result;
}

var _basePickBy$1 = basePickBy$1;

/** Built-in value references. */
var getPrototype$1 = _overArg$1(Object.getPrototypeOf, Object);

var _getPrototype$1 = getPrototype$1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$3 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn$1 = !nativeGetSymbols$3 ? stubArray_1$1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush$1(result, _getSymbols$1(object));
    object = _getPrototype$1(object);
  }
  return result;
};

var _getSymbolsIn$1 = getSymbolsIn$1;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn$1 = nativeKeysIn$1;

/** Used for built-in method references. */
var objectProto$32 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$26 = objectProto$32.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn$1(object) {
  if (!isObject_1$1(object)) {
    return _nativeKeysIn$1(object);
  }
  var isProto = _isPrototype$1(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$26.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn$1 = baseKeysIn$1;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$2(object) {
  return isArrayLike_1$1(object) ? _arrayLikeKeys$1(object, true) : _baseKeysIn$1(object);
}

var keysIn_1$1 = keysIn$2;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn$1(object) {
  return _baseGetAllKeys$1(object, keysIn_1$1, _getSymbolsIn$1);
}

var _getAllKeysIn$1 = getAllKeysIn$1;

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy$1(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = _arrayMap$1(_getAllKeysIn$1(object), function(prop) {
    return [prop];
  });
  predicate = _baseIteratee$1(predicate);
  return _basePickBy$1(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

var pickBy_1$1 = pickBy$1;

/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
function omitBy$1(object, predicate) {
  return pickBy_1$1(object, negate_1$1(_baseIteratee$1(predicate)));
}

var omitBy_1$1 = omitBy$1;

function script$1(url, callback) {
  var lastEvent,
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
        script.setAttribute('charset', 'utf-8');
        heads[0].appendChild(script);
        dispatchEvent(new Event('load'));
        handleCallback();
      }
    }
  } else {
    callback(lastEvent);
  }

  return script;
}

var GoogleAutocompleteList = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "autocomplete-list-wrapper"
    }, [_c('ul', {
      staticClass: "autocomplete-list"
    }, _vm._l(_vm.items, function (item) {
      return _c('li', {
        staticClass: "autocomplete-list-item",
        on: {
          "mouseenter": function mouseenter($event) {
            _vm.focus($event);
          },
          "mouseleave": function mouseleave($event) {
            _vm.blur($event);
          }
        }
      }, [_c('a', {
        attrs: {
          "href": "#"
        },
        on: {
          "click": function click($event) {
            $event.preventDefault();

            _vm.select($event, item);
          }
        }
      }, [_c('span', {
        staticClass: "autocomplete-list-item-icon"
      }), _vm._v(" "), _c('span', {
        staticClass: "autocomplete-list-item-label",
        domProps: {
          "innerHTML": _vm._s(item[_vm.display])
        }
      })])]);
    }))]);
  },
  staticRenderFns: [],
  name: 'google-autocomplete-field',
  props: {
    'items': {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    'display': {
      type: String,
      default: 'description'
    }
  },
  methods: {
    hasFocus: function hasFocus() {
      return !!this.$el.querySelector('.is-focused');
    },
    focus: function focus(event) {
      if (this.hasFocus()) {
        this.$el.querySelector('.is-focused').classList.remove('is-focused');
      }

      event.currentTarget.classList.add('is-focused');
      this.$parent.$emit('prediction:focus', event);
    },
    blur: function blur(event) {
      event.currentTarget.classList.remove('is-focused');
      this.$parent.$emit('prediction:blur', event);
    },
    select: function select(event, item) {
      this.$parent.$emit('prediction:select', item);
    }
  }
};

var KEYCODE = {
  ESC: 27,
  UP: 38,
  DOWN: 40,
  ENTER: 13
};
var API_REQUEST_OPTIONS = ['bounds', 'location', 'component-restrictions', 'offset', 'radius', 'types'];
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

var GoogleAutocompleteField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "form-group autocomplete-field",
      class: {
        'was-validated': _vm.error || _vm.errors[_vm.name]
      }
    }, [_vm.label ? _c('label', {
      staticClass: "text-bold",
      attrs: {
        "for": _vm.id || _vm.name
      },
      domProps: {
        "innerHTML": _vm._s(_vm.label)
      }
    }) : _vm._e(), _vm._v(" "), _c('input', {
      staticClass: "form-control",
      class: {
        'is-invalid': _vm.error || _vm.errors[_vm.name]
      },
      attrs: {
        "type": "text",
        "name": _vm.name,
        "id": _vm.id || _vm.name,
        "autocomplete": "new-password"
      },
      on: {
        "keyup": _vm.keyup,
        "blur": function blur($event) {
          _vm.blur($event);
        },
        "focus": _vm.show
      }
    }), _vm._v(" "), _vm.error || _vm.errors[_vm.name] ? _c('div', {
      staticClass: "invalid-feedback",
      domProps: {
        "innerHTML": _vm._s(_vm.error || _vm.errors[_vm.name].join('<br>'))
      }
    }) : _vm._e(), _vm._v(" "), _vm.predictions && _vm.showPredictions ? _c('google-autocomplete-list', {
      attrs: {
        "items": _vm.predictions
      }
    }) : _vm._e()], 1);
  },
  staticRenderFns: [],
  name: 'google-autocomplete-field',
  components: {
    GoogleAutocompleteList: GoogleAutocompleteList
  },
  props: {
    // Basic Display options
    'id': {
      type: [Boolean, String],
      default: false
    },
    'label': {
      required: true,
      type: String
    },
    'name': {
      required: true,
      type: String
    },
    'errors': {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    'error': {
      type: [Boolean, String],
      required: false,
      default: false
    },
    // Google Maps options
    'api-key': {
      required: true,
      type: String
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
    },
    // Event callback override parameters...
    'prediction-blur': {
      type: Function,
      default: function _default(event) {
        this.$focus = false;
      }
    },
    'prediction-focus': {
      type: Function,
      default: function _default(event) {
        this.$focus = event.target;
      }
    },
    'prediction-select': {
      type: Function,
      default: function _default(item) {
        this.select(item);
      }
    },
    'place-changed': {
      type: Function,
      default: function _default(place) {
        this.hide();
      }
    }
  },
  data: function data() {
    return {
      predictions: false,
      showPredictions: false
    };
  },
  methods: {
    getInputElement: function getInputElement() {
      return this.$el.querySelector('input');
    },
    getRequestOptions: function getRequestOptions() {
      var _this = this;

      var options = {
        input: this.getInputElement().value
      };

      each$1(API_REQUEST_OPTIONS, function (key) {
        options[key] = _this[key];
      });

      return omitBy_1$1(options, isEmpty_1);
    },
    select: function select(item) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.$geocoder.geocode({
          placeId: item.place_id
        }, function (response, status) {
          switch (status) {
            case google.maps.places.PlacesServiceStatus.OK:
              _this2.$emit('place:changed', response[0]);

              _this2.$emit('autofill', response[0]);

              resolve(response);
              break;

            default:
              reject(status);
          }
        });
      });
    },
    search: function search() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        if (!_this3.getInputElement().value) {
          _this3.predictions = false;
          _this3.showPredictions = false;
          reject();
        } else {
          _this3.$autocompleteService.getPlacePredictions(_this3.getRequestOptions(), function (response, status) {
            switch (status) {
              case google.maps.places.PlacesServiceStatus.OK:
                resolve(response);
                break;

              default:
                reject(status);
            }
          });
        }
      });
    },
    blur: function blur(event) {
      if (!this.$el.querySelector('.is-focused')) {
        this.hide();
      }
    },
    keyup: function keyup(event) {
      var _this4 = this;

      switch (event.keyCode) {
        case KEYCODE.ENTER:
          if (this.$el.querySelector('.is-focused')) {
            this.$el.querySelector('.is-focused a').click();
          }

          return;

        case KEYCODE.ESC:
          this.hide();
          this.getInputElement().blur();
          return;

        case KEYCODE.UP:
          this.up();
          return;

        case KEYCODE.DOWN:
          this.down();
          return;
      }

      this.search().then(function (response) {
        _this4.showPredictions = true;
        _this4.predictions = response;
      }, function (error) {
        _this4.predictions = false;
      });
    },
    hide: function hide() {
      this.showPredictions = false;
    },
    show: function show() {
      this.showPredictions = true;
    },
    up: function up() {
      if (this.$focus) {
        this.$focus.classList.remove('is-focused');
      }

      this.$focus = !this.$focus || !this.$focus.previousSibling ? this.$el.querySelector('.autocomplete-list-item:last-child') : this.$focus.previousSibling;
      this.$focus.classList.add('is-focused');
    },
    down: function down() {
      if (this.$focus) {
        this.$focus.classList.remove('is-focused');
      }

      this.$focus = !this.$focus || !this.$focus.nextSibling ? this.$el.querySelector('.autocomplete-list-item:first-child') : this.$focus.nextSibling;
      this.$focus.classList.add('is-focused');
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    script$1('https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&libraries=places', function () {
      _this5.$geocoder = new google.maps.Geocoder();
      _this5.$autocompleteService = new google.maps.places.AutocompleteService();
    });
    this.$on('place:changed', this.placeChanged);
    this.$on('prediction:blur', this.predictionBlur);
    this.$on('prediction:focus', this.predictionFocus);
    this.$on('prediction:select', this.predictionSelect);
  }
};

var ContactInfoFieldset = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [_c('fieldset', {
      staticClass: "mb-4"
    }, [_c('legend', [_vm._v("Your information")]), _vm._v(" "), _vm.page.options.add_title ? _c('select-field', {
      attrs: {
        "name": "title",
        "label": "Title",
        "options": _vm.titles,
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.title,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "title", $$v);
        },
        expression: "form.title"
      }
    }) : _vm._e(), _vm._v(" "), _c('input-field', {
      attrs: {
        "name": "first",
        "label": "First Name",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.first,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "first", $$v);
        },
        expression: "form.first"
      }
    }), _vm._v(" "), _c('input-field', {
      attrs: {
        "name": "last",
        "label": "Last Name",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.last,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "last", $$v);
        },
        expression: "form.last"
      }
    }), _vm._v(" "), _c('input-field', {
      attrs: {
        "type": "email",
        "name": "email",
        "label": "Email",
        "placeholder": "you@example.com",
        "error": _vm.errors.email && _vm.errors.email.join('<br>')
      },
      model: {
        value: _vm.form.email,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "email", $$v);
        },
        expression: "form.email"
      }
    }), _vm._v(" "), _vm.page.options.add_phone ? _c('input-field', {
      attrs: {
        "name": "phone",
        "label": "Phone Number",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.phone,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "phone", $$v);
        },
        expression: "form.phone"
      }
    }) : _vm._e(), _vm._v(" "), _vm.showAddress || _vm.page.options.add_street ? _c('input-field', {
      attrs: {
        "name": "street",
        "label": "Address",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.address,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "address", $$v);
        },
        expression: "form.address"
      }
    }) : _vm._e(), _vm._v(" "), _vm.showAddress || _vm.page.options.add_city || _vm.page.options.add_zip ? _c('div', {
      staticClass: "row"
    }, [_vm.showAddress || _vm.page.options.add_city ? _c('div', {
      staticClass: "col-sm-8"
    }, [_c('input-field', {
      attrs: {
        "name": "city",
        "label": "City",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.city,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "city", $$v);
        },
        expression: "form.city"
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm.showAddress || _vm.page.options.add_zip ? _c('div', {
      class: {
        'col-sm-4': _vm.showAddress || _vm.page.options.add_city,
        'col-sm-12': !_vm.page.options.add_city
      }
    }, [_c('input-field', {
      attrs: {
        "name": "zip",
        "label": "Zip",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.zip,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "zip", $$v);
        },
        expression: "form.zip"
      }
    })], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.showAddress || _vm.page.options.add_state ? _c('select-field', {
      attrs: {
        "name": "state",
        "label": "State",
        "options": _vm.states,
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.state,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "state", $$v);
        },
        expression: "form.state"
      }
    }) : _vm._e(), _vm._v(" "), _vm.page.options.add_phone ? _c('input-field', {
      attrs: {
        "name": "phone",
        "label": "Phone Number",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.phone,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "phone", $$v);
        },
        expression: "form.phone"
      }
    }) : _vm._e()], 1), _vm._v(" "), _vm.shouldShowEmployment ? _c('fieldset', [_c('legend', [_vm._v("Employment Information")]), _vm._v(" "), !_vm.recurring ? _c('p', [_c('small', {
      staticClass: "text-muted",
      domProps: {
        "innerHTML": _vm._s(_vm.employmentOccurMessage)
      }
    })]) : _vm._e(), _vm._v(" "), !_vm.isRetired ? _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-6"
    }, [_c('input-field', {
      attrs: {
        "id": "employer",
        "name": "employer",
        "label": "Employer",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.employer,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "employer", $$v);
        },
        expression: "form.employer"
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "col-md-6"
    }, [_c('input-field', {
      attrs: {
        "id": "occupation",
        "name": "occupation",
        "label": "Occupation",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.occupation,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "occupation", $$v);
        },
        expression: "form.occupation"
      }
    })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "form-group"
    }, [_c('label', {
      staticClass: "custom-control custom-checkbox"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.retired,
        expression: "form.retired"
      }],
      staticClass: "custom-control-input",
      attrs: {
        "type": "checkbox",
        "name": "retired",
        "value": "1"
      },
      domProps: {
        "checked": Array.isArray(_vm.form.retired) ? _vm._i(_vm.form.retired, "1") > -1 : _vm.form.retired
      },
      on: {
        "change": [function ($event) {
          var $$a = _vm.form.retired,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;

          if (Array.isArray($$a)) {
            var $$v = "1",
                $$i = _vm._i($$a, $$v);

            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.form, "retired", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.form, "retired", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.form, "retired", $$c);
          }
        }, function ($event) {
          _vm.setRetired($event.target.checked);
        }]
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "custom-control-indicator"
    }), _vm._v(" "), _c('small', {
      staticClass: "custom-control-label text-muted form-text"
    }, [_vm._v("I'm retired")])])])]) : _vm._e()]);
  },
  staticRenderFns: [],
  name: 'contact-info-fieldset',
  components: {
    GoogleAutocompleteField: GoogleAutocompleteField
  },
  mixins: [FormComponent],
  props: {
    showAddress: Boolean
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
    onAutofill: function onAutofill(place) {
      var addressComponents = {
        'address': ['street_number', 'route'],
        'city': ['sublocality', 'locality'],
        'state': ['administrative_area_level_1'],
        'zip': ['postal_code']
      };

      each$1(addressComponents, function (parts, field) {
        var part = compact_1(map_1$1(place.address_components, function (component) {
          return findIndex_1$1(component.types, function (part) {
            return parts.indexOf(part) !== -1;
          }) !== -1 ? component.short_name : null;
        })).join(' ');

        console.log(field, part); //this.form[field] = part;
      });
    },
    setRetired: function setRetired(isChecked) {
      this.occupation = this.employer = isChecked ? 'Retired' : '';
    }
  },
  created: function created() {
    var _this = this;

    this.$dispatch.on('place:changed', function (place) {
      _this.$el.querySelector('[name="street"]').value = 'test';
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$dispatch.off('place:changed');
  }
};

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject$1(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue$1(object, key, newValue);
    } else {
      _assignValue$1(object, key, newValue);
    }
  }
  return object;
}

var _copyObject$1 = copyObject$1;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply$1 = apply$1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$6 = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest$1(func, start, transform) {
  start = nativeMax$6(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$6(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply$1(func, this, otherArgs);
  };
}

var _overRest$1 = overRest$1;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant$1(value) {
  return function() {
    return value;
  };
}

var constant_1$1 = constant$1;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString$1 = !_defineProperty$2 ? identity_1$1 : function(func, string) {
  return _defineProperty$2(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1$1(string),
    'writable': true
  });
};

var _baseSetToString$1 = baseSetToString$1;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT$1 = 800,
    HOT_SPAN$1 = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow$1 = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut$1(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow$1(),
        remaining = HOT_SPAN$1 - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT$1) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut$1 = shortOut$1;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString$1 = _shortOut$1(_baseSetToString$1);

var _setToString$1 = setToString$1;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest$1(func, start) {
  return _setToString$1(_overRest$1(func, start, identity_1$1), func + '');
}

var _baseRest$1 = baseRest$1;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall$1(value, index, object) {
  if (!isObject_1$1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1$1(object) && _isIndex$1(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1$1(object[index], value);
  }
  return false;
}

var _isIterateeCall$1 = isIterateeCall$1;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner$1(assigner) {
  return _baseRest$1(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall$1(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner$1 = createAssigner$1;

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn$1 = _createAssigner$1(function(object, source) {
  _copyObject$1(source, keysIn_1$1(source), object);
});

var assignIn_1$1 = assignIn$1;

var extend$1 = assignIn_1$1;

var Gateway = function Gateway(options) {
  _classCallCheck(this, Gateway);

  this.options = options;

  if (!this.options) {
    throw new Error('A gateway must have some options passed to it!');
  }
};

let icons = {};

var Icon = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{class:_vm.klass,style:(_vm.style),attrs:{"version":"1.1","role":_vm.label ? 'img' : 'presentation',"aria-label":_vm.label,"x":_vm.x,"y":_vm.y,"width":_vm.width,"height":_vm.height,"viewBox":_vm.box}},[_vm._t("default",[(_vm.icon && _vm.icon.paths)?_vm._l((_vm.icon.paths),function(path,i){return _c('path',_vm._b({key:`path-${i}`},'path',path,false))}):_vm._e(),_vm._v(" "),(_vm.icon && _vm.icon.polygons)?_vm._l((_vm.icon.polygons),function(polygon,i){return _c('polygon',_vm._b({key:`polygon-${i}`},'polygon',polygon,false))}):_vm._e(),_vm._v(" "),(_vm.icon && _vm.icon.raw)?[_c('g',{domProps:{"innerHTML":_vm._s(_vm.raw)}})]:_vm._e()])],2)},staticRenderFns: [],
  name: 'icon',
  props: {
    name: {
      type: String,
      validator (val) {
        if (val) {
          if (!(val in icons)) {
            console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${val}".` +
              `\nPlease make sure you have imported this icon before using it.`);
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
      raw = raw.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g, (match, quote, id) => {
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
}

let cursor = 0xd4937;
function getId () {
  return `fa-${(cursor++).toString(16)}`
}

var path = ["M93.6,27.1C87.6,34.2,78,39.8,68.4,39c-1.2-9.6,3.5-19.8,9-26.1c6-7.3,16.5-12.5,25-12.9", "C103.4,10,99.5,19.8,93.6,27.1 M102.3,40.9c-13.9-0.8-25.8,7.9-32.4,7.9c-6.7,0-16.8-7.5-27.8-7.3c-14.3,0.2-27.6,8.3-34.9,21.2", "c-15,25.8-3.9,64,10.6,85c7.1,10.4,15.6,21.8,26.8,21.4c10.6-0.4,14.8-6.9,27.6-6.9c12.9,0,16.6,6.9,27.8,6.7", "c11.6-0.2,18.9-10.4,26-20.8c8.1-11.8,11.4-23.3,11.6-23.9c-0.2-0.2-22.4-8.7-22.6-34.3c-0.2-21.4,17.5-31.6,18.3-32.2", "C123.3,42.9,107.7,41.3,102.3,40.9 M182.6,11.9v155.9h24.2v-53.3h33.5c30.6,0,52.1-21,52.1-51.4c0-30.4-21.1-51.2-51.3-51.2H182.6z", "M206.8,32.3h27.9c21,0,33,11.2,33,30.9c0,19.7-12,31-33.1,31h-27.8V32.3z M336.6,169c15.2,0,29.3-7.7,35.7-19.9h0.5v18.7h22.4V90.2", "c0-22.5-18-37-45.7-37c-25.7,0-44.7,14.7-45.4,34.9h21.8c1.8-9.6,10.7-15.9,22.9-15.9c14.8,0,23.1,6.9,23.1,19.6v8.6l-30.2,1.8", "c-28.1,1.7-43.3,13.2-43.3,33.2C298.4,155.6,314.1,169,336.6,169z M343.1,150.5c-12.9,0-21.1-6.2-21.1-15.7c0-9.8,7.9-15.5,23-16.4", "l26.9-1.7v8.8C371.9,140.1,359.5,150.5,343.1,150.5z M425.1,210.2c23.6,0,34.7-9,44.4-36.3L512,54.7h-24.6l-28.5,92.1h-0.5", "l-28.5-92.1h-25.3l41,113.5l-2.2,6.9c-3.7,11.7-9.7,16.2-20.4,16.2c-1.9,0-5.6-0.2-7.1-0.4v18.7C417.3,210,423.3,210.2,425.1,210.2z"].join("");
Icon.register({
  "apple-pay": {
    "width": 512,
    "height": 210.2,
    "paths": [{
      "d": path
    }]
  }
});

Icon.register({"credit-card":{"width":576,"height":512,"paths":[{"d":"M0 432C0 458.5 21.5 480 48 480H528C554.5 480 576 458.5 576 432V256H0V432zM192 364C192 357.4 197.4 352 204 352H340C346.6 352 352 357.4 352 364V404C352 410.6 346.6 416 340 416H204C197.4 416 192 410.6 192 404V364zM64 364C64 357.4 69.4 352 76 352H148C154.6 352 160 357.4 160 364V404C160 410.6 154.6 416 148 416H76C69.4 416 64 410.6 64 404V364zM576 80V128H0V80C0 53.5 21.5 32 48 32H528C554.5 32 576 53.5 576 80z"}]}});

var Stripe =
/*#__PURE__*/
function (_Api) {
  _inherits(Stripe, _Api);

  function Stripe() {
    _classCallCheck(this, Stripe);

    return _possibleConstructorReturn(this, (Stripe.__proto__ || Object.getPrototypeOf(Stripe)).apply(this, arguments));
  }

  _createClass(Stripe, [{
    key: "api",
    value: function api() {
      return 'App\\SiteApis\\Gateways\\Stripe';
    }
  }, {
    key: "buttons",
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
    key: "paymentRequest",
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
    key: "createToken",
    value: function createToken(card, options) {
      return this.stripe().createToken(card, options);
    }
  }, {
    key: "paymentRequestButton",
    value: function paymentRequestButton(paymentRequest) {
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
  }, {
    key: "card",
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
      return this.elements().create('card', extend$1({
        style: style
      }, options));
    }
  }, {
    key: "elements",
    value: function elements() {
      return this.stripe().elements();
    }
  }, {
    key: "stripe",
    value: function stripe() {
      if (!this.options.publishable_key) {
        throw new Error('This site API was authenticated using an older version of Giveworks. To use new version of Giveworks you must setup your Stripe account again.');
      }

      if (!this._stripe) {
        this._stripe = new window.Stripe(this.options.publishable_key);
      }

      return this._stripe;
    }
  }, {
    key: "script",
    value: function script(callback) {
      script$1('https://js.stripe.com/v3/', callback);
    }
  }]);

  return Stripe;
}(Gateway);

var App = {
  debug: true
};

var PayPal =
/*#__PURE__*/
function (_Api) {
  _inherits(PayPal, _Api);

  function PayPal() {
    _classCallCheck(this, PayPal);

    return _possibleConstructorReturn(this, (PayPal.__proto__ || Object.getPrototypeOf(PayPal)).apply(this, arguments));
  }

  _createClass(PayPal, [{
    key: "api",
    value: function api() {
      return 'App\\SiteApis\\Gateways\\PayPal';
    }
  }, {
    key: "buttons",
    value: function buttons() {
      return [{
        icon: 'paypal',
        label: 'PayPal',
        component: 'paypal-payment-button'
      }];
    }
  }, {
    key: "paypal",
    value: function paypal() {
      if (!this._paypal) {
        this._paypal = window.paypal;
      }

      return this._paypal;
    }
  }, {
    key: "button",
    value: function button(el, $dispatch) {
      var button = this.paypal().Button.render({
        // 'production' or 'sandbox'
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
        validate: function validate(actions) {
          button.amount ? actions.enable() : actions.disable();
          $dispatch.reply('paypal:enable', function (resolve, reject) {
            actions.enable();
            resolve(actions);
          });
          $dispatch.reply('paypal:disable', function (resolve, reject) {
            actions.disable();
            resolve(actions);
          });
          $dispatch.emit('paypal:validate', actions);
        },
        payment: function payment(data, actions) {
          var payment = actions.payment.create({
            payment: {
              transactions: [{
                amount: {
                  total: button.amount,
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
          $dispatch.emit('paypal:payment', payment);
          return payment;
        },
        onRender: function onRender() {
          $dispatch.emit('paypal:render', this);
        },
        onClick: function onClick(data) {
          $dispatch.emit('paypal:click', this, data);
        },
        onCancel: function onCancel(data, actions) {
          $dispatch.emit('paypal:cancel', data, actions);
        },
        onError: function onError(error) {
          $dispatch.emit('paypal:error', error);
        },
        onAuthorize: function onAuthorize(data, actions) {
          $dispatch.emit('paypal:authorize', data, actions);
        }
      }, el);
      return button;
    }
  }, {
    key: "script",
    value: function script(callback) {
      script$1('https://www.paypalobjects.com/api/checkout.js', callback);
    }
  }]);

  return PayPal;
}(Gateway);

var AuthorizetNet =
/*#__PURE__*/
function (_Api) {
  _inherits(AuthorizetNet, _Api);

  function AuthorizetNet() {
    _classCallCheck(this, AuthorizetNet);

    return _possibleConstructorReturn(this, (AuthorizetNet.__proto__ || Object.getPrototypeOf(AuthorizetNet)).apply(this, arguments));
  }

  _createClass(AuthorizetNet, [{
    key: "api",
    value: function api() {
      return 'App\\SiteApis\\Gateways\\AuthorizeNet';
    }
  }, {
    key: "buttons",
    value: function buttons() {
      return [{
        icon: 'credit-card',
        label: 'Credit Card',
        component: 'authorize-net-credit-card'
      }];
    }
  }, {
    key: "createToken",
    value: function createToken(card, callback) {
      return this.accept().dispatchData({
        cardData: card,
        authData: {
          apiLoginID: this.options.login_id,
          clientKey: this.options.public_key
        }
      }, callback);
    }
  }, {
    key: "accept",
    value: function accept() {
      if (!this._accept) {
        this._accept = window.Accept;
      }

      return this._accept;
    }
  }, {
    key: "script",
    value: function script(callback) {
      var url = App.debug ? // Is app in developer mode?
      'https://jstest.authorize.net/v1/Accept.js' : // Developer
      'https://js.authorize.net/v1/Accept.js'; // Production;

      script$1(url, callback);
    }
  }]);

  return AuthorizetNet;
}(Gateway);

var Gateways = {
  'PayPal': PayPal,
  'Stripe': Stripe,
  'Authorize.Net': AuthorizetNet
};
var instances = {};
function Gateway$1 (key, options) {
  if (_typeof(key) === 'object') {
    options = key.options;
    key = key.name;
  }

  if (!instances[key]) {
    var Api = Gateways[key];

    if (!Api) {
      throw new Error('"' + key + '" is not in the list of supported gateways. Open /Gateways/Gateway.vue and add it to the list.');
    }

    instances[key] = new Api(options);
  }

  return instances[key];
}

var StripeCreditCard = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "form-group",
      class: {
        'was-validated': !!_vm.errors.token
      }
    }, [_c('label', {
      staticClass: "d-block mt-3"
    }, [_c('div', {
      staticClass: "text-bold mb-2"
    }, [_vm._v("Credit Card")]), _vm._v(" "), _c('div', {
      staticClass: "form-control p-2",
      class: {
        'is-invalid': !!_vm.errors.token
      }
    }, [_c('div', {
      staticClass: "stripe-field"
    })]), _vm._v(" "), _vm.errors.token ? _c('div', {
      staticClass: "invalid-feedback",
      domProps: {
        "innerHTML": _vm._s(_vm.errors.token.join('<br>'))
      }
    }) : _vm._e()])]);
  },
  staticRenderFns: [],
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
  created: function created() {
    var _this = this;

    this.$submitEvent = this.$dispatch.on('form:submit', function (data) {
      _this.$card.blur();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$dispatch.off(this.$submitEvent);
  },
  mounted: function mounted() {
    var _this2 = this;

    var gateway = Gateway$1(this.gateway);
    this.$dispatch.request('submit:disable');
    gateway.script(function (event) {
      _this2.$card = gateway.card({
        hidePostalCode: _this2.hidePostalCode,
        value: {
          postalCode: _this2.form.zip
        }
      });

      _this2.$card.addEventListener('change', function (event) {
        _this2.errors.token = event.error ? [event.error.message] : null;

        if (event.complete) {
          gateway.createToken(_this2.$card, {
            currency: 'usd'
          }).then(function (result) {
            if (result.error) {
              _this2.errors.token = [event.error.message];
            } else {
              _this2.form.token = result.token.id;

              _this2.$dispatch.request('submit:enable');
            }
          });
        }
      });

      _this2.$card.mount(_this2.$el.querySelector('.stripe-field'));
    });
  }
};

Icon.register({"check-circle":{"width":512,"height":512,"paths":[{"d":"M504 256C504 393 393 504 256 504S8 393 8 256 119 8 256 8 504 119 504 256zM227.3 387.3L411.3 203.3C417.6 197.1 417.6 186.9 411.3 180.7L388.7 158.1C382.4 151.8 372.3 151.8 366.1 158.1L216 308.1 145.9 238.1C139.7 231.8 129.6 231.8 123.3 238.1L100.7 260.7C94.4 266.9 94.4 277.1 100.7 283.3L204.7 387.3C210.9 393.6 221.1 393.6 227.3 387.3z"}]}});

var PaypalPaymentButton = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [!_vm.loaded || _vm.submitting ? _c('div', {
      staticClass: "row my-5 py-1"
    }, [_c('div', {
      staticClass: "col-xs-12"
    }, [_c('activity-indicator', {
      attrs: {
        "size": "sm",
        "center": true
      }
    })], 1)]) : _c('div', [_vm.error ? _c('div', {
      staticClass: "alert alert-danger"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-sm-2"
    }, [_c('icon', {
      staticClass: "float-left mt-2",
      attrs: {
        "name": "warning",
        "scale": "2.5"
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "col-sm-10",
      domProps: {
        "innerHTML": _vm._s(_vm.error)
      }
    })])]) : _vm.form.payerId && _vm.form.paymentId ? _c('div', {
      staticClass: "alert alert-success"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-sm-2"
    }, [_c('icon', {
      staticClass: "float-left mt-2",
      attrs: {
        "name": "check-circle",
        "scale": "2.5"
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "col-sm-10"
    }, [_vm._v(" Your PayPal payment information has been collected and is ready to be processed. "), _c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          _vm.removePaymentInfo($event);
        }
      }
    }, [_vm._v("Cancel Payment")])])])]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "paypal-payment-button mt-2 mb-4",
      class: {
        'disabled': _vm.disabled,
        'd-none': _vm.submitting
      }
    })]);
  },
  staticRenderFns: [],
  name: 'paypal-payment-button',
  components: {
    Icon: Icon //ActivityIndicator

  },
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
    }
  },
  data: function data() {
    return {
      loaded: false,
      submitting: false,
      disabled: !this.form.amount
    };
  },
  methods: {
    hasError: function hasError() {
      return this.errors.payerId || this.errors.paymentId;
    },
    shouldMountButton: function shouldMountButton() {
      return this.$el.querySelector('.paypal-payment-button') && !this.$el.querySelector('.paypal-payment-button iframe');
    },
    hasPaymentInfo: function hasPaymentInfo() {
      return this.form.amount && (this.form.recurring === 1 || this.form.payerId && this.form.paymentId);
    },
    removePaymentInfo: function removePaymentInfo(event) {
      this.$set(this.form, 'payerId', null);
      this.$set(this.form, 'paymentId', null);
      this.$set(this.errors, 'payerId', null);
      this.$set(this.errors, 'paymentId', null);
      this.$dispatch.request('paypal:enable');
      event.preventDefault();
    }
  },
  computed: {
    error: function error() {
      var errors = [];

      if (this.errors.payerId) {
        errors.push(this.errors.payerId.join('<b>'));
      }

      if (this.errors.paymentId) {
        errors.push(this.errors.paymentId.join('<b>'));
      }

      return errors.length ? errors.join('<br>') : false;
    }
  },
  updated: function updated() {
    var _this = this;

    if (this.shouldMountButton()) {
      var button = Gateway$1(this.gateway).button('.paypal-payment-button', this.$dispatch);
      this.$dispatch.on('paypal:click', function (data) {
        if (_this.hasPaymentInfo()) {
          _this.$dispatch.request('form:submit');
        }
      });
      this.$dispatch.on('paypal:validate', function (actions) {
        if (_this.form.recurring) {
          actions.disable();
        }

        if (_this.$unwatchAmount) {
          _this.$unwatchAmount();
        }

        _this.$unwatchAmount = _this.$watch('form.amount', function (value) {
          _this.disabled = !(button.amount = value);
          actions[!_this.form.recurring && value ? 'enable' : 'disable']();
        });

        if (_this.$unwatchRecurring) {
          _this.$unwatchRecurrin();
        }

        _this.$unwatchRecurring = _this.$watch('form.recurring', function (value) {
          if (value) {
            actions.disable();
          } else if (_this.form.amount) {
            actions.enable();
          }
        });
      });
      this.$dispatch.on('paypal:authorize', function (data, actions) {
        _this.form.payerId = data.payerID;
        _this.form.paymentId = data.paymentID;

        _this.$dispatch.request('form:submit');

        _this.$dispatch.request('paypal:disable');
      });
    }
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;

    this.$prevFormSubmitReply = this.$dispatch.getReply('form:submit');
    this.$dispatch.reply('form:submit', function (resolve, reject) {
      if (_this2.hasPaymentInfo()) {
        _this2.$prevFormSubmitReply.handle(function (response) {
          if (response.data.recur) {
            _this2.$dispatch.request('form:redirect', response.data.meta.redirect_url);
          } else {
            resolve(response);
          }
        }, function (error) {
          reject(error);
        });
      }
    });
    this.$submitEvent = this.$dispatch.on('form:submit', function (data) {
      _this2.submitting = true;
    });
    this.$submitCompleteEvent = this.$dispatch.on('form:submit:error', function (response) {
      _this2.submitting = false;
    });
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$dispatch.request('submit:hide');
    Gateway$1(this.gateway).script(function (event) {
      _this3.loaded = true;
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$unwatchAmount();
    this.$unwatchRecurring();
    this.$dispatch.request('submit:show');
    this.$dispatch.off('paypal:authorize');
    this.$dispatch.off(this.$submitEvent);
    this.$dispatch.off(this.$submitCompleteEvent);
    this.$dispatch.setReply(this.$prevFormSubmitReply);
  }
};

var StripePaymentButton = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [!_vm.error ? _c('div', [_vm.card ? _c('div', {
      staticClass: "my-3"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-xs-2"
    }, [_c('div', {
      staticClass: "mr-6"
    }, [_vm.card.brand === 'Visa' ? _c('icon', {
      attrs: {
        "name": "cc-visa",
        "scale": "3.5"
      }
    }) : _vm.card.brand === 'MasterCard' ? _c('icon', {
      attrs: {
        "name": "cc-mastercard",
        "scale": "3.5"
      }
    }) : _vm.card.brand === 'American Express' ? _c('icon', {
      attrs: {
        "name": "cc-amex",
        "scale": "3.5"
      }
    }) : _vm.card.brand === 'Discover' ? _c('icon', {
      attrs: {
        "name": "cc-discover",
        "scale": "3.5"
      }
    }) : _vm.card.brand === 'JCB' ? _c('icon', {
      attrs: {
        "name": "cc-jcb",
        "scale": "3.5"
      }
    }) : _vm.card.brand === 'Diners Club' ? _c('icon', {
      attrs: {
        "name": "cc-diners-club",
        "scale": "3.5"
      }
    }) : _c('icon', {
      attrs: {
        "name": "credit-card",
        "scale": "3.5"
      }
    })], 1)]), _vm._v(" "), _c('div', {
      staticClass: "col-xs-10"
    }, [_c('div', {
      staticClass: "pl-2"
    }, [_c('button', {
      staticClass: "btn btn-xs btn-warning float-right",
      attrs: {
        "type": "button",
        "disabled": _vm.submitting
      },
      on: {
        "click": function click($event) {
          _vm.changeCard($event);
        }
      }
    }, [_vm._v("Change Card")]), _vm._v(" "), _vm.card.name ? _c('span', [_vm._v(_vm._s(_vm.card.name)), _c('br')]) : _vm._e(), _vm._v(" "), _c('small', [_vm._v("****" + _vm._s(_vm.card.last4) + " "), _c('span', {
      staticClass: "pl-2"
    }, [_vm._v(_vm._s(_vm.card.exp_month) + "/" + _vm._s(_vm.card.exp_year))])])])])])]) : _vm._e(), _vm._v(" "), !_vm.loaded || _vm.submitting ? _c('div', {
      staticClass: "row my-5 py-1"
    }, [_c('div', {
      staticClass: "col-xs-12"
    }, [_c('activity-indicator', {
      attrs: {
        "size": "sm",
        "center": true
      }
    })], 1)]) : _c('div', [_c('div', {
      staticClass: "stripe-payment-button mt-2 mb-4"
    })])]) : _c('div', {
      staticClass: "alert alert-danger"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-xs-3 text-center"
    }, [_c('icon', {
      staticClass: "mt-2",
      attrs: {
        "name": "warning",
        "scale": "2"
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "col-xs-9"
    }, [_vm._v(" " + _vm._s(_vm.error.message) + " ")])])])]);
  },
  staticRenderFns: [],
  name: 'stripe-payment-button',
  components: {
    Icon: Icon //ActivityIndicator

  },
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
    }
  },
  data: function data() {
    return {
      card: false,
      error: false,
      loaded: false,
      submitting: false,
      changingCard: false
    };
  },
  methods: {
    changeCard: function changeCard(event) {
      this.changingCard = true;
      this.$paymentRequest.show();
    },
    getPaymentLabel: function getPaymentLabel() {
      return 'Donation to ' + this.page.site.name;
    }
  },
  updated: function updated() {
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
  created: function created() {
    var _this = this;

    this.$dispatch.request('form').then(function (form) {
      if (form.$card) {
        _this.card = form.$card;
      }
    });
    this.$submitEvent = this.$dispatch.on('form:submit', function (data) {
      _this.submitting = true;
    });
    this.$submitCompleteEvent = this.$dispatch.on('form:submit:complete', function () {
      _this.submitting = false;
    });
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    if (this.card) {
      this.$dispatch.request('form').then(function (form) {
        form.$card = _this2.card;
      });
    }

    this.$dispatch.request('submit:show');
    this.$dispatch.off(this.$submitEvent);
    this.$dispatch.off(this.$submitCompleteEvent);
  },
  mounted: function mounted() {
    var _this3 = this;

    var el = this.$el.querySelector('.stripe-payment-button');
    var gateway = Gateway$1(this.gateway);
    this.$dispatch.request('submit:hide');
    gateway.script(function (event) {
      _this3.$paymentRequest = gateway.paymentRequest(1000, _this3.getPaymentLabel());
      _this3.$paymentRequestButton = gateway.paymentRequestButton(_this3.$paymentRequest);

      _this3.$paymentRequestButton.on('click', function (event) {
        if (_this3.form.token) {
          _this3.$dispatch.request('form:submit');
        }
      });

      _this3.$paymentRequest.on('cancel', function (event) {
        if (!_this3.changingCard) {
          _this3.card = false;
          _this3.form.token = null;
        } else {
          _this3.changingCard = false;
        }
      });

      _this3.$paymentRequest.on('token', function (event) {
        event.complete('success');
        _this3.card = event.token.card;
        _this3.form.token = event.token.id;

        if (!_this3.changingCard) {
          _this3.$dispatch.request('form:submit');
        } else {
          _this3.changingCard = false;
        }
      });

      _this3.$paymentRequest.canMakePayment().then(function (api) {
        _this3.loaded = true;
      });
    });
  }
};

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

var AVAILABLE_EVENTS = ['change', 'invalid', 'complete', 'focus', 'blur'];
var SUPPORTED_BRANDS = ['unknown', 'visa', 'mastercard', 'discover', 'amex', 'jcb', 'dinersclub', 'maestro', 'laser', 'unionpay', 'elo', 'hipercard'];
var CreditCardField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "input-credit-card-wrapper"
    }, [_c('div', {
      staticClass: "form-control input-credit-card brand-unknown"
    }, [_c('input', {
      staticClass: "input-credit-card-field input-credit-card-number",
      attrs: {
        "type": "text",
        "placeholder": "Card number",
        "maxlength": "19"
      },
      domProps: {
        "value": _vm.card.number
      },
      on: {
        "focus": function focus($event) {
          _vm.addFocusClass($event.target, 'validateNumber');

          _vm.removeTransform($event.target);

          _vm.hideSecurityFields();
        },
        "blur": function blur($event) {
          _vm.removeFocusClass($event.target, 'validateNumber');
        },
        "keyup": function keyup($event) {
          _vm.updateModel($event, 'number', 'validateNumber');
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "input-credit-card-security-fields"
    }, [_c('input', {
      staticClass: "input-credit-card-field input-credit-card-expiration",
      attrs: {
        "type": "text",
        "placeholder": "MM / YY",
        "maxlength": "7"
      },
      domProps: {
        "value": _vm.card.expiration
      },
      on: {
        "focus": function focus($event) {
          _vm.addFocusClass($event.target, 'validateExpiration', true);
        },
        "blur": function blur($event) {
          _vm.removeFocusClass($event.target, 'validateExpiration');
        },
        "keyup": function keyup($event) {
          _vm.updateModel($event, 'expiration', 'validateExpiration');
        },
        "keydown": function keydown($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46], $event.key, ["Backspace", "Delete"])) {
            return null;
          }

          _vm.focusPrevElement($event.target);
        }
      }
    }), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.card.cvc,
        expression: "card.cvc"
      }],
      staticClass: "input-credit-card-field input-credit-card-cvc",
      attrs: {
        "type": "text",
        "placeholder": "CVC",
        "maxlength": "4",
        "autocomplete": "off"
      },
      domProps: {
        "value": _vm.card.cvc
      },
      on: {
        "focus": function focus($event) {
          _vm.addFocusClass($event.target, 'validateCvc', true);
        },
        "blur": function blur($event) {
          _vm.removeFocusClass($event.target, 'validateCvc');
        },
        "input": [function ($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.$set(_vm.card, "cvc", $event.target.value);
        }, function ($event) {
          _vm.validateInput($event, 'validateCvc');
        }],
        "keydown": function keydown($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46], $event.key, ["Backspace", "Delete"])) {
            return null;
          }

          _vm.focusPrevElement($event.target);
        }
      }
    }), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.card.postalCode,
        expression: "card.postalCode"
      }],
      staticClass: "input-credit-card-field input-credit-card-postal",
      attrs: {
        "type": "text",
        "placeholder": "Zip",
        "maxlength": "5"
      },
      domProps: {
        "value": _vm.card.postalCode
      },
      on: {
        "focus": function focus($event) {
          _vm.addFocusClass($event.target, 'validatePostalCode', true);
        },
        "blur": function blur($event) {
          _vm.removeFocusClass($event.target, 'validatePostalCode');
        },
        "input": [function ($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.$set(_vm.card, "postalCode", $event.target.value);
        }, function ($event) {
          _vm.validateInput($event, 'validatePostalCode');
        }],
        "keydown": function keydown($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46], $event.key, ["Backspace", "Delete"])) {
            return null;
          }

          _vm.focusPrevElement($event.target);
        }
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "input-credit-card-icon-wrapper"
    }, [_c('div', {
      staticClass: "input-credit-card-icon-card"
    }, [_c('div', {
      staticClass: "input-credit-card-icon-front"
    }, [_c('icon', {
      staticClass: "input-credit-card-icon",
      attrs: {
        "name": "cc-jcb",
        "data-brand": "jcb"
      }
    }), _vm._v(" "), _c('icon', {
      staticClass: "input-credit-card-icon",
      attrs: {
        "name": "cc-visa",
        "data-brand": "visa"
      }
    }), _vm._v(" "), _c('icon', {
      staticClass: "input-credit-card-icon",
      attrs: {
        "name": "cc-amex",
        "data-brand": "amex"
      }
    }), _vm._v(" "), _c('icon', {
      staticClass: "input-credit-card-icon",
      attrs: {
        "name": "credit-card",
        "data-brand": "unknown",
        "width": "20",
        "height": "18"
      }
    }), _vm._v(" "), _c('icon', {
      staticClass: "input-credit-card-icon",
      attrs: {
        "name": "cc-discover",
        "data-brand": "discover"
      }
    }), _vm._v(" "), _c('icon', {
      staticClass: "input-credit-card-icon",
      attrs: {
        "name": "cc-mastercard",
        "data-brand": "mastercard"
      }
    }), _vm._v(" "), _c('icon', {
      staticClass: "input-credit-card-icon",
      attrs: {
        "name": "cc-diners-club",
        "data-brand": "dinersclub"
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "input-credit-card-icon-back"
    }, [_c('icon', {
      staticClass: "input-credit-card-icon",
      attrs: {
        "name": "credit-card-alt",
        "width": "23.33",
        "height": "20"
      }
    })], 1)])]), _vm._v(" "), _c('div', {
      staticClass: "input-credit-card-placeholder-mask"
    }, [_vm._v("Number")]), _vm._v(" "), _c('div', {
      staticClass: "input-credit-card-number-mask",
      domProps: {
        "innerHTML": _vm._s(_vm.card.number)
      }
    })]), _vm._v(" "), _vm.error ? _c('div', {
      staticClass: "invalid-feedback",
      domProps: {
        "innerHTML": _vm._s(_vm.error)
      }
    }) : _vm._e()]);
  },
  staticRenderFns: [],
  name: 'credit-card-field',
  components: {
    Icon: Icon
  },
  props: {
    focus: {
      type: [Boolean, Function],
      default: false
    },
    blur: {
      type: [Boolean, Function],
      default: false
    },
    invalid: {
      type: [Boolean, Function],
      default: false
    },
    complete: {
      type: [Boolean, Function],
      default: false
    },
    change: {
      type: [Boolean, Function],
      default: false
    },
    error: {
      type: [Boolean, String],
      default: false
    }
  },
  data: function data() {
    return {
      card: {}
    };
  },
  watch: {
    'card.number': function cardNumber(newVal, oldVal) {
      this.handleTranformClass();
      this.addBrandClass(lib$1.fns.cardType(newVal) || 'unknown');
      this.handleEmptyClass(this.$el.querySelector('.input-credit-card-number'), newVal);
    },
    'card.expiration': function cardExpiration(newVal, oldVal) {
      this.handleEmptyClass(this.$el.querySelector('.input-credit-card-expiration'), newVal);
    },
    'card.cvc': function cardCvc(newVal, oldVal) {
      this.handleEmptyClass(this.$el.querySelector('.input-credit-card-cvc'), newVal);
    },
    'card.postalCode': function cardPostalCode(newVal, oldVal) {
      this.handleEmptyClass(this.$el.querySelector('.input-credit-card-postal'), newVal);
    },
    error: function error(newVal, oldVal) {
      if (newVal) {
        this.makeInvalid();
      }
    }
  },
  methods: {
    handleTranformClass: function handleTranformClass() {
      this.card.number && this.card.number.length > 4 ? this.$el.querySelector('.input-credit-card-number').classList.add('can-transform') : this.$el.querySelector('.input-credit-card-number').classList.remove('can-transform');
    },
    handleEmptyClass: function handleEmptyClass(el, value) {
      return value === '' ? el.classList.add('is-empty') : el.classList.remove('is-empty');
    },
    addHasClass: function addHasClass(el) {
      this.getCardField().classList.add(this.getHasClassName(el));
    },
    removeHasClass: function removeHasClass(el) {
      this.getCardField().classList.remove(this.getHasClassName(el));
    },
    addBrandClass: function addBrandClass(brand) {
      this.removeBrandClass();
      this.getCardField().classList.add('brand-' + brand);
    },
    removeBrandClass: function removeBrandClass() {
      for (var i in SUPPORTED_BRANDS) {
        this.getCardField().classList.remove('brand-' + SUPPORTED_BRANDS[i]);
      }
    },
    addErrorClass: function addErrorClass(el) {
      this.removeHasClass(el);
      el.classList.add('is-invalid');
      el.classList.remove('is-valid');
      this.getCardField().classList.remove('is-valid');
      this.getCardField().classList.add('is-invalid', this.getErrorClassName(el));
    },
    removeErrorClass: function removeErrorClass(el) {
      el.classList.remove('is-invalid');
      this.getCardField().classList.remove(this.getErrorClassName(el));

      if (!this.$el.querySelector('.input-credit-card-field.is-invalid')) {
        this.getCardField().classList.remove('is-invalid');
      }
    },
    addFocusClass: function addFocusClass(el, method, showSecurityFields) {
      this.removeErrorClass(el);
      el.classList.add('is-focused');
      this.addTransform(this.$el.querySelector('.input-credit-card-number'));
      this.getCardField().classList.add('is-focused', this.getFocusClassName(el));

      if (showSecurityFields) {
        this.showSecurityFields();
      }

      this.$emit('focus', this.getEventPayload(el, this.isValid(el, method)));
    },
    removeFocusClass: function removeFocusClass(el, method) {
      el.classList.remove('is-focused');
      this.getCardField().classList.remove('is-focused', this.getFocusClassName(el));

      if (this.shouldTransform()) {
        this.addTransform(this.$el.querySelector('.input-credit-card-number'));
      }

      if (!this.isValid(el, method)) {
        this.addErrorClass(el);
      }

      this.$emit('blur', this.getEventPayload(el, this.isValid(el, method)));
    },
    addTransform: function addTransform(el) {
      if (el.classList.contains('can-transform')) {
        var defaultView = (el.ownerDocument || document).defaultView;
        var positionInfo = this.$el.querySelector('.input-credit-card-number-mask').getBoundingClientRect();
        var parts = el.value.split(' ');
        var totalWidth = positionInfo.width;
        var computedStyle = defaultView.getComputedStyle(el);
        var width = this.getTextWidth(parts[parts.length - 1].trim(), computedStyle.fontStyle + ' ' + computedStyle.fontSize + ' ' + computedStyle.fontFamily);
        el.style.transform = 'translateX(' + (totalWidth - width) * -1 + 'px)';
      }
    },
    shouldTransform: function shouldTransform() {
      return this.getCardField().classList.contains('is-invalid-expiration') || this.getCardField().classList.contains('is-invalid-cvc') || this.getCardField().classList.contains('is-invalid-postal');
    },
    removeTransform: function removeTransform(el) {
      el.style.transform = '';
    },
    hideSecurityFields: function hideSecurityFields() {
      this.getCardField().classList.remove('show-security-fields');
    },
    showSecurityFields: function showSecurityFields() {
      this.getCardField().classList.add('show-security-fields');
    },
    getDefaultCard: function getDefaultCard() {
      return {
        number: this.$attrs.number || '',
        expiration: this.$attrs.expiration || '',
        cvc: this.$attrs.cvc || '',
        postalCode: this.$attrs.postalCode || ''
      };
    },
    getCardField: function getCardField() {
      return this.$el.querySelector('.input-credit-card');
    },
    getEventPayload: function getEventPayload(el, isValid) {
      var card = JSON.parse(JSON.stringify(this.card));
      var expiration = card.expiration.split('/');
      card.numberFormatted = card.number;
      card.number = card.number.replace(/\s/g, '');
      card.expMonth = expiration[0] ? expiration[0].trim() : null;
      card.expYear = expiration[1] ? expiration[1].trim() : null;
      return {
        card: card,
        valid: !this.getCardField().classList.contains('is-invalid'),
        complete: this.isComplete(),
        input: {
          el: el,
          valid: isValid
        }
      };
    },
    getTextWidth: function getTextWidth(text, font) {
      // re-use canvas object for better performance
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      context.font = font;
      var metrics = context.measureText(text);
      return metrics.width;
    },
    getClassName: function getClassName(el) {
      var classes = el.classList.item(1).split('-');
      return classes[classes.length - 1];
    },
    getHasClassName: function getHasClassName(el) {
      return 'has-' + this.getClassName(el);
    },
    getErrorClassName: function getErrorClassName(el) {
      return 'is-invalid-' + this.getClassName(el);
    },
    getFocusClassName: function getFocusClassName(el) {
      return 'is-focused-' + this.getClassName(el);
    },
    focusNextElement: function focusNextElement(el) {
      if (el.classList.contains('is-focused')) {
        if (el.nextElementSibling && el.nextElementSibling.children[0]) {
          el.nextElementSibling.children[0].focus();
        } else if (el.nextElementSibling) {
          el.nextElementSibling.focus();
        }
      }
    },
    focusPrevElement: function focusPrevElement(el) {
      if (!el.value) {
        if (el.previousElementSibling) {
          el.previousElementSibling.focus();
        } else {
          this.$el.querySelector('.input-credit-card-number').focus();
        }
      }
    },
    makeValid: function makeValid() {
      this.getCardField().classList.add('is-valid');
      this.getCardField().classList.remove('is-invalid');
      this.$el.querySelectorAll('.is-invalid').forEach(function (el) {
        el.classList.remove('is-invalid');
      });
    },
    makeInvalid: function makeInvalid() {
      this.getCardField().classList.add('is-invalid');
      this.$el.querySelectorAll('.is-invalid').forEach(function (el) {
        el.blur();
      });
    },
    validateCvc: function validateCvc(value) {
      return lib$1.fns.validateCardCVC(value);
    },
    validateNumber: function validateNumber(value) {
      return lib$1.fns.validateCardNumber(value);
    },
    validateExpiration: function validateExpiration(value) {
      return lib$1.fns.validateCardExpiry(value);
    },
    validatePostalCode: function validatePostalCode(value) {
      return value.match(/^\d{5}(?:[-\s]\d{4})?$/) !== null;
    },
    validateInput: function validateInput(event, method) {
      var _this = this;

      setTimeout(function () {
        var el = event.target,
            isValid = _this.isValid(el, method);

        if (el.value !== '' && isValid) {
          _this.addHasClass(el);

          _this.focusNextElement(el);
        } else if (!isValid) {
          _this.removeHasClass(el);

          if (el.value === '' || el.maxLength === el.value.length) {
            _this.addErrorClass(el);
          }
        }

        _this.$emit('change', _this.getEventPayload(el, isValid));

        _this.$emit(isValid ? 'valid' : 'invalid', _this.getEventPayload(el, isValid));

        _this.$emit(_this.isComplete() ? 'complete' : 'incomplete', _this.getEventPayload(el, isValid));
      });
    },
    updateModel: function updateModel(event, prop, method) {
      this.card[prop] = event.target.value;

      if (this.isPrintableKeyCode(event.keyCode)) {
        this.validateInput(event, method);
      }
    },
    isPrintableKeyCode: function isPrintableKeyCode(keycode) {
      return keycode > 47 && keycode < 58 || // number keys
      keycode == 32 || keycode == 13 || // spacebar & return key(s) (if you want to allow carriage returns)
      keycode > 64 && keycode < 91 || // letter keys
      keycode > 95 && keycode < 112 || // numpad keys
      keycode > 185 && keycode < 193 || // ;=,-./` (in order)
      keycode > 218 && keycode < 223 // [\]' (in order)
      ;
    },
    isValid: function isValid(el, method) {
      return el.value === '' || this[method](el.value);
    },
    isComplete: function isComplete() {
      return this.getCardField().classList.contains('has-number') && this.getCardField().classList.contains('has-expiration') && this.getCardField().classList.contains('has-postal') && this.getCardField().classList.contains('has-cvc');
    }
  },
  created: function created() {
    this.card = this.getDefaultCard();
  },
  mounted: function mounted() {
    lib$1.formatCardCVC(this.$el.querySelector('.input-credit-card-cvc'));
    lib$1.restrictNumeric(this.$el.querySelector('.input-credit-card-postal'));
    lib$1.formatCardNumber(this.$el.querySelector('.input-credit-card-number'));
    lib$1.formatCardExpiry(this.$el.querySelector('.input-credit-card-expiration'));

    for (var i in AVAILABLE_EVENTS) {
      if (this[AVAILABLE_EVENTS[i]]) {
        this.$on(AVAILABLE_EVENTS[i], this[AVAILABLE_EVENTS[i]]);
      }
    }
  }
};

var AuthorizeNetCreditCard = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return !_vm.loaded ? _c('div', {
      staticClass: "row my-5 py-1"
    }, [_c('div', {
      staticClass: "col-xs-12"
    }, [_c('activity-indicator', {
      attrs: {
        "size": "sm",
        "center": true
      }
    })], 1)]) : _c('div', {
      staticClass: "form-group"
    }, [_c('div', {
      staticClass: "text-bold mb-2"
    }, [_vm._v("Credit Card")]), _vm._v(" "), _c('credit-card-field', {
      attrs: {
        "error": _vm.error || _vm.errors.token,
        "change": _vm.change,
        "complete": _vm.complete,
        "valid": _vm.valid,
        "invalid": _vm.invalid,
        "focus": _vm.focus,
        "blur": _vm.blur
      }
    })], 1);
  },
  staticRenderFns: [],
  name: 'authorize-net-credit-card',
  components: {
    CreditCardField: CreditCardField //ActivityIndicator,

  },
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
    }
  },
  data: function data() {
    return {
      error: false,
      loaded: false
    };
  },
  methods: {
    change: function change(event) {
      if (!event.complete) {
        this.$dispatch.request('submit:disable');
      }
    },
    complete: function complete(event) {
      var _this = this;

      Gateway$1(this.gateway).createToken({
        cardNumber: event.card.number,
        month: event.card.expMonth,
        year: event.card.expYear,
        cardCode: event.card.cvc
      }, function (event) {
        if (event.messages.resultCode === 'Ok') {
          _this.$children[0].makeValid();

          _this.$set(_this.form, 'token', event.opaqueData.dataValue);

          _this.$set(_this.form, 'tokenDescriptor', event.opaqueData.dataDescriptor);

          _this.$dispatch.request('submit:enable');
        } else if (event.messages.resultCode === 'Error') {
          _this.$children[0].makeInvalid();

          _this.error = event.messages.message[0].text;

          _this.$dispatch.request('submit:disable');
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$dispatch.request('submit:disable');
    Gateway$1(this.gateway).script(function (event) {
      _this2.loaded = true;
    });
  }
};

var PaymentGateways = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [_c('div', {
      staticClass: "row"
    }, _vm._l(_vm.buttons, function (button) {
      return _c('div', {
        staticClass: "col-md-6 col-lg-4"
      }, [_c('button', {
        staticClass: "btn btn-block payment-gateway-button",
        class: {
          'btn-success': button.active,
          'btn-secondary': !button.active
        },
        attrs: {
          "type": "button"
        },
        on: {
          "click": function click($event) {
            _vm.activate(button);
          }
        }
      }, [_c('icon', {
        class: {
          'mt-2 mb-1': !button.label
        },
        attrs: {
          "name": button.icon,
          "scale": button.iconScale || 2
        }
      }), _vm._v(" "), button.label ? _c('div', {
        staticClass: "pt-1 small"
      }, [_vm._v(_vm._s(button.label))]) : _vm._e()], 1)]);
    })), _vm._v(" "), !_vm.buttons || !_vm.buttons.length ? _c('div', {
      staticClass: "alert alert-danger"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-xs-2 text-center"
    }, [_c('icon', {
      staticClass: "mt-2",
      attrs: {
        "name": "warning",
        "scale": "2.25"
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "col-xs-10"
    }, [_vm._v(" There are not payment gateways configured for this site! ")])])]) : _c('div', [_c('hr'), _vm._v(" "), _vm._l(_vm.buttons, function (button) {
      return button.active ? _c('div', [_c(button.component, {
        tag: "component",
        attrs: {
          "form": _vm.form,
          "page": _vm.page,
          "errors": _vm.errors,
          "gateway": button.gateway
        }
      })], 1) : _vm._e();
    })], 2)]);
  },
  staticRenderFns: [],
  name: 'payment-gateways',
  components: {
    Icon: Icon,
    StripeCreditCard: StripeCreditCard,
    StripePaymentButton: StripePaymentButton,
    PaypalPaymentButton: PaypalPaymentButton,
    AuthorizeNetCreditCard: AuthorizeNetCreditCard
  },
  mixins: [FormComponent],
  data: function data() {
    return {
      gateway: null,
      buttons: this.getButtons()
    };
  },
  methods: {
    getButtons: function getButtons() {
      var buttons = [];

      each$1(this.page.site.gateways, function (gateway) {
        if (!Gateway$1(gateway).buttons) {
          throw new Error(Gateway$1(gateway).api() + ' doesn\'t have a required buttons() method.');
        }

        each$1(Gateway$1(gateway).buttons(), function (button) {
          button.active = false;
          button.gateway = gateway;
          buttons.push(button);
        });
      });

      return buttons;
    },
    deactivate: function deactivate() {
      each$1(this.buttons, function (button) {
        button.active = false;
      });
    },
    activate: function activate(button) {
      this.deactivate();
      button.active = true;
      this.$set(this.form, 'gateway', Gateway$1(button.gateway).api());
    }
  },
  mounted: function mounted() {
    if (this.buttons && this.buttons[0]) {
      this.activate(this.buttons[0]);
    } else {
      this.$dispatch.request('submit:hide');
    }
  }
};

var PaymentInfoFieldset = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('fieldset', [_c('legend', [_vm._v("Payment Information")]), _vm._v(" "), _c('payment-gateways', {
      attrs: {
        "form": _vm.form,
        "errors": _vm.errors,
        "page": _vm.page
      }
    }), _vm._v(" "), _vm.page.options.add_comment ? _c('textarea-field', {
      attrs: {
        "id": "comment",
        "label": _vm.commentMessage
      },
      model: {
        value: _vm.form.comment,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "comment", $$v);
        },
        expression: "form.comment"
      }
    }) : _vm._e(), _vm._v(" "), _c('activity-button', {
      attrs: {
        "type": "submit",
        "size": "lg",
        "orientation": "right",
        "activity": _vm.submitting,
        "block": true,
        "label": _vm.buttonLabel || _vm.page.site.config.giveworks.button.donate
      }
    }), _vm._v(" "), _vm.page.options.add_optin ? _c('div', [_c('label', {
      staticClass: "custom-control custom-checkbox"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.optin,
        expression: "form.optin"
      }],
      staticClass: "custom-control-input",
      attrs: {
        "type": "checkbox",
        "checked": "checked"
      },
      domProps: {
        "checked": Array.isArray(_vm.form.optin) ? _vm._i(_vm.form.optin, null) > -1 : _vm.form.optin
      },
      on: {
        "change": function change($event) {
          var $$a = _vm.form.optin,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;

          if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);

            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.form, "optin", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.form, "optin", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.form, "optin", $$c);
          }
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "custom-control-indicator"
    }), _vm._v(" "), _c('small', {
      staticClass: "custom-control-label text-muted form-text",
      domProps: {
        "innerHTML": _vm._s(_vm.optinMessage)
      }
    })])]) : _vm._e(), _vm._v(" "), _vm.page.site.disclaimer ? _c('div', {
      staticClass: "mt-3"
    }, [_c('small', {
      staticClass: "text-muted",
      domProps: {
        "innerHTML": _vm._s(_vm.page.site.disclaimer)
      }
    })]) : _vm._e()], 1);
  },
  staticRenderFns: [],
  name: 'payment-info-fieldset',
  components: {
    //ActivityButton,
    PaymentGateways: PaymentGateways
  },
  mixins: [FormComponent]
};

function isString$1(str) {
  return typeof str === 'string' || str instanceof String;
}

function conform(res, str, fallback = '') {
  return isString$1(res) ? res : res ? str : fallback;
}

const DIRECTION = {
  NONE: 0,
  LEFT: -1,
  RIGHT: 1
};


function indexInDirection(pos, direction) {
  if (direction === DIRECTION.LEFT) --pos;
  return pos;
}

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
}

// cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
function objectIncludes(b, a) {
  if (a === b) return true;

  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;
    for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    var keys = Object.keys(a);
    // if (keys.length !== Object.keys(b).length) return false;

    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;

    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;

    for (i = 0; i < keys.length; i++) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = 0; i < keys.length; i++) if (!objectIncludes(a[keys[i]], b[keys[i]])) return false;

    return true;
  }

  return false;
}

/* eslint-disable no-undef */
const g = typeof window !== 'undefined' && window || typeof global$1 !== 'undefined' && global$1.global === global$1 && global$1 || typeof self !== 'undefined' && self.self === self && self || {};
/* eslint-enable no-undef */

class ActionDetails {

  constructor(value, cursorPos, oldValue, oldSelection) {
    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection;

    // double check if left part was changed (autofilling, other non-standard input triggers)
    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }

  get startChangePos() {
    return Math.min(this.cursorPos, this.oldSelection.start);
  }

  get insertedCount() {
    return this.cursorPos - this.startChangePos;
  }

  get inserted() {
    return this.value.substr(this.startChangePos, this.insertedCount);
  }

  get removedCount() {
    // Math.max for opposite operation
    return Math.max(this.oldSelection.end - this.startChangePos ||
    // for Delete
    this.oldValue.length - this.value.length, 0);
  }

  get removed() {
    return this.oldValue.substr(this.startChangePos, this.removedCount);
  }

  get head() {
    return this.value.substring(0, this.startChangePos);
  }

  get tail() {
    return this.value.substring(this.startChangePos + this.insertedCount);
  }

  get removeDirection() {
    if (!this.removedCount || this.insertedCount) return DIRECTION.NONE;

    // align right if delete at right or if range removed (event with backspace)
    return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
  }
}

class ChangeDetails {

  constructor(details) {
    Object.assign(this, {
      inserted: '',
      overflow: false,
      removedCount: 0,
      shift: 0
    }, details);
  }

  aggregate(details) {
    this.inserted += details.inserted;
    this.removedCount += details.removedCount;
    this.shift += details.shift;
    this.overflow = this.overflow || details.overflow;
    if (details.rawInserted) this.rawInserted += details.rawInserted;
    return this;
  }

  get offset() {
    return this.shift + this.inserted.length - this.removedCount;
  }

  get rawInserted() {
    return this._rawInserted != null ? this._rawInserted : this.inserted;
  }

  set rawInserted(rawInserted) {
    this._rawInserted = rawInserted;
  }
}

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

class Masked {

  constructor(opts) {
    this._value = '';
    this._update(_extends$1({}, Masked.DEFAULTS, opts));
    this.isInitialized = true;
  } // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  updateOptions(opts) {
    this.withValueRefresh(this._update.bind(this, opts));
  }

  _update(opts) {
    Object.assign(this, opts);
  }

  clone() {
    const m = new Masked(this);
    m._value = this.value.slice();
    return m;
  }

  reset() {
    this._value = '';
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this.resolve(value);
  }

  resolve(value) {
    this.reset();
    this._append(value, { input: true });
    this._appendTail();
    this.doCommit();
    return this.value;
  }

  get unmaskedValue() {
    return this._unmask();
  }

  set unmaskedValue(value) {
    this.reset();
    this._append(value);
    this._appendTail();
    this.doCommit();
  }

  get rawInputValue() {
    return this.extractInput(0, this.value.length, { raw: true });
  }

  set rawInputValue(value) {
    this.reset();
    this._append(value, { raw: true });
    this._appendTail();
    this.doCommit();
  }

  get isComplete() {
    return true;
  }

  nearestInputPos(cursorPos, direction) {
    return cursorPos;
  }

  extractInput(fromPos = 0, toPos = this.value.length, flags) {
    return this.value.slice(fromPos, toPos);
  }

  _extractTail(fromPos = 0, toPos = this.value.length) {
    return this.extractInput(fromPos, toPos);
  }

  _appendTail(tail = "") {
    return this._append(tail, { tail: true });
  }

  _append(str, flags = {}) {
    const oldValueLength = this.value.length;
    let consistentValue = this.clone();
    let overflow = false;

    str = this.doPrepare(str, flags);

    for (let ci = 0; ci < str.length; ++ci) {
      this._value += str[ci];
      if (this.doValidate(flags) === false) {
        // $FlowFixMe
        Object.assign(this, consistentValue);
        if (!flags.input) {
          // in `input` mode dont skip invalid chars
          overflow = true;
          break;
        }
      }

      consistentValue = this.clone();
    }

    return new ChangeDetails({
      inserted: this.value.slice(oldValueLength),
      overflow
    });
  }

  appendWithTail(str, tail) {
    // TODO refactor
    const aggregateDetails = new ChangeDetails();
    let consistentValue = this.clone();
    let consistentAppended;

    for (let ci = 0; ci < str.length; ++ci) {
      const ch = str[ci];

      const appendDetails = this._append(ch, { input: true });
      consistentAppended = this.clone();
      const tailAppended = !appendDetails.overflow && !this._appendTail(tail).overflow;
      if (!tailAppended || this.doValidate({ tail: true }) === false) {
        // $FlowFixMe
        Object.assign(this, consistentValue);
        break;
      }

      // $FlowFixMe
      Object.assign(this, consistentAppended);
      consistentValue = this.clone();
      aggregateDetails.aggregate(appendDetails);
    }

    // TODO needed for cases when
    // 1) REMOVE ONLY AND NO LOOP AT ALL
    // 2) last loop iteration removes tail
    // 3) when breaks on tail insert

    // aggregate only shift from tail
    aggregateDetails.shift += this._appendTail(tail).shift;

    return aggregateDetails;
  }

  _unmask() {
    return this.value;
  }

  remove(from = 0, count = this.value.length - from) {
    this._value = this.value.slice(0, from) + this.value.slice(from + count);
  }

  withValueRefresh(fn) {
    if (this._refreshing || !this.isInitialized) return fn();
    this._refreshing = true;

    const unmasked = this.unmaskedValue;

    const ret = fn();

    this.unmaskedValue = unmasked;

    delete this._refreshing;
    return ret;
  }

  doPrepare(str, flags = {}) {
    return this.prepare(str, this, flags);
  }

  doValidate(flags) {
    return this.validate(this.value, this, flags);
  }

  doCommit() {
    this.commit(this.value, this);
  }

  // TODO
  // insert (str, fromPos, flags)

  splice(start, deleteCount, inserted, removeDirection) {
    const tailPos = start + deleteCount;
    const tail = this._extractTail(tailPos);

    const startChangePos = this.nearestInputPos(start, removeDirection);
    this.remove(startChangePos);
    const changeDetails = this.appendWithTail(inserted, tail);

    // adjust shift if start was aligned
    changeDetails.shift += startChangePos - start;
    return changeDetails;
  }
}

Masked.DEFAULTS = {
  prepare: val => val,
  validate: () => true,
  commit: () => {}
};

function maskedClass(mask) {
  if (mask == null) {
    throw new Error('mask property should be defined');
  }

  if (mask instanceof RegExp) return g.IMask.MaskedRegExp;
  if (isString$1(mask)) return g.IMask.MaskedPattern;
  if (mask instanceof Date || mask === Date) return g.IMask.MaskedDate;
  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return g.IMask.MaskedNumber;
  if (Array.isArray(mask) || mask === Array) return g.IMask.MaskedDynamic;
  // $FlowFixMe
  if (mask.prototype instanceof g.IMask.Masked) return mask;
  // $FlowFixMe
  if (mask instanceof Function) return g.IMask.MaskedFunction;

  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  return g.IMask.Masked;
}

function createMask(opts) {
  opts = Object.assign({}, opts); // clone
  const mask = opts.mask;

  if (mask instanceof g.IMask.Masked) return mask;

  const MaskedClass = maskedClass(mask);
  return new MaskedClass(opts);
}

class PatternDefinition {

  constructor(opts) {
    // TODO flow
    Object.assign(this, opts);

    if (this.mask) {
      this._masked = createMask(opts);
    }
  }

  reset() {
    this.isHollow = false;
    this.isRawInput = false;
    if (this._masked) this._masked.reset();
  }

  get isInput() {
    return this.type === PatternDefinition.TYPES.INPUT;
  }

  get isHiddenHollow() {
    return this.isHollow && this.optional;
  }

  resolve(ch) {
    if (!this._masked) return false;
    return this._masked.resolve(ch);
  }
}
PatternDefinition.DEFAULTS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, // http://stackoverflow.com/a/22075070
  '*': /./
};
PatternDefinition.TYPES = {
  INPUT: 'input',
  FIXED: 'fixed'
};

class PatternGroup {

  constructor(masked, { name, offset, mask, validate }) {
    this.masked = masked;
    this.name = name;
    this.offset = offset;
    this.mask = mask;
    this.validate = validate || (() => true);
  }

  get value() {
    return this.masked.value.slice(this.masked.mapDefIndexToPos(this.offset), this.masked.mapDefIndexToPos(this.offset + this.mask.length));
  }

  get unmaskedValue() {
    return this.masked.extractInput(this.masked.mapDefIndexToPos(this.offset), this.masked.mapDefIndexToPos(this.offset + this.mask.length));
  }

  doValidate(flags) {
    return this.validate(this.value, this, flags);
  }
}

class RangeGroup {

  constructor([from, to], maxlen = String(to).length) {
    this._from = from;
    this._to = to;
    this._maxLength = maxlen;
    this.validate = this.validate.bind(this);

    this._update();
  }

  get to() {
    return this._to;
  }

  set to(to) {
    this._to = to;
    this._update();
  }

  get from() {
    return this._from;
  }

  set from(from) {
    this._from = from;
    this._update();
  }

  get maxLength() {
    return this._maxLength;
  }

  set maxLength(maxLength) {
    this._maxLength = maxLength;
    this._update();
  }

  get _matchFrom() {
    return this.maxLength - String(this.from).length;
  }

  _update() {
    this._maxLength = Math.max(this._maxLength, String(this.to).length);
    this.mask = '0'.repeat(this._maxLength);
  }

  validate(str) {
    let minstr = '';
    let maxstr = '';

    var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
        _ref2 = slicedToArray(_ref, 3);

    const placeholder = _ref2[1],
          num = _ref2[2];

    if (num) {
      minstr = '0'.repeat(placeholder.length) + num;
      maxstr = '9'.repeat(placeholder.length) + num;
    }

    const firstNonZero = str.search(/[^0]/);
    if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

    minstr = minstr.padEnd(this._maxLength, '0');
    maxstr = maxstr.padEnd(this._maxLength, '9');

    return this.from <= Number(maxstr) && Number(minstr) <= this.to;
  }
}

function EnumGroup(enums) {
  return {
    mask: '*'.repeat(enums[0].length),
    validate: (value, group, flags) => enums.some(e => e.indexOf(group.unmaskedValue) >= 0)
  };
}

PatternGroup.Range = RangeGroup;
PatternGroup.Enum = EnumGroup;

class MaskedPattern extends Masked {
  // TODO deprecated, remove in 3.0
  // TODO mask type
  constructor(opts = {}) {
    // TODO type $Shape<MaskedPatternOptions>={} does not work
    opts.definitions = Object.assign({}, PatternDefinition.DEFAULTS, opts.definitions);
    super(_extends$1({}, MaskedPattern.DEFAULTS, opts));
  }

  _update(opts = {}) {
    opts.definitions = Object.assign({}, this.definitions, opts.definitions);
    if (opts.placeholder != null) {
      console.warn("'placeholder' option is deprecated and will be removed in next major release, use 'placeholderChar' and 'lazy' instead.");
      if ('char' in opts.placeholder) opts.placeholderChar = opts.placeholder.char;
      if ('lazy' in opts.placeholder) opts.lazy = opts.placeholder.lazy;
      delete opts.placeholder;
    }
    if (opts.placeholderLazy != null) {
      console.warn("'placeholderLazy' option is deprecated and will be removed in next major release, use 'lazy' instead.");
      opts.lazy = opts.placeholderLazy;
      delete opts.placeholderLazy;
    }
    super._update(opts);
    this._updateMask();
  }

  _updateMask() {
    const defs = this.definitions;
    this._charDefs = [];
    this._groupDefs = [];

    let pattern = this.mask;
    if (!pattern || !defs) return;

    let unmaskingBlock = false;
    let optionalBlock = false;
    let stopAlign = false;

    for (let i = 0; i < pattern.length; ++i) {
      if (this.groups) {
        const p = pattern.slice(i);
        const gNames = Object.keys(this.groups).filter(gName => p.indexOf(gName) === 0);
        // order by key length
        gNames.sort((a, b) => b.length - a.length);
        // use group name with max length
        const gName = gNames[0];
        if (gName) {
          const group = this.groups[gName];
          this._groupDefs.push(new PatternGroup(this, {
            name: gName,
            offset: this._charDefs.length,
            mask: group.mask,
            validate: group.validate
          }));
          pattern = pattern.replace(gName, group.mask);
        }
      }

      let char = pattern[i];
      let type = !unmaskingBlock && char in defs ? PatternDefinition.TYPES.INPUT : PatternDefinition.TYPES.FIXED;
      const unmasking = type === PatternDefinition.TYPES.INPUT || unmaskingBlock;
      const optional = type === PatternDefinition.TYPES.INPUT && optionalBlock;

      if (char === MaskedPattern.STOP_CHAR) {
        stopAlign = true;
        continue;
      }

      if (char === '{' || char === '}') {
        unmaskingBlock = !unmaskingBlock;
        continue;
      }

      if (char === '[' || char === ']') {
        optionalBlock = !optionalBlock;
        continue;
      }

      if (char === MaskedPattern.ESCAPE_CHAR) {
        ++i;
        char = pattern[i];
        if (!char) break;
        type = PatternDefinition.TYPES.FIXED;
      }

      this._charDefs.push(new PatternDefinition({
        char,
        type,
        optional,
        stopAlign,
        unmasking,
        mask: type === PatternDefinition.TYPES.INPUT ? defs[char] : value => value === char
      }));

      stopAlign = false;
    }
  }

  doValidate(...args) {
    return this._groupDefs.every(g$$1 => g$$1.doValidate(...args)) && super.doValidate(...args);
  }

  clone() {
    const m = new MaskedPattern(this);
    m._value = this.value;
    // $FlowFixMe
    m._charDefs.forEach((d, i) => Object.assign(d, this._charDefs[i]));
    // $FlowFixMe
    m._groupDefs.forEach((d, i) => Object.assign(d, this._groupDefs[i]));
    return m;
  }

  reset() {
    super.reset();
    this._charDefs.forEach(d => {
      delete d.isHollow;
    });
  }

  get isComplete() {
    return !this._charDefs.some((d, i) => d.isInput && !d.optional && (d.isHollow || !this.extractInput(i, i + 1)));
  }

  hiddenHollowsBefore(defIndex) {
    return this._charDefs.slice(0, defIndex).filter(d => d.isHiddenHollow).length;
  }

  mapDefIndexToPos(defIndex) {
    return defIndex - this.hiddenHollowsBefore(defIndex);
  }

  mapPosToDefIndex(pos) {
    let defIndex = pos;
    for (let di = 0; di < this._charDefs.length; ++di) {
      const def = this._charDefs[di];
      if (di >= defIndex) break;
      if (def.isHiddenHollow) ++defIndex;
    }
    return defIndex;
  }

  _unmask() {
    const str = this.value;
    let unmasked = '';

    for (let ci = 0, di = 0; ci < str.length && di < this._charDefs.length; ++di) {
      const ch = str[ci];
      const def = this._charDefs[di];

      if (def.isHiddenHollow) continue;
      if (def.unmasking && !def.isHollow) unmasked += ch;
      ++ci;
    }

    return unmasked;
  }

  _appendTail(tail = []) {
    return this._appendChunks(tail, { tail: true }).aggregate(this._appendPlaceholder());
  }

  _append(str, flags = {}) {
    const oldValueLength = this.value.length;
    let rawInserted = '';
    let overflow = false;

    str = this.doPrepare(str, flags);

    for (let ci = 0, di = this.mapPosToDefIndex(this.value.length); ci < str.length;) {
      const ch = str[ci];
      const def = this._charDefs[di];

      // check overflow
      if (def == null) {
        overflow = true;
        break;
      }

      // reset
      def.isHollow = false;

      let resolved, skipped;
      let chres = conform(def.resolve(ch), ch);

      if (def.type === PatternDefinition.TYPES.INPUT) {
        if (chres) {
          this._value += chres;
          if (!this.doValidate()) {
            chres = '';
            this._value = this.value.slice(0, -1);
          }
        }

        resolved = !!chres;
        skipped = !chres && !def.optional;

        if (!chres) {
          if (!def.optional && !flags.input) {
            this._value += this.placeholderChar;
            skipped = false;
          }
          if (!skipped) def.isHollow = true;
        } else {
          rawInserted += chres;
        }
      } else {
        this._value += def.char;
        resolved = chres && (def.unmasking || flags.input || flags.raw) && !flags.tail;
        def.isRawInput = resolved && (flags.raw || flags.input);
        if (def.isRawInput) rawInserted += def.char;
      }

      if (!skipped) ++di;
      if (resolved || skipped) ++ci;
    }

    return new ChangeDetails({
      inserted: this.value.slice(oldValueLength),
      rawInserted,
      overflow
    });
  }

  _appendChunks(chunks, ...args) {
    const details = new ChangeDetails();
    for (let ci = 0; ci < chunks.length; ++ci) {
      var _chunks$ci = slicedToArray(chunks[ci], 2);

      const fromDefIndex = _chunks$ci[0],
            input = _chunks$ci[1];

      if (fromDefIndex != null) details.aggregate(this._appendPlaceholder(fromDefIndex));
      if (details.aggregate(this._append(input, ...args)).overflow) break;
    }
    return details;
  }

  _extractTail(fromPos = 0, toPos = this.value.length) {
    return this._extractInputChunks(fromPos, toPos);
  }

  extractInput(fromPos = 0, toPos = this.value.length, flags = {}) {
    if (fromPos === toPos) return '';

    const str = this.value;
    let input = '';

    const toDefIndex = this.mapPosToDefIndex(toPos);
    for (let ci = fromPos, di = this.mapPosToDefIndex(fromPos); ci < toPos && ci < str.length && di < toDefIndex; ++di) {
      const ch = str[ci];
      const def = this._charDefs[di];

      if (!def) break;
      if (def.isHiddenHollow) continue;

      if (def.isInput && !def.isHollow || flags.raw && !def.isInput && def.isRawInput) input += ch;
      ++ci;
    }
    return input;
  }

  _extractInputChunks(fromPos = 0, toPos = this.value.length) {
    if (fromPos === toPos) return [];

    const fromDefIndex = this.mapPosToDefIndex(fromPos);
    const toDefIndex = this.mapPosToDefIndex(toPos);
    const stopDefIndices = this._charDefs.map((d, i) => [d, i]).slice(fromDefIndex, toDefIndex).filter(([d]) => d.stopAlign).map(([, i]) => i);

    const stops = [fromDefIndex, ...stopDefIndices, toDefIndex];

    return stops.map((s, i) => [stopDefIndices.indexOf(s) >= 0 ? s : null, this.extractInput(this.mapDefIndexToPos(s), this.mapDefIndexToPos(stops[++i]))]).filter(([stop, input]) => stop != null || input);
  }

  _appendPlaceholder(toDefIndex) {
    const oldValueLength = this.value.length;
    const maxDefIndex = toDefIndex || this._charDefs.length;
    for (let di = this.mapPosToDefIndex(this.value.length); di < maxDefIndex; ++di) {
      const def = this._charDefs[di];
      if (def.isInput) def.isHollow = true;

      if (!this.lazy || toDefIndex) {
        this._value += !def.isInput && def.char != null ? def.char : !def.optional ? this.placeholderChar : '';
      }
    }
    return new ChangeDetails({
      inserted: this.value.slice(oldValueLength)
    });
  }

  remove(from = 0, count = this.value.length - from) {
    const to = from + count;
    this._value = this.value.slice(0, from) + this.value.slice(to);
    const fromDefIndex = this.mapPosToDefIndex(from);
    const toDefIndex = this.mapPosToDefIndex(to);
    this._charDefs.slice(fromDefIndex, toDefIndex).forEach(d => d.reset());
  }

  nearestInputPos(cursorPos, direction = DIRECTION.NONE) {
    let step = direction || DIRECTION.LEFT;

    const initialDefIndex = this.mapPosToDefIndex(cursorPos);
    const initialDef = this._charDefs[initialDefIndex];
    let di = initialDefIndex;

    let firstInputIndex, firstFilledInputIndex, firstVisibleHollowIndex, nextdi;

    // check if chars at right is acceptable for LEFT and NONE directions
    if (direction !== DIRECTION.RIGHT && (initialDef && initialDef.isInput ||
    // in none direction latest position is acceptable also
    direction === DIRECTION.NONE && cursorPos === this.value.length)) {
      firstInputIndex = initialDefIndex;
      if (initialDef && !initialDef.isHollow) firstFilledInputIndex = initialDefIndex;
    }

    if (firstFilledInputIndex == null && direction == DIRECTION.LEFT || firstInputIndex == null) {
      // search forward
      for (nextdi = indexInDirection(di, step); 0 <= nextdi && nextdi < this._charDefs.length; di += step, nextdi += step) {
        const nextDef = this._charDefs[nextdi];
        if (firstInputIndex == null && nextDef.isInput) firstInputIndex = di;
        if (firstVisibleHollowIndex == null && nextDef.isHollow && !nextDef.isHiddenHollow) firstVisibleHollowIndex = di;
        if (nextDef.isInput && !nextDef.isHollow) {
          firstFilledInputIndex = di;
          break;
        }
      }
    }

    // if has aligned left inside fixed and has came to the start - use start position
    if (direction === DIRECTION.LEFT && di === 0 && (!initialDef || !initialDef.isInput)) firstInputIndex = 0;

    if (direction !== DIRECTION.RIGHT || firstInputIndex == null) {
      // search backward
      step = -step;
      let overflow = false;

      // find hollows only before initial pos
      for (nextdi = indexInDirection(di, step); 0 <= nextdi && nextdi < this._charDefs.length; di += step, nextdi += step) {
        const nextDef = this._charDefs[nextdi];
        if (nextDef.isInput) {
          firstInputIndex = di;
          if (nextDef.isHollow && !nextDef.isHiddenHollow) break;
        }

        // if hollow not found before start position - set `overflow`
        // and try to find just any input
        if (di === initialDefIndex) overflow = true;

        // first input found
        if (overflow && firstInputIndex != null) break;
      }

      // process overflow
      overflow = overflow || nextdi >= this._charDefs.length;
      if (overflow && firstInputIndex != null) di = firstInputIndex;
    } else if (firstFilledInputIndex == null) {
      // adjust index if delete at right and filled input not found at right
      di = firstVisibleHollowIndex != null ? firstVisibleHollowIndex : firstInputIndex;
    }

    return this.mapDefIndexToPos(di);
  }

  group(name) {
    return this.groupsByName(name)[0];
  }

  groupsByName(name) {
    return this._groupDefs.filter(g$$1 => g$$1.name === name);
  }
}
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.Definition = PatternDefinition;
MaskedPattern.Group = PatternGroup;

class MaskedDate extends MaskedPattern {

  constructor(opts) {
    super(_extends$1({}, MaskedDate.DEFAULTS, opts));
  }

  _update(opts) {
    // TODO pattern mask is string, but date mask is Date
    if (opts.mask === Date) delete opts.mask;
    if (opts.pattern) {
      opts.mask = opts.pattern;
      delete opts.pattern;
    }

    const groups = opts.groups;
    opts.groups = Object.assign({}, MaskedDate.GET_DEFAULT_GROUPS());
    // adjust year group
    if (opts.min) opts.groups.Y.from = opts.min.getFullYear();
    if (opts.max) opts.groups.Y.to = opts.max.getFullYear();
    Object.assign(opts.groups, groups);

    super._update(opts);
  }

  doValidate(...args) {
    const valid = super.doValidate(...args);
    const date = this.date;

    return valid && (!this.isComplete || this.isDateExist(this.value) && date && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
  }

  isDateExist(str) {
    return this.format(this.parse(str)) === str;
  }

  get date() {
    return this.isComplete ? this.parse(this.value) : null;
  }

  set date(date) {
    this.value = this.format(date);
  }
}
MaskedDate.DEFAULTS = {
  pattern: 'd{.}`m{.}`Y',
  format: date => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return [day, month, year].join('.');
  },
  parse: str => {
    var _str$split = str.split('.'),
        _str$split2 = slicedToArray(_str$split, 3);

    const day = _str$split2[0],
          month = _str$split2[1],
          year = _str$split2[2];

    return new Date(year, month - 1, day);
  }
};
MaskedDate.GET_DEFAULT_GROUPS = () => {
  return {
    d: new PatternGroup.Range([1, 31]),
    m: new PatternGroup.Range([1, 12]),
    Y: new PatternGroup.Range([1900, 9999])
  };
};

class InputMask {

  constructor(el, opts) {
    this.el = el;
    this.masked = createMask(opts);

    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';

    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

    this.bindEvents();

    // refresh
    this.updateValue();
    this._onChange();
  }

  get mask() {
    return this.masked.mask;
  }
  set mask(mask) {
    if (mask == null || mask === this.masked.mask) return;

    if (this.masked.constructor === maskedClass(mask)) {
      this.masked.mask = mask;
      return;
    }

    const masked = createMask({ mask });
    masked.unmaskedValue = this.masked.unmaskedValue;
    this.masked = masked;
  }

  get value() {
    return this._value;
  }

  set value(str) {
    this.masked.value = str;
    this.updateControl();
    this.alignCursor();
  }

  get unmaskedValue() {
    return this._unmaskedValue;
  }

  set unmaskedValue(str) {
    this.masked.unmaskedValue = str;
    this.updateControl();
    this.alignCursor();
  }

  bindEvents() {
    this.el.addEventListener('keydown', this._saveSelection);
    this.el.addEventListener('input', this._onInput);
    this.el.addEventListener('drop', this._onDrop);
    this.el.addEventListener('click', this.alignCursorFriendly);
    this.el.addEventListener('change', this._onChange);
  }

  unbindEvents() {
    this.el.removeEventListener('keydown', this._saveSelection);
    this.el.removeEventListener('input', this._onInput);
    this.el.removeEventListener('drop', this._onDrop);
    this.el.removeEventListener('click', this.alignCursorFriendly);
    this.el.removeEventListener('change', this._onChange);
  }

  fireEvent(ev) {
    const listeners = this._listeners[ev] || [];
    listeners.forEach(l => l());
  }

  get selectionStart() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
  }

  get cursorPos() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
  }

  set cursorPos(pos) {
    if (this.el !== document.activeElement) return;

    this.el.setSelectionRange(pos, pos);
    this._saveSelection();
  }

  _saveSelection() /* ev */{
    if (this.value !== this.el.value) {
      console.warn('Uncontrolled input change, refresh mask manually!'); // eslint-disable-line no-console
    }
    this._selection = {
      start: this.selectionStart,
      end: this.cursorPos
    };
  }

  updateValue() {
    this.masked.value = this.el.value;
  }

  updateControl() {
    const newUnmaskedValue = this.masked.unmaskedValue;
    const newValue = this.masked.value;
    const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;

    this._unmaskedValue = newUnmaskedValue;
    this._value = newValue;

    if (this.el.value !== newValue) this.el.value = newValue;
    if (isChanged) this._fireChangeEvents();
  }

  updateOptions(opts) {
    opts = Object.assign({}, opts); // clone
    if (opts.mask === Date && this.masked instanceof MaskedDate) delete opts.mask;

    // check if changed
    if (objectIncludes(this.masked, opts)) return;

    this.masked.updateOptions(opts);
    this.updateControl();
  }

  updateCursor(cursorPos) {
    if (cursorPos == null) return;
    this.cursorPos = cursorPos;

    // also queue change cursor for mobile browsers
    this._delayUpdateCursor(cursorPos);
  }

  _delayUpdateCursor(cursorPos) {
    this._abortUpdateCursor();
    this._changingCursorPos = cursorPos;
    this._cursorChanging = setTimeout(() => {
      if (!this.el) return; // if was destroyed
      this.cursorPos = this._changingCursorPos;
      this._abortUpdateCursor();
    }, 10);
  }

  _fireChangeEvents() {
    this.fireEvent('accept');
    if (this.masked.isComplete) this.fireEvent('complete');
  }

  _abortUpdateCursor() {
    if (this._cursorChanging) {
      clearTimeout(this._cursorChanging);
      delete this._cursorChanging;
    }
  }

  alignCursor() {
    this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
  }

  alignCursorFriendly() {
    if (this.selectionStart !== this.cursorPos) return;
    this.alignCursor();
  }

  on(ev, handler) {
    if (!this._listeners[ev]) this._listeners[ev] = [];
    this._listeners[ev].push(handler);
    return this;
  }

  off(ev, handler) {
    if (!this._listeners[ev]) return;
    if (!handler) {
      delete this._listeners[ev];
      return;
    }
    const hIndex = this._listeners[ev].indexOf(handler);
    if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
    return this;
  }

  _onInput() {
    this._abortUpdateCursor();

    const details = new ActionDetails(
    // new state
    this.el.value, this.cursorPos,
    // old state
    this.value, this._selection);

    const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset;

    const cursorPos = this.masked.nearestInputPos(details.startChangePos + offset);

    this.updateControl();
    this.updateCursor(cursorPos);
  }

  _onChange() {
    if (this.value !== this.el.value) {
      this.updateValue();
    }
    this.masked.doCommit();
    this.updateControl();
  }

  _onDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  destroy() {
    this.unbindEvents();
    // $FlowFixMe why not do so?
    this._listeners.length = 0;
    delete this.el;
  }
}

class MaskedNumber extends Masked {
  // TODO deprecarted, remove in 3.0
  constructor(opts) {
    super(_extends$1({}, MaskedNumber.DEFAULTS, opts));
  }

  _update(opts) {
    if (opts.postFormat) {
      console.warn("'postFormat' option is deprecated and will be removed in next release, use plain options instead.");
      Object.assign(opts, opts.postFormat);
      delete opts.postFormat;
    }
    super._update(opts);
    this._updateRegExps();
  }

  _updateRegExps() {
    // use different regexp to process user input (more strict, input suffix) and tail shifting
    const start = '^';

    let midInput = '';
    let mid = '';
    if (this.allowNegative) {
      midInput += '([+|\\-]?|([+|\\-]?(0|([1-9]+\\d*))))';
      mid += '[+|\\-]?';
    } else {
      midInput += '(0|([1-9]+\\d*))';
    }
    mid += '\\d*';

    let end = (this.scale ? '(' + this.radix + '\\d{0,' + this.scale + '})?' : '') + '$';

    this._numberRegExpInput = new RegExp(start + midInput + end);
    this._numberRegExp = new RegExp(start + mid + end);
    this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
    this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
  }

  _extractTail(fromPos = 0, toPos = this.value.length) {
    return this._removeThousandsSeparators(super._extractTail(fromPos, toPos));
  }

  _removeThousandsSeparators(value) {
    return value.replace(this._thousandsSeparatorRegExp, '');
  }

  _insertThousandsSeparators(value) {
    // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    const parts = value.split(this.radix);
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
    return parts.join(this.radix);
  }

  doPrepare(str, ...args) {
    return super.doPrepare(this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix)), ...args);
  }

  appendWithTail(...args) {
    let previousValue = this.value;
    this._value = this._removeThousandsSeparators(this.value);
    let startChangePos = this.value.length;

    const appendDetails = super.appendWithTail(...args);
    this._value = this._insertThousandsSeparators(this.value);

    // calculate offsets after insert separators
    let beforeTailPos = startChangePos + appendDetails.inserted.length;
    for (let pos = 0; pos <= beforeTailPos; ++pos) {
      if (this.value[pos] === this.thousandsSeparator) {
        if (pos < startChangePos ||
        // check high bound
        // if separator is still there - consider it also
        pos === startChangePos && previousValue[pos] === this.thousandsSeparator) {
          ++startChangePos;
        }
        if (pos < beforeTailPos) ++beforeTailPos;
      }
    }

    // adjust details with separators
    appendDetails.rawInserted = appendDetails.inserted;
    appendDetails.inserted = this.value.slice(startChangePos, beforeTailPos);
    appendDetails.shift += startChangePos - previousValue.length;

    return appendDetails;
  }

  nearestInputPos(cursorPos, direction) {
    if (!direction) return cursorPos;

    const nextPos = indexInDirection(cursorPos, direction);
    if (this.value[nextPos] === this.thousandsSeparator) cursorPos += direction;
    return cursorPos;
  }

  doValidate(flags) {
    const regexp = flags.input ? this._numberRegExpInput : this._numberRegExp;

    // validate as string
    let valid = regexp.test(this._removeThousandsSeparators(this.value));

    if (valid) {
      // validate as number
      const number = this.number;
      valid = valid && !isNaN(number) && (
      // check min bound for negative values
      this.min == null || this.min >= 0 || this.min <= this.number) && (
      // check max bound for positive values
      this.max == null || this.max <= 0 || this.number <= this.max);
    }

    return valid && super.doValidate(flags);
  }

  doCommit() {
    const number = this.number;
    let validnum = number;

    // check bounds
    if (this.min != null) validnum = Math.max(validnum, this.min);
    if (this.max != null) validnum = Math.min(validnum, this.max);

    if (validnum !== number) this.unmaskedValue = String(validnum);

    let formatted = this.value;

    if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
    if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);

    this._value = formatted;
    super.doCommit();
  }

  _normalizeZeros(value) {
    const parts = this._removeThousandsSeparators(value).split(this.radix);

    // remove leading zeros
    parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num) => sign + num);
    // add leading zero
    if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

    if (parts.length > 1) {
      parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
      if (!parts[1].length) parts.length = 1; // remove fractional
    }

    return this._insertThousandsSeparators(parts.join(this.radix));
  }

  _padFractionalZeros(value) {
    const parts = value.split(this.radix);
    if (parts.length < 2) parts.push('');
    parts[1] = parts[1].padEnd(this.scale, '0');
    return parts.join(this.radix);
  }

  get number() {
    let numstr = this._removeThousandsSeparators(this._normalizeZeros(this.unmaskedValue)).replace(this.radix, '.');

    return Number(numstr);
  }

  set number(number) {
    this.unmaskedValue = String(number).replace('.', this.radix);
  }

  get allowNegative() {
    return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
  }
}
MaskedNumber.DEFAULTS = {
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: ['.'],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};

class MaskedRegExp extends Masked {
  _update(opts) {
    opts.validate = value => value.search(opts.mask) >= 0;
    super._update(opts);
  }
}

class MaskedFunction extends Masked {
  _update(opts) {
    opts.validate = opts.mask;
    super._update(opts);
  }
}

class MaskedDynamic extends Masked {

  constructor(opts) {
    super(_extends$1({}, MaskedDynamic.DEFAULTS, opts));

    this.currentMask = null;
  }

  _update(opts) {
    super._update(opts);
    this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(m => createMask(m)) : [];
  }

  _append(str, ...args) {
    const oldValueLength = this.value.length;
    const details = new ChangeDetails();

    str = this.doPrepare(str, ...args);

    const inputValue = this.rawInputValue;
    this.currentMask = this.doDispatch(str, ...args);
    if (this.currentMask) {
      // update current mask
      this.currentMask.rawInputValue = inputValue;
      details.shift = this.value.length - oldValueLength;
      details.aggregate(this.currentMask._append(str, ...args));
    }

    return details;
  }

  doDispatch(appended, flags = {}) {
    return this.dispatch(appended, this, flags);
  }

  clone() {
    const m = new MaskedDynamic(this);
    m._value = this.value;
    if (this.currentMask) m.currentMask = this.currentMask.clone();
    return m;
  }

  reset() {
    if (this.currentMask) this.currentMask.reset();
    this.compiledMasks.forEach(cm => cm.reset());
  }

  get value() {
    return this.currentMask ? this.currentMask.value : '';
  }

  set value(value) {
    this.resolve(value);
  }

  get isComplete() {
    return !!this.currentMask && this.currentMask.isComplete;
  }

  _unmask() {
    return this.currentMask ? this.currentMask._unmask() : '';
  }

  remove(...args) {
    if (this.currentMask) this.currentMask.remove(...args);
  }

  extractInput(...args) {
    return this.currentMask ? this.currentMask.extractInput(...args) : '';
  }

  doCommit() {
    if (this.currentMask) this.currentMask.doCommit();
    super.doCommit();
  }

  nearestInputPos(...args) {
    return this.currentMask ? this.currentMask.nearestInputPos(...args) : super.nearestInputPos(...args);
  }
}

MaskedDynamic.DEFAULTS = {
  dispatch: (appended, masked, flags) => {
    if (!masked.compiledMasks.length) return;

    const inputValue = masked.rawInputValue;

    // update all
    masked.compiledMasks.forEach(cm => {
      cm.rawInputValue = inputValue;
      cm._append(appended, flags);
    });

    // pop masks with longer values first
    const inputs = masked.compiledMasks.map((cm, index) => ({ value: cm.rawInputValue.length, index }));
    inputs.sort((i1, i2) => i2.value - i1.value);

    return masked.compiledMasks[inputs[0].index];
  }
};

function IMask(el, opts = {}) {
  // currently available only for input-like elements
  return new InputMask(el, opts);
}

IMask.InputMask = InputMask;

IMask.Masked = Masked;
IMask.MaskedPattern = MaskedPattern;
IMask.MaskedNumber = MaskedNumber;
IMask.MaskedDate = MaskedDate;
IMask.MaskedRegExp = MaskedRegExp;
IMask.MaskedFunction = MaskedFunction;
IMask.MaskedDynamic = MaskedDynamic;
IMask.createMask = createMask;

g.IMask = IMask;

// Icons that are used on this page
var SelectDonationFieldset = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('fieldset', [_c('legend', {
      class: {
        'mb-0': _vm.hasMinimumAmount
      }
    }, [_vm._v("Select your donation amount")]), _vm._v(" "), _vm.hasMinimumAmount ? _c('div', {
      staticClass: "mb-2"
    }, [_c('small', {
      staticClass: "text-muted"
    }, [_vm._v("Minimum accepted amount is $" + _vm._s(_vm.page.options.min_amount))])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "row mb-2",
      class: {
        'was-validated': _vm.errors.amount
      }
    }, [_c('div', {
      staticClass: "col-sm-6"
    }, _vm._l(_vm.amounts.slice(0, _vm.amounts.length / 2), function (value) {
      return _c('div', {
        staticClass: "custom-controls-stacked"
      }, [_c('label', {
        staticClass: "custom-control custom-radio"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model.number",
          value: _vm.form.amount,
          expression: "form.amount",
          modifiers: {
            "number": true
          }
        }],
        staticClass: "custom-control-input",
        class: {
          'is-invalid': _vm.errors.amount
        },
        attrs: {
          "type": "radio"
        },
        domProps: {
          "value": value,
          "checked": _vm._q(_vm.form.amount, _vm._n(value))
        },
        on: {
          "change": function change($event) {
            _vm.$set(_vm.form, "amount", _vm._n(value));
          }
        }
      }), _vm._v(" "), _c('span', {
        staticClass: "custom-control-indicator"
      }), _vm._v(" "), _c('span', {
        staticClass: "custom-control-label"
      }, [_vm._v("$" + _vm._s(value))])])]);
    })), _vm._v(" "), _c('div', {
      staticClass: "col-sm-6"
    }, _vm._l(_vm.amounts.slice(_vm.amounts.length / 2), function (value) {
      return _c('div', {
        staticClass: "custom-controls-stacked"
      }, [_c('label', {
        staticClass: "custom-control custom-radio"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model.number",
          value: _vm.form.amount,
          expression: "form.amount",
          modifiers: {
            "number": true
          }
        }],
        staticClass: "custom-control-input",
        class: {
          'is-invalid': _vm.errors.amount
        },
        attrs: {
          "type": "radio"
        },
        domProps: {
          "value": value,
          "checked": _vm._q(_vm.form.amount, _vm._n(value))
        },
        on: {
          "change": function change($event) {
            _vm.$set(_vm.form, "amount", _vm._n(value));
          }
        }
      }), _vm._v(" "), _c('span', {
        staticClass: "custom-control-indicator"
      }), _vm._v(" "), _c('span', {
        staticClass: "custom-control-label"
      }, [_vm._v("$" + _vm._s(value))])])]);
    }))]), _vm._v(" "), _c('div', {
      staticClass: "row",
      class: {
        'was-validated': _vm.errors.amount
      }
    }, [_vm._m(0), _vm._v(" "), _c('div', {
      staticClass: "col-sm-6"
    }, [_c('div', {
      staticClass: "input-group"
    }, [_vm._m(1), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: _vm.form.amount,
        expression: "form.amount",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "form-control",
      class: {
        'is-invalid': _vm.errors.amount
      },
      attrs: {
        "type": "text",
        "name": "amount",
        "id": "amount",
        "placeholder": "10.00"
      },
      domProps: {
        "value": _vm.form.amount
      },
      on: {
        "input": function input($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.$set(_vm.form, "amount", _vm._n($event.target.value));
        },
        "blur": function blur($event) {
          _vm.$forceUpdate();
        }
      }
    })])])]), _vm._v(" "), _vm.page.site.recurring && !_vm.page.options.recurring_only ? _c('div', {
      staticClass: "form-group mt-3"
    }, [_c('label', {
      domProps: {
        "innerHTML": _vm._s(_vm.recurringMessage)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "btn-group"
    }, [_c('button', {
      staticClass: "btn",
      class: {
        'btn-success': !_vm.form.recurring,
        'btn-secondary': !!_vm.form.recurring
      },
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          _vm.form.recurring = 0;
        }
      }
    }, [_vm._v("One-Time")]), _vm._v(" "), _c('button', {
      staticClass: "btn",
      class: {
        'btn-success': !!_vm.form.recurring,
        'btn-secondary': !_vm.form.recurring
      },
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          _vm.form.recurring = 1;
        }
      }
    }, [_vm._v("Monthly")])]), _vm._v(" "), !_vm.recurring ? _c('small', {
      staticClass: "text-muted form-text"
    }, [_vm._v("You are making a single donation of the amount entered above. Click the 'monthly' button to make your gift go further as an automatic monthly donation.")]) : _vm._e(), _vm._v(" "), !!_vm.recurring ? _c('small', {
      staticClass: "text-muted form-text"
    }, [_vm._v("This amount will be charged automatically once each month, on or about the " + _vm._s(_vm.chargeDate) + ". You may cancel your donation at any time by contacting us.")]) : _vm._e()]) : _vm.page.site.recurring && _vm.page.options.recurring_only ? _c('div', {
      staticClass: "alert alert-warning mt-3"
    }, [_c('h5', {
      staticClass: "alert-heading"
    }, [_c('icon', {
      attrs: {
        "name": "warning"
      }
    }), _vm._v(" Monthly Donation")], 1), _vm._v(" "), _vm.page.options.recur_message ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(_vm.page.options.recur_message)
      }
    }) : _c('div', [_vm._v(" Please note that this will be a monthly recurring donation. The amount you select will be charged automatically once each month on or about the " + _vm._s(_vm.chargeDate) + ". You may cancel your donation at any time by contacting us. ")])]) : _vm._e()]);
  },
  staticRenderFns: [function () {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('label', {
      staticClass: "col-sm-6 col-form-label",
      attrs: {
        "for": "amount"
      }
    }, [_c('span', {
      staticClass: "text-bold"
    }, [_vm._v("Your Amount")])]);
  }, function () {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('label', {
      staticClass: "input-group-prepend",
      attrs: {
        "for": "amount"
      }
    }, [_c('div', {
      staticClass: "input-group-text"
    }, [_vm._v("$")])]);
  }],
  name: 'select-donation-fieldset',
  components: {
    Icon: Icon
  },
  mixins: [FormComponent],
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

var VerticalDonationForm = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-5 col-lg-4"
    }, [_c('select-donation-fieldset', {
      attrs: {
        "form": _vm.form,
        "errors": _vm.errors,
        "page": _vm.page
      }
    }), _vm._v(" "), _c('contact-info-fieldset', {
      attrs: {
        "form": _vm.form,
        "errors": _vm.errors,
        "page": _vm.page
      }
    }), _vm._v(" "), _c('payment-info-fieldset', {
      attrs: {
        "form": _vm.form,
        "errors": _vm.errors,
        "page": _vm.page
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "col-md-7 col-lg-8",
      domProps: {
        "innerHTML": _vm._s(_vm.page.body)
      }
    })]);
  },
  staticRenderFns: [],
  components: {
    ContactInfoFieldset: ContactInfoFieldset,
    PaymentInfoFieldset: PaymentInfoFieldset,
    SelectDonationFieldset: SelectDonationFieldset
  },
  mixins: [FormComponent]
};

var HorizontalDonationForm = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-sm-12",
      domProps: {
        "innerHTML": _vm._s(_vm.page.body)
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-4"
    }, [_c('select-donation-fieldset', {
      attrs: {
        "form": _vm.form,
        "errors": _vm.errors,
        "page": _vm.page
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "col-md-4"
    }, [_c('contact-info-fieldset', {
      attrs: {
        "form": _vm.form,
        "errors": _vm.errors,
        "page": _vm.page
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "col-md-4"
    }, [_c('payment-info-fieldset', {
      attrs: {
        "form": _vm.form,
        "errors": _vm.errors,
        "page": _vm.page
      }
    })], 1)])]);
  },
  staticRenderFns: [],
  components: {
    ContactInfoFieldset: ContactInfoFieldset,
    PaymentInfoFieldset: PaymentInfoFieldset,
    SelectDonationFieldset: SelectDonationFieldset
  },
  mixins: [FormComponent]
};

var VerticalPetitionForm = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-5 col-lg-4"
    }, [_c('contact-info-fieldset', {
      attrs: {
        "form": _vm.form,
        "errors": _vm.errors,
        "page": _vm.page
      }
    }), _vm._v(" "), _vm.page.options.add_comment ? _c('textarea-field', {
      attrs: {
        "id": "comment",
        "label": _vm.commentMessage
      },
      model: {
        value: _vm.form.comment,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "comment", $$v);
        },
        expression: "form.comment"
      }
    }) : _vm._e(), _vm._v(" "), _c('activity-button', {
      attrs: {
        "size": "lg",
        "type": "submit",
        "orientation": "right",
        "activity": _vm.submitting,
        "block": true,
        "label": _vm.buttonLabel || _vm.page.site.config.giveworks.button.petition
      }
    }), _vm._v(" "), _vm.page.options.add_optin ? _c('div', [_c('label', {
      staticClass: "custom-control custom-checkbox"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.optin,
        expression: "form.optin"
      }],
      staticClass: "custom-control-input",
      attrs: {
        "type": "checkbox",
        "checked": "checked"
      },
      domProps: {
        "checked": Array.isArray(_vm.form.optin) ? _vm._i(_vm.form.optin, null) > -1 : _vm.form.optin
      },
      on: {
        "change": function change($event) {
          var $$a = _vm.form.optin,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;

          if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);

            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.form, "optin", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.form, "optin", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.form, "optin", $$c);
          }
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "custom-control-indicator"
    }), _vm._v(" "), _c('small', {
      staticClass: "custom-control-label text-muted form-text",
      domProps: {
        "innerHTML": _vm._s(_vm.optinMessage)
      }
    })])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "col-md-7 col-lg-8",
      domProps: {
        "innerHTML": _vm._s(_vm.page.body)
      }
    })]);
  },
  staticRenderFns: [],
  components: {
    ContactInfoFieldset: ContactInfoFieldset,
    SelectDonationFieldset: SelectDonationFieldset
  },
  mixins: [FormComponent]
};

var HorizontalPetitionForm = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-sm-12",
      domProps: {
        "innerHTML": _vm._s(_vm.page.body)
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-6"
    }, [_c('contact-info-fieldset', {
      attrs: {
        "page": _vm.page,
        "form": _vm.form,
        "errors": _vm.errors
      }
    }), _vm._v(" "), _vm.page.options.add_comment ? _c('textarea-field', {
      attrs: {
        "id": "comment",
        "label": _vm.commentMessage
      },
      model: {
        value: _vm.form.comment,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "comment", $$v);
        },
        expression: "form.comment"
      }
    }) : _vm._e(), _vm._v(" "), _c('activity-button', {
      attrs: {
        "type": "submit",
        "size": "lg",
        "orientation": "right",
        "block": true,
        "label": _vm.buttonLabel || _vm.page.site.config.giveworks.button.petition
      }
    }), _vm._v(" "), _vm.page.options.add_optin ? _c('div', [_c('label', {
      staticClass: "custom-control custom-checkbox"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.optin,
        expression: "form.optin"
      }],
      staticClass: "custom-control-input",
      attrs: {
        "type": "checkbox",
        "checked": "checked"
      },
      domProps: {
        "checked": Array.isArray(_vm.form.optin) ? _vm._i(_vm.form.optin, null) > -1 : _vm.form.optin
      },
      on: {
        "change": function change($event) {
          var $$a = _vm.form.optin,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;

          if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);

            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.form, "optin", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.form, "optin", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.form, "optin", $$c);
          }
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "custom-control-indicator"
    }), _vm._v(" "), _c('small', {
      staticClass: "custom-control-label text-muted form-text",
      domProps: {
        "innerHTML": _vm._s(_vm.optinMessage)
      }
    })])]) : _vm._e()], 1)])]);
  },
  staticRenderFns: [],
  components: {
    ContactInfoFieldset: ContactInfoFieldset,
    SelectDonationFieldset: SelectDonationFieldset
  },
  mixins: [FormComponent]
};

var GoToWebinar = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('fieldset', [_c('legend', [_vm._v("Your information")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('input-field', {
      attrs: {
        "id": "first",
        "label": "First Name*",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.first,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "first", $$v);
        },
        expression: "form.first"
      }
    }), _vm._v(" "), _c('input-field', {
      attrs: {
        "id": "last",
        "label": "Last Name*",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.last,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "last", $$v);
        },
        expression: "form.last"
      }
    }), _vm._v(" "), _c('input-field', {
      attrs: {
        "id": "email",
        "label": "Email*",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.email,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "email", $$v);
        },
        expression: "form.email"
      }
    }), _vm._v(" "), _vm.page.options.show_source ? _c('input-field', {
      attrs: {
        "id": "source",
        "label": "Source",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.source,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "source", $$v);
        },
        expression: "form.source"
      }
    }) : _vm._e(), _vm._v(" "), _vm.page.options.show_address ? _c('input-field', {
      attrs: {
        "id": "address",
        "label": "Address",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.address,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "address", $$v);
        },
        expression: "form.address"
      }
    }) : _vm._e(), _vm._v(" "), _vm.page.options.show_state ? _c('input-field', {
      attrs: {
        "id": "state",
        "label": "State",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.state,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "state", $$v);
        },
        expression: "form.state"
      }
    }) : _vm._e(), _vm._v(" "), _vm.page.options.show_zip ? _c('input-field', {
      attrs: {
        "id": "zip_code",
        "label": "Zip Code",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.zip_code,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "zip_code", $$v);
        },
        expression: "form.zip_code"
      }
    }) : _vm._e(), _vm._v(" "), _vm.page.options.show_country ? _c('input-field', {
      attrs: {
        "id": "country",
        "label": "Country",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.country,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "country", $$v);
        },
        expression: "form.country"
      }
    }) : _vm._e(), _vm._v(" "), _vm.page.options.show_phone ? _c('input-field', {
      attrs: {
        "id": "phone",
        "label": "Phone",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.phone,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "phone", $$v);
        },
        expression: "form.phone"
      }
    }) : _vm._e(), _vm._v(" "), _vm.page.options.show_organization ? _c('input-field', {
      attrs: {
        "id": "organization",
        "label": "Organization",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.organization,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "organization", $$v);
        },
        expression: "form.organization"
      }
    }) : _vm._e(), _vm._v(" "), _vm.page.options.show_job_title ? _c('input-field', {
      attrs: {
        "id": "job_title",
        "label": "Job Title",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.job_title,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "job_title", $$v);
        },
        expression: "form.job_title"
      }
    }) : _vm._e(), _vm._v(" "), _vm.page.options.show_questions ? _c('textarea-field', {
      attrs: {
        "id": "questions_comments",
        "label": "Questions and Comments",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.questions_comments,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "questions_comments", $$v);
        },
        expression: "form.questions_comments"
      }
    }) : _vm._e(), _vm._v(" "), _vm.page.options.show_industry ? _c('input-field', {
      attrs: {
        "id": "industry",
        "label": "Industry",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.industry,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "industry", $$v);
        },
        expression: "form.industry"
      }
    }) : _vm._e(), _vm._v(" "), _vm.page.options.show_employees ? _c('input-field', {
      attrs: {
        "id": "number_employees",
        "label": "Number of Employees",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.number_employees,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "number_employees", $$v);
        },
        expression: "form.number_employees"
      }
    }) : _vm._e(), _vm._v(" "), _vm.page.options.show_timeframe ? _c('input-field', {
      attrs: {
        "id": "purchasing_timeframe",
        "label": "Purchasing Timeframe",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.purchasing_timeframe,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "purchasing_timeframe", $$v);
        },
        expression: "form.purchasing_timeframe"
      }
    }) : _vm._e(), _vm._v(" "), _vm.page.options.show_role ? _c('input-field', {
      attrs: {
        "id": "purchasing_role",
        "label": "Purchasing Role",
        "errors": _vm.errors
      },
      model: {
        value: _vm.form.purchasing_role,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "purchasing_role", $$v);
        },
        expression: "form.purchasing_role"
      }
    }) : _vm._e()], 1);
  },
  staticRenderFns: [function () {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('p', [_c('em', [_vm._v("* Indicates required fields")])]);
  }],
  name: 'go-to-webinar',
  mixins: [FormComponent]
};

var VerticalSignupForm = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-5 col-lg-4"
    }, [_c(_vm.page.options.service, {
      tag: "component",
      attrs: {
        "page": _vm.page,
        "form": _vm.form,
        "errors": _vm.errors
      }
    }), _vm._v(" "), _c('activity-button', {
      attrs: {
        "size": "lg",
        "type": "submit",
        "orientation": "right",
        "activity": _vm.submitting,
        "block": true,
        "label": _vm.buttonLabel || _vm.page.site.config.giveworks.button.signup
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "col-md-7 col-lg-8",
      domProps: {
        "innerHTML": _vm._s(_vm.page.body)
      }
    })]);
  },
  staticRenderFns: [],
  components: {
    GoToWebinar: GoToWebinar
  },
  mixins: [FormComponent]
};

var HorizontalSignupForm = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-5 col-lg-4"
    }, [_vm._v(" " + _vm._s(_vm.page.options.service) + " ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-7 col-lg-8",
      domProps: {
        "innerHTML": _vm._s(_vm.page.body)
      }
    })]);
  },
  staticRenderFns: [],
  components: {
    GoToWebinar: GoToWebinar
  },
  mixins: [FormComponent]
};

var SurveyField = {
  props: {
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
    changed: function changed(el, binding, vnode) {
      el.addEventListener('change', function (event) {
        if (event.target.checked && isFunction_1$1(binding.value)) {
          binding.value(el);
        }
      });
    }
  }
};

var AltEmailField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('input-field', {
      attrs: {
        "type": "email",
        "placeholder": "Email Address",
        "name": _vm.name,
        "value": _vm.value,
        "id": _vm.question.id,
        "label": _vm.question.question,
        "errors": _vm.errors
      },
      on: {
        "input": _vm.updated
      }
    });
  },
  staticRenderFns: [],
  name: 'survey-alt-email-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var AltPhoneField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('input-field', {
      attrs: {
        "type": "phone",
        "name": _vm.name,
        "value": _vm.value,
        "id": _vm.question.id,
        "label": _vm.question.question,
        "errors": _vm.errors
      },
      on: {
        "input": _vm.updated
      }
    });
  },
  staticRenderFns: [],
  name: 'survey-alt-phone-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var CheckboxField$1 = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', {
      class: {
        'is-invalid': !!_vm.invalidFeedback
      }
    }, [_c('label', {
      domProps: {
        "innerHTML": _vm._s(_vm.question.question)
      }
    }, [_vm._v(" " + _vm._s(_vm.question.question) + " "), _vm.question.required ? _c('sup', [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _vm._l(_vm.question.answers, function (answer, key) {
      return _c('checkbox-field', {
        key: key,
        attrs: {
          "value": answer,
          "checkedValues": _vm.value,
          "name": _vm.name,
          "id": "".concat(_vm.name, "_").concat(key)
        },
        on: {
          "change": _vm.updated
        }
      }, [_vm._v(" " + _vm._s(answer) + " ")]);
    }), _vm._v(" "), _c('checkbox-field', {
      directives: [{
        name: "changed",
        rawName: "v-changed"
      }],
      attrs: {
        "value": "other",
        "name": _vm.name,
        "id": "".concat(_vm.name, "_50"),
        "checkedValues": _vm.value
      },
      on: {
        "change": _vm.updated
      }
    }, [_vm._v(" Other: ")]), _vm._v(" "), _c('input', {
      staticClass: "form-control",
      class: {
        'is-invalid': _vm.errors[_vm.name]
      },
      attrs: {
        "type": "text",
        "name": "".concat(_vm.name, "_other"),
        "id": "".concat(_vm.name, "_other")
      },
      on: {
        "input": function input($event) {
          _vm.updated($event.target.value);
        }
      }
    }), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'survey-checkbox-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var CityField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('input-field', {
      attrs: {
        "name": "city",
        "id": "city",
        "placeholder": "City",
        "value": _vm.value,
        "label": _vm.question.question,
        "errors": _vm.errors
      },
      on: {
        "input": _vm.updated
      }
    });
  },
  staticRenderFns: [],
  name: 'survey-city-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice$1(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice$1 = baseSlice$1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax$7 = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? _isIterateeCall$1(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax$7(toInteger_1$1(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = _baseSlice$1(array, index, (index += size));
  }
  return result;
}

var chunk_1 = chunk;

var DollarAmountField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', [_c('fieldset', [_c('legend', [_vm._v("Select an amount")]), _vm._v(" "), _vm._l(_vm.amounts, function (chunk) {
      return _c('div', {
        staticClass: "row"
      }, _vm._l(chunk, function (amount) {
        return _c('div', {
          staticClass: "col-sm-6"
        }, [_c('radio-field', {
          attrs: {
            "name": "donation",
            "value": amount
          }
        }, [_vm._v("$" + _vm._s(amount))])], 1);
      }));
    }), _vm._v(" "), _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-6"
    }, [_c('label', {
      attrs: {
        "for": _vm.question.id
      },
      domProps: {
        "innerHTML": _vm._s(_vm.question.question)
      }
    }), _vm._v(" "), _c('input-group', [_c('input-group-prepend', {
      attrs: {
        "text": ""
      }
    }, [_vm._v("$")]), _vm._v(" "), _c('input', {
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "name": "field_".concat(_vm.question.id)
      },
      domProps: {
        "value": _vm.value
      }
    })], 1)], 1)])], 2)]);
  },
  staticRenderFns: [],
  name: 'survey-dollar-amount-field',
  extends: SurveyField,
  computed: {
    amounts: function amounts() {
      var _this = this;

      var values = this.question.answers ? this.question.answers.split('|') : this.page.site.config.giveworks.ask_amounts;
      return chunk_1(values.filter(function (value) {
        return value >= (parseFloat(_this.page.options.min_amount) || 0);
      }), 2);
    }
  }
};

var FirstField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('input-field', {
      attrs: {
        "id": "first",
        "name": "first",
        "placeholder": "First Name",
        "value": _vm.value,
        "label": _vm.question.question,
        "errors": _vm.errors
      },
      on: {
        "input": _vm.updated
      }
    });
  },
  staticRenderFns: [],
  name: 'survey-first-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var InputField$1 = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('input-field', {
      attrs: {
        "name": _vm.name,
        "value": _vm.value,
        "id": _vm.question.id,
        "label": _vm.question.question,
        "errors": _vm.errors
      },
      on: {
        "input": _vm.updated
      }
    });
  },
  staticRenderFns: [],
  name: 'survey-input-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var LastField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('input-field', {
      attrs: {
        "id": "last",
        "name": "last",
        "placeholder": "Last Name",
        "value": _vm.value,
        "label": _vm.question.question,
        "errors": _vm.errors
      },
      on: {
        "input": _vm.updated
      }
    });
  },
  staticRenderFns: [],
  name: 'survey-last-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var PrimaryEmailField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('input-field', {
      attrs: {
        "type": "email",
        "name": "email",
        "placeholder": "Email Address",
        "id": "email",
        "value": _vm.value,
        "label": _vm.question.question,
        "errors": _vm.errors
      },
      on: {
        "input": _vm.updated
      }
    });
  },
  staticRenderFns: [],
  name: 'survey-primary-email-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var PrimaryPhoneField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('input-field', {
      attrs: {
        "type": "phone",
        "name": "phone",
        "id": "phone",
        "value": _vm.value,
        "label": _vm.question.question,
        "errors": _vm.errors
      },
      on: {
        "input": _vm.updated
      }
    });
  },
  staticRenderFns: [],
  name: 'survey-primary-phone-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var RadioField$1 = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', {
      class: {
        'is-invalid': !!_vm.invalidFeedback
      }
    }, [_c('label', {
      domProps: {
        "innerHTML": _vm._s(_vm.question.question)
      }
    }, [_vm._v(" " + _vm._s(_vm.question.question) + " "), _vm.question.required ? _c('sup', [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _vm._l(_vm.question.answers, function (answer, key) {
      return _c('radio-field', {
        key: key,
        attrs: {
          "value": answer,
          "checkedValue": _vm.value,
          "name": _vm.name,
          "id": "".concat(_vm.name, "_").concat(key)
        },
        on: {
          "change": _vm.updated
        }
      }, [_vm._v(" " + _vm._s(answer) + " ")]);
    }), _vm._v(" "), _c('radio-field', {
      directives: [{
        name: "changed",
        rawName: "v-changed"
      }],
      attrs: {
        "value": "other",
        "name": _vm.name,
        "id": "".concat(_vm.name, "_50"),
        "checkedValue": _vm.value
      },
      on: {
        "change": _vm.updated
      }
    }, [_vm._v(" Other: ")]), _vm._v(" "), _c('input', {
      staticClass: "form-control",
      class: {
        'is-invalid': _vm.errors[_vm.name]
      },
      attrs: {
        "type": "text",
        "name": "".concat(_vm.name, "_other"),
        "id": "".concat(_vm.name, "_other")
      },
      on: {
        "input": function input($event) {
          _vm.updated($event.target.value);
        }
      }
    }), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'survey-radio-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var SelectField$1 = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('select-field', {
      attrs: {
        "value": _vm.value,
        "label": _vm.question.question,
        "name": "field_".concat(_vm.question.id),
        "id": _vm.question.id,
        "errors": _vm.errors
      },
      on: {
        "input": _vm.updated
      }
    }, _vm._l(_vm.question.answers, function (value, key) {
      return _c('option', {
        domProps: {
          "value": value,
          "innerHTML": _vm._s(value)
        }
      });
    }));
  },
  staticRenderFns: [],
  name: 'survey-select-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var StateField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('select-field', {
      attrs: {
        "name": "state",
        "value": _vm.value,
        "id": _vm.question.id,
        "label": _vm.question.question,
        "errors": _vm.errors
      },
      on: {
        "input": _vm.updated
      }
    }, _vm._l(_vm.page.site.config.states, function (label, value) {
      return _c('option', {
        domProps: {
          "value": value,
          "innerHTML": _vm._s(label)
        }
      });
    }));
  },
  staticRenderFns: [],
  name: 'survey-state-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var StreetField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('input-field', {
      attrs: {
        "id": "street",
        "placeholder": "Street Address",
        "value": _vm.value,
        "name": _vm.street,
        "label": _vm.question.question,
        "errors": _vm.errors
      },
      on: {
        "input": _vm.updated
      }
    });
  },
  staticRenderFns: [],
  name: 'survey-street-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var TextareaField$1 = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('textarea-field', {
      attrs: {
        "value": _vm.value,
        "label": _vm.question.question,
        "name": "field_".concat(_vm.question.id),
        "id": _vm.question.id,
        "errors": _vm.errors
      },
      on: {
        "input": _vm.updated
      }
    });
  },
  staticRenderFns: [],
  name: 'survey-textarea-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var ZipField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('input-field', {
      attrs: {
        "id": "zip",
        "name": "zip",
        "value": _vm.value,
        "label": _vm.question.question,
        "errors": _vm.errors,
        "placeholder": "Zip Code (5 digits)",
        "x_autocompletetype": "postal-code"
      },
      on: {
        "input": _vm.updated
      }
    });
  },
  staticRenderFns: [],
  name: 'survey-zip-field',
  extends: SurveyField,
  mixins: [FormControl$1]
};

var COMPONENTS = {
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
var VerticalSurveyForm = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-5 col-lg-4"
    }, [_vm._l(_vm.page.questions, function (question) {
      return _c('div', [_c(_vm.component(question.type), {
        tag: "component",
        attrs: {
          "value": _vm.form["field_".concat(question.id)],
          "name": "field_".concat(question.id),
          "page": _vm.page,
          "errors": _vm.errors,
          "question": question
        }
      })], 1);
    }), _vm._v(" "), _c('activity-button', {
      attrs: {
        "size": "lg",
        "type": "submit",
        "block": true,
        "orientation": "right",
        "activity": _vm.submitting,
        "label": _vm.buttonLabel || _vm.page.site.config.giveworks.button.survey
      }
    })], 2), _vm._v(" "), _c('div', {
      staticClass: "col-md-7 col-lg-8",
      domProps: {
        "innerHTML": _vm._s(_vm.page.body)
      }
    })]);
  },
  staticRenderFns: [],
  components: {
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
    TextareaField: TextareaField$1,
    ZipField: ZipField
  },
  mixins: [FormComponent],
  methods: {
    component: function component(name) {
      return COMPONENTS[name] || name;
    }
  }
};

var RESERVED_FIELDS = ['email', 'phone', 'first', 'last', 'street', 'city', 'state', 'zip'];
var HorizontalSurveyForm = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-sm-12",
      domProps: {
        "innerHTML": _vm._s(_vm.page.body)
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "row"
    }, _vm._l(_vm.questions, function (chunk, i) {
      return _c('div', {
        staticClass: "col-md-4"
      }, [_vm._l(chunk, function (question) {
        return _c('div', [_vm._v(" " + _vm._s(_vm.name(question)) + " "), _c(_vm.component(question.type), {
          tag: "component",
          attrs: {
            "name": _vm.name(question),
            "page": _vm.page,
            "value": _vm.form[_vm.name(question)],
            "errors": _vm.errors,
            "question": question
          },
          model: {
            value: _vm.form[_vm.name(question)],
            callback: function callback($$v) {
              _vm.$set(_vm.form, _vm.name(question), $$v);
            },
            expression: "form[name(question)]"
          }
        })], 1);
      }), _vm._v(" "), i === 2 ? _c('activity-button', {
        attrs: {
          "size": "lg",
          "type": "submit",
          "block": true,
          "orientation": "right",
          "activity": _vm.submitting,
          "label": _vm.buttonLabel || _vm.page.site.config.giveworks.button.survey
        }
      }) : _vm._e()], 2);
    }))]);
  },
  staticRenderFns: [],
  extends: VerticalSurveyForm,
  methods: {
    name: function name(question) {
      return RESERVED_FIELDS.indexOf(question.type) !== -1 ? question.type : "field_".concat(question.id);
    }
  },
  computed: {
    questions: function questions() {
      return chunk_1(this.page.questions, Math.ceil(this.page.questions.length / 3));
    }
  }
};

var GiveworksForm = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.page.id ? _c('div', [_c('form', {
      attrs: {
        "novalidate": "novalidate"
      },
      on: {
        "submit": function submit($event) {
          $event.preventDefault();
          return _vm.submit($event);
        }
      }
    }, [_c(_vm.pageTypeComponent, {
      tag: "component",
      attrs: {
        "orientation": _vm.orientation,
        "submitting": _vm.submitting,
        "form": _vm.form,
        "errors": _vm.errors,
        "page": _vm.page
      }
    })], 1)]) : _vm.error ? _c('div', [_c('div', {
      staticClass: "center-wrapper"
    }, [_c('div', {
      staticClass: "center-content"
    }, [_c('http-error-response', {
      attrs: {
        "min-width": "400px",
        "error": _vm.error
      }
    })], 1)])]) : _c('div', [_c('activity-indicator', {
      attrs: {
        "center": true,
        "size": "xl"
      }
    })], 1);
  },
  staticRenderFns: [],
  name: 'giveworks-form',
  components: {
    HorizontalDonationForm: HorizontalDonationForm,
    VerticalDonationForm: VerticalDonationForm,
    HorizontalPetitionForm: HorizontalPetitionForm,
    VerticalPetitionForm: VerticalPetitionForm,
    HorizontalSignupForm: HorizontalSignupForm,
    VerticalSignupForm: VerticalSignupForm,
    HorizontalSurveyForm: HorizontalSurveyForm,
    VerticalSurveyForm: VerticalSurveyForm,
    HttpErrorResponse: HttpErrorResponse
  },
  props: {
    data: [Boolean, Object],
    redirect: [Boolean, String],
    pageId: [Boolean, Number, String],
    apiKey: {
      type: String,
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
    pageTypeComponent: function pageTypeComponent() {
      return this.orientation + '-' + this.page.special + '-form';
    }
  },
  methods: {
    hide: function hide() {
      this.$el.querySelector('[type=submit]').style.display = 'none';
    },
    show: function show() {
      this.$el.querySelector('[type=submit]').style.display = 'block';
    },
    disable: function disable() {
      this.$el.querySelector('[type=submit]').disabled = true;
    },
    enable: function enable() {
      this.$el.querySelector('[type=submit]').disabled = false;
    },
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
    submit: function submit() {
      this.$dispatch.request('form:submit').then(function (response) {
        console.log(response);
      }, function (error) {
        console.log(error);
      });
    }
  },
  data: function data() {
    return {
      form: {},
      page: this.data || {},
      error: null,
      errors: {},
      submitting: false,
      model: new Page({
        id: this.page.id
      })
    };
  },
  created: function created() {
    Request.option(HttpConfig);
    Request.option({
      headers: {
        Authorization: 'Bearer ' + this.apiKey
      }
    });
  },
  mounted: function mounted() {
    var _this = this;

    this.model.find(this.pageId).then(function (model) {
      _this.page = model.toJson();
    }, function (error) {
      _this.error = error;
    });
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;

    var replies = {
      'submit:show': 'show',
      'submit:hide': 'hide',
      'submit:enable': 'enable',
      'submit:disable': 'disable'
    };

    each$1(replies, function (method, name) {
      _this2.$dispatch.reply(name, function (resolve, reject) {
        try {
          resolve(_this2[method]());
        } catch (error) {
          reject(error);
        }
      });
    });

    this.$dispatch.on('form:submit', function (data) {
      var el = _this2.$el.querySelector(':focus');

      if (el) {
        el.blur();
      }
    });
    this.$dispatch.reply('form:redirect', function (resolve, reject, url) {
      try {
        var location = url || _this2.redirect || _this2.page.next_page.url;
        setTimeout(function () {
          window.location = location;
        });
        resolve(location);
      } catch (e) {
        reject(e);
      }
    });
    this.$dispatch.reply('form', function (resolve, reject) {
      resolve(_this2);
    });
    this.$dispatch.reply('form:submit', function (resolve, reject) {
      if (!_this2.submitting) {
        _this2.showActivity();

        _this2.submitting = true;

        _this2.$set(_this2, 'errors', {});

        _this2.$dispatch.emit('form:submit', _this2.form, _this2);

        _this2.model.initialize(_this2.form);

        _this2.model.set('id', _this2.pageId);

        return _this2.model.create(_this2.form).then(function (response) {
          _this2.submitting = false;

          _this2.$dispatch.emit('form:submit:complete', true, response, _this2);

          _this2.$dispatch.emit('form:submit:success', response, _this2);

          _this2.$dispatch.request('form:redirect');

          resolve(response);
        }, function (error) {
          _this2.hideActivity();

          _this2.submitting = false;
          _this2.errors = error.errors;

          _this2.$dispatch.emit('form:submit:complete', false, _this2.errors, _this2);

          _this2.$dispatch.emit('form:submit:error', _this2.errors, _this2);

          reject(error);
        });
      } else {
        reject(new Error('The form is already submitting'));
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$dispatch.off('form:submit');
    this.$dispatch.stopReply('form:submit');
    this.$dispatch.stopReply('submit:enable');
    this.$dispatch.stopReply('submit:disable');
    this.$dispatch.stopReply('submit:show');
    this.$dispatch.stopReply('submit:hide');
  }
};

function is(instance, proto) {
    return instance instanceof proto;
}

function isFunction$2(subject) {
    return subject !== null && typeof subject === "function";
}

class BroadcastEvent {

    constructor(key, callback) {
        this.key = key;
        this.allowMultipleEmits = true;

        if(isFunction$2(callback)) {
            this.handle = callback;
        }
    }

    allowsMultipleEmits() {
        return !!this.allowMultipleEmits;
    }

    once() {
        this.allowMultipleEmits = false;

        return this;
    }

    handle() {
        //
    }

}

class BroadcastReply {

    constructor(key, callback) {
        this.key = key;
        this.allowMultipleRequests = false;

        if(typeof callback === "function") {
            this.handle = callback;
        }
    }

    allowsMultipleRequests() {
        return !!this.allowMultipleRequests;
    }

    once() {
        this.allowMultipleRequests = true;

        return this;
    }

    handle() {
        //
    }

}

class Dispatcher {

    constructor(channel) {
        this.channel = channel;
        this._events = [];
        this._replies = [];
    }

    createEvent(key, callback) {
        return !is(key, BroadcastEvent) ? new BroadcastEvent(key, callback) : key;
    }

    hasEvent(key) {
        return !!this.getEvent(key);
    }

    getEvent(key) {
        return this._events[key] || null;
    }

    setEvent(key, value) {
        if(key instanceof BroadcastEvent) {
            value = key;
            key = value.key;
        }

        if(!value instanceof BroadcastEvent) {
            throw new Error('The value argument must be an instance of BroadcastEvent');
        }

        return this._events[key] = value;
    }

    getEvents() {
        return this._events;
    }

    on(key, callback) {
        const event = this.createEvent(key, callback);

        this._events.push(event);

        return event;
    }

    once(key, callback) {
        const event = this.createEvent(key, callback);

        this.on(event.once());

        return event;
    }

    off(key) {
        const removed = [];

        for(let i in this._events) {
            if(is(key, BroadcastEvent) && key == this._events[i] || key === this._events[i].key) {
                removed.push(this._events[i]);
                delete this._events[i];
            }
        }

        return removed;
    }

    emit(event) {
        const args = [].slice.call(arguments).slice(1);

        for(let i in this._events) {
            if(this._events[i].key === (event.key || event)) {
                this._events[i].handle.apply(this, args);

                if(!this._events[i].allowsMultipleEmits()) {
                    delete this._events[i];
                }
            }
        }
    }

    createReply(key, callback) {
        return !is(key, BroadcastReply) ? new BroadcastReply(key, callback) : key;
    }

    hasReply(key) {
        return !!this.getReply(key);
    }

    getReply(key) {
        return this._replies[key] || null;
    }

    setReply(key, value) {
        if(key instanceof BroadcastReply) {
            value = key;
            key = value.key;
        }

        if(!value instanceof BroadcastReply) {
            throw new Error('The value argument must be an instance of BroadcastReply');
        }

        return this._replies[key] = value;
    }

    getReplies() {
        return this._replies;
    }

    request(reply, context) {
        const args = [].slice.call(arguments).slice(1);

        if(!this._replies[reply.key || reply]) {
            throw new Error('No BroadcastReply exists by the name "'+(reply.key || reply)+'"!');
        }

        const handle = this._replies[reply.key || reply].handle;

        return new Promise(function(resolve, reject) {
            handle.apply(this, [resolve, reject].concat(args));
        });
    }

    reply(key, callback) {
        const reply = this.createReply(key, callback);

        return this._replies[reply.key] = reply;
    }

    stopReply(key) {
        delete this._replies[reply.key || reply];
    }

}

//import 'es6-promise/auto';

class BroadcastManager {

    constructor(channel) {
        this._dispatchers = {};
        this.defaultChannel = 'app';
        this.dispatch(channel || this.defaultChannel);
    }

    dispatch(channel) {
        channel || (channel = this.defaultChannel);

        if(this.doesDispatchExist(channel)) {
            return this._dispatchers[channel];
        }

        return this.registerDispatch(new Dispatcher(channel));
    }

    doesDispatchExist(instance) {
        return !!this._dispatchers[instance.channel || instance];
    }

    registerDispatch(instance) {
        if(!is(instance, Dispatcher)) {
            throw new Error('The argument must be an instance of Broadcast/BroadcastDispatch!');
        }

        if(this.doesDispatchExist(instance.channel)) {
            throw new Error('There is already a Broadcast/BroadcastDispatch instance assigned to "'+instance.channel+'"!');
        }

        return this._dispatchers[instance.channel] = instance;
    }

    unregisterDispatch(dispatch) {
        unset(this._dispatchers[dispatch.channel || dispatch]);
    }

}

function install(Vue, options) {
  Vue.prototype.$broadcast = new BroadcastManager();
  Vue.prototype.$dispatch = Vue.prototype.$broadcast.dispatch();
}

Vue.use(main);
Vue.use(install);



var main$1 = Vue.extend({
  components: {
    GiveworksForm: GiveworksForm
  }
});

export default main$1;
//# sourceMappingURL=vue-giveworks-form.es.js.map
