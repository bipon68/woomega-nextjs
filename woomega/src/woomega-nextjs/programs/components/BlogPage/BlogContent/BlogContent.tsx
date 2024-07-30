import React from "react";
import Image from "next/image";
import { list } from "./list";
import SideContent from "./SideContent";

const BlogContent = () => {
  return (
    <div className="container mx-auto my-25 grid md:flex gap-20">
      <div className=" w-11/12">
        <div className="  grid justify-center text-center gap-9">
          {list.map((item) => (
            <div key={item.id} className="my-3 grid gap-3 border-b">
              <Image src={item.img} alt="" className=" size-full" />
              <div className=" text-2xl ">{item.title}</div>
              <div className=" text-xs text-gray-400">{item.date}</div>
              <div className="text-gray-400"> {item.details}</div>
              <div className=" mb-6">
                <button className=" border-b border-black">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <SideContent />
      </div>
    </div>
  );
};

export default BlogContent;
