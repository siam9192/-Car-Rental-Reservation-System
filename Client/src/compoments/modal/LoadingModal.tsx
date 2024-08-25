import { useState } from 'react';

type TLoadingModalProps = {
  isOpen: boolean;
  title?: string;
};
const LoadingModal = ({ isOpen, title }: TLoadingModalProps) => {
  const openModal = isOpen;
  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <div
        className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full md:w-1/2 lg:w-1/4 mx-2  lg:mx-0 rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${openModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}
        >
          <div className="flex flex-col items-center justify-center space-y-4 h-52">
            <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
            {title && (
              <h6 className="text-center  text-xl font-medium text-gray-800 dark:text-slate-100 ">
                {title}
              </h6>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoadingModal;
