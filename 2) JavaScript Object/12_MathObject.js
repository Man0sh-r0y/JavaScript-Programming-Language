// Math Properties (Constants)
console.log(Math.E);       // returns Euler's number
console.log(Math.PI) ;      // returns PI
console.log(Math.SQRT2) ;   // returns the square root of 2
console.log(Math.SQRT1_2);  // returns the square root of 1/2
console.log(Math.LN2) ;     // returns the natural logarithm of 2
console.log(Math.LN10);     // returns the natural logarithm of 10
console.log(Math.LOG2E) ;   // returns base 2 logarithm of E
console.log(Math.LOG10E);   // returns base 10 logarithm of E

// Math Methods
// JavaScript Rounding Functions
let x = 4.6;
console.log(Math.round(x));	//Returns x rounded to its nearest integer
console.log(Math.ceil(x));	//Returns x rounded up to its nearest integer
console.log(Math.floor(x));	//Returns x rounded down to its nearest integer
console.log(Math.trunc(x));	//Returns the integer part of x (new in ES6)
//The Math.round() method rounds a number to the nearest integer.
//2.49 will be rounded down (2), and 2.5 will be rounded up (3).

// Outputs:
// 5
// 5
// 4
// 4

// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);
// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);
// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);
// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;
// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;
//Math.random() used with Math.floor() can be used to return random integers.
//The Math.floor() method rounds a number DOWN to the nearest integer.

console.log(Math.sign(x)); //returns if x is negative, null or positive

// Power Function
console.log(Math.pow(2, 3));

console.log(Math.sqrt(x));//  returns the square root of x
console.log(Math.abs(x));//returns the absolute (positive) value of x

console.log(Math.sin(180));
console.log(Math.cos(180));

// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments
console.log(Math.min(0, 150, 30, 20, -8, -200));

console.log(Math.max(0, 150, 30, 20, -8, -200));

console.log(Math.random());// returns a random number between 0 (inclusive), and 1 (exclusive)

console.log(Math.log(1000));// returns the natural logarithm of x

console.log(Math.log2(4));// returns the base 2 logarithm of x.

console.log(Math.log10(100));//  returns the base 10 logarithm of x.