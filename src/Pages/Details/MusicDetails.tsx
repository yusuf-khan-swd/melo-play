import React, { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useMusics } from "../../context/MusicProvider";
import { MainBodyContainer } from "../../styles";
import {
  ArtistName,
  ArtistsContainer,
  DetailsCard,
  DetailsCardBody,
  DetailsCardContentBody,
  DetailsContainer,
  DetailsImage,
  DetailsImageContainer,
  DetailsMusicAudio,
  DetailsMusicName,
  RecommendedCard,
  RecommendedContainer,
  RecommendedImage,
  RecommendedImageContainer,
  TrackType,
} from "../../styles/MusicDetailsStyled";
import {
  Spinner,
  SpinnerBackground,
  SpinnerScreenCenter,
} from "../../styles/SpinnerStyles";

interface Images {
  [index: number]: { url: string };
}

interface Sources {
  [index: number]: { url: string };
}

interface TrackProps {
  album: {
    uri: string;
    images: Images;
  };
  artists: [];
  name: string;
  preview_url: string;
}

const MusicDetails = () => {
  const { options } = useMusics();
  const { id } = useParams();
  const { pathname } = useLocation();
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isRecommendedLoading, setIsRecommendedLoading] = useState(false);
  const [track, setTrack] = useState<TrackProps>();
  const [recommendAlbums, setRecommendAlbums] = useState([]);
  const [trackName, setTrackName] = useState("");

  useEffect(() => {
    if (pathname.includes("track")) {
      setIsDataLoading(true);
      // fetch(`https://spotify81.p.rapidapi.com/tracks?ids=${id}`, options)
      fetch("/trackDetails.json")
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

  useEffect(() => {
    if (trackName) {
      setIsRecommendedLoading(true);
      // fetch(
      //   `https://spotify81.p.rapidapi.com/search?q=${trackName}&type=multi&offset=0&limit=50&numberOfTopResults=5`,
      //   options
      // )
      fetch("/recommendedTracks.json")
        .then((response) => response.json())
        .then((response) => {
          setRecommendAlbums(response.albums.items);
          setIsRecommendedLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsRecommendedLoading(false);
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

  console.log("track", track);
  console.log(track?.artists);

  const artists = track?.artists;
  // console.log(track?.album?.uri);

  // console.log({ albumUri: albumUri });

  // console.log(track?.name);
  // console.log(track?.album?.images[0]?.url);
  // console.log(track?.preview_url);

  // console.log("recommendAlbums", recommendAlbums);

  return (
    <MainBodyContainer>
      <DetailsContainer>
        <DetailsCard>
          <DetailsCardBody>
            <DetailsImageContainer>
              <DetailsImage src={track?.album?.images[1]?.url} alt="" />
            </DetailsImageContainer>
            <DetailsCardContentBody>
              <TrackType>Music</TrackType>
              <DetailsMusicName>{track?.name}</DetailsMusicName>

              <ArtistsContainer>
                {artists &&
                  artists?.map((artist: { name: string }) => (
                    <ArtistName>{artist.name}</ArtistName>
                  ))}
              </ArtistsContainer>
            </DetailsCardContentBody>
          </DetailsCardBody>
          <DetailsMusicAudio
            src={track?.preview_url}
            controls
          ></DetailsMusicAudio>
        </DetailsCard>
        {isRecommendedLoading && (
          <SpinnerBackground>
            <SpinnerScreenCenter>
              <Spinner />
            </SpinnerScreenCenter>
          </SpinnerBackground>
        )}
        <RecommendedContainer>
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
              <RecommendedCard key={index}>
                <RecommendedImageContainer>
                  <RecommendedImage
                    src={album?.data?.coverArt?.sources[1]?.url}
                    alt=""
                  />
                </RecommendedImageContainer>
                {/* <p>{album.data.name.s lice(0, 20)}</p> */}
              </RecommendedCard>
            )
          )}
        </RecommendedContainer>
      </DetailsContainer>
    </MainBodyContainer>
  );
};

export default MusicDetails;
