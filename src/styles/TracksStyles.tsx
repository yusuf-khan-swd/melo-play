import styled from "styled-components";

export const TracksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 25px;
  padding: 20px;
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
  max-width: 300px;
  background-color: #b4a6a61f;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  position: relative;

  a {
    text-decoration: none;
  }
`;

export const TrackImageContainer = styled.div``;
export const TrackImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const TracksBody = styled.div`
  max-width: 235px;

  @media (max-width: 1075px) {
    max-width: 200px;
  }

  @media (max-width: 640px) {
    min-width: 100%;
  }
`;

export const TrackTitle = styled.p`
  font: 600 15px Poppins;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const CardActionContainer = styled.div`
  margin: 20px 0 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TrackAudio = styled.audio`
  max-width: 110px;
  max-height: 35px;
`;

export const FavoriteIcon = styled.div`
  cursor: pointer;
  display: grid;
  align-content: center;
`;

export const PlayListIcon = styled.div`
  cursor: pointer;
  display: grid;
  align-content: center;
`;

export const PlayButtonContainer = styled.div`
  position: absolute;
  top: 120px;
  left: 120px;
`;
