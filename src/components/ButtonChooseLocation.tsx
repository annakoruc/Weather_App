import { getCities } from "@/app/api/getCities";
import React, { useEffect, useState } from "react";

import { SearchLocationIcon } from "../../public/icons/SearchLocationIcon";
import styles from "../styles/components/ButtonChooseLocationStyle.module.scss";

export const ButtonChooseLocation = () => {
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities().then((data) => {
      setCities(data.data);
    });
  }, []);

  const openSearchBar = () => {
    setSearchBarIsOpen(!searchBarIsOpen);
  };

  return (
    <>
      {!searchBarIsOpen && (
        <div className={styles.buttons}>
          <button className={styles.chooseButton} onClick={openSearchBar}>
            Search for places
          </button>
          <button className={styles.gpsButton}>
            <SearchLocationIcon />
          </button>
        </div>
      )}

      {searchBarIsOpen && (
        <div className={styles.searchBar}>
          <button onClick={openSearchBar}>X</button>
          <div className={styles.inputChoose}>
            <input placeholder="search location" />
            <button>Search</button>
          </div>
        </div>
      )}
    </>
  );
};
