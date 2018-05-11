function Cal() {}


Cal.prototype = {
    // constructor: Cal,
    a: 1
}
var test = new Cal();

// Cal.prototype.a = 9 // 可以
console.log(test.a)