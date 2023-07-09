// Write a function that takes a string as input and returns true if the string contains at least one digit, false otherwise.

function containsAtleastOneDigit(str) {
    const regex = /\d/; // \d:	Find a digit
    return regex.test(str);// Tests for a match in a string. Returns true or false
}

console.log(containsAtleastOneDigit("abcDEF")); // false
console.log(containsAtleastOneDigit("123")); // true