import Container from '../../compoments/container/Container';
import { cars } from '../../utils/data';
import PrimaryCarCard from '../../compoments/cards/PrimaryCarCard';
import { TCar } from '../../types';

import SecondaryCarCard from '../../compoments/cards/SecondaryCarCard';
import PaginationPrimary from '../../compoments/pagination/PaginationPrimary';
import FilterBox, { TViewType } from './sections/FilterBox';
import { useEffect, useState } from 'react';
import { useGetCarsQuery } from '../../redux/features/Car/Car.api';

const CarListing = () => {
  const [viewType, setViewType] = useState<TViewType>('grid');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading: carsLoading } = useGetCarsQuery(undefined);
  const cars = data?.data;

  const handelSetViewType = (type: TViewType) => {
    setViewType(type);
  };

  return (
    <div className="bg-gray-primary dark:bg-dark-light-primary min-h-[90vh] py-5 relative overflow-hidden">
      <Container>
        {/* Search box */}
        <FilterBox handelSetViewType={handelSetViewType} />
        {cars?.length ? (
          <div
            className={`grid gap-5 ${viewType === 'grid' ? ' grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ' : ' grid-cols-1 md:grid-cols-2'}`}
          >
            {cars?.map((car, index) => {
              if (viewType === 'grid') {
                return <PrimaryCarCard car={car as TCar} key={index} />;
              } else {
                return <SecondaryCarCard car={car as TCar} key={index} />;
              }
            })}
          </div>
        ) : (
          <div className="mt-10 flex items-center justify-center">
            <h1 className="mt-32 text-3xl md:text-4xl">No Results Found</h1>
          </div>
        )}
        {cars?.length && (
          <div className="mt-5 flex justify-end">
            <PaginationPrimary page={5} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default CarListing;
