import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatcher = useDispatch();
  const getNowPlayingList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatcher(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingList();
  }, []);
};

export default useNowPlayingMovies;
