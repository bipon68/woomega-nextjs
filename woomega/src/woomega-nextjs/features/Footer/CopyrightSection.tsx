import React from "react";
import { menu } from "../navbar/link";
import Link from "next/link";
import { contactList } from "./LinkList/contactList";
import Image from "next/image";

const CopyrightSection = () => {
  return (
    <>
      <hr className="w-full border border-gray-200" />
      <div className=" container h-18 flex justify-between text-gray-500 items-center">
        <div className=" flex gap-9">
          {menu.map((item) => (
            <div key={item.id}>
              <Link href={""}>{item.title}</Link>
            </div>
          ))}
        </div>
        <div>
          <span> Copyright @ iGlyphic</span>
        </div>
        <div className=" flex gap-2">
          {contactList.map((item) => (
            <div key={item.id} className=" flex gap-1">
              <Link href={""}>
                <Image src={item.icon} alt="" className=" size-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CopyrightSection;
