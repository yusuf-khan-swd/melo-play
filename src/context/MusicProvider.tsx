import React, { createContext, useState, useContext } from "react";

type Props = {
  children: React.ReactNode;
};

export const MusicContext = createContext({
  favoriteMusics: [],
  playlistMusics: [],
  options: {},
  setFavoriteMusics: (prev: any) => {},
  setPlaylistMusics: (prev: any) => {},
});

const MusicProvider = ({ children }: Props) => {
  const [favoriteMusics, setFavoriteMusics] = useState([]);
  const [playlistMusics, setPlaylistMusics] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9c0cb3cfc5mshf2a02c9550666eep1dbb03jsn296a8bf2c6c2",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  const musicInfo = {
    favoriteMusics,
    playlistMusics,
    options,
    setFavoriteMusics,
    setPlaylistMusics,
  };

  return (
    <MusicContext.Provider value={musicInfo}>{children}</MusicContext.Provider>
  );
};

export const useMusics = () => {
  return useContext(MusicContext);
};

export default MusicProvider;
