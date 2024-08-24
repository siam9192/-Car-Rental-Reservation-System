import React from 'react';
type THeadingProps = {
  title: string;
  description: string;
};
const Heading = ({ title, description }: THeadingProps) => {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-3xl md:text-4xl text-black dark:text-slate-50 font-bold">
        {title}
      </h1>
      <p className="dark:text-slate-200">{description.replace(',,', '\n')}</p>
    </div>
  );
};

export default Heading;
