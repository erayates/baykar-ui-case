"use client";

import React, { useState } from "react";
import Carousel from "@/components/layout/carousel";
import Icon from "@/components/ui/icon";
import { testimonials } from "@/_mock/testimonial";

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  //   // Optional: Auto-slide functionality
  //   useEffect(() => {
  //     const interval = setInterval(nextSlide, 5000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <section id="testimonial">
      <div className="max-w-screen-xl space-y-4 md:space-y-10 mb-12 md:my-20 mx-auto">
        <div className="flex justify-center md:justify-between md:items-center inner-container">
          <h2 className="text-2xl leading-9 md:text-3xl font-extrabold">
            Because they love us
          </h2>
          <div className="hidden md:flex space-x-6">
            <button
              className="w-12 h-12 border-2 flex items-center justify-center border-secondary rounded-full hover:bg-secondary hover:text-white"
              onClick={prevSlide}
            >
              <Icon name="arrowLeft" />
            </button>

            <button
              className="w-12 h-12 border-2 flex items-center justify-center border-secondary rounded-full hover:bg-secondary hover:text-white"
              onClick={nextSlide}
            >
              <Icon name="arrowRight" />
            </button>
          </div>
        </div>

        <div className="relative md:mx-10">
          <div className="bg-highlight h-[287px] md:h-[421px] absolute top-0 left-0 w-full"></div>
        </div>

        <Carousel currentIndex={currentIndex} items={testimonials} />
      </div>
    </section>
  );
};

export default Testimonial;
