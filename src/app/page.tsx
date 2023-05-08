"use client";

import { useContext, useEffect } from "react";
import { getData } from "./api/getData";
import {
  Footer,
  Sidebar,
  TodaysHightlights,
  WeekWeather,
  ButtonsToChangeUnit,
} from "@/components";
import { WeatherContext } from "@/context/WeatherContext";

import "../styles/globals.scss";
import styles from "../styles/pageStyle.module.scss";

export default function Home() {
  const {
    city,
    setNewCurrentWeather,
    currentWeather,
    setCurrentDate,
    setCurrentWeek,
  } = useContext(WeatherContext);

  useEffect(() => {
    getData(city).then((data) => {
      setCurrentDate(data?.days[0]);
      setNewCurrentWeather(data?.currentConditions);
      setCurrentWeek(data?.days.slice(1, 6));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main_page}>
        <ButtonsToChangeUnit />
        <WeekWeather />
        <TodaysHightlights />
        <Footer />
      </div>
    </div>
  );
}
