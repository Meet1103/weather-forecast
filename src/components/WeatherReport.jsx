// React Imports
import React from "react";

// React Icons Imports
import { BsEye, BsWater, BsThermometer, BsWind } from "react-icons/bs";
import { TbTemperatureCelsius } from "react-icons/tb";

// Util Function Imports
import { getTodayDate } from "../utils/getTodayDate";
import { displayIcon } from "../utils/displayIcon";

const WeatherReport = ({ weatherData }) => {
  return (
    <div className=" flex flex-col w-full max-w-[450px] min-h-[584px] bg-black/20 text-white backdrop-blur-[32px] rounded-md py-10 px-6">
      <div className="flex items-center gap-x-5">
        <div className="text-[87px]">
          {displayIcon(weatherData?.weather?.[0]?.main)}
        </div>
        <div className="flex flex-col gap-y-1 text-2xl font-semibold tracking-wider">
          <span>
            {weatherData?.name}, {weatherData?.sys?.country}
          </span>
          <span>{getTodayDate()}</span>
        </div>
      </div>

      <div className="flex flex-col items-center my-20">
        <div className="flex">
          <span className="text-[144px] leading-none font-light">
            {parseInt(weatherData?.main?.temp)}
          </span>
          <span className="text-4xl">
            <TbTemperatureCelsius />
          </span>
        </div>
        <div className="capitalize text-2xl tracking-wider">
          {weatherData?.weather[0]?.description}
        </div>
      </div>

      <div className="flex flex-col gap-y-6 max-w-full">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <div className="text-[20px]">
              <BsEye />
            </div>
            <div>
              Visibility
              <span className="ml-2">{weatherData?.visibility / 1000} km</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="text-[20px]">
              <BsThermometer />
            </div>
            <div className="flex">
              Feels like
              <span className="flex ml-2">
                {parseInt(weatherData?.main?.feels_like)}
                <TbTemperatureCelsius />
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <div className="text-[20px]">
              <BsWater />
            </div>
            <div>
              Humidity
              <span className="ml-2">{weatherData?.main?.humidity} %</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="text-[20px]">
              <BsWind />
            </div>
            <div>
              Wind
              <span className="ml-2">{weatherData?.wind?.speed} m/s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;

/*


*/
