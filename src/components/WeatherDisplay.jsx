import React from "react";
import { useWeather } from "../hooks/useWeather";

const WeatherDisplay = () => {
    const {data, loading, error} = useWeather();
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if(data) return (
        <div className="weather-display">
            <h2>Weather in {data.city}</h2>
            <p>Temperature: {data.temperature}°C</p>
            <p>Condition: {data.condition}</p>
        </div>
    );
    return <p>Please search for a city to display weather.</p>;
}
export default WeatherDisplay;