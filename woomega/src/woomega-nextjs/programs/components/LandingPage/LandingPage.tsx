import Image from "next/image";
import React from "react";
import MainPhoto from "@/assets/Image/slider1.png";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex justify-center mt-20 ">
      <div className="container flex justify-between items-center ">
        <div className=" grid gap-5">
          <span className=" text-xl md:text-4xl"> Summer Collection</span>
          <span className=" text-3xl md:text-5xl">50% Off Everything</span>
          <Link
            href={""}
            className="w-36 h-10 flex items-center text-center justify-center text-2xl bg-[#fdbf70] btn "
          >
            Shop Now
          </Link>
        </div>
        <div className=" ">
          <Image
            src={MainPhoto}
            alt=""
            className="w-1/2 md:w-full float-right"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
