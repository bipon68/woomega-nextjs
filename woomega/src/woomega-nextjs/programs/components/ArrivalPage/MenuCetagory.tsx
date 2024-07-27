import React from "react";
import { ArrivalMenuList } from "./components/ArrivalMenuList";
import Link from "next/link";
import FilterSection from "./FilterSection";

const MenuCetagory = () => {
  return (
    <div className=" py-9 items-center flex justify-between">
      <div className=" flex flex-wrap gap-4 ">
        {ArrivalMenuList.map((item) => (
          <div key={item.id} className=" flex gap-1">
            <Link href={""} className="font-medium text-lg text-gray-500">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <FilterSection />
      </div>
    </div>
  );
};

export default MenuCetagory;
