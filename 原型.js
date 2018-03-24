/**
 * 对象分为普通对象和函数对象，Object、Function 是 JS 自带的函数对象
 * 
 */

// 函数对象
function f1() {}
var f2 = function(){}
var f3 = new Function()
console.log(typeof Object, 'Object')
console.log(typeof Function, 'Function')
console.log(typeof f1, 'f1')
console.log(typeof f2, 'f2')
console.log(typeof f3, 'f3')

// 普通对象
var o1 = {}
var o2 = new Object()
var o3 = new f2()
console.log(typeof o1, 'o1')
console.log(typeof o2, 'o2')
console.log(typeof o3, 'o3')

/**
 * 凡是通过 new Function() 创建的对象都是函数对象，其他的都是普通对象。
 * f1,f2,归根结底都是通过 new Function()的方式进行创建的。Function Object 也都是通过 New Function()创建的
 */


/**
 * 每个函数对象都有一个prototype 属性，这个属性指向函数的原型对象。
 * 每个对象都有 __proto__ 属性，但只有函数对象才有 prototype 属性
 * 每个对象的__proto__属性指向自身构造函数的prototype
 * constructor始终指向 创建 当前对象的构造函数
 * 原型对象（Person.prototype）是 构造函数（Person）的一个实例
 * 原型对象其实就是普通对象（但 Function.prototype 除外，它是函数对象，但它很特殊，他没有prototype属性（前面说道函数对象都有prototype属性））
 */

// constructor
console.log(o1.constructor === Object) // true
console.log(o2.constructor === Object) // true
console.log(o3.constructor === f2) // true

console.log(f1.constructor === Function) // true

console.log(f1.prototype.constructor === f1) // true
console.log(f1.__proto__ === f1.constructor.prototype) // true
console.log(f1.prototype.prototype) // undefined

console.log(o3.__proto__ === f2.prototype) // true

console.log(f2.prototype.__proto__ === Object.prototype) // true