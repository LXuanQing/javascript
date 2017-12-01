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

// 4 数组sort方法
