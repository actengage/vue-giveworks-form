((typeof self !== 'undefined' ? self : this)["webpackJsonpGiveworksForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpGiveworksForm"] || []).push([[13],{

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
      var report = new client.BugsnagReport(err.name, err.message, client.BugsnagReport.getStacktrace(err), handledState, err);
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


/***/ })

}]);
//# sourceMappingURL=GiveworksForm.common.13.js.map