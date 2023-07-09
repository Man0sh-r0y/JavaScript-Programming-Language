// Write a function that uses async/await to make an API call to fetch data and returns a promise with the response.

const apiKey = "064aaf0e54cd70ed681dfdee7591763a";
const category = "health";// More category: general, world, nation, business, technology, entertainment, sports, science, health.
const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apiKey;
// here I'm using google news api

fetchData(url)
    .then(data => {
        // printing the 1st article data
        console.log(`Title : ${data?.articles?.[0]?.title}`);
        console.log(`Description : ${data?.articles?.[0]?.description}`); 
    })
    .catch(error => {
        console.log(error);
    });


async function fetchData() {
    try {
        let response = await fetch(url);// waiting for fetching data from url
        let data = await response.json();// converting to the JSON format
        return data;
    }
    catch(error) {
        return Promise.reject(error);// it returns a new promise object that is rejected with the error
    }
}