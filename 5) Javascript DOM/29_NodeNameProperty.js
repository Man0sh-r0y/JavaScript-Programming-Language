// The nodeName property returns the name of a node:

/* 
 The tagname (in upper case) for element nodes
 The attribute name for attribute nodes
 #text for text nodes
 #comment for comment nodes
 #document for document nodes
 The nodeName property is read-only.
*/

let element = document.getElementById('myID');
console.log(element.nodeName);// DIV
console.log(element.nodeValue);// null
console.log(element.nodeType);// 1

let childNode = element.firstChild;
// The firstChild property returns the first child node of a node.
// The firstChild property returns a node object.
// The firstChild property is read-only.
// The firstChild property is the same as childNodes[0].
console.log(childNode.nodeName);// #text
console.log(childNode.nodeValue);// This is My ID
console.log(childNode.nodeType);// 3

// What is nodeType :

// The nodeType property returns the node type, as a number, of the specified node.
// If the node is an element node, the nodeType property will return 1.
// If the node is an attribute node, the nodeType property will return 2.
// If the node is a text node, the nodeType property will return 3.
// If the node is a comment node, the nodeType property will return 8.
// This property is read-only.

// What is nodeValue:

//The nodeValue property sets or returns the value of a node.
//If the node is an element node, the nodeValue property will return null.

// nodeName vs tagName:

// nodeName and tagName are the properties to get the name of HTML node. 
// tagName is used to get the type of element nodes that have node type of 1. 
// For other type of nodes such as attribute, comment, text, .etc, nodeName is used to get the name of node.
