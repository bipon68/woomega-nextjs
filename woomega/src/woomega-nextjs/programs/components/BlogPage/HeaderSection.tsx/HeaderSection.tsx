import { blogImg } from "@/assets/Image/blog/blog";
import Image from "next/image";
import React from "react";

const HeaderSection = () => {
  return (
    <div>
      <div className=" h-[50vh] md:h-[60vh] ">
        <div className=" absolute -z-10">
          <Image
            src={blogImg.banner}
            alt=""
            className=" h-[50vh] md:h-[60vh] "
          />
        </div>
        <div className="h-[60vh] flex items-center justify-center text-center text-5xl  z-10">
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
