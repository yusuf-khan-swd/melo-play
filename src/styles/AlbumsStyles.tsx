import styled from "styled-components";

export const AlbumsContainer = styled.div`
  margin-top: 40px;
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

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const AlbumHeading = styled.h2``;

export const AlbumCard = styled.div`
  max-width: 220px;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
`;

export const AlbumImageContainer = styled.div``;
export const AlbumImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const AlbumBody = styled.div``;

export const AlbumTitle = styled.p`
  font: 600 15px Poppins;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const AlbumAudio = styled.audio`
  margin: 10px 0 0 0;
  max-width: 200px;
  min-height: 35px;
  width: 100%;
`;
