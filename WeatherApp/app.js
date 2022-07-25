const api = 'd4a13f0215b18dfc914bb02692e8b8ac';

const loc = document.querySelector('.location-timezone');
const iconImg = document.getElementById('weather-icon');
const tempC = document.querySelector('.temperature-degree');
const desc = document.querySelector('.temperature-des');

window.addEventListener('load', () => {
    let long;
    let lat;
    // Accesing Geolocation of User
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Storing Longitude and Latitude in variables
        long = position.coords.longitude;
        lat = position.coords.latitude;
        const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
  
        // Using fetch to get data
        fetch(base)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const {temp, feels_like} = data.main;
            const place = data.name;
            const {description , icon} = data.weather[0];
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            
            iconImg.src = iconUrl;
            loc.textContent = `${place}`;
            desc.textContent = `${description}`;
            tempC.textContent = `${temp} °C`;
            
          });
      });
    }
  });