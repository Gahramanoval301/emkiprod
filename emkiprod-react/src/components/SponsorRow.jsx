import React from "react";
import SponsorText from "./SponsorText";
import SponsorImg from "./SponsorImg";

function SponsorRow() {
  return (
    <section id="sponsor">
      <div className="mx-auto  section">
        <div className="bg-[#151a30] rounded-[32px] py-[80px] px-[56px]">
          <div className="mx-auto w-11/12 sm:w-full pt-16 sm:pt-0  md:pt-0 xl:pt-0">
            <div className="flex align-center justify-between">
              <SponsorText />
              <SponsorImg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorRow;
