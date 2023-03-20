import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import './index.css';
import { AuthProvider } from './hoc/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
  /* </React.StrictMode> */
);
