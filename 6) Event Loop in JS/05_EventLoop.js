setTimeout(() => {console.log("This is the first message")}, 5000);
setTimeout(() => {console.log("This is the second message")}, 3000);
setTimeout(() => {console.log("This is the third message")}, 1000);

// Output:

// this is the third message
// this is the second message
// this is the first message



// Another Example:

//JavaScript is a single - threaded programming language. 
//This means that JavaScript can do only one thing at a single point in time.

console.log("Hello");
setTimeout(() => {console.log("Function")}, 5000);
console.log("hy");

// OUTPUT:

// Hello
// hy
// Function
