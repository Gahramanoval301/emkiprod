import React, { useEffect } from "react";

function EventCard({ event, t }) {

  const getCreatedTime = (eventStr) => {
    const date = new Date(eventStr);
    console.log(eventStr);
    
    const year = date.getUTCFullYear().toString().padStart(4, "0")
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0")
    const day = date.getUTCDate().toString().padStart(2, "0")
    return `${day}.${month}.${year}`

  }
  return (
    <div
      className="section hover:cursor-pointer w-[475px] section-reused"
      key={event.id}
    >
      <div className="h-[380px] event-box">
        <img
          src={event.imageSrc}
          alt={`${event.artistName}'s concert`}
          className="object-contain rounded-3xl"
          width={"360px"}
          height={"360px"}
        />
        <div className="overlay">
          <a href={event.ticketLink} target="_blank">
            <button>{t("events.readmore")}</button>
          </a>
        </div>
      </div>
      <div className="border-[1px] rounded-3xl border-primary-light py-2 px-5  text-white_  hover:bg-primary-light event">
        <div className="flex justify-between font-semibold my-2">
          <p className="font-extrabold text-xl">{event.artistName}</p>
          <p className="text-pink">{event.ticketLink ? "200$" : ""}</p>
        </div>
        <div className="flex justify-start gap-1 my-2 text-sm">
          <p>{getCreatedTime(event.created)}</p>
          <span>&bull;</span>
          <p>{event.place}</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
