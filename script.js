document.addEventListener("DOMContentLoaded", function () {
    const getWeatherButton = document.getElementById("weather");
    const cityInput = document.getElementById("city");
    const weatherData = document.getElementById("weatherData");

    getWeatherButton.addEventListener("click", function () {
        const cityName = cityInput.value;

        // Replace 'YOUR_API_KEY' with your actual API key.
        const apiKey = "23a2652b429d0811593ec1c473bc54f3";

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                const result = `Temperature: ${temperature} K<br>Weather: ${description}`;
                weatherData.innerHTML = result;
            })
            .catch((error) => {
                weatherData.innerHTML = "Error: The city was not found";
            });
    });
});
