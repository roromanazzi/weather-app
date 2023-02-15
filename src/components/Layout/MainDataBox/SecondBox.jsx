import React from "react";
import styles from "./SecondBox.module.css";

export const SecondBox = ({ humidity, windSpeed, pressure, visibility }) => {
  const data = [
    {
      title: "Humedad",
      unit: "%",
      value: humidity,
    },
    {
      title: "Viento",
      unit: "km/h",
      value: windSpeed,
    },
    {
      title: "Presión",
      unit: "Mb",
      value: pressure,
    },
    {
      title: "Visibilidad",
      unit: "km",
      value: visibility,
    },
  ];

  const dataList = data.map((data) => {
    return (
      <div key={data.title} className={styles.dataContainer}>
        <span className={styles.dataTitle}>{data.title}</span>
        <span className={styles.dataUnit}>
          {data.value}
          {data.unit}
        </span>
      </div>
    );
  });

  return <div className={styles.secondBoxContainer}>{dataList}</div>;
};
