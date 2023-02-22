import styled from "styled-components";

export const SidebarContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const SideNav = styled.div`
  height: 100%;
  background-color: #111;
  text-align: center;

  a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 18px;
    color: #818181;
    display: flex;
    align-items: center;

    :hover {
      color: #f1f1f1;
    }
  }
`;

export const NavLogo = styled.p`
  font: bold 25px "Poppins";
  margin: 0 0 8px 0;
`;

export const NavItemContent = styled.span`
  margin: 0 0 0 6px;
`;
