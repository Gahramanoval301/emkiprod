import React from "react";
import SectionTitle from "./SectionTitle";
import BlogsSlider from "./BlogsSlider";

function HomeBlogs() {
  return (
    <section id="blogs">
      <div className="mx-auto w-11/12 sm:w-4/5  mb-6 xl:mb-0 pt-16 sm:pt-16 md:pt-16 xl:pt-16 pb-0 sm:pb-0 md:pb-0 xl:pb-0">
        <SectionTitle>Blogs</SectionTitle>
        <BlogsSlider />
      </div>
    </section>
  );
}

export default HomeBlogs;
