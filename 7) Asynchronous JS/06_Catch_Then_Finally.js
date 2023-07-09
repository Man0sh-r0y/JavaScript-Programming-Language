// JavaScript Promise Chaining
// Promises are useful when you have to handle more than one asynchronous task,
// one after another.For that, we use promise chaining.
// You can perform an operation after a promise is resolved using methods then(), catch() and finally().

let countValue = new Promise(function (resolve, reject) {
    resolve("Promise is resolved");
    //reject("Promise is rejected");
});

// When a promise is fulfilled, 
// you can access the resolved data in the then method of the promise:

countValue.then(function (result) {
    console.log(result);
});

// If Primse object resolved, then do this with the data returned from the promise".
// If there is no data, you can skip the then method.

countValue.catch(function () {
    console.log("Error Happened !");
});
// When a promise is rejected (that is, the promise fails),
// you can access the error information returned in the catch method of the promise

// Promises can fail for different reasons.
// For API requests, it can be a failed network connection,
// or a returned error from the server.
// Such promises will be rejected if they get errors.
// If you do not catch the error, this can break your application in some cases.

countValue.finally(function () {
    console.log("Promise has been completed");
});

// There's a last stage of the promise.
// Whether the promise is fulfilled or is rejected,
// the promise has been completed(has been settled).
// At this completed stage, you can finally do something.
// The finally method of promises is useful when you want to do something after the promise has settled. 