import React from "react";
import { FaHeart, FaHome, FaList, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  NavItemContent,
  NavLogo,
  SidebarContainer,
  SideNav,
} from "../../styles/SidebarStyles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SideNav>
        <NavLink to={"/"}>
          <NavLogo>MeloPlay</NavLogo>
        </NavLink>
        <NavLink to={"/home"}>
          <FaHome /> <NavItemContent>Home</NavItemContent>
        </NavLink>
        <NavLink to={"/search"}>
          <FaSearch />
          <NavItemContent>Search</NavItemContent>
        </NavLink>
        <NavLink to={"/favorite"}>
          <FaHeart />
          <NavItemContent>Favorites</NavItemContent>
        </NavLink>
        <NavLink to={"/playlist"}>
          <FaList />
          <NavItemContent>Playlists</NavItemContent>
        </NavLink>
      </SideNav>
    </SidebarContainer>
  );
};

export default Sidebar;
