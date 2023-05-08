import React, { useContext } from "react";

import styles from "../styles/components/TodaysHightLightsStyle.module.scss";
import { PercentageScale } from "./PercentageScale";
import { WindDir } from "./WindDir";
import { WeatherContext } from "@/context/WeatherContext";

export const TodaysHightlights = () => {
  const { currentWeather } = useContext(WeatherContext);

  return (
    <div className={styles.container}>
      <h3>Today&apos;s Hightlights</h3>
      <div className={styles.hightlights}>
        <div className={styles.wind}>
          <h4>Wind Status</h4>
          <p className={styles.unitsText}>
            <span>{currentWeather.windspeed}</span> mph
          </p>
          <WindDir dir={currentWeather.winddir} />
        </div>

        <div className={styles.humidity}>
          <h4>Humidity</h4>
          <p className={styles.unitsText}>
            <span>{currentWeather.humidity}</span> %
          </p>
          <PercentageScale percent={currentWeather.humidity} />
        </div>
        <div className={styles.visibility}>
          <h4>Visibility</h4>
          <p className={styles.unitsText}>
            <span>{currentWeather.visibility}</span> miles
          </p>
        </div>
        <div className={styles.air}>
          <h4>Air Pressure</h4>
          <p className={styles.unitsText}>
            <span>{currentWeather.pressure}</span> mb
          </p>
        </div>
      </div>
    </div>
  );
};
