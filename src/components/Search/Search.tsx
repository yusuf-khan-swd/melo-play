import React, { useState } from "react";
import {
  AlbumBody,
  AlbumCard,
  AlbumImage,
  AlbumImageContainer,
  AlbumsContainer,
  AlbumTitle,
} from "../../styles/AlbumsStyles";
import { SearchContainer } from "../../styles/SerchStyles";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [albums, setAlbums] = useState([]);

  const getSearchResult = (event: React.FormEvent) => {
    if (!searchQuery.trim()) {
      return window.alert("Please type something");
    }
    event.preventDefault();
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d4872295damsh670d100a2e2ac32p179cc4jsn11255d82ba59",
        "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
      },
    };
    fetch(
      `https://spotify81.p.rapidapi.com/search?q=${searchQuery}&type=multi&offset=0&limit=50&numberOfTopResults=5`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setAlbums(response.albums.items);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <SearchContainer>
        <h2>
          Searching Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt minima consequuntur quaerat commodi cumque magni, corrupti
          asperiores dolorem ipsa at.
        </h2>
        <h1>Search 2</h1>
        <form onSubmit={getSearchResult}>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            name="search"
            id=""
          />
          <button type="submit">Submit</button>
        </form>
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
