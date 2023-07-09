// The removeEventListener() method removes event handlers that have been attached with the addEventListener() method

let btn = document.getElementById('btn');

btn.addEventListener("click", myFunction);

function myFunction() {
    alert("You clicked the button");
}

btn.removeEventListener("click", myFunction);