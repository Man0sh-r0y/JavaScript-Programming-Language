// Definition and Usage:
// The getElementsByClassName() method returns a collection of elements with a specified class name(s).
// The getElementsByClassName() method returns an HTMLCollection.
// The getElementsByClassName() property is read-only.

// HTMLCollection:
// An HTMLCollection is an array-like collection (list) of HTML elements.
// The elements in a collection can be accessed by index (starts at 0).
// The length Property returns the number of elements in the collection.


let element = document.getElementsByClassName('myClass');
console.log(element);

let getLength = element.length;// Length of The HTML Collection