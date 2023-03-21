import styles from "../styles/components/ButtonsToChangeUnitStyle.module.scss";

export const ButtonsToChangeUnit = () => {
  return (
    <div className={styles.buttons_container}>
      <button>&deg;C</button>
      <button>&deg;F</button>
    </div>
  );
};
