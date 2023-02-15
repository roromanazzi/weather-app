import React from "react";
import { FirstBox } from "./FirstBox";
import { SecondBox } from "./SecondBox";
import styles from "./MainData.module.css";
import { Dropdown } from "./Dropdown";
import useCurrentWeather from "../../../hooks/use-current-weather";
import { useState } from "react";
import { Loading } from "../../UI/Loading";

export const MainData = () => {
  // const [currCity, setCurrCity] = useState("");

  const [data] = useCurrentWeather("Mar del Plata");

  if (!data) return <Loading />;

  const { weatherType, temp, pressure, humidity, visibility, windSpeed } = data;

  return (
    <div className={styles.mainDataContainer}>
      <Dropdown />
      <FirstBox weatherType={weatherType} temp={temp} />
      <SecondBox
        pressure={pressure}
        humidity={humidity}
        visibility={visibility}
        windSpeed={windSpeed}
      />
    </div>
  );
};
