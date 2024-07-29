import React from "react";
import AboutPage from "./AboutPage/AboutPage";
import StoriesSection from "./StoriesSection/StoriesSection";
import FeaturedSec from "./FeaturedSec/FeaturedSec";
import FindSection from "./FindSection/FindSection";
import PartnerSection from "./PartnerSection/PartnerSection";
import Newsletter from "./Newsletter/Newsletter";

const PageSection = () => {
  return (
    <div>
      <div>
        <AboutPage />
        <StoriesSection />
        <FeaturedSec />
        <FindSection />
        <PartnerSection />
        <Newsletter />
      </div>
    </div>
  );
};

export default PageSection;
