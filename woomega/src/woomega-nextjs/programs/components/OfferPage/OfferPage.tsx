import React from "react";
import { List } from "./List";
import Link from "next/link";
import Image from "next/image";

const OfferPage = () => {
  return (
    <div className="w-full py-20 flex items-center ">
      <div className="flex flex-wrap justify-between gap-10">
        {List.map((item) => (
          <div key={item.id} className=" w-88">
            <Link href={""}>
              <div className=" flex gap-6">
                <Image src={item.icon} alt="" className=" size-20" />
                <div className=" grid gap-2">
                  <div className=" font-semibold text-xl">{item.title}</div>
                  <div className="flex flex-wrap text-gray-600">
                    {item.details}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferPage;
