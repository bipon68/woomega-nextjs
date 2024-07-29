import React from "react";
import AboutPage from "./AboutPage/AboutPage";
import StoriesSection from "./StoriesSection/StoriesSection";
import FeaturedSec from "./FeaturedSec/FeaturedSec";
import FindSection from "./FindSection/FindSection";

const PageSection = () => {
  return (
    <div>
      <div>
        <AboutPage />
        <StoriesSection />
        <FeaturedSec />
        <FindSection />
      </div>
    </div>
  );
};

export default PageSection;
