import React from "react";
import PageContainer from "../components/common_/PageContainer";
import { discoverEventsData } from "../data/sectionDatas";
import EventCard from "../components/EventCard";

const Events = () => {
  return (
    <PageContainer>
      <h3 className="text-white flex justify-center w-96 text-2xl h-24 items-end">
        Events
      </h3>
      <div className="grid m-auto events-section place-content-center xs:block md:block lg:grid grid-cols-3 xl:grid xl:grid-cols-3">
        {discoverEventsData.map((event) => (
          <EventCard key={event.id} event={event} slide={false} />
        ))}
      </div>
    </PageContainer>
  );
};

export default Events;
