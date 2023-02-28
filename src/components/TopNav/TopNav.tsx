import React from "react";
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
      <NavLogo> Melo Play </NavLogo>
      <LoginsContainer>
        <SignUp>Sign up</SignUp>
        <Login>Login</Login>
      </LoginsContainer>
    </NavContainer>
  );
};

export default TopNav;
