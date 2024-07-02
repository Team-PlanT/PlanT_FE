import React, { useState } from 'react';
import LCarousel from '../components/Landing/LCarousel';
import Button from '../components/Button/CarouselButton';
import { CarouselInterface } from 'flowbite';

const LandingPage: React.FC = () => {
  const [carouselInstance, setCarouselInstance] =
    useState<CarouselInterface | null>(null);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[160px] bg-white"></div>
      <LCarousel onCarouselInstance={setCarouselInstance} />
      <div className="w-full h-[100px] bg-white"></div>
      <Button
        text="시작하기"
        carouselInstance={carouselInstance}
        lastIndex={2}
      />
    </div>
  );
};

export default LandingPage;
