import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    bigSuggestionMovieDetails: [],
    topRatedMovies: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addBigSuggestionVideoDetails: (state, action) => {
      state.bigSuggestionMovieDetails = action.payload;
    },
    addTopRatesMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addBigSuggestionVideoDetails,
  addTopRatesMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
