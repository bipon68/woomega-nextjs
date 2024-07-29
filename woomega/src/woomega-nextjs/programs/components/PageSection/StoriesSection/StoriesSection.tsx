import { aboutPageimg } from "@/assets/Image/aboutus/link";
import Image from "next/image";
import React from "react";

const StoriesSection = () => {
  return (
    <div className="w-full h-screen mb-16">
      <div className="md:flex  w-4/5 justify-center items-center">
        <div className=" pt-11 md:pt-32 ml-5">
          <Image
            src={aboutPageimg.story}
            alt=""
            className=" md:relative z-10 "
          />
        </div>
        <div className=" md:flex justify-center">
          <div className="w-full md:w-1/2 bg-gray-200 rounded-10 absolute -z-10">
            <div className="w-full md:w-1/2 float-right p-6 grid gap-5">
              <span className=" text-4xl font-semibold">Stories</span>
              <p className=" text-md text-gray-500">
                A few years ago, Melissa was running Tiny Tags from her homebase
                in California and the focusing on hand-stamped pieces, but a
                move to Massachusetts coincided with her desire Suspendisse sit
                amet magna at nunc rhoncus venenatis. Vestibulum ante primis
                faucibus orci luctus et Aliquam nunc lectus, interdum sed
                mauris. to elevate her designs by switching to laser engraving
                with local manufacturers. Over 14 artisans are involved in every
                single Tiny Tags creation!
              </p>
              <div>
                <Image src={aboutPageimg.signature} alt="" />
              </div>
              <div className=" text-md text-gray-500"> Founder of WooMega</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;
