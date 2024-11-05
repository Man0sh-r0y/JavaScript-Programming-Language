# Event Loop

> **Best Visual Event Loop Explanation:** [Click Here](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

> ###### Read about Event Loop: [Click Here](https://www.javascripttutorial.net/javascript-event-loop/)

# **JavaScript Event Loop**

**Summary**: in this tutorial, you’ll learn about the event loop in JavaScript and how JavaScript achieves the concurrency model based on the event loop.

## **JavaScript single-threaded model**

JavaScript is a single-threaded programming language. This means that JavaScript can do only one thing at a single point in time.

The JavaScript engine executes a script from the top of the file and works its way down. It creates the [execution contexts](https://www.javascripttutorial.net/javascript-execution-context/), and pushes, and pops functions onto and off the [call stack](https://www.javascripttutorial.net/javascript-call-stack/) in the execution phase.

If a function takes a long time to execute, you cannot interact with the web browser during the function’s execution because the page hangs.

A function that takes a long time to complete is called a blocking function. Technically, a blocking function blocks all the interactions on the webpage, such as mouse clicks.

An example of a blocking function is a function that calls an API from a remote server.

The following example uses a big loop to simulate a blocking function:

```jsx
function task(message) {
// emulate time consuming tasklet n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

console.log('Start script...');
task('Call an API');
console.log('Done!');Code language: JavaScript (javascript)
```

In this example, we have a big [`while`](https://www.javascripttutorial.net/javascript-while-loop/) loop inside the `task()` function that emulates a time-consuming task. The `task()` function is a blocking function.

The script hangs for a few seconds (depending on how fast the computer is) and issues the following output:

```
Start script...
Download a file.
Done!
```

To execute the script, the JavaScript engine places the first call `console.log()` on top of the call stack and executes it. Then, it places the `task()` function on top of the call stack and executes the function.

However, it’ll take a while to complete the `task()` function. Therefore, you’ll see the message `'Download a file.'` a little time later. After the `task()` function completes, the JavaScript engine pops it off the call stack.

Finally, the JavaScript engine places the last call to the `console.log('Done!')` function and executes it, which will be very fast.

![https://www.javascripttutorial.net/wp-content/uploads/2019/12/javascript-event-loop-callstack.png](https://www.javascripttutorial.net/wp-content/uploads/2019/12/javascript-event-loop-callstack.png)

## **Callbacks to the rescue**

To prevent a blocking function from blocking other activities, you typically put it in a [callback function](https://www.javascripttutorial.net/javascript-callback/) for execution later. For example:

```jsx
console.log('Start script...');

setTimeout(() => {
    task('Download a file.');
}, 1000);

console.log('Done!');Code language: JavaScript (javascript)
```

In this example, you’ll see the message `'Start script...'` and `'Done!'` immediately. And after that, you’ll see the message `'Download a file'`.

Here’s the output:

```
Start script...
Done!
Download a file.
```

As mentioned earlier, the JavaScript engine can do only one thing at a time. However, it’s more precise to say that the JavaScript runtime can do one thing at a time.

The web browser also has other components, not just the JavaScript engine.

When you call the [`setTimeout()`](https://www.javascripttutorial.net/javascript-bom/javascript-settimeout/) function, make a [fetch request](https://www.javascripttutorial.net/web-apis/javascript-fetch-api/), or click a button, the web browser can do these activities concurrently and asynchronously.

The [`setTimeout()`](https://www.javascripttutorial.net/javascript-bom/javascript-settimeout/), fetch requests and [DOM](https://www.javascripttutorial.net/javascript-dom/) events are parts of the [Web APIs](https://www.javascripttutorial.net/web-apis/) of the web browser.

In our example, when calling the `setTimeout()` function, the JavaScript engine places it on the call stack, and the Web API creates a timer that expires in 1 second.

![https://www.javascripttutorial.net/wp-content/uploads/2019/12/javascript-event-loop-step-1.png](https://www.javascripttutorial.net/wp-content/uploads/2019/12/javascript-event-loop-step-1.png)

Then JavaScript engine places the `task()` function into a queue called a callback queue or a task queue:

![https://www.javascripttutorial.net/wp-content/uploads/2019/12/javascript-event-loop-step-2.png](https://www.javascripttutorial.net/wp-content/uploads/2019/12/javascript-event-loop-step-2.png)

The event loop is a constantly running process that monitors both the callback queue and the call stack.

If the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the call stack. If the callback queue is empty, nothing will happen:

![https://www.javascripttutorial.net/wp-content/uploads/2019/12/javascript-event-loop-step-3.png](https://www.javascripttutorial.net/wp-content/uploads/2019/12/javascript-event-loop-step-3.png)

See another example:

```jsx
console.log('Hi!');

setTimeout(() => {
    console.log('Execute immediately.');
}, 0);

console.log('Bye!');
Code language: JavaScript (javascript)
```

In this example, the timeout is 0 seconds, so the message `'Execute immediately.'` should appear before the message `'Bye!'`. However, it doesn’t work like that.

The JavaScript engine places the following function call on the callback queue and executes it when the call stack is empty. In other words, the JavaScript engine executes it after the `console.log('Bye!')`.

```jsx
console.log('Execute immediately.');Code language: JavaScript (javascript)
```

Here’s the output:

```
Hi!
Bye!
Execute immediately.
```

The following picture illustrates JavaScript runtime, Web API, Call stack, and Event loop:

![https://www.javascripttutorial.net/wp-content/uploads/2019/12/javascript-event-loop.png](https://www.javascripttutorial.net/wp-content/uploads/2019/12/javascript-event-loop.png)
