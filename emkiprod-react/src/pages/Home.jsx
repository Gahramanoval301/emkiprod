import React from "react";
import PageContainer from "../components/common_/PageContainer";
import HomeBlogs from "../components/HomeBlogs";
import SponsorRow from "../components/SponsorRow";
import DiscoverEvents from "../components/DiscoverEvents";

const Home = () => {
  return (
    <PageContainer>
      <DiscoverEvents />
      <HomeBlogs />
      <SponsorRow />
    </PageContainer>
  );
};

export default Home;
