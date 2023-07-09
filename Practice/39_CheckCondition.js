// Write a function that logs an error message to the console if a certain condition is not met.

function checkCondition(condition, message) {
    if (!condition) {
        console.error(message);// The error() method writes an error message to the console.
    }
}

const condition = false;
const message = "Error Found: Condition not met!";

checkCondition(condition, message);
