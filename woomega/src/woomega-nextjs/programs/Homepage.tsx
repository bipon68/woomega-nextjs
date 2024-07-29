import React from "react";
import LandingPage from "./components/Home/LandingPage/LandingPage";
import OfferPage from "./components/Home/OfferPage/OfferPage";
import ArrivalPage from "./components/ArrivalPage/ArrivalSection";

function Homepage() {
  return (
    <div className="">
      <LandingPage />
      <OfferPage />
      <ArrivalPage />
    </div>
  );
}

export default Homepage;
