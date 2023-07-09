// Write a function to load an image asynchronously and handle the load event with a callback.


let url = "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg";

loadImage(url, callBack);



function loadImage(url, callBack) {
    var img = new Image();
    // It creates a new `Image` object,
    // which is used to represent an HTML image element.
    // This object can be used to load and manipulate images in JavaScript.
    img.src = url; // setting image source
    img.addEventListener("load", () => {// It is an event handler that is triggered when theimage    has finished loading. 
        callBack(null,img); // It is an event handler that is triggered when the image has finished loading
    });
    // if wrror happened
    img.addEventListener("error", () => {
        callBack(new Error(`Failed to Load Image at ${url}`), null); 
    });
}

function callBack(error, img) {
    if (error) {
        console.log(error);
        return;
    }
    // if error not happened
    img.style.width = '300px';
    img.style.height = '300px';
    document.body.appendChild(img); // showing the image in the UI
}





