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