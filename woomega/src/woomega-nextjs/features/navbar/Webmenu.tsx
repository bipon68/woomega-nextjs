import { Logo } from "@/woomega-nextjs/libs/MainLogo";
import Image from "next/image";
import React from "react";
import { menu } from "./link";
import Link from "next/link";

const Webmenu = () => {
  return (
    <div className="h-full flex items-center gap-12">
      <div className="hidden md:block">
        <Image src={Logo.MainLogo} alt="" />
      </div>
      <div className="flex gap-9 ">
        {menu.map((item) => (
          <div key={item.id} className="relative under-line">
            <Link href={item.path}>{item.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webmenu;
