import styles from "../styles/components/SidebarStyle.module.scss";
import { WeatherIcon } from "./WeatherIcon";
import { LocationIcon } from "../../public/icons/LocationIcon";
import { TempWithUnits } from "./TempWithUnits";
import { ButtonChooseLocation } from "./ButtonChooseLocation";
import { ButtonSearchLocation } from "./ButtonSearchLocation";

type Props = {
  todayDate: {
    datetime: string;
  };
  currentWeather: {
    temp: number;
    icon: string;
    conditions: string;
  };
  location: string;
};

export const Sidebar = ({ todayDate, currentWeather, location }: Props) => {
  let dayDate = new Date(todayDate.datetime);

  return (
    <div className={styles.sidebar}>
      <ButtonChooseLocation />
      <div className={styles.weather_img}>
        <div className={styles.background} />
        <WeatherIcon apiIcon={currentWeather.icon} width={250} height={200} />
      </div>
      <TempWithUnits className={styles.tempHeight} temp={currentWeather.temp} />
      <h2>{currentWeather.conditions}</h2>
      <div className={styles.todayDate}>
        <p>Today</p>
        <p> • </p>
        <p>{dayDate.toString().slice(0, 10)}</p>
      </div>
      <div className={styles.location}>
        <LocationIcon />
        <p>{location}</p>
      </div>
    </div>
  );
};
