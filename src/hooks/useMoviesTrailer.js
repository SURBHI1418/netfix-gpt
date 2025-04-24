 
import { useEffect, useState } from "react";
import { API_OPTION } from "../utils/constant";

const useMoviesTrailer = (movieId) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const getTrailer = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTION
      );
      const json = await res.json();

      const filtered = json.results.filter((video) => video.type === "Trailer");
      setTrailer(filtered.length ? filtered[0] : json.results[0]);
    };

    getTrailer();
  }, [movieId]);

  return trailer;
};

export default useMoviesTrailer;

