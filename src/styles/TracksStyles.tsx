import styled from "styled-components";

export const TracksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 40px;
  column-gap: 5px;
  padding: 20px 0;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const TrackCard = styled.div`
  max-width: 220px;
  background-color: #b4a6a61f;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
`;

export const TrackImageContainer = styled.div``;
export const TrackImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const TracksBody = styled.div``;

export const TrackTitle = styled.p`
  font: 600 15px Poppins;
  color: white;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const TrackAudio = styled.audio`
  margin: 15px 0 0 0;
  max-width: 200px;
  max-height: 35px;
`;

export const CardIconContainer = styled.div`
  margin: 8px 0 0 0;
  display: flex;
  justify-content: space-between;
`;

export const FavoriteIcon = styled.div`
  cursor: pointer;
`;

export const PlayListIcon = styled.div`
  cursor: pointer;
`;
