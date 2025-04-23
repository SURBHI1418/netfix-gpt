import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[13%] px-6 md:px-24 absolute text-white  md:bg-gradient-to-r from-black mt-20">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black py-2 md:py-4 px:2 md:px-12 text-sm md:text-xl flex items-center rounded-lg hover:bg-opacity-70 mt-2 md:mt-0">
          <Play className="hidden md:inline-block" />
          <span className="px-7 md:px-0 md:ml-2">Play</span>
        </button>

        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl flex items-center bg-opacity-50 rounded-lg hover:bg-opacity-95">
          <Info />
          <span className="ml-2">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
