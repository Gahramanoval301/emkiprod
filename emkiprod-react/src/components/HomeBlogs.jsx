import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import BlogsSlider from "./BlogsSlider";
import { getAllPageData } from "../api/data";
import { useTranslation } from "react-i18next";
import { useBlogsDataApi } from "../hooks/useBlogsDataApi";

function HomeBlogs() {
  const blogsDataApi = useBlogsDataApi()
      
  return (
    <section id="blogs">
      <div className="mx-auto w-11/12 sm:w-11/12 section">
        <SectionTitle>Blogs</SectionTitle>
        <BlogsSlider postTranslations={blogsDataApi && blogsDataApi} />
      </div>
    </section>
  );
}

export default HomeBlogs;
