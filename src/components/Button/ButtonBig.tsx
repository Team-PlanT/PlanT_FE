import React from 'react';

interface ButtonProps {
  text: string;
  bgColor: string;
  onClick?: () => void;
}

const ButtonBig: React.FC<ButtonProps> = ({ text, bgColor = '#BFE647' }) => {
  return (
    <button
      type="button"
      className={`
        w-[215px] h-[35px] rounded-[6px] px-5 py-2
        text-bigBtn text-center leading-4 font-[Nexon-Medium] 
        text-black bg-${bgColor} border border-solid border-main-color box-border
        hover:bg-hover-color`}
    >
      {text}
    </button>
  );
};

export default ButtonBig;
