import React from 'react';
import { TCar } from '../../../types';
type TCartSummeryProps = {
  car: TCar;
};
const PriceSummery = ({ car }: TCartSummeryProps) => {
  return (
    <div className="bg-white dark:bg-dark-light-secondary p-10 shadow">
      <h1 className="text-3xl font-semibold dark:text-slate-50">
        Price Summery
      </h1>
      <div className="py-5 space-y-2 border-b">
        <div className="flex justify-between items-center dark:text-slate-50">
          <h6 className="font-medium text-xl">Car rent</h6>
          <h6 className="font-bold text-2xl">${car.pricePerHour}.00</h6>
        </div>
        {/* <div className="flex justify-between items-center dark:text-slate-50">
          <h6 className="font-medium text-xl">VAT</h6>
          <h6 className="font-bold text-2xl">
          (5% Included)
          </h6>
        </div> */}
        <div className="flex justify-between items-center dark:text-slate-50">
          <h6 className="font-medium text-xl">Discount</h6>
          <h6 className="font-bold text-2xl">${0}.00</h6>
        </div>
      </div>
      <div className=" mt-2 flex justify-between items-center dark:text-slate-50">
        <h6 className="font-semibold text-2xl">Total Amount</h6>
        <h6 className="font-bold text-2xl text-primary-color">
          ${car.pricePerHour + 100}
        </h6>
      </div>
      <div className="mt-5">
        <button className=" bg-primary-color py-3 text-white w-full">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PriceSummery;
