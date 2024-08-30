import React, { useState } from 'react';
import SearchForm from './sections/SearchForm';
import Cars from './sections/Cars';
import Details from './sections/Details';

const Booking = () => {
  const [selectedCarId, setCarId] = useState<string | null>(null);
  const handelSetId = (id: string) => {
    setCarId(id);
  };
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold dark:text-slate-50">Booking</h1>
        <SearchForm />
        <div className="mt-5 grid grid-cols-12  gap-5 ">
          <Cars setId={handelSetId} />
          <Details id={selectedCarId} />
        </div>
      </div>
    </div>
  );
};

export default Booking;
