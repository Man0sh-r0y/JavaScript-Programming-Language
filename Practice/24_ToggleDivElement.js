// Write a function to toggle the display of a div element on click event.

function toggleDisplay(elementID) {
    let element = document.querySelector(elementID);
    if (element.style.display === "none") 
        element.style.display = "block";
    else 
        element.style.display = "none";
    
}

// HTML :
//    <div>
//        <div id="childDiv">This is a div element</div>
//        <button onclick="toggleDisplay('#childDiv')">Toggle Div element</button>
//    </div>