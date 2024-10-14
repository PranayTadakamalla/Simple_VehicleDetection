// src/index.js
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Preserve the original console.warn method
const originalWarn = console.warn;

// Override console.warn to filter specific warnings
console.warn = (...args) => {
  // Check if the warning message contains the deprecated events
  if (
    args[0].includes('DOMCharacterDataModified') ||
    args[0].includes('DOMSubtreeModified')
  ) {
    // Suppress the specific warning
    return;
  }

  // Call the original console.warn method for other warnings
  originalWarn.apply(console, args);
};

// Example usage to demonstrate how it works
console.warn('This is a test warning'); // This will be logged
console.warn('Listener added for a DOMCharacterDataModified event'); // This will be suppressed
console.warn('Listener added for a DOMSubtreeModified event'); // This will be suppressed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
