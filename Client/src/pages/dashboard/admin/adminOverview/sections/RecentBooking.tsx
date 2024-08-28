import React from 'react';
import OverViewCardContainer from '../components/OverviewCardContainer';
import { TBooking } from '../../../../../types';

type TRecentBookingProps = {
  bookings: TBooking[];
};
const RecentBooking = ({ bookings }: TRecentBookingProps) => {
  const heads = ['Name', 'Start Time', 'Price Per Hour', 'Status'];
  return (
    <OverViewCardContainer>
      <h1 className="text-2xl font-semibold dark:text-slate-50">
        Recent Booking
      </h1>
      {bookings?.length ? (
        <div className="mt-5">
          <div className="grid grid-cols-2 md:grid-cols-4 p-3 ">
            {heads.map((item, index) => {
              return (
                <h3
                  key={index}
                  className="text-xl  dark:text-slate-100 font-medium"
                >
                  {item}
                </h3>
              );
            })}
          </div>
          {bookings?.map((booking, index) => {
            return (
              <div
                key={index}
                className="grid  grid-cols-2 md:grid-cols-4 p-3 "
              >
                {/* <img src={booking.car.images[0]} alt="" className='size-' /> */}
                <h3 className=" dark:text-slate-200 font-medium">
                  {booking.car.name}
                </h3>
                <h3 className=" dark:text-slate-200 font-medium">
                  {new Date(booking.startTime).toUTCString()}
                </h3>
                <h3 className=" dark:text-slate-200 font-medium">
                  ${booking.pricePerHour}
                </h3>
                <h3 className=" dark:text-slate-200 font-medium">
                  {booking.status.toUpperCase()}
                </h3>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-5 flex justify-center items-center h-full">
          <h3 className=" text-center text-xl text-slate-100 font-semibold">
            No Recent Booking found
          </h3>
        </div>
      )}
    </OverViewCardContainer>
  );
};

export default RecentBooking;
