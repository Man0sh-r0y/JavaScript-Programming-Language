// The createElement() method creates an element node.

let newElement = document.createElement('h1') //create h1 
// add content in h1 
let content = document.createTextNode("Manash Roy");// The createTextNode() method creates a text node.
newElement.appendChild(content);// The appendChild() method appends a node (element) as the last child of an element.
console.log(newElement);

// HTML Elements are Nodes:

// All HTML elements are nodes.
// Elements are nodes. Attributes are nodes. Texts are nodes.
// Some elements contain other nodes.
// Some elements contain text nodes.
// Some elements consain attribute nodes.