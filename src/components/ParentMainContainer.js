import React, { useState } from "react";
import MainContainer from "./MainContainer";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const ParentMainContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  if (!nowPlayingMovies) return null;

  const selectedMovie =
    selectedMovieId != null
      ? nowPlayingMovies.find((movie) => movie.id === selectedMovieId)
      : nowPlayingMovies[0]; // fallback to first movie

  return (
    <>
      <MainContainer movie={selectedMovie} />
      <MovieList
        title="Now Playing"
        movies={nowPlayingMovies}
        onMovieClick={setSelectedMovieId}
      />
    </>
  );
};

export default ParentMainContainer;
