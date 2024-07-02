import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonBig from '../../components/Button/ButtonBig';
import LoginBtnNaverImage from '../../assets/images/LoginBtnNaver.svg';
import LoginBtnKakaoImage from '../../assets/images/LoginBtnKakao.svg';
import LoginBtnGoogleImage from '../../assets/images/LoginBtnGoogle.svg';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNaverLogin = () => {
    navigate('/naverLogin');
  };

  const handleKakaoLogin = () => {
    navigate('/kakaoLogin');
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
      <div className="flex justify-around mt-96 mx-16">
        <img src={LoginBtnNaverImage} onClick={handleNaverLogin}></img>
        <img src={LoginBtnKakaoImage} onClick={handleKakaoLogin}></img>
        <img src={LoginBtnGoogleImage} onClick={handleGoogleLogin}></img>
      </div>
      <div>
        <div className="mt-4 flex justify-center" onClick={handleLogin}>
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
