import React from "react";
import Tracks from "../../components/Tracks/Tracks";
import { useMusics } from "../../context/MusicProvider";
import { MainBodyContainer } from "../../styles";
import { TracksContainer } from "../../styles/TracksStyles";

const Favorite = () => {
  const { favoriteMusics } = useMusics();
  return (
    <MainBodyContainer>
      <TracksContainer>
        {favoriteMusics.map(
          (music: { title: string; imageUrl: string }, index: number) => (
            <Tracks key={index} title={music.title} image={music.imageUrl} />
          )
        )}
      </TracksContainer>
    </MainBodyContainer>
  );
};

export default Favorite;
