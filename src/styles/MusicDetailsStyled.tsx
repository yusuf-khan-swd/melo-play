import styled from "styled-components";

export const DetailsContainer = styled.div`
  padding: 20px;
`;

export const DetailsCard = styled.div``;

export const DetailsCardBody = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const DetailsImageContainer = styled.div``;

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
  margin-top: 20px;
  width: 100%;
`;
