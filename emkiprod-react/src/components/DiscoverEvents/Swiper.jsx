import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { discoverEventsData } from "../../data/sectionDatas";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import {
  Navigation,
  Autoplay,
  Keyboard,
  FreeMode,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swiper.css";
import EventCard from "../EventCard";
import { useEventsData } from "../../hooks/useEventsData";

export default function DiscoverSectionSwiper() {
  const swiperRef = useRef(null); // Ref to access Swiper instance
  const [isEnd, setIsEnd] = useState(false); // Initialize with false
  const { eventsData, t } = useEventsData();

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
    <Swiper
      ref={swiperRef}
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Autoplay, Keyboard, FreeMode, Mousewheel]}
      navigation={{
        prevEl: ".prev-btn",
        nextEl: ".next-btn",
      }}
      mousewheel={true}
      keyboard={true}
      autoplay={true}
      loop={true}
      className="discoverEvents relative z-10"
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
    >
      <button
        className={`next-btn absolute z-40 right-5 top-[45%] py-3 px-6 rounded-3xl border-2 text-white_ transition-classic ${
          isEnd ? "bg-pink" : "bg-primary-default"
        }`}
      >
        <FaArrowRightLong />
      </button>
      {eventsData.map((event) => (
        <SwiperSlide key={event.id}>
          <EventCard event={event} t={t} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
