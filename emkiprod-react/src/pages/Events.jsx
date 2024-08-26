import React, { useEffect, useState } from "react";
import PageContainer from "../components/common_/PageContainer";
import EventCard from "../components/EventCard";
import { useEventsData } from "../hooks/useEventsData";
import { useTranslation } from "react-i18next";
import { getAnnouncementTranslationsId } from "../api/data";

const Events = () => {
  const { eventsData, t } = useEventsData();
  const [eventData, setEventData] = useState([]);
  const { i18n } = useTranslation();

  useEffect(()=> {
    const currentLang = i18n.language;
    const getLanguageId = () => {
      switch (currentLang) {
        case "en":
          return 6;

        case "az":
          return 5;

        case "ru":
          return 7;
        default:
          break;
      }
    }
    const langId = getLanguageId();
    getAnnouncementTranslationsId(langId).then((eventData) => {
      setEventData(eventData);
    });
  }, [i18n.language]);

  return (
    <PageContainer>
      <h3 className="text-white flex justify-center w-96 text-2xl h-24 items-end">
        {t("events.event")}
      </h3>
      <div className="grid m-auto events-section place-content-center xs:block md:block lg:grid grid-cols-3 xl:grid xl:grid-cols-3">
        {eventData.map((event) => (
          <EventCard key={event.id} event={event} t={t}/>
        ))}
      </div>
    </PageContainer>
  );
};

export default Events;
