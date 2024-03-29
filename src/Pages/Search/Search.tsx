import React, { useState, useContext } from "react";
import {
  NoDataContainer,
  NoDataTitle,
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

import { MusicContext, useMusics } from "../../context/MusicProvider";
import Tracks from "../../components/Tracks/Tracks";
import { TracksContainer } from "../../styles/TracksStyles";

const Search = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const { options } = useMusics();

  const getSearchResult = (event: React.FormEvent) => {
    event.preventDefault();

    if (!searchQuery.trim()) {
      return window.alert("Please type something");
    }

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
      {!albums.length && !isDataLoading && (
        <NoDataContainer>
          <NoDataTitle>No Data Available</NoDataTitle>
        </NoDataContainer>
      )}
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
                  uri: string;
                };
              },
              index: number
            ) => (
              <Tracks
                key={index}
                image={album?.data?.coverArt?.sources[0].url}
                title={album?.data.name}
                trackUri={album?.data.uri}
              />
            )
          )}
        </TracksContainer>
      )}
    </MainBodyContainer>
  );
};

export default Search;
