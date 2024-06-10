import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedshows } from "../utils/tvseriesSlice";

const useTopRatedSeries = () => {
  const dispatcher = useDispatch();
  const getTopRatedSeriesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    dispatcher(addTopRatedshows(json.results));
  };
  useEffect(() => {
    getTopRatedSeriesList();
  }, []);
};

export default useTopRatedSeries;
