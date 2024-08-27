import React from 'react';
import ManageBookingTable from './components/ManageBookingTable';

const ManageBooking = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-slate-50">Manage Booking</h1>
      <div className="mt-10 bg-white dark:bg-dark-light-secondary shadow p-5 md:p-10">
        <ManageBookingTable />
      </div>
    </div>
  );
};

export default ManageBooking;
