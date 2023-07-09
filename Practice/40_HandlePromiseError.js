// Write a function that catches and handles any errors thrown by a Promise, and logs a custom error message to the console.

function handlePromiseError(promise, errorMsg) {
    promise.catch(() => console.log(errorMsg));
}

let promise = Promise.reject("The Promise is rejected");
let errorMsg = new Error("Error found: The Promise is rejected");

handlePromiseError(promise, errorMsg);