import React, { useContext, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
import {
  CardActionContainer,
  FavoriteIcon,
  PlayListIcon,
  TrackAudio,
  TrackCard,
  TrackImage,
  TrackImageContainer,
  TracksBody,
  TrackTitle,
} from "../../styles/TracksStyles";

import horse from "../../assets/horse.mp3";
import { useMusics } from "../../context/MusicProvider";
import { useLocation } from "react-router-dom";

type Props = {
  image: string;
  title: string;
};

const Tracks = ({ image, title }: Props) => {
  const [addedToFavorite, setAddedToFavorite] = useState(false);
  const [addedToPlaylist, setAddedPlaylist] = useState(false);
  const { setFavoriteMusics, setPlaylistMusics } = useMusics();
  const { pathname } = useLocation();

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
    <TrackCard>
      <TrackImageContainer>
        <TrackImage src={image} alt="cover-art" />
      </TrackImageContainer>
      <TracksBody>
        <TrackTitle>{title}</TrackTitle>
      </TracksBody>

      <CardActionContainer>
        {!pathname.includes("favorite") && (
          <FavoriteIcon onClick={() => addToFavorite(image, title)}>
            {!addedToFavorite ? (
              <AiOutlineHeart size={35} fill="white" />
            ) : (
              <AiFillHeart size={35} fill="red" />
            )}
          </FavoriteIcon>
        )}
        <TrackAudio src={horse} controls />
        {!pathname.includes("playlist") && (
          <PlayListIcon onClick={() => addToPlaylist(image, title)}>
            {!addedToPlaylist ? (
              <MdPlaylistAdd size={35} fill="white" />
            ) : (
              <MdPlaylistAddCheck size={35} fill="white" />
            )}
          </PlayListIcon>
        )}
      </CardActionContainer>
    </TrackCard>
  );
};

export default Tracks;
