// Write a function to remove a CSS class from an element on scroll event.

function removeCSSclass(elementID, className) {
    let element = document.getElementById(elementID);
    element.classList.remove(className);
}

removeCSSclass("myPara", "para");
