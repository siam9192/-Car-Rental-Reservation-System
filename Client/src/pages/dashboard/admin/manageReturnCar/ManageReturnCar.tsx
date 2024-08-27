import React from 'react';
import DashboardSectionContainer from '../../../../compoments/container/DashboardSectionContainer';
import { useGetReturnableBookingsQuery } from '../../../../redux/features/admin/booking.api';
import CarReturnCard from './components/CarReturnCard';

const ManageReturnCar = () => {
  const params = [
    {
      name: '',
    },
  ];
  const { data } = useGetReturnableBookingsQuery(undefined);
  const bookings = data?.data;

  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-slate-50">
        Manage Return Car
      </h1>
      <DashboardSectionContainer>
        {bookings?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {bookings?.map((booking, index) => {
              return <CarReturnCard key={index} booking={booking} />;
            })}
          </div>
        ) : (
          <div className="min-h-[50vh] flex justify-center items-center">
            <h1 className="text-center text-2xl dark:text-slate-100">
              Returnable car not found
            </h1>
          </div>
        )}
      </DashboardSectionContainer>
    </div>
  );
};

export default ManageReturnCar;
