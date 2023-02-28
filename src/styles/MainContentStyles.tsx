import styled from "styled-components";

export const MainBody = styled.div`
  background-color: #2e2c2c;
  margin-left: 210px;
  min-height: 100vh;
  padding: 10px 0;

  @media (max-width: 940px) {
    margin-left: 60px;
  }
`;

export const DataIsMissing = styled.h2`
  color: white;
  text-align: center;
`;
