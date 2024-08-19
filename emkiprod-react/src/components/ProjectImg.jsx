import React from "react";

function ProjectImg({ project, imageSrc }) {
  return (
    <>
      {project ? (
        <div className="xl:ml-[40px] max-[1300px]:mt-10">
          <img
            src={imageSrc}
            alt="sponsor side img"
            className="rounded-2xl h-min lg:max-w-[490px] max-[992px]:max-w-[380px] max-[640px]:max-w-[340px] max-w-[450px] shadow-xl"
          />
        </div>
      ) : (
        <div className="xl:ml-[40px] max-[1300px]:my-10">
          <img
            src={imageSrc}
            alt="sponsor side img"
            className="rounded-2xl h-min max-w-[540px] shadow-xl max-[768px]:w-full"
          />
        </div>
      )}
    </>
  );
}

export default ProjectImg;
