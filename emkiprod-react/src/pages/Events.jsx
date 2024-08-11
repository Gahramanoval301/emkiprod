
import React from "react";
import PageContainer from "../components/common_/PageContainer";
import { discoverEventsData } from "../data/sectionDatas";
import EventCard from "../components/EventCard";
import { useTranslation } from "react-i18next";


const Events = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h3 className="text-white flex justify-center w-96 text-2xl h-24 items-end">
        Events
      </h3>
      <div className="grid grid-cols-3 m-auto events-section place-content-center">
        {discoverEventsData.map((event) => (
          <EventCard key={event.id} event={event} slide={false} />
        ))}
      </div>
    </PageContainer>
  );
};

export default Events;
