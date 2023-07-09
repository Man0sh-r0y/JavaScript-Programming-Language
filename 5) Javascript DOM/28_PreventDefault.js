// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

// For example, this can be useful when:

// Clicking on a "Submit" button, prevent it from submitting a form
// Clicking on a link, prevent the link from following the URL
// Note: Not all events are cancelable. Use the cancelable property to find out if an event is cancelable.

let myLink = document.getElementById('fbLink');
myLink.addEventListener("click", event => event.preventDefault());