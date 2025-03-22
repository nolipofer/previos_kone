import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa 'react-dom/client' en lugar de 'react-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Crear un root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
