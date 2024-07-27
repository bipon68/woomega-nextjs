import React from "react";
import CopyrightSection from "./CopyrightSection";
import CompanyDetsails from "./CompanyDetsails";
import CompanyService from "./CompanyService";
import CompanyStores from "./CompanyStores";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="  border-t items-center ">
      <div className=" w-full py-20 flex flex-wrap gap-0 justify-between">
        <CompanyDetsails />
        <CompanyService />
        <CompanyStores />
        <Newsletter />
      </div>
      <CopyrightSection />
    </div>
  );
};

export default Footer;
