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
        notShared: 'http://localhost:5001/assets/remoteEntry.js',
        shared: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: [
        'react',
        'react-dom',
        'typescript',
        '@mui/icons-material',
        '@mui/material',
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
