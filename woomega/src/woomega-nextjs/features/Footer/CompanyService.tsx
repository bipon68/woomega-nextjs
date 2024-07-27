import React from "react";
import { service } from "./LinkList/CompanyService";
import Link from "next/link";

const CompanyService = () => {
  return (
    <div>
      <span>Customar Service</span>
      <div>
        {service.map((item) => (
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

export default CompanyService;
