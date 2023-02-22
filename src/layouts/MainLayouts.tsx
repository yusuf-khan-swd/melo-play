import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { HomeContainer } from "../styles/HomeStyles";

const MainLayouts = () => {
  return (
    <HomeContainer>
      <Sidebar />
      <Outlet />
    </HomeContainer>
  );
};

export default MainLayouts;
