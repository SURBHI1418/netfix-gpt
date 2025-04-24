import React, { useState } from "react";
import MovieCard from "./MovieCard";
import TrailerMovie from "./TrailerMovie";

const MovieList = ({ title, movies }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleVideoPlayingBackground = (movieId) => {
    console.log("Play video background for movie ID:", movieId);
    setSelectedMovieId(movieId);
  };

  const closeMovieTrailer = () => {
    setSelectedMovieId(null);
  };

  return (
    <div className="px-6">
      <h1 className="text-lg lg:text-4xl py-4 text-white">{title}</h1>

      {/* Modal overlay */}
      <TrailerMovie movieId={selectedMovieId} onClose={closeMovieTrailer} />

      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex cursor-pointer">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              onClick={() => handleVideoPlayingBackground(movie.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
