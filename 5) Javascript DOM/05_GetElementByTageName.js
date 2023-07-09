// The getElementsByTagName() method returns a collection of all elements with a specified tag name.
// The getElementsByTagName() method returns an HTMLCollection.
// The getElementsByTagName() property is read-only.

// An HTMLCollection is an array-like collection (list) of HTML elements.
// The elements in a collection can be accessed by index (starts at 0).
// The length Property returns the number of elements in the collection.

let element = document.getElementsByTagName('h1');
console.log(element);

let getLength = element.length;