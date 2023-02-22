import React, { useEffect } from "react";
import MainBodySection from "../../components/MainBodySection/MainBodySection";

const Home = () => {
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d4872295damsh670d100a2e2ac32p179cc4jsn11255d82ba59",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    fetch(
      "https://shazam.p.rapidapi.com/shazam-events/list?artistId=73406786&l=en-US&from=2022-12-31&limit=50&offset=0",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  return <MainBodySection />;
};

export default Home;
