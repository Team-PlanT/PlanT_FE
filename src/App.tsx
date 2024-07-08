import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

// components
import UpperNavbar from './components/Navbar/UpperNavbar';
import BottomNavbar from './components/Navbar/BottomNavbar';
// import Alert from './components/Alert/Alert';
// import ModalRequest from './components/ModalRequest/ModalRequest';

// pages
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

const App: React.FC = () => {
  return (
    <div>
      <UpperNavbar />
      <BottomNavbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      {/* <Alert text="ID와 일치하지 않습니다." />
      <ModalRequest
        isOpen={true}
        text={'사용자 정보 활용에 동의하십니?'}
      /> */}
    </div>
  );
};

export default App;
