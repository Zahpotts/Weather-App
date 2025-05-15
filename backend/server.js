import express from 'express';
import axios from 'axios';
const app = express();

// Only use dotenv in development environment
if (process.env.NODE_ENV !== 'production') {
  const dotenv = await import('dotenv');
  dotenv.config();
}

const apiKey = process.env.WEATHER_API_KEY;


app.get('/api/search/:city', async (req, res) => {
    const cityName = req.params.city;
    
    if (!apiKey) {
      return res.status(500).send({ error: "API key is not configured" });
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  
    try {
      const response = await axios.get(url);
      res.send(response.data);
    } catch (err) {
      console.error("Weather API error:", err.message);
      if (!res.headersSent) {
        res.status(500).send({ error: "Failed to fetch weather data" });
      }
    }
  });

export default app;