import React from 'react';
import OverViewCardContainer from '../components/OverviewCardContainer';

const RecentReview = () => {
  return (
    <OverViewCardContainer>
      <h1 className="text-2xl font-semibold dark:text-slate-50">
        Recent Reviews
      </h1>
      <div className="mt-5">
        <h3 className="mt-20 text-center text-xl text-slate-100 font-semibold">
          No Recent Reviews
        </h3>
      </div>
    </OverViewCardContainer>
  );
};

export default RecentReview;
