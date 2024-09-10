import React from "react";

const Newsletter = () => {
  return (
    <div className=" w-full h-[40vh] border-t  flex text-center items-center justify-center">
      <div className=" grid gap-6">
        <div className=" text-5xl font-medium">Newsletter</div>
        <div>Sign up to stay in the loop</div>
        <div className=" flex gap-6 mt-9">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="md:pr-40 border-b outline-none focus:border-primary"
          />
          <button className=" border-b hover:border-primary">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
