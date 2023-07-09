// Write a function to fetch data from an API using the Fetch API and handle the response with a callback.

const cityName = "Kolkata";
const API_ID = "2563fabe08bfb9f5228d101b9479a4d0";
fetchWeather(cityName, callBack); // fecthing the current weather of the city

async function fetchWeather(cityName, callBack) {// fecthing weather details from the API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_ID}&units=metric`)
        .then(response => response.json())
        .then(data => callBack(data));
}

function callBack(data) {
    if (data?.message === "city not found") {// ?. => optional chaining operator
        console.log("city not found");
    }
    else {
        printWeatherData(data);
    }
}

function printWeatherData(data) {
    let temperature = data?.main?.temp;
    let tempFeelsLike = data?.main?.feels_like;
    let humidity = data?.main?.humidity;
    let windSpeed = data?.wind?.speed;
    let weatherDesc = data?.weather?.[0]?.description;
    let cloudiness = data?.clouds?.all;
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Temperature Feels like: ${tempFeelsLike}°C`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Wind speed: ${windSpeed} mph`);
    console.log(`Weather: ${weatherDesc}`);
    console.log(`Cloudiness: ${cloudiness}%`);
}
