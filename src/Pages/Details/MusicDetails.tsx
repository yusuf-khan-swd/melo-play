import React, { useEffect, useState, useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
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
  MusicName,
  RecommendedContainer,
  RecommendedImage,
  RecommendedImageContainer,
  RecommendedCard,
  RecommendedAlbumName,
  RecommendedAlbumArtistContainer,
  RecommendedAlbumArtistName,
  FavoriteIconDetails,
  CastTitle,
  ArtistAndMusicNameContainer,
  ActionContainer,
} from "../../styles/MusicDetailsStyled";
import {
  Spinner,
  SpinnerBackground,
  SpinnerScreenCenter,
} from "../../styles/SpinnerStyles";
import { PlayListIcon } from "../../styles/TracksStyles";

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
  const { options, setFavoriteMusics, setPlaylistMusics } = useMusics();
  const { id } = useParams();
  const { pathname } = useLocation();
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isRecommendedLoading, setIsRecommendedLoading] = useState(false);
  const [track, setTrack] = useState<TrackProps>();
  const [recommendAlbums, setRecommendAlbums] = useState([]);
  const [trackName, setTrackName] = useState("");
  const [addedToFavorite, setAddedToFavorite] = useState(false);
  const [addedToPlaylist, setAddedPlaylist] = useState(false);

  const artists = track?.artists;
  const trackImageUrl = track ? track?.album?.images[1]?.url : "";
  const trackTitle = track ? track?.name : "";

  useEffect(() => {
    if (pathname.includes("track")) {
      setIsDataLoading(true);

      // For development purpose use fetch on local file : fetch("/trackDetails.json")
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

  useEffect(() => {
    if (trackName) {
      setIsRecommendedLoading(true);

      // For development purpose use fetch on local file: fetch("/recommendedTracks.json")
      fetch(
        `https://spotify81.p.rapidapi.com/search?q=${trackName}&type=multi&offset=0&limit=50&numberOfTopResults=5`,
        options
      )
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

  const addToFavorite = (imageUrl: string, title: string) => {
    const favoriteItem = {
      imageUrl,
      title,
    };

    setAddedToFavorite((prev) => !prev);

    setFavoriteMusics((prev: []) => [...prev, favoriteItem]);
  };

  const addToPlaylist = (imageUrl: string, title: string) => {
    const playlistItem = {
      imageUrl,
      title,
    };

    setAddedPlaylist(!addedToPlaylist);
    setPlaylistMusics((prev: []) => [...prev, playlistItem]);
  };

  return (
    <MainBodyContainer>
      <DetailsContainer>
        <DetailsCard>
          <DetailsCardBody>
            <DetailsImageContainer>
              <DetailsImage src={trackImageUrl} alt="" />
            </DetailsImageContainer>
            <DetailsCardContentBody>
              <ArtistAndMusicNameContainer>
                <MusicName>{trackTitle}</MusicName>
                <CastTitle>Cast:</CastTitle>
                <ArtistsContainer>
                  {artists &&
                    artists?.map((artist: { name: string }, index: number) => (
                      <ArtistName key={index}>{artist.name}</ArtistName>
                    ))}
                </ArtistsContainer>
              </ArtistAndMusicNameContainer>
              <ActionContainer>
                <FavoriteIconDetails
                  onClick={() => addToFavorite(trackImageUrl, trackTitle)}
                >
                  {!addedToFavorite ? (
                    <AiOutlineHeart size={35} fill="gray" />
                  ) : (
                    <AiFillHeart size={35} fill="gray" />
                  )}
                </FavoriteIconDetails>
                {
                  <PlayListIcon
                    onClick={() => addToPlaylist(trackImageUrl, trackTitle)}
                  >
                    {!addedToPlaylist ? (
                      <MdPlaylistAdd size={40} fill="gray" />
                    ) : (
                      <MdPlaylistAddCheck size={40} fill="gray" />
                    )}
                  </PlayListIcon>
                }
              </ActionContainer>
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
                  date: { year: string };
                  artists: { items: [] };
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
                  <RecommendedAlbumName>
                    {album.data.name.slice(0, 20)}
                  </RecommendedAlbumName>
                </RecommendedImageContainer>
                <RecommendedAlbumArtistContainer>
                  {album?.data?.artists?.items?.map(
                    (artist: { profile: { name: string } }, index: number) => (
                      <RecommendedAlbumArtistName key={index}>
                        {artist.profile.name}
                      </RecommendedAlbumArtistName>
                    )
                  )}
                </RecommendedAlbumArtistContainer>
                <p>{album?.data?.date?.year}</p>
              </RecommendedCard>
            )
          )}
        </RecommendedContainer>
      </DetailsContainer>
    </MainBodyContainer>
  );
};

export default MusicDetails;
