import React from "react";
import DiscoverSectionSwiper from "./Swiper";
import { useTranslation } from "react-i18next";

const DiscoverEvents = () => {
  const { t } = useTranslation();

  return (
    <section className="discover-events section ">
      <div className="flex flex-col gap-8">
        <h4 className="text-white_ text-2xl">{t("home.discoverevents")}</h4>
        <DiscoverSectionSwiper />
      </div>
    </section>
  );
};

export default DiscoverEvents;
