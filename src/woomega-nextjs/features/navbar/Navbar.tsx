"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Webmenu from "./Webmenu";
import { navIconArr } from "./navIconArr";
import { SearchModal } from "../Modals/SearchModal";

function Navbar() {

  const [showModal, setShowModal] = useState<boolean>(false)

  const handleShow = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }

  const handleClick = (id: number) => {
    if (id === navIconArr[0].id) {
      handleShow();
    }
  };

  return (
    <div className=" w-full h-20 px-8 top-0 bg-white flex items-center justify-between fixed z-50 ">
      <div className=" hidden md:block">
        <Webmenu />
      </div>
      <div className="flex gap-4">
        {
          navIconArr.map((item) => (
            <div className="size-7" key={item.id}>
              <Link href={item.path} onClick={() => handleClick(item.id)} >
                <Image src={item.icon} alt="" />
              </Link>
            </div>
          ))
        }
      </div>
      {showModal && <SearchModal handleClose={handleClose} />}
    </div>
  );
}

export default Navbar;
