import React from "react";
import SectionTitle from "../components/SectionTitle";
import SponsorCards from "../components/SponsorCards";

function SponsorsRow() {
  return (
    <div className="mx-auto w-11/12 py-10 px-5 sm:p-10 sm:pt-0 md:pt-0 xl:pt-0">
      <div className="pt-8">
        <SectionTitle>Sponsors</SectionTitle>
        <SponsorCards />
      </div>
    </div>
  );
}

export default SponsorsRow;
