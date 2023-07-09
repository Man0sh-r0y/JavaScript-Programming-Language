// we can create variable with the keyword 'let' and 'var'
// difference between let and var is in scope of the variable.
// The scope of the variable who is decleared by 'let' keyword is limited.

// creating variable using 'let' keyword
let a = 10;
console.log(a); // numeric data

let b = 12.5; // floating data
console.log(b);

let firstName = "Manash";// string type data
console.log(firstName);

let Status = true; // boolean type data
console.log(Status);

// creating variable using 'var' keyword
var c = 10;
console.log(c);

var Name = "Manash";
console.log(Name);

// Difference between 'let' and 'var'
{
    let d = 12;
    console.log("Inside the scope of the Varible: " + d );
}
// console.log("Outside the scope of the Varible: " + d );
// Error will be occured: d is not defined

// Now trying with the 'var'
{
    var p = 8;
    console.log("Inside the scope of the Varible: " + p );
}
// Below code willn't create any error
console.log("Outside the scope of the Varible: " + p);

var e = 2, f = 3;
console.log(e + " and " + f);

// Constant Variable
const PI = 3.14;
console.log("Constant Variable " + PI)
// Below codwe will create error while printing
// PI = 10;
// console.log(PI);


