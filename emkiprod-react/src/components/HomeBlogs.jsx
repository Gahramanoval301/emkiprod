import React from "react";
import SectionTitle from "./SectionTitle";
import BlogsSlider from "./BlogsSlider";

function HomeBlogs() {
  return (
    <section id="blogs">
      <div className="mx-auto w-11/12 sm:w-11/12 section">
        <SectionTitle>Blogs</SectionTitle>
        <BlogsSlider />
      </div>
    </section>
  );
}

export default HomeBlogs;
