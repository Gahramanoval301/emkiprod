import React from "react";
import DiscoverSectionSwiper from "./Swiper";

const DiscoverEvents = () => {
  return (
    <section className="discover-events section ">
      <div className="flex flex-col gap-8">
        <h4 className="text-white_ text-2xl">Discover Events</h4>
        <DiscoverSectionSwiper />
      </div>
    </section>
  );
};

export default DiscoverEvents;
