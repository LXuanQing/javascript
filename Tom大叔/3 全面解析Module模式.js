

var a = 9;
(function(){
    console.log(a)
}())

var blogModule = (function (my) {
    console.log(my)
    my.AddPhoto = function () {
        //添加内部代码  
    };
    return my;
} (blogModule || {})); 
console.log(blogModule)



+function() {
    console.log('123')
}()


!function() {
    console.log('456')
}()