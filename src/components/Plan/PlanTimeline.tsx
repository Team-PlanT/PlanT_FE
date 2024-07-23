import React from 'react';
import { Plan } from '../../types';

interface PlanTimelineProps {
  plans: Plan[];
}

const PlanTimeline: React.FC<PlanTimelineProps> = ({ plans }) => {
  return (
    <div className="px-4" style={{ maxWidth: '320px', margin: '0 auto' }}>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {plans.map((plan, index) => (
          <li className="mb-10 ml-4" key={index}>
            <div className="absolute w-6 h-6 bg-main-green rounded-full -left-3.5 flex items-center justify-center border border-white dark:border-gray-900 dark:bg-gray-700">
              <span className="text-white font-nexonBold">{index + 1}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-nexonMedium mb-1">
              {plan.pl_schedule}
            </h3>
            <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 font-nexonMedium">
              {new Date(plan.pl_date).toLocaleDateString()}
              <br />
              <br />
              {plan.pl_startTime} ~ {plan.pl_endTime}
            </p>
            <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400 font-nexonMedium">
              {plan.pl_content}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PlanTimeline;
