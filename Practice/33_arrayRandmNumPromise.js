// Write a function that returns a promise which resolves with an array of random numbers after a specified number of milliseconds.

function getRandmNumbersArray(length, delay) {
    return new Promise((resolve, reject) => {
        // as we want to generate it after a specifies number of milliseconds
        setTimeout(() => {
            const randomNumbersArray = [];
            for (let i = 0; i < length; i++) {
                randomNumbersArray.push(Math.floor(Math.random() * 100));// generating random numbers between 0 and 100
            }
            resolve(randomNumbersArray);// resolves with an array of random numbers
        }, delay);
        
    });
}

getRandmNumbersArray(10, 2000)
    .then((randomNumbersArray) => {
        console.log(randomNumbersArray); // the random numbers array is going to print in the console
    })
    .catch((error) => {
        console.log(error);
    });