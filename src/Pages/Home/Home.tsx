import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { HomeContainer } from "./HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <Sidebar />
      <h2>Home</h2>
    </HomeContainer>
  );
};

export default Home;
