"use client";
import { Logo } from "@/woomega-nextjs/libs/MainLogo";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { menu } from "./link";
import Link from "next/link";

const Webmenu = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="h-full flex items-center gap-12">
      <div className="hidden md:block">
        <Link href={"/"}>
          <Image src={Logo.MainLogo} alt="Logo" />
        </Link>
      </div>
      <div className="flex gap-9">
        {menu.map((item) => (
          <div
            key={item.id}
            className="relative under-line"
            onMouseEnter={() => item.subMenu && handleMouseEnter(item.title)}
            onMouseLeave={() => item.subMenu && handleMouseLeave()}
            onClick={() => handleMouseLeave()}
          >
            <Link href={item.path}>
              <div className="text-gray-700 hover:text-black px-3 my-2 text-sm font-medium cursor-pointer">
                {item.title}
              </div>
            </Link>
            {item.subMenu && (
              <div
                className={`absolute left-0 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5 ${
                  hoveredItem === item.title ? "block" : "hidden"
                }`}
              >
                {item.subMenu.map((subItem) => (
                  <Link href={subItem.path} key={subItem.title}>
                    <div className="block border-b px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
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
