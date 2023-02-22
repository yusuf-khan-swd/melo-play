import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";
import { HomeContainer } from "../styles/HomeStyles";

const MainLayouts = () => {
  return (
    <HomeContainer>
      <Sidebar />
      <TopNav />
      <Outlet />
    </HomeContainer>
  );
};

export default MainLayouts;
