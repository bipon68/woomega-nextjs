'use client'

import { ProductsList } from "@/woomega-nextjs/utils/Link/list";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductsSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className='flex flex-wrap gap-7 text-center justify-center'>
      {ProductsList.map((item) => (
        <div key={item.id} className={`flex gap-1 ${loaded ? "animate-zoomIn" : "opacity-0"}`}>
          <Link href="">
            <div>
              <Image src={item.img} alt="" />
              <div className="font-medium text-md text-gray-500">
                {item.title}
              </div>
              <div className="text-sm">{item.price}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsSection;
