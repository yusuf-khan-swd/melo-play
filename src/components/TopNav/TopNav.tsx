import React from "react";
import {
  ArrowContainer,
  ArrowSVG,
  LeftArrow,
  Login,
  LoginsContainer,
  NavContainer,
  RightArrow,
  SignUp,
} from "../../styles/TopNavStyles";

const TopNav = () => {
  return (
    <NavContainer>
      <ArrowContainer />
      <LoginsContainer>
        <SignUp>Sign up</SignUp>
        <Login>Login</Login>
      </LoginsContainer>
    </NavContainer>
  );
};

export default TopNav;
