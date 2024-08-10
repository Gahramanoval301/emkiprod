import React from "react";

function EventCard({ event, slide }) {
  return slide ? (
    <div>
      <div className="h-[400px] ">
        <img
          src={event.thumbnail}
          alt={`${event.title}'s concert`}
          className="object-contain rounded-3xl"
        />
      </div>
      <div className="border-[1px] rounded-3xl border-primary-light py-2 px-5  text-white_  hover:bg-primary-light">
        <div className="flex justify-between text-2xl font-semibold my-2">
          <p className="">{event.title}</p>
          <span className="text-pink">{event.price}</span>
        </div>
        <div className="flex justify-start gap-1 my-2">
          <p>{event.date}</p>
          <span>&bull;</span>
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="section hover:cursor-pointer w-[450px] section-reused"
      key={event.id}
    >
      <div className="h-[380px] event-box">
        <img
          src={event.thumbnail}
          alt={`${event.title}'s concert`}
          className="object-contain rounded-3xl"
          width={"360px"}
          height={"360px"}
        />
        <div className="overlay">
          <a href={event.ticketURL} target="_blank">
            <button>Read More</button>
          </a>
        </div>
      </div>
      <div className="border-[1px] rounded-3xl border-primary-light py-2 px-5  text-white_  hover:bg-primary-light event">
        <div className="flex justify-between font-semibold my-2">
          <p className="font-extrabold text-xl">{event.title}</p>
          <p className="text-pink">{event.price}</p>
        </div>
        <div className="flex justify-start gap-1 my-2 text-sm">
          <p>{event.date}</p>
          <span>&bull;</span>
          <p>{event.location}</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
