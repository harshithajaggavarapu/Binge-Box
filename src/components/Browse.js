import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BigSuggestion from "./BigSuggestion";
import MainBrowseContainer from "./MainBrowseContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <BigSuggestion />
      <MainBrowseContainer />
    </div>
  );
};

export default Browse;
