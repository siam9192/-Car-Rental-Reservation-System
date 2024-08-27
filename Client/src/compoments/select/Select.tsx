type TOption = {
  label: string;
  value: string | number;
  isChecked?: boolean;
};

type TSelectProps = {
  label?: string;
  options: TOption[];
  onChange?: (value: any) => void | any;
};
import { useEffect, useState } from 'react';

const Select = ({ label, options, onChange }: TSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<null | number>(null);

  useEffect(() => {
    const handler = () => {
      setIsOpen(false);
    };
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  return (
    <div className="space-y-2">
      {label && <label className="font-medium pb-2">{label}</label>}
      <div onClick={(e) => e.stopPropagation()}>
        {/* dropdown - btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="mx-auto flex  items-center justify-between rounded-md dark:bg-dark-light bg-white dark:bg-dark-light-secondary px-6 py-2 border-2 border-black dark:border-gray-50 "
        >
          <h1 className="font-medium dark:text-gray-50 text-gray-600">
            {selectedValue === null
              ? options[0].label
              : options[selectedValue].label}
          </h1>
          <svg
            className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`}
            width={25}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M7 10L12 15L17 10"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{' '}
            </g>
          </svg>
        </div>
        {/* dropdown - options  */}
        <div
          className={`${isOpen ? 'visible -top-0 opacity-100' : 'invisible -top-4 opacity-0'}  relative mx-auto  w-full   duration-300`}
        >
          <div className="absolute w-full rounded-xl py-4 mt-2 dark:bg-dark-light bg-white dark:bg-dark-light-secondary border max-h-52 overflow-y-auto z-50">
            {options?.map((option, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  setSelectedValue(idx);
                  if (onChange) {
                    onChange(option.value);
                  }
                  setIsOpen(false);
                }}
                className="px-6 py-2 dark:text-gray-50 text-black dark:hover:bg-black hover:bg-gray-100"
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
