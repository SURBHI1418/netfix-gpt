import React from "react";
import { Play, Info } from "lucide-react";
import TrailerMovie from "./TrailerMovie";
import { useState } from "react";
import { SquareX, Eye } from "lucide-react";

const VideoTitle = ({ title, overview, movieId, release_date, popularity }) => {
  const [selectedPlayingMovieId, setSelectedPlayingMovieId] = useState(null);
  const [moreInfo, setMoreInfo] = useState(false);
  const handlePlayClick = () => {
    console.log("Clicked Play Button, ID:", movieId);

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
        <button
          onClick={handlePlayClick}
          className="bg-white text-black py-2 md:py-4 px:2 md:px-12 text-sm md:text-xl flex items-center rounded-lg hover:bg-opacity-70 mt-2 md:mt-0"
        >
          <Play className="hidden lg:inline-block" />
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
          onClose={() => setSelectedPlayingMovieId(null)}
        />
      )}
      {moreInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          {/* Backdrop click handler if needed */}
          <div className="absolute inset-0" onClick={onClose} />

          <div className="relative z-10 bg-zinc-900 text-white p-6 rounded-lg max-w-2xl w-full">
            <SquareX
              onClick={onClose}
              className="absolute top-4 right-4 w-6 h-6 hover:text-red-500 cursor-pointer"
            />

            <div className="mb-4 text-lg">{overview}</div>

            <div className="text-xl font-bold mb-4">
              Movie Release Date: {release_date}
            </div>

            <div className="flex items-center justify-end space-x-2 mt-10 text-white">
              <Eye className="w-5 h-5" />
              <span>{popularity} M</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTitle;
