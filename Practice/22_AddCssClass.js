// Write a function to add a CSS class to an element on the mouseover event.

// What is mouseover?
// A mouseover is an event that occurs in a Graphical User Interface (GUI) 
// when the mouse pointer is moved over an object on the screen such as an icon, a button, text box, or even the edge of a window.

function addCSSclass(elementID, newClass) {
        let element = document.querySelector(elementID);
        document.addEventListener("mouseover", () => {
        element.classList.add = newClass;
        element.style.backgroundColor = 'aqua';
    });
}

addCSSclass("#myPara", "ChangeColor");
