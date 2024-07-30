"use client";
import { ProductsList } from "@/woomega-nextjs/libs/Link/list";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProductAction from "./ProductAction/ProductAction";

const ProductsSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [hoverOn, setHoverOn] = useState<number | null>(null); // Define hoverOn as number or null

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex flex-wrap gap-7 text-center justify-center relative p-1">
      {ProductsList.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col items-center gap-1 relative ${
            loaded ? "animate-zoomIn" : "opacity-0"
          }`}
          onMouseEnter={() => setHoverOn(index)}
          onMouseLeave={() => setHoverOn(null)}
        >
          <Link href="">
            <div className="relative">
              <Image src={item.img} alt={item.title} />
              <div
                className={`absolute bottom-1 right-1  ${
                  hoverOn === index ? "animate-slideTop" : "animate-slideBottom"
                }`}
              >
                <ProductAction />
              </div>
            </div>
          </Link>
          <div className="font-medium text-md text-gray-500">{item.title}</div>
          <div className="text-sm">{item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductsSection;
