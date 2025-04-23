import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG_URL } from "../utils/constant";
const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="h-screen w-screen object-cover"
          src={BG_IMG_URL}
          alt="bg-img"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;
