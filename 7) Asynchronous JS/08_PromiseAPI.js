let p1 = new Promise(resolve => setTimeout(() => resolve(1), 3000));
let p2 = new Promise(resolve => setTimeout(() => resolve(2), 2000));
let p3 = new Promise(resolve => setTimeout(() => resolve(3), 1000));

let promiseAll = Promise.all([p1, p2, p3]);
promiseAll.then(result => console.log(result));
promiseAll.catch(error => console.log(error));

//Promise.all takes an iterable (usually, an array of promises) and returns a new promise.
// The Promise.all() method returns a single promise that resolves when all the input promises have been resolved.
// If one of the input promise rejects, 
// the Promise.all() method immediately returns a promise that rejects with an error of the first rejected promise
//For instance, the Promise.all below settles after 3 seconds, and then its result is an array [1, 2, 3]
// The order of the resulting array members is the same as in its source promises. 
// Even though the first promise takes the longest time to resolve, 
// it’s still first in the array of results.