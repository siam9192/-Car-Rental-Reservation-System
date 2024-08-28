import React, { KeyboardEvent, useEffect, useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { FaListUl } from 'react-icons/fa';
import { BiSolidGridAlt } from 'react-icons/bi';
import FilterBar from '../FilterBar';
import { useLocation, useNavigate } from 'react-router-dom';

export type TViewType = 'grid' | 'list';
type TFilterBoxProps = {
  handelSetViewType: (type: TViewType) => void | any;
};
const FilterBox = ({ handelSetViewType: setType }: TFilterBoxProps) => {
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



  useEffect(() => {
    setType(viewType);
  }, [viewType]);



  const handelSetViewType = (type: TViewType) => {
    localStorage.setItem('viewType', type);
    setViewType(type);
  };
  const location = useLocation();
  const navigate = useNavigate();

  const handelSearch = (name: string) => {
    return (value: string) => {
      const searchParams = new URLSearchParams(location.search);
    
      searchParams.delete(name);
      if (value) {
        searchParams.append(name, value);
      }

      navigate(`/car-listing?${searchParams.toString()}`);
    };
  };

  const handelKeywordSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (e.key === 'Enter') {
      handelSearch('searchTerm')(target.value);
    }
  };


  return (
    <div className=" flex  flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 py-10">
      <div className=" flex items-center gap-2  w-10/12 md:w-1/2 lg:w-1/3 bg-white rounded-full p-2 border ">
        <LuSearch />
        <input
          onKeyDown={handelKeywordSearch}
          type="text"
          className="w-full border-none  outline-none"
          placeholder="Search keyword"
        />
      </div>
      <div className="flex items-center justify-end md:justify-start gap-3   ">
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
        <FilterBar search={handelSearch} />
      </div>
    </div>
  );
};

export default FilterBox;
