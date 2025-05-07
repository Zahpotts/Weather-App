import WeatherDisplay from "./components/WeatherDisplay";
import useWeather from "./hooks/useWeather";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const { state, fetchWeather } = useWeather();
  return (
    <div>
      <h1>Weather App</h1>
      <div>
        {/* Add an input element for the city */}
        {/* Add an button element to handle search */}
      </div>
      <WeatherDisplay />
    </div>
  )
}

export default App
