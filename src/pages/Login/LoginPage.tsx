import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonBig from '../../components/Button/ButtonBig';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNaverLogin = () => {
    const naverLoginUrl = `http://localhost:8080/auth/naver/login`;
    window.location.href = naverLoginUrl;
  };

  const handleKakaoLogin = () => {
    const kakaoLoginUrl = `http://localhost:8080/auth/kakao/login`;
    window.location.href = kakaoLoginUrl;
  };

  const handleGoogleLogin = () => {
    navigate('/googleLogin');
  };

  const handleLogin = () => {
    navigate('/local');
  };

  const handleRegister = () => {
    navigate('/local/signup');
  };

  const handleFindAccount = () => {
    navigate('/local/findAccount');
  };

  return (
    <div>
      <div className="flex justify-around mx-16 mt-96">
        {/* <img src={LoginBtnNaver} onClick={handleNaverLogin}></img>
        <img src={LoginBtnKakao} onClick={handleKakaoLogin}></img>
        <img src={LoginBtnGoogle} onClick={handleGoogleLogin}></img> */}
        <img src="/img/LoginBtnNaver.svg" onClick={handleNaverLogin}></img>
        <img src="/img/LoginBtnKakao.svg" onClick={handleKakaoLogin}></img>
        <img src="/img/LoginBtnGoogle.svg" onClick={handleGoogleLogin}></img>
      </div>
      <div>
        <div className="flex justify-center mt-4" onClick={handleLogin}>
          <ButtonBig text="이메일로 시작하기" bgColor="main-color" />
        </div>
        <div className="mt-2.5 flex justify-center" onClick={handleRegister}>
          <ButtonBig text="회원가입" bgColor="white" />
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <button
          className="text-xs text-gray-light mr-7"
          onClick={handleFindAccount}
        >
          아이디 찾기
        </button>
        <button className="text-xs text-gray-light" onClick={handleFindAccount}>
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
