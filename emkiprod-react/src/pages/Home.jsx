import React from "react";
import PageContainer from "../components/common_/PageContainer";
import HomeBlogs from "../components/HomeBlogs";
import SponsorRow from "../components/SponsorRow";
import DiscoverEvents from "../components/DiscoverEvents";
import OurValues from "./OurValues";
import HomeHead from "../components/HomeHead";

const Home = () => {
  return (
    <PageContainer>
      <HomeHead/>
      <DiscoverEvents />
      <OurValues />
      <HomeBlogs />
      <SponsorRow />
    </PageContainer>
  );
};

export default Home;
