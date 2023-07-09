// Write a function that uses async/await to make multiple API calls in parallel and returns a promise with an array of responses.

const URLs = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/comments/1",
    "https://jsonplaceholder.typicode.com/albums/1"
];

makeMultipleCall(URLs)
    .then(datas => {
        datas.forEach(data => {
            console.log(data);
        });
    })
    .catch(error => {
        console.log(error);
    });

async function makeMultipleCall(URLs) {
    try {
        const responses = await fetchUrl(URLs);
        let datas = await fetchData(responses);
        return datas;       
    } 
    catch (error) {
        console.log(error);
    }
}

async function fetchUrl(URLs) {
    let responses = [];
    for (let url of URLs) {
        let response = await fetch(url);
        responses.push(response);
    }
    return responses;
}

async function fetchData(responses) {
    let datas = [];
    for (let response of responses) {
        let data = await response.json();
        datas.push(data);
    }
    return datas;
}