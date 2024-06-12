import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-[20%] md:pt-[25%] px-16 absolute w-screen aspect-video bg-gradient-to-r from-black text-white">
      <h1 className="text-xl md:text-5xl font-extrabold">{title}</h1>
      <p className="hidden md:inline-block w-1/2 pt-5">{overview}</p>
      <div className="flex my-2 md:m-0 pt-2 md:pt-10">
        <button className="bg-white text-black px-2 mx-2 md:px-6 md:py-3 rounded-md hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-600 text-white p-1 mx-1 md:px-6 md:mx-4 md:py-3 rounded-md hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
