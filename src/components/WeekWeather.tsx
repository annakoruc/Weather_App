import React from "react";
import { WeekCard } from "./WeekCard";

import styles from "../styles/components/WeekWeatherStyle.module.scss";

export const WeekWeather = () => {
  return (
    <div className={styles.week_weather}>
      <WeekCard />
      <WeekCard />
      <WeekCard />
      <WeekCard />
      <WeekCard />
    </div>
  );
};
