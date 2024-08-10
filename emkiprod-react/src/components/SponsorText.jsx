import React from "react";
import { useTranslation } from "react-i18next";

function SponsorText() {
  const { t } = useTranslation();
  return (
    <div className="w-1/2">
      <div className="mb-4">
        <h2 className="text-[#e4e9f2] font-medium text-5xl">
          {t("home.haveaproject")}{" "}
        </h2>
      </div>
      <div className="text">
        <p className="text-[#E4E9F2] font-normal text-xl">
          {t("home.sponsorText")}
        </p>
      </div>
    </div>
  );
}

export default SponsorText;
