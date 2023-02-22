import React from "react";
import { FaHeart, FaHome, FaList, FaSearch } from "react-icons/fa";
import {
  NavLogo,
  SidebarContainer,
  SideNav,
  SideNavItem,
} from "../../styles/SidebarStyles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SideNav>
        <SideNavItem>
          <NavLogo>MeloPlay</NavLogo>
        </SideNavItem>
        <SideNavItem href="#about">
          <FaHome /> Home
        </SideNavItem>
        <SideNavItem href="#services">
          <FaSearch />
          Search
        </SideNavItem>
        <SideNavItem href="#clients">
          <FaHeart />
          Favorites
        </SideNavItem>
        <SideNavItem href="#contact">
          <FaList />
          Playlists
        </SideNavItem>
      </SideNav>
    </SidebarContainer>
  );
};

export default Sidebar;
