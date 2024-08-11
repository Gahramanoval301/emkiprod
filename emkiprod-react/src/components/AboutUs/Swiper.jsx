import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles/swiper.css';

// import required modules
import { Navigation, Keyboard, FreeMode } from 'swiper/modules';
// import { discoverEventsData } from '../../data/discoverEvents';
import { FaArrowRightLong } from "react-icons/fa6";
import { aboutEventsData } from '../../data/ourEventsAbout';

export default function OurEventsSwiper() {

    const swiperRef = useRef(null); // Ref to access Swiper instance
    const [isEnd, setIsEnd] = useState();

    useEffect(() => {
        const swiper = swiperRef.current?.swiper; // Access Swiper instance

        if (swiper) {
            const handleReachEnd = () => {
                setIsEnd(true);
            };

            // Attach event listener
            swiper.on('reachEnd', handleReachEnd);

            return () => {
                swiper.off('reachEnd', handleReachEnd);
            };
        }
    }, []);
    return (
        <div >
            <Swiper
                ref={swiperRef}
                slidesPerView={'auto'}
                spaceBetween={20}
                centeredSlides={true}
                breakpoints={{
                    640: {
                        spaceBetween: 20
                    }
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Keyboard, FreeMode]}
                navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn",
                }}
                mousewheel={true}
                enabled={true}
                keyboard={true}
                className="ourEventsSwiper relative z-10 section"
            >
                <button className={`next-btn absolute z-40 right-5 top-[45%] p-3  rounded-full border-2 text-white_ transition-classic `} >
                    <FaChevronRight/>
                </button>
                <button className={`prev-btn absolute z-40 left-5 top-[45%] p-3  rounded-full border-2 text-white_ transition-classic ${isEnd ? "bg-pink" : "bg-primary-default"}`} >
                    <FaChevronLeft />
                </button>
                {aboutEventsData.map(({ id, image, title }) => {
                  return <SwiperSlide key={id}>
                          
                      <img src={image} alt={`${title}'s concert`} />
                      <p className='font-semibold text-xl sm:text-2xl lg:text-5xl absolute bottom-5 right-[15%] text-white_shadow uppercase'>{title}</p>
                    </SwiperSlide>
                })}

            </Swiper>
        </div>
    );
}
