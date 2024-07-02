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
        className="flex w-[300px] h-[200px] bg-white border border-gray-200 rounded-lg shadow"
        onClick={handleMoreClick}
      >
        <a
          href="#"
          className="flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
          {/* card img */}
          <img
            className="object-cover w-[100px] h-full rounded-l-lg"
            src="/img/eximgH.png"
            alt=""
          />
          {/* card contents */}
          <div className="flex flex-col px-8 py-12 leading-normal">
            {/* card title */}
            <h5 className="mb-2.5 text-[15px] font-['Nexon-Bold'] tracking-tight text-gray-900">
              제목 텍스트 입니다.
            </h5>
            {/* content */}
            <p className="text-[8px] font-['Nexon-Bold'] text-gray-dark  dark:text-gray-400">
              내용 텍스트를 첨부하고 싶은 만큼 첨부해야합니다. 장평은 4로
              조절하며 자간은 따로 없습니다. 웬만하면 회색조의 글로 쓸 수 있게
              만들어 줍시다.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default VerticalCard;
