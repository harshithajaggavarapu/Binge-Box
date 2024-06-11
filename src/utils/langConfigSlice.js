import { createSlice } from "@reduxjs/toolkit";

const langConfigSlice = createSlice({
  name: "langconfig",
  initialState: {
    lang: "en",
  },
  reducers: {
    modifyLangPreference: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { modifyLangPreference } = langConfigSlice.actions;
export default langConfigSlice.reducer;
