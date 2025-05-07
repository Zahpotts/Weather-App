import WeatherDisplay from "./components/WeatherDisplay";
import useWeather from "./hooks/useWeather";
import { useState } from "react";

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
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-4">
    <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white mt-10">

      <h1 className="text-3xl font-bold text-center text-weather-primary mb-6">Weather App</h1>
      <div className="mb-6">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
