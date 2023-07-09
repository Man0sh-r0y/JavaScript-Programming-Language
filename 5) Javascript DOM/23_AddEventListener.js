// An event listener in JavaScript is a way that you can wait for user interaction like a click or keypress
//and then run some code whenever that action happens.
//One common use case for event listeners is listening for click events on a button

//The addEventListener() method attaches an event handler to the specified element.
//The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

//Syntax: element.addEventListener(event, function, useCapture);

//The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
//The second parameter is the function we want to call when the event occurs.
//The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

let btn = document.getElementById('btn');

btn.addEventListener("click", myFunction);

function myFunction() {
    alert("You clicked the button");
}

// The addEventListener() method allows you to add many events to the same element, without overwriting existing events

// What is Event Bubbling or Event Capturing?
// There are two ways of event propagation in the HTML DOM, bubbling and capturing.

// Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

// In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

// In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

btn.addEventListener("click", myFunction, true);
// The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.