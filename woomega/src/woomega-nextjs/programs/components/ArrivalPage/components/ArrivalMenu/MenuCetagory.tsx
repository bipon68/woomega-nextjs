import React from "react";
import Link from "next/link";
import FilterSection from "../FilterSection/FilterSection";
import { ArrivalMenuList } from "./ArrivalMenuList";

const MenuCetagory = () => {
  return (
    <div className=" py-9 flex justify-between">
      <div className="flex flex-wrap gap-4">
        {ArrivalMenuList.map((item) => (
          <div key={item.id} className="flex gap-1">
            <Link href={""} className="font-medium text-lg text-gray-500 before:contents">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <FilterSection />
      </div>
    </div >
  );
};

export default MenuCetagory;
