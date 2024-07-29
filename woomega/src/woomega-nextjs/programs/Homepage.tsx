import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import OfferPage from "./components/OfferPage/OfferPage";
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
