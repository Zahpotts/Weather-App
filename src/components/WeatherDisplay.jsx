import React, {useContext} from "react";

import WeatherContext from "../context/WeatherContext";

const WeatherDisplay = () => {
    const {state} = useContext(WeatherContext);
    
    const {data, loading, error} = state;
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if(data) {
        const {name, main, weather} = data;
        const temperature = main.temp;
        const condition = weather[0]?.description;
       
     return(
        
        <div className="weather-display">
            <h2>Weather in {name}</h2>
            <p>Temperature: {temperature}°F</p>
            <p>Condition: {condition}</p>
        </div>
    );
    }
    return <p>Please search for a city to display weather.</p>;
}
export default WeatherDisplay;