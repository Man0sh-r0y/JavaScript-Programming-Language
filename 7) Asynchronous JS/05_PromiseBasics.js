// A promise is a good way to handle asynchronous operations.
// It is used to find out if the asynchronous operation is successfully completed or not.
// Promise is javascript Object

// A promise may have one of three states:

// Pending
// Fulfilled
// Rejected

// A promise starts in a pending state.
// That means the process is not complete.If the operation is successful,
// the process ends in a fulfilled state.
// And, if an error occurs, the process ends in a rejected state.

const count = false;

let countValue = new Promise(function (resolve, reject) {
    if (count) resolve("The Process is succesfully completed");
    else reject("The Process is rejected");
});

console.log(countValue);

// The Promise() constructor takes a function as an argument. 
// The function also accepts two functions resolve() and reject().

// If the promise returns successfully, the resolve() function is called. 
// And, if an error occurs, the reject() function is called.
