import React from "react";
import SectionTitle from "../components/SectionTitle";
import SponsorCards from "../components/SponsorCards";

function SponsorsRow() {
  return (
    <div className="mx-auto w-11/12 sm:w-11/12 section">
      <div className="pt-8">
        <SectionTitle>Sponsors</SectionTitle>
        <SponsorCards />
      </div>
    </div>
  );
}

export default SponsorsRow;
