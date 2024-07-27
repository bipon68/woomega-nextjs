import React from "react";

const Newsletter = () => {
  return (
    <div>
      <span className=" font-semibold text-2xl">Newsletter Signup</span>
      <div>
        <p className=" text-gray-500">
          Delivering the latest product trends & industry news straight to your
          inbox
        </p>
        <div className="">
          <input
            type="text"
            placeholder="example@email.com"
            className="h-9 px-3 text-white bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
