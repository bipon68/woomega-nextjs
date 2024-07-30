import React from "react";
import Image from "next/image";
import { list_1 } from "./populerlist";

const Populer = () => {
  return (
    <div className="py-7 grid gap-9">
      {list_1.map((item) => (
        <div key={item.id} className=" flex gap-3 border-b">
          <Image src={item.img} alt="" className=" " />
          <div>
            <div className=" text-gray-400">{item.title}</div>
            <div>{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Populer;
