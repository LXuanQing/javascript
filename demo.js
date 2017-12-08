
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


// 8 函数自调用
!function test() {
    var a = 10
    // console.log(a)
}()
