import axios from 'axios';

export default async function handler(req, res) {
  // Get city from URL parameter
  const { city } = req.query;
  
  // Get API key from environment variables
  const apiKey = process.env.WEATHER_API_KEY;
  
  // Check if API key exists
  if (!apiKey) {
    return res.status(500).json({ error: "API key is not configured" });
  }
  
  // Call OpenWeatherMap API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (err) {
    console.error("Weather API error:", err.message);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
}