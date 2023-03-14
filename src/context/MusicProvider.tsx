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
      "X-RapidAPI-Key": "bdb41396f8msh87052ec67db0b5fp1f3778jsnd5145298931c",
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
