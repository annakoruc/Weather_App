import { useContext } from "react";
import { WeekCard } from "./WeekCard";

import styles from "../styles/components/WeekWeatherStyle.module.scss";
import { WeatherContext } from "@/context/WeatherContext";

export const WeekWeather = () => {
  const { week } = useContext(WeatherContext);

  return (
    <div className={styles.week_weather}>
      {week.map((el: any) => {
        return (
          <WeekCard
            id={el.id}
            key={el.datetime}
            date={el.datetime}
            max={el.tempmax}
            min={el.tempmin}
            icon={el.icon}
          />
        );
      })}
    </div>
  );
};
