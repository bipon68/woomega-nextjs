import React from "react";
import { list_5 } from "./populerlist";
import Image from "next/image";

const Instragram = () => {
  return (
    <div className=" flex flex-wrap gap-1">
      {list_5.map((item) => (
        <div key={item.id}>
          <Image src={item.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Instragram;
