import React from "react";
import { useTranslation } from "react-i18next";

function ProjectText({title, content}) {
  return (
    <div className="w-1/2 max-[1300px]:w-full">
      <div className="mb-4">
        <h2 className="text-[#e4e9f2] font-medium text-5xl max-[640px]:text-4xl">
          {title}
        </h2>
      </div>
      <div className="text">
        <p className="text-[#E4E9F2] font-normal text-xl">
          {content}
        </p>
      </div>
    </div>
  );
}

export default ProjectText;
