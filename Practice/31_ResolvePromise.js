// Write a function that returns a promise which resolves after a specified number of milliseconds

function resolvePromise() {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('The Promise is resolved');
        }, 3000);
    });
}

resolvePromise().then( result => {
    console.log(result);
});