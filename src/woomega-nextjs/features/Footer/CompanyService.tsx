import React from "react";
import { service } from "./LinkList/CompanyService";
import Link from "next/link";

const CompanyService = () => {
  return (
    <div className=" w-68 py-4">
      <span className="flex py-4 font-semibold text-2xl">Customar Service</span>
      <div className="">
        {service.map((item) => (
          <div key={item.id} className="">
            <Link href={""} className="grid gap-3 text-gray-500">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyService;
