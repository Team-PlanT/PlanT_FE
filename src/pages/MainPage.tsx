import React from 'react';

import VerticalCard from '../components/Card/VerticalCard';
import HorizontalCard from '../components/Card/HorizontalCard';

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>
        <HorizontalCard />
        <VerticalCard />
      </h1>
    </div>
  );
};

export default MainPage;
