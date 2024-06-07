const { useState } = React;

function App() {
const [weather, setWeather] = useState(null);
const [location, setLocation] = useState('');

const fetchWeather = async () => {
const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual Open Weather Map API key
try {
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
if (!response.ok) {
throw new Error('City not found');
}
const data = await response.json();
setWeather(data);
} catch (error) {
console.error(error.message);
setWeather(null);
}
};

return (
<div className="container">
<h1>Weather App</h1>
<input
type="text"
placeholder="Enter city name"
value={location}
onChange={(e) => setLocation(e.target.value)}
/>
<button onClick={fetchWeather}>Get Weather</button>
{weather && (
<div id="weatherInfo">
<h2>{weather.name}</h2>
<p>Temperature: {weather.main.temp}°C</p>
<p>Date: {new Date().toLocaleDateString()}</p>
<p>Time: {new Date().toLocaleTimeString()}</p>
</div>
)}
</div>
);
}

ReactDOM.render(<App />, document.getElementById('root'));

    