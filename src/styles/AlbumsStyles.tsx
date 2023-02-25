import styled from "styled-components";

export const AlbumsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 40px;
  column-gap: 5px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AlbumHeading = styled.h2``;
