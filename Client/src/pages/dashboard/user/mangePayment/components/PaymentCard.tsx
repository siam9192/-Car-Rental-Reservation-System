import React from 'react';
import { IoCheckmarkDone } from 'react-icons/io5';
import { LuDollarSign } from 'react-icons/lu';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { TBooking, TCar } from '../../../../../types';
import { useReturnCarMutation } from '../../../../../redux/features/admin/booking.api';
import { toast } from 'sonner';
import LoadingModal from '../../../../../compoments/modal/LoadingModal';
import AlertModal from '../../../../../compoments/modal/AleartModal';
type TCarReturnCard = {
  booking: TBooking;
};
const PaymentCard = ({ booking }: TCarReturnCard) => {
  const car = booking.car;
  const totalTime =
    (new Date(booking.endTime).valueOf() - new Date(booking.startTime).valueOf()) /
    1000 /
    60 /
    60;
  

  const [returnCar, { isLoading }] = useReturnCarMutation();
  const handelCarReturn = async () => {
    const res: any = returnCar({ bookingId: booking._id });
    if (res?.error || !res?.data) {
      toast.error('Car can not be returned', { duration: 3000 });
    } else {
      toast.success('Car successfully returned', { duration: 300 });
    }
  };

  return (
    <div className=" bg-white dark:bg-dark-light-primary p-3 rounded-lg hover:cursor-pointer border  dark:border-none flex flex-col h-full">
      <div className="bg-gray-secondary dark:bg-transparent p-3 md:p-5 rounded-lg ">
        <img className="w-full " src={booking.car.images[0]} alt="" />
      </div>
      <div className="space-y-3">
        <div className="space-y-2">
          <h6 className="font-medium dark:text-slate-200">{car.brand}</h6>
          <h1 className="text-xl text-black font-semibold dark:text-slate-50">
            {car.name}
          </h1>
        </div>
      </div>
      <div className="flex justify-end items-center mt-5">
        <div className="flex items-center text-xl font-bold dark:text-slate-100">
          <span>
            <LuDollarSign />
          </span>
          <h1>
            {booking.pricePerHour}
            <span className="text-[1.2rem] font-medium">/hour</span>
          </h1>
        </div>
      </div>
      <div className="mt-5 flex-grow">
        <h6 className="dark:text-slate-200">Booked by {booking.user.name}</h6>
        <h6 className="dark:text-slate-200">
          Started At :
          <span className="text-secondary-color">
            {new Date(booking.startTime).toUTCString()}
          </span>
        </h6>
        <h6 className="dark:text-slate-200">
          Total Hour :{' '}
          <span className="text-secondary-color">{totalTime.toFixed(2)}</span>
        </h6>
      </div>
      <div className="flex justify-between items-center mt-5">
        <AlertModal
          message="Are you want to return it?"
          confirmButtonText="Yes! return"
          onConfirm={handelCarReturn}
        >
          <button className="px-4 py-2  bg-secondary-color text-white rounded-full">
           Pay Now
          </button>
        </AlertModal>
        <div>
          <p className="text-end text-white">Total Cost</p>
          <div className="flex items-center text-2xl font-bold dark:text-slate-100">
            <span>
              <LuDollarSign />
            </span>
            <h1>
              {booking.totalCost.toFixed(2)}
              <span className="text-[1.2rem] font-medium"></span>
            </h1>
          </div>
        </div>
      </div>
      <LoadingModal title="Just a moment please..." isOpen={isLoading} />
    </div>
  );
};

export default PaymentCard;
