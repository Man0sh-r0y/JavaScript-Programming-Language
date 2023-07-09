//The classList property returns the CSS classnames of an element.
//The classList property returns a DOMTokenList.

// A DOMTokenList is a set of space separated tokens. A DOMTokenList can be accessed by index (starts at 0). The length Property returns the number of tokens in a DOMTokenList.

let element = document.getElementById('list');
console.log(element.classList);
/* DOMTokenList(2) ['listItem', 'myList', value: 'listItem myList']
0 : "listItem"
1 : "myList"
length : 2
value : "listItem myList"
[[Prototype]] : DOMTokenList
*/
console.log(typeof element.classList);// object

element.classList.add('myOwnClass'); // add
element.classList.remove('myOwnClass'); //remove
// toggle - if already then remove else add 
element.classList.toggle('myOwnClass'); 

console.log(element.classList.contains('myOwnClass')); //true
element.classList.toggle('myOwnClass'); // toggle - if already then remove else add 
console.log(element.classList.contains('myOwnClass')); //false