import React, { useEffect, useState } from 'react';
import { carBrands, carTypes } from '../../utils/data';
import { IoFilter } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const FilterBar = ({ search }: { search: any }) => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0,0)
      window.document.body.style.overflow = 'hidden';
    }
    return () => {
      window.document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const priceRangeOptions = [
    {
      label: 'Default',
      value: '',
    },
    {
      label: '$0-100',
      value: '0-100'
    },
    {
      label: '$101-200',
      value: '101-200'
    },

    {
      label: '$201-500',
       value: '201-500'
    },
    {
      label: '$501-1000',
      value: '501-1000'
    },
  ];
  const brandOptions =[  {
    label: 'Default',
    value: '',
  },...carBrands.map((item) => ({
    label: item,
    value: item,
  }))];

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1 bg-white px-4 py-2 rounded-full border"
      >
        <span className="text-xl">
          <IoFilter />
        </span>
        <span>Filter</span>
      </button>
      <section
        onClick={() => setOpen(false)}
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
              Select Brand
            </h6>
            <select
              onChange={(e) => search('brand')(e.target.value)}
              className="mt-2 border  border-gray-900 rounded-md w-full py-2 "
              name=""
              id=""
            >
              {brandOptions.map((brand, index) => (
                <option value={brand.value} key={index}>
                  {brand.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-5">
            <h6 className="font-medium dark:text-slate-100 text-gray-800">
              Select Car Type
            </h6>
            <select
              onChange={(e) => search('type')(e.target.value)}
              className="mt-2 border  border-gray-900 rounded-md w-full py-2 "
              name=""
              id=""
            >
              
              <option value={''} >
                  Default
                </option>
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
              onChange={(e) => search('price')(e.target.value)}
              className="mt-2 border  border-gray-900 rounded-md w-full py-2 "
              name=""
              id=""
            >
              {priceRangeOptions.map((type, index) => (
                <option value={type.value} key={index}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={()=>navigate('/car-listing')}  className="mt-5 bg-red-500 text-white px-4 py-2 ">
              Reset
            </button>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterBar;
