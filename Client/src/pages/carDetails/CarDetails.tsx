import React, { useEffect } from 'react';
import Container from '../../compoments/container/Container';
import { cars } from '../../utils/data';
import CarInfo from './sections/CarInfo';
import BookingForm from './sections/BookingForm';
import PriceSummery from './sections/PriceSummery';
import Description from './sections/Description';
import Reviews from './sections/Reviews';

const CarDetails = () => {
  const car = cars[0];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-[80vh] bg-gray-primary dark:bg-dark-light-primary">
      <section className=" p-5 bg-secondary-color">
        <Container>
          <h1 className="text-4xl text-white ">Car-Details-Page</h1>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid grid-cols-1  lg:grid-cols-12 gap-5">
            <div className="lg:col-span-8 space-y-10">
              <CarInfo car={car as any} />
              <Description description={car.description} />
              <Reviews />
            </div>
            <div className="lg:col-span-4 space-y-10">
              <BookingForm />
              <PriceSummery car={car as any} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default CarDetails;
