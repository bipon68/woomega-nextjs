import React from "react";
import { list_2 } from "./populerlist";

const Categories = () => {
  return (
    <div className=" grid gap-3">
      {list_2.map((item) => (
        <div key={item.id} className=" flex justify-between">
          <div className=" text-gray-400 ">{item.title}</div>
          <div className=" text-gray-400 ">{item.count}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
