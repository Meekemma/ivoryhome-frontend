import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Uncomment to analyze bundle size (requires: npm install -D rollup-plugin-visualizer)
    // Then add: import { visualizer } from 'rollup-plugin-visualizer'
    // visualizer({ open: true, gzipSize: true, brotliSize: true })
  ],
  server: {
    port: 3000,
  },
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        // Better code splitting strategy
        manualChunks: {
          // Core vendor packages
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI libraries
          'ui-vendor': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          // Map libraries
          'map-vendor': ['leaflet', 'react-leaflet', 'leaflet-defaulticon-compatibility'],
          // Other large libraries
          'utils-vendor': ['axios', 'react-toastify', 'lottie-react', 'swiper']
        },
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Source maps for production debugging (disable if not needed)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'axios'],
  },
});
