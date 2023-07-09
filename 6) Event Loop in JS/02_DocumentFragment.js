// The DocumentFragment interface is a lightweight version of the Document that stores a piece of document structure like a standard document.
// However, a DocumentFragment isn’t part of the active DOM tree.

// If you make changes to the document fragment,
// it doesn’t affect the document or incurs any performance.

// To create a new document fragment, you use the DocumentFragment constructor like this:
//let fragment = new DocumentFragment();

// Or you can use the createDocumentFragment() method of the Document object:
//let fragment = document.createDocumentFragment();

let fragment = document.createDocumentFragment();
let languages = ['JS', 'TypeScript', 'Elm', 'Dart','Scala'];
let langElement = document.querySelector('#language')

languages.forEach((language) => {
    let li = document.createElement('li');
    li.innerHTML = language;
    fragment.appendChild(li);
})

langElement.appendChild(fragment);
