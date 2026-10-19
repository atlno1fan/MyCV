import '@fontsource-variable/source-sans-3';
import '@fontsource-variable/source-serif-4';
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

const root = document.getElementById('root');
if (!root) {
  throw new Error('The page has no #root element to mount into.');
}

// Styles that hide content until it scrolls into view only apply once this has run.
document.documentElement.classList.add('js');

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production pages are prerendered at build time (scripts/prerender.mjs), so the markup is already
// there and only needs hydrating; the dev server serves an empty root and renders from scratch.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
