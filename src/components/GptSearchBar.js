import React from "react";
import languageConstants from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { getGptResponse } from "../utils/ollama";
import { API_OPTION } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch(null);
  const langKey = useSelector((store) => store.config.languageConstants);
  const searchText = useRef(null);

  //For each movie that is render by GPT, we will search in TMDB movie, use their data

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //Make an API call to GPT and get movie result

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query that avaiable in Netflix" +
      searchText.current.value +
      " only give me name of 5 best movies, comma sperated movies, like the example result given ahead. Example Result: Raaz, Haunted, Gadar, Don, Golmaal and don't give anything else apart from movies as comma separate ";

    // const gptResults = await openai.responses.create({
    //   model: "gpt-3.5-turbo",
    //   instructions: "You are a coding assistant that talks like a pirate",
    //   input: gptQuery,
    // });

    const gptResults = await getGptResponse({
      model: "llama3.2:latest",
      instructions: "You are a coding assistant that talks like a pirate",
      input: gptQuery,
    });
    console.log(gptResults);
    const gptMovies = gptResults.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieName: gptResults, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={languageConstants[langKey]?.gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
          onClick={handleGptSearchClick}
        >
          {languageConstants[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
