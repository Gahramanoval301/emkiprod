import React from "react";
import { valuesSectionData } from "../data/sectionDatas";
import ValueCard from "../components/ValueCard";

const OurValues = () => {
  return (
    <div className="our-values-section text-white p-10">
      <div className="w-80 flex items-center justify-center mb-8">
        <h4 className="inline-block font-semibold text-3xl">Our Values</h4>
      </div>
      <div className="our-values flex justify-evenly p-14 flex-wrap rounded-3xl">
        {valuesSectionData.map((value) => (
          <ValueCard key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
};

export default OurValues;
