import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptSuggestions = () => {
  const { gptResults, tmdbSearchResults } = useSelector(
    (store) => store.gptOptions
  );
  const gptResultsArray = gptResults ? Object.values(gptResults)[0] : [];
  if (!tmdbSearchResults) return null;
  const tmdbSearchResultsArray = tmdbSearchResults
    ? Object.values(tmdbSearchResults)[0]
    : [];

  return (
    <div className="bg-black bg-opacity-80 m-[3%]">
      <div className="pl-[5%]">
        {gptResultsArray.map((movieset, index) => (
          <MovieList
            key={movieset}
            title={movieset}
            items={tmdbSearchResultsArray[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestions;
