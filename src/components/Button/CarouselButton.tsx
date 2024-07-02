import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarouselInterface } from 'flowbite'; // 정확한 경로로 수정

interface ButtonProps {
  text: string;
  disabled?: boolean;
  carouselInstance?: CarouselInterface | null;
  lastIndex?: number;
}

const Button: React.FC<ButtonProps> = ({
  text,
  disabled,
  carouselInstance,
  lastIndex,
}) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(
    disabled !== undefined ? disabled : true,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (carouselInstance && lastIndex !== undefined) {
      const updateButtonState = () => {
        const activeItem = carouselInstance.getActiveItem();
        setIsDisabled(activeItem.position !== lastIndex);
      };

      // Set initial state
      updateButtonState();

      // Attach event listeners to update state on carousel change
      const originalSlideTo = carouselInstance.slideTo;
      carouselInstance.slideTo = (position: number) => {
        originalSlideTo.call(carouselInstance, position);
        updateButtonState();
      };

      const originalNext = carouselInstance.next;
      carouselInstance.next = () => {
        originalNext.call(carouselInstance);
        updateButtonState();
      };

      const originalPrev = carouselInstance.prev;
      carouselInstance.prev = () => {
        originalPrev.call(carouselInstance);
        updateButtonState();
      };

      return () => {
        carouselInstance.slideTo = originalSlideTo;
        carouselInstance.next = originalNext;
        carouselInstance.prev = originalPrev;
      };
    }
  }, [carouselInstance, lastIndex]);

  const handleClick = () => {
    if (!isDisabled) {
      navigate('/login');
    }
  };

  return (
    <button
      type="button"
      className={`w-[300px] h-[60px] text-FltBtn text-center rounded-[10px] px-5 py-2.5 mb-2 focus:outline-none ${isDisabled ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-main-green text-black hover:bg-hover-green'}`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
