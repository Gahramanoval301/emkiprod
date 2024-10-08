import React from "react";
import { useTranslation } from "react-i18next";
import { valuesData } from "../data/sectionDatas";
import ValueCard from "../components/ValueCard";

const OurValues = () => {
  const { t } = useTranslation();

  // Translate valuesData
  const translatedValues = valuesData.map((value) => ({
    ...value,
    title: t(value.titleKey),
    content: t(value.contentKey),
  }));

  return (
    <div className="our-values-section text-white section">
      <div className="w-80 flex items-center mb-8">
        <h4 className="inline-block font-semibold text-3xl">
          {t("home.ourvalues")}
        </h4>
      </div>
      <div className="our-values grid grid-cols-2 p-12 rounded-3xl">
        {translatedValues.map((value) => (
          <ValueCard key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
};

export default OurValues;
