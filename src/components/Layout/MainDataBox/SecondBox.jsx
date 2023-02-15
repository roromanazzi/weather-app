import React from "react";
import styles from "./SecondBox.module.css";

export const SecondBox = () => {
  const data = [
    {
      title: "Humedad",
      unit: "%",
    },
    {
      title: "Viento",
      unit: "km/h",
    },
    {
      title: "Presión",
      unit: "Mb",
    },
    {
      title: "Visibilidad",
      unit: "km",
    },
  ];

  const dataList = data.map((data) => {
    return (
      <div className={styles.dataContainer}>
        <span className={styles.dataTitle}>{data.title}</span>
        <span className={styles.dataUnit}>{data.unit}</span>
      </div>
    );
  });

  return <div className={styles.secondBoxContainer}>{dataList}</div>;
};
