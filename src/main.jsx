import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import './index.css';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import App from './App.jsx';
import { reportWebVitals } from './utils/performanceMonitor';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* Wrap the App with HelmetProvider */}
      <App />
    </HelmetProvider>
  </StrictMode>
);

// Measure and report web vitals (performance metrics)
reportWebVitals((metric) => {
  // You can send these metrics to an analytics service
  if (import.meta.env.DEV) {
    console.log(metric);
  }
});
