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
  const items = [
    { path: "/home", name: "Home", icon: <FaHome /> },
    { path: "/search", name: "Search", icon: <FaSearch /> },
    { path: "/favorite", name: "Favorites", icon: <FaHeart /> },
    { path: "/playlist", name: "Playlists", icon: <FaList /> },
  ];

  return (
    <SidebarContainer>
      <SideNav>
        <NavLink to={"/"}>
          <NavLogo>MeloPlay</NavLogo>
        </NavLink>
        {items.map((item, index) => (
          <NavLink key={index} to={item.path}>
            {item.icon}
            <NavItemContent>{item.name}</NavItemContent>
          </NavLink>
        ))}
      </SideNav>
    </SidebarContainer>
  );
};

export default Sidebar;
