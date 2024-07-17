import React from "react";
import { MenuLink } from "./component/MenuLink";
import Link from "next/link";

const WebMenu = () => {
  return (
    <div className=" container">
      <div className=" ">
        {MenuLink.map((item) => (
          <div key={item.id} className=" flex gap-16">
            <Link href={""} className=" ">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebMenu;
