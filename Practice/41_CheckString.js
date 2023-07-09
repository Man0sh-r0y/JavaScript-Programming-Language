// Write a function that takes a string as input and returns true if the string contains only alphabets, and false otherwise.

// The RegExp Obj:

//A regular expression is a pattern of characters.
//The pattern is used for searching and replacing characters in strings.
//The RegExp Object is a regular expression with added Properties and Methods.

function containsOnlyAlphabets(str) {
    const regex = /^[a-z]+$/i; // i = case insensitive
    // n$:	Matches any string with n at the end of it
    // ^n:	Matches any string with n at the beginning of it
    // [abc]:	Find any character between the brackets
    // /regex/i:	A case-insensitive regular expression
    return regex.test(str);// Tests for a match in a string. Returns true or false
}

console.log(containsOnlyAlphabets("abcDEF")); // true
console.log(containsOnlyAlphabets("123")); // false
console.log(containsOnlyAlphabets("a b c")); // false
console.log(containsOnlyAlphabets("")); // false