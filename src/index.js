const _toString = Object.prototype.toString

const NULL = 'null'
const OBJECT = 'object'
const NUMBER = 'number'
const BOOLEAN = 'boolean'
const STRING = 'string'
const UNKNOW = 'unknow'

/**
 * 
 * @param {*} element 任意类型的变量
 * @param {Boolean} strict [default: false] 是否为严格模式
 * @return {String} 变量的真实类型
 */ 
export default function type (element, strict = false) {
  strict = !!strict

  // #1 fix typeof null === 'object'
  if (element === null) {
    return NULL
  }

  const eleType = typeof element

  // #2 return [number string boolean undefined symbol]
  if (eleType !== OBJECT) {
    return eleType
  }

  let eleRealType
  let eleRealTypeLower

  try {
    eleRealType = _toString.call(element).slice(8, -1)
    eleRealTypeLower = eleRealType.toLowerCase()
  } catch (e) {
    // #3 IE activie 对象
    return OBJECT
  }

  // #4 fix typeof new String('') === 'object' , expect 'string'
  if (eleRealTypeLower !== OBJECT) {
    // 严格模式下 会严格区分`number、string、boolean`的原始值和对象值
    // example `new String('') => 'String'`、`String('') => 'string'`
    if (strict && (eleRealTypeLower === NUMBER || eleRealTypeLower === BOOLEAN || eleRealTypeLower === STRING)) {
      return eleRealType
    }
    return eleRealTypeLower
  }

  if (element.constructor == Object) {
    return eleRealTypeLower
  }

  // #5 Object.create(null)
  try {
    // __proto__ 为部分早期浏览器
    if (Object.getPrototypeOf(element) === NULL || element.__proto__ === NULL) {
      return OBJECT
    }
  } catch (e) {
    // IE 无 Object.getPrototypeOf
  }

  // #6 function A () {}; new A
  try {
    const constructorName = element.constructor.name
    if (typeof constructorName === STRING) {
      return constructorName
    }
  } catch (e) {
    // No constructor
  }

  // function A() {}; A.prototype.constructor = null; new A
  return UNKNOW
}
