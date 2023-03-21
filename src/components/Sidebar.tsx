import Image from "next/image";
import React from "react";

import styles from "../styles/components/SidebarStyle.module.scss";
import location from "../../public/icons/location.svg";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <input />
        <button>Button</button>
      </div>
      <div className={styles.weather_img}>
        <Image src="/icons/Clear.png" alt="image" width={100} height={100} />
      </div>
      <h1>
        <span>15</span>&deg;C
      </h1>
      <h2>Shower</h2>
      <div>
        <p>Today</p>
        <p>Fri, 5 Jun</p>
      </div>
      <div className={styles.location}>
        <Image
          src="/icons/location.svg"
          alt="location"
          width={30}
          height={30}
        />
        <p>Helsinki</p>
      </div>
    </div>
  );
};
