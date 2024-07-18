import React from "react";
import { menu } from "./link";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" ">
      <div className=" ">
        {menu.map((item) => (
          <div key={item.id}>
            <Link href={""}>{item.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
