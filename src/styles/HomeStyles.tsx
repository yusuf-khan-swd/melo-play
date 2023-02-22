import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const MainContent = styled.div`
  grid-column-start: 3;
  grid-column-end: 13;
`;
