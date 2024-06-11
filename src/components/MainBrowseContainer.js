import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { dictLang } from "../utils/languageConstants";

const MainBrowseContainer = () => {
  const moviesLists = useSelector((store) => store.movies);
  const tvseriesList = useSelector((store) => store.tvseries);
  const lang = useSelector((store) => store.langConfig.lang);
  return (
    moviesLists && (
      <div className="bg-black pl-10 bg-opacity-95">
        <div className="-mt-36 relative z-20">
          <MovieList
            title={dictLang[lang].nowPlaying}
            items={moviesLists.nowPlayingMovies}
          />
          <MovieList
            title={dictLang[lang].popularSeries}
            items={tvseriesList.popularTvShows}
          />
          <MovieList
            title={dictLang[lang].topRatedMovies}
            items={moviesLists.topRatedMovies}
          />
          <MovieList
            title={dictLang[lang].topRatedSeries}
            items={tvseriesList.topRatedShows}
          />
        </div>
      </div>
    )
  );
};

export default MainBrowseContainer;
