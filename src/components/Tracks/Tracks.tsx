import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
import {
  CardIconContainer,
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

type Props = {
  image: string;
  title: string;
};

const Tracks = ({ image, title }: Props) => {
  const [addedToFavorite, setAddedToFavorite] = useState(false);
  const [addedToPlaylist, setAddedPlaylist] = useState(false);

  const addToFavorite = (imageUrl: string, title: string) => {
    const favoriteItem = {
      imageUrl,
      title,
    };

    setAddedToFavorite((prev) => !prev);
  };

  const addToPlaylist = (imageUrl: string, title: string) => {
    const playlistItem = {
      imageUrl,
      title,
    };

    setAddedPlaylist(!addedToPlaylist);
  };

  return (
    <TrackCard>
      <TrackImageContainer>
        <TrackImage src={image} alt="cover-art" />
      </TrackImageContainer>
      <TracksBody>
        <TrackTitle>{title}</TrackTitle>
        <TrackAudio src={horse} controls />
      </TracksBody>
      <CardIconContainer>
        <FavoriteIcon onClick={() => addToFavorite(image, title)}>
          {!addedToFavorite ? (
            <AiOutlineHeart size={35} fill="white" />
          ) : (
            <AiFillHeart size={35} fill="white" />
          )}
        </FavoriteIcon>
        <PlayListIcon onClick={() => addToPlaylist(image, title)}>
          {!addedToPlaylist ? (
            <MdPlaylistAdd size={35} fill="white" />
          ) : (
            <MdPlaylistAddCheck size={35} fill="white" />
          )}
        </PlayListIcon>
      </CardIconContainer>
    </TrackCard>
  );
};

export default Tracks;
