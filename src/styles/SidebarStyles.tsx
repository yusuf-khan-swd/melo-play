import styled from "styled-components";

export const SidebarContainer = styled.div``;

export const SideNav = styled.div`
  height: 100%;
  position: fixed;
  width: 222px;
  top: 0;
  left: 0;
  background-color: #111;
  text-align: center;

  a {
    margin-bottom: 8px;
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
  margin: 0 0 0 8px;
`;
