import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'

// The React Router framework plugin bundles React support, so we no longer add
// @vitejs/plugin-react separately (the two must not be combined).
// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
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
