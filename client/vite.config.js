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
          target: 'http://localhost:3000',
          secure: false,
        },
      },
    };
  }

  return config;
});
