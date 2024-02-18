// React Imports
import React from "react";

// React Icons Imports
import { TiWeatherPartlySunny } from "react-icons/ti";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full max-w-[450px] bg-black/20 min-h-[584px] text-white backdrop-blur-[32px] rounded-md py-12 px-6">
      <TiWeatherPartlySunny className="animate-ping  text-6xl" />
    </div>
  );
};

export default Loading;
