import React, { useEffect, useState } from 'react';
import { carTypes } from '../../utils/data';

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = 'hidden';
    }
    return () => {
      window.document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const priceRangeOptions = [
    {
      label: '$0-100',
      value: {
        min: 0,
        max: 100,
      },
    },
    {
      label: '$101-200',
      value: {
        min: 101,
        max: 200,
      },
    },
    {
      label: '$101-200',
      value: {
        min: 101,
        max: 200,
      },
    },
    {
      label: '$201-500',
      value: {
        min: 201,
        max: 500,
      },
    },
  ];
  return (
    <section
      onClick={() => setIsOpen(false)}
      className={` absolute bg-gray-600 bg-opacity-50 top-0 right-0  w-full h-[90vh] overflow-hidden z-50 flex justify-end ${isOpen ? 'block' : 'hidden'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-dark-light-secondary shadow w-10/12 md:w-1/2 lg:w-1/4 h-full p-5 md:p-10 "
      >
        <h1 className="text-2xl text-gray-950 dark:text-slate-50">
          Filter Box
        </h1>
        <div className="mt-5">
          <h6 className="font-medium dark:text-slate-100 text-gray-800">
            Select Car Type
          </h6>
          <select
            className="mt-2 border  border-gray-900 rounded-md w-full py-2 "
            name=""
            id=""
          >
            {carTypes.map((type, index) => (
              <option value={type} key={index}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-5">
          <h6 className="font-medium dark:text-slate-100 text-gray-800">
            Select Price Range
          </h6>
          <select
            className="mt-2 border  border-gray-900 rounded-md w-full py-2 "
            name=""
            id=""
          >
            {priceRangeOptions.map((type, index) => (
              <option value={index} key={index}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end gap-2">
          <button className="mt-5 bg-red-500 text-white px-4 py-2 ">
            Reset
          </button>
          <button className="mt-5 bg-secondary-color text-white px-4 py-2 ">
            Apply
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
