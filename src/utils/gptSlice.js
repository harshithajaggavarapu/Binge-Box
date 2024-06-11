import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptOptions",
  initialState: {
    togglebutton: false,
  },
  reducers: {
    switchToGptPage: (state) => {
      state.togglebutton = !state.togglebutton;
    },
  },
});

export const { switchToGptPage } = gptSlice.actions;
export default gptSlice.reducer;
