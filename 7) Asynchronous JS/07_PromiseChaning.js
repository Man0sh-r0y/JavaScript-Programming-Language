// What is Promise in Javascript?
// Instead of having to block code execution until the data loads, 
// you can define them as promises, 
// so that code execution continues with other parts of the code.
// And when the promises complete, you can use the data in them.

let promise = new Promise(function (resolve, reject) {
    resolve("This is 1st Promise and it's now resolved");
});
// It will return the Promise object

promise.then(function (result) {
    console.log(result);
    // now returning a new Promise object
    return new Promise(function (resolve, reject) {
        resolve("This is 2nd Promise. It's now resolved");
    });
})// after its resolved, this then() will be executed
    .then(function (result) {
        console.log(result);
        return "Promise Chaning";// a string is returned
    })
    // after its resolved, this then() will be executed
    .then(function (result) {
        console.log(result);// retuened string will be printed
    })
    // That's how Promise chaining happens


promise.finally(() => console.log("Promise has been completed"));

// OUTPUT:
// This is 1st Promise and it's now resolved
// Promise has been completed
// This is 2nd Promise. It's now resolved
// Promise Chaning

// So atfirst Promise object will be resolved.
// Than finally() will be executed. As this promise has been completed
// after that, then() code will be executed.[The then() method is used when the promise is successfully fulfilled or resolved.]
// that's how async operation happens.


// Another Promise Chaining Example:
let p = new Promise(function (resolve, reject) {
    setTimeout(() => console.log("I'm inside the Promise"), 2000);// will be printed after 2 sec
    resolve("The Promise is resolved");
});

p.then((result) => console.log(result));// Whatever Promise object will be returned, that would be printed here.
p.then(() => console.log('Done !'));
p.then(() => console.log("Promise is finished"));

// OUTPUT:
// The Promise is resolved
// Done !
// Promise is finished
// I'm inside the Promise