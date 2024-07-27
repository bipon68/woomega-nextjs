import React from "react";
import CopyrightSection from "./CopyrightSection";
import CompanyDetsails from "./CompanyDetsails";
import CompanyService from "./CompanyService";
import CompanyStores from "./CompanyStores";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className=" container">
      <div className=" flex">
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
