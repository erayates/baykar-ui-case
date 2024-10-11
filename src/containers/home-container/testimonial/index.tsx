// components/Testimonial.tsx
"use client";

import React, { useState, useEffect } from "react";
import Avatar from "@/components/ui/avatar";
import Button from "@/components/ui/button";
import Carousel from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";

const items = [
  {
    id: 1,
    logo: "/assets/logos/kontrastr.svg",
    name: "kontrastr",
    content:
      "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
    personName: "Ralph Edwards",
    position: "Product Designer",
    avatar: "/assets/avatars/ralph-edwards.jpeg",
  },
  {
    id: 2,
    logo: "/assets/logos/zoomer.svg",
    name: "Zoomerr",
    content:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    personName: "Hellen Jummy",
    position: "Team Lead",
    avatar: "/assets/avatars/hellen-jummy.jpeg",
  },
  {
    id: 3,
    logo: "/assets/logos/shells.svg",
    name: "SHELLS",
    content:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    personName: "Hellena John",
    position: "Co-founder",
    avatar: "/assets/avatars/hellana-john.jpeg",
  },
  {
    id: 4,
    logo: "/assets/logos/art-revenue.svg",
    name: "ArtVenue",
    content:
      "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    personName: "David Oshodi",
    position: "Manager",
    avatar: "/assets/avatars/david-oshodi.jpeg",
  },
  {
    id: 5,
    logo: "/assets/logos/waves.svg",
    name: "Waves",
    content:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    personName: "Charolette Hanlin",
    position: "CEO",
    avatar: "/assets/avatars/charolette-hanlin.jpeg",
  },
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  //   // Optional: Auto-slide functionality
  //   useEffect(() => {
  //     const interval = setInterval(nextSlide, 5000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <section id="testimonial">
      <div className="max-w-screen-xl space-y-4 md:space-y-10 my-20 mx-auto">
        <div className="flex justify-center md:justify-between md:items-center inner-container">
          <h2 className="text-2xl leading-9 md:text-3xl font-extrabold">Because they love us</h2>
          <div className="hidden md:flex space-x-6">
            <Button
              variant="outlined"
              color="secondary"
              className="rounded-full p-4"
              onClick={prevSlide}
            >
              <Icon name="arrowLeft" />
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className="rounded-full p-4"
              onClick={nextSlide}
            >
              <Icon name="arrowRight" />
            </Button>
          </div>
        </div>

        <div className="relative md:mx-10">
          <div className="bg-highlight h-[277px] md:h-[421px] absolute top-0 left-0 w-full"></div>
        </div>

        <div className="pt-4 md:pt-10">
          <Carousel currentIndex={currentIndex} items={items} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
