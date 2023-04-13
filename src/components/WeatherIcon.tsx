import Image from "next/image";
import React from "react";

type Props = {
  apiIcon: string;
  width: number;
  height: number;
};

export const WeatherIcon = ({ apiIcon, width, height }: Props) => {
  const srcIcon = (icon: string) => {
    switch (icon) {
      case "clear-day":
      case "clear-night":
        return "/icons/Clear.png";
        break;
      case "snow":
        return "/icons/Hail.png";
        break;
      case "cloudy":
      case "fog":
      case "wind":
        return "/icons/HeavyCloud.png";
        break;
      case "rain":
        return "/icons/HeavyRain.png";
        break;
      case "partly-cloudy-day":
      case "partly-cloudy-night":
        return "/icons/LightCloud.png";
        break;
      case "showers-day":
      case "showers-night":
        return "/icons/Shower.png";
        break;
      case "snow-showers-day":
        return "/icons/Sleet.png";
        break;
      case "snow-showers-day":
      case "snow-showers-night":
        return "/icons/Sleet.png";
        break;
      case "thunder-rain":
      case "thunder-showers-day":
      case "thunder-showers-night":
        return "/icons/Thunderstorm.png";
        break;
      default:
        break;
    }
  };

  return (
    <Image
      src={srcIcon(apiIcon)!}
      width={width}
      height={height}
      alt="weather"
    />
  );
};
