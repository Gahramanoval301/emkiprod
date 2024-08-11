import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import '../../styles/swiper.css';

// Import required modules
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
  const [isEnd, setIsEnd] = useState(false); // Initialize with false

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
      keyboard={true}
      autoplay={true}
      loop={true}
      className="discoverEvents relative z-10"
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
        className={`next-btn absolute z-40 right-5 top-[45%] py-3 px-6 rounded-3xl border-2 text-white_ transition-classic ${isEnd ? "bg-pink" : "bg-primary-default"}`}
      >
        <FaArrowRightLong />
      </button>
      {discoverEventsData.map(({ id, title, thumbnail, location, price, date }) => {
        return (
          <SwiperSlide key={id}>
            <div className=''>
              <div className='h-[400px]'>
                <img
                  src={thumbnail}
                  alt={`${title}'s concert`}
                  className='object-contain rounded-3xl'
                />
              </div>
              <div className='border-[1px] rounded-3xl border-primary-light py-2 px-5 text-white_ hover:bg-primary-light'>
                <div className='flex justify-between text-2xl font-semibold my-2'>
                  <p className=''>{title}</p>
                  <span className='text-pink'>{price}</span>
                </div>
                <div className='flex justify-start gap-1 my-2'>
                  <p>{date}</p>
                  <span>&bull;</span>
                  <span>{location}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
