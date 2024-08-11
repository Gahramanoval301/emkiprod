import React from "react";
import PageContainer from "../components/common_/PageContainer";
import BlogPagesCard from "../components/BlogPagesCard";
import { useTranslation } from "react-i18next";

const Blogs = () => {
  const { t } = useTranslation();

  const { id: ids, url: urls, cardElement: { title: titles, desc: descriptions } } = t('blogs', { returnObjects: true });

  const blogData = Array.isArray(ids) && Array.isArray(urls) && Array.isArray(titles) && Array.isArray(descriptions)
    ? ids.map((id, index) => ({ id, url: urls[index], title: titles[index], desc: descriptions[index], })) : [];


  return (
    <PageContainer>
      <div className="m-auto w-11/12 sm:w-4/5 my-6 xl:mb-0 sm:pt-24 md:pt-20 xl:pt-14">
        <h1 className="text-white_ text-3xl mb-8 font-medium">{t("blogs.blog")}</h1>
        <div className="blog-card flex flex-wrap gap-8">
          {blogData.map((item, i) => {
            console.log(item.id);

            return <BlogPagesCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </PageContainer>
  );
};

export default Blogs;



