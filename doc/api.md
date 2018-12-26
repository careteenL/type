# 文档

## 目录

- [描述](#描述)
- [语法](#语法)
  - [参数](#参数)
  - [返回值](#返回值)
  - [示例](#示例)

## 描述

主要是为了弥补原生`typeof`的不足，返回更加准确的数据类型。

❌
```js
typeof null // object
typeof /a/ // object
typeof new String('') // object
```
✅
```js
import type from '@careteen/type'
type(null) // null
type(/a/) // regexp
type(new String('')) // string
```

目前支持
- number, boolean, string, undefined, null, symbol
- array, object, set, weakset, map, weakmap
- function, class
- regexp, date, math, promise

## 语法

### 参数

- `{*} element` 期望求取类型的变量
- `{Boolean} strict` 是否为严格模式
  - true: `new String('') => String`
  - false: `new String('') => string`
  - 说明：严格模式主要是为了区分`基本类型`的`原始值`和`对象值`

### 返回值

- `{String}` 返回更加准确的数据类型

### 示例

👇给出原生`typeof`和`type`在非严格模式下的区别
```js
type(1) // 'number'
typeof 1 // 'number'

type(true) // 'boolean'
typeof true // 'boolean'

type('') // 'string'
typeof '' // 'string'

type(undefined) // 'undefined'
typeof undefined // 'undefined'

type(null) // 'null'
typeof null // 'object'

type(Symbol()) // 'symbol'
typeof Symbol() // 'symbol'

type([]) // 'array'
typeof [] // 'object'

type({}) // 'object'
typeof {} // 'object'

type(new Set()) // 'set'
typeof new Set() // 'object'

type(new WeakSet()) // 'weakset'
typeof new WeakSet() // 'object'

type(new Map()) // 'map'
typeof new Map() // 'object'

type(new WeakMap()) // 'weakmap'
typeof new WeakMap() // 'object'

type(function () {}) // 'function'
typeof function () {} // 'function'

type(class A {}) // 'function'
typeof class A {} // 'function'

type(/1/) // 'regexp'
typeof /1/ // 'object'

type(new Date()) // 'date'
typeof new Date() // 'object'

type(Math) // 'math'
typeof Math // 'object'

type(new Promise(function () {})) // 'promise'
typeof new Promise(function () {}) // 'object'
```
👇给出严格模式的返回值
```js
typeof 1 // => number
typeof new Number(1) // => object
type(1) // => number
type(new Number(1)) // => number
type(new Number(1), true) // => Number

typeof "" // => string
typeof new String("") // => object
type("") // => string
type(new String("")) // => string
type(new String(""), true) // => String

typeof true // => boolean
typeof new Boolean(true) // => object
type(true) // => boolean
type(new Boolean(true)) // => boolean
type(new Boolean(true), true) // => Boolean
```
