import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UpperNavbar from './components/Navbar/UpperNavbar';
import BottomNavbar from './components/Navbar/BottomNavbar';

import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login/LoginPage';

const App: React.FC = () => {
  return (
    <div>
      <UpperNavbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <BottomNavbar />
    </div>
  );
};

export default App;
