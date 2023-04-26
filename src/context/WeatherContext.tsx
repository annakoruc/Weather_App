import { createContext } from "react";

type WeatherContextType = {
  todayDate: {
    datetime: string;
  };
  setCurrentDate: (newDate: { datetime: string }) => void;
  currentWeather: {
    temp: number;
    icon: string;
    conditions: string;
    windspeed: number;
    winddir: number;
    humidity: number;
    visibility: number;
    pressure: number;
  };
  setNewCurrentWeather: (newWeather: {
    temp: number;
    icon: string;
    conditions: string;
    windspeed: number;
    winddir: number;
    humidity: number;
    visibility: number;
    pressure: number;
  }) => void;
  week: any;
  setCurrentWeek: (currentWeek: []) => void;
  city: string;
  setChoosenCity: (newCity: string) => void;
};

export const WeatherContext = createContext<WeatherContextType>({
  todayDate: {
    datetime: "",
  },
  setCurrentDate: () => {},
  currentWeather: {
    temp: 0,
    icon: "",
    conditions: "",
    windspeed: 0,
    winddir: 0,
    humidity: 0,
    visibility: 0,
    pressure: 0,
  },
  setNewCurrentWeather: () => {},
  week: [],
  setCurrentWeek: () => {},
  city: "",
  setChoosenCity: () => {},
});
