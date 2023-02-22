import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #121212;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
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
`;

export const Login = styled(buttonStyle)`
  background-color: white;

  :hover {
    transform: scale(105%);
  }
`;

export const SignUp = styled(buttonStyle)`
  background-color: transparent;
  color: #a7a7a7;
  :hover {
    color: white;
  }
`;
