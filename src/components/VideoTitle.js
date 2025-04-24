import React from "react";
import { Play, Info } from "lucide-react";
import TrailerMovie from "./TrailerMovie";
import { useState } from "react";
import { SquareX } from "lucide-react";

const VideoTitle = ({ title, overview, movieId }) => {
  const [selectedPlayingMovieId, setSelectedPlayingMovieId] = useState(null);
  const [moreInfo, setMoreInfo] = useState(false);
  const handlePlayClick = () => {
    setSelectedPlayingMovieId(movieId);
  };
  const closeMovieTrailer = () => {
    setSelectedPlayingMovieId(null);
  };

  const handleMoreInfo = () => {
    setMoreInfo(true);
  };
  const onClose = () => {
    setMoreInfo(false);
  };

  return (
    <div className="w-screen aspect-video pt-[13%] px-6 lg:px-24 absolute text-white  lg:bg-gradient-to-r from-black md:mt-40 mt-16 lg:md-0">
      <h1 className="text-2xl  lg:text-6xl font-bold">{title}</h1>
      <p className="hidden  lg:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex space-x-4 md:mt-2">
        <button className="bg-white text-black py-2 md:py-4 px:2 md:px-12 text-sm md:text-xl flex items-center rounded-lg hover:bg-opacity-70 mt-2 md:mt-0">
          <Play onClick={handlePlayClick} className="hidden lg:inline-block" />
          <span className="px-5 md:px-0  lg:px-0 lg:ml-2">Play</span>
        </button>

        <button
          onClick={handleMoreInfo}
          className="hidden lg:inline-flex bg-gray-500 text-white p-4 px-12 text-xl items-center bg-opacity-50 rounded-lg hover:bg-opacity-95 "
        >
          <Info />
          <span className="ml-2">More Info</span>
        </button>
      </div>
      {selectedPlayingMovieId && (
        <TrailerMovie
          movieId={selectedPlayingMovieId}
          onClose={closeMovieTrailer}
        />
      )}
      {moreInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-80  flex items-center justify-center ">
          <button
            className="absolute  left-2 right-2 text-white text-3xl z-10"
            onClick={onClose}
          >
            {overview}
            <SquareX className=" absolute top-[-80%] right-2 text-white text-xl hover:text-red-500" />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoTitle;
