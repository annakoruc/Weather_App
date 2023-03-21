import Image from "next/image";

import styles from "../styles/components/WeekCardStyle.module.scss";

export const WeekCard = () => {
  return (
    <div className={styles.week_card}>
      <p>Mon, 8 Jun</p>
      <Image src="/icons/LightRain.png" width={50} height={50} alt="weather" />
      <div className={styles.temp}>
        <p>16 &deg;C</p>
        <p>11 &deg;C</p>
      </div>
    </div>
  );
};
