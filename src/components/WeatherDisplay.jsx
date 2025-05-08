import React, {useContext} from "react";
import WeatherContext from "../context/WeatherContext";

const WeatherDisplay = () => {
    const {state} = useContext(WeatherContext);
    const {data, loading, error} = state;
    
    if (loading) return <div className="text-center py-4">Loading...</div>;
    if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;
    
    if(data) {
        const {name, main, weather} = data;
        const temperature = main.temp;
        const condition = weather[0]?.description;
        
        return(
            <div className="weather-display p-6 rounded-lg bg-white/80 shadow-md transition">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Weather in {name}</h2>
                <p className="text-xl mb-2 text-gray-700">Temperature: {temperature}°F</p>
                <p className="text-lg text-gray-700">Condition: {condition}</p>
            </div>
        );
    }
    
    return <p className="text-center py-4 text-gray-500">Please search for a city to display weather.</p>;
}

export default WeatherDisplay;