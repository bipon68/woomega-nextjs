import React from "react";
import ArrivalHeader from "./components/ArrivalHeader/ArrivalHeader";
import MenuCetagory from "./components/ArrivalMenu/MenuCetagory";
import ProductsSection from "./components/ProductSection/ProductsSection";
import ArrivalEnd from "./components/ArrivalEnd/ArrivalEnd";


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
