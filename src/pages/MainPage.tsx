import React, { useEffect, useState, useCallback } from 'react';
import PageCarousel, {
  CarouselInstance,
} from '../components/Landing/PageCarousel';
import VerticalCard from '../components/Card/VerticalCard';
import { useNavigate } from 'react-router-dom';

interface Card {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

const MainPage: React.FC = () => {
  const [mdCards, setMdCards] = useState<Card[]>([]);
  const [bestCards, setBestCards] = useState<Card[]>([]);
  const [agencyCards, setAgencyCards] = useState<Card[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from an actual DB
    const fetchCards = async () => {
      // Add your fetch request here.
      // Example:
      // const response = await fetch('api/cards');
      // const data = await response.json();
      const fetchedMdCards: Card[] = [
        {
          id: 1,
          title: '보스턴 도보 여행',
          content:
            '보스턴에서의 도보 여행을 계획 중이시라면, 이 일정이 딱입니다! 첫째 날은 비콘 힐과 백 베이 지역을 탐방하며, 아름다운 건축물과 공원을 즐기세요. 둘째 날은 케임브리지로 이동해 하버드와 MIT 캠퍼스를 둘러보고, 현지 맛집에서 로브스터 롤을 맛보세요. 마지막 날에는 프리덤 트레일을 따라 보스턴의 주요 역사 명소를 방문하고, 노스 엔드에서 맛있는 이탈리아 음식을 즐기며 마무리하세요.',
          imageUrl: '/img/md1.jpg',
        },
        {
          id: 2,
          title: '도하의 매력을 만끽하는 3일 여행 플랜',
          content:
            '도하에서 즐길 수 있는 3일 여행 코스를 소개합니다! 첫째 날은 도하 코니쉬에서 시작해 바다를 따라 산책하고, 이슬람 아트 박물관에서 멋진 예술 작품을 감상해 보세요. 둘째 날에는 펄 카타르에서 럭셔리한 쇼핑을 즐기고, 카타라 문화 마을에서 다양한 문화 행사와 전통 건축물을 만나보세요. 마지막 날에는 수크 와키프 시장에서 현지 음식을 맛보고, 국립 박물관에서 카타르의 역사를 배워보세요. 도하는 현대적 매력과 전통이 어우러진 도시로, 다양한 경험을 제공합니다',
          imageUrl: '/img/md2.jpg',
        },
        {
          id: 3,
          title: '파리 5일 일정 추천! 여행 덕후들이 뽑은 최고의 코스',
          content:
            '파리 시내에서는 에펠탑, 노트르담 대성당, 루브르 박물관과 같은 주요 랜드마크들을 탐방하며, 생샤펠 성당의 아름다운 스테인드 글라스를 감상할 수 있습니다. 몽마르트 언덕에서의 산책과 사크레 쾨르 대성당 방문은 파리의 예술적이고 낭만적인 면모를 더욱 느끼게 해줍니다',
          imageUrl: '/img/md3.jpg',
        },
      ];
      const fetchedBestCards: Card[] = [
        {
          id: 1,
          title: '에든버러 알차게 즐기기',
          content:
            '에든버러에서 3일간의 여행을 계획 중이시라면, 이 일정을 추천드립니다! 첫째 날, 에든버러 성과 로열 마일을 탐방하며 올드 타운의 역사와 매력을 느껴보세요. 둘째 날에는 스코틀랜드 하이랜드, 로크 네스, 글렌코를 포함한 하이랜드 투어로 멋진 자연 경관을 즐기세요. 마지막 날에는 뉴 타운에서 조지안 건축물을 감상하고, 레이스마켓과 빅토리아 스트리트에서 쇼핑과 맛있는 음식을 즐기세요. 이 3일 일정은 에든버러의 다양한 매력을 체험할 수 있는 완벽한 계획입니다.​',
          imageUrl: '/img/best1.jpg',
        },
        {
          id: 2,
          title: '와인 애호가와 역사 덕후를 위한 스페인 여행 가이드',
          content:
            '스페인에서의 완벽한 여행을 꿈꾸시나요? 스페인의 카바 와인, 셰리 와인, 그리고 역사적인 명소들을 탐험하는 특별한 여행을 소개합니다! 이 가이드는 마드리드의 웅장한 왕궁과 그림 같은 플라자 마요르를 시작으로, 세고비아와 아빌라의 유네스코 세계문화유산 도시를 포함합니다. 전통적인 안달루시아의 셰리 와인을 즐기며 미식 여행을 떠나보세요. ',
          imageUrl: '/img/best2.jpg',
        },
        {
          id: 3,
          title: '스리랑카 여행지 TOP 7, 놓치면 후회각!',
          content:
            '엘라의 아름다운 하이킹 코스, 디알루마 폭포의 자연 인피니티 풀, 갈레 포트의 역사적 요새, 시기리야의 라이언 락, 캔디의 불치사, 누와라 엘리야의 차밭, 그리고 민네리야 국립공원의 야생 코끼리를 보러 오세요.',
          imageUrl: '/img/best3.jpg',
        },
      ];
      const fetchedAgencyCards: Card[] = [
        {
          id: 1,
          title: '다낭부터 하롱베이! 해양 탐험 완벽 가이드! ',
          content:
            '베트남 해양 여행을 통해 매력적인 베트남을 탐험해보세요! 이 7일 일정은 다낭의 아름다운 미케 해변과 웅장한 대리석 산부터 시작하여, 호이안의 유네스코 세계유산으로 지정된 고대 항구도시를 둘러봅니다. 호이안에서는 전통 시장과 장인 마을을 방문하며 옛 베트남의 정취를 느낄 수 있습니다. 하롱베이로 이동해 유명한 동굴 탐험과 크루즈를 즐기며, 수상 도시의 매력을 만끽하세요. 이 일정은 베트남의 풍부한 문화와 자연경관을 모두 경험할 수 있도록 설계되었습니다.',
          imageUrl: '/img/agency1.jpg',
        },
        {
          id: 2,
          title: '스위스 가이드: 현지인 추천 명소 10곳',
          content:
            '스위스의 숨은 매력을 찾아 떠나고 싶으신가요? Wanderlog의 "Switzerland: Our Hidden Gems" 가이드는 여러분을 위해 잘 알려지지 않은 스위스의 아름다운 명소들을 소개합니다. 루체른의 그림 같은 카펠교와 물의 탑, 고풍스러운 취리히의 니더도르프 지역에서 현지 문화를 느껴보세요. 라인 폭포에서의 시원한 자연 경관과 알프스 산맥의 절경을 감상할 수 있는 우에틀리베르크와 클라인 마터호른도 놓치지 마세요. 이 가이드를 통해 스위스의 진정한 보석들을 발견하고 잊지 못할 추억을 만들어보세요',
          imageUrl: '/img/agency2.jpg',
        },
        {
          id: 3,
          title: '교토, 오사카 알짜배기 7일 여행 코스!',
          content:
            '오사카와 교토에서 7일간의 여행을 통해 일본의 진수를 만끽해보세요! 교토에서 산주산겐도와 기요미즈데라를 방문하고, 니시키 시장에서 현지 음식을 즐겨보세요. 나라 공원에서 사슴들과 교감하고 고후쿠지와 도다이지 같은 역사적인 사찰들을 탐방합니다. 오사카로 이동한 후에는 도톤보리의 활기찬 거리에서 맛있는 음식과 쇼핑을 즐기고, 텐포잔 자이언트 관람차에서 오사카 베이의 멋진 전경을 감상할 수 있습니다. 이 일정은 첫 방문자들에게도 쉽게 따라 할 수 있는 완벽한 가이드를 제공합니다. 지금 바로 교토와 오사카의 매력을 경험해보세요',
          imageUrl: '/img/agency3.jpg',
        },
      ];
      setMdCards(fetchedMdCards);
      setBestCards(fetchedBestCards);
      setAgencyCards(fetchedAgencyCards);
      setIsLoaded(true);
    };

    fetchCards();
  }, []);

  const handleCardClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  const handleCarouselInstance = useCallback(
    (instance: CarouselInstance | null) => {
      console.log(instance);
    },
    [],
  );

  return (
    <div className="flex flex-col items-center font-[Nexon] mt-2 px-5 scrollbar-hide">
      <div className="flex w-full bg-white">
        <label
          htmlFor="email"
          className="block ml-5 font-[Nexon-Bold] text-gray-900 text-md mt-3 mb-1 dark:text-white"
        >
          MD 추천 여행
        </label>
      </div>
      <div className="container p-2 mx-auto">
        {isLoaded && (
          <PageCarousel onCarouselInstance={handleCarouselInstance}>
            {mdCards.map((card) => (
              <VerticalCard
                key={card.id}
                title={card.title}
                content={card.content}
                imageUrl={card.imageUrl}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </PageCarousel>
        )}
      </div>
      <div className="flex w-full bg-white">
        <label
          htmlFor="email"
          className="block ml-5 font-[Nexon-Bold] text-gray-900 text-md mt-3 mb-1 dark:text-white"
        >
          추천을 가장 많이 받은 여행
        </label>
      </div>
      <div className="container p-2 mx-auto">
        {isLoaded && (
          <PageCarousel onCarouselInstance={handleCarouselInstance}>
            {bestCards.map((card) => (
              <VerticalCard
                key={card.id}
                title={card.title}
                content={card.content}
                imageUrl={card.imageUrl}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </PageCarousel>
        )}
      </div>
      <div className="flex w-full bg-white">
        <label
          htmlFor="email"
          className="block ml-5 font-[Nexon-Bold] text-gray-900 text-md mt-3 mb-1 dark:text-white"
        >
          모두투어와 같이 떠나봐요 !
        </label>
      </div>
      <div className="container p-2 mx-auto mb-20">
        {isLoaded && (
          <PageCarousel onCarouselInstance={handleCarouselInstance}>
            {agencyCards.map((card) => (
              <VerticalCard
                key={card.id}
                title={card.title}
                content={card.content}
                imageUrl={card.imageUrl}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </PageCarousel>
        )}
      </div>
    </div>
  );
};

export default MainPage;
