var foo = {
    bar: function () {
        alert(this);
    }
};
   
foo.bar(); // Reference, OK => foo
(foo.bar)(); // Reference, OK => foo

(foo.bar = foo.bar)(); // global?
(false || foo.bar)(); // global?
(foo.bar, foo.bar)(); // global?



var a = 9;
console.log(a = 10) // 10







