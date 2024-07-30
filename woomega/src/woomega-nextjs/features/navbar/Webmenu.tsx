"use client";
import { Logo } from "@/woomega-nextjs/libs/MainLogo";
import Image from "next/image";
import React, { useState } from "react";
import { menu } from "./link";
import Link from "next/link";

const Webmenu = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  return (
    <div className="h-full flex items-center gap-12">
      <div className="hidden md:block">
        <Image src={Logo.MainLogo} alt="" />
      </div>
      <div className="flex gap-9 ">
        {menu.map((item) => (
          <div key={item.id} className="relative under-line">
            <Link href={item.path}>
              <div
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium"
                onClick={() => item.subMenu && toggleDropdown(item.title)}
              >
                {item.title}
              </div>
            </Link>
            {item.subMenu && openDropdown === item.title && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                {item.subMenu.map((subItem) => (
                  <Link href={subItem.path} key={subItem.title}>
                    <div className="block border-b px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {subItem.title}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webmenu;
