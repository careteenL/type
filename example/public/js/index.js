/*!
 * @careteen/type v0.1.0
 * (c) 2018-2018 careteenL <15074806497@163.com>
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global['@careteen/type'] = factory());
}(this, (function () { 'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _toString = Object.prototype.toString;

  var NULL = 'null';
  var OBJECT = 'object';
  var NUMBER = 'number';
  var BOOLEAN = 'boolean';
  var STRING = 'string';
  var UNKNOW = 'unknow';

  /**
   * 
   * @param {*} element 任意类型的变量
   * @param {Boolean} strict [default: false] 是否为严格模式
   * @return {String} 变量的真实类型
   */
  function type(element) {
    var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    strict = !!strict;

    // #1 fix typeof null === 'object'
    if (element === null) {
      return NULL;
    }

    var eleType = typeof element === 'undefined' ? 'undefined' : _typeof(element);

    // #2 return [number string boolean undefined symbol]
    if (eleType !== OBJECT) {
      return eleType;
    }

    var eleRealType = void 0;
    var eleRealTypeLower = void 0;

    try {
      eleRealType = _toString.call(element).slice(8, -1);
      eleRealTypeLower = eleRealType.toLowerCase();
    } catch (e) {
      // #3 IE activie 对象
      return OBJECT;
    }

    // #4 fix typeof new String('') === 'object' , expect 'string'
    if (eleRealTypeLower !== OBJECT) {
      // 严格模式下 会严格区分`number、string、boolean`的原始值和对象值
      // example `new String('') => 'String'`、`String('') => 'string'`
      if (strict && (eleRealTypeLower === NUMBER || eleRealTypeLower === BOOLEAN || eleRealTypeLower === STRING)) {
        return eleRealType;
      }
      return eleRealTypeLower;
    }

    if (element.constructor == Object) {
      return eleRealTypeLower;
    }

    // #5 Object.create(null)
    try {
      // __proto__ 为部分早期浏览器
      if (Object.getPrototypeOf(element) === NULL || element.__proto__ === NULL) {
        return OBJECT;
      }
    } catch (e) {}
    // IE 无 Object.getPrototypeOf


    // #6 function A () {}; new A
    try {
      var constructorName = element.constructor.name;
      if ((typeof constructorName === 'undefined' ? 'undefined' : _typeof(constructorName)) === STRING) {
        return constructorName;
      }
    } catch (e) {}
    // No constructor


    // function A() {}; A.prototype.constructor = null; new A
    return UNKNOW;
  }

  return type;

})));
//# sourceMappingURL=index.js.map
