import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatesMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatesMovies = () => {
  const dispatcher = useDispatch();
  const getTopRatedMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatcher(addTopRatesMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMoviesList();
  }, []);
};

export default useTopRatesMovies;
