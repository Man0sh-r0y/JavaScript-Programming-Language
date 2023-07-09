// While using constructor function I have to use Pascal Notation
// Pascal Notation-> PascalNotation
function Rectangle(a, b) {
    // 'this' keyword defines the current object
    this.length = a;
    this.breadth = b;
    this.draw = function () {
        console.log('Drawing');
    }
}

// create Object 
let rec1 = new Rectangle(2, 3);
let rec2 = new Rectangle(5, 8);
let rec3 = new Rectangle(4, 3);

console.log(rec1);
console.log(rec2);
console.log(rec3);
// When we will print like that, then while printing the output, in the function section , it will show like this : [Function (anonymous)]. 
// This happens because Node Js doesn't know what is in the Function which is inside of the Object. That's why it does happen.

// adding more properties
rec1.color = 'Yellow';
console.log(rec1);// added color property for rec1 object only
delete rec1.color;
console.log(rec1);


console.log(typeof (Rectangle));// function
console.log(rec1.constructor); // [Function: Rectangle]
console.log(typeof (rec1));// object
console.log(Rectangle.constructor);// [Function: Function]
