import React from "react";
import Hero from "./hero";
import Products from "./products";
import WhyJoinUs from "./why-join-us";

const HomeContainer: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <Products />
      <WhyJoinUs />
    </React.Fragment>
  );
};

export default HomeContainer;
