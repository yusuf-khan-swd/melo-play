import Tracks from "../../components/Tracks/Tracks";
import { useMusics } from "../../context/MusicProvider";
import { MainBodyContainer } from "../../styles";
import { TracksContainer } from "../../styles/TracksStyles";

const Playlist = () => {
  const { playlistMusics } = useMusics();
  return (
    <MainBodyContainer>
      <TracksContainer>
        {playlistMusics.map(
          (music: { title: string; imageUrl: string }, index: number) => (
            <Tracks key={index} title={music.title} image={music.imageUrl} />
          )
        )}
      </TracksContainer>
    </MainBodyContainer>
  );
};

export default Playlist;
