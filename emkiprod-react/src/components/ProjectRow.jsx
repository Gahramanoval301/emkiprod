import React from "react";
import ProjectText from "./ProjectText";
import ProjectImg from "./ProjectImg";

function ProjectRow() {
  return (
    <section id="project">
      <div className="mx-auto  section">
        <div className="bg-[#151a30] rounded-[32px] py-[80px] px-[56px]">
          <div className="mx-auto w-11/12 sm:w-full pt-16 sm:pt-0  md:pt-0 xl:pt-0">
            <div className="flex align-center justify-between">
              <ProjectText />
              <ProjectImg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectRow;
