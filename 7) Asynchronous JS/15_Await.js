// The await keyword is used inside the async function to wait for the asynchronous operation.'
let promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("This Promise is resolved");
    }, 5000);
});
// await pauses the async function until the 'promise' returns a result (resolve or reject) value.

async function myFunction() {
    // wait untill the Promise resolved
    let result = await promise;
    // after getting result / value below code will run
    console.log(result);
    console.log("I'm inside the Async Function");
};

myFunction();
// OUTPUT:
// This Promise is resolved
// I'm inside the Async Function

// Async/await is a feature in JavaScript
// that allows you to write asynchronous code
// that looks and behaves like synchronous code,
// making it easier to read and write.

