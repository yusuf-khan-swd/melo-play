import styled from "styled-components";

export const SidebarContainer = styled.div`
  grid-column-start: 0;
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
`;

export const SideNavItem = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;

  :hover {
    color: #f1f1f1;
  }
`;
