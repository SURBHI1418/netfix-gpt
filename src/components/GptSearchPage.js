import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG_URL } from "../utils/constant";
const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10 ">
        <img className="w-screen" src={BG_IMG_URL} alt="bg-img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
