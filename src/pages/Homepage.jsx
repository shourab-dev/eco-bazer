import React from "react";
import BannerSlider from "../components/Banner/BannerSlider";
import ProductLists from "../components/Products/ProductLists";
import CountUp from "react-countup";

const Homepage = () => {
  return (
    <>
      <BannerSlider />
      <div className="text-center">
        <h2>
          <CountUp end={100} duration={5} suffix=" k+" />
        </h2>
      </div>
      <ProductLists heading={"Featured Products"} />
    </>
  );
};

export default Homepage;
