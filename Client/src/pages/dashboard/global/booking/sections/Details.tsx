import React, { useEffect, useState } from 'react';
import { useGetCarQuery } from '../../../../../redux/features/Car/Car.api';
import {
  MdCheck,
  MdOutlineAirlineSeatReclineExtra,
  MdOutlineElectricBolt,
} from 'react-icons/md';
import { TbAirConditioning } from 'react-icons/tb';
import { IoCheckmarkDone } from 'react-icons/io5';
import { LuDollarSign } from 'react-icons/lu';
import { GrLocation } from 'react-icons/gr';
import BookingForm from './BookingForm';
type TDetails = {
  id: string | null;
};
const Details = ({ id }: TDetails) => {
  const {
    data,
    isLoading: carLoading,
    isFetching: carFetching,
    refetch,
  } = useGetCarQuery(id);
  const [activeImage, setActiveImage] = useState(0);
  const car = data?.data;
  useEffect(() => {
    refetch();
  }, [id]);

  return (
    <div className=" col-span-12 lg:col-span-6  -order-1 lg:order-1">
      {!id ? (
        <h1 className="text-4xl text-slate-50 mt-52 text-center">
          Select a car
        </h1>
      ) : (
        <div>
          {carLoading ? (
            <div className="mt-32 flex flex-col items-center justify-center space-y-4 h-52">
              <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
            </div>
          ) : (
            <div>
              <div className=" bg-white dark:bg-dark-light-secondary shadow p-5 md:p-10">
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-semibold dark:text-slate-50">
                    {car?.name}
                  </h1>{' '}
                  <h5 className="text-[1.2rem] px-4 py-1 bg-blue-200 rounded-full">
                    {car?.brand}
                  </h5>
                </div>
                <div>
                  <div>
                    <div className="flex justify-center items-center">
                      <img
                        className="w-full "
                        src={car?.images[activeImage]}
                        alt=""
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3 my-5 ">
                      {car?.images.map((image, index) => (
                        <div
                          onClick={() => setActiveImage(index)}
                          key={index}
                          className={`border ${activeImage === index ? 'border-primary-color' : ''}`}
                        >
                          <img src={image} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="w-fit bg-gray-50  flex items-center gap-1 px-2 py-1 border rounded-full dark:text-gray-800">
                          <span>
                            {' '}
                            <MdOutlineAirlineSeatReclineExtra />
                          </span>{' '}
                          <span className="font-medium ">{car?.seats}</span>
                        </div>
                        <div className="w-fit bg-gray-50  flex items-center gap-1 px-2 py-1 border rounded-full dark:text-gray-800">
                          <MdOutlineElectricBolt />
                        </div>
                        <div className="w-fit bg-gray-50  flex items-center gap-1 px-2 py-1 border rounded-full dark:text-gray-800">
                          <TbAirConditioning />
                        </div>
                        <div className="w-fit bg-gray-50 flex items-center gap-1 px-2 py-1 border rounded-full">
                          <span>
                            {' '}
                            <IoCheckmarkDone />
                          </span>{' '}
                          <span
                            className={`font-medium uppercase text-[0.9rem] ${car?.status === 'available' ? 'text-green-500' : 'text-red-500'}`}
                          >
                            {car?.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end items-center text-2xl font-bold dark:text-slate-100">
                        <span>
                          <LuDollarSign />
                        </span>
                        <h1>
                          {car?.pricePerHour}
                          <span className="text-[1.2rem] font-medium">
                            /hour
                          </span>
                        </h1>
                      </div>

                      <div className="mt-5">
                        <h3 className="text-xl dark:text-slate-100 text-gray-950 mb-2">
                          Features:
                        </h3>
                        {car?.features.slice(0, 5).map((feature, index) => {
                          return (
                            <li
                              key={index}
                              className="flex items-center gap-1 dark:text-slate-200"
                            >
                              <span className="text-xl text-green-600">
                                <MdCheck />
                              </span>
                              <span>{feature}</span>
                            </li>
                          );
                        })}
                      </div>
                      <div className="mt-5">
                        <h3 className="text-xl dark:text-slate-100 text-gray-950 mb-2">
                          Locations:
                        </h3>
                        {car?.locations.slice(0, 5).map((location, index) => {
                          return (
                            <li
                              key={index}
                              className="flex items-center gap-1 dark:text-slate-200"
                            >
                              <span className="text-xl text-green-600">
                                <GrLocation />
                              </span>
                              <span>{location}</span>
                            </li>
                          );
                        })}
                      </div>
                      <div className="mt-5">
                        <h3 className="text-xl dark:text-slate-100 text-gray-950 mb-2">
                          Insurances:
                        </h3>
                        {car?.insurances.slice(0, 5).map((insurance, index) => {
                          return (
                            <li
                              key={index}
                              className="flex items-center gap-1 dark:text-slate-200"
                            >
                              <span className="text-xl text-green-600">
                                <MdCheck />
                              </span>
                              <span>{insurance}</span>
                            </li>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <BookingForm car={car!}  />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
