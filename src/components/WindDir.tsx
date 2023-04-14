import React from "react";
import { WindIcon } from "../../public/icons/WindIcon";
import Windrose from "windrose";
import styles from "../styles/components/WindDirStyle.module.scss";

type Props = {
  dir: number;
};

export const WindDir = ({ dir }: Props) => {
  const windDirection = Windrose.getPoint(dir, { depth: 2 });
  console.log(dir);
  return (
    <div className={styles.windDir}>
      <div style={{ transform: `rotate(${dir - 180}deg)` }}>
        <WindIcon />
      </div>
      <p>{windDirection.symbol} </p>
    </div>
  );
};
