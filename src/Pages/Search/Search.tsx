import React, { useState, useContext } from "react";
import {
  SearchForm,
  SearchGroup,
  SearchIcon,
  SearchInput,
} from "../../styles/SearchStyles";

import searchIcon from "../../assets/search.png";
import {
  Spinner,
  SpinnerBackground,
  SpinnerScreenCenter,
} from "../../styles/SpinnerStyles";
import { MainBodyContainer } from "../../styles";

import { MusicContext } from "../../context/MusicProvider";
import Tracks from "../../components/Tracks/Tracks";
import { TracksContainer } from "../../styles/TracksStyles";

const Search = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const {} = useContext(MusicContext);

  const getSearchResult = (event: React.FormEvent) => {
    event.preventDefault();

    if (!searchQuery.trim()) {
      return window.alert("Please type something");
    }

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9c0cb3cfc5mshf2a02c9550666eep1dbb03jsn296a8bf2c6c2",
        "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
      },
    };

    setIsDataLoading(true);
    fetch(
      `https://spotify81.p.rapidapi.com/search?q=${searchQuery}&type=multi&offset=0&limit=50&numberOfTopResults=5`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setAlbums(response.albums.items);
        setIsDataLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsDataLoading(false);
      });
  };

  return (
    <MainBodyContainer>
      <SearchForm onSubmit={getSearchResult}>
        <SearchGroup>
          <SearchInput
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            name="search"
            id=""
          />
          <SearchIcon onClick={getSearchResult} src={searchIcon} />
        </SearchGroup>
      </SearchForm>
      {isDataLoading && (
        <SpinnerBackground>
          <SpinnerScreenCenter>
            <Spinner />
          </SpinnerScreenCenter>
        </SpinnerBackground>
      )}
      {albums.length > 0 && (
        <TracksContainer>
          {albums.map(
            (
              album: {
                data: {
                  name: string;
                  coverArt: { sources: [Key: { url: string }] };
                };
              },
              index: number
            ) => (
              <Tracks
                key={index}
                image={album?.data?.coverArt?.sources[0].url}
                title={album?.data.name}
              />
            )
          )}
        </TracksContainer>
      )}
    </MainBodyContainer>
  );
};

export default Search;
