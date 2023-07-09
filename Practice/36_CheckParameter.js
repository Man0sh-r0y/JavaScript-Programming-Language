// Write a function that throws an error if the parameter is not a number, and handles the error with a custom error message.

function checkParameter(num) {
    return new Promise((resolve, reject) => {
        if(typeof num === "number") {
            resolve(`${num} is a number`);
        } 
        else {
            reject(new Error(`${num} is not a number`));
        }
    });
}

checkParameter(5)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
