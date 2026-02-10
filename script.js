const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

const cityEl = document.querySelector(".card-title");
const temperatureEl = document.querySelector(".temp");
const humidityEl = document.querySelector(".humidity");
const messageEl = document.querySelector(".message");
const iconEl = document.querySelector(".weather-icon");

searchButton.addEventListener("click", fetchWeather);

// Cidade padrão ao carregar
window.addEventListener("DOMContentLoaded", () => {
  cityInput.value = "Gravataí";
  fetchWeather();
});

function fetchWeather() {
  const city = cityInput.value.trim();

  if (city === "") {
    alert("Digite o nome de uma cidade");
    return;
  }

  // Geocoding API
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=pt`;

  fetch(geoUrl)
    .then(response => response.json())
    .then(geo => {
      if (!geo.results) {
        alert("Cidade não encontrada");
        return;
      }

      const latitude = geo.results[0].latitude;
      const longitude = geo.results[0].longitude;
      const cityName = geo.results[0].name;

      // Weather API
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m`;

      fetch(weatherUrl)
        .then(response => response.json())
        .then(weather => {
          cityEl.innerText = cityName;
          temperatureEl.innerText = `${Math.round(weather.current_weather.temperature)} °C`;

          const humidity = weather.hourly.relativehumidity_2m[0];
          humidityEl.innerText = `Umidade: ${humidity}%`;

          let message = "";

          if (weather.current_weather.weathercode >= 51 && weather.current_weather.weathercode <= 67) {
            message = "🌧️ Vai chover! Leve um guarda-chuva.";
          } else if (weather.current_weather.temperature < 15) {
            message = "Está frio! Use casaco e roupas quentes. 🧥";
          } else if (weather.current_weather.temperature < 25) {
            message = "Clima agradável! Use roupas leves.";
          } else {
            message = "Está quente! Use roupas leves e hidrate-se. 🥵";
          }

          messageEl.innerText = message;

          const code = weather.current_weather.weathercode;

          if (code === 0) {
            iconEl.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
          } else if (code <= 3) {
            iconEl.src = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
          } else if (code <= 48) {
            iconEl.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
          } else if (code <= 67) {
            iconEl.src = "https://cdn-icons-png.flaticon.com/512/3076/3076129.png";
          } else {
            iconEl.src = "https://cdn-icons-png.flaticon.com/512/1779/1779940.png";
          }
        });
    })
    .catch(error => {
      console.error("Erro ao buscar clima", error);
      messageEl.innerText = "Erro ao carregar os dados";
    });
}
