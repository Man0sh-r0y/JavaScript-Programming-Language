// Hoisting is JavaScript's default behavior of moving declarations to the top.
// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

console.log(sum(10,45)); // 55
// Not declared but it gives output 
function sum(a,b)
{
    return a+b;
}

//Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// The let and const Keywords:
// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "temporal dead zone" from the start of the block until it is declared:

carName = "Volvo";// This will result in a ReferenceError:
let carName;

//Using a const variable before it is declared, is a syntax error, so the code will simply not run.
CarName = "Volvo";
const CarName;

// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.

// Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.
// If a developer doesn't understand hoisting, programs may contain bugs (errors).
// To avoid bugs, always declare all variables at the beginning of every scope.
// Since this is how JavaScript interprets the code, it is always a good rule.


console.log(x) //undefined
var x;
x = 10;