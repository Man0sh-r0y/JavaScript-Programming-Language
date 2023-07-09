let p1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 has been resolved"), 5000));
let p2 = new Promise(reject => setTimeout(() => reject(new Error("Promise 2 has been rejected")), 2000));
let p3 = new Promise(resolve => setTimeout(() => resolve("Promise 3 has been resolved"), 1000));

let promiseRace = Promise.race([p1, p2, p3]);
promiseRace.then(result => console.log(result));
promiseRace.catch(error => console.log(error));
// OUTPUT: Promise 3 has been resolved

// Promise.race() static method accepts a list of promises as an iterable object
// and returns a new promise that fulfills or rejects
// as soon as there is one promise that fulfills or rejects,
// with the value from that promise.

