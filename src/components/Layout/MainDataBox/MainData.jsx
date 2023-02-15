import React from "react";
import { FirstBox } from "./FirstBox";
import { SecondBox } from "./SecondBox";
import styles from "./MainData.module.css";
import { Dropdown } from "./Dropdown";
import useCurrentWeather from "../../../hooks/use-current-weather";

export const MainData = () => {
  const [data] = useCurrentWeather("Buenos Aires");

  if (!data) return <p>cargando................</p>;

  const { weatherType, temp, pressure, humidity, visibility, windSpeed } = data;

  return (
    <div className={styles.mainDataContainer}>
      <Dropdown />
      <FirstBox weatherType={weatherType} temp={temp} />
      <SecondBox pressure={pressure} humidity={humidity} visibility={visibility} windSpeed={windSpeed} />
    </div>
  );
};
