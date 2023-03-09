import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MainBodyContainer } from "../../styles";
import {
  Spinner,
  SpinnerBackground,
  SpinnerScreenCenter,
} from "../../styles/SpinnerStyles";

const Details = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [track, setTrack] = useState({ album: { uri: "" } });

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9c0cb3cfc5mshf2a02c9550666eep1dbb03jsn296a8bf2c6c2",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  useEffect(() => {
    if (pathname.includes("track")) {
      setIsDataLoading(true);
      fetch(`https://spotify81.p.rapidapi.com/tracks?ids=${id}`, options)
        .then((res) => res.json())
        .then((data) => {
          setTrack(data.tracks[0]);
          setIsDataLoading(false);
        })
        .catch((error) => {
          setIsDataLoading(false);
          console.log("track details loading error", error);
        });
    }
  }, []);

  if (isDataLoading) {
    return (
      <SpinnerBackground>
        <SpinnerScreenCenter>
          <Spinner />
        </SpinnerScreenCenter>
      </SpinnerBackground>
    );
  }

  let albumUri;

  if (pathname.includes("album")) {
    albumUri = id;
  } else if (pathname.includes("track")) {
    albumUri = track.album.uri.split("spotify:album:")[1];
  }

  console.log(track);
  console.log(track?.album?.uri);

  console.log({ albumUri: albumUri });

  return (
    <MainBodyContainer>
      <h2>This is details page for ID: {albumUri}</h2>
    </MainBodyContainer>
  );
};

export default Details;
