import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, items }) => {
  console.log(items);
  return (
    items && (
      <div>
        <h1 className="text-2xl p-3 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {items?.map((item) => (
              <MovieCard key={item.id} photoPath={item.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
