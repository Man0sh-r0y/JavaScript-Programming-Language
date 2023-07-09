// The querySelector() method returns the first element that matches a CSS selector.
let className = document.querySelector(".myClass");// selecting class
console.log(className);

let idName = document.querySelector("#myId");// selecting ID
console.log(idName);

let tagName = document.querySelector("h1");// selecting tag
console.log(tagName);

// To return all matches (not only the first one), use the querySelectorAll
// Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.
//The querySelectorAll() method returns a static NodeList.
// We can select anything by querySelectorAll 

// #1 - class 
let classItem = document.querySelectorAll('.myClass');
console.log(classItem);

// #2 - id 
let idItem = document.querySelectorAll('#myId');
console.log(idItem);

// #3 - TAg Name 
let tagItem = document.querySelectorAll('h1');
console.log(tagItem);
// The Difference Between an HTMLCollection and a NodeList:

// A NodeList and an HTMLcollection is very much the same thing.
// Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.
// Both have a length property that returns the number of elements in the list (collection).
// An HTMLCollection is a collection of document elements.
// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
// HTMLCollection items can be accessed by their name, id, or index number.
// NodeList items can only be accessed by their index number.
// An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.
// A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.
// The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.
// The querySelectorAll() method returns a static NodeList.
