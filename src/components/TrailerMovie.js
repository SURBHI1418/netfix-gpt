// components/TrailerModal.js
import React from "react";
import VideoBackground from "./VideoBackground";
import { SquareX } from "lucide-react";

const TrailerMovie = ({ movieId, onClose }) => {
  if (!movieId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-5xl mx-auto px-4">
        <button
          className="absolute top-2 right-2 text-white text-3xl z-10"
          onClick={onClose}
        >
          <SquareX className=" mt-[-30%] ml-[-25%]  text-white hover:text-red-500 " />
        </button>
        <VideoBackground movieId={movieId} />
      </div>
    </div>
  );
};

export default TrailerMovie;
