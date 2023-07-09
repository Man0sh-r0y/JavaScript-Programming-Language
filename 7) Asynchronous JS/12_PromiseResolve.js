let promise1 = Promise.resolve("Promise is resolved");
promise1.then(result => {
    console.log(result);
});
// Promise.resolve() is a method that returns a Promise object that is resolved with a given value.
// If you pass a value to Promise.resolve(),
// it will create a Promise that is already resolved with that value.
// In the above example,
// 'promise1' is a Promise that is already resolved with the value "Promise is resolved".
// When we call the '.then()' method on promise1,
// the callback function is immediately executed with the resolved value.


//If you pass a Promise object to Promise.resolve(), it will return the same Promise object. For example:
const promise2 = Promise.resolve(Promise.reject(new Error('Failed')));
promise2.catch(error => {
  console.log(error); // Output: Error: Failed
});
// In summary,
//Promise.resolve() is a method that returns a Promise 
// that is already resolved with a given value,
//  or returns the same Promise object if you pass a Promise to it.