document.addEventListener('DOMContentLoaded', () => {
const searchBtn = document.getElementById('search');
const cityInput = document.getElementById('city');
const weatherInfo = document.getElementById('weather-info');
// Clé API fictive (utiliser votre propre clé en production)
const apiKey = 'votre_cle_api';
searchBtn.addEventListener('click', () => {
const city = cityInput.value.trim();
if (!city) return;
fetchWeather(city);});
async function fetchWeather(city) {
try {
weatherInfo.innerHTML = '<p>Chargement...</p>';
// Appel API fictif (remplacer par une vraie API en production)
// const response = await
fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
// const data = await response.json();
// Simulation de réponse pour démonstration
const data = {
location: { name: city, country: 'France' },
current: { temp_c: 22, condition: { text: 'Ensoleillé' } }
};
displayWeather(data);
} catch (error) {
weatherInfo.innerHTML = '<p>Erreur de chargement des données météo</p>';
console.error('Erreur:', error);
}
}
function displayWeather(data) {
const html =`
<h2>${data.location.name}, ${data.location.country}</h2>
<p class="temp">${data.current.temp_c}°C</p>
<p class="condition">${data.current.condition.text}</p>`
;
weatherInfo.innerHTML = html;
}
});