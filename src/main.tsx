import '@fontsource-variable/source-sans-3';
import '@fontsource-variable/source-serif-4';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

const root = document.getElementById('root');
if (!root) {
  throw new Error('The page has no #root element to mount into.');
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
