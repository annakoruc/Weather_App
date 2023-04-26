import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherContext";

import { WeatherIcon } from "./WeatherIcon";
import { TempWithUnits } from "./TempWithUnits";
import { ButtonChooseLocation } from "./ButtonChooseLocation";

import { LocationIcon } from "@/assets/icons/LocationIcon";
import styles from "../styles/components/SidebarStyle.module.scss";

export const Sidebar = () => {
  const { todayDate, currentWeather, city } = useContext(WeatherContext);
  let dayDate = new Date(todayDate.datetime);

  const showNameOfLocation = () => {
    const hasNumber = /\d/;

    return hasNumber.test(city) ? "My location" : city;
  };

  return (
    <div className={styles.sidebar}>
      <ButtonChooseLocation />
      <div className={styles.weather_img}>
        <div className={styles.background} />
        <WeatherIcon apiIcon={currentWeather.icon} />
      </div>
      <TempWithUnits className={styles.tempHeight} temp={currentWeather.temp} />
      <h2>{currentWeather.conditions}</h2>
      <div className={styles.todayDate}>
        <p>Today</p>
        <p> • </p>
        <p>{dayDate.toString().slice(0, 10)}</p>
      </div>
      <div className={styles.location}>
        <LocationIcon />
        <p>{showNameOfLocation()}</p>
      </div>
    </div>
  );
};
