import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navIcon } from "@/woomega-nextjs/libs/Icon";
import Webmenu from "./Webmenu";

function Navbar() {
  return (
    <div className=" w-full h-20 px-8 top-0 bg-white flex items-center justify-between fixed z-50 ">
      <div className=" hidden md:block">
        <Webmenu />
      </div>
      <div className="w-36 flex gap-4">
        <Link href={""}>
          <Image src={navIcon.searchIcon} alt="" />
        </Link>
        <Link href={""}>
          <Image src={navIcon.favouriteIcon} alt="" />
        </Link>
        <Link href={""}>
          <Image src={navIcon.cartIcon} alt="" />
        </Link>
        <Link href={""}>
          <Image src={navIcon.profileIcon} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
