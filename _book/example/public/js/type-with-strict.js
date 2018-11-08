/**
 * @desc 严格模式下测试用例
 */ 
var type = window['@careteen/type']

console.log('严格模式下测试用例')
console.log('\n')

console.log('typeof 1 // => ' + typeof 1)
console.log('typeof new Number(1) // => ' + typeof new Number(1))
console.log('type(1) // => ' + type(1))
console.log('type(new Number(1)) // => ' + type(new Number(1)))
console.log('type(new Number(1), true) // => ' + type(new Number(1), true))
console.log('\n')

console.log('typeof "" // => ' + typeof "")
console.log('typeof new String("") // => ' + typeof new String(""))
console.log('type("") // => ' + type(""))
console.log('type(new String("")) // => ' + type(new String("")))
console.log('type(new String(""), true) // => ' + type(new String(""), true))
console.log('\n')

console.log('typeof true // => ' + typeof true)
console.log('typeof new Boolean(true) // => ' + typeof new Boolean(true))
console.log('type(true) // => ' + type(true))
console.log('type(new Boolean(true)) // => ' + type(new Boolean(true)))
console.log('type(new Boolean(true), true) // => ' + type(new Boolean(true), true))
console.log('\n')