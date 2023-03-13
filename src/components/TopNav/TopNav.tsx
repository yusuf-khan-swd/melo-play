import React from "react";
import { NavLink } from "react-router-dom";
import {
  NavLogo,
  Login,
  LoginsContainer,
  NavContainer,
  SignUp,
} from "../../styles/TopNavStyles";

const TopNav = () => {
  return (
    <NavContainer>
      <NavLink to={"/"}>
        <NavLogo> Melo Play </NavLogo>
      </NavLink>
      <LoginsContainer>
        <SignUp>Sign up</SignUp>
        <Login>Login</Login>
      </LoginsContainer>
    </NavContainer>
  );
};

export default TopNav;
