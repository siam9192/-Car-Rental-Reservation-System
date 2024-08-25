import React from 'react';
import { TbStar, TbStarFilled } from 'react-icons/tb';
import Rating from 'react-rating';

type TPrimaryReviewCardProps = {
  review: any;
};
const PrimaryReviewCard = ({ review }: TPrimaryReviewCardProps) => {
  return (
    <div className="p-5 bg-gray-primary dark:bg-dark-light-primary">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img
            className="size-10 rounded-full"
            src="https://aximo-react.vercel.app/assets/team2-CCsDsUp2.png"
            alt=""
          />
          <div className=" space-y-1">
            <h3 className=" text-xl dark:text-slate-100">{review.name}</h3>

            {/* <Rating
              className="text-primary-color"
              initialRating={review.rating}
              fullSymbol={<TbStarFilled />}
              emptySymbol={<TbStar />}
              readonly
            /> */}
          </div>
        </div>
        <h6 className="dark:text-slate-200">{10} days ago</h6>
      </div>
      <p className=" mt-2 dark:text-slate-200">{review.comment}</p>
    </div>
  );
};

export default PrimaryReviewCard;
