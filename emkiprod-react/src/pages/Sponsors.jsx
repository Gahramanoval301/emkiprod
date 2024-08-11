import React from "react";
import PageContainer from "../components/common_/PageContainer";
import SponsorsHero from "../components/SponsorsHero";
import OurValues from "./OurValues";
import SponsorsRow from "../components/SponsorsRow";

const Sponsors = () => {
  return (
    <PageContainer>
      <SponsorsHero />
      <SponsorsRow />
      <OurValues />
    </PageContainer>
  );
};

export default Sponsors;
