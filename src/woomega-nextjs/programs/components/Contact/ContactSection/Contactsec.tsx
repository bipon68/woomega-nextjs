import { contactus } from "@/assets/Image/contactus/contactus";
import Image from "next/image";
import React from "react";

const Contactsec = () => {
  return (
    <div>
      <div className=" h-[50vh] md:h-[60vh] ">
        <div className=" absolute -z-10">
          <Image
            src={contactus.banner}
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

export default Contactsec;
