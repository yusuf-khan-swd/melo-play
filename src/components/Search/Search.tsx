import React, { useEffect, useState } from "react";
import {
  AlbumBody,
  AlbumCard,
  AlbumImage,
  AlbumImageContainer,
  AlbumsContainer,
  AlbumTitle,
} from "../../styles/AlbumsStyles";
import {
  SearchContainer,
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

const Search = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d4872295damsh670d100a2e2ac32p179cc4jsn11255d82ba59",
        "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
      },
    };

    if (searchQuery.length > 2) {
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
    }
  }, [searchQuery]);

  console.log(searchQuery);

  const getSearchResult = (event: React.FormEvent) => {
    event.preventDefault();

    if (!searchQuery.trim()) {
      return window.alert("Please type something");
    }

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d4872295damsh670d100a2e2ac32p179cc4jsn11255d82ba59",
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
    <>
      <SearchContainer>
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
          <AlbumsContainer>
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
                <AlbumCard key={index}>
                  <AlbumImageContainer>
                    <AlbumImage
                      src={album?.data?.coverArt?.sources[0].url}
                      alt=""
                    />
                  </AlbumImageContainer>
                  <AlbumBody>
                    <AlbumTitle>{album?.data.name}</AlbumTitle>
                  </AlbumBody>
                </AlbumCard>
              )
            )}
          </AlbumsContainer>
        )}
      </SearchContainer>
    </>
  );
};

export default Search;
