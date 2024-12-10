import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const config = {
    plugins: [react()],
  };

  if (mode === 'development') {
    config.server = {
      proxy: {
        '/api': {
          target: 'https://heaven-hub-estate-api.vercel.app',
          secure: false,
        },
      },
    };
  }

  return config;
});
