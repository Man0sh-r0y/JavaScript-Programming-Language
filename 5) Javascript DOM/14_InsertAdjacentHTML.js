// The insertAdjacentHTML() method inserts HTML code into a specified position.
let parent = document.querySelector('#list');// select the id element whose name is list

// Create Child 
let child1 = document.createElement('li');
let content1 = document.createTextNode("Manash Roy");
child1.appendChild(content1);// The appendChild() method appends a node (element) as the last child of an element.

// As a Element we can send our element 
parent.insertAdjacentElement('beforeend', child1);// Before the end of the element (last child)
parent.insertAdjacentElement('beforebegin', child1);// Before the element
parent.insertAdjacentElement('afterend', child1);// After the element
parent.insertAdjacentElement('afterbegin',child1);// After the beginning of the element (first child)

