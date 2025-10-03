import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, '../wwwroot/js'),
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/main.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/style.css'
      }
    }
  },
  plugins: [
    tailwindcss()
  ]
});