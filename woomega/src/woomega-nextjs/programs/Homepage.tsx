import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import OfferPage from "./components/OfferPage/OfferPage";
import ArrivalPage from "./components/ArrivalPage/ArrivalPage";

function Homepage() {
  return (
    <div className="">
      <div className="">
        <LandingPage />
        <OfferPage />
        <ArrivalPage />
      </div>
    </div>
  );
}

export default Homepage;
