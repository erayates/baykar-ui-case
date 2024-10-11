import React from "react";
import Hero from "./hero";
import Products from "./products";
import WhyJoinUs from "./why-join-us";
import Testimonial from "./testimonial";

const HomeContainer: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <Products />
      <WhyJoinUs />
      <Testimonial />
    </React.Fragment>
  );
};

export default HomeContainer;
