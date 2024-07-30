import React from "react";
import SideContent from "../BlogPage/BlogContent/SideContent";
import { bloglist1, bloglist2 } from "./list";
import Image from "next/image";
import Customer from "./Customer";

const BlogDetailsContent = () => {
  return (
    <div>
      <div className="container mx-auto my-25 grid md:flex gap-20">
        <div className=" w-11/12">
          <div className="  grid justify-center text-center gap-9">
            <div>
              {bloglist1.map((item) => (
                <div key={item.id}>
                  <Image src={item.img} alt="" />
                  <div className=" text-gray-400">{item.title}</div>
                </div>
              ))}
            </div>
            <div className=" grid gap-9 ">
              <Customer />
            </div>
            <div className=" flex gap-3">
              {bloglist2.map((item) => (
                <div key={item.id}>
                  <Image src={item.img} alt="" />
                </div>
              ))}
            </div>
            <div className=" grid gap-9 ">
              <Customer />
            </div>
            <div>
              {bloglist1.map((item) => (
                <div key={item.id}>
                  <Image src={item.img} alt="" />
                  <div className=" text-gray-400">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <SideContent />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsContent;
