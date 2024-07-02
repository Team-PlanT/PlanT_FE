import React from 'react';
import UpperNavbar from '../../components/Navbar/UpperNavbar';
import ButtonBig from '../../components/Button/ButtonBig';
import { Link } from 'react-router-dom';
// import '../../index.css';

const LocalLoginPage: React.FC = () => {
  return (
    <div>
      <div>
        <UpperNavbar />
      </div>

      <div className="flex flex-col items-center min-h-screen font-[Nexon]">
        <div className="flex w-full h-[70px] bg-white">
          <label
            htmlFor="email"
            className="block ml-6 text-2xl font-bold text-gray-900 mt-7 mb-7 dark:text-white"
          >
            이메일로 로그인
          </label>
        </div>
        <div className="w-full max-w-md">
          <form className="flex flex-col items-center">
            <div className="relative z-0 w-10/12 max-w-xs mt-5 mb-7 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-hover-green peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                이메일 주소
              </label>
            </div>
            <div className="relative z-0 w-10/12 max-w-xs mb-7 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-hover-green peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                비밀번호
              </label>
            </div>
          </form>
          <div className="flex justify-center w-full mt-3">
            <div className="flex justify-center w-10/12 max-w-xs">
              <ButtonBig text={'로그인'} bgColor={'#BFE647'} />
            </div>
          </div>
          <div className="flex justify-center w-full">
            <Link to="/local/FindId" className="text-sm text-slate-300">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalLoginPage;
