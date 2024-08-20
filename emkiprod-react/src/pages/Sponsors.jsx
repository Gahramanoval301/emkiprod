import React from "react";
import PageContainer from "../components/common_/PageContainer";
import SponsorsHero from "../components/SponsorsHero";
import OurValues from "./OurValues";
import SponsorsRow from "../components/SponsorsRow";
import { getAllPageData } from "../api/data";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Sponsors = () => {
  const [allPageData, setAllPageData] = useState([]);
  const { i18n } = useTranslation();

    const getLanguageId = () => {
      switch (i18n.language) {
        case "az":
          return 1;

        case "en":
          return 2;

        case "ru":
          return 3;
      }
    }

    useEffect(() => {
      getAllPageData().then((allPageData) => {
        setAllPageData(allPageData);
      })
    }, [])
    const currentLangId = getLanguageId();
    const filteredProjectData = allPageData.find((allPageData) => allPageData.id === currentLangId)
    console.log(filteredProjectData);

  return (
    <PageContainer>
      { filteredProjectData && <SponsorsHero data={filteredProjectData} /> }
      <SponsorsRow />
      <OurValues />
    </PageContainer>
  );
};

export default Sponsors;
