import { useState, useEffect, useContext, useRef } from "react";
import { getCities } from "@/app/api/getCities";

import { CloseButton } from "../assets/icons/CloseButton";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import styles from "../styles/components/SearchBarStyle.module.scss";
import { WeatherContext } from "@/context/WeatherContext";

type Props = {
  onClick: () => void;
};

export const SearchBar = ({ onClick }: Props) => {
  const { setChoosenCity } = useContext(WeatherContext);

  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState("");

  const [searchedCities, setSearchedCities] = useState([]);
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    getCities().then((data) => {
      const poland = data.data.filter((obj: { country: string }) => {
        if (obj.country === "Poland") {
          setCountry("Poland");
          return { obj };
        }
      });

      setCities(poland[0].cities);
    });
  }, [inputRef]);

  const changeSelectCity = (event: React.MouseEventHandler<HTMLLIElement>) => {
    setChoosenCity(event.target.title);
    onClick();
  };

  const changeHandler = () => {
    const inputValue = inputRef.current.value;

    if (inputValue.length > 0) {
      const mainSearchRegex = new RegExp(inputValue, "i");
      const newSearch = cities.filter((el) => mainSearchRegex.test(el));
      console.log("jest");
      setSearchedCities(newSearch);
    }
  };

  return (
    <div className={styles.searchBar}>
      <CloseButton onClick={onClick} />
      <label className={styles.inputChoose}>
        <div>
          <SearchIcon />
          <input
            type="search"
            ref={inputRef}
            placeholder="search location"
            // list="cities"
          />
        </div>
        <button onClick={changeHandler}>Search</button>
      </label>
      <ul>
        {searchedCities.map((city) => (
          <li
            key={city}
            onClick={changeSelectCity}
            title={`${city}, ${country}`}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};
