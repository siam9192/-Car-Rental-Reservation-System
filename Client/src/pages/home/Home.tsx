import React from 'react';
import Banner from './Sections/Banner';
import FeaturedCars from './Sections/FeaturedCars';
import WhyChooseUs from './Sections/WhyChooseUs';
import Testimonial from './Sections/Testimonial';

const Home = () => {
  return (
    <main>
      <Banner />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonial />
    </main>
  );
};

export default Home;
