import React from "react";
import Populer from "./BlogPage/Populer";
import Categories from "./BlogPage/Categories";
import Tags from "./BlogPage/Tags";
import Archives from "./BlogPage/Archives";
import Instragram from "./BlogPage/Instragram";

const SideContent = () => {
  return (
    <div className=" grid gap-9">
      <div className=" my-6 grid gap-5">
        <div className=" text-2xl">Search</div>
        <input
          type="text"
          placeholder=" Search"
          className=" border-b outline-none"
        />
      </div>
      <div className=" grid gap-5">
        <div className=" text-2xl">Populer Post</div>
        <div>
          <Populer />
        </div>
      </div>
      <div className=" grid gap-5">
        <div className=" text-2xl">Categories</div>
        <div>
          <Categories />
        </div>
      </div>
      <div className=" grid gap-5">
        <div className=" text-2xl">Browse Tags</div>
        <div>
          <Tags />
        </div>
      </div>
      <div className=" grid gap-5">
        <div className=" text-2xl">Archives</div>
        <div>
          <Archives />
        </div>
      </div>
      <div className=" grid gap-5">
        <div className=" text-2xl">Instagram</div>
        <div>
          <Instragram />
        </div>
      </div>
      <div className=" grid gap-5 text-2xl">Stay Connected</div>
    </div>
  );
};

export default SideContent;
