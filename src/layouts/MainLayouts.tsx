import React from "react";
import { Outlet } from "react-router-dom";
import { SideNav } from "../styles/SidebarStyles";

const MainLayouts = () => {
  return (
    <>
      <SideNav />
      <Outlet />
    </>
  );
};

export default MainLayouts;
