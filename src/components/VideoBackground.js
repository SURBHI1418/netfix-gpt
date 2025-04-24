import React from "react";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const VideoBackground = ({ movieId,onClose }) => {
  const trailerVideo = useMoviesTrailer(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="aspect-video w-full">
      <iframe
        className="w-full h-full rounded-lg shadow-xl"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

