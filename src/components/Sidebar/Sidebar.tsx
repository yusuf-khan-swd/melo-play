import React from "react";
import { SidebarContainer, SideNav, SideNavItem } from "./SidebarStyles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SideNav>
        <SideNavItem href="#about">About</SideNavItem>
        <SideNavItem href="#services">Services</SideNavItem>
        <SideNavItem href="#clients">Clients</SideNavItem>
        <SideNavItem href="#contact">Contact</SideNavItem>
      </SideNav>
    </SidebarContainer>
  );
};

export default Sidebar;
