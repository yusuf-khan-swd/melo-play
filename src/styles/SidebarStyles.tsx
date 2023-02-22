import styled from "styled-components";

export const SidebarContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const SideNav = styled.div`
  height: 100%;
  width: 210px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  text-align: center;
`;

export const NavLogo = styled.p`
  font: bold 25px "Poppins";
  margin: 0 0 8px 0;
`;

export const SideNavItem = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: flex;
  align-items: center;

  :hover {
    color: #f1f1f1;
  }
`;
