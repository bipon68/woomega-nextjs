import React from "react";
import { featuredList } from "./list";
import Image from "next/image";

const FeaturedSec = () => {
  return (
    <div className="container mx-auto my-0">
      <div className=" w-full mb-9 grid text-center items-center justify-center ">
        <div className=" text-5xl font-medium">Featured Services</div>
        <div className=" my-3 text-gray-500">
          We Featured our Best services for all our customers
        </div>
      </div>
      <div className=" w-full mb-32">
        <div className=" flex flex-wrap justify-center gap-9">
          {featuredList.map((item) => (
            <div key={item.id} className="">
              <div className=" md:w-98 flex items-center text-center">
                <div className=" grid gap-3">
                  <div className=" flex justify-center">
                    <Image src={item.icon} alt="" />
                  </div>
                  <span className=" text-xl ">{item.title}</span>
                  <div className=" text-gray-500 text-base">{item.Details}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSec;
