import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BigSuggestion from "./BigSuggestion";
import MainBrowseContainer from "./MainBrowseContainer";
import usePopularTVList from "../hooks/usePopularTVList";
import useTopRatesMovies from "../hooks/useTopRatesMovies";
import useTopRatedSeries from "../hooks/useTopRatesSeries";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const displayGptPage = useSelector((store) => store.gptOptions.togglebutton);
  useNowPlayingMovies();
  usePopularTVList();
  useTopRatesMovies();
  useTopRatedSeries();
  return (
    <div>
      <Header />
      {displayGptPage ? (
        <GptSearchPage />
      ) : (
        <>
          <BigSuggestion />
          <MainBrowseContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
