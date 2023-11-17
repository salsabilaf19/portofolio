// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portofolio/', // Set the base path for GitHub Pages
  build: {
    outDir: 'build', // Specify the output directory
    minify: 'terser', // Use Terser for minification
    sourcemap: true, // Generate source maps for debugging
  },
  server: {
    port: 3000, // Specify the development server port
    open: true, // Open the default browser when the development server starts
  },
  resolve: {
    alias: {
      // Add any custom aliases for module resolution
      '@components': '/src/components',
      '@utils': '/src/utils',
    },
  },
});