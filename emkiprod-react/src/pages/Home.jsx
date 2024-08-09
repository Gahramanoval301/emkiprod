import React from "react";
import PageContainer from "../components/common_/PageContainer";
import HomeBlogs from "../components/HomeBlogs";
import SponsorRow from "../components/SponsorRow";
import DiscoverEvents from "../components/DiscoverEvents";
import OurValues from "./OurValues";
import HomeHead from "../components/HomeHead";
import HeroSliderMobile from "../components/HeroSliderMobile";

const Home = () => {
  return (
    <PageContainer >
      <DiscoverEvents />
      <OurValues />
      <HomeBlogs />
      <SponsorRow />
    </PageContainer>
  );
};

export default Home;
