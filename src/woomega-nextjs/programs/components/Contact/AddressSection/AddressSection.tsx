import React from "react";
import { address_1, address_2, address_3 } from "./addressList";
import Image from "next/image";

const AddressSection = () => {
  return (
    <div className=" container mx-auto my-36 h-auto">
      <div className=" grid gap-3 justify-center my-11 text-center">
        <div className=" text-5xl font-medium">Our Addresses</div>
        <div className=" text-gray-400">
          Here are our contact details and location.
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className=" grid gap-3">
          <span className=" text-2xl font-medium ">New York Office</span>
          <div className="w-full grid gap-2">
            {address_1.map((item) => (
              <div key={item.id} className=" flex gap-3">
                <Image src={item.icon} alt="" className=" opacity-60 size-5" />
                <div className=" text-gray-400">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" grid gap-3">
          <span className=" text-2xl font-medium">Great Britain</span>
          <div className="w-full grid gap-2">
            {address_2.map((item) => (
              <div key={item.id} className=" flex gap-3">
                <Image src={item.icon} alt="" className=" opacity-60 size-5" />
                <div className=" text-gray-400">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" grid gap-3">
          <span className=" text-2xl font-medium">Netherlands</span>
          <div className="w-full grid gap-2">
            {address_3.map((item) => (
              <div key={item.id} className=" flex gap-3">
                <Image src={item.icon} alt="" className=" opacity-60 size-5" />
                <div className=" text-gray-400">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
