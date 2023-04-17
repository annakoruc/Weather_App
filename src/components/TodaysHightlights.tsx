import React, { useContext, useEffect } from "react";

import styles from "../styles/components/TodaysHightlightsStyle.module.scss";
import { PercentageScale } from "./PercentageScale";
import { WindDir } from "./WindDir";

type Props = {
  todayDate: {
    temp: number;
    windspeed: number;
    winddir: number;
    humidity: number;
    visibility: number;
    pressure: number;
  };
};

export const TodaysHightlights = ({ todayDate }: Props) => {
  return (
    <div className={styles.container}>
      <h3>Today&apos;s Hightlights</h3>
      <div className={styles.hightlights}>
        <div className={styles.wind}>
          <h4>Wind Status</h4>
          <p className={styles.unitsText}>
            <span>{todayDate.windspeed}</span> mph
          </p>
          <WindDir dir={todayDate.winddir} />
        </div>

        <div className={styles.humidity}>
          <h4>Humidity</h4>
          <p className={styles.unitsText}>
            <span>{todayDate.humidity}</span> %
          </p>
          <PercentageScale percent={todayDate.humidity} />
        </div>
        <div className={styles.visibility}>
          <h4>Visibility</h4>
          <p className={styles.unitsText}>
            <span>{todayDate.visibility}</span> miles
          </p>
        </div>
        <div className={styles.air}>
          <h4>Air Pressure</h4>
          <p className={styles.unitsText}>
            <span>{todayDate.pressure}</span> mb
          </p>
        </div>
      </div>
    </div>
  );
};
