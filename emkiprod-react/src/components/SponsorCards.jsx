import React from "react";
import { sponsorsData } from "../data/sectionDatas";

function SponsorCards() {
  return (
    <div className="flex overflow-x-auto">
      {sponsorsData.map((sponsor) => (
        <div
          className="items-center flex justify-center p-[25px] max-w-48 max-h-48 min-w-48 min-h-48 rounded-2xl bg-[#151a30] border-solid border-[1px] border-[#192038] mr-8"
          key={sponsor.id}
        >
          <img src={sponsor.image} alt={sponsor.image} />
        </div>
      ))}
    </div>
  );
}

export default SponsorCards;
