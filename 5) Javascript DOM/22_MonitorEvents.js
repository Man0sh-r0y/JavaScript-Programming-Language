// RUN CODE IN BROWSER CONSOLE WINDOW 
// WE CAN SEE all events 
console.log(monitorEvents(document));// all the evenets will be shown

// This prints all events emitted by document to the console. Use unmonitorEvents to stop monitoring events.

// will not be shown any events 
console.log(unmonitorEvents(document));

//What is an Event ?
// JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. 
//When the page loads, it is called an event.When the user clicks a button, that click too is an event.