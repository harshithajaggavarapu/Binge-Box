import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MainBrowseContainer = () => {
  const moviesLists = useSelector((store) => store.movies);
  const tvseriesList = useSelector((store) => store.tvseries);
  return (
    moviesLists && (
      <div className="bg-black pl-10 bg-opacity-95">
        <div className="-mt-36 relative z-20">
          <MovieList title="Now Playing" items={moviesLists.nowPlayingMovies} />
          <MovieList
            title="Popular Series"
            items={tvseriesList.popularTvShows}
          />
          <MovieList
            title="Top Rated Movies"
            items={moviesLists.topRatedMovies}
          />
          <MovieList
            title="Top Rated Series"
            items={tvseriesList.topRatedShows}
          />
        </div>
      </div>
    )
  );
};

export default MainBrowseContainer;
