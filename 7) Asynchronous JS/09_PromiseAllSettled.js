let p1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 has been resolved"), 3000));
let p2 = new Promise(reject => setTimeout(() => reject(new Error("Promise 2 has been rejected")), 2000));
let p3 = new Promise(resolve => setTimeout(() => resolve("Promise 3 has been resolved"), 1000));

let promiseAllSettled = Promise.allSettled([p1, p2, p3]);
promiseAllSettled.then(result => console.log(result));

// Promise.allSettled() method that accepts a list of Promises
// and returns a new promise that resolves after all the input promises have settled, either resolved or rejected.
// The Promise.allSettled() returns a pending promise
// that will be asynchronously fulfilled once every input promise has settled.
// Promise.allSettled() method returns a promise that resolves to an array of objects that each describes the result of the input promise.

// Each object has two properties: status and value:

// The status can be either fulfilled or rejected.
// The value if case the promise is fulfilled or  if the promise is rejected.