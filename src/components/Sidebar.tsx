import Image from "next/image";
import React from "react";

import styles from "../styles/components/SidebarStyle.module.scss";
import location from "../../public/icons/location.svg";
import { WeatherIcon } from "./WeatherIcon";
import { LocationIcon } from "../../public/icons/LocationIcon";

type Props = {
  todayDate: {
    datetime: string;
  };
  currentWeather: {
    temp: number;
    icon: string;
    conditions: string;
  };
  location: string;
};

export const Sidebar = ({ todayDate, currentWeather, location }: Props) => {
  let dayDate = new Date(todayDate.datetime);
  const tempC = ((currentWeather.temp - 32) / 1.8).toFixed(1);

  return (
    <div className={styles.sidebar}>
      <div>
        <button>Button</button>
        <button>Button</button>
      </div>
      <div className={styles.weather_img}>
        <div className={styles.background} />
        <WeatherIcon apiIcon={currentWeather.icon} width={210} height={200} />
      </div>
      <h1>
        <span>{tempC}</span>&deg;C
      </h1>
      <h2>{currentWeather.conditions}</h2>
      <div className={styles.todayDate}>
        <p>Today</p>
        <p> • </p>
        <p>{dayDate.toString().slice(0, 10)}</p>
      </div>
      <div className={styles.location}>
        <LocationIcon />
        <p>{location}</p>
      </div>
    </div>
  );
};
