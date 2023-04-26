import React from "react";

import styles from "../styles/components/WindDirStyle.module.scss";
import { WindIcon } from "@/assets/icons/WindIcon";

const Windrose = require("windrose");

type Props = {
  dir: number;
};

export const WindDir = ({ dir }: Props) => {
  const windDirection = Windrose.getPoint(dir, { depth: 2 });

  return (
    <div className={styles.windDir}>
      <div style={{ transform: `rotate(${dir - 180}deg)` }}>
        <WindIcon />
      </div>
      <p>{windDirection.symbol} </p>
    </div>
  );
};
