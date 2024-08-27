import { useState } from 'react';
type TPaginationPrimaryProps = {
  page: number;
};
const PaginationPrimary = ({ page }: TPaginationPrimaryProps) => {
  const [pageNumber, setPageNumber] = useState(0);
  // Adjust the page numbers the way you want
  const updatePageNumber = (num: number) => {
    if (num > page - 1 || 0 > num) {
      return setPageNumber(0);
    }
    setPageNumber(num);
  };
  return (
    <div className="flex  items-center gap-5 dark:bg-dark-light-secondary  text-gray-700 dark:text-slate-100 p-2 shadow-lg rounded-md w-fit  select-none">
      {/* left arrow */}
      <div
        onClick={() => {
          updatePageNumber(pageNumber - 1);
        }}
        className="text-[12px] cursor-pointer font-semibold px-1 py-1"
      >
        PREV
      </div>
      <div className="flex justify-center items-center gap-2  ">
        {[...Array(page).keys()].map((item, ind) => (
          <div
            key={item}
            onClick={() => {
              setPageNumber(item);
            }}
            className={`cursor-pointer hover:scale-110  border-b-2  text-sm scale-100 transition-all duration-200 px-3 ${pageNumber === item ? 'border-sky-300' : 'border-white'}   font-semibold   py-[6px] `}
          >
            {item + 1}
          </div>
        ))}
      </div>
      {/* right arrow */}
      <div
        onClick={() => {
          updatePageNumber(pageNumber + 1);
        }}
        className="text-[12px] cursor-pointer font-semibold px-1 py-1"
      >
        NEXT
      </div>
    </div>
  );
};

export default PaginationPrimary;
