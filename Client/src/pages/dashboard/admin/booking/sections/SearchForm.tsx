import React, { useEffect, useState } from 'react';
import Select from '../../../../../compoments/select/Select';
import { carBrands, carTypes, locations } from '../../../../../utils/data';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useLocation, useNavigate } from 'react-router-dom';
const SearchForm = () => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const locationOptions = [
    { label: 'Location', value: '' },
    ...locations.map((item) => ({ label: item, value: item })),
  ];
  const brandOptions = [
    { label: 'Brand', value: '' },
    ...carBrands.map((item) => ({ label: item, value: item })),
  ];
  const carTypeOptions = [
    { label: 'Type', value: '' },
    ...carTypes.map((item) => ({ label: item, value: item })),
  ];

  useEffect(() => {
    const handler = () => {
      setOpenDatePicker(false);
    };
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const handelSearch = (name: string) => {
    return (value: string) => {
      const searchParams = new URLSearchParams(location.search);

      searchParams.delete(name);
      if (value) {
        searchParams.append(name, value);
      }

      navigate(`/dashboard/booking?${searchParams.toString()}`);
    };
  };
  return (
    <div className="mt-5 grid md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 md:p-10 bg-white dark:bg-dark-light-secondary shadow rounded-lg ">
      <Select onChange={handelSearch('location')} options={locationOptions} />
      <Select onChange={handelSearch('brand')} options={brandOptions} />
      <Select onChange={handelSearch('type')} options={carTypeOptions} />

      {/* Date picker */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid grid-cols-2 gap-5"
      >
        <input
          onClick={() => setOpenDatePicker(!openDatePicker)}
          value={new Date(state[0].startDate).toDateString()}
          type="text"
          readOnly
          placeholder="Pick up date"
          className="w-full mt-1 p-2 border-2  dark:text-slate-100 dark:bg-transparent border-gray-500 dark:border-slate-200 dark:border-opacity-35  font-medium"
        />
        <input
          type="text"
          placeholder="Drop up date"
          value={new Date(state[0].endDate).toDateString()}
          onClick={() => setOpenDatePicker(!openDatePicker)}
          readOnly
          className="w-full mt-1 p-2 border-2  dark:text-slate-100 dark:bg-transparent border-gray-500 dark:border-slate-200 dark:border-opacity-35  font-medium"
        />
        {openDatePicker && (
          <div className="absolute top-0 left-0">
            <DateRange
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={state}
              onChange={(item) => {
                setState([item.selection]);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
