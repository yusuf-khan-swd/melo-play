import React, { useEffect } from "react";

const Search = () => {
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d4872295damsh670d100a2e2ac32p179cc4jsn11255d82ba59",
        "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
      },
    };

    fetch("https://spotify81.p.rapidapi.com/top_200_tracks", options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h2>
        Searching Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Incidunt minima consequuntur quaerat commodi cumque magni, corrupti
        asperiores dolorem ipsa at.
      </h2>
      <h1>Search 2</h1>
    </div>
  );
};

export default Search;
