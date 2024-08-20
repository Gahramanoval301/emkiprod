import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import BlogsSlider from "./BlogsSlider";
import { getAllPageData } from "../api/data";
import { useTranslation } from "react-i18next";

function HomeBlogs() {
  const [pageData, setPageData] = useState([]);
  const { i18n } = useTranslation();

  const getLanguageId = () => {
    switch (i18n.language) {
      case "az":
        return 1
      case "en":
        return 2;
      case "ru":
        return 3;
    }
  }

  useEffect(() => {
    getAllPageData().then((data) => {
      setPageData(data);
    })
  }, [])

  const currentLanguageId = getLanguageId()
  const filteredPageData = pageData.find((data) => data.id === currentLanguageId)
  console.log(filteredPageData && filteredPageData.postTranslations);


  return (
    <section id="blogs">
      <div className="mx-auto w-11/12 sm:w-11/12 section">
        <SectionTitle>Blogs</SectionTitle>
        <BlogsSlider postTranslations={filteredPageData && filteredPageData.postTranslations} />
      </div>
    </section>
  );
}

export default HomeBlogs;
