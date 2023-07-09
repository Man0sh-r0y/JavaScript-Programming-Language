// JavaScript can send network requests to the server and load new information whenever it’s needed.

// For example, we can use a network request to:

// Submit an order,
// Load user information,
// Receive latest updates from the server,
// …etc.
// …And all of that without reloading the page!

// POST call with fetch api

let user = {// User details
    name: 'Manash',
    surName: 'Roy;',
    userID: 1,
    weight: 70
    // We will gonna be sent this 4 property to the network (link given into the fetch parameter)
    // for storing the data on the database in the link
};

let options = {// options to be sent as parameter in fetch()
    // This is the format / Syntax in which I can send user data to the network
    method: 'POST',
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(user) // convert Javascript object to string
};

// Without 'options', this is a simple GET request, downloading the contents of the url (Sent as parameter in fetch()).

async function createPostRequest() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', options);// Got it by searching 'Free Fetch API'
    return response.json(); // javascript object format
};

let result = createPostRequest();
console.log(result);