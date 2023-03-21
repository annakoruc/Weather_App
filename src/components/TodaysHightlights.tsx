import React from "react";

import styles from "../styles/components/TodaysHightlightsStyle.module.scss";

export const TodaysHightlights = () => {
  return (
    <div className={styles.container}>
      <h3>Today&apos;s Hightlights</h3>
      <div className={styles.hightlights}>
        <div className={styles.wind}>Wind Status</div>
        <div className={styles.humidity}>Humidity</div>
        <div className={styles.visibility}>Visibility</div>
        <div className={styles.air}>Air Pressure</div>
      </div>
    </div>
  );
};
