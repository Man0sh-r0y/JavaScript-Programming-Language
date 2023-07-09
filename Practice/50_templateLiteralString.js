// Write a function that takes a string and uses template literals to create a new string with the input string and a variable inserted into it.

function createNewString(str, variable) {
    return `${str} ${variable}`;
}

console.log(createNewString("Hello", "World")); // Hello World