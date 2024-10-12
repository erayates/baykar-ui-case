"use client";

import React from "react";
import Image from "next/image";
import Avatar from "../ui/avatar";
import { ITestimonial } from "@/types/testimonial";

interface CarouselProps {
  currentIndex: number;
  items: ITestimonial[];
}

const Carousel: React.FC<CarouselProps> = ({ currentIndex, items }) => {
  return (
    <div className="relative pt-4 md:pt-10 overflow-x-auto md:overflow-hidden">
      <div
        className="flex ml-4 space-x-4 md:space-x-6 pb-4 transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / items.length}%)`,
        }}
      >
        {items.map((item) => (
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
    <div className="md:w-1/3 max-w-[319px] md:max-w-[383px] flex-shrink-0">
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
