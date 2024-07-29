import React from "react";
import Link from "next/link";
import FilterSection from "../FilterSection/FilterSection";
import { ArrivalMenuList } from "./ArrivalMenuList";

const MenuCetagory = () => {
  return (
    <div className=" py-9 flex justify-between">
      <div className="flex flex-wrap gap-6">
        {ArrivalMenuList.map((item) => (
          <div key={item.id} className="flex gap-1">
            <Link href={""} className="font-medium text-lg text-gray-500 relative hover:text-primary transition-all ease-in-out duration-[0.3s] under-line">
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
