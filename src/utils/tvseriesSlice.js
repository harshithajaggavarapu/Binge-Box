import { createSlice } from "@reduxjs/toolkit";

const tvseriesSlice = createSlice({
  name: "tvseries",
  initialState: {
    popularTvShows: [],
    topRatedShows: [],
  },
  reducers: {
    addPopularTvshows: (state, action) => {
      state.popularTvShows = action.payload;
    },
    addTopRatedshows: (state, action) => {
      state.topRatedShows = action.payload;
    },
  },
});

export const { addPopularTvshows, addTopRatedshows } = tvseriesSlice.actions;
export default tvseriesSlice.reducer;
