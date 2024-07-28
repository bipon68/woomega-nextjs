import React from "react";
import ArrivalHeader from "./ArrivalHeader";
import MenuCetagory from "./MenuCetagory";
import ArrivalEnd from "./ArrivalEnd";
import ProductsSection from "./ProductsSection";

const ArrivalPage = () => {
  return (
    <div className="container my-0 mx-auto">
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
