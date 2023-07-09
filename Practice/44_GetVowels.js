// Write a function that takes a string as input and returns the number of vowels in the string.

function getVowels(str) {
    const regex = /[aeiou]/gi;
    // g: Perform a global match (find all matches rather than stopping after the first match)
    // i: Perform case-insensitive matching
    const vowels = (str.match(regex)) ? str.match(regex).length : 0;// if str.match(regex) is null then, 0 will be returned
    return vowels;
    //`str.match(regex)` is a method in JavaScript that searches a string for a match against a regular expression.
    // In this case, it is searching for all occurrences of vowels in the string `str`.
    // The `g` flag in the regular expression makes it search for all occurrences,
    // The `i` flag makes it case-insensitive.
}

console.log(getVowels("hello")); // 2
console.log(getVowels("why")); // 0