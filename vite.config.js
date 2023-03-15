import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/valex/preview/',
  plugins: [react()],
  define: {
    'process.env': {}
  },

  build: {
    chunkSizeWarningLimit: 5000,
  },
  server: {
    host: true,
  },
  node: { global: true },

})

