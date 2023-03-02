import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const MusicContext = createContext({});

const MusicProvider = ({ children }: Props) => {
  const [favoriteMusics, setFavoriteMusics] = useState([]);

  const musicInfo = { favoriteMusics, setFavoriteMusics };

  return (
    <MusicContext.Provider value={musicInfo}>{children}</MusicContext.Provider>
  );
};

export default MusicProvider;
