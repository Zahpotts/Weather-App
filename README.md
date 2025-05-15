# Weather App

A modern, responsive weather application built with React that displays real-time weather conditions and dynamically changes the background based on the current weather.



## Features

- **Real-time Weather Data**: Get current weather information from OpenWeatherMap API
- **Dynamic Backgrounds**: Background changes based on weather conditions (sunny, rainy, cloudy, etc.)
- **Responsive Design**: Looks great on both desktop and mobile devices
- **User-friendly Interface**: Simple and intuitive search functionality

## Tech Stack

- **Frontend**: React, Context API for state management
- **Styling**: TailwindCSS for responsive design
- **API**: OpenWeatherMap API for weather data
- **Backend**: Express.js to proxy API requests

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your OpenWeatherMap API key:
   ```
   WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5000](http://localhost:5000) to view the app in your browser.

## Project Structure

```
weather-app/
├── backend/          # Express server to proxy API requests
│   ├── index.js      # Server entry point
│   └── server.js     # Express app configuration
├── public/
│   └── images/       # Background images for different weather conditions
├── src/
│   ├── components/   # React components
│   ├── context/      # Context API for state management
│   ├── hooks/        # Custom React hooks
│   ├── utils/        # Utility functions
│   ├── App.jsx       # Main application component
│   ├── index.css     # Global styles
│   └── main.jsx      # Application entry point
└── README.md
```

## Background Images

The app uses different background images based on the current weather condition:

- `Sunnyday.jpg`: For clear skies
- `rain.jpg`: For rainy conditions
- `Snow.jpg`: For snowy conditions
- `clouds.jpg`: For cloudy conditions
- `thunder.jpg`: For thunderstorms

Make sure these images are placed in the `public/images/` directory.

## API Integration

The application uses the OpenWeatherMap API to fetch weather data. The Express server proxies these requests to avoid exposing the API key on the client side.

## Environment Setup

Required environment variables:
- `WEATHER_API_KEY`: Your OpenWeatherMap API key

## Development

To contribute to this project:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request


## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [React](https://reactjs.org/) for the UI library
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Express](https://expressjs.com/) for the backend server
