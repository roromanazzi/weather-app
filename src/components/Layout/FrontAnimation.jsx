import React, { Fragment } from "react";
import clouds from "../../assets/img/cloudpng.png";
import styles from "./FrontAnimation.module.css";

export const FrontAnimation = () => {
  return (
    <Fragment>
      <img src={clouds} className={styles.imgOne} />
    </Fragment>
  );
};
