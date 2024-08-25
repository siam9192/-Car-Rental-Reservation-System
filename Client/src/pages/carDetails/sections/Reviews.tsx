import React, { useState } from 'react';
import { reviews } from '../../../utils/data';
import PrimaryReviewCard from '../../../compoments/cards/review/PrimaryReviewCard';

const Reviews = () => {
  const [viewAll, setViewAll] = useState(false);
  const reviewStatus = [{}];

  const toggleViewAll = () => {
    setViewAll(!viewAll);
  };

  return (
    <div className="bg-white dark:bg-dark-light-secondary p-10 shadow">
      <h1 className="text-3xl font-semibold dark:text-slate-50">
        Customer Reviews
      </h1>

      <div className="mt-5 space-y-5">
        {viewAll
          ? reviews.map((review, index) => {
              return <PrimaryReviewCard review={review} key={index} />;
            })
          : reviews.slice(0, 2).map((review, index) => {
              return <PrimaryReviewCard review={review} key={index} />;
            })}

        <div className=" text-end mt-4">
          <button
            onClick={toggleViewAll}
            className="px-4 py-2 bg-primary-color text-white rounded-full"
          >
            {!viewAll ? 'View All' : 'View Less'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
