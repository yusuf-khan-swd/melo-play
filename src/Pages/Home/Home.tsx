import React from "react";
import MainBodySection from "../../components/MainContentSection/MainBodySection";
import Sidebar from "../../components/Sidebar/Sidebar";
import { HomeContainer } from "../../styles/HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <Sidebar />
      <MainBodySection />
    </HomeContainer>
  );
};

export default Home;
