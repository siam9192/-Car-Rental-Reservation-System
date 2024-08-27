import React, { useEffect } from 'react';
import Container from '../../compoments/container/Container';
import CarInfo from './sections/CarInfo';
import BookingForm from './sections/BookingForm';
import PriceSummery from './sections/PriceSummery';
import Description from './sections/Description';
import Reviews from './sections/Reviews';
import { useParams } from 'react-router-dom';
import { useGetCarQuery } from '../../redux/features/Car/Car.api';

const CarDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data, isLoading: carLoading } = useGetCarQuery(id);
  const car = data?.data;
  if (!id) {
    if (!car) {
      throw new Error('Something went wrong');
    }
  }

  if (carLoading) {
    return <div></div>;
  }
  if (!car) {
    throw new Error('Something went wrong');
  }
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
              {/* <BookingForm /> */}
              <PriceSummery car={car as any} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default CarDetails;
