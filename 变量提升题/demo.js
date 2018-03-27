/**
 * 变量提升和函数提升
 * 变量提升，变量值不会提升
 * 函数声明提升，整个函数块提升
 * 函数提升优先级比变量高，但不会覆盖变量赋值
 */

// 1
if (!("a" in window)) {
    var a = 1;
}
alert(a); // undefined

// 2 函数提升优先级比变量高
function value(){
    return 1;
}
var value;
alert(typeof value);    //"function"

// 3 函数声明的优先级高于变量声明的优先级，但如果该变量value赋值了，那结果就完全不一样了
function value(){
    return 1;
}
var value = 1;
alert(typeof value);    //"number"

/**
 * 4 
 * .函数声明优先于变量声明，所以，刚开始，a就是function a(){alert(10)} ，就会看到这个函数。
 * a()，执行函数，就是出现alert(10)
 * 执行了var a=3; 所以alert(a)就是显示3
 * .由于a不是一个函数了，所以往下在执行到a()的时候， 报错。
 * */ 
alert(a)
a();
var a=3;
function a(){
    alert(10)
}   
alert(a)
a=6;
a(); 

/**
 * 5 在aa函数里面，有var a=3，那么在aa作用域里面，就是把a这个变量声明提前，但是不会赋值，所以是underfind
 */
var a=0;
function aa(){
    alert(a)
    var a=3
}
aa();
//underfind

// 6 函数体内，参数的优先级高于变量

var a=0;
function aa(a){
    alert(a)
    var a=3
}
aa(5)
alert(a)
//5,0 

// 7
var a=0;
function aa(a){
    alert(a)
    a=3
}
aa(5)
alert(a)
//5,0   在函数体内，执行alert(a)和a=3,修改的的并不是全局变量a，而是参数a


// 8
var a=0;
function aa(a){
    alert(a)
    var a=3
    alert(a)
}
aa(5)
//5,3
//2.形参和局部变量优先级一样，此时相当于
//var a=0;
//function aa(a){
//  var a;    先声明
//  a=5      由于形参和变量名称一样，覆盖了！
//    alert(a)
//    a=3
//    alert(a)
//}
//aa(5)













