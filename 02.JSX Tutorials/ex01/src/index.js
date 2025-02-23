import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.js';

console.log(progress.env.NODE_ENV);
if(progress.env.NODE_ENV==="production"){
  console.log = () => {};
  console.info = () => {};
  console.error = () => {};
  console.warn = () => {};
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);