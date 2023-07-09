// There are two ways of event propagation in the HTML DOM, bubbling and capturing.

// Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

// In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

function printEventTargetName(event) {
     alert("Event Target = " + event.target.tagName + ", Current Event target = " + event.currentTarget.tagName);
}

// The target property returns the element where the event occured.
// The target property is read-only.
// The tagName property returns the tag name of an element.
// The tagName property returns the tag name in UPPERCASE.
// The tagName property is read-only.
//The currentTarget property returns the element whose event listener triggered the event.
//The currentTarget property is read-only.


// Difference between target & currentTarget:
// currentTarget tells us on which element the event was attached or the element whose eventListener triggered the event. 
// Event target tells where the event started.Suppose there's an event which shows an alert on click of the element.

let child = document.querySelector('.child');
child.addEventListener('click',printEventTargetName);// OUTPUT: Event Target = P, Current Event target = DIV

child.parentNode.addEventListener('click',printEventTargetName);// OUTPUT: Event Target = P, Current Event target = SPAN

child.parentNode.parentNode.addEventListener('click',printEventTargetName);// OUTPUT: Event Target = P, Current Event target = SECTION

 