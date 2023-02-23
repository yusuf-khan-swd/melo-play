import styled from "styled-components";

export const SpinnerBackground = styled.div`
  background-color: #2e2c2c;
  height: 100vh;
`;

export const SpinnerScreenCenter = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
