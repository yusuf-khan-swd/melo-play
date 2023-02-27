import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #2e2c2c;
  border-bottom: 1px solid grey;
`;

export const ArrowContainer = styled.div``;

export const ArrowSVG = styled.svg``;

export const LeftArrow = styled.button``;

export const RightArrow = styled.button``;

export const LoginsContainer = styled.div``;

const buttonStyle = styled.button`
  padding: 8px 20px;
  border-radius: 25px;
  border: none;
  font: 500 16px Poppins;

  :hover {
    transform: scale(105%);
  }
`;

export const Login = styled(buttonStyle)`
  background-color: white;
`;

export const SignUp = styled(buttonStyle)`
  background-color: transparent;
  color: #a7a7a7;
  padding-right: 32px;
  :hover {
    color: white;
  }
`;
