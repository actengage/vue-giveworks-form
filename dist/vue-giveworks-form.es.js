import axios from 'axios';
import moment from 'moment';

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

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
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
var baseFor = createBaseFor();

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

var global$1 = typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global$1 == 'object' && global$1 && global$1.Object === Object && global$1;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

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
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

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

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

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
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

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
  return value != null && typeof value == 'object';
}

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
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

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
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$1.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

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

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

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
var isBuffer = nativeIsBuffer || stubFalse;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

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
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

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
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
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
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports$1 && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

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
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$2.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

  return value === proto;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

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
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
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
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

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
  return value != null && isLength(value.length) && !isFunction(value);
}

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
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
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

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

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

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

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
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

function is(instance, proto) {
    return instance instanceof proto;
}

function isFunction$1(subject) {
    return subject !== null && typeof subject === "function";
}

class BroadcastEvent {

    constructor(key, callback) {
        this.key = key;
        this.allowMultipleEmits = true;

        if(isFunction$1(callback)) {
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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/*!\n * Bootstrap Reboot v4.0.0 (https://getbootstrap.com)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n */\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\n.overlay {\n  position: fixed;\n  display: flex;\n  min-height: 0;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  flex-direction: column;\n  transition: all 333ms ease-out; }\n  .overlay.show {\n    z-index: 10000;\n    opacity: 100; }\n  .overlay .overlay-header {\n    margin-top: 1.5rem; }\n  .overlay .overlay-close {\n    font-size: 1.25rem;\n    color: #495057;\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    z-index: 1; }\n  .overlay .overlay-content {\n    overflow-y: auto;\n    position: relative;\n    width: 100%;\n    margin: 0 auto;\n    padding-bottom: 6rem; }\n    .overlay .overlay-content.fixed {\n      top: 0;\n      left: 0;\n      padding: 0;\n      height: 100%;\n      position: fixed;\n      max-width: none; }\n    .overlay .overlay-content .overlay-controls {\n      float: right;\n      position: relative;\n      top: 4px;\n      padding-right: 0;\n      padding-bottom: 1rem; }\n      .overlay .overlay-content .overlay-controls.left {\n        left: 0; }\n      .overlay .overlay-content .overlay-controls.right {\n        right: 0; }\n      .overlay .overlay-content .overlay-controls + * {\n        clear: both; }\n\n/*!\n * Bootstrap Reboot v4.0.0 (https://getbootstrap.com)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n */\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\n@keyframes btn-activity-in {\n  0%, 100% {\n    transform: scale(1); }\n  30% {\n    transform: scale(0.98); } }\n\n@keyframes btn-activity-out {\n  0%, 100% {\n    transform: scale(1); }\n  70% {\n    transform: scale(0.98); } }\n\n.btn-activity-top,\n.btn-activity-bottom,\n.btn-activity-left,\n.btn-activity-right {\n  position: relative;\n  transition: padding 166.5ms ease-in; }\n  .btn-activity-top .activity-indicator,\n  .btn-activity-bottom .activity-indicator,\n  .btn-activity-left .activity-indicator,\n  .btn-activity-right .activity-indicator {\n    opacity: 0;\n    position: absolute;\n    visibility: hidden;\n    transition: opacity 333ms ease-in; }\n\n.btn-activity-top .activity-indicator,\n.btn-activity-bottom .activity-indicator {\n  left: 50%;\n  margin-right: -50%;\n  transform: translateX(-50%); }\n\n.btn-activity-left .activity-indicator,\n.btn-activity-right .activity-indicator {\n  top: 50%;\n  margin-bottom: -50%;\n  transform: translateY(-50%); }\n\n.btn-activity:not(.btn-link) {\n  animation: btn-activity-in 333ms; }\n\n.btn-hide-activity:not(.btn-link) {\n  animation: btn-activity-out 333ms; }\n\n.btn-activity.btn-hide-activity .activity-indicator {\n  opacity: 0; }\n\n.btn-activity .activity-indicator {\n  opacity: 1;\n  visibility: visible;\n  position: absolute; }\n\n.btn-activity.btn-outline-primary.btn-activity-indicator-spinner .activity-indicator > div:before {\n  background-color: #007bff; }\n\n.btn-activity.btn-outline-secondary.btn-activity-indicator-spinner .activity-indicator > div:before {\n  background-color: #28a745; }\n\n.btn-activity.btn-outline-danger.btn-activity-indicator-spinner .activity-indicator > div:before {\n  background-color: #dc3545; }\n\n.btn-activity.btn-outline-success.btn-activity-indicator-spinner .activity-indicator > div:before {\n  background-color: #28a745; }\n\n.btn-activity.btn-outline-warning.btn-activity-indicator-spinner .activity-indicator > div:before {\n  background-color: #ffc107; }\n\n.btn-activity.btn-outline-info.btn-activity-indicator-spinner .activity-indicator > div:before {\n  background-color: #17a2b8; }\n\n.btn-activity.btn-outline-link.btn-activity-indicator-spinner .activity-indicator > div:before {\n  background-color: #007bff; }\n\n.btn-activity.btn-xs.btn-activity-top.btn-activity-indicator-dots {\n  padding-top: 1.25rem; }\n  .btn-activity.btn-xs.btn-activity-top.btn-activity-indicator-dots .activity-indicator {\n    top: 0.5rem; }\n\n.btn-activity.btn-xs.btn-activity-bottom.btn-activity-indicator-dots {\n  padding-bottom: 1.25rem; }\n  .btn-activity.btn-xs.btn-activity-bottom.btn-activity-indicator-dots .activity-indicator {\n    bottom: 0.5rem; }\n\n.btn-activity.btn-xs.btn-activity-left.btn-activity-indicator-dots {\n  padding-left: 2.33rem; }\n  .btn-activity.btn-xs.btn-activity-left.btn-activity-indicator-dots .activity-indicator {\n    left: 0.5rem; }\n\n.btn-activity.btn-xs.btn-activity-right.btn-activity-indicator-dots {\n  padding-right: 2.33rem; }\n  .btn-activity.btn-xs.btn-activity-right.btn-activity-indicator-dots .activity-indicator {\n    right: 0.5rem; }\n\n.btn-activity.btn-xs.btn-activity-indicator-dots .activity-indicator > div,\n.btn-activity.btn-xs .activity-indicator-dots > div {\n  width: 0.33333rem;\n  height: 0.33333rem; }\n\n.btn-activity.btn-xs.btn-activity-top.btn-activity-indicator-spinner {\n  padding-top: 1.66rem; }\n  .btn-activity.btn-xs.btn-activity-top.btn-activity-indicator-spinner .activity-indicator {\n    top: 0.25rem; }\n\n.btn-activity.btn-xs.btn-activity-bottom.btn-activity-indicator-spinner {\n  padding-bottom: 1.66rem; }\n  .btn-activity.btn-xs.btn-activity-bottom.btn-activity-indicator-spinner .activity-indicator {\n    bottom: 0.25rem; }\n\n.btn-activity.btn-xs.btn-activity-left.btn-activity-indicator-spinner {\n  padding-left: 1.66rem; }\n  .btn-activity.btn-xs.btn-activity-left.btn-activity-indicator-spinner .activity-indicator {\n    left: 0.25rem; }\n\n.btn-activity.btn-xs.btn-activity-right.btn-activity-indicator-spinner {\n  padding-right: 1.66rem; }\n  .btn-activity.btn-xs.btn-activity-right.btn-activity-indicator-spinner .activity-indicator {\n    right: 0.25rem; }\n\n.btn-activity.btn-xs.btn-activity-indicator-spinner .activity-indicator,\n.btn-activity.btn-xs .activity-indicator-spinner {\n  width: 1rem;\n  height: 1rem; }\n  .btn-activity.btn-xs.btn-activity-indicator-spinner .activity-indicator > div:before,\n  .btn-activity.btn-xs .activity-indicator-spinner > div:before {\n    width: 8.4%;\n    height: 30%; }\n\n.btn-activity.btn-sm.btn-activity-top.btn-activity-indicator-dots {\n  padding-top: 1.75rem; }\n  .btn-activity.btn-sm.btn-activity-top.btn-activity-indicator-dots .activity-indicator {\n    top: 0.5rem; }\n\n.btn-activity.btn-sm.btn-activity-bottom.btn-activity-indicator-dots {\n  padding-bottom: 1.75rem; }\n  .btn-activity.btn-sm.btn-activity-bottom.btn-activity-indicator-dots .activity-indicator {\n    bottom: 0.5rem; }\n\n.btn-activity.btn-sm.btn-activity-left.btn-activity-indicator-dots {\n  padding-left: 3rem; }\n  .btn-activity.btn-sm.btn-activity-left.btn-activity-indicator-dots .activity-indicator {\n    left: 0.5rem; }\n\n.btn-activity.btn-sm.btn-activity-right.btn-activity-indicator-dots {\n  padding-right: 3rem; }\n  .btn-activity.btn-sm.btn-activity-right.btn-activity-indicator-dots .activity-indicator {\n    right: 0.5rem; }\n\n.btn-activity.btn-sm.btn-activity-indicator-dots .activity-indicator > div,\n.btn-activity.btn-sm .activity-indicator-dots > div {\n  width: 0.5rem;\n  height: 0.5rem; }\n\n.btn-activity.btn-sm.btn-activity-top.btn-activity-indicator-spinner {\n  padding-top: 2rem; }\n  .btn-activity.btn-sm.btn-activity-top.btn-activity-indicator-spinner .activity-indicator {\n    top: 0.33rem; }\n\n.btn-activity.btn-sm.btn-activity-bottom.btn-activity-indicator-spinner {\n  padding-bottom: 2rem; }\n  .btn-activity.btn-sm.btn-activity-bottom.btn-activity-indicator-spinner .activity-indicator {\n    bottom: 0.33rem; }\n\n.btn-activity.btn-sm.btn-activity-left.btn-activity-indicator-spinner {\n  padding-left: 2.5rem; }\n  .btn-activity.btn-sm.btn-activity-left.btn-activity-indicator-spinner .activity-indicator {\n    left: 0.5rem; }\n\n.btn-activity.btn-sm.btn-activity-right.btn-activity-indicator-spinner {\n  padding-right: 2.5rem; }\n  .btn-activity.btn-sm.btn-activity-right.btn-activity-indicator-spinner .activity-indicator {\n    right: 0.5rem; }\n\n.btn-activity.btn-sm.btn-activity-indicator-spinner .activity-indicator,\n.btn-activity.btn-sm .activity-indicator-spinner {\n  width: 1.5rem;\n  height: 1.5rem; }\n  .btn-activity.btn-sm.btn-activity-indicator-spinner .activity-indicator > div:before,\n  .btn-activity.btn-sm .activity-indicator-spinner > div:before {\n    width: 5.6%;\n    height: 30%; }\n\n.btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-top.btn-activity-indicator-dots, .btn-activity.btn-md.btn-activity-top.btn-activity-indicator-dots {\n  padding-top: 2rem; }\n  .btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-top.btn-activity-indicator-dots .activity-indicator, .btn-activity.btn-md.btn-activity-top.btn-activity-indicator-dots .activity-indicator {\n    top: 0.66rem; }\n\n.btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-bottom.btn-activity-indicator-dots, .btn-activity.btn-md.btn-activity-bottom.btn-activity-indicator-dots {\n  padding-bottom: 2rem; }\n  .btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-bottom.btn-activity-indicator-dots .activity-indicator, .btn-activity.btn-md.btn-activity-bottom.btn-activity-indicator-dots .activity-indicator {\n    bottom: 0.66rem; }\n\n.btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-left.btn-activity-indicator-dots, .btn-activity.btn-md.btn-activity-left.btn-activity-indicator-dots {\n  padding-left: 4rem; }\n  .btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-left.btn-activity-indicator-dots .activity-indicator, .btn-activity.btn-md.btn-activity-left.btn-activity-indicator-dots .activity-indicator {\n    left: 0.5rem; }\n\n.btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-right.btn-activity-indicator-dots, .btn-activity.btn-md.btn-activity-right.btn-activity-indicator-dots {\n  padding-right: 4rem; }\n  .btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-right.btn-activity-indicator-dots .activity-indicator, .btn-activity.btn-md.btn-activity-right.btn-activity-indicator-dots .activity-indicator {\n    right: 0.5rem; }\n\n.btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-indicator-dots .activity-indicator > div,\n.btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl) .activity-indicator-dots > div, .btn-activity.btn-md.btn-activity-indicator-dots .activity-indicator > div,\n.btn-activity.btn-md .activity-indicator-dots > div {\n  width: 0.8rem;\n  height: 0.8rem; }\n\n.btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-top.btn-activity-indicator-spinner, .btn-activity.btn-md.btn-activity-top.btn-activity-indicator-spinner {\n  padding-top: 2.75rem; }\n  .btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-top.btn-activity-indicator-spinner .activity-indicator, .btn-activity.btn-md.btn-activity-top.btn-activity-indicator-spinner .activity-indicator {\n    top: 0.33rem; }\n\n.btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-bottom.btn-activity-indicator-spinner, .btn-activity.btn-md.btn-activity-bottom.btn-activity-indicator-spinner {\n  padding-bottom: 2.75rem; }\n  .btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-bottom.btn-activity-indicator-spinner .activity-indicator, .btn-activity.btn-md.btn-activity-bottom.btn-activity-indicator-spinner .activity-indicator {\n    bottom: 0.33rem; }\n\n.btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-left.btn-activity-indicator-spinner, .btn-activity.btn-md.btn-activity-left.btn-activity-indicator-spinner {\n  padding-left: 2.75rem; }\n  .btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-left.btn-activity-indicator-spinner .activity-indicator, .btn-activity.btn-md.btn-activity-left.btn-activity-indicator-spinner .activity-indicator {\n    left: 0.5rem; }\n\n.btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-right.btn-activity-indicator-spinner, .btn-activity.btn-md.btn-activity-right.btn-activity-indicator-spinner {\n  padding-right: 2.75rem; }\n  .btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-right.btn-activity-indicator-spinner .activity-indicator, .btn-activity.btn-md.btn-activity-right.btn-activity-indicator-spinner .activity-indicator {\n    right: 0.5rem; }\n\n.btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-indicator-spinner .activity-indicator,\n.btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl) .activity-indicator-spinner, .btn-activity.btn-md.btn-activity-indicator-spinner .activity-indicator,\n.btn-activity.btn-md .activity-indicator-spinner {\n  width: 1.75rem;\n  height: 1.75rem; }\n  .btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl).btn-activity-indicator-spinner .activity-indicator > div:before,\n  .btn-activity:not(.btn-xs):not(.btn-sm):not(.btn-md):not(.btn-lg):not(.btn-xl) .activity-indicator-spinner > div:before, .btn-activity.btn-md.btn-activity-indicator-spinner .activity-indicator > div:before,\n  .btn-activity.btn-md .activity-indicator-spinner > div:before {\n    width: 6.6%;\n    height: 30%; }\n\n.btn-activity.btn-lg.btn-activity-top.btn-activity-indicator-dots {\n  padding-top: 2.75rem; }\n  .btn-activity.btn-lg.btn-activity-top.btn-activity-indicator-dots .activity-indicator {\n    top: 0.66rem; }\n\n.btn-activity.btn-lg.btn-activity-bottom.btn-activity-indicator-dots {\n  padding-bottom: 2.75rem; }\n  .btn-activity.btn-lg.btn-activity-bottom.btn-activity-indicator-dots .activity-indicator {\n    bottom: 0.66rem; }\n\n.btn-activity.btn-lg.btn-activity-left.btn-activity-indicator-dots {\n  padding-left: 5rem; }\n  .btn-activity.btn-lg.btn-activity-left.btn-activity-indicator-dots .activity-indicator {\n    left: 0.5rem; }\n\n.btn-activity.btn-lg.btn-activity-right.btn-activity-indicator-dots {\n  padding-right: 5rem; }\n  .btn-activity.btn-lg.btn-activity-right.btn-activity-indicator-dots .activity-indicator {\n    right: 0.5rem; }\n\n.btn-activity.btn-lg.btn-activity-indicator-dots .activity-indicator > div,\n.btn-activity.btn-lg .activity-indicator-dots > div {\n  width: 1.1rem;\n  height: 1.1rem; }\n\n.btn-activity.btn-lg.btn-activity-top.btn-activity-indicator-spinner {\n  padding-top: 3.5rem; }\n  .btn-activity.btn-lg.btn-activity-top.btn-activity-indicator-spinner .activity-indicator {\n    top: 0.5rem; }\n\n.btn-activity.btn-lg.btn-activity-bottom.btn-activity-indicator-spinner {\n  padding-bottom: 3.5rem; }\n  .btn-activity.btn-lg.btn-activity-bottom.btn-activity-indicator-spinner .activity-indicator {\n    bottom: 0.5rem; }\n\n.btn-activity.btn-lg.btn-activity-left.btn-activity-indicator-spinner {\n  padding-left: 3.25rem; }\n  .btn-activity.btn-lg.btn-activity-left.btn-activity-indicator-spinner .activity-indicator {\n    left: 0.5rem; }\n\n.btn-activity.btn-lg.btn-activity-right.btn-activity-indicator-spinner {\n  padding-right: 3.25rem; }\n  .btn-activity.btn-lg.btn-activity-right.btn-activity-indicator-spinner .activity-indicator {\n    right: 0.5rem; }\n\n.btn-activity.btn-lg.btn-activity-indicator-spinner .activity-indicator,\n.btn-activity.btn-lg .activity-indicator-spinner {\n  width: 2.15rem;\n  height: 2.15rem; }\n  .btn-activity.btn-lg.btn-activity-indicator-spinner .activity-indicator > div:before,\n  .btn-activity.btn-lg .activity-indicator-spinner > div:before {\n    width: 7.5%; }\n\n.btn-activity.btn-xl.btn-activity-top.btn-activity-indicator-dots {\n  padding-top: 3.75rem; }\n  .btn-activity.btn-xl.btn-activity-top.btn-activity-indicator-dots .activity-indicator {\n    top: 1rem; }\n\n.btn-activity.btn-xl.btn-activity-bottom.btn-activity-indicator-dots {\n  padding-bottom: 3.75rem; }\n  .btn-activity.btn-xl.btn-activity-bottom.btn-activity-indicator-dots .activity-indicator {\n    bottom: 1rem; }\n\n.btn-activity.btn-xl.btn-activity-left.btn-activity-indicator-dots {\n  padding-left: 6rem; }\n  .btn-activity.btn-xl.btn-activity-left.btn-activity-indicator-dots .activity-indicator {\n    left: 0.75rem; }\n\n.btn-activity.btn-xl.btn-activity-right.btn-activity-indicator-dots {\n  padding-right: 6rem; }\n  .btn-activity.btn-xl.btn-activity-right.btn-activity-indicator-dots .activity-indicator {\n    right: 0.75rem; }\n\n.btn-activity.btn-xl.btn-activity-indicator-dots .activity-indicator > div,\n.btn-activity.btn-xl .activity-indicator-dots > div {\n  width: 1.25rem;\n  height: 1.25rem; }\n\n.btn-activity.btn-xl.btn-activity-top.btn-activity-indicator-spinner {\n  padding-top: 4.25rem; }\n  .btn-activity.btn-xl.btn-activity-top.btn-activity-indicator-spinner .activity-indicator {\n    top: 0.66rem; }\n\n.btn-activity.btn-xl.btn-activity-bottom.btn-activity-indicator-spinner {\n  padding-bottom: 4.25rem; }\n  .btn-activity.btn-xl.btn-activity-bottom.btn-activity-indicator-spinner .activity-indicator {\n    bottom: 0.66rem; }\n\n.btn-activity.btn-xl.btn-activity-left.btn-activity-indicator-spinner {\n  padding-left: 4rem; }\n  .btn-activity.btn-xl.btn-activity-left.btn-activity-indicator-spinner .activity-indicator {\n    left: 0.75rem; }\n\n.btn-activity.btn-xl.btn-activity-right.btn-activity-indicator-spinner {\n  padding-right: 4rem; }\n  .btn-activity.btn-xl.btn-activity-right.btn-activity-indicator-spinner .activity-indicator {\n    right: 0.75rem; }\n\n.btn-activity.btn-xl.btn-activity-indicator-spinner .activity-indicator,\n.btn-activity.btn-xl .activity-indicator-spinner {\n  width: 2.5rem;\n  height: 2.5rem; }\n  .btn-activity.btn-xl.btn-activity-indicator-spinner .activity-indicator > div:before,\n  .btn-activity.btn-xl .activity-indicator-spinner > div:before {\n    width: 7.5%; }\n\n/*!\n * Bootstrap Reboot v4.0.0 (https://getbootstrap.com)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n */\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\n@keyframes activity-indicator-spinner {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.center-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.center-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%); }\n\n/*!\n * Bootstrap Reboot v4.0.0 (https://getbootstrap.com)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n */\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\n.activity-indicator-dots > div {\n  border-radius: 100%;\n  display: inline-block;\n  background-color: #212529;\n  width: 0.6rem;\n  height: 0.6rem;\n  animation: activity-indicator-dots 1.4s infinite ease-in-out both; }\n\n.activity-indicator-dots > div:not(:last-child) {\n  margin-right: 0.198rem; }\n\n.activity-indicator-dots.activity-indicator-xs > div {\n  width: 0.3rem;\n  height: 0.3rem; }\n\n.activity-indicator-dots.activity-indicator-sm > div {\n  width: 0.45rem;\n  height: 0.45rem; }\n\n.activity-indicator-dots.activity-indicator-md > div {\n  width: 0.6rem;\n  height: 0.6rem; }\n\n.activity-indicator-dots.activity-indicator-lg > div {\n  width: 0.9rem;\n  height: 0.9rem; }\n\n.activity-indicator-dots.activity-indicator-xl > div {\n  width: 1.2rem;\n  height: 1.2rem; }\n\n.activity-indicator-dots > div:nth-child(1) {\n  animation-delay: 0s; }\n\n.activity-indicator-dots > div:nth-child(2) {\n  animation-delay: 0.16s; }\n\n.activity-indicator-dots > div:nth-child(3) {\n  animation-delay: 0.32s; }\n\n.activity-indicator-dots > div:nth-child(4) {\n  animation-delay: 0.48s; }\n\n.activity-indicator-dots > div:nth-child(5) {\n  animation-delay: 0.64s; }\n\n.activity-indicator-dots > div:nth-child(6) {\n  animation-delay: 0.8s; }\n\n.activity-indicator-dots > div:nth-child(7) {\n  animation-delay: 0.96s; }\n\n.activity-indicator-dots > div:nth-child(8) {\n  animation-delay: 1.12s; }\n\n.activity-indicator-dots > div:nth-child(9) {\n  animation-delay: 1.28s; }\n\n.activity-indicator-dots > div:nth-child(10) {\n  animation-delay: 1.44s; }\n\n.activity-indicator-dots > div:nth-child(11) {\n  animation-delay: 1.6s; }\n\n.activity-indicator-dots > div:nth-child(12) {\n  animation-delay: 1.76s; }\n\n.activity-indicator-dots > div:nth-child(13) {\n  animation-delay: 1.92s; }\n\n@keyframes activity-indicator-dots {\n  0%, 80%, 100% {\n    transform: scale(0); }\n  40% {\n    transform: scale(1); } }\n\n.btn-activity-indicator-dots:not(.btn-warning) .activity-indicator-dots > div {\n  background: white; }\n\n/*!\n * Bootstrap Reboot v4.0.0 (https://getbootstrap.com)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n */\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\n.activity-indicator-spinner {\n  position: relative;\n  width: 2.25rem;\n  height: 2.25rem; }\n  .activity-indicator-spinner > div {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0; }\n    .activity-indicator-spinner > div:before {\n      content: '';\n      display: block;\n      margin: 0 auto;\n      background-color: #212529;\n      width: 10%;\n      height: 30%;\n      border-radius: 5px;\n      animation: activity-indicator-spinner 1s infinite ease-in-out both; }\n  .activity-indicator-spinner.activity-indicator-xs {\n    width: 1.125rem;\n    height: 1.125rem; }\n  .activity-indicator-spinner.activity-indicator-sm {\n    width: 1.6875rem;\n    height: 1.6875rem; }\n  .activity-indicator-spinner.activity-indicator-md {\n    width: 2.25rem;\n    height: 2.25rem; }\n  .activity-indicator-spinner.activity-indicator-lg {\n    width: 3.375rem;\n    height: 3.375rem; }\n  .activity-indicator-spinner.activity-indicator-xl {\n    width: 4.5rem;\n    height: 4.5rem; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(1):nth-child(1),\n  .activity-indicator-spinner > div:first-child:nth-last-child(1) ~ div:nth-child(1) {\n    transform: rotate(360deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(1):nth-child(1):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(1) ~ div:nth-child(1):before {\n      animation-delay: -1s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(2):nth-child(1),\n  .activity-indicator-spinner > div:first-child:nth-last-child(2) ~ div:nth-child(1) {\n    transform: rotate(180deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(2):nth-child(1):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(2) ~ div:nth-child(1):before {\n      animation-delay: -1s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(2):nth-child(2),\n  .activity-indicator-spinner > div:first-child:nth-last-child(2) ~ div:nth-child(2) {\n    transform: rotate(360deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(2):nth-child(2):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(2) ~ div:nth-child(2):before {\n      animation-delay: -0.5s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(3):nth-child(1),\n  .activity-indicator-spinner > div:first-child:nth-last-child(3) ~ div:nth-child(1) {\n    transform: rotate(120deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(3):nth-child(1):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(3) ~ div:nth-child(1):before {\n      animation-delay: -1s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(3):nth-child(2),\n  .activity-indicator-spinner > div:first-child:nth-last-child(3) ~ div:nth-child(2) {\n    transform: rotate(240deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(3):nth-child(2):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(3) ~ div:nth-child(2):before {\n      animation-delay: -0.66667s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(3):nth-child(3),\n  .activity-indicator-spinner > div:first-child:nth-last-child(3) ~ div:nth-child(3) {\n    transform: rotate(360deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(3):nth-child(3):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(3) ~ div:nth-child(3):before {\n      animation-delay: -0.33333s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(4):nth-child(1),\n  .activity-indicator-spinner > div:first-child:nth-last-child(4) ~ div:nth-child(1) {\n    transform: rotate(90deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(4):nth-child(1):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(4) ~ div:nth-child(1):before {\n      animation-delay: -1s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(4):nth-child(2),\n  .activity-indicator-spinner > div:first-child:nth-last-child(4) ~ div:nth-child(2) {\n    transform: rotate(180deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(4):nth-child(2):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(4) ~ div:nth-child(2):before {\n      animation-delay: -0.75s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(4):nth-child(3),\n  .activity-indicator-spinner > div:first-child:nth-last-child(4) ~ div:nth-child(3) {\n    transform: rotate(270deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(4):nth-child(3):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(4) ~ div:nth-child(3):before {\n      animation-delay: -0.5s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(4):nth-child(4),\n  .activity-indicator-spinner > div:first-child:nth-last-child(4) ~ div:nth-child(4) {\n    transform: rotate(360deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(4):nth-child(4):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(4) ~ div:nth-child(4):before {\n      animation-delay: -0.25s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(5):nth-child(1),\n  .activity-indicator-spinner > div:first-child:nth-last-child(5) ~ div:nth-child(1) {\n    transform: rotate(72deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(5):nth-child(1):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(5) ~ div:nth-child(1):before {\n      animation-delay: -1s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(5):nth-child(2),\n  .activity-indicator-spinner > div:first-child:nth-last-child(5) ~ div:nth-child(2) {\n    transform: rotate(144deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(5):nth-child(2):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(5) ~ div:nth-child(2):before {\n      animation-delay: -0.8s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(5):nth-child(3),\n  .activity-indicator-spinner > div:first-child:nth-last-child(5) ~ div:nth-child(3) {\n    transform: rotate(216deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(5):nth-child(3):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(5) ~ div:nth-child(3):before {\n      animation-delay: -0.6s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(5):nth-child(4),\n  .activity-indicator-spinner > div:first-child:nth-last-child(5) ~ div:nth-child(4) {\n    transform: rotate(288deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(5):nth-child(4):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(5) ~ div:nth-child(4):before {\n      animation-delay: -0.4s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(5):nth-child(5),\n  .activity-indicator-spinner > div:first-child:nth-last-child(5) ~ div:nth-child(5) {\n    transform: rotate(360deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(5):nth-child(5):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(5) ~ div:nth-child(5):before {\n      animation-delay: -0.2s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(6):nth-child(1),\n  .activity-indicator-spinner > div:first-child:nth-last-child(6) ~ div:nth-child(1) {\n    transform: rotate(60deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(6):nth-child(1):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(6) ~ div:nth-child(1):before {\n      animation-delay: -1s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(6):nth-child(2),\n  .activity-indicator-spinner > div:first-child:nth-last-child(6) ~ div:nth-child(2) {\n    transform: rotate(120deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(6):nth-child(2):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(6) ~ div:nth-child(2):before {\n      animation-delay: -0.83333s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(6):nth-child(3),\n  .activity-indicator-spinner > div:first-child:nth-last-child(6) ~ div:nth-child(3) {\n    transform: rotate(180deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(6):nth-child(3):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(6) ~ div:nth-child(3):before {\n      animation-delay: -0.66667s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(6):nth-child(4),\n  .activity-indicator-spinner > div:first-child:nth-last-child(6) ~ div:nth-child(4) {\n    transform: rotate(240deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(6):nth-child(4):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(6) ~ div:nth-child(4):before {\n      animation-delay: -0.5s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(6):nth-child(5),\n  .activity-indicator-spinner > div:first-child:nth-last-child(6) ~ div:nth-child(5) {\n    transform: rotate(300deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(6):nth-child(5):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(6) ~ div:nth-child(5):before {\n      animation-delay: -0.33333s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(6):nth-child(6),\n  .activity-indicator-spinner > div:first-child:nth-last-child(6) ~ div:nth-child(6) {\n    transform: rotate(360deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(6):nth-child(6):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(6) ~ div:nth-child(6):before {\n      animation-delay: -0.16667s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(1),\n  .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(1) {\n    transform: rotate(51.42857deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(1):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(1):before {\n      animation-delay: -1s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(2),\n  .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(2) {\n    transform: rotate(102.85714deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(2):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(2):before {\n      animation-delay: -0.85714s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(3),\n  .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(3) {\n    transform: rotate(154.28571deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(3):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(3):before {\n      animation-delay: -0.71429s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(4),\n  .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(4) {\n    transform: rotate(205.71429deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(4):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(4):before {\n      animation-delay: -0.57143s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(5),\n  .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(5) {\n    transform: rotate(257.14286deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(5):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(5):before {\n      animation-delay: -0.42857s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(6),\n  .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(6) {\n    transform: rotate(308.57143deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(6):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(6):before {\n      animation-delay: -0.28571s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(7),\n  .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(7) {\n    transform: rotate(360deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(7):nth-child(7):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(7) ~ div:nth-child(7):before {\n      animation-delay: -0.14286s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(1),\n  .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(1) {\n    transform: rotate(45deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(1):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(1):before {\n      animation-delay: -1s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(2),\n  .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(2) {\n    transform: rotate(90deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(2):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(2):before {\n      animation-delay: -0.875s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(3),\n  .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(3) {\n    transform: rotate(135deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(3):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(3):before {\n      animation-delay: -0.75s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(4),\n  .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(4) {\n    transform: rotate(180deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(4):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(4):before {\n      animation-delay: -0.625s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(5),\n  .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(5) {\n    transform: rotate(225deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(5):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(5):before {\n      animation-delay: -0.5s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(6),\n  .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(6) {\n    transform: rotate(270deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(6):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(6):before {\n      animation-delay: -0.375s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(7),\n  .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(7) {\n    transform: rotate(315deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(7):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(7):before {\n      animation-delay: -0.25s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(8),\n  .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(8) {\n    transform: rotate(360deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(8):nth-child(8):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(8) ~ div:nth-child(8):before {\n      animation-delay: -0.125s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(1),\n  .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(1) {\n    transform: rotate(40deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(1):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(1):before {\n      animation-delay: -1s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(2),\n  .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(2) {\n    transform: rotate(80deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(2):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(2):before {\n      animation-delay: -0.88889s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(3),\n  .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(3) {\n    transform: rotate(120deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(3):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(3):before {\n      animation-delay: -0.77778s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(4),\n  .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(4) {\n    transform: rotate(160deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(4):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(4):before {\n      animation-delay: -0.66667s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(5),\n  .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(5) {\n    transform: rotate(200deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(5):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(5):before {\n      animation-delay: -0.55556s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(6),\n  .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(6) {\n    transform: rotate(240deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(6):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(6):before {\n      animation-delay: -0.44444s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(7),\n  .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(7) {\n    transform: rotate(280deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(7):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(7):before {\n      animation-delay: -0.33333s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(8),\n  .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(8) {\n    transform: rotate(320deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(8):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(8):before {\n      animation-delay: -0.22222s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(9),\n  .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(9) {\n    transform: rotate(360deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(9):nth-child(9):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(9) ~ div:nth-child(9):before {\n      animation-delay: -0.11111s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(1),\n  .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(1) {\n    transform: rotate(36deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(1):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(1):before {\n      animation-delay: -1s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(2),\n  .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(2) {\n    transform: rotate(72deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(2):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(2):before {\n      animation-delay: -0.9s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(3),\n  .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(3) {\n    transform: rotate(108deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(3):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(3):before {\n      animation-delay: -0.8s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(4),\n  .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(4) {\n    transform: rotate(144deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(4):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(4):before {\n      animation-delay: -0.7s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(5),\n  .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(5) {\n    transform: rotate(180deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(5):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(5):before {\n      animation-delay: -0.6s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(6),\n  .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(6) {\n    transform: rotate(216deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(6):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(6):before {\n      animation-delay: -0.5s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(7),\n  .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(7) {\n    transform: rotate(252deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(7):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(7):before {\n      animation-delay: -0.4s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(8),\n  .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(8) {\n    transform: rotate(288deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(8):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(8):before {\n      animation-delay: -0.3s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(9),\n  .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(9) {\n    transform: rotate(324deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(9):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(9):before {\n      animation-delay: -0.2s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(10),\n  .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(10) {\n    transform: rotate(360deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(10):nth-child(10):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(10) ~ div:nth-child(10):before {\n      animation-delay: -0.1s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(1),\n  .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(1) {\n    transform: rotate(32.72727deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(1):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(1):before {\n      animation-delay: -1s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(2),\n  .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(2) {\n    transform: rotate(65.45455deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(2):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(2):before {\n      animation-delay: -0.90909s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(3),\n  .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(3) {\n    transform: rotate(98.18182deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(3):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(3):before {\n      animation-delay: -0.81818s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(4),\n  .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(4) {\n    transform: rotate(130.90909deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(4):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(4):before {\n      animation-delay: -0.72727s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(5),\n  .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(5) {\n    transform: rotate(163.63636deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(5):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(5):before {\n      animation-delay: -0.63636s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(6),\n  .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(6) {\n    transform: rotate(196.36364deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(6):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(6):before {\n      animation-delay: -0.54545s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(7),\n  .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(7) {\n    transform: rotate(229.09091deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(7):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(7):before {\n      animation-delay: -0.45455s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(8),\n  .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(8) {\n    transform: rotate(261.81818deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(8):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(8):before {\n      animation-delay: -0.36364s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(9),\n  .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(9) {\n    transform: rotate(294.54545deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(9):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(9):before {\n      animation-delay: -0.27273s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(10),\n  .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(10) {\n    transform: rotate(327.27273deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(10):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(10):before {\n      animation-delay: -0.18182s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(11),\n  .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(11) {\n    transform: rotate(360deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(11):nth-child(11):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(11) ~ div:nth-child(11):before {\n      animation-delay: -0.09091s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(1),\n  .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(1) {\n    transform: rotate(30deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(1):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(1):before {\n      animation-delay: -1s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(2),\n  .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(2) {\n    transform: rotate(60deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(2):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(2):before {\n      animation-delay: -0.91667s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(3),\n  .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(3) {\n    transform: rotate(90deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(3):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(3):before {\n      animation-delay: -0.83333s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(4),\n  .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(4) {\n    transform: rotate(120deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(4):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(4):before {\n      animation-delay: -0.75s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(5),\n  .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(5) {\n    transform: rotate(150deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(5):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(5):before {\n      animation-delay: -0.66667s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(6),\n  .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(6) {\n    transform: rotate(180deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(6):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(6):before {\n      animation-delay: -0.58333s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(7),\n  .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(7) {\n    transform: rotate(210deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(7):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(7):before {\n      animation-delay: -0.5s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(8),\n  .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(8) {\n    transform: rotate(240deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(8):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(8):before {\n      animation-delay: -0.41667s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(9),\n  .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(9) {\n    transform: rotate(270deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(9):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(9):before {\n      animation-delay: -0.33333s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(10),\n  .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(10) {\n    transform: rotate(300deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(10):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(10):before {\n      animation-delay: -0.25s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(11),\n  .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(11) {\n    transform: rotate(330deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(11):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(11):before {\n      animation-delay: -0.16667s; }\n  .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(12),\n  .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(12) {\n    transform: rotate(360deg); }\n    .activity-indicator-spinner > div:first-child:nth-last-child(12):nth-child(12):before,\n    .activity-indicator-spinner > div:first-child:nth-last-child(12) ~ div:nth-child(12):before {\n      animation-delay: -0.08333s; }\n\n@keyframes activity-indicator-spinner {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.btn-activity-indicator-spinner:not(.btn-warning) .activity-indicator-spinner > div:before {\n  background-color: white; }\n\n.btn-file {\n  cursor: pointer;\n  position: relative; }\n  .btn-file input {\n    z-index: 1;\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n\n.file-preview {\n  width: 100%; }\n  .file-preview .file-preview-inner {\n    position: relative; }\n  .file-preview .file-preview-close {\n    top: 0;\n    right: 0;\n    padding: 0;\n    width: 24px;\n    height: 24px;\n    background: white;\n    position: absolute;\n    border-radius: 100%;\n    transform: translate(33%, -33%); }\n    .file-preview .file-preview-close i {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      font-size: 24px;\n      text-align: center; }\n  .file-preview .file-preview-icon {\n    text-align: center;\n    font-size: 60px;\n    padding: 1rem; }\n  .file-preview .file-preview-thumbnail {\n    width: 100%;\n    max-width: 100%; }\n  .file-preview .file-preview-filename {\n    overflow: hidden;\n    text-align: center;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .file-preview .file-preview-filename,\n  .file-preview .file-preview-filesize {\n    text-align: center; }\n\n/*!\n * Bootstrap Reboot v4.0.0 (https://getbootstrap.com)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n */\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\n.light-switch {\n  padding: 0;\n  position: relative;\n  border: none;\n  width: 3rem;\n  height: 2rem;\n  border-radius: 2rem;\n  overflow: hidden;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  overflow: hidden; }\n  .light-switch.light-switch-xs {\n    padding: 0;\n    width: 1.5rem;\n    height: 1rem;\n    border-radius: 1rem; }\n    .light-switch.light-switch-xs .light-switch-handle {\n      width: 1rem;\n      height: 1rem; }\n    .light-switch.light-switch-xs .light-switch-container {\n      left: -0.5rem;\n      width: 2rem;\n      height: 1rem; }\n    .light-switch.light-switch-xs.is-active .light-switch-handle {\n      left: 0.5rem; }\n    .light-switch.light-switch-xs .light-switch-label {\n      width: 1rem;\n      height: 1rem; }\n  .light-switch.light-switch-sm {\n    padding: 0;\n    width: 2.25rem;\n    height: 1.5rem;\n    border-radius: 1.5rem; }\n    .light-switch.light-switch-sm .light-switch-handle {\n      width: 1.5rem;\n      height: 1.5rem; }\n    .light-switch.light-switch-sm .light-switch-container {\n      left: -0.75rem;\n      width: 3rem;\n      height: 1.5rem; }\n    .light-switch.light-switch-sm.is-active .light-switch-handle {\n      left: 0.75rem; }\n    .light-switch.light-switch-sm .light-switch-label {\n      width: 1.5rem;\n      height: 1.5rem; }\n  .light-switch.light-switch-md {\n    padding: 0;\n    width: 3rem;\n    height: 2rem;\n    border-radius: 2rem; }\n    .light-switch.light-switch-md .light-switch-handle {\n      width: 2rem;\n      height: 2rem; }\n    .light-switch.light-switch-md .light-switch-container {\n      left: -1rem;\n      width: 4rem;\n      height: 2rem; }\n    .light-switch.light-switch-md.is-active .light-switch-handle {\n      left: 1rem; }\n    .light-switch.light-switch-md .light-switch-label {\n      width: 2rem;\n      height: 2rem; }\n  .light-switch.light-switch-lg {\n    padding: 0;\n    width: 4.5rem;\n    height: 3rem;\n    border-radius: 3rem; }\n    .light-switch.light-switch-lg .light-switch-handle {\n      width: 3rem;\n      height: 3rem; }\n    .light-switch.light-switch-lg .light-switch-container {\n      left: -1.5rem;\n      width: 6rem;\n      height: 3rem; }\n    .light-switch.light-switch-lg.is-active .light-switch-handle {\n      left: 1.5rem; }\n    .light-switch.light-switch-lg .light-switch-label {\n      width: 3rem;\n      height: 3rem; }\n  .light-switch.light-switch-xl {\n    padding: 0;\n    width: 6rem;\n    height: 4rem;\n    border-radius: 4rem; }\n    .light-switch.light-switch-xl .light-switch-handle {\n      width: 4rem;\n      height: 4rem; }\n    .light-switch.light-switch-xl .light-switch-container {\n      left: -2rem;\n      width: 8rem;\n      height: 4rem; }\n    .light-switch.light-switch-xl.is-active .light-switch-handle {\n      left: 2rem; }\n    .light-switch.light-switch-xl .light-switch-label {\n      width: 4rem;\n      height: 4rem; }\n  .light-switch .valid-feedback {\n    display: none;\n    width: 100%;\n    margin-top: 0.25rem;\n    font-size: 80%;\n    color: #28a745; }\n  .light-switch .valid-tooltip {\n    position: absolute;\n    top: 100%;\n    z-index: 5;\n    display: none;\n    max-width: 100%;\n    padding: .5rem;\n    margin-top: .1rem;\n    font-size: .875rem;\n    line-height: 1;\n    color: #fff;\n    background-color: rgba(40, 167, 69, 0.8);\n    border-radius: .2rem; }\n  .was-validated .light-switch .form-control:valid, .light-switch .form-control.is-valid, .was-validated\n  .light-switch .custom-select:valid,\n  .light-switch .custom-select.is-valid {\n    border-color: #28a745; }\n    .was-validated .light-switch .form-control:valid:focus, .light-switch .form-control.is-valid:focus, .was-validated\n    .light-switch .custom-select:valid:focus,\n    .light-switch .custom-select.is-valid:focus {\n      border-color: #28a745;\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n    .was-validated .light-switch .form-control:valid ~ .valid-feedback,\n    .was-validated .light-switch .form-control:valid ~ .valid-tooltip, .light-switch .form-control.is-valid ~ .valid-feedback,\n    .light-switch .form-control.is-valid ~ .valid-tooltip, .was-validated\n    .light-switch .custom-select:valid ~ .valid-feedback,\n    .was-validated\n    .light-switch .custom-select:valid ~ .valid-tooltip,\n    .light-switch .custom-select.is-valid ~ .valid-feedback,\n    .light-switch .custom-select.is-valid ~ .valid-tooltip {\n      display: block; }\n  .was-validated .light-switch .form-check-input:valid ~ .form-check-label, .light-switch .form-check-input.is-valid ~ .form-check-label {\n    color: #28a745; }\n  .was-validated .light-switch .form-check-input:valid ~ .valid-feedback,\n  .was-validated .light-switch .form-check-input:valid ~ .valid-tooltip, .light-switch .form-check-input.is-valid ~ .valid-feedback,\n  .light-switch .form-check-input.is-valid ~ .valid-tooltip {\n    display: block; }\n  .was-validated .light-switch .custom-control-input:valid ~ .custom-control-label, .light-switch .custom-control-input.is-valid ~ .custom-control-label {\n    color: #28a745; }\n    .was-validated .light-switch .custom-control-input:valid ~ .custom-control-label::before, .light-switch .custom-control-input.is-valid ~ .custom-control-label::before {\n      background-color: #71dd8a; }\n  .was-validated .light-switch .custom-control-input:valid ~ .valid-feedback,\n  .was-validated .light-switch .custom-control-input:valid ~ .valid-tooltip, .light-switch .custom-control-input.is-valid ~ .valid-feedback,\n  .light-switch .custom-control-input.is-valid ~ .valid-tooltip {\n    display: block; }\n  .was-validated .light-switch .custom-control-input:valid:checked ~ .custom-control-label::before, .light-switch .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n    background-color: #34ce57; }\n  .was-validated .light-switch .custom-control-input:valid:focus ~ .custom-control-label::before, .light-switch .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n  .was-validated .light-switch .custom-file-input:valid ~ .custom-file-label, .light-switch .custom-file-input.is-valid ~ .custom-file-label {\n    border-color: #28a745; }\n    .was-validated .light-switch .custom-file-input:valid ~ .custom-file-label::before, .light-switch .custom-file-input.is-valid ~ .custom-file-label::before {\n      border-color: inherit; }\n  .was-validated .light-switch .custom-file-input:valid ~ .valid-feedback,\n  .was-validated .light-switch .custom-file-input:valid ~ .valid-tooltip, .light-switch .custom-file-input.is-valid ~ .valid-feedback,\n  .light-switch .custom-file-input.is-valid ~ .valid-tooltip {\n    display: block; }\n  .was-validated .light-switch .custom-file-input:valid:focus ~ .custom-file-label, .light-switch .custom-file-input.is-valid:focus ~ .custom-file-label {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n  .light-switch .invalid-feedback {\n    display: none;\n    width: 100%;\n    margin-top: 0.25rem;\n    font-size: 80%;\n    color: #dc3545; }\n  .light-switch .invalid-tooltip {\n    position: absolute;\n    top: 100%;\n    z-index: 5;\n    display: none;\n    max-width: 100%;\n    padding: .5rem;\n    margin-top: .1rem;\n    font-size: .875rem;\n    line-height: 1;\n    color: #fff;\n    background-color: rgba(220, 53, 69, 0.8);\n    border-radius: .2rem; }\n  .was-validated .light-switch .form-control:invalid, .light-switch .form-control.is-invalid, .was-validated\n  .light-switch .custom-select:invalid,\n  .light-switch .custom-select.is-invalid {\n    border-color: #dc3545; }\n    .was-validated .light-switch .form-control:invalid:focus, .light-switch .form-control.is-invalid:focus, .was-validated\n    .light-switch .custom-select:invalid:focus,\n    .light-switch .custom-select.is-invalid:focus {\n      border-color: #dc3545;\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n    .was-validated .light-switch .form-control:invalid ~ .invalid-feedback,\n    .was-validated .light-switch .form-control:invalid ~ .invalid-tooltip, .light-switch .form-control.is-invalid ~ .invalid-feedback,\n    .light-switch .form-control.is-invalid ~ .invalid-tooltip, .was-validated\n    .light-switch .custom-select:invalid ~ .invalid-feedback,\n    .was-validated\n    .light-switch .custom-select:invalid ~ .invalid-tooltip,\n    .light-switch .custom-select.is-invalid ~ .invalid-feedback,\n    .light-switch .custom-select.is-invalid ~ .invalid-tooltip {\n      display: block; }\n  .was-validated .light-switch .form-check-input:invalid ~ .form-check-label, .light-switch .form-check-input.is-invalid ~ .form-check-label {\n    color: #dc3545; }\n  .was-validated .light-switch .form-check-input:invalid ~ .invalid-feedback,\n  .was-validated .light-switch .form-check-input:invalid ~ .invalid-tooltip, .light-switch .form-check-input.is-invalid ~ .invalid-feedback,\n  .light-switch .form-check-input.is-invalid ~ .invalid-tooltip {\n    display: block; }\n  .was-validated .light-switch .custom-control-input:invalid ~ .custom-control-label, .light-switch .custom-control-input.is-invalid ~ .custom-control-label {\n    color: #dc3545; }\n    .was-validated .light-switch .custom-control-input:invalid ~ .custom-control-label::before, .light-switch .custom-control-input.is-invalid ~ .custom-control-label::before {\n      background-color: #efa2a9; }\n  .was-validated .light-switch .custom-control-input:invalid ~ .invalid-feedback,\n  .was-validated .light-switch .custom-control-input:invalid ~ .invalid-tooltip, .light-switch .custom-control-input.is-invalid ~ .invalid-feedback,\n  .light-switch .custom-control-input.is-invalid ~ .invalid-tooltip {\n    display: block; }\n  .was-validated .light-switch .custom-control-input:invalid:checked ~ .custom-control-label::before, .light-switch .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n    background-color: #e4606d; }\n  .was-validated .light-switch .custom-control-input:invalid:focus ~ .custom-control-label::before, .light-switch .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n  .was-validated .light-switch .custom-file-input:invalid ~ .custom-file-label, .light-switch .custom-file-input.is-invalid ~ .custom-file-label {\n    border-color: #dc3545; }\n    .was-validated .light-switch .custom-file-input:invalid ~ .custom-file-label::before, .light-switch .custom-file-input.is-invalid ~ .custom-file-label::before {\n      border-color: inherit; }\n  .was-validated .light-switch .custom-file-input:invalid ~ .invalid-feedback,\n  .was-validated .light-switch .custom-file-input:invalid ~ .invalid-tooltip, .light-switch .custom-file-input.is-invalid ~ .invalid-feedback,\n  .light-switch .custom-file-input.is-invalid ~ .invalid-tooltip {\n    display: block; }\n  .was-validated .light-switch .custom-file-input:invalid:focus ~ .custom-file-label, .light-switch .custom-file-input.is-invalid:focus ~ .custom-file-label {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n  .light-switch.is-invalid {\n    border: 1px solid #dc3545; }\n    .light-switch.is-invalid:not(.is-active) .light-switch-handle {\n      background: #dc3545; }\n    .light-switch.is-invalid .light-switch-label.on-value {\n      left: 0; }\n    .light-switch.is-invalid .light-switch-label.off-value {\n      right: 0; }\n  .light-switch .light-switch-handle {\n    top: 0;\n    left: 0;\n    z-index: 1;\n    position: absolute;\n    border-radius: 100%;\n    transition: left 0.33333s ease;\n    width: 2rem;\n    height: 2rem;\n    background: white;\n    background-image: radial-gradient(white, #fafafa 50%, white 75%);\n    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1); }\n  .light-switch .light-switch-container {\n    position: relative;\n    left: -1rem;\n    top: 0rem;\n    width: 4rem;\n    height: 2rem;\n    transition: left 0.33333s ease; }\n  .light-switch:not(.is-active):not(.is-dragging) .on-value {\n    visibility: hidden; }\n  .light-switch.is-active:not(.is-dragging) .off-value {\n    visibility: hidden; }\n  .light-switch.is-active .light-switch-handle {\n    left: 1rem; }\n  .light-switch.is-active .light-switch-container {\n    left: 0; }\n  .light-switch .light-switch-label {\n    position: absolute;\n    width: 2rem;\n    height: 2rem; }\n    .light-switch .light-switch-label.on-value {\n      left: 0;\n      background: #00b007; }\n    .light-switch .light-switch-label.off-value {\n      right: 0;\n      background: #ebedef; }\n\n/*!\n * Bootstrap Reboot v4.0.0 (https://getbootstrap.com)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n */\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\n.upload-field {\n  /*\n    .upload-field-preview .file-preview.is-image {\n        width: 22.75%;\n        margin-right: 3%;\n\n        &:nth-child(4n) {\n            margin-right: 0;\n        }\n    }\n    */ }\n  .upload-field.enable-dropzone {\n    position: relative; }\n  .upload-field .file-preview {\n    max-width: 300px; }\n  .upload-field.enable-multiple .file-preview:first-child:nth-last-child(1) {\n    width: 100%; }\n  .upload-field.enable-multiple .file-preview .file-preview-inner {\n    margin-right: 0; }\n  .upload-field.enable-multiple .file-preview:nth-last-child(2) .file-preview-inner {\n    margin-right: 1rem; }\n  .upload-field.enable-multiple .file-preview:nth-last-child(2),\n  .upload-field.enable-multiple .file-preview:nth-last-child(2) ~ .file-preview {\n    width: 50%; }\n  .upload-field.enable-multiple .file-preview .file-preview-inner {\n    margin-right: 0; }\n  .upload-field.enable-multiple .file-preview:nth-last-child(3) .file-preview-inner {\n    margin-right: 1rem; }\n  .upload-field.enable-multiple .file-preview:nth-last-child(3),\n  .upload-field.enable-multiple .file-preview:nth-last-child(3) ~ .file-preview {\n    width: 33.33333%; }\n  .upload-field.enable-multiple .file-preview .file-preview-inner {\n    margin-right: 0; }\n  .upload-field.enable-multiple .file-preview:nth-last-child(4) .file-preview-inner {\n    margin-right: 1rem; }\n  .upload-field.enable-multiple .file-preview:nth-last-child(4),\n  .upload-field.enable-multiple .file-preview:nth-last-child(4) ~ .file-preview {\n    width: 25%; }\n  .upload-field.enable-multiple .file-preview .file-preview-inner {\n    margin-right: 0; }\n  .upload-field.enable-multiple .file-preview:nth-last-child(5) .file-preview-inner {\n    margin-right: 1rem; }\n  .upload-field.enable-multiple .file-preview:nth-last-child(5),\n  .upload-field.enable-multiple .file-preview:nth-last-child(5) ~ .file-preview {\n    width: 20%; }\n  .upload-field:not(.enable-dropzone) .upload-field-dropzone {\n    position: fixed; }\n  .upload-field .upload-field-dropzone {\n    color: #17a2b8;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 100;\n    background: #beeff7;\n    border: 2px dashed #63d9ec;\n    text-shadow: 0 1px 0 white; }\n    .upload-field .upload-field-dropzone > i {\n      display: block;\n      font-size: 32px; }\n  .upload-field .upload-field-preview {\n    display: flex;\n    flex-wrap: wrap; }\n  .upload-field .upload-field-preview .file-preview {\n    display: inline-block; }\n  .upload-field .upload-field-preview .file-preview-name-label {\n    max-width: 200px; }\n\n";
styleInject(css);

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
  return value === other || (value !== value && other !== other);
}

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
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

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
      index = assocIndexOf(data, key);

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
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

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
  return assocIndexOf(this.__data__, key) > -1;
}

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
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

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
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

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

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

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
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$6 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$4).replace(reRegExpChar, '\\$&')
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
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

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

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

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

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

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
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$5.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

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
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$6.call(data, key);
}

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
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

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
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

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
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

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
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

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
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

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
  return getMapData(this, key).get(key);
}

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
  return getMapData(this, key).has(key);
}

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
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

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
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

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
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

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

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

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
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

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
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
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

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

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

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

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

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

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
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

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
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$1:
      var convert = mapToArray;

    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

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
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

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

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$10 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$10.hasOwnProperty;

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
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$7.call(other, key))) {
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

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

/* Built-in method references that are verified to be native. */
var Promise$1 = getNative(root, 'Promise');

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (Map && getTag(new Map) != mapTag$2) ||
    (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag$2) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var getTag$1 = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$2 = '[object Object]';

/** Used for built-in method references. */
var objectProto$11 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$11.hasOwnProperty;

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
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag$1 : getTag$1(object),
      othTag = othIsArr ? arrayTag$1 : getTag$1(other);

  objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

  var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$8.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$8.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

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
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

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
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

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
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

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
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag$1);
}

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
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

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
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
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
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

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
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

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
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

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
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

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
  return value == null ? '' : baseToString(value);
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

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
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

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
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

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
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

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
  return object != null && hasPath(object, path, baseHasIn);
}

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
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

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
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

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
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

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
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

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
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

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
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag$2);
}

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

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

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$1 + ']',
    rsCombo = '[' + rsComboRange$1 + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange$1 + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange$1 + ']?',
    rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

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

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

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
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag$1(collection);
  if (tag == mapTag$3 || tag == setTag$3) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

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
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/** Used for built-in method references. */
var objectProto$12 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$12.hasOwnProperty;

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
  if (!(hasOwnProperty$9.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

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

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

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
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

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
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
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
    return apply(func, this, otherArgs);
  };
}

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
  return function() {
    return value;
  };
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

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

  return function() {
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

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

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
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
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

/** Used for built-in method references. */
var objectProto$13 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$10 = objectProto$13.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$10.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

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
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

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
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn$1(source), object);
});

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
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

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
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

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
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

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
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}

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
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

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
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

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
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

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

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

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
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

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
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

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

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

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
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

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
function noop() {
  // No operation performed.
}

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

/** Used to lookup unminified function names. */
var realNames = {};

/** Used for built-in method references. */
var objectProto$14 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$11 = objectProto$14.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty$11.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

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

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

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

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

/** Used for built-in method references. */
var objectProto$15 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$12 = objectProto$15.hasOwnProperty;

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
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty$12.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

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
var setData = shortOut(baseSetData);

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

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

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
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

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
  return !!length && baseIndexOf(array, value, 0) > -1;
}

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
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', WRAP_BIND_FLAG$1],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

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
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

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

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG$1 : WRAP_PARTIAL_RIGHT_FLAG$1);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG$1 : WRAP_PARTIAL_FLAG$1);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG$2 | WRAP_BIND_KEY_FLAG$1);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

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
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

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
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

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
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

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
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

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

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG$2) && (bitmask == WRAP_CURRY_FLAG$3)) ||
    ((srcBitmask == WRAP_ARY_FLAG$2) && (bitmask == WRAP_REARG_FLAG$1) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG$2 | WRAP_REARG_FLAG$1)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG$3));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG$5) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG$5 ? 0 : WRAP_CURRY_BOUND_FLAG$1;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER$1) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER$1) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG$2) {
    data[8] = data[8] == null ? source[8] : nativeMin$1(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

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
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

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
  value = toNumber(value);
  if (value === INFINITY$2 || value === -INFINITY$2) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

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
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

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
  ary = ary === undefined ? ary : nativeMax$3(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG$2) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax$3(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2)) {
    bitmask &= ~(WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG$6) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG$4 || bitmask == WRAP_CURRY_RIGHT_FLAG$2) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG$2 || bitmask == (WRAP_BIND_FLAG$6 | WRAP_PARTIAL_FLAG$2)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

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
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG$7;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG$3;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

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
  return (array && array.length) ? array[0] : undefined;
}

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
  return object && copyObject(source, keys(source), object);
}

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
  return object && copyObject(source, keysIn$1(source), object);
}

/** Detect free variable `exports`. */
var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

/** Built-in value references. */
var Buffer$1 = moduleExports$2 ? root.Buffer : undefined,
    allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : undefined;

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

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

/** Used for built-in method references. */
var objectProto$16 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$13 = objectProto$16.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$13.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

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

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : undefined,
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

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

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
      return cloneArrayBuffer(object);

    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);

    case dataViewTag$3:
      return cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return cloneTypedArray(object, isDeep);

    case mapTag$4:
      return new Ctor;

    case numberTag$2:
    case stringTag$3:
      return new Ctor(object);

    case regexpTag$2:
      return cloneRegExp(object);

    case setTag$4:
      return new Ctor;

    case symbolTag$2:
      return cloneSymbol(object);
  }
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

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
  return isObjectLike(value) && getTag$1(value) == mapTag$5;
}

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

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
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

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
  return isObjectLike(value) && getTag$1(value) == setTag$5;
}

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

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
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

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
    objectTag$3 = '[object Object]',
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
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] =
cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] =
cloneableTags[boolTag$3] = cloneableTags[dateTag$3] =
cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
cloneableTags[int32Tag$2] = cloneableTags[mapTag$6] =
cloneableTags[numberTag$3] = cloneableTags[objectTag$3] =
cloneableTags[regexpTag$3] = cloneableTags[setTag$6] =
cloneableTags[stringTag$4] = cloneableTags[symbolTag$3] =
cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] =
cloneableTags[weakMapTag$2] = false;

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
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$3 || tag == argsTag$3 || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

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
  return baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
}

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
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

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

/** Used to compose unicode character classes. */
var rsAstralRange$2 = '\\ud800-\\udfff',
    rsComboMarksRange$2 = '\\u0300-\\u036f',
    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
    rsVarRange$2 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral$1 = '[' + rsAstralRange$2 + ']',
    rsCombo$1 = '[' + rsComboRange$2 + ']',
    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
    rsModifier$1 = '(?:' + rsCombo$1 + '|' + rsFitz$1 + ')',
    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ$2 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod$1 = rsModifier$1 + '?',
    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
    rsSymbol$1 = '(?:' + [rsNonAstral$1 + rsCombo$1 + '?', rsCombo$1, rsRegional$1, rsSurrPair$1, rsAstral$1].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode$1 = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol$1 + rsSeq$1, 'g');

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

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

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
var upperFirst = createCaseFirst('toUpperCase');

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
  return upperFirst(toString(string).toLowerCase());
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange$3 = '\\u0300-\\u036f',
    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3;

/** Used to compose unicode capture groups. */
var rsCombo$2 = '[' + rsComboRange$3 + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo$2, 'g');

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
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

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

/** Used to compose unicode character classes. */
var rsAstralRange$3 = '\\ud800-\\udfff',
    rsComboMarksRange$4 = '\\u0300-\\u036f',
    reComboHalfMarksRange$4 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$4 = '\\u20d0-\\u20ff',
    rsComboRange$4 = rsComboMarksRange$4 + reComboHalfMarksRange$4 + rsComboSymbolsRange$4,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange$3 = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo$3 = '[' + rsComboRange$4 + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange$3 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz$2 = '\\ud83c[\\udffb-\\udfff]',
    rsModifier$2 = '(?:' + rsCombo$3 + '|' + rsFitz$2 + ')',
    rsNonAstral$2 = '[^' + rsAstralRange$3 + ']',
    rsRegional$2 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair$2 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ$3 = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod$2 = rsModifier$2 + '?',
    rsOptVar$2 = '[' + rsVarRange$3 + ']?',
    rsOptJoin$2 = '(?:' + rsZWJ$3 + '(?:' + [rsNonAstral$2, rsRegional$2, rsSurrPair$2].join('|') + ')' + rsOptVar$2 + reOptMod$2 + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq$2 = rsOptVar$2 + reOptMod$2 + rsOptJoin$2,
    rsEmoji = '(?:' + [rsDingbat, rsRegional$2, rsSurrPair$2].join('|') + ')' + rsSeq$2;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

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
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

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
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

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
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

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
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

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
  return isObjectLike(value) && isArrayLike(value);
}

/** `Object#toString` result references. */
var objectTag$4 = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype,
    objectProto$17 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$14 = objectProto$17.hasOwnProperty;

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
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$4) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$14.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  return key == '__proto__'
    ? undefined
    : object[key];
}

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
  return copyObject(value, keysIn$1(value));
}

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
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

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
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn$1);
}

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
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

var RequestOptions = {

    // `responseType` indicates the type of data that the server will respond with
    // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // default

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

function transformRequest(transformer, context) {
    if(!isFunction(transformer)) {
        throw new Error('The transformer must be a defined as a function with two arguments: [data, headers].');
    }

    (context || RequestOptions.transformRequest).push(transformer);
}

function transformResponse(transformer, context) {
    if(!isFunction(transformer)) {
        throw new Error('The transformer must be a defined as a function with one arguments: [data].');
    }

    (context || RequestOptions.transformResponse).push(transformer);
}

const PROXY_OPTION_PROPERTIES = [
    'headers',
    'params',
    'data'
];

const PROXY_OPTION_METHODS = {
    get(prop, context) {
        return () => {
            return context[prop];
        };
    },
    set(prop, context) {
        return (value) => {
            context[prop] = value;
        };
    },
    add(prop, context) {
        return (key, value) => {
            context[prop][key] = value;
        };
    },
    remove(prop, context) {
        return (key) => {
            delete context[prop][key];
        };
    },
    merge(prop, context) {
        return (key, values) => {
            assignIn(context[prop], key);
        };
    }
};

const method = function(action, prop) {
    return camelCase([action, prop].join(' '));
};

const chainable = function(prop) {
    return (key, value) => {
        if(key instanceof FormData) {
            this[method('set', prop)](key);
        }
        else if(isObject(key)) {
            this[method('merge', prop)](key);
        }
        else {
            this[method('add', prop)](key, value);
        }

        return this;
    };
};

function merge() {
    const args = [].slice.call(arguments);
    const items = args.splice(1);
    let subject = head(args);

    for(let i in items) {
        subject = mergeWith(subject, items[i], (subject, value) => {
            if(isArray(subject)) {
                return subject.concat(value);
            }
            else if(isObject(subject)) {
                return assignIn(subject, value);
            }

            return value;
        });
    }

    return subject;
}

class Request {

    constructor(url, options = {}) {
        this.$options = merge({
            url: url,
            data: {},
            headers: {},
            params: {},
        }, cloneDeep(RequestOptions), options);

        forEach(PROXY_OPTION_METHODS, (callback, key) => {
            this[method(key, 'option')] = bind(callback)('$options', this);
        });

        forEach(PROXY_OPTION_PROPERTIES, (prop) => {
            forEach(PROXY_OPTION_METHODS, (callback, key) => {
                this[method(key, prop)] = bind(callback)(prop, this.$options);
            });

            this[prop] = bind(chainable, this)(prop);
        });

        this.reset();
    }

    reset() {
        this.$error = null;
        this.$status = null;
        this.$statusText = null;
        this.$response = null;
        this.$requestSentAt = null;
        this.$responseReceivedAt = null;
    }

    hasSent() {
        return !!this.$requestSentAt;
    }

    hasResponse() {
        return !!this.$responseReceivedAt;
    }

    passed() {
        return this.hasResponse() && !this.$error;
    }

    failed() {
        return this.hasResponse() && !!this.$error;
    }

    get(params = {}, headers = {}) {
        return this.params(params).headers(headers).send('get');
    }

    post(data = {}, headers = {}) {
        return this.data(data).headers(headers).send('post');
    }

    put(data = {}, headers = {}) {
        return this.data(data).headers(headers).send('put');
    }

    delete(headers = {}) {
        return this.headers(headers).send('delete');
    }

    send(method) {
        this.reset();
        this.$requestSentAt = moment();
        this.addOption('method', method);

        return new Promise((resolve, reject) => {
            axios(this.$options).then(response => {
                this.$response = response;
                this.$responseReceivedAt = moment();
                this.$status = response.status;
                this.$statusText = response.statusText;

                resolve(response.data);
            }, error => {
                this.$error = error;
                this.$response = error.response;
                this.$responseReceivedAt = moment();
                this.$status = error.response ? error.response.status : null;
                this.$statusText = error.response ? error.response.statusText : null;

                reject(error.response || error);
            });
        });
    }

    transformRequest(transformer) {
        if(!this.$options.transformRequest) {
            this.$options.transformRequest = [];
        }

        transformRequest(transformer, this.$options.transformRequest);
    }

    transformResponse(transformer) {
        if(this.$options.transformResponse) {
            this.$options.transformResponse = [];
        }

        transformResponse(transformer, this.$options.transformResponse);
    }

    static interceptRequest(success, error) {
        this.interceptors().request.use(success, error);
    }

    static interceptResponse(success, error) {
        this.interceptors().response.use(success, error);
    }

    static interceptors() {
        return axios.interceptors;
    }

    static option(key, value) {
        if(isObject(key)) {
            merge(RequestOptions, key);
        }
        else {
            const option = {};
            option[key] = value;
            merge(RequestOptions, option);
        }
    }

    static make(url, params = {}) {
        return new this(url, params);
    }
}

class Model {

    /**
     * Initialize the model instance
     *
     * @param data object
     * @return void
     */
    constructor(data = {}, params = {}) {
        this.$changed = {};
        this.$exists = false;
        this.$attributes = {};
        this.$key = this.key();
        this.initialize(data);
        this.$files = this.files();
        this.$properties = this.properties();

        forEach(params, (value, key) => {
            this[key] = value;
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
    initialize(data) {
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
    endpoint() {
        //
    }

    /**
     * Define the corresponding uri schema.
     *
     * @return string
     */
    uri() {
        return filter([
            (this.endpoint() || ''),
            (this.exists() ? this.id() : null)
        ].concat([].slice.call(arguments)))
        .join('/')
        .replace(/^\//, '');
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
        if(isArray(key) || isObject(key)) {
            return this.getAttributes().filter((value) => {
                return data.indexOf(value) !== -1;
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
        return keys(this.$changed);
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
     * Get the unchanged attributes
     *
     * @return array
     */
    getUnchangedAttributes() {
        return filter(keys(this.$attributes), key => !(key in this.$changed));
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
            forEach(data, (value, key) => {
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
        forEach(this.$changed, (value, key) => {
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
        return !key ? size(this.$changed) > 0 : !isUndefined(this.$changed[key]);
    }

    /**
     * Does the model have any File objects. If so, need to send as multipart.
     *
     * @return bool
     */
    hasFiles() {
        function count(files, total = 0) {
            return reduce(files, (carry, value) => {
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
    save(data = {}, config = {}) {
        return !this.exists() ? this.create(data, config) : this.update(data, config);
    }

    /**
     * Create a new model
     *
     * @param data object
     * @return bool
     */
    create(data = {}, config = {}) {
        this.fill(data);

        return new Promise((resolve, reject) => {
            const request = this.constructor.request(this.uri(), assignIn({}, config));
            const data = !this.hasFiles() ? this.toJson() : this.toFormData();

            request.post(data).then(response => {
                resolve(this.fill(response));
            }, reject);
        });
    }

    /**
     * Update an existing model
     *
     * @param data object
     * @return bool
     */
    update(data = {}, config = {}) {
        this.fill(data);

        return new Promise((resolve, reject) => {
            const request = this.constructor.request(this.uri(), config);
            const data = !this.hasFiles() ? this.toJson() : this.toFormData();

            request[(this.hasFiles() ? 'post' : 'put')](data).then(response => {
                resolve(this.fill(response));
            }, reject);
        });
    }

    /**
     * Delete an existing model
     *
     * @param data object
     * @return bool
     */
    delete(config = {}) {
        return new Promise((resolve, reject) => {
            if(!this.exists()) {
                reject(new Error('The model must have a primary key before it can be delete.'));
            }

            const request = this.constructor.request(this.uri(), config);

            request.delete().then(response => {
                resolve(this.fill(response));
            }, reject);
        });
    }

    /**
     * Convert the Model instance to a FormData instance
     *
     * @return object
     */
    toFormData() {
        const form = new FormData();

        forEach(this.toJSON(), (value, key) => {
            if(isArray(value)) {
                forEach(value, item => {
                    if(!(item instanceof File) && (isObject(item) || isArray(item))) {
                        item = JSON.stringify(item);
                    }

                    form.append(key.replace(/(.+)(\[.+\]?)$/, '$1')+'[]', item);
                });
            }
            else if(!(value instanceof File) && isObject(value)) {
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
     * @return object
     */
    toJSON() {
        return pickBy(this.$attributes, (value, key) => {
            return !this.$properties.length || (
                key === this.key() || this.$properties.indexOf(key) !== -1
            );
        });
    }

    /**
     * Alias for toJSON
     *
     * @return object
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
    static search(uri, params = {}, config = {}) {
        const model = new this;

        if(!uri) {
            uri = model.uri();
        }

        return new Promise((resolve, reject) => {
            const request = this.request(uri, config);

            request.get(params).then(response => {
                resolve(map(response.data, data => {
                    return new this(data);
                }));
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
            const model = new this;
            this.request(model.uri(id), config).get().then(response => {
                resolve(model.initialize(response));
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
    static request(url, config = {}) {
        return new Request(url, config);
    }

}

class Page extends Model {

    endpoint() {
        return 'page'
    }

}

var HttpConfig = {

    baseURL: 'https://giveworks.test/api/public/v1/'

}

var HttpErrorResponse = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alert alert-danger",style:({'width': _vm.width, 'min-width': _vm.minWidth, 'max-width': _vm.maxWidth})},[_c('h2',{staticClass:"alert-header"},[_vm._v(_vm._s(_vm.header))]),_vm._v(" "),_c('div',{staticClass:"alert-body"},[_vm._v(" "+_vm._s(_vm.error.message)),_c('br'),_vm._v(" "+_vm._s(_vm.error.data.errors || _vm.error.response.data.message)+" ")])])},staticRenderFns: [],

    name: 'http-error-response',

    props: {
        width: String,
        minWidth: String,
        maxWidth: String,
        'error': {
            type: [Object, Error],
            default() {
                return {};
            }
        },
        'header': {
            type: String,
            default: 'Error!'
        }
    }

}

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
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

var BaseType = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"activity-indicator",class:_vm.classes},_vm._l((_vm.nodes),function(i){return _c('div')}))},staticRenderFns: [],

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

}

var ActivityIndicatorDots = {

    name: 'activity-indicator-dots',

    extends: BaseType
}

var ActivityIndicatorSpinner = {

    name: 'activity-indicator-spinner',

    extends: BaseType,

    props: assignIn({}, BaseType.props, {
        nodes: {
            type: Number,
            default: 12
        }
    })
}

var ActivityIndicator = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.center)?_c('div',{staticClass:"center-wrapper"},[_c('div',{staticClass:"center-content"},[_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}})],1)]):_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}})},staticRenderFns: [],

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
        ActivityIndicatorDots,
        ActivityIndicatorSpinner
    },

    computed: {
        component: function() {
            return kebabCase(this.prefix + this.type.replace(this.prefix, ''));
        }
    }

}

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

}

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
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax$4(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

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
  return pickBy(object, negate(baseIteratee(predicate)));
}

/** `Object#toString` result references. */
var mapTag$7 = '[object Map]',
    setTag$7 = '[object Set]';

/** Used for built-in method references. */
var objectProto$18 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$15 = objectProto$18.hasOwnProperty;

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
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag$1(value);
  if (tag == mapTag$7 || tag == setTag$7) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty$15.call(value, key)) {
      return false;
    }
  }
  return true;
}

const loaded = {};

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
    return new Promise((resolve, reject) => {
        try {
            if(!loaded[url]) {
                append(element(url)).addEventListener('load', e => {
                    resolve(loaded[url] = e);
                });
            }
            else {
                resolve(loaded[url]);
            }
        }
        catch(e) {
            reject(e);
        }
    });
}

var GoogleAutocompleteList = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"autocomplete-list-wrapper"},[_c('ul',{staticClass:"autocomplete-list"},_vm._l((_vm.items),function(item){return _c('li',{staticClass:"autocomplete-list-item",on:{"mouseenter":function($event){_vm.focus($event);},"mouseleave":function($event){_vm.blur($event);}}},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.select($event, item);}}},[_c('span',{staticClass:"autocomplete-list-item-icon"}),_vm._v(" "),_c('span',{staticClass:"autocomplete-list-item-label",domProps:{"innerHTML":_vm._s(item[_vm.display])}})])])}))])},staticRenderFns: [],

    name: 'google-autocomplete-field',

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
        hasFocus() {
            return !!this.$el.querySelector('.is-focused');
        },
        focus(event) {
            if(this.hasFocus()) {
                this.$el.querySelector('.is-focused').classList.remove('is-focused');
            }

            event.currentTarget.classList.add('is-focused');
            this.$parent.$emit('prediction:focus', event);
        },
        blur(event) {
            event.currentTarget.classList.remove('is-focused');
            this.$parent.$emit('prediction:blur', event);
        },
        select(event, item) {
            this.$parent.$emit('prediction:select', item);
        }
    }

}

const KEYCODE = {
    ESC: 27,
    UP: 38,
    DOWN: 40,
    ENTER: 13
};

const API_REQUEST_OPTIONS = [
    'bounds',
    'location',
    'component-restrictions',
    'offset',
    'radius',
    'types'
];

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

var GoogleAutocompleteField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group autocomplete-field",class:{'was-validated': _vm.error || _vm.errors[_vm.name]}},[(_vm.label)?_c('label',{staticClass:"text-bold",attrs:{"for":_vm.id || _vm.name},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e(),_vm._v(" "),_c('input',{staticClass:"form-control",class:{'is-invalid': _vm.error || _vm.errors[_vm.name]},attrs:{"type":"text","name":_vm.name,"id":_vm.id || _vm.name,"autocomplete":"new-password"},on:{"keyup":_vm.keyup,"blur":function($event){_vm.blur($event);},"focus":_vm.show}}),_vm._v(" "),(_vm.error || _vm.errors[_vm.name])?_c('div',{staticClass:"invalid-feedback",domProps:{"innerHTML":_vm._s(_vm.error || _vm.errors[_vm.name].join('<br>'))}}):_vm._e(),_vm._v(" "),(_vm.predictions && _vm.showPredictions)?_c('google-autocomplete-list',{attrs:{"items":_vm.predictions}}):_vm._e()],1)},staticRenderFns: [],

    name: 'google-autocomplete-field',

    components: {
        GoogleAutocompleteList
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
            default: function(event) {
                this.$focus = false;
            }
        },
        'prediction-focus': {
            type: Function,
            default: function(event) {
                this.$focus = event.target;
            }
        },
        'prediction-select': {
            type: Function,
            default: function(item) {
                this.select(item);
            }
        },
        'place-changed': {
            type: Function,
            default: function(place) {
                this.hide();
            }
        }
    },

    data() {
        return {
            predictions: false,
            showPredictions: false
        };
    },

    methods: {
        getInputElement() {
            return this.$el.querySelector('input');
        },
        getRequestOptions() {
            const options = {
                input: this.getInputElement().value
            };

            forEach(API_REQUEST_OPTIONS, key => {
                options[key] = this[key];
            });

            return omitBy(options, isEmpty);
        },
        select(item) {
            return new Promise((resolve, reject) => {
                this.$geocoder.geocode({placeId: item.place_id}, (response, status) => {
                    switch(status) {
                        case google.maps.places.PlacesServiceStatus.OK:
                            this.$emit('place:changed', response[0]);
                            this.$emit('autofill', response[0]);
                            resolve(response);
                            break;
                        default:
                            reject(status);
                    }
                });
            });
        },
        search() {
            return new Promise((resolve, reject) => {
                if(!this.getInputElement().value) {
                    this.predictions = false;
                    this.showPredictions = false;
                    reject();
                }
                else {
                    this.$autocompleteService.getPlacePredictions(this.getRequestOptions(), (response, status) => {
                        switch(status) {
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
        blur(event) {
            if(!this.$el.querySelector('.is-focused')) {
                this.hide();
            }
        },
        keyup(event) {
            switch (event.keyCode) {
                case KEYCODE.ENTER:
                    if(this.$el.querySelector('.is-focused')) {
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

            this.search().then(response => {
                this.showPredictions = true;
                this.predictions = response;
            }, error => {
                this.predictions = false;
            });
        },
        hide() {
            this.showPredictions = false;
        },
        show() {
            this.showPredictions = true;
        },
        up() {
            if(this.$focus) {
                this.$focus.classList.remove('is-focused');
            }

            this.$focus = !this.$focus || !this.$focus.previousSibling ?
                this.$el.querySelector('.autocomplete-list-item:last-child') :
                this.$focus.previousSibling;

            this.$focus.classList.add('is-focused');
        },
        down() {
            if(this.$focus) {
                this.$focus.classList.remove('is-focused');
            }

            this.$focus = !this.$focus || !this.$focus.nextSibling ?
                this.$el.querySelector('.autocomplete-list-item:first-child') :
                this.$focus.nextSibling;

            this.$focus.classList.add('is-focused');
        }
    },

    mounted() {
        script('https://maps.googleapis.com/maps/api/js?key='+this.apiKey+'&libraries=places', () => {
            this.$geocoder = new google.maps.Geocoder();
            this.$autocompleteService = new google.maps.places.AutocompleteService();
        });

        this.$on('place:changed', this.placeChanged);
        this.$on('prediction:blur', this.predictionBlur);
        this.$on('prediction:focus', this.predictionFocus);
        this.$on('prediction:select', this.predictionSelect);
    }

}

var ContactInfoFieldset = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('fieldset',{staticClass:"mb-4"},[_c('legend',[_vm._v("Your information")]),_vm._v(" "),(_vm.page.options.add_title)?_c('select-field',{attrs:{"name":"title","label":"Title","options":_vm.titles,"errors":_vm.errors},model:{value:(_vm.form.title),callback:function ($$v) {_vm.$set(_vm.form, "title", $$v);},expression:"form.title"}}):_vm._e(),_vm._v(" "),_c('input-field',{attrs:{"name":"first","label":"First Name","errors":_vm.errors},model:{value:(_vm.form.first),callback:function ($$v) {_vm.$set(_vm.form, "first", $$v);},expression:"form.first"}}),_vm._v(" "),_c('input-field',{attrs:{"name":"last","label":"Last Name","errors":_vm.errors},model:{value:(_vm.form.last),callback:function ($$v) {_vm.$set(_vm.form, "last", $$v);},expression:"form.last"}}),_vm._v(" "),_c('input-field',{attrs:{"type":"email","name":"email","label":"Email","placeholder":"you@example.com","error":_vm.errors.email && _vm.errors.email.join('<br>')},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v);},expression:"form.email"}}),_vm._v(" "),(_vm.page.options.add_phone)?_c('input-field',{attrs:{"name":"phone","label":"Phone Number","errors":_vm.errors},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v);},expression:"form.phone"}}):_vm._e(),_vm._v(" "),(_vm.showAddress || _vm.page.options.add_street)?_c('input-field',{attrs:{"name":"street","label":"Address","errors":_vm.errors},model:{value:(_vm.form.address),callback:function ($$v) {_vm.$set(_vm.form, "address", $$v);},expression:"form.address"}}):_vm._e(),_vm._v(" "),(_vm.showAddress || _vm.page.options.add_city || _vm.page.options.add_zip)?_c('div',{staticClass:"row"},[(_vm.showAddress || _vm.page.options.add_city)?_c('div',{staticClass:"col-sm-8"},[_c('input-field',{attrs:{"name":"city","label":"City","errors":_vm.errors},model:{value:(_vm.form.city),callback:function ($$v) {_vm.$set(_vm.form, "city", $$v);},expression:"form.city"}})],1):_vm._e(),_vm._v(" "),(_vm.showAddress || _vm.page.options.add_zip)?_c('div',{class:{'col-sm-4': _vm.showAddress || _vm.page.options.add_city, 'col-sm-12': !_vm.page.options.add_city}},[_c('input-field',{attrs:{"name":"zip","label":"Zip","errors":_vm.errors},model:{value:(_vm.form.zip),callback:function ($$v) {_vm.$set(_vm.form, "zip", $$v);},expression:"form.zip"}})],1):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.showAddress || _vm.page.options.add_state)?_c('select-field',{attrs:{"name":"state","label":"State","options":_vm.states,"errors":_vm.errors},model:{value:(_vm.form.state),callback:function ($$v) {_vm.$set(_vm.form, "state", $$v);},expression:"form.state"}}):_vm._e(),_vm._v(" "),(_vm.page.options.add_phone)?_c('input-field',{attrs:{"name":"phone","label":"Phone Number","errors":_vm.errors},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v);},expression:"form.phone"}}):_vm._e()],1),_vm._v(" "),(_vm.shouldShowEmployment)?_c('fieldset',[_c('legend',[_vm._v("Employment Information")]),_vm._v(" "),(!_vm.recurring)?_c('p',[_c('small',{staticClass:"text-muted",domProps:{"innerHTML":_vm._s(_vm.employmentOccurMessage)}})]):_vm._e(),_vm._v(" "),(!_vm.isRetired)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('input-field',{attrs:{"id":"employer","name":"employer","label":"Employer","errors":_vm.errors},model:{value:(_vm.form.employer),callback:function ($$v) {_vm.$set(_vm.form, "employer", $$v);},expression:"form.employer"}})],1),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('input-field',{attrs:{"id":"occupation","name":"occupation","label":"Occupation","errors":_vm.errors},model:{value:(_vm.form.occupation),callback:function ($$v) {_vm.$set(_vm.form, "occupation", $$v);},expression:"form.occupation"}})],1)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.retired),expression:"form.retired"}],staticClass:"custom-control-input",attrs:{"type":"checkbox","name":"retired","value":"1"},domProps:{"checked":Array.isArray(_vm.form.retired)?_vm._i(_vm.form.retired,"1")>-1:(_vm.form.retired)},on:{"change":[function($event){var $$a=_vm.form.retired,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="1",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.form, "retired", $$a.concat([$$v])));}else{$$i>-1&&(_vm.$set(_vm.form, "retired", $$a.slice(0,$$i).concat($$a.slice($$i+1))));}}else{_vm.$set(_vm.form, "retired", $$c);}},function($event){_vm.setRetired($event.target.checked);}]}}),_vm._v(" "),_c('span',{staticClass:"custom-control-indicator"}),_vm._v(" "),_c('small',{staticClass:"custom-control-label text-muted form-text"},[_vm._v("I'm retired")])])])]):_vm._e()])},staticRenderFns: [],

    name: 'contact-info-fieldset',

    components: {
        GoogleAutocompleteField
    },

    mixins: [
        FormComponent
    ],

    props: {
        showAddress: Boolean
    },

    computed: {

        isRetired() {
            return this.employer === 'Retired' && this.occupation === 'Retired';
        },

        shouldShowEmployment() {
            return (
                this.page.site.type === 'PAC' ||
                this.page.site.type === 'Campaign'
            );
        },

        employmentOccurMessage() {
            return this.page.site.emp_occ_msg || this.page.site.config.giveworks.emp_occ_msg;
        },

        titles() {
            return this.page.site.config.giveworks.titles;
        },

        states() {
            const states = [];

            for(let i in States) {
                states.push({
                    value: i,
                    label: States[i]
                });
            }

            return states;
        }
    },

    methods: {

        onAutofill(place) {
            const addressComponents = {
                'address': ['street_number', 'route'],
                'city': ['sublocality', 'locality'],
                'state': ['administrative_area_level_1'],
                'zip': ['postal_code']
            };

            forEach(addressComponents, (parts, field) => {
                const part = compact(map(place.address_components, component => {
                    return findIndex(component.types, part => {
                        return parts.indexOf(part) !== -1;
                    }) !== -1 ? component.short_name : null;
                })).join(' ');

                console.log(field, part);
                //this.form[field] = part;
            });
        },

        setRetired(isChecked) {
            this.occupation = this.employer = isChecked ? 'Retired' : '';
        }

    },

    created() {
        this.$dispatch.on('place:changed', place => {
            this.$el.querySelector('[name="street"]').value = 'test';
        });
    },

    beforeDestroy() {
        this.$dispatch.off('place:changed');
    }

}

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
var merge$1 = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

class Gateway {

    constructor(options) {
        this.options = options;

        if(!this.options) {
            throw new Error('A gateway must have some options passed to it!');
        }
    }

}

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

const path = [
	"M93.6,27.1C87.6,34.2,78,39.8,68.4,39c-1.2-9.6,3.5-19.8,9-26.1c6-7.3,16.5-12.5,25-12.9",
	"C103.4,10,99.5,19.8,93.6,27.1 M102.3,40.9c-13.9-0.8-25.8,7.9-32.4,7.9c-6.7,0-16.8-7.5-27.8-7.3c-14.3,0.2-27.6,8.3-34.9,21.2",
	"c-15,25.8-3.9,64,10.6,85c7.1,10.4,15.6,21.8,26.8,21.4c10.6-0.4,14.8-6.9,27.6-6.9c12.9,0,16.6,6.9,27.8,6.7",
	"c11.6-0.2,18.9-10.4,26-20.8c8.1-11.8,11.4-23.3,11.6-23.9c-0.2-0.2-22.4-8.7-22.6-34.3c-0.2-21.4,17.5-31.6,18.3-32.2",
	"C123.3,42.9,107.7,41.3,102.3,40.9 M182.6,11.9v155.9h24.2v-53.3h33.5c30.6,0,52.1-21,52.1-51.4c0-30.4-21.1-51.2-51.3-51.2H182.6z",
	"M206.8,32.3h27.9c21,0,33,11.2,33,30.9c0,19.7-12,31-33.1,31h-27.8V32.3z M336.6,169c15.2,0,29.3-7.7,35.7-19.9h0.5v18.7h22.4V90.2",
	"c0-22.5-18-37-45.7-37c-25.7,0-44.7,14.7-45.4,34.9h21.8c1.8-9.6,10.7-15.9,22.9-15.9c14.8,0,23.1,6.9,23.1,19.6v8.6l-30.2,1.8",
	"c-28.1,1.7-43.3,13.2-43.3,33.2C298.4,155.6,314.1,169,336.6,169z M343.1,150.5c-12.9,0-21.1-6.2-21.1-15.7c0-9.8,7.9-15.5,23-16.4",
	"l26.9-1.7v8.8C371.9,140.1,359.5,150.5,343.1,150.5z M425.1,210.2c23.6,0,34.7-9,44.4-36.3L512,54.7h-24.6l-28.5,92.1h-0.5",
	"l-28.5-92.1h-25.3l41,113.5l-2.2,6.9c-3.7,11.7-9.7,16.2-20.4,16.2c-1.9,0-5.6-0.2-7.1-0.4v18.7C417.3,210,423.3,210.2,425.1,210.2z",
].join("");

Icon.register({
	"apple-pay": {
		"width":512,
		"height":210.2,
		"paths":[{"d":path}]
	}
});

Icon.register({"credit-card":{"width":576,"height":512,"paths":[{"d":"M0 432C0 458.5 21.5 480 48 480H528C554.5 480 576 458.5 576 432V256H0V432zM192 364C192 357.4 197.4 352 204 352H340C346.6 352 352 357.4 352 364V404C352 410.6 346.6 416 340 416H204C197.4 416 192 410.6 192 404V364zM64 364C64 357.4 69.4 352 76 352H148C154.6 352 160 357.4 160 364V404C160 410.6 154.6 416 148 416H76C69.4 416 64 410.6 64 404V364zM576 80V128H0V80C0 53.5 21.5 32 48 32H528C554.5 32 576 53.5 576 80z"}]}});

Icon.register({"brands/google-wallet":{"width":448,"height":512,"paths":[{"d":"M156.8 126.8C194.4 187.4 221 239.9 241.1 289.3 232.8 323.1 222.3 355.8 209.8 387.6 196.6 335.3 183.3 286.3 153.8 239.1 160.3 202.7 156.1 165.5 156.8 126.8zM109.3 200H16.1C9.6 200 5.6 207.5 9.6 212.7 51.8 267 81.3 330.5 101.3 400H204.8C188.6 330.3 166.1 266.3 122.3 206.5 119.3 202.5 114.3 200 109.3 200zM157.1 112C225.6 220 287.1 346.5 295.3 480H409C397 342 340.6 215 265.8 112H157.1zM408.9 43.5C407.1 36.7 400.7 32 393.7 32H305.4C300.1 32 296.4 37 297.6 42.3 310.8 88.8 319.9 137.8 324.1 188.3 372.3 274.5 403.8 366.6 414.7 459.1 430.5 398.6 440 325.6 440 256.1 440 182.5 427.9 111 408.9 43.5z"}]}});

class Stripe extends Gateway {

    api() {
        return 'App\\SiteApis\\Gateways\\Stripe';
    }

    buttons() {
        return [{
            icon: 'credit-card',
            label: 'Credit Card',
            component: 'stripe-credit-card'
        },{
            icon: 'apple-pay',
            iconScale: 3,
            component: 'stripe-payment-button'
        },{
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

    paymentRequest(amount, label) {
        return this.stripe().paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: label,
                amount: amount,
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
                    type: 'donate', // 'default' | 'donate' | 'buy'
                    theme: 'dark', // 'dark' | 'light' | 'light-outline'
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

        return this.elements().create('card', assignIn({style: style}, options));
    }

    elements() {
        return this.stripe().elements();
    }

    stripe() {
        if(!this.options.publishable_key) {
            throw new Error('This site API was authenticated using an older version of Giveworks. To use new version of Giveworks you must setup your Stripe account again.');
        }

        if(!this._stripe) {
            this._stripe = new window.Stripe(this.options.publishable_key);
        }

        return this._stripe;
    }

    script(callback) {
        Script('https://js.stripe.com/v3/', callback);
    }

}

var App = {

    debug: true

}

Icon.register({"brands/paypal":{"width":384,"height":512,"paths":[{"d":"M111.4 295.9C107.9 315.1 94 404.6 89.9 429.9 89.6 431.7 88.9 432.4 86.9 432.4H12.3C4.7 432.4-0.8 425.8 0.2 418.5L58.8 46.6C60.3 37 68.9 29.7 78.8 29.7 231.1 29.7 243.9 26 282.8 41.1 342.9 64.4 348.4 120.6 326.8 181.4 305.3 244 254.3 270.9 186.7 271.7 143.3 272.4 117.2 264.7 111.4 295.9zM357.1 152C355.3 150.7 354.6 150.2 354.1 153.3 352.1 164.7 349 175.8 345.3 186.9 305.4 300.7 194.8 290.8 140.8 290.8 134.7 290.8 130.7 294.1 129.9 300.2 107.3 440.6 102.8 469.9 102.8 469.9 101.8 477 106.3 482.8 113.4 482.8H176.9C185.5 482.8 192.6 476.5 194.3 467.9 195 462.5 193.2 474 208.7 376.6 213.3 354.6 223 356.9 238 356.9 309 356.9 364.4 328.1 380.9 244.6 387.4 209.8 385.5 173.2 357.1 152z"}]}});

class PayPal extends Gateway {

    api() {
        return 'App\\SiteApis\\Gateways\\PayPal';
    }

    buttons() {
        return [{
            icon: 'paypal',
            label: 'PayPal',
            component: 'paypal-payment-button'
        }];
    }

    paypal() {
        if(!this._paypal) {
            this._paypal = window.paypal;
        }

        return this._paypal;
    }

    button(el, $dispatch) {
        const button = this.paypal().Button.render({
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

            validate: (actions) => {
                button.amount ? actions.enable() : actions.disable();

                $dispatch.reply('paypal:enable', (resolve, reject) => {
                    actions.enable();
                    resolve(actions);
                });

                $dispatch.reply('paypal:disable', (resolve, reject) => {
                    actions.disable();
                    resolve(actions);
                });

                $dispatch.emit('paypal:validate', actions);
            },

            payment: function(data, actions) {
                const payment = actions.payment.create({
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

            onRender: function() {
                $dispatch.emit('paypal:render', this);
            },

            onClick: function(data) {
                $dispatch.emit('paypal:click', this, data);
            },

            onCancel: (data, actions) => {
                $dispatch.emit('paypal:cancel', data, actions);
            },

            onError: (error) => {
                $dispatch.emit('paypal:error', error);
            },

            onAuthorize: (data, actions) => {
                $dispatch.emit('paypal:authorize', data, actions);
            }

        }, el);

        return button;
    }

    script(callback) {
        Script('https://www.paypalobjects.com/api/checkout.js', callback);
    }

 }

class AuthorizetNet extends Gateway {

    api() {
        return 'App\\SiteApis\\Gateways\\AuthorizeNet';
    }

    buttons() {
        return [{
            icon: 'credit-card',
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
        if(!this._accept) {
            this._accept = window.Accept;
        }

        return this._accept;
    }

    script(callback) {
        const url = App.debug ? // Is app in developer mode?
            'https://jstest.authorize.net/v1/Accept.js' : // Developer
            'https://js.authorize.net/v1/Accept.js'; // Production;

        Script(url, callback);
    }

 }

const Gateways = {
    'PayPal': PayPal,
    'Stripe': Stripe,
    'Authorize.Net': AuthorizetNet
};

const instances = {};

function Gateway$1(key, options) {
    if(typeof key === 'object') {
        options = key.options;
        key = key.name;
    }

    if(!instances[key]) {
        const Api = Gateways[key];

        if(!Api) {
            throw new Error('"'+key+'" is not in the list of supported gateways. Open /Gateways/Gateway.vue and add it to the list.');
        }

        instances[key] = new Api(options);
    }

    return instances[key];
}

var StripeCreditCard = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group",class:{'was-validated': !!_vm.errors.token}},[_c('label',{staticClass:"d-block mt-3"},[_c('div',{staticClass:"text-bold mb-2"},[_vm._v("Credit Card")]),_vm._v(" "),_c('div',{staticClass:"form-control p-2",class:{'is-invalid': !!_vm.errors.token}},[_c('div',{staticClass:"stripe-field"})]),_vm._v(" "),(_vm.errors.token)?_c('div',{staticClass:"invalid-feedback",domProps:{"innerHTML":_vm._s(_vm.errors.token.join('<br>'))}}):_vm._e()])])},staticRenderFns: [],

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

    created() {
        this.$submitEvent = this.$dispatch.on('form:submit', (data) => {
            this.$card.blur();
        });
    },

    beforeDestroy() {
        this.$dispatch.off(this.$submitEvent);
    },

    mounted() {
        const gateway = Gateway$1(this.gateway);

        this.$dispatch.request('submit:disable');

        gateway.script((event) => {
            this.$card = gateway.card({
                hidePostalCode: this.hidePostalCode,
                value: {
                    postalCode: this.form.zip
                }
            });

            this.$card.addEventListener('change', (event) => {
                this.errors.token = event.error ? [event.error.message] : null;

                if(event.complete) {
                    gateway.createToken(this.$card, {
                        currency: 'usd'
                    }).then((result) => {
                        if (result.error) {
                            this.errors.token = [event.error.message];
                        } else {
                            this.form.token = result.token.id;
                            this.$dispatch.request('submit:enable');
                        }
                    });
                }
            });

            this.$card.mount(this.$el.querySelector('.stripe-field'));
        });
    }

}

Icon.register({"exclamation-triangle":{"width":576,"height":512,"paths":[{"d":"M569.5 440C588 472 564.8 512 527.9 512H48.1C11.1 512-11.9 471.9 6.5 440L246.4 24C264.9-8 311.1-8 329.6 24L569.5 440zM288 354C262.6 354 242 374.6 242 400S262.6 446 288 446 334 425.4 334 400 313.4 354 288 354zM244.3 188.7L251.7 324.7C252.1 331 257.4 336 263.7 336H312.3C318.6 336 323.9 331 324.3 324.7L331.7 188.7C332 181.8 326.6 176 319.7 176H256.3C249.4 176 244 181.8 244.3 188.7z"}]}});

Icon.register({"check-circle":{"width":512,"height":512,"paths":[{"d":"M504 256C504 393 393 504 256 504S8 393 8 256 119 8 256 8 504 119 504 256zM227.3 387.3L411.3 203.3C417.6 197.1 417.6 186.9 411.3 180.7L388.7 158.1C382.4 151.8 372.3 151.8 366.1 158.1L216 308.1 145.9 238.1C139.7 231.8 129.6 231.8 123.3 238.1L100.7 260.7C94.4 266.9 94.4 277.1 100.7 283.3L204.7 387.3C210.9 393.6 221.1 393.6 227.3 387.3z"}]}});

//import ActivityIndicator from '@/Components/ActivityIndicators/ActivityIndicator';

var PaypalPaymentButton = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.loaded || _vm.submitting)?_c('div',{staticClass:"row my-5 py-1"},[_c('div',{staticClass:"col-xs-12"},[_c('activity-indicator',{attrs:{"size":"sm","center":true}})],1)]):_c('div',[(_vm.error)?_c('div',{staticClass:"alert alert-danger"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-2"},[_c('icon',{staticClass:"float-left mt-2",attrs:{"name":"warning","scale":"2.5"}})],1),_vm._v(" "),_c('div',{staticClass:"col-sm-10",domProps:{"innerHTML":_vm._s(_vm.error)}})])]):(_vm.form.payerId && _vm.form.paymentId)?_c('div',{staticClass:"alert alert-success"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-2"},[_c('icon',{staticClass:"float-left mt-2",attrs:{"name":"check-circle","scale":"2.5"}})],1),_vm._v(" "),_c('div',{staticClass:"col-sm-10"},[_vm._v(" Your PayPal payment information has been collected and is ready to be processed. "),_c('a',{attrs:{"href":"#"},on:{"click":function($event){_vm.removePaymentInfo($event);}}},[_vm._v("Cancel Payment")])])])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"paypal-payment-button mt-2 mb-4",class:{'disabled': _vm.disabled, 'd-none': _vm.submitting}})])},staticRenderFns: [],

    name: 'paypal-payment-button',

    components: {
        Icon,
        //ActivityIndicator
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

    data() {
        return {
            loaded: false,
            submitting: false,
            disabled: !this.form.amount
        };
    },

    methods: {
        hasError() {
            return this.errors.payerId || this.errors.paymentId;
        },
        shouldMountButton() {
            return this.$el.querySelector('.paypal-payment-button') && !this.$el.querySelector('.paypal-payment-button iframe');
        },
        hasPaymentInfo() {
            return this.form.amount && (this.form.recurring === 1 || this.form.payerId && this.form.paymentId);
        },
        removePaymentInfo(event) {
            this.$set(this.form, 'payerId', null);
            this.$set(this.form, 'paymentId', null);
            this.$set(this.errors, 'payerId', null);
            this.$set(this.errors, 'paymentId', null);
            this.$dispatch.request('paypal:enable');
            event.preventDefault();
        }
    },

    computed: {
        error: function() {
            const errors = [];

            if(this.errors.payerId){
                errors.push(this.errors.payerId.join('<b>'));
            }

            if(this.errors.paymentId){
                errors.push(this.errors.paymentId.join('<b>'));
            }

            return errors.length ? errors.join('<br>') : false;
        }
    },

    updated() {
        if(this.shouldMountButton()) {
            const button = Gateway$1(this.gateway).button('.paypal-payment-button', this.$dispatch);

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
                    this.$unwatchRecurrin();
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
                this.$dispatch.request('form:submit');
                this.$dispatch.request('paypal:disable');
            });
        }
    },

    beforeCreate() {
        this.$prevFormSubmitReply = this.$dispatch.getReply('form:submit');

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
    },

    mounted() {
        this.$dispatch.request('submit:hide');

        Gateway$1(this.gateway).script((event) => {
            this.loaded = true;
        });
    },

    beforeDestroy() {
        this.$unwatchAmount();
        this.$unwatchRecurring();
        this.$dispatch.request('submit:show');
        this.$dispatch.off('paypal:authorize');
        this.$dispatch.off(this.$submitEvent);
        this.$dispatch.off(this.$submitCompleteEvent);
        this.$dispatch.setReply(this.$prevFormSubmitReply);
    }

}

Icon.register({"brands/cc-jcb":{"width":576,"height":512,"paths":[{"d":"M431.5 244.3V212C472.7 212 470 212.2 470 212.2 477.3 213.5 483.3 219.5 483.3 228.2 483.3 237 477.3 242.7 470 244 468.8 244.4 466.7 244.3 431.5 244.3zM474.3 264.5C471.5 263.8 471 264 431.5 264V299C471.1 299 471.5 299.2 474.3 298.5 481.8 297 487.8 290.5 487.8 281.5 487.8 272.8 481.8 266 474.3 264.5zM576 80V432C576 458.5 554.5 480 528 480H48C21.5 480 0 458.5 0 432V80C0 53.5 21.5 32 48 32H528C554.5 32 576 53.5 576 80zM182 192.3H125C125 259.4 135.7 302 89.2 302 69.7 302 50.4 296.3 32 287.2V315.2C62 323.5 100 323.5 100 323.5 197.9 323.5 182 275.8 182 192.3zM360.5 196.8C297.1 180.8 195.5 181.9 195.5 256.1 195.5 333.2 303.7 329.7 360.5 315.3V287C312.9 311.7 253 309 253 256S312.8 200.4 360.5 224.8V196.8zM544 286.5C544 268 527.5 256 506 254.5V253.7C525.5 251 536.3 238.2 536.3 223.5 536.3 204.5 520.6 193.5 499.3 192.5 499.3 192.5 505.6 192.2 379 192.2V319.7H501.7C526 319.8 544 306.8 544 286.5z"}]}});

Icon.register({"brands/cc-visa":{"width":576,"height":512,"paths":[{"d":"M470.1 231.3S477.7 268.5 479.4 276.3H446C449.3 267.4 462 232.8 462 232.8 461.8 233.1 465.3 223.7 467.3 217.9L470.1 231.3zM576 80V432C576 458.5 554.5 480 528 480H48C21.5 480 0 458.5 0 432V80C0 53.5 21.5 32 48 32H528C554.5 32 576 53.5 576 80zM152.5 331.2L215.7 176H173.2L133.9 282 129.6 260.5 115.6 189.1C113.3 179.2 106.2 176.4 97.4 176H32.7L32 179.1C47.8 183.1 61.9 188.9 74.2 196.2L110 331.2H152.5zM246.9 331.4L272.1 176H231.9L206.8 331.4H246.9zM386.8 280.6C387 262.9 376.2 249.4 353.1 238.3 339 231.2 330.4 226.4 330.4 219.1 330.6 212.5 337.7 205.7 353.5 205.7 366.6 205.4 376.2 208.5 383.4 211.6L387 213.3 392.5 179.7C384.6 176.6 372 173.1 356.5 173.1 316.8 173.1 288.9 194.3 288.7 224.5 288.4 246.8 308.7 259.2 323.9 266.7 339.4 274.3 344.7 279.3 344.7 286 344.5 296.4 332.1 301.2 320.6 301.2 304.6 301.2 296 298.7 282.9 292.9L277.6 290.4 272 325.3C281.4 329.6 298.8 333.4 316.8 333.6 359 333.7 386.5 312.8 386.8 280.6zM528 331.4L495.6 176H464.5C454.9 176 447.6 178.8 443.5 188.9L383.8 331.4H426S432.9 312.2 434.4 308.1H486C487.2 313.6 490.8 331.4 490.8 331.4H528z"}]}});

Icon.register({"brands/cc-amex":{"width":576,"height":512,"paths":[{"d":"M576 255.4C538.1 255.2 531.8 254.5 521.5 260.4V255.4C476.2 255.4 468 253.7 456.6 260.6V255.4H378.4V260.5C367 254 357 255.4 302.7 255.4V261C296.4 257.3 288.2 255.4 278.4 255.4H220.4C216.9 259.2 207.9 269.1 204.7 272.6 192 258.5 194.2 261 189.2 255.4H106.1V347.7H188.1C191.4 344.2 201 333.8 204.2 330.3 216.9 344.6 214.5 342 219.6 347.7H268.5C268.5 333 268.6 339.4 268.6 324.7 280.1 324.9 292.9 324.5 302.9 318.5 302.9 332.4 302.8 335.6 302.8 347.7H342.4C342.4 329.2 342.5 340.3 342.5 322.4 348.7 322.4 350.2 322.4 351.9 322.5 352 323.8 351.9 322.5 351.9 347.7 504.7 347.7 497.8 348.8 508.6 343.2V347.7C543.4 347.7 563.4 349.9 576.1 341.6V432C576.1 458.5 554.6 480 528.1 480H48C21.5 480 0 458.5 0 432V228.3H26.6C30.8 218.2 28.8 223 33 213H52.2C56.4 223 54.4 218.2 58.6 228.3H111.5V216.9C113.7 221.9 112.6 219.4 116.6 228.3H146.1C148.5 222.8 148.7 222.5 151.2 216.9V228.3H286.7V203.2C293.1 203.2 294.7 203.1 296.5 203.4 296.5 203.4 296.3 214.3 296.6 228.2H363.1V219.3C370.5 225.2 380.5 228.2 392.8 228.2H419.6C423.8 218.1 421.8 222.9 426 212.9H445C451.5 227.9 445.2 213.4 451.6 228.2H504.4V206.3C516.2 226 512.2 219.2 517.6 228.2H559.2V136.2H519.3V154.6C507.1 134.4 513 144.2 508.1 136.2H464.8V156.8C458.6 142.2 460.2 146 456 136.2H423.6C423.2 136.2 421.3 136.4 421.3 135.9H393.7C380.9 135.9 370.6 139.1 363 145.2V135.9H323.1V141.2C312.3 135.1 302.4 136.1 258.7 135.9 258.6 135.9 247.1 135.8 247.1 135.9H144.1C141.6 142 137.3 152.3 131.5 165.9 128.7 159.9 120.5 142.1 117.6 135.9H71.6V157C64.2 139.6 66.9 146 62.6 135.9H22.9C19.5 143.8 9.2 167.9-0.2 189.8V80C-0.2 53.5 21.3 32 47.8 32H527.8C554.3 32 575.8 53.5 575.8 80V255.4zM389.4 174.8C389.1 175 388 177 388 182.4 388 188.4 388.9 190.1 389.1 190.3 389.3 190.4 390.2 190.8 392.5 190.8L399.8 173.9C398.7 173.9 397.7 173.8 396.7 173.8 391.1 173.8 389.7 174.5 389.4 174.8zM369.5 305.7C378.7 309 380.5 315.2 380.5 324.1L380.4 337.9H363.8L363.9 326.4C363.9 314.6 360.1 312.6 349.1 312.6H331.5L331.4 337.9H314.8L314.9 268.6H354.3C367.3 268.6 381.4 270.9 381.4 287.3 381.3 294.9 377.2 302.6 369.5 305.7zM363.2 290.3C363.2 283.9 357.6 282.9 352.5 282.9H331.5V298.5H352.2C357.8 298.5 363.2 297.2 363.2 290.3zM544.9 283.2H575V268.6H542.1C529.3 268.6 518.3 275.2 518.3 289.3 518.3 322.3 561 302.1 561 316.7 561 321.8 556.7 323.1 552.6 323.1H520.6L520.5 337.9H552.5C560.9 337.9 570.1 336.1 575 329V303.2C564.5 289.4 535.7 301.9 535.7 289.7 535.7 283.9 540.3 283.2 544.9 283.2zM445.7 282.9V268.6H390.5L390.4 337.9H445.6L445.7 323.6 407.1 323.3V309.5H445V295.4H407.2V282.9H445.7zM487.9 323H455.7L455.6 337.8H487.8C502.6 337.8 514 332.2 514 315.8 514 282.6 471.1 304.6 471.1 289.5 471.1 283.9 476 283.1 480.3 283.1H510.7V268.5H477.5C464.7 268.5 454 275.1 454 289.2 454 322.2 496.7 301.7 496.7 316.6 496.6 322 492 323 487.9 323zM409.8 164.3C392.4 164 376.6 160.2 376.6 184 376.6 195.8 379.4 203.9 392.7 203.9H400.1L423.6 149.4H448.4L476.3 214.8V149.4H501.6L530.7 197.5V149.4H547.6V218.4H524L492.8 166.5V218.4H459.1L452.5 203.1H418.2L411.8 218.4H392.6C369.8 218.4 359.6 206.6 359.6 184.4 359.6 161.1 370.1 149.1 393.6 149.1H409.7V164.3zM424.1 188.8H446.9L435.7 161.2 424.1 188.8zM351.5 149.2H334.6V218.5H351.5V149.2zM313.4 186.5C322.9 189.8 324.4 195.7 324.4 204.9V218.4H307.8C307.5 203.6 311.4 193.3 293 193.3H275V218.4H258.6V149.1L297.7 149.4C311 149.4 325.1 151.4 325.1 167.8 325.2 175.8 320.8 183.5 313.4 186.5zM306.7 171.2C306.7 164.8 301.1 163.8 296 163.8H275V179.1H295.7C301.4 179.1 306.7 177.8 306.7 171.2zM247.2 163.8V149.2H191.7V218.5H247.2V204.2H208.3V190.4H246.1V176.3H208.3V163.8H247.2zM162.6 218.5V164.3L138.6 218.5H124L100 164.3V218.5H66.2L59.8 203.2H25.3L18.9 218.5H1L30.7 149.2H55.2L83.3 214.9V149.2H110.4L132.1 196.2 151.8 149.2H179.4V218.5H162.6zM53.9 188.8L42.4 161.2 31.2 188.8H53.9zM306.9 291.3C306.9 319.2 276.5 314.6 257.6 314.6L257.5 337.9H225.3L204.9 314.9 183.6 337.9H118.2L118.3 268.6H184.8L205.3 291.4 226.3 268.6H279C294.6 268.6 306.9 274 306.9 291.3zM194.2 303.1L176.3 282.9H134.6V295.4H170.9V309.5H134.6V323.3H175.2L194.2 303.1zM241 276L215.7 303.4 241 331.5V276zM289.3 291.3C289.3 285.2 284.7 282.9 279.1 282.9H257.6V300.5H278.8C284.7 300.5 289.3 297.7 289.3 291.3z"}]}});

Icon.register({"brands/cc-discover":{"width":576,"height":512,"paths":[{"d":"M83 212.1C83 220 79.8 227.6 74.1 232.8 69.2 237.2 62.5 239.2 52.2 239.2H48V185H52.2C62.5 185 68.9 186.7 74.1 191.6 79.8 196.6 83 204.2 83 212.1zM504.8 184H499.9V208.9H504.6C514.9 208.9 520.4 204.5 520.4 196.1 520.4 188.2 514.9 184 504.8 184zM576 80V432C576 458.5 554.5 480 528 480H48C21.5 480 0 458.5 0 432V80C0 53.5 21.5 32 48 32H528C554.5 32 576 53.5 576 80zM428 253H473.3V239.2H444V217H472.3V203.2H444V185H473.3V171H428V253zM341.8 171L376.8 255.2H385.4L420.9 171H403.4L381.2 226.2 359.3 171H341.8zM258.8 212.6C258.8 237.2 278.7 257.2 303.4 257.2 328 257.2 348 237.3 348 212.6 348 188 328.1 168 303.4 168 278.8 168 258.8 187.9 258.8 212.6zM190.8 212.1C190.8 244.6 224.4 264.6 254.1 250.3V231.3C234.8 250.6 207.3 237.1 207.3 212.1 207.3 188.4 234 173 254.1 193.1V174.1C223.9 159.1 190.8 180.9 190.8 212.1zM156.9 240.4C149.3 240.4 143.1 236.7 139.4 229.6L129.1 239.5C146.9 265.6 185.7 257.7 185.7 228.2 185.7 215.1 180.3 209.2 162.1 202.6 152.5 199.2 149.8 196.7 149.8 192.3 149.8 183.6 164.3 178.2 174.7 189.8L183.1 179C164 161.9 133.4 170.1 133.4 193.3 133.4 204.6 138.6 210.5 153.6 216 179.3 225.1 168.3 240.4 156.9 240.4zM99.5 212.1C99.5 188 81.5 171 55.4 171H32V253H55.4C86.3 253 99.5 230.6 99.5 212.1zM122.9 171H106.9V253H122.9V171zM544 288C510.7 308.8 317.6 412.4 128 448H529C537.2 448 544 441.2 544 433V288zM544 253L518.1 218.5C530.2 216 536.8 207.9 536.8 195.3 536.8 166.8 506.5 170.9 483.9 170.9V252.9H499.9V220.1H502.1L524.3 252.9H544z"}]}});

Icon.register({"brands/cc-mastercard":{"width":576,"height":512,"paths":[{"d":"M482.9 410.3C482.9 417.1 478.3 422 471.7 422 464.9 422 460.5 416.8 460.5 410.3 460.5 403.8 464.9 398.6 471.7 398.6 478.3 398.6 482.9 403.8 482.9 410.3zM172.1 398.6C165 398.6 160.9 403.8 160.9 410.3 160.9 416.8 165 422 172.1 422 178.6 422 183 417.1 183 410.3 182.9 403.8 178.6 398.6 172.1 398.6zM289.6 398.3C284.2 398.3 280.9 401.8 280.1 407H299.2C298.3 401.3 294.8 398.3 289.6 398.3zM397.4 398.6C390.6 398.6 386.5 403.8 386.5 410.3 386.5 416.8 390.6 422 397.4 422 404.2 422 408.6 417.1 408.6 410.3 408.6 403.8 404.2 398.6 397.4 398.6zM503.3 424.7C503.3 425 503.6 425.2 503.6 425.8 503.6 426.1 503.3 426.3 503.3 426.9 503 427.2 503 427.4 502.8 427.7 502.5 428 502.3 428.2 501.7 428.2 501.4 428.5 501.2 428.5 500.6 428.5 500.3 428.5 500.1 428.5 499.5 428.2 499.2 428.2 499 427.9 498.7 427.7 498.4 427.4 498.2 427.2 498.2 426.9 497.9 426.4 497.9 426.1 497.9 425.8 497.9 425.3 497.9 425 498.2 424.7 498.2 424.2 498.5 423.9 498.7 423.6 499 423.3 499.2 423.3 499.5 423.1 500 422.8 500.3 422.8 500.6 422.8 501.1 422.8 501.4 422.8 501.7 423.1 502.2 423.4 502.5 423.4 502.8 423.6S503 424.2 503.3 424.7zM501.1 426.1C501.6 426.1 501.6 425.8 501.9 425.8 502.2 425.5 502.2 425.3 502.2 425 502.2 424.7 502.2 424.5 501.9 424.2 501.6 424.2 501.4 423.9 500.8 423.9H499.2V427.4H500V426H500.3L501.4 427.4H502.2L501.1 426.1zM576 81V433C576 459.5 554.5 481 528 481H48C21.5 481 0 459.5 0 433V81C0 54.5 21.5 33 48 33H528C554.5 33 576 54.5 576 81zM64 220.6C64 297.1 126.1 359.1 202.5 359.1 229.7 359.1 256.4 350.9 279 336 206.1 276.7 206.6 164.8 279 105.5 256.4 90.5 229.7 82.4 202.5 82.4 126.1 82.3 64 144.4 64 220.6zM288 329.4C358.5 274.4 358.2 167.2 288 111.9 217.8 167.2 217.5 274.5 288 329.4zM145.7 405.7C145.7 397 140 391.3 131 391 126.4 391 121.5 392.4 118.2 397.5 115.8 393.4 111.7 391 106 391 102.2 391 98.4 392.4 95.4 396.4V392H87.2V428.7H95.4C95.4 409.8 92.9 398.5 104.4 398.5 114.6 398.5 112.6 408.7 112.6 428.7H120.5C120.5 410.4 118 398.5 129.5 398.5 139.7 398.5 137.7 408.5 137.7 428.7H145.9V405.7zM190.6 392H182.7V396.4C180 393.1 176.2 391 171 391 160.7 391 152.8 399.2 152.8 410.3 152.8 421.5 160.7 429.6 171 429.6 176.2 429.6 180 427.7 182.7 424.2V428.8H190.6V392zM231.1 417.6C231.1 402.6 208.2 409.4 208.2 402.4 208.2 396.7 220.1 397.6 226.7 401.3L230 394.8C220.6 388.7 199.8 388.8 199.8 403 199.8 417.3 222.7 411.3 222.7 418 222.7 424.3 209.2 423.8 202 418.8L198.5 425.1C209.7 432.7 231.1 431.1 231.1 417.6zM266.5 426.9L264.3 420.1C260.5 422.2 252.1 424.5 252.1 416V399.4H265.2V392H252.1V380.8H243.9V392H236.3V399.3H243.9V416C243.9 433.6 261.2 430.4 266.5 426.9zM279.8 413.5H307.3C307.3 397.3 299.9 390.9 289.9 390.9 279.3 390.9 271.7 398.8 271.7 410.2 271.7 430.7 294.3 434.1 305.5 424.4L301.7 418.4C293.9 424.8 282.1 424.2 279.8 413.5zM338.9 392C334.3 390 327.3 390.2 323.7 396.4V392H315.5V428.7H323.7V408C323.7 396.4 333.2 397.9 336.5 399.6L338.9 392zM349.5 410.3C349.5 398.9 361.1 395.2 370.2 401.9L374 395.4C362.4 386.3 341.3 391.3 341.3 410.4 341.3 430.2 363.7 434.2 374 425.4L370.2 418.9C361 425.4 349.5 421.5 349.5 410.3zM416.2 392H408V396.4C399.7 385.4 378.1 391.6 378.1 410.3 378.1 429.5 400.5 435 408 424.2V428.8H416.2V392zM449.9 392C447.5 390.8 438.9 389.1 434.7 396.4V392H426.8V428.7H434.7V408C434.7 397 443.7 397.7 447.5 399.6L449.9 392zM490.2 377.1H482.3V396.4C474.1 385.5 452.4 391.3 452.4 410.3 452.4 429.7 474.9 434.9 482.3 424.2V428.8H490.2V377.1zM497.8 302V306.6H498.6V302H500.5V301.2H495.9V302H497.8zM504.4 425.8C504.4 425.3 504.4 424.7 504.1 424.2 503.8 423.9 503.6 423.4 503.3 423.1 503 422.8 502.5 422.6 502.2 422.3 501.7 422.3 501.1 422 500.6 422 500.3 422 499.8 422.3 499.2 422.3 498.7 422.6 498.4 422.8 498.1 423.1 497.6 423.4 497.3 423.9 497.3 424.2 497 424.7 497 425.3 497 425.8 497 426.1 497 426.6 497.3 427.2 497.3 427.5 497.6 428 498.1 428.3 498.4 428.6 498.6 428.8 499.2 429.1 499.7 429.4 500.3 429.4 500.6 429.4 501.1 429.4 501.7 429.4 502.2 429.1 502.5 428.8 503 428.6 503.3 428.3 503.6 428 503.8 427.5 504.1 427.2 504.4 426.6 504.4 426.1 504.4 425.8zM507.6 301.1H506.2L504.6 304.6 503 301.1H501.6V306.5H502.4V302.4L504 305.9H505.1L506.5 302.4V306.5H507.6V301.1zM512 220.6C512 144.4 449.9 82.3 373.5 82.3 346.3 82.3 319.6 90.5 297 105.4 369.1 164.7 370.2 276.9 297 335.9 319.6 350.9 346.5 359 373.5 359 449.9 359.1 512 297.1 512 220.6z"}]}});

Icon.register({"brands/cc-diners-club":{"width":576,"height":512,"paths":[{"d":"M239.7 79.9C142.8 79.9 63.9 158.5 63.9 255.7 63.9 352.6 142.8 431.5 239.7 431.5 336.9 431.5 415.5 352.6 415.5 255.7 415.5 158.5 336.9 79.9 239.7 79.9zM199.8 359.5C158.1 343.6 128.4 303.1 128.4 255.7S158.1 167.8 199.8 151.6V359.5zM279.6 359.8V151.6C321.3 167.8 351 208.3 351 255.7S321.3 343.6 279.6 359.8zM528 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H528C554.5 480 576 458.5 576 432V80C576 53.5 554.5 32 528 32zM329.7 448H239.4C133.2 448 45.6 362.5 45.6 257.8 45.6 143.2 133.2 64 239.4 64H329.7C434.7 64 530.4 143.2 530.4 257.8 530.4 362.5 434.7 448 329.7 448z"}]}});

//import ActivityIndicator from '@/Components/ActivityIndicators/ActivityIndicator';

var StripePaymentButton = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.error)?_c('div',[(_vm.card)?_c('div',{staticClass:"my-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-2"},[_c('div',{staticClass:"mr-6"},[(_vm.card.brand === 'Visa')?_c('icon',{attrs:{"name":"cc-visa","scale":"3.5"}}):(_vm.card.brand === 'MasterCard')?_c('icon',{attrs:{"name":"cc-mastercard","scale":"3.5"}}):(_vm.card.brand === 'American Express')?_c('icon',{attrs:{"name":"cc-amex","scale":"3.5"}}):(_vm.card.brand === 'Discover')?_c('icon',{attrs:{"name":"cc-discover","scale":"3.5"}}):(_vm.card.brand === 'JCB')?_c('icon',{attrs:{"name":"cc-jcb","scale":"3.5"}}):(_vm.card.brand === 'Diners Club')?_c('icon',{attrs:{"name":"cc-diners-club","scale":"3.5"}}):_c('icon',{attrs:{"name":"credit-card","scale":"3.5"}})],1)]),_vm._v(" "),_c('div',{staticClass:"col-xs-10"},[_c('div',{staticClass:"pl-2"},[_c('button',{staticClass:"btn btn-xs btn-warning float-right",attrs:{"type":"button","disabled":_vm.submitting},on:{"click":function($event){_vm.changeCard($event);}}},[_vm._v("Change Card")]),_vm._v(" "),(_vm.card.name)?_c('span',[_vm._v(_vm._s(_vm.card.name)),_c('br')]):_vm._e(),_vm._v(" "),_c('small',[_vm._v("****"+_vm._s(_vm.card.last4)+" "),_c('span',{staticClass:"pl-2"},[_vm._v(_vm._s(_vm.card.exp_month)+"/"+_vm._s(_vm.card.exp_year))])])])])])]):_vm._e(),_vm._v(" "),(!_vm.loaded || _vm.submitting)?_c('div',{staticClass:"row my-5 py-1"},[_c('div',{staticClass:"col-xs-12"},[_c('activity-indicator',{attrs:{"size":"sm","center":true}})],1)]):_c('div',[_c('div',{staticClass:"stripe-payment-button mt-2 mb-4"})])]):_c('div',{staticClass:"alert alert-danger"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-3 text-center"},[_c('icon',{staticClass:"mt-2",attrs:{"name":"warning","scale":"2"}})],1),_vm._v(" "),_c('div',{staticClass:"col-xs-9"},[_vm._v(" "+_vm._s(_vm.error.message)+" ")])])])])},staticRenderFns: [],

    name: 'stripe-payment-button',

    components: {
        Icon,
        //ActivityIndicator
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

    data() {
        return {
            card: false,
            error: false,
            loaded: false,
            submitting: false,
            changingCard: false
        };
    },

    methods: {
        changeCard: function(event) {
            this.changingCard = true;
            this.$paymentRequest.show();
        },
        getPaymentLabel: function() {
            return 'Donation to ' + this.page.site.name;
        }
    },

    updated() {
        if(this.loaded && !this.submitting && !this.error) {
            try {
                this.$paymentRequestButton.mount(this.$el.querySelector('.stripe-payment-button'));
            }
            catch(error) {
                this.card = false;
                this.error = error;
                this.form.token = null;
            }
        }
    },

    created() {
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
    },

    beforeDestroy() {
        if(this.card) {
            this.$dispatch.request('form').then(form => {
                form.$card = this.card;
            });
        }

        this.$dispatch.request('submit:show');
        this.$dispatch.off(this.$submitEvent);
        this.$dispatch.off(this.$submitCompleteEvent);
    },

    mounted() {
        const el = this.$el.querySelector('.stripe-payment-button');
        const gateway = Gateway$1(this.gateway);

        this.$dispatch.request('submit:hide');

        gateway.script((event) => {
            this.$paymentRequest = gateway.paymentRequest(1000, this.getPaymentLabel());
            this.$paymentRequestButton = gateway.paymentRequestButton(this.$paymentRequest);

            this.$paymentRequestButton.on('click', (event) => {
                if(this.form.token) {
                    this.$dispatch.request('form:submit');
                }
            });

            this.$paymentRequest.on('cancel', (event) => {
                if(!this.changingCard) {
                    this.card = false;
                    this.form.token = null;
                }
                else {
                    this.changingCard = false;
                }
            });

            this.$paymentRequest.on('token', (event) => {
                event.complete('success');
                this.card = event.token.card;
                this.form.token = event.token.id;

                if(!this.changingCard) {
                    this.$dispatch.request('form:submit');
                }
                else {
                    this.changingCard = false;
                }
            });

            this.$paymentRequest.canMakePayment().then((api) => {
                this.loaded = true;
            });
        });
    }

}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lib = createCommonjsModule(function (module) {
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

}).call(commonjsGlobal);
});

var lib$1 = createCommonjsModule(function (module) {
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

  commonjsGlobal.Payment = Payment;

}).call(commonjsGlobal);
});

Icon.register({"regular/credit-card":{"width":576,"height":512,"paths":[{"d":"M527.9 32H48.1C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48.1 480H527.9C554.5 480 576 458.5 576 432V80C576 53.5 554.5 32 527.9 32zM54.1 80H521.9C525.2 80 527.9 82.7 527.9 86V128H48.1V86C48.1 82.7 50.8 80 54.1 80zM521.9 432H54.1C50.8 432 48.1 429.3 48.1 426V256H527.9V426C527.9 429.3 525.2 432 521.9 432zM192 332V372C192 378.6 186.6 384 180 384H108C101.4 384 96 378.6 96 372V332C96 325.4 101.4 320 108 320H180C186.6 320 192 325.4 192 332zM384 332V372C384 378.6 378.6 384 372 384H236C229.4 384 224 378.6 224 372V332C224 325.4 229.4 320 236 320H372C378.6 320 384 325.4 384 332z"}]}});

const AVAILABLE_EVENTS = [
    'change',
    'invalid',
    'complete',
    'focus',
    'blur'
];

const SUPPORTED_BRANDS = [
    'unknown',
    'visa',
    'mastercard',
    'discover',
    'amex',
    'jcb',
    'dinersclub',
    'maestro',
    'laser',
    'unionpay',
    'elo',
    'hipercard'
];

var CreditCardField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-credit-card-wrapper"},[_c('div',{staticClass:"form-control input-credit-card brand-unknown"},[_c('input',{staticClass:"input-credit-card-field input-credit-card-number",attrs:{"type":"text","placeholder":"Card number","maxlength":"19"},domProps:{"value":_vm.card.number},on:{"focus":function($event){_vm.addFocusClass($event.target, 'validateNumber'); _vm.removeTransform($event.target); _vm.hideSecurityFields();},"blur":function($event){_vm.removeFocusClass($event.target, 'validateNumber');},"keyup":function($event){_vm.updateModel($event, 'number', 'validateNumber');}}}),_vm._v(" "),_c('div',{staticClass:"input-credit-card-security-fields"},[_c('input',{staticClass:"input-credit-card-field input-credit-card-expiration",attrs:{"type":"text","placeholder":"MM / YY","maxlength":"7"},domProps:{"value":_vm.card.expiration},on:{"focus":function($event){_vm.addFocusClass($event.target, 'validateExpiration', true);},"blur":function($event){_vm.removeFocusClass($event.target, 'validateExpiration');},"keyup":function($event){_vm.updateModel($event, 'expiration', 'validateExpiration');},"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete"])){ return null; }_vm.focusPrevElement($event.target);}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.card.cvc),expression:"card.cvc"}],staticClass:"input-credit-card-field input-credit-card-cvc",attrs:{"type":"text","placeholder":"CVC","maxlength":"4","autocomplete":"off"},domProps:{"value":(_vm.card.cvc)},on:{"focus":function($event){_vm.addFocusClass($event.target, 'validateCvc', true);},"blur":function($event){_vm.removeFocusClass($event.target, 'validateCvc');},"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.card, "cvc", $event.target.value);},function($event){_vm.validateInput($event, 'validateCvc');}],"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete"])){ return null; }_vm.focusPrevElement($event.target);}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.card.postalCode),expression:"card.postalCode"}],staticClass:"input-credit-card-field input-credit-card-postal",attrs:{"type":"text","placeholder":"Zip","maxlength":"5"},domProps:{"value":(_vm.card.postalCode)},on:{"focus":function($event){_vm.addFocusClass($event.target, 'validatePostalCode', true);},"blur":function($event){_vm.removeFocusClass($event.target, 'validatePostalCode');},"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.card, "postalCode", $event.target.value);},function($event){_vm.validateInput($event, 'validatePostalCode');}],"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete"])){ return null; }_vm.focusPrevElement($event.target);}}})]),_vm._v(" "),_c('div',{staticClass:"input-credit-card-icon-wrapper"},[_c('div',{staticClass:"input-credit-card-icon-card"},[_c('div',{staticClass:"input-credit-card-icon-front"},[_c('icon',{staticClass:"input-credit-card-icon",attrs:{"name":"cc-jcb","data-brand":"jcb"}}),_vm._v(" "),_c('icon',{staticClass:"input-credit-card-icon",attrs:{"name":"cc-visa","data-brand":"visa"}}),_vm._v(" "),_c('icon',{staticClass:"input-credit-card-icon",attrs:{"name":"cc-amex","data-brand":"amex"}}),_vm._v(" "),_c('icon',{staticClass:"input-credit-card-icon",attrs:{"name":"credit-card","data-brand":"unknown","width":"20","height":"18"}}),_vm._v(" "),_c('icon',{staticClass:"input-credit-card-icon",attrs:{"name":"cc-discover","data-brand":"discover"}}),_vm._v(" "),_c('icon',{staticClass:"input-credit-card-icon",attrs:{"name":"cc-mastercard","data-brand":"mastercard"}}),_vm._v(" "),_c('icon',{staticClass:"input-credit-card-icon",attrs:{"name":"cc-diners-club","data-brand":"dinersclub"}})],1),_vm._v(" "),_c('div',{staticClass:"input-credit-card-icon-back"},[_c('icon',{staticClass:"input-credit-card-icon",attrs:{"name":"credit-card-alt","width":"23.33","height":"20"}})],1)])]),_vm._v(" "),_c('div',{staticClass:"input-credit-card-placeholder-mask"},[_vm._v("Number")]),_vm._v(" "),_c('div',{staticClass:"input-credit-card-number-mask",domProps:{"innerHTML":_vm._s(_vm.card.number)}})]),_vm._v(" "),(_vm.error)?_c('div',{staticClass:"invalid-feedback",domProps:{"innerHTML":_vm._s(_vm.error)}}):_vm._e()])},staticRenderFns: [],

    name: 'credit-card-field',

    components: {
        Icon,
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

    data() {
        return {
            card: {}
        };
    },

    watch: {
        'card.number': function(newVal, oldVal) {
            this.handleTranformClass();
            this.addBrandClass(lib$1.fns.cardType(newVal) || 'unknown');
            this.handleEmptyClass(this.$el.querySelector('.input-credit-card-number'), newVal);
        },
        'card.expiration': function(newVal, oldVal) {
            this.handleEmptyClass(this.$el.querySelector('.input-credit-card-expiration'), newVal);
        },
        'card.cvc': function(newVal, oldVal) {
            this.handleEmptyClass(this.$el.querySelector('.input-credit-card-cvc'), newVal);
        },
        'card.postalCode': function(newVal, oldVal) {
            this.handleEmptyClass(this.$el.querySelector('.input-credit-card-postal'), newVal);
        },
        error: function(newVal, oldVal) {
            if(newVal) {
                this.makeInvalid();
            }
        }
    },

    methods: {

        handleTranformClass() {
            this.card.number && this.card.number.length > 4 ?
            this.$el.querySelector('.input-credit-card-number').classList.add('can-transform') :
            this.$el.querySelector('.input-credit-card-number').classList.remove('can-transform');
        },

        handleEmptyClass(el, value) {
            return value === '' ? el.classList.add('is-empty') : el.classList.remove('is-empty');
        },

        addHasClass(el) {
            this.getCardField().classList.add(this.getHasClassName(el));
        },

        removeHasClass(el) {
            this.getCardField().classList.remove(this.getHasClassName(el));
        },

        addBrandClass(brand) {
            this.removeBrandClass();
            this.getCardField().classList.add('brand-'+brand);
        },

        removeBrandClass() {
            for(let i in SUPPORTED_BRANDS) {
                this.getCardField().classList.remove('brand-'+SUPPORTED_BRANDS[i]);
            }
        },

        addErrorClass(el) {
            this.removeHasClass(el);
            el.classList.add('is-invalid');
            el.classList.remove('is-valid');
            this.getCardField().classList.remove('is-valid');
            this.getCardField().classList.add('is-invalid', this.getErrorClassName(el));
        },

        removeErrorClass(el) {
            el.classList.remove('is-invalid');
            this.getCardField().classList.remove(this.getErrorClassName(el));

            if(!this.$el.querySelector('.input-credit-card-field.is-invalid')) {
                this.getCardField().classList.remove('is-invalid');
            }
        },

        addFocusClass(el, method, showSecurityFields) {
            this.removeErrorClass(el);
            el.classList.add('is-focused');
            this.addTransform(this.$el.querySelector('.input-credit-card-number'));
            this.getCardField().classList.add('is-focused', this.getFocusClassName(el));

            if(showSecurityFields) {
                this.showSecurityFields();
            }

            this.$emit('focus', this.getEventPayload(el, this.isValid(el, method)));
        },

        removeFocusClass(el, method) {
            el.classList.remove('is-focused');
            this.getCardField().classList.remove('is-focused', this.getFocusClassName(el));

            if(this.shouldTransform()) {
                this.addTransform(this.$el.querySelector('.input-credit-card-number'));
            }

            if(!this.isValid(el, method)) {
                this.addErrorClass(el);
            }

            this.$emit('blur', this.getEventPayload(el, this.isValid(el, method)));
        },

        addTransform(el) {
            if(el.classList.contains('can-transform')) {
                const defaultView = (el.ownerDocument || document).defaultView;
                const positionInfo = this.$el.querySelector('.input-credit-card-number-mask').getBoundingClientRect();
                const parts = el.value.split(' ');
                const totalWidth = positionInfo.width;
                const computedStyle = defaultView.getComputedStyle(el);
                const width = this.getTextWidth(parts[parts.length - 1].trim(), computedStyle.fontStyle+' '+computedStyle.fontSize+' '+computedStyle.fontFamily);

                el.style.transform = 'translateX('+((totalWidth - width) * -1)+'px)';
            }
        },

        shouldTransform() {
            return (
                this.getCardField().classList.contains('is-invalid-expiration') ||
                this.getCardField().classList.contains('is-invalid-cvc') ||
                this.getCardField().classList.contains('is-invalid-postal')
            );
        },

        removeTransform(el) {
            el.style.transform = '';
        },

        hideSecurityFields() {
            this.getCardField().classList.remove('show-security-fields');
        },

        showSecurityFields() {
            this.getCardField().classList.add('show-security-fields');
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
            return this.$el.querySelector('.input-credit-card');
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
                valid: !this.getCardField().classList.contains('is-invalid'),
                complete: this.isComplete(),
                input: {
                    el: el,
                    valid: isValid
                }
            };
        },

        getTextWidth(text, font) {
            // re-use canvas object for better performance
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            context.font = font;
            var metrics = context.measureText(text);
            return metrics.width;
        },

        getClassName(el) {
            const classes = el.classList.item(1).split('-');
            return classes[classes.length - 1];
        },

        getHasClassName(el) {
            return 'has-' + this.getClassName(el);
        },

        getErrorClassName(el) {
            return 'is-invalid-' + this.getClassName(el);
        },

        getFocusClassName(el) {
            return 'is-focused-' + this.getClassName(el);
        },

        focusNextElement(el) {
            if(el.classList.contains('is-focused')) {
                if(el.nextElementSibling && el.nextElementSibling.children[0]) {
                    el.nextElementSibling.children[0].focus();
                }
                else if(el.nextElementSibling) {
                    el.nextElementSibling.focus();
                }
            }
        },

        focusPrevElement(el) {
            if(!el.value) {
                if(el.previousElementSibling) {
                    el.previousElementSibling.focus();
                }
                else {
                    this.$el.querySelector('.input-credit-card-number').focus();
                }
            }
        },

        makeValid() {
            this.getCardField().classList.add('is-valid');
            this.getCardField().classList.remove('is-invalid');
            this.$el.querySelectorAll('.is-invalid').forEach(el => {
                el.classList.remove('is-invalid');
            });
        },

        makeInvalid() {
            this.getCardField().classList.add('is-invalid');
            this.$el.querySelectorAll('.is-invalid').forEach(el => {
                el.blur();
            });
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

        validateInput(event, method) {
            setTimeout(() => {
                const el = event.target, isValid = this.isValid(el, method);

                if(el.value !== '' && isValid) {
                    this.addHasClass(el);
                    this.focusNextElement(el);
                }
                else if(!isValid) {
                    this.removeHasClass(el);

                    if(el.value === '' || el.maxLength === el.value.length) {
                        this.addErrorClass(el);
                    }
                }

                this.$emit('change', this.getEventPayload(el, isValid));
                this.$emit(isValid ? 'valid' : 'invalid', this.getEventPayload(el, isValid));
                this.$emit(this.isComplete() ? 'complete' : 'incomplete', this.getEventPayload(el, isValid));
            });
        },

        updateModel(event, prop, method) {
            this.card[prop] = event.target.value;

            if(this.isPrintableKeyCode(event.keyCode)) {
                this.validateInput(event, method);
            }
        },

        isPrintableKeyCode(keycode) {
            return (
                (keycode > 47 && keycode < 58)   || // number keys
                keycode == 32 || keycode == 13   || // spacebar & return key(s) (if you want to allow carriage returns)
                (keycode > 64 && keycode < 91)   || // letter keys
                (keycode > 95 && keycode < 112)  || // numpad keys
                (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
                (keycode > 218 && keycode < 223)   // [\]' (in order)
            );
        },

        isValid(el, method) {
            return el.value === '' || this[method](el.value);
        },

        isComplete() {
            return (
                this.getCardField().classList.contains('has-number') &&
                this.getCardField().classList.contains('has-expiration') &&
                this.getCardField().classList.contains('has-postal') &&
                this.getCardField().classList.contains('has-cvc')
            );
        }
    },

    created() {
        this.card = this.getDefaultCard();
    },

    mounted() {
        lib$1.formatCardCVC(this.$el.querySelector('.input-credit-card-cvc'));
        lib$1.restrictNumeric(this.$el.querySelector('.input-credit-card-postal'));
        lib$1.formatCardNumber(this.$el.querySelector('.input-credit-card-number'));
        lib$1.formatCardExpiry(this.$el.querySelector('.input-credit-card-expiration'));

        for(let i in AVAILABLE_EVENTS) {
            if(this[AVAILABLE_EVENTS[i]]) {
                this.$on(AVAILABLE_EVENTS[i], this[AVAILABLE_EVENTS[i]]);
            }
        }
    }

}

//import ActivityIndicator from '@/Components/ActivityIndicators/ActivityIndicator';

var AuthorizeNetCreditCard = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.loaded)?_c('div',{staticClass:"row my-5 py-1"},[_c('div',{staticClass:"col-xs-12"},[_c('activity-indicator',{attrs:{"size":"sm","center":true}})],1)]):_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"text-bold mb-2"},[_vm._v("Credit Card")]),_vm._v(" "),_c('credit-card-field',{attrs:{"error":_vm.error || _vm.errors.token,"change":_vm.change,"complete":_vm.complete,"valid":_vm.valid,"invalid":_vm.invalid,"focus":_vm.focus,"blur":_vm.blur}})],1)},staticRenderFns: [],

    name: 'authorize-net-credit-card',

    components: {
        CreditCardField,
        //ActivityIndicator,
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

    data() {
        return {
            error: false,
            loaded: false
        };
    },

    methods: {
        change: function(event) {
            if(!event.complete) {
                this.$dispatch.request('submit:disable');
            }
        },
        complete: function(event) {
            Gateway$1(this.gateway).createToken({
                cardNumber: event.card.number,
                month: event.card.expMonth,
                year: event.card.expYear,
                cardCode: event.card.cvc
            }, (event) => {
                if(event.messages.resultCode === 'Ok') {
                    this.$children[0].makeValid();
                    this.$set(this.form, 'token', event.opaqueData.dataValue);
                    this.$set(this.form, 'tokenDescriptor', event.opaqueData.dataDescriptor);
                    this.$dispatch.request('submit:enable');
                }
                else if(event.messages.resultCode === 'Error') {
                    this.$children[0].makeInvalid();
                    this.error = event.messages.message[0].text;
                    this.$dispatch.request('submit:disable');
                }
            });

        }
    },

    mounted() {
        this.$dispatch.request('submit:disable');

        Gateway$1(this.gateway).script((event) => {
            this.loaded = true;
        });
    }

}

var PaymentGateways = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row"},_vm._l((_vm.buttons),function(button){return _c('div',{staticClass:"col-md-6 col-lg-4"},[_c('button',{staticClass:"btn btn-block payment-gateway-button",class:{'btn-success': button.active, 'btn-secondary': !button.active},attrs:{"type":"button"},on:{"click":function($event){_vm.activate(button);}}},[_c('icon',{class:{'mt-2 mb-1': !button.label},attrs:{"name":button.icon,"scale":button.iconScale || 2}}),_vm._v(" "),(button.label)?_c('div',{staticClass:"pt-1 small"},[_vm._v(_vm._s(button.label))]):_vm._e()],1)])})),_vm._v(" "),(!_vm.buttons || !_vm.buttons.length)?_c('div',{staticClass:"alert alert-danger"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-2 text-center"},[_c('icon',{staticClass:"mt-2",attrs:{"name":"warning","scale":"2.25"}})],1),_vm._v(" "),_c('div',{staticClass:"col-xs-10"},[_vm._v(" There are not payment gateways configured for this site! ")])])]):_c('div',[_c('hr'),_vm._v(" "),_vm._l((_vm.buttons),function(button){return (button.active)?_c('div',[_c(button.component,{tag:"component",attrs:{"form":_vm.form,"page":_vm.page,"errors":_vm.errors,"gateway":button.gateway}})],1):_vm._e()})],2)])},staticRenderFns: [],

    name: 'payment-gateways',

    components: {
        Icon,
        StripeCreditCard,
        StripePaymentButton,
        PaypalPaymentButton,
        AuthorizeNetCreditCard,
    },

    mixins: [
        FormComponent
    ],

    data() {
        return {
            gateway: null,
            buttons: this.getButtons()
        };
    },

    methods: {
        getButtons: function() {
            const buttons = [];

            forEach(this.page.site.gateways, gateway => {
                if(!Gateway$1(gateway).buttons) {
                    throw new Error(Gateway$1(gateway).api()+' doesn\'t have a required buttons() method.');
                }

                forEach(Gateway$1(gateway).buttons(), button => {
                    button.active = false;
                    button.gateway = gateway;
                    buttons.push(button);
                });
            });

            return buttons;
        },

        deactivate() {
            forEach(this.buttons, button => {
                button.active = false;
            });
        },

        activate(button) {
            this.deactivate();
            button.active = true;
            this.$set(this.form, 'gateway', Gateway$1(button.gateway).api());
        }

    },

    mounted() {
        if(this.buttons && this.buttons[0]) {
            this.activate(this.buttons[0]);
        }
        else {
            this.$dispatch.request('submit:hide');
        }
    }

}

//import ActivityButton from '@/Components/ActivityIndicators/ActivityButton';

var PaymentInfoFieldset = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fieldset',[_c('legend',[_vm._v("Payment Information")]),_vm._v(" "),_c('payment-gateways',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page}}),_vm._v(" "),(_vm.page.options.add_comment)?_c('textarea-field',{attrs:{"id":"comment","label":_vm.commentMessage},model:{value:(_vm.form.comment),callback:function ($$v) {_vm.$set(_vm.form, "comment", $$v);},expression:"form.comment"}}):_vm._e(),_vm._v(" "),_c('activity-button',{attrs:{"type":"submit","size":"lg","orientation":"right","activity":_vm.submitting,"block":true,"label":_vm.buttonLabel || _vm.page.site.config.giveworks.button.donate}}),_vm._v(" "),(_vm.page.options.add_optin)?_c('div',[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.optin),expression:"form.optin"}],staticClass:"custom-control-input",attrs:{"type":"checkbox","checked":"checked"},domProps:{"checked":Array.isArray(_vm.form.optin)?_vm._i(_vm.form.optin,null)>-1:(_vm.form.optin)},on:{"change":function($event){var $$a=_vm.form.optin,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.form, "optin", $$a.concat([$$v])));}else{$$i>-1&&(_vm.$set(_vm.form, "optin", $$a.slice(0,$$i).concat($$a.slice($$i+1))));}}else{_vm.$set(_vm.form, "optin", $$c);}}}}),_vm._v(" "),_c('span',{staticClass:"custom-control-indicator"}),_vm._v(" "),_c('small',{staticClass:"custom-control-label text-muted form-text",domProps:{"innerHTML":_vm._s(_vm.optinMessage)}})])]):_vm._e(),_vm._v(" "),(_vm.page.site.disclaimer)?_c('div',{staticClass:"mt-3"},[_c('small',{staticClass:"text-muted",domProps:{"innerHTML":_vm._s(_vm.page.site.disclaimer)}})]):_vm._e()],1)},staticRenderFns: [],

    name: 'payment-info-fieldset',

    components: {
        //ActivityButton,
        PaymentGateways
    },

    mixins: [
        FormComponent
    ]

}

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

class Masked {

  constructor(opts) {
    this._value = '';
    this._update(_extends({}, Masked.DEFAULTS, opts));
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
    super(_extends({}, MaskedPattern.DEFAULTS, opts));
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
    super(_extends({}, MaskedDate.DEFAULTS, opts));
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
    super(_extends({}, MaskedNumber.DEFAULTS, opts));
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
    super(_extends({}, MaskedDynamic.DEFAULTS, opts));

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

var SelectDonationFieldset = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fieldset',[_c('legend',{class:{'mb-0': _vm.hasMinimumAmount}},[_vm._v("Select your donation amount")]),_vm._v(" "),(_vm.hasMinimumAmount)?_c('div',{staticClass:"mb-2"},[_c('small',{staticClass:"text-muted"},[_vm._v("Minimum accepted amount is $"+_vm._s(_vm.page.options.min_amount))])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"row mb-2",class:{'was-validated': _vm.errors.amount}},[_c('div',{staticClass:"col-sm-6"},_vm._l((_vm.amounts.slice(0, _vm.amounts.length / 2)),function(value){return _c('div',{staticClass:"custom-controls-stacked"},[_c('label',{staticClass:"custom-control custom-radio"},[_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.form.amount),expression:"form.amount",modifiers:{"number":true}}],staticClass:"custom-control-input",class:{'is-invalid': _vm.errors.amount},attrs:{"type":"radio"},domProps:{"value":value,"checked":_vm._q(_vm.form.amount,_vm._n(value))},on:{"change":function($event){_vm.$set(_vm.form, "amount", _vm._n(value));}}}),_vm._v(" "),_c('span',{staticClass:"custom-control-indicator"}),_vm._v(" "),_c('span',{staticClass:"custom-control-label"},[_vm._v("$"+_vm._s(value))])])])})),_vm._v(" "),_c('div',{staticClass:"col-sm-6"},_vm._l((_vm.amounts.slice(_vm.amounts.length / 2)),function(value){return _c('div',{staticClass:"custom-controls-stacked"},[_c('label',{staticClass:"custom-control custom-radio"},[_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.form.amount),expression:"form.amount",modifiers:{"number":true}}],staticClass:"custom-control-input",class:{'is-invalid': _vm.errors.amount},attrs:{"type":"radio"},domProps:{"value":value,"checked":_vm._q(_vm.form.amount,_vm._n(value))},on:{"change":function($event){_vm.$set(_vm.form, "amount", _vm._n(value));}}}),_vm._v(" "),_c('span',{staticClass:"custom-control-indicator"}),_vm._v(" "),_c('span',{staticClass:"custom-control-label"},[_vm._v("$"+_vm._s(value))])])])}))]),_vm._v(" "),_c('div',{staticClass:"row",class:{'was-validated': _vm.errors.amount}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"input-group"},[_vm._m(1),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.form.amount),expression:"form.amount",modifiers:{"number":true}}],staticClass:"form-control",class:{'is-invalid': _vm.errors.amount},attrs:{"type":"text","name":"amount","id":"amount","placeholder":"10.00"},domProps:{"value":(_vm.form.amount)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "amount", _vm._n($event.target.value));},"blur":function($event){_vm.$forceUpdate();}}})])])]),_vm._v(" "),(_vm.page.site.recurring && !_vm.page.options.recurring_only)?_c('div',{staticClass:"form-group mt-3"},[_c('label',{domProps:{"innerHTML":_vm._s(_vm.recurringMessage)}}),_vm._v(" "),_c('div',{staticClass:"btn-group"},[_c('button',{staticClass:"btn",class:{'btn-success': !_vm.form.recurring, 'btn-secondary': !!_vm.form.recurring},attrs:{"type":"button"},on:{"click":function($event){_vm.form.recurring = 0;}}},[_vm._v("One-Time")]),_vm._v(" "),_c('button',{staticClass:"btn",class:{'btn-success': !!_vm.form.recurring, 'btn-secondary': !_vm.form.recurring},attrs:{"type":"button"},on:{"click":function($event){_vm.form.recurring = 1;}}},[_vm._v("Monthly")])]),_vm._v(" "),(!_vm.recurring)?_c('small',{staticClass:"text-muted form-text"},[_vm._v("You are making a single donation of the amount entered above. Click the 'monthly' button to make your gift go further as an automatic monthly donation.")]):_vm._e(),_vm._v(" "),(!!_vm.recurring)?_c('small',{staticClass:"text-muted form-text"},[_vm._v("This amount will be charged automatically once each month, on or about the "+_vm._s(_vm.chargeDate)+". You may cancel your donation at any time by contacting us.")]):_vm._e()]):(_vm.page.site.recurring && _vm.page.options.recurring_only)?_c('div',{staticClass:"alert alert-warning mt-3"},[_c('h5',{staticClass:"alert-heading"},[_c('icon',{attrs:{"name":"warning"}}),_vm._v(" Monthly Donation")],1),_vm._v(" "),(_vm.page.options.recur_message)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.page.options.recur_message)}}):_c('div',[_vm._v(" Please note that this will be a monthly recurring donation. The amount you select will be charged automatically once each month on or about the "+_vm._s(_vm.chargeDate)+". You may cancel your donation at any time by contacting us. ")])]):_vm._e()])},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"col-sm-6 col-form-label",attrs:{"for":"amount"}},[_c('span',{staticClass:"text-bold"},[_vm._v("Your Amount")])])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"input-group-prepend",attrs:{"for":"amount"}},[_c('div',{staticClass:"input-group-text"},[_vm._v("$")])])}],

    name: 'select-donation-fieldset',

    components: {
        Icon
    },

    mixins: [
        FormComponent
    ],

    computed: {

        recurringMessage() {
            return this.page.options.recur_mess || this.page.site.config.giveworks.recur_mess;
        },

        chargeDate() {
            return moment().format('do');
        },

        hasMinimumAmount() {
            return this.page.options.min_amount && (parseFloat(this.page.options.min_amount) || 0) > 0;
        },

        amounts() {
            const values = this.page.options.amounts ?
                this.page.options.amounts.split(',') :
                this.page.site.config.giveworks.ask_amounts;

            return values.filter(value => {
                return value >= (parseFloat(this.page.options.min_amount) || 0);
            });
        }

    }

}

var VerticalDonationForm = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-5 col-lg-4"},[_c('select-donation-fieldset',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page}}),_vm._v(" "),_c('contact-info-fieldset',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page}}),_vm._v(" "),_c('payment-info-fieldset',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page}})],1),_vm._v(" "),_c('div',{staticClass:"col-md-7 col-lg-8",domProps:{"innerHTML":_vm._s(_vm.page.body)}})])},staticRenderFns: [],

    components: {
        ContactInfoFieldset,
        PaymentInfoFieldset,
        SelectDonationFieldset
    },

    mixins: [
        FormComponent
    ]

}

var HorizontalDonationForm = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12",domProps:{"innerHTML":_vm._s(_vm.page.body)}})]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4"},[_c('select-donation-fieldset',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page}})],1),_vm._v(" "),_c('div',{staticClass:"col-md-4"},[_c('contact-info-fieldset',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page}})],1),_vm._v(" "),_c('div',{staticClass:"col-md-4"},[_c('payment-info-fieldset',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page}})],1)])])},staticRenderFns: [],

    components: {
        ContactInfoFieldset,
        PaymentInfoFieldset,
        SelectDonationFieldset
    },

    mixins: [
        FormComponent
    ]

}

var VerticalPetitionForm = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-5 col-lg-4"},[_c('contact-info-fieldset',{attrs:{"form":_vm.form,"errors":_vm.errors,"page":_vm.page}}),_vm._v(" "),(_vm.page.options.add_comment)?_c('textarea-field',{attrs:{"id":"comment","label":_vm.commentMessage},model:{value:(_vm.form.comment),callback:function ($$v) {_vm.$set(_vm.form, "comment", $$v);},expression:"form.comment"}}):_vm._e(),_vm._v(" "),_c('activity-button',{attrs:{"size":"lg","type":"submit","orientation":"right","activity":_vm.submitting,"block":true,"label":_vm.buttonLabel || _vm.page.site.config.giveworks.button.petition}}),_vm._v(" "),(_vm.page.options.add_optin)?_c('div',[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.optin),expression:"form.optin"}],staticClass:"custom-control-input",attrs:{"type":"checkbox","checked":"checked"},domProps:{"checked":Array.isArray(_vm.form.optin)?_vm._i(_vm.form.optin,null)>-1:(_vm.form.optin)},on:{"change":function($event){var $$a=_vm.form.optin,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.form, "optin", $$a.concat([$$v])));}else{$$i>-1&&(_vm.$set(_vm.form, "optin", $$a.slice(0,$$i).concat($$a.slice($$i+1))));}}else{_vm.$set(_vm.form, "optin", $$c);}}}}),_vm._v(" "),_c('span',{staticClass:"custom-control-indicator"}),_vm._v(" "),_c('small',{staticClass:"custom-control-label text-muted form-text",domProps:{"innerHTML":_vm._s(_vm.optinMessage)}})])]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-md-7 col-lg-8",domProps:{"innerHTML":_vm._s(_vm.page.body)}})])},staticRenderFns: [],

    components: {
        ContactInfoFieldset,
        SelectDonationFieldset
    },

    mixins: [
        FormComponent
    ]

}

var HorizontalPetitionForm = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12",domProps:{"innerHTML":_vm._s(_vm.page.body)}})]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('contact-info-fieldset',{attrs:{"page":_vm.page,"form":_vm.form,"errors":_vm.errors}}),_vm._v(" "),(_vm.page.options.add_comment)?_c('textarea-field',{attrs:{"id":"comment","label":_vm.commentMessage},model:{value:(_vm.form.comment),callback:function ($$v) {_vm.$set(_vm.form, "comment", $$v);},expression:"form.comment"}}):_vm._e(),_vm._v(" "),_c('activity-button',{attrs:{"type":"submit","size":"lg","orientation":"right","block":true,"label":_vm.buttonLabel || _vm.page.site.config.giveworks.button.petition}}),_vm._v(" "),(_vm.page.options.add_optin)?_c('div',[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.optin),expression:"form.optin"}],staticClass:"custom-control-input",attrs:{"type":"checkbox","checked":"checked"},domProps:{"checked":Array.isArray(_vm.form.optin)?_vm._i(_vm.form.optin,null)>-1:(_vm.form.optin)},on:{"change":function($event){var $$a=_vm.form.optin,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.form, "optin", $$a.concat([$$v])));}else{$$i>-1&&(_vm.$set(_vm.form, "optin", $$a.slice(0,$$i).concat($$a.slice($$i+1))));}}else{_vm.$set(_vm.form, "optin", $$c);}}}}),_vm._v(" "),_c('span',{staticClass:"custom-control-indicator"}),_vm._v(" "),_c('small',{staticClass:"custom-control-label text-muted form-text",domProps:{"innerHTML":_vm._s(_vm.optinMessage)}})])]):_vm._e()],1)])])},staticRenderFns: [],

    components: {
        ContactInfoFieldset,
        SelectDonationFieldset
    },

    mixins: [
        FormComponent
    ]

}

var GoToWebinar = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fieldset',[_c('legend',[_vm._v("Your information")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('input-field',{attrs:{"id":"first","label":"First Name*","errors":_vm.errors},model:{value:(_vm.form.first),callback:function ($$v) {_vm.$set(_vm.form, "first", $$v);},expression:"form.first"}}),_vm._v(" "),_c('input-field',{attrs:{"id":"last","label":"Last Name*","errors":_vm.errors},model:{value:(_vm.form.last),callback:function ($$v) {_vm.$set(_vm.form, "last", $$v);},expression:"form.last"}}),_vm._v(" "),_c('input-field',{attrs:{"id":"email","label":"Email*","errors":_vm.errors},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v);},expression:"form.email"}}),_vm._v(" "),(_vm.page.options.show_source)?_c('input-field',{attrs:{"id":"source","label":"Source","errors":_vm.errors},model:{value:(_vm.form.source),callback:function ($$v) {_vm.$set(_vm.form, "source", $$v);},expression:"form.source"}}):_vm._e(),_vm._v(" "),(_vm.page.options.show_address)?_c('input-field',{attrs:{"id":"address","label":"Address","errors":_vm.errors},model:{value:(_vm.form.address),callback:function ($$v) {_vm.$set(_vm.form, "address", $$v);},expression:"form.address"}}):_vm._e(),_vm._v(" "),(_vm.page.options.show_state)?_c('input-field',{attrs:{"id":"state","label":"State","errors":_vm.errors},model:{value:(_vm.form.state),callback:function ($$v) {_vm.$set(_vm.form, "state", $$v);},expression:"form.state"}}):_vm._e(),_vm._v(" "),(_vm.page.options.show_zip)?_c('input-field',{attrs:{"id":"zip_code","label":"Zip Code","errors":_vm.errors},model:{value:(_vm.form.zip_code),callback:function ($$v) {_vm.$set(_vm.form, "zip_code", $$v);},expression:"form.zip_code"}}):_vm._e(),_vm._v(" "),(_vm.page.options.show_country)?_c('input-field',{attrs:{"id":"country","label":"Country","errors":_vm.errors},model:{value:(_vm.form.country),callback:function ($$v) {_vm.$set(_vm.form, "country", $$v);},expression:"form.country"}}):_vm._e(),_vm._v(" "),(_vm.page.options.show_phone)?_c('input-field',{attrs:{"id":"phone","label":"Phone","errors":_vm.errors},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v);},expression:"form.phone"}}):_vm._e(),_vm._v(" "),(_vm.page.options.show_organization)?_c('input-field',{attrs:{"id":"organization","label":"Organization","errors":_vm.errors},model:{value:(_vm.form.organization),callback:function ($$v) {_vm.$set(_vm.form, "organization", $$v);},expression:"form.organization"}}):_vm._e(),_vm._v(" "),(_vm.page.options.show_job_title)?_c('input-field',{attrs:{"id":"job_title","label":"Job Title","errors":_vm.errors},model:{value:(_vm.form.job_title),callback:function ($$v) {_vm.$set(_vm.form, "job_title", $$v);},expression:"form.job_title"}}):_vm._e(),_vm._v(" "),(_vm.page.options.show_questions)?_c('textarea-field',{attrs:{"id":"questions_comments","label":"Questions and Comments","errors":_vm.errors},model:{value:(_vm.form.questions_comments),callback:function ($$v) {_vm.$set(_vm.form, "questions_comments", $$v);},expression:"form.questions_comments"}}):_vm._e(),_vm._v(" "),(_vm.page.options.show_industry)?_c('input-field',{attrs:{"id":"industry","label":"Industry","errors":_vm.errors},model:{value:(_vm.form.industry),callback:function ($$v) {_vm.$set(_vm.form, "industry", $$v);},expression:"form.industry"}}):_vm._e(),_vm._v(" "),(_vm.page.options.show_employees)?_c('input-field',{attrs:{"id":"number_employees","label":"Number of Employees","errors":_vm.errors},model:{value:(_vm.form.number_employees),callback:function ($$v) {_vm.$set(_vm.form, "number_employees", $$v);},expression:"form.number_employees"}}):_vm._e(),_vm._v(" "),(_vm.page.options.show_timeframe)?_c('input-field',{attrs:{"id":"purchasing_timeframe","label":"Purchasing Timeframe","errors":_vm.errors},model:{value:(_vm.form.purchasing_timeframe),callback:function ($$v) {_vm.$set(_vm.form, "purchasing_timeframe", $$v);},expression:"form.purchasing_timeframe"}}):_vm._e(),_vm._v(" "),(_vm.page.options.show_role)?_c('input-field',{attrs:{"id":"purchasing_role","label":"Purchasing Role","errors":_vm.errors},model:{value:(_vm.form.purchasing_role),callback:function ($$v) {_vm.$set(_vm.form, "purchasing_role", $$v);},expression:"form.purchasing_role"}}):_vm._e()],1)},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('em',[_vm._v("* Indicates required fields")])])}],

    name: 'go-to-webinar',

    mixins: [
        FormComponent
    ]

}

var VerticalSignupForm = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-5 col-lg-4"},[_c(_vm.page.options.service,{tag:"component",attrs:{"page":_vm.page,"form":_vm.form,"errors":_vm.errors}}),_vm._v(" "),_c('activity-button',{attrs:{"size":"lg","type":"submit","orientation":"right","activity":_vm.submitting,"block":true,"label":_vm.buttonLabel || _vm.page.site.config.giveworks.button.signup}})],1),_vm._v(" "),_c('div',{staticClass:"col-md-7 col-lg-8",domProps:{"innerHTML":_vm._s(_vm.page.body)}})])},staticRenderFns: [],

    components: {
        GoToWebinar
    },

    mixins: [
        FormComponent
    ]

}

var HorizontalSignupForm = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-5 col-lg-4"},[_vm._v(" "+_vm._s(_vm.page.options.service)+" ")]),_vm._v(" "),_c('div',{staticClass:"col-md-7 col-lg-8",domProps:{"innerHTML":_vm._s(_vm.page.body)}})])},staticRenderFns: [],

    components: {
        GoToWebinar
    },

    mixins: [
        FormComponent
    ]

}

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

        changed(el, binding, vnode) {
            el.addEventListener('change', event => {
                if(event.target.checked && isFunction(binding.value)) {
                    binding.value(el);
                }
            });
        }

    }

}

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
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, iteratee(value, key, object), value);
  });
  return result;
}

function prefix(subject, prefix, delimeter = '-') {
    const prefixer = (value, key) => {
        const string = key || value;

        return [
            prefix,
            string.replace(new RegExp(`^${prefix}${delimeter}?`), '')
        ].join(delimeter);
    };

    if(isNull(subject) || isUndefined(subject)){
        return subject;
    }

    if(isObject(subject)) {
        return mapKeys(subject, prefixer);
    }

    return prefixer(subject);
}

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
            default() {
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
        helpText: String,

    },

    directives: {
        bindEvents: {
            bind(el, binding, vnode) {
                const events = binding.value || vnode.context.bindEvents;

                forEach(events, name => {
                    el.addEventListener(name, event => {
                        vnode.context.$emit(name, event);
                    });
                });
            }
        }
    },

    methods: {

        getInputField() {
            return this.$el.querySelector('.form-control, input, select, textarea');
        },

        getFieldErrors() {
            let errors = this.error || this.errors;

            if(isObject(this.errors)) {
                errors = this.errors[this.name || this.id];
            }

            return !errors || isArray(errors) || isObject(errors) ? errors : [errors];
        },

        updated(value, event) {
            this.$emit(event || 'input', value);
        }

    },

    computed: {

        callbacks() {
            return this.bindEvents.map(event => {
                return {
                    name: event,
                    callback: this[camelCase(['on', event].join(' '))]
                }
            }).filter(event => !isUndefined(event.callback));
        },

        invalidFeedback() {
            if(this.error) {
                return this.error;
            }

            const errors = this.getFieldErrors();

            return isArray(errors) ? errors.join('<br>') : errors;
        },

        validFeedback() {
            return isArray(this.feedback) ? this.feedback.join('<br>') : this.feedback;
        },

        controlClass() {
            return this.defaultControlClass + (this.plaintext ? '-plaintext' : '');
        },

        controlSizeClass() {
            return prefix(this.size, this.controlClass);
        },

        controlClasses() {
            return [
                this.controlClass,
                this.controlSizeClass,
                (this.spacing || ''),
                (this.invalidFeedback ? 'is-invalid' : '')
            ].join(' ');
        },

        hasDefaultSlot () {
            return !!this.$slots.default
        }

    }

}

var AltEmailField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"type":"email","placeholder":"Email Address","name":_vm.name,"value":_vm.value,"id":_vm.question.id,"label":_vm.question.question,"errors":_vm.errors},on:{"input":_vm.updated}})},staticRenderFns: [],

    name: 'survey-alt-email-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

var AltPhoneField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"type":"phone","name":_vm.name,"value":_vm.value,"id":_vm.question.id,"label":_vm.question.question,"errors":_vm.errors},on:{"input":_vm.updated}})},staticRenderFns: [],

    name: 'survey-alt-phone-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

var CheckboxField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:{'is-invalid': !!_vm.invalidFeedback}},[_c('label',{domProps:{"innerHTML":_vm._s(_vm.question.question)}},[_vm._v(" "+_vm._s(_vm.question.question)+" "),(_vm.question.required)?_c('sup',[_vm._v("*")]):_vm._e()]),_vm._v(" "),_vm._l((_vm.question.answers),function(answer,key){return _c('checkbox-field',{key:key,attrs:{"value":answer,"checkedValues":_vm.value || [],"name":_vm.name,"id":`${_vm.name}_${key}`},on:{"change":_vm.updated}},[_vm._v(" "+_vm._s(answer)+" ")])}),_vm._v(" "),_c('checkbox-field',{directives:[{name:"changed",rawName:"v-changed"}],attrs:{"value":"other","name":_vm.name,"id":`${_vm.name}_50`,"checkedValues":_vm.value || []},on:{"change":_vm.updated}},[_vm._v(" Other: ")]),_vm._v(" "),_c('input',{staticClass:"form-control",class:{'is-invalid': _vm.errors[_vm.name]},attrs:{"type":"text","name":`${_vm.name}_other`,"id":`${_vm.name}_other`},on:{"input":function($event){_vm.updated($event.target.value);}}}),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'survey-checkbox-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

var CityField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"name":"city","id":"city","placeholder":"City","value":_vm.value,"label":_vm.question.question,"errors":_vm.errors},on:{"input":_vm.updated}})},staticRenderFns: [],

    name: 'survey-city-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax$5 = Math.max;

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
  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax$5(toInteger(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

var DollarAmountField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',[_c('fieldset',[_c('legend',[_vm._v("Select an amount")]),_vm._v(" "),_vm._l((_vm.amounts),function(chunk$$1){return _c('div',{staticClass:"row"},_vm._l((chunk$$1),function(amount){return _c('div',{staticClass:"col-sm-6"},[_c('radio-field',{attrs:{"name":"donation","value":amount}},[_vm._v("$"+_vm._s(amount))])],1)}))}),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('label',{attrs:{"for":_vm.question.id},domProps:{"innerHTML":_vm._s(_vm.question.question)}}),_vm._v(" "),_c('input-group',[_c('input-group-prepend',{attrs:{"text":""}},[_vm._v("$")]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"text","name":`field_${_vm.question.id}`},domProps:{"value":_vm.value}})],1)],1)])],2)])},staticRenderFns: [],

    name: 'survey-dollar-amount-field',

    extends: SurveyField,

    computed: {


        amounts() {
            const values = this.question.answers ?
                this.question.answers.split('|') :
                this.page.site.config.giveworks.ask_amounts;

            return chunk(values.filter(value => {
                return value >= (parseFloat(this.page.options.min_amount) || 0);
            }), 2);
        }

    }

}

var FirstField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"id":"first","name":"first","placeholder":"First Name","value":_vm.value,"label":_vm.question.question,"errors":_vm.errors},on:{"input":_vm.updated}})},staticRenderFns: [],

    name: 'survey-first-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

var InputField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"name":_vm.name,"value":_vm.value,"id":_vm.question.id,"label":_vm.question.question,"errors":_vm.errors},on:{"input":_vm.updated}})},staticRenderFns: [],

    name: 'survey-input-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

var LastField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"id":"last","name":"last","placeholder":"Last Name","value":_vm.value,"label":_vm.question.question,"errors":_vm.errors},on:{"input":_vm.updated}})},staticRenderFns: [],

    name: 'survey-last-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

var PrimaryEmailField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"type":"email","name":"email","placeholder":"Email Address","id":"email","value":_vm.value,"label":_vm.question.question,"errors":_vm.errors},on:{"input":_vm.updated}})},staticRenderFns: [],

    name: 'survey-primary-email-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

var PrimaryPhoneField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"type":"phone","name":"phone","id":"phone","value":_vm.value,"label":_vm.question.question,"errors":_vm.errors},on:{"input":_vm.updated}})},staticRenderFns: [],

    name: 'survey-primary-phone-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

var RadioField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:{'is-invalid': !!_vm.invalidFeedback}},[_c('label',{domProps:{"innerHTML":_vm._s(_vm.question.question)}},[_vm._v(" "+_vm._s(_vm.question.question)+" "),(_vm.question.required)?_c('sup',[_vm._v("*")]):_vm._e()]),_vm._v(" "),_vm._l((_vm.question.answers),function(answer,key){return _c('radio-field',{key:key,attrs:{"value":answer,"checkedValue":_vm.value,"name":_vm.name,"id":`${_vm.name}_${key}`},on:{"change":_vm.updated}},[_vm._v(" "+_vm._s(answer)+" ")])}),_vm._v(" "),_c('radio-field',{directives:[{name:"changed",rawName:"v-changed"}],attrs:{"value":"other","name":_vm.name,"id":`${_vm.name}_50`,"checkedValue":_vm.value},on:{"change":_vm.updated}},[_vm._v(" Other: ")]),_vm._v(" "),_c('input',{staticClass:"form-control",class:{'is-invalid': _vm.errors[_vm.name]},attrs:{"type":"text","name":`${_vm.name}_other`,"id":`${_vm.name}_other`},on:{"input":function($event){_vm.updated($event.target.value);}}}),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'survey-radio-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

var SelectField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('select-field',{attrs:{"value":_vm.value,"label":_vm.question.question,"name":`field_${_vm.question.id}`,"id":_vm.question.id,"errors":_vm.errors},on:{"input":_vm.updated}},_vm._l((_vm.question.answers),function(value,key){return _c('option',{domProps:{"value":value,"innerHTML":_vm._s(value)}})}))},staticRenderFns: [],

    name: 'survey-select-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

var StateField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('select-field',{attrs:{"name":"state","value":_vm.value,"id":_vm.question.id,"label":_vm.question.question,"errors":_vm.errors},on:{"input":_vm.updated}},_vm._l((_vm.page.site.config.states),function(label,value){return _c('option',{domProps:{"value":value,"innerHTML":_vm._s(label)}})}))},staticRenderFns: [],

    name: 'survey-state-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

var StreetField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"id":"street","placeholder":"Street Address","value":_vm.value,"name":_vm.street,"label":_vm.question.question,"errors":_vm.errors},on:{"input":_vm.updated}})},staticRenderFns: [],

    name: 'survey-street-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

var TextareaField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea-field',{attrs:{"value":_vm.value,"label":_vm.question.question,"name":`field_${_vm.question.id}`,"id":_vm.question.id,"errors":_vm.errors},on:{"input":_vm.updated}})},staticRenderFns: [],

    name: 'survey-textarea-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

var ZipField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{attrs:{"id":"zip","name":"zip","value":_vm.value,"label":_vm.question.question,"errors":_vm.errors,"placeholder":"Zip Code (5 digits)","x_autocompletetype":"postal-code"},on:{"input":_vm.updated}})},staticRenderFns: [],

    name: 'survey-zip-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}

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

var VerticalSurveyForm = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-5 col-lg-4"},[_vm._l((_vm.page.questions),function(question){return _c('div',[_c(_vm.component(question.type),{tag:"component",attrs:{"value":_vm.form[`field_${question.id}`],"name":`field_${question.id}`,"page":_vm.page,"errors":_vm.errors,"question":question}})],1)}),_vm._v(" "),_c('activity-button',{attrs:{"size":"lg","type":"submit","block":true,"orientation":"right","activity":_vm.submitting,"label":_vm.buttonLabel || _vm.page.site.config.giveworks.button.survey}})],2),_vm._v(" "),_c('div',{staticClass:"col-md-7 col-lg-8",domProps:{"innerHTML":_vm._s(_vm.page.body)}})])},staticRenderFns: [],

    components: {
        AltEmailField,
        AltPhoneField,
        CheckboxField,
        CityField,
        DollarAmountField,
        FirstField,
        InputField,
        LastField,
        PrimaryEmailField,
        PrimaryPhoneField,
        RadioField,
        SelectField,
        StateField,
        StreetField,
        TextareaField,
        ZipField
    },

    mixins: [
        FormComponent
    ],

    methods: {

        component(name) {
            return COMPONENTS[name] || name;
        }

    }

}

const RESERVED_FIELDS = [
    'email',
    'phone',
    'first',
    'last',
    'street',
    'city',
    'state',
    'zip'
];

var HorizontalSurveyForm = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12",domProps:{"innerHTML":_vm._s(_vm.page.body)}})]),_vm._v(" "),_c('div',{staticClass:"row"},_vm._l((_vm.questions),function(chunk$$1,i){return _c('div',{staticClass:"col-md-4"},[_vm._l((chunk$$1),function(question){return _c('div',[_c(_vm.component(question.type),{tag:"component",attrs:{"name":_vm.name(question),"page":_vm.page,"value":_vm.form[_vm.name(question)],"errors":_vm.errors,"question":question},model:{value:(_vm.form[_vm.name(question)]),callback:function ($$v) {_vm.$set(_vm.form, _vm.name(question), $$v);},expression:"form[name(question)]"}})],1)}),_vm._v(" "),(i === 2)?_c('activity-button',{attrs:{"size":"lg","type":"submit","block":true,"orientation":"right","activity":_vm.submitting,"label":_vm.buttonLabel || _vm.page.site.config.giveworks.button.survey}}):_vm._e()],2)}))])},staticRenderFns: [],

    extends: VerticalSurveyForm,

    methods: {

        name(question) {
            return RESERVED_FIELDS.indexOf(question.type) !== -1 ? question.type : `field_${question.id}`;
        }

    },

    computed: {

        questions() {
            return chunk(this.page.questions, Math.ceil(this.page.questions.length / 3));
        }

    }

}

var GiveworksForm = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.page.id)?_c('div',[_c('form',{attrs:{"novalidate":"novalidate"},on:{"submit":function($event){$event.preventDefault();return _vm.submit($event)}}},[_c(_vm.pageTypeComponent,{tag:"component",attrs:{"orientation":_vm.orientation,"submitting":_vm.submitting,"form":_vm.form,"errors":_vm.errors,"page":_vm.page}})],1)]):(_vm.error)?_c('div',[_c('div',{staticClass:"center-wrapper"},[_c('div',{staticClass:"center-content"},[_c('http-error-response',{attrs:{"min-width":"400px","error":_vm.error}})],1)])]):_c('div',[_c('activity-indicator',{attrs:{"center":true,"size":"xl"}})],1)},staticRenderFns: [],

    name: 'giveworks-form',

    components: {
        ActivityIndicator,
        HorizontalDonationForm,
        VerticalDonationForm,
        HorizontalPetitionForm,
        VerticalPetitionForm,
        HorizontalSignupForm,
        VerticalSignupForm,
        HorizontalSurveyForm,
        VerticalSurveyForm,
        HttpErrorResponse
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
            validator: value => {
                return ['vertical', 'horizontal'].indexOf(value) !== -1;
            }
        }
    },

    computed: {
        pageTypeComponent() {
            return this.orientation + '-' + this.page.special + '-form';
        }
    },

    methods: {

        hide: function() {
            this.$el.querySelector('[type=submit]').style.display = 'none';
        },

        show: function() {
            this.$el.querySelector('[type=submit]').style.display = 'block';
        },

        disable: function() {
            this.$el.querySelector('[type=submit]').disabled = true;
        },

        enable: function() {
            this.$el.querySelector('[type=submit]').disabled = false;
        },

        showActivity: function() {
            const el = this.$el.querySelector('[type=submit]');

            if(el) {
                el.dispatchEvent(new Event('activity:show'));
            }
        },

        hideActivity: function() {
            const el = this.$el.querySelector('[type=submit]');

            if(el) {
                el.dispatchEvent(new Event('activity:hide'));
            }
        },

        submit: function() {
            this.$dispatch.request('form:submit');
        }
    },

    data() {
        return {
            form: {},
            errors: {},
            error: null,
            model: false,
            submitting: false,
            page: this.data || {}
        };
    },

    created() {
        Request.option(HttpConfig);
        Request.option({
            headers: {
                Authorization: 'Bearer ' + this.apiKey
            }
        });
    },

    mounted() {
        Page.find(this.pageId).then(model => {
            this.model = model;
            this.page = this.model.toJson();
        }, error => {
            this.error = error;
        });
    },

    beforeCreate() {
        const replies = {
            'submit:show': 'show',
            'submit:hide': 'hide',
            'submit:enable': 'enable',
            'submit:disable': 'disable',
        };

        forEach(replies, (method, name) => {
            this.$dispatch.reply(name, (resolve, reject) =>  {
                try {
                    resolve(this[method]());
                }
                catch(error) {
                    reject(error);
                }
            });
        });

        this.$dispatch.on('form:submit', data => {
            const el = this.$el.querySelector(':focus');

            if(el) {
                el.blur();
            }
        });

        this.$dispatch.reply('form:redirect', (resolve, reject, url) => {
            try {
                const location = url || (this.redirect || this.page.next_page.url);

                setTimeout(() => {
                    window.location = location;
                });

                resolve(location);
            }
            catch(e) {
                reject(e);
            }
        });

        this.$dispatch.reply('form', (resolve, reject) => {
            resolve(this);
        });

        this.$dispatch.reply('form:submit', (resolve, reject) => {

            if(!this.submitting) {
                this.showActivity();
                this.errors = {};
                this.submitting = true;
                this.$dispatch.emit('form:submit', this.form, this);

                this.model.initialize(this.form);
                this.model.set('id', this.pageId);

                return this.model.create(this.form)
                    .then(response => {
                        this.submitting = false;
                        this.$dispatch.emit('form:submit:complete', true, response, this);
                        this.$dispatch.emit('form:submit:success', response, this);
                        this.$dispatch.request('form:redirect');
                        resolve(response);
                    }, response => {
                        this.hideActivity();
                        this.submitting = false;
                        this.errors = response.data.errors;
                        this.$dispatch.emit('form:submit:complete', false, this.errors, this);
                        this.$dispatch.emit('form:submit:error', this.errors, this);
                        reject(response);
                    });
            }
            else {
                reject(new Error('The form is already submitting'));
            }
        });
    },

    beforeDestroy() {
        this.$dispatch.off('form:submit');
        this.$dispatch.stopReply('form:submit');
        this.$dispatch.stopReply('submit:enable');
        this.$dispatch.stopReply('submit:disable');
        this.$dispatch.stopReply('submit:show');
        this.$dispatch.stopReply('submit:hide');
    }

}

const VueInstaller = {
    use,
    script,
    plugin,
    plugins,
    filter: filter$1,
    filters,
    component,
    components,
    directive,
    directives,
    $plugins: {},
    $filters: {},
    $directives: {},
    $components: {},
};

function use(plugin) {
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(plugin);
    }

    return plugin;
}

function plugin(Vue, name, def) {
    if(!VueInstaller.$plugins[name]) {
        Vue.use(VueInstaller.$plugins[name] = def);
    }
}

function plugins(Vue, plugins) {
    forEach(plugins, (def, name) => {
        plugin(Vue, name, def);
    });
}

function filter$1(Vue, name, def) {
    if(!VueInstaller.$filters[name]) {
        Vue.use(VueInstaller.$filters[name] = def);
    }
}

function filters(Vue, filters) {
    forEach(filters, (def, name) => {
        filter$1(Vue, name, def);
    });
}

function component(Vue, name, def) {
    if(!VueInstaller.$components[name]) {
        Vue.component(name, VueInstaller.$components[name] = def);
    }
}

function components(Vue, components) {
    forEach(components, (def, name) => {
        component(Vue, name, def);
    });
}

function directive(Vue, name, def) {
    if(!VueInstaller.$directives[name]) {
        Vue.directive(name, VueInstaller.$directives[name] = def);
    }
}

function directives(Vue, directives) {
    forEach(directives, (def, name) => {
        directive(Vue, name, def);
    });
}

const plugin$1 = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            ActivityIndicator
        });
    }

});

const convertAnimationDelayToInt = function(delay) {
    const num = parseFloat(delay, 10);
    const matches = delay.match(/m?s/);
    const unit = matches ? matches[0] : false;

    let milliseconds;

    switch (unit) {
        case "s": // seconds
            milliseconds = num * 1000;
            break;
        case "ms":
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

var ActivityButton = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn",class:_vm.classes,attrs:{"type":_vm.type},on:{"click":_vm.onClick}},[_vm._t("default",[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._v(" "+_vm._s(_vm.label))]),_vm._v(" "),_c('activity-indicator',{attrs:{"type":_vm.indicator}})],2)},staticRenderFns: [],

    name: 'activity-button',

    components: {
        ActivityIndicator
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
         * Disable the button.
         *
         * @return void
         */
        onClick(event) {
            this.$emit('click', event, this);
        },
    },

    computed: {

        /**
         * An object of classes to append to the button.
         *
         * @return void
         */
        classes() {
            const classes = {
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

}

const plugin$2 = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            ActivityButton
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

forEach(['border', 'text', 'bg', 'bg-gradient'], namespace => {
    forEach(COLORS, color => {
        props[camelCase(prefix(color, namespace))] = Boolean;
    });
});

function classes(instance, namespace) {
    return filter(map(COLORS, color => {
        return instance[camelCase(color = prefix(color, namespace))] ? color : null;
    }));
}

var Colorable = {

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

            return omitBy(classes, (key, value) => {
                return !key || !value;
            });
        }

    }

}

var InputField$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',[_vm._t("label",[(_vm.label || _vm.hasDefaultSlot)?_c('form-label',{attrs:{"for":_vm.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2):_vm._e()]),_vm._v(" "),_vm._t("control",[_c('form-control',{directives:[{name:"bind-events",rawName:"v-bind-events",value:(_vm.bindEvents),expression:"bindEvents"}],class:_vm.$mergeClasses(_vm.controlClasses, _vm.colorableClasses),attrs:{"id":_vm.id,"type":_vm.type,"value":_vm.value,"errors":_vm.errors,"placeholder":_vm.placeholder,"required":_vm.required,"disabled":_vm.disabled || _vm.readonly,"readonly":_vm.readonly,"pattern":_vm.pattern,"aria-label":_vm.label,"aria-describedby":_vm.id},on:{"input":function($event){_vm.updated($event.target.value);}}})]),_vm._v(" "),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'input-field',

    mixins: [
        Colorable,
        FormControl
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
        }

    }

}

const plugin$3 = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            InputField: InputField$1
        });
    }

});

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

}

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

}

var InputGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group",class:_vm.$mergeClasses(_vm.colorableClasses, _vm.sizeableClass)},[_vm._t("prepend",[(_vm.prepend instanceof Array)?[_c('input-group-prepend',_vm._l((_vm.prepend),function(value){return _c('input-group-text',{attrs:{"text":value}})}))]:(_vm.prepend)?[_c('input-group-prepend',{attrs:{"text":""}},[_vm._v(_vm._s(_vm.prepend))])]:_vm._e()]),_vm._v(" "),_vm._t("default"),_vm._v(" "),_vm._t("append",[(_vm.append instanceof Array)?[_c('input-group-append',_vm._l((_vm.append),function(value){return _c('input-group-text',{attrs:{"text":value}})}))]:(_vm.append)?[_c('input-group-append',{attrs:{"text":""}},[_vm._v(_vm._s(_vm.append))])]:_vm._e()])],2)},staticRenderFns: [],

    name: 'input-group',

    mixins: [
        HasSlots,
        Sizeable,
        Colorable
    ],

    props: {

        append: [Array, Number, String],

        prepend: [Array, Number, String]

    }

}

var InputGroupAppend = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group-append"},[(_vm.text)?_c('input-group-text',[_vm._t("default")],2):_vm._t("default")],2)},staticRenderFns: [],

    name: 'input-group-append',

    props: {

        /**
         * The type attribute
         *
         * @property String
         */
        text: Boolean

    }

}

var InputGroupPrepend = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group-prepend"},[(_vm.text)?_c('input-group-text',[_vm._t("default")],2):_vm._t("default")],2)},staticRenderFns: [],

    name: 'input-group-prepend',

    props: {

        /**
         * The type attribute
         *
         * @property String
         */
        text: Boolean

    }

}

var InputGroupText = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"input-group-text",attrs:{"id":_vm.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)},staticRenderFns: [],

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

}

const plugin$4 = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            InputGroup,
            InputGroupAppend,
            InputGroupPrepend,
            InputGroupText
        });
    }

});

var FormControl$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(!_vm.select ? 'input' : 'select',{directives:[{name:"bind-events",rawName:"v-bind-events",value:(_vm.bindEvents),expression:"bindEvents"}],tag:"component",class:_vm.$mergeClasses(_vm.controlClasses, _vm.colorableClasses),attrs:{"id":_vm.id,"type":!_vm.select ? _vm.type : false,"value":_vm.value,"pattern":_vm.pattern,"required":_vm.required,"readonly":_vm.readonly,"placeholder":_vm.placeholder,"disabled":_vm.disabled || _vm.readonly,"aria-label":_vm.label,"aria-describedby":_vm.id},on:{"input":_vm.updated}},[(_vm.select)?_vm._t("default"):_vm._e()],2)},staticRenderFns: [],

    name: 'form-control',

    mixins: [
        Colorable,
        FormControl
    ],

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

}

const plugin$5 = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FormControl: FormControl$1
        });
    }

});

var FormFeedback = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'invalid-feedback': _vm.invalid, 'valid-feedback': _vm.valid && !_vm.invalid}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2)},staticRenderFns: [],

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

}

const plugin$6 = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FormFeedback
        });
    }

});

var FormGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'form-group'
    
}

const plugin$7 = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FormGroup
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
        screenreaderClasses() {
            return {
                'sr-only': this.srOnly,
                'sr-only-focusable': this.srOnlyFocusable,
            };
        }
    }

}

var FormLabel = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.classes},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'form-label',

    mixins: [
        Colorable,
        Screenreaders
    ],

    computed: {
        classes() {
            return assignIn({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

}

const plugin$8 = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            FormLabel
        });
    }

});

var RadioField$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$mergeClasses(_vm.controlClass, _vm.customControlClass, _vm.sizeableClass, _vm.inline ? _vm.inlineClass : '')},[(_vm.custom && _vm.id)?[_c('input',{directives:[{name:"bind-events",rawName:"v-bind-events"}],class:_vm.$mergeClasses(_vm.inputClass, (_vm.invalidFeedback ? 'is-invalid' : '')),attrs:{"type":"radio","name":_vm.name,"id":_vm.id,"required":_vm.required,"disabled":_vm.disabled || _vm.readonly,"readonly":_vm.readonly,"pattern":_vm.pattern},domProps:{"value":_vm.value,"checked":_vm.checkedValue === _vm.value || _vm.checked},on:{"change":function($event){_vm.updated($event.target.value, 'change');}}}),_vm._v(" "),_c('label',{class:_vm.$mergeClasses(_vm.labelClass, _vm.colorableClasses),attrs:{"for":_vm.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)]:[_c('label',{class:_vm.$mergeClasses(_vm.labelClass, _vm.colorableClasses),attrs:{"for":_vm.id}},[_c('input',{directives:[{name:"bind-events",rawName:"v-bind-events"}],class:_vm.$mergeClasses(_vm.inputClass, (_vm.invalidFeedback ? 'is-invalid' : '')),attrs:{"type":"radio","name":_vm.name,"id":_vm.id,"required":_vm.required,"disabled":_vm.disabled || _vm.readonly,"readonly":_vm.readonly,"pattern":_vm.pattern},domProps:{"value":_vm.value,"checked":_vm.checkedValue === _vm.value || _vm.checked},on:{"change":function($event){_vm.updated($event.target.value, 'change');}}}),_vm._v(" "),_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)],_vm._v(" "),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'radio-field',

    mixins: [
        Colorable,
        FormControl
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

}

const plugin$9 = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            RadioField: RadioField$1
        });
    }

});

var CheckboxField$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$mergeClasses(_vm.controlClass, _vm.customControlClass, _vm.sizeableClass, _vm.inline ? _vm.inlineClass : '')},[(_vm.custom && _vm.id)?[_c('input',{directives:[{name:"bind-events",rawName:"v-bind-events"}],class:_vm.$mergeClasses(_vm.inputClass, (_vm.invalidFeedback ? 'is-invalid' : '')),attrs:{"type":"checkbox","name":_vm.name,"id":_vm.id,"required":_vm.required,"disabled":_vm.disabled || _vm.readonly,"readonly":_vm.readonly,"pattern":_vm.pattern},domProps:{"value":_vm.value,"checked":_vm.checkedValues.indexOf(_vm.value) !== -1 || _vm.checked},on:{"change":function($event){_vm.updated($event.target.value, 'change');}}}),_vm._v(" "),_c('label',{class:_vm.$mergeClasses(_vm.labelClass, _vm.colorableClasses),attrs:{"for":_vm.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)]:[_c('label',{class:_vm.$mergeClasses(_vm.labelClass, _vm.colorableClasses),attrs:{"for":_vm.id}},[_c('input',{directives:[{name:"bind-events",rawName:"v-bind-events"}],class:_vm.$mergeClasses(_vm.inputClass, (_vm.invalidFeedback ? 'is-invalid' : '')),attrs:{"type":"checkbox","name":_vm.name,"id":_vm.id,"required":_vm.required,"disabled":_vm.disabled || _vm.readonly,"readonly":_vm.readonly,"pattern":_vm.pattern},domProps:{"value":_vm.value,"checked":_vm.checkedValues.indexOf(_vm.value) !== -1 || _vm.checked},on:{"change":function($event){_vm.updated($event.target.value, 'change');}}}),_vm._v(" "),_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)],_vm._v(" "),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'checkbox-field',

    extends: RadioField$1,

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

        updated(value) {
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
}

const plugin$10 = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            CheckboxField: CheckboxField$1
        });
    }

});

const CUSTOM_SELECT_PREFIX = 'custom-select-';

var SelectField$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',[_vm._t("label",[(_vm.label)?_c('form-label',{attrs:{"for":_vm.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_vm._v(" "),_vm._t("control",[_c('select',{class:_vm.$mergeClasses(_vm.controlClasses, _vm.colorableClasses),attrs:{"id":_vm.id,"required":_vm.required,"disabled":_vm.disabled || _vm.readonly,"readonly":_vm.readonly,"pattern":_vm.pattern},domProps:{"value":_vm.value},on:{"input":function($event){_vm.updated($event.target.value);}}},[_vm._t("default")],2)]),_vm._v(" "),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'select-field',

    extends: FormControl,

    mixins: [
        FormControl,
        Colorable
    ],

    props: {

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
                CUSTOM_SELECT_PREFIX.replace(/\-$/, '') + (this.plaintext ? '-plaintext' : ''),
                this.customSelectSizeClass,
                (this.spacing || '')
            ].join(' ');
        }
    }

}

const plugin$11 = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            SelectField: SelectField$1
        });
    }

});

var TextareaField$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',[_vm._t("label",[(_vm.label || _vm.hasDefaultSlot)?_c('form-label',{attrs:{"for":_vm.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2):_vm._e()]),_vm._v(" "),_vm._t("control",[_c('textarea',{directives:[{name:"bind-events",rawName:"v-bind-events",value:(_vm.bindEvents),expression:"bindEvents"}],class:_vm.$mergeClasses(_vm.controlClasses, _vm.colorableClasses),attrs:{"id":_vm.id,"errors":_vm.errors,"placeholder":_vm.placeholder,"required":_vm.required,"disabled":_vm.disabled || _vm.readonly,"readonly":_vm.readonly,"pattern":_vm.pattern},domProps:{"value":_vm.value},on:{"input":function($event){_vm.updated($event.target.value);}}})]),_vm._v(" "),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'textarea-field',

    mixins: [
        Colorable,
        FormControl
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
        }
    }

}

const plugin$12 = VueInstaller.use({

    install(Vue, options) {
        VueInstaller.components({
            TextareaField: TextareaField$1
        });
    }

});

function MergeClasses(Vue, options) {

    Vue.prototype.$mergeClasses = function() {
        const classes = {};

        forEach([].slice.call(arguments), arg => {
            if(isObject(arg)) {
                assignIn(classes, arg);
            }
            else if(isArray(arg)) {
                merge$1(classes, arg);
            }
            else if(arg) {
                classes[arg] = true;
            }
        });

        return classes;
    };

}

const components$1 = {
    ActivityButton,
    CheckboxField: CheckboxField$1,
    FormControl: FormControl$1,
    FormFeedback,
    FormGroup,
    FormLabel,
    InputField: InputField$1,
    InputGroup,
    InputGroupText,
    InputGroupPrepend,
    RadioField: RadioField$1,
    SelectField: SelectField$1,
    TextareaField: TextareaField$1
};

function install(Vue, options) {
    Vue.prototype.$broadcast = new BroadcastManager;
    Vue.prototype.$dispatch = Vue.prototype.$broadcast.dispatch();

    forEach(components$1, (component, key) => {
        Vue.component(key, component);
    });

    Vue.use(MergeClasses);
    Vue.component('giveworks-form', GiveworksForm);

    if(window && window.Vue) {
        const VueGiveworksForm = Vue.extend({
            components: {
                GiveworksForm
            }
        });

        window.App = new VueGiveworksForm({
            el: '#app'
        });
    }
}

if(window && window.Vue) {
    Vue.use(install);
}

export default install;
//# sourceMappingURL=vue-giveworks-form.es.js.map
