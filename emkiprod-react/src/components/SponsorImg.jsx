import React from "react";
import sponsorImg from "../../public/assets/sponsor-side-img.png";

function SponsorImg() {
  return (
    <div className="ml-[40px]">
      <img
        src={sponsorImg}
        alt="sponsor side img"
        className="rounded-2xl h-min max-w-[490px]"
      />
    </div>
  );
}

export default SponsorImg;
