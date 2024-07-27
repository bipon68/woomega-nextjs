import { ProductsList } from "@/woomega-nextjs/utlis/Link/list";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsSection = () => {
  return (
    <div className=" flex flex-wrap gap-7 text-center justify-center">
      {ProductsList.map((item) => (
        <div key={item.id} className=" flex gap-1">
          <Link href={""}>
            <div>
              <Image src={item.img} alt="" />
              <div className="font-medium text-md text-gray-500">
                {item.title}
              </div>
              <div className=" text-sm">{item.price}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsSection;
