import React, { useEffect, useRef, useState } from 'react';
type TDescriptionProps = {
  description: string;
};
const Description = ({ description }: TDescriptionProps) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [fullView, setFullView] = useState(false);
  const des = `const carDescription = "Experience Unmatched Comfort and Convenience with Our Rentable Cars\n\n" +
"Discover the ultimate in travel flexibility with our diverse fleet of rentable cars, meticulously maintained to ensure a smooth and enjoyable journey. Whether you're planning a weekend getaway, a business trip, or simply need a reliable vehicle for a few days, we offer a range of options tailored to suit your needs.\n\n" +
"Luxury and Variety at Your Fingertips\n\n" +
"Our selection features everything from sleek, high-end sedans and spacious SUVs to eco-friendly hybrids and versatile minivans. Each vehicle is equipped with modern amenities designed to enhance your driving experience, including advanced navigation systems, Bluetooth connectivity, and premium audio systems. For added comfort, many of our cars come with climate control, leather seating, and state-of-the-art safety features.\n\n" +
"Seamless Booking Process\n\n" +
"Enjoy a hassle-free reservation process with our user-friendly online platform. Check real-time availability, compare prices, and select your preferred vehicle with just a few clicks. Our transparent pricing includes all essential details, so you won’t encounter hidden fees or surprises. Once your booking is confirmed, you’ll receive instant notifications with all the necessary information to pick up your car.\n\n" +
"Convenient Pick-Up and Drop-Off\n\n" +
"With multiple pick-up and drop-off locations, including major airports, city centers, and train stations, we make it easy to collect and return your vehicle. Our flexible rental periods allow you to tailor the rental duration to your specific needs, whether you require the car for just a few hours or an extended stay.\n\n" +
"Exceptional Customer Support\n\n" +
"Our dedicated customer support team is available around the clock to assist you with any questions or concerns. From helping you select the right vehicle to addressing any issues that arise during your rental period, we’re committed to providing exceptional service and ensuring a smooth experience from start to finish.\n\n" +
"Safety and Cleanliness\n\n" +
"The safety and cleanliness of our vehicles are our top priorities. Each car undergoes rigorous cleaning and sanitization processes between rentals, and regular maintenance checks are conducted to ensure optimal performance and reliability.\n\n" +
"Book your next rental car with us and experience the perfect blend of luxury, convenience, and reliability. No matter where your journey takes you, we’re here to make sure you get there in style.";
`;
  const sliceWord = 600;

  useEffect(() => {
    const element = descriptionRef.current;
    if (element) {
      const replaced = des.replace('\n\n" +', '<br/>');
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
      className={`bg-white dark:bg-dark-light-secondary shadow p-10 ${!fullView ? ' max-h-[500px] md:max-h-[350px]' : 'max-h-fit'} transition-all duration-300`}
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
