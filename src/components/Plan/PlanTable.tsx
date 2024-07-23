import React from 'react';
import { Plan } from '../../types';

interface PlanTableProps {
  plans: Plan[];
}

const PlanTable: React.FC<PlanTableProps> = ({ plans }) => {
  // 날짜와 시간순으로 정렬
  const sortedPlans = [...plans].sort((a, b) => {
    const dateA = new Date(`${a.pl_date}T${a.pl_startTime}`);
    const dateB = new Date(`${b.pl_date}T${b.pl_startTime}`);
    return dateA.getTime() - dateB.getTime();
  });

  // 날짜 포맷팅 함수
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div
      className="relative overflow-x-auto px-2"
      style={{ maxWidth: '320px', margin: '0 auto' }}
    >
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="w-1/3 px-6 py-3">
              일정 (날짜 및 시간)
            </th>
            <th scope="col" className="w-2/3 px-6 py-3">
              장소
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPlans.map((plan, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <th
                scope="row"
                className="w-1/3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {formatDate(plan.pl_date)}
                <br />
                {plan.pl_startTime} ~ {plan.pl_endTime}
              </th>
              <td className="w-2/3 px-6 py-4">{plan.pl_place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanTable;
