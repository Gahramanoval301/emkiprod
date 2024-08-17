import React, { useEffect, useState } from "react";
import DiscoverSectionSwiper from "./Swiper";
import { useTranslation } from "react-i18next";
import { getAnnouncementTranslationsId } from "../../api/data";

const DiscoverEvents = () => {
  const { t, i18n } = useTranslation();

  const [data, setData] = useState([]);


  useEffect(() => {
    
  const currentLanguage = i18n.language;
  console.log(currentLanguage);

  const getLanguageId = () => {
    switch (currentLanguage) {
      case "en":
        return 6;
      // filteredData = data.filter(({ languageId }) => languageId == 6);
      case "ru":
        return 7;
      // filteredData = data.filter(({ languageId }) => languageId == 7);
      case "az":
        // filteredData = data.filter(({ languageId }) => languageId == 5);
        return 5;
      default:
        break;
    }
  };
    const langId = getLanguageId()
    getAnnouncementTranslationsId(langId).then((data) => {
      setData(data);
    });
  }, []);
  console.log(data);

  return (
    <section className="discover-events section ">
      <div className="flex flex-col gap-8">
        <h4 className="text-white_ text-2xl">{t("home.discoverevents")}</h4>
        <DiscoverSectionSwiper data={data} />
      </div>
    </section>
  );
};

export default DiscoverEvents;
