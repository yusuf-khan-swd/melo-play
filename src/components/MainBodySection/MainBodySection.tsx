import { useQuery } from "@tanstack/react-query";
import {
  Spinner,
  SpinnerBackground,
  SpinnerScreenCenter,
} from "../../styles/SpinnerStyles";
import { DataIsMissing, MainBody } from "../../styles/MainContentStyles";
import {
  TrackAudio,
  TrackCard,
  TrackImage,
  TrackImageContainer,
  TracksBody,
  TracksContainer,
  TrackTitle,
} from "../../styles/TracksStyles";

import horse from "../../assets/horse.mp3";

const MainBodySection = () => {
  const { isLoading, data: tracks } = useQuery({
    queryKey: ["tracks"],
    queryFn: async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d4872295damsh670d100a2e2ac32p179cc4jsn11255d82ba59",
          "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
        },
      };

      const res = await fetch(
        "https://spotify81.p.rapidapi.com/top_200_tracks",
        options
      );
      const data = await res.json();

      return data;
    },
  });

  console.log(tracks);

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
    <MainBody>
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
              <TrackCard key={index}>
                <TrackImageContainer>
                  <TrackImage
                    src={track.trackMetadata.displayImageUri}
                    alt="cover-art"
                  />
                </TrackImageContainer>
                <TracksBody>
                  <TrackTitle>{track.trackMetadata.trackName}</TrackTitle>
                  <TrackAudio src={horse} controls />
                </TracksBody>
              </TrackCard>
            )
          )}
        </TracksContainer>
      )}
    </MainBody>
  );
};

export default MainBodySection;
