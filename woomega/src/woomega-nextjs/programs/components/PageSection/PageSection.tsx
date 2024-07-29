import React from "react";
import AboutPage from "./AboutPage/AboutPage";
import StoriesSection from "./StoriesSection/StoriesSection";
import FeaturedSec from "./FeaturedSec/FeaturedSec";

const PageSection = () => {
  return (
    <div>
      <div>
        <AboutPage />
        <StoriesSection />
        <FeaturedSec />
      </div>
    </div>
  );
};

export default PageSection;
