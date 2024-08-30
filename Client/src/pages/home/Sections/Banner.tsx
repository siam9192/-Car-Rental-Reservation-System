import React from 'react';
import '../styles/Banner.css';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <section className="banner">
      <div className="py-20 px-10 md:py-40 md:px-20 ">
        <h1 className=" text-5xl md:text-6xl text-white font-bold ">
          Try The Future <br />
          You Won't <br />
          Turn Back
        </h1>
        <Link to={'/bookings'}>
        <button className="mt-10 flex items-center gap-2 px-4 py-3 bg-white rounded-full font-medium hover:bg-primary-color hover:text-white duration-200">
          <span>Book Car Now</span>
          <span className="text-xl">
            <HiArrowLongRight />
          </span>
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
