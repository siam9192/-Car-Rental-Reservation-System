import {
  MdCheck,
  MdOutlineAirlineSeatReclineExtra,
  MdOutlineElectricBolt,
  MdReviews,
} from 'react-icons/md';
import { IoCheckmarkDone, IoStar } from 'react-icons/io5';
import { TbAirConditioning } from 'react-icons/tb';
import { LuDollarSign } from 'react-icons/lu';
import { TCar } from '../../../types';
import ImageGallery from './ImageGallery';

type TCarInfoProps = {
  car: TCar;
};

const CarInfo = ({ car }: TCarInfoProps) => {
  const features = [
    'Insurance Options',
    'Mileage Limits',
    'Fuel Policies',
    'Vehicle Condition Reports',
    'Booking Confirmation',
  ];
  return (
    <div className=" bg-white dark:bg-dark-light-secondary shadow p-10">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-semibold dark:text-slate-50">
          {car.name}
        </h1>{' '}
        <h5 className="text-[1.2rem] px-4 py-1 bg-blue-200 rounded-full">
          {car.brand}
        </h5>
      </div>
      <div className="flex md:flex-row flex-col gap-5">
     <ImageGallery images={car.images}/>
        <div>
          <div className="flex items-center gap-4">
            <div className="w-fit bg-gray-50  flex items-center gap-1 px-2 py-1 border rounded-full dark:text-gray-800">
              <span>
                {' '}
                <MdOutlineAirlineSeatReclineExtra />
              </span>{' '}
              <span className="font-medium ">{car.seats}</span>
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
                className={`font-medium uppercase text-[0.9rem] ${car.status === 'available' ? 'text-green-500' : 'text-red-500'}`}
              >
                {car.status}
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="w-fit bg-gray-50  flex items-center gap-1 px-2 py-1 border rounded-full dark:text-gray-800">
              <span>
                {' '}
                <IoStar />
              </span>{' '}
              <span className="font-medium ">{car.rating || 0}</span>
            </div>
            <div className="w-fit bg-gray-50  flex items-center gap-1 px-2 py-1 border rounded-full dark:text-gray-800">
              <span>
                {' '}
                <MdReviews />
              </span>{' '}
              <span className="font-medium ">{car.reviews || 0}</span>
            </div>
          </div>
          <div className="mt-5">
            {car.features.slice(0, 5).map((feature, index) => {
              return (
                <li className="flex items-center gap-1 dark:text-slate-100">
                  <span className="text-xl text-green-600">
                    <MdCheck />
                  </span>
                  <span>{feature}</span>
                </li>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center text-2xl font-bold dark:text-slate-100">
        <span>
          <LuDollarSign />
        </span>
        <h1>
          {car.pricePerHour}
          <span className="text-[1.2rem] font-medium">/hour</span>
        </h1>
      </div>
    </div>
  );
};

export default CarInfo;
