//  We have seen a lot of Events like click event, mouse event etc. But we can create our custom event though.

// To generate an custom event, you follow these steps:
// First, create a new Event object using Event constructor.
// Then, trigger the event using element.dispatchEvent() method.

//To create a new event, you use the Event constructor like this:

let event = new Event(type, [, options]);
// type is a string that specifies the event type such as 'click'.
//options is an object with two optional properties:
//bubbles: It is a boolean value that determines if the event bubbles or not. If it is true then the event is bubbled and vice versa.
//cancelable: It is also a boolean value that specifies whether the event is cancelable when it is true. Then the “default action” may be prevented.
// By default both are false {bubbles: false, cancelable: false}.


// What is Event Bubbling?
/* 
Event Bubbling is a concept in the DOM (Document Object Model). 
It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) 
to its parent and ancestor elements in the DOM tree until it gets to the root element.

This is the default behavior of events on elements unless you stop the propagation 
*/

// The cancelable event property returns true if an event is cancelable.
// Otherwise it returnsfalse.
// The cancelable event property is read-only.
// An event is cancelable if it is possible to prevent its default action.

function printEventCurrentTargetName() {
    alert('This is My Custom Event for ' + clickEvent.currentTarget.tagName);
}

let btn = document.querySelector('#myBtn');

let clickEvent = new Event('myCustomEvent');
btn.addEventListener('myCustomEvent', printEventCurrentTargetName);
btn.dispatchEvent(clickEvent);// OUTPUT:  This is My Custom Event for BUTTON

btn.parentNode.addEventListener('myCustomEvent', printEventCurrentTargetName);
btn.parentNode.dispatchEvent(clickEvent); // OUTPUT: This is My Custom Event for DIV

btn.parentNode.parentNode.addEventListener('myCustomEvent',printEventCurrentTargetName);
btn.parentNode.parentNode.dispatchEvent(clickEvent); // OUTPUT: This is My Custom Event for SECTION

btn.parentNode.parentNode.parentNode.addEventListener('myCustomEvent', printEventCurrentTargetName);
btn.parentNode.parentNode.parentNode.dispatchEvent(clickEvent); // OUTPUT: This is My Custom Event for BODY

btn.parentNode.parentNode.parentNode.parentNode.addEventListener('myCustomEvent', printEventCurrentTargetName);
btn.parentNode.parentNode.parentNode.parentNode.dispatchEvent(clickEvent); // OUTPUT: This is My Custom Event for HTML

// Here event bubbling is happening. The event applied on button is bubbling up to its parent and ancestor element

// OUTPUT:
// This is My Custom Event for BUTTON
// This is My Custom Event for DIV
// This is My Custom Event for SECTION
// This is My Custom Event for BODY
// This is My Custom Event for HTML