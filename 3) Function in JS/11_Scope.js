// Three ways to create variable

// #1 - var
var a = 10;
console.log(a);//10

{
  var a = 30;
}
console.log(a);//30

// #2 - Let

let b = 10;
console.log(b);

// let b = 20; - Error
b = 20;
console.log(b);

{
  let ba = 40;
  console.log(ba);
}
// console.log(ba); - Error

// #3 

const c = 10;
console.log(c);

// c = 20; //Error
console.log(c);