import React from 'react';
import ReactDOM from 'react-dom/client';
import './Estilos/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './Hooks/usarCarrito';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
