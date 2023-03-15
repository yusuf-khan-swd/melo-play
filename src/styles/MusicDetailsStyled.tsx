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
  max-width: 380px;
`;

export const DetailsImage = styled.img`
  width: 100%;
`;

export const DetailsCardContentBody = styled.div`
  margin-left: 10px;
`;

export const DetailsMusicName = styled.p`
  font: 500 50px "Poppins";

  @media (max-width: 760px) {
    font-size: 18px;
  }
`;

export const DetailsMusicAudio = styled.audio`
  margin: 20px 0;
  width: 100%;
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
  display: flex;
  cursor: pointer;
`;

export const RecommendedImageContainer = styled.div`
  display: flex;
`;

export const RecommendedImage = styled.img`
  border-radius: 3px;
`;
