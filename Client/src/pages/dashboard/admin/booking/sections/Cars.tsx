import React, { useEffect, useState } from 'react';
import { useGetCarsQuery } from '../../../../../redux/features/Car/Car.api';
import SecondaryCarCard from '../../../../../compoments/cards/SecondaryCarCard';
import { TCar } from '../../../../../types';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { IoCheckmarkDone } from 'react-icons/io5';
import { LuDollarSign } from 'react-icons/lu';

const Card = ({ car, selected }: { car: TCar; selected: boolean }) => {
  return (
    <div
      className={`bg-white dark:bg-[#1D232A] p-3 rounded-lg hover:cursor-pointer   ${selected ? 'border-2 border-primary-color' : ''} flex flex-col h-full`}
    >
      <div className=" flex justify-between items-center">
        <div className="bg-gray-secondary dark:bg-transparent p-3 md:p-5 rounded-lg w-[50%]">
          <img className="w-full scale-125" src={car.images[0]} alt="" />
        </div>
        <div className="mt-5">
          <div className="space-y-3">
            <div className="space-y-2">
              <h6 className="font-medium dark:text-slate-200">{car.brand}</h6>
              <h1 className="text-xl text-black font-semibold dark:text-slate-50">
                {car.name}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-fit bg-gray-50  flex items-center gap-1 px-2 py-1 border rounded-full dark:text-gray-800">
                <span>
                  {' '}
                  <MdOutlineAirlineSeatReclineExtra />
                </span>{' '}
                <span className="font-medium ">{car.seats}</span>
              </div>
              <div className="w-fit bg-gray-50 flex items-center gap-1 px-2 py-1 border rounded-full">
                <span>
                  {' '}
                  <IoCheckmarkDone />
                </span>{' '}
                <span
                  className={`font-medium uppercase text-[0.9rem] ${car.status === 'available' ? 'text-green-500' : 'text-red-500'}`}
                >
                  {car.status}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between  flex-col-reverse gap-2 lg:flex-row lg:gap-0  items-center mt-5">
            <div className="flex items-center text-xl lg:text-2xl font-bold dark:text-slate-100">
              <span>
                <LuDollarSign />
              </span>
              <h1>
                {car.pricePerHour}
                <span className="text-[1.2rem] font-medium">/hour</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
type TCarsProps = {
  setId: (id: string) => void;
};
const Cars = ({ setId }: TCarsProps) => {
  const [active, setActive] = useState<number | null>(null);

  const { data, isLoading: carsLoading } = useGetCarsQuery(undefined);
  const cars = data?.data;

  useEffect(() => {
    if (cars && active !== null) {
      setId(cars[active]._id);
    }
  }, [cars, active]);

  return (
    <div className=" col-span-12 lg:col-span-6 space-y-5 max-h-[80vh overflow-y-auto ">
      <h1 className="text-xl dark:text-slate-100 font-medium text-end">
        <span className="font-bold">{cars?.length}</span> Cars Found
      </h1>
      {cars?.map((car, index) => (
        <div onClick={() => setActive(index)} key={index}>
          <Card car={car} selected={active === index} />
        </div>
      ))}
    </div>
  );
};

export default Cars;
