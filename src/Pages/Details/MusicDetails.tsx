import React, { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useMusics } from "../../context/MusicProvider";
import { MainBodyContainer } from "../../styles";
import {
  DetailsCard,
  DetailsCardBody,
  DetailsCardContentBody,
  DetailsContainer,
  DetailsImage,
  DetailsImageContainer,
  DetailsMusicAudio,
  DetailsMusicName,
} from "../../styles/MusicDetailsStyled";
import {
  Spinner,
  SpinnerBackground,
  SpinnerScreenCenter,
} from "../../styles/SpinnerStyles";

interface TrackProps {
  album: {
    uri: string;
    images: Images;
  };
  name: string;
  preview_url: string;
}

interface Images {
  [index: number]: { url: string };
}

interface Sources {
  [index: number]: { url: string };
}

const MusicDetails = () => {
  const { options } = useMusics();
  const { id } = useParams();
  const { pathname } = useLocation();
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [track, setTrack] = useState<TrackProps>();
  const [recommendAlbums, setRecommendAlbums] = useState([]);
  const [trackName, setTrackName] = useState("");
  // const trackName = track?.name.split(" ")[0];

  useEffect(() => {
    if (pathname.includes("track")) {
      setIsDataLoading(true);
      fetch(`https://spotify81.p.rapidapi.com/tracks?ids=${id}`, options)
        .then((res) => res.json())
        .then((data) => {
          setTrack(data.tracks[0]);
          setTrackName(data.tracks[0].name);
          setIsDataLoading(false);
        })
        .catch((error) => {
          setIsDataLoading(false);
          console.log("track details loading error", error);
        });
    }
  }, []);
  console.log("trackName", trackName);

  useEffect(() => {
    if (trackName) {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9c0cb3cfc5mshf2a02c9550666eep1dbb03jsn296a8bf2c6c2",
          "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
        },
      };

      setIsDataLoading(true);
      fetch(
        `https://spotify81.p.rapidapi.com/search?q=${trackName}&type=multi&offset=0&limit=50&numberOfTopResults=5`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log("response", response);
          setRecommendAlbums(response.albums.items);
          setIsDataLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsDataLoading(false);
        });
    }
  }, [trackName]);

  if (isDataLoading) {
    return (
      <SpinnerBackground>
        <SpinnerScreenCenter>
          <Spinner />
        </SpinnerScreenCenter>
      </SpinnerBackground>
    );
  }

  // let albumUri;

  // if (pathname.includes("album")) {
  //   albumUri = id;
  // } else if (pathname.includes("track")) {
  //   albumUri = track?.album?.uri.split("spotify:album:")[1];
  // }

  // console.log("track", track);
  // console.log(track?.album?.uri);

  // console.log({ albumUri: albumUri });

  // console.log(track?.name);
  // console.log(track?.album?.images[0]?.url);
  // console.log(track?.preview_url);

  console.log("recommendAlbums", recommendAlbums);

  return (
    <MainBodyContainer>
      <DetailsContainer>
        <DetailsCard>
          <DetailsCardBody>
            <DetailsImageContainer>
              <DetailsImage src={track?.album?.images[1]?.url} alt="" />
            </DetailsImageContainer>
            <DetailsCardContentBody>
              <DetailsMusicName>{track?.name}</DetailsMusicName>
            </DetailsCardContentBody>
          </DetailsCardBody>
          <DetailsMusicAudio
            src={track?.preview_url}
            controls
          ></DetailsMusicAudio>
        </DetailsCard>
        {recommendAlbums?.map(
          (
            album: {
              data: {
                name: string;
                coverArt: { sources: Sources };
              };
            },
            index: number
          ) => (
            <div key={index}>
              <img src={album?.data?.coverArt?.sources[1]?.url} alt="" />
              <p>{album.data.name}</p>
            </div>
          )
        )}
      </DetailsContainer>
    </MainBodyContainer>
  );
};

export default MusicDetails;
