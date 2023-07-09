// Write a function that takes a string as input and replaces all occurrences of "cat" with "dog".

function replaceOccurrences(str) {
    const regex = /cat/g; // g: global search
    // g:	Perform a global match (find all matches rather than stopping after the first match)
    return str.replace(regex, "dog");// replace
}

console.log(replaceOccurrences("cat")); // dog
console.log(replaceOccurrences("cat cat")); // dog dog