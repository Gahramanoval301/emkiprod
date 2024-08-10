import React from "react";
import PageContainer from "../components/common_/PageContainer";
import { blogData } from "../data/blog";
import BlogPagesCard from "../components/BlogPagesCard";
console.log(blogData);



const Blogs = () => {
  return (
    <PageContainer>
      <div className="m-auto w-11/12 sm:w-4/5 my-6 xl:mb-0 sm:pt-24 md:pt-20 xl:pt-14">
        <h1 className="text-white_ text-3xl mb-8 font-medium">Blog</h1>
      <div className="blog-card flex flex-wrap gap-8">
        {blogData.map(( item, i ) => <BlogPagesCard key={i} item={item} />)}
      </div>
      </div>

    </PageContainer>
  );
};

export default Blogs;
