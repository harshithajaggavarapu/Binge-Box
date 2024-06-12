import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { BG_LOGO } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img
          className="h-screen object-cover md:h-auto md:object-none"
          src={BG_LOGO}
          alt="bglogo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;
