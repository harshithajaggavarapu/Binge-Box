import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addBigSuggestionVideoDetails } from "../utils/moviesSlice";
import { useEffect } from "react";

const useBigSuggestionVideoDetails = (movieId) => {
  const dispatcher = useDispatch();
  const getVideoDetailsForSuggestion = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    const trailerVideo = json.results.filter(
      (video) => video.name === "Official Trailer"
    );
    const videoDetails = trailerVideo ? trailerVideo : json.results[0];
    dispatcher(addBigSuggestionVideoDetails(videoDetails));
  };
  useEffect(() => {
    getVideoDetailsForSuggestion(movieId);
  }, []);
};

export default useBigSuggestionVideoDetails;
