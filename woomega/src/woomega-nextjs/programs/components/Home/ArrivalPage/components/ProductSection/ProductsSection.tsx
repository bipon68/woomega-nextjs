"use client";

import { ProductsList } from "@/woomega-nextjs/libs/Link/list";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProductAction from "./ProductAction/ProductAction";

const ProductsSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-7 text-center justify-center relative">
        {ProductsList.map((item) => (
          <div
            key={item.id}
            className={`flex gap-1 ${loaded ? "animate-zoomIn" : "opacity-0"}`}
          >
            <Link href="">
              <div>
                <Image src={item.img} alt="" />
                <div className="absolute bottom-30 right-0 opacity-0 hover:opacity-100 transition-all ease-in-out duration-[0.3s]">
                  <ProductAction />
                </div>
                <div className="font-medium text-md text-gray-500">
                  {item.title}
                </div>
                <div className="text-sm">{item.price}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>

  );
};

export default ProductsSection;
