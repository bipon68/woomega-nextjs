import { aboutPageimg } from "@/assets/Image/aboutus/link";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className=" h-[50vh] md:h-[60vh] ">
        <div className=" absolute -z-10">
          <Image
            src={aboutPageimg.banner}
            alt=""
            className=" h-[50vh] md:h-[60vh] "
          />
        </div>
        <div className="h-[60vh] flex items-center justify-center text-center text-5xl  z-10">
          About Us
        </div>
      </div>
    </>
  );
};

export default AboutPage;
