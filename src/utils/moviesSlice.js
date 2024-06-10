import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: {},
    bigSuggestionMovieDetails: {},
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addBigSuggestionVideoDetails: (state, action) => {
      state.bigSuggestionMovieDetails = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addBigSuggestionVideoDetails } =
  moviesSlice.actions;
export default moviesSlice.reducer;
