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
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "9c0cb3cfc5mshf2a02c9550666eep1dbb03jsn296a8bf2c6c2",
            "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
          },
        };

        const res = await fetch(
          "https://spotify81.p.rapidapi.com/top_200_tracks",
          options
        );

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

  return (
    <MainBodyContainer>
      {!tracks.length ? (
        <DataIsMissing>Data is Missing</DataIsMissing>
      ) : (
        <TracksContainer>
          {tracks.map(
            (
              track: {
                trackMetadata: { displayImageUri: string; trackName: string };
              },
              index: number
            ) => (
              <Tracks
                key={index}
                image={track?.trackMetadata?.displayImageUri}
                title={track?.trackMetadata?.trackName}
              />
            )
          )}
        </TracksContainer>
      )}
    </MainBodyContainer>
  );
};

export default MainBodySection;
