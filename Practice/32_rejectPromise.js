// Write a function that returns a promise which rejects with a specified error message after a specified number of milliseconds.

function rejectPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("The Promise is rejected"));
        }, 2000);
    });
}

rejectPromise().catch(error => {
    console.log(error);
});