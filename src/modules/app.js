import { fetchWeather, getWeather } from "./weatherAPI";

const locationForm = document.querySelector(".location-form");
const location = document.getElementById("location");
const locationBtn = document.querySelector(".location-btn");
const changeMetric = document.querySelector(".change-metric");
const changeDiv = document.querySelector(".change");

const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

let locationValue;
let units = "metric";

locationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (location.value == "") return;
  locationValue = location.value;
  const temp = fetchWeather(locationValue, units);
  temp
    .then((data) => {
      displayWeather(data);
    })
    .catch(() => {
      clearDisplay();
    });
});

changeMetric.addEventListener("click", () => {
  changeDiv.classList.toggle("right");
  if (units == "metric") {
    units = "imperial";
  } else {
    units = "metric";
  }

  if (locationValue == "" || locationValue == undefined) return;
  const temp = fetchWeather(locationValue, units);
  temp
    .then((data) => {
      displayWeather(data);
    })
    .catch(() => clearDisplay());
});

const displayWeather = (data) => {
  city.textContent = data.name;
  temperature.textContent = `Temperature: ${data.main.temp}`;
  feelsLike.textContent = `Feels like: ${data.main.feels_like}`;
  humidity.textContent = `Humidity: ${data.clouds.all}%`;
  wind.textContent = `Wind: ${data.wind.speed} m/h`;
};

const clearDisplay = () => {
  city.textContent = "City not found";
  temperature.textContent = "";
  feelsLike.textContent = "";
  humidity.textContent = "";
  wind.textContent = "";
  locationValue = "";
  location.value = "";
};
