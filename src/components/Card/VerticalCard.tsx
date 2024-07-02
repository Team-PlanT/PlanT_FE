import React from 'react';

import { useNavigate } from 'react-router-dom';

const VerticalCard: React.FC = () => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate('/detail');
  };

  return (
    <div>
      <div
        className="w-[300px] h-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        onClick={handleMoreClick}
      >
        {/* card img */}
        <a href="#">
          <img
            className="h-[150px] rounded-t-lg"
            src="/img/eximgV.png"
            alt=""
          />
        </a>

        <div className="p-5">
          {/* card content top */}
          <div className="flex justify-between mb-3.5">
            {/* card title */}
            <a href="#">
              <h5 className="text-xs font-['Nexon-Bold'] tracking-tight text-gray-900 dark:text-white">
                제목 텍스트입니다.
              </h5>
            </a>
            {/* card btn */}
            <div className="flex card-svg-wrap">
              {/* like */}
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-[15.75px] h-[15px] stroke-[1.5px] stroke-main-green hover:stroke-hover-green  hover:fill-hover-green"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </a>
              {/* bookmark */}
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-[15.75px] h-[15px] ml-2 stroke-[1.5px] stroke-main-green hover:stroke-hover-green hover:fill-hover-green"
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

          {/* card content bottom */}
          {/* 임시로 p태그 3개 이용하여 텍스트 출력 */}
          <p className="text-[6px] font-['Nexon-Bold'] text-gray-dark dark:text-gray-400 whitespace-pre-line">
            내용 텍스트를 첨부하고 싶은 만큼 첨부해야합니다.
          </p>
          <p className="text-[6px] font-['Nexon-Bold'] text-gray-dark dark:text-gray-400 whitespace-pre-line">
            장평은 4로 조절하며 자간은 따로 없습니다.
          </p>
          <p className="text-[6px] font-['Nexon-Bold'] text-gray-dark dark:text-gray-400 whitespace-pre-line">
            웬만하면 회색조의 글로 쓸 수 있게 만들어 줍시다.
          </p>

          {/* card btn */}
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
