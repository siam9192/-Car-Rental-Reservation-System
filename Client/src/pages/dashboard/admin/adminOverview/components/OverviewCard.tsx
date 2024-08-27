import OverViewCardContainer from './OverviewCardContainer';

const OverviewCard = ({ data }: { data: any }) => {
  return (
    <OverViewCardContainer>
      <div className="">
        <div className="flex  justify-between">
          <h6 className="text-xl font-medium dark:text-slate-50">
            {data.name}
          </h6>
          <span className="p-2 bg-primary-color  rounded-full text-white">
            {data.icon}
          </span>
        </div>
        <div className="mt-2">
          <h3 className="text-2xl text-gray-900 dark:text-slate-100 font-medium mb-4">
            {data.value}
          </h3>
          <p className="text-[14px] font-medium text-gray-600">
            <span className="p-1 text-[14px] text-blue-600 bg-info_color bg-opacity-20 rounded-md">
              3.85%
            </span>{' '}
            Since last week
          </p>
        </div>
      </div>
    </OverViewCardContainer>
  );
};

export default OverviewCard;
