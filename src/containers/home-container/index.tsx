import React from "react";
import Hero from "./hero";
import Products from "./products";

const HomeContainer: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <Products />
    </React.Fragment>
  );
};

export default HomeContainer;
