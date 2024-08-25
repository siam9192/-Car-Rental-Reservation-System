import React from 'react';
import { useLocation } from 'react-router-dom';
type TContainerProps = {
  children: React.ReactNode;
  disablePaths?: string[];
};
const Container = ({ children, disablePaths }: TContainerProps) => {
  const { pathname } = useLocation();
  const isInclude =
    disablePaths?.includes(pathname) ||
    disablePaths?.find((item) => pathname.includes(item))
      ? true
      : false;
  return (
    <div className={`${isInclude ? '' : 'max-w-7xl mx-auto px-2 lg:px-0'}`}>
      {children}
    </div>
  );
};

export default Container;
