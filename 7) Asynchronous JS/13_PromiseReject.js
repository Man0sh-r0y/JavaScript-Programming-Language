let promise1 = Promise.reject(new Error("Something went wrong"));
promise1.catch(error => {
    console.log(error);
});
// Promise.reject() is a method in JavaScript 
// that returns a new Promise object that is rejected with a given reason.
// The Promise.reject() method is typically used to create a Promise 
// that is immediately rejected with a specific error or reason.
// You can pass an error object or any other value as the reason parameter.