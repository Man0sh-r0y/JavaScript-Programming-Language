async function myFunction() {
    return "Hello";
};
// The keyword async before a function makes the function return a promise
// This above function is same as below function:
function myFunction() {
    return Promise.resolve("Hello");
};

myFunction().then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

// In JavaScript, if you define two functions with the exact same name, same parameters, and same content,
// the second function will overwrite the first one. This means that only the last defined function will be accessible.