import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLogin />} />
        <Route path='/register' element={<UserRegister />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
reportWebVitals();
