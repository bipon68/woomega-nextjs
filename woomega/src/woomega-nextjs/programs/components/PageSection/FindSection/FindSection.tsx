import { aboutPageimg } from "@/assets/Image/aboutus/link";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FindSection = () => {
  return (
    <div className=" h-[60vh]">
      <div className="">
        <Image src={aboutPageimg.findbg} alt="" className=" absolute -z-10" />
        <div className="h-[60vh] flex items-center justify-center text-center relative z-10">
          <div className="  grid gap-9">
            <div className=" text-5xl font-semibold">
              Find Everything You Want
            </div>
            <div className=" text-lg text-gray-400">
              Welcome to the new range of shaving products from master barber.
              <br />
              We have over three decades of experience in the male grooming
              industry.
            </div>
            <div className="">
              <Link href={""} className=" text-base bg-white p-5">
                Discover Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindSection;
