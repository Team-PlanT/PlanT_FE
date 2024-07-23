import React from 'react';
import { Plan } from '../../types';

interface PlanTimelineProps {
  plans: Plan[];
}

interface GroupedPlans {
  [date: string]: Plan[];
}

const PlanTimeline: React.FC<PlanTimelineProps> = ({ plans }) => {
  // 날짜와 시간순으로 정렬
  const sortedPlans = [...plans].sort((a, b) => {
    const dateA = new Date(`${a.pl_date}T${a.pl_startTime}`);
    const dateB = new Date(`${b.pl_date}T${b.pl_startTime}`);
    return dateA.getTime() - dateB.getTime();
  });

  // 날짜별로 그룹화된 플랜
  const groupedPlans: GroupedPlans = sortedPlans.reduce(
    (acc: GroupedPlans, plan: Plan) => {
      const date = new Date(plan.pl_date).toLocaleDateString();
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(plan);
      return acc;
    },
    {},
  );

  // 시간 포맷팅 함수 (초 제외)
  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="px-4" style={{ maxWidth: '320px', margin: '0 auto' }}>
      {Object.keys(groupedPlans).map((date: string, dateIndex: number) => (
        <div key={dateIndex}>
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mr-4">
              {dateIndex + 1}일차
            </h2>
            <h3 className="text-md font-semibold text-gray-600 dark:text-gray-400">
              {date}
            </h3>
          </div>
          <ol className="relative border-l border-gray-200 dark:border-gray-700 mb-10">
            {groupedPlans[date].map((plan: Plan, index: number) => (
              <li className="mb-10 ml-4" key={index}>
                <div className="absolute w-6 h-6 bg-main-green rounded-full -left-3.5 flex items-center justify-center border border-white dark:border-gray-900 dark:bg-gray-700">
                  <span className="text-white font-nexonBold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-nexonMedium mb-1">
                  {plan.pl_schedule}
                </h3>
                <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 font-nexonMedium">
                  <span className="font-nexonBold mr-5">시간</span>
                  {formatTime(plan.pl_startTime)} ~{' '}
                  {formatTime(plan.pl_endTime)}
                </p>
                <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 font-nexonMedium">
                  <span className="font-nexonBold mr-5">장소</span>
                  {plan.pl_place}
                </p>
                <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 font-nexonMedium">
                  <span className="font-nexonBold mr-5">비용</span>
                  {plan.pl_cost}
                </p>
                <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400 font-nexonMedium">
                  <span className="font-nexonBold mr-5">내용</span>
                  {plan.pl_content}
                </p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default PlanTimeline;
