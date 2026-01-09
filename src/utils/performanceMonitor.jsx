/**
 * Performance monitoring utilities
 */

// Report Web Vitals (Core Web Vitals)
// Note: Install web-vitals package for full metrics: npm install web-vitals
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Basic performance metrics using Performance API
    if (typeof window !== 'undefined' && window.performance) {
      const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          onPerfEntry(entry);
        }
      });
      
      try {
        perfObserver.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
      } catch (e) {
        // Observer not supported
      }
    }
  }
};

// Log performance metrics
export const logPerformanceMetrics = () => {
  if (typeof window !== 'undefined' && window.performance) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const connectTime = perfData.responseEnd - perfData.requestStart;
    const renderTime = perfData.domComplete - perfData.domLoading;

    console.log('Performance Metrics:', {
      pageLoadTime: `${pageLoadTime}ms`,
      connectTime: `${connectTime}ms`,
      renderTime: `${renderTime}ms`,
    });
  }
};

// Prefetch resources
export const prefetchResource = (url, type = 'fetch') => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = type;
  link.href = url;
  document.head.appendChild(link);
};

// Preload critical resources
export const preloadResource = (url, type = 'script') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = type;
  link.href = url;
  document.head.appendChild(link);
};

export default { reportWebVitals, logPerformanceMetrics, prefetchResource, preloadResource };
