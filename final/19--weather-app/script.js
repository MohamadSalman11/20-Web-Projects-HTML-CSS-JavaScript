const place = document.querySelector(".place");
const search = document.querySelector(".search");
const windDir = document.querySelector(".wind-dir");
const humidity = document.querySelector(".humidity");
const currentTemp = document.querySelector(".current-temp");
const weatherIcon = document.querySelector(".weather-icon");

function getData(location) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=428ab1996bfd410fa7e181745232703&q=${location}&aqi=no`
  )
    .then((res) => res.json())
    .then((data) => replaceData(data));
}

function replaceData(data) {
  console.log(data);
  weatherIcon.src = `https:${data.current.condition.icon.replaceAll(64, 128)}`;
  place.textContent = data.location.country;
  currentTemp.textContent = `${data.current.temp_c}°C`;
  humidity.textContent = `${data.current.humidity}%`;
  windDir.textContent = `${data.current.wind_dir}`;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getData(search.value);
    search.value = "";
  }
});

getData("Germany");
