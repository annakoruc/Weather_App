import React from "react";

import styles from "../styles/components/PercentageScaleStyle.module.scss";

type Props = {
  percent: number;
};

export const PercentageScale = ({ percent }: Props) => {
  return (
    <div className={styles.percentageScale}>
      <div className={styles.percent}>
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <div className={styles.scale}>
        <div className={styles.yellowScale} style={{ width: `${percent}%` }} />
      </div>
      <p>%</p>
    </div>
  );
};
