import { createContext } from "react";

type UnitsContextType = {
  units: string;
  toCelsius: () => void;
  toFahrenheit: () => void;
};

export const UnitsContext = createContext<UnitsContextType>({
  units: "celsius",
  toCelsius: () => {},
  toFahrenheit: () => {},
});
