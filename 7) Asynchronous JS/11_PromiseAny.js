let p1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 has been resolved"), 3000));
let p2 = new Promise(reject => setTimeout(() => reject(new Error("Promise 2 has been rejected")), 2000));
let p3 = new Promise(resolve => setTimeout(() => resolve("Promise 3 has been resolved"), 1000));

let promiseAny = Promise.any([p1, p2, p3]);
promiseAny.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
// OUTPUT: Promise 3 has been resolved

// The Promise.any() method accepts a list of Promise objects as an iterable object
// If one of the promises in the iterable object is fulfilled,
// the Promise.any() returns a single promise
// that resolves to a value which is the result of the fulfilled promise


// when all promise are rejected
let p4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("Promise 4 rejected");
    }, 3000);
});

let p5 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("Promise 4 rejected");
    }, 2000);
});

let p6 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("Promise 4 rejected");
    }, 1000);
});

let p = Promise.any([p4, p5, p6]);
p.catch(err => console.log(err));
// OUTPUT: AggregateError: All promises were rejected