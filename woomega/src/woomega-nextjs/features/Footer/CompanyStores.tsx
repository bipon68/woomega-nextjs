import React from "react";
import { stores } from "./LinkList/companyStores";
import Link from "next/link";

const CompanyStores = () => {
  return (
    <div>
      <span>Our Stores</span>
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
