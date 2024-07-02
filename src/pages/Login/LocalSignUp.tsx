import React from 'react';
import UpperNavbar from '../../components/Navbar/UpperNavbar';
import ButtonBig from '../../components/Button/ButtonBig';

const LocalSignup: React.FC = () => {
  //회원가입 버튼을 눌렀을때, form을 db로 송신하게 만들어 규격에 맞는 columns 생성 시키기.
  return (
    <div>
      <div>
        <UpperNavbar></UpperNavbar>
      </div>

      <div className="flex flex-col items-center min-h-screen font-[Nexon]">
        <div className="flex w-full h-[70px] bg-white">
          <label
            htmlFor="email"
            className="block ml-6 text-2xl font-bold text-gray-900 mt-7 mb-7 dark:text-white"
          >
            이메일로 회원가입
          </label>
        </div>
        <div className="w-full max-w-md">
          <form className="flex flex-col items-center">
            <div className="relative z-0 w-10/12 max-w-xs mt-5 mb-7 group">
              <input
                type="text"
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
            <div className="relative z-0 w-10/12 max-w-xs mb-7 group">
              <input
                type="text"
                name="floating_Birth"
                id="floating_Birth"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                pattern="\d{2}-\d{2}-\d{2}"
                required
              />
              <label
                htmlFor="floating_Birth"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-hover-green peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                생년월일(6자리)
              </label>
            </div>
          </form>
          <div className="flex justify-center w-full mt-3">
            <div className="flex justify-center w-10/12 max-w-xs">
              <ButtonBig text={'회원가입'} bgColor={'#BFE647'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LocalSignup;
