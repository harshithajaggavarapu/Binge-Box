import React from "react";
import { useSelector } from "react-redux";
import { dictLang } from "../utils/languageConstants";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.langConfig.lang);
  return (
    <div className="flex justify-center pt-[20%] w-screen">
      <div className="bg-black w-7/12">
        <form className="grid grid-cols-12 w-full">
          <input
            className="p-3 m-2 rounded-lg border border-black col-span-9"
            type="text"
            placeholder={dictLang[lang].gptSearchBarPlaceholder}
          />
          <button className="p-3 col-span-3 rounded-lg m-2 bg-red-700 text-white">
            {dictLang[lang].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
