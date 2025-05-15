import WeatherDisplay from "./components/WeatherDisplay";
import useWeather from "./hooks/useWeather";
import { useState } from "react";
import getBackgroundClass from "./utils/getBackgroundClass";

function App() {
  const [city, setCity] = useState("");
  const { state, fetchWeather } = useWeather();
  
  const handleSearch = () => {
    if (city) {
      fetchWeather(city);
    }
  };
  
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  // Get weather condition for background
  let backgroundClass = "bg-default";
  if (state.data && state.data.weather && state.data.weather[0]) {
    const weatherType = state.data.weather[0].main.toLowerCase();
    backgroundClass = getBackgroundClass(weatherType);
  }

  return (
    <div className={`flex flex-col items-center min-h-screen p-4 ${backgroundClass}`}>
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white mt-10">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Weather App</h1>
        <div className="flex mb-6">
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city name"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            required
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          > 
            Search
          </button>
        </div>
        <WeatherDisplay />
      </div>
    </div>
  )
}

export default App