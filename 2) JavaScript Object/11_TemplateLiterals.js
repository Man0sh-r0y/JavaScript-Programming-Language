let Name = "Manash Roy";
// Template Literals use back-ticks (``) rather than the quotes ("") to define a string
let message = `My Name is ${Name}`;// Interpolation
//With template literals, you can use both single and double quotes inside a string:
//Template literals allows multiline strings:
console.log(message);

// Interpolation:
// Template literals provide an easy way to interpolate variables and expressions into strings.

// The method is called string interpolation.

// The syntax is: ${...}

// Variable Substitutions
let firstName = "Manash";
let lastName = "Roy";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);

// Expression Substitution
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
// .toFixed(2) denotes the no. of decimals after the decimal point
console.log(total);