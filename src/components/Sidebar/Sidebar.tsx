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
        <SideNavItem href="#home">
          <NavLogo>MeloPlay</NavLogo>
        </SideNavItem>
        <SideNavItem href="#home">
          <FaHome /> <NavItemContent>Home</NavItemContent>
        </SideNavItem>
        <SideNavItem href="#search">
          <FaSearch />
          <NavItemContent>Search</NavItemContent>
        </SideNavItem>
        <SideNavItem href="#favorite">
          <FaHeart />
          <NavItemContent>Favorites</NavItemContent>
        </SideNavItem>
        <SideNavItem href="#playlist">
          <FaList />
          <NavItemContent>Playlists</NavItemContent>
        </SideNavItem>
      </SideNav>
    </SidebarContainer>
  );
};

export default Sidebar;
