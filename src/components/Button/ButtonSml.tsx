import React from 'react';

interface ButtonProps {
  text: string;
  bgColor: string;
  onClick?: () => void;
}

const ButtonSml: React.FC<ButtonProps> = ({ text, bgColor }) => {
  return (
    <button
      type="button"
      className={`
        w-[80px] h-[30px] rounded-[7.5px] px-5 py-1
        text-midBtn text-center font-[Nexon-Light]
        text-black bg-${bgColor} border-solid border-main-color box-border
        hover:bg-hover-color`}
    >
      {text}
    </button>
  );
};

export default ButtonSml;
