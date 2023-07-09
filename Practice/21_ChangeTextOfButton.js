// Write a function to change the text of a button on the click event.

let button = document.getElementById('btn');
button.addEventListener("click", changeButtonText);

function changeButtonText() {
    if(button.textContent==="Submit")
        button.textContent = "submited";
    else
        button.textContent="Submit"
}