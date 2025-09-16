import React from 'react';
import ReactDOM from 'react-dom/client';  // change import here
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // create root
root.render(<App />); // use root.render instead of ReactDOM.render
