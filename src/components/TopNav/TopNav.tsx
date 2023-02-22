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
      <ArrowContainer>
        <LeftArrow>
          <ArrowSVG
            role="img"
            height="16"
            width="16"
            aria-hidden="true"
            className="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
            viewBox="0 0 16 16"
            data-encore-id="icon"
          >
            <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
          </ArrowSVG>
        </LeftArrow>
        <RightArrow>
          <ArrowSVG
            role="img"
            height="16"
            width="16"
            aria-hidden="true"
            className="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
            viewBox="0 0 16 16"
            data-encore-id="icon"
          >
            <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
          </ArrowSVG>
        </RightArrow>
      </ArrowContainer>
      <LoginsContainer>
        <Login>Login</Login>
        <SignUp>Sign up</SignUp>
      </LoginsContainer>
    </NavContainer>
  );
};

export default TopNav;
