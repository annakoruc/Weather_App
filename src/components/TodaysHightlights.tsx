import React from "react";

import styles from "../styles/components/TodaysHightlightsStyle.module.scss";

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
          <p>{todayDate.windspeed}</p>
        </div>

        <div className={styles.humidity}>
          <h4>Humidity</h4>
          <p>{todayDate.humidity}</p>
        </div>
        <div className={styles.visibility}>
          <h4>Visibility</h4>
          <p>{todayDate.visibility}</p>
        </div>
        <div className={styles.air}>
          <h4>Air Pressure</h4>
          <p>{todayDate.pressure}</p>
        </div>
      </div>
    </div>
  );
};
