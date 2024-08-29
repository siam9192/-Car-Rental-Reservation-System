import React from 'react';
import { useGetYetToPaymentBookingsQuery } from '../../../../redux/features/user/bookingManagement';
import PaymentCard from './components/PaymentCard';

const ManagePayment = () => {
  const { data } = useGetYetToPaymentBookingsQuery(undefined);
  const bookings = data?.data;
  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-slate-50">Manage Payment</h1>
      <div className="mt-10 bg-white dark:bg-dark-light-secondary shadow p-5 md:p-10 min-h-[50vh]">
       {
        bookings?.length ?
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
         
         bookings?.map((booking, index) => (
           <PaymentCard key={index} booking={booking} />
         ))
        }
       </div>
       :
       <div className='text-center text-2xl font-bold dark:text-slate-50 text-black  mt-40'>
             <h1>No Bookings found</h1>
            </div>
       }
      </div>
    </div>
  );
};

export default ManagePayment;
