import styled from "styled-components";

export const TracksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  column-gap: 5px;
`;

export const TrackCard = styled.div`
  max-width: 220px;
  background-color: #928989;
  padding: 10px;
  border-radius: 8px;
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
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const TrackAudio = styled.audio`
  margin: 10px 0 0 0;
  max-width: 200px;
  max-height: 35px;
`;
