"use client";

import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

import styles from "../styles/components/ButtonsToChangeUnitStyle.module.scss";

const ButtonsToChangeUnit = () => {
  let { units, toCelsius, toFahrenheit } = useContext(AppContext);

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

export default ButtonsToChangeUnit;
