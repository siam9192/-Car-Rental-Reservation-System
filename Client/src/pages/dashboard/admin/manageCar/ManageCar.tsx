import React from 'react';
import { cars } from '../../../../utils/data';
import AdminCarCard from '../../../../compoments/cards/AdminCarCard';
import { TCar } from '../../../../types';
import { useGetCarsQuery } from '../../../../redux/features/Car/Car.api';

const ManageCar = () => {
  const { data } = useGetCarsQuery(undefined);
  const cars:TCar[] = data?.data || [];
  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-slate-50">Cars</h1>

     {
      cars?.length ?
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {cars.map((car, index) => (
        <AdminCarCard car={car as TCar} key={index} />
      ))}
    </div>
    :
    <div className='mt-32'>
      <h1 className='text-3xl dark:text-slate-50 text-center'>No car found</h1>
    </div>
     }
    </div>
  );
};

export default ManageCar;
