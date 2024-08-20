import React, { useEffect, useState } from "react";
import ProjectText from "./ProjectText";
import ProjectImg from "./ProjectImg";

function SponsorHero({ data }) {
  // console.log(data)
  const { title, content, imageSrc } = data.abouts[0];

  return (
    <div className="hero h-[87vh] max-[1300px]:h-fit w-full">
      <div className="mx-auto w-11/12 sm:w-4/5 mb-6 xl:mb-0 pt-28 sm:pt-36 md:pt-36 xl:pt-24 lg:pt-16">
        <div className="mx-auto sm:w-full sm:pt-0  md:pt-0 xl:pt-0">
          <div className="flex flex-row max-[1300px]:flex-col items-center justify-between">
            <ProjectText title={title} content={content}/>
            <ProjectImg project={false} imageSrc={imageSrc}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorHero;
