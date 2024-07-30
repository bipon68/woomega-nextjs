import { breadcumblist } from "@/woomega-nextjs/libs/Icon";
import Image from "next/image";
import React from "react";
import BlogDetailsContent from "./BlogDetailsContent";

const BlogDetailsPage = () => {
  return (
    <div>
      <div className=" h-[30vh] md:h-[40vh] ">
        <div className=" absolute -z-10">
          <Image
            src={breadcumblist.breadcumb}
            alt=""
            className=" h-[30vh] md:h-[40vh] "
          />
        </div>
        <div className="h-[30vh] flex items-center justify-center text-center text-5xl  z-10">
          How To Take Care of Cloth
        </div>
      </div>
      <BlogDetailsContent />
    </div>
  );
};

export default BlogDetailsPage;
