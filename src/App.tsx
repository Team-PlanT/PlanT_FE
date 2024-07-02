import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UpperNavbar from './components/Navbar/UpperNavbar';
import BottomNavbar from './components/Navbar/BottomNavbar';
// pages
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login/LoginPage';
import AuthSuccessPage from './pages/Login/AuthSuccess';

const App: React.FC = () => {
  return (
    <div>
      <UpperNavbar />
      <BottomNavbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/success" element={<AuthSuccessPage />} />
      </Routes>
      <BottomNavbar />
    </div>
  );
};

export default App;
