// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()

let num1 = 30;
let num2 = 40;

console.log(numk1 + " " + num2);

setTimeout(() => console.log("Sum = " + (num1 + num2)), 5000);

console.log("Hello World");

// At first, as usual, the num1 and num2 statement got logged in. 
// As we use browsers to run JavaScript, there are the web APIs that handle these things for users.
// So, what JavaScript does is, it passes the setTimeout function in such web API and then we keep on running our code as usual.
// So it does not block the rest of the code from executing and after all the code its execution,
// it gets pushed to the call stack and then finally gets executed.
//This is what happens in asynchronous JavaScript.