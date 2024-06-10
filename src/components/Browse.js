import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BigSuggestion from "./BigSuggestion";
import MainBrowseContainer from "./MainBrowseContainer";
import usePopularTVList from "../hooks/usePopularTVList";
import useTopRatesMovies from "../hooks/useTopRatesMovies";
import useTopRatedSeries from "../hooks/useTopRatesSeries";

const Browse = () => {
  useNowPlayingMovies();
  usePopularTVList();
  useTopRatesMovies();
  useTopRatedSeries();
  return (
    <div>
      <Header />
      <BigSuggestion />
      <MainBrowseContainer />
    </div>
  );
};

export default Browse;
