import React from "react";
import ArrivalHeader from "./ArrivalHeader";
import MenuCetagory from "./MenuCetagory";
import ArrivalEnd from "./ArrivalEnd";
import ProductsSection from "./ProductsSection";

const ArrivalPage = () => {
  return (
    <div>
      <ArrivalHeader />
      <MenuCetagory />
      <ProductsSection />
      <div className=" w-full flex justify-center">
        <ArrivalEnd />
      </div>
    </div>
  );
};

export default ArrivalPage;
