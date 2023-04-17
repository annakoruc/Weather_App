import { Raleway } from "next/font/google";
import { getData } from "./api/getData";
import { Footer, Sidebar, TodaysHightlights, WeekWeather } from "@/components";
import ButtonsToChangeUnit from "@/components/ButtonsToChangeUnit";

import "../styles/globals.scss";
import styles from "../styles/pageStyle.module.scss";
import { AppContext, ContextProvider } from "@/context/AppContext";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export default async function Home() {
  const date = await getData("Szczecin, poland");
  const todayDate = date.days[0];
  const currentWeather = date.currentConditions;
  const weekDate = date.days.slice(1, 6);

  return (
    <ContextProvider>
      <div className={`${raleway.className} ${styles.layout}`}>
        <Sidebar
          todayDate={todayDate}
          currentWeather={currentWeather}
          location={date.address}
        />
        <div className={styles.main_page}>
          <ButtonsToChangeUnit />
          <WeekWeather week={weekDate} />
          <TodaysHightlights todayDate={currentWeather} />
          <Footer />
        </div>
      </div>
    </ContextProvider>
  );
}
