import React from "react";
import TopHeader from "./Headers/TopHeader";
import MiddleHeader from "./Headers/MiddleHeader";
import BottomHeader from "./Headers/BottomHeader";
import MobileHeader from "./Headers/MobileHeader";
const Header = () => {
  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader/>
      <MobileHeader/>
    </>
  );
};

export default Header;
