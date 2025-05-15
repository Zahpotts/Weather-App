import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

// Use the API_URL from environment variables if available
const API_BASE_URL = process.env.API_URL || "";
const weather_api_url = `${API_BASE_URL}/api/search`;

const useWeather = () => {
  const { state, dispatch } = useContext(WeatherContext);

  const fetchWeather = async (city) => {
    if(!city) return;
    dispatch({ type: "FETCH_START" });
    try {
      const response = await fetch(`${weather_api_url}/${city}`, {
        headers:{
            'Cache-Control': 'no-cache',
        }
      });
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  return { state, fetchWeather };
};

export default useWeather;