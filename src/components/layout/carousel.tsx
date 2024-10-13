"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Avatar from "../ui/avatar";
import { ITestimonial } from "@/types/testimonial";
import { testimonials } from "@/_mock/testimonial";
import Icon from "../ui/icon";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(2);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="pt-4 md:pt-10 overflow-x-auto md:overflow-hidden px-4">
      <div className="absolute hidden right-20 top-0 md:flex space-x-6">
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

      <div
        className="flex space-x-4 md:space-x-6 pb-4 transition-transform duration-300 ease-in-out"
        style={{
          transform: isMobile
            ? `translateX(-${currentIndex / testimonials.length}%)`
            : `translateX(-${(currentIndex * 50) / testimonials.length}%)`,
        }}
      >
        {testimonials.map((item: ITestimonial) => (
          <CarouselCard
            key={item.id}
            logo={item.logo}
            name={item.name}
            content={item.content}
            personName={item.personName}
            position={item.position}
            avatar={item.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

const CarouselCard: React.FC<{
  logo: string;
  name: string;
  content: string;
  personName: string;
  position: string;
  avatar: string;
}> = ({ logo, name, content, personName, position, avatar }) => {
  return (
    <div className="w-full max-w-[319px] md:max-w-[383px] flex-shrink-0">
      <div className="bg-white p-6 md:p-8 space-y-2 md:space-y-4 h-full flex flex-col rounded-[20px] shadow-carousel">
        <div className="flex items-center py-5 space-x-2">
          <Image
            src={logo}
            alt={name}
            width={24}
            height={24}
            className="w-auto h-auto"
          />
          <h2 className="font-semibold text-slate-600 text-sxl">{name}</h2>
        </div>
        <p className="flex-grow text-sm md:text-sxl text-black">{content}</p>
        <div className="flex items-center space-x-4 pt-4 md:pt-5">
          <Avatar src={avatar} name={personName} />
          <div>
            <p className="text-md font-normal">{personName}</p>
            <p className="text-sm text-slate-600">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
