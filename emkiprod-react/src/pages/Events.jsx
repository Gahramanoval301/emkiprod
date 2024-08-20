import React, { useEffect, useState } from "react";
import PageContainer from "../components/common_/PageContainer";
import EventCard from "../components/EventCard";
import { useEventsData } from "../hooks/useEventsData";
import { getAllPageData, getAnnouncementTranslationsId } from "../api/data";
import { useTranslation } from "react-i18next";

const Events = () => {
  // const { eventsData, t } = useEventsData();
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
    <PageContainer>
      <h3 className="text-white flex justify-center w-96 text-2xl h-24 items-end">
        {t("events.event")}
      </h3>
      <div className="grid m-auto events-section place-content-center xs:block md:block lg:grid grid-cols-3 xl:grid xl:grid-cols-3">
        {data.map((event) => (
          <EventCard key={event.id} event={event} t={t}/>
        ))}
      </div>
    </PageContainer>
  );
};

export default Events;
