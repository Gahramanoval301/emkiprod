import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import {
  Navigation,
  Autoplay,
  Keyboard,
  FreeMode,
  Mousewheel,
} from "swiper/modules";
import { discoverEventsData } from "../../data/sectionDatas";
import { FaArrowRightLong } from "react-icons/fa6";
import EventCard from "../EventCard";

export default function DiscoverSectionSwiper() {
  const swiperRef = useRef(null); // Ref to access Swiper instance
  const [isEnd, setIsEnd] = useState();

  useEffect(() => {
    const swiper = swiperRef.current?.swiper; // Access Swiper instance

    if (swiper) {
      const handleReachEnd = () => {
        setIsEnd(true);
      };

      // Attach event listener
      swiper.on("reachEnd", handleReachEnd);

      return () => {
        swiper.off("reachEnd", handleReachEnd);
      };
    }
  }, []);
  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Keyboard, FreeMode, Mousewheel]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        mousewheel={true}
        enabled={true}
        keyboard={true}
        autoplay={true}
        loop={true}
        className="mySwiper relative z-10"
        breakpoints={{
          320: {
            // Smallest screen
            slidesPerView: 1,
          },
          768: {
            // Small screens like tablets
            slidesPerView: 2,
          },

          1280: {
            // Larger screens
            slidesPerView: 3,
          },
        }}
      >
        <button
          className={`next-btn absolute z-40 right-5 top-[45%] py-3 px-6 rounded-3xl border-2 text-white_ transition-classic ${
            isEnd ? "bg-pink" : "bg-primary-default"
          }`}
        >
          <FaArrowRightLong />
        </button>
        {discoverEventsData.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard event={event} slide={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
