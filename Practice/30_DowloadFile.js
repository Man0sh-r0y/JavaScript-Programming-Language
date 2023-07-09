// Write a function to download a file asynchronously and handle the progress and completion events with callbacks.

// ** Important ** => I have not understood it completely yet. And this code is not running fully

const url = "https://dot-batch-project-assets.vercel.app/devdetective-images.zip";

downloadFile(url);



function downloadFile(url) {
    const request = new XMLHttpRequest();// XMLHttpRequest is a built-in browser object that allows to make HTTP requests in JavaScript
    // It creates a new XMLHttpRequest object, 
    // which is used to make HTTP requests to a server.
    // In this case, it is used to download a file from the specified URL.
    // there is a more modern way to send requests to the server that is fetch api,
    // but Fetch API cannot yet provide tracking of the progress of sending to the server
    request.open("GET", url); // initialize the created object
    // HTTP-method. Usually "GET" or "POST".
    // It is opening a new HTTP request to the specified URL using the GET method.
    // This method is used to retrieve data from the server.
    request.responseType = "blob"; // Specify the response type as blob
    // It is setting the response type of the XMLHttpRequest object to "blob". 
    // This means that the response from the server will be treated as a binary large object (blob) instead of a text string.
    // This is useful when downloading files, as it allows the downloaded data to be easily saved as a file on the client side.

    request.addEventListener("progress", (event) => { // Calculate the progress percentage and invoke the progress callback
        const progress = Math.round((event.loaded / event.total) * 100);
        //It is calculating the progress percentage of the file download. 
        // It takes the `event.loaded` property, which represents the number of bytes that have been downloaded so far,
        //and divides it by the `event.total` property, which represents the total number of bytes in the file being downloaded.
        console.log(`Download progress: ${progress}%`);
    });

    request.addEventListener("load", () => {
        // Invoke the completion callback with the downloaded blob object
        console.log(`File downloaded. Blob size: ${request.response.size} bytes`); // when 'load' will be finished, this will be executed
    });

    request.send();// It  is sending the HTTP request to the server to download the file.
}
