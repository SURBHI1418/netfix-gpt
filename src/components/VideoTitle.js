import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[13%] px-24 absolute text-white  bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black p-4 px-12 text-xl flex items-center rounded-lg hover:bg-opacity-70">
          <Play />
          <span className="ml-2">Play</span>
        </button>

        <button className="bg-gray-500 text-white p-4 px-12 text-xl flex items-center bg-opacity-50 rounded-lg hover:bg-opacity-95">
          <Info />
          <span className="ml-2">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
