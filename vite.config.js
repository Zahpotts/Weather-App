import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables based on mode
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './tests/setup.js',
      files: './tests/**/*.test.jsx',
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
        },
      },
    },
    // Define environment variables for client-side
    define: {
      'process.env.API_URL': mode === 'production' 
        ? JSON.stringify('https://weather-app-api.onrender.com') 
        : JSON.stringify('http://localhost:5000')
    }
  }
})