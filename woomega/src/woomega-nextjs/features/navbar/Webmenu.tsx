import { Logo } from "@/woomega-nextjs/libs/MainLogo";
import Image from "next/image";
import React from "react";
import { menu } from "./link";
import Link from "next/link";

const Webmenu = () => {
  return (
    <div className="w-full h-full flex items-center gap-12">
      <div>
        <Image src={Logo.MainLogo} alt="" />
      </div>
      <div className=" flex gap-9">
        {menu.map((item) => (
          <div key={item.id}>
            <Link href={""}>{item.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webmenu;
