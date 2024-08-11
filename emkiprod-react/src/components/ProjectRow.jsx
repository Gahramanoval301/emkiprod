import React from "react";
import ProjectText from "./ProjectText";
import ProjectImg from "./ProjectImg";

function ProjectRow() {
  return (
    <section id="project">
      <div className="mx-auto w-11/12 max-[1300px]:w-[90%] max-[640px]:w-full pt-8 sm:pt-0  md:pt-0 xl:pt-0">
        <div className="bg-[#151a30] rounded-[32px] max-[640px]:rounded-none py-[80px] sm:px-[56px] px-[0px]">
          <div className="mx-auto w-11/12 sm:w-full sm:pt-0  md:pt-0 xl:pt-0">
            <div className="flex flex-row max-[1300px]:flex-col items-center justify-between">
              <ProjectText />
              <ProjectImg project={true}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectRow;
