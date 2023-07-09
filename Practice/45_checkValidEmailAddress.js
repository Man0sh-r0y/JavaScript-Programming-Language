// Write a function that takes a string as input and returns true if the string is a valid email address, false otherwise.

function checkValidEmailAddress(str) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // https://www.w3resource.com/javascript/form/email-validation.php
    return regex.test(str);
}


console.log(checkValidEmailAddress("manashroy454@gmail.com"));// true
console.log(checkValidEmailAddress("manash.roy.fiem.cse21@teamfuture.in"));// true