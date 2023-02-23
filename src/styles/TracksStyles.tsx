import styled from "styled-components";

export const TracksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 40px;
  column-gap: 5px;
`;

export const TrackCard = styled.div`
  max-width: 220px;
`;

export const TrackImageContainer = styled.div`
  max-width: 150px;
`;
export const TrackImage = styled.img`
  width: 100%;
`;

export const TracksBody = styled.div``;

export const TrackTitle = styled.p`
  font: 600 18px Poppins;
  color: white;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
