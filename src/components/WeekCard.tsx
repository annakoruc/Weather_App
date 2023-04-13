import Image from "next/image";

import styles from "../styles/components/WeekCardStyle.module.scss";
import { WeatherIcon } from "./WeatherIcon";

type Props = {
  max: number;
  min: number;
  date: Date;
  icon: string;
  id: number;
};

export const WeekCard = ({ max, min, date, icon, id }: Props) => {
  let maxTempC = ((max - 32) / 1.8).toFixed(1);
  let minTempC = ((min - 32) / 1.8).toFixed(1);

  let dayDate = new Date(date).toString().slice(0, 10);

  const weekDay = id === 0 ? "Tomorrow" : dayDate;

  return (
    <div className={styles.week_card}>
      <p>{weekDay}</p>
      <WeatherIcon apiIcon={icon} width={55} height={50} />
      <div className={styles.temp}>
        <p>{maxTempC} &deg;C</p>
        <p>{minTempC} &deg;C</p>
      </div>
    </div>
  );
};
