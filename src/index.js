import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './context/navbar_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
