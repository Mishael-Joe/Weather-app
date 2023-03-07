let weather = {
    "apikey": "3a3d4cd1b98f817427cab8e6fc56692a",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apikey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        //console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = `weather in ${name}`;
        document.querySelector(".temp").innerText = `${temp}°C`;
        document.querySelector(".description").innerText = `${description}`;
        document.querySelector(".icon").innerText = `${icon}`;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        document.querySelector(".wind").innerText = `Wind speed: ${speed}km/h`;
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?" + name + ")"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("lagos");

// const successCallback = (position) => {
//     console.log(position);
//     //const {lat, lan} = 
// };
  
// const errorCallback = (error) => {
//     console.log(error);
// };
  
// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);



