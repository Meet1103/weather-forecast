import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from "react-icons/io";

import { BsCloudHaze2Fill, BsCloudDrizzleFill } from "react-icons/bs";

export const displayIcon = (weatherDescription) => {
  let icon;

  switch (weatherDescription) {
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      icon = <IoMdRainy className="text-[#31cafb]" />;
      break;
    case "Clear":
      icon = <IoMdSunny className="text-[#ffde33]" />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill className="text-[#31cafb]" />;
      break;
    case "Snow":
      icon = <IoMdSnow className="text-[#31cafb]" />;
      break;
    case "ThunderStorm":
      icon = <IoMdThunderstorm />;
      break;
    default:
      icon = <IoMdSunny className="text-[#ffde33]" />;
  }

  return icon;
};
