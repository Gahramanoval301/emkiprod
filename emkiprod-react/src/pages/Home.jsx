import React, { useEffect, useState, useTransition } from "react";
import PageContainer from "../components/common_/PageContainer";
import HomeBlogs from "../components/HomeBlogs";
import DiscoverEvents from "../components/DiscoverEvents";
import OurValues from "./OurValues";
import Hero from "../components/Hero";
import ProjectRow from "../components/ProjectRow";
import { getAllPageData } from "../api/data";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [pageData, setPageData] = useState([]);
  const { i18n } = useTranslation();

  const getLanguageId = () => {
    switch (i18n.language) {
      case "az":
        return 1
      case "en":
        return 2;
      case "ru":
        return 3;
    }
  }

  useEffect(() => {
    getAllPageData().then((data) => {
      setPageData(data);
    })
  }, [])

  const currentLanguageId = getLanguageId()
  const filteredPageData = pageData.find((data) => data.id === currentLanguageId)
  console.log(filteredPageData);


  return (
    <PageContainer>
      <Hero />
      <DiscoverEvents />
      <OurValues />
      <HomeBlogs />
      {filteredPageData && <ProjectRow data={filteredPageData} />}
    </PageContainer>
  );
};

export default Home;
