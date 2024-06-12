import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptOptions",
  initialState: {
    togglebutton: false,
    gptResults: null,
    tmdbSearchResults: null,
  },
  reducers: {
    switchToGptPage: (state) => {
      state.togglebutton = !state.togglebutton;
    },
    addSearchResults: (state, action) => {
      const { gptValues, tmdbValues } = action.payload;
      state.gptResults = gptValues;
      state.tmdbSearchResults = tmdbValues;
    },
    clearSearchResults: (state) => {
      state.gptResults = null;
      state.tmdbSearchResults = null;
    },
  },
});

export const { switchToGptPage, addSearchResults, clearSearchResults } =
  gptSlice.actions;
export default gptSlice.reducer;
