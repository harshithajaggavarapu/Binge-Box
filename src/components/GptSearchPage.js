import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { BG_LOGO } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img src={BG_LOGO} alt="bglogo" />
      </div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GptSearchPage;
