import React from "react";
import { useNavigate } from "react-router";

function BlogCard({ blog, slide = false, t }) {
  const { id, imageSrc, title, content } = blog;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`blog/${id}`, { state: { id, imageSrc, title, content } });
  };

  return (
    <div
      className={`cursor-pointer ${
        slide ? "w-[88%]" : "w-full sm:w-[46%] lg:w-[30%]"
      } rounded-[30px] border-[1px] overflow-hidden border-primary-light blog-card-element`}
    >
      <div className="h-[272px] relative blog-card-main">
        <img src={imageSrc} className="w-full h-full rounded-3xl object-cover " />
        <button
          onClick={() => handleClick()}
          className="bg-[#e32682] rounded-lg text-white text-xl font-medium py-[10px] px-5 text-center absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 z-50 duration-500  opacity-0"
        >
          {t("blogs.readmore")}
        </button>
        <div className=" w-full absolute bottom-[10px] text-overlay z-50">
          <p className="text-white font-medium text-2xl text-center whitespace-nowrap">
            {title.length > 25 ? title.slice(0, 25) + "..." : title}
          </p>
        </div>
      </div>
      <div className="more-text">
        <p className="text-white font-normal text-base mx-4 my-3">
          {content.length > 70 ? title.slice(0, 70) + "..." : title}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
