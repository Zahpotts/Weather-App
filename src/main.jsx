import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WeatherProvider } from './context/WeatherContext'

createRoot(document.getElementById('root')).render(
  <WeatherProvider>

  <StrictMode>
    <App />
  </StrictMode>
  </WeatherProvider>
)
