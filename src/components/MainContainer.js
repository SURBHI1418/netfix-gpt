import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies == null) return;
  const mainMovies = movies[0];
  const { original_title, overview, id, release_date, popularity } = mainMovies;

  return (
    <div className="pt-[35%] md:pt-0 bg-black ">
      <VideoTitle
        movieId={id}
        title={original_title}
        overview={overview}
        release_date={release_date}
        popularity={popularity}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
