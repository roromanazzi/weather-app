import React from "react";
import styles from "./FirstBox.module.css";
import { TbSun } from "react-icons/tb";

export const FirstBox = () => {
  return (
    <div className={styles.firstBoxContainer}>
      <div className={styles.actWeatherContainer}>
        <div className={styles.actualWeatherIcon}>
          <TbSun />
        </div>
        <h1 className={styles.actualTemperature}>26°</h1>
      </div>
      <div className={styles.actualWeatherTitle}>
        <h2>Soleado</h2>
      </div>
      <div className={styles.dayNightContainer}>
        <div className={styles.dayTContainer}>
          <h3>Día</h3>
          <h4>23°</h4>
        </div>
        <div className={styles.nightTContainer}>
          <h3>Noche</h3>
          <h4>7°</h4>
        </div>
      </div>
    </div>
  );
};
