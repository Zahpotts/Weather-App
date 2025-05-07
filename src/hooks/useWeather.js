import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const weather_api_url = "/api/search";
const useWeather = () => {
  const { state, dispatch } = useContext(WeatherContext);

  const fetchWeather = async (city) => {
    dispatch({ type: "FETCH_START" });
    try {
      const response = await fetch(`${weather_api_url}?city=${city}`);
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