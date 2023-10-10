
const apikey = "9c9fd2fe863a32d9daa75259d394c50d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchicon = document.querySelector(".search i");
const weathericon = document.querySelector(".weather-icon");
const error = document.querySelector(".error");
error.style.display = "none"


async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    if (response.status == 404) {
        error.style.display = "block";
        document.querySelector('.humidity').innerHTML = "0%";
        document.querySelector('.wind').innerHTML = "0 Km/h";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        error.style.display = "none";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "clouds.png";
            document.querySelector('body').classList.add("cloud");
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "clear.png";
            document.querySelector('body').classList.add("clear");
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "rain.png";
            document.querySelector('body').classList.add("rain");
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "drizzle.png";
            document.querySelector('body').classList.add("drizzle");
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "mist.png";
            document.querySelector('body').classList.add("mist");
        }

        document.querySelector(".weather").classList.add("active");
    }
}

searchicon.addEventListener('click', () => {
    checkweather(searchbox.value);
})