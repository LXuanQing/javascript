function foo(){
    return baz();
  }
  var bar = function(){
    debugger;
  };
  var baz = bar;
  bar = function() { 
    alert('spoofed');
  };
  foo();