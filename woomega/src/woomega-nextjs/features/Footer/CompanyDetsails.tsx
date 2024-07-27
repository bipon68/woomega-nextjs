import { Icon } from "@/woomega-nextjs/libs/Icon";
import { Logo } from "@/woomega-nextjs/libs/MainLogo";
import Image from "next/image";
import React from "react";
import { details } from "./LinkList/CompanyDetails";
import Link from "next/link";

const CompanyDetsails = () => {
  return (
    <div>
      <span>
        <Image src={Logo.MainLogo} alt="" />
      </span>
      <div>
        {details.map((item) => (
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

export default CompanyDetsails;
