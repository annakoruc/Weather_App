"use client";

import { createContext, ReactNode, useState } from "react";

type AppContextType = {
  units: string;
  toCelsius: () => void;
  toFahrenheit: () => void;
};

export const AppContext = createContext<AppContextType>({
  units: "celsius",

  toCelsius: () => {},
  toFahrenheit: () => {},
});

type Props = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: Props) => {
  const [units, setUnits] = useState<string>("celsius");

  const toCelsius = async () => {
    await setUnits("celsius");
    console.log(units);
  };

  const toFahrenheit = async () => {
    await setUnits("fahrenheit");
    console.log(units);
  };

  return (
    <AppContext.Provider value={{ units, toCelsius, toFahrenheit }}>
      {children}
    </AppContext.Provider>
  );
};
