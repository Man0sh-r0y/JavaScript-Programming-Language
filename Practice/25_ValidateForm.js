// Write a function to validate a form on submit event.
const Name = document.getElementById('name');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
const form = document.getElementById('myForm');

function validateForm(event) {
    if (Name.value === '' || Name.value == null) 
        alert("Name is required");
    if (password.value === '' || password.value == null)
        alert("Password is required");
    if (password.value!='' && password.value.length <= 4)
        alert("Password must be greater than 4");
}

form.addEventListener("submit", validateForm);