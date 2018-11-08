/**
 * @desc 非严格模式下测试用例
 */ 
var type = window['@careteen/type']

console.log('非严格模式下测试用例')
console.log('\n')

console.log('type(1) // => ' + type(1))
console.log('typeof 1 // => ' + typeof 1)
console.log('\n')

console.log('type(true) // => ' + type(true))
console.log('typeof true // => ' + typeof true)
console.log('\n')

console.log('type("") // => ' + type(''))
console.log('typeof "" // => ' + typeof '')
console.log('\n')

console.log('type(undefined) // => ' + type(undefined))
console.log('typeof undefined // => ' + typeof undefined)
console.log('\n')

console.log('type(Symbol()) // => ' + type(Symbol()))
console.log('typeof Symbol() // => ' + typeof Symbol())
console.log('\n')

console.log('type(null) // => ' + type(null))
console.log('typeof null // => ' + typeof null)
console.log('\n')

console.log('type([]) // => ' + type([]))
console.log('typeof [] // => ' + typeof [])
console.log('\n')

console.log('type({}) // => ' + type({}))
console.log('typeof {} // => ' + typeof {})
console.log('\n')

console.log('type(new Set()) // => ' + type(new Set()))
console.log('typeof new Set() // => ' + typeof new Set())
console.log('\n')

console.log('type(new WeakSet()) // => ' + type(new WeakSet()))
console.log('typeof new WeakSet() // => ' + typeof new WeakSet())
console.log('\n')

console.log('type(new Map()) // => ' + type(new Map()))
console.log('typeof new Map() // => ' + typeof new Map())
console.log('\n')

console.log('type(new WeakMap()) // => ' + type(new WeakMap()))
console.log('typeof new WeakMap() // => ' + typeof new WeakMap())
console.log('\n')

console.log('type(function () {}) // => ' + type(function () {}))
console.log('typeof function () {} // => ' + typeof function () {})
console.log('\n')

console.log('type(class A {}) // => ' + type(class A {}))
console.log('typeof class A {} // => ' + typeof class A {})
console.log('\n')

console.log('type(/1/) // => ' + type(/1/))
console.log('typeof /1/ // => ' + typeof /1/)
console.log('\n')

console.log('type(new Date()) // => ' + type(new Date()))
console.log('typeof new Date() // => ' + typeof new Date())
console.log('\n')

console.log('type(Math) // => ' + type(Math))
console.log('typeof Math // => ' + typeof Math)
console.log('\n')

console.log('type(new Promise(function () {})) // => ' + type(new Promise(function () {})))
console.log('typeof new Promise(function () {}) // => ' + typeof new Promise(function () {}))
console.log('\n')
