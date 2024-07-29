import React from "react";
import { PrartnerList } from "./link";
import Image from "next/image";

const PartnerSection = () => {
  return (
    <div className=" container flex items-center justify-center text-center my-11 mx-auto">
      <div className=" grid  gap-11 ">
        <div className=" w-full">
          <div className=" text-6xl">Our Partners</div>
          <div>There are our great partners who always make us Proud</div>
        </div>
        <div className=" flex flex-wrap items-center justify-center gap-22 md:gap-32 ">
          {PrartnerList.map((item) => (
            <div key={item.id}>
              <div className="w-20 md:w-40">
                <Image src={item.img} alt="" className=" size-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
