import Image from "next/image";
import React from "react";
import MainPhoto from "@/assets/Image/slider1.png";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="container w-full mt-20 bg-slate-100">
      <div className=" w-full flex items-center ">
        <div className=" grid">
          <span className=" text-4xl"> Summer Collection</span>
          <span className=" text-5xl">50% Off Everything</span>
          <Link
            href={""}
            className="w-36 h-10 flex items-center text-center justify-center text-2xl bg-yellow-500 "
          >
            Shop Now
          </Link>
        </div>
        <div className="">
          <Image src={MainPhoto} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
