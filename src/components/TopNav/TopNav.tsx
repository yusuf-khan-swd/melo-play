import React from "react";
import {
  ArrowContainer,
  Login,
  LoginsContainer,
  NavContainer,
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
