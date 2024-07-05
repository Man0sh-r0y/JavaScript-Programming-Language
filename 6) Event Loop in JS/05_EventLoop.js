setTimeout(() => {console.log("This is the first message")}, 5000);
setTimeout(() => {console.log("This is the second message")}, 3000);
setTimeout(() => {console.log("This is the third message")}, 1000);

// setTimeout() is a function serviced globally by the window object provided by the user's browser. 
// It allows users to execute callbacks after a period of time expressed in milliseconds.
// It's part of a Web API which the browser provides for us

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

// Notes (Before reading please watch the video attached to README.md)

// In JavaScript, Web API, Task Queue, and Event Loop are all part of the JavaScript runtime environment 
// and work together to help build faster and cooler websites and apps:

// Web API
// A collection of Application Programming Interfaces (APIs) that allow JavaScript to interact with web features like timers, HTTP requests, and DOM manipulation. Web APIs can extend the functionality of a web browser or server.

// Task Queue
// Also known as the Callback Queue or Message Queue, this is a list of messages to be processed, each with an associated function to handle it. Tasks in the Task Queue are scheduled by I/O operations, setInterval, and setTimeout.

// Event Loop
// An infinite loop that monitors the Task Queue and Call Stack, and executes queued code snippets at the right time. The Event Loop ensures that tasks are executed in the correct order, which helps maintain the application's responsiveness. During each iteration of the Event Loop, the oldest runnable task in the Task Queue is executed, followed by microtasks until the microtask queue is empty. The browser may then update rendering before moving on to the next iteration.

// It continuously monitors the call stack and the task queue. 
// The tasks from the queue will be executed when the call stack is empty
