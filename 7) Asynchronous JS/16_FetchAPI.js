// The fetch() method starts the process of fetching a resource from a server.
// The fetch() method returns a Promise that resolves to a Response object.
// fetch() method instructs the web browsers to send a request to a URL.
// The fetch() requires only one parameter which is the URL of the resource that you want to fetch
// The fetch() method returns a Promise so you can use the then() and catch() methods to handle it
// When the request completes, the resource is available.
// At this time, the promise will resolve into a Response object.
// The Response object is the API wrapper for the fetched resource.
// The Response object has a number of useful properties and methods to inspect the response.
// If the contents of the response are in the raw text format, you can use the text() method.
// The text() method returns a Promise that resolves with the complete contents of the fetched resource

// The Response object provides the status code and status text
// When a request is successful, the status code is '200' and status text is 'OK'
// If the requested resource doesn’t exist, the response code is 404 and statusText will be 'Not found'

let p = fetch("https://goweather.herokuapp.com/weather/MDS");// we can get the data from this network request
p.then(response => {
    console.log(response.status);// status code
    console.log(response.statusText);// status text
    console.log(response.ok);
    return response.json();// JSON stands for JavaScript Object Notation
    // so the format of response would be like javascript object
}).then(result => console.log(result));// returned json will be printed

// JSON is a lightweight format for storing and transporting data
// JSON is often used when data is sent from a server to a web page
// JSON is "self-describing" and easy to understand

