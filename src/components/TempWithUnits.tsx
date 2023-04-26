import { UnitsContext } from "@/context/UnitsContext";
import { useContext } from "react";

type Props = {
  temp: number;
  className?: string;
};

export const TempWithUnits = ({ temp, className }: Props) => {
  const { units } = useContext(UnitsContext);

  const tempC = ((temp - 32) / 1.8).toFixed(1);

  if (units === "fahrenheit") {
    return (
      <p className={className}>
        <span>{temp}</span>&deg;F
      </p>
    );
  } else {
    return (
      <p className={className}>
        <span>{tempC}</span>&deg;C
      </p>
    );
  }
};
