import React from 'react';

interface VerticalCardProps {
  title: string;
  content: string;
  imageUrl: string;
  onClick: () => void;
}

const VerticalCard: React.FC<VerticalCardProps> = ({
  title,
  content,
  imageUrl,
  onClick,
}) => {
  return (
    <div
      className="w-full max-w-[300px] h-[270px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-1.5"
      onClick={onClick}
    >
      <a href="#">
        <img
          className="w-full h-[150px] rounded-t-lg object-cover"
          src={imageUrl}
          alt=""
        />
      </a>

      <div className="p-5">
        <div className="flex justify-between mb-3.5">
          <a href="#">
            <h5 className="text-xs font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <div className="flex card-svg-wrap">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 stroke-[1.5px] stroke-main-green hover:stroke-hover-green hover:fill-hover-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-2 stroke-[1.5px] stroke-main-green hover:stroke-hover-green hover:fill-hover-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </a>
          </div>
        </div>
        <p className="text-[6px] font-['Nexon-Bold'] text-gray-dark dark:text-gray-400 whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
};

export default VerticalCard;
