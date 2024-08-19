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
import { getAnnouncementTranslationsId } from "../../api/data";

export default function DiscoverSectionSwiper({ data }) {
  const swiperRef = useRef(null); // Ref to access Swiper instance
  const [isEnd, setIsEnd] = useState(false); // Initialize with false

  const [eventsInfo, setEventsInfo] = useState([]);
  const { t, i18n } = useTranslation();
  console.log(i18n.language);

  const getLanguageId = () => {
    switch (i18n.language) {
      case "en":
        return 6;
      case "ru":
        return 7;
      case "az":
        return 5;
      default:
        return ""
    }
  }
  const currentLanguageId = getLanguageId();
  

  // const { eventsData, t } = useEventsData();

  useEffect(() => {
    getAnnouncementTranslationsId(currentLanguageId)
      .then((data) => {
        setEventsInfo(data);
      });

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
        1020: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 3,
        },
      }}
    >
      <button
        className={`next-btn absolute z-40 right-5 top-[45%] py-3 px-6 rounded-3xl border-2 text-white_ transition-classic ${isEnd ? "bg-pink" : "bg-primary-default"
          }`}
      >
        <FaArrowRightLong />
      </button>
      {eventsInfo.map((event) => (
        <SwiperSlide key={event.id}>
          <EventCard event={event} t={t} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
