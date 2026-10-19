import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vitest/config';

// The site is served from https://atlno1fan.github.io/MyCV/, so every asset URL starts with /MyCV/.
const base = '/MyCV/';

// GitHub Pages cannot send HTTP headers, so the Content Security Policy lives in a meta tag.
// It is injected into production builds only: the dev server needs inline styles and a
// websocket for hot module reloading, which this policy would block.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  'upgrade-insecure-requests',
].join('; ');

const cspMetaTag = (): Plugin => ({
  name: 'csp-meta-tag',
  apply: 'build',
  transformIndexHtml: (html) =>
    html.replace(
      '<!-- csp -->',
      `<meta http-equiv="Content-Security-Policy" content="${contentSecurityPolicy}" />`,
    ),
});

export default defineConfig({
  base,
  plugins: [react(), cspMetaTag()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
  server: {
    port: 3010,
    strictPort: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
});
