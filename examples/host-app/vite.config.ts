import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'examples/host-app',
      remotes: {
        remoteApp1: 'http://localhost:7100/assets/remoteEntry.js',
        remoteApp2: 'http://localhost:7200/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'typescript'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
