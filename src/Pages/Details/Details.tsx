import React from "react";
import { useParams } from "react-router-dom";
import { MainBodyContainer } from "../../styles";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <MainBodyContainer>
      <h2>This is details page for ID: {id}</h2>
    </MainBodyContainer>
  );
};

export default Details;
