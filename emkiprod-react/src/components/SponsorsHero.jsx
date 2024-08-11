import React from "react";
import ProjectText from "./ProjectText";
import ProjectImg from "./ProjectImg";

function SponsorHero() {
  return (
    <div className="hero h-[85vh] w-full">
      <div className="mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-28 sm:pt-28  md:pt-40 xl:pt-40">
        <div className="flex align-center justify-between">
          <ProjectText />
          <ProjectImg />
        </div>
      </div>
    </div>
  );
}

export default SponsorHero;
