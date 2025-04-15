import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useTrendingMovies = () => {
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    if (!trendingMovies) getTrendingMovies();
  }, []);
};
export default useTrendingMovies;
