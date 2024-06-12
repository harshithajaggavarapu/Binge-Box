import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { dictLang } from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addSearchResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatcher = useDispatch();
  const lang = useSelector((store) => store.langConfig.lang);
  const [errorgpt, setErrorGpt] = useState(null);
  const searchText = useRef();
  const tmdbCalls = async (value) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleSearchClick = async () => {
    const queryValue =
      "Act as a movie/tv series recommendation system and give suggestions for this search: " +
      searchText.current.value +
      ".only give me names of 5 movies, comma seperated like example. Example Result: transformers, marvel, godzilla, ddlj, salaar";
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: queryValue }],
      model: "gpt-3.5-turbo",
    });
    if (!response.choices) {
      setErrorGpt("Error in fetching details. Please try again later.");
    }
    const results = response.choices?.[0]?.message?.content.split(",");
    // const valuesfinal = Object.values(results);
    const dataPromises = results.map((value) => tmdbCalls(value));

    const tmdbSearchResults = await Promise.all(dataPromises);
    dispatcher(
      addSearchResults({
        gptValues: { results },
        tmdbValues: { tmdbSearchResults },
      })
    );
  };
  return (
    <div className="flex justify-center pt-[20%] w-screen">
      <div className="bg-black w-7/12">
        <form
          className="grid grid-cols-12 w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            className="p-3 m-2 rounded-lg border border-black col-span-9"
            type="text"
            placeholder={dictLang[lang].gptSearchBarPlaceholder}
          />
          <button
            onClick={handleSearchClick}
            className="p-3 col-span-3 rounded-lg m-2 bg-red-700 text-white"
          >
            {dictLang[lang].search}
          </button>
        </form>
      </div>
      {errorgpt && (
        <h1 className="font-3xl text-bold text-red-700">{errorgpt}</h1>
      )}
    </div>
  );
};

export default GptSearchBar;
