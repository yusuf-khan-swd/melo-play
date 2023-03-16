import styled from "styled-components";

export const DetailsContainer = styled.div`
  padding: 20px;
`;

export const DetailsCard = styled.div``;

export const DetailsCardBody = styled.div`
  display: flex;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const DetailsImageContainer = styled.div`
  max-width: 320px;
`;

export const DetailsImage = styled.img`
  width: 100%;
`;

export const DetailsCardContentBody = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 260px;

  @media (max-width: 760px) {
    margin-left: 0;
    margin: 10px 0;
  }
`;

export const ArtistAndMusicNameContainer = styled.div``;

export const MusicName = styled.p`
  font: 500 45px "Poppins";

  @media (max-width: 760px) {
    font-size: 20px;
  }
`;

export const ArtistsContainer = styled.ul`
  margin-left: 15px;
  list-style-type: none;
`;

export const CastTitle = styled.p`
  margin: 8px 0;
`;

export const ArtistName = styled.li`
  font-size: 14px;
  margin: 5px 0;
`;

export const ActionContainer = styled.div``;

export const FavoriteIconDetails = styled.div`
  cursor: pointer;
  display: grid;
  align-content: center;
`;

export const DetailsMusicAudio = styled.audio`
  margin: 20px 0 30px 0;
`;

export const RecommendedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

export const RecommendedCard = styled.div`
  background-color: #3a3939;
  border-radius: 8px;
  padding: 5px;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const RecommendedImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RecommendedImage = styled.img`
  border-radius: 3px;
`;

export const RecommendedAlbumName = styled.p`
  margin-left: 10px;
`;

export const RecommendedAlbumArtistContainer = styled.div``;

export const RecommendedAlbumArtistName = styled.p``;
