import React from "react";
import { FirstBox } from "./FirstBox";
import { SecondBox } from "./SecondBox";
import styles from "./MainData.module.css";
import { Dropdown } from "./Dropdown";

export const MainData = () => {
  return (
    <div className={styles.mainDataContainer}>
      <Dropdown />
      <FirstBox />
      <SecondBox />
    </div>
  );
};
