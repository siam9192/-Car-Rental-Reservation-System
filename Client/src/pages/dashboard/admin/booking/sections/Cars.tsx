import React, { useEffect, useState } from 'react';
import { useGetCarsQuery } from '../../../../../redux/features/Car/Car.api';
import { TParam } from '../../../../../types';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';

type TCarsProps = {
  setId: (id: string) => void;
};
const Cars = ({ setId }: TCarsProps) => {
  const [active, setActive] = useState<number | null>(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const params: TParam[] = [];

  const keys = ['type', 'location', 'brand'];

  keys.forEach((key) => {
    const value = searchParams.get(key);
    if (value) {
      params.push({ name: key, value });
    }
  });

  

  const { data, refetch, isLoading: carsLoading } = useGetCarsQuery(params);
  const cars = data?.data;

  useEffect(() => {
    if (cars && active !== null) {
      setId(cars[active]._id);
    }
  }, [cars, active]);

  useEffect(() => {
    refetch();
  }, [location]);

  

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
