import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { AlbumsContainer } from "../../styles/AlbumsStyles";
import { SearchContainer } from "../../styles/SerchStyles";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState({ albums: { items: [] } });
  const [albums, setAlbums] = useState([]);

  const { data: searchResult2, isLoading } = useQuery({
    queryKey: ["albums", "searchQuery"],
    queryFn: async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d4872295damsh670d100a2e2ac32p179cc4jsn11255d82ba59",
          "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
        },
      };

      const res = await fetch(
        `https://spotify81.p.rapidapi.com/search?q=${searchQuery}&type=multi&offset=0&limit=50&numberOfTopResults=5`,
        options
      );

      const data = await res.json();
      console.log(data);
      setAlbums(data.albums.items);
      return data.albums.items;
    },
  });

  if (isLoading) {
    return <p style={{ marginLeft: "250px" }}>Loading</p>;
  }

  console.log(searchResult2);

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
        setSearchResult(response);
        setAlbums(response.albums.items);
      })
      .catch((err) => console.error(err));
  };

  // console.log(albums[20]?.data?.coverArt?.sources[0].url);

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
        {searchResult && (
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
                <div key={index}>
                  <p>{album?.data.name}</p>
                  <img src={album?.data?.coverArt?.sources[0].url} alt="" />
                </div>
              )
            )}
          </AlbumsContainer>
        )}
      </SearchContainer>
    </>
  );
};

export default Search;
