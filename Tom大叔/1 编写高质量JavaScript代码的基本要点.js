/**
 * 全局变量不能通过delete删除
 * 隐式全局变量可以通过delete删除
 * 隐式全局变量并不是真正的变量，但他们是全局对象的属性，对象的属性是可以通过delete删除的
 * 
 */
(function() {
    var a = b = 0; // b是全局变量
})()
console.log(b)
delete window.b;
var c = 9;
d = 2; // 隐式全局变量，可以通过delete删除
delete c
delete d
console.log(window.c)
console.log(window.d)



/***
 * 变量与解析
 * 函数内声明的变量，提升到函数顶部
 * 
 */
var num1 = 1;
function sum() {
    console.log(num1);
    var num1 = 4;
    console.log(num1)
}
sum()


/***
 * for in 循环对象
 * 会遍历对象的原型上的可枚举属性或方法
 * 用Object.prototype方法的好处是：obj重新定义hasOwnProperty情况下避免命名冲突
 * 避免长属性查找，使用变量缓存
 */
var obj = {
    name: 'liu',
    age: 18
}
Object.prototype.clone = 'clone';
var hasOwn = Object.prototype.hasOwnProperty;
for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        console.log(i)
    }
    if (hasOwn.call(obj, i)) {
        console.log(i)
    }
}