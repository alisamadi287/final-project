import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LoginRegister } from './Components/LoginRegister/LoginRegister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginRegister />
  </React.StrictMode>
);