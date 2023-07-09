// Function of add two numbers 
function addTwoNumbers(a,b)
{
    let sum = a+b;
    return sum; 
}
// console.log(Math.random());// 0.722299922673479
let num1 = Math.round(Math.random() * 1000);
let num2 = Math.round(Math.random() * 1000);
console.log(addTwoNumbers(num1, num2));   

//The Math.round() method rounds a number to the nearest integer.
//2.49 will be rounded down (2), and 2.5 will be rounded up (3).
// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

//Math.random() used with Math.floor() can be used to return random integers.
num1 = Math.floor(Math.random() * 10);
num2 = Math.floor(Math.random() * 10);
console.log(addTwoNumbers(num1, num2));

