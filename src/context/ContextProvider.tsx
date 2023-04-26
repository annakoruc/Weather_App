"use client";

import { ReactNode, useState } from "react";
import { UnitsContext } from "./UnitsContext";
import { WeatherContext } from "./WeatherContext";

type Props = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: Props) => {
  const [units, setUnits] = useState<string>("celsius");
  const [city, setCity] = useState<string>("Warsaw, Poland");

  const [todayDate, setTodayDate] = useState({ datetime: "" });
  const [currentWeather, setCurrentWeather] = useState({
    temp: 0,
    icon: "",
    conditions: "",
    windspeed: 0,
    winddir: 0,
    humidity: 0,
    visibility: 0,
    pressure: 0,
  });
  const [week, setWeek] = useState([]);

  const toCelsius = () => {
    setUnits("celsius");
    console.log(units);
  };

  const toFahrenheit = () => {
    setUnits("fahrenheit");
    console.log(units);
  };

  const setChoosenCity = (newCity: string) => {
    setCity(newCity);
  };

  const setCurrentDate = (newDate: { datetime: string }) => {
    setTodayDate(newDate);
  };

  const setNewCurrentWeather = (newWeather: {
    temp: number;
    icon: string;
    conditions: string;
    windspeed: number;
    winddir: number;
    humidity: number;
    visibility: number;
    pressure: number;
  }) => {
    setCurrentWeather(newWeather);
  };

  const setCurrentWeek = (currentWeek: []) => {
    setWeek(currentWeek);
  };

  return (
    <WeatherContext.Provider
      value={{
        todayDate,
        setCurrentDate,
        currentWeather,
        setNewCurrentWeather,
        week,
        setCurrentWeek,
        city,
        setChoosenCity,
      }}
    >
      <UnitsContext.Provider value={{ units, toCelsius, toFahrenheit }}>
        {children}
      </UnitsContext.Provider>
    </WeatherContext.Provider>
  );
};
