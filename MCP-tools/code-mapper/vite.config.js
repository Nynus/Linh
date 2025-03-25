import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 1235,
    proxy: {
      '/api': {
        target: 'http://localhost:1234',
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'dist/public',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
      },
    },
  },
}); 