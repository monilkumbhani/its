import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // replace with your API server URL
        secure: false
      },
    },
  },
  plugins: [react()],
})
