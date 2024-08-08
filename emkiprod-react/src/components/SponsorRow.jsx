import React from "react";
import SponsorText from "./SponsorText";
import SponsorImg from "./SponsorImg";

function SponsorRow() {
  return (
    <section id="sponsor">
      <div className="mx-auto sm:w-4/5 w-full mb-6 xl:mb-0 pt-16 sm:pt-16 md:pt-16 xl:pt-16  pb-14 sm:pb-14 md:pb-14 xl:pb-14">
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
