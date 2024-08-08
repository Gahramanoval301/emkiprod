import React from "react";
import PageContainer from "../components/common_/PageContainer";
import HomeBlogs from "../components/HomeBlogs";
import SponsorRow from "../components/SponsorRow";
import OurValues from "./OurValues";

const Home = () => {
  return (
    <PageContainer>
      <OurValues />
      <HomeBlogs />
      <SponsorRow />
    </PageContainer>
  );
};

export default Home;
