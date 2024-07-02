import React from 'react';
import UpperNavbar from '../../components/Navbar/UpperNavbar';
import ButtonBig from '../../components/Button/ButtonBig';

const LocalLoginFindId: React.FC = () => {
  return (
    <div>
      <div>
        <UpperNavbar></UpperNavbar>
      </div>

      <div className="flex flex-col items-center min-h-screen font-[Nexon]">
        <div className="flex w-full h-[70px] bg-white">
          <label
            htmlFor="email"
            className="block ml-6 mt-7 mb-7 text-2xl font-bold text-gray-900 dark:text-white"
          >
            이메일 계정 인증
          </label>
        </div>
        <div className="flex w-full h-[70px] bg-white">
          <label
            htmlFor="email"
            className="block ml-6 mt-7 mb-7 text-2xl font-bold text-hover-color dark:text-white"
          ></label>
        </div>
        <div className="max-w-md w-full">
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
          </form>
          <div className="w-full flex justify-center mt-3">
            <div className="w-10/12 max-w-xs flex justify-center">
              <ButtonBig text={'이메일 인증 완료'} bgColor={'#BFE647'} />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-slate-300 text-sm">
              인증코드를 얻지 못하셨나요?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalLoginFindId;
