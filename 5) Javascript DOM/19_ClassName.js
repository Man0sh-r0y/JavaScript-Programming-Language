// The className property sets or returns an element's class attribute.

let element = document.getElementById('list');
console.log(element.className);
console.log(typeof element.className);

// Overwrite an existing class attribute with a new one:
element.className = 'myClass';

// To add new classes, without overwriting existing values
element.className += 'SecondClassName';