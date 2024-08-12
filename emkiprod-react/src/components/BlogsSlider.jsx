import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { useBlogsData } from "../hooks/useBlogsData";
import "swiper/css";
import "swiper/css/pagination";
import BlogCard from "./BlogCard";

const BlogsSlider = () => {
  const { blogData, t } = useBlogsData();
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      pagination={{ clickable: true }}
      slidesPerView={3}
      spaceBetween={10}
      autoplay={true}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },

        1280: {
          slidesPerView: 3,
        },
      }}
      className="pb-16"
    >
      {blogData.map((blog) => (
        <SwiperSlide key={blog.id}>
          <BlogCard blog={blog} slide={true} t={t}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default BlogsSlider;
