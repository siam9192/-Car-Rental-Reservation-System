import React, { useEffect, useState } from 'react';
import Heading from '../../../compoments/reuse/Heading';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const Testimonial = () => {
  const array = [
    {
      name: 'John Doe',
      image:'https://aximo-react.vercel.app/assets/team1-DmWE10zh.png',
      designation: 'Student',
      testimonialDescription:
        'Being a student, Taskiee has been my go-to tool for organizing assignments and study schedules. The visual timeline and reminder features have helped me stay on top of my coursework',
      keyWord: 'Child',
    },
    {
      name: 'Jane Doe',
      image:'https://aximo-react.vercel.app/assets/team2-CCsDsUp2.png',
      designation: 'Freelancer',
      testimonialDescription:
        'Taskiee has been a game-changer for my freelance work. It allows me to effortlessly prioritize tasks, set realistic deadlines, and maintain a healthy work-life balance',
      keyWord: 'Gentlewoman',
    },
    {
      name: 'Shiyam Sarker',
      image:'https://aximo-react.vercel.app/assets/team3-Dq8iIK3F.png',
      designation: 'Entrepreneur',
      testimonialDescription:
        "Taskiee's collaborative features have been instrumental in streamlining tasks for my startup. The ability to share projects and track progress with the team has enhanced our efficiency.",
      keyWord: 'Gentleman',
    },
    {
      name: 'Bob Smith',
      image:'https://aximo-react.vercel.app/assets/team4-CN3ED17F.png',
      designation: 'Creative Professional',
      testimonialDescription:
        'As a creative professional, Taskiee has simplified my project management. The clean design and goal tracking feature keep me inspired and organized throughout the creative process.',
      keyWord: 'Child',
    }
  ];

  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? array.length - 2 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === array.length - 2 ? 0 : currentSlider + 1
    );
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <section className="p-5 md:py-10">
      <Heading
        title="What Customer Think About Us ?"
        description="Experience hassle-free car rentals with our diverse fleet,, competitive rates, 24/7 customer support, and quick, easy online booking."
      />
      <div className=" mt-5 w-full h-full flex items-center justify-end gap-2 px-5">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="flex justify-center items-center   px-4 py-1  text-3xl md:text-4xl bg-primary-color text-white"
        >
          <FaLongArrowAltLeft />
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="flex justify-center items-center   px-4 py-1  text-3xl md:text-4xl bg-primary-color text-white"
        >
          <FaLongArrowAltRight />
        </button>
      </div>
      <div className="   flex flex-row items-center overflow-hidden gap-5 lg:gap-10 ">
        <div className="relative overflow-hidden">
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex"
            style={{
              transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)`,
            }}
          >
            {/* sliders */}
            {array.map((each, idx) => (
              <div
                key={idx}
                className="p-4 min-w-full md:min-w-[50%] rounded-lg"
              >
                <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5  mb-4 text-secondary-color"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 text-gray-500 dark:text-slate-100">
                    {each?.testimonialDescription}
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      src={each.image}
                      alt="carousel navigate ui"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900 dark:text-slate-50">
                        {each.name}
                      </span>
                      <span className="text-gray-500 text-sm text-slate-100">
                        {each?.designation}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
