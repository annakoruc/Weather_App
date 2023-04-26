"use client";

import { useContext } from "react";
import { UnitsContext } from "@/context/UnitsContext";

import styles from "../styles/components/ButtonsToChangeUnitStyle.module.scss";

export const ButtonsToChangeUnit = () => {
  let { units, toCelsius, toFahrenheit } = useContext(UnitsContext);

  return (
    <div className={styles.buttons_container}>
      <button
        className={units === "celsius" ? `${styles.active}` : ""}
        onClick={toCelsius}
      >
        &deg;C
      </button>
      <button
        className={units === "fahrenheit" ? `${styles.active}` : ""}
        onClick={toFahrenheit}
      >
        &deg;F
      </button>
    </div>
  );
};

// export default ButtonsToChangeUnit;
