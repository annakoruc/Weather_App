import {
  ButtonsToChangeUnit,
  Footer,
  TodaysHightlights,
  WeekWeather,
} from "@/components";

import "../styles/globals.scss";
import styles from "../styles/pageStyle.module.scss";

export default function Home() {
  return (
    <div className={styles.main_page}>
      <ButtonsToChangeUnit />
      <WeekWeather />
      <TodaysHightlights />
      <Footer />
    </div>
  );
}
