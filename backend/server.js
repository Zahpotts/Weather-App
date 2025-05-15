import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

// Use cors with your frontend origin:
const corsOptions = {
  origin: 'https://weather-app-frontend-dfjc.onrender.com',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Enable CORS preflight for all routes:
app.options('*', cors(corsOptions));

const apiKey = process.env.WEATHER_API_KEY;
console.log('apiKey:', apiKey);

app.get('/api/search/:city', async (req, res) => {
  const cityName = req.params.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (err) {
    console.error('Weather API error:', err.message);
    if (!res.headersSent) {
      res.status(500).send({ error: 'Failed to fetch weather data' });
    }
  }
});
export default app;