import React, { useEffect, useState } from "react";
import { MainBody } from "../../styles/MainContentStyles";
import {
  TrackCard,
  TrackImage,
  TrackImageContainer,
  TracksBody,
  TracksContainer,
  TrackTitle,
} from "../../styles/TracksStyles";
import TracksCard from "../TracksCard/TracksCard";

const MainBodySection = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d4872295damsh670d100a2e2ac32p179cc4jsn11255d82ba59",
        "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
      },
    };

    fetch("https://spotify81.p.rapidapi.com/top_200_tracks", options)
      .then((response) => response.json())
      .then((response) => setTracks(response))
      .catch((err) => console.error(err));
  }, []);

  console.log(tracks);

  return (
    <MainBody>
      <TracksContainer>
        {tracks.map((track, index) => (
          <TrackCard>
            <TrackImageContainer>
              <TrackImage
                src={track?.trackMetadata?.displayImageUri}
                alt="cover-art"
              />
            </TrackImageContainer>
            <TracksBody key={index}>
              <TrackTitle>{track.trackMetadata.trackName}</TrackTitle>
            </TracksBody>
          </TrackCard>
        ))}
      </TracksContainer>
    </MainBody>
  );
};

export default MainBodySection;
