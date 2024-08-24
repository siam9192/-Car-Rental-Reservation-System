import Container from '../../compoments/container/Container';
import { cars } from '../../utils/data';
import PrimaryCarCard from '../../compoments/cards/PrimaryCarCard';
import { TCar } from '../../types';

import SecondaryCarCard from '../../compoments/cards/SecondaryCarCard';
import PaginationPrimary from '../../compoments/pagination/PaginationPrimary';
import FilterBox from './sections/FilterBox';
import { useEffect } from 'react';

const CarListing = () => {
  const viewType = 'grid';
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-primary dark:bg-dark-light-primary min-h-[80vh] py-5">
      <Container>
        {/* Search box */}
        <FilterBox />
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
