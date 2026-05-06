import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 800,
    rolldownOptions: {
      output: {
        advancedChunks: {
          groups: [
            { name: 'framer', test: /node_modules\/framer-motion/ },
            { name: 'router', test: /node_modules\/react-router/ },
            { name: 'icons', test: /node_modules\/lucide-react/ },
          ],
        },
      },
    },
  },
})
