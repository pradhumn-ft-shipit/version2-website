import { defineConfig } from 'vitest/config';

// Dedicated Vitest config so tests do NOT load vite.config.ts (which wires the
// React Router framework plugin — that expects a framework build, not unit tests).
// Node environment is enough: the 004 blog-loader tests are pure disk reads, no DOM.
export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
