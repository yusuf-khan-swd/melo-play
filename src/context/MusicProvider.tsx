import React, { createContext, useState, useContext } from "react";

type Props = {
  children: React.ReactNode;
};

export const MusicContext = createContext({});

const MusicProvider = ({ children }: Props) => {
  const [favoriteMusics, setFavoriteMusics] = useState([]);
  const [playlistMusics, setPlaylistMusics] = useState([]);

  const musicInfo = {
    favoriteMusics,
    playlistMusics,
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
