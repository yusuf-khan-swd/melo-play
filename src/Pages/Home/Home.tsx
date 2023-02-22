import React, { useEffect, useState } from "react";
import MainBodySection from "../../components/MainBodySection/MainBodySection";

const Home = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d4872295damsh670d100a2e2ac32p179cc4jsn11255d82ba59",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    fetch(
      "https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US",
      options
    )
      .then((response) => response.json())
      .then((data) => setTracks(data.tracks))
      .catch((err) => console.error(err));
  }, []);

  return <MainBodySection />;
};

export default Home;
