// Function in Javascript is Object. We know every object can be created trough Constructor function or Factory Function.
// So how function Object is created?
// So below code is how function as a object is created in Javascript
let Rectangle = new Function(
    'length', 'breadth',
    `this.length = length;
    this.breadth = breadth;
    this.draw = function () {
        console.log("Drawing")
    }`
);
// Rectangle is a function and it's a object of Function constructor.

let rec = new Rectangle(2, 3);
console.log(rec);
// Printing its poperty
console.log(rec.length);// 2
console.log(rec.breadth);// 3
rec.draw(); // Drawing

console.log(Rectangle.constructor); // [Function: Function]
console.log(typeof (Rectangle));// function
// so here it's proved that function in an object and Rectangle is an Object of Function constructor. and Rectangle is a function also
console.log(typeof (rec)); // object


