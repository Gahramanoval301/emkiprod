import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import BlogCard from "./BlogCard";
import "swiper/css";
import "swiper/css/pagination";

const BlogsSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={3}
      pagination={{ clickable: true }}
      className="pb-14"
    >
      <SwiperSlide>
        <BlogCard />
      </SwiperSlide>
      <SwiperSlide>
        <BlogCard />
      </SwiperSlide>
      <SwiperSlide>
        <BlogCard />
      </SwiperSlide>
      <SwiperSlide>
        <BlogCard />
      </SwiperSlide>
    </Swiper>
  );
};
export default BlogsSlider;
