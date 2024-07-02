import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      console.log('Received token:', token);

      // 네이버 토큰과 카카오 토큰을 구분하여 저장
      if (params.has('kakao')) {
        localStorage.setItem('kakaoAuthToken', token);
      } else {
        localStorage.setItem('naverAuthToken', token);
      }

      navigate('/main');
    }
  }, [navigate]);

  return (
    <div>
      <h1>로그인 성공</h1>
      <p>잠시 후 메인 페이지로 이동합니다...</p>
    </div>
  );
};

export default AuthSuccessPage;
