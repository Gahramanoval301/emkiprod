import React from "react";
import PageContainer from "../components/common_/PageContainer";
import HomeBlogs from "../components/HomeBlogs";
import SponsorRow from "../components/SponsorRow";

const Home = () => {
  return (
    <PageContainer>
      <HomeBlogs />
      <SponsorRow />
      
    </PageContainer>
  );
};

export default Home;
