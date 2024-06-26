import React from "react";

interface ButtonProps {
  text: string;
  bgColor: string;
}

const ButtonBig: React.FC<ButtonProps> = ({ text, bgColor }) => {
  return (
    <button
      type="button"
      className={`
        w-[320px] h-[60px] text-bigBtn
        text-center rounded-[10px] px-5 py-2.5 me-2 mb-2
        focus:outline-none text-black bg-${bgColor}
        hover:bg-hover-color`}
    >
      {text}
    </button>
  );
};

export default ButtonBig;
