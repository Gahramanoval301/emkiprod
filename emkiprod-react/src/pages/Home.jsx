import React from "react";
import PageContainer from "../components/common_/PageContainer";
import HomeBlogs from "../components/HomeBlogs";
import DiscoverEvents from "../components/DiscoverEvents";
import OurValues from "./OurValues";
import Hero from "../components/Hero";
import ProjectRow from "../components/ProjectRow";

const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <DiscoverEvents />
      <OurValues />
      <HomeBlogs />
      <ProjectRow />
    </PageContainer>
  );
};

export default Home;
