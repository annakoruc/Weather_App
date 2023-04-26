import { getCities } from "@/app/api/getCities";
import React, { useContext, useEffect, useState } from "react";

import styles from "../styles/components/ButtonChooseLocationStyle.module.scss";
import { SearchLocationIcon } from "@/assets/icons/SearchLocationIcon";
import { SearchBar } from "./SearchBar";
import { WeatherContext } from "@/context/WeatherContext";

export const ButtonChooseLocation = () => {
  const { setChoosenCity } = useContext(WeatherContext);
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);

  const openSearchBar = () => {
    setSearchBarIsOpen(!searchBarIsOpen);
  };

  const searchLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setChoosenCity(
        `${position.coords.latitude},${position.coords.longitude}`
      );
    });
  };
  return (
    <>
      {!searchBarIsOpen && (
        <div className={styles.buttons}>
          <button className={styles.chooseButton} onClick={openSearchBar}>
            Search for places
          </button>
          <button className={styles.gpsButton} onClick={searchLocation}>
            <SearchLocationIcon />
          </button>
        </div>
      )}

      {searchBarIsOpen && <SearchBar onClick={openSearchBar} />}
    </>
  );
};
