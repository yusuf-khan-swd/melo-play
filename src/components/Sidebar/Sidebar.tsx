import React from "react";
import { FaHeart, FaHome, FaList, FaSearch } from "react-icons/fa";
import {
  NavItemContent,
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
          <FaHome /> <NavItemContent>Home</NavItemContent>
        </SideNavItem>
        <SideNavItem href="#services">
          <FaSearch />
          <NavItemContent>Search</NavItemContent>
        </SideNavItem>
        <SideNavItem href="#clients">
          <FaHeart />
          <NavItemContent>Favorites</NavItemContent>
        </SideNavItem>
        <SideNavItem href="#contact">
          <FaList />
          <NavItemContent>Playlists</NavItemContent>
        </SideNavItem>
      </SideNav>
    </SidebarContainer>
  );
};

export default Sidebar;
