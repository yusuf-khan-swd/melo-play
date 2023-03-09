import { useQuery } from "@tanstack/react-query";
import {
  Spinner,
  SpinnerBackground,
  SpinnerScreenCenter,
} from "../../styles/SpinnerStyles";
import { DataIsMissing } from "../../styles/MainContentStyles";
import { TracksContainer } from "../../styles/TracksStyles";
import { MainBodyContainer } from "../../styles";
import Tracks from "../Tracks/Tracks";

const MainBodySection = () => {
  const { isLoading, data: tracks } = useQuery({
    queryKey: ["tracks"],
    queryFn: async () => {
      try {
        const res = await fetch("musics.json");
        const data = await res.json();
        return data;
      } catch (error) {
        console.log({ catch: error });
      }
    },
  });

  if (isLoading) {
    return (
      <SpinnerBackground>
        <SpinnerScreenCenter>
          <Spinner />
        </SpinnerScreenCenter>
      </SpinnerBackground>
    );
  }

  // console.log(tracks[123].trackMetadata);
  // console.log(tracks);

  return (
    <MainBodyContainer>
      {!tracks.length ? (
        <DataIsMissing>Data is Missing</DataIsMissing>
      ) : (
        <TracksContainer>
          {tracks.map(
            (
              track: {
                trackMetadata: {
                  displayImageUri: string;
                  trackName: string;
                  trackUri: string;
                };
              },
              index: number
            ) => (
              <Tracks
                key={index}
                image={track?.trackMetadata?.displayImageUri}
                title={track?.trackMetadata?.trackName}
                trackUri={track?.trackMetadata?.trackUri}
              />
            )
          )}
        </TracksContainer>
      )}
    </MainBodyContainer>
  );
};

export default MainBodySection;
