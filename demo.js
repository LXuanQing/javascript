/*
// 1 强转布尔值
var x=null;
var y="";
var str="abcd";

console.log(!!x)      // false;
console.log(!!y)      // false;
console.log(!!str)    // true;




// 2 数字字符串前加+，会强制转number
var str = "123"
var num = +str
console.log(num)
//但是如果是混合类型的字符串，则会转为NaN
var b="1606e";
console.log(+b)     // NaN



// 3 void 0 或 void (0) === undefined
// 当undefined被放在在function函数内，我们把它当成一个局部变量，它是可以赋上值的
function test() {
    var undefined = 1
    console.log(undefined)
}
test()
// 但是当在函数内定义一个全局变量，并不能给赋上值
var undefined;
function foo2(){
    undefined=1;
    console.log(undefined)
}
foo2()    // undefined

var a=undefined;

//用void 0来判断一下
if(a===void 0){
    console.log('true')
}       // true

//再用void (0)来判断一下
if(a===void (0)){
    console.log('true')
}       // true
//最后我们打印一下这两个的返回值
console.log(void 0,void (0))    // undefined undefined



// 4 数组sort方法，改变原数组
// a-b输出从小到大排序，b-a输出从大到小排序
// 原理：冒泡法排序，往最后冒
var arr = [1,2,5,6,2,4]
arr.sort((a,b) => {
    return a - b 
})
// 打乱顺序
arr.sort(() => {
    return Math.random() - 0.5
})
console.log(arr)



// 5 去除字符串前后、前、后、所有空格
//  type 1-所有空格，2-前后空格，3-前空格，4-后空格
var str = " 3 5hgh y6y6  "
function trim(str,type){
    switch (type){
        case 1:return str.replace(/\s+/g,"");
        case 2:return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:return str.replace(/(^\s*)/g, "");
        case 4:return str.replace(/(\s*$)/g, "");
        default:return str;
    }
}
console.log(str)
console.log(trim(str,2))


// 6 ajax请求的成功和错误

$.ajax({
    url: "",
    data: {},
    success: function(content) {
        console.log(content,"success")
    },
    error: function(error,a,b) {
        console.log(error,a,b,"error")
    }
})

// 只要是200，就会执行成功的回调函数
// 接口不存在等失败才会调用失败的回调函数


// 7 意外的全局变量
function test() {
    a = 10
}
test()
// 等同于
function test() {
    window.a = 10
}
console.log(window.a)
// 另外，通过this创建的全局变量
// 当在全局作用域中调用foo函数，此时this指向的是全局对象(window)，而不是'undefined'
function foo() {
    this.variable = "potential accidental global";
}

// 解决方法：
// 在JavaScript文件中添加'use strict'，开启严格模式，可以有效地避免上述问题。
function fn() {
    'use strict'
    bar = 3 // 报错：因为bar还没有被声明
}
fn()
// 谈到全局变量，需要注意那些用来临时存储大量数据的全局变量，确保在处理完这些数据后将其设置为null或重新赋值。
// console.log打印的对象是不会被垃圾回收器回收的。
// 减少全局变量的污染
**** 值创建一个唯一的全局变量 var MYAPP = {} 别的变量都放在这个容器之下

// 8 函数自调用
!function test() {
    var a = 10
    // console.log(a)
}()



// 9 如果一个值是undefined，再去获取某个值就会报错，可用&&避免这种错误
fight.a // undefined
fight.a.b // throw error
fight.a && fight.a.b


// 10 hasOwnProperty如果对象拥有这个属性返回true，否则返回false。方法不会检查原型链
Object.prototype.add = 3
let obj = {
    age: 1,
    class: 3
}

console.log(obj.add)
console.log(obj.hasOwnProperty('add'))


// 11 for in 遍历对象，会列举对象所有的属性，包括原型的属性
for(var name in obj) {
    console.log(name)
}
// 而且for in 顺序也是不定的，如果确保特定的顺序出现，最好的办法是创建一数组，再用for 循环

// 12 delete可删除对象的属性，不会删除原型对象的属性
console.log(obj.age)
delete obj.age
console.log(obj.age)



// 13 函数调用的模式
// *** 方法调用模式，作为的对象的方法来调用，this指向该对象，通过this能从对象中取值或对对象进行修改
var obj = {
    test: function() {
        console.log(this) // 这个this指向obj
    }
}
obj.test()

// *** 函数调用模式  通过函数的方法名直接调用，里面的this指向window
var obj = {
    age: 2,
    test: function() {
        console.log(this) // 这个this指向obj
        function fn() {
            console.log(this) // 这个this指向window
        }
        fn()
    }
}
obj.test()

// *** 构造器调用模式  通过new来调用，this指向那个新对象上，同时会创建一个连接到该函数的prototype成员的新对象
var Test = function() {
    this.age = 4
}
Test.prototype.class = 3
var result = new Test()
console.log(result.class)

// **** Apply调用模式 第一个参数是绑定的this，第二个是参数数组
function test() {
    console.log(this)
}
test.apply({},[])


// 函数的arguments，是实参组成的数组，并不是一个真正的数组，是类似数组的对象，只有一个length属性


// 14 throw 中断程序的执行，会抛出一个exception对象，该对象有个识别异常信息的name和messgae属性
// 该exception对象会传递给try语句的catch从句
// 使用try catch 不会中断程序的执行

throw {
    name: "琴",
    message: "错误信息",
    age: 3
}
console.log("go on")

try {
    throw {
        name: "琴",
        message: "错误信息",
        age: 3
    }
} catch(e) {
    console.log(e)
}

try {
    console.log(s)
} catch (e) {
    console.log(e)
}

console.log("go")


// 15 方法的调用 方法调用的中括号里面可以执行语句
var a = 2
var num = Math[ a > 0 ? 'ceil' : 'floor'](-3.4)
console.log(num)

var obj = {
    a: 1,
    b: 2
}
console.log(obj[a > 0 ? 'a' : 'b'])



// 16 求数组的最值
var arr = [1,5,7,3,5,0]
var max = Math.max.apply(null,arr)
var min = Math.min.apply(null,arr)
console.log(min)



// 17 getBoundingClientRect方法，获取元素距浏览器可视区的距离
var box = document.querySelector("#box")
console.log(box.getBoundingClientRect())


// 18 文本合成语音
var speechSU = new window.SpeechSynthesisUtterance();
speechSU.text = '你好，世界！';
window.speechSynthesis.speak(speechSU);

// 19 Object.defineProperty 
// 给对象的属性设置特性 是否只读  是否可以被for..in或Object.keys()遍历
// https://segmentfault.com/a/1190000007434923
// http://blog.csdn.net/u011884290/article/details/51941605


// 20 反柯里化技术
// 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
Function.prototype.uncurrying = function() {
    var _this = this // push
    return function() {
        return Function.prototype.call.apply(_this,arguments)
        // push.call(arguments)
        // arguments == obj, 'first'
        // push.call(obj, 'first')
        // obj.push('first')
    }
}
// 原push方法没有改变
var obj = {}
var push = Array.prototype.push.uncurrying();
push( obj, 'first' )
console.log(obj)
console.log(obj[0])
console.log(obj.length)
var arr = [1,2,3]
console.log(arr.indexOf(3)) // 2
var indexOf = Array.prototype.indexOf.uncurrying()
console.log(indexOf(arr,3)) // 2
*/

// 21 函数的arguments处理成数组
var curry = function () {
    var args = [].slice.call(arguments)
    // arguments只有length属性
    console.log(args)
};
curry(1,2)

// 22  平方
let num = 2 ** 3; // 8





















