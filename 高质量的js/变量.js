/**
 * 1、避免使用全局变量
 * 
 */
// 隐式全局变量 1
myglobal = "hello"; // 不推荐写法
console.log(window.myglobal); // "hello"

// 隐式全局变量 2
function sum(x, y) {
    result = x + y; // 没有用var声明
    return result;
}

function test() {
    var a = b = 9; // a是本地变量，但是b确实全局变量
}

// var的副作用
// 通过var创建的全局变量（任何函数之外的程序中创建）是不能被删除的。
// 无var创建的隐式全局变量（无视是否在函数中创建）是能被删除的。
var num1 = 2;
num2 = 4;
(function() {
    num3 = 5;
}());
delete num1; // false
delete num2; // true

// 在ES5严格模式下，未声明的变量工作时会抛出一个错误。

// 变量提升
// 对于JavaScript，只要你的变量是在同一个作用域中（同一函数），它都被当做是声明的，即使是它在var声明前使用的时候
// 所有的变量声明都在范围作用域的顶部
// 变量会提升，变量值不会
// 函数声明也会提前，函数表达式不会提前
// 函数声明会覆盖变量声明，但不会覆盖变量赋值
var global = 'global';
function varLeap () {
    console.log(global) // undefined
    var global = '2222'
    console.log(global) // 2222
}
varLeap()
/**
 * 2、for循环，提前获取数组长度
 * 尤其arr不是数组，而是HTMLCollection对象的时候，每次都要查询DOM
 * JSLint会对i++ i--抱怨
 */
var arr = [1, 2, 3];
for (var i = 0, length = arr.length; i < length; i += 1) {
    // ....
}
/**
 * 3、for in 枚举对象，会查找原型链
 */
var obj = {
    a: 1,
    b: 2,
}
Object.prototype.clone = 'clone'

for (var key in obj) {
    console.log(key) // a b clone
}

for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key, 'own') // a b
    }
}

for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        console.log(key, 'pro')
    }
}
// 其好处在于在obj对象重新定义hasOwnProperty情况下避免命名冲突。
// 也避免了长属性查找对象的所有方法，你可以使用局部变量“缓存”它
var objKey, hasOwn = Object.prototype.hasOwnProperty;
for (objKey in obj) {
    if (hasOwn.call(obj, objKey)) {
        console.log(objKey, 'var')
    }
}
/**
 * 4、switch模式
 * 每个case中代码缩进
 * 每个case以break清除结束
 * 避免贯穿
 * 以default结束switch：确保总有健全的结果，即使无情况匹配。
 */
var caseNum = 0,
    resultNum;
switch (caseNum) {
    case 0:
        resultNum = 0;
        break;
    case 1:
        resultNum = 1;
        break;
    default:
        resultNum = "unknown";
}

/**
 * 4、避免隐式类型转换
 * 使用===和!==操作符
 */

/**
 * 5、不适用eval()
 */

/**
 * 6、parseInt()下的数值转换
 * 第二个参数是基数参数
 * 在ECMAScript 3中，开头为”0″的字符串被当做8进制处理了，但这已在ECMAScript 5中改变了。
 * 为了避免矛盾和意外的结果，总是指定基数参数。
 */
var num = '03'
console.log(parseInt(num, 10))



/**
 * 7、局部变量和全局变量
 * 在函数用var声明的变量是局部变量
 * 其余的都是全局变量，包括在if switch声明的
 */

if (true) {
	var a = 9
}
console.log(a) // 9




