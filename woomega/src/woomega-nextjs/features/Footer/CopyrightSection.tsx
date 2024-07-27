import React from "react";
import { menu } from "../navbar/link";
import Link from "next/link";
import { contactList } from "./LinkList/contactList";
import Image from "next/image";

const CopyrightSection = () => {
  return (
    <>
      <div>
        <div className="h-18 border-t flex justify-between text-gray-500 items-center">
          <div className=" flex gap-3">
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
      </div>
    </>
  );
};

export default CopyrightSection;
