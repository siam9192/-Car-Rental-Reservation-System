import React, { useEffect, useRef, useState } from 'react';
type TDescriptionProps = {
  description: string;
};
const Description = ({ description }: TDescriptionProps) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [fullView, setFullView] = useState(false);

  const sliceWord = 600;

  useEffect(() => {
    const element = descriptionRef.current;
    if (element) {
      const replaced = description.replace(/\n/g, '<br/>');
      element.innerHTML = !fullView
        ? replaced.length > sliceWord
          ? replaced.slice(0, sliceWord) + '...'
          : replaced
        : replaced;
    }
  }, [fullView]);

  const handelSetFullView = (value: boolean) => {
    setFullView(value);
  };
  return (
    <div
      className={`bg-white dark:bg-dark-light-secondary shadow p-10 ${!fullView ? ' max-h-[800px] md:max-h-[500px]' : 'max-h-fit'} transition-all duration-300`}
    >
      <h1 className="text-3xl font-semibold dark:text-slate-50">Description</h1>
      <p
        onClick={() => handelSetFullView(false)}
        ref={descriptionRef}
        className="mt-5 dark:text-slate-100"
      >
        {description}
      </p>
      {!fullView && (
        <div className=" text-end mt-4">
          <button
            onClick={() => handelSetFullView(true)}
            className="px-4 py-2 bg-primary-color text-white rounded-full"
          >
            View Full
          </button>
        </div>
      )}
    </div>
  );
};

export default Description;
