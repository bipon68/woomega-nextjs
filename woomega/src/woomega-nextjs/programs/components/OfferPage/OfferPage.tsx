import React from "react";
import { List } from "./List";
import Link from "next/link";
import Image from "next/image";

const OfferPage = () => {
  return (
    <div className="container">
      <div>
        {List.map((item) => (
          <div key={item.id}>
            <Link href={""}>
              <div className=" flex">
                <Image src={item.icon} alt="" />
                <div className="">
                  <div>{item.title}</div>
                  <div>{item.details}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferPage;
