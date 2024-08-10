import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import BlogCard from "./BlogCard";
import "swiper/css";
import "swiper/css/pagination";

const BlogsSlider = () => {
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
      className="pb-3"
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
