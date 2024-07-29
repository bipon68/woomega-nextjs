import Image from "next/image";
import React from "react";
import sendIcon from "@/assets/Icon/contactIcon/icon-send.svg"

const Newsletter = () => {
  return (
    <div className=" w-68 py-4">
      <span className="flex py-4 font-semibold text-2xl">
        Newsletter Signup
      </span>
      <div>
        <p className=" text-gray-500">
          Delivering the latest product trends & industry news straight to your
          inbox
        </p>
        <div className="flex items-center justify-between bg-black w-full h-10 p-1">
          <input
            type="text"
            placeholder="example@email.com"
            className=" text-white bg-transparent w-full focus:outline-none p-1"
          />
          <div className="bg-white w-16 h-9">
            <button className="size-full">
              <Image src={sendIcon} alt="" className="size-full p-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
