import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();

app.use(cors({
  origin: 'https://weather-app-frontend-dfjc.onrender.com',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.options('*', cors()); // handle preflight


dotenv.config();

const apiKey = process.env.WEATHER_API_KEY;
console.log('aiKey:', apiKey); // Check if the API key is being loaded correctly
app.get('/api/search/:city', async (req, res) => {
    const cityName = req.params.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  
    try {
      const response = await axios.get(url);
      res.send(response.data);
    } catch (err) {
      console.error("Weather API error:", err.message);
      if (!res.headersSent) {
        res.status(500).send({ error: "Failed to fetch weather dataa" });
      }
    }
  });

export default app;