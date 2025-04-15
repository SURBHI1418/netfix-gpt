import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName) return null;
  const movieNamesArray =
    typeof movieName === "string"
      ? movieName.split(",").map((name) => name.trim())
      : [];
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNamesArray.map((name, index) => (
          <MovieList key={index} title={name} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
