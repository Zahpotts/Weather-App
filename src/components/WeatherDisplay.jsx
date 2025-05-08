import React, {useContext} from "react";

import WeatherContext from "../context/WeatherContext";
import getBackgroundClass from "../utils/getBackgroundClass";

const WeatherDisplay = () => {
    const {state} = useContext(WeatherContext);
    
    const {data, loading, error} = state;
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if(data) {
        const {name, main, weather} = data;
        const temperature = main.temp;
        const condition = weather[0]?.description;
        const background = weather[0]?.main.toLowerCase();

        const backgroundClass = getBackgroundClass(background);
       
     return(
        
        <div className={`weather-display p-6 rounded-lg text-white shadow-md transition ${backgroundClass}`}>
            <h2>Weather in {name}</h2>
            <p>Temperature: {temperature}°F</p>
            <p>Condition: {condition}</p>
        </div>
    );
    }
    return <p>Please search for a city to display weather.</p>;
}
export default WeatherDisplay;