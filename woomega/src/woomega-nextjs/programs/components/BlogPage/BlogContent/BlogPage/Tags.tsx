import React from "react";
import { list_3 } from "./populerlist";

const Tags = () => {
  return (
    <div className="">
      {list_3.map((item) => (
        <div key={item.id}>
          <div className=" text-gray-400 bg-gray-500">
            <div className=" "> {item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tags;
