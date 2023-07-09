//The parentNode property returns the parent node of an element or node.
//The parentNode property is read-only.

//The parentElement property returns the parent element of the specified element.
//The difference between parentElement and parentNode, is that parentElement returns null if the parent node is not an element node:

document.body.parentNode; // Returns the <html> element
document.body.parentElement; // Returns the <html> element

document.documentElement.parentNode; // Returns the Document node
document.documentElement.parentElement; // Returns null (<html> does not have a parent ELEMENT node)

//The documentElement property returns a document's element (as an Element object).
//The documentElement is read-only.
// Get the name of the document element node: document.documentElement.nodeName;
//The difference between document.body and document.documentElement:
//document.body returns the <body> element
//document.documentElement returns the <html> element.

let item = document.querySelector('#item2');
console.log(item);

console.log(item.parentNode);
console.log(item.parentElement);