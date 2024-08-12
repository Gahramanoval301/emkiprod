import React from "react";
import PageContainer from "../components/common_/PageContainer";
import EventCard from "../components/EventCard";
import { useEventsData } from "../hooks/useEventsData";

const Events = () => {
  const { eventsData, t } = useEventsData();

  return (
    <PageContainer>
      <h3 className="text-white flex justify-center w-96 text-2xl h-24 items-end">
        {t("events.event")}
      </h3>
      <div className="grid m-auto events-section place-content-center xs:block md:block lg:grid grid-cols-3 xl:grid xl:grid-cols-3">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </PageContainer>
  );
};

export default Events;
