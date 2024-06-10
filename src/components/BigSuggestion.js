import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const BigSuggestion = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const bigSuggestionMovie = movies[0];
  if (!bigSuggestionMovie) return;
  console.log(bigSuggestionMovie);
  const { original_title, overview, id } = bigSuggestionMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default BigSuggestion;
