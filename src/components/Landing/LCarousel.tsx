import React, { useEffect, useRef } from 'react';
import { Carousel } from 'flowbite';
import type {
  CarouselItem,
  CarouselOptions,
  CarouselInterface,
} from 'flowbite';
import type { InstanceOptions } from 'flowbite';

const LCarousel: React.FC<{
  onCarouselInstance: (instance: CarouselInterface | null) => void;
}> = ({ onCarouselInstance }) => {
  const carouselElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carouselElement = carouselElementRef.current;

    if (carouselElement) {
      const items: CarouselItem[] = [
        {
          position: 0,
          el: document.getElementById('carousel-item-1') as HTMLElement,
        },
        {
          position: 1,
          el: document.getElementById('carousel-item-2') as HTMLElement,
        },
        {
          position: 2,
          el: document.getElementById('carousel-item-3') as HTMLElement,
        },
      ];

      const options: CarouselOptions = {
        defaultPosition: 0,
        interval: 3000,
        indicators: {
          activeClasses: 'bg-main-green',
          inactiveClasses:
            'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: [
            {
              position: 0,
              el: document.getElementById(
                'carousel-indicator-1',
              ) as HTMLElement,
            },
            {
              position: 1,
              el: document.getElementById(
                'carousel-indicator-2',
              ) as HTMLElement,
            },
            {
              position: 2,
              el: document.getElementById(
                'carousel-indicator-3',
              ) as HTMLElement,
            },
          ],
        },
      };

      const instanceOptions: InstanceOptions = {
        id: 'default-carousel',
        override: true,
      };

      const carousel: CarouselInterface = new Carousel(
        carouselElement,
        items,
        options,
        instanceOptions,
      );

      onCarouselInstance(carousel);

      carousel.cycle();

      const prevButton = document.getElementById('data-carousel-prev');
      const nextButton = document.getElementById('data-carousel-next');

      if (prevButton) {
        prevButton.addEventListener('click', () => {
          carousel.prev();
        });
      }

      if (nextButton) {
        nextButton.addEventListener('click', () => {
          carousel.next();
        });
      }
    }

    return () => {
      onCarouselInstance(null);
    };
  }, [onCarouselInstance]);

  return (
    <div
      id="default-carousel"
      ref={carouselElementRef}
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div
          id="carousel-item-1"
          className="hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src="/img/carousel01.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="carousel 1"
          />
        </div>
        <div
          id="carousel-item-2"
          className="hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src="/img/carousel02.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="carousel 2"
          />
        </div>
        <div
          id="carousel-item-3"
          className="hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src="/img/carousel03.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="carousel 3"
          />
        </div>
      </div>
      <div className="absolute bottom-0 z-30 flex space-x-3 -translate-x-1/2 left-1/2 rtl:space-x-reverse">
        <button
          id="carousel-indicator-1"
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          id="carousel-indicator-2"
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          id="carousel-indicator-3"
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </div>
      <button
        id="data-carousel-prev"
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        id="data-carousel-next"
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default LCarousel;
