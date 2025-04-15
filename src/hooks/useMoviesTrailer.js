import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const useMoviesTrailer = (movieId) => {
  
    const trailerVideo= useSelector(
      (store) => store.movies.trailerVideo
    );

  const dispatch = useDispatch();
  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();

    const fliterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = fliterData.length ? fliterData[0] : json.results[0];
    
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMoviesVideo();
  }, []);
};
export default useMoviesTrailer;
