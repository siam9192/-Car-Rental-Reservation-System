import React from 'react';
import Heading from '../../../compoments/reuse/Heading';
import { cars } from '../../../utils/data';
import PrimaryCarCard from '../../../compoments/cards/PrimaryCarCard';
import { TCar } from '../../../types';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const FeaturedCars = () => {
  return (
    <section className="mt-5 md:py-10 ">
      <Heading
        title="Featured Cars"
        description="Explore our top vehicle picks, highlighting exceptional design, performance, and features. Find your perfect car from our curated selection."
      />
      <div className="mt-5 md:p-10 p-5 bg-gray-primary dark:bg-dark-light-primary ">
        <div className="mb-5 flex justify-end">
          <Link to={'/car-listing'}>
            <button className="px-4 py-2 bg-black text-white dark:bg-white dark:text-gray-800 hover:bg-primary-color hover:text-white dark:hover:bg-primary-color dark:hover:text-white duration-200 rounded-full flex items-center gap-1">
              <span>View All</span>{' '}
              <span className="text-xl">
                <HiOutlineArrowLongRight />
              </span>
            </button>
          </Link>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {cars.slice(0, 6).map((car, index) => {
            return <PrimaryCarCard car={car as TCar} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
