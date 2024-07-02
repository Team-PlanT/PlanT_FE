import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LandingPage from './pages/LandingPage';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/Login/LoginPage';
import LocalLogin from './pages/Login/LocalLoginPage';
import LocalSignup from './pages/Login/LocalSignUp';
// import LocalLoginFindId from './pages/Login/LocalLoginFindId(백업)';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/local" element={<LocalLogin />} />
        <Route path="/local/Signup" element={<LocalSignup />} />
        {/* <Route path="/local/FindId" element={<LocalLoginFindId />} /> */}
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
