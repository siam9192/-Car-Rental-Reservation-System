import Container from '../../compoments/container/Container';
import { cars } from '../../utils/data';
import PrimaryCarCard from '../../compoments/cards/PrimaryCarCard';
import { TCar } from '../../types';

import SecondaryCarCard from '../../compoments/cards/SecondaryCarCard';
import PaginationPrimary from '../../compoments/pagination/PaginationPrimary';
import FilterBox, { TViewType } from './sections/FilterBox';
import { useEffect, useState } from 'react';

const CarListing = () => {
  const [viewType, setViewType] = useState<TViewType>('grid');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handelSetViewType = (type: TViewType) => {
    setViewType(type);
  };
  return (
    <div className="bg-gray-primary dark:bg-dark-light-primary min-h-[80vh] py-5">
      <Container>
        {/* Search box */}
        <FilterBox handelSetViewType={handelSetViewType} />
        <div
          className={`grid gap-5 ${viewType === 'grid' ? ' grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ' : ' grid-cols-1 md:grid-cols-2'}`}
        >
          {cars.map((car, index) => {
            if (viewType === 'grid') {
              return <PrimaryCarCard car={car as TCar} key={index} />;
            } else {
              return <SecondaryCarCard car={car as TCar} key={index} />;
            }
          })}
        </div>
        <div className="mt-5 flex justify-end">
          <PaginationPrimary page={5} />
        </div>
      </Container>
    </div>
  );
};

export default CarListing;
