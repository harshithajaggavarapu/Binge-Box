import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularTvshows } from "../utils/tvseriesSlice";

const usePopularTVList = () => {
  const dispatcher = useDispatch();
  const getPopularTVList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular",
      API_OPTIONS
    );
    const json = await data.json();
    dispatcher(addPopularTvshows(json.results));
  };
  useEffect(() => {
    getPopularTVList();
  }, []);
};

export default usePopularTVList;
