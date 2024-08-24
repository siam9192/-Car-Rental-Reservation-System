import React from 'react';
import Heading from '../../../compoments/reuse/Heading';
const data = [
  {
    icon: '🚗', // Replace with actual icon component or image
    title: 'Wide Selection of Vehicles',
    description:
      'Choose from a diverse fleet including economy, luxury, SUVs, and more, all meticulously maintained.',
  },
  {
    icon: '💲', // Replace with actual icon component or image
    title: 'Affordable Rates',
    description:
      'Enjoy competitive pricing and exclusive deals with no hidden fees, ensuring you get the best value for your money.',
  },
  {
    icon: '🖥️', // Replace with actual icon component or image
    title: 'Seamless Booking Experience',
    description:
      'Easily book online or via our app with a user-friendly interface, quick confirmation, and flexible options.',
  },
  {
    icon: '🕒', // Replace with actual icon component or image
    title: '24/7 Customer Support',
    description:
      'Our dedicated team is available around the clock to assist with any questions or concerns, ensuring a smooth rental experience.',
  },
  {
    icon: '✔️', // Replace with actual icon component or image
    title: 'Reliable Service',
    description:
      'Depend on us for punctual delivery and pick-up, with well-maintained vehicles that meet high safety standards.',
  },
  {
    icon: '🔄', // Replace with actual icon component or image
    title: 'Flexible Rental Terms',
    description:
      'Benefit from customizable rental periods and options to accommodate both short and long-term needs.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="p-5 md:py-10">
      <Heading
        title="Why Choose Us?"
        description="Experience hassle-free car rentals with our diverse fleet,, competitive rates, 24/7 customer support, and quick, easy online booking."
      />
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {data.map((item, index) => {
          return (
            <div className=" flex items-center gap-2">
              <span className="text-4xl py-4 px-2 rounded-lg bg-secondary-color">
                {item.icon}
              </span>
              <div className="space-y-2">
                <h1 className="text-xl md:text-2xl text-black dark:text-slate-50 font-semibold">
                  {item.title}
                </h1>
                <p className="dark:text-slate-100">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
