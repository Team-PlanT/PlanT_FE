import React from 'react';
import ButtonSml from '../Button/ButtonSml';
interface ModalProps {
  isOpen: boolean;
  text: string;
}

const ModalRequest: React.FC<ModalProps> = ({ isOpen, text }) => {
  return (
    <div
      id="popup-modal"
      className={`${
        isOpen ? 'flex' : 'hidden'
      } backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mt-6 mb-7"
              width="30"
              height="30"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.625 30C5.625 16.5381 16.5381 5.625 30 5.625C43.4619 5.625 54.375 16.5381 54.375 30C54.375 43.4619 43.4619 54.375 30 54.375C16.5381 54.375 5.625 43.4619 5.625 30ZM27.3906 26.3961C30.2562 24.9633 33.4827 27.5516 32.7057 30.6597L30.9332 37.7498L31.0369 37.698C31.9631 37.2349 33.0894 37.6103 33.5525 38.5365C34.0156 39.4627 33.6402 40.589 32.7139 41.0521L32.6102 41.1039C29.7446 42.5367 26.5181 39.9485 27.2951 36.8403L29.0677 29.7502L28.9639 29.8021C28.0377 30.2652 26.9115 29.8898 26.4484 28.9636C25.9853 28.0374 26.3607 26.9111 27.2869 26.448L27.3906 26.3961ZM30 22.5C31.0355 22.5 31.875 21.6605 31.875 20.625C31.875 19.5895 31.0355 18.75 30 18.75C28.9645 18.75 28.125 19.5895 28.125 20.625C28.125 21.6605 28.9645 22.5 30 22.5Z"
                fill="#BFE647"
              />
            </svg>
            <h3 className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400">
              {text}
            </h3>
            <div className="mb-6">
              <ButtonSml text="예" bgColor="main-color" />
              <ButtonSml text="아니오" bgColor="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRequest;
