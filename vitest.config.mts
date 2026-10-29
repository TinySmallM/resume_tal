import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';


const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/shared/test/setup.ts'],
    css: true,
  },
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
    },
  },
});
