let parent = document.querySelector('#list');

let newElement = document.createElement('h1') //create h1 
// add content in h1 
let content = document.createTextNode("Above are the List Items");// The createTextNode() method creates a text node.
newElement.appendChild(content);// The appendChild() method appends a node (element) as the last child of an element.

parent.appendChild(newElement);