import React, { useEffect, useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { IoFilter } from 'react-icons/io5';
import { FaListUl } from 'react-icons/fa';
import { BiSolidGridAlt } from 'react-icons/bi';

type TViewType = 'grid' | 'list';

const FilterBox = () => {
  const [viewType, setViewType] = useState<TViewType>('list');

  useEffect(() => {
    const type = localStorage.getItem('viewType');
    if ((type && !['grid', 'list'].includes(type)) || !type) {
      localStorage.setItem('viewType', 'grid');
      setViewType('grid');
    } else {
      setViewType(type as TViewType);
    }
  }, []);

  const handelSetViewType = (type: TViewType) => {
    localStorage.setItem('viewType', type);
    setViewType(type);
  };
  return (
    <div className=" flex  flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 py-10">
      <div className=" flex items-center gap-2  w-10/12 md:w-1/2 lg:w-1/3 bg-white rounded-full p-2 border ">
        <LuSearch />
        <input
          type="text"
          className="w-full border-none  outline-none"
          placeholder="Search keyword"
        />
      </div>
      <div className="flex items-center justify-end md:justify-start gap-3   ">
        <button className="flex items-center gap-1 bg-white px-4 py-2 rounded-full border">
          <span className="text-xl">
            <IoFilter />
          </span>
          <span>Filter</span>
        </button>
        <button
          onClick={() => handelSetViewType('list')}
          className={`text-xl p-2  ${viewType === 'list' ? 'bg-primary-color' : 'bg-white border'} rounded-full  `}
        >
          <FaListUl />
        </button>
        <button
          onClick={() => handelSetViewType('grid')}
          className={`text-xl p-2  ${viewType === 'grid' ? 'bg-primary-color' : 'bg-white border'} rounded-full  `}
        >
          <BiSolidGridAlt />
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
