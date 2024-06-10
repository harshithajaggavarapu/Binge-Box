import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[25%] px-16 absolute w-screen aspect-video bg-gradient-to-r from-black text-white">
      <h1 className="text-5xl font-extrabold">{title}</h1>
      <p className="w-1/2 pt-5">{overview}</p>
      <div className="flex pt-10">
        <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-600 text-white px-6 mx-4 py-3 rounded-md hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
