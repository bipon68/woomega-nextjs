import React from "react";
import HeaderSection from "./HeaderSection.tsx/HeaderSection";
import BlogContent from "./BlogContent/BlogContent";
import Newsletter from "../PageSection/Newsletter/Newsletter";

const BlogPage = () => {
  return (
    <div>
      <HeaderSection />
      <BlogContent />
      <Newsletter />
    </div>
  );
};

export default BlogPage;
