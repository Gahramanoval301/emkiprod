import React, { useEffect, useState } from "react";
import PageContainer from "../components/common_/PageContainer";
import BlogCard from "../components/BlogCard";
import { useBlogsData } from "../hooks/useBlogsData";
import { useTranslation } from "react-i18next";
import { getAllPageData } from "../api/data";

const Blogs = () => {
  const { blogData, t } = useBlogsData();
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
    <PageContainer>
      <div className="m-auto w-11/12 sm:w-4/5 my-6 xl:mb-0 sm:pt-24 md:pt-20 xl:pt-14">
        <h1 className="text-white_ text-3xl mb-8 font-medium">
          {t("blogs.blog")}
        </h1>
        <div className="blog-card flex flex-wrap gap-8">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} t={t}/>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Blogs;
