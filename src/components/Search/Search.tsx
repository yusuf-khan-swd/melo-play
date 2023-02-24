import React, { useEffect, useState } from "react";
import { SearchContainer } from "../../styles/SerchStyles";

const Search = () => {
  const [searchResult, setSearchResult] = useState();
  const [searchingKey, setSearchingKey] = useState("");

  const getSearchResult = (event: React.FormEvent) => {
    event.preventDefault();

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d4872295damsh670d100a2e2ac32p179cc4jsn11255d82ba59",
        "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
      },
    };
    fetch(
      `https://spotify81.p.rapidapi.com/search?q=${searchingKey}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSearchResult(response))
      .catch((err) => console.error(err));
  };

  console.log(searchResult);

  return (
    <SearchContainer>
      <h2>
        Searching Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Incidunt minima consequuntur quaerat commodi cumque magni, corrupti
        asperiores dolorem ipsa at.
      </h2>
      <h1>Search 2</h1>

      <form onSubmit={getSearchResult}>
        <input
          onChange={(e) => setSearchingKey(e.target.value)}
          type="text"
          name="search"
          id=""
        />
        <button type="submit">Submit</button>
      </form>
    </SearchContainer>
  );
};

export default Search;
