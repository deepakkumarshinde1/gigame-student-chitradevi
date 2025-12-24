// let  const => block scope
// var  global scope
fun();
console.log(text);
var text = 10;

if (true) {
  //const text = 10;
  //   console.log(text);
}
// 5 ways are there to write a function

function fun() {
  var text = 10;
  if (true) {
    var text = 30;
  }
  console.log(text);
} // general function

//fun1();

// function expression
// own context (this)
let fun1 = function () {
  return 10;
};

// dose not have it own context (this)
let fun11 = () => 10;

// arrow function
// callback function
function fun111(a, b, callback) {
  let result = a + b;
  callback(result);
}
fun111(10, 20, function (result) {
  console.log("i am callback function ", result);
});

fun111(100, 200, (result) => {
  console.log("i am callback function ", result);
});
// iife function
(function (a, b, c) {
  console.log("it runs ", a, b, c);
})(10, 20, 30);

// iife function
(() => {
  console.log("it runs");
})();
