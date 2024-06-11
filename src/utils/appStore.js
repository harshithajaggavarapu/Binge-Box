import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvseriesReducer from "./tvseriesSlice";
import gptReducer from "./gptSlice";
import langReducer from "./langConfigSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvseries: tvseriesReducer,
    gptOptions: gptReducer,
    langConfig: langReducer,
  },
});

export default appStore;
