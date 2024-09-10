import { contactus } from "@/assets/Image/contactus/contactus";
import Image from "next/image";
import React from "react";

const MapTouch = () => {
  return (
    <div>
      <div className=" ">
        <div className="">
          <Image
            src={contactus.map}
            alt=""
            className="w-full h-[70vh] absolute -z-1"
          />
          <div className=" container mx-auto pt-[50vh] mb-9 flex justify-center relative z-1">
            <div className="md:w-1/2 h-[80vh] flex justify-center bg-white shadow-xl">
              <div className=" w-full px-20">
                <div className=" text-5xl py-9 md:py-16  flex items-center justify-center text-center">
                  Get in Touch
                </div>
                <div className=" grid gap-9">
                  <div className=" grid gap-3">
                    <div>Full Name</div>
                    <input
                      type="text"
                      placeholder=" Jonathon Lee"
                      className=" border-b outline-none hover:border-b-primary"
                    />
                  </div>
                  <div className=" grid gap-3">
                    <div>Email Address</div>
                    <input
                      type="email"
                      placeholder=" example@gmail.com"
                      className=" border-b outline-none hover:border-b-primary"
                    />
                  </div>
                  <div className=" grid gap-3">
                    <div>Subject</div>
                    <input
                      type="text"
                      placeholder=" Write subject name"
                      className=" border-b outline-none hover:border-b-primary"
                    />
                  </div>
                  <div className=" grid gap-3">
                    <div>Your Message</div>
                    <input
                      type="text"
                      placeholder=" write a masage"
                      className=" border-b outline-none hover:border-b-primary"
                    />
                  </div>
                </div>
                <button className="w-full my-9 bg-black text-white hover:bg-primary">
                  <div className="py-5">Send message</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapTouch;
