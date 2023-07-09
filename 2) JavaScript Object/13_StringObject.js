let lastName = 'Roy' ;
let firstName = new String('Manash');// If we create String using new Keyword then it becomes an Object

let message = 
`Hello ${firstName},
This is message Body
Regards,
Manash`;

console.log(message);
/* OUTPUT:
Hello Manash,       
This is message Body
Regards,
Manash
*/

let words = message.split(' ');
console.log(words);// [ 'Hello', 'Manash,\nThis', 'is', 'message', 'Body\nRegards,\nManash' ]


// There are String Object can be created by new keyword and String Constructor 
let str = new String("My name is Manash");
console.log(str);
console.log(typeof str);// use the typeof operator to find the data type of a JavaScript variable

// Properties
// #1 - Length 
console.log(str.length);

// Methods 
// #1 - lowercase 
console.log(str.toLocaleLowerCase());

// #2 - uppercase 
console.log(str.toUpperCase()); // The toUpperCase() method converts a string to uppercase letters. This method does not change the original string.

// #3 - at 
console.log(str.charAt(4));// The charAt() method returns the character at a specified index (position) in a string.

// #4 - charCodeAt 
console.log(str.charCodeAt(4));// The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.

// #5 - startwith 
console.log(str.startsWith("My"));// The startsWith() method returns true if a string starts with a specified string. Otherwise false

// #6 - endsWith 
console.log(str.endsWith("Manash"));// The endsWith() method returns true if a string ends with a specified string.

// #7 - replace 
console.log(str.replace("Man", "Ran"));// The replace() method searches a string for a value or a regular expression. 
//It returns a new string with the value(s) replaced.It does not change the original string.

let a = "  Hello  ";
// #8 - trim 
console.log(a);
console.log(a.trim());// The trim() method removes whitespace from both sides of a string. The trim() method does not change the original string