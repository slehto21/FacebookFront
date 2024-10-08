import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
      },
    },
  },
  server: {
    port: 5173,
    hmr: true,
  },
});
