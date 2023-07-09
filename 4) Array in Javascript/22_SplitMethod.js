// The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.

let message = "My Name is Manash Roy";
console.log(message);

let arr = message.split(" ");// If (" ") is used as separator, the string is split between words.
console.log(arr);// [ 'My', 'Name', 'is', 'Manash', 'Roy' ]

arr.forEach(e => console.log(e));