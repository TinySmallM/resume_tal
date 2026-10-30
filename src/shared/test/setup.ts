import '@testing-library/jest-dom/vitest';

// Мок IntersectionObserver для motion.
Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  },
});
