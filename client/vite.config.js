import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://heaven-hub-estate-api.vercel.app',  // Ensure this is correct
        changeOrigin: true,  // Ensure the origin is properly changed to the target
        secure: true,  // If you're using a valid SSL certificate on the backend, set to true
      },
    },
  },

  plugins: [react()],
});
