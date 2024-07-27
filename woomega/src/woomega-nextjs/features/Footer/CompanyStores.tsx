import React from "react";
import { stores } from "./LinkList/companyStores";
import Link from "next/link";

const CompanyStores = () => {
  return (
    <div className=" w-68 py-4">
      <span className="flex py-4 font-semibold text-2xl">Our Stores</span>
      <div>
        {stores.map((item) => (
          <div key={item.id}>
            <Link href={""} className=" text-gray-500">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyStores;
