import { Logo } from "@/woomega-nextjs/libs/MainLogo";
import Image from "next/image";
import React from "react";
import { details } from "./LinkList/CompanyDetails";
import Link from "next/link";

const CompanyDetsails = () => {
  return (
    <div className=" w-68 py-4">
      <span className="flex py-4">
        <Image src={Logo.MainLogo} alt="" className="" />
      </span>
      <div>
        {details.map((item) => (
          <div key={item.id}>
            <Link href={""} className=" gap-3 text-gray-500">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDetsails;
